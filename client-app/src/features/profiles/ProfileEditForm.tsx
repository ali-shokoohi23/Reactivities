import { Button, Segment } from "semantic-ui-react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../app/common/form/MyTextInput";
import MyTextArea from "../../app/common/form/MyTextArea";
import { useStore } from "../../app/stores/Store";
import { toast } from "react-toastify";
import { observer } from "mobx-react-lite";

interface Props {
  setEditMode: (editMode: boolean) => void;
  }
const ProfileEditForm = ({ setEditMode }: Props) => {
  const { profileStore: { profile, updateProfile } } = useStore();
  return (
    <Segment clearing>
        <Formik
          validationSchema={Yup.object({
            displayName: Yup.string().required()
          })}
          enableReinitialize
          initialValues={{displayName: profile?.displayName, bio:
            profile?.bio}}
          onSubmit={(values) =>     updateProfile(values).then(() => {
            setEditMode(false);
            toast.success("Profile updated successfully!")})}
        >
          {({ isValid, isSubmitting, dirty }) => (
            <Form
              className="ui form"
            >
              <MyTextInput name="displayName" placeholder="Display Name" />
              <MyTextArea name="bio" placeholder="Add you bio" rows={3} />
              <Button
                floated="right"
                type="submit"
                content="Update profile"
                positive
                loading={isSubmitting}
                disabled={!isValid || !dirty}
              />
              
            </Form>
          )}
        </Formik>
      
    </Segment>
  );
};

export default observer(ProfileEditForm);
