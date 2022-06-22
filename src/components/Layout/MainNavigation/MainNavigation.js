import {Link} from 'react-router-dom'
import cssClasses from './MainNavigation.module.css';
import Logo from '../../Logo/Logo';
function MainNavigation (props) {
    return (
        <header className={cssClasses.header}>
            <Logo />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Birthdays</Link>
                    </li>
                    <li>
                        <Link to="/new">Add New Birthday</Link>
                    </li>
                    <li>
                        <Link to="/wishes">
                            Wishes
                        <span className={cssClasses.badge}>{props.todayWishes}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;