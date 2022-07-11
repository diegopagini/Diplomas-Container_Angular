import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { MaterialModule } from '../../../material/material.module';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MaterialModule, PipesModule],
      declarations: [ModalComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            id: 1,
            name: 'angular',
            hours: 30,
            date_end: '20/2020',
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
