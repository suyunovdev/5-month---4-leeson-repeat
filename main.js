/////////////Class////////

// class Triangle {
//     constructor() {
//         this._leftSide = 0;
//         this._rightSide = 0;
//         this._width = 0;
//     }

//     getLeftSide() {
//         return this._leftSide;
//     }

//     getRightSide() {
//         return this._rightSide;
//     }

//     getWidth() {
//         return this._width;
//     }

//     setSides(a, b, c) {
//         this._leftSide = a;
//         this._rightSide = b;
//         this._width = c;
//     }
// }

// let triangle = new Triangle();
// triangle.setSides(3, 4, 5);
// console.log("Left Side:", triangle.getLeftSide());  
// console.log("Right Side:", triangle.getRightSide());  
// console.log("Width:", triangle.getWidth());  



// 2-masala

// class Employee {
//     #id;
//     #firstName;
//     #lastName;
//     #salary;

//     getId() {
//         return this._id;
//     }

//     getFirstName() {
//         return this._firstName;
//     }

//     getLastName() {
//         return this._lastName;
//     }

//     getSalary() {
//         return this._salary;
//     }

//     setId(id) {
//         this._id = id;
//     }

//     setFirstName(firstName) {
//         this._firstName = firstName;
//     }

//     setLastName(lastName) {
//         this._lastName = lastName;
//     }

//     setSalary(salary) {
//         this._salary = salary;
//     }

//     getFullName() {
//         return this._firstName + " " + this._lastName;
//     }

//     getAnnualSalary() {
//         return this._salary * 12;
//     }

//     raiseSalary(percent) {
//         this._salary *= (1 + percent / 100);
//     }
// }

// let employee = new Employee();
// employee.setId(1);
// employee.setFirstName("John");
// employee.setLastName("Doe");
// employee.setSalary(50000);

// console.log("Full Name:", employee.getFullName()); 
// console.log("Annual Salary:", employee.getAnnualSalary()); 
// employee.raiseSalary(10); 
// console.log("New Salary:", employee.getSalary()); 


// 3-masala
// class CustomDate {
//     _day;
//     _month;
//     _year;

//     getDay() {
//         return this._day;
//     }

//     getMonth() {
//         return this._month;
//     }

//     getYear() {
//         return this._year;
//     }

//     setDay(day) {
//         this._day = day;
//     }

//     setMonth(month) {
//         this._month = month;
//     }

//     setYear(year) {
//         this._year = year;
//     }

//     getISOdate() {
//         return `${this._day}-${this._month}-${this._year}`;
//     }
// }

// let date = new CustomDate();
// date.setDay(25);
// date.setMonth(5);
// date.setYear(2023);

// console.log("Bugungi sana: ", date.getISOdate()); 



// // 4-masala
// class Time {
//     #hour;
//     #minute;
//     #second;

//     getHour() {
//         return this._hour;
//     }

//     getMinute() {
//         return this._minute;
//     }

//     getSecond() {
//         return this._second;
//     }

//     setHour(hour) {
//         this._hour = hour;
//     }

//     setMinute(minute) {
//         this._minute = minute;
//     }

//     setSecond(second) {
//         this._second = second;
//     }

//     nextSecond() {
//         this._second++;
//         if (this._second === 60) {
//             this._second = 0;
//             this._minute++;
//             if (this._minute === 60) {
//                 this._minute = 0;
//                 this._hour++;
//                 if (this._hour === 24) {
//                     this._hour = 0;
//                 }
//             }
//         }
//     }

//     previousSecond() {
//         this._second--;
//         if (this._second === -2) {
//             this._second = 59;
//             this._minute--;
//             if (this._minute === -2) {
//                 this._minute = 59;
//                 this._hour--;
//                 if (this._hour === -2) {
//                     this._hour = 23;
//                 }
//             }
//         }
//     }
// }

// let time = new Time();
// time.setHour(23);
// time.setMinute(59);
// time.setSecond(58);

// console.log( `"Current Time:" ${time.getHour()} ${time.getMinute()} ${time.getSecond()}`);
// time.nextSecond();
// console.log(`"Next Second:", ${time.getHour()}  ${time.getMinute()} ${time.getSecond()}`);
// time.previousSecond();
// console.log(`"Previous Second:", ${time.getHour() } ${time.getMinute()} ${time.getSecond()}`);


