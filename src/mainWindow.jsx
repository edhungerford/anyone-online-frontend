import { useState } from "preact/hooks";
import { ChatMessage } from "./chatMessage";

 export function MainWindow(){
    
    const [messages, setMessages] = useState(Array());
    const [incomingMessage, setIncomingMessage] = useState("");

    const chatMessageHandler = () => {
        setMessages([...messages, ["m",incomingMessage]])
        setIncomingMessage("");
    }

    return(
        <div id="chat-wrapper">
            <div id="chat">
                {messages.map(message =>{
                    return(<ChatMessage user={message[0]} content={message[1]} />)
                })}
            </div>
            <div id="chat-input">
                <input type="text" id="chat-input-control" placeholder="Send a message..." value={incomingMessage} onKeyDown={(e) => {e.code == "Enter"? chatMessageHandler() : undefined}} onInput={(e) => {e.target !== null && setIncomingMessage(e.target.value);}}></input>
                <input type="button" value="Send" id="chat-send-control" onClick={incomingMessage === "" ? undefined : ()=>chatMessageHandler()}></input>
            </div>
        </div>
    );
}