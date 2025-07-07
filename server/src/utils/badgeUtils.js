export function getBadges(hours){
    const badges = [];
    
    if(hours >= 5) badges.push("Bronze");
    if(hours >= 10) badges.push("Silver");
    if(hours >= 15) badges.push("Gold");

    return badges;
}