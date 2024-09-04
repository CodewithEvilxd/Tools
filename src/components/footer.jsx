

export default function Footer() {
    return (
        <footer>
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 mt-24">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                <p className="text-center text-sm leading-loose md:text-left text-white">Developed by <a href="https://github.com/codewithEvilxd" className="text-[#a333ff] underline underline-offset-4">NISHANT GAURAV</a>. The source code is available 
                on <a href="https://github.com/codewithEvilxd/Tools" className="text-[#a333ff] underline underline-offset-4">Github</a></p>
            </div>
        </div>
        </footer>
    )
}