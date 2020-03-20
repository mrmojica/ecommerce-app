import React from "react";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import { selectCollections } from "../../redux/shop/shopSelectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const Shop = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...props }) => (
      <CollectionPreview key={id} {...props} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(Shop);
