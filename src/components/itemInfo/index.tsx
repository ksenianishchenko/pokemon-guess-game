import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setItemInfo } from "../../redux/itemInfo/fetch";
import { RootState } from "../../redux/store";
import { RouteComponentProps, withRouter } from 'react-router';

type StateProps = {
  itemInfo: any;
}

type DispatchProps = {
  setItemInfo: (id:string) => void;
}

type ItemInfoParams = {
  pokemonId: string; 
};

type ItemInfoProps = RouteComponentProps<ItemInfoParams>

type Props = StateProps & DispatchProps & ItemInfoProps;

const ItemInfo = (props:Props) => {

  const {itemInfo, setItemInfo, match} = props;

  useEffect(() => {
    
    setItemInfo(match.params.pokemonId);
    
  }, [match.params.pokemonId]);

  return <div className="item-info">
    Item info
    <p></p>
  </div>
}

const mapState = (state: RootState) => ({
  itemInfo: state.itemInfoReducer.itemInfo
});

const mapProps = (dispatch: any) => ({
  setItemInfo: (id:string) => {
      dispatch(setItemInfo(id))
  }
})

const ItemInfoWithRouter = withRouter(ItemInfo);

export default connect(mapState, mapProps)(ItemInfoWithRouter);