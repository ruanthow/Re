import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroPassoComponent } from './primeiro-passo.component';

describe('PrimeiroPassoComponent', () => {
  let component: PrimeiroPassoComponent;
  let fixture: ComponentFixture<PrimeiroPassoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeiroPassoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimeiroPassoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
