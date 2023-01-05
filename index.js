let introspector = { };

const Eleventy = require("@11ty/eleventy/src/Eleventy");
Eleventy.prototype.initWithoutIntrospector = Eleventy.prototype.init;
Eleventy.prototype.init = function() {
  introspector.eleventy = this;
  return this.initWithoutIntrospector();
};

module.exports = introspector;
