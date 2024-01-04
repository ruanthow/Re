import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimoPassoComponent } from './ultimo-passo.component';

describe('UltimoPassoComponent', () => {
  let component: UltimoPassoComponent;
  let fixture: ComponentFixture<UltimoPassoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltimoPassoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UltimoPassoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
