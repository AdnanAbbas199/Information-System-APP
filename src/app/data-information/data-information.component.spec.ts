import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInformationComponent } from './data-information.component';

describe('DataInformationComponent', () => {
  let component: DataInformationComponent;
  let fixture: ComponentFixture<DataInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataInformationComponent]
    });
    fixture = TestBed.createComponent(DataInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
