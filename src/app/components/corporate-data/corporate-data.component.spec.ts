import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateDataComponent } from './corporate-data.component';

describe('CorporateDataComponent', () => {
  let component: CorporateDataComponent;
  let fixture: ComponentFixture<CorporateDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
