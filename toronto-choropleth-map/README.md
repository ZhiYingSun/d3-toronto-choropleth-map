# d3-toronto-choropleth-map
feel free to use it for your project!

![Toronto map](https://raw.githubusercontent.com/ZhiYingSun/d3-toronto-choropleth-map/main/toronto-choropleth-map/public/toronto-map.gif)


to start up the app:
```
cd toronto-choropleth-map
npm install
npm start
```

A few notes:
- the map data is loaded in [useMapTools.js](https://github.com/ZhiYingSun/d3-toronto-choropleth-map/blob/main/toronto-choropleth-map/src/hooks/useMapTools.js)
- the data for the colour represents the crime rate for each neighbourhood and is loaded in [HoodRegionList.js](https://github.com/ZhiYingSun/d3-toronto-choropleth-map/blob/main/toronto-choropleth-map/src/components/HoodRegionList.js)
- the program takes in geojson data, we loop through each region and create the component for it, then we put them together
- we have a HoodRegionList component that generates the map and it passes down each region's geojson data into a HoodRegion componenet
