/**
 * Created by jmittler on 12/29/16.
 */
import { Injectable } from "@angular/core";

@Injectable()
export class ConfigService {
    public config: any;

    constructor() {
        this.config = require("../../../package.json");

    }
}
