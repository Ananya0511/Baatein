import { Grid, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import "./chatscreen.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ChatMessage from "./ChatMessage";
import { useContext } from "react";
import { userContext } from "../../../context/userContext";
import { useParams } from "react-router-dom";

function ChatScreen({ type }) {
  const [state, setState] = useContext(userContext);
  const { id }=useParams();

  // useEffect(() => {
  //   fetchLastMessage();
  // }, []);

  // useEffect(() => {
  //     if (type === "dms") {
        // get userInfo  from db

  //       fetchUserInfo();
  //     } else {
  //     }
  // }, []);

  // const fetchUserInfo = async () => {
  //   try {
  //     const docRef = doc(db, "userInfo", id);
  //     const docSnap = await getDoc(docRef);

  //     setSecUser(docSnap.data());
  //     setLoading(false);
  //   } catch (err) {
  //     console.log(err);
  //     setLoading(false);
  //   }
  // };

  return (
    <div
    style={{
      backgroundImage: `url(${state.user.wallpaper})`,
    }}
    className="chatScreen-container">
      <Grid
        className="chatScreen-header"
        container
        sx={{
          border: "1px solid black",
        }}
      >
        <Grid item xs={1}>
          <ArrowBackIcon
            color="black"
            sx={{
              color: "black",
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <div className="chatScreen-header_img">
            <img
              style={{ width: "50px", borderRadius: "inherit" }}
              src="https://lh3.googleusercontent.com/a/AEdFTp52P2syllmXHClhryHM2h9JZgsyIkW0BPSJYMbd=s96-c"
              alt="logo"
            />
          </div>
        </Grid>
        <Grid item xs={7.5}>
          <div className="chatScreen-header_name">
            <div>Anisha D</div>
            <div>last seen</div>
          </div>
        </Grid>
        <Grid sx={{ display: "flex" }} item xs={1.5}>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid className="chatScreen-body">
        <div
          style={{
            overflow: "scroll",
            display: "grid",
            gridGap: "10px",
          
          }}
        >
          {[
            {
              name: "Ananya Dash",
              email: "ananyadash1997@gmail.com",
              message: { text: "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination" },
              time: "12:00",
              messageType: "text",
              replyOnreply: false,
            },
            {
              name: "Ananya Dash",
              email: "ananyadash1997@gmail.com",
              message: {url:"https://firebasestorage.googleapis.com/v0/b/baatein-84b34.appspot.com/o/Bali-Itinerary-7-days.pdf?alt=media&token=c5b24db8-3698-4e4e-9de8-331d12cb107d" },
              time: "12:00",
              messageType: "doc",
              replyOnreply: true,
            },
            {
              name: "Ananya Dash",
              email: "ananyadash1997@gmail.com",
              message: { url: "https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHw%3D&w=1000&q=80" },
              time: "12:00",
              messageType: "image",
              replyOnreply: true,
              replyOnreplyMessage:{
                text:"reply on reply outgoing message"
              }
            },
            {
              name: "ananya",
              email: "dananya028@gmail.com",
           
              message: { text: "That’s very nice place! you guys made a very good decision. Can’t wait to go on vacation!" },
              time: "12:00",
              messageType: "text",
              replyOnreply: true,
              replyOnreplyMessage:{
                text:"reply on reply outging message"
              }
            },
            {
              name: "ananya",
              email: "dananya028@gmail.com",
              message: { url: "https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHw%3D&w=1000&q=80" },
              time: "12:00",
              messageType: "image",
              replyOnreply: false,
            },
            {
              name: "ananya",
              email: "dananya028@gmail.com",
              message: { url: "https://firebasestorage.googleapis.com/v0/b/baatein-84b34.appspot.com/o/Bali-Itinerary-7-days.pdf?alt=media&token=c5b24db8-3698-4e4e-9de8-331d12cb107d" },
              time: "12:00",
              messageType: "doc",
              replyOnreply: false,
            },
          ].map((item, i) => {
            return (
              <ChatMessage
                messageType={item.messageType}
                replyOnreply={item.replyOnreply}
                replyOnreplyMessage={
                  item.replyOnreplyMessage ? item.replyOnreplyMessage : null
                }
                message={item.message}
                timeStamp={item.time}
                senderImg={item.img}
                senderName={item.name}
                senderemail={item.email}
              />
            );
          })}
        </div>
      </Grid>
      <Grid container spacing={2} className="chatScreen-input">
        <Grid item xs={9}>
          <input type="text" />
        </Grid>
        <Grid item xs={1}>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
        </Grid>
        <Grid item xs={2}>
          <IconButton
            size="small"
            sx={{
              background: "#2F80ED",
              borderRadius: "50%",
              color: "white",
              padding: "10px",
            }}
          >
            <SendOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default ChatScreen;


