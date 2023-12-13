import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

export default function Add() {
  return (
    <Link
      to={"/create"}
      className="fixed bottom-3 right-3 flex aspect-square w-10 items-center justify-center rounded-full bg-reseda text-3xl font-bold text-white"
    >
      <FontAwesomeIcon icon={icon({ name: "plus" })} />
    </Link>
  );
}
