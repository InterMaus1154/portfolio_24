import {FC} from 'react';
import "./Footer.css";

const Footer: FC = () => {
    return (
        <footer className={"full-width"}>
            <div className="full-width-wrapper">
                Mark Kiss &copy; {"2024 - " + new Date().getFullYear()}
            </div>
        </footer>
    );
};

export default Footer;