import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDropdownInputComponent } from './search-dropdown-input.component';

describe('SearchDropdownInputComponent', () => {
  let component: SearchDropdownInputComponent;
  let fixture: ComponentFixture<SearchDropdownInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchDropdownInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchDropdownInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