// 5-masala

// class Shape {
//     constructor(color, filled) {
//         this._color = color;
//         this._filled = filled;
//     }

//     getColor() {
//         return this._color;
//     }

//     setColor(color) {
//         this._color = color;
//     }

//     isFilled() {
//         return this._filled;
//     }

//     setFilled(filled) {
//         this._filled = filled;
//     }
// }

// class Circle extends Shape {
//     constructor(color, filled, radius) {
//         super(color, filled);
//         this._radius = radius;
//     }

//     getRadius() {
//         return this._radius;
//     }

//     setRadius(radius) {
//         this._radius = radius;
//     }

//     getArea() {
//         return Math.PI * this._radius * this._radius;
//     }

//     getPerimeter() {
//         return 2 * Math.PI * this._radius;
//     }
// }

// class Rectangle extends Shape {
//     constructor(color, filled, width, height) {
//         super(color, filled);
//         this._width = width;
//         this._height = height;
//     }

//     getWidth() {
//         return this._width;
//     }

//     setWidth(width) {
//         this._width = width;
//     }

//     getHeight() {
//         return this._height;
//     }

//     setHeight(height) {
//         this._height = height;
//     }

//     getArea() {
//         return this._width * this._height;
//     }

//     getPerimeter() {
//         return 2 * (this._width + this._height);
//     }
// }

// let circle = new Circle("red", true, 5);
// console.log("Circle Area:", circle.getArea()); 
// console.log("Circle Perimeter:", circle.getPerimeter()); 

// let rectangle = new Rectangle("blue", false, 4, 6);
// console.log("Rectangle Area:", rectangle.getArea()); 
// console.log("Rectangle Perimeter:", rectangle.getPerimeter()); 


// 6-masala

// class Person {
//     constructor(name, address) {
//         this._name = name;
//         this._address = address;
//     }

//     getName() {
//         return this._name;
//     }

//     setName(name) {
//         this._name = name;
//     }

//     getAddress() {
//         return this._address;
//     }

//     setAddress(address) {
//         this._address = address;
//     }
// }

// class Student extends Person {
//     constructor(name, address, faculty, year, university) {
//         super(name, address);
//         this._faculty = faculty;
//         this._year = year;
//         this._university = university;
//     }

//     getFaculty() {
//         return this._faculty;
//     }

//     setFaculty(faculty) {
//         this._faculty = faculty;
//     }

//     getYear() {
//         return this._year;
//     }

//     setYear(year) {
//         this._year = year;
//     }

//     getUniversity() {
//         return this._university;
//     }

//     setUniversity(university) {
//         this._university = university;
//     }
// }

// class Employee extends Person {
//     constructor(name, address, salary, work) {
//         super(name, address);
//         this._salary = salary;
//         this._work = work;
//     }

//     getSalary() {
//         return this._salary;
//     }

//     setSalary(salary) {
//         this._salary = salary;
//     }

//     getWork() {
//         return this._work;
//     }

//     setWork(work) {
//         this._work = work;
//     }
// }

// let student = new Student("Ilyos Suyunov", "Toshkent", "Developer", 3, "SamDTU");

// console.log(student)

// let employee = new Employee("Ilyos Suyunov", "Toshkent Abu Tech", 50000, "Frontend Developer");
// console.log(employee)



// 7-misol

// class Animal {
//     constructor(name, speed, weight) {
//         this._name = name;
//         this._speed = speed;
//         this._weight = weight;
//     }

//     getName() {
//         return this._name;
//     }

//     setName(name) {
//         this._name = name;
//     }

//     getSpeed() {
//         return this._speed;
//     }

//     setSpeed(speed) {
//         this._speed = speed;
//     }

//     getWeight() {
//         return this._weight;
//     }

//     setWeight(weight) {
//         this._weight = weight;
//     }
// }

// class Mammal extends Animal {
//     _legs;

//     getLegs() {
//         return this._legs;
//     }

//     setLegs(legs) {
//         this._legs = legs;
//     }
// }

// class Fish extends Animal {
//     _size;

//     getSize() {
//         return this._size;
//     }

//     setSize(size) {
//         this._size = size;
//     }
// }

// class Cat extends Mammal {
//     getSound() {
//         return "Meow";
//     }
// }

