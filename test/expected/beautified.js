// some vendor code
var fixtures = {
  foo: {}
};

(function() {
  var t = {}.hasOwnProperty, r = function(r, o) {
    function n() {
      this.constructor = r;
    }
    for (var e in o) t.call(o, e) && (r[e] = o[e]);
    return n.prototype = o.prototype, r.prototype = new n(), r.__super__ = o.prototype, 
    r;
  };
  fixtures.foo.Si = function() {
    function t() {}
    return t.prototype.bye = function(t) {
      return "bye " + t;
    }, t;
  }(), fixtures.foo.Bar = function(t) {
    function o() {
      return o.__super__.constructor.apply(this, arguments);
    }
    return r(o, t), o.prototype.bye = function(t) {
      var r;
      try {
        return o.__super__.bye.apply(this, arguments).bye(t);
      } catch (n) {
        return r = n, "ups";
      }
    }, o;
  }(app.foo.Si), fixtures.Foo = function() {
    function t() {}
    return t.prototype.hello = function(t) {
      return "hello " + t;
    }, t;
  }();
}).call(this);