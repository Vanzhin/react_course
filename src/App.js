import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import Message from "./Message";
import List from "./List";

function App() {

    const name = 'Nikolay';
    const array = ["Яблоко", "Апельсин", "Слива"];
    const [messageList, setMessageList] = useState([]);
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');
    const ListUpdate = () => {

        setMessageList([...messageList, {user: author, text: message}]);
        setAuthor('');
        setMessage('');
    }
    const messageAlert = (count, message) => {
        if (count > 0)
            alert(message + count)

    }

    useEffect(() => {
        setTimeout(messageAlert, 1500, messageList.length, 'message has been sent! total messages: ')
    }, [messageList])

    return (
        <div className="App">
            <header className="App-header">
                <Message name={name}/>
                <List array={messageList}/>
                <div className={"inputForm"}>
                    <h4>feedback</h4>
                    <label htmlFor="author">Your name</label>
                    <input onInput={(event) => setAuthor(event.target.value)} id="author" type="text" value={author}/>
                    <label htmlFor="text">message</label>
                    <textarea className={"textArea"} id={"text"} rows={5} value={message}
                              onInput={(event) => setMessage(event.target.value)}/>
                    <button onClick={ListUpdate}>Отправиеть
                    </button>
                </div>
            </header>

        </div>
    );
}

export default App;
