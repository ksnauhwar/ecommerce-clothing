import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import CollectionOverview from "./collection-overview.component";
import WithSpinner from "../with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
