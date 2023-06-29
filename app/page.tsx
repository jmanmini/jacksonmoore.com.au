'use client';
import SvgEl from "../src/svgEl"
import Image from 'next/image'
import instagram_pic from '../public/instagram.jpeg'
import github_pic from '../public/coding.jpg'
import linkedin_pic from '../public/linkedin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import ClientTypewriter from "../src/clientTypewriter";
import { Suspense } from 'react'
export default async function Page() {
    // Forward fetched data to your Client Component
    return (
        <div>
            <SvgEl />
            <div className="z-0 relative">

                <div className="container mx-auto z-0 columns-1 px-6 pt-20">
                    <h1 className="pb-8 text-transparent text-8xl font-bold font-[var(--font-league-spartan)] bg-clip-text bg-gradient-to-r from-blue from-20% to-yellow to-40%">Jackson Moore</h1>
                    <div className="text-white text-4xl pb-4">
                        <Suspense fallback={<div className="text-white text-4xl pb-4">Web Developer</div>}>
                            <ClientTypewriter></ClientTypewriter>
                        </Suspense>
                    </div>
                    <a className="text-slate-300 transition duration-200 ease-in-out hover:text-slate-400 " href="mailto:jacksonsamuelmoore@gmail.com">
                        jacksonsamuelmoore@gmail.com <FontAwesomeIcon className="h-4 inline" icon={faUpRightFromSquare} />
                    </a>
                    <div className="grid grid-flow-row-dense gap-6 grid-cols-1 md:grid-cols-3 pt-4">
                        <a className="group rounded-2xl relative h-80" href="https://instagram.com/jacksonsamuelmoore">
                            <div className="absolute p-3 top-2 left-0 z-10">
                                <p className=" text-neutral-300 text-xs font-bold font-">INSTAGRAM</p>
                                <p className="text-white text-xl">Photography</p>
                            </div>
                            <FontAwesomeIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 place-self-center z-10 h-16 w-16 opacity-0 transition duration-300 ease-out group-hover:opacity-100" icon={faInstagram} color="white" />
                            <Image
                                src={instagram_pic}
                                alt="Picture of a tree in a pink sunset as taken by Jackson Moore"
                                fill={true}
                                className="rounded-2xl object-cover transition duration-300 ease-out group-hover:brightness-50"
                            />
                        </a>
                        <a className="group rounded-2xl relative h-80" href="https://instagram.com/jacksonsamuelmoore">
                            <div className="absolute p-3 top-2 left-0 z-10">
                                <p className=" text-neutral-300 text-xs font-bold font-">GITHUB</p>
                                <p className="text-white text-xl">Projects</p>
                            </div>
                            <FontAwesomeIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 place-self-center z-10 h-16 w-16 opacity-0 transition duration-300 ease-out group-hover:opacity-100" icon={faGithub} color="white" />
                            <Image
                                src={github_pic}
                                alt="Picture of a tree in a pink sunset as taken by Jackson Moore"
                                fill={true}
                                className="rounded-2xl object-cover transition duration-300 ease-out group-hover:brightness-50"
                            />
                        </a>
                        <a className="group rounded-2xl relative h-80" href="https://instagram.com/jacksonsamuelmoore">
                            <div className="absolute p-3 top-2 left-0 z-10">
                                <p className=" text-neutral-300 text-xs font-bold font-">LINKEDIN</p>
                                <p className="text-white text-xl">Experience</p>
                            </div>
                            <FontAwesomeIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 place-self-center z-10 h-16 w-16 opacity-0 transition duration-300 ease-out group-hover:opacity-100" icon={faLinkedin} color="white" />
                            <Image
                                src={linkedin_pic}
                                alt="Picture of a tree in a pink sunset as taken by Jackson Moore"
                                fill={true}
                                className="rounded-2xl object-cover transition duration-300 ease-out group-hover:brightness-50"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}