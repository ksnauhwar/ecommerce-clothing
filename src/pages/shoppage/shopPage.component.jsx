import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionContainer from "../collectionpage/collection.container";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        ></Route>
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
