import * as utils from "./helpers/utils";

function validateTemplateFile(templatePath: string) {
    utils.IsValidFile(templatePath);
    utils.IsValidTemplate();
}

export function run(templatePath: string) {
    validateTemplateFile(templatePath);
}