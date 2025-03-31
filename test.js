// გამოაცხადეთ ორი ცვლადი , მიანიჭეთ მნიშვნელობები 87 და 65, დაბეჭდეთ (console.log()) ამ რიცხვების ჯამი
let x=87, y=65;
console.log (x+y)
// გამოაცხადეთ ობიექტი student, ფროფერთებით: firstName, lastName, age, email, marks, დაბეჭდეთ student ის სახელი
let student={firstName:"ani", lastName:"kirkitadze", age:28, email:"akirkitadze96@gmail.com", 
    marks:[10,10,10]
}
console.log(student.firstName)
// გამოაცხადეთ ორი ცვლადი m და n მნიშვნელობებით 45 და 23, დაბეჭდეთ მათი ჯამი თუ m მეტია n ზე , თუ არადა დაბეჭდეთ n.
let m=45, n=23
if (m>n) {console.log (m+n)}
else {console.log(n)}
/* გამოაცხადეთ ცვლადი studentName და მიანიჭეთ მნიშვნელობად თქვენი სახელი. დაბეჭდეთ “Rise and shine, “თქვენი სახელი” !” 
( მაგ თუ სახელი არის Irakli  უნდა დაიბეჭდოს Rise and shine, Irakli ! )*/
let studentName="ani"
if (studentName="ani") {console.log ("Rise and Shine, ani")}
/* გამოაცხადეთ ცვლადი bonus და salary ცვლადები, salary -ს მიანიჭეთ სასურველი რიცხვითი მნიშვნელობა, დაწერეთ თუ ხელფასი არის 
2000 ლარი ან მეტი მაშინ ბონუსი არის 0, თუ ხელფასი 2000 ze ნაკლებია მაშინ ბონუსი არის ხელფასის 10%. დაბეჭდეთ ბონუსი 
(ჯერ bonus ცვლადს უნდა მიანიჭოთ შესაბამისი მნიშვნელობა და შემდეგ დაბეჭდოთ bonus)*/
let salary=1800
let bonus=salary>=2000? 0: salary*0.1
console.log (bonus)
//გამოაცხადეთ ცვლადი a, b და c. სადაც a = 23, b=a-ნახევარი, c= a-ს და b-ს ჯამი. დაბეჭდეთ c.
let a=23, b=a/2, c=a+b
console.log(c)
// გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ.
//დაბეჭდეთ phones მასივის  პირველი და ბოლო ელემენტი ( ცალ-ცალკე console.log ეგში)
const phones =["Iphone", "Samsung", "Pixel", "Huawei", "Xiaomi"]
console.log(phones)
console.log(phones[0])
console.log(phones[4])





