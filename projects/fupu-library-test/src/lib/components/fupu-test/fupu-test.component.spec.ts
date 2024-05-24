import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FupuTestComponent } from './fupu-test.component';

describe('FupuTestComponent', () => {
  let component: FupuTestComponent;
  let fixture: ComponentFixture<FupuTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FupuTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FupuTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
