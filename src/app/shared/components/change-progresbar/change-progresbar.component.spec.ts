import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProgresbarComponent } from './change-progresbar.component';

describe('ChangeProgresbarComponent', () => {
  let component: ChangeProgresbarComponent;
  let fixture: ComponentFixture<ChangeProgresbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeProgresbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeProgresbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
