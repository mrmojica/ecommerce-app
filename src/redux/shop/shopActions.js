import ShopActionTypes from "./shopTypes";
import { firestore } from "../../Firebase/utils";
import { convertCollectionsSnapshotToMap } from "../../Firebase/utils";

// TODO: rename functions to be plural
export const fetchCollectionStart = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
  payload: collectionsMap
});

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionsMap));
        this.setState({ loading: false });
      })
      .catch((error) => dispatch(fetchCollectionFailure(error.message)));
  };
};
