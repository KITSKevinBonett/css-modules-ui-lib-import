import React, { Component } from 'react';
import './App.css';

import { WidgetCSS, WidgetSass } from 'react-no-webpack';
import { Button, Link } from 'css-modules-ui-lib-poc';

class App extends Component {
  render() {
    return (
        <div className="App">
            <h2>Components imported from <code>react-no-webpack</code> which uses simple React scaffold (no Webpack)
            + CSS Modules + Sass (via Browserify / Babelify).</h2>

            <WidgetCSS />
            <WidgetSass />

            <h2>Components imported from <code>css-modules-ui-lib-poc</code> which uses Create React App + CSS Modules + Sass.</h2>

            <Link text="link" />
            <br/><br/>

            <Link className="primary" text="primary link" />
            <br/><br/>

            <Button text="button" />
            <br/><br/>

            <Button disabled="disabled" text="disabled button" />
            <br/><br/>

            <Button className="primary" text="primary button" />
            <br/><br/>

            <Button className="primary" disabled="disabled" text="disabled primary" />
            <br/><br/>

            <Button className="secondary" text="secondary button" />
            <br/><br/>

            <Button className="primary" size="large" text="large primary" />
            <br/><br/>

            <Button className="primary" size="small" text="small primary" />
            <br/><br/>

            <Button className="icon" icon="info" text="with icon" />
        </div>
    );
  }
}

export default App;
