import { Routes } from "@angular/router";
import { BoroughComponent } from "./borough";

export const ROUTES: Routes = [
    {path: "", component: BoroughComponent}
    , {path: "borough", component: BoroughComponent},

];
