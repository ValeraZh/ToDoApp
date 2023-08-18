import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoPageComponent {

}
