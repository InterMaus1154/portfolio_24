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
                            <HexagonBorderImage />
                        </div>
                    </article>
                    {/*Education*/}
                    <article className="about-block" id={"education"}>
                        <h3 className={"block--subtitle"}>Educational Background</h3>
                        <div className="block-content">
                            <div className="text--block">
                                <p>I hold a [Degree Name] in [Field of Study] from [University Name], where I developed
                                    a strong foundation in [specific relevant skills or subjects]. My academic journey
                                    honed my problem-solving abilities, critical thinking, and technical expertise,
                                    preparing me to tackle real-world challenges in [industry or field].
                                </p>
                                <p>Additionally, I’ve engaged in continuous learning through certifications and personal
                                    projects, ensuring I stay updated with the latest advancements in [specific
                                    technologies or domain].
                                </p>
                            </div>
                            <HexagonBorderImage />
                        </div>
                    </article>
                    {/*Skills*/}
                    <article className="about-block" id={"skills"}>
                        <h3 className={"block--subtitle"}>Skills</h3>
                        <div className="block-content">
                            <div className="text--block">
                                <p>I hold a [Degree Name] in [Field of Study] from [University Name], where I developed
                                    a strong foundation in [specific relevant skills or subjects]. My academic journey
                                    honed my problem-solving abilities, critical thinking, and technical expertise,
                                    preparing me to tackle real-world challenges in [industry or field].
                                </p>
                                <p>Additionally, I’ve engaged in continuous learning through certifications and personal
                                    projects, ensuring I stay updated with the latest advancements in [specific
                                    technologies or domain].
                                </p>
                            </div>
                            <HexagonBorderImage />
                        </div>
                    </article>
                    {/*Hobbies and interests*/}
                    <article className="about-block" id={"hobbies"}>
                        <h3 className={"block--subtitle"}>Hobbies</h3>
                        <div className="block-content">
                            <div className="text--block">
                                <p>Outside of web development, I enjoy activities that inspire creativity and provide balance. I love working on coding projects to explore new technologies and enhance my skills. Reading is another passion, whether it’s books on technology, personal development, or engaging fiction.
                                </p>
                                <p>Traveling allows me to experience new cultures and gain fresh perspectives, while gaming challenges my problem-solving abilities and helps me unwind. Photography is another interest, giving me the chance to experiment with visual storytelling and capture memorable moments. These hobbies often spark fresh ideas and keep me motivated in both personal and professional pursuits.
                                </p>
                            </div>
                            <HexagonBorderImage />
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default About;