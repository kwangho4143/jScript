var students = [];

students.push("김현동");//마지막에 넣는다
students.push("김현동");//마지막에 넣는다
students[1] = "김도은";
students.unshift("김다희");//처음에 넣는다
//김다희,김현동,김도은

// students.pop();//뒤에서 제거
// students.shift();//앞에서 제거

students.splice(1,0,"이광호","동광희");//1번인덱스 부터 1개를 이광호대입 짤라낼수도 있고 대체할수도 있다

for(student of students){
    console.log(student);
}

console.log("-------");

var newSt = students.slice(1,3);//첫번째 인덱스,두번째인데스 가져온값을 기준으로 새로운 배열을 만들어준다

for(student of newSt){
    console.log(student);
}

console.log("-------");

students.sort();
for(student of students){
    console.log(student);
}

console.log("-------");

var numbers = [4,6,5,7,5,100];
numbers.sort(function(a,b){
    console.log(a,b);
    return a-b; //-먄=>내림차순
});
for(n of numbers){
    console.log(n);
}



// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);