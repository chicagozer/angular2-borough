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
        StoreModule.provideStore( boroughReducer ),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
    ],
    providers: [RtdbService],
})
export class AppModule {
}
