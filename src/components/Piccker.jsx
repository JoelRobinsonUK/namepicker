import { useEffect, useState } from "react";
import GroupButton from "./GroupButton";
import { useGroupContext } from "../hooks/useGroupsContext";

export default function Picker() {
  const { groups } = useGroupContext();
  const [picked, setPicked] = useState("Click or add group to start");

  return (
    <div className="flex h-full items-center">
      <div className="grid grid-cols-12 gap-3">
        <h2 className="col-span-12 w-full rounded-xl border-2 border-black p-5 text-center text-5xl">
          {picked}
        </h2>
        {groups &&
          Object.keys(groups).map((group, i) => (
            <GroupButton key={i} id={group.id} names={group.names} />
          ))}
      </div>
    </div>
  );
}
