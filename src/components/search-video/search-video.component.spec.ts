import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVideoComponent } from './search-video.component';

describe('SearchVideoComponent', () => {
  let component: SearchVideoComponent;
  let fixture: ComponentFixture<SearchVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
