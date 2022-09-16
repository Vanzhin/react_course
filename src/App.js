import './App.css';
import Message from "./Message";

function App() {

    const name = 'Nikolay'
    return (
        <div className="App">
            <header className="App-header">
                <Message name = {name}/>
            </header>
        </div>
    );
}

export default App;
