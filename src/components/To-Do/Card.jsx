import {FaPen,FaTrash} from 'react-icons/fa'
const Card=(props)=>{
    return(
        <div className="w-[300px] h-[300px] bg-[#F7CE21] relative p-2 flex flex-col justify-center items-center">
            <p className="font-Aurore absolute top-1 left-3 underline text-2xl">{props.title}</p>
            <p className="fonnt-Inter text-lg relative">{props.body}</p>
            <p className="font-Aurore absolute bottom-1 right-1">{props.date}</p>
            <div className='text-xs m-auto absolute top-1 right-1 flex flex-row justify-center items-center gap-1'>
                <FaPen/>
                <FaTrash color="#EF3F3F"/>
            </div> 
        </div>
    )
}
export default Card;