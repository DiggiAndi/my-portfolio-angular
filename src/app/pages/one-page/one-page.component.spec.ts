import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePageComponent } from './one-page.component';

describe('OnePageComponent', () => {
  let component: OnePageComponent;
  let fixture: ComponentFixture<OnePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
