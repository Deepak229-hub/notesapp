import { GalleryHorizontal } from "lucide-react"
import Card from "./Card"

const RightContent = ({notes, deleteNote, show}) => {
    return (
        <div className="lg:border-l w-full h-1/2 lg:w-1/2 lg:h-full lg:py-3 px-6">
            <h2 className="w-full p-2 lg:p-3 font-bold text-2xl text-center">Recent Notes</h2>
            <hr className="border-gray-700" />
            <div className="flex flex-row overflow-x-auto snap-x lg:grid grid-cols-1 lg:grid-cols-3 gap-4 p-3 lg:h-[80vh] lg:overflow-y-scroll [&::-webkit-scrollbar]:hidden">
                {notes.map((note, idx) => (
                    <Card key={idx} title={note.title} text={note.text} id={idx} deleteNote={deleteNote} show={show} />
                ))}
            </div>
        </div>
    )
}

export default RightContent