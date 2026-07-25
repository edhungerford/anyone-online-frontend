import { useState } from "preact/hooks";
import { ChatMessage } from "./chatMessage";

 export function MainWindow(){
    
    const [messages, setMessages] = useState([["a","a"],["ab","ab"],["abc","abc"]]);
    const [incomingMessage, setIncomingMessage] = useState("");

    return(
        <div id="chat-wrapper">
            <div id="chat">
                {messages.map(message =>{
                    return(<ChatMessage user={message[0]} content={message[1]} />)
                })}
            </div>
            <div id="chat-input">
                <input type="text" id="chat-input-control" placeholder="Send a message..." value={incomingMessage} onInput={(e) => {setIncomingMessage(e.target.value);}}></input>
                <input type="button" value="Send" id="chat-send-control" onClick={incomingMessage === "" ? null : ()=>setMessages([...messages, ["m",incomingMessage]])}></input>
            </div>
        </div>
    );
}