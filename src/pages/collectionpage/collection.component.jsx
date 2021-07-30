import React from "react";
import { connect } from "react-redux";
import { selectShopCollection } from "../../redux/shop/shop.selectors";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";

const Collection = ({ collection }) => {
  return (
    <div className="collection">
      <h2 className="heading-secondary">{collection.title}</h2>
      <div className="collection__items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
