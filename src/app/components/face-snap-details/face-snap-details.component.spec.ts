import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSnapDetailsComponent } from './face-snap-details.component';

describe('FaceSnapDetailsComponent', () => {
  let component: FaceSnapDetailsComponent;
  let fixture: ComponentFixture<FaceSnapDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceSnapDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceSnapDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
