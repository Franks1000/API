import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDatabaseAlternativeComponent } from './movie-database-alternative.component';

describe('MovieDatabaseAlternativeComponent', () => {
  let component: MovieDatabaseAlternativeComponent;
  let fixture: ComponentFixture<MovieDatabaseAlternativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDatabaseAlternativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDatabaseAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
