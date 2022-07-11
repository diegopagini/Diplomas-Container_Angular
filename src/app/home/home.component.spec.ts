import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DIPLOMAS } from '../../assets/source';
import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [HomeComponent],
      imports: [
        FormsModule,
        ComponentsModule,
        MaterialModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.diplomas = DIPLOMAS;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a onSeach() method', () => {
    spyOn(component, 'onSearch').and.callThrough();
    component.onSearch('angular');
    fixture.detectChanges();
    expect(component.onSearch).toHaveBeenCalled();
    expect(component.onSearch).toHaveBeenCalledWith('angular');
  });
});
