import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    TranslateModule,
    FormsModule,
    MatFormFieldModule,
    MatRippleModule
  ],
  exports: [
    FlexLayoutModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    TranslateModule,
    FormsModule,
    MatFormFieldModule,
    MatRippleModule
  ]
})
export class SharedModule { }
