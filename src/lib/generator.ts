import * as utils from "./helpers/utils";

export class Generator {
    constructor(public templatePath: string) { }


    public run() {
        utils.IsValidFile(this.templatePath);
    }
}