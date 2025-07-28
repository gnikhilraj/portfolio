import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {


    const frontendSkills = [ "React" , "TypeScript" , "TailwindCSS"] ;
     const backendSkills = [ "Express" , "NodeJS" , "Java" , "MongoDB"] ;



    return <section id="about"  className=" min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4" >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-grey-300 mb-6">Dynamic software engineer with full-stack expertise, blending freelance
             consulting and corporate experience to deliver impactful web solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> Front End </h3>
                    <div className="flex flex-wrap gap-2">
                        {frontendSkills.map((tech , key) =>(
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                            ">
                                    {tech}
                            </span>
                        )

                        )}
                    </div>
                </div>

                 <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> Back End </h3>
                    <div className="flex flex-wrap gap-2">
                        {backendSkills.map((tech , key) =>(
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                            ">
                                    {tech}
                            </span>
                        )

                        )}
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🎓 Education </h3>
                            <ul className="list-disc list-inside text-grey-300 space-y-2">
                                <li>
                                    <strong>M.S. in Information Systems</strong> - Northwest Missouri State University (2024 - 2025)
                                </li>
                                <li>Relevant Course Work : Database Design and Implementation , Developing Object-Oriented Systems with Java ,
Business Intelligence and Analytics , Project Management in Business and Technology , Cybersecurity and Information
Security Management.
</li>
                            </ul>
                        </div>

        
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">💼  Work Experience </h3>
                            <div className="space-y-4 text-grey-300">
                                <div>
                                    <h4 className="font-semibold">Software Engineer at Capgemini (2021 - 2024)</h4>
                                    <p>To be added </p>
                                </div>
                            </div>

                             <div className="space-y-4 text-grey-300">
                                <div>
                                    <h4 className="font-semibold">Research Intern at The Dexterity Global (May 2020 - June 2020)</h4>
                                    <p>To be added </p>
                                </div>
                            </div>
                        </div>
        </div>

        </div>

        </RevealOnScroll>
    </section>
}