import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-search-dropdown-input',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './search-dropdown-input.component.html',
  styleUrl: './search-dropdown-input.component.scss'
})
export class SearchDropdownInputComponent {
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;

  iconName: string = "keyboard_arrow_down";
  upIcon: string = "keyboard_arrow_up";
  downIcon: string = "keyboard_arrow_down";
  isDropDownOpen: boolean = false;
  
  OnDropDownClicked()
  {
    this.isDropDownOpen = !this.isDropDownOpen;
    this.isDropDownOpen ? this.iconName = this.upIcon : this.iconName = this.downIcon;
  }
}
