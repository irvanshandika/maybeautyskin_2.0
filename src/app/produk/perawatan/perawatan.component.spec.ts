import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerawatanComponent } from './perawatan.component';

describe('PerawatanComponent', () => {
  let component: PerawatanComponent;
  let fixture: ComponentFixture<PerawatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerawatanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerawatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
