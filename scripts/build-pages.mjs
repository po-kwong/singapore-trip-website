import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';

const project = new URL('../', import.meta.url);
const source = async name => (await readFile(new URL('apps-script/' + name, project), 'utf8'))
  .replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
const filenames = ['Album.gs', 'Code.gs', 'Index.html', 'Stylesheet.html', 'Assets.html', 'Pronunciation.html', 'JavaScript.html'];
const files = Object.fromEntries(await Promise.all(filenames.map(async name => [name, await source(name)])));
const escapeHtml = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');

function render(template, values) {
  return template.replace(/<\?(!?=)\s*(.*?)\s*\?>/gs, (_, mode, expression) => {
    expression = expression.trim().replace(/;$/, "");
    const partial = /^include_\('([A-Za-z]+)'\)$/.exec(expression);
    if (mode === '!=' && partial) {
      const name = partial[1] + '.html';
      if (!Object.hasOwn(files, name)) throw new Error('Unknown HTML partial: ' + name);
      return files[name];
    }
    if (!/^\w+(?:\.\w+)*$/.test(expression)) throw new Error('Unsupported template expression: ' + expression);
    const value = expression.split('.').reduce((parent, segment) => parent?.[segment], values);
    if (value === undefined || value === null) throw new Error('Missing template value: ' + expression);
    if (mode === '=') return escapeHtml(value);
    if (expression === 'photosJson') return String(value).replaceAll('<', '\\u003c');
    throw new Error('Unsupported raw template value: ' + expression);
  });
}

const HtmlService = {
  createTemplateFromFile(name) {
    if (name !== 'Index') throw new Error('Expected the Index template');
    return {
      evaluate() {
        return {
          html: render(files['Index.html'], this),
          setTitle() { return this; },
          addMetaTag() { return this; },
        };
      },
    };
  },
};

const { html } = runInNewContext(
  files['Album.gs'] + '\n' + files['Code.gs'] + '\ndoGet();',
  { HtmlService },
  { timeout: 1500 },
);
if (html.includes('<?')) throw new Error('Unrendered Apps Script template marker');
await mkdir(new URL('docs/', project), { recursive: true });
await writeFile(new URL('docs/index.html', project), html.endsWith('\n') ? html : html + '\n');
await writeFile(new URL('docs/.nojekyll', project), '');
console.log('Built docs/index.html for GitHub Pages.');