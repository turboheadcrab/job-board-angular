import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationSectionComponent } from './application-section.component';

describe('ApplySectionComponent', () => {
  let component: ApplicationSectionComponent;
  let fixture: ComponentFixture<ApplicationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
