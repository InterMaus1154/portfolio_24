import {FC} from 'react';
import "./style/App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";

const App: FC = () => {
    return (
        <div className={"app"}>
            <Header/>
            <main>
                <Hero/>
            </main>
            <Footer />
        </div>
    );
};

export default App;