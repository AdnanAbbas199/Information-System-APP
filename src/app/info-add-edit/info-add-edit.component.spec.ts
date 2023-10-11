import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAddEditComponent } from './info-add-edit.component';

describe('InfoAddEditComponent', () => {
  let component: InfoAddEditComponent;
  let fixture: ComponentFixture<InfoAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoAddEditComponent]
    });
    fixture = TestBed.createComponent(InfoAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
