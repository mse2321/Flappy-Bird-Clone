!function n(i,t,r){function o(s,c){if(!t[s]){if(!i[s]){var a="function"==typeof require&&require;if(!c&&a)return a(s,!0);if(e)return e(s,!0);var p=new Error("Cannot find module '"+s+"'");throw p.code="MODULE_NOT_FOUND",p}var u=t[s]={exports:{}};i[s][0].call(u.exports,function(n){var t=i[s][1][n];return o(t?t:n)},u,u.exports,n,i,t,r)}return t[s].exports}for(var e="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(n,i,t){console.log("bird graphics are working");var r=function(n){this.entity=n};r.prototype.draw=function(){console.log("Drawing a bird")},t.BirdGraphicsComponent=r},{}],2:[function(n,i,t){console.log("bird entity is working");var r=n("../components/graphics/bird"),o=function(){console.log("Creating Bird entity");var n=new r.BirdGraphicsComponent(this);this.components={graphics:n}};t.Bird=o},{"../components/graphics/bird":1}],3:[function(n,i,t){console.log("flappy bird is working");var r=n("./systems/graphics"),o=n("./entities/bird"),e=function(){this.entities=[new o.Bird],this.graphics=new r.GraphicsSystem(this.entities)};e.prototype.run=function(){this.graphics.run()},console.log("main is working"),document.addEventListener("DOMContentLoaded",function(){var n=new e;n.run()}),t.FlappyBird=e},{"./entities/bird":2,"./systems/graphics":4}],4:[function(n,i,t){console.log("graphics are working");var r=function(n){this.entities=n};r.prototype.run=function(){for(var n=0;5>n;n++)this.tick()},r.prototype.tick=function(){for(var n=0;n<this.entities.length;n++){var i=this.entities[n];!1 in i.components||i.components.graphics.draw(this.context)}},t.GraphicsSystem=r},{}]},{},[3]);