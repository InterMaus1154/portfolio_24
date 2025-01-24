import {FC} from 'react';
import "./About.css";
const About: FC = () => {
    return (
        <section className={"page--section about-section full--width"} id={"about"}>
            <div className="full-width-wrapper">
                <h2 className="section--title">About</h2>
                <div className="about-sections">
                    <article className="about-block">
                        <h3 className={"block--subtitle"}>Introduction</h3>
                        <div className="block-content">
                            <div className="text--block">
                                <p>I'm a passionate web developer dedicated to creating clean, functional, and visually
                                    appealing websites. With expertise in both front-end and back-end development, I
                                    enjoy
                                    building user-friendly applications that solve real-world problems.
                                </p>
                                <p>Feel free to explore my projects and see how I bring ideas to life through code.
                                    Whether
                                    it's crafting responsive designs, developing robust APIs, or optimizing performance,
                                    I'm
                                    always ready to tackle exciting challenges.
                                </p>
                            </div>
                            <div className="image--block">

                                {/*<img src="https://placehold.co/300x300" alt=""/>*/}
                            </div>
                        </div>
                    </article>
                    <article className="about-block">
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
                            <div className="image--block">
                            </div>
                        </div>
                    </article>
                    <article className="about-block">
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
                            <div className="image--block">

                            </div>
                        </div>
                    </article>
                    <article className="about-block">
                        <h3 className={"block--subtitle"}>Hobbies</h3>
                        <div className="block-content">
                            <div className="text--block">
                                <p>Outside of web development, I enjoy activities that inspire creativity and provide balance. I love working on coding projects to explore new technologies and enhance my skills. Reading is another passion, whether it’s books on technology, personal development, or engaging fiction.
                                </p>
                                <p>Traveling allows me to experience new cultures and gain fresh perspectives, while gaming challenges my problem-solving abilities and helps me unwind. Photography is another interest, giving me the chance to experiment with visual storytelling and capture memorable moments. These hobbies often spark fresh ideas and keep me motivated in both personal and professional pursuits.
                                </p>
                            </div>
                            <div className="image--block">
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default About;