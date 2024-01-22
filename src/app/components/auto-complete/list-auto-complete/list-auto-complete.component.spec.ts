import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAutoCompleteComponent } from './list-auto-complete.component';

describe('ListAutoCompleteComponent', () => {
  let component: ListAutoCompleteComponent;
  let fixture: ComponentFixture<ListAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAutoCompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
