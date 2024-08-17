import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared/shared.module';
import { ToolBarComponent } from "../shared/components/tool-bar/tool-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, ToolBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
