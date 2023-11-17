import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom'

export default function Add() {
    return(
        <Link to={"/create"}
        className="bg-reseda fixed bottom-3 right-3 w-10 aspect-square rounded-3xl text-white font-bold text-3xl flex items-center justify-center">
            <FontAwesomeIcon icon={icon({name: "plus"})} />
        </Link>
    )
}