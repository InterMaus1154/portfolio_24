import {FC} from 'react';
import "./Header.css";

const Header: FC = () => {
    return (
        <header className={"full-width"}>
            <div className="full-width-wrapper">
                <h1>Mark Kiss</h1>
                <nav>
                    <ul>
                        <li>
                            <a className={"nav-link"} title={"About me"} href="#">About</a>
                        </li>
                        <li>
                            <a className={"nav-link"} href="#" title={"My journey with WorldSkills"}>WorldSkills
                                Journey
                            </a>
                        </li>
                        <li>
                            <a className={"nav-link"} href="#"
                               title={"Projects I have worked and been working on"}>Projects
                            </a>
                        </li>
                        <li>
                            <a className={"nav-link"} href="#" title={"Find my social details and my CV"}>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;