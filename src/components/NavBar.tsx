import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "./ui/button"
import ThemeSwitch from "./ThemeSwitch"

const Navbar = async () => {

    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30  dark:bg-stone-950/50 w-full bg-white/50 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between">
                    <Link 
                        href="/" 
                        className="flex z-40 font-semibold">
                        <span className="font-semibold">Abraham García</span>
                    </Link>

                    
                    <div className=" items-center space-x-1 sm:space-x-4 flex">
                        <Link 
                            href="/resume"
                            className={buttonVariants({
                            variant: "ghost",
                            size: "sm"
                        })}>
                        Resume
                        </Link>
                        <Link
                            href="/projects"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm"
                            })}>
                            Projects
                        </Link>
                        
                    <ThemeSwitch/>   
                    </div>
                    
                    

                </div>
            </MaxWidthWrapper>
        </nav>
    )
}
export default Navbar