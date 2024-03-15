import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
import { Button } from "./ui/button"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
  

const ProjectComponent = (
    {project}:
    {project: {
        title: string;
        link: string;
        hability: string[];
        shortDesc: string;
        longDesc: string;
        skills: string[];
        images: string[];
    } | {
        title: string;
        hability: string[];
        shortDesc: string;
        longDesc: string;
        skills: string[];
        images: string[];
        link?: undefined;
    }}
) => {

    return(
        
        <div className="rounded-xl border-2 p-4 max-h-[26rem] grid grid-rows-10 z-0">
            <h1 className="font-bold pb-2 row-span-1">{project.title}</h1>
            <div className="px-8 py-8 row-span-7">
                {project.images && project.images.length > 0 && (
                    <img
                        className="rounded-lg object-cover w-full h-56"
                        src={project.images[0]}
                        alt="Project Image"
                    />
                )}
            </div>
            <div className="text-sm flex row-span-2 items-start lg:items-center overflow-y-hidden">
                <p>{project.shortDesc}</p>
            
                <Drawer>
                    <DrawerTrigger><Button variant="outline">See more</Button></DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                        <DrawerTitle>{project.title}</DrawerTitle>
                        <DrawerDescription>
                            <p>{project.longDesc}</p>
                            <div className="flex pt-4">
                                {project.images && project.images.length > 0 && (
                                    <div className="w-full flex justify-center items-center">
                                        <Carousel className="w-full max-w-xl flex justify-center items-center">
                                            <CarouselContent>
                                                {project.images.map((photo, index) => (
                                                    <div key={index}>
                                                        <CarouselItem >
                                                            <div className="flex justify-center items-center h-full">
                                                                <Image
                                                                    height={1000}
                                                                    width={1000}
                                                                    className="rounded-xl shadow-md object-cover"
                                                                    alt="Project Image"
                                                                    src={photo}
                                                                />
                                                            </div>
                                                        </CarouselItem>
                                                    </div>
                                                ))}
                                            </CarouselContent>
                                            <CarouselPrevious />
                                            <CarouselNext />
                                        </Carousel>
                                    </div>
                                )}
                                <div className="w-full flex justify-start items-center">
                                    <ul>
                                        {project.skills.map((feature, index) => (
                                            <li key={index}>
                                                <div className="flex justify-start items-center">
                                                    <Check className="w-4 h-4"/>
                                                    <span className="pl-2">{feature}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                            {project.link ? (
                                <div className="flex w-full">
                                    <div className="w-full">
                                        <Link href={project.link} target="_blank">
                                            <Button variant="outline">
                                                <span className="pr-2">Visit</span>
                                                <ArrowRight className="w-4 h-4"/>
                                            </Button>
                                        </Link>
                                    </div>
                                    <div className="w-full flex justify-end">
                                        <DrawerClose className="mr-2">
                                            <Button variant="outline">Go back</Button>
                                        </DrawerClose>
                                    </div>
                                </div>
                            ) : (
                                <DrawerClose className="mr-2">
                                    <Button variant="outline">Go back</Button>
                                </DrawerClose>
                            )}
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
        </div>
    )
}

export default ProjectComponent
