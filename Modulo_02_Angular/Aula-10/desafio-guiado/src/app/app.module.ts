import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { TimerComponent } from './timer/timer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ConfigurationComponent, TimerComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
