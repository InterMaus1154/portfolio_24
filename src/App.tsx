import {FC} from 'react';
import "./style/App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import About from "./components/about";

const App: FC = () => {
    return (
        <div className={"app"}>
            <Header/>
            <main>
                <Hero/>
                <About />
            </main>
            <Footer />
        </div>
    );
};

export default App;