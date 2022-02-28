import { Component, OnInit } from '@angular/core';
// import { TodoItemComponent } from '../todo-item/todo-item.component';

import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem;
 

  todos:Todo[];
    
  constructor() { 
    this.localItem = localStorage.getItem("todos");
    if (this.localItem===null){
      this.todos =[];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }

    
  }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(this.todos));


  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }

  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active =! this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }

}
