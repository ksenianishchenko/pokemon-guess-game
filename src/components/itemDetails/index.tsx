import React from "react";
import { getStatsShortStyle, getTypeStyle } from "../../helpers";

import "./styles.scss";

type ItemTypeDetail = {
  name: string;
  url: string;
}

type StatsItemDetail = {
  name: string;
  url: string;
}

type ItemType = {
  slot: number;
  type: ItemTypeDetail;
}

type StatsItem = {
  base_stat: number;
  effort: number;
  stat: StatsItemDetail;
}

const ItemDetails = (props: any) => {

  const {item} = props;
  return <div className="item-details">
    <h2 className="title title-h2 title-shadow title-uppercase">{item.name}</h2>
    <p className="text item-details-subtitle">{`#${item.order}`}</p>
    <div className="list-group list-group-horizontal justify-content-center">
      {
        item.types.map((t:ItemType, index:number) => {
          return <div className="list-group-item types-item" key={index} style={getTypeStyle(t.type.name)}>
            {t.type.name}
          </div>
        })
      }
    </div>
    <div className="list-group list-group list-group-horizontal justify-content-center">
      <div className="list-group-item measurment-item">
        {item.height / 10} m
        <span>Height</span>
      </div>
      <div className="list-group-item measurment-item">
        {item.weight / 10} kg
        <span>Weight</span>
      </div>
    </div>
    <div className="stats-wrap">
      <h3 className="stats-title">Base stats</h3>
      <div className="list-group list-group-vertical">
        {
          item.stats.map((s:StatsItem, index:number) => {
            return <div className="list-group-item stat-item" key={index}>
              <span className="stat-item-name">{getStatsShortStyle(s.stat.name)}</span>
              <div className="stat-item-base">
                <div className="range-wrap">
                  <div className="range" style={{width: `calc(${s.base_stat} * 100% / 350 )`}}>{s.base_stat}</div>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  </div>
}

export default ItemDetails;