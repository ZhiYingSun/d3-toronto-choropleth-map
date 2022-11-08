import * as d3 from "d3";

export const setMapProjection = function(mapData) {
  // use the geoAlbers map projection
  const projection = d3.geoAlbers();
  // adjust projection to fit area of map canvas
  projection
    .precision(0)
    .rotate([50, 0, 0])
    .fitExtent(
      [
        [0, 200],
        [940, 580],
      ],
      mapData
    );
  return projection;
};