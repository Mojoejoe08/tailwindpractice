import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import {cn} from "@/lib/utils";

export const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(()=>{
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            // Adjust this threshold as needed
            if ( scrollPosition > 10) { 
                setIsVisible(false); // Hide the div
            } else {
                setIsVisible(true);  // Show the div
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          // Cleanup the event listener when the component unmounts
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[])


    return <section 
        id="hero" 
        className="relative min-h-screen flex flex-col justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Christian Joe </span>
                        <span className="text-gradient opacity-0 animate-fade-in-delay-2"> Macasa </span>
                    </h1>
                    <p className="text-lg md:text-xl text-mute-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    a web developer
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            {isVisible  && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-100">
                <span className="text-sm text-muted-foreground mb-2"> Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>)}
        </section>;
};