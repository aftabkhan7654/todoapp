var app = angular.module('todoApp', []);

app.controller('TodoController', function() {
    var todoCtrl = this;
    todoCtrl.tasks = [];
    todoCtrl.newTask = '';

    todoCtrl.addTask = function() {
        if (todoCtrl.newTask.trim() !== '') {
            todoCtrl.tasks.push({ text: todoCtrl.newTask, completed: false });
            todoCtrl.newTask = '';
        }
    };

    todoCtrl.deleteTask = function(index) {
        todoCtrl.tasks.splice(index, 1);
    };
});
