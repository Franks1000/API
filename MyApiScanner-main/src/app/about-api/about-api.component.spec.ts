import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAPIComponent } from './about-api.component';

describe('AboutAPIComponent', () => {
  let component: AboutAPIComponent;
  let fixture: ComponentFixture<AboutAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
