import { Facebook, Instagram, Linkedin, Mail, Map, Phone } from "lucide-react";


export const ContactSection = () => {
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
                                <Mail className="h-6 w-6 text-primary"/>
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
                                <Phone className="h-6 w-6 text-primary"/>
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
                                <Map className="h-6 w-6 text-primary"/>
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
                            <a>
                                <Linkedin/>
                            </a>
                            <a>
                                <Instagram />
                            </a>
                            <a>
                                <Facebook/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
};