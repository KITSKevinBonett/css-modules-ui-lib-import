## React UI library POC with CSS Modules

This project was bootstrapped with [create-react-app-css-modules](https://www.npmjs.com/package/react-scripts-cssmodules).

- It is a POC to **test importing from a UI library**. Not production ready.
- The components are not fully formed.
- It's essentially a "scaffold" to test CSS Modules + Sass.

## How to use

### 1. Install library / libraries in this consuming app
- `npm i css-modules-ui-lib-poc` - library V1 built with create-react-app. Contains "node_modules" folder. Probably wrong folder structure but good enough to test UI components import functionality.
- `npm link react-no-webpack` - library V2 built without Webpack. Simpler folder structure than V1 so `link` is sufficient here.

### 2. Example `<WidgetCSS />` and `<Button />` usage
```jsx
import React, { Component } from 'react';
import { WidgetCSS } from 'react-no-webpack';
import { Button } from 'css-modules-ui-lib-poc';

export default class MyComponent extends Component {
  render() {
    return (
        <div className="App">
            <WidgetCSS />

            <Button text="button" />

            <Button className="primary" disabled="disabled" text="disabled primary" />

            <Button className="secondary" text="secondary button" />

            <Button className="primary" size="small" text="small primary" />

            <Button className="icon" icon="info" text="with icon" />
        </div>
    );
  }
}
```
