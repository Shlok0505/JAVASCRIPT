function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C = ${fahrenheit}°F`);



let str = "this is \"string";

console.log(str.length); 
console.log(str.length > 10); 
console.log(str.toUpperCase()); 
console.log(str.toLowerCase()); 
console.log(str.trim()); 
console.log(str.split(" ")); 
console.log(str.indexOf("string")); 
console.log(str.replace("string", "new string")); 
console.log(str.substring(0, 5));
console.log(str.slice(0, 5)); 


let str1="hello";
let str2="hello";

if(str1===str2){
    console.log("True")
}
else{
    console.log("False")
}

function demos(n1){
    console.log(n1)
}
demos(100)

function demo(...params){
    console.log(params)
}
demo(1,2,3,4,5,6,7,8,9)


let x = function demo(num1){
    console.log(num1)
}
x(7)

let y = () => console.log("Hello functions");
y();

function demo2(s1,s2,s3,s4){
    console.log(s1+s2+s3+s4)
    console.log(s1,s2,s3,s4)
}
demo2(10,20)
 
