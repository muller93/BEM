import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostContextExampleComponent } from './host-context-example.component';

describe('HostContextExampleComponent', () => {
  let component: HostContextExampleComponent;
  let fixture: ComponentFixture<HostContextExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostContextExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostContextExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
