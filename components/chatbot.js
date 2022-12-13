import axios from "axios";
import React, { useEffect, useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import neuralNetwork from "../neuralNetwork";
import Wrapper from "./styles";

function ChatbotWrapper() {
  const [botAnswer, setBotAnswer] = useState("bot");
  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#DA4F78",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#DA4F78",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };
  // console.log(neuralNetwork('bye'), 'console');

  const getBotAnswer = () => {
    return botAnswer;
  };

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={[
            {
              id: "1",
              message: "hii!!",
              trigger: "user",
            },
            {
              id: "user",
              user: true,
              trigger: "loading",
            },
            {
              id: "loading",
              component: <FetchResponse setBotAnswer={setBotAnswer} />,
              asMessage: true,
              trigger: "user",
            },
          ]}
          // botDelay={3000}
          // userDelay={3000}
          // customDelay={3000}
          floating
        />
      </ThemeProvider>
    </Wrapper>
  );
}

function FetchResponse(props) {
  const [botAnswer, setBotAnswer] = useState("bot");

  const getChatbotAnswer = data => {
    axios.post("/api/chatbotResponse", data).then(res => {
      setBotAnswer(res?.data?.answer);
    });
  };
  useEffect(() => {
    getChatbotAnswer({ data: props.previousStep.message });
    props.triggerNextStep();
  }, []);

  return <div>{botAnswer}</div>;
}

export default ChatbotWrapper;
