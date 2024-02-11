import { latexParser } from 'latex-utensils';

export function parse(content) {
    return latexParser.parse(content, {
        startRule: "Root",
        enableComment: true,
    });
}
