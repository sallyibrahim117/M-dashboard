import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlllessonsComponent } from './alllessons.component';

describe('AlllessonsComponent', () => {
  let component: AlllessonsComponent;
  let fixture: ComponentFixture<AlllessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlllessonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlllessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
