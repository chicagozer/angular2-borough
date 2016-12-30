import "./polyfills.ts";
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/";
import { environment } from "./environments/environment";
if (environment.production) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=/Users/jim/git/angular2-borough/src/main.js.map