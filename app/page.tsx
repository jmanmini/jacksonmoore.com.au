"use client";
import SvgEl from "../src/svgEl";
import Image from "next/image";
import instagram_pic from "../public/instagram.jpeg";
import github_pic from "../public/coding.jpg";
import linkedin_pic from "../public/linkedin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ClientTypewriter from "../src/clientTypewriter";
import { Suspense } from "react";
export default async function Page() {
  // Forward fetched data to your Client Component
  return (
    <div>
      <SvgEl />
      <div className="relative z-0">
        <div className="container z-0 mx-auto columns-1 px-6 pt-20">
          <h1 className="bg-gradient-to-r from-blue from-20% to-yellow to-40% bg-clip-text pb-8 text-8xl font-[var(--font-league-spartan)] font-bold tracking-tighter text-transparent">
            Jackson Moore
          </h1>
          <div className="pb-4 text-4xl text-white">
            <Suspense
              fallback={
                <div className="pb-4 text-4xl text-white">Web Developer</div>
              }
            >
              <ClientTypewriter></ClientTypewriter>
            </Suspense>
          </div>
          <a
            className="text-slate-300 transition duration-200 ease-in-out hover:text-slate-400 "
            href="mailto:jacksonsamuelmoore@gmail.com"
          >
            jacksonsamuelmoore@gmail.com{" "}
            <FontAwesomeIcon
              className="inline h-4"
              icon={faUpRightFromSquare}
            />
          </a>
          <div className="grid grid-flow-row-dense grid-cols-1 gap-6 pt-4 md:grid-cols-3">
            <a
              className="group relative h-80 rounded-2xl"
              href="https://instagram.com/jacksonsamuelmoore"
            >
              <div className="absolute left-0 top-2 z-10 p-3">
                <p className=" font- text-xs font-bold text-neutral-300">
                  INSTAGRAM
                </p>
                <p className="text-xl text-white">Photography</p>
              </div>
              <FontAwesomeIcon
                className="absolute left-1/2 top-1/2 z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform place-self-center opacity-0 transition duration-300 ease-out group-hover:opacity-100"
                icon={faInstagram}
                color="white"
              />
              <Image
                src={instagram_pic}
                alt="Picture of a tree in a pink sunset as taken by Jackson Moore"
                fill={true}
                className="rounded-2xl object-cover transition duration-300 ease-out group-hover:brightness-50"
              />
            </a>
            <a
              className="group relative h-80 rounded-2xl"
              href="https://instagram.com/jacksonsamuelmoore"
            >
              <div className="absolute left-0 top-2 z-10 p-3">
                <p className=" font- text-xs font-bold text-neutral-300">
                  GITHUB
                </p>
                <p className="text-xl text-white">Projects</p>
              </div>
              <FontAwesomeIcon
                className="absolute left-1/2 top-1/2 z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform place-self-center opacity-0 transition duration-300 ease-out group-hover:opacity-100"
                icon={faGithub}
                color="white"
              />
              <Image
                src={github_pic}
                alt="Picture of a tree in a pink sunset as taken by Jackson Moore"
                fill={true}
                className="rounded-2xl object-cover transition duration-300 ease-out group-hover:brightness-50"
              />
            </a>
            <a
              className="group relative h-80 rounded-2xl"
              href="https://instagram.com/jacksonsamuelmoore"
            >
              <div className="absolute left-0 top-2 z-10 p-3">
                <p className=" font- text-xs font-bold text-neutral-300">
                  LINKEDIN
                </p>
                <p className="text-xl text-white">Experience</p>
              </div>
              <FontAwesomeIcon
                className="absolute left-1/2 top-1/2 z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform place-self-center opacity-0 transition duration-300 ease-out group-hover:opacity-100"
                icon={faLinkedin}
                color="white"
              />
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
    </div>
  );
}
