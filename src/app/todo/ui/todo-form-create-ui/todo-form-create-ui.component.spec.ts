import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormCreateUiComponent } from './todo-form-create-ui.component';

describe('TodoFormCreateUiComponent', () => {
  let component: TodoFormCreateUiComponent;
  let fixture: ComponentFixture<TodoFormCreateUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoFormCreateUiComponent]
    });
    fixture = TestBed.createComponent(TodoFormCreateUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
