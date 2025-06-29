import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLauncher } from './chat-launcher';

describe('ChatLauncher', () => {
  let component: ChatLauncher;
  let fixture: ComponentFixture<ChatLauncher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatLauncher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatLauncher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
