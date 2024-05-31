import { Paper } from "@mui/material";
import Sidebar from "./Sidebar";
import Chatbox from "./mainchat";
import { useEffect } from "react";
import Profile from "./Profile";
import socket from "./socket";

const Chat =() =>{
        useEffect(() =>
        { 
            console.log(socket);
        }, [socket]);
    return
    (
        <Paper 
            square elevation={0} 
            sx={{height: "100vh", display: "flex", flexDirection: "column"}}>
            <Sidebar/>
            <Chatbox/>
            <Profile/>
        </Paper>
    );
};

export default Chat;