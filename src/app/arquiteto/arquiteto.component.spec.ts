import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquitetoComponent } from './arquiteto.component';

describe('ArquitetoComponentComponent', () => {
  let component: ArquitetoComponent;
  let fixture: ComponentFixture<ArquitetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArquitetoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquitetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
