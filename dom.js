let days = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
let numbers = [1,2,3,4,5,6,7]

let input = [];


for(var i=0;i<31;i++){
    input[i]=i+1;
}

function loadPage(){
    let $table = document.createElement("table");
    $table.setAttribute('border','1');
    let $tr1 = document.createElement("tr");
    for(let day of days){
        let $th = document.createElement("th");
        let text = document.createTextNode(day);
        $th.appendChild(text);
        $tr1.appendChild($th);
    }
    // let $tr2 = document.createElement("tr");
    // for(let num of numbers){
    //     let $th = document.createElement("th");
    //     let text = document.createTextNode(num);
    //     $th.appendChild(text);
    //     $tr2.appendChild($th);
    // }
    $table.appendChild($tr1);

    
    let $tr = document.createElement("tr");
    for(let dd of input){
        if(dd%7==1){
            $tr = document.createElement("tr");
            let $td = document.createElement("td");
            let text = document.createTextNode(dd);
            $td.appendChild(text);
            $tr.appendChild($td);   
            $table.appendChild($tr);
        }
        else{
            let text = document.createTextNode(dd);
            let $td = document.createElement("td");
            $td.appendChild(text);
            $tr.appendChild($td);
            $table.appendChild($tr);
            
        }

    }

    document.getElementById("bdy").appendChild($table);


}