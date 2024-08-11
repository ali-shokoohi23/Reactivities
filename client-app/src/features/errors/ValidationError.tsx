import React from "react";
import { Message, MessageItem, MessageList } from "semantic-ui-react";

interface Props {
  errors: string[];
}
const ValidationError = ({ errors }: Props) => {
  return (
    <Message error>
      {errors && (
        <MessageList>
          {errors.map((err: string, i) => (
            <MessageItem key={i}>{err}</MessageItem>
          ))}
        </MessageList>
      )}
    </Message>
  );
};

export default ValidationError;
