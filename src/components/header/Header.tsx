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
        // check if observer part of header is visible
        // state: isObserverVisible
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

            // close nav on outside nav click
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
            {/*only used for scroll observing, no content should be placed*/}
            <div className={"observer"} ref={observerRef}></div>
            <header className={!isObserverVisible ? "full--width header-scroll" : "full--width"} ref={headerRef}>
                <div className="full-width-wrapper">
                    <h1>Márk Kiss</h1>
                    {/*menu toggle button, should be only visible on small screen*/}
                    <button ref={buttonRef}
                            className={isNavVisible ? "hamburger-button hamburger-open" : "hamburger-button"}
                            aria-label={"Toggle navigation menu"} onClick={() => {
                        setNavVisible(!isNavVisible)
                    }}>
                        <span className={"hamburger-line"}></span>
                        <span className={"hamburger-line"}></span>
                        <span className={"hamburger-line"}></span>
                    </button>
                    <nav className={isNavVisible ? "nav-open" : "nav-closed"}>
                        <ul>
                            <li>
                                <a className={"nav-link"} title={"About me"} href="#about">About</a>
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
                            <li>
                                <a className={"nav-link external-link"} href={"https://markweb.hashnode.dev/"}
                                   target={"_blank"} referrerPolicy={"strict-origin"}>Blog
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