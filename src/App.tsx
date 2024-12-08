import {FC} from 'react';
import "./style/App.css";
import Header from "./components/header";
import Hero from "./components/hero";

const App: FC = () => {
    return (
        <div className={"app"}>
            <Header/>
            <main>
                <Hero/>
            </main>
        </div>
    );
};

export default App;