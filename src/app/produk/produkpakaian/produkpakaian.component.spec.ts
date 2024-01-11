import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukpakaianComponent } from './produkpakaian.component';

describe('ProdukpakaianComponent', () => {
  let component: ProdukpakaianComponent;
  let fixture: ComponentFixture<ProdukpakaianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdukpakaianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdukpakaianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
