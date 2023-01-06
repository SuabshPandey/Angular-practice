import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiesExampleComponent } from './servies-example.component';

describe('ServiesExampleComponent', () => {
  let component: ServiesExampleComponent;
  let fixture: ComponentFixture<ServiesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiesExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
