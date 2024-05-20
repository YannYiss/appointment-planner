import React from "react";

export const Tile = ({tileInfo}) => {
  return (
    <div className="tile-container">
      <p className="tile-title tile">{tileInfo.title}</p>
      {Object.keys(tileInfo.details).map((key) => {
        return <p className="tile">{tileInfo.details[key]}</p>
      })}
    </div>
  );
};
