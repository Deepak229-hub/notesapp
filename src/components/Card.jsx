import { Eye, Trash2 } from "lucide-react"

const Card = ({title, text, id, deleteNote, show}) => {
    return (
        <div className="bg-gray-800 flex flex-col rounded-lg p-4 w-full h-[calc(100vh/3)] shrink-0">
            <h4 className="font-bold flex-1">{title}</h4>
            <hr className="border-gray-600" />
            <p className="text-sm line-clamp-8 flex-4 text-justify">{text}</p>
            <div className="flex flex-col md:flex-row gap-2 justify-around items-end flex-1">
                <button id={id} className="bg-gray-700 p-3 rounded-sm" onClick={show}><Eye id={id} /></button>
                <button id={id} className="bg-gray-700 p-3 rounded-sm" onClick={deleteNote}><Trash2 id={id} /></button>
            </div>
        </div>
    )
}

export default Card