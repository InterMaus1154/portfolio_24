import {FC} from 'react';
import "./Footer.css";

const Footer: FC = () => {
    return (
        <footer className={"full--width"}>
            <div className="full-width-wrapper">
                <a href={"https://github.com/interMaus1154"} target={"_blank"} className={"inline-link"}>Márk Kiss</a>
                &copy; {"2024 - " + new Date().getFullYear()}
            </div>
        </footer>
    );
};

export default Footer;