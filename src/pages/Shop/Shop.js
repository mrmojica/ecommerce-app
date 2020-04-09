import React from "react";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import { Route } from "react-router-dom";
import Collection from "../Collection/Collection";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../Firebase/utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shopActions";

class Shop extends React.Component {
  unsubScribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubScribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
      }
    );
  }

  render() {
    const { match } = this.props;
    return (
      <>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(Shop);
