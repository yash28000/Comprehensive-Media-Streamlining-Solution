import Link from "next/link"

export const Header = () =>{
    return(
        <div className="w-screen h-12 border-b-[1px] flex items-center px-10 bg-white border-zinc-300 sticky inset-0">
            <Link href="/" className="text-2xl font-semibold">
                el<span className="font-bold font-kanit">videos</span>
            </Link>
        </div>
    )
}