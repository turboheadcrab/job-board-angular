import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureTestComponent } from './azure-test.component';

describe('AzureTestComponent', () => {
  let component: AzureTestComponent;
  let fixture: ComponentFixture<AzureTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AzureTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzureTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
