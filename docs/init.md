# Initial project setup

Create `README.md`

Add `.editorconfig`

```
$ yarn init -yp
```

Add `.gitignore`

```
$ yarn i -D webpack webpack-cli webpack-dev-server
```

Add `webpack.config.js`

Basic file structure:

```
kersjes.dev
|- /dist
  |- index.html
|- /src
  |- index.js
```

Add `build` script

```
$ yarn add -D sass sass-loader style-loader css-loader
```

Add to module config in Webpack

Create `styles.scss`

```ts
import './styles.scss';
```

```
$ yarn add -D html-webpack-plugin
```

Configure HtmlWebpackPlugin

```
$ yarn add react react-dom
```
