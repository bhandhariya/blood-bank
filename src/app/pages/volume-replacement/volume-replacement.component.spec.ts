import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeReplacementComponent } from './volume-replacement.component';

describe('VolumeReplacementComponent', () => {
  let component: VolumeReplacementComponent;
  let fixture: ComponentFixture<VolumeReplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumeReplacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeReplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
