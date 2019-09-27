class Driver{
  
  constructor(name, joinDate){
    this.name = name;
    this.startDate = new Date(joinDate);
  }
  
  yearsExperienceFromBeginningOf(year){
    return new Date(year, 1).getYear() - this.startDate.getYear();
  }
}

class Route{
  
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  blocksTravelled(){
    let northSouthBlocks = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
  }
}
