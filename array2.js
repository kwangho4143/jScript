var sum1 = 0;
function aryFunc() {
    var numbers = [45, 28, 22, 10, 55];
    
    numbers.forEach(function (val, idx, ary) {
        console.log(val, idx, ary);
        sum1 += val;
        
    });
    console.log(sum1);
    document.getElementById("ary").innerHTML = sum1;
}

console.log("---------");
var numbers = [45, 28, 22, 10, 55];
var sum2 = 0;
numbers.forEach(callBackFunc);

function callBackFunc(v, i, a) {
    sum2 += v;
}


console.log(sum2);

// var num1 = 10;
// var num1 = "hello";
// console.log(num1);

// let num2 = 10; //좀더 정확한 문법을 본다
// let num2 = "hello";
// console.log(num2);

// const num3 = 10; //한번 할당시에는 변경불가

let p1 = {
    name: "Hong",
    age: 20

}

let p2 = {
    name: "Park",
    age: 25
}

let p3 = {
    name: "Choi",
    age: 30
}

let persons = [p1,p2,p3];
persons.forEach(function(a,b,c){
    console.log(a,b,c);
    console.log(a.name + "," + a.age);
});//persons에있는 값요소에 따라 실행하겠다는 뜻



numbers = [45,38,66,92,18,100];
numbers.sort(function(a,b){
    return a-b; //-1값이 오름차순,+1값은 내림차순
});
numbers.forEach(function(a){
    console.log(a)
});

persons.sort(function(a,b){
    //return a.age -b.age;
    if(a.name<b.name) return -1;
    else return 1;
    
});
persons.forEach((a,b,c) => {
    console.log(`value:${a.name},value:${a.age},index:${b}`);
});




numbers = [45,38,66,92,18,100];
numbers.sort(function(a,b){
    //return a.age -b.age;
    return a-b;
    
});
console.log(numbers[0]);






let newNum = numbers.map(function(a,b,c,){//foreach처럼 반복실행후 결과값을 반환
    console.log(`a: ${a},b: ${b},c: ${c}`);
    return a* b;
});
console.log(newNum);




let theNew = newNum.filter(function(a,b,c){
    return a>0;
});
console.log(theNew);





let anotherNew = theNew.reduce((a,b,c)=>{
    console.log(`a: ${a},b: ${b},c: ${c}`);
    if(a<b)
        return b;
    else
        return a;
});//초기값설정
console.log(anotherNew);





