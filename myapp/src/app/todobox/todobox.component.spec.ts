import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoboxComponent } from './todobox.component';

describe('TodoboxComponent', () => {
  let component: TodoboxComponent;
  let fixture: ComponentFixture<TodoboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
