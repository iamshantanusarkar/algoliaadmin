import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsListComponent } from './global-settings-list.component';

describe('GlobalSettingsListComponent', () => {
  let component: GlobalSettingsListComponent;
  let fixture: ComponentFixture<GlobalSettingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
