import React from "react";
import { withRouter } from "react-router-dom";
import ItemInfoWithRouter from "../../components/itemInfo/index";

const ItemDetailsPage = () => {

  return <div className="item-details-page">
    <ItemInfoWithRouter />
  </div>
}

const ItemDetailsPageWithRouter = withRouter(ItemDetailsPage);

export default ItemDetailsPageWithRouter;