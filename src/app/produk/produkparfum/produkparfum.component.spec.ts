import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukparfumComponent } from './produkparfum.component';

describe('ProdukparfumComponent', () => {
  let component: ProdukparfumComponent;
  let fixture: ComponentFixture<ProdukparfumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdukparfumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdukparfumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
