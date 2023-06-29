'use client'
import Typewriter from 'typewriter-effect';
export default function ClientTypewriter() {
    return (

        <Typewriter
            options={{
                strings: ['Web Developer', 'Photographer', 'Student'],
                autoStart: true,
                loop: true,
            }}

        ></Typewriter>
    )

}