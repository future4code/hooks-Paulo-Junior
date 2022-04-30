import React from "react";
import {
  Container,
  Header,
  MessageContainer,
  Footer,
  MessageArea
} from "./SendAreaStyles";

class SendArea extends React.Component {
  state = {
    messages: [{ sender: "", text: "" }],
    inputSender: "",
    inputText: ""
  };

  onChangeInputSender = (e) => {
    this.setState({ inputSender: e.target.value });
  };

  onChangeInputText = (e) => {
    this.setState({ inputText: e.target.value });
  };

  onClickMessage = () => {
    const newMessage = [...this.state.messages];
    newMessage.push({
      sender: this.state.inputSender,
      text: this.state.inputText
    });
    this.setState({ messages: newMessage });
  };

  render() {
    return (
      <Container>
        <Header>
          <h1>Whatslab</h1>
        </Header>
        <MessageContainer>
          {this.state.messages.map((m, i) => {
            return (
              <MessageArea key={i}>
                <p>
                  <strong>{m.sender}</strong>
                </p>
                <p>{m.text}</p>
              </MessageArea>
            );
          })}
        </MessageContainer>
        <Footer>
          <input
            value={this.state.inputSender}
            onChange={this.onChangeInputSender}
          />
          <input
            value={this.state.inputText}
            onChange={this.onChangeInputText}
          />
          <button onClick={this.onClickMessage}>Send me</button>
        </Footer>
      </Container>
    );
  }
}
export default SendArea;
