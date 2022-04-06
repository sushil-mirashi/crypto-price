import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialChildComponent } from './material-child.component';

describe('MaterialChildComponent', () => {
  let component: MaterialChildComponent;
  let fixture: ComponentFixture<MaterialChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
