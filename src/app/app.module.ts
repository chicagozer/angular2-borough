import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoroughComponent } from './borough/borough.component';
import { RtdbService } from './rtdb/rtdb.service';

@NgModule({
  declarations: [
    AppComponent,
    BoroughComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RtdbService],
  bootstrap: [BoroughComponent]
})
export class AppModule { }
