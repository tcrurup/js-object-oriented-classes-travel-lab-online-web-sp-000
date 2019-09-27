class Driver{
  
  constructor(name, joinDate){
    this.name = name;
    this.startDate = new Date(joinDate);
  }
  
  startDate(){
    return new Date(this.joinDate);
  }
}
