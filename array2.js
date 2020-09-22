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

