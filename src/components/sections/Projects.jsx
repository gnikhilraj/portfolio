import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = ()=>{
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400
             bg-clip-text text-transparent text-center">Featured Projects</h2>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <h3 className="text-xl font-bold mb-2">Astrosarthi</h3>
                    <p className="text-gray-400 mb-4">Led as a full-stack developer in the development and deployment of the AstroSarathi project, providing end-to-end technical solutions and overseeing the hosting of the website.
Implemented robust backend systems and APIs to support key functionalities of the AstroSarathi platform, including user authentication, data processing, and integration with third-party services.
Tools and technologies used: Express, Mongoose , MongoDB , ReactJS , NodeJS , Postman, Swagger, Git , Github.
</p>
                    <div className="flex flex-warp gap-2 mb-4">
                        {["React" , "NodeJS" , "MongoDB"].map((tech,key)=>(
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            ">
                                    {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#project"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                            View Project 
                        </a>
                    </div>
                </div>


                  <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                    <h3 className="text-xl font-bold mb-2">LensLink </h3>
                    <p className="text-gray-400 mb-4">Contributed to the development and implementation of LensLink, a web-based platform connecting freelance photographers with potential clients, streamlining the hiring process.
Spearheaded the development and deployment of the Lenslink project, a comprehensive web application designed to build a bridge between freelance photographers and customers.
Tools and technologies used: JavaScript , MySQL , Postman , HTML, CSS, Visual Studio Code.
</p>
                    <div className="flex flex-warp gap-2 mb-4">
                        {["React" , "NodeJS" , "MongoDB"].map((tech,key)=>(
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            ">
                                    {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#project"
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                            View Project 
                        </a>
                    </div>
                </div>

             </div>

             
        </div>
        </RevealOnScroll>
    </section>
}