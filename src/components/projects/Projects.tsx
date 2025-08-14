import {FC} from 'react';
import "./Projects.css";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";

const Projects: FC = () => {
    return (
        <section className={"page--section projects-section full--width"} id={"projects"}>
            <div className="full-width-wrapper">
                <h2 className={"section--title"}>Projects [Section WIP]</h2>
                {/*project boxes*/}
                <div className="project-list">
                    {/*nuti pita admin*/}
                    <div className="project-box">
                        <h2>Nuti Pita - Public Customer Website</h2>
                        <div className="description">
                            <p>A modern React-based website designed to attract customers with
                                product showcases, and contact options.
                            </p>
                            <p>Built with responsiveness in mind to increase the bakery's online presence.</p>
                        </div>
                        <div className={"stack"} title={"Tech stack: HTML, CSS, Typescript, React"}>
                            <h3>Stack:</h3>
                            <div className={"stack-icons"}>
                                <img src={"https://skillicons.dev/icons?i=html,css,ts,react"}
                                     alt={"Html, Css, typescript, React"}/>
                            </div>
                        </div>
                        <div className="view">
                            <h3>View:</h3>
                            <div className="view-links">
                                <a href={"https://github.com/InterMaus1154/nutipita"} target={"_blank"}>
                                    <FontAwesomeIcon icon={faGithub}/>
                                    GitHub
                                </a>
                                <a href={"https://nutipita.co.uk/"} target={"_blank"}>
                                    <FontAwesomeIcon icon={faGlobe}/>
                                    NutiPita.co.uk
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*nuti pita customer page*/}
                    <div className="project-box">
                        <h2>Nuti Pita - Order Management System </h2>
                        <div className="description">
                            <p>Bespoke Laravel web application to replace traditional spreadsheets; for staff to manage
                                orders, customers, invoices and more!
                            </p>
                            <p>Fully customised for client requirements.</p>
                            <p>Full compatibility ensured for mobile, tablet and large desktop devices.</p>
                        </div>
                        <div className="stack" title={"Tech stack: Laravel, mysql, Livewire, Tailwind"}>
                            <h3>Stack:</h3>
                            <div className={"stack-icons"}>
                                <img src={"https://skillicons.dev/icons?i=php,laravel,mysql,tailwind"}
                                     alt={"Tech stack: Laravel, mysql, Livewire, Tailwind"}/>
                            </div>
                        </div>
                        <div className={"view"}>
                            <h3>View:</h3>
                            <div className={"view-links"}>
                                <a href={"https://github.com/InterMaus1154/nutipita-admin"} target={"_blank"}>
                                    <FontAwesomeIcon icon={faGithub}/>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;