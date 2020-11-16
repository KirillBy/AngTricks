import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StyleDirective } from './directives/style.directive';
import { Style2Directive } from './directives/style2.directive';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    Style2Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
