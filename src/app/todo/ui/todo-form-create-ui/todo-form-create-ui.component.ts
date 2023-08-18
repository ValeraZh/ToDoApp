import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form-create-ui',
  templateUrl: './todo-form-create-ui.component.html',
  styleUrls: ['./todo-form-create-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFormCreateUiComponent implements OnInit {
  name: string = ''
  @Output()
  create = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
    
  }
  
  onCreate(): void {
    if (this.name) {
      this.create.emit(this.name)
    }
    this.name = ''
  }
}