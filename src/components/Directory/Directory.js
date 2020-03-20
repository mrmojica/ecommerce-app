import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { connect } from "react-redux";
import { selectDirectorySection } from "../../redux/directory/directorySelectors";
import { createStructuredSelector } from "reselect";
import "./styles.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...props }) => (
      <MenuItem key={id} {...props} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
