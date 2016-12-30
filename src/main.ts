import "./polyfills.ts";

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
// import {AppModuleNgFactory} from "./app/app.module.ngfactory" //generated code
import { AppModule } from "./app/";
import { environment } from "./environments/environment";


if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
