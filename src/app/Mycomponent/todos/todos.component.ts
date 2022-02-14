import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
    
  constructor() { 

    this.todos =[{
      sno:1,
      title:"this is title",
      desc:"Description",
      active:true
    },{
      sno:2,
      title:"this is title",
      desc:"Description",
      active:true
    },{
      sno:3,
      title:"this is title",
      desc:"Description",
      active:true
    }]
  }

  ngOnInit(): void {
  }

}
