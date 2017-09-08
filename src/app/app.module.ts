import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { MdGridListModule } from "@angular2-material/grid-list";
import { BoroughComponent } from "./borough/borough.component";
import { RtdbService } from "./rtdb/rtdb.service";
import { StoreModule } from '@ngrx/store';
import { boroughReducer } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
    bootstrap: [BoroughComponent],
    declarations: [
        BoroughComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MdGridListModule,
       StoreModule.forRoot( {boroughs: boroughReducer }),
       // StoreModule.forRoot( reducer ),
        !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    ],
    providers: [RtdbService],
})
export class AppModule {
}
