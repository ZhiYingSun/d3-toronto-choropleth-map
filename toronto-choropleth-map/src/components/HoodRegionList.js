import * as d3 from "d3";
import { setMapProjection } from "../utils/setMapProjection";
import { setSeverity } from "../utils/setSeverity";
import { useMapTools } from "../hooks/useMapTools";
import React, { useState, useEffect } from 'react'
import HoodRegion from "./HoodRegion";
import "./HoodRegionList.css";
import axios from 'axios';


export default function HoodRegionList(props) {
    // load geoJson
    const { mapData } = useMapTools();
    const [crimeData, setCrimeData] = useState({
    data: {},
    loading: true,
  });

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/ZhiYingSun/d3-toronto-choropleth-map/main/toronto-choropleth-map/public/crime_data.json')
        .then(data => setCrimeData((prevState) => {
          return { ...prevState, data: data, loading: false };
        }))
        .catch(err => console.log(err));
    }, [])
    

    // render map
    if (!mapData.loading && !crimeData.loading) {
        // console.log(crimeData)
        const path = d3.geoPath().projection(setMapProjection(mapData.data));
        // console.log(crimeData)
        const hoodRegions = mapData.data.features.map((data) => {
            const region_name = data.properties["AREA_NAME"].slice(0,-5);
            const hood_id = data.properties.AREA_S_CD
            const severity_colour  = setSeverity(mapData.data.features, crimeData.data.data, hood_id)
            console.log(severity_colour)
            return(
                <HoodRegion
                    key={hood_id}
                    path={path(data)}
                    tooltipData={region_name}
                    colour={severity_colour}
                />
            );
        });

        return (
            <>
                <h1>Toronto Neighbourhoods</h1>
                <svg className="map-canvas">
                    <g>{hoodRegions}</g>
                </svg>
            </>
        );
        
    } else {
        return <h1>Loading ...</h1>
    }
}