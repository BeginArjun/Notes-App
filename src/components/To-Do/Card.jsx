import {FaPen,FaTrash} from 'react-icons/fa'
import { useData } from "../Context/Context";
const Card=(props)=>{
    const {setData, data} = useData()

    const deleteNode=(id)=>{
        console.log("Clicked "+id)
       const notes=localStorage.getItem('notes')
       const notesArray=JSON.parse(notes)
       const newNote=notesArray.filter((note)=>note.id!==id)
       localStorage.setItem('notes',JSON.stringify(newNote))
       setData(newNote)
    }
    const updateNote=(id)=>{
        console.log("Clicked "+id)
        const notes=localStorage.getItem('notes')
        const notesArray=JSON.parse(notes)
        const Note=notesArray.filter((note)=>note.id===id)
        Note[0].title=prompt("Enter new title",Note[0].title)
        Note[0].body=prompt("Enter new body",Note[0].body)
        let Notes=notesArray.filter((note)=>note.id!==id)
        Notes=[Note[0],...Notes]
        localStorage.setItem('notes',JSON.stringify(Notes))
        setData(Notes)
    }
    return(
        <div className="w-[300px] h-[300px] bg-[#F7CE21] relative p-2 flex flex-col justify-center items-center">
            <p className="font-Aurore absolute top-1 left-3 underline text-2xl">{props.title}</p>
            <p className="fonnt-Inter text-lg relative">{props.body}</p>
            <p className="font-Aurore absolute bottom-1 right-1">{props.date}</p>
            <div className='text-xs m-auto absolute top-1 right-1 flex flex-row justify-center items-center gap-1'>
                <div onClick={()=>updateNote(props.id)}>
                <FaPen/>
                </div>
                <div onClick={()=>deleteNode(props.id)}>
                <FaTrash color="#EF3F3F"/>
                </div>
            </div> 
        </div>
    )
}
export default Card;