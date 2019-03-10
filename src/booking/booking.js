import React from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import { InlineDatePicker } from 'material-ui-pickers';
import moment from 'moment'
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import Paper from '@material-ui/core/Paper';
import blue from "@material-ui/core/colors/blue";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import 'twix'
export default function Booking() {
    return (


        <BookStepper></BookStepper>
    )
}
const materialTheme = createMuiTheme({
    overrides: {

        MuiPickersDay: {
            day: {
                color: blue[500],
            },
        },
    }
});
class BookStepper extends React.Component {
    constructor() {
        super()
        var sizeInit = window.innerWidth < 450 ? "moblie" : "desktop"
        this.state = {
            activeStep: 0,
            user: null,
            fromDate: moment().add(1, 'days'),
            toDate: moment().add(1, 'days'),
            error2: false, //fromPicker
            error1: false, //toPicker
            error3: false, //guests
            message1: '',
            message2: '',
            message3: '',
            datesCorrect: true, //inversed value - used for diabled propety
            bookedDates: [],
            guestsCorrect: true,     //inversed value - used for diabled propety
            guests: 0,
            name: '',
            email: '',
            cost: 0,
            weekdays: 0,
            weekends: 0,
            size: sizeInit,
        };
        this.handleNext = this.handleNext.bind(this)
        this.handleBack = this.handleBack.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.verify = this.verify.bind(this)
        this.isDateDisabled = this.isDateDisabled.bind(this)
        this.handleGuestsChange = this.handleGuestsChange.bind(this)
        this.book = this.book.bind(this)
        this.getCost = this.getCost.bind(this)
        this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
    }
    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user, email: user.email, name: user.displayName });
            }
            else {
                this.setState({ user: null, activeStep: 0, email: '', name: '' });
            }
        })
        firebase.database().ref('/bookings/').on('value', (ref) => {
            for (var i in ref.val()) {
                this.setState(prev => ({
                    bookedDates: [...prev.bookedDates, { from: ref.val()[i]["from"], to: ref.val()[i]["to"] }]
                }))
            }
        })
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    handleWindowSizeChange() {
        if (window.innerWidth <= 450) {
            this.setState({ size: "mobile" });
        }
        else {
            this.setState({ size: "desktop" });
        }
    };
    handleNext() {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };
    handleBack() {
        this.setState({
            activeStep: this.state.activeStep - 1,
        });
    };
    handleDateChange(val, pickerNo) {
        if (pickerNo === 1) {
            this.setState({
                fromDate: val
            })
            this.verify(this.state.toDate, val)
        }
        if (pickerNo === 2) {
            this.setState({
                toDate: val
            })
            this.verify(val, this.state.fromDate)
        }

    }
    verify(toDate, fromDate) {
        var inBetweeny = false
        for (var i in this.state.bookedDates) {
            i = this.state.bookedDates[i]
            var from = moment(i['from'])
            var to = moment(i['to'])
            var dbRange = from.twix(to)
            var localRange = fromDate.twix(toDate)
            if (localRange.overlaps(dbRange) || localRange.engulfs(dbRange) || localRange.equals(dbRange)) {
                this.setState({
                    error1: true,
                    message1: "One or more dates are already booked in this period",
                    error2: true,
                    message2: "One or more dates are already booked in this period",
                    datesCorrect: true
                })
                inBetweeny = true
            }
            else {
                this.setState({
                    error1: false,
                    message1: "",
                    error2: false,
                    message2: "",
                    datesCorrect: false
                })
            }
        }
        if (toDate.isSameOrBefore(fromDate, 'day')) {
            this.setState({
                error2: true,
                message2: "You can't leave before you arrive",
                datesCorrect: true
            })
        }
        else if (inBetweeny) {
            return
        }
        else {
            this.setState({
                error2: false,
                message2: "",
                datesCorrect: false
            })
        }

    }
    isDateDisabled(date) {
        for (var i in this.state.bookedDates) {
            i = this.state.bookedDates[i]
            if (date.isSame(i['from']) || date.isSame(i['to']) || date.isBetween(i['from'], i['to'])) {
                return true
            }
        }
    }
    handleGuestsChange(val) {
        if (val.target.value > 10) {
            this.setState({
                guests: val.target.value,
                guestsCorrect: true,
                error3: true,
                message3: 'Only 10 people allowed'
            })
        }
        else if (val.target.value < 1) {
            this.setState({
                guests: val.target.value,
                guestsCorrect: true,
                error3: true,
                message3: 'Cannot have less than one guest'
            })
        }
        else {
            this.setState({
                guests: val.target.value,
                guestsCorrect: false,
                error3: false,
                message3: '',
            })
        }
    }
    getCost() {
        var localRange = this.state.fromDate.twix(this.state.toDate)
        var weekdays = 0
        var weekends = 0
        var arr = localRange.toArray('days')
        var cost = 0
        arr.forEach(element => {
            if (moment(element).day() === 5 || moment(element).day() === 6 || moment(element).day() === 0) {
                weekends += 1
            }
            else {
                weekdays += 1
            }
        });
        cost = weekdays * 50 + weekends * 60
        this.setState({
            cost: cost,
            weekends: weekends,
            weekdays: weekdays
        })
    }
    book() {
        var keyRef = firebase.database().ref('/bookings/').push()
        keyRef.set({
            "name": this.state.name,
            "email": this.state.email,
            "from": this.state.fromDate.format('YYYY-MM-DD'),
            "to": this.state.toDate.format('YYYY-MM-DD'),
            "guests": this.state.guests,
            "cost": this.state.cost
        })
        firebase.auth().currentUser.getIdToken().then((token) => {
            axios({
                url: '/booking/mail',
                method: 'post',
                baseURL: 'https://jacksonmoore.com.au/api/',
                data: {
                    key: keyRef.key,
                    token: token,
                },
            })
        })


    }
    render() {
        return (
            <div style={this.state.size === "desktop" ? { backgroundColor: "#eeeeee", height: "100%", minHeight: "calc(100vh - 64px)" } : {}}>
                <div style={this.state.size === "desktop" ? { margin: "24px", paddingTop: "24px", paddingBottom: "24px" } : {}}>
                    <Stepper activeStep={this.state.activeStep} orientation="vertical" elevation={this.state.size === "desktop" ? 1 : 0} style={this.state.size === "desktop" ? { borderRadius: "24px", maxWidth: "700px", margin: "0 auto" } : {}}>
                        <Step key='0'>
                            <StepLabel>Login</StepLabel>
                            <StepContent>
                                <Typography>Before you can book your stay, please login using your google account. If you don't have a google account, email us at booking@ckjom.com</Typography>
                                <div style={{ marginBottom: '8px' }}>
                                    <div>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleNext}
                                            style={{ marginTop: '4px', marginRight: '4px' }}
                                            disabled={!(this.state.user)}
                                        >
                                            Begin
                                </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                        <Step key='1'>
                            <StepLabel>Dates</StepLabel>
                            <StepContent>
                                <Typography>When would you like to stay?</Typography>
                                <div style={{ marginBottom: '8px' }}>
                                    <div>
                                        <MuiThemeProvider theme={materialTheme}>
                                            <InlineDatePicker
                                                onlyCalendar
                                                fullWidth
                                                label="From"
                                                onChange={(val) => this.handleDateChange(val, 1)}
                                                helperText={this.state.message1}
                                                error={this.state.error1}
                                                value={this.state.fromDate}
                                                minDate={moment().add(1, 'days')}
                                                shouldDisableDate={this.isDateDisabled}
                                            />
                                            <br />
                                            <InlineDatePicker
                                                onlyCalendar
                                                fullWidth
                                                label="To"
                                                onChange={(val) => this.handleDateChange(val, 2)}
                                                helperText={this.state.message2}
                                                error={this.state.error2}
                                                value={this.state.toDate}
                                                minDate={moment().add(1, 'days')}
                                                shouldDisableDate={this.isDateDisabled}
                                            />
                                        </MuiThemeProvider>
                                        <br />
                                        <br />


                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => { this.handleNext(); this.getCost() }}
                                            style={{ marginTop: '4px', marginRight: '4px' }}
                                            disabled={this.state.datesCorrect}

                                        >
                                            Next
                                </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                        <Step key='2'>
                            <StepLabel>Guests</StepLabel>
                            <StepContent>
                                <Typography>How many people are staying?<br />Please be aware the house only fits 10 people</Typography>
                                <div style={{ marginBottom: '8px' }}>
                                    <div>
                                        <TextField
                                            id="standard-number"
                                            label="Guests"
                                            inputProps={{ min: 1, max: 10 }}
                                            onChange={this.handleGuestsChange}
                                            type="number"
                                            fullWidth
                                            helperText={this.state.message3}
                                            error={this.state.error3}
                                        />
                                        <br />
                                        <br />
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleNext}
                                            style={{ marginTop: '4px', marginRight: '4px' }}
                                            disabled={this.state.guestsCorrect}

                                        >
                                            Next
                                </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                        <Step key='3'>
                            <StepLabel>Confirm</StepLabel>
                            <StepContent>
                                <Typography>Just to confirm, this is your booking:
                            <br />
                                    <b>Name:</b> {this.state.name}<br />
                                    <b>Email:</b> {this.state.email}<br /><br />
                                    <b>From:</b> {this.state.fromDate.format('YYYY-MM-DD')}<br />
                                    <b>To:</b> {this.state.toDate.format('YYYY-MM-DD')}<br />
                                    <b>With:</b> {this.state.guests} guest(s)<br />
                                    <hr></hr>
                                    <b>Total:</b>
                                    <div>
                                        {this.state.weekdays} weekdays x$50
                                <br></br>
                                        {this.state.weekends} weekends x$60
                                <br></br>
                                        =${this.state.cost}
                                    </div>
                                </Typography>
                                <div style={{ marginBottom: '8px' }}>
                                    <div>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => { this.handleNext(); this.book() }}
                                            style={{ marginTop: '4px', marginRight: '4px' }}
                                        >
                                            Confirm
                                </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                        <Step key='3'>
                            <StepLabel>Finish</StepLabel>
                            <StepContent>
                                <Typography>
                                    Your booking is in our calendar. You should receive a confirmation email shortly with your booking number and payment details.
                            <br></br>
                                    We hope you enjoy your stay!
                        </Typography>
                                <div style={{ marginBottom: '8px' }}>
                                    <div>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleNext}
                                            style={{ marginTop: '4px', marginRight: '4px' }}
                                        >
                                            Finish
                                </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    </Stepper>
                </div>
            </div>)
    }
}