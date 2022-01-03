import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import Spinner from "../../components/spinner/spinner.component";

const CollectionOverviewContainer = lazy(() =>
  import("../../components/collection-overview/collection-overview.container")
);
const CollectionContainer = lazy(() =>
  import("../collectionpage/collection.container")
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner></Spinner>}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        ></Route>
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
