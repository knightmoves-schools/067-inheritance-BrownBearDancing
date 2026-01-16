class Agable{
    constructor(year){
        this.currentYear = currentYear;
        this.objectsYear = objectsYear;  
        calculateAge= currentYear-objectsYear
    }
}
class Company extends Agable{
    constructor(name, taxId, yearEstablished, taxRate){
        this.name = name;
        this.id = taxId;
        super(yearEstablished)
        this.taxRate = taxRate;
    }
}

class Person extends Agable{
    constructor(name, ssn, birthYear, taxRate){
        this.name = name;
        this.id = ssn;
        super(birthYear)
        this.taxRate = taxRate;
    }
}

class Car extends Agable{
    constructor(model, vin, year){
        this.name = model;
        this.id = vin;
        super(year)
    }
}

//should create a class named Agable that takes a year and has an age method that calculates the age (current year - objects year) (use new Date().getFullYear() to get the current year)
//should inherit from Agable in Company class and pass yearEstablished to Agable in the constructor
//should inherit from Agable in Person class and pass birthYear to Agable in the constructor
//should inherit from Agable in Car class and pass year to Agable in the constructor




