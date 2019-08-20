import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsDetailsComponent } from './global-settings-details.component';

describe('GlobalSettingsDetailsComponent', () => {
  let component: GlobalSettingsDetailsComponent;
  let fixture: ComponentFixture<GlobalSettingsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
