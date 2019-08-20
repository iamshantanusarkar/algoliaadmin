import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsUpdateComponent } from './global-settings-update.component';

describe('GlobalSettingsUpdateComponent', () => {
  let component: GlobalSettingsUpdateComponent;
  let fixture: ComponentFixture<GlobalSettingsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
