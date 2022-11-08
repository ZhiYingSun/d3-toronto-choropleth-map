export const setSeverity = function(mapData, crimeData, hood_id) {
   
    for (let i = 0; i < crimeData.length; i++) {
        if (mapData[i].properties.AREA_S_CD === hood_id) {
            var severity = crimeData[i].crime_rate
            var high_colour = "#800026"
            var medium_colour = "#a54a52"
            var low_colour = "#c08076"
            
            if (severity === "low") {
                // console.log(severity)
                return low_colour
            } else if (severity === "medium") {
                return medium_colour
            } else {
                return high_colour
            }   
        }
    }
}