import "./App.css";
import "./Css/myStyles.css";
import styles from  "./Css/appStyles.module.css";


import Greet from "./components/Greet";
import Message from "./components/Message";
import ClickHandler from "./components/ClickHandler";
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import InlineCss from "./components/InlineCss";
import Form from "./components/Form";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Data from "./components/Data";

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
                {/* <NameList /> */}
                {/* <StyleSheet /> */}
                {/* <InlineCss /> */}
                {/* <h1 className="error"> Error </h1> */}
                {/* <h1 className={styles.success}> Success </h1> */}

                {/* <Form /> */}

                {/* <PostList /> */}

                {/* <PostForm /> */}

                <Data />
            </header>
        </div>
    );
}

export default App;
