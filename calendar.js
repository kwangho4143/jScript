function showList() {

    
    
    
    var yy = document.getElementById('year');
    var mm =document.getElementById('month');
    var dd =document.getElementById('date');
    var today = new Date(yy.value, mm.value, dd.value);
    console.log(today);

    console.log(yy.value);

    // var year = today.getFullYear();
    // var month = today.getMonth();
    // var todate = today.getDate();
    today.setDate(1);
    console.log("todate: " + today.getDate());
    console.log("요일 시작인덱스: " + today.getDay());
    var startday = today.getDay();
    console.log(today.getDate());
    var finaldate = new Date(today.getDate());
    console.log("마지막날짜:"+finaldate);

    var cols = ['일', '월', '화', '수', '목', '금', '토'];
    for (var i = 0; i < cols.length; i++) {
        //console.log(cols[i]);
    }


    var j = 1;
    var elem = document.getElementById("showResult");
    var tag = "<table border = '1'>";

    for (col of cols) {

        tag += "<td>" + col + "</td>";
    }

    var cnt = 0;



    for (var i = 0; i < startday; i++) {

        if (i == 0)
            tag = tag + "<tr>" + "</tr>";

        tag = tag + "<td>" + "</td>";
        cnt++;
    }


    for (var i = 1; i <= finaldate; i++) {
        if (i == 1) {
            tag = tag + "<td>" + i + "</td>";
        }

        else if (cnt % 7 == 0) {
            tag += "<tr><td style='border: 1px solid red;'>" + i + "</td>";
        }
        else {
            tag = tag + "<td>" + i + "</td>";
        }
        cnt++;
    }


    console.log(tag);
    elem.innerHTML = tag;


}