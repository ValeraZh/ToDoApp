import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITodo } from '../../models/todo';

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListUiComponent {

  @Input()
  todoLists: ITodo[] | null = null;
}
