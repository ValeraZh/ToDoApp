import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWidgetComponent } from './todo-widget.component';

describe('TodoWidgetComponent', () => {
  let component: TodoWidgetComponent;
  let fixture: ComponentFixture<TodoWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoWidgetComponent]
    });
    fixture = TestBed.createComponent(TodoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
