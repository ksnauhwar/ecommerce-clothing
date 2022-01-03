import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectShopCollection } from "../../redux/shop/shop.selectors";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";

const Collection = (props) => {
  var params = useParams();
  var collection = useSelector(selectShopCollection(params.collectionId));
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

export default Collection;
