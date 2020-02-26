import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = (props) => { debugger
//     let state = props.store.getState().dialogReducer;
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator())
//     };
//
//     let onNewMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body));
//     };
//
//     return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
//                     dialogsPage={state}/>

 let mapStateToProps=(state)=> {
     return {
         dialogsPage: state.dialogReducer
     }
 };

 let mapDispatchToProps=(dispatch)=> {
     return {
         updateNewMessageBody: ()=> {
             dispatch(sendMessageCreator());
         },
         sendMessage: (body)=> {
             dispatch(updateNewMessageBodyCreator(body))
         }
     }
 };

 const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;