import { Feed } from "@lens-protocol/react-native-lens-ui-kit";

const ViewComments = ({ route }) => {
  return (
    <Feed
      query={{
        name: "getComments",
        publicationId: route.params.publicationId,
      }}
    />
  );
};

export default ViewComments;
