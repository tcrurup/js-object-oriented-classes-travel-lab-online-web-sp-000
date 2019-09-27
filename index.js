class Driver{
  
  constructor(name, joinDate){
    this.name = name;
    this.startDate = new Date(joinDate);
  }
  
  yearsExperienceFromBeginningOf(year){
    return new Date(year).getYear() - this.startDate.getYear();
  }
  
}
