// თუ მანქ ასაკი >20, არ გადაფორმდება, თუ 10-20, გადასახადი იქნება 5000 ლარი, თუ<10 1000
let carAge = 19
if (carAge > 20) { console.log("არ გადაფორმდება") }
else if (carAge >= 10 && carAge <= 20) { console.log("5000") }
else { console.log("1000") }


// მასივის სიგრძე, ელემენტების რაოდენობა (length)
let numbers = [1, 2, 3, 4, 5]
console.log(numbers.length)
//მასივის ბოლოს ელემენტების დამატება (push)
numbers.push(6, 7)
console.log(numbers)
//მასივის ბოლოს ელემენტის წაშლა (pop)
numbers.pop()
console.log(numbers)
// მასივის ბოლოს ელემენტების წაშლა (pop)
numbers.pop([3, 4])
console.log(numbers)
// მასივის დასაწყისში ელემენტების დამატება (unshift)
numbers.unshift(-1, 0)
console.log(numbers)
// მასივის დასაწყისში ელემენტების წაშლა (shift)
numbers.shift([0, 1])
console.log(numbers)
// რამდენიმე მასივის გაერთიანება (concat)
let numbers2 = [6, 7, 8, 9]
newNumbers = numbers.concat(numbers2)
console.log(newNumbers)
// არსებული მასივიდან ახალი მასივის შექმნა (slice)
numbers.slice([0, 4])
console.log(numbers)
//ელემენტის ინდექსის პოვნა (array.indexOf(searchElement[, fromIndex]))
let fruits = ["banana", "apple", "orange", "pineapple"]
let orange = fruits.indexOf("orange")
console.log(orange)
// ობიექტი
let person = { firstName: "ani", lastName: "kirkitadze", age: 28, degree: "bachelor" }
console.log(person.age)

person.degree = "master"
console.log(person.degree)
console.log(person)

person.address = "tbilisi"
console.log(person)

//for (initialExpression; condition, updateExpression)  გამოვიტანოთ 1-5 რიცხვები
for (let i=1; i<=5; i++) console.log(i)
// for in
let person = { firstName: "ani", lastName: "kirkitadze", age: 28, degree: "bachelor" }




let i=1, sum=0
for (let i=0; i<5; i++) sum+=i
     {console.log (sum)}











