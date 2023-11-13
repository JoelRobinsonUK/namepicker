import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Navbar = () => {
    return ( 
        <nav className="bg-yale text-white font-zilla font-bold text-5xl p-3 flex">
            <h1 className='grow'>Name Picker</h1>
            <a href="https://github.com/JoelRobinson-ACC/Name-Picker" target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={icon({name: "github", style: "brands"})} />
            </a>
        </nav>
     );
}
 
export default Navbar;