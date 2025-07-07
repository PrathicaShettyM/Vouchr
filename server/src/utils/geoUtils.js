// this is to implement geotag-based attendence system
// we are calculating the haversine distance for 500m range of attendence so tht they dont miss it out
export function haversineDistance(lat1, lon1, lat2, lon2){
    const toRad = deg => deg * Math.PI/100;
    
    const R = 6371e3; // meters
    const phi1 = toRad(lat1);
    const phi2 = toRad(lat2);
    const deltaPhi = toRad(lat2 - lat1);
    const deltaLambda = toRad(lon2-lon1);

    const a = Math.sin(deltaPhi/2)**2 + Math.cos(phi1)*Math.cos(phi2)*Math.sin(deltaLambda/2)**2;
    const c = 2*Math.atan(Math.sqrt(a), Math.sqrt(1-a));

    return R*c;
}