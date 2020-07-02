import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from "./CollectionPreviewStyles";
import { withRouter } from "react-router-dom";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.url}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
