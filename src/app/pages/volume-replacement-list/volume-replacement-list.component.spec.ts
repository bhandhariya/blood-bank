import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeReplacementListComponent } from './volume-replacement-list.component';

describe('VolumeReplacementListComponent', () => {
  let component: VolumeReplacementListComponent;
  let fixture: ComponentFixture<VolumeReplacementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumeReplacementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeReplacementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
