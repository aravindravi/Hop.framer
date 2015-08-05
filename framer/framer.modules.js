require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"global":[function(require,module,exports){
exports.initGlobal = function() {
  exports.initBack();
  return hop.Global.visible = true;
};

exports.initBack = function() {
  return hop.back.on(Events.Click, function(event, layer) {
    window.shopNowMod.hideShopNow();
    return window.mainMenuMod.showMenu();
  });
};



},{}],"mainMenu":[function(require,module,exports){
exports.initMenu = function() {
  var count, footer, i, option;
  hop.MainMenu.y = 0;
  hop.MainMenu.states.add('hide', {
    opacity: 0
  });
  hop.MainMenu.states.add('show', {
    opacity: 1
  });
  hop.MainMenu.bringToFront();
  hop.Global.bringToFront();
  for (count = i = 1; i <= 8; count = ++i) {
    option = hop["option" + count];
    option.states.add("show", {
      y: option.y,
      opacity: 1
    });
    option.states.add("hide", {
      y: 1200,
      opacity: 0
    });
    option.states.switchInstant('hide');
  }
  footer = hop["footer"];
  footer.states.add('hide', {
    y: 1400,
    opacity: 0
  });
  footer.states.add('show', {
    y: footer.y,
    opacity: 1
  });
  footer.states.switchInstant('hide');
  return exports.showMenu();
};

exports.showMenu = function() {
  var count, fn, i;
  hop.MainMenu.states["switch"]('show');
  fn = function(count) {
    return Utils.delay(count * 0.1, function() {
      return hop["option" + count].states["switch"]('show');
    });
  };
  for (count = i = 1; i <= 8; count = ++i) {
    fn(count);
  }
  return Utils.delay(8 * 0.1, function() {
    return hop.footer.states["switch"]('show');
  });
};

exports.hideMenu = function() {
  var count, fn, i;
  fn = function(count) {
    return Utils.delay(count * 0.01, function() {
      return hop["option" + count].states["switch"]('hide');
    });
  };
  for (count = i = 1; i <= 8; count = ++i) {
    fn(count);
  }
  return Utils.delay(8 * 0.01, function() {
    hop.footer.states["switch"]('hide');
    return hop.MainMenu.states["switch"]('hide');
  });
};

hop.option1.on(Events.Click, function(event, layer) {
  window.shopNowMod.showShopNow();
  window.globalMod.initGlobal();
  return exports.hideMenu();
});



},{}],"shopNow":[function(require,module,exports){
exports.initShopNow = function() {
  var count, i, item, results;
  hop.shopNowBody.states.add({
    hide: {
      opacity: 0,
      scale: 0.6
    },
    show: {
      opacity: 1,
      scale: 1
    }
  });
  hop.map.states.add({
    hide: {
      opacity: 0,
      scale: 0.6
    },
    show: {
      opacity: 1,
      scale: 1,
      curve: 'ease-out'
    }
  });
  hop.globalFooter.states.add({
    hide: {
      y: 1200
    }
  });
  hop.map.states.switchInstant('hide');
  hop.shopNowBody.states.switchInstant('hide');
  hop.globalFooter.states.switchInstant('hide');
  results = [];
  for (count = i = 1; i <= 5; count = ++i) {
    item = hop['shopItem' + count];
    item.states.add('show', {
      y: item.y,
      opacity: 1
    });
    item.states.add('hide', {
      y: item.y - 40,
      opacity: 0
    });
    results.push(item.states.switchInstant('hide'));
  }
  return results;
};

exports.showShopNow = function() {
  hop.ShopNow.visible = true;
  hop.shopNowBody.states["switch"]('show');
  hop.globalFooter.states["switch"]('default');
  Utils.delay(0.2, function() {
    var count, i, results;
    hop.map.states["switch"]('show');
    results = [];
    for (count = i = 1; i <= 5; count = ++i) {
      results.push((function(count) {
        return Utils.delay(count * 0.2, function() {
          return hop["shopItem" + count].states["switch"]('show');
        });
      })(count));
    }
    return results;
  });
  return Utils.delay(1.2, function() {
    return hop.ShopNow.bringToFront();
  });
};

exports.hideShopNow = function() {
  var count, fn, i;
  hop.map.states["switch"]('hide');
  hop.globalFooter.states["switch"]('hide');
  fn = function(count) {
    return Utils.delay(count * 0.2, function() {
      return hop["shopItem" + count].states["switch"]('hide');
    });
  };
  for (count = i = 1; i <= 5; count = ++i) {
    fn(count);
  }
  return hop.shopNowBody.states["switch"]('hide');
};



},{}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXJhdmluZHJhdmkvRGVza3RvcC9BcmF2aW5kL1dvcmtzcGFjZS9Ib3AvSGktZmkgUHJvdG90eXBlcy9Ib3AuZnJhbWVyL21vZHVsZXMvZ2xvYmFsLmNvZmZlZSIsIi9Vc2Vycy9hcmF2aW5kcmF2aS9EZXNrdG9wL0FyYXZpbmQvV29ya3NwYWNlL0hvcC9IaS1maSBQcm90b3R5cGVzL0hvcC5mcmFtZXIvbW9kdWxlcy9tYWluTWVudS5jb2ZmZWUiLCIvVXNlcnMvYXJhdmluZHJhdmkvRGVza3RvcC9BcmF2aW5kL1dvcmtzcGFjZS9Ib3AvSGktZmkgUHJvdG90eXBlcy9Ib3AuZnJhbWVyL21vZHVsZXMvc2hvcE5vdy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBLEdBQUE7QUFDcEIsRUFBQSxPQUFPLENBQUMsUUFBUixDQUFBLENBQUEsQ0FBQTtTQUNBLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBWCxHQUFxQixLQUZEO0FBQUEsQ0FBckIsQ0FBQTs7QUFBQSxPQUlPLENBQUMsUUFBUixHQUFtQixTQUFBLEdBQUE7U0FDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFULENBQVksTUFBTSxDQUFDLEtBQW5CLEVBQTBCLFNBQUMsS0FBRCxFQUFPLEtBQVAsR0FBQTtBQUN6QixJQUFBLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBbEIsQ0FBQSxDQUFBLENBQUE7V0FDQSxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQW5CLENBQUEsRUFGeUI7RUFBQSxDQUExQixFQURrQjtBQUFBLENBSm5CLENBQUE7Ozs7O0FDR0EsT0FBTyxDQUFDLFFBQVIsR0FBbUIsU0FBQSxHQUFBO0FBRWxCLE1BQUEsd0JBQUE7QUFBQSxFQUFBLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBYixHQUFp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QUFBO0FBQUEsRUFBQSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFELENBQWQsQ0FBc0IsTUFBdEIsQ0FBQSxDQUFBO0FBQUEsRUFDQSxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFELENBQXZCLENBQStCLE1BQS9CLENBREEsQ0FBQTtBQUVBLE9BQ0ksU0FBQyxLQUFELEdBQUE7V0FDQSxLQUFLLENBQUMsS0FBTixDQUFZLEtBQUEsR0FBUSxHQUFwQixFQUF5QixTQUFBLEdBQUE7YUFDdkIsR0FBSSxDQUFBLFVBQUEsR0FBVyxLQUFYLENBQWlCLENBQUMsTUFBTSxDQUFDLFFBQUQsQ0FBNUIsQ0FBb0MsTUFBcEMsRUFEdUI7SUFBQSxDQUF6QixFQURBO0VBQUEsQ0FESjtBQUFBLE9BQWEsa0NBQWIsR0FBQTtBQUNDLE9BQUksTUFBSixDQUREO0FBQUEsR0FGQTtTQU1BLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQUQsQ0FBdEIsQ0FBOEIsTUFBOUIsRUFQcUI7QUFBQSxDQTNDdEIsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnRzLmluaXRHbG9iYWwgPSAtPlxuXHRleHBvcnRzLmluaXRCYWNrKClcblx0aG9wLkdsb2JhbC52aXNpYmxlID0gdHJ1ZVxuXG5leHBvcnRzLmluaXRCYWNrID0gLT5cblx0aG9wLmJhY2sub24gRXZlbnRzLkNsaWNrLCAoZXZlbnQsbGF5ZXIpIC0+XG5cdFx0d2luZG93LnNob3BOb3dNb2QuaGlkZVNob3BOb3coKVxuXHRcdHdpbmRvdy5tYWluTWVudU1vZC5zaG93TWVudSgpIiwiXG5cbiMgR2xvYmFsIEZ1bmN0aW9uc1xuZXhwb3J0cy5pbml0TWVudSA9IC0+XG5cdCNzdGF0ZXMgZm9yIE1haW5NZW51XG5cdGhvcC5NYWluTWVudS55ID0gMFxuXHRob3AuTWFpbk1lbnUuc3RhdGVzLmFkZCgnaGlkZScse29wYWNpdHk6MH0pXG5cdGhvcC5NYWluTWVudS5zdGF0ZXMuYWRkKCdzaG93Jyx7b3BhY2l0eToxfSlcblx0aG9wLk1haW5NZW51LmJyaW5nVG9Gcm9udCgpXHRcblx0aG9wLkdsb2JhbC5icmluZ1RvRnJvbnQoKVxuXHQjU3RhdGVzIGZvciBtZW51IG9wdGlvbnNcblx0Zm9yIGNvdW50IGluIFsxLi44XVxuXHRcdG9wdGlvbiA9IGhvcFtcIm9wdGlvblwiICsgY291bnRdXG5cdFx0b3B0aW9uLnN0YXRlcy5hZGQoXCJzaG93XCIse3k6b3B0aW9uLnksIG9wYWNpdHk6MX0pXG5cdFx0b3B0aW9uLnN0YXRlcy5hZGQoXCJoaWRlXCIse3k6MTIwMCwgb3BhY2l0eTowfSlcblx0XHRvcHRpb24uc3RhdGVzLnN3aXRjaEluc3RhbnQgJ2hpZGUnXG5cblx0I1N0YXRlcyBmb3IgZm9vdGVyXG5cdGZvb3RlciA9IGhvcFtcImZvb3RlclwiXVxuXHRmb290ZXIuc3RhdGVzLmFkZCgnaGlkZScsIHt5OjE0MDAsIG9wYWNpdHk6MH0pXG5cdGZvb3Rlci5zdGF0ZXMuYWRkKCdzaG93Jywge3k6Zm9vdGVyLnksIG9wYWNpdHk6MX0pXG5cdGZvb3Rlci5zdGF0ZXMuc3dpdGNoSW5zdGFudCAnaGlkZSdcblx0ZXhwb3J0cy5zaG93TWVudSgpXG5cbmV4cG9ydHMuc2hvd01lbnUgPSAtPlxuXHRob3AuTWFpbk1lbnUuc3RhdGVzLnN3aXRjaCgnc2hvdycpXG5cdGZvciBjb3VudCBpbiBbMS4uOF1cblx0XHRkbyAoY291bnQpIC0+XG5cdFx0ICAgVXRpbHMuZGVsYXkgY291bnQgKiAwLjEsIC0+XG5cdFx0ICAgICBob3BbXCJvcHRpb25cIitjb3VudF0uc3RhdGVzLnN3aXRjaCgnc2hvdycpXG5cblx0VXRpbHMuZGVsYXkgOCAqIDAuMSwgLT4gXG5cdFx0aG9wLmZvb3Rlci5zdGF0ZXMuc3dpdGNoKCdzaG93JylcblxuZXhwb3J0cy5oaWRlTWVudSA9IC0+XG5cdCNob3AuTWFpbk1lbnUuYmFja2dyb3VuZENvbG9yID0gJyNmZmZmZmYnXG5cdGZvciBjb3VudCBpbiBbMS4uOF1cblx0XHRkbyAoY291bnQpIC0+XG5cdFx0ICAgVXRpbHMuZGVsYXkgY291bnQgKiAwLjAxLCAtPlxuXHRcdCAgICAgaG9wW1wib3B0aW9uXCIrY291bnRdLnN0YXRlcy5zd2l0Y2goJ2hpZGUnKVxuXHRVdGlscy5kZWxheSA4ICogMC4wMSwgLT4gXG5cdFx0aG9wLmZvb3Rlci5zdGF0ZXMuc3dpdGNoKCdoaWRlJylcblx0XHRob3AuTWFpbk1lbnUuc3RhdGVzLnN3aXRjaCgnaGlkZScpXG5cblx0XG5cbmhvcC5vcHRpb24xLm9uIEV2ZW50cy5DbGljaywgKGV2ZW50LGxheWVyKSAtPlxuXHR3aW5kb3cuc2hvcE5vd01vZC5zaG93U2hvcE5vdygpXG5cdHdpbmRvdy5nbG9iYWxNb2QuaW5pdEdsb2JhbCgpXG5cdGV4cG9ydHMuaGlkZU1lbnUoKVxuXG5cblxuIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cblxuZXhwb3J0cy5pbml0U2hvcE5vdyA9IC0+XG5cdFxuXHRob3Auc2hvcE5vd0JvZHkuc3RhdGVzLmFkZFxuXHRcdGhpZGU6IFxuXHRcdFx0b3BhY2l0eTogMFxuXHRcdFx0c2NhbGU6IDAuNlxuXHRcdHNob3c6IFxuXHRcdFx0b3BhY2l0eTogMVxuXHRcdFx0c2NhbGU6IDFcblx0aG9wLm1hcC5zdGF0ZXMuYWRkXG5cdFx0aGlkZTpcblx0XHRcdG9wYWNpdHk6IDBcblx0XHRcdHNjYWxlOiAwLjZcblx0XHRzaG93OiBcblx0XHRcdG9wYWNpdHk6IDFcblx0XHRcdHNjYWxlOiAxXG5cdFx0XHRjdXJ2ZTogJ2Vhc2Utb3V0J1x0XG5cdGhvcC5nbG9iYWxGb290ZXIuc3RhdGVzLmFkZFxuXHRcdGhpZGU6XG5cdFx0XHR5OiAxMjAwXG5cblx0aG9wLm1hcC5zdGF0ZXMuc3dpdGNoSW5zdGFudCgnaGlkZScpXG5cdGhvcC5zaG9wTm93Qm9keS5zdGF0ZXMuc3dpdGNoSW5zdGFudCgnaGlkZScpXG5cdGhvcC5nbG9iYWxGb290ZXIuc3RhdGVzLnN3aXRjaEluc3RhbnQoJ2hpZGUnKVxuXG5cdGZvciBjb3VudCBpbiBbMS4uNV1cblx0XHRpdGVtID0gaG9wWydzaG9wSXRlbScgKyBjb3VudF1cblx0XHRpdGVtLnN0YXRlcy5hZGQoJ3Nob3cnLHt5OiBpdGVtLnksIG9wYWNpdHk6MX0pXG5cdFx0aXRlbS5zdGF0ZXMuYWRkKCdoaWRlJyx7eTogKGl0ZW0ueSAtIDQwKSwgb3BhY2l0eTowfSlcblx0XHRpdGVtLnN0YXRlcy5zd2l0Y2hJbnN0YW50ICdoaWRlJ1xuXG5leHBvcnRzLnNob3dTaG9wTm93ID0gLT5cblx0aG9wLlNob3BOb3cudmlzaWJsZSA9IHRydWVcblx0aG9wLnNob3BOb3dCb2R5LnN0YXRlcy5zd2l0Y2goJ3Nob3cnKVx0XG5cdGhvcC5nbG9iYWxGb290ZXIuc3RhdGVzLnN3aXRjaCgnZGVmYXVsdCcpXHRcblx0VXRpbHMuZGVsYXkgMC4yLCAtPiBcblx0XHRob3AubWFwLnN0YXRlcy5zd2l0Y2goJ3Nob3cnKVxuXHRcdGZvciBjb3VudCBpbiBbMS4uNV1cblx0XHRcdGRvIChjb3VudCkgLT5cblx0XHRcdCAgIFV0aWxzLmRlbGF5IGNvdW50ICogMC4yLCAtPlxuXHRcdFx0ICAgICBob3BbXCJzaG9wSXRlbVwiK2NvdW50XS5zdGF0ZXMuc3dpdGNoKCdzaG93Jylcblx0VXRpbHMuZGVsYXkgMS4yLCAtPlxuXHRcdGhvcC5TaG9wTm93LmJyaW5nVG9Gcm9udCgpXG5leHBvcnRzLmhpZGVTaG9wTm93ID0gLT5cblx0aG9wLm1hcC5zdGF0ZXMuc3dpdGNoKCdoaWRlJylcblx0aG9wLmdsb2JhbEZvb3Rlci5zdGF0ZXMuc3dpdGNoKCdoaWRlJylcblx0Zm9yIGNvdW50IGluIFsxLi41XVxuXHRcdGRvIChjb3VudCkgLT5cblx0XHQgICBVdGlscy5kZWxheSBjb3VudCAqIDAuMiwgLT5cblx0XHQgICAgIGhvcFtcInNob3BJdGVtXCIrY291bnRdLnN0YXRlcy5zd2l0Y2goJ2hpZGUnKVxuXHRob3Auc2hvcE5vd0JvZHkuc3RhdGVzLnN3aXRjaCgnaGlkZScpXG5cblxuXG5cblxuXG4iXX0=
