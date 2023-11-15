import { useState } from "react"

export default function Create() {
    const [groupId, setGroupId] = useState("");
    const [groupNames, setGroupNames] = useState("");
    return (
        <form action="">
            <label htmlFor="group-name" className="block">
                Name the group you want to create
                <input id="group-name" type="text" onChange={(e) => {
                    setGroupId(e.target.value);
                }} className="border-2 ml-3" />
            </label>

            <label htmlFor="name-set">
                Enter names (seperate by spaces)
                <textarea id="name-set" cols="30" rows="10" onChange={(e) => {
                    setGroupNames(e.target.value);
                }} className="block border-2"></textarea>
            </label>

            <button className="border-2" onClick={() => {
                if(localStorage.getItem("groups")){
                    let groups = JSON.parse(localStorage.getItem("groups"));
                    groups[groupId] = groupNames.split(" ");

                    localStorage.setItem("groups", JSON.stringify(groups));
                } else {
                    let groups = {};
                    
                    groups[groupId] = groupNames.split(" ");

                    localStorage.setItem("groups", JSON.stringify(groups));
                }
            }}>
                Add Group
            </button>
        </form>
    )
}