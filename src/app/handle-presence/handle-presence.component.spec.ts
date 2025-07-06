import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlePresenceComponent } from './handle-presence.component';

describe('HandlePresenceComponent', () => {
  let component: HandlePresenceComponent;
  let fixture: ComponentFixture<HandlePresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandlePresenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandlePresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
