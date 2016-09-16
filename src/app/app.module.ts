import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdGridListModule} from '@angular2-material/grid-list';


import { AppComponent } from './app.component';
import { BoroughComponent } from './borough/borough.component';
import { RtdbService } from './rtdb/rtdb.service';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    BoroughComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      MdGridListModule,
      RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [RtdbService],
  bootstrap: [BoroughComponent]
})
export class AppModule { }
