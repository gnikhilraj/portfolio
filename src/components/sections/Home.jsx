import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
      <div className="z-10 px-4">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8">
          {/* Text Section */}
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, this is Nikhil Raj
            </h1>

            <p className="text-gray-400 text-lg mb-8">
              I’m a Full‑Stack Web Developer specializing in JavaScript, React,
              and Node.js. I build interactive, responsive web applications from
              concept to deployment. I thrive on solving problems and creating
              delightful user experiences.
            </p>

            
          </div>

          {/* Image Section */}
          <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <img
              src="/src/assets/snow.jpg"
              alt="Nikhil Raj"
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
        <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Contact
              </a>
            </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
