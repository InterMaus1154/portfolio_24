import {FC} from 'react';
import "./style/App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import About from "./components/about";
import WorldSkillsProjects from "./components/ws";
import Projects from "./components/projects";
import Contact from "./components/contact";

const App: FC = () => {
    return (
        <div className={"app"}>
            <Header/>
            <main>
                <Hero/>
                <About />
                <WorldSkillsProjects />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;