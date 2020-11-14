import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtfuiComponent } from './dtfui.component';

describe('DtfuiComponent', () => {
  let component: DtfuiComponent;
  let fixture: ComponentFixture<DtfuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtfuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtfuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
