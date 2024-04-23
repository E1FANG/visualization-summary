import {
  __commonJS
} from "./chunk-P2LSHJDD.js";

// node_modules/highcharts/modules/wordcloud.js
var require_wordcloud = __commonJS({
  "node_modules/highcharts/modules/wordcloud.js"(exports, module) {
    (function(c) {
      "object" === typeof module && module.exports ? (c["default"] = c, module.exports = c) : "function" === typeof define && define.amd ? define("highcharts/modules/wordcloud", ["highcharts"], function(k) {
        c(k);
        c.Highcharts = k;
        return c;
      }) : c("undefined" !== typeof Highcharts ? Highcharts : void 0);
    })(function(c) {
      function k(c2, g, f, p) {
        c2.hasOwnProperty(g) || (c2[g] = p.apply(null, f), "function" === typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: g, module: c2[g] } })));
      }
      c = c ? c._modules : {};
      k(
        c,
        "Series/DrawPointUtilities.js",
        [c["Core/Utilities.js"]],
        function(c2) {
          return { draw: function(c3, f) {
            var p = f.animatableAttribs, m = f.onComplete, l = f.css, e = f.renderer, g = c3.series && c3.series.chart.hasRendered ? void 0 : c3.series && c3.series.options.animation, h = c3.graphic;
            f.attribs = f.attribs || {};
            f.attribs["class"] = c3.getClassName();
            if (c3.shouldDraw())
              h || (c3.graphic = h = "text" === f.shapeType ? e.text() : e[f.shapeType](f.shapeArgs || {}), h.add(f.group)), l && h.css(l), h.attr(f.attribs).animate(p, f.isNew ? false : g, m);
            else if (h) {
              var k2 = function() {
                c3.graphic = h = h && h.destroy();
                "function" === typeof m && m();
              };
              Object.keys(p).length ? h.animate(p, void 0, function() {
                return k2();
              }) : k2();
            }
          } };
        }
      );
      k(c, "Series/Wordcloud/WordcloudPoint.js", [c["Core/Series/SeriesRegistry.js"], c["Core/Utilities.js"]], function(c2, g) {
        var f = this && this.__extends || /* @__PURE__ */ function() {
          var c3 = function(m, f2) {
            c3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c4, f3) {
              c4.__proto__ = f3;
            } || function(c4, f3) {
              for (var e in f3)
                f3.hasOwnProperty(e) && (c4[e] = f3[e]);
            };
            return c3(m, f2);
          };
          return function(f2, g2) {
            function e() {
              this.constructor = f2;
            }
            c3(f2, g2);
            f2.prototype = null === g2 ? Object.create(g2) : (e.prototype = g2.prototype, new e());
          };
        }();
        g = g.extend;
        c2 = function(c3) {
          function g2() {
            var f2 = null !== c3 && c3.apply(this, arguments) || this;
            f2.dimensions = void 0;
            f2.options = void 0;
            f2.polygon = void 0;
            f2.rect = void 0;
            f2.series = void 0;
            return f2;
          }
          f(g2, c3);
          g2.prototype.isValid = function() {
            return true;
          };
          return g2;
        }(c2.seriesTypes.column.prototype.pointClass);
        g(c2.prototype, { weight: 1 });
        return c2;
      });
      k(c, "Series/Wordcloud/WordcloudUtils.js", [c["Core/Globals.js"], c["Core/Utilities.js"]], function(c2, g) {
        function f(a, b) {
          return !(b.left > a.right || b.right < a.left || b.top > a.bottom || b.bottom < a.top);
        }
        function k2(a, b) {
          var d = b[0] - a[0];
          a = b[1] - a[1];
          return [[-a, d], [a, -d]];
        }
        function m(a) {
          var b = a.axes || [];
          if (!b.length) {
            b = [];
            var d = d = a.concat([a[0]]);
            d.reduce(function(a2, d2) {
              var c3 = k2(a2, d2)[0];
              A(b, function(a3) {
                return a3[0] === c3[0] && a3[1] === c3[1];
              }) || b.push(c3);
              return d2;
            });
            a.axes = b;
          }
          return b;
        }
        function l(a, b) {
          a = a.map(function(a2) {
            return a2[0] * b[0] + a2[1] * b[1];
          });
          return { min: Math.min.apply(this, a), max: Math.max.apply(this, a) };
        }
        function e(a, b) {
          var d = m(a), c3 = m(b);
          d = d.concat(c3);
          return !A(d, function(d2) {
            var c4 = l(a, d2);
            d2 = l(b, d2);
            return !!(d2.min > c4.max || d2.max < c4.min);
          });
        }
        function H(a, b) {
          var d = false, c3 = a.rect, z = a.polygon, g2 = a.lastCollidedWith, h2 = function(b2) {
            var d2 = f(c3, b2.rect);
            d2 && (a.rotation % 90 || b2.rotation % 90) && (d2 = e(z, b2.polygon));
            return d2;
          };
          g2 && ((d = h2(g2)) || delete a.lastCollidedWith);
          d || (d = !!A(b, function(b2) {
            var d2 = h2(b2);
            d2 && (a.lastCollidedWith = b2);
            return d2;
          }));
          return d;
        }
        function h(a, b) {
          b = 4 * a;
          var d = Math.ceil((Math.sqrt(b) - 1) / 2), c3 = 2 * d + 1, f2 = Math.pow(c3, 2), e2 = false;
          --c3;
          1e4 >= a && ("boolean" === typeof e2 && b >= f2 - c3 && (e2 = { x: d - (f2 - b), y: -d }), f2 -= c3, "boolean" === typeof e2 && b >= f2 - c3 && (e2 = { x: -d, y: -d + (f2 - b) }), f2 -= c3, "boolean" === typeof e2 && (e2 = b >= f2 - c3 ? { x: -d + (f2 - b), y: d } : { x: d, y: d - (f2 - b - c3) }), e2.x *= 5, e2.y *= 5);
          return e2;
        }
        function q(a, b) {
          var d = b.width / 2, c3 = -(b.height / 2), f2 = b.height / 2;
          return !(-(b.width / 2) < a.left && d > a.right && c3 < a.top && f2 > a.bottom);
        }
        function u(a, b, d) {
          return d.map(function(d2) {
            return [d2[0] + a, d2[1] + b];
          });
        }
        function w(a, b) {
          b = n(b) ? b : 14;
          b = Math.pow(10, b);
          return Math.round(a * b) / b;
        }
        function v(a, b) {
          var d = a[0];
          a = a[1];
          var c3 = x * -b;
          b = Math.cos(c3);
          c3 = Math.sin(c3);
          return [w(d * b - a * c3), w(d * c3 + a * b)];
        }
        function B(a, b, d) {
          a = v([a[0] - b[0], a[1] - b[1]], d);
          return [a[0] + b[0], a[1] + b[1]];
        }
        var x = c2.deg2rad, D = g.extend, A = g.find, n = g.isNumber, C = g.isObject, y = g.merge;
        return { archimedeanSpiral: function(a, b) {
          var d = b.field;
          b = false;
          d = d.width * d.width + d.height * d.height;
          var c3 = 0.8 * a;
          1e4 >= a && (b = { x: c3 * Math.cos(c3), y: c3 * Math.sin(c3) }, Math.min(Math.abs(b.x), Math.abs(b.y)) < d || (b = false));
          return b;
        }, extendPlayingField: function(a, b) {
          if (C(a) && C(b)) {
            var d = b.bottom - b.top;
            var c3 = b.right - b.left;
            b = a.ratioX;
            var f2 = a.ratioY;
            d = c3 * b > d * f2 ? c3 : d;
            a = y(a, { width: a.width + d * b * 2, height: a.height + d * f2 * 2 });
          }
          return a;
        }, getBoundingBoxFromPolygon: function(a) {
          return a.reduce(function(a2, d) {
            var b = d[0];
            d = d[1];
            a2.left = Math.min(b, a2.left);
            a2.right = Math.max(b, a2.right);
            a2.bottom = Math.max(d, a2.bottom);
            a2.top = Math.min(d, a2.top);
            return a2;
          }, { left: Number.MAX_VALUE, right: -Number.MAX_VALUE, bottom: -Number.MAX_VALUE, top: Number.MAX_VALUE });
        }, getPlayingField: function(a, b, d) {
          d = d.reduce(function(a2, b2) {
            b2 = b2.dimensions;
            var d2 = Math.max(b2.width, b2.height);
            a2.maxHeight = Math.max(a2.maxHeight, b2.height);
            a2.maxWidth = Math.max(a2.maxWidth, b2.width);
            a2.area += d2 * d2;
            return a2;
          }, { maxHeight: 0, maxWidth: 0, area: 0 });
          d = Math.max(d.maxHeight, d.maxWidth, 0.85 * Math.sqrt(d.area));
          var c3 = a > b ? a / b : 1;
          a = b > a ? b / a : 1;
          return { width: d * c3, height: d * a, ratioX: c3, ratioY: a };
        }, getPolygon: function(a, b, d, c3, f2) {
          var e2 = [a, b], g2 = a - d / 2;
          a += d / 2;
          d = b - c3 / 2;
          b += c3 / 2;
          return [[g2, d], [a, d], [a, b], [g2, b]].map(function(a2) {
            return B(a2, e2, -f2);
          });
        }, getRandomPosition: function(a) {
          return Math.round(a * (Math.random() + 0.5) / 2);
        }, getRotation: function(a, b, d, c3) {
          var f2 = false;
          n(a) && n(b) && n(d) && n(c3) && 0 < a && -1 < b && c3 > d && (f2 = d + b % a * ((c3 - d) / (a - 1 || 1)));
          return f2;
        }, getScale: function(a, b, d) {
          var c3 = 2 * Math.max(Math.abs(d.top), Math.abs(d.bottom));
          d = 2 * Math.max(Math.abs(d.left), Math.abs(d.right));
          return Math.min(0 < d ? 1 / d * a : 1, 0 < c3 ? 1 / c3 * b : 1);
        }, getSpiral: function(a, b) {
          var c3, f2 = [];
          for (c3 = 1; 1e4 > c3; c3++)
            f2.push(a(c3, b));
          return function(a2) {
            return 1e4 >= a2 ? f2[a2 - 1] : false;
          };
        }, intersectionTesting: function(a, b) {
          var c3 = b.placed, f2 = b.field, e2 = b.rectangle, g2 = b.polygon, h2 = b.spiral, m2 = 1, k3 = { x: 0, y: 0 }, n2 = a.rect = D({}, e2);
          a.polygon = g2;
          for (a.rotation = b.rotation; false !== k3 && (H(a, c3) || q(n2, f2)); )
            k3 = h2(m2), C(k3) && (n2.left = e2.left + k3.x, n2.right = e2.right + k3.x, n2.top = e2.top + k3.y, n2.bottom = e2.bottom + k3.y, a.polygon = u(k3.x, k3.y, g2)), m2++;
          return k3;
        }, isPolygonsColliding: e, isRectanglesIntersecting: f, rectangularSpiral: function(a, b) {
          a = h(a, b);
          b = b.field;
          a && (a.x *= b.ratioX, a.y *= b.ratioY);
          return a;
        }, rotate2DToOrigin: v, rotate2DToPoint: B, squareSpiral: h, updateFieldBoundaries: function(a, b) {
          if (!n(a.left) || a.left > b.left)
            a.left = b.left;
          if (!n(a.right) || a.right < b.right)
            a.right = b.right;
          if (!n(a.top) || a.top > b.top)
            a.top = b.top;
          if (!n(a.bottom) || a.bottom < b.bottom)
            a.bottom = b.bottom;
          return a;
        } };
      });
      k(c, "Series/Wordcloud/WordcloudSeries.js", [c["Series/DrawPointUtilities.js"], c["Core/Globals.js"], c["Core/Series/Series.js"], c["Core/Series/SeriesRegistry.js"], c["Core/Utilities.js"], c["Series/Wordcloud/WordcloudPoint.js"], c["Series/Wordcloud/WordcloudUtils.js"]], function(c2, g, f, k2, m, l, e) {
        var p = this && this.__extends || /* @__PURE__ */ function() {
          var a2 = function(b2, c3) {
            a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a3, b3) {
              a3.__proto__ = b3;
            } || function(a3, b3) {
              for (var c4 in b3)
                b3.hasOwnProperty(c4) && (a3[c4] = b3[c4]);
            };
            return a2(b2, c3);
          };
          return function(b2, c3) {
            function d2() {
              this.constructor = b2;
            }
            a2(b2, c3);
            b2.prototype = null === c3 ? Object.create(c3) : (d2.prototype = c3.prototype, new d2());
          };
        }(), h = g.noop, q = k2.seriesTypes.column, u = m.extend, w = m.isArray, v = m.isNumber, B = m.isObject, x = m.merge;
        m = e.archimedeanSpiral;
        var D = e.extendPlayingField, A = e.getBoundingBoxFromPolygon, n = e.getPlayingField, C = e.getPolygon, y = e.getRandomPosition, a = e.getRotation, b = e.getScale, d = e.getSpiral, F = e.intersectionTesting, z = e.isPolygonsColliding, I = e.rectangularSpiral, J = e.rotate2DToOrigin, K = e.rotate2DToPoint, L = e.squareSpiral, M = e.updateFieldBoundaries;
        e = function(a2) {
          function e2() {
            var b2 = null !== a2 && a2.apply(this, arguments) || this;
            b2.data = void 0;
            b2.options = void 0;
            b2.points = void 0;
            return b2;
          }
          p(e2, a2);
          e2.prototype.bindAxes = function() {
            var a3 = { endOnTick: false, gridLineWidth: 0, lineWidth: 0, maxPadding: 0, startOnTick: false, title: void 0, tickPositions: [] };
            f.prototype.bindAxes.call(this);
            u(this.yAxis.options, a3);
            u(
              this.xAxis.options,
              a3
            );
          };
          e2.prototype.pointAttribs = function(a3, b2) {
            a3 = g.seriesTypes.column.prototype.pointAttribs.call(this, a3, b2);
            delete a3.stroke;
            delete a3["stroke-width"];
            return a3;
          };
          e2.prototype.deriveFontSize = function(a3, b2, c3) {
            a3 = v(a3) ? a3 : 0;
            b2 = v(b2) ? b2 : 1;
            c3 = v(c3) ? c3 : 1;
            return Math.floor(Math.max(c3, a3 * b2));
          };
          e2.prototype.drawPoints = function() {
            var a3 = this, f2 = a3.hasRendered, e3 = a3.xAxis, g2 = a3.yAxis, k3 = a3.group, h2 = a3.options, m2 = h2.animation, N = h2.allowExtendPlayingField, p2 = a3.chart.renderer, l2 = p2.text().add(k3), q2 = [], w2 = a3.placementStrategy[h2.placementStrategy], y2 = h2.rotation, z2 = a3.points.map(function(a4) {
              return a4.weight;
            }), x2 = Math.max.apply(null, z2), E = a3.points.concat().sort(function(a4, b2) {
              return b2.weight - a4.weight;
            });
            a3.group.attr({ scaleX: 1, scaleY: 1 });
            E.forEach(function(b2) {
              var c3 = a3.deriveFontSize(1 / x2 * b2.weight, h2.maxFontSize, h2.minFontSize);
              c3 = u({ fontSize: c3 + "px" }, h2.style);
              l2.css(c3).attr({ x: 0, y: 0, text: b2.name });
              c3 = l2.getBBox(true);
              b2.dimensions = { height: c3.height, width: c3.width };
            });
            var t = n(e3.len, g2.len, E);
            var G = d(a3.spirals[h2.spiral], { field: t });
            E.forEach(function(b2) {
              var d2 = a3.deriveFontSize(
                1 / x2 * b2.weight,
                h2.maxFontSize,
                h2.minFontSize
              );
              d2 = u({ fontSize: d2 + "px" }, h2.style);
              var e4 = w2(b2, { data: E, field: t, placed: q2, rotation: y2 }), g3 = u(a3.pointAttribs(b2, b2.selected && "select"), { align: "center", "alignment-baseline": "middle", "dominant-baseline": "middle", x: e4.x, y: e4.y, text: b2.name, rotation: v(e4.rotation) ? e4.rotation : void 0 }), n2 = C(e4.x, e4.y, b2.dimensions.width, b2.dimensions.height, e4.rotation), l3 = A(n2), r = F(b2, { rectangle: l3, polygon: n2, field: t, placed: q2, spiral: G, rotation: e4.rotation });
              !r && N && (t = D(t, l3), r = F(b2, {
                rectangle: l3,
                polygon: n2,
                field: t,
                placed: q2,
                spiral: G,
                rotation: e4.rotation
              }));
              B(r) ? (g3.x = (g3.x || 0) + r.x, g3.y = (g3.y || 0) + r.y, l3.left += r.x, l3.right += r.x, l3.top += r.y, l3.bottom += r.y, t = M(t, l3), q2.push(b2), b2.isNull = false, b2.isInside = true) : b2.isNull = true;
              if (m2) {
                var O = { x: g3.x, y: g3.y };
                f2 ? (delete g3.x, delete g3.y) : (g3.x = 0, g3.y = 0);
              }
              c2.draw(b2, { animatableAttribs: O, attribs: g3, css: d2, group: k3, renderer: p2, shapeArgs: void 0, shapeType: "text" });
            });
            l2 = l2.destroy();
            e3 = b(e3.len, g2.len, t);
            a3.group.attr({ scaleX: e3, scaleY: e3 });
          };
          e2.prototype.hasData = function() {
            return B(this) && true === this.visible && w(this.points) && 0 < this.points.length;
          };
          e2.prototype.getPlotBox = function() {
            var a3 = this.chart, b2 = a3.inverted, c3 = this[b2 ? "yAxis" : "xAxis"];
            b2 = this[b2 ? "xAxis" : "yAxis"];
            return { translateX: (c3 ? c3.left : a3.plotLeft) + (c3 ? c3.len : a3.plotWidth) / 2, translateY: (b2 ? b2.top : a3.plotTop) + (b2 ? b2.len : a3.plotHeight) / 2, scaleX: 1, scaleY: 1 };
          };
          e2.defaultOptions = x(q.defaultOptions, { allowExtendPlayingField: true, animation: { duration: 500 }, borderWidth: 0, clip: false, colorByPoint: true, cropThreshold: Infinity, minFontSize: 1, maxFontSize: 25, placementStrategy: "center", rotation: {
            from: 0,
            orientations: 2,
            to: 90
          }, showInLegend: false, spiral: "rectangular", style: { fontFamily: "sans-serif", fontWeight: "900", whiteSpace: "nowrap" }, tooltip: { followPointer: true, pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.weight}</b><br/>' } });
          return e2;
        }(q);
        u(e.prototype, { animate: h, animateDrilldown: h, animateDrillupFrom: h, pointClass: l, setClip: h, placementStrategy: { random: function(b2, c3) {
          var d2 = c3.field;
          c3 = c3.rotation;
          return { x: y(d2.width) - d2.width / 2, y: y(d2.height) - d2.height / 2, rotation: a(
            c3.orientations,
            b2.index,
            c3.from,
            c3.to
          ) };
        }, center: function(b2, c3) {
          c3 = c3.rotation;
          return { x: 0, y: 0, rotation: a(c3.orientations, b2.index, c3.from, c3.to) };
        } }, pointArrayMap: ["weight"], spirals: { archimedean: m, rectangular: I, square: L }, utils: { extendPlayingField: D, getRotation: a, isPolygonsColliding: z, rotate2DToOrigin: J, rotate2DToPoint: K } });
        k2.registerSeriesType("wordcloud", e);
        "";
        return e;
      });
      k(c, "masters/modules/wordcloud.src.js", [], function() {
      });
    });
  }
});
export default require_wordcloud();
//# sourceMappingURL=highcharts_modules_wordcloud.js.map
