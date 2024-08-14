import { observer } from "mobx-react-lite";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  Icon,
  Image,
} from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import { Link } from "react-router-dom";

interface Props {
  profile: Profile;
}

const ProfileCard = ({ profile }: Props) => {
  return (
    <Card as={Link} to={`/profiles/${profile.username}`}>
      <Image src={profile.image || "/assets/user.png"} />
      <CardContent>
        <CardHeader content={profile.displayName} />
        <CardDescription content={`bio: ${profile.bio}`} />
      </CardContent>
      <CardContent extra>
        <Icon name="user" />
        20 Followers
      </CardContent>
    </Card>
  );
};

export default observer(ProfileCard);
