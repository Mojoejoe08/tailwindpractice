import { ArrowBigUpDashIcon } from "lucide-react"

export const Footer = () => {
    return <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
        <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DevJoe.co. All right reserved.
        </p>
        <a href="#hero" className="animate-bounce p-2 rounded-full bg-primary/10 hover:pg-primary/20 
        text-primary transition-colors"><ArrowBigUpDashIcon size={30}/></a>
    </footer>
}