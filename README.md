# eleventy-introspector
A simple library that allows you to access the Eleventy instance from anywhere (`.eleventy.js`, plugins, etc.)

[![npm](https://img.shields.io/npm/v/eleventy-introspector)](https://www.npmjs.com/package/eleventy-introspector)
[![npm peer dependency version](https://img.shields.io/npm/dependency-version/eleventy-introspector/peer/@11ty/eleventy)](https://github.com/11ty/eleventy)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/kentaroi/eleventy-introspector/blob/main/LICENSE)

## Installation
```shell
npm install eleventy-introspector
```

## Usage
Open up your Eleventy config file (probably `.eleventy.js`), for example, require `eleventy-introspector`, and use its `eleventy` property as you like.

```javascript
const intros = require("eleventy-introspector");
const path = require("path");

module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("installedPlugins", function() {
    return intros.eleventy.config.plugins.map(p => {
      return intros.eleventy.eleventyConfig.userConfig._getPluginName(p.plugin) ?? "N/A";
    }).join(", ");
  });

  eleventyConfig.addFilter("intputPathToOutputPath", function(inputPath) {
    return intros.eleventy.writer.templateMap.getMap().find(mapEntry => {
      return path.relative(mapEntry.inputPath, inputPath) === "";
    })?.outputPath;
  });
};
```
