import React from "react";
import {Tile} from '../../components/tile/Tile'

export const TileList = ({array}) => {
  return (
    <div>
      {array.map((element) => {
              return (
                <Tile tileInfo={element} />
              )
            })}
    </div>
  );
};
