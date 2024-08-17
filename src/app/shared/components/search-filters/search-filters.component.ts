import { Component } from '@angular/core';
import { SearchDropdownInputComponent } from "../ui-components/search-dropdown-input/search-dropdown-input.component";
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-search-filters',
  standalone: true,
  imports: [SearchDropdownInputComponent, SharedModule],
  templateUrl: './search-filters.component.html',
  styleUrl: './search-filters.component.scss'
})
export class SearchFiltersComponent {
brand:any;
category:any;
search:any;
}
