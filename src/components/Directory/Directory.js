import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { connect } from "react-redux";
import { selectDirectorySection } from "../../redux/directory/directorySelectors";
import { createStructuredSelector } from "reselect";
import { DirectoryMenuContainer } from "./DirectoryStyles";

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...props }) => (
      <MenuItem key={id} {...props} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
