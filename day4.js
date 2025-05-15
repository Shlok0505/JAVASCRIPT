// function main(hour ,min){
//     let result = hour * 60 * 60 + min * 60;
//     console.log(result);
// }
// main(2,34);

// const person = {
//     name: "chandresh",
//     age: 23,
//     greet: function() {
//       return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
//     }
//   };
  
//   console.log(person.greet());
  



//   function person(name,age,lec){
//     this.name="name";
//     this.age="age";
//     this.lec="lec";
  

// }

//   let student=new person("shivam",23,"Math");
//   console.log(student.name); 
//   console.log(student.age);  
//   console.log(student.lec);  


// function person(name, age, lec) {
//     this.name = name;
//     this.age = age;
//     this.lec = lec;

//     this.pname = function() {
//         console.log("hi");
//     };
// }

// let student = new person("shlok", 20, "computer");
// person.prototype.con = "India";

// console.log(student.pname());
// console.log(student)

// // Main Product Class
// class AutomotiveProduct {
//     constructor(name) {
//       this.name = name;
//       this.mainFeature = "Self-driving capability";
//     }
  
//     showMainFeature() {
//       return `${this.name} has: ${this.mainFeature}`;
//     }
//   }
  
//   // Variant 1
//   class ElectricCar extends AutomotiveProduct {
//     constructor(name) {
//       super(name);
//       this.variantFeature = "Battery-powered with fast charging";
//     }
  
//     showFeatures() {
//       return `${this.showMainFeature()} and ${this.variantFeature}`;
//     }
//   }
  
//   // Variant 2
//   class HybridCar extends AutomotiveProduct {
//     constructor(name) {
//       super(name);
//       this.variantFeature = "Combines electric and fuel engine";
//     }
  
//     showFeatures() {
//       return `${this.showMainFeature()} and ${this.variantFeature}`;
//     }
//   }
  
//   // Variant 3
//   class SportsCar extends AutomotiveProduct {
//     constructor(name) {
//       super(name);
//       this.variantFeature = "High speed with aerodynamic design";
//     }
  
//     showFeatures() {
//       return `${this.showMainFeature()} and ${this.variantFeature}`;
//     }
//   }
  
//   // Variant 4
//   class SUV extends AutomotiveProduct {
//     constructor(name) {
//       super(name);
//       this.variantFeature = "All-terrain capability and spacious interior";
//     }
  
//     showFeatures() {
//       return `${this.showMainFeature()} and ${this.variantFeature}`;
//     }
//   }
  
//   const electric = new ElectricCar("BMW m1");
//   const hybrid = new HybridCar("BMW M2");
//   const sports = new SportsCar("BMW M3");
//   const suv = new SUV("BMW M4");
  
//   console.log(electric.showFeatures());
//   console.log(hybrid.showFeatures());
//   console.log(sports.showFeatures());
//   console.log(suv.showFeatures());

// class Car {
//     constructor(brand) {
//       console.log("This from Parent Class");
//       this.carname = brand;
//     }
  
//     present() {
//       return `I have a ${this.carname}`;
//     }
//   }
  
//   // Child class
//   class Model extends Car {
//     constructor(brand, mod, func) {
//       console.log("This from Child Class");
//       super(brand); // Call parent constructor
//       this.func = func; // Store function passed as parameter
//       this.model = mod;
//     }
  
//     show() {
//       return `${this.present()}, it is a ${this.model}`;
//     }
//   }
  
//   // Simple function
//   let func = () => {
//     console.log("Hello");
//   };
  
//   // Create object of child class and pass a function
//   let myCar = new Model("Ford", "Mustang", func);
  
//   // Call the function stored in the object
//   myCar.func();
  
//   // Show car details
//   console.log(myCar.show());


// function person(fname,lname) {
//     let firstname = fname;
//     let lastname = lname;

//     let getDetails_noaccess = function() {
//         return (`First name is: ${firstname} Last name is: ${lastname}`);
//     }

//     this.getDetails_access = function() {
//         return (`First name is: ${firstname}, Last name is: ${lastname}`);
//     }
// }

// let person1 = new person("shlok", "spidey");
// console.log(person1.firstname);
// console.log(person1.getDetails_noaccess);
// console.log(person1.getDetails_access());


// class Rectangle 
// {
//     constructor(width, height) 
//     {
//       this.width = width;
//       this.height = height;
//     }
  
//     calculateArea() 
//     {
//       return this.width * this.height;
//     }
  
//     calculatePerimeter() 
//     {
//       return 2 * (this.width + this.height);
//     }
//   }
  

//   let rect = new Rectangle(4, 5);
//   console.log("Area:", rect.calculateArea()); 
//   console.log("Perimeter:", rect.calculatePerimeter()); 


// class Rectangle 
// {
//     constructor(width, height) 
//     {
//       this.width = width;
//       this.height = height;
  
//       this.calculateArea = function()
//        {
//         return this.width * this.height;
//       };
  
//       this.calculatePerimeter = function() 
//       {
//         return 2 * (this.width + this.height);
//       };
//     }
//   }
  
//   let rect = new Rectangle(4, 5);
//   console.log("Area:", rect.calculateArea());
//   console.log("Perimeter:", rect.calculatePerimeter());

class Bank {
    constructor(name) {
      this.name = name;
      this.branches = [];
    }
  
    addBranch(branchName) {
      this.branches.push(branchName);
      console.log(`Branch ${branchName} added to ${this.name}`);
    }
  
    removeBranch(branchName) {
      const index = this.branches.indexOf(branchName);
      if (index !== -1) {
        this.branches.splice(index, 1);
        console.log(`Branch ${branchName} removed from ${this.name}`);
      } else {
        console.log(`Branch ${branchName} not found in ${this.name}`);
      }
    }
  
    displayBranches() {
      console.log(`Branches of ${this.name}:`);
      this.branches.forEach(branch => console.log(branch));
    }
  }
  
  const myBank = new Bank('State Bank of India');
  
  myBank.addBranch('CBD Belapur');
  myBank.addBranch('Kharghar');
  myBank.addBranch('Vashi');
  
  myBank.displayBranches();
  
  myBank.removeBranch('Kharghar');
  
  myBank.displayBranches();