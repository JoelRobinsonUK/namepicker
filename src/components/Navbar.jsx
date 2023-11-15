import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="bg-yale text-white font-zilla font-bold text-5xl p-3 flex">
            <Link to={"/"} className='grow'>
                <h1 >Name Picker</h1>
            </Link>
            <a href="https://github.com/JoelRobinson-ACC/Name-Picker" target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={icon({ name: "github", style: "brands" })} />
            </a>
        </nav>
    );
}

export default Navbar;