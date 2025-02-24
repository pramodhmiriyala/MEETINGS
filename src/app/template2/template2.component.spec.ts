import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Template2Component } from './template2.component';

describe('Template2Component', () => {
  let component: Template2Component;
  let fixture: ComponentFixture<Template2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Template2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Template2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
