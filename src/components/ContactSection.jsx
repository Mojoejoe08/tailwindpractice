import { Facebook, Instagram, Linkedin, Mail, Map, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from '@/hooks/use-toast'

export const ContactSection = () => {

    const { toast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault()

        setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "Thank you for your message, I'll get back to you soon."
            })
        }, 1500)
    }

    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:4xl font-bold mb-4 text-center">Get In <span className="text-primary"> Touch </span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-12xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out.
                I'm always open to discussing new opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8 ">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex item-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Email </h4>
                                <a href="mailto:chanmacasa@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    chanmacasa@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex item-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone </h4>
                                <a href="tel:09556331555" className="text-muted-foreground hover:text-primary transition-colors">
                                    (+63) 955 633 1555
                                </a>
                            </div>
                        </div>

                        <div className="flex item-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Map className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Location </h4>
                                <a href="https://www.google.com/maps/place/Tanza,+Cavite" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                    Tanza, Cavite, Philippines
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4 "> Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="#">
                                <Linkedin />
                            </a>
                            <a href="#">
                                <Instagram />
                            </a>
                            <a href="#">
                                <Facebook />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-x5" >
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>
                    <form className="space-y-6" action="https://formsubmit.co/chanmacasa@gmail.com" method="POST" onSubmit={handleSubmit}>
                        <input type="text" name="_honey" id="honeyPot" className="hidden"/>
                        <input type="hidden" name="_captcha" value="false" className="hidden"/>
                        <div>
                            <label htmlFor="name"
                                className="block text-sm font-medium mb-2"> Your Name</label>
                            <input text="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="John Doe..." />
                        </div>

                        <div>
                            <label htmlFor="email"
                                className="block text-sm font-medium mb-2"> Your Email</label>
                            <input text="text" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="john.doe@gmail.com" />
                        </div>

                        <div>
                            <label htmlFor="message"
                                className="block text-sm font-medium mb-2"> Your Message</label>
                            <textarea text="text" id="message" name="message" required className="w-full h-25 px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Put your message here..." />
                        </div>
                        <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2 ") }> Send Message <Send size={16} /> </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
};