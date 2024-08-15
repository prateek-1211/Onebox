import React, { useState } from "react";
import CustomEditor from "./CustomEditor";
import api from "../utils/api";

const ReplyBox = ({ threadId }) => {
  const [reply, setReply] = useState("");

  const sendReply = () => {
    api.createReply(threadId, {
      from: "email@example.com",
      to: "recipient@example.com",
      subject: "Re: Subject",
      body: reply,
    })
    .then(() => {
      console.log("Reply sent successfully");
    })
    .catch((error) => {
      console.error("Error sending reply:", error);
    });
  };

  return (
    <div>
      <CustomEditor setEditorHtml={setReply} />
      <button onClick={sendReply}>Send</button>
    </div>
  );
};

export default ReplyBox;
