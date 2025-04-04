/* დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს ,
თუ რიცხვები ტოლია დააბრუნებს 0 -ს */
function compareNumbers(m, n) {
    if (m > n) return m;
    else if (m == n) return 0;
    else return n
}
// console.log(compareNumbers(10, 7))
// console.log(compareNumbers(5, 5))
// console.log(compareNumbers(5, 11))
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი
function sum(number1, number2) {
    return number1 + number2
}
console.log(sum(5, 7))
    // დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)
     function fullName(){
         console.log("ani kirkitadze")
     }
     fullName()
    // // // მეორე ვარიანტი
     let fullName=()=> console.log ("ani kirkitadze")
     fullName()
    //  //
     const person={
        firstName: "ani",
        lastName: "kirkitadze"
    };
     person.fullName=function(){
        return  this.firstName && this.lastName
     }
     console.log(person.fullName())
    /*დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ 
     სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)*/
    function fullName(firstName, lastName) {
        firstName = "Ani"
        lastName = "kirkitadze"
        return firstName + " " + lastName;
    }
    console.log(fullName())
    /*Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) 
    რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის 
    გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)*/
     function mult(n) {
        let y = 1;

        for (let i = 1; i <= n; i++) {
            y *= i
        }

        return y

    }
    console.log(mult(5))


/* Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - რომელსაც აქვს შემდეგი properties: firstName, lastName, age, 
scores (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) და მეთოდი fullName რომელიც აბრუნებს სტუდენტის სრულ სახელს 
( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ ) */
//6.დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)
let student = {
    firstName: "ani",
    lastName: "kirkitadze",
    age: 28,
    scores: [4, 7, 5, 3, 2],

    fullName: function () {
        return this.firstName + " " + this.lastName

    }

}
console.log(student.fullName())
//7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს
student = {
    firstName: "ani",
    lastName: "kirkitadze",
    age: 28,
    scores: [4, 7, 5, 3, 2],
    totalScore: function () {
        let sum = 0
        for (i = 0; i < this.scores.length; i++) {

            sum += this.scores[i];
        }
        return sum

    }
}
console.log(student.totalScore())
//7.2 ცალკე ფუნქციად რომ დავწეროთ ქულები
function scores(score1, score2, score3, score4, score5) {
    let totalScore = score1 + score2 + score3 + score4 + score5;
    return totalScore
}
console.log(scores(4, 7, 5, 3, 2))
//8. დაბეჭდეთ სტუდენტის სახელი და ასაკი
console.log(student.firstName, student.age)









