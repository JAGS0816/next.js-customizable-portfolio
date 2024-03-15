import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Button } from "@/components/ui/button"
import { personalInfo, resumeInfo } from "@/config/PortfolioConfig"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const CourseCard = (
    {position}: 
    {position: {
        name: string;
        company: string;
        date: string;
        credentialID: string;
        skills: string[];
        link: string;
    } | {
        name: string;
        company: string;
        date: string;
        credentialID: string;
        skills: string[];
        link?: undefined;
    }}) => 
            {
    return (
        <div className="p-8 group grid grid-cols-8 md:flex md:flex-col lg:grid lg:grid-cols-8 hover:bg-neutral-50/5 rounded-xl space-x-14 sm:space-x-0 lg:space-x-14">
                                    
            <div className=" text-xs col-span-2">
                {position.date}
            </div>
            <div className="col-span-6">
                <div className=" group-hover:text-[#3adb0d92]">
                    {position.name}
                </div>
                <div className=" text-sm">
                    {position.company}
                </div>
                <div className=" text-xs">
                    ID: {position.credentialID}
                </div>
                <div className=" space-y-2">
                    {
                        position.skills
                        .map((item, index) => (
                            <div key={index}>
                                <Badge  className=" mr-2 hover:bg-green-500/10 text-[#3adb0d92]" variant={"outline"}>
                                    {item}
                                </Badge>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const Page = () => {
    return (
        <>
            <div className="sticky top-0 isolate">
                <div 
                aria-hidden="true" 
                className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-full">
                    <div 
                    style={{
                    clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4ea74271] to-[#3adb0d94] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"/>
                </div>
            </div>
        <MaxWidthWrapper className=" ">
            <div className="flex flex-col md:flex-row">
                <div className=" md:sticky top-0 w-fit py-24 shrink-0 pr-12 max-w-full md:max-w-sm lg:max-w-lg max-h-screen">
                    <div className=" text-5xl font-bold">{personalInfo.name + " " + personalInfo.lastName}</div>
                    <ul className="mt-3 text-lg flex-col justify-center items-center space-y-3">
                        {
                            personalInfo.titles
                            .map((item, index) => (
                                <li key={index} className="flex justify-left items-center hover:text-xl  duration-200">
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                    <div className=" pt-4">
                        <div className=" font-semibold text-base pb-2">
                            About
                        </div>
                        <div className=" text-sm text-left">
                            {personalInfo.description}
                        </div>
                        <div className=" flex pt-4 space-x-4">
                            {
                                personalInfo.socialNetworks
                                .map((socialNet, index) => (
                                    <div key={index}>
                                        <Link href={socialNet[1] as string} target="_blank" key={index}>
                                            <Button className=" z-0" variant={"ghost"}>
                                                {socialNet[0]}
                                            </Button>
                                        </Link>
                                    </div>
                                ))
                            }
                            
                            
                            </div>
                    </div>
                </div>
                <div className="w-fit lg:pl-12">
                    <div className=" text-lg font-semibold">
                        Work Experience
                    </div>
                    {
                        resumeInfo.experience
                        .map((position, index) => (
                            <div key={index} className="p-8 group grid grid-cols-8 md:flex md:flex-col lg:grid lg:grid-cols-8 hover:bg-neutral-50/5 rounded-xl space-x-14 sm:space-x-0 lg:space-x-14">
                                <div className=" text-xs col-span-2">
                                    {position.date}
                                </div>
                                <div className="col-span-6">
                                    <div className=" group-hover:text-[#3adb0d92]">
                                        {position.title + " - " + position.company}
                                    </div>
                                    <div className=" text-xs">
                                        {position.description}
                                    </div>
                                    <div className=" space-y-2">
                                        {
                                            position.technologies
                                            .map((item, index) => (
                                                <div key={index}>
                                                    <Badge className=" mr-2 hover:bg-green-500/10 text-[#3adb0d92]" variant={"outline"}>
                                                        {item}
                                                    </Badge>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className=" text-lg font-semibold">
                        Featured Projects
                    </div>
                    {
                        resumeInfo.projects
                        .map((position, index) => (
                            <div key={index} className="p-8 group grid grid-cols-8 md:flex md:flex-col lg:grid lg:grid-cols-8 hover:bg-neutral-50/5 rounded-xl space-x-14 sm:space-x-0 lg:space-x-14">
                                <div className=" text-xs col-span-2">
                                    {position.date}
                                </div>
                                <div className="col-span-6">
                                    <div className=" group-hover:text-[#3adb0d92]">
                                        {position.title + " - " + position.company}
                                    </div>
                                    <div className=" text-xs">
                                        {position.description}
                                    </div>
                                    <div className=" space-y-2">
                                        {
                                            position.technologies
                                            .map((item, index) => (
                                                <div key={index}>
                                                    <Badge className=" mr-2 hover:bg-green-500/10 text-[#3adb0d92]" variant={"outline"}>{item}</Badge>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className=" text-lg font-semibold">
                        Academic Information
                    </div>
                    {
                        resumeInfo.education
                        .map((position, index) => (
                            <div key={index} className="p-8 group grid grid-cols-8 md:flex md:flex-col lg:grid lg:grid-cols-8 hover:bg-neutral-50/5 rounded-xl space-x-14 sm:space-x-0 lg:space-x-14">
                                <div className=" text-xs col-span-2">
                                    {position.date}
                                </div>
                                <div className="col-span-6">
                                    <div className=" group-hover:text-[#3adb0d92]">
                                        {position.degree}
                                    </div>
                                    <div className=" text-sm">
                                        {position.institution}
                                    </div>
                                    <div className=" text-xs">
                                        {position.description}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className=" text-lg font-semibold">
                        Courses and Certifications
                    </div>
                    {
                        resumeInfo.coursesAndCert
                        .map((position, index) => (
                            <div key={index}>
                            {
                                position.link?
                                <a target={position.link?"_blank":"_self"} href={position.link??"#"}>
                                    <CourseCard position={position}/> 
                                </a>:
                                <CourseCard position={position}/>
                            }
                            </div>
                        ))
                    }
                </div>
            </div>
        </MaxWidthWrapper>
    </>

    )
}



export default Page