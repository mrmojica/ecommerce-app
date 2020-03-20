import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./styles.scss";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { selectCollections } from "../../redux/shop/shopSelectors";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...props }) => (
      <CollectionPreview key={id} {...props} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
