import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouterAppComponent } from './couter-app.component';

describe('CouterAppComponent', () => {
  let component: CouterAppComponent;
  let fixture: ComponentFixture<CouterAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouterAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouterAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
