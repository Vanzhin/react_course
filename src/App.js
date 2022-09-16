import './App.css';
import Message from "./Message";
import List from "./List";

function App() {

    const name = 'Nikolay';
    const array = ["Яблоко", "Апельсин", "Слива"];
    return (
        <div className="App">
            <header className="App-header">
                <Message name = {name}/>
                <List array = {array}/>
            </header>
        </div>
    );
}

export default App;
