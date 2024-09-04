import Footer from "@/components/footer";
import NavBar from "@/components/header";

export default function About() {
    return (
        <>
        <NavBar />
        <div>
            <h1 className="text-white text-6xl text-left ml-14 mt-40 font-extrabold">About</h1>
            <p className="text-gray-400 text-1xl font-bold ml-14 mt-3">Cool Tools 
                is a collection of online tools. Currenlty it is under development and all the tools will
                 be ready once the code of tools will be ready to public.<br />Also this project is open source 
                 and you can also contribute to it.
            </p>
            <hr className="w-11/12 m-auto h-px my-8 bg-[#27272a] border-0" />
        </div>
        <div>
        <h1 className="text-white text-6xl text-left ml-14 mt-4 font-extrabold">Credits</h1>
        <p className="text-white text-1xl font-medium ml-14 mt-4"><a href="https://tailwindcss.com" 
        className="text-[#ffffff] underline underline-offset-4">TailwindCSS</a> - For styling</p>
        <p className="text-white text-1xl font-medium ml-14 mt-4"><a href="https://ui.shadcn.com" 
        className="text-[#ffffff] underline underline-offset-4">Shadcn UI</a> - For the components</p>
        <p className="text-white text-1xl font-medium ml-14 mt-4"><a href="https://lucide.dev" 
        className="text-[#ffffff] underline underline-offset-4">Lucide</a> - For the icons</p>
        <p className="text-white text-1xl font-medium ml-14 mt-4"><a href="https://vercel.com" 
        className="text-[#ffffff] underline underline-offset-4">Vercel</a> - Where I host all my projects</p>
        <hr className="w-11/12 m-auto h-px my-8 bg-[#27272a] border-0" />
        </div>
        <Footer />
        </>
    )
}