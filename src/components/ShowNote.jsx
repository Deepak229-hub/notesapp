import { ChevronLeft } from "lucide-react"

const ShowNote = ({show, title, text}) => {
    return (
        <div className="bg-gray-900 h-[90vh] w-screen py-3 px-6">
            <div className="flex mb-2">
                <button className="size-10 bg-gray-800 rounded-sm flex justify-center items-center" onClick={show}><ChevronLeft /></button>
                &nbsp;
                <h2 className="text-2xl font-bold">{title}</h2>
            </div>
            <hr className="border-gray-700" />
            <p className="text-lg text-justify">{text}</p>
        </div>
    )
}

export default ShowNote