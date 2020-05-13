import * as fs from "fs";

export function IsValidFile(path: string): boolean {
    return fs.existsSync(path);
}

export function  IsValidTemplate() {
    
}