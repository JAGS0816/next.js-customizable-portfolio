import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import Link from "next/link";
import { personalInfo } from './../config/PortfolioConfig';

export default function Home() {
  return (
    <>
      <div className="relative isolate">
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-full">
            <div 
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4ea742] to-[#3adb0d] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"/>
        </div>
      </div>
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center overflow-x-hidden'>
        <div className="text-4xl sm:text-6xl xl:text-7xl font-extralight font-mono w-full flex flex-col md:flex md:flex-row justify-center items-center ">
          <div className="w-max shrink-0"><span className="text-neutral-800 dark:text-white">Hello, my name is {" "}</span></div>
          <div className="w-max">
            <div className=" text-green-500 animate-typing overflow-hidden text-left border-r-4 border-r-black dark:border-r-white w-fit pr-5 pl-4">{personalInfo.name}</div>
          </div>
        </div>
        <div className=" pt-16 text-lg z-0">
          {
            personalInfo.titles
            .map((title, index) => (
              <span key={index}><span className=" hover:text-green-300 duration-300">{title}</span>{index != personalInfo.titles.length-1 ? " | " : ""}</span>
            ))
          }
          <span></span>
        </div>
        <div className=" flex pt-4 space-x-4 ">
          {
            personalInfo.socialNetworks
            .map((socialNet, index) => (
              <div key={index}>
                <Link href={socialNet[1] as string} target="_blank">
                  <Button className=" z-0" variant={"outline"}>
                    {socialNet[0]}
                  </Button>
                </Link>
              </div>
            ))
          }
          
          
        </div>
      </MaxWidthWrapper>


    </>
  );
}
