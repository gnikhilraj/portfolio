import { useEffect } from "react"

export const Navbar = ({menuOpen , setMenuOpen}) => {


    useEffect(()=>{
        document.body.style.overflow = menuOpen ? "hidden" : ""
    },[menuOpen])

    return <nav className="fixed top-0 w-full z-40 bg-[rgba(111, 179, 23, 0.8)] blackdrop-blur-lg border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white">
                    G.<span  className="text-blue-500">NR</span>
                </a>

                {/*For Mobile Menu*/}
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={()=> setMenuOpen((prev)=> !prev)}>
                &#9776;
                </div>

                {/*Desktop menu*/}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-grey-300 hove:text-white transition-colors">Home </a>
                    <a href="#about" className="text-grey-300 hove:text-white transition-colors">About </a>
                    <a href="#projects" className="text-grey-300 hove:text-white transition-colors">Projects </a>
                    <a href="#contact" className="text-grey-300 hove:text-white transition-colors">Contact </a>
                </div>
            </div>
        </div>
    </nav>
}