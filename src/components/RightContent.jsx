import Card from "./Card"

const RightContent = ({notes, deleteNote, show}) => {
    return (
        <div className="border-l w-1/2 h-full py-3 px-6">
            <h2 className="w-full p-3 font-bold text-2xl text-center">Recent Notes</h2>
            <hr className="border-gray-700" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-3 h-[80vh] overflow-y-scroll [&::-webkit-scrollbar]:hidden">
                {notes.map((note, idx) => (
                    <Card key={idx} title={note.title} text={note.text} id={idx} deleteNote={deleteNote} show={show} />
                ))}
            </div>
        </div>
    )
}

export default RightContent