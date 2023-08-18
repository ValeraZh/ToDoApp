import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ITodoState } from '../../store/todo/todo.reducer';
import { TodoCreateAction } from '../../store/todo/todo.actions';
import { todoListSelector } from '../../store/todo/todo.selectors';
import { Observable } from 'rxjs';
import { ITodo } from '../../models/todo';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoWidgetComponent {
  todoList$: Observable<ITodo[]> = this.store$.pipe(select(todoListSelector))

  constructor(private store$: Store<ITodoState>) {}

  onCreate(name: string) {
    this.store$.dispatch(new TodoCreateAction({ name }))
  }
}
