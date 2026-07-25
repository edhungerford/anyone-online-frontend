/**
 * @param {{ user: any; content: any; }} props
 */
export function ChatMessage(props){
    
    return(
        <div class="chat-message-wrapper">
            <div class="chat-message">
                <div class="chat-message-username">{props.user}</div>:
                <div class="chat-message-content">{props.content}</div>
            </div>
        </div>
    )
}