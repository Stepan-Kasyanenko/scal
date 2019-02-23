import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityFundComponent } from './charity-fund.component';

describe('CharityFundComponent', () => {
  let component: CharityFundComponent;
  let fixture: ComponentFixture<CharityFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
