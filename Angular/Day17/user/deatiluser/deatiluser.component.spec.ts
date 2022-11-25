import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatiluserComponent } from './deatiluser.component';

describe('DeatiluserComponent', () => {
  let component: DeatiluserComponent;
  let fixture: ComponentFixture<DeatiluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatiluserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeatiluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
