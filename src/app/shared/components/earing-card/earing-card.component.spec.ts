import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaringCardComponent } from './earing-card.component';

describe('EaringCardComponent', () => {
  let component: EaringCardComponent;
  let fixture: ComponentFixture<EaringCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EaringCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EaringCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
