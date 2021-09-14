# \<honeycomb-element>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i honeycomb-element
```

## Usage
```html
<script type="module">
  import 'honeycomb-element/honeycomb-element.js';
</script>

<honeycomb-element></honeycomb-element>
```
Another way to use the component is via the [CDN UNPKG](https://unpkg.com/browse/honeycomb-element@latest/).
```html
  <script type="module">
    import 'https://unpkg.com/honeycomb-element@1.1.4/build/honeycomb-element.bundled.js';
  </script>
  
  <honeycomb-element></honeycomb-element>
```
The `<honeycomb-element>` allows one property naming `items`. This way, the honeycomb is provided with content.
## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
npm run lint
```

You can lint with ESLint and Prettier individually as well
```bash
npm run lint:eslint
```
```bash
npm run lint:prettier
```

To automatically fix many linting errors, run
```bash
npm run format
```

You can format using ESLint and Prettier individually as well
```bash
npm run format:eslint
```
```bash
npm run format:prettier
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`
