import { Component } from '@angular/core';

@Component({
  selector: 'app-variable',
  imports: [],
  templateUrl: './variable.html',
  styleUrl: './variable.css'
})
export class Variable {
  
// 1. create 3 variables to store firstName, middleName, lastName and Generate fullName by joining 3 variable and print full name in console.

firstName : string = "SARITA";
middleName :string = "RAMBHAU";
lastName :string = "SADGIR";
fullName :string = this.firstName + " " + this.middleName + " " + this.lastName;

constructor(){
  this.printFullName();
  this.studentDetails();
  this.printAddress();
}

printFullName(){
  console.log("Student Full Name :" , this.fullName);
}

// 2. create variables to store student details like name, contactNo, FatherName, MotherName, Class,RollNo and print it in console.
name :string = "RITU";
contactNo :number = 9665386035;
fatherName :string = "Ganesh";
motherName :string = "Sangita";
class :string = "Information Technology";
rollNo :number = 24;

studentDetails(){
  console.log("Student Name :" , this.name);
  console.log("Student Roll Number :" , this.rollNo);
  console.log("Student Father Name :" , this.fatherName);
  console.log("Student Mother Name :" , this.motherName);
  console.log("Student Class :" , this.class);
}

// 3. create variable to store address, city ,state and pincode- and print address and city in console.
address :string = "AT.POST.Pune";
city :string = "Pune";
state :string = "Maharashtra";
pincode :number = 422601;

printAddress(){
  console.log("student Address :",this.address);
  console.log("student City :",this.city);
}
}