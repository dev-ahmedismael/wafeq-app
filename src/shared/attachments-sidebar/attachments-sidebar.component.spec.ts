import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentsSidebarComponent } from './attachments-sidebar.component';

describe('AttachmentsSidebarComponent', () => {
  let component: AttachmentsSidebarComponent;
  let fixture: ComponentFixture<AttachmentsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttachmentsSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttachmentsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
