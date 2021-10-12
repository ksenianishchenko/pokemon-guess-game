import React, { useEffect } from "react";
import { connect } from "react-redux";
import { PokemonInfoItem } from "../../abstractions/pokemonInfoItem";
import { setItemsList } from "../../redux/itemsList/fetch";
import { RootState } from "../../redux/store";
import ItemCard from "../itemCard";

type StateProps = {
  itemsList: PokemonInfoItem[];
}

type DispatchProps = {
  setItemsList: () => void;
}
type Props = StateProps & DispatchProps;

const ItemsList = (props:Props) => {

  const {itemsList, setItemsList} = props;

  useEffect(() => {
    setItemsList();
  }, [setItemsList])
  
  if(itemsList) {
    return <div className="items-list">{
      itemsList.length ? itemsList.map((item: PokemonInfoItem, index:number) => {
        return <div className="item-card-wrap" key={index}>
          <ItemCard item={item} />
        </div>
      })
      : <p>No results yet</p>
    }</div>
  } else {
    return <p>"Loading"</p>
  }
  
}

const mapState = (state: RootState) => ({
  itemsList: state.itemsListReducer.itemsList
});

const mapProps = (dispatch: any) => ({
  setItemsList: () => {
      dispatch(setItemsList())
  }
})

export default connect(mapState, mapProps)(ItemsList);