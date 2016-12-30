import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MdGridListModule } from "@angular2-material/grid-list";
import { AppComponent } from "./app.component";
import { ROUTES } from "./app.routes";
import { BoroughComponent } from "./borough/borough.component";
import { RtdbService } from "./rtdb/rtdb.service";


@NgModule({
    bootstrap: [BoroughComponent],
    declarations: [
        AppComponent,
        BoroughComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MdGridListModule,
        RouterModule.forRoot(ROUTES, {useHash: true}),
    ],
    providers: [RtdbService],
})
export class AppModule {
}
