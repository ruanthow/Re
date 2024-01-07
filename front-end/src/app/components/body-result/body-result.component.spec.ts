import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyResultComponent } from './body-result.component';

describe('BodyResultComponent', () => {
  let component: BodyResultComponent;
  let fixture: ComponentFixture<BodyResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
