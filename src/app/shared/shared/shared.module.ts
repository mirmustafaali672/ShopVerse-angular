import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    TranslateModule
  ],
  exports: [
    FlexLayoutModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    TranslateModule
  ]
})
export class SharedModule { }
