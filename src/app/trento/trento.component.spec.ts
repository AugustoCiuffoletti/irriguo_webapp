import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrentoComponent } from './trento.component';

describe('TrentoComponent', () => {
  let component: TrentoComponent;
  let fixture: ComponentFixture<TrentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
