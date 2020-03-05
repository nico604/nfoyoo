import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AustraliePaysComponent } from './australie-pays.component';

describe('AustraliePaysComponent', () => {
  let component: AustraliePaysComponent;
  let fixture: ComponentFixture<AustraliePaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AustraliePaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AustraliePaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
