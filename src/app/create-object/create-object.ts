import { Component } from '@angular/core';


@Component({
  selector: 'app-create-object',
  imports: [ ],
  templateUrl: './create-object.html',
  styleUrl: './create-object.css'
})
export class CreateObject {
  // A. Create a Object to store Product information
  //    Fields will be ProductName, Category, Price, Discount
  //    print ProductName & Price in console

  productInfo :
    {
      productName :string;
      category : string ;
      price : number;
      dicount : number;
    } =
    {
      productName : "Smart Watch",
      category : "Electronic Device",
      price : 2000,
      dicount : 10
    };
  

  constructor(){
    this.printProductDetals();
    this.printSchoolInfo();
    this.printSchoolInfo();
    this.updateInfo();
    this.updatedInfo();
  }

  printProductDetals(){
    console.log("   ")
     console.log("*** OBJECT TASK ***")
     console.log("Product Details..");
     console.log("Product Name :", this.productInfo.productName);
     console.log("Price :", this.productInfo.price);
  }

  /* B. Create a Object to store Train Ticket information
     Fields will be TrainName, TrainNo, NoOfPassinger, From, To, DateOfJourney
     Print whole Information in P tag like below
     Traine Name: Vidarbah Express
     Traine No: 12135
     No Of Passinger : 3
     From Location: Nagpur
     To Location: Mumbai
     Date Of Journey: 08-04-2023 05.00 PM */

   trainTicket :{
    trainName:string;
    trainNumber :number;
    noOfPassengers :number;
    from:string;
    to:string;
    dateOfJourney:string;
   } = {
    trainName:'Express',
    trainNumber :101,
    noOfPassengers :21,
    from:'Mumbai',
    to:'Delhi',
    dateOfJourney:'21-7-2025 10:30 PM'
   }; 
  
  // C. Create a Object to Hold Information of School
  //    Fields will be SchoolName, PrincipleName, ContactNo, Address
  //    Print whole Object in console
  //    after that add one more Field SchoolEmail with some email
  //    again print updated object
  schoolInfo :{
    schoolName :string,
    principleName : string,
    contactNo :number,
    address :string,
    email :string
  } = {
    schoolName :" English Medium School, Nashik",
    principleName : "Chatur R.S",
    contactNo :9922567843,
    address :"At.Nashik,near green Vally,phase no2,Nashik",
    email :''
  };

  printSchoolInfo(){
    console.log("  ")
    console.log("  TASK 3  ")
    console.log("School Information");
    console.log("School Name :",this.schoolInfo.schoolName);
    console.log("School Principle Name :",this.schoolInfo.principleName);
    console.log("School Contact :",this.schoolInfo.contactNo);
    console.log("School Address :",this.schoolInfo.address);
    console.log();
  }

  updateInfo(){
    this.schoolInfo.email ="jinny123@gmaikl.com"
  }

  updatedInfo(){
    console.log("  ")
    console.log("UPDATED SCHOOL INFORMATION")
    console.log("School Information");
    console.log("School Name :",this.schoolInfo.schoolName);
    console.log("School Principle Name :",this.schoolInfo.principleName);
    console.log("School Contact :",this.schoolInfo.contactNo);
    console.log("School Address :",this.schoolInfo.address);
    console.log("Email :",this.schoolInfo.email);
  }
}
