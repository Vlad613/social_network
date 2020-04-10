import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


 let mapStateToProps=(state)=> {
     return  {
         dialogsPage: state.dialogReducer,
         isAuth: state.authReducer.isAuth
     }
 };

 let mapDispatchToProps=(dispatch)=> {
     return {
         updateNewMessageBody: (body)=> {
             dispatch(updateNewMessageBodyCreator(body));
         },
         sendMessage: ()=> {
             dispatch(sendMessageCreator())
         }
     }
 };

 const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;