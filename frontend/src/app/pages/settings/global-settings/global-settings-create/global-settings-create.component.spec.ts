import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsCreateComponent } from './global-settings-create.component';

describe('GlobalSettingsCreateComponent', () => {
  let component: GlobalSettingsCreateComponent;
  let fixture: ComponentFixture<GlobalSettingsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
