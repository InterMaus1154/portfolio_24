import {FC} from 'react';
import "./Projects.css";

const Projects: FC = () => {
    return (
        <section className={"page--section projects-section full--width"} id={"projects"}>
            <div className="full-width-wrapper">
                <h2 className={"section--title"}>Projects</h2>
                <em>Coming soon</em>
                <em>In the meantime, check my <a href="github.com/interMaus1154" className={"inline-link"} target={"_blank"}>GitHub</a>
                </em>
            </div>
        </section>
    );
};

export default Projects;