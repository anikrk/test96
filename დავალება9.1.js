//1. Დაბეჭდეთ რიცხვები 2 დან 8 მდე
for (let i = 2; i < 8; i++) 
    { console.log(i) }
//2. 5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…)
for (let m = 5; m <= 35; m += 4)
     { console.log(m) }
//3. დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი
let mult = 1
for (let i = 3; i < 8; i++)
     { mult *= i } console.log(mult)
//4. Გამოაცხადეთ ობიექტი person რომელსაც აქვს firstName, lastName, age და დაბეჭდეთ person-სრული სახელი ( სახელი და გვარი)
let person = { firstName: "ani", lastName: "kirkitadze", age: 28 }
console.log(person.firstName, person.lastName)
//5. დაბეჭდეთ მეოთხე დავალებაში გამოცხადებული პერსონის თითოეული property value 
for (const personKey in person)
     console.log(person[personKey])
//  6. დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"]; დაბეჭდეთ მასივის თითოეული წევრი.
let fruits = ["Apple", "Banana", "Orange"]
for (const element of fruits) 
    { console.log(element) }
//7 დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits
fruits.unshift("Grapes"); fruits.push("Pineaples")
for (const element of fruits) 
    { console.log(element) }
//8.დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯამი
let sum = 0
for (let i = 1; i < 34; i++) 
    { sum += i } console.log(sum)