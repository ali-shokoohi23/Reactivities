import { observer } from "mobx-react-lite";
import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../app/stores/Store";

const ServerError = () => {
  const { commonStore } = useStore();
  return (
    <Container>
      <Header as="h1" content="Server Error" />
      <Header as="h5" color="red" content={commonStore.error?.message} />
      {commonStore.error?.details && (
        <Segment>
          <Header as="h4" content="Stack Trace" color="teal" />
          <code style={{ marginTop: "10px" }}>{commonStore.error.details}</code>
        </Segment>
      )}
    </Container>
  );
};

export default observer(ServerError);
