import { color } from "d3";
import {
  handleMouseOver,
  handleMouseOut,
  handleMouseMove,
} from "../utils/handleTooltip";
import "./HoodRegion.css";

export default function HoodRegion(props) {
  const { path, tooltipData, colour } = props;

  //each path defines the shape of a region in the map
  return (
    <path
      className="path"
      d={path}
      style={{fill: colour}}
      onMouseOver={() => {
        handleMouseOver(tooltipData);
      }}
      onMouseOut={handleMouseOut}
      onMouseMove={(event) => {
        handleMouseMove(event);
      }}
    />
  );
}