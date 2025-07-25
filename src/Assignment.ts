// Data types, type annotation, type assertion

//bai1: fix lỗi và giải thích
// let age: number = "25";
// let isActive: boolean = "true";
// let data: any = { x: 10 };
// data = "hello";
//đã sửa
let age: number = 25; // "25" là string nên bỏ dấu ngoặc
let isActive: boolean = true; // "true" là string nên bỏ dấu ngoặc
let data: any = { x: 10 };
data = "hello";

//bai2:
let user: {
  name: string;             
  age?: number;             
  roles: [string, number];  
};


user = {
  name: "Alice",
  roles: ["admin", 1],
};

//bai3
const input = document.getElementById("input") as HTMLInputElement;
const value = Number(input.value); // Ép kiểu từ string → number

//bài 4
//Dùng unknown khi chưa biết kiểu dữ liệu, nhưng muốn đảm bảo an toàn trước khi thao tác.



//FUNCTION

//bài 1:
function sum(a: number, b: number = 10): number {
  return a + b;
}

//bài 2

function mergeStrings(...strings: string[]): string {
  return strings.join(""); // hoặc join(" ") nếu muốn có dấu cách
}


//Bài 3
function getValue(input: string): string;
function getValue(input: number): number;

function getValue(input: string | number): string | number {
  if (typeof input === "string") {
    return input.toUpperCase(); 
  } else if (typeof input === "number") {
    return input * 2; 
  }
  throw new Error("Invalid input type");
}

//bai4
function filterArray<T>(arr: T[], condition: (item: T) => boolean): T[] {
  const result: T[] = [];

  for (const item of arr) {
    if (condition(item)) {
      result.push(item);
    }
  }

  return result;
}


//Interface và type

//bài 1:
interface Car {
  readonly brand: string; 
  speed: number;
  start(): void;         
}

// Ví dụ 
const myCar: Car = {
  brand: "Toyota",
  speed: 100,
  start() {
    console.log("Car started");
  }
};

//bài 2
type Person1 = { name: string };

type Employee = Person1 & { employeeId: number };

// Ví dụ:
const emp: Employee = {
  name: "Alice",
  employeeId: 123
};

//bài 3
type Dictionary = {
  [key: string]: string;
};

// Ví dụ:
const colors: Dictionary = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff"
};

//bài 4:
type OptionalFields<T> = {
  [K in keyof T]?: T[K];
};

// Ví dụ:
type User = { name: string; age: number };
type PartialUser = OptionalFields<User>;
// => { name?: string; age?: number }


//CLASSES VÀ OOP

//bài 1
class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`My name is ${this.name}`);
  }
}

// Test
const a = new Animal("Buddy");
a.speak(); // Output: My name is Buddy


// bài 2
class Cat extends Animal {
  speak(): void {
    console.log("Meow");
  }
}

// Test
const c = new Cat("Tom");
c.speak(); // Output: Meow


//bài 3
abstract class Shape {
  abstract area(): number;
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

// Test
const rect = new Rectangle(10, 5);
console.log(rect.area()); // Output: 50


// bài 4
class Person {
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value > 0 && value < 120) {
      this._age = value;
    } else {
      throw new Error("Age must be between 1 and 119");
    }
  }
}

// Test
const p = new Person();
p.age = 25;
console.log(p.age); // Output: 25

// p.age = -5; // ❌ Throw Error

