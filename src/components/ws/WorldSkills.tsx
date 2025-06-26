import {FC} from 'react';
import "./WS.css";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const WorldSkills: FC = () => {
    return (
        <section className={"page--section worldskills-section full--width"} id={"ws"}>
            <div className="full-width-wrapper">
                <h2 className={"section--title"}>WorldSkills Journey</h2>
                <div className="ws-list">
                    <div className="ws-box">
                        <div className="ws-box-header">
                            <p>WorldSkills UK 2023 National Finals</p>
                        </div>
                        <div className="ws-box-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, quia.
                        </div>
                    </div>
                    <div className="ws-icon-wrapper">
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </div>
                    <div className="ws-box">
                        <div className="ws-box-header">
                            <p>WorldSkills International 2024</p>
                        </div>
                        <div className="ws-box-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, quia.
                        </div>
                    </div>
                    <div className="ws-icon-wrapper">
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </div>
                    <div className="ws-box">
                        <div className="ws-box-header">
                            <p>WorldSkills UK Journey Continues</p>
                        </div>
                        <div className="ws-box-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, quia.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorldSkills;