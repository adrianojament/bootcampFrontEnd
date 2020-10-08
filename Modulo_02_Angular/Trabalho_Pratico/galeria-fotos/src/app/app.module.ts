import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GaleriaComponentComponent } from './galeria-component/galeria-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, GaleriaComponentComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
