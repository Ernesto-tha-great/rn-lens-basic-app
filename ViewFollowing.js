import { Profiles } from "@lens-protocol/react-native-lens-ui-kit";

const ViewFollowing = ({ route }) => {
  return (
    <Profiles
      query={{
        name: "getFollowing",
        ethereumAddress: route.params.ethereumAddress,
      }}
    />
  );
};

export default ViewFollowing;
