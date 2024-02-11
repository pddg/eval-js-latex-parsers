import { getParser } from '@unified-latex/unified-latex-util-parse';

export function parse(content) {
    return getParser().parse(content);
}
