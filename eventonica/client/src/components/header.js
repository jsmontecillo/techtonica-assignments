import calendar from "./calendar.png";
import './header.css';
import './w3.css';

const Header = () => {
    return (
        <div>
        <div className="nav">
            <img src={calendar} alt="Calendar Star Logo" />
            <h1>Eventonica</h1>
        </div>
        <ul class="w3-navbar w3-border w3-light-grey">
                <li><a class="w3-hover-red" href="#">HOME</a></li>
                <li><a class="w3-hover-blue" href="#">Link 1</a></li>
                <li><a class="w3-hover-green" href="#">Link 2</a></li>
                <li><a class="w3-hover-teal" href="#">Link 3</a></li>
            </ul>
        </div>
    )
}

export default Header;