import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationQuestionComponent } from './application-question.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ApplicationQuestionComponent', () => {
  let component: ApplicationQuestionComponent;
  let fixture: ComponentFixture<ApplicationQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationQuestionComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
