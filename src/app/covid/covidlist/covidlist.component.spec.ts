import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidlistComponent } from './covidlist.component';

describe('CovidlistComponent', () => {
  let component: CovidlistComponent;
  let fixture: ComponentFixture<CovidlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovidlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
