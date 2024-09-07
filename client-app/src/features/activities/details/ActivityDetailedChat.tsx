import { observer } from "mobx-react-lite";
import {
  Segment,
  Header,
  Comment,
  CommentContent,
  CommentAvatar,
  CommentAuthor,
  CommentMetadata,
  CommentText,
  CommentGroup,
  Loader,
} from "semantic-ui-react";
import { useStore } from "../../../app/stores/Store";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, FieldProps } from "formik";
import * as Yup from "yup";
import { formatDistanceToNow } from "date-fns";
interface Props {
  activityId: string;
}

export default observer(function ActivityDetailedChat({ activityId }: Props) {
  const { commentStore } = useStore();

  useEffect(() => {
    if (activityId) {
      commentStore.createHubConnection(activityId);
    }
    return () => {
      commentStore.clearComments();
    };
  }, [commentStore, activityId]);
  return (
    <>
      <Segment
        textAlign="center"
        attached="top"
        inverted
        color="teal"
        style={{ border: "none" }}
      >
        <Header>Chat about this event</Header>
      </Segment>
      <Segment attached clearing>
        <CommentGroup>
          {commentStore.comments.map((comment) => (
            <Comment key={comment.id}>
              <CommentAvatar src={comment.image || "/assets/user.png"} />
              <CommentContent>
                <CommentAuthor as={Link} to={`/profiles/${comment.username}`}>
                  {comment.displayName}
                </CommentAuthor>
                <CommentMetadata>
                  <div>{formatDistanceToNow(comment.createdAt)} ago</div>
                </CommentMetadata>
                <CommentText>{comment.body}</CommentText>
              </CommentContent>
            </Comment>
          ))}

          <Formik
            onSubmit={(values, { resetForm }) => {
              commentStore.addComment(values).then(() => resetForm());
            }}
            initialValues={{ body: "" }}
            validationSchema={Yup.object({
              body: Yup.string().required(),
            })}
          >
            {({ isSubmitting, isValid, handleSubmit }) => (
              <Form className="ui form">
                <Field name= "body">
                    {(props: FieldProps) => (
                        <div style={{position: "relative"}}>
                            <Loader active={isSubmitting} />
                            <textarea
                            placeholder="Enter your comment (Enter to submit, SHIFT + enter for new line)"
                            rows={2}
                            {...props.field}
                            onKeyDown={e => {
                                if (e.key === "Enter" && e.shiftKey) {
                                    return;
                                }
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    isValid && handleSubmit();
                                }
                            }}
                            />
                        </div>
                    )}
                </Field>
              </Form>
            )}
          </Formik>
        </CommentGroup>
      </Segment>
    </>
  );
});
