import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { HeroService } from '../hero.service';
import { DashboardComponent } from './dashboard.component';

fdescribe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let svcSpy: jasmine.SpyObj<HeroService>;

  beforeEach(async(() => {
    svcSpy = jasmine.createSpyObj<HeroService>(['getHeroes']);
    svcSpy.getHeroes.and.returnValue(of([]));

    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: HeroService, useValue: svcSpy
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
