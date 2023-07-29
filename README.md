# About

This is a simple NoSSR wrapper component for your nextjs project. The wrapper uses dynamic import to disable server-side rendering of a component.

## Installation

```bash
npm install next-dynamic-no-ssr
```

or

```bash
pnpm add next-dynamic-no-ssr
```

## Import

```js
import { NoSSR } from "next-dynamic-no-ssr";
```

## Usage

To disable server-side rendering of your component, simply wrap your component with the NoSSR component.

```tsx
<NoSSR>
  <YourComponent />
<NoSSR/>
```

## License

[MIT](https://opensource.org/license/mit/)
