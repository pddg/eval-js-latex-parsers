# Evaluate LaTeX parser for JS/TS

## latex-utensils

```bash
npx tex2ast -p latex-utensils sample.tex > /dev/null
```

It took around 6 ms.
Parsed AST is [here](./latex-utensils/output.json).

## unified-latex

```bash
npx tex2ast -p unified-latex sample.tex > /dev/null
```

It took around 9 ms.
Parsed AST is [here](./unified-latex/output.json).
