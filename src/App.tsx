import {FC, useEffect} from 'react';
import "./style/App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import About from "./components/about";
import WorldSkills from "./components/ws";
import Projects from "./components/projects";
import Contact from "./components/contact";

const App: FC = () => {

    useEffect(() => {
        if(window.localStorage.getItem('seen')) return;
        alert("This page is under development! Texts are AI placeholders");
        window.localStorage.setItem('seen', true.toString());
    }, []);

    return (
        <div className={"app"}>
            <Header/>
            <main>
                <Hero/>
                <About />
                <WorldSkills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;