import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombolistDataComponent } from './combolist-data.component';

describe('CombolistDataComponent', () => {
  let component: CombolistDataComponent;
  let fixture: ComponentFixture<CombolistDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombolistDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CombolistDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
