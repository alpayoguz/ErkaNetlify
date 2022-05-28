import React, { useEffect } from "react";
import { useChat } from "../contexts/ChatContext";
import { init, subscribeToMessages } from "../socketApi";
import ChaList from "./ChaList";
import Form from "./Form";

function Container({user}) {
  const { setChat } = useChat();

  useEffect(() => {
    init();

    subscribeToMessages((message) => {
      console.log("callback function");
      setChat((prev) => [...prev, { text: message }]);
    });
  }, [setChat]);

  return (
    <>
      <ChaList user={user} />
      <Form />
    </>
  );
}

export default Container;
