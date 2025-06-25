import {FC} from 'react';
import "./About.css";
import HexagonBorderImage from "../shared/hexaimage";

const About: FC = () => {
    return (
        <section className={"page--section about-section full--width"} id={"about"}>
            <div className="full-width-wrapper">
                <h2 className="section--title">About</h2>
                <div className="about-sections">
                    {/*Introduction*/}
                    <article className="about-block" id={"introduction"}>
                        <h3 className={"block--subtitle"}>Introduction</h3>
                        <div className="block-content">
                            <div className="text--block">
                                <p>I'm a Hungarian web developer, current living and studying
                                </p>
                                <p>
                                </p>
                            </div>
                            <HexagonBorderImage/>
                        </div>
                    </article>
                    {/*Education*/}
                    <article className="about-block" id={"education"}>
                        <h3 className={"block--subtitle"}>Educational Background</h3>
                        <div className="block-content">
                            <div className="text--block">
                                <p>I am currently completing my undergraduate degree of Software Engineering at a UK
                                    university. I completed the first year by achieving first class in all my modules.
                                </p>
                                <p>I attended the <a className={"inline-link"}
                                                     href={"https://cnwl.ac.uk/about/news-events/article/2024/09/23/student-wins-medallion-for-excellence-at-worldskills-lyon-2024"}
                                                     target={"_blank"}>College of North West London</a>, where I
                                    completed my BTEC Extended Diploma in IT qualification, achieving the highest grade
                                    of <b>D*D*D*.</b>
                                </p>
                                <p>After completing my course, I was awarded the <b>Outstanding Student of the
                                    Year</b> in Creative and Digital Industries.
                                </p>
                            </div>
                            <HexagonBorderImage/>
                        </div>
                    </article>
                    {/*Skills*/}
                    <article className="about-block" id={"skills"}>
                        <h3 className={"block--subtitle"}>Skills</h3>
                        <div className="block-content">
                            <div className="text--block">
                                <p>My primary focus is backend development, particularly using PHP and the Laravel
                                    framework. I enjoy building  APIs, managing SQL databases and I always aim to write maintainable and high-performance code.
                                </p>
                                <p>While backend is my strength, I also have solid frontend skills. I can confidently
                                    build responsive, accessible interfaces using HTML, CSS, and JavaScript or
                                    TypeScript with React.
                                </p>
                                <p>
                                    Competing at WorldSkills UK and in the international competition not only strengthened my coding skills, but also taught me how to write precisely deliver requirements efficiently under strict time limits - all which are also essential when it comes to working with real clients and projects.
                                </p>
                            </div>
                            <HexagonBorderImage/>
                        </div>
                    </article>
                    {/*Hobbies and interests*/}
                    <article className="about-block" id={"hobbies"}>
                        <h3 className={"block--subtitle"}>Hobbies</h3>
                        <div className="block-content">
                            <div className="text--block">
                                <p>Outside of web development, I enjoy activities that inspire creativity and provide
                                    balance. I love working on coding projects to explore new technologies and enhance
                                    my skills. Reading is another passion, whether it’s books on technology, personal
                                    development, or engaging fiction.
                                </p>
                                <p>Traveling allows me to experience new cultures and gain fresh perspectives, while
                                    gaming challenges my problem-solving abilities and helps me unwind. Photography is
                                    another interest, giving me the chance to experiment with visual storytelling and
                                    capture memorable moments. These hobbies often spark fresh ideas and keep me
                                    motivated in both personal and professional pursuits.
                                </p>
                            </div>
                            <HexagonBorderImage/>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default About;