import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productdtl } from './productdtl';

describe('Productdtl', () => {
  let component: Productdtl;
  let fixture: ComponentFixture<Productdtl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productdtl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productdtl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
