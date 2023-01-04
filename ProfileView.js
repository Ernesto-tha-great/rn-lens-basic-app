import { Profile } from "@lens-protocol/react-native-lens-ui-kit";

const ProfileView = ({ route, navigation }) => {
  return (
    <Profile
      profile={route.params.profile}
      onFollowingPress={(profile) => {
        console.log("PROFILE::::", profile);
        navigation.push("ViewFollowing", {
          ethereumAddress: profile.ownedBy,
        });
      }}
      onProfileImagePress={(publication) => {
        navigation.push("Profile", {
          profile: publication.profile,
        });
      }}
      onCommentPress={(publication) => {
        const publicationId = publication.mirrorOf
          ? publication.mirrorOf.id
          : publication.id;
        navigation.push("ViewComments", {
          publicationId,
        });
      }}
    />
  );
};

export default ProfileView;
