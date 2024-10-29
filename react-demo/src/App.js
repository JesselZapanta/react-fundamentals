import "./App.css";
import Greet from "./components/Greet";
import Message from "./components/Message";
import ClickHandler from "./components/ClickHandler";
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from "./components/NameList";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <Greet name="John Doe" />
                <Greet name="Juan Dela Cruz" />
                <Greet name="Jessel" lastname="Zapanta">
                    <p>Hello, this is my name.</p>
                </Greet> */}
                {/* <Message /> */}
                {/* <ClickHandler /> */}
                {/* <ParentComponent/> */}
                {/* <UserGreetings/> */}
                <NameList />
            </header>
        </div>
    );
}

export default App;
