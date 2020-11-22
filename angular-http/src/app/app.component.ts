import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from './todos.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  todoTitle = '';
  loading = false;
  error = '';

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    this.fetchTodos();
  }

  addTodo(): void {
    if (!this.todoTitle.trim()){
      return;
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    };
    this.todosService.addTodo(newTodo)
    .subscribe( todo => {
      this.todos.push(todo);
      this.todoTitle = '';
    });

  }

  fetchTodos(): void {
    this.loading = true;
    this.todosService.fetchTodos()
    .subscribe(response => {
      this.todos = response;
      this.loading = false;
    }, error => {
      console.log(error.message);
    });
  }

  removeTodo(id: number): void {
    this.todosService.removeTodo(id)
    .subscribe(response => {
      this.todos = this.todos.filter( t => t.id !== id);
    });
  }

  completeTodo(id: number): void {
    this.todosService.completeTode(id)
    .subscribe(todo => {
      this.todos.find(t => t.id === todo.id).completed = true;
    }, error => {
      this.error = error.message;
    });
  }
}
