import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../collectionpage/collection.component";
import { firestore, getShopCollections } from "../../firebase/firebase.util";
import { updateCollection } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot((snapshot) => {
      const collections = getShopCollections(snapshot);
      this.props.dispatch(updateCollection(collections));
    });
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverview}
        ></Route>
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    );
  }
}

export default connect(null)(ShopPage);
