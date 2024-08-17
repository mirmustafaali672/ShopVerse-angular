import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared/shared.module';
import { ToolBarComponent } from "../shared/components/tool-bar/tool-bar.component";
import { SearchFiltersComponent } from "../shared/components/search-filters/search-filters.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, ToolBarComponent, SearchFiltersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
