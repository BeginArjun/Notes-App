import Tags from "./Tags";
import Card from "./Card";
import {FaRegClock} from 'react-icons/fa'
import { useEffect, useState } from "react";
import {useData} from '../Context/Context'
import App from "./App";
const Home=()=>{
    const [clicked,setClicked]=useState(false)
    const {data,setData}=useData()
    const [dataCard,setDataCard]=useState()
    
    useEffect(()=>{
        setDataCard(data.map((note,idx)=><Card key={note.id} id={note.id} title={note.title} body={note.body} date={note.date}/>))
    },[data])
    return(
        <div className="z-[1] p-6 w-screen h-full bg-[#CFB5E2] relative">
        <div style={{filter:clicked?'blur(8px)':'none'}}>
        <p className="font-Inter font-bold lg:text-[64px]">Hi, what's on your mind?</p>
        < div className="flex flex-row justify-between w-full items-center gap-3">
        <div className="flex flex-row justify-center items-center gap-2">
        <Tags active={true} tag={"All"} />
        <Tags active={false} tag={"Favourites"} />
        <Tags active={false} tag={"Urgent"} />
        </div>
        <button className="rounded-full w-[130px] h-[30px] border-[3px] border-black text-center text-white bg-black" onClick={()=>setClicked(true)}>Create</button>
        <button className="rounded-full w-[130px] h-[30px] border-[3px] border-black text-center text-white bg-black" onClick={()=>{
            localStorage.clear()
            setData([])
        }}>Clear</button>
        </div>
        <div className="flex flex-row justify-start items-center gap-3 mt-2 w-full min-h-[200px]">
            {data[0]?dataCard:<p>Create a new Note</p>}
        </div>
        <p className="font-Karla text-xl flex flex-row gap-1 justify-start items-center">
            Recents
            <FaRegClock color={'black'}/>
        </p>
        </div>
        <App Clicked={clicked} change={setClicked}/>
        </div>
    )
}
export default Home;