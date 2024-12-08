import "./Header.css";
import {FC, useEffect, useRef, useState, Fragment} from "react";

const Header: FC = () => {

    const headerRef = useRef<HTMLElement>(document.createElement("header"));
    const observerRef = useRef<HTMLDivElement>(document.createElement("div"));
    const navRef = useRef<HTMLElement>(document.createElement("nav"));
    const buttonRef = useRef<HTMLButtonElement>(document.createElement("button"));

    const [isNavVisible, setNavVisible] = useState<boolean>(false);
    const [isObserverVisible, setObserverVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            setObserverVisible(entries[0].isIntersecting);
        });

        observer.observe(observerRef.current);

        return () => {
            observer.disconnect();
        }

    }, [setObserverVisible]);

    useEffect(() => {

        const handleClick = (e: MouseEvent) => {

            if (buttonRef.current.contains(e.target as Node)) return;

            if (isNavVisible && navRef.current && !navRef.current.contains(e.target as Node)) {
                setNavVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        }

    }, [isNavVisible, setNavVisible])

    return (
        <Fragment>
            <div className={"observer"} ref={observerRef}></div>
            <header className={"full-width"} ref={headerRef}>
                <div className="full-width-wrapper">
                    <h1>Mark Kiss</h1>
                    <button ref={buttonRef}
                            className={isNavVisible ? "hamburger-button hamburger-open" : "hamburger-button"}
                            aria-label={"Toggle navigation menu"} onClick={() => {
                        setNavVisible(!isNavVisible)
                    }}>
                        <span className={"hamburger-line"}></span>
                        <span className={"hamburger-line"}></span>
                        <span className={"hamburger-line"}></span>
                    </button>
                    <nav className={isNavVisible ? "nav-open": "nav-closed"}>
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
                                <a className={"nav-link"} href="#" title={"Find my social details and my CV"}>Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;