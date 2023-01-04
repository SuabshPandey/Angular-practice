import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralBindingComponent } from './structural-binding.component';

describe('StructuralBindingComponent', () => {
  let component: StructuralBindingComponent;
  let fixture: ComponentFixture<StructuralBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
