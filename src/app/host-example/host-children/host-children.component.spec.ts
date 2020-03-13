import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostChildrenComponent } from './host-children.component';

describe('HostChildrenComponent', () => {
  let component: HostChildrenComponent;
  let fixture: ComponentFixture<HostChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
