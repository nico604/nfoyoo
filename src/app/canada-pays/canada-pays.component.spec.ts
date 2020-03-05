import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadaPaysComponent } from './canada-pays.component';

describe('CanadaPaysComponent', () => {
  let component: CanadaPaysComponent;
  let fixture: ComponentFixture<CanadaPaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanadaPaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanadaPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
