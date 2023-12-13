import { useState } from "react";
import { useNavigate } from "react-router";
import { useGroupContext } from "../hooks/useGroupsContext";

export default function Create() {
  const { groups, dispatch } = useGroupContext();
  const [groupId, setGroupId] = useState("");
  const [groupNames, setGroupNames] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (groups) {
      const newGroup = {
        id: groupId,
        names: groupNames,
      };

      dispatch("ADD_GROUP", newGroup);
      localStorage.setItem("groups", JSON.stringify(groups));

      console.log(groups);
    } else {
      let groups = [];
      groups.push({ id: groupId, names: groupNames.split(" ") });

      dispatch("SET_GROUPS", groups);
      localStorage.setItem("groups", JSON.stringify(groups));

      console.log(groups);
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="group-name" className="block">
        Name the group you want to create
        <input
          id="group-name"
          type="text"
          onChange={(e) => {
            setGroupId(e.target.value);
          }}
          className="ml-3 border-2"
        />
      </label>

      <label htmlFor="name-set">
        Enter names (seperate by spaces)
        <textarea
          id="name-set"
          cols="30"
          rows="10"
          onChange={(e) => {
            setGroupNames(e.target.value);
          }}
          className="block border-2"
        ></textarea>
      </label>

      <button className="border-2">Add Group</button>
    </form>
  );
}
