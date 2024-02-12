#!/usr/bin/env node

import * as fs from "fs";
import { Command, Option } from "commander";
import { parse as parseByLatexUtensils } from "./latex-utensils/parse.js";
import { parse as parseByUnifiedLatex } from "./unified-latex/parse.js";
import { parse as parseByUnifiedLatexMinimal } from "./unified-latex-minimal/parse.js";

const parserOpt = new Option("-p, --parser <parser>", "Which parser to use")
    .choices(["latex-utensils", "unified-latex", "unified-latex-minimal"])
    .makeOptionMandatory();

const cli = new Command();
cli
    .addOption(parserOpt)
    .showHelpAfterError()
    .parse(process.argv);

const filename = cli.args[0];
if (!fs.existsSync(filename)) {
    console.error(`File ${filename} does not exist`);
    process.exit(1);
}

const options = cli.opts();
const parser = options.parser;

const content = fs.readFileSync(filename).toString();

const start = Date.now();
switch (parser) {
    case "latex-utensils":
        console.log(JSON.stringify(parseByLatexUtensils(content), undefined, "  "));
        break;
    case "unified-latex":
        console.log(JSON.stringify(parseByUnifiedLatex(content), undefined, "  "));
        break;
    case "unified-latex-minimal":
        console.log(JSON.stringify(parseByUnifiedLatexMinimal(content), undefined, "  "));
        break;
    default:
        console.error(`Parser ${parser} is not supported`);
        process.exit(1);
}
const end = Date.now();
console.error(`Time: ${end - start} ms`);
