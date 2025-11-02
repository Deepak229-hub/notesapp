const LeftContent = ({changeHandler, addNote, title, text}) => {
    return (
        <div className="border-r w-1/2 h-full py-3 px-6">
            <input type="text" value={title} className="w-full p-3 font-bold text-2xl outline-none" placeholder="Enter title..." onChange={changeHandler} />
            <hr className="border-gray-700" />
            <textarea value={text} className="p-3 w-full resize-none h-[70vh] outline-none text-justify" placeholder="Enter text..." onChange={changeHandler}></textarea>
            <span className="flex justify-end text-sm">Length: {text.length}</span>
            <button className="w-full bg-white text-gray-900 transition ease-in-out hover:bg-purple-500 hover:text-white active:bg-purple-600 mt-3 py-2 rounded-md" onClick={addNote}>Add</button>
        </div>
    )
}

export default LeftContent