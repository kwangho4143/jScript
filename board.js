class Board {
    constructor(boardNo, title, content, writer) {
        this._boardNo = boardNo;
        this._title = title;
        this._content = content;
        this._writer = writer;

    }
    get boardNo() {
        return this._boardNo;
    }
    set boardNo(boardNo) {
        this._boardNo = boardNo;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get content() {
        return this._content;
    }
    set content(content) {
        this._content = content;
    }
    get writer() {
        return this._writer;
    }
    set writer(writer) {
        this._writer = writer;
    }
} //클래스
let boardDB = [];
boardDB.push(new Board(1, '자바스크립트', '웹언어임', '최형준'));
boardDB.push(new Board(2, '자바', '컴파일임', '문선애'));
boardDB.push(new Board(3, '오라클', '데이터베이스관리임', '김다희'));
let titles = ['checkbox', 'boardNo', 'title', 'content', 'writer','button'];

let table, tr, td, text,button;

function createTitle() {
    //타이틀 영역.
    tr = document.createElement("tr");
    for (let field of titles) {
        td = document.createElement("th");
        if (field == 'checkbox') {
            checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            td.append(checkbox);
        } 
        else if(field==='button'){
            button=document.createElement('button');
            td.append('상세보기');
        }
        else {

            text = document.createTextNode(field);
            td.append(text);
        }
        tr.append(td);

    }
    return tr;
}

function getBoardList() {
    table = document.createElement("table");
    table.setAttribute('border', '1');
    table.setAttribute('id', 'tbl');
    table.append(createTitle());
    boardDB.forEach(function (obj, jdx) {
        tr = document.createElement('tr');
        tr.setAttribute('id',obj._boardNo);
        table.append(tr);
        for (let field of titles) {
            td = document.createElement('td');
            if (field === 'checkbox') {
                checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');

                checkbox.onclick=function(){
                   
                    /////????
                   
                   // console.log(getBoard(id));
                }
               
                td.append(checkbox);
            }
            else if(field==='button'){
                button=document.createElement('button');
                button.innerHTML='상세보기';
                td.append(button);
                button.onclick=showDetail;
            } else {
                text = document.createTextNode(obj[field]);
                td.append(text);
            }
            tr.append(td);
        }

    });
    document.getElementById('main').append(table);
}
function insertData(){
    let boardNo=document.getElementById('boardNo').value;
    let title=document.getElementById('title').value;
    let content=document.getElementById('content').value;
    let writer=document.getElementById('writer').value;
    boardDB.push(new Board(boardNo,title,content,writer));

    let tbl=document.getElementById('tbl');
    tr=document.createElement('tr');
    tr.setAttribute('id',boardNo);
    //체크박스 부분
    td=document.createElement('td');
    checkbox=document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    td.append(checkbox);
    tr.append(td);
    //게시글번호
    td=document.createElement('td');
    td.append(boardNo);
    tr.append(td);
    //제목
    td=document.createElement('td');
    td.append(title);
    tr.append(td);
    //내용
    td=document.createElement('td');
    td.append(content);
    tr.append(td);
    //직성자
    td=document.createElement('td');
    td.append(writer);
    tr.append(td);
    //상세보기 버튼
    td=document.createElement('td');
    button=document.createElement('button');
    button.innerHTML='상세보기';
    button.onclick=showDetail;
    td.append(button);
    tr.append(td);

    tbl.append(tr);

    console.log(boardDB);



}
function updateData(){

}
function getBoard(id){
    let oneBoard;
    for(let board of boardDB){
        if(board.boardNo==id){
            oneBoard=board;
        }
    }
    return oneBoard;
}

function showDetail(){
    let id=this.parentNode.parentNode.id;
    let board=getBoard(id);
    document.getElementById('boardNo').value=board.boardNo;
    document.getElementById('title').value=board.title;
    document.getElementById('content').value=board.content;
    document.getElementById('writer').value=board.writer;
}