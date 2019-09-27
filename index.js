class Driver{
  
  constructor(name, joinDate){
    this.name = name;
    this.startDate = new Date(joinDate);
  }
  
  yearsExperienceFromBeginningOf(year){
    return new Date(year, 1).getYear() - this.startDate.getYear();
  }
  
}
