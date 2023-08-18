import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { TODO_REDUCER_NODE, todoReducer } from './store/todo/todo.reducer';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { RouterModule } from '@angular/router';
import { routes } from './todo.routing';
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component';
import { TodoFormCreateUiComponent } from './ui/todo-form-create-ui/todo-form-create-ui.component';
import { FormsModule } from '@angular/forms';
import { TodoListUiComponent } from './ui/todo-list-ui/todo-list-ui.component';

@NgModule({
  declarations: [
    TodoPageComponent,
    TodoWidgetComponent,
    TodoFormCreateUiComponent,
    TodoListUiComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    RouterModule.forChild(routes),
    FormsModule
  ]
})

export class TodoModule { }