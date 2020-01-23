import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>
        );

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message}/>
        );

    let newMessagesText = React.createRef()
    let newMessages = () => {
        let text = newMessagesText.current.value
        {
            alert(text)
        }
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

            <div>
                <textarea ref={newMessagesText}></textarea>
                <button onClick={newMessages}>Add Message</button>
            </div>

        </div>
    )
}


export default Dialogs;