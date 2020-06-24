import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectionIsCollectionsLoaded } from "../../../redux/shop/shopSelectors";
import Collection from "../Collection";
import WithSpinner from "../../../containers/WithSpinner/WithSpinner";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectionIsCollectionsLoaded(state)
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;
