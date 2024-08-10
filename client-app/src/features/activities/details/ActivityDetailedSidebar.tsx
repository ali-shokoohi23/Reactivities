import {
  Segment,
  List,
  Label,
  Item,
  Image,
  ItemContent,
  ItemHeader,
  ItemExtra,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

export default observer(function ActivityDetailedSidebar() {
  return (
    <>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        3 People Going
      </Segment>
      <Segment attached>
        <List relaxed divided>
          <Item style={{ position: "relative" }}>
            <Label
              style={{ position: "absolute" }}
              color="orange"
              ribbon="right"
            >
              Host
            </Label>
            <Image size="tiny" src={"/assets/user.png"} />
            <ItemContent verticalAlign="middle">
              <ItemHeader as="h3">
                <Link to={`#`}>Bob</Link>
              </ItemHeader>
              <ItemExtra style={{ color: "orange" }}>Following</ItemExtra>
            </ItemContent>
          </Item>

          <Item style={{ position: "relative" }}>
            <Image size="tiny" src={"/assets/user.png"} />
            <ItemContent verticalAlign="middle">
              <ItemHeader as="h3">
                <Link to={`#`}>Tom</Link>
              </ItemHeader>
              <ItemExtra style={{ color: "orange" }}>Following</ItemExtra>
            </ItemContent>
          </Item>

          <Item style={{ position: "relative" }}>
            <Image size="tiny" src={"/assets/user.png"} />
            <ItemContent verticalAlign="middle">
              <ItemHeader as="h3">
                <Link to={`#`}>Sally</Link>
              </ItemHeader>
            </ItemContent>
          </Item>
        </List>
      </Segment>
    </>
  );
});
