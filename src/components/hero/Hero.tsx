import {FC} from 'react';
import "./Hero.css";

const Hero: FC = () => {
    return (
        <section className={"hero-section page-section full-width"}>
            <div className="full-width-wrapper">
                <div className="hero-title-wrapper">
                    <h2>Mark Kiss</h2>
                    <h3>Web Developer. WorldSkills International Lyon 2024 Competitor.</h3>
                </div>
            </div>
        </section>
    );
};

export default Hero;