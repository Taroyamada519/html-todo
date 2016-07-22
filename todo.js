$(document).ready(function() {
    // ページ読み込み時の処理    
    showTodo();
});

// TODOを表示する関数
function showTodo() {
    
    // TODO一覧の表示を全部消す
    $('#list_area').empty();
    // TODO一覧を全て表示する
    if (localStorage.getItem('todoArray') != null) {
        var todoArray = JSON.parse(localStorage.getItem('todoArray'));
        for (var i in todoArray) {
            $('#list_area').append($('<h3>').text(todoArray[i].title));
            $('#list_area').append($('<p>').text('期限:' + todoArray[i].deadline));
            $('#list_area').append($('<p>').text('詳細:' + todoArray[i].description));
            $('#list_area').append($('<a>').attr({'href': 'javascript:void(0)', 'onclick': 'deleteTodo(' + i + ')'}).text('削除'));
        }
    }
}

// TODOを追加する関数
function addTodo() {

    // 新しく追加されたTODOオブジェクトを生成
    var todo = {
        title : $('#edit-title').val(),
        deadline : $('#edit-deadline').val(),
        description : $('#edit-description').val()
    }
    // TODO一覧を取得する
    var todoArray;
    if (localStorage.getItem('todoArray') == null) {
        todoArray = new Array();
    } else {
        todoArray = JSON.parse(localStorage.getItem('todoArray'));
    }
    // 新しいTODOを追加する
    todoArray.push(todo);
    localStorage.setItem('todoArray', JSON.stringify(todoArray));
    // TODO一覧を更新する
    showTodo();

}

// TODOを削除する関数
function deleteTodo(num) {
    
    // 指定した番号のTODOを削除する
    todoArray = JSON.parse(localStorage.getItem('todoArray'));
    todoArray.splice(num, 1);
    localStorage.setItem('todoArray', JSON.stringify(todoArray));
    // TODO一覧を更新する 
    showTodo();
}
