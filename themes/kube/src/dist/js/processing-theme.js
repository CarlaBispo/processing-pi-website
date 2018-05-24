(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

// var mymath = require ('./lib/math.js');
//
// console.log("2π = " + mymath.sum(mymath.pi, mymath.pi));

console.log('init');

var app = {};

app.highlight = function () {
  var blocks = document.querySelectorAll('pre code');
  for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i];
    var rootElement = block.parentElement;
    var lineCodes = block.innerHTML.split(/\n/);
    if (lineCodes[lineCodes.length - 1] === '') lineCodes.pop();
    var lineLength = lineCodes.length;

    var codeLineHtml = '';
    for (var _i = 0; _i < lineLength; _i++) {
      codeLineHtml += '<div class="line">' + (_i + 1) + '</div>';
    }

    var codeHtml = '';
    for (var _i2 = 0; _i2 < lineLength; _i2++) {
      codeHtml += '<div class="line">' + lineCodes[_i2] + '</div>';
    }

    block.className += ' highlight';
    var figure = document.createElement('figure');
    figure.className = block.className;
    figure.innerHTML = '<table><tbody><tr><td class="gutter"><pre>' + codeLineHtml + '</pre></td><td class="code"><pre>' + codeHtml + '</pre></td></tr></tbody></table>';

    rootElement.parentElement.replaceChild(figure, rootElement);
  }
};

$(document).ready(function () {
  //
});

hljs.initHighlighting();
app.highlight();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9wcm9jZXNzaW5nLXRoZW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxHQUFSLENBQVksTUFBWjs7QUFFQSxJQUFNLE1BQU0sRUFBWjs7QUFFQSxJQUFJLFNBQUosR0FBZ0IsWUFBWTtBQUMxQixNQUFNLFNBQVMsU0FBUyxnQkFBVCxDQUEwQixVQUExQixDQUFmO0FBQ0EsT0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLE9BQU8sTUFBM0IsRUFBbUMsR0FBbkMsRUFBd0M7QUFDdEMsUUFBTSxRQUFRLE9BQU8sQ0FBUCxDQUFkO0FBQ0EsUUFBTSxjQUFjLE1BQU0sYUFBMUI7QUFDQSxRQUFNLFlBQVksTUFBTSxTQUFOLENBQWdCLEtBQWhCLENBQXNCLElBQXRCLENBQWxCO0FBQ0EsUUFBSSxVQUFVLFVBQVUsTUFBVixHQUFtQixDQUE3QixNQUFvQyxFQUF4QyxFQUE0QyxVQUFVLEdBQVY7QUFDNUMsUUFBTSxhQUFhLFVBQVUsTUFBN0I7O0FBRUEsUUFBSSxlQUFlLEVBQW5CO0FBQ0EsU0FBSyxJQUFJLEtBQUksQ0FBYixFQUFnQixLQUFJLFVBQXBCLEVBQWdDLElBQWhDLEVBQXFDO0FBQ25DLDhDQUFxQyxLQUFJLENBQXpDO0FBQ0Q7O0FBRUQsUUFBSSxXQUFXLEVBQWY7QUFDQSxTQUFLLElBQUksTUFBSSxDQUFiLEVBQWdCLE1BQUksVUFBcEIsRUFBZ0MsS0FBaEMsRUFBcUM7QUFDbkMseUNBQWlDLFVBQVUsR0FBVixDQUFqQztBQUNEOztBQUVELFVBQU0sU0FBTixJQUFtQixZQUFuQjtBQUNBLFFBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBLFdBQU8sU0FBUCxHQUFtQixNQUFNLFNBQXpCO0FBQ0EsV0FBTyxTQUFQLGtEQUFnRSxZQUFoRSx5Q0FBZ0gsUUFBaEg7O0FBRUEsZ0JBQVksYUFBWixDQUEwQixZQUExQixDQUF1QyxNQUF2QyxFQUErQyxXQUEvQztBQUNEO0FBQ0YsQ0ExQkQ7O0FBNEJBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBWTtBQUM1QjtBQUNELENBRkQ7O0FBSUEsS0FBSyxnQkFBTDtBQUNBLElBQUksU0FBSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIHZhciBteW1hdGggPSByZXF1aXJlICgnLi9saWIvbWF0aC5qcycpO1xuLy9cbi8vIGNvbnNvbGUubG9nKFwiMs+AID0gXCIgKyBteW1hdGguc3VtKG15bWF0aC5waSwgbXltYXRoLnBpKSk7XG5cbmNvbnNvbGUubG9nKCdpbml0Jyk7XG5cbmNvbnN0IGFwcCA9IHt9O1xuXG5hcHAuaGlnaGxpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUgY29kZScpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYmxvY2sgPSBibG9ja3NbaV1cbiAgICBjb25zdCByb290RWxlbWVudCA9IGJsb2NrLnBhcmVudEVsZW1lbnRcbiAgICBjb25zdCBsaW5lQ29kZXMgPSBibG9jay5pbm5lckhUTUwuc3BsaXQoL1xcbi8pXG4gICAgaWYgKGxpbmVDb2Rlc1tsaW5lQ29kZXMubGVuZ3RoIC0gMV0gPT09ICcnKSBsaW5lQ29kZXMucG9wKClcbiAgICBjb25zdCBsaW5lTGVuZ3RoID0gbGluZUNvZGVzLmxlbmd0aFxuXG4gICAgbGV0IGNvZGVMaW5lSHRtbCA9ICcnXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvZGVMaW5lSHRtbCArPSBgPGRpdiBjbGFzcz1cImxpbmVcIj4ke2kgKyAxfTwvZGl2PmBcbiAgICB9XG5cbiAgICBsZXQgY29kZUh0bWwgPSAnJ1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZUxlbmd0aDsgaSsrKSB7XG4gICAgICBjb2RlSHRtbCArPSBgPGRpdiBjbGFzcz1cImxpbmVcIj4ke2xpbmVDb2Rlc1tpXX08L2Rpdj5gXG4gICAgfVxuXG4gICAgYmxvY2suY2xhc3NOYW1lICs9ICcgaGlnaGxpZ2h0J1xuICAgIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ3VyZScpXG4gICAgZmlndXJlLmNsYXNzTmFtZSA9IGJsb2NrLmNsYXNzTmFtZVxuICAgIGZpZ3VyZS5pbm5lckhUTUwgPSBgPHRhYmxlPjx0Ym9keT48dHI+PHRkIGNsYXNzPVwiZ3V0dGVyXCI+PHByZT4ke2NvZGVMaW5lSHRtbH08L3ByZT48L3RkPjx0ZCBjbGFzcz1cImNvZGVcIj48cHJlPiR7Y29kZUh0bWx9PC9wcmU+PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT5gXG5cbiAgICByb290RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChmaWd1cmUsIHJvb3RFbGVtZW50KVxuICB9XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgLy9cbn0pXG5cbmhsanMuaW5pdEhpZ2hsaWdodGluZygpXG5hcHAuaGlnaGxpZ2h0KCkiXX0=
