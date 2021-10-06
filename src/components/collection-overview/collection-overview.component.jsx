import React, { useEffect } from "react";
import { connect } from "react-redux";

import { selectShopCollections } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections, isLoading }) => {
  return (
    <div className="collection-overview">
      {collections.map((collection) => (
        <CollectionPreview
          routeName={collection.routeName}
          items={collection.items}
          title={collection.title}
          key={collection.id}
        ></CollectionPreview>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: selectShopCollections(state),
});

export default connect(mapStateToProps)(CollectionOverview);
