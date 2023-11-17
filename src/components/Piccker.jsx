import { useEffect, useState } from "react"
// import { Shuffle } from "../utils"

export default function Picker(){
    const [picked, setPicked] = useState("");
    const [groups, setGroups] = useState("");

    useEffect(() => {
        if(localStorage.getItem("groups")){
            setGroups(JSON.parse(localStorage.getItem("groups")));

            // for(let key in groups){
            //     groups[key] = Shuffle(groups[key]);
            // }
        }
    }, ["groups"])

    return(
        <div className="grid grid-cols-12">
            <h2 className="text-center col-span-12 text-5xl border-2 border-black p-5 w-full rounded-xl">{picked}</h2>
            {Object.keys(groups).map((key) => (
                <button id={key} onClick={(e) => {
                    setPicked(groups[key][Math.floor(Math.random()* groups[key].length)]);
                }}>
                    {key}
                </button>
            ))}
        </div>
    )
}