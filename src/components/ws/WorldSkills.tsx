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
                            <p>My WorldSkills journey began in 2023, when my teacher encouraged me to take part in the
                                Web Development competition.
                            </p>
                            <p>After progressing through the early stages, I qualified for the UK National Finals in
                                November, where I won the gold medal.
                            </p>
                            <p>
                                This achievement led to my selection as part of Team UK for the international
                                competition.
                            </p>
                            <div className={"badge-holder"}>
                                <a href="https://www.credly.com/badges/63fa09d8-8700-47be-977d-3ffa5d189937/public_url"
                                   target={"_blank"}>
                                    <img src={"images/prof/ws23-medal.png"}
                                         alt={"Image of national finalists badge"}/>
                                </a>
                            </div>
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
                            <p>Preparing for WorldSkills International 2024 in Lyon required 6–7 months of intensive
                                training.
                            </p>
                            <p> This included regular practice tasks, and international pressure tests in Hungary and
                                Shanghai.
                            </p>
                            <p>In September 2024, I represented the UK on the international stage in Lyon, competing
                                against 33 other web developers from around the world.
                            </p>
                            <p>I secured 9th place and was awarded a Medallion of Excellence, which is awarded to those
                                who met the international standard by WorldSkills.
                            </p>
                            <div className={"badge-holder"}>
                                <a href="https://www.credly.com/badges/7d92b41b-80ec-42fc-ab5c-aca2f6d8b8e9/public_url"
                                   target={"_blank"}>
                                    <img src={"images/prof/ws24-medal.png"}
                                         alt={"Image of medallion of excellence badge"}/>
                                </a>
                            </div>
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
                            <p>After the competition, I began working alongside my training manager to support upcoming
                                WorldSkills UK national events.
                            </p>
                            <p>I also started helping train the next UK competitor for both WorldSkills and
                                EuroSkills.
                            </p>
                            <p>Being able to contribute to the next generation of competitors has been a rewarding way
                                to stay involved with the community and share what I’ve learned.
                            </p>
                            <div className={"badge-holder"}>
                                <a href="https://www.credly.com/badges/4538f7a0-dea5-48c2-99cd-21da961fd47d/public_url"
                                   target={"_blank"}>
                                    <img src={"images/prof/wst24-medal.png"}
                                         alt={"Image of team uk 2024 badge"}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorldSkills;