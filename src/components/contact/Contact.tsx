import {FC} from 'react';
import "./Contact.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";

const Contact: FC = () => {
    return (
        <section className={"page--section contact-section full--width"} id={"contact"}>
            <div className="full-width-wrapper">
                <h2 className="section--title">Contact</h2>
                <div className="contact-list">
                    <div className="contact-box">
                        <h3 className="contact-box-title gradient-text-title">Email</h3>
                        <div className="contact-box-icon">
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </div>
                        <a href="mailto:amarco1154@gmail.com">amarco1154@gmail.com</a>
                    </div>
                    <div className="contact-box">
                        <h3 className="contact-box-title gradient-text-title">GitHub</h3>
                        <div className="contact-box-icon">
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                        <a href="https://github.com/intermaus1154" target={"_blank"}>InterMaus1154</a>
                    </div>
                    <div className="contact-box">
                        <h3 className="contact-box-title gradient-text-title">LinkedIn</h3>
                        <div className="contact-box-icon">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </div>
                        <a href="https://uk.linkedin.com/in/m%C3%A1rk-kiss-2860b822b" target={"_blank"}>Márk Kiss</a>
                    </div>
                    <div className="contact-box">
                        <h3 className="contact-box-title gradient-text-title">Instagram</h3>
                        <div className="contact-box-icon">
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <a href="https://www.instagram.com/mark__78l/" target={"_blank"}>Mark__78L</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;