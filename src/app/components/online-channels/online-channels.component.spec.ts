import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineChannelsComponent } from './online-channels.component';

describe('OnlineChannelsComponent', () => {
  let component: OnlineChannelsComponent;
  let fixture: ComponentFixture<OnlineChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineChannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