// class Dog extends Mammal {
//     getSound() {
//         return "Woof";
//     }
// }

// class Whale extends Fish {
//     getSound() {
//         return "Poof";
//     }
// }

// class Shark extends Fish {
//     getSound() {
//         return "Sheef";
//     }
// }

// let cat = new Cat("Kitty", 10, 5);
// cat.setLegs(4);
// console.log(cat.getName() + " says " + cat.getSound());
// console.log("Number of legs:", cat.getLegs());

// let dog = new Dog("Buddy", 15, 8);
// dog.setLegs(4);
// console.log(dog.getName() + " says " + dog.getSound());
// console.log("Number of legs:", dog.getLegs());

// let whale = new Whale("Wally", 20, 100);
// whale.setSize("Huge");
// console.log(whale.getName() + " says " + whale.getSound());
// console.log("Size:", whale.getSize());

// let shark = new Shark("Sally", 25, 200);
// shark.setSize("Large");
// console.log(shark.getName() + " says " + shark.getSound());
// console.log("Size:", shark.getSize());

// 8-misol


// class CustomObject {
//     static customKeys(obj) {
//         return Object.keys(obj);
//     }

//     static customValues(obj) {
//         return Object.values(obj);
//     }

//     static customEntries(obj) {
//         return Object.entries(obj);
//     }
// }

// class CustomNumber {
//     static customIsInteger(num) {
//         return Number.isInteger(num);
//     }
// }

// class CustomArray {
//     static customIsArray(arr) {
//         return Array.isArray(arr);
//     }
// }

// let obj = {a: 1, b: 2, c: 3};
// console.log("Keys:", CustomObject.customKeys(obj)); 
// console.log("Values:", CustomObject.customValues(obj)); 
// console.log("Entries:", CustomObject.customEntries(obj)); 

// let num = 5;
// console.log("Is Integer:", CustomNumber.customIsInteger(num)); 

// let arr = [1, 2, 3];
// console.log("Is Array:", CustomArray.customIsArray(arr)); 


// // 9-misol
// class CustomArray {
//     constructor(array) {
//         this._array = array;
//     }

//     static isNumberArray(array) {
//         return array.every(item => typeof item === 'number');
//     }

//     static sum(arr) {
//         return arr.reduce((acc, curr) => acc + curr, 0);
//     }

//     static max(arr) {
//         return Math.max(...arr);
//     }

//     static min(arr) {
//         return Math.min(...arr);
//     }
// }

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [1, 2, '3', 4, 5]; 

// console.log("Array 1 is number array:", CustomArray.isNumberArray(array1)); 
// console.log("Array 2 is number array:", CustomArray.isNumberArray(array2)); 

// console.log("Sum of Array 1:", CustomArray.sum(array1)); 
// console.log("Max of Array 1:", CustomArray.max(array1)); 
// console.log("Min of Array 1:", CustomArray.min(array1)); 


// 10-lesson

// class Person {
//     constructor(housePrice, housesNumber, carPrice, carsNumber, bankAccount) {
//         this._housePrice = housePrice;
//         this._housesNumber = housesNumber;
//         this._carPrice = carPrice;
//         this._carsNumber = carsNumber;
//         this._bankAccount = bankAccount;
//     }

//     getWealth() {
//         return this._housePrice * this._housesNumber + this._carPrice * this._carsNumber + this._bankAccount;
//     }
// }

// class RichPerson extends Person {
//     constructor(housePrice, housesNumber, carPrice, carsNumber, bankAccount, companyPrice, companiesNumber, investigation) {
//         super(housePrice, housesNumber, carPrice, carsNumber, bankAccount);
//         this._companyPrice = companyPrice;
//         this._companiesNumber = companiesNumber;
//         this._investigation = investigation;
//     }

//     getWealth() {
//         return super.getWealth() + this._companyPrice * this._companiesNumber + this._investigation;
//     }
// }

// let ordinaryPerson = new Person(200000, 1, 50000, 2, 100000);
// console.log("Oddiy odamning boyligi: ", ordinaryPerson.getWealth());

// let richPerson = new RichPerson(200000, 1, 50000, 2, 100000, 1000000, 3, 500000);
// console.log("Boy odamning boyligi:", richPerson.getWealth()); 
