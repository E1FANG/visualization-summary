import {
  __commonJS
} from "./chunk-P2LSHJDD.js";

// node_modules/highcharts/highstock.js
var require_highstock = __commonJS({
  "node_modules/highcharts/highstock.js"(exports, module) {
    (function(X, J) {
      "object" === typeof module && module.exports ? (J["default"] = J, module.exports = X.document ? J(X) : J) : "function" === typeof define && define.amd ? define("highcharts/highstock", function() {
        return J(X);
      }) : (X.Highcharts && X.Highcharts.error(16, true), X.Highcharts = J(X));
    })("undefined" !== typeof window ? window : exports, function(X) {
      function J(a2, q, A, E) {
        a2.hasOwnProperty(q) || (a2[q] = E.apply(null, A), "function" === typeof CustomEvent && X.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: q, module: a2[q] } })));
      }
      var a = {};
      J(a, "Core/Globals.js", [], function() {
        var a2;
        (function(a3) {
          a3.SVG_NS = "http://www.w3.org/2000/svg";
          a3.product = "Highcharts";
          a3.version = "10.3.3";
          a3.win = "undefined" !== typeof X ? X : {};
          a3.doc = a3.win.document;
          a3.svg = a3.doc && a3.doc.createElementNS && !!a3.doc.createElementNS(a3.SVG_NS, "svg").createSVGRect;
          a3.userAgent = a3.win.navigator && a3.win.navigator.userAgent || "";
          a3.isChrome = -1 !== a3.userAgent.indexOf("Chrome");
          a3.isFirefox = -1 !== a3.userAgent.indexOf("Firefox");
          a3.isMS = /(edge|msie|trident)/i.test(a3.userAgent) && !a3.win.opera;
          a3.isSafari = !a3.isChrome && -1 !== a3.userAgent.indexOf("Safari");
          a3.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(a3.userAgent);
          a3.isWebKit = -1 !== a3.userAgent.indexOf("AppleWebKit");
          a3.deg2rad = 2 * Math.PI / 360;
          a3.hasBidiBug = a3.isFirefox && 4 > parseInt(a3.userAgent.split("Firefox/")[1], 10);
          a3.hasTouch = !!a3.win.TouchEvent;
          a3.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"];
          a3.noop = function() {
          };
          a3.supportsPassiveEvents = function() {
            var v = false;
            if (!a3.isMS) {
              var q = Object.defineProperty({}, "passive", { get: function() {
                v = true;
              } });
              a3.win.addEventListener && a3.win.removeEventListener && (a3.win.addEventListener("testPassive", a3.noop, q), a3.win.removeEventListener("testPassive", a3.noop, q));
            }
            return v;
          }();
          a3.charts = [];
          a3.dateFormats = {};
          a3.seriesTypes = {};
          a3.symbolSizes = {};
          a3.chartCount = 0;
        })(a2 || (a2 = {}));
        "";
        return a2;
      });
      J(a, "Core/Utilities.js", [a["Core/Globals.js"]], function(a2) {
        function v(d, b2, e2, g2) {
          var r = b2 ? "Highcharts error" : "Highcharts warning";
          32 === d && (d = "" + r + ": Deprecated member");
          var I = n(d), z = I ? "" + r + " #" + d + ": www.highcharts.com/errors/" + d + "/" : d.toString();
          if ("undefined" !== typeof g2) {
            var t2 = "";
            I && (z += "?");
            H(g2, function(d2, b3) {
              t2 += "\n - ".concat(b3, ": ").concat(d2);
              I && (z += encodeURI(b3) + "=" + encodeURI(d2));
            });
            z += t2;
          }
          y(a2, "displayError", { chart: e2, code: d, message: z, params: g2 }, function() {
            if (b2)
              throw Error(z);
            k.console && -1 === v.messages.indexOf(z) && console.warn(z);
          });
          v.messages.push(z);
        }
        function A(d, b2) {
          var r = {};
          H(d, function(e2, g2) {
            if (F(d[g2], true) && !d.nodeType && b2[g2])
              e2 = A(d[g2], b2[g2]), Object.keys(e2).length && (r[g2] = e2);
            else if (F(d[g2]) || d[g2] !== b2[g2] || g2 in d && !(g2 in b2))
              r[g2] = d[g2];
          });
          return r;
        }
        function E(d, b2) {
          return parseInt(d, b2 || 10);
        }
        function B(d) {
          return "string" === typeof d;
        }
        function C(d) {
          d = Object.prototype.toString.call(d);
          return "[object Array]" === d || "[object Array Iterator]" === d;
        }
        function F(d, b2) {
          return !!d && "object" === typeof d && (!b2 || !C(d));
        }
        function x(d) {
          return F(d) && "number" === typeof d.nodeType;
        }
        function u(d) {
          var b2 = d && d.constructor;
          return !(!F(d, true) || x(d) || !b2 || !b2.name || "Object" === b2.name);
        }
        function n(d) {
          return "number" === typeof d && !isNaN(d) && Infinity > d && -Infinity < d;
        }
        function c(d) {
          return "undefined" !== typeof d && null !== d;
        }
        function h(d, b2, e2) {
          var r = B(b2) && !c(e2), g2, k2 = function(b3, e3) {
            c(b3) ? d.setAttribute(e3, b3) : r ? (g2 = d.getAttribute(e3)) || "class" !== e3 || (g2 = d.getAttribute(e3 + "Name")) : d.removeAttribute(e3);
          };
          B(b2) ? k2(e2, b2) : H(b2, k2);
          return g2;
        }
        function m(d, b2) {
          var r;
          d || (d = {});
          for (r in b2)
            d[r] = b2[r];
          return d;
        }
        function l() {
          for (var d = arguments, b2 = d.length, e2 = 0; e2 < b2; e2++) {
            var g2 = d[e2];
            if ("undefined" !== typeof g2 && null !== g2)
              return g2;
          }
        }
        function p(d, b2) {
          a2.isMS && !a2.svg && b2 && c(b2.opacity) && (b2.filter = "alpha(opacity=".concat(100 * b2.opacity, ")"));
          m(
            d.style,
            b2
          );
        }
        function f(d) {
          return Math.pow(10, Math.floor(Math.log(d) / Math.LN10));
        }
        function D(d, b2) {
          return 1e14 < d ? d : parseFloat(d.toPrecision(b2 || 14));
        }
        function G(d, b2, e2) {
          var r = a2.getStyle || G;
          if ("width" === b2)
            return b2 = Math.min(d.offsetWidth, d.scrollWidth), e2 = d.getBoundingClientRect && d.getBoundingClientRect().width, e2 < b2 && e2 >= b2 - 1 && (b2 = Math.floor(e2)), Math.max(0, b2 - (r(d, "padding-left", true) || 0) - (r(d, "padding-right", true) || 0));
          if ("height" === b2)
            return Math.max(0, Math.min(d.offsetHeight, d.scrollHeight) - (r(d, "padding-top", true) || 0) - (r(
              d,
              "padding-bottom",
              true
            ) || 0));
          k.getComputedStyle || v(27, true);
          if (d = k.getComputedStyle(d, void 0)) {
            var g2 = d.getPropertyValue(b2);
            l(e2, "opacity" !== b2) && (g2 = E(g2));
          }
          return g2;
        }
        function H(d, b2, e2) {
          for (var r in d)
            Object.hasOwnProperty.call(d, r) && b2.call(e2 || d[r], d[r], r, d);
        }
        function K(d, b2, e2) {
          function r(b3, e3) {
            var r2 = d.removeEventListener || a2.removeEventListenerPolyfill;
            r2 && r2.call(d, b3, e3, false);
          }
          function g2(e3) {
            var g3;
            if (d.nodeName) {
              if (b2) {
                var I = {};
                I[b2] = true;
              } else
                I = e3;
              H(I, function(d2, b3) {
                if (e3[b3])
                  for (g3 = e3[b3].length; g3--; )
                    r(b3, e3[b3][g3].fn);
              });
            }
          }
          var k2 = "function" === typeof d && d.prototype || d;
          if (Object.hasOwnProperty.call(k2, "hcEvents")) {
            var z = k2.hcEvents;
            b2 ? (k2 = z[b2] || [], e2 ? (z[b2] = k2.filter(function(d2) {
              return e2 !== d2.fn;
            }), r(b2, e2)) : (g2(z), z[b2] = [])) : (g2(z), delete k2.hcEvents);
          }
        }
        function y(d, b2, e2, g2) {
          e2 = e2 || {};
          if (w.createEvent && (d.dispatchEvent || d.fireEvent && d !== a2)) {
            var r = w.createEvent("Events");
            r.initEvent(b2, true, true);
            e2 = m(r, e2);
            d.dispatchEvent ? d.dispatchEvent(e2) : d.fireEvent(b2, e2);
          } else if (d.hcEvents) {
            e2.target || m(e2, {
              preventDefault: function() {
                e2.defaultPrevented = true;
              },
              target: d,
              type: b2
            });
            r = [];
            for (var I = d, k2 = false; I.hcEvents; )
              Object.hasOwnProperty.call(I, "hcEvents") && I.hcEvents[b2] && (r.length && (k2 = true), r.unshift.apply(r, I.hcEvents[b2])), I = Object.getPrototypeOf(I);
            k2 && r.sort(function(d2, b3) {
              return d2.order - b3.order;
            });
            r.forEach(function(b3) {
              false === b3.fn.call(d, e2) && e2.preventDefault();
            });
          }
          g2 && !e2.defaultPrevented && g2.call(d, e2);
        }
        var t = a2.charts, w = a2.doc, k = a2.win;
        (v || (v = {})).messages = [];
        Math.easeInOutSine = function(d) {
          return -0.5 * (Math.cos(Math.PI * d) - 1);
        };
        var g = Array.prototype.find ? function(d, b2) {
          return d.find(b2);
        } : function(d, b2) {
          var e2, r = d.length;
          for (e2 = 0; e2 < r; e2++)
            if (b2(d[e2], e2))
              return d[e2];
        };
        H({ map: "map", each: "forEach", grep: "filter", reduce: "reduce", some: "some" }, function(d, b2) {
          a2[b2] = function(e2) {
            var r;
            v(32, false, void 0, (r = {}, r["Highcharts.".concat(b2)] = "use Array.".concat(d), r));
            return Array.prototype[d].apply(e2, [].slice.call(arguments, 1));
          };
        });
        var e, b = function() {
          var d = Math.random().toString(36).substring(2, 9) + "-", b2 = 0;
          return function() {
            return "highcharts-" + (e ? "" : d) + b2++;
          };
        }();
        k.jQuery && (k.jQuery.fn.highcharts = function() {
          var d = [].slice.call(arguments);
          if (this[0])
            return d[0] ? (new a2[B(d[0]) ? d.shift() : "Chart"](this[0], d[0], d[1]), this) : t[h(this[0], "data-highcharts-chart")];
        });
        g = {
          addEvent: function(d, b2, e2, g2) {
            void 0 === g2 && (g2 = {});
            var r = "function" === typeof d && d.prototype || d;
            Object.hasOwnProperty.call(r, "hcEvents") || (r.hcEvents = {});
            r = r.hcEvents;
            a2.Point && d instanceof a2.Point && d.series && d.series.chart && (d.series.chart.runTrackerClick = true);
            var k2 = d.addEventListener || a2.addEventListenerPolyfill;
            k2 && k2.call(d, b2, e2, a2.supportsPassiveEvents ? { passive: void 0 === g2.passive ? -1 !== b2.indexOf("touch") : g2.passive, capture: false } : false);
            r[b2] || (r[b2] = []);
            r[b2].push({ fn: e2, order: "number" === typeof g2.order ? g2.order : Infinity });
            r[b2].sort(function(d2, b3) {
              return d2.order - b3.order;
            });
            return function() {
              K(d, b2, e2);
            };
          },
          arrayMax: function(d) {
            for (var b2 = d.length, e2 = d[0]; b2--; )
              d[b2] > e2 && (e2 = d[b2]);
            return e2;
          },
          arrayMin: function(d) {
            for (var b2 = d.length, e2 = d[0]; b2--; )
              d[b2] < e2 && (e2 = d[b2]);
            return e2;
          },
          attr: h,
          clamp: function(d, b2, e2) {
            return d > b2 ? d < e2 ? d : e2 : b2;
          },
          cleanRecursively: A,
          clearTimeout: function(d) {
            c(d) && clearTimeout(d);
          },
          correctFloat: D,
          createElement: function(d, b2, e2, g2, k2) {
            d = w.createElement(d);
            b2 && m(d, b2);
            k2 && p(d, { padding: "0", border: "none", margin: "0" });
            e2 && p(d, e2);
            g2 && g2.appendChild(d);
            return d;
          },
          css: p,
          defined: c,
          destroyObjectProperties: function(d, b2) {
            H(d, function(e2, r) {
              e2 && e2 !== b2 && e2.destroy && e2.destroy();
              delete d[r];
            });
          },
          discardElement: function(d) {
            d && d.parentElement && d.parentElement.removeChild(d);
          },
          erase: function(d, b2) {
            for (var e2 = d.length; e2--; )
              if (d[e2] === b2) {
                d.splice(e2, 1);
                break;
              }
          },
          error: v,
          extend: m,
          extendClass: function(d, b2) {
            var e2 = function() {
            };
            e2.prototype = new d();
            m(e2.prototype, b2);
            return e2;
          },
          find: g,
          fireEvent: y,
          getMagnitude: f,
          getNestedProperty: function(d, b2) {
            for (d = d.split("."); d.length && c(b2); ) {
              var e2 = d.shift();
              if ("undefined" === typeof e2 || "__proto__" === e2)
                return;
              b2 = b2[e2];
              if (!c(b2) || "function" === typeof b2 || "number" === typeof b2.nodeType || b2 === k)
                return;
            }
            return b2;
          },
          getStyle: G,
          inArray: function(d, b2, e2) {
            v(32, false, void 0, { "Highcharts.inArray": "use Array.indexOf" });
            return b2.indexOf(d, e2);
          },
          isArray: C,
          isClass: u,
          isDOMElement: x,
          isFunction: function(d) {
            return "function" === typeof d;
          },
          isNumber: n,
          isObject: F,
          isString: B,
          keys: function(d) {
            v(32, false, void 0, { "Highcharts.keys": "use Object.keys" });
            return Object.keys(d);
          },
          merge: function() {
            var d, b2 = arguments, e2 = {}, g2 = function(d2, b3) {
              "object" !== typeof d2 && (d2 = {});
              H(b3, function(e3, r) {
                "__proto__" !== r && "constructor" !== r && (!F(e3, true) || u(e3) || x(e3) ? d2[r] = b3[r] : d2[r] = g2(d2[r] || {}, e3));
              });
              return d2;
            };
            true === b2[0] && (e2 = b2[1], b2 = Array.prototype.slice.call(b2, 2));
            var k2 = b2.length;
            for (d = 0; d < k2; d++)
              e2 = g2(e2, b2[d]);
            return e2;
          },
          normalizeTickInterval: function(d, b2, e2, g2, k2) {
            var r = d;
            e2 = l(e2, f(d));
            var I = d / e2;
            b2 || (b2 = k2 ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], false === g2 && (1 === e2 ? b2 = b2.filter(function(b3) {
              return 0 === b3 % 1;
            }) : 0.1 >= e2 && (b2 = [1 / e2])));
            for (g2 = 0; g2 < b2.length && !(r = b2[g2], k2 && r * e2 >= d || !k2 && I <= (b2[g2] + (b2[g2 + 1] || b2[g2])) / 2); g2++)
              ;
            return r = D(r * e2, -Math.round(Math.log(1e-3) / Math.LN10));
          },
          objectEach: H,
          offset: function(b2) {
            var d = w.documentElement;
            b2 = b2.parentElement || b2.parentNode ? b2.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0 };
            return { top: b2.top + (k.pageYOffset || d.scrollTop) - (d.clientTop || 0), left: b2.left + (k.pageXOffset || d.scrollLeft) - (d.clientLeft || 0), width: b2.width, height: b2.height };
          },
          pad: function(b2, e2, g2) {
            return Array((e2 || 2) + 1 - String(b2).replace("-", "").length).join(g2 || "0") + b2;
          },
          pick: l,
          pInt: E,
          relativeLength: function(b2, e2, g2) {
            return /%$/.test(b2) ? e2 * parseFloat(b2) / 100 + (g2 || 0) : parseFloat(b2);
          },
          removeEvent: K,
          splat: function(b2) {
            return C(b2) ? b2 : [b2];
          },
          stableSort: function(b2, e2) {
            var d = b2.length, g2, r;
            for (r = 0; r < d; r++)
              b2[r].safeI = r;
            b2.sort(function(b3, d2) {
              g2 = e2(b3, d2);
              return 0 === g2 ? b3.safeI - d2.safeI : g2;
            });
            for (r = 0; r < d; r++)
              delete b2[r].safeI;
          },
          syncTimeout: function(b2, e2, g2) {
            if (0 < e2)
              return setTimeout(b2, e2, g2);
            b2.call(0, g2);
            return -1;
          },
          timeUnits: { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 24192e5, year: 314496e5 },
          uniqueKey: b,
          useSerialIds: function(b2) {
            return e = l(b2, e);
          },
          wrap: function(b2, e2, g2) {
            var d = b2[e2];
            b2[e2] = function() {
              var b3 = arguments, e3 = this;
              return g2.apply(this, [function() {
                return d.apply(e3, arguments.length ? arguments : b3);
              }].concat([].slice.call(arguments)));
            };
          }
        };
        "";
        return g;
      });
      J(a, "Core/Chart/ChartDefaults.js", [], function() {
        return { alignThresholds: false, panning: {
          enabled: false,
          type: "x"
        }, styledMode: false, borderRadius: 0, colorCount: 10, allowMutatingData: true, defaultSeriesType: "line", ignoreHiddenSeries: true, spacing: [10, 10, 15, 10], resetZoomButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } }, zoomBySingleTouch: false, zooming: { singleTouch: false, resetButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } } }, width: null, height: null, borderColor: "#335cad", backgroundColor: "#ffffff", plotBorderColor: "#cccccc" };
      });
      J(a, "Core/Color/Color.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, q) {
        var v = q.isNumber, E = q.merge, B = q.pInt;
        q = function() {
          function q2(v2) {
            this.rgba = [NaN, NaN, NaN, NaN];
            this.input = v2;
            var x = a2.Color;
            if (x && x !== q2)
              return new x(v2);
            if (!(this instanceof q2))
              return new q2(v2);
            this.init(v2);
          }
          q2.parse = function(a3) {
            return a3 ? new q2(a3) : q2.None;
          };
          q2.prototype.init = function(a3) {
            var x;
            if ("object" === typeof a3 && "undefined" !== typeof a3.stops)
              this.stops = a3.stops.map(function(c2) {
                return new q2(c2[1]);
              });
            else if ("string" === typeof a3) {
              this.input = a3 = q2.names[a3.toLowerCase()] || a3;
              if ("#" === a3.charAt(0)) {
                var u = a3.length;
                var n = parseInt(a3.substr(1), 16);
                7 === u ? x = [(n & 16711680) >> 16, (n & 65280) >> 8, n & 255, 1] : 4 === u && (x = [(n & 3840) >> 4 | (n & 3840) >> 8, (n & 240) >> 4 | n & 240, (n & 15) << 4 | n & 15, 1]);
              }
              if (!x)
                for (n = q2.parsers.length; n-- && !x; ) {
                  var c = q2.parsers[n];
                  (u = c.regex.exec(a3)) && (x = c.parse(u));
                }
            }
            x && (this.rgba = x);
          };
          q2.prototype.get = function(a3) {
            var x = this.input, u = this.rgba;
            if ("object" === typeof x && "undefined" !== typeof this.stops) {
              var n = E(x);
              n.stops = [].slice.call(n.stops);
              this.stops.forEach(function(c, h) {
                n.stops[h] = [n.stops[h][0], c.get(a3)];
              });
              return n;
            }
            return u && v(u[0]) ? "rgb" === a3 || !a3 && 1 === u[3] ? "rgb(" + u[0] + "," + u[1] + "," + u[2] + ")" : "a" === a3 ? "".concat(u[3]) : "rgba(" + u.join(",") + ")" : x;
          };
          q2.prototype.brighten = function(a3) {
            var x = this.rgba;
            if (this.stops)
              this.stops.forEach(function(n) {
                n.brighten(a3);
              });
            else if (v(a3) && 0 !== a3)
              for (var u = 0; 3 > u; u++)
                x[u] += B(255 * a3), 0 > x[u] && (x[u] = 0), 255 < x[u] && (x[u] = 255);
            return this;
          };
          q2.prototype.setOpacity = function(a3) {
            this.rgba[3] = a3;
            return this;
          };
          q2.prototype.tweenTo = function(a3, x) {
            var u = this.rgba, n = a3.rgba;
            if (!v(u[0]) || !v(n[0]))
              return a3.input || "none";
            a3 = 1 !== n[3] || 1 !== u[3];
            return (a3 ? "rgba(" : "rgb(") + Math.round(n[0] + (u[0] - n[0]) * (1 - x)) + "," + Math.round(n[1] + (u[1] - n[1]) * (1 - x)) + "," + Math.round(n[2] + (u[2] - n[2]) * (1 - x)) + (a3 ? "," + (n[3] + (u[3] - n[3]) * (1 - x)) : "") + ")";
          };
          q2.names = { white: "#ffffff", black: "#000000" };
          q2.parsers = [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function(a3) {
            return [B(a3[1]), B(a3[2]), B(a3[3]), parseFloat(a3[4], 10)];
          } }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function(a3) {
            return [
              B(a3[1]),
              B(a3[2]),
              B(a3[3]),
              1
            ];
          } }];
          q2.None = new q2("");
          return q2;
        }();
        "";
        return q;
      });
      J(a, "Core/Color/Palettes.js", [], function() {
        return { colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" ") };
      });
      J(a, "Core/Time.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, q) {
        var v = a2.win, E = q.defined, B = q.error, C = q.extend, F = q.isObject, x = q.merge, u = q.objectEach, n = q.pad, c = q.pick, h = q.splat, m = q.timeUnits, l = a2.isSafari && v.Intl && v.Intl.DateTimeFormat.prototype.formatRange, p = a2.isSafari && v.Intl && !v.Intl.DateTimeFormat.prototype.formatRange;
        q = function() {
          function f(f2) {
            this.options = {};
            this.variableTimezone = this.useUTC = false;
            this.Date = v.Date;
            this.getTimezoneOffset = this.timezoneOffsetFunction();
            this.update(f2);
          }
          f.prototype.get = function(f2, c2) {
            if (this.variableTimezone || this.timezoneOffset) {
              var l2 = c2.getTime(), m2 = l2 - this.getTimezoneOffset(c2);
              c2.setTime(m2);
              f2 = c2["getUTC" + f2]();
              c2.setTime(l2);
              return f2;
            }
            return this.useUTC ? c2["getUTC" + f2]() : c2["get" + f2]();
          };
          f.prototype.set = function(f2, c2, m2) {
            if (this.variableTimezone || this.timezoneOffset) {
              if ("Milliseconds" === f2 || "Seconds" === f2 || "Minutes" === f2 && 0 === this.getTimezoneOffset(c2) % 36e5)
                return c2["setUTC" + f2](m2);
              var h2 = this.getTimezoneOffset(c2);
              h2 = c2.getTime() - h2;
              c2.setTime(h2);
              c2["setUTC" + f2](m2);
              f2 = this.getTimezoneOffset(c2);
              h2 = c2.getTime() + f2;
              return c2.setTime(h2);
            }
            return this.useUTC || l && "FullYear" === f2 ? c2["setUTC" + f2](m2) : c2["set" + f2](m2);
          };
          f.prototype.update = function(f2) {
            void 0 === f2 && (f2 = {});
            var l2 = c(f2.useUTC, true);
            this.options = f2 = x(true, this.options, f2);
            this.Date = f2.Date || v.Date || Date;
            this.timezoneOffset = (this.useUTC = l2) && f2.timezoneOffset || void 0;
            this.getTimezoneOffset = this.timezoneOffsetFunction();
            this.variableTimezone = l2 && !(!f2.getTimezoneOffset && !f2.timezone);
          };
          f.prototype.makeTime = function(f2, l2, m2, h2, y, t) {
            if (this.useUTC) {
              var w = this.Date.UTC.apply(0, arguments);
              var k = this.getTimezoneOffset(w);
              w += k;
              var g = this.getTimezoneOffset(w);
              k !== g ? w += g - k : k - 36e5 !== this.getTimezoneOffset(w - 36e5) || p || (w -= 36e5);
            } else
              w = new this.Date(f2, l2, c(m2, 1), c(h2, 0), c(y, 0), c(t, 0)).getTime();
            return w;
          };
          f.prototype.timezoneOffsetFunction = function() {
            var f2 = this, c2 = this.options, l2 = c2.getTimezoneOffset, m2 = c2.moment || v.moment;
            if (!this.useUTC)
              return function(f3) {
                return 6e4 * new Date(f3.toString()).getTimezoneOffset();
              };
            if (c2.timezone) {
              if (m2)
                return function(f3) {
                  return 6e4 * -m2.tz(f3, c2.timezone).utcOffset();
                };
              B(25);
            }
            return this.useUTC && l2 ? function(f3) {
              return 6e4 * l2(f3.valueOf());
            } : function() {
              return 6e4 * (f2.timezoneOffset || 0);
            };
          };
          f.prototype.dateFormat = function(f2, l2, m2) {
            if (!E(l2) || isNaN(l2))
              return a2.defaultOptions.lang && a2.defaultOptions.lang.invalidDate || "";
            f2 = c(f2, "%Y-%m-%d %H:%M:%S");
            var h2 = this, y = new this.Date(l2), t = this.get("Hours", y), w = this.get("Day", y), k = this.get("Date", y), g = this.get("Month", y), e = this.get("FullYear", y), b = a2.defaultOptions.lang, d = b && b.weekdays, r = b && b.shortWeekdays;
            y = C({ a: r ? r[w] : d[w].substr(0, 3), A: d[w], d: n(k), e: n(k, 2, " "), w, b: b.shortMonths[g], B: b.months[g], m: n(g + 1), o: g + 1, y: e.toString().substr(2, 2), Y: e, H: n(t), k: t, I: n(t % 12 || 12), l: t % 12 || 12, M: n(this.get("Minutes", y)), p: 12 > t ? "AM" : "PM", P: 12 > t ? "am" : "pm", S: n(y.getSeconds()), L: n(Math.floor(l2 % 1e3), 3) }, a2.dateFormats);
            u(
              y,
              function(b2, d2) {
                for (; -1 !== f2.indexOf("%" + d2); )
                  f2 = f2.replace("%" + d2, "function" === typeof b2 ? b2.call(h2, l2) : b2);
              }
            );
            return m2 ? f2.substr(0, 1).toUpperCase() + f2.substr(1) : f2;
          };
          f.prototype.resolveDTLFormat = function(f2) {
            return F(f2, true) ? f2 : (f2 = h(f2), { main: f2[0], from: f2[1], to: f2[2] });
          };
          f.prototype.getTimeTicks = function(f2, l2, h2, p2) {
            var y = this, t = [], w = {}, k = new y.Date(l2), g = f2.unitRange, e = f2.count || 1, b;
            p2 = c(p2, 1);
            if (E(l2)) {
              y.set("Milliseconds", k, g >= m.second ? 0 : e * Math.floor(y.get("Milliseconds", k) / e));
              g >= m.second && y.set("Seconds", k, g >= m.minute ? 0 : e * Math.floor(y.get("Seconds", k) / e));
              g >= m.minute && y.set("Minutes", k, g >= m.hour ? 0 : e * Math.floor(y.get("Minutes", k) / e));
              g >= m.hour && y.set("Hours", k, g >= m.day ? 0 : e * Math.floor(y.get("Hours", k) / e));
              g >= m.day && y.set("Date", k, g >= m.month ? 1 : Math.max(1, e * Math.floor(y.get("Date", k) / e)));
              if (g >= m.month) {
                y.set("Month", k, g >= m.year ? 0 : e * Math.floor(y.get("Month", k) / e));
                var d = y.get("FullYear", k);
              }
              g >= m.year && y.set("FullYear", k, d - d % e);
              g === m.week && (d = y.get("Day", k), y.set("Date", k, y.get("Date", k) - d + p2 + (d < p2 ? -7 : 0)));
              d = y.get(
                "FullYear",
                k
              );
              p2 = y.get("Month", k);
              var r = y.get("Date", k), z = y.get("Hours", k);
              l2 = k.getTime();
              !y.variableTimezone && y.useUTC || !E(h2) || (b = h2 - l2 > 4 * m.month || y.getTimezoneOffset(l2) !== y.getTimezoneOffset(h2));
              l2 = k.getTime();
              for (k = 1; l2 < h2; )
                t.push(l2), l2 = g === m.year ? y.makeTime(d + k * e, 0) : g === m.month ? y.makeTime(d, p2 + k * e) : !b || g !== m.day && g !== m.week ? b && g === m.hour && 1 < e ? y.makeTime(d, p2, r, z + k * e) : l2 + g * e : y.makeTime(d, p2, r + k * e * (g === m.day ? 1 : 7)), k++;
              t.push(l2);
              g <= m.hour && 1e4 > t.length && t.forEach(function(b2) {
                0 === b2 % 18e5 && "000000000" === y.dateFormat(
                  "%H%M%S%L",
                  b2
                ) && (w[b2] = "day");
              });
            }
            t.info = C(f2, { higherRanks: w, totalRange: g * e });
            return t;
          };
          f.prototype.getDateFormat = function(f2, c2, l2, h2) {
            var y = this.dateFormat("%m-%d %H:%M:%S.%L", c2), t = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, w = "millisecond";
            for (k in m) {
              if (f2 === m.week && +this.dateFormat("%w", c2) === l2 && "00:00:00.000" === y.substr(6)) {
                var k = "week";
                break;
              }
              if (m[k] > f2) {
                k = w;
                break;
              }
              if (t[k] && y.substr(t[k]) !== "01-01 00:00:00.000".substr(t[k]))
                break;
              "week" !== k && (w = k);
            }
            return this.resolveDTLFormat(h2[k]).main;
          };
          return f;
        }();
        "";
        return q;
      });
      J(a, "Core/Defaults.js", [a["Core/Chart/ChartDefaults.js"], a["Core/Color/Color.js"], a["Core/Globals.js"], a["Core/Color/Palettes.js"], a["Core/Time.js"], a["Core/Utilities.js"]], function(a2, q, A, E, B, C) {
        q = q.parse;
        var v = C.merge, x = {
          colors: E.colors,
          symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
          lang: {
            loading: "Loading...",
            months: "January February March April May June July August September October November December".split(" "),
            shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            decimalPoint: ".",
            numericSymbols: "kMGTPE".split(""),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: " "
          },
          global: {},
          time: { Date: void 0, getTimezoneOffset: void 0, timezone: void 0, timezoneOffset: 0, useUTC: true },
          chart: a2,
          title: { text: "Chart title", align: "center", margin: 15, widthAdjust: -44 },
          subtitle: { text: "", align: "center", widthAdjust: -44 },
          caption: { margin: 15, text: "", align: "left", verticalAlign: "bottom" },
          plotOptions: {},
          labels: { style: { position: "absolute", color: "#333333" } },
          legend: { enabled: true, align: "center", alignColumns: true, className: "highcharts-no-tooltip", layout: "horizontal", labelFormatter: function() {
            return this.name;
          }, borderColor: "#999999", borderRadius: 0, navigation: { activeColor: "#003399", inactiveColor: "#cccccc" }, itemStyle: { color: "#333333", cursor: "pointer", fontSize: "12px", fontWeight: "bold", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#cccccc" }, shadow: false, itemCheckboxStyle: {
            position: "absolute",
            width: "13px",
            height: "13px"
          }, squareSymbol: true, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontWeight: "bold" } } },
          loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: "#ffffff", opacity: 0.5, textAlign: "center" } },
          tooltip: { enabled: true, animation: A.svg, borderRadius: 3, dateTimeLabelFormats: {
            millisecond: "%A, %b %e, %H:%M:%S.%L",
            second: "%A, %b %e, %H:%M:%S",
            minute: "%A, %b %e, %H:%M",
            hour: "%A, %b %e, %H:%M",
            day: "%A, %b %e, %Y",
            week: "Week from %A, %b %e, %Y",
            month: "%B %Y",
            year: "%Y"
          }, footerFormat: "", headerShape: "callout", hideDelay: 500, padding: 8, shape: "callout", shared: false, snap: A.isTouchDevice ? 25 : 10, headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>', pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>', backgroundColor: q("#f7f7f7").setOpacity(0.85).get(), borderWidth: 1, shadow: true, stickOnContact: false, style: { color: "#333333", cursor: "default", fontSize: "12px", whiteSpace: "nowrap" }, useHTML: false },
          credits: {
            enabled: true,
            href: "https://www.highcharts.com?credits",
            position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 },
            style: { cursor: "pointer", color: "#999999", fontSize: "9px" },
            text: "Highcharts.com"
          }
        };
        x.chart.styledMode = false;
        "";
        var u = new B(v(x.global, x.time));
        a2 = { defaultOptions: x, defaultTime: u, getOptions: function() {
          return x;
        }, setOptions: function(n) {
          v(true, x, n);
          if (n.time || n.global)
            A.time ? A.time.update(v(x.global, x.time, n.global, n.time)) : A.time = u;
          return x;
        } };
        "";
        return a2;
      });
      J(a, "Core/Animation/Fx.js", [
        a["Core/Color/Color.js"],
        a["Core/Globals.js"],
        a["Core/Utilities.js"]
      ], function(a2, q, A) {
        var v = a2.parse, B = q.win, C = A.isNumber, F = A.objectEach;
        return function() {
          function a3(a4, n, c) {
            this.pos = NaN;
            this.options = n;
            this.elem = a4;
            this.prop = c;
          }
          a3.prototype.dSetter = function() {
            var a4 = this.paths, n = a4 && a4[0];
            a4 = a4 && a4[1];
            var c = this.now || 0, h = [];
            if (1 !== c && n && a4)
              if (n.length === a4.length && 1 > c)
                for (var m = 0; m < a4.length; m++) {
                  for (var l = n[m], p = a4[m], f = [], D = 0; D < p.length; D++) {
                    var G = l[D], H = p[D];
                    C(G) && C(H) && ("A" !== p[0] || 4 !== D && 5 !== D) ? f[D] = G + c * (H - G) : f[D] = H;
                  }
                  h.push(f);
                }
              else
                h = a4;
            else
              h = this.toD || [];
            this.elem.attr("d", h, void 0, true);
          };
          a3.prototype.update = function() {
            var a4 = this.elem, n = this.prop, c = this.now, h = this.options.step;
            if (this[n + "Setter"])
              this[n + "Setter"]();
            else
              a4.attr ? a4.element && a4.attr(n, c, null, true) : a4.style[n] = c + this.unit;
            h && h.call(a4, c, this);
          };
          a3.prototype.run = function(u, n, c) {
            var h = this, m = h.options, l = function(f2) {
              return l.stopped ? false : h.step(f2);
            }, p = B.requestAnimationFrame || function(f2) {
              setTimeout(f2, 13);
            }, f = function() {
              for (var c2 = 0; c2 < a3.timers.length; c2++)
                a3.timers[c2]() || a3.timers.splice(
                  c2--,
                  1
                );
              a3.timers.length && p(f);
            };
            u !== n || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +/* @__PURE__ */ new Date(), this.start = u, this.end = n, this.unit = c, this.now = this.start, this.pos = 0, l.elem = this.elem, l.prop = this.prop, l() && 1 === a3.timers.push(l) && p(f)) : (delete m.curAnim[this.prop], m.complete && 0 === Object.keys(m.curAnim).length && m.complete.call(this.elem));
          };
          a3.prototype.step = function(a4) {
            var n = +/* @__PURE__ */ new Date(), c = this.options, h = this.elem, m = c.complete, l = c.duration, p = c.curAnim;
            if (h.attr && !h.element)
              a4 = false;
            else if (a4 || n >= l + this.startTime) {
              this.now = this.end;
              this.pos = 1;
              this.update();
              var f = p[this.prop] = true;
              F(p, function(c2) {
                true !== c2 && (f = false);
              });
              f && m && m.call(h);
              a4 = false;
            } else
              this.pos = c.easing((n - this.startTime) / l), this.now = this.start + (this.end - this.start) * this.pos, this.update(), a4 = true;
            return a4;
          };
          a3.prototype.initPath = function(a4, n, c) {
            function h(c2, t) {
              for (; c2.length < K; ) {
                var w = c2[0], k = t[K - c2.length];
                k && "M" === w[0] && (c2[0] = "C" === k[0] ? ["C", w[1], w[2], w[1], w[2], w[1], w[2]] : ["L", w[1], w[2]]);
                c2.unshift(w);
                f && (w = c2.pop(), c2.push(c2[c2.length - 1], w));
              }
            }
            function m(c2, t) {
              for (; c2.length < K; )
                if (t = c2[Math.floor(c2.length / D) - 1].slice(), "C" === t[0] && (t[1] = t[5], t[2] = t[6]), f) {
                  var w = c2[Math.floor(c2.length / D)].slice();
                  c2.splice(c2.length / 2, 0, t, w);
                } else
                  c2.push(t);
            }
            var l = a4.startX, p = a4.endX;
            c = c.slice();
            var f = a4.isArea, D = f ? 2 : 1;
            n = n && n.slice();
            if (!n)
              return [c, c];
            if (l && p && p.length) {
              for (a4 = 0; a4 < l.length; a4++)
                if (l[a4] === p[0]) {
                  var G = a4;
                  break;
                } else if (l[0] === p[p.length - l.length + a4]) {
                  G = a4;
                  var u = true;
                  break;
                } else if (l[l.length - 1] === p[p.length - l.length + a4]) {
                  G = l.length - a4;
                  break;
                }
              "undefined" === typeof G && (n = []);
            }
            if (n.length && C(G)) {
              var K = c.length + G * D;
              u ? (h(n, c), m(c, n)) : (h(c, n), m(n, c));
            }
            return [n, c];
          };
          a3.prototype.fillSetter = function() {
            a3.prototype.strokeSetter.apply(this, arguments);
          };
          a3.prototype.strokeSetter = function() {
            this.elem.attr(this.prop, v(this.start).tweenTo(v(this.end), this.pos), void 0, true);
          };
          a3.timers = [];
          return a3;
        }();
      });
      J(a, "Core/Animation/AnimationUtilities.js", [a["Core/Animation/Fx.js"], a["Core/Utilities.js"]], function(a2, q) {
        function v(c2) {
          return u(c2) ? n({ duration: 500, defer: 0 }, c2) : { duration: c2 ? 500 : 0, defer: 0 };
        }
        function E(c2, l) {
          for (var h2 = a2.timers.length; h2--; )
            a2.timers[h2].elem !== c2 || l && l !== a2.timers[h2].prop || (a2.timers[h2].stopped = true);
        }
        var B = q.defined, C = q.getStyle, F = q.isArray, x = q.isNumber, u = q.isObject, n = q.merge, c = q.objectEach, h = q.pick;
        return { animate: function(h2, l, p) {
          var f, m = "", G, H;
          if (!u(p)) {
            var K = arguments;
            p = { duration: K[2], easing: K[3], complete: K[4] };
          }
          x(p.duration) || (p.duration = 400);
          p.easing = "function" === typeof p.easing ? p.easing : Math[p.easing] || Math.easeInOutSine;
          p.curAnim = n(l);
          c(l, function(c2, t) {
            E(h2, t);
            H = new a2(h2, p, t);
            G = void 0;
            "d" === t && F(l.d) ? (H.paths = H.initPath(h2, h2.pathArray, l.d), H.toD = l.d, f = 0, G = 1) : h2.attr ? f = h2.attr(t) : (f = parseFloat(C(h2, t)) || 0, "opacity" !== t && (m = "px"));
            G || (G = c2);
            "string" === typeof G && G.match("px") && (G = G.replace(/px/g, ""));
            H.run(f, G, m);
          });
        }, animObject: v, getDeferredAnimation: function(c2, l, h2) {
          var f = v(l), m = 0, p = 0;
          (h2 ? [h2] : c2.series).forEach(function(c3) {
            c3 = v(c3.options.animation);
            m = l && B(l.defer) ? f.defer : Math.max(m, c3.duration + c3.defer);
            p = Math.min(f.duration, c3.duration);
          });
          c2.renderer.forExport && (m = 0);
          return { defer: Math.max(0, m - p), duration: Math.min(m, p) };
        }, setAnimation: function(c2, l) {
          l.renderer.globalAnimation = h(c2, l.options.chart.animation, true);
        }, stop: E };
      });
      J(a, "Core/Renderer/HTML/AST.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, q) {
        var v = a2.SVG_NS, E = q.attr, B = q.createElement, C = q.css, F = q.error, x = q.isFunction, u = q.isString, n = q.objectEach, c = q.splat, h = (q = a2.win.trustedTypes) && x(q.createPolicy) && q.createPolicy("highcharts", { createHTML: function(c2) {
          return c2;
        } }), m = h ? h.createHTML("") : "";
        try {
          var l = !!new DOMParser().parseFromString(m, "text/html");
        } catch (p) {
          l = false;
        }
        x = function() {
          function p(f) {
            this.nodes = "string" === typeof f ? this.parseMarkup(f) : f;
          }
          p.filterUserAttributes = function(f) {
            n(f, function(c2, l2) {
              var h2 = true;
              -1 === p.allowedAttributes.indexOf(l2) && (h2 = false);
              -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(l2) && (h2 = u(c2) && p.allowedReferences.some(function(f2) {
                return 0 === c2.indexOf(f2);
              }));
              h2 || (F(33, false, void 0, { "Invalid attribute in config": "".concat(l2) }), delete f[l2]);
              u(c2) && f[l2] && (f[l2] = c2.replace(/</g, "&lt;"));
            });
            return f;
          };
          p.parseStyle = function(f) {
            return f.split(";").reduce(function(f2, c2) {
              c2 = c2.split(":").map(function(f3) {
                return f3.trim();
              });
              var l2 = c2.shift();
              l2 && c2.length && (f2[l2.replace(/-([a-z])/g, function(f3) {
                return f3[1].toUpperCase();
              })] = c2.join(":"));
              return f2;
            }, {});
          };
          p.setElementHTML = function(f, c2) {
            f.innerHTML = p.emptyHTML;
            c2 && new p(c2).addToDOM(f);
          };
          p.prototype.addToDOM = function(f) {
            function l2(f2, h2) {
              var m2;
              c(f2).forEach(function(f3) {
                var t = f3.tagName, c2 = f3.textContent ? a2.doc.createTextNode(f3.textContent) : void 0, k = p.bypassHTMLFiltering;
                if (t)
                  if ("#text" === t)
                    var g = c2;
                  else if (-1 !== p.allowedTags.indexOf(t) || k) {
                    t = a2.doc.createElementNS("svg" === t ? v : h2.namespaceURI || v, t);
                    var e = f3.attributes || {};
                    n(f3, function(b, d) {
                      "tagName" !== d && "attributes" !== d && "children" !== d && "style" !== d && "textContent" !== d && (e[d] = b);
                    });
                    E(t, k ? e : p.filterUserAttributes(e));
                    f3.style && C(t, f3.style);
                    c2 && t.appendChild(c2);
                    l2(f3.children || [], t);
                    g = t;
                  } else
                    F(33, false, void 0, { "Invalid tagName in config": t });
                g && h2.appendChild(g);
                m2 = g;
              });
              return m2;
            }
            return l2(this.nodes, f);
          };
          p.prototype.parseMarkup = function(f) {
            var c2 = [];
            f = f.trim().replace(/ style=(["'])/g, " data-style=$1");
            if (l)
              f = new DOMParser().parseFromString(h ? h.createHTML(f) : f, "text/html");
            else {
              var m2 = B("div");
              m2.innerHTML = f;
              f = { body: m2 };
            }
            var a3 = function(f2, c3) {
              var t = f2.nodeName.toLowerCase(), w = { tagName: t };
              "#text" === t && (w.textContent = f2.textContent || "");
              if (t = f2.attributes) {
                var k = {};
                [].forEach.call(t, function(e) {
                  "data-style" === e.name ? w.style = p.parseStyle(e.value) : k[e.name] = e.value;
                });
                w.attributes = k;
              }
              if (f2.childNodes.length) {
                var g = [];
                [].forEach.call(f2.childNodes, function(e) {
                  a3(e, g);
                });
                g.length && (w.children = g);
              }
              c3.push(w);
            };
            [].forEach.call(f.body.childNodes, function(f2) {
              return a3(f2, c2);
            });
            return c2;
          };
          p.allowedAttributes = "aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align text-anchor textAnchor textLength title type valign width x x1 x2 xlink:href y y1 y2 zIndex".split(" ");
          p.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(" ");
          p.allowedTags = "a abbr b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text textPath thead title tbody tspan td th tr u ul #text".split(" ");
          p.emptyHTML = m;
          p.bypassHTMLFiltering = false;
          return p;
        }();
        "";
        return x;
      });
      J(a, "Core/FormatUtilities.js", [a["Core/Defaults.js"], a["Core/Utilities.js"]], function(a2, q) {
        function v(a3, c, h, m) {
          a3 = +a3 || 0;
          c = +c;
          var l = E.lang, p = (a3.toString().split(".")[1] || "").split("e")[0].length, f = a3.toString().split("e"), n = c;
          if (-1 === c)
            c = Math.min(p, 20);
          else if (!F(c))
            c = 2;
          else if (c && f[1] && 0 > f[1]) {
            var G = c + +f[1];
            0 <= G ? (f[0] = (+f[0]).toExponential(G).split("e")[0], c = G) : (f[0] = f[0].split(".")[0] || 0, a3 = 20 > c ? (f[0] * Math.pow(10, f[1])).toFixed(c) : 0, f[1] = 0);
          }
          G = (Math.abs(f[1] ? f[0] : a3) + Math.pow(10, -Math.max(
            c,
            p
          ) - 1)).toFixed(c);
          p = String(u(G));
          var H = 3 < p.length ? p.length % 3 : 0;
          h = x(h, l.decimalPoint);
          m = x(m, l.thousandsSep);
          a3 = (0 > a3 ? "-" : "") + (H ? p.substr(0, H) + m : "");
          a3 = 0 > +f[1] && !n ? "0" : a3 + p.substr(H).replace(/(\d{3})(?=\d)/g, "$1" + m);
          c && (a3 += h + G.slice(-c));
          f[1] && 0 !== +a3 && (a3 += "e" + f[1]);
          return a3;
        }
        var E = a2.defaultOptions, B = a2.defaultTime, C = q.getNestedProperty, F = q.isNumber, x = q.pick, u = q.pInt;
        return { dateFormat: function(a3, c, h) {
          return B.dateFormat(a3, c, h);
        }, format: function(a3, c, h) {
          var m = "{", l = false, p = /f$/, f = /\.([0-9])/, n = E.lang, G = h && h.time || B;
          h = h && h.numberFormatter || v;
          for (var u2 = []; a3; ) {
            var x2 = a3.indexOf(m);
            if (-1 === x2)
              break;
            var y = a3.slice(0, x2);
            if (l) {
              y = y.split(":");
              m = C(y.shift() || "", c);
              if (y.length && "number" === typeof m)
                if (y = y.join(":"), p.test(y)) {
                  var t = parseInt((y.match(f) || ["", "-1"])[1], 10);
                  null !== m && (m = h(m, t, n.decimalPoint, -1 < y.indexOf(",") ? n.thousandsSep : ""));
                } else
                  m = G.dateFormat(y, m);
              u2.push(m);
            } else
              u2.push(y);
            a3 = a3.slice(x2 + 1);
            m = (l = !l) ? "}" : "{";
          }
          u2.push(a3);
          return u2.join("");
        }, numberFormat: v };
      });
      J(
        a,
        "Core/Renderer/RendererUtilities.js",
        [a["Core/Utilities.js"]],
        function(a2) {
          var v = a2.clamp, A = a2.pick, E = a2.stableSort, B;
          (function(a3) {
            function q(a4, u, n) {
              var c = a4, h = c.reducedLen || u, m = function(f2, c2) {
                return (c2.rank || 0) - (f2.rank || 0);
              }, l = function(f2, c2) {
                return f2.target - c2.target;
              }, p, f = true, D = [], G = 0;
              for (p = a4.length; p--; )
                G += a4[p].size;
              if (G > h) {
                E(a4, m);
                for (G = p = 0; G <= h; )
                  G += a4[p].size, p++;
                D = a4.splice(p - 1, a4.length);
              }
              E(a4, l);
              for (a4 = a4.map(function(f2) {
                return { size: f2.size, targets: [f2.target], align: A(f2.align, 0.5) };
              }); f; ) {
                for (p = a4.length; p--; )
                  h = a4[p], m = (Math.min.apply(0, h.targets) + Math.max.apply(0, h.targets)) / 2, h.pos = v(m - h.size * h.align, 0, u - h.size);
                p = a4.length;
                for (f = false; p--; )
                  0 < p && a4[p - 1].pos + a4[p - 1].size > a4[p].pos && (a4[p - 1].size += a4[p].size, a4[p - 1].targets = a4[p - 1].targets.concat(a4[p].targets), a4[p - 1].align = 0.5, a4[p - 1].pos + a4[p - 1].size > u && (a4[p - 1].pos = u - a4[p - 1].size), a4.splice(p, 1), f = true);
              }
              c.push.apply(c, D);
              p = 0;
              a4.some(function(f2) {
                var l2 = 0;
                return (f2.targets || []).some(function() {
                  c[p].pos = f2.pos + l2;
                  if ("undefined" !== typeof n && Math.abs(c[p].pos - c[p].target) > n)
                    return c.slice(0, p + 1).forEach(function(f3) {
                      return delete f3.pos;
                    }), c.reducedLen = (c.reducedLen || u) - 0.1 * u, c.reducedLen > 0.1 * u && q(c, u, n), true;
                  l2 += c[p].size;
                  p++;
                  return false;
                });
              });
              E(c, l);
              return c;
            }
            a3.distribute = q;
          })(B || (B = {}));
          return B;
        }
      );
      J(a, "Core/Renderer/SVG/SVGElement.js", [a["Core/Animation/AnimationUtilities.js"], a["Core/Color/Color.js"], a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, q, A, E) {
        var v = a2.animate, C = a2.animObject, F = a2.stop, x = A.deg2rad, u = A.doc, n = A.svg, c = A.SVG_NS, h = A.win, m = E.addEvent, l = E.attr, p = E.createElement, f = E.css, D = E.defined, G = E.erase, H = E.extend, K = E.fireEvent, y = E.isArray, t = E.isFunction, w = E.isString, k = E.merge, g = E.objectEach, e = E.pick, b = E.pInt, d = E.syncTimeout, r = E.uniqueKey;
        a2 = function() {
          function z() {
            this.element = void 0;
            this.onEvents = {};
            this.opacity = 1;
            this.renderer = void 0;
            this.SVG_NS = c;
            this.symbolCustomAttribs = "x y width height r start end innerR anchorX anchorY rounded".split(" ");
          }
          z.prototype._defaultGetter = function(b2) {
            b2 = e(this[b2 + "Value"], this[b2], this.element ? this.element.getAttribute(b2) : null, 0);
            /^[\-0-9\.]+$/.test(b2) && (b2 = parseFloat(b2));
            return b2;
          };
          z.prototype._defaultSetter = function(b2, d2, e2) {
            e2.setAttribute(d2, b2);
          };
          z.prototype.add = function(b2) {
            var d2 = this.renderer, e2 = this.element;
            b2 && (this.parentGroup = b2);
            "undefined" !== typeof this.textStr && "text" === this.element.nodeName && d2.buildText(this);
            this.added = true;
            if (!b2 || b2.handleZ || this.zIndex)
              var g2 = this.zIndexSetter();
            g2 || (b2 ? b2.element : d2.box).appendChild(e2);
            if (this.onAdd)
              this.onAdd();
            return this;
          };
          z.prototype.addClass = function(b2, d2) {
            var e2 = d2 ? "" : this.attr("class") || "";
            b2 = (b2 || "").split(/ /g).reduce(
              function(b3, d3) {
                -1 === e2.indexOf(d3) && b3.push(d3);
                return b3;
              },
              e2 ? [e2] : []
            ).join(" ");
            b2 !== e2 && this.attr("class", b2);
            return this;
          };
          z.prototype.afterSetters = function() {
            this.doTransform && (this.updateTransform(), this.doTransform = false);
          };
          z.prototype.align = function(b2, d2, g2) {
            var r2 = {}, k2 = this.renderer, I = k2.alignedObjects, t2, f2, z2;
            if (b2) {
              if (this.alignOptions = b2, this.alignByTranslate = d2, !g2 || w(g2))
                this.alignTo = t2 = g2 || "renderer", G(I, this), I.push(this), g2 = void 0;
            } else
              b2 = this.alignOptions, d2 = this.alignByTranslate, t2 = this.alignTo;
            g2 = e(g2, k2[t2], "scrollablePlotBox" === t2 ? k2.plotBox : void 0, k2);
            t2 = b2.align;
            var c2 = b2.verticalAlign;
            k2 = (g2.x || 0) + (b2.x || 0);
            I = (g2.y || 0) + (b2.y || 0);
            "right" === t2 ? f2 = 1 : "center" === t2 && (f2 = 2);
            f2 && (k2 += (g2.width - (b2.width || 0)) / f2);
            r2[d2 ? "translateX" : "x"] = Math.round(k2);
            "bottom" === c2 ? z2 = 1 : "middle" === c2 && (z2 = 2);
            z2 && (I += (g2.height - (b2.height || 0)) / z2);
            r2[d2 ? "translateY" : "y"] = Math.round(I);
            this[this.placed ? "animate" : "attr"](r2);
            this.placed = true;
            this.alignAttr = r2;
            return this;
          };
          z.prototype.alignSetter = function(b2) {
            var d2 = { left: "start", center: "middle", right: "end" };
            d2[b2] && (this.alignValue = b2, this.element.setAttribute(
              "text-anchor",
              d2[b2]
            ));
          };
          z.prototype.animate = function(b2, r2, k2) {
            var I = this, t2 = C(e(r2, this.renderer.globalAnimation, true));
            r2 = t2.defer;
            e(u.hidden, u.msHidden, u.webkitHidden, false) && (t2.duration = 0);
            0 !== t2.duration ? (k2 && (t2.complete = k2), d(function() {
              I.element && v(I, b2, t2);
            }, r2)) : (this.attr(b2, void 0, k2 || t2.complete), g(b2, function(b3, d2) {
              t2.step && t2.step.call(this, b3, { prop: d2, pos: 1, elem: this });
            }, this));
            return this;
          };
          z.prototype.applyTextOutline = function(b2) {
            var d2 = this.element;
            -1 !== b2.indexOf("contrast") && (b2 = b2.replace(/contrast/g, this.renderer.getContrast(d2.style.fill)));
            var e2 = b2.split(" ");
            b2 = e2[e2.length - 1];
            if ((e2 = e2[0]) && "none" !== e2 && A.svg) {
              this.fakeTS = true;
              e2 = e2.replace(/(^[\d\.]+)(.*?)$/g, function(b3, d3, e3) {
                return 2 * Number(d3) + e3;
              });
              this.removeTextOutline();
              var g2 = u.createElementNS(c, "tspan");
              l(g2, { "class": "highcharts-text-outline", fill: b2, stroke: b2, "stroke-width": e2, "stroke-linejoin": "round" });
              b2 = d2.querySelector("textPath") || d2;
              [].forEach.call(b2.childNodes, function(b3) {
                var d3 = b3.cloneNode(true);
                d3.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach(function(b4) {
                  return d3.removeAttribute(b4);
                });
                g2.appendChild(d3);
              });
              var r2 = 0;
              [].forEach.call(b2.querySelectorAll("text tspan"), function(b3) {
                r2 += Number(b3.getAttribute("dy"));
              });
              e2 = u.createElementNS(c, "tspan");
              e2.textContent = "​";
              l(e2, { x: Number(d2.getAttribute("x")), dy: -r2 });
              g2.appendChild(e2);
              b2.insertBefore(g2, b2.firstChild);
            }
          };
          z.prototype.attr = function(b2, d2, e2, r2) {
            var k2 = this.element, L = this.symbolCustomAttribs, t2, I = this, f2, z2;
            if ("string" === typeof b2 && "undefined" !== typeof d2) {
              var c2 = b2;
              b2 = {};
              b2[c2] = d2;
            }
            "string" === typeof b2 ? I = (this[b2 + "Getter"] || this._defaultGetter).call(
              this,
              b2,
              k2
            ) : (g(b2, function(d3, e3) {
              f2 = false;
              r2 || F(this, e3);
              this.symbolName && -1 !== L.indexOf(e3) && (t2 || (this.symbolAttr(b2), t2 = true), f2 = true);
              !this.rotation || "x" !== e3 && "y" !== e3 || (this.doTransform = true);
              f2 || (z2 = this[e3 + "Setter"] || this._defaultSetter, z2.call(this, d3, e3, k2), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(e3) && this.updateShadows(e3, d3, z2));
            }, this), this.afterSetters());
            e2 && e2.call(this);
            return I;
          };
          z.prototype.clip = function(b2) {
            return this.attr("clip-path", b2 ? "url(" + this.renderer.url + "#" + b2.id + ")" : "none");
          };
          z.prototype.crisp = function(b2, d2) {
            d2 = d2 || b2.strokeWidth || 0;
            var e2 = Math.round(d2) % 2 / 2;
            b2.x = Math.floor(b2.x || this.x || 0) + e2;
            b2.y = Math.floor(b2.y || this.y || 0) + e2;
            b2.width = Math.floor((b2.width || this.width || 0) - 2 * e2);
            b2.height = Math.floor((b2.height || this.height || 0) - 2 * e2);
            D(b2.strokeWidth) && (b2.strokeWidth = d2);
            return b2;
          };
          z.prototype.complexColor = function(b2, d2, e2) {
            var t2 = this.renderer, I, L, f2, z2, c2, w2, M, l2, h2, a3, m2 = [], p2;
            K(this.renderer, "complexColor", { args: arguments }, function() {
              b2.radialGradient ? L = "radialGradient" : b2.linearGradient && (L = "linearGradient");
              if (L) {
                f2 = b2[L];
                c2 = t2.gradients;
                w2 = b2.stops;
                h2 = e2.radialReference;
                y(f2) && (b2[L] = f2 = { x1: f2[0], y1: f2[1], x2: f2[2], y2: f2[3], gradientUnits: "userSpaceOnUse" });
                "radialGradient" === L && h2 && !D(f2.gradientUnits) && (z2 = f2, f2 = k(f2, t2.getRadialAttr(h2, z2), { gradientUnits: "userSpaceOnUse" }));
                g(f2, function(b3, d3) {
                  "id" !== d3 && m2.push(d3, b3);
                });
                g(w2, function(b3) {
                  m2.push(b3);
                });
                m2 = m2.join(",");
                if (c2[m2])
                  a3 = c2[m2].attr("id");
                else {
                  f2.id = a3 = r();
                  var S = c2[m2] = t2.createElement(L).attr(f2).add(t2.defs);
                  S.radAttr = z2;
                  S.stops = [];
                  w2.forEach(function(b3) {
                    0 === b3[1].indexOf("rgba") ? (I = q.parse(b3[1]), M = I.get("rgb"), l2 = I.get("a")) : (M = b3[1], l2 = 1);
                    b3 = t2.createElement("stop").attr({ offset: b3[0], "stop-color": M, "stop-opacity": l2 }).add(S);
                    S.stops.push(b3);
                  });
                }
                p2 = "url(" + t2.url + "#" + a3 + ")";
                e2.setAttribute(d2, p2);
                e2.gradient = m2;
                b2.toString = function() {
                  return p2;
                };
              }
            });
          };
          z.prototype.css = function(d2) {
            var e2 = this.styles, r2 = {}, t2 = this.element, z2 = !e2;
            d2.color && (d2.fill = d2.color);
            e2 && g(d2, function(b2, d3) {
              e2 && e2[d3] !== b2 && (r2[d3] = b2, z2 = true);
            });
            if (z2) {
              e2 && (d2 = H(e2, r2));
              if (null === d2.width || "auto" === d2.width)
                delete this.textWidth;
              else if ("text" === t2.nodeName.toLowerCase() && d2.width)
                var L = this.textWidth = b(d2.width);
              this.styles = d2;
              L && !n && this.renderer.forExport && delete d2.width;
              var I = k(d2);
              t2.namespaceURI === this.SVG_NS && ["textOutline", "textOverflow", "width"].forEach(function(b2) {
                return I && delete I[b2];
              });
              f(t2, I);
              this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), d2.textOutline && this.applyTextOutline(d2.textOutline));
            }
            return this;
          };
          z.prototype.dashstyleSetter = function(d2) {
            var g2 = this["stroke-width"];
            "inherit" === g2 && (g2 = 1);
            if (d2 = d2 && d2.toLowerCase()) {
              var r2 = d2.replace(
                "shortdashdotdot",
                "3,1,1,1,1,1,"
              ).replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
              for (d2 = r2.length; d2--; )
                r2[d2] = "" + b(r2[d2]) * e(g2, NaN);
              d2 = r2.join(",").replace(/NaN/g, "none");
              this.element.setAttribute("stroke-dasharray", d2);
            }
          };
          z.prototype.destroy = function() {
            var b2 = this, d2 = b2.element || {}, e2 = b2.renderer, r2 = d2.ownerSVGElement, k2 = e2.isSVG && "SPAN" === d2.nodeName && b2.parentGroup || void 0;
            d2.onclick = d2.onmouseout = d2.onmouseover = d2.onmousemove = d2.point = null;
            F(b2);
            if (b2.clipPath && r2) {
              var t2 = b2.clipPath;
              [].forEach.call(r2.querySelectorAll("[clip-path],[CLIP-PATH]"), function(b3) {
                -1 < b3.getAttribute("clip-path").indexOf(t2.element.id) && b3.removeAttribute("clip-path");
              });
              b2.clipPath = t2.destroy();
            }
            if (b2.stops) {
              for (r2 = 0; r2 < b2.stops.length; r2++)
                b2.stops[r2].destroy();
              b2.stops.length = 0;
              b2.stops = void 0;
            }
            b2.safeRemoveChild(d2);
            for (e2.styledMode || b2.destroyShadows(); k2 && k2.div && 0 === k2.div.childNodes.length; )
              d2 = k2.parentGroup, b2.safeRemoveChild(k2.div), delete k2.div, k2 = d2;
            b2.alignTo && G(e2.alignedObjects, b2);
            g(b2, function(d3, e3) {
              b2[e3] && b2[e3].parentGroup === b2 && b2[e3].destroy && b2[e3].destroy();
              delete b2[e3];
            });
          };
          z.prototype.destroyShadows = function() {
            (this.shadows || []).forEach(function(b2) {
              this.safeRemoveChild(b2);
            }, this);
            this.shadows = void 0;
          };
          z.prototype.dSetter = function(b2, d2, e2) {
            y(b2) && ("string" === typeof b2[0] && (b2 = this.renderer.pathToSegments(b2)), this.pathArray = b2, b2 = b2.reduce(function(b3, d3, e3) {
              return d3 && d3.join ? (e3 ? b3 + " " : "") + d3.join(" ") : (d3 || "").toString();
            }, ""));
            /(NaN| {2}|^$)/.test(b2) && (b2 = "M 0 0");
            this[d2] !== b2 && (e2.setAttribute(d2, b2), this[d2] = b2);
          };
          z.prototype.fadeOut = function(b2) {
            var d2 = this;
            d2.animate({ opacity: 0 }, { duration: e(b2, 150), complete: function() {
              d2.hide();
            } });
          };
          z.prototype.fillSetter = function(b2, d2, e2) {
            "string" === typeof b2 ? e2.setAttribute(d2, b2) : b2 && this.complexColor(b2, d2, e2);
          };
          z.prototype.getBBox = function(b2, d2) {
            var r2 = this.alignValue, g2 = this.element, k2 = this.renderer, L = this.styles, c2 = this.textStr, I = k2.cache, w2 = k2.cacheKeys, l2 = g2.namespaceURI === this.SVG_NS;
            d2 = e(d2, this.rotation, 0);
            var M = k2.styledMode ? g2 && z.prototype.getStyle.call(
              g2,
              "font-size"
            ) : L && L.fontSize, h2;
            if (D(c2)) {
              var a3 = c2.toString();
              -1 === a3.indexOf("<") && (a3 = a3.replace(/[0-9]/g, "0"));
              a3 += ["", d2, M, this.textWidth, r2, L && L.textOverflow, L && L.fontWeight].join();
            }
            a3 && !b2 && (h2 = I[a3]);
            if (!h2) {
              if (l2 || k2.forExport) {
                try {
                  var m2 = this.fakeTS && function(b3) {
                    var d3 = g2.querySelector(".highcharts-text-outline");
                    d3 && f(d3, { display: b3 });
                  };
                  t(m2) && m2("none");
                  h2 = g2.getBBox ? H({}, g2.getBBox()) : { width: g2.offsetWidth, height: g2.offsetHeight, x: 0, y: 0 };
                  t(m2) && m2("");
                } catch (W) {
                  "";
                }
                if (!h2 || 0 > h2.width)
                  h2 = { x: 0, y: 0, width: 0, height: 0 };
              } else
                h2 = this.htmlGetBBox();
              if (k2.isSVG && (k2 = h2.width, b2 = h2.height, l2 && (h2.height = b2 = { "11px,17": 14, "13px,20": 16 }["" + (M || "") + ",".concat(Math.round(b2))] || b2), d2)) {
                l2 = Number(g2.getAttribute("y") || 0) - h2.y;
                r2 = { right: 1, center: 0.5 }[r2 || 0] || 0;
                L = d2 * x;
                M = (d2 - 90) * x;
                var p2 = k2 * Math.cos(L);
                d2 = k2 * Math.sin(L);
                m2 = Math.cos(M);
                L = Math.sin(M);
                k2 = h2.x + r2 * (k2 - p2) + l2 * m2;
                M = k2 + p2;
                m2 = M - b2 * m2;
                p2 = m2 - p2;
                l2 = h2.y + l2 - r2 * d2 + l2 * L;
                r2 = l2 + d2;
                b2 = r2 - b2 * L;
                d2 = b2 - d2;
                h2.x = Math.min(k2, M, m2, p2);
                h2.y = Math.min(l2, r2, b2, d2);
                h2.width = Math.max(k2, M, m2, p2) - h2.x;
                h2.height = Math.max(l2, r2, b2, d2) - h2.y;
              }
              if (a3 && ("" === c2 || 0 < h2.height)) {
                for (; 250 < w2.length; )
                  delete I[w2.shift()];
                I[a3] || w2.push(a3);
                I[a3] = h2;
              }
            }
            return h2;
          };
          z.prototype.getStyle = function(b2) {
            return h.getComputedStyle(this.element || this, "").getPropertyValue(b2);
          };
          z.prototype.hasClass = function(b2) {
            return -1 !== ("" + this.attr("class")).split(" ").indexOf(b2);
          };
          z.prototype.hide = function() {
            return this.attr({ visibility: "hidden" });
          };
          z.prototype.htmlGetBBox = function() {
            return { height: 0, width: 0, x: 0, y: 0 };
          };
          z.prototype.init = function(b2, d2) {
            this.element = "span" === d2 ? p(d2) : u.createElementNS(this.SVG_NS, d2);
            this.renderer = b2;
            K(this, "afterInit");
          };
          z.prototype.on = function(b2, d2) {
            var e2 = this.onEvents;
            if (e2[b2])
              e2[b2]();
            e2[b2] = m(this.element, b2, d2);
            return this;
          };
          z.prototype.opacitySetter = function(b2, d2, e2) {
            this.opacity = b2 = Number(Number(b2).toFixed(3));
            e2.setAttribute(d2, b2);
          };
          z.prototype.removeClass = function(b2) {
            return this.attr("class", ("" + this.attr("class")).replace(w(b2) ? new RegExp("(^| )".concat(b2, "( |$)")) : b2, " ").replace(/ +/g, " ").trim());
          };
          z.prototype.removeTextOutline = function() {
            var b2 = this.element.querySelector("tspan.highcharts-text-outline");
            b2 && this.safeRemoveChild(b2);
          };
          z.prototype.safeRemoveChild = function(b2) {
            var d2 = b2.parentNode;
            d2 && d2.removeChild(b2);
          };
          z.prototype.setRadialReference = function(b2) {
            var d2 = this.element.gradient && this.renderer.gradients[this.element.gradient];
            this.element.radialReference = b2;
            d2 && d2.radAttr && d2.animate(this.renderer.getRadialAttr(b2, d2.radAttr));
            return this;
          };
          z.prototype.setTextPath = function(b2, d2) {
            var e2 = this;
            d2 = k(true, { enabled: true, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, d2);
            var g2 = this.renderer.url, t2 = this.text || this, L = t2.textPath, f2 = d2.attributes, z2 = d2.enabled;
            b2 = b2 || L && L.path;
            L && L.undo();
            b2 && z2 ? (d2 = m(t2, "afterModifyTree", function(d3) {
              if (b2 && z2) {
                var k2 = b2.attr("id");
                k2 || b2.attr("id", k2 = r());
                var L2 = { x: 0, y: 0 };
                D(f2.dx) && (L2.dx = f2.dx, delete f2.dx);
                D(f2.dy) && (L2.dy = f2.dy, delete f2.dy);
                t2.attr(L2);
                e2.attr({ transform: "" });
                e2.box && (e2.box = e2.box.destroy());
                L2 = d3.nodes.slice(0);
                d3.nodes.length = 0;
                d3.nodes[0] = { tagName: "textPath", attributes: H(f2, { "text-anchor": f2.textAnchor, href: "" + g2 + "#".concat(k2) }), children: L2 };
              }
            }), t2.textPath = { path: b2, undo: d2 }) : (t2.attr({ dx: 0, dy: 0 }), delete t2.textPath);
            this.added && (t2.textCache = "", this.renderer.buildText(t2));
            return this;
          };
          z.prototype.shadow = function(b2, d2, e2) {
            var r2 = [], k2 = this.element, t2 = this.oldShadowOptions, f2 = this.parentGroup, z2 = f2 && 90 === f2.rotation;
            f2 = { color: "#000000", offsetX: z2 ? -1 : 1, offsetY: z2 ? -1 : 1, opacity: 0.15, width: 3 };
            var c2 = false, w2;
            true === b2 ? w2 = f2 : "object" === typeof b2 && (w2 = H(f2, b2));
            w2 && (w2 && t2 && g(w2, function(b3, d3) {
              b3 !== t2[d3] && (c2 = true);
            }), c2 && this.destroyShadows(), this.oldShadowOptions = w2);
            if (!w2)
              this.destroyShadows();
            else if (!this.shadows) {
              f2 = w2.opacity / w2.width;
              var M = z2 ? "translate(".concat(w2.offsetY, ", ").concat(w2.offsetX, ")") : "translate(".concat(
                w2.offsetX,
                ", "
              ).concat(w2.offsetY, ")");
              for (z2 = 1; z2 <= w2.width; z2++) {
                var h2 = k2.cloneNode(false);
                var I = 2 * w2.width + 1 - 2 * z2;
                l(h2, { stroke: b2.color || "#000000", "stroke-opacity": f2 * z2, "stroke-width": I, transform: M, fill: "none" });
                h2.setAttribute("class", (h2.getAttribute("class") || "") + " highcharts-shadow");
                e2 && (l(h2, "height", Math.max(l(h2, "height") - I, 0)), h2.cutHeight = I);
                d2 ? d2.element.appendChild(h2) : k2.parentNode && k2.parentNode.insertBefore(h2, k2);
                r2.push(h2);
              }
              this.shadows = r2;
            }
            return this;
          };
          z.prototype.show = function(b2) {
            void 0 === b2 && (b2 = true);
            return this.attr({ visibility: b2 ? "inherit" : "visible" });
          };
          z.prototype["stroke-widthSetter"] = function(b2, d2, e2) {
            this[d2] = b2;
            e2.setAttribute(d2, b2);
          };
          z.prototype.strokeWidth = function() {
            if (!this.renderer.styledMode)
              return this["stroke-width"] || 0;
            var d2 = this.getStyle("stroke-width"), e2 = 0;
            if (d2.indexOf("px") === d2.length - 2)
              e2 = b(d2);
            else if ("" !== d2) {
              var r2 = u.createElementNS(c, "rect");
              l(r2, { width: d2, "stroke-width": 0 });
              this.element.parentNode.appendChild(r2);
              e2 = r2.getBBox().width;
              r2.parentNode.removeChild(r2);
            }
            return e2;
          };
          z.prototype.symbolAttr = function(b2) {
            var d2 = this;
            "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(r2) {
              d2[r2] = e(b2[r2], d2[r2]);
            });
            d2.attr({ d: d2.renderer.symbols[d2.symbolName](d2.x, d2.y, d2.width, d2.height, d2) });
          };
          z.prototype.textSetter = function(b2) {
            b2 !== this.textStr && (delete this.textPxLength, this.textStr = b2, this.added && this.renderer.buildText(this));
          };
          z.prototype.titleSetter = function(b2) {
            var d2 = this.element, r2 = d2.getElementsByTagName("title")[0] || u.createElementNS(this.SVG_NS, "title");
            d2.insertBefore ? d2.insertBefore(r2, d2.firstChild) : d2.appendChild(r2);
            r2.textContent = String(e(b2, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
          };
          z.prototype.toFront = function() {
            var b2 = this.element;
            b2.parentNode.appendChild(b2);
            return this;
          };
          z.prototype.translate = function(b2, d2) {
            return this.attr({ translateX: b2, translateY: d2 });
          };
          z.prototype.updateShadows = function(b2, d2, e2) {
            var r2 = this.shadows;
            if (r2)
              for (var g2 = r2.length; g2--; )
                e2.call(r2[g2], "height" === b2 ? Math.max(d2 - (r2[g2].cutHeight || 0), 0) : "d" === b2 ? this.d : d2, b2, r2[g2]);
          };
          z.prototype.updateTransform = function() {
            var b2 = this.element, d2 = this.matrix, r2 = this.rotation;
            r2 = void 0 === r2 ? 0 : r2;
            var g2 = this.scaleX, k2 = this.scaleY, t2 = this.translateX, f2 = this.translateY;
            t2 = ["translate(" + (void 0 === t2 ? 0 : t2) + "," + (void 0 === f2 ? 0 : f2) + ")"];
            D(d2) && t2.push("matrix(" + d2.join(",") + ")");
            r2 && t2.push("rotate(" + r2 + " " + e(this.rotationOriginX, b2.getAttribute("x"), 0) + " " + e(this.rotationOriginY, b2.getAttribute("y") || 0) + ")");
            (D(g2) || D(k2)) && t2.push("scale(" + e(g2, 1) + " " + e(k2, 1) + ")");
            t2.length && !(this.text || this).textPath && b2.setAttribute("transform", t2.join(" "));
          };
          z.prototype.visibilitySetter = function(b2, d2, e2) {
            "inherit" === b2 ? e2.removeAttribute(d2) : this[d2] !== b2 && e2.setAttribute(d2, b2);
            this[d2] = b2;
          };
          z.prototype.xGetter = function(b2) {
            "circle" === this.element.nodeName && ("x" === b2 ? b2 = "cx" : "y" === b2 && (b2 = "cy"));
            return this._defaultGetter(b2);
          };
          z.prototype.zIndexSetter = function(d2, e2) {
            var r2 = this.renderer, g2 = this.parentGroup, k2 = (g2 || r2).element || r2.box, t2 = this.element;
            r2 = k2 === r2.box;
            var f2 = false;
            var z2 = this.added;
            var c2;
            D(d2) ? (t2.setAttribute("data-z-index", d2), d2 = +d2, this[e2] === d2 && (z2 = false)) : D(this[e2]) && t2.removeAttribute("data-z-index");
            this[e2] = d2;
            if (z2) {
              (d2 = this.zIndex) && g2 && (g2.handleZ = true);
              e2 = k2.childNodes;
              for (c2 = e2.length - 1; 0 <= c2 && !f2; c2--) {
                g2 = e2[c2];
                z2 = g2.getAttribute("data-z-index");
                var w2 = !D(z2);
                if (g2 !== t2) {
                  if (0 > d2 && w2 && !r2 && !c2)
                    k2.insertBefore(t2, e2[c2]), f2 = true;
                  else if (b(z2) <= d2 || w2 && (!D(d2) || 0 <= d2))
                    k2.insertBefore(t2, e2[c2 + 1] || null), f2 = true;
                }
              }
              f2 || (k2.insertBefore(t2, e2[r2 ? 3 : 0] || null), f2 = true);
            }
            return f2;
          };
          return z;
        }();
        a2.prototype.strokeSetter = a2.prototype.fillSetter;
        a2.prototype.yGetter = a2.prototype.xGetter;
        a2.prototype.matrixSetter = a2.prototype.rotationOriginXSetter = a2.prototype.rotationOriginYSetter = a2.prototype.rotationSetter = a2.prototype.scaleXSetter = a2.prototype.scaleYSetter = a2.prototype.translateXSetter = a2.prototype.translateYSetter = a2.prototype.verticalAlignSetter = function(b2, d2) {
          this[d2] = b2;
          this.doTransform = true;
        };
        "";
        return a2;
      });
      J(a, "Core/Renderer/RendererRegistry.js", [a["Core/Globals.js"]], function(a2) {
        var v;
        (function(v2) {
          v2.rendererTypes = {};
          var q;
          v2.getRendererType = function(a3) {
            void 0 === a3 && (a3 = q);
            return v2.rendererTypes[a3] || v2.rendererTypes[q];
          };
          v2.registerRendererType = function(A, E, F) {
            v2.rendererTypes[A] = E;
            if (!q || F)
              q = A, a2.Renderer = E;
          };
        })(v || (v = {}));
        return v;
      });
      J(a, "Core/Renderer/SVG/SVGLabel.js", [a["Core/Renderer/SVG/SVGElement.js"], a["Core/Utilities.js"]], function(a2, q) {
        var v = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(c, h) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c2, h2) {
              c2.__proto__ = h2;
            } || function(c2, h2) {
              for (var l in h2)
                h2.hasOwnProperty(l) && (c2[l] = h2[l]);
            };
            return a3(c, h);
          };
          return function(c, h) {
            function m() {
              this.constructor = c;
            }
            a3(c, h);
            c.prototype = null === h ? Object.create(h) : (m.prototype = h.prototype, new m());
          };
        }(), E = q.defined, B = q.extend, C = q.isNumber, F = q.merge, x = q.pick, u = q.removeEvent;
        return function(n) {
          function c(h, a3, l, p, f, D, G, u2, K, y) {
            var t = n.call(this) || this;
            t.paddingLeftSetter = t.paddingSetter;
            t.paddingRightSetter = t.paddingSetter;
            t.init(h, "g");
            t.textStr = a3;
            t.x = l;
            t.y = p;
            t.anchorX = D;
            t.anchorY = G;
            t.baseline = K;
            t.className = y;
            t.addClass("button" === y ? "highcharts-no-tooltip" : "highcharts-label");
            y && t.addClass("highcharts-" + y);
            t.text = h.text(void 0, 0, 0, u2).attr({ zIndex: 1 });
            var w;
            "string" === typeof f && ((w = /^url\((.*?)\)$/.test(f)) || t.renderer.symbols[f]) && (t.symbolKey = f);
            t.bBox = c.emptyBBox;
            t.padding = 3;
            t.baselineOffset = 0;
            t.needsBox = h.styledMode || w;
            t.deferredAttr = {};
            t.alignFactor = 0;
            return t;
          }
          v(c, n);
          c.prototype.alignSetter = function(c2) {
            c2 = { left: 0, center: 0.5, right: 1 }[c2];
            c2 !== this.alignFactor && (this.alignFactor = c2, this.bBox && C(this.xSetting) && this.attr({ x: this.xSetting }));
          };
          c.prototype.anchorXSetter = function(c2, a3) {
            this.anchorX = c2;
            this.boxAttr(a3, Math.round(c2) - this.getCrispAdjust() - this.xSetting);
          };
          c.prototype.anchorYSetter = function(c2, a3) {
            this.anchorY = c2;
            this.boxAttr(a3, c2 - this.ySetting);
          };
          c.prototype.boxAttr = function(c2, a3) {
            this.box ? this.box.attr(c2, a3) : this.deferredAttr[c2] = a3;
          };
          c.prototype.css = function(h) {
            if (h) {
              var m = {};
              h = F(h);
              c.textProps.forEach(function(c2) {
                "undefined" !== typeof h[c2] && (m[c2] = h[c2], delete h[c2]);
              });
              this.text.css(m);
              "fontSize" in m || "fontWeight" in m ? this.updateTextPadding() : ("width" in m || "textOverflow" in m) && this.updateBoxSize();
            }
            return a2.prototype.css.call(this, h);
          };
          c.prototype.destroy = function() {
            u(this.element, "mouseenter");
            u(this.element, "mouseleave");
            this.text && this.text.destroy();
            this.box && (this.box = this.box.destroy());
            a2.prototype.destroy.call(this);
          };
          c.prototype.fillSetter = function(c2, a3) {
            c2 && (this.needsBox = true);
            this.fill = c2;
            this.boxAttr(a3, c2);
          };
          c.prototype.getBBox = function() {
            this.textStr && 0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize();
            var c2 = this.padding, a3 = x(this.paddingLeft, c2);
            return { width: this.width, height: this.height, x: this.bBox.x - a3, y: this.bBox.y - c2 };
          };
          c.prototype.getCrispAdjust = function() {
            return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
          };
          c.prototype.heightSetter = function(c2) {
            this.heightSetting = c2;
          };
          c.prototype.onAdd = function() {
            this.text.add(this);
            this.attr({ text: x(this.textStr, ""), x: this.x || 0, y: this.y || 0 });
            this.box && E(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
          };
          c.prototype.paddingSetter = function(c2, a3) {
            C(c2) ? c2 !== this[a3] && (this[a3] = c2, this.updateTextPadding()) : this[a3] = void 0;
          };
          c.prototype.rSetter = function(c2, a3) {
            this.boxAttr(
              a3,
              c2
            );
          };
          c.prototype.shadow = function(c2) {
            c2 && !this.renderer.styledMode && (this.updateBoxSize(), this.box && this.box.shadow(c2));
            return this;
          };
          c.prototype.strokeSetter = function(c2, a3) {
            this.stroke = c2;
            this.boxAttr(a3, c2);
          };
          c.prototype["stroke-widthSetter"] = function(c2, a3) {
            c2 && (this.needsBox = true);
            this["stroke-width"] = c2;
            this.boxAttr(a3, c2);
          };
          c.prototype["text-alignSetter"] = function(c2) {
            this.textAlign = c2;
          };
          c.prototype.textSetter = function(c2) {
            "undefined" !== typeof c2 && this.text.attr({ text: c2 });
            this.updateTextPadding();
          };
          c.prototype.updateBoxSize = function() {
            var a3 = this.text, m = a3.element.style, l = {}, p = this.padding, f = this.bBox = C(this.widthSetting) && C(this.heightSetting) && !this.textAlign || !E(a3.textStr) ? c.emptyBBox : a3.getBBox();
            this.width = this.getPaddedWidth();
            this.height = (this.heightSetting || f.height || 0) + 2 * p;
            m = this.renderer.fontMetrics(m && m.fontSize, a3);
            this.baselineOffset = p + Math.min((this.text.firstLineMetrics || m).b, f.height || Infinity);
            this.heightSetting && (this.baselineOffset += (this.heightSetting - m.h) / 2);
            this.needsBox && !a3.textPath && (this.box || (a3 = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect(), a3.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), a3.add(this)), a3 = this.getCrispAdjust(), l.x = a3, l.y = (this.baseline ? -this.baselineOffset : 0) + a3, l.width = Math.round(this.width), l.height = Math.round(this.height), this.box.attr(B(l, this.deferredAttr)), this.deferredAttr = {});
          };
          c.prototype.updateTextPadding = function() {
            var c2 = this.text;
            if (!c2.textPath) {
              this.updateBoxSize();
              var a3 = this.baseline ? 0 : this.baselineOffset, l = x(this.paddingLeft, this.padding);
              E(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (l += { center: 0.5, right: 1 }[this.textAlign] * (this.widthSetting - this.bBox.width));
              if (l !== c2.x || a3 !== c2.y)
                c2.attr("x", l), c2.hasBoxWidthChanged && (this.bBox = c2.getBBox(true)), "undefined" !== typeof a3 && c2.attr("y", a3);
              c2.x = l;
              c2.y = a3;
            }
          };
          c.prototype.widthSetter = function(c2) {
            this.widthSetting = C(c2) ? c2 : void 0;
          };
          c.prototype.getPaddedWidth = function() {
            var c2 = this.padding, a3 = x(this.paddingLeft, c2);
            c2 = x(this.paddingRight, c2);
            return (this.widthSetting || this.bBox.width || 0) + a3 + c2;
          };
          c.prototype.xSetter = function(c2) {
            this.x = c2;
            this.alignFactor && (c2 -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = true);
            this.xSetting = Math.round(c2);
            this.attr("translateX", this.xSetting);
          };
          c.prototype.ySetter = function(c2) {
            this.ySetting = this.y = Math.round(c2);
            this.attr("translateY", this.ySetting);
          };
          c.emptyBBox = { width: 0, height: 0, x: 0, y: 0 };
          c.textProps = "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" ");
          return c;
        }(a2);
      });
      J(a, "Core/Renderer/SVG/Symbols.js", [a["Core/Utilities.js"]], function(a2) {
        function v(a3, u, n, c, h) {
          var m = [];
          if (h) {
            var l = h.start || 0, p = F(h.r, n);
            n = F(h.r, c || n);
            var f = (h.end || 0) - 1e-3;
            c = h.innerR;
            var D = F(h.open, 1e-3 > Math.abs((h.end || 0) - l - 2 * Math.PI)), G = Math.cos(l), H = Math.sin(l), K = Math.cos(f), y = Math.sin(f);
            l = F(h.longArc, 1e-3 > f - l - Math.PI ? 0 : 1);
            m.push(["M", a3 + p * G, u + n * H], ["A", p, n, 0, l, F(h.clockwise, 1), a3 + p * K, u + n * y]);
            B(c) && m.push(D ? ["M", a3 + c * K, u + c * y] : ["L", a3 + c * K, u + c * y], ["A", c, c, 0, l, B(h.clockwise) ? 1 - h.clockwise : 0, a3 + c * G, u + c * H]);
            D || m.push(["Z"]);
          }
          return m;
        }
        function A(a3, u, n, c, h) {
          return h && h.r ? E(a3, u, n, c, h) : [["M", a3, u], ["L", a3 + n, u], ["L", a3 + n, u + c], ["L", a3, u + c], ["Z"]];
        }
        function E(a3, u, n, c, h) {
          h = h && h.r || 0;
          return [["M", a3 + h, u], ["L", a3 + n - h, u], ["C", a3 + n, u, a3 + n, u, a3 + n, u + h], ["L", a3 + n, u + c - h], ["C", a3 + n, u + c, a3 + n, u + c, a3 + n - h, u + c], ["L", a3 + h, u + c], ["C", a3, u + c, a3, u + c, a3, u + c - h], ["L", a3, u + h], ["C", a3, u, a3, u, a3 + h, u]];
        }
        var B = a2.defined, C = a2.isNumber, F = a2.pick;
        return { arc: v, callout: function(a3, u, n, c, h) {
          var m = Math.min(h && h.r || 0, n, c), l = m + 6, p = h && h.anchorX;
          h = h && h.anchorY || 0;
          var f = E(a3, u, n, c, { r: m });
          if (!C(p))
            return f;
          a3 + p >= n ? h > u + l && h < u + c - l ? f.splice(3, 1, ["L", a3 + n, h - 6], ["L", a3 + n + 6, h], ["L", a3 + n, h + 6], ["L", a3 + n, u + c - m]) : f.splice(3, 1, ["L", a3 + n, c / 2], ["L", p, h], ["L", a3 + n, c / 2], ["L", a3 + n, u + c - m]) : 0 >= a3 + p ? h > u + l && h < u + c - l ? f.splice(7, 1, ["L", a3, h + 6], ["L", a3 - 6, h], ["L", a3, h - 6], ["L", a3, u + m]) : f.splice(7, 1, ["L", a3, c / 2], ["L", p, h], ["L", a3, c / 2], ["L", a3, u + m]) : h && h > c && p > a3 + l && p < a3 + n - l ? f.splice(5, 1, ["L", p + 6, u + c], ["L", p, u + c + 6], ["L", p - 6, u + c], ["L", a3 + m, u + c]) : h && 0 > h && p > a3 + l && p < a3 + n - l && f.splice(
            1,
            1,
            ["L", p - 6, u],
            ["L", p, u - 6],
            ["L", p + 6, u],
            ["L", n - m, u]
          );
          return f;
        }, circle: function(a3, u, n, c) {
          return v(a3 + n / 2, u + c / 2, n / 2, c / 2, { start: 0.5 * Math.PI, end: 2.5 * Math.PI, open: false });
        }, diamond: function(a3, u, n, c) {
          return [["M", a3 + n / 2, u], ["L", a3 + n, u + c / 2], ["L", a3 + n / 2, u + c], ["L", a3, u + c / 2], ["Z"]];
        }, rect: A, roundedRect: E, square: A, triangle: function(a3, u, n, c) {
          return [["M", a3 + n / 2, u], ["L", a3 + n, u + c], ["L", a3, u + c], ["Z"]];
        }, "triangle-down": function(a3, u, n, c) {
          return [["M", a3, u], ["L", a3 + n, u], ["L", a3 + n / 2, u + c], ["Z"]];
        } };
      });
      J(a, "Core/Renderer/SVG/TextBuilder.js", [
        a["Core/Renderer/HTML/AST.js"],
        a["Core/Globals.js"],
        a["Core/Utilities.js"]
      ], function(a2, q, A) {
        var v = q.doc, B = q.SVG_NS, C = q.win, F = A.attr, x = A.extend, u = A.fireEvent, n = A.isString, c = A.objectEach, h = A.pick;
        return function() {
          function m(c2) {
            var a3 = c2.styles;
            this.renderer = c2.renderer;
            this.svgElement = c2;
            this.width = c2.textWidth;
            this.textLineHeight = a3 && a3.lineHeight;
            this.textOutline = a3 && a3.textOutline;
            this.ellipsis = !(!a3 || "ellipsis" !== a3.textOverflow);
            this.noWrap = !(!a3 || "nowrap" !== a3.whiteSpace);
            this.fontSize = a3 && a3.fontSize;
          }
          m.prototype.buildSVG = function() {
            var c2 = this.svgElement, m2 = c2.element, f = c2.renderer, D = h(c2.textStr, "").toString(), G = -1 !== D.indexOf("<"), u2 = m2.childNodes;
            f = this.width && !c2.added && f.box;
            var K = /<br.*?>/g, y = [D, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, this.fontSize, this.width].join();
            if (y !== c2.textCache) {
              c2.textCache = y;
              delete c2.actualWidth;
              for (y = u2.length; y--; )
                m2.removeChild(u2[y]);
              G || this.ellipsis || this.width || c2.textPath || -1 !== D.indexOf(" ") && (!this.noWrap || K.test(D)) ? "" !== D && (f && f.appendChild(m2), D = new a2(D), this.modifyTree(D.nodes), D.addToDOM(m2), this.modifyDOM(), this.ellipsis && -1 !== (m2.textContent || "").indexOf("…") && c2.attr("title", this.unescapeEntities(c2.textStr || "", ["&lt;", "&gt;"])), f && f.removeChild(m2)) : m2.appendChild(v.createTextNode(this.unescapeEntities(D)));
              n(this.textOutline) && c2.applyTextOutline && c2.applyTextOutline(this.textOutline);
            }
          };
          m.prototype.modifyDOM = function() {
            var c2 = this, a3 = this.svgElement, f = F(a3.element, "x");
            a3.firstLineMetrics = void 0;
            for (var m2; m2 = a3.element.firstChild; )
              if (/^[\s\u200B]*$/.test(m2.textContent || " "))
                a3.element.removeChild(m2);
              else
                break;
            [].forEach.call(a3.element.querySelectorAll("tspan.highcharts-br"), function(l, t) {
              l.nextSibling && l.previousSibling && (0 === t && 1 === l.previousSibling.nodeType && (a3.firstLineMetrics = a3.renderer.fontMetrics(void 0, l.previousSibling)), F(l, { dy: c2.getLineHeight(l.nextSibling), x: f }));
            });
            var h2 = this.width || 0;
            if (h2) {
              var n2 = function(l, t) {
                var w = l.textContent || "", k = w.replace(/([^\^])-/g, "$1- ").split(" "), g = !c2.noWrap && (1 < k.length || 1 < a3.element.childNodes.length), e = c2.getLineHeight(t), b = 0, d = a3.actualWidth;
                if (c2.ellipsis)
                  w && c2.truncate(l, w, void 0, 0, Math.max(0, h2 - parseInt(c2.fontSize || 12, 10)), function(b2, d2) {
                    return b2.substring(0, d2) + "…";
                  });
                else if (g) {
                  w = [];
                  for (g = []; t.firstChild && t.firstChild !== l; )
                    g.push(t.firstChild), t.removeChild(t.firstChild);
                  for (; k.length; )
                    k.length && !c2.noWrap && 0 < b && (w.push(l.textContent || ""), l.textContent = k.join(" ").replace(/- /g, "-")), c2.truncate(l, void 0, k, 0 === b ? d || 0 : 0, h2, function(b2, d2) {
                      return k.slice(0, d2).join(" ").replace(/- /g, "-");
                    }), d = a3.actualWidth, b++;
                  g.forEach(function(b2) {
                    t.insertBefore(b2, l);
                  });
                  w.forEach(function(b2) {
                    t.insertBefore(v.createTextNode(b2), l);
                    b2 = v.createElementNS(B, "tspan");
                    b2.textContent = "​";
                    F(b2, { dy: e, x: f });
                    t.insertBefore(b2, l);
                  });
                }
              }, u2 = function(c3) {
                [].slice.call(c3.childNodes).forEach(function(t) {
                  t.nodeType === C.Node.TEXT_NODE ? n2(t, c3) : (-1 !== t.className.baseVal.indexOf("highcharts-br") && (a3.actualWidth = 0), u2(t));
                });
              };
              u2(a3.element);
            }
          };
          m.prototype.getLineHeight = function(c2) {
            var a3;
            c2 = c2.nodeType === C.Node.TEXT_NODE ? c2.parentElement : c2;
            this.renderer.styledMode || (a3 = c2 && /(px|em)$/.test(c2.style.fontSize) ? c2.style.fontSize : this.fontSize || this.renderer.style.fontSize || 12);
            return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(a3, c2 || this.svgElement.element).h;
          };
          m.prototype.modifyTree = function(c2) {
            var a3 = this, f = function(l, m2) {
              var h2 = l.attributes;
              h2 = void 0 === h2 ? {} : h2;
              var p = l.children, y = l.style;
              y = void 0 === y ? {} : y;
              var t = l.tagName, w = a3.renderer.styledMode;
              if ("b" === t || "strong" === t)
                w ? h2["class"] = "highcharts-strong" : y.fontWeight = "bold";
              else if ("i" === t || "em" === t)
                w ? h2["class"] = "highcharts-emphasized" : y.fontStyle = "italic";
              y && y.color && (y.fill = y.color);
              "br" === t ? (h2["class"] = "highcharts-br", l.textContent = "​", (m2 = c2[m2 + 1]) && m2.textContent && (m2.textContent = m2.textContent.replace(/^ +/gm, ""))) : "a" === t && p && p.some(function(k) {
                return "#text" === k.tagName;
              }) && (l.children = [{ children: p, tagName: "tspan" }]);
              "#text" !== t && "a" !== t && (l.tagName = "tspan");
              x(l, { attributes: h2, style: y });
              p && p.filter(function(k) {
                return "#text" !== k.tagName;
              }).forEach(f);
            };
            c2.forEach(f);
            u(this.svgElement, "afterModifyTree", { nodes: c2 });
          };
          m.prototype.truncate = function(c2, a3, f, m2, h2, n2) {
            var l = this.svgElement, p = l.renderer, t = l.rotation, w = [], k = f ? 1 : 0, g = (a3 || f || "").length, e = g, b, d = function(b2, d2) {
              d2 = d2 || b2;
              var e2 = c2.parentNode;
              if (e2 && "undefined" === typeof w[d2])
                if (e2.getSubStringLength)
                  try {
                    w[d2] = m2 + e2.getSubStringLength(0, f ? d2 + 1 : d2);
                  } catch (P) {
                    "";
                  }
                else
                  p.getSpanWidth && (c2.textContent = n2(a3 || f, b2), w[d2] = m2 + p.getSpanWidth(l, c2));
              return w[d2];
            };
            l.rotation = 0;
            var r = d(c2.textContent.length);
            if (m2 + r > h2) {
              for (; k <= g; )
                e = Math.ceil((k + g) / 2), f && (b = n2(f, e)), r = d(e, b && b.length - 1), k === g ? k = g + 1 : r > h2 ? g = e - 1 : k = e;
              0 === g ? c2.textContent = "" : a3 && g === a3.length - 1 || (c2.textContent = b || n2(a3 || f, e));
            }
            f && f.splice(0, e);
            l.actualWidth = r;
            l.rotation = t;
          };
          m.prototype.unescapeEntities = function(a3, m2) {
            c(this.renderer.escapes, function(c2, l) {
              m2 && -1 !== m2.indexOf(c2) || (a3 = a3.toString().replace(new RegExp(c2, "g"), l));
            });
            return a3;
          };
          return m;
        }();
      });
      J(a, "Core/Renderer/SVG/SVGRenderer.js", [
        a["Core/Renderer/HTML/AST.js"],
        a["Core/Color/Color.js"],
        a["Core/Globals.js"],
        a["Core/Renderer/RendererRegistry.js"],
        a["Core/Renderer/SVG/SVGElement.js"],
        a["Core/Renderer/SVG/SVGLabel.js"],
        a["Core/Renderer/SVG/Symbols.js"],
        a["Core/Renderer/SVG/TextBuilder.js"],
        a["Core/Utilities.js"]
      ], function(a2, q, A, E, B, C, F, x, u) {
        var n = A.charts, c = A.deg2rad, h = A.doc, m = A.isFirefox, l = A.isMS, p = A.isWebKit, f = A.noop, D = A.SVG_NS, G = A.symbolSizes, H = A.win, K = u.addEvent, y = u.attr, t = u.createElement, w = u.css, k = u.defined, g = u.destroyObjectProperties, e = u.extend, b = u.isArray, d = u.isNumber, r = u.isObject, z = u.isString, I = u.merge, N = u.pick, P = u.pInt, O = u.uniqueKey, U;
        A = function() {
          function f2(b2, d2, e2, r2, g2, k2, c2) {
            this.width = this.url = this.style = this.isSVG = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0;
            this.init(b2, d2, e2, r2, g2, k2, c2);
          }
          f2.prototype.init = function(b2, d2, e2, r2, g2, k2, c2) {
            var t2 = this.createElement("svg").attr({ version: "1.1", "class": "highcharts-root" }), f3 = t2.element;
            c2 || t2.css(this.getStyle(r2));
            b2.appendChild(f3);
            y(b2, "dir", "ltr");
            -1 === b2.innerHTML.indexOf("xmlns") && y(f3, "xmlns", this.SVG_NS);
            this.isSVG = true;
            this.box = f3;
            this.boxWrapper = t2;
            this.alignedObjects = [];
            this.url = this.getReferenceURL();
            this.createElement("desc").add().element.appendChild(h.createTextNode("Created with Highcharts 10.3.3"));
            this.defs = this.createElement("defs").add();
            this.allowHTML = k2;
            this.forExport = g2;
            this.styledMode = c2;
            this.gradients = {};
            this.cache = {};
            this.cacheKeys = [];
            this.imgCount = 0;
            this.setSize(d2, e2, false);
            var a3;
            m && b2.getBoundingClientRect && (d2 = function() {
              w(b2, { left: 0, top: 0 });
              a3 = b2.getBoundingClientRect();
              w(b2, { left: Math.ceil(a3.left) - a3.left + "px", top: Math.ceil(a3.top) - a3.top + "px" });
            }, d2(), this.unSubPixelFix = K(H, "resize", d2));
          };
          f2.prototype.definition = function(b2) {
            return new a2([b2]).addToDOM(this.defs.element);
          };
          f2.prototype.getReferenceURL = function() {
            if ((m || p) && h.getElementsByTagName("base").length) {
              if (!k(U)) {
                var b2 = O();
                b2 = new a2([{ tagName: "svg", attributes: { width: 8, height: 8 }, children: [{ tagName: "defs", children: [{ tagName: "clipPath", attributes: { id: b2 }, children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }] }] }, { tagName: "rect", attributes: { id: "hitme", width: 8, height: 8, "clip-path": "url(#".concat(b2, ")"), fill: "rgba(0,0,0,0.001)" } }] }]).addToDOM(h.body);
                w(b2, { position: "fixed", top: 0, left: 0, zIndex: 9e5 });
                var d2 = h.elementFromPoint(6, 6);
                U = "hitme" === (d2 && d2.id);
                h.body.removeChild(b2);
              }
              if (U)
                return H.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20");
            }
            return "";
          };
          f2.prototype.getStyle = function(b2) {
            return this.style = e({ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: "12px" }, b2);
          };
          f2.prototype.setStyle = function(b2) {
            this.boxWrapper.css(this.getStyle(b2));
          };
          f2.prototype.isHidden = function() {
            return !this.boxWrapper.getBBox().width;
          };
          f2.prototype.destroy = function() {
            var b2 = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            g(this.gradients || {});
            this.gradients = null;
            b2 && (this.defs = b2.destroy());
            this.unSubPixelFix && this.unSubPixelFix();
            return this.alignedObjects = null;
          };
          f2.prototype.createElement = function(b2) {
            var d2 = new this.Element();
            d2.init(this, b2);
            return d2;
          };
          f2.prototype.getRadialAttr = function(b2, d2) {
            return { cx: b2[0] - b2[2] / 2 + (d2.cx || 0) * b2[2], cy: b2[1] - b2[2] / 2 + (d2.cy || 0) * b2[2], r: (d2.r || 0) * b2[2] };
          };
          f2.prototype.buildText = function(b2) {
            new x(b2).buildSVG();
          };
          f2.prototype.getContrast = function(b2) {
            b2 = q.parse(b2).rgba.map(function(b3) {
              b3 /= 255;
              return 0.03928 >= b3 ? b3 / 12.92 : Math.pow((b3 + 0.055) / 1.055, 2.4);
            });
            b2 = 0.2126 * b2[0] + 0.7152 * b2[1] + 0.0722 * b2[2];
            return 1.05 / (b2 + 0.05) > (b2 + 0.05) / 0.05 ? "#FFFFFF" : "#000000";
          };
          f2.prototype.button = function(b2, d2, g2, k2, c2, t2, f3, z2, L, w2) {
            void 0 === c2 && (c2 = {});
            var M = this.label(b2, d2, g2, L, void 0, void 0, w2, void 0, "button"), m2 = this.styledMode;
            b2 = c2.states || {};
            var h2 = 0;
            c2 = I(c2);
            delete c2.states;
            var S = I({ color: "#333333", cursor: "pointer", fontWeight: "normal" }, c2.style);
            delete c2.style;
            var p2 = a2.filterUserAttributes(c2);
            M.attr(I({ padding: 8, r: 2 }, p2));
            if (!m2) {
              p2 = I({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1 }, p2);
              t2 = I(p2, { fill: "#e6e6e6" }, a2.filterUserAttributes(t2 || b2.hover || {}));
              var y2 = t2.style;
              delete t2.style;
              f3 = I(p2, { fill: "#e6ebf5", style: { color: "#000000", fontWeight: "bold" } }, a2.filterUserAttributes(f3 || b2.select || {}));
              var Q = f3.style;
              delete f3.style;
              z2 = I(p2, { style: { color: "#cccccc" } }, a2.filterUserAttributes(z2 || b2.disabled || {}));
              var n2 = z2.style;
              delete z2.style;
            }
            K(M.element, l ? "mouseover" : "mouseenter", function() {
              3 !== h2 && M.setState(1);
            });
            K(M.element, l ? "mouseout" : "mouseleave", function() {
              3 !== h2 && M.setState(h2);
            });
            M.setState = function(b3) {
              1 !== b3 && (M.state = h2 = b3);
              M.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][b3 || 0]);
              m2 || (M.attr([p2, t2, f3, z2][b3 || 0]), b3 = [S, y2, Q, n2][b3 || 0], r(b3) && M.css(b3));
            };
            m2 || (M.attr(p2).css(e({ cursor: "default" }, S)), w2 && M.text.css({ pointerEvents: "none" }));
            return M.on("touchstart", function(b3) {
              return b3.stopPropagation();
            }).on(
              "click",
              function(b3) {
                3 !== h2 && k2.call(M, b3);
              }
            );
          };
          f2.prototype.crispLine = function(b2, d2, e2) {
            void 0 === e2 && (e2 = "round");
            var r2 = b2[0], g2 = b2[1];
            k(r2[1]) && r2[1] === g2[1] && (r2[1] = g2[1] = Math[e2](r2[1]) - d2 % 2 / 2);
            k(r2[2]) && r2[2] === g2[2] && (r2[2] = g2[2] = Math[e2](r2[2]) + d2 % 2 / 2);
            return b2;
          };
          f2.prototype.path = function(d2) {
            var g2 = this.styledMode ? {} : { fill: "none" };
            b(d2) ? g2.d = d2 : r(d2) && e(g2, d2);
            return this.createElement("path").attr(g2);
          };
          f2.prototype.circle = function(b2, d2, e2) {
            b2 = r(b2) ? b2 : "undefined" === typeof b2 ? {} : { x: b2, y: d2, r: e2 };
            d2 = this.createElement("circle");
            d2.xSetter = d2.ySetter = function(b3, d3, e3) {
              e3.setAttribute("c" + d3, b3);
            };
            return d2.attr(b2);
          };
          f2.prototype.arc = function(b2, d2, e2, g2, k2, c2) {
            r(b2) ? (g2 = b2, d2 = g2.y, e2 = g2.r, b2 = g2.x) : g2 = { innerR: g2, start: k2, end: c2 };
            b2 = this.symbol("arc", b2, d2, e2, e2, g2);
            b2.r = e2;
            return b2;
          };
          f2.prototype.rect = function(b2, d2, e2, g2, k2, c2) {
            k2 = r(b2) ? b2.r : k2;
            var t2 = this.createElement("rect");
            b2 = r(b2) ? b2 : "undefined" === typeof b2 ? {} : { x: b2, y: d2, width: Math.max(e2, 0), height: Math.max(g2, 0) };
            this.styledMode || ("undefined" !== typeof c2 && (b2["stroke-width"] = c2, b2 = t2.crisp(b2)), b2.fill = "none");
            k2 && (b2.r = k2);
            t2.rSetter = function(b3, d3, e3) {
              t2.r = b3;
              y(e3, { rx: b3, ry: b3 });
            };
            t2.rGetter = function() {
              return t2.r || 0;
            };
            return t2.attr(b2);
          };
          f2.prototype.setSize = function(b2, d2, e2) {
            this.width = b2;
            this.height = d2;
            this.boxWrapper.animate({ width: b2, height: d2 }, { step: function() {
              this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
            }, duration: N(e2, true) ? void 0 : 0 });
            this.alignElements();
          };
          f2.prototype.g = function(b2) {
            var d2 = this.createElement("g");
            return b2 ? d2.attr({ "class": "highcharts-" + b2 }) : d2;
          };
          f2.prototype.image = function(b2, e2, g2, r2, k2, c2) {
            var t2 = { preserveAspectRatio: "none" }, f3 = function(b3, d2) {
              b3.setAttributeNS ? b3.setAttributeNS("http://www.w3.org/1999/xlink", "href", d2) : b3.setAttribute("hc-svg-href", d2);
            };
            d(e2) && (t2.x = e2);
            d(g2) && (t2.y = g2);
            d(r2) && (t2.width = r2);
            d(k2) && (t2.height = k2);
            var a3 = this.createElement("image").attr(t2);
            e2 = function(d2) {
              f3(a3.element, b2);
              c2.call(a3, d2);
            };
            c2 ? (f3(a3.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), g2 = new H.Image(), K(g2, "load", e2), g2.src = b2, g2.complete && e2({})) : f3(a3.element, b2);
            return a3;
          };
          f2.prototype.symbol = function(b2, d2, g2, r2, c2, f3) {
            var a3 = this, z2 = /^url\((.*?)\)$/, L = z2.test(b2), M = !L && (this.symbols[b2] ? b2 : "circle"), l2 = M && this.symbols[M], m2;
            if (l2) {
              "number" === typeof d2 && (m2 = l2.call(this.symbols, Math.round(d2 || 0), Math.round(g2 || 0), r2 || 0, c2 || 0, f3));
              var I2 = this.path(m2);
              a3.styledMode || I2.attr("fill", "none");
              e(I2, { symbolName: M || void 0, x: d2, y: g2, width: r2, height: c2 });
              f3 && e(I2, f3);
            } else if (L) {
              var p2 = b2.match(z2)[1];
              var S = I2 = this.image(p2);
              S.imgwidth = N(G[p2] && G[p2].width, f3 && f3.width);
              S.imgheight = N(G[p2] && G[p2].height, f3 && f3.height);
              var D2 = function(b3) {
                return b3.attr({ width: b3.width, height: b3.height });
              };
              [
                "width",
                "height"
              ].forEach(function(b3) {
                S[b3 + "Setter"] = function(b4, d3) {
                  this[d3] = b4;
                  b4 = this.alignByTranslate;
                  var e2 = this.element, g3 = this.width, r3 = this.height, c3 = this.imgwidth, t2 = this.imgheight, a4 = this["img" + d3];
                  if (k(a4)) {
                    var z3 = 1;
                    f3 && "within" === f3.backgroundSize && g3 && r3 ? (z3 = Math.min(g3 / c3, r3 / t2), a4 = Math.round(a4 * z3), y(e2, { width: Math.round(c3 * z3), height: Math.round(t2 * z3) })) : e2 && e2.setAttribute(d3, a4);
                    b4 || this.translate(((g3 || 0) - a4 * z3) / 2, ((r3 || 0) - a4 * z3) / 2);
                  }
                };
              });
              k(d2) && S.attr({ x: d2, y: g2 });
              S.isImg = true;
              k(S.imgwidth) && k(S.imgheight) ? D2(S) : (S.attr({ width: 0, height: 0 }), t("img", { onload: function() {
                var b3 = n[a3.chartIndex];
                0 === this.width && (w(this, { position: "absolute", top: "-999em" }), h.body.appendChild(this));
                G[p2] = { width: this.width, height: this.height };
                S.imgwidth = this.width;
                S.imgheight = this.height;
                S.element && D2(S);
                this.parentNode && this.parentNode.removeChild(this);
                a3.imgCount--;
                if (!a3.imgCount && b3 && !b3.hasLoaded)
                  b3.onload();
              }, src: p2 }), this.imgCount++);
            }
            return I2;
          };
          f2.prototype.clipRect = function(b2, d2, e2, g2) {
            var r2 = O() + "-", k2 = this.createElement("clipPath").attr({ id: r2 }).add(this.defs);
            b2 = this.rect(
              b2,
              d2,
              e2,
              g2,
              0
            ).add(k2);
            b2.id = r2;
            b2.clipPath = k2;
            b2.count = 0;
            return b2;
          };
          f2.prototype.text = function(b2, d2, e2, g2) {
            var r2 = {};
            if (g2 && (this.allowHTML || !this.forExport))
              return this.html(b2, d2, e2);
            r2.x = Math.round(d2 || 0);
            e2 && (r2.y = Math.round(e2));
            k(b2) && (r2.text = b2);
            b2 = this.createElement("text").attr(r2);
            if (!g2 || this.forExport && !this.allowHTML)
              b2.xSetter = function(b3, d3, e3) {
                for (var g3 = e3.getElementsByTagName("tspan"), r3 = e3.getAttribute(d3), k2 = 0, c2; k2 < g3.length; k2++)
                  c2 = g3[k2], c2.getAttribute(d3) === r3 && c2.setAttribute(d3, b3);
                e3.setAttribute(d3, b3);
              };
            return b2;
          };
          f2.prototype.fontMetrics = function(b2, d2) {
            b2 = !this.styledMode && /px/.test(b2) || !H.getComputedStyle ? b2 || d2 && d2.style && d2.style.fontSize || this.style && this.style.fontSize : d2 && B.prototype.getStyle.call(d2, "font-size");
            b2 = /px/.test(b2) ? P(b2) : 12;
            d2 = 24 > b2 ? b2 + 3 : Math.round(1.2 * b2);
            return { h: d2, b: Math.round(0.8 * d2), f: b2 };
          };
          f2.prototype.rotCorr = function(b2, d2, e2) {
            var g2 = b2;
            d2 && e2 && (g2 = Math.max(g2 * Math.cos(d2 * c), 4));
            return { x: -b2 / 3 * Math.sin(d2 * c), y: g2 };
          };
          f2.prototype.pathToSegments = function(b2) {
            for (var e2 = [], g2 = [], r2 = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 }, k2 = 0; k2 < b2.length; k2++)
              z(g2[0]) && d(b2[k2]) && g2.length === r2[g2[0].toUpperCase()] && b2.splice(k2, 0, g2[0].replace("M", "L").replace("m", "l")), "string" === typeof b2[k2] && (g2.length && e2.push(g2.slice(0)), g2.length = 0), g2.push(b2[k2]);
            e2.push(g2.slice(0));
            return e2;
          };
          f2.prototype.label = function(b2, d2, e2, g2, r2, k2, c2, t2, f3) {
            return new C(this, b2, d2, e2, g2, r2, k2, c2, t2, f3);
          };
          f2.prototype.alignElements = function() {
            this.alignedObjects.forEach(function(b2) {
              return b2.align();
            });
          };
          return f2;
        }();
        e(A.prototype, {
          Element: B,
          SVG_NS: D,
          escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" },
          symbols: F,
          draw: f
        });
        E.registerRendererType("svg", A, true);
        "";
        return A;
      });
      J(a, "Core/Renderer/HTML/HTMLElement.js", [a["Core/Globals.js"], a["Core/Renderer/SVG/SVGElement.js"], a["Core/Utilities.js"]], function(a2, q, A) {
        var v = this && this.__extends || /* @__PURE__ */ function() {
          var c2 = function(a3, f) {
            c2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c3, f2) {
              c3.__proto__ = f2;
            } || function(c3, f2) {
              for (var a4 in f2)
                f2.hasOwnProperty(a4) && (c3[a4] = f2[a4]);
            };
            return c2(a3, f);
          };
          return function(a3, f) {
            function l() {
              this.constructor = a3;
            }
            c2(a3, f);
            a3.prototype = null === f ? Object.create(f) : (l.prototype = f.prototype, new l());
          };
        }(), B = a2.isFirefox, C = a2.isMS, F = a2.isWebKit, x = a2.win, u = A.css, n = A.defined, c = A.extend, h = A.pick, m = A.pInt;
        return function(a3) {
          function l() {
            return null !== a3 && a3.apply(this, arguments) || this;
          }
          v(l, a3);
          l.compose = function(c2) {
            if (-1 === l.composedClasses.indexOf(c2)) {
              l.composedClasses.push(c2);
              var a4 = l.prototype, f = c2.prototype;
              f.getSpanCorrection = a4.getSpanCorrection;
              f.htmlCss = a4.htmlCss;
              f.htmlGetBBox = a4.htmlGetBBox;
              f.htmlUpdateTransform = a4.htmlUpdateTransform;
              f.setSpanRotation = a4.setSpanRotation;
            }
            return c2;
          };
          l.prototype.getSpanCorrection = function(c2, a4, l2) {
            this.xCorr = -c2 * l2;
            this.yCorr = -a4;
          };
          l.prototype.htmlCss = function(a4) {
            var f = "SPAN" === this.element.tagName && a4 && "width" in a4, l2 = h(f && a4.width, void 0);
            if (f) {
              delete a4.width;
              this.textWidth = l2;
              var m2 = true;
            }
            a4 && "ellipsis" === a4.textOverflow && (a4.whiteSpace = "nowrap", a4.overflow = "hidden");
            this.styles = c(this.styles, a4);
            u(this.element, a4);
            m2 && this.htmlUpdateTransform();
            return this;
          };
          l.prototype.htmlGetBBox = function() {
            var c2 = this.element;
            return {
              x: c2.offsetLeft,
              y: c2.offsetTop,
              width: c2.offsetWidth,
              height: c2.offsetHeight
            };
          };
          l.prototype.htmlUpdateTransform = function() {
            if (this.added) {
              var c2 = this.renderer, a4 = this.element, l2 = this.translateX || 0, h2 = this.translateY || 0, p = this.x || 0, y = this.y || 0, t = this.textAlign || "left", w = { left: 0, center: 0.5, right: 1 }[t], k = this.styles;
              k = k && k.whiteSpace;
              u(a4, { marginLeft: l2, marginTop: h2 });
              !c2.styledMode && this.shadows && this.shadows.forEach(function(b2) {
                u(b2, { marginLeft: l2 + 1, marginTop: h2 + 1 });
              });
              this.inverted && [].forEach.call(a4.childNodes, function(b2) {
                c2.invertChild(b2, a4);
              });
              if ("SPAN" === a4.tagName) {
                var g = this.rotation, e = this.textWidth && m(this.textWidth), b = [g, t, a4.innerHTML, this.textWidth, this.textAlign].join(), d = void 0;
                d = false;
                if (e !== this.oldTextWidth) {
                  if (this.textPxLength)
                    var r = this.textPxLength;
                  else
                    u(a4, { width: "", whiteSpace: k || "nowrap" }), r = a4.offsetWidth;
                  (e > this.oldTextWidth || r > e) && (/[ \-]/.test(a4.textContent || a4.innerText) || "ellipsis" === a4.style.textOverflow) && (u(a4, { width: r > e || g ? e + "px" : "auto", display: "block", whiteSpace: k || "normal" }), this.oldTextWidth = e, d = true);
                }
                this.hasBoxWidthChanged = d;
                b !== this.cTT && (d = c2.fontMetrics(a4.style.fontSize, a4).b, !n(g) || g === (this.oldRotation || 0) && t === this.oldAlign || this.setSpanRotation(g, w, d), this.getSpanCorrection(!n(g) && this.textPxLength || a4.offsetWidth, d, w, g, t));
                u(a4, { left: p + (this.xCorr || 0) + "px", top: y + (this.yCorr || 0) + "px" });
                this.cTT = b;
                this.oldRotation = g;
                this.oldAlign = t;
              }
            } else
              this.alignOnAdd = true;
          };
          l.prototype.setSpanRotation = function(c2, a4, l2) {
            var f = {}, m2 = C && !/Edge/.test(x.navigator.userAgent) ? "-ms-transform" : F ? "-webkit-transform" : B ? "MozTransform" : x.opera ? "-o-transform" : void 0;
            m2 && (f[m2] = f.transform = "rotate(" + c2 + "deg)", f[m2 + (B ? "Origin" : "-origin")] = f.transformOrigin = 100 * a4 + "% " + l2 + "px", u(this.element, f));
          };
          l.composedClasses = [];
          return l;
        }(q);
      });
      J(a, "Core/Renderer/HTML/HTMLRenderer.js", [a["Core/Renderer/HTML/AST.js"], a["Core/Renderer/SVG/SVGElement.js"], a["Core/Renderer/SVG/SVGRenderer.js"], a["Core/Utilities.js"]], function(a2, q, A, E) {
        var v = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(c, h) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c2, a4) {
              c2.__proto__ = a4;
            } || function(c2, a4) {
              for (var l in a4)
                a4.hasOwnProperty(l) && (c2[l] = a4[l]);
            };
            return a3(c, h);
          };
          return function(c, h) {
            function m() {
              this.constructor = c;
            }
            a3(c, h);
            c.prototype = null === h ? Object.create(h) : (m.prototype = h.prototype, new m());
          };
        }(), C = E.attr, F = E.createElement, x = E.extend, u = E.pick;
        return function(n) {
          function c() {
            return null !== n && n.apply(this, arguments) || this;
          }
          v(c, n);
          c.compose = function(a3) {
            -1 === c.composedClasses.indexOf(a3) && (c.composedClasses.push(a3), a3.prototype.html = c.prototype.html);
            return a3;
          };
          c.prototype.html = function(c2, m, l) {
            var h = this.createElement("span"), f = h.element, n2 = h.renderer, G = n2.isSVG, v2 = function(c3, a3) {
              ["opacity", "visibility"].forEach(function(t) {
                c3[t + "Setter"] = function(f2, k, g) {
                  var e = c3.div ? c3.div.style : a3;
                  q.prototype[t + "Setter"].call(this, f2, k, g);
                  e && (e[k] = f2);
                };
              });
              c3.addedSetters = true;
            };
            h.textSetter = function(c3) {
              c3 !== this.textStr && (delete this.bBox, delete this.oldTextWidth, a2.setElementHTML(this.element, u(c3, "")), this.textStr = c3, h.doTransform = true);
            };
            G && v2(h, h.element.style);
            h.xSetter = h.ySetter = h.alignSetter = h.rotationSetter = function(c3, a3) {
              "align" === a3 ? h.alignValue = h.textAlign = c3 : h[a3] = c3;
              h.doTransform = true;
            };
            h.afterSetters = function() {
              this.doTransform && (this.htmlUpdateTransform(), this.doTransform = false);
            };
            h.attr({ text: c2, x: Math.round(m), y: Math.round(l) }).css({ position: "absolute" });
            n2.styledMode || h.css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize });
            f.style.whiteSpace = "nowrap";
            h.css = h.htmlCss;
            G && (h.add = function(c3) {
              var a3 = n2.box.parentNode, t = [];
              if (this.parentGroup = c3) {
                var w = c3.div;
                if (!w) {
                  for (; c3; )
                    t.push(c3), c3 = c3.parentGroup;
                  t.reverse().forEach(function(k) {
                    function g(b2, e2) {
                      k[e2] = b2;
                      "translateX" === e2 ? d.left = b2 + "px" : d.top = b2 + "px";
                      k.doTransform = true;
                    }
                    var e = C(k.element, "class"), b = k.styles || {};
                    w = k.div = k.div || F("div", e ? { className: e } : void 0, { position: "absolute", left: (k.translateX || 0) + "px", top: (k.translateY || 0) + "px", display: k.display, opacity: k.opacity, cursor: b.cursor, pointerEvents: b.pointerEvents, visibility: k.visibility }, w || a3);
                    var d = w.style;
                    x(k, { classSetter: /* @__PURE__ */ function(b2) {
                      return function(d2) {
                        this.element.setAttribute("class", d2);
                        b2.className = d2;
                      };
                    }(w), on: function() {
                      t[0].div && h.on.apply({
                        element: t[0].div,
                        onEvents: k.onEvents
                      }, arguments);
                      return k;
                    }, translateXSetter: g, translateYSetter: g });
                    k.addedSetters || v2(k);
                  });
                }
              } else
                w = a3;
              w.appendChild(f);
              h.added = true;
              h.alignOnAdd && h.htmlUpdateTransform();
              return h;
            });
            return h;
          };
          c.composedClasses = [];
          return c;
        }(A);
      });
      J(a, "Core/Axis/AxisDefaults.js", [], function() {
        var a2;
        (function(a3) {
          a3.defaultXAxisOptions = {
            alignTicks: true,
            allowDecimals: void 0,
            panningEnabled: true,
            zIndex: 2,
            zoomEnabled: true,
            dateTimeLabelFormats: {
              millisecond: { main: "%H:%M:%S.%L", range: false },
              second: { main: "%H:%M:%S", range: false },
              minute: { main: "%H:%M", range: false },
              hour: { main: "%H:%M", range: false },
              day: { main: "%e. %b" },
              week: { main: "%e. %b" },
              month: { main: "%b '%y" },
              year: { main: "%Y" }
            },
            endOnTick: false,
            gridLineDashStyle: "Solid",
            gridZIndex: 1,
            labels: { autoRotation: void 0, autoRotationLimit: 80, distance: void 0, enabled: true, indentation: 10, overflow: "justify", padding: 5, reserveSpace: void 0, rotation: void 0, staggerLines: 0, step: 0, useHTML: false, x: 0, zIndex: 7, style: { color: "#666666", cursor: "default", fontSize: "11px" } },
            maxPadding: 0.01,
            minorGridLineDashStyle: "Solid",
            minorTickLength: 2,
            minorTickPosition: "outside",
            minPadding: 0.01,
            offset: void 0,
            opposite: false,
            reversed: void 0,
            reversedStacks: false,
            showEmpty: true,
            showFirstLabel: true,
            showLastLabel: true,
            startOfWeek: 1,
            startOnTick: false,
            tickLength: 10,
            tickPixelInterval: 100,
            tickmarkPlacement: "between",
            tickPosition: "outside",
            title: { align: "middle", rotation: 0, useHTML: false, x: 0, y: 0, style: { color: "#666666" } },
            type: "linear",
            uniqueNames: true,
            visible: true,
            minorGridLineColor: "#f2f2f2",
            minorGridLineWidth: 1,
            minorTickColor: "#999999",
            lineColor: "#ccd6eb",
            lineWidth: 1,
            gridLineColor: "#e6e6e6",
            gridLineWidth: void 0,
            tickColor: "#ccd6eb"
          };
          a3.defaultYAxisOptions = { reversedStacks: true, endOnTick: true, maxPadding: 0.05, minPadding: 0.05, tickPixelInterval: 72, showLastLabel: true, labels: { x: -8 }, startOnTick: true, title: { rotation: 270, text: "Values" }, stackLabels: { animation: {}, allowOverlap: false, enabled: false, crop: true, overflow: "justify", formatter: function() {
            var a4 = this.axis.chart.numberFormatter;
            return a4(this.total || 0, -1);
          }, style: { color: "#000000", fontSize: "11px", fontWeight: "bold", textOutline: "1px contrast" } }, gridLineWidth: 1, lineWidth: 0 };
          a3.defaultLeftAxisOptions = { labels: { x: -15 }, title: { rotation: 270 } };
          a3.defaultRightAxisOptions = { labels: { x: 15 }, title: { rotation: 90 } };
          a3.defaultBottomAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } };
          a3.defaultTopAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } };
        })(a2 || (a2 = {}));
        return a2;
      });
      J(a, "Core/Foundation.js", [a["Core/Utilities.js"]], function(a2) {
        var v = a2.addEvent, A = a2.isFunction, E = a2.objectEach, B = a2.removeEvent, C;
        (function(a3) {
          a3.registerEventOptions = function(a4, u) {
            a4.eventOptions = a4.eventOptions || {};
            E(u.events, function(n, c) {
              a4.eventOptions[c] !== n && (a4.eventOptions[c] && (B(a4, c, a4.eventOptions[c]), delete a4.eventOptions[c]), A(n) && (a4.eventOptions[c] = n, v(a4, c, n)));
            });
          };
        })(C || (C = {}));
        return C;
      });
      J(a, "Core/Axis/Tick.js", [a["Core/FormatUtilities.js"], a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, q, A) {
        var v = q.deg2rad, B = A.clamp, C = A.correctFloat, F = A.defined, x = A.destroyObjectProperties, u = A.extend, n = A.fireEvent, c = A.isNumber, h = A.merge, m = A.objectEach, l = A.pick;
        q = function() {
          function p(a3, c2, l2, h2, m2) {
            this.isNewLabel = this.isNew = true;
            this.axis = a3;
            this.pos = c2;
            this.type = l2 || "";
            this.parameters = m2 || {};
            this.tickmarkOffset = this.parameters.tickmarkOffset;
            this.options = this.parameters.options;
            n(this, "init");
            l2 || h2 || this.addLabel();
          }
          p.prototype.addLabel = function() {
            var f = this, h2 = f.axis, m2 = h2.options, p2 = h2.chart, v2 = h2.categories, y = h2.logarithmic, t = h2.names, w = f.pos, k = l(f.options && f.options.labels, m2.labels), g = h2.tickPositions, e = w === g[0], b = w === g[g.length - 1], d = (!k.step || 1 === k.step) && 1 === h2.tickInterval;
            g = g.info;
            var r = f.label, z;
            v2 = this.parameters.category || (v2 ? l(v2[w], t[w], w) : w);
            y && c(v2) && (v2 = C(y.lin2log(v2)));
            if (h2.dateTime)
              if (g) {
                var I = p2.time.resolveDTLFormat(m2.dateTimeLabelFormats[!m2.grid && g.higherRanks[w] || g.unitName]);
                var N = I.main;
              } else
                c(v2) && (N = h2.dateTime.getXDateFormat(v2, m2.dateTimeLabelFormats || {}));
            f.isFirst = e;
            f.isLast = b;
            var P = { axis: h2, chart: p2, dateTimeLabelFormat: N, isFirst: e, isLast: b, pos: w, tick: f, tickPositionInfo: g, value: v2 };
            n(this, "labelFormat", P);
            var O = function(b2) {
              return k.formatter ? k.formatter.call(b2, b2) : k.format ? (b2.text = h2.defaultLabelFormatter.call(b2, b2), a2.format(k.format, b2, p2)) : h2.defaultLabelFormatter.call(b2, b2);
            };
            m2 = O.call(P, P);
            var U = I && I.list;
            f.shortenLabel = U ? function() {
              for (z = 0; z < U.length; z++)
                if (u(P, { dateTimeLabelFormat: U[z] }), r.attr({ text: O.call(P, P) }), r.getBBox().width < h2.getSlotWidth(f) - 2 * k.padding)
                  return;
              r.attr({ text: "" });
            } : void 0;
            d && h2._addedPlotLB && f.moveLabel(m2, k);
            F(r) || f.movedLabel ? r && r.textStr !== m2 && !d && (!r.textWidth || k.style.width || r.styles.width || r.css({ width: null }), r.attr({ text: m2 }), r.textPxLength = r.getBBox().width) : (f.label = r = f.createLabel({ x: 0, y: 0 }, m2, k), f.rotation = 0);
          };
          p.prototype.createLabel = function(a3, c2, l2) {
            var f = this.axis, m2 = f.chart;
            if (a3 = F(c2) && l2.enabled ? m2.renderer.text(c2, a3.x, a3.y, l2.useHTML).add(f.labelGroup) : null)
              m2.styledMode || a3.css(h(l2.style)), a3.textPxLength = a3.getBBox().width;
            return a3;
          };
          p.prototype.destroy = function() {
            x(this, this.axis);
          };
          p.prototype.getPosition = function(a3, c2, l2, h2) {
            var f = this.axis, m2 = f.chart, t = h2 && m2.oldChartHeight || m2.chartHeight;
            a3 = { x: a3 ? C(f.translate(c2 + l2, void 0, void 0, h2) + f.transB) : f.left + f.offset + (f.opposite ? (h2 && m2.oldChartWidth || m2.chartWidth) - f.right - f.left : 0), y: a3 ? t - f.bottom + f.offset - (f.opposite ? f.height : 0) : C(t - f.translate(c2 + l2, void 0, void 0, h2) - f.transB) };
            a3.y = B(a3.y, -1e5, 1e5);
            n(this, "afterGetPosition", { pos: a3 });
            return a3;
          };
          p.prototype.getLabelPosition = function(a3, c2, l2, h2, m2, p2, t, w) {
            var k = this.axis, g = k.transA, e = k.isLinked && k.linkedParent ? k.linkedParent.reversed : k.reversed, b = k.staggerLines, d = k.tickRotCorr || { x: 0, y: 0 }, r = h2 || k.reserveSpaceDefault ? 0 : -k.labelOffset * ("center" === k.labelAlign ? 0.5 : 1), f = {};
            l2 = 0 === k.side ? l2.rotation ? -8 : -l2.getBBox().height : 2 === k.side ? d.y + 8 : Math.cos(l2.rotation * v) * (d.y - l2.getBBox(false, 0).height / 2);
            F(m2.y) && (l2 = 0 === k.side && k.horiz ? m2.y + l2 : m2.y);
            a3 = a3 + m2.x + r + d.x - (p2 && h2 ? p2 * g * (e ? -1 : 1) : 0);
            c2 = c2 + l2 - (p2 && !h2 ? p2 * g * (e ? 1 : -1) : 0);
            b && (h2 = t / (w || 1) % b, k.opposite && (h2 = b - h2 - 1), c2 += k.labelOffset / b * h2);
            f.x = a3;
            f.y = Math.round(c2);
            n(this, "afterGetLabelPosition", { pos: f, tickmarkOffset: p2, index: t });
            return f;
          };
          p.prototype.getLabelSize = function() {
            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
          };
          p.prototype.getMarkPath = function(a3, c2, l2, h2, m2, p2) {
            return p2.crispLine([["M", a3, c2], ["L", a3 + (m2 ? 0 : -l2), c2 + (m2 ? l2 : 0)]], h2);
          };
          p.prototype.handleOverflow = function(a3) {
            var c2 = this.axis, f = c2.options.labels, h2 = a3.x, m2 = c2.chart.chartWidth, p2 = c2.chart.spacing, t = l(c2.labelLeft, Math.min(c2.pos, p2[3]));
            p2 = l(c2.labelRight, Math.max(c2.isRadial ? 0 : c2.pos + c2.len, m2 - p2[1]));
            var w = this.label, k = this.rotation, g = { left: 0, center: 0.5, right: 1 }[c2.labelAlign || w.attr("align")], e = w.getBBox().width, b = c2.getSlotWidth(this), d = {}, r = b, z = 1, I;
            if (k || "justify" !== f.overflow)
              0 > k && h2 - g * e < t ? I = Math.round(h2 / Math.cos(k * v) - t) : 0 < k && h2 + g * e > p2 && (I = Math.round((m2 - h2) / Math.cos(k * v)));
            else if (m2 = h2 + (1 - g) * e, h2 - g * e < t ? r = a3.x + r * (1 - g) - t : m2 > p2 && (r = p2 - a3.x + r * g, z = -1), r = Math.min(b, r), r < b && "center" === c2.labelAlign && (a3.x += z * (b - r - g * (b - Math.min(e, r)))), e > r || c2.autoRotation && (w.styles || {}).width)
              I = r;
            I && (this.shortenLabel ? this.shortenLabel() : (d.width = Math.floor(I) + "px", (f.style || {}).textOverflow || (d.textOverflow = "ellipsis"), w.css(d)));
          };
          p.prototype.moveLabel = function(a3, c2) {
            var f = this, l2 = f.label, h2 = f.axis, p2 = h2.reversed, t = false;
            l2 && l2.textStr === a3 ? (f.movedLabel = l2, t = true, delete f.label) : m(h2.ticks, function(c3) {
              t || c3.isNew || c3 === f || !c3.label || c3.label.textStr !== a3 || (f.movedLabel = c3.label, t = true, c3.labelPos = f.movedLabel.xy, delete c3.label);
            });
            if (!t && (f.labelPos || l2)) {
              var w = f.labelPos || l2.xy;
              l2 = h2.horiz ? p2 ? 0 : h2.width + h2.left : w.x;
              h2 = h2.horiz ? w.y : p2 ? h2.width + h2.left : 0;
              f.movedLabel = f.createLabel({ x: l2, y: h2 }, a3, c2);
              f.movedLabel && f.movedLabel.attr({ opacity: 0 });
            }
          };
          p.prototype.render = function(c2, a3, h2) {
            var f = this.axis, m2 = f.horiz, p2 = this.pos, t = l(this.tickmarkOffset, f.tickmarkOffset);
            p2 = this.getPosition(
              m2,
              p2,
              t,
              a3
            );
            t = p2.x;
            var w = p2.y;
            f = m2 && t === f.pos + f.len || !m2 && w === f.pos ? -1 : 1;
            m2 = l(h2, this.label && this.label.newOpacity, 1);
            h2 = l(h2, 1);
            this.isActive = true;
            this.renderGridLine(a3, h2, f);
            this.renderMark(p2, h2, f);
            this.renderLabel(p2, a3, m2, c2);
            this.isNew = false;
            n(this, "afterRender");
          };
          p.prototype.renderGridLine = function(c2, a3, h2) {
            var f = this.axis, m2 = f.options, p2 = {}, t = this.pos, w = this.type, k = l(this.tickmarkOffset, f.tickmarkOffset), g = f.chart.renderer, e = this.gridLine, b = m2.gridLineWidth, d = m2.gridLineColor, r = m2.gridLineDashStyle;
            "minor" === this.type && (b = m2.minorGridLineWidth, d = m2.minorGridLineColor, r = m2.minorGridLineDashStyle);
            e || (f.chart.styledMode || (p2.stroke = d, p2["stroke-width"] = b || 0, p2.dashstyle = r), w || (p2.zIndex = 1), c2 && (a3 = 0), this.gridLine = e = g.path().attr(p2).addClass("highcharts-" + (w ? w + "-" : "") + "grid-line").add(f.gridGroup));
            if (e && (h2 = f.getPlotLinePath({ value: t + k, lineWidth: e.strokeWidth() * h2, force: "pass", old: c2, acrossPanes: false })))
              e[c2 || this.isNew ? "attr" : "animate"]({ d: h2, opacity: a3 });
          };
          p.prototype.renderMark = function(c2, a3, h2) {
            var f = this.axis, m2 = f.options, p2 = f.chart.renderer, t = this.type, w = f.tickSize(t ? t + "Tick" : "tick"), k = c2.x;
            c2 = c2.y;
            var g = l(m2["minor" !== t ? "tickWidth" : "minorTickWidth"], !t && f.isXAxis ? 1 : 0);
            m2 = m2["minor" !== t ? "tickColor" : "minorTickColor"];
            var e = this.mark, b = !e;
            w && (f.opposite && (w[0] = -w[0]), e || (this.mark = e = p2.path().addClass("highcharts-" + (t ? t + "-" : "") + "tick").add(f.axisGroup), f.chart.styledMode || e.attr({ stroke: m2, "stroke-width": g })), e[b ? "attr" : "animate"]({ d: this.getMarkPath(k, c2, w[0], e.strokeWidth() * h2, f.horiz, p2), opacity: a3 }));
          };
          p.prototype.renderLabel = function(a3, h2, m2, p2) {
            var f = this.axis, y = f.horiz, t = f.options, w = this.label, k = t.labels, g = k.step;
            f = l(this.tickmarkOffset, f.tickmarkOffset);
            var e = a3.x;
            a3 = a3.y;
            var b = true;
            w && c(e) && (w.xy = a3 = this.getLabelPosition(e, a3, w, y, k, f, p2, g), this.isFirst && !this.isLast && !t.showFirstLabel || this.isLast && !this.isFirst && !t.showLastLabel ? b = false : !y || k.step || k.rotation || h2 || 0 === m2 || this.handleOverflow(a3), g && p2 % g && (b = false), b && c(a3.y) ? (a3.opacity = m2, w[this.isNewLabel ? "attr" : "animate"](a3).show(true), this.isNewLabel = false) : (w.hide(), this.isNewLabel = true));
          };
          p.prototype.replaceMovedLabel = function() {
            var a3 = this.label, c2 = this.axis, h2 = c2.reversed;
            if (a3 && !this.isNew) {
              var l2 = c2.horiz ? h2 ? c2.left : c2.width + c2.left : a3.xy.x;
              h2 = c2.horiz ? a3.xy.y : h2 ? c2.width + c2.top : c2.top;
              a3.animate({ x: l2, y: h2, opacity: 0 }, void 0, a3.destroy);
              delete this.label;
            }
            c2.isDirty = true;
            this.label = this.movedLabel;
            delete this.movedLabel;
          };
          return p;
        }();
        "";
        return q;
      });
      J(a, "Core/Axis/Axis.js", [
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/Axis/AxisDefaults.js"],
        a["Core/Color/Color.js"],
        a["Core/Defaults.js"],
        a["Core/Foundation.js"],
        a["Core/Globals.js"],
        a["Core/Axis/Tick.js"],
        a["Core/Utilities.js"]
      ], function(a2, q, A, E, B, C, F, x) {
        var u = a2.animObject, n = E.defaultOptions, c = B.registerEventOptions, h = C.deg2rad, m = x.arrayMax, l = x.arrayMin, p = x.clamp, f = x.correctFloat, D = x.defined, v = x.destroyObjectProperties, H = x.erase, K = x.error, y = x.extend, t = x.fireEvent, w = x.isArray, k = x.isNumber, g = x.isString, e = x.merge, b = x.normalizeTickInterval, d = x.objectEach, r = x.pick, z = x.relativeLength, I = x.removeEvent, N = x.splat, P = x.syncTimeout, O = function(d2, e2) {
          return b(e2, void 0, void 0, r(
            d2.options.allowDecimals,
            0.5 > e2 || void 0 !== d2.tickAmount
          ), !!d2.tickAmount);
        };
        a2 = function() {
          function b2(b3, d2) {
            this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.offset = this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.height = this.hasVisibleSeries = this.hasNames = this.eventOptions = this.coll = this.closestPointRange = this.chart = this.bottom = this.alternateBands = void 0;
            this.init(b3, d2);
          }
          b2.prototype.init = function(b3, d2) {
            var e2 = d2.isX;
            this.chart = b3;
            this.horiz = b3.inverted && !this.isZAxis ? !e2 : e2;
            this.isXAxis = e2;
            this.coll = this.coll || (e2 ? "xAxis" : "yAxis");
            t(
              this,
              "init",
              { userOptions: d2 }
            );
            this.opposite = r(d2.opposite, this.opposite);
            this.side = r(d2.side, this.side, this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
            this.setOptions(d2);
            var g2 = this.options, a3 = g2.labels, f2 = g2.type;
            this.userOptions = d2;
            this.minPixelPadding = 0;
            this.reversed = r(g2.reversed, this.reversed);
            this.visible = g2.visible;
            this.zoomEnabled = g2.zoomEnabled;
            this.hasNames = "category" === f2 || true === g2.categories;
            this.categories = g2.categories || (this.hasNames ? [] : void 0);
            this.names || (this.names = [], this.names.keys = {});
            this.plotLinesAndBandsGroups = {};
            this.positiveValuesOnly = !!this.logarithmic;
            this.isLinked = D(g2.linkedTo);
            this.ticks = {};
            this.labelEdge = [];
            this.minorTicks = {};
            this.plotLinesAndBands = [];
            this.alternateBands = {};
            this.len = 0;
            this.minRange = this.userMinRange = g2.minRange || g2.maxZoom;
            this.range = g2.range;
            this.offset = g2.offset || 0;
            this.min = this.max = null;
            d2 = r(g2.crosshair, N(b3.options.tooltip.crosshairs)[e2 ? 0 : 1]);
            this.crosshair = true === d2 ? {} : d2;
            -1 === b3.axes.indexOf(this) && (e2 ? b3.axes.splice(b3.xAxis.length, 0, this) : b3.axes.push(this), b3[this.coll].push(this));
            this.series = this.series || [];
            b3.inverted && !this.isZAxis && e2 && "undefined" === typeof this.reversed && (this.reversed = true);
            this.labelRotation = k(a3.rotation) ? a3.rotation : void 0;
            c(this, g2);
            t(this, "afterInit");
          };
          b2.prototype.setOptions = function(b3) {
            this.options = e(q.defaultXAxisOptions, "yAxis" === this.coll && q.defaultYAxisOptions, [q.defaultTopAxisOptions, q.defaultRightAxisOptions, q.defaultBottomAxisOptions, q.defaultLeftAxisOptions][this.side], e(n[this.coll], b3));
            t(this, "afterSetOptions", { userOptions: b3 });
          };
          b2.prototype.defaultLabelFormatter = function(b3) {
            var d2 = this.axis;
            b3 = this.chart.numberFormatter;
            var e2 = k(this.value) ? this.value : NaN, g2 = d2.chart.time, r2 = this.dateTimeLabelFormat, a3 = n.lang, c2 = a3.numericSymbols;
            a3 = a3.numericSymbolMagnitude || 1e3;
            var f2 = d2.logarithmic ? Math.abs(e2) : d2.tickInterval, t2 = c2 && c2.length;
            if (d2.categories)
              var z2 = "".concat(this.value);
            else if (r2)
              z2 = g2.dateFormat(r2, e2);
            else if (t2 && 1e3 <= f2)
              for (; t2-- && "undefined" === typeof z2; )
                d2 = Math.pow(a3, t2 + 1), f2 >= d2 && 0 === 10 * e2 % d2 && null !== c2[t2] && 0 !== e2 && (z2 = b3(e2 / d2, -1) + c2[t2]);
            "undefined" === typeof z2 && (z2 = 1e4 <= Math.abs(e2) ? b3(
              e2,
              -1
            ) : b3(e2, -1, void 0, ""));
            return z2;
          };
          b2.prototype.getSeriesExtremes = function() {
            var b3 = this, d2 = b3.chart, e2;
            t(this, "getSeriesExtremes", null, function() {
              b3.hasVisibleSeries = false;
              b3.dataMin = b3.dataMax = b3.threshold = null;
              b3.softThreshold = !b3.isXAxis;
              b3.series.forEach(function(g2) {
                if (g2.visible || !d2.options.chart.ignoreHiddenSeries) {
                  var a3 = g2.options, c2 = a3.threshold;
                  b3.hasVisibleSeries = true;
                  b3.positiveValuesOnly && 0 >= c2 && (c2 = null);
                  if (b3.isXAxis) {
                    if (a3 = g2.xData, a3.length) {
                      a3 = b3.logarithmic ? a3.filter(b3.validatePositiveValue) : a3;
                      e2 = g2.getXExtremes(a3);
                      var f2 = e2.min;
                      var t2 = e2.max;
                      k(f2) || f2 instanceof Date || (a3 = a3.filter(k), e2 = g2.getXExtremes(a3), f2 = e2.min, t2 = e2.max);
                      a3.length && (b3.dataMin = Math.min(r(b3.dataMin, f2), f2), b3.dataMax = Math.max(r(b3.dataMax, t2), t2));
                    }
                  } else if (g2 = g2.applyExtremes(), k(g2.dataMin) && (f2 = g2.dataMin, b3.dataMin = Math.min(r(b3.dataMin, f2), f2)), k(g2.dataMax) && (t2 = g2.dataMax, b3.dataMax = Math.max(r(b3.dataMax, t2), t2)), D(c2) && (b3.threshold = c2), !a3.softThreshold || b3.positiveValuesOnly)
                    b3.softThreshold = false;
                }
              });
            });
            t(this, "afterGetSeriesExtremes");
          };
          b2.prototype.translate = function(b3, d2, e2, g2, r2, a3) {
            var c2 = this.linkedParent || this, t2 = g2 && c2.old ? c2.old.min : c2.min;
            if (!k(t2))
              return NaN;
            var z2 = c2.minPixelPadding;
            r2 = (c2.isOrdinal || c2.brokenAxis && c2.brokenAxis.hasBreaks || c2.logarithmic && r2) && c2.lin2val;
            var h2 = 1, l2 = 0;
            g2 = g2 && c2.old ? c2.old.transA : c2.transA;
            g2 || (g2 = c2.transA);
            e2 && (h2 *= -1, l2 = c2.len);
            c2.reversed && (h2 *= -1, l2 -= h2 * (c2.sector || c2.len));
            d2 ? (a3 = (b3 * h2 + l2 - z2) / g2 + t2, r2 && (a3 = c2.lin2val(a3))) : (r2 && (b3 = c2.val2lin(b3)), b3 = h2 * (b3 - t2) * g2, a3 = (c2.isRadial ? b3 : f(b3)) + l2 + h2 * z2 + (k(a3) ? g2 * a3 : 0));
            return a3;
          };
          b2.prototype.toPixels = function(b3, d2) {
            return this.translate(
              b3,
              false,
              !this.horiz,
              void 0,
              true
            ) + (d2 ? 0 : this.pos);
          };
          b2.prototype.toValue = function(b3, d2) {
            return this.translate(b3 - (d2 ? 0 : this.pos), true, !this.horiz, void 0, true);
          };
          b2.prototype.getPlotLinePath = function(b3) {
            function d2(b4, d3, e3) {
              "pass" !== I2 && (b4 < d3 || b4 > e3) && (I2 ? b4 = p(b4, d3, e3) : P2 = true);
              return b4;
            }
            var e2 = this, g2 = e2.chart, a3 = e2.left, c2 = e2.top, f2 = b3.old, z2 = b3.value, h2 = b3.lineWidth, l2 = f2 && g2.oldChartHeight || g2.chartHeight, w2 = f2 && g2.oldChartWidth || g2.chartWidth, m2 = e2.transB, L = b3.translatedValue, I2 = b3.force, y2, n2, N2, u2, P2;
            b3 = {
              value: z2,
              lineWidth: h2,
              old: f2,
              force: I2,
              acrossPanes: b3.acrossPanes,
              translatedValue: L
            };
            t(this, "getPlotLinePath", b3, function(b4) {
              L = r(L, e2.translate(z2, void 0, void 0, f2));
              L = p(L, -1e5, 1e5);
              y2 = N2 = Math.round(L + m2);
              n2 = u2 = Math.round(l2 - L - m2);
              k(L) ? e2.horiz ? (n2 = c2, u2 = l2 - e2.bottom, y2 = N2 = d2(y2, a3, a3 + e2.width)) : (y2 = a3, N2 = w2 - e2.right, n2 = u2 = d2(n2, c2, c2 + e2.height)) : (P2 = true, I2 = false);
              b4.path = P2 && !I2 ? null : g2.renderer.crispLine([["M", y2, n2], ["L", N2, u2]], h2 || 1);
            });
            return b3.path;
          };
          b2.prototype.getLinearTickPositions = function(b3, d2, e2) {
            var g2 = f(Math.floor(d2 / b3) * b3);
            e2 = f(Math.ceil(e2 / b3) * b3);
            var r2 = [], a3;
            f(g2 + b3) === g2 && (a3 = 20);
            if (this.single)
              return [d2];
            for (d2 = g2; d2 <= e2; ) {
              r2.push(d2);
              d2 = f(d2 + b3, a3);
              if (d2 === c2)
                break;
              var c2 = d2;
            }
            return r2;
          };
          b2.prototype.getMinorTickInterval = function() {
            var b3 = this.options;
            return true === b3.minorTicks ? r(b3.minorTickInterval, "auto") : false === b3.minorTicks ? null : b3.minorTickInterval;
          };
          b2.prototype.getMinorTickPositions = function() {
            var b3 = this.options, d2 = this.tickPositions, e2 = this.minorTickInterval, g2 = this.pointRangePadding || 0, r2 = this.min - g2;
            g2 = this.max + g2;
            var a3 = g2 - r2, c2 = [];
            if (a3 && a3 / e2 < this.len / 3) {
              var k2 = this.logarithmic;
              if (k2)
                this.paddedTicks.forEach(function(b4, d3, g3) {
                  d3 && c2.push.apply(
                    c2,
                    k2.getLogTickPositions(e2, g3[d3 - 1], g3[d3], true)
                  );
                });
              else if (this.dateTime && "auto" === this.getMinorTickInterval())
                c2 = c2.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(e2), r2, g2, b3.startOfWeek));
              else
                for (b3 = r2 + (d2[0] - r2) % e2; b3 <= g2 && b3 !== c2[0]; b3 += e2)
                  c2.push(b3);
            }
            0 !== c2.length && this.trimTicks(c2);
            return c2;
          };
          b2.prototype.adjustForMinRange = function() {
            var b3 = this.options, d2 = this.logarithmic, e2 = this.min, g2 = this.max, c2 = 0, a3, k2, f2, t2;
            this.isXAxis && "undefined" === typeof this.minRange && !d2 && (D(b3.min) || D(b3.max) || D(b3.floor) || D(b3.ceiling) ? this.minRange = null : (this.series.forEach(function(b4) {
              f2 = b4.xData;
              t2 = b4.xIncrement ? 1 : f2.length - 1;
              if (1 < f2.length) {
                for (a3 = t2; 0 < a3; a3--)
                  if (k2 = f2[a3] - f2[a3 - 1], !c2 || k2 < c2)
                    c2 = k2;
              }
            }), this.minRange = Math.min(5 * c2, this.dataMax - this.dataMin)));
            if (g2 - e2 < this.minRange) {
              var z2 = this.dataMax - this.dataMin >= this.minRange;
              var h2 = this.minRange;
              var w2 = (h2 - g2 + e2) / 2;
              w2 = [e2 - w2, r(b3.min, e2 - w2)];
              z2 && (w2[2] = this.logarithmic ? this.logarithmic.log2lin(this.dataMin) : this.dataMin);
              e2 = m(w2);
              g2 = [e2 + h2, r(b3.max, e2 + h2)];
              z2 && (g2[2] = d2 ? d2.log2lin(this.dataMax) : this.dataMax);
              g2 = l(g2);
              g2 - e2 < h2 && (w2[0] = g2 - h2, w2[1] = r(b3.min, g2 - h2), e2 = m(w2));
            }
            this.min = e2;
            this.max = g2;
          };
          b2.prototype.getClosest = function() {
            var b3;
            this.categories ? b3 = 1 : this.series.forEach(function(d2) {
              var e2 = d2.closestPointRange, g2 = d2.visible || !d2.chart.options.chart.ignoreHiddenSeries;
              !d2.noSharedTooltip && D(e2) && g2 && (b3 = D(b3) ? Math.min(b3, e2) : e2);
            });
            return b3;
          };
          b2.prototype.nameToX = function(b3) {
            var d2 = w(this.options.categories), e2 = d2 ? this.categories : this.names, g2 = b3.options.x;
            b3.series.requireSorting = false;
            D(g2) || (g2 = this.options.uniqueNames && e2 ? d2 ? e2.indexOf(b3.name) : r(
              e2.keys[b3.name],
              -1
            ) : b3.series.autoIncrement());
            if (-1 === g2) {
              if (!d2 && e2)
                var c2 = e2.length;
            } else
              c2 = g2;
            "undefined" !== typeof c2 ? (this.names[c2] = b3.name, this.names.keys[b3.name] = c2) : b3.x && (c2 = b3.x);
            return c2;
          };
          b2.prototype.updateNames = function() {
            var b3 = this, d2 = this.names;
            0 < d2.length && (Object.keys(d2.keys).forEach(function(b4) {
              delete d2.keys[b4];
            }), d2.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function(d3) {
              d3.xIncrement = null;
              if (!d3.points || d3.isDirtyData)
                b3.max = Math.max(b3.max, d3.xData.length - 1), d3.processData(), d3.generatePoints();
              d3.data.forEach(function(e2, g2) {
                if (e2 && e2.options && "undefined" !== typeof e2.name) {
                  var r2 = b3.nameToX(e2);
                  "undefined" !== typeof r2 && r2 !== e2.x && (e2.x = r2, d3.xData[g2] = r2);
                }
              });
            }));
          };
          b2.prototype.setAxisTranslation = function() {
            var b3 = this, d2 = b3.max - b3.min, e2 = b3.linkedParent, c2 = !!b3.categories, a3 = b3.isXAxis, k2 = b3.axisPointRange || 0, f2 = 0, z2 = 0, h2 = b3.transA;
            if (a3 || c2 || k2) {
              var l2 = b3.getClosest();
              e2 ? (f2 = e2.minPointOffset, z2 = e2.pointRangePadding) : b3.series.forEach(function(d3) {
                var e3 = c2 ? 1 : a3 ? r(d3.options.pointRange, l2, 0) : b3.axisPointRange || 0, t2 = d3.options.pointPlacement;
                k2 = Math.max(k2, e3);
                if (!b3.single || c2)
                  d3 = d3.is("xrange") ? !a3 : a3, f2 = Math.max(f2, d3 && g(t2) ? 0 : e3 / 2), z2 = Math.max(z2, d3 && "on" === t2 ? 0 : e3);
              });
              e2 = b3.ordinal && b3.ordinal.slope && l2 ? b3.ordinal.slope / l2 : 1;
              b3.minPointOffset = f2 *= e2;
              b3.pointRangePadding = z2 *= e2;
              b3.pointRange = Math.min(k2, b3.single && c2 ? 1 : d2);
              a3 && (b3.closestPointRange = l2);
            }
            b3.translationSlope = b3.transA = h2 = b3.staticScale || b3.len / (d2 + z2 || 1);
            b3.transB = b3.horiz ? b3.left : b3.bottom;
            b3.minPixelPadding = h2 * f2;
            t(this, "afterSetAxisTranslation");
          };
          b2.prototype.minFromRange = function() {
            return this.max - this.range;
          };
          b2.prototype.setTickInterval = function(b3) {
            var d2 = this.chart, e2 = this.logarithmic, g2 = this.options, c2 = this.isXAxis, a3 = this.isLinked, z2 = g2.tickPixelInterval, h2 = this.categories, l2 = this.softThreshold, w2 = g2.maxPadding, m2 = g2.minPadding, I2 = k(g2.tickInterval) && 0 <= g2.tickInterval ? g2.tickInterval : void 0, L = k(this.threshold) ? this.threshold : null;
            this.dateTime || h2 || a3 || this.getTickAmount();
            var p2 = r(this.userMin, g2.min);
            var y2 = r(this.userMax, g2.max);
            if (a3) {
              this.linkedParent = d2[this.coll][g2.linkedTo];
              var n2 = this.linkedParent.getExtremes();
              this.min = r(n2.min, n2.dataMin);
              this.max = r(n2.max, n2.dataMax);
              g2.type !== this.linkedParent.options.type && K(11, 1, d2);
            } else {
              if (l2 && D(L)) {
                if (this.dataMin >= L)
                  n2 = L, m2 = 0;
                else if (this.dataMax <= L) {
                  var N2 = L;
                  w2 = 0;
                }
              }
              this.min = r(p2, n2, this.dataMin);
              this.max = r(y2, N2, this.dataMax);
            }
            e2 && (this.positiveValuesOnly && !b3 && 0 >= Math.min(this.min, r(this.dataMin, this.min)) && K(10, 1, d2), this.min = f(e2.log2lin(this.min), 16), this.max = f(e2.log2lin(this.max), 16));
            this.range && D(this.max) && (this.userMin = this.min = p2 = Math.max(this.dataMin, this.minFromRange()), this.userMax = y2 = this.max, this.range = null);
            t(this, "foundExtremes");
            this.beforePadding && this.beforePadding();
            this.adjustForMinRange();
            !(h2 || this.axisPointRange || this.stacking && this.stacking.usePercentage || a3) && D(this.min) && D(this.max) && (d2 = this.max - this.min) && (!D(p2) && m2 && (this.min -= d2 * m2), !D(y2) && w2 && (this.max += d2 * w2));
            k(this.userMin) || (k(g2.softMin) && g2.softMin < this.min && (this.min = p2 = g2.softMin), k(g2.floor) && (this.min = Math.max(this.min, g2.floor)));
            k(this.userMax) || (k(g2.softMax) && g2.softMax > this.max && (this.max = y2 = g2.softMax), k(g2.ceiling) && (this.max = Math.min(
              this.max,
              g2.ceiling
            )));
            l2 && D(this.dataMin) && (L = L || 0, !D(p2) && this.min < L && this.dataMin >= L ? this.min = this.options.minRange ? Math.min(L, this.max - this.minRange) : L : !D(y2) && this.max > L && this.dataMax <= L && (this.max = this.options.minRange ? Math.max(L, this.min + this.minRange) : L));
            k(this.min) && k(this.max) && !this.chart.polar && this.min > this.max && (D(this.options.min) ? this.max = this.min : D(this.options.max) && (this.min = this.max));
            this.tickInterval = this.min === this.max || "undefined" === typeof this.min || "undefined" === typeof this.max ? 1 : a3 && this.linkedParent && !I2 && z2 === this.linkedParent.options.tickPixelInterval ? I2 = this.linkedParent.tickInterval : r(I2, this.tickAmount ? (this.max - this.min) / Math.max(this.tickAmount - 1, 1) : void 0, h2 ? 1 : (this.max - this.min) * z2 / Math.max(this.len, z2));
            if (c2 && !b3) {
              var u2 = this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max);
              this.series.forEach(function(b4) {
                b4.forceCrop = b4.forceCropping && b4.forceCropping();
                b4.processData(u2);
              });
              t(this, "postProcessData", { hasExtremesChanged: u2 });
            }
            this.setAxisTranslation();
            t(this, "initialAxisTranslation");
            this.pointRange && !I2 && (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
            b3 = r(g2.minTickInterval, this.dateTime && !this.series.some(function(b4) {
              return b4.noSharedTooltip;
            }) ? this.closestPointRange : 0);
            !I2 && this.tickInterval < b3 && (this.tickInterval = b3);
            this.dateTime || this.logarithmic || I2 || (this.tickInterval = O(this, this.tickInterval));
            this.tickAmount || (this.tickInterval = this.unsquish());
            this.setTickPositions();
          };
          b2.prototype.setTickPositions = function() {
            var b3 = this.options, d2 = b3.tickPositions, e2 = b3.tickPositioner, g2 = this.getMinorTickInterval(), r2 = this.hasVerticalPanning(), c2 = "colorAxis" === this.coll, a3 = (c2 || !r2) && b3.startOnTick;
            r2 = (c2 || !r2) && b3.endOnTick;
            c2 = [];
            var f2;
            this.tickmarkOffset = this.categories && "between" === b3.tickmarkPlacement && 1 === this.tickInterval ? 0.5 : 0;
            this.minorTickInterval = "auto" === g2 && this.tickInterval ? this.tickInterval / 5 : g2;
            this.single = this.min === this.max && D(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || false !== b3.allowDecimals);
            if (d2)
              c2 = d2.slice();
            else if (k(this.min) && k(this.max)) {
              if (this.ordinal && this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)))
                if (this.dateTime)
                  c2 = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, b3.units), this.min, this.max, b3.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, true);
                else if (this.logarithmic)
                  c2 = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
                else
                  for (g2 = b3 = this.tickInterval; g2 <= 2 * b3; )
                    if (c2 = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && c2.length > this.tickAmount)
                      this.tickInterval = O(this, g2 *= 1.1);
                    else
                      break;
              else
                c2 = [this.min, this.max], K(19, false, this.chart);
              c2.length > this.len && (c2 = [c2[0], c2[c2.length - 1]], c2[0] === c2[1] && (c2.length = 1));
              e2 && (this.tickPositions = c2, (f2 = e2.apply(this, [this.min, this.max])) && (c2 = f2));
            }
            this.tickPositions = c2;
            this.paddedTicks = c2.slice(0);
            this.trimTicks(c2, a3, r2);
            !this.isLinked && k(this.min) && k(this.max) && (this.single && 2 > c2.length && !this.categories && !this.series.some(function(b4) {
              return b4.is("heatmap") && "between" === b4.options.pointPlacement;
            }) && (this.min -= 0.5, this.max += 0.5), d2 || f2 || this.adjustTickAmount());
            t(this, "afterSetTickPositions");
          };
          b2.prototype.trimTicks = function(b3, d2, e2) {
            var g2 = b3[0], r2 = b3[b3.length - 1], c2 = !this.isOrdinal && this.minPointOffset || 0;
            t(this, "trimTicks");
            if (!this.isLinked) {
              if (d2 && -Infinity !== g2)
                this.min = g2;
              else
                for (; this.min - c2 > b3[0]; )
                  b3.shift();
              if (e2)
                this.max = r2;
              else
                for (; this.max + c2 < b3[b3.length - 1]; )
                  b3.pop();
              0 === b3.length && D(g2) && !this.options.tickPositions && b3.push((r2 + g2) / 2);
            }
          };
          b2.prototype.alignToOthers = function() {
            var b3 = this, d2 = [this], e2 = b3.options, g2 = "yAxis" === this.coll && this.chart.options.chart.alignThresholds, r2 = [], c2;
            b3.thresholdAlignment = void 0;
            if ((false !== this.chart.options.chart.alignTicks && e2.alignTicks || g2) && false !== e2.startOnTick && false !== e2.endOnTick && !b3.logarithmic) {
              var a3 = function(b4) {
                var d3 = b4.options;
                return [b4.horiz ? d3.left : d3.top, d3.width, d3.height, d3.pane].join();
              }, f2 = a3(this);
              this.chart[this.coll].forEach(function(e3) {
                var g3 = e3.series;
                g3.length && g3.some(function(b4) {
                  return b4.visible;
                }) && e3 !== b3 && a3(e3) === f2 && (c2 = true, d2.push(e3));
              });
            }
            if (c2 && g2) {
              d2.forEach(function(d3) {
                d3 = d3.getThresholdAlignment(b3);
                k(d3) && r2.push(d3);
              });
              var t2 = 1 < r2.length ? r2.reduce(function(b4, d3) {
                return b4 + d3;
              }, 0) / r2.length : void 0;
              d2.forEach(function(b4) {
                b4.thresholdAlignment = t2;
              });
            }
            return c2;
          };
          b2.prototype.getThresholdAlignment = function(b3) {
            (!k(this.dataMin) || this !== b3 && this.series.some(function(b4) {
              return b4.isDirty || b4.isDirtyData;
            })) && this.getSeriesExtremes();
            if (k(this.threshold))
              return b3 = p((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1), this.options.reversed && (b3 = 1 - b3), b3;
          };
          b2.prototype.getTickAmount = function() {
            var b3 = this.options, d2 = b3.tickPixelInterval, e2 = b3.tickAmount;
            !D(b3.tickInterval) && !e2 && this.len < d2 && !this.isRadial && !this.logarithmic && b3.startOnTick && b3.endOnTick && (e2 = 2);
            !e2 && this.alignToOthers() && (e2 = Math.ceil(this.len / d2) + 1);
            4 > e2 && (this.finalTickAmt = e2, e2 = 5);
            this.tickAmount = e2;
          };
          b2.prototype.adjustTickAmount = function() {
            var b3 = this, d2 = b3.finalTickAmt, e2 = b3.max, g2 = b3.min, c2 = b3.options, a3 = b3.tickPositions, t2 = b3.tickAmount, z2 = b3.thresholdAlignment, h2 = a3 && a3.length, l2 = r(b3.threshold, b3.softThreshold ? 0 : null);
            var w2 = b3.tickInterval;
            if (k(z2)) {
              var m2 = 0.5 > z2 ? Math.ceil(z2 * (t2 - 1)) : Math.floor(z2 * (t2 - 1));
              c2.reversed && (m2 = t2 - 1 - m2);
            }
            if (b3.hasData() && k(g2) && k(e2)) {
              z2 = function() {
                b3.transA *= (h2 - 1) / (t2 - 1);
                b3.min = c2.startOnTick ? a3[0] : Math.min(g2, a3[0]);
                b3.max = c2.endOnTick ? a3[a3.length - 1] : Math.max(e2, a3[a3.length - 1]);
              };
              if (k(m2) && k(b3.threshold)) {
                for (; a3[m2] !== l2 || a3.length !== t2 || a3[0] > g2 || a3[a3.length - 1] < e2; ) {
                  a3.length = 0;
                  for (a3.push(b3.threshold); a3.length < t2; )
                    void 0 === a3[m2] || a3[m2] > b3.threshold ? a3.unshift(f(a3[0] - w2)) : a3.push(f(a3[a3.length - 1] + w2));
                  if (w2 > 8 * b3.tickInterval)
                    break;
                  w2 *= 2;
                }
                z2();
              } else if (h2 < t2) {
                for (; a3.length < t2; )
                  a3.length % 2 || g2 === l2 ? a3.push(f(a3[a3.length - 1] + w2)) : a3.unshift(f(a3[0] - w2));
                z2();
              }
              if (D(d2)) {
                for (w2 = l2 = a3.length; w2--; )
                  (3 === d2 && 1 === w2 % 2 || 2 >= d2 && 0 < w2 && w2 < l2 - 1) && a3.splice(w2, 1);
                b3.finalTickAmt = void 0;
              }
            }
          };
          b2.prototype.setScale = function() {
            var b3 = false, d2 = false;
            this.series.forEach(function(e3) {
              b3 = b3 || e3.isDirtyData || e3.isDirty;
              d2 = d2 || e3.xAxis && e3.xAxis.isDirty || false;
            });
            this.setAxisSize();
            var e2 = this.len !== (this.old && this.old.len);
            e2 || b3 || d2 || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (this.stacking && (this.stacking.resetStacks(), this.stacking.buildStacks()), this.forceRedraw = false, this.getSeriesExtremes(), this.setTickInterval(), this.isDirty || (this.isDirty = e2 || this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max))) : this.stacking && this.stacking.cleanStacks();
            b3 && this.panningState && (this.panningState.isDirty = true);
            t(this, "afterSetScale");
          };
          b2.prototype.setExtremes = function(b3, d2, e2, g2, c2) {
            var a3 = this, k2 = a3.chart;
            e2 = r(e2, true);
            a3.series.forEach(function(b4) {
              delete b4.kdTree;
            });
            c2 = y(c2, {
              min: b3,
              max: d2
            });
            t(a3, "setExtremes", c2, function() {
              a3.userMin = b3;
              a3.userMax = d2;
              a3.eventArgs = c2;
              e2 && k2.redraw(g2);
            });
          };
          b2.prototype.zoom = function(b3, d2) {
            var e2 = this, g2 = this.dataMin, c2 = this.dataMax, a3 = this.options, k2 = Math.min(g2, r(a3.min, g2)), f2 = Math.max(c2, r(a3.max, c2));
            b3 = { newMin: b3, newMax: d2 };
            t(this, "zoom", b3, function(b4) {
              var d3 = b4.newMin, r2 = b4.newMax;
              if (d3 !== e2.min || r2 !== e2.max)
                e2.allowZoomOutside || (D(g2) && (d3 < k2 && (d3 = k2), d3 > f2 && (d3 = f2)), D(c2) && (r2 < k2 && (r2 = k2), r2 > f2 && (r2 = f2))), e2.displayBtn = "undefined" !== typeof d3 || "undefined" !== typeof r2, e2.setExtremes(
                  d3,
                  r2,
                  false,
                  void 0,
                  { trigger: "zoom" }
                );
              b4.zoomed = true;
            });
            return b3.zoomed;
          };
          b2.prototype.setAxisSize = function() {
            var b3 = this.chart, d2 = this.options, e2 = d2.offsets || [0, 0, 0, 0], g2 = this.horiz, c2 = this.width = Math.round(z(r(d2.width, b3.plotWidth - e2[3] + e2[1]), b3.plotWidth)), a3 = this.height = Math.round(z(r(d2.height, b3.plotHeight - e2[0] + e2[2]), b3.plotHeight)), k2 = this.top = Math.round(z(r(d2.top, b3.plotTop + e2[0]), b3.plotHeight, b3.plotTop));
            d2 = this.left = Math.round(z(r(d2.left, b3.plotLeft + e2[3]), b3.plotWidth, b3.plotLeft));
            this.bottom = b3.chartHeight - a3 - k2;
            this.right = b3.chartWidth - c2 - d2;
            this.len = Math.max(g2 ? c2 : a3, 0);
            this.pos = g2 ? d2 : k2;
          };
          b2.prototype.getExtremes = function() {
            var b3 = this.logarithmic;
            return { min: b3 ? f(b3.lin2log(this.min)) : this.min, max: b3 ? f(b3.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax };
          };
          b2.prototype.getThreshold = function(b3) {
            var d2 = this.logarithmic, e2 = d2 ? d2.lin2log(this.min) : this.min;
            d2 = d2 ? d2.lin2log(this.max) : this.max;
            null === b3 || -Infinity === b3 ? b3 = e2 : Infinity === b3 ? b3 = d2 : e2 > b3 ? b3 = e2 : d2 < b3 && (b3 = d2);
            return this.translate(b3, 0, 1, 0, 1);
          };
          b2.prototype.autoLabelAlign = function(b3) {
            var d2 = (r(b3, 0) - 90 * this.side + 720) % 360;
            b3 = { align: "center" };
            t(this, "autoLabelAlign", b3, function(b4) {
              15 < d2 && 165 > d2 ? b4.align = "right" : 195 < d2 && 345 > d2 && (b4.align = "left");
            });
            return b3.align;
          };
          b2.prototype.tickSize = function(b3) {
            var d2 = this.options, e2 = r(d2["tick" === b3 ? "tickWidth" : "minorTickWidth"], "tick" === b3 && this.isXAxis && !this.categories ? 1 : 0), g2 = d2["tick" === b3 ? "tickLength" : "minorTickLength"];
            if (e2 && g2) {
              "inside" === d2[b3 + "Position"] && (g2 = -g2);
              var c2 = [g2, e2];
            }
            b3 = { tickSize: c2 };
            t(this, "afterTickSize", b3);
            return b3.tickSize;
          };
          b2.prototype.labelMetrics = function() {
            var b3 = this.tickPositions && this.tickPositions[0] || 0;
            return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize, this.ticks[b3] && this.ticks[b3].label);
          };
          b2.prototype.unsquish = function() {
            var b3 = this.options.labels, d2 = this.horiz, e2 = this.tickInterval, g2 = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / e2), c2 = b3.rotation, a3 = this.labelMetrics(), t2 = Math.max(this.max - this.min, 0), z2 = function(b4) {
              var d3 = b4 / (g2 || 1);
              d3 = 1 < d3 ? Math.ceil(d3) : 1;
              d3 * e2 > t2 && Infinity !== b4 && Infinity !== g2 && t2 && (d3 = Math.ceil(t2 / e2));
              return f(d3 * e2);
            }, w2 = e2, l2 = Number.MAX_VALUE;
            if (d2) {
              if (!b3.staggerLines)
                if (k(c2))
                  var m2 = [c2];
                else
                  g2 < b3.autoRotationLimit && (m2 = b3.autoRotation);
              if (m2)
                for (var I2 = d2 = void 0, p2 = 0, y2 = m2; p2 < y2.length; p2++) {
                  var n2 = y2[p2];
                  if (n2 === c2 || n2 && -90 <= n2 && 90 >= n2) {
                    if (d2 = z2(Math.abs(a3.h / Math.sin(h * n2))), I2 = d2 + Math.abs(n2 / 360), I2 < l2) {
                      l2 = I2;
                      var N2 = n2;
                      w2 = d2;
                    }
                  }
                }
            } else
              w2 = z2(a3.h);
            this.autoRotation = m2;
            this.labelRotation = r(N2, k(c2) ? c2 : 0);
            return b3.step ? e2 : w2;
          };
          b2.prototype.getSlotWidth = function(b3) {
            var d2 = this.chart, e2 = this.horiz, g2 = this.options.labels, r2 = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), c2 = d2.margin[3];
            if (b3 && k(b3.slotWidth))
              return b3.slotWidth;
            if (e2 && 2 > g2.step)
              return g2.rotation ? 0 : (this.staggerLines || 1) * this.len / r2;
            if (!e2) {
              b3 = g2.style.width;
              if (void 0 !== b3)
                return parseInt(String(b3), 10);
              if (c2)
                return c2 - d2.spacing[3];
            }
            return 0.33 * d2.chartWidth;
          };
          b2.prototype.renderUnsquish = function() {
            var b3 = this.chart, d2 = b3.renderer, e2 = this.tickPositions, r2 = this.ticks, c2 = this.options.labels, a3 = c2.style, k2 = this.horiz, f2 = this.getSlotWidth(), t2 = Math.max(1, Math.round(f2 - 2 * c2.padding)), z2 = {}, h2 = this.labelMetrics(), w2 = a3.textOverflow, l2 = 0;
            g(c2.rotation) || (z2.rotation = c2.rotation || 0);
            e2.forEach(function(b4) {
              b4 = r2[b4];
              b4.movedLabel && b4.replaceMovedLabel();
              b4 && b4.label && b4.label.textPxLength > l2 && (l2 = b4.label.textPxLength);
            });
            this.maxLabelLength = l2;
            if (this.autoRotation)
              l2 > t2 && l2 > h2.h ? z2.rotation = this.labelRotation : this.labelRotation = 0;
            else if (f2) {
              var m2 = t2;
              if (!w2) {
                var I2 = "clip";
                for (t2 = e2.length; !k2 && t2--; ) {
                  var p2 = e2[t2];
                  if (p2 = r2[p2].label)
                    p2.styles && "ellipsis" === p2.styles.textOverflow ? p2.css({ textOverflow: "clip" }) : p2.textPxLength > f2 && p2.css({ width: f2 + "px" }), p2.getBBox().height > this.len / e2.length - (h2.h - h2.f) && (p2.specificTextOverflow = "ellipsis");
                }
              }
            }
            z2.rotation && (m2 = l2 > 0.5 * b3.chartHeight ? 0.33 * b3.chartHeight : l2, w2 || (I2 = "ellipsis"));
            if (this.labelAlign = c2.align || this.autoLabelAlign(this.labelRotation))
              z2.align = this.labelAlign;
            e2.forEach(function(b4) {
              var d3 = (b4 = r2[b4]) && b4.label, e3 = a3.width, g2 = {};
              d3 && (d3.attr(z2), b4.shortenLabel ? b4.shortenLabel() : m2 && !e3 && "nowrap" !== a3.whiteSpace && (m2 < d3.textPxLength || "SPAN" === d3.element.tagName) ? (g2.width = m2 + "px", w2 || (g2.textOverflow = d3.specificTextOverflow || I2), d3.css(g2)) : d3.styles && d3.styles.width && !g2.width && !e3 && d3.css({ width: null }), delete d3.specificTextOverflow, b4.rotation = z2.rotation);
            }, this);
            this.tickRotCorr = d2.rotCorr(h2.b, this.labelRotation || 0, 0 !== this.side);
          };
          b2.prototype.hasData = function() {
            return this.series.some(function(b3) {
              return b3.hasData();
            }) || this.options.showEmpty && D(this.min) && D(this.max);
          };
          b2.prototype.addTitle = function(b3) {
            var d2 = this.chart.renderer, g2 = this.horiz, r2 = this.opposite, c2 = this.options.title, a3 = this.chart.styledMode, k2;
            this.axisTitle || ((k2 = c2.textAlign) || (k2 = (g2 ? {
              low: "left",
              middle: "center",
              high: "right"
            } : { low: r2 ? "right" : "left", middle: "center", high: r2 ? "left" : "right" })[c2.align]), this.axisTitle = d2.text(c2.text || "", 0, 0, c2.useHTML).attr({ zIndex: 7, rotation: c2.rotation, align: k2 }).addClass("highcharts-axis-title"), a3 || this.axisTitle.css(e(c2.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = true);
            a3 || c2.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" });
            this.axisTitle[b3 ? "show" : "hide"](b3);
          };
          b2.prototype.generateTick = function(b3) {
            var d2 = this.ticks;
            d2[b3] ? d2[b3].addLabel() : d2[b3] = new F(
              this,
              b3
            );
          };
          b2.prototype.getOffset = function() {
            var b3 = this, e2 = this, g2 = e2.chart, c2 = e2.horiz, a3 = e2.options, k2 = e2.side, f2 = e2.ticks, z2 = e2.tickPositions, h2 = e2.coll, w2 = e2.axisParent, l2 = g2.renderer, m2 = g2.inverted && !e2.isZAxis ? [1, 0, 3, 2][k2] : k2, I2 = e2.hasData(), p2 = a3.title, n2 = a3.labels, y2 = g2.axisOffset;
            g2 = g2.clipOffset;
            var N2 = [-1, 1, 1, -1][k2], u2 = a3.className, P2, O2 = 0, v2 = 0, G = 0;
            e2.showAxis = P2 = I2 || a3.showEmpty;
            e2.staggerLines = e2.horiz && n2.staggerLines || void 0;
            if (!e2.axisGroup) {
              var q2 = function(d2, e3, g3) {
                return l2.g(d2).attr({ zIndex: g3 }).addClass("highcharts-".concat(h2.toLowerCase()).concat(
                  e3,
                  " "
                ) + (b3.isRadial ? "highcharts-radial-axis".concat(e3, " ") : "") + (u2 || "")).add(w2);
              };
              e2.gridGroup = q2("grid", "-grid", a3.gridZIndex);
              e2.axisGroup = q2("axis", "", a3.zIndex);
              e2.labelGroup = q2("axis-labels", "-labels", n2.zIndex);
            }
            I2 || e2.isLinked ? (z2.forEach(function(b4) {
              e2.generateTick(b4);
            }), e2.renderUnsquish(), e2.reserveSpaceDefault = 0 === k2 || 2 === k2 || { 1: "left", 3: "right" }[k2] === e2.labelAlign, r(n2.reserveSpace, "center" === e2.labelAlign ? true : null, e2.reserveSpaceDefault) && z2.forEach(function(b4) {
              G = Math.max(f2[b4].getLabelSize(), G);
            }), e2.staggerLines && (G *= e2.staggerLines), e2.labelOffset = G * (e2.opposite ? -1 : 1)) : d(f2, function(b4, d2) {
              b4.destroy();
              delete f2[d2];
            });
            if (p2 && p2.text && false !== p2.enabled && (e2.addTitle(P2), P2 && false !== p2.reserveSpace)) {
              e2.titleOffset = O2 = e2.axisTitle.getBBox()[c2 ? "height" : "width"];
              var U = p2.offset;
              v2 = D(U) ? 0 : r(p2.margin, c2 ? 5 : 10);
            }
            e2.renderLine();
            e2.offset = N2 * r(a3.offset, y2[k2] ? y2[k2] + (a3.margin || 0) : 0);
            e2.tickRotCorr = e2.tickRotCorr || { x: 0, y: 0 };
            p2 = 0 === k2 ? -e2.labelMetrics().h : 2 === k2 ? e2.tickRotCorr.y : 0;
            I2 = Math.abs(G) + v2;
            G && (I2 = I2 - p2 + N2 * (c2 ? r(n2.y, e2.tickRotCorr.y + 8 * N2) : n2.x));
            e2.axisTitleMargin = r(U, I2);
            e2.getMaxLabelDimensions && (e2.maxLabelDimensions = e2.getMaxLabelDimensions(f2, z2));
            "colorAxis" !== h2 && (c2 = this.tickSize("tick"), y2[k2] = Math.max(y2[k2], (e2.axisTitleMargin || 0) + O2 + N2 * e2.offset, I2, z2 && z2.length && c2 ? c2[0] + N2 * e2.offset : 0), a3 = !e2.axisLine || a3.offset ? 0 : 2 * Math.floor(e2.axisLine.strokeWidth() / 2), g2[m2] = Math.max(g2[m2], a3));
            t(this, "afterGetOffset");
          };
          b2.prototype.getLinePath = function(b3) {
            var d2 = this.chart, e2 = this.opposite, g2 = this.offset, c2 = this.horiz, r2 = this.left + (e2 ? this.width : 0) + g2;
            g2 = d2.chartHeight - this.bottom - (e2 ? this.height : 0) + g2;
            e2 && (b3 *= -1);
            return d2.renderer.crispLine([["M", c2 ? this.left : r2, c2 ? g2 : this.top], ["L", c2 ? d2.chartWidth - this.right : r2, c2 ? g2 : d2.chartHeight - this.bottom]], b3);
          };
          b2.prototype.renderLine = function() {
            this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }));
          };
          b2.prototype.getTitlePosition = function() {
            var b3 = this.horiz, d2 = this.left, e2 = this.top, g2 = this.len, c2 = this.options.title, r2 = b3 ? d2 : e2, a3 = this.opposite, k2 = this.offset, f2 = c2.x, z2 = c2.y, h2 = this.axisTitle, w2 = this.chart.renderer.fontMetrics(c2.style.fontSize, h2);
            h2 = h2 ? Math.max(h2.getBBox(false, 0).height - w2.h - 1, 0) : 0;
            g2 = { low: r2 + (b3 ? 0 : g2), middle: r2 + g2 / 2, high: r2 + (b3 ? g2 : 0) }[c2.align];
            d2 = (b3 ? e2 + this.height : d2) + (b3 ? 1 : -1) * (a3 ? -1 : 1) * (this.axisTitleMargin || 0) + [-h2, h2, w2.f, -h2][this.side];
            b3 = { x: b3 ? g2 + f2 : d2 + (a3 ? this.width : 0) + k2 + f2, y: b3 ? d2 + z2 - (a3 ? this.height : 0) + k2 : g2 + z2 };
            t(this, "afterGetTitlePosition", { titlePosition: b3 });
            return b3;
          };
          b2.prototype.renderMinorTick = function(b3, d2) {
            var e2 = this.minorTicks;
            e2[b3] || (e2[b3] = new F(this, b3, "minor"));
            d2 && e2[b3].isNew && e2[b3].render(null, true);
            e2[b3].render(null, false, 1);
          };
          b2.prototype.renderTick = function(b3, d2, e2) {
            var g2 = this.ticks;
            if (!this.isLinked || b3 >= this.min && b3 <= this.max || this.grid && this.grid.isColumn)
              g2[b3] || (g2[b3] = new F(this, b3)), e2 && g2[b3].isNew && g2[b3].render(d2, true, -1), g2[b3].render(d2);
          };
          b2.prototype.render = function() {
            var b3 = this, e2 = b3.chart, g2 = b3.logarithmic, c2 = b3.options, r2 = b3.isLinked, a3 = b3.tickPositions, f2 = b3.axisTitle, z2 = b3.ticks, h2 = b3.minorTicks, w2 = b3.alternateBands, l2 = c2.stackLabels, m2 = c2.alternateGridColor, I2 = b3.tickmarkOffset, p2 = b3.axisLine, n2 = b3.showAxis, y2 = u(e2.renderer.globalAnimation), N2, O2;
            b3.labelEdge.length = 0;
            b3.overlap = false;
            [z2, h2, w2].forEach(function(b4) {
              d(b4, function(b5) {
                b5.isActive = false;
              });
            });
            if (b3.hasData() || r2) {
              var D2 = b3.chart.hasRendered && b3.old && k(b3.old.min);
              b3.minorTickInterval && !b3.categories && b3.getMinorTickPositions().forEach(function(d2) {
                b3.renderMinorTick(d2, D2);
              });
              a3.length && (a3.forEach(function(d2, e3) {
                b3.renderTick(d2, e3, D2);
              }), I2 && (0 === b3.min || b3.single) && (z2[-1] || (z2[-1] = new F(b3, -1, null, true)), z2[-1].render(-1)));
              m2 && a3.forEach(function(d2, c3) {
                O2 = "undefined" !== typeof a3[c3 + 1] ? a3[c3 + 1] + I2 : b3.max - I2;
                0 === c3 % 2 && d2 < b3.max && O2 <= b3.max + (e2.polar ? -I2 : I2) && (w2[d2] || (w2[d2] = new C.PlotLineOrBand(b3)), N2 = d2 + I2, w2[d2].options = { from: g2 ? g2.lin2log(N2) : N2, to: g2 ? g2.lin2log(O2) : O2, color: m2, className: "highcharts-alternate-grid" }, w2[d2].render(), w2[d2].isActive = true);
              });
              b3._addedPlotLB || (b3._addedPlotLB = true, (c2.plotLines || []).concat(c2.plotBands || []).forEach(function(d2) {
                b3.addPlotBandOrLine(d2);
              }));
            }
            [z2, h2, w2].forEach(function(b4) {
              var g3 = [], c3 = y2.duration;
              d(b4, function(b5, d2) {
                b5.isActive || (b5.render(d2, false, 0), b5.isActive = false, g3.push(d2));
              });
              P(function() {
                for (var d2 = g3.length; d2--; )
                  b4[g3[d2]] && !b4[g3[d2]].isActive && (b4[g3[d2]].destroy(), delete b4[g3[d2]]);
              }, b4 !== w2 && e2.hasRendered && c3 ? c3 : 0);
            });
            p2 && (p2[p2.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(p2.strokeWidth()) }), p2.isPlaced = true, p2[n2 ? "show" : "hide"](n2));
            f2 && n2 && (c2 = b3.getTitlePosition(), f2[f2.isNew ? "attr" : "animate"](c2), f2.isNew = false);
            l2 && l2.enabled && b3.stacking && b3.stacking.renderStackTotals();
            b3.old = { len: b3.len, max: b3.max, min: b3.min, transA: b3.transA, userMax: b3.userMax, userMin: b3.userMin };
            b3.isDirty = false;
            t(this, "afterRender");
          };
          b2.prototype.redraw = function() {
            this.visible && (this.render(), this.plotLinesAndBands.forEach(function(b3) {
              b3.render();
            }));
            this.series.forEach(function(b3) {
              b3.isDirty = true;
            });
          };
          b2.prototype.getKeepProps = function() {
            return this.keepProps || b2.keepProps;
          };
          b2.prototype.destroy = function(b3) {
            var e2 = this, g2 = e2.plotLinesAndBands, c2 = this.eventOptions;
            t(this, "destroy", { keepEvents: b3 });
            b3 || I(e2);
            [e2.ticks, e2.minorTicks, e2.alternateBands].forEach(function(b4) {
              v(b4);
            });
            if (g2)
              for (b3 = g2.length; b3--; )
                g2[b3].destroy();
            "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(b4) {
              e2[b4] && (e2[b4] = e2[b4].destroy());
            });
            for (var r2 in e2.plotLinesAndBandsGroups)
              e2.plotLinesAndBandsGroups[r2] = e2.plotLinesAndBandsGroups[r2].destroy();
            d(e2, function(b4, d2) {
              -1 === e2.getKeepProps().indexOf(d2) && delete e2[d2];
            });
            this.eventOptions = c2;
          };
          b2.prototype.drawCrosshair = function(b3, d2) {
            var e2 = this.crosshair, g2 = r(e2 && e2.snap, true), c2 = this.chart, a3, k2 = this.cross;
            t(this, "drawCrosshair", { e: b3, point: d2 });
            b3 || (b3 = this.cross && this.cross.e);
            if (e2 && false !== (D(d2) || !g2)) {
              g2 ? D(d2) && (a3 = r("colorAxis" !== this.coll ? d2.crosshairPos : null, this.isXAxis ? d2.plotX : this.len - d2.plotY)) : a3 = b3 && (this.horiz ? b3.chartX - this.pos : this.len - b3.chartY + this.pos);
              if (D(a3)) {
                var f2 = { value: d2 && (this.isXAxis ? d2.x : r(d2.stackY, d2.y)), translatedValue: a3 };
                c2.polar && y(f2, { isCrosshair: true, chartX: b3 && b3.chartX, chartY: b3 && b3.chartY, point: d2 });
                f2 = this.getPlotLinePath(f2) || null;
              }
              if (!D(f2)) {
                this.hideCrosshair();
                return;
              }
              g2 = this.categories && !this.isRadial;
              k2 || (this.cross = k2 = c2.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (g2 ? "category " : "thin ") + (e2.className || "")).attr({ zIndex: r(e2.zIndex, 2) }).add(), c2.styledMode || (k2.attr({ stroke: e2.color || (g2 ? A.parse("#ccd6eb").setOpacity(0.25).get() : "#cccccc"), "stroke-width": r(e2.width, 1) }).css({ "pointer-events": "none" }), e2.dashStyle && k2.attr({ dashstyle: e2.dashStyle })));
              k2.show().attr({ d: f2 });
              g2 && !e2.width && k2.attr({ "stroke-width": this.transA });
              this.cross.e = b3;
            } else
              this.hideCrosshair();
            t(this, "afterDrawCrosshair", { e: b3, point: d2 });
          };
          b2.prototype.hideCrosshair = function() {
            this.cross && this.cross.hide();
            t(this, "afterHideCrosshair");
          };
          b2.prototype.hasVerticalPanning = function() {
            var b3 = this.chart.options.chart.panning;
            return !!(b3 && b3.enabled && /y/.test(b3.type));
          };
          b2.prototype.validatePositiveValue = function(b3) {
            return k(b3) && 0 < b3;
          };
          b2.prototype.update = function(b3, d2) {
            var g2 = this.chart;
            b3 = e(this.userOptions, b3);
            this.destroy(true);
            this.init(g2, b3);
            g2.isDirtyBox = true;
            r(d2, true) && g2.redraw();
          };
          b2.prototype.remove = function(b3) {
            for (var d2 = this.chart, e2 = this.coll, g2 = this.series, c2 = g2.length; c2--; )
              g2[c2] && g2[c2].remove(false);
            H(d2.axes, this);
            H(d2[e2], this);
            d2[e2].forEach(function(b4, d3) {
              b4.options.index = b4.userOptions.index = d3;
            });
            this.destroy();
            d2.isDirtyBox = true;
            r(b3, true) && d2.redraw();
          };
          b2.prototype.setTitle = function(b3, d2) {
            this.update({ title: b3 }, d2);
          };
          b2.prototype.setCategories = function(b3, d2) {
            this.update({ categories: b3 }, d2);
          };
          b2.defaultOptions = q.defaultXAxisOptions;
          b2.keepProps = "extKey hcEvents names series userMax userMin".split(" ");
          return b2;
        }();
        "";
        return a2;
      });
      J(a, "Core/Axis/DateTimeAxis.js", [a["Core/Utilities.js"]], function(a2) {
        var v = a2.addEvent, A = a2.getMagnitude, E = a2.normalizeTickInterval, B = a2.timeUnits, C;
        (function(a3) {
          function q() {
            return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
          }
          function u(a4) {
            "datetime" !== a4.userOptions.type ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new c(this));
          }
          var n = [];
          a3.compose = function(c2) {
            -1 === n.indexOf(c2) && (n.push(c2), c2.keepProps.push("dateTime"), c2.prototype.getTimeTicks = q, v(c2, "init", u));
            return c2;
          };
          var c = function() {
            function c2(c3) {
              this.axis = c3;
            }
            c2.prototype.normalizeTimeTickInterval = function(c3, a4) {
              var h = a4 || [["millisecond", [
                1,
                2,
                5,
                10,
                20,
                25,
                50,
                100,
                200,
                500
              ]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];
              a4 = h[h.length - 1];
              var f = B[a4[0]], l = a4[1], m;
              for (m = 0; m < h.length && !(a4 = h[m], f = B[a4[0]], l = a4[1], h[m + 1] && c3 <= (f * l[l.length - 1] + B[h[m + 1][0]]) / 2); m++)
                ;
              f === B.year && c3 < 5 * f && (l = [1, 2, 5]);
              c3 = E(c3 / f, l, "year" === a4[0] ? Math.max(A(c3 / f), 1) : 1);
              return { unitRange: f, count: c3, unitName: a4[0] };
            };
            c2.prototype.getXDateFormat = function(c3, a4) {
              var h = this.axis, f = h.chart.time;
              return h.closestPointRange ? f.getDateFormat(h.closestPointRange, c3, h.options.startOfWeek, a4) || f.resolveDTLFormat(a4.year).main : f.resolveDTLFormat(a4.day).main;
            };
            return c2;
          }();
          a3.Additions = c;
        })(C || (C = {}));
        return C;
      });
      J(a, "Core/Axis/LogarithmicAxis.js", [a["Core/Utilities.js"]], function(a2) {
        var v = a2.addEvent, A = a2.normalizeTickInterval, E = a2.pick, B;
        (function(a3) {
          function q(c) {
            var a4 = this.logarithmic;
            "logarithmic" !== c.userOptions.type ? this.logarithmic = void 0 : a4 || (this.logarithmic = new n(this));
          }
          function x() {
            var c = this.logarithmic;
            c && (this.lin2val = function(a4) {
              return c.lin2log(a4);
            }, this.val2lin = function(a4) {
              return c.log2lin(a4);
            });
          }
          var u = [];
          a3.compose = function(c) {
            -1 === u.indexOf(c) && (u.push(c), c.keepProps.push("logarithmic"), v(c, "init", q), v(c, "afterInit", x));
            return c;
          };
          var n = function() {
            function c(c2) {
              this.axis = c2;
            }
            c.prototype.getLogTickPositions = function(c2, a4, l, p) {
              var f = this.axis, h = f.len, m = f.options, n2 = [];
              p || (this.minorAutoInterval = void 0);
              if (0.5 <= c2)
                c2 = Math.round(c2), n2 = f.getLinearTickPositions(c2, a4, l);
              else if (0.08 <= c2) {
                var u2 = Math.floor(a4), y, t = m = void 0;
                for (h = 0.3 < c2 ? [1, 2, 4] : 0.15 < c2 ? [1, 2, 4, 6, 8] : [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9
                ]; u2 < l + 1 && !t; u2++) {
                  var w = h.length;
                  for (y = 0; y < w && !t; y++) {
                    var k = this.log2lin(this.lin2log(u2) * h[y]);
                    k > a4 && (!p || m <= l) && "undefined" !== typeof m && n2.push(m);
                    m > l && (t = true);
                    m = k;
                  }
                }
              } else
                a4 = this.lin2log(a4), l = this.lin2log(l), c2 = p ? f.getMinorTickInterval() : m.tickInterval, c2 = E("auto" === c2 ? null : c2, this.minorAutoInterval, m.tickPixelInterval / (p ? 5 : 1) * (l - a4) / ((p ? h / f.tickPositions.length : h) || 1)), c2 = A(c2), n2 = f.getLinearTickPositions(c2, a4, l).map(this.log2lin), p || (this.minorAutoInterval = c2 / 5);
              p || (f.tickInterval = c2);
              return n2;
            };
            c.prototype.lin2log = function(c2) {
              return Math.pow(10, c2);
            };
            c.prototype.log2lin = function(c2) {
              return Math.log(c2) / Math.LN10;
            };
            return c;
          }();
          a3.Additions = n;
        })(B || (B = {}));
        return B;
      });
      J(a, "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js", [a["Core/Utilities.js"]], function(a2) {
        var v = a2.erase, A = a2.extend, E = a2.isNumber, B;
        (function(a3) {
          var q = [], x;
          a3.compose = function(a4, c) {
            x || (x = a4);
            -1 === q.indexOf(c) && (q.push(c), A(c.prototype, u.prototype));
            return c;
          };
          var u = function() {
            function a4() {
            }
            a4.prototype.getPlotBandPath = function(c, a5, m) {
              void 0 === m && (m = this.options);
              var l = this.getPlotLinePath({ value: a5, force: true, acrossPanes: m.acrossPanes }), h = [], f = this.horiz;
              a5 = !E(this.min) || !E(this.max) || c < this.min && a5 < this.min || c > this.max && a5 > this.max;
              c = this.getPlotLinePath({ value: c, force: true, acrossPanes: m.acrossPanes });
              m = 1;
              if (c && l) {
                if (a5) {
                  var n = c.toString() === l.toString();
                  m = 0;
                }
                for (a5 = 0; a5 < c.length; a5 += 2) {
                  var u2 = c[a5], v2 = c[a5 + 1], q2 = l[a5], y = l[a5 + 1];
                  "M" !== u2[0] && "L" !== u2[0] || "M" !== v2[0] && "L" !== v2[0] || "M" !== q2[0] && "L" !== q2[0] || "M" !== y[0] && "L" !== y[0] || (f && q2[1] === u2[1] ? (q2[1] += m, y[1] += m) : f || q2[2] !== u2[2] || (q2[2] += m, y[2] += m), h.push(["M", u2[1], u2[2]], ["L", v2[1], v2[2]], ["L", y[1], y[2]], ["L", q2[1], q2[2]], ["Z"]));
                  h.isFlat = n;
                }
              }
              return h;
            };
            a4.prototype.addPlotBand = function(c) {
              return this.addPlotBandOrLine(c, "plotBands");
            };
            a4.prototype.addPlotLine = function(c) {
              return this.addPlotBandOrLine(c, "plotLines");
            };
            a4.prototype.addPlotBandOrLine = function(c, a5) {
              var h = this, l = this.userOptions, p = new x(this, c);
              this.visible && (p = p.render());
              if (p) {
                this._addedPlotLB || (this._addedPlotLB = true, (l.plotLines || []).concat(l.plotBands || []).forEach(function(a6) {
                  h.addPlotBandOrLine(a6);
                }));
                if (a5) {
                  var f = l[a5] || [];
                  f.push(c);
                  l[a5] = f;
                }
                this.plotLinesAndBands.push(p);
              }
              return p;
            };
            a4.prototype.removePlotBandOrLine = function(a5) {
              var c = this.plotLinesAndBands, m = this.options, l = this.userOptions;
              if (c) {
                for (var p = c.length; p--; )
                  c[p].id === a5 && c[p].destroy();
                [m.plotLines || [], l.plotLines || [], m.plotBands || [], l.plotBands || []].forEach(function(c2) {
                  for (p = c2.length; p--; )
                    (c2[p] || {}).id === a5 && v(c2, c2[p]);
                });
              }
            };
            a4.prototype.removePlotBand = function(c) {
              this.removePlotBandOrLine(c);
            };
            a4.prototype.removePlotLine = function(c) {
              this.removePlotBandOrLine(c);
            };
            return a4;
          }();
        })(B || (B = {}));
        return B;
      });
      J(a, "Core/Axis/PlotLineOrBand/PlotLineOrBand.js", [a["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"], a["Core/Utilities.js"]], function(a2, q) {
        var v = q.arrayMax, E = q.arrayMin, B = q.defined, C = q.destroyObjectProperties, F = q.erase, x = q.fireEvent, u = q.merge, n = q.objectEach, c = q.pick;
        q = function() {
          function h(a3, c2) {
            this.axis = a3;
            c2 && (this.options = c2, this.id = c2.id);
          }
          h.compose = function(c2) {
            return a2.compose(h, c2);
          };
          h.prototype.render = function() {
            x(this, "render");
            var a3 = this, l = a3.axis, h2 = l.horiz, f = l.logarithmic, D = a3.options, v2 = D.color, q2 = c(D.zIndex, 0), K = D.events, y = {}, t = l.chart.renderer, w = D.label, k = a3.label, g = D.to, e = D.from, b = D.value, d = a3.svgElem, r = [], z = B(e) && B(g);
            r = B(b);
            var I = !d, N = { "class": "highcharts-plot-" + (z ? "band " : "line ") + (D.className || "") }, P = z ? "bands" : "lines";
            f && (e = f.log2lin(e), g = f.log2lin(g), b = f.log2lin(b));
            l.chart.styledMode || (r ? (N.stroke = v2 || "#999999", N["stroke-width"] = c(D.width, 1), D.dashStyle && (N.dashstyle = D.dashStyle)) : z && (N.fill = v2 || "#e6ebf5", D.borderWidth && (N.stroke = D.borderColor, N["stroke-width"] = D.borderWidth)));
            y.zIndex = q2;
            P += "-" + q2;
            (f = l.plotLinesAndBandsGroups[P]) || (l.plotLinesAndBandsGroups[P] = f = t.g("plot-" + P).attr(y).add());
            I && (a3.svgElem = d = t.path().attr(N).add(f));
            if (r)
              r = l.getPlotLinePath({ value: b, lineWidth: d.strokeWidth(), acrossPanes: D.acrossPanes });
            else if (z)
              r = l.getPlotBandPath(e, g, D);
            else
              return;
            !a3.eventsAdded && K && (n(K, function(b2, e2) {
              d.on(e2, function(b3) {
                K[e2].apply(a3, [b3]);
              });
            }), a3.eventsAdded = true);
            (I || !d.d) && r && r.length ? d.attr({ d: r }) : d && (r ? (d.show(), d.animate({ d: r })) : d.d && (d.hide(), k && (a3.label = k = k.destroy())));
            w && (B(w.text) || B(w.formatter)) && r && r.length && 0 < l.width && 0 < l.height && !r.isFlat ? (w = u({ align: h2 && z && "center", x: h2 ? !z && 4 : 10, verticalAlign: !h2 && z && "middle", y: h2 ? z ? 16 : 10 : z ? 6 : -4, rotation: h2 && !z && 90 }, w), this.renderLabel(w, r, z, q2)) : k && k.hide();
            return a3;
          };
          h.prototype.renderLabel = function(a3, c2, h2, f) {
            var l = this.axis, m = l.chart.renderer, p = this.label;
            p || (this.label = p = m.text(this.getLabelText(a3), 0, 0, a3.useHTML).attr({ align: a3.textAlign || a3.align, rotation: a3.rotation, "class": "highcharts-plot-" + (h2 ? "band" : "line") + "-label " + (a3.className || ""), zIndex: f }).add(), l.chart.styledMode || p.css(u({ textOverflow: "ellipsis" }, a3.style)));
            f = c2.xBounds || [c2[0][1], c2[1][1], h2 ? c2[2][1] : c2[0][1]];
            c2 = c2.yBounds || [c2[0][2], c2[1][2], h2 ? c2[2][2] : c2[0][2]];
            h2 = E(f);
            m = E(c2);
            p.align(a3, false, { x: h2, y: m, width: v(f) - h2, height: v(c2) - m });
            p.alignValue && "left" !== p.alignValue || (a3 = a3.clip ? l.width : l.chart.chartWidth, p.css({ width: (90 === p.rotation ? l.height - (p.alignAttr.y - l.top) : a3 - (p.alignAttr.x - l.left)) + "px" }));
            p.show(true);
          };
          h.prototype.getLabelText = function(a3) {
            return B(a3.formatter) ? a3.formatter.call(this) : a3.text;
          };
          h.prototype.destroy = function() {
            F(this.axis.plotLinesAndBands, this);
            delete this.axis;
            C(this);
          };
          return h;
        }();
        "";
        "";
        return q;
      });
      J(a, "Core/Tooltip.js", [a["Core/FormatUtilities.js"], a["Core/Globals.js"], a["Core/Renderer/RendererUtilities.js"], a["Core/Renderer/RendererRegistry.js"], a["Core/Utilities.js"]], function(a2, q, A, E, B) {
        var v = a2.format, F = q.doc, x = A.distribute, u = B.clamp, n = B.css, c = B.discardElement, h = B.extend, m = B.fireEvent, l = B.isArray, p = B.isNumber, f = B.isString, D = B.merge, G = B.pick, H = B.splat, K = B.syncTimeout;
        a2 = function() {
          function a3(a4, c2) {
            this.allowShared = true;
            this.container = void 0;
            this.crosshairs = [];
            this.distance = 0;
            this.isHidden = true;
            this.isSticky = false;
            this.now = {};
            this.options = {};
            this.outside = false;
            this.chart = a4;
            this.init(a4, c2);
          }
          a3.prototype.applyFilter = function() {
            var a4 = this.chart;
            a4.renderer.definition({ tagName: "filter", attributes: { id: "drop-shadow-" + a4.index, opacity: 0.5 }, children: [{ tagName: "feGaussianBlur", attributes: {
              "in": "SourceAlpha",
              stdDeviation: 1
            } }, { tagName: "feOffset", attributes: { dx: 1, dy: 1 } }, { tagName: "feComponentTransfer", children: [{ tagName: "feFuncA", attributes: { type: "linear", slope: 0.3 } }] }, { tagName: "feMerge", children: [{ tagName: "feMergeNode" }, { tagName: "feMergeNode", attributes: { "in": "SourceGraphic" } }] }] });
          };
          a3.prototype.bodyFormatter = function(a4) {
            return a4.map(function(a5) {
              var c2 = a5.series.tooltipOptions;
              return (c2[(a5.point.formatPrefix || "point") + "Formatter"] || a5.point.tooltipFormatter).call(a5.point, c2[(a5.point.formatPrefix || "point") + "Format"] || "");
            });
          };
          a3.prototype.cleanSplit = function(a4) {
            this.chart.series.forEach(function(c2) {
              var k = c2 && c2.tt;
              k && (!k.isActive || a4 ? c2.tt = k.destroy() : k.isActive = false);
            });
          };
          a3.prototype.defaultFormatter = function(a4) {
            var c2 = this.points || H(this);
            var k = [a4.tooltipFooterHeaderFormatter(c2[0])];
            k = k.concat(a4.bodyFormatter(c2));
            k.push(a4.tooltipFooterHeaderFormatter(c2[0], true));
            return k;
          };
          a3.prototype.destroy = function() {
            this.label && (this.label = this.label.destroy());
            this.split && this.tt && (this.cleanSplit(true), this.tt = this.tt.destroy());
            this.renderer && (this.renderer = this.renderer.destroy(), c(this.container));
            B.clearTimeout(this.hideTimer);
            B.clearTimeout(this.tooltipTimeout);
          };
          a3.prototype.getAnchor = function(a4, c2) {
            var k = this.chart, g = k.pointer, e = k.inverted, b = k.plotTop;
            k = k.plotLeft;
            a4 = H(a4);
            a4[0].series && a4[0].series.yAxis && !a4[0].series.yAxis.options.reversedStacks && (a4 = a4.slice().reverse());
            if (this.followPointer && c2)
              "undefined" === typeof c2.chartX && (c2 = g.normalize(c2)), a4 = [c2.chartX - k, c2.chartY - b];
            else if (a4[0].tooltipPos)
              a4 = a4[0].tooltipPos;
            else {
              var d = 0, r = 0;
              a4.forEach(function(b2) {
                if (b2 = b2.pos(true))
                  d += b2[0], r += b2[1];
              });
              d /= a4.length;
              r /= a4.length;
              this.shared && 1 < a4.length && c2 && (e ? d = c2.chartX : r = c2.chartY);
              a4 = [d - k, r - b];
            }
            return a4.map(Math.round);
          };
          a3.prototype.getClassName = function(a4, c2, k) {
            var g = a4.series, e = g.options;
            return [this.options.className, "highcharts-label", k && "highcharts-tooltip-header", c2 ? "highcharts-tooltip-box" : "highcharts-tooltip", !k && "highcharts-color-" + G(a4.colorIndex, g.colorIndex), e && e.className].filter(f).join(" ");
          };
          a3.prototype.getLabel = function() {
            var a4 = this, c2 = this.chart.styledMode, k = this.options, g = this.split && this.allowShared, e = k.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none"), b, d = this.chart.renderer;
            if (a4.label) {
              var r = !a4.label.hasClass("highcharts-label");
              (g && !r || !g && r) && a4.destroy();
            }
            if (!this.label) {
              if (this.outside) {
                r = this.chart.options.chart.style;
                var f2 = E.getRendererType();
                this.container = b = q.doc.createElement("div");
                b.className = "highcharts-tooltip-container";
                n(b, { position: "absolute", top: "1px", pointerEvents: e, zIndex: Math.max(this.options.style.zIndex || 0, (r && r.zIndex || 0) + 3) });
                q.doc.body.appendChild(b);
                this.renderer = d = new f2(b, 0, 0, r, void 0, void 0, d.styledMode);
              }
              g ? this.label = d.g("tooltip") : (this.label = d.label("", 0, 0, k.shape, void 0, void 0, k.useHTML, void 0, "tooltip").attr({ padding: k.padding, r: k.borderRadius }), c2 || this.label.attr({ fill: k.backgroundColor, "stroke-width": k.borderWidth }).css(k.style).css({ pointerEvents: e }).shadow(k.shadow));
              c2 && k.shadow && (this.applyFilter(), this.label.attr({ filter: "url(#drop-shadow-" + this.chart.index + ")" }));
              if (a4.outside && !a4.split) {
                var h2 = this.label, l2 = h2.xSetter, m2 = h2.ySetter;
                h2.xSetter = function(d2) {
                  l2.call(h2, a4.distance);
                  b.style.left = d2 + "px";
                };
                h2.ySetter = function(d2) {
                  m2.call(h2, a4.distance);
                  b.style.top = d2 + "px";
                };
              }
              this.label.attr({ zIndex: 8 }).add();
            }
            return this.label;
          };
          a3.prototype.getPosition = function(a4, c2, k) {
            var g = this.chart, e = this.distance, b = {}, d = g.inverted && k.h || 0, r = this.outside, f2 = r ? F.documentElement.clientWidth - 2 * e : g.chartWidth, t = r ? Math.max(F.body.scrollHeight, F.documentElement.scrollHeight, F.body.offsetHeight, F.documentElement.offsetHeight, F.documentElement.clientHeight) : g.chartHeight, h2 = g.pointer.getChartPosition(), l2 = function(b2) {
              var d2 = "x" === b2;
              return [b2, d2 ? f2 : t, d2 ? a4 : c2].concat(r ? [d2 ? a4 * h2.scaleX : c2 * h2.scaleY, d2 ? h2.left - e + (k.plotX + g.plotLeft) * h2.scaleX : h2.top - e + (k.plotY + g.plotTop) * h2.scaleY, 0, d2 ? f2 : t] : [d2 ? a4 : c2, d2 ? k.plotX + g.plotLeft : k.plotY + g.plotTop, d2 ? g.plotLeft : g.plotTop, d2 ? g.plotLeft + g.plotWidth : g.plotTop + g.plotHeight]);
            }, w = l2("y"), m2 = l2("x"), p2;
            l2 = !!k.negative;
            !g.polar && g.hoverSeries && g.hoverSeries.yAxis && g.hoverSeries.yAxis.reversed && (l2 = !l2);
            var n2 = !this.followPointer && G(k.ttBelow, !g.inverted === l2), y = function(a5, g2, c3, k2, f3, t2, z) {
              var l3 = r ? "y" === a5 ? e * h2.scaleY : e * h2.scaleX : e, w2 = (c3 - k2) / 2, m3 = k2 < f3 - e, I = f3 + e + k2 < g2, p3 = f3 - l3 - c3 + w2;
              f3 = f3 + l3 - w2;
              if (n2 && I)
                b[a5] = f3;
              else if (!n2 && m3)
                b[a5] = p3;
              else if (m3)
                b[a5] = Math.min(z - k2, 0 > p3 - d ? p3 : p3 - d);
              else if (I)
                b[a5] = Math.max(t2, f3 + d + c3 > g2 ? f3 : f3 + d);
              else
                return false;
            }, u2 = function(d2, a5, g2, c3, r2) {
              var k2;
              r2 < e || r2 > a5 - e ? k2 = false : b[d2] = r2 < g2 / 2 ? 1 : r2 > a5 - c3 / 2 ? a5 - c3 - 2 : r2 - g2 / 2;
              return k2;
            }, D2 = function(b2) {
              var d2 = w;
              w = m2;
              m2 = d2;
              p2 = b2;
            }, M = function() {
              false !== y.apply(0, w) ? false !== u2.apply(0, m2) || p2 || (D2(true), M()) : p2 ? b.x = b.y = 0 : (D2(true), M());
            };
            (g.inverted || 1 < this.len) && D2();
            M();
            return b;
          };
          a3.prototype.hide = function(a4) {
            var c2 = this;
            B.clearTimeout(this.hideTimer);
            a4 = G(a4, this.options.hideDelay);
            this.isHidden || (this.hideTimer = K(function() {
              c2.getLabel().fadeOut(a4 ? void 0 : a4);
              c2.isHidden = true;
            }, a4));
          };
          a3.prototype.init = function(a4, c2) {
            this.chart = a4;
            this.options = c2;
            this.crosshairs = [];
            this.now = { x: 0, y: 0 };
            this.isHidden = true;
            this.split = c2.split && !a4.inverted && !a4.polar;
            this.shared = c2.shared || this.split;
            this.outside = G(c2.outside, !(!a4.scrollablePixelsX && !a4.scrollablePixelsY));
          };
          a3.prototype.shouldStickOnContact = function(a4) {
            return !(this.followPointer || !this.options.stickOnContact || a4 && !this.chart.pointer.inClass(a4.target, "highcharts-tooltip"));
          };
          a3.prototype.move = function(a4, c2, k, g) {
            var e = this, b = e.now, d = false !== e.options.animation && !e.isHidden && (1 < Math.abs(a4 - b.x) || 1 < Math.abs(c2 - b.y)), r = e.followPointer || 1 < e.len;
            h(b, { x: d ? (2 * b.x + a4) / 3 : a4, y: d ? (b.y + c2) / 2 : c2, anchorX: r ? void 0 : d ? (2 * b.anchorX + k) / 3 : k, anchorY: r ? void 0 : d ? (b.anchorY + g) / 2 : g });
            e.getLabel().attr(b);
            e.drawTracker();
            d && (B.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
              e && e.move(
                a4,
                c2,
                k,
                g
              );
            }, 32));
          };
          a3.prototype.refresh = function(a4, c2) {
            var k = this.chart, g = this.options, e = k.pointer, b = H(a4), d = b[0], r = [], f2 = g.formatter || this.defaultFormatter, t = this.shared, h2 = k.styledMode, w = {};
            if (g.enabled && d.series) {
              B.clearTimeout(this.hideTimer);
              this.allowShared = !(!l(a4) && a4.series && a4.series.noSharedTooltip);
              this.followPointer = !this.split && d.series.tooltipOptions.followPointer;
              a4 = this.getAnchor(a4, c2);
              var p2 = a4[0], n2 = a4[1];
              t && this.allowShared ? (e.applyInactiveState(b), b.forEach(function(b2) {
                b2.setState("hover");
                r.push(b2.getLabelConfig());
              }), w = { x: d.category, y: d.y }, w.points = r) : w = d.getLabelConfig();
              this.len = r.length;
              f2 = f2.call(w, this);
              t = d.series;
              this.distance = G(t.tooltipOptions.distance, 16);
              if (false === f2)
                this.hide();
              else {
                if (this.split && this.allowShared)
                  this.renderSplit(f2, b);
                else {
                  var y = p2, u2 = n2;
                  c2 && e.isDirectTouch && (y = c2.chartX - k.plotLeft, u2 = c2.chartY - k.plotTop);
                  if (k.polar || false === t.options.clip || b.some(function(b2) {
                    return e.isDirectTouch || b2.series.shouldShowTooltip(y, u2);
                  }))
                    c2 = this.getLabel(), g.style.width && !h2 || c2.css({ width: k.spacingBox.width + "px" }), c2.attr({ text: f2 && f2.join ? f2.join("") : f2 }), c2.addClass(this.getClassName(d), true), h2 || c2.attr({ stroke: g.borderColor || d.color || t.color || "#666666" }), this.updatePosition({ plotX: p2, plotY: n2, negative: d.negative, ttBelow: d.ttBelow, h: a4[2] || 0 });
                  else {
                    this.hide();
                    return;
                  }
                }
                this.isHidden && this.label && this.label.attr({ opacity: 1 }).show();
                this.isHidden = false;
              }
              m(this, "refresh");
            }
          };
          a3.prototype.renderSplit = function(a4, c2) {
            function k(b2, d2, e2, a5, c3) {
              void 0 === c3 && (c3 = true);
              e2 ? (d2 = V ? 0 : E2, b2 = u(b2 - a5 / 2, Y.left, Y.right - a5 - (g.outside ? H2 : 0))) : (d2 -= A2, b2 = c3 ? b2 - a5 - q2 : b2 + q2, b2 = u(
                b2,
                c3 ? b2 : Y.left,
                Y.right
              ));
              return { x: b2, y: d2 };
            }
            var g = this, e = g.chart, b = g.chart, d = b.chartWidth, r = b.chartHeight, t = b.plotHeight, l2 = b.plotLeft, w = b.plotTop, m2 = b.pointer, p2 = b.scrollablePixelsY;
            p2 = void 0 === p2 ? 0 : p2;
            var n2 = b.scrollablePixelsX, y = b.scrollingContainer;
            y = void 0 === y ? { scrollLeft: 0, scrollTop: 0 } : y;
            var D2 = y.scrollLeft;
            y = y.scrollTop;
            var v2 = b.styledMode, q2 = g.distance, K2 = g.options, M = g.options.positioner, Y = g.outside && "number" !== typeof n2 ? F.documentElement.getBoundingClientRect() : { left: D2, right: D2 + d, top: y, bottom: y + r }, Q = g.getLabel(), ca = this.renderer || e.renderer, V = !(!e.xAxis[0] || !e.xAxis[0].opposite);
            e = m2.getChartPosition();
            var H2 = e.left;
            e = e.top;
            var A2 = w + y, B2 = 0, E2 = t - p2;
            f(a4) && (a4 = [false, a4]);
            a4 = a4.slice(0, c2.length + 1).reduce(function(b2, d2, e2) {
              if (false !== d2 && "" !== d2) {
                e2 = c2[e2 - 1] || { isHeader: true, plotX: c2[0].plotX, plotY: t, series: {} };
                var a5 = e2.isHeader, r2 = a5 ? g : e2.series;
                d2 = d2.toString();
                var f2 = r2.tt, z = e2.isHeader;
                var h2 = e2.series;
                f2 || (f2 = { padding: K2.padding, r: K2.borderRadius }, v2 || (f2.fill = K2.backgroundColor, f2["stroke-width"] = K2.borderWidth), f2 = ca.label(
                  "",
                  0,
                  0,
                  K2[z ? "headerShape" : "shape"],
                  void 0,
                  void 0,
                  K2.useHTML
                ).addClass(g.getClassName(e2, true, z)).attr(f2).add(Q));
                f2.isActive = true;
                f2.attr({ text: d2 });
                v2 || f2.css(K2.style).shadow(K2.shadow).attr({ stroke: K2.borderColor || e2.color || h2.color || "#333333" });
                r2 = r2.tt = f2;
                z = r2.getBBox();
                d2 = z.width + r2.strokeWidth();
                a5 && (B2 = z.height, E2 += B2, V && (A2 -= B2));
                h2 = e2.plotX;
                h2 = void 0 === h2 ? 0 : h2;
                f2 = e2.plotY;
                f2 = void 0 === f2 ? 0 : f2;
                var m3 = e2.series;
                if (e2.isHeader) {
                  h2 = l2 + h2;
                  var I = w + t / 2;
                } else {
                  var p3 = m3.xAxis, n3 = m3.yAxis;
                  h2 = p3.pos + u(h2, -q2, p3.len + q2);
                  m3.shouldShowTooltip(0, n3.pos - w + f2, { ignoreX: true }) && (I = n3.pos + f2);
                }
                h2 = u(h2, Y.left - q2, Y.right + q2);
                "number" === typeof I ? (z = z.height + 1, f2 = M ? M.call(g, d2, z, e2) : k(h2, I, a5, d2), b2.push({ align: M ? 0 : void 0, anchorX: h2, anchorY: I, boxWidth: d2, point: e2, rank: G(f2.rank, a5 ? 1 : 0), size: z, target: f2.y, tt: r2, x: f2.x })) : r2.isActive = false;
              }
              return b2;
            }, []);
            !M && a4.some(function(b2) {
              var d2 = (g.outside ? H2 : 0) + b2.anchorX;
              return d2 < Y.left && d2 + b2.boxWidth < Y.right ? true : d2 < H2 - Y.left + b2.boxWidth && Y.right - d2 > d2;
            }) && (a4 = a4.map(function(b2) {
              var d2 = k(b2.anchorX, b2.anchorY, b2.point.isHeader, b2.boxWidth, false);
              return h(b2, { target: d2.y, x: d2.x });
            }));
            g.cleanSplit();
            x(a4, E2);
            var C = H2, J2 = H2;
            a4.forEach(function(b2) {
              var d2 = b2.x, e2 = b2.boxWidth;
              b2 = b2.isHeader;
              b2 || (g.outside && H2 + d2 < C && (C = H2 + d2), !b2 && g.outside && C + e2 > J2 && (J2 = H2 + d2));
            });
            a4.forEach(function(b2) {
              var d2 = b2.x, e2 = b2.anchorX, a5 = b2.pos, c3 = b2.point.isHeader;
              a5 = { visibility: "undefined" === typeof a5 ? "hidden" : "inherit", x: d2, y: (a5 || 0) + A2, anchorX: e2, anchorY: b2.anchorY };
              if (g.outside && d2 < e2) {
                var r2 = H2 - C;
                0 < r2 && (c3 || (a5.x = d2 + r2, a5.anchorX = e2 + r2), c3 && (a5.x = (J2 - C) / 2, a5.anchorX = e2 + r2));
              }
              b2.tt.attr(a5);
            });
            a4 = g.container;
            p2 = g.renderer;
            g.outside && a4 && p2 && (b = Q.getBBox(), p2.setSize(b.width + b.x, b.height + b.y, false), a4.style.left = C + "px", a4.style.top = e + "px");
          };
          a3.prototype.drawTracker = function() {
            if (this.shouldStickOnContact()) {
              var a4 = this.chart, c2 = this.label, k = this.shared ? a4.hoverPoints : a4.hoverPoint;
              if (c2 && k) {
                var g = { x: 0, y: 0, width: 0, height: 0 };
                k = this.getAnchor(k);
                var e = c2.getBBox();
                k[0] += a4.plotLeft - c2.translateX;
                k[1] += a4.plotTop - c2.translateY;
                g.x = Math.min(0, k[0]);
                g.y = Math.min(0, k[1]);
                g.width = 0 > k[0] ? Math.max(Math.abs(k[0]), e.width - k[0]) : Math.max(Math.abs(k[0]), e.width);
                g.height = 0 > k[1] ? Math.max(Math.abs(k[1]), e.height - Math.abs(k[1])) : Math.max(
                  Math.abs(k[1]),
                  e.height
                );
                this.tracker ? this.tracker.attr(g) : (this.tracker = c2.renderer.rect(g).addClass("highcharts-tracker").add(c2), a4.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
              }
            } else
              this.tracker && this.tracker.destroy();
          };
          a3.prototype.styledModeFormat = function(a4) {
            return a4.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"');
          };
          a3.prototype.tooltipFooterHeaderFormatter = function(a4, c2) {
            var k = a4.series, g = k.tooltipOptions, e = k.xAxis, b = e && e.dateTime;
            e = { isFooter: c2, labelConfig: a4 };
            var d = g.xDateFormat, r = g[c2 ? "footerFormat" : "headerFormat"];
            m(this, "headerFormatter", e, function(e2) {
              b && !d && p(a4.key) && (d = b.getXDateFormat(a4.key, g.dateTimeLabelFormats));
              b && d && (a4.point && a4.point.tooltipDateKeys || ["key"]).forEach(function(b2) {
                r = r.replace("{point." + b2 + "}", "{point." + b2 + ":" + d + "}");
              });
              k.chart.styledMode && (r = this.styledModeFormat(r));
              e2.text = v(r, { point: a4, series: k }, this.chart);
            });
            return e.text;
          };
          a3.prototype.update = function(a4) {
            this.destroy();
            D(true, this.chart.options.tooltip.userOptions, a4);
            this.init(this.chart, D(true, this.options, a4));
          };
          a3.prototype.updatePosition = function(a4) {
            var c2 = this.chart, k = this.distance, g = this.options, e = c2.pointer, b = this.getLabel(), d = e.getChartPosition();
            e = d.left;
            var r = d.top, f2 = d.scaleX;
            d = d.scaleY;
            var t = (g.positioner || this.getPosition).call(this, b.width, b.height, a4), h2 = (a4.plotX || 0) + c2.plotLeft;
            a4 = (a4.plotY || 0) + c2.plotTop;
            if (this.outside) {
              g.positioner && (t.x += e - k, t.y += r - k);
              k = g.borderWidth + 2 * k;
              this.renderer.setSize(b.width + k, b.height + k, false);
              if (1 !== f2 || 1 !== d)
                n(this.container, { transform: "scale(".concat(f2, ", ").concat(d, ")") }), h2 *= f2, a4 *= d;
              h2 += e - t.x;
              a4 += r - t.y;
            }
            this.move(Math.round(t.x), Math.round(t.y || 0), h2, a4);
          };
          return a3;
        }();
        "";
        return a2;
      });
      J(a, "Core/Series/Point.js", [a["Core/Renderer/HTML/AST.js"], a["Core/Animation/AnimationUtilities.js"], a["Core/Defaults.js"], a["Core/FormatUtilities.js"], a["Core/Utilities.js"]], function(a2, q, A, E, B) {
        var v = q.animObject, F = A.defaultOptions, x = E.format, u = B.addEvent, n = B.defined, c = B.erase, h = B.extend, m = B.fireEvent, l = B.getNestedProperty, p = B.isArray, f = B.isFunction, D = B.isNumber, G = B.isObject, H = B.merge, K = B.objectEach, y = B.pick, t = B.syncTimeout, w = B.removeEvent, k = B.uniqueKey;
        q = function() {
          function g() {
            this.category = void 0;
            this.formatPrefix = "point";
            this.id = void 0;
            this.isNull = false;
            this.percentage = this.options = this.name = void 0;
            this.selected = false;
            this.total = this.shapeArgs = this.series = void 0;
            this.visible = true;
            this.x = void 0;
          }
          g.prototype.animateBeforeDestroy = function() {
            var e = this, b = { x: e.startXPos, opacity: 0 }, d = e.getGraphicalProps();
            d.singular.forEach(function(d2) {
              e[d2] = e[d2].animate("dataLabel" === d2 ? { x: e[d2].startXPos, y: e[d2].startYPos, opacity: 0 } : b);
            });
            d.plural.forEach(function(b2) {
              e[b2].forEach(function(b3) {
                b3.element && b3.animate(h({ x: e.startXPos }, b3.startYPos ? { x: b3.startXPos, y: b3.startYPos } : {}));
              });
            });
          };
          g.prototype.applyOptions = function(e, b) {
            var d = this.series, a3 = d.options.pointValKey || d.pointValKey;
            e = g.prototype.optionsToObject.call(this, e);
            h(this, e);
            this.options = this.options ? h(this.options, e) : e;
            e.group && delete this.group;
            e.dataLabels && delete this.dataLabels;
            a3 && (this.y = g.prototype.getNestedProperty.call(this, a3));
            this.formatPrefix = (this.isNull = this.isValid && !this.isValid()) ? "null" : "point";
            this.selected && (this.state = "select");
            "name" in this && "undefined" === typeof b && d.xAxis && d.xAxis.hasNames && (this.x = d.xAxis.nameToX(this));
            "undefined" === typeof this.x && d ? this.x = "undefined" === typeof b ? d.autoIncrement() : b : D(e.x) && d.options.relativeXValue && (this.x = d.autoIncrement(e.x));
            return this;
          };
          g.prototype.destroy = function() {
            function e() {
              if (b.graphic || b.graphics || b.dataLabel || b.dataLabels)
                w(b), b.destroyElements();
              for (f2 in b)
                b[f2] = null;
            }
            var b = this, d = b.series, a3 = d.chart;
            d = d.options.dataSorting;
            var g2 = a3.hoverPoints, k2 = v(b.series.chart.renderer.globalAnimation), f2;
            b.legendItem && a3.legend.destroyItem(b);
            g2 && (b.setState(), c(g2, b), g2.length || (a3.hoverPoints = null));
            if (b === a3.hoverPoint)
              b.onMouseOut();
            d && d.enabled ? (this.animateBeforeDestroy(), t(e, k2.duration)) : e();
            a3.pointCount--;
          };
          g.prototype.destroyElements = function(e) {
            var b = this;
            e = b.getGraphicalProps(e);
            e.singular.forEach(function(d) {
              b[d] = b[d].destroy();
            });
            e.plural.forEach(function(d) {
              b[d].forEach(function(b2) {
                b2 && b2.element && b2.destroy();
              });
              delete b[d];
            });
          };
          g.prototype.firePointEvent = function(e, b, d) {
            var a3 = this, c2 = this.series.options;
            (c2.point.events[e] || a3.options && a3.options.events && a3.options.events[e]) && a3.importEvents();
            "click" === e && c2.allowPointSelect && (d = function(b2) {
              a3.select && a3.select(null, b2.ctrlKey || b2.metaKey || b2.shiftKey);
            });
            m(a3, e, b, d);
          };
          g.prototype.getClassName = function() {
            return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + ("undefined" !== typeof this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
          };
          g.prototype.getGraphicalProps = function(e) {
            var b = this, d = [], a3 = { singular: [], plural: [] }, c2;
            e = e || { graphic: 1, dataLabel: 1 };
            e.graphic && d.push("graphic", "shadowGroup");
            e.dataLabel && d.push(
              "dataLabel",
              "dataLabelPath",
              "dataLabelUpper",
              "connector"
            );
            for (c2 = d.length; c2--; ) {
              var g2 = d[c2];
              b[g2] && a3.singular.push(g2);
            }
            ["graphic", "dataLabel", "connector"].forEach(function(d2) {
              var c3 = d2 + "s";
              e[d2] && b[c3] && a3.plural.push(c3);
            });
            return a3;
          };
          g.prototype.getLabelConfig = function() {
            return { x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal };
          };
          g.prototype.getNestedProperty = function(e) {
            if (e)
              return 0 === e.indexOf("custom.") ? l(e, this.options) : this[e];
          };
          g.prototype.getZone = function() {
            var e = this.series, b = e.zones;
            e = e.zoneAxis || "y";
            var d, a3 = 0;
            for (d = b[a3]; this[e] >= d.value; )
              d = b[++a3];
            this.nonZonedColor || (this.nonZonedColor = this.color);
            this.color = d && d.color && !this.options.color ? d.color : this.nonZonedColor;
            return d;
          };
          g.prototype.hasNewShapeType = function() {
            return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
          };
          g.prototype.init = function(e, b, d) {
            this.series = e;
            this.applyOptions(
              b,
              d
            );
            this.id = n(this.id) ? this.id : k();
            this.resolveColor();
            e.chart.pointCount++;
            m(this, "afterInit");
            return this;
          };
          g.prototype.isValid = function() {
            return null !== this.x && D(this.y);
          };
          g.prototype.optionsToObject = function(e) {
            var b = this.series, d = b.options.keys, a3 = d || b.pointArrayMap || ["y"], c2 = a3.length, k2 = {}, f2 = 0, t2 = 0;
            if (D(e) || null === e)
              k2[a3[0]] = e;
            else if (p(e))
              for (!d && e.length > c2 && (b = typeof e[0], "string" === b ? k2.name = e[0] : "number" === b && (k2.x = e[0]), f2++); t2 < c2; )
                d && "undefined" === typeof e[f2] || (0 < a3[t2].indexOf(".") ? g.prototype.setNestedProperty(
                  k2,
                  e[f2],
                  a3[t2]
                ) : k2[a3[t2]] = e[f2]), f2++, t2++;
            else
              "object" === typeof e && (k2 = e, e.dataLabels && (b._hasPointLabels = true), e.marker && (b._hasPointMarkers = true));
            return k2;
          };
          g.prototype.pos = function(e, b) {
            void 0 === b && (b = this.plotY);
            var d = this.plotX, a3 = this.series, c2 = a3.chart, g2 = a3.xAxis;
            a3 = a3.yAxis;
            var k2 = 0, f2 = 0;
            if (D(d) && D(b))
              return e && (k2 = g2 ? g2.pos : c2.plotLeft, f2 = a3 ? a3.pos : c2.plotTop), c2.inverted && g2 && a3 ? [a3.len - b + f2, g2.len - d + k2] : [d + k2, b + f2];
          };
          g.prototype.resolveColor = function() {
            var e = this.series, b = e.chart.styledMode;
            var d = e.chart.options.chart.colorCount;
            delete this.nonZonedColor;
            if (e.options.colorByPoint) {
              if (!b) {
                d = e.options.colors || e.chart.options.colors;
                var a3 = d[e.colorCounter];
                d = d.length;
              }
              b = e.colorCounter;
              e.colorCounter++;
              e.colorCounter === d && (e.colorCounter = 0);
            } else
              b || (a3 = e.color), b = e.colorIndex;
            this.colorIndex = y(this.options.colorIndex, b);
            this.color = y(this.options.color, a3);
          };
          g.prototype.setNestedProperty = function(e, b, d) {
            d.split(".").reduce(function(d2, e2, a3, c2) {
              d2[e2] = c2.length - 1 === a3 ? b : G(d2[e2], true) ? d2[e2] : {};
              return d2[e2];
            }, e);
            return e;
          };
          g.prototype.shouldDraw = function() {
            return !this.isNull;
          };
          g.prototype.tooltipFormatter = function(e) {
            var b = this.series, d = b.tooltipOptions, a3 = y(d.valueDecimals, ""), c2 = d.valuePrefix || "", g2 = d.valueSuffix || "";
            b.chart.styledMode && (e = b.chart.tooltip.styledModeFormat(e));
            (b.pointArrayMap || ["y"]).forEach(function(b2) {
              b2 = "{point." + b2;
              if (c2 || g2)
                e = e.replace(RegExp(b2 + "}", "g"), c2 + b2 + "}" + g2);
              e = e.replace(RegExp(b2 + "}", "g"), b2 + ":,." + a3 + "f}");
            });
            return x(e, { point: this, series: this.series }, b.chart);
          };
          g.prototype.update = function(e, b, d, a3) {
            function c2() {
              g2.applyOptions(e);
              var a4 = k2 && g2.hasMockGraphic;
              a4 = null === g2.y ? !a4 : a4;
              k2 && a4 && (g2.graphic = k2.destroy(), delete g2.hasMockGraphic);
              G(e, true) && (k2 && k2.element && e && e.marker && "undefined" !== typeof e.marker.symbol && (g2.graphic = k2.destroy()), e && e.dataLabels && g2.dataLabel && (g2.dataLabel = g2.dataLabel.destroy()), g2.connector && (g2.connector = g2.connector.destroy()));
              h2 = g2.index;
              r.updateParallelArrays(g2, h2);
              t2.data[h2] = G(t2.data[h2], true) || G(e, true) ? g2.options : y(e, t2.data[h2]);
              r.isDirty = r.isDirtyData = true;
              !r.fixedBox && r.hasCartesianSeries && (f2.isDirtyBox = true);
              "point" === t2.legendType && (f2.isDirtyLegend = true);
              b && f2.redraw(d);
            }
            var g2 = this, r = g2.series, k2 = g2.graphic, f2 = r.chart, t2 = r.options, h2;
            b = y(b, true);
            false === a3 ? c2() : g2.firePointEvent("update", { options: e }, c2);
          };
          g.prototype.remove = function(e, b) {
            this.series.removePoint(this.series.data.indexOf(this), e, b);
          };
          g.prototype.select = function(e, b) {
            var d = this, a3 = d.series, g2 = a3.chart;
            this.selectedStaging = e = y(e, !d.selected);
            d.firePointEvent(e ? "select" : "unselect", { accumulate: b }, function() {
              d.selected = d.options.selected = e;
              a3.options.data[a3.data.indexOf(d)] = d.options;
              d.setState(e && "select");
              b || g2.getSelectedPoints().forEach(function(b2) {
                var e2 = b2.series;
                b2.selected && b2 !== d && (b2.selected = b2.options.selected = false, e2.options.data[e2.data.indexOf(b2)] = b2.options, b2.setState(g2.hoverPoints && e2.options.inactiveOtherPoints ? "inactive" : ""), b2.firePointEvent("unselect"));
              });
            });
            delete this.selectedStaging;
          };
          g.prototype.onMouseOver = function(e) {
            var b = this.series.chart, d = b.pointer;
            e = e ? d.normalize(e) : d.getChartCoordinatesFromPoint(this, b.inverted);
            d.runPointActions(e, this);
          };
          g.prototype.onMouseOut = function() {
            var e = this.series.chart;
            this.firePointEvent("mouseOut");
            this.series.options.inactiveOtherPoints || (e.hoverPoints || []).forEach(function(b) {
              b.setState();
            });
            e.hoverPoints = e.hoverPoint = null;
          };
          g.prototype.importEvents = function() {
            if (!this.hasImportedEvents) {
              var e = this, b = H(e.series.options.point, e.options).events;
              e.events = b;
              K(b, function(b2, a3) {
                f(b2) && u(e, a3, b2);
              });
              this.hasImportedEvents = true;
            }
          };
          g.prototype.setState = function(e, b) {
            var d = this.series, g2 = this.state, c2 = d.options.states[e || "normal"] || {}, k2 = F.plotOptions[d.type].marker && d.options.marker, f2 = k2 && false === k2.enabled, t2 = k2 && k2.states && k2.states[e || "normal"] || {}, l2 = false === t2.enabled, w2 = this.marker || {}, p2 = d.chart, n2 = k2 && d.markerAttribs, u2 = d.halo, v2, q2 = d.stateMarkerGraphic;
            e = e || "";
            if (!(e === this.state && !b || this.selected && "select" !== e || false === c2.enabled || e && (l2 || f2 && false === t2.enabled) || e && w2.states && w2.states[e] && false === w2.states[e].enabled)) {
              this.state = e;
              n2 && (v2 = d.markerAttribs(this, e));
              if (this.graphic && !this.hasMockGraphic) {
                g2 && this.graphic.removeClass("highcharts-point-" + g2);
                e && this.graphic.addClass("highcharts-point-" + e);
                if (!p2.styledMode) {
                  g2 = d.pointAttribs(this, e);
                  var M = y(p2.options.chart.animation, c2.animation);
                  var G2 = g2.opacity;
                  d.options.inactiveOtherPoints && D(G2) && ((this.dataLabels || []).forEach(function(b2) {
                    b2 && !b2.hasClass("highcharts-data-label-hidden") && b2.animate({ opacity: G2 }, M);
                  }), this.connector && this.connector.animate({ opacity: G2 }, M));
                  this.graphic.animate(g2, M);
                }
                v2 && this.graphic.animate(v2, y(p2.options.chart.animation, t2.animation, k2.animation));
                q2 && q2.hide();
              } else {
                if (e && t2) {
                  k2 = w2.symbol || d.symbol;
                  q2 && q2.currentSymbol !== k2 && (q2 = q2.destroy());
                  if (v2)
                    if (q2)
                      q2[b ? "animate" : "attr"]({ x: v2.x, y: v2.y });
                    else
                      k2 && (d.stateMarkerGraphic = q2 = p2.renderer.symbol(k2, v2.x, v2.y, v2.width, v2.height).add(d.markerGroup), q2.currentSymbol = k2);
                  !p2.styledMode && q2 && "inactive" !== this.state && q2.attr(d.pointAttribs(this, e));
                }
                q2 && (q2[e && this.isInside ? "show" : "hide"](), q2.element.point = this, q2.addClass(this.getClassName(), true));
              }
              c2 = c2.halo;
              v2 = (q2 = this.graphic || q2) && q2.visibility || "inherit";
              c2 && c2.size && q2 && "hidden" !== v2 && !this.isCluster ? (u2 || (d.halo = u2 = p2.renderer.path().add(q2.parentGroup)), u2.show()[b ? "animate" : "attr"]({ d: this.haloPath(c2.size) }), u2.attr({ "class": "highcharts-halo highcharts-color-" + y(this.colorIndex, d.colorIndex) + (this.className ? " " + this.className : ""), visibility: v2, zIndex: -1 }), u2.point = this, p2.styledMode || u2.attr(h({ fill: this.color || d.color, "fill-opacity": c2.opacity }, a2.filterUserAttributes(c2.attributes || {})))) : u2 && u2.point && u2.point.haloPath && u2.animate({ d: u2.point.haloPath(0) }, null, u2.hide);
              m(this, "afterSetState", { state: e });
            }
          };
          g.prototype.haloPath = function(e) {
            var b = this.pos();
            return b ? this.series.chart.renderer.symbols.circle(Math.floor(b[0]) - e, b[1] - e, 2 * e, 2 * e) : [];
          };
          return g;
        }();
        "";
        return q;
      });
      J(a, "Core/Pointer.js", [a["Core/Color/Color.js"], a["Core/Globals.js"], a["Core/Tooltip.js"], a["Core/Utilities.js"]], function(a2, q, A, E) {
        var v = a2.parse, C = q.charts, F = q.noop, x = E.addEvent, u = E.attr, n = E.css, c = E.defined, h = E.extend, m = E.find, l = E.fireEvent, p = E.isNumber, f = E.isObject, D = E.objectEach, G = E.offset, H = E.pick, K = E.splat;
        a2 = function() {
          function a3(a4, c2) {
            this.lastValidTouch = {};
            this.pinchDown = [];
            this.runChartClick = false;
            this.eventsToUnbind = [];
            this.chart = a4;
            this.hasDragged = false;
            this.options = c2;
            this.init(a4, c2);
          }
          a3.prototype.applyInactiveState = function(a4) {
            var c2 = [], k;
            (a4 || []).forEach(function(a5) {
              k = a5.series;
              c2.push(k);
              k.linkedParent && c2.push(k.linkedParent);
              k.linkedSeries && (c2 = c2.concat(k.linkedSeries));
              k.navigatorSeries && c2.push(k.navigatorSeries);
            });
            this.chart.series.forEach(function(a5) {
              -1 === c2.indexOf(a5) ? a5.setState("inactive", true) : a5.options.inactiveOtherPoints && a5.setAllPointsToState("inactive");
            });
          };
          a3.prototype.destroy = function() {
            var c2 = this;
            this.eventsToUnbind.forEach(function(a4) {
              return a4();
            });
            this.eventsToUnbind = [];
            q.chartCount || (a3.unbindDocumentMouseUp && (a3.unbindDocumentMouseUp = a3.unbindDocumentMouseUp()), a3.unbindDocumentTouchEnd && (a3.unbindDocumentTouchEnd = a3.unbindDocumentTouchEnd()));
            clearInterval(c2.tooltipTimeout);
            D(c2, function(a4, k) {
              c2[k] = void 0;
            });
          };
          a3.prototype.getSelectionMarkerAttrs = function(a4, c2) {
            var k = this, g = { args: { chartX: a4, chartY: c2 }, attrs: {}, shapeType: "rect" };
            l(this, "getSelectionMarkerAttrs", g, function(e) {
              var b = k.chart, d = k.mouseDownX;
              d = void 0 === d ? 0 : d;
              var g2 = k.mouseDownY;
              g2 = void 0 === g2 ? 0 : g2;
              var f2 = k.zoomHor, t = k.zoomVert;
              e = e.attrs;
              e.x = b.plotLeft;
              e.y = b.plotTop;
              e.width = f2 ? 1 : b.plotWidth;
              e.height = t ? 1 : b.plotHeight;
              f2 && (b = a4 - d, e.width = Math.abs(b), e.x = (0 < b ? 0 : b) + d);
              t && (b = c2 - g2, e.height = Math.abs(b), e.y = (0 < b ? 0 : b) + g2);
            });
            return g;
          };
          a3.prototype.drag = function(a4) {
            var c2 = this.chart, k = c2.options.chart, g = c2.plotLeft, e = c2.plotTop, b = c2.plotWidth, d = c2.plotHeight, r = this.mouseDownX || 0, t = this.mouseDownY || 0, h2 = f(k.panning) ? k.panning && k.panning.enabled : k.panning, l2 = k.panKey && a4[k.panKey + "Key"], m2 = a4.chartX, p2 = a4.chartY, n2 = this.selectionMarker;
            n2 && n2.touch || (m2 < g ? m2 = g : m2 > g + b && (m2 = g + b), p2 < e ? p2 = e : p2 > e + d && (p2 = e + d), this.hasDragged = Math.sqrt(Math.pow(r - m2, 2) + Math.pow(t - p2, 2)), 10 < this.hasDragged && (g = c2.isInsidePlot(r - g, t - e, { visiblePlotOnly: true }), p2 = this.getSelectionMarkerAttrs(m2, p2), m2 = p2.shapeType, p2 = p2.attrs, !c2.hasCartesianSeries && !c2.mapView || !this.zoomX && !this.zoomY || !g || l2 || n2 || (this.selectionMarker = n2 = c2.renderer[m2](), n2.attr({ "class": "highcharts-selection-marker", zIndex: 7 }).add(), c2.styledMode || n2.attr({ fill: k.selectionMarkerFill || v("#335cad").setOpacity(0.25).get() })), n2 && n2.attr(p2), g && !n2 && h2 && c2.pan(a4, k.panning)));
          };
          a3.prototype.dragStart = function(a4) {
            var c2 = this.chart;
            c2.mouseIsDown = a4.type;
            c2.cancelClick = false;
            c2.mouseDownX = this.mouseDownX = a4.chartX;
            c2.mouseDownY = this.mouseDownY = a4.chartY;
          };
          a3.prototype.getSelectionBox = function(a4) {
            var c2 = { args: { marker: a4 }, result: {} };
            l(this, "getSelectionBox", c2, function(c3) {
              c3.result = { x: a4.attr ? +a4.attr("x") : a4.x, y: a4.attr ? +a4.attr("y") : a4.y, width: a4.attr ? a4.attr("width") : a4.width, height: a4.attr ? a4.attr("height") : a4.height };
            });
            return c2.result;
          };
          a3.prototype.drop = function(a4) {
            var f2 = this, k = this.chart, g = this.hasPinched;
            if (this.selectionMarker) {
              var e = this.getSelectionBox(this.selectionMarker), b = e.x, d = e.y, r = e.width, t = e.height, m2 = { originalEvent: a4, xAxis: [], yAxis: [], x: b, y: d, width: r, height: t }, u2 = !!k.mapView;
              if (this.hasDragged || g)
                k.axes.forEach(function(e2) {
                  if (e2.zoomEnabled && c(e2.min) && (g || f2[{ xAxis: "zoomX", yAxis: "zoomY" }[e2.coll]]) && p(b) && p(d) && p(r) && p(t)) {
                    var k2 = e2.horiz, h2 = "touchend" === a4.type ? e2.minPixelPadding : 0, z = e2.toValue((k2 ? b : d) + h2);
                    k2 = e2.toValue((k2 ? b + r : d + t) - h2);
                    m2[e2.coll].push({ axis: e2, min: Math.min(
                      z,
                      k2
                    ), max: Math.max(z, k2) });
                    u2 = true;
                  }
                }), u2 && l(k, "selection", m2, function(b2) {
                  k.zoom(h(b2, g ? { animation: false } : null));
                });
              p(k.index) && (this.selectionMarker = this.selectionMarker.destroy());
              g && this.scaleGroups();
            }
            k && p(k.index) && (n(k.container, { cursor: k._cursor }), k.cancelClick = 10 < this.hasDragged, k.mouseIsDown = this.hasDragged = this.hasPinched = false, this.pinchDown = []);
          };
          a3.prototype.findNearestKDPoint = function(a4, c2, k) {
            var g;
            a4.forEach(function(e) {
              var b = !(e.noSharedTooltip && c2) && 0 > e.options.findNearestPointBy.indexOf("y");
              e = e.searchPoint(
                k,
                b
              );
              if ((b = f(e, true) && e.series) && !(b = !f(g, true))) {
                b = g.distX - e.distX;
                var d = g.dist - e.dist, a5 = (e.series.group && e.series.group.zIndex) - (g.series.group && g.series.group.zIndex);
                b = 0 < (0 !== b && c2 ? b : 0 !== d ? d : 0 !== a5 ? a5 : g.series.index > e.series.index ? -1 : 1);
              }
              b && (g = e);
            });
            return g;
          };
          a3.prototype.getChartCoordinatesFromPoint = function(a4, c2) {
            var k = a4.series, g = k.xAxis;
            k = k.yAxis;
            var e = a4.shapeArgs;
            if (g && k) {
              var b = H(a4.clientX, a4.plotX), d = a4.plotY || 0;
              a4.isNode && e && p(e.x) && p(e.y) && (b = e.x, d = e.y);
              return c2 ? { chartX: k.len + k.pos - d, chartY: g.len + g.pos - b } : { chartX: b + g.pos, chartY: d + k.pos };
            }
            if (e && e.x && e.y)
              return { chartX: e.x, chartY: e.y };
          };
          a3.prototype.getChartPosition = function() {
            if (this.chartPosition)
              return this.chartPosition;
            var a4 = this.chart.container, c2 = G(a4);
            this.chartPosition = { left: c2.left, top: c2.top, scaleX: 1, scaleY: 1 };
            var k = a4.offsetWidth;
            a4 = a4.offsetHeight;
            2 < k && 2 < a4 && (this.chartPosition.scaleX = c2.width / k, this.chartPosition.scaleY = c2.height / a4);
            return this.chartPosition;
          };
          a3.prototype.getCoordinates = function(a4) {
            var c2 = { xAxis: [], yAxis: [] };
            this.chart.axes.forEach(function(k) {
              c2[k.isXAxis ? "xAxis" : "yAxis"].push({ axis: k, value: k.toValue(a4[k.horiz ? "chartX" : "chartY"]) });
            });
            return c2;
          };
          a3.prototype.getHoverData = function(a4, c2, k, g, e, b) {
            var d = [];
            g = !(!g || !a4);
            var r = function(b2) {
              return b2.visible && !(!e && b2.directTouch) && H(b2.options.enableMouseTracking, true);
            }, h2 = { chartX: b ? b.chartX : void 0, chartY: b ? b.chartY : void 0, shared: e };
            l(this, "beforeGetHoverData", h2);
            var t = c2 && !c2.stickyTracking ? [c2] : k.filter(function(b2) {
              return b2.stickyTracking && (h2.filter || r)(b2);
            });
            var w = g || !b ? a4 : this.findNearestKDPoint(t, e, b);
            c2 = w && w.series;
            w && (e && !c2.noSharedTooltip ? (t = k.filter(function(b2) {
              return h2.filter ? h2.filter(b2) : r(b2) && !b2.noSharedTooltip;
            }), t.forEach(function(b2) {
              var a5 = m(b2.points, function(b3) {
                return b3.x === w.x && !b3.isNull;
              });
              f(a5) && (b2.boosted && b2.boost && (a5 = b2.boost.getPoint(a5)), d.push(a5));
            })) : d.push(w));
            h2 = { hoverPoint: w };
            l(this, "afterGetHoverData", h2);
            return { hoverPoint: h2.hoverPoint, hoverSeries: c2, hoverPoints: d };
          };
          a3.prototype.getPointFromEvent = function(a4) {
            a4 = a4.target;
            for (var c2; a4 && !c2; )
              c2 = a4.point, a4 = a4.parentNode;
            return c2;
          };
          a3.prototype.onTrackerMouseOut = function(a4) {
            a4 = a4.relatedTarget || a4.toElement;
            var c2 = this.chart.hoverSeries;
            this.isDirectTouch = false;
            if (!(!c2 || !a4 || c2.stickyTracking || this.inClass(a4, "highcharts-tooltip") || this.inClass(a4, "highcharts-series-" + c2.index) && this.inClass(a4, "highcharts-tracker")))
              c2.onMouseOut();
          };
          a3.prototype.inClass = function(a4, c2) {
            for (var k; a4; ) {
              if (k = u(a4, "class")) {
                if (-1 !== k.indexOf(c2))
                  return true;
                if (-1 !== k.indexOf("highcharts-container"))
                  return false;
              }
              a4 = a4.parentElement;
            }
          };
          a3.prototype.init = function(a4, c2) {
            this.options = c2;
            this.chart = a4;
            this.runChartClick = !(!c2.chart.events || !c2.chart.events.click);
            this.pinchDown = [];
            this.lastValidTouch = {};
            A && (a4.tooltip = new A(a4, c2.tooltip));
            this.setDOMEvents();
          };
          a3.prototype.normalize = function(a4, c2) {
            var k = a4.touches, g = k ? k.length ? k.item(0) : H(k.changedTouches, a4.changedTouches)[0] : a4;
            c2 || (c2 = this.getChartPosition());
            k = g.pageX - c2.left;
            g = g.pageY - c2.top;
            k /= c2.scaleX;
            g /= c2.scaleY;
            return h(a4, { chartX: Math.round(k), chartY: Math.round(g) });
          };
          a3.prototype.onContainerClick = function(a4) {
            var c2 = this.chart, k = c2.hoverPoint;
            a4 = this.normalize(a4);
            var g = c2.plotLeft, e = c2.plotTop;
            c2.cancelClick || (k && this.inClass(a4.target, "highcharts-tracker") ? (l(k.series, "click", h(a4, { point: k })), c2.hoverPoint && k.firePointEvent("click", a4)) : (h(a4, this.getCoordinates(a4)), c2.isInsidePlot(a4.chartX - g, a4.chartY - e, { visiblePlotOnly: true }) && l(c2, "click", a4)));
          };
          a3.prototype.onContainerMouseDown = function(a4) {
            var c2 = 1 === ((a4.buttons || a4.button) & 1);
            a4 = this.normalize(a4);
            if (q.isFirefox && 0 !== a4.button)
              this.onContainerMouseMove(a4);
            if ("undefined" === typeof a4.button || c2)
              this.zoomOption(a4), c2 && a4.preventDefault && a4.preventDefault(), this.dragStart(a4);
          };
          a3.prototype.onContainerMouseLeave = function(c2) {
            var f2 = C[H(a3.hoverChartIndex, -1)], k = this.chart.tooltip;
            c2 = this.normalize(c2);
            f2 && (c2.relatedTarget || c2.toElement) && (f2.pointer.reset(), f2.pointer.chartPosition = void 0);
            k && !k.isHidden && this.reset();
          };
          a3.prototype.onContainerMouseEnter = function(a4) {
            delete this.chartPosition;
          };
          a3.prototype.onContainerMouseMove = function(a4) {
            var c2 = this.chart, k = c2.tooltip;
            a4 = this.normalize(a4);
            this.setHoverChartIndex();
            a4.preventDefault || (a4.returnValue = false);
            ("mousedown" === c2.mouseIsDown || this.touchSelect(a4)) && this.drag(a4);
            c2.openMenu || !this.inClass(a4.target, "highcharts-tracker") && !c2.isInsidePlot(a4.chartX - c2.plotLeft, a4.chartY - c2.plotTop, { visiblePlotOnly: true }) || k && k.shouldStickOnContact(a4) || (this.inClass(a4.target, "highcharts-no-tooltip") ? this.reset(false, 0) : this.runPointActions(a4));
          };
          a3.prototype.onDocumentTouchEnd = function(c2) {
            var f2 = C[H(a3.hoverChartIndex, -1)];
            f2 && f2.pointer.drop(c2);
          };
          a3.prototype.onContainerTouchMove = function(a4) {
            if (this.touchSelect(a4))
              this.onContainerMouseMove(a4);
            else
              this.touch(a4);
          };
          a3.prototype.onContainerTouchStart = function(a4) {
            if (this.touchSelect(a4))
              this.onContainerMouseDown(a4);
            else
              this.zoomOption(a4), this.touch(a4, true);
          };
          a3.prototype.onDocumentMouseMove = function(a4) {
            var c2 = this.chart, k = c2.tooltip, g = this.chartPosition;
            a4 = this.normalize(a4, g);
            !g || c2.isInsidePlot(a4.chartX - c2.plotLeft, a4.chartY - c2.plotTop, { visiblePlotOnly: true }) || k && k.shouldStickOnContact(a4) || this.inClass(a4.target, "highcharts-tracker") || this.reset();
          };
          a3.prototype.onDocumentMouseUp = function(c2) {
            var f2 = C[H(a3.hoverChartIndex, -1)];
            f2 && f2.pointer.drop(c2);
          };
          a3.prototype.pinch = function(a4) {
            var c2 = this, k = c2.chart, g = c2.pinchDown, e = a4.touches || [], b = e.length, d = c2.lastValidTouch, r = c2.hasZoom, f2 = {}, m2 = 1 === b && (c2.inClass(a4.target, "highcharts-tracker") && k.runTrackerClick || c2.runChartClick), t = {}, p2 = c2.chart.tooltip;
            p2 = 1 === b && H(p2 && p2.options.followTouchMove, true);
            var n2 = c2.selectionMarker;
            1 < b ? c2.initiated = true : p2 && (c2.initiated = false);
            r && c2.initiated && !m2 && false !== a4.cancelable && a4.preventDefault();
            [].map.call(e, function(b2) {
              return c2.normalize(b2);
            });
            "touchstart" === a4.type ? ([].forEach.call(
              e,
              function(b2, d2) {
                g[d2] = { chartX: b2.chartX, chartY: b2.chartY };
              }
            ), d.x = [g[0].chartX, g[1] && g[1].chartX], d.y = [g[0].chartY, g[1] && g[1].chartY], k.axes.forEach(function(b2) {
              if (b2.zoomEnabled) {
                var d2 = k.bounds[b2.horiz ? "h" : "v"], a5 = b2.minPixelPadding, e2 = b2.toPixels(Math.min(H(b2.options.min, b2.dataMin), b2.dataMin)), c3 = b2.toPixels(Math.max(H(b2.options.max, b2.dataMax), b2.dataMax)), g2 = Math.max(e2, c3);
                d2.min = Math.min(b2.pos, Math.min(e2, c3) - a5);
                d2.max = Math.max(b2.pos + b2.len, g2 + a5);
              }
            }), c2.res = true) : p2 ? this.runPointActions(c2.normalize(a4)) : g.length && (l(
              k,
              "touchpan",
              { originalEvent: a4 },
              function() {
                n2 || (c2.selectionMarker = n2 = h({ destroy: F, touch: true }, k.plotBox));
                c2.pinchTranslate(g, e, f2, n2, t, d);
                c2.hasPinched = r;
                c2.scaleGroups(f2, t);
              }
            ), c2.res && (c2.res = false, this.reset(false, 0)));
          };
          a3.prototype.pinchTranslate = function(a4, c2, k, g, e, b) {
            this.zoomHor && this.pinchTranslateDirection(true, a4, c2, k, g, e, b);
            this.zoomVert && this.pinchTranslateDirection(false, a4, c2, k, g, e, b);
          };
          a3.prototype.pinchTranslateDirection = function(a4, c2, k, g, e, b, d, r) {
            var f2 = this.chart, h2 = a4 ? "x" : "y", l2 = a4 ? "X" : "Y", m2 = "chart" + l2, t = a4 ? "width" : "height", p2 = f2["plot" + (a4 ? "Left" : "Top")], w = f2.inverted, n2 = f2.bounds[a4 ? "h" : "v"], u2 = 1 === c2.length, y = c2[0][m2], v2 = !u2 && c2[1][m2];
            c2 = function() {
              "number" === typeof G2 && 20 < Math.abs(y - v2) && (Q = r || Math.abs(q2 - G2) / Math.abs(y - v2));
              D2 = (p2 - q2) / Q + y;
              M = f2["plot" + (a4 ? "Width" : "Height")] / Q;
            };
            var M, D2, Q = r || 1, q2 = k[0][m2], G2 = !u2 && k[1][m2];
            c2();
            k = D2;
            if (k < n2.min) {
              k = n2.min;
              var x2 = true;
            } else
              k + M > n2.max && (k = n2.max - M, x2 = true);
            x2 ? (q2 -= 0.8 * (q2 - d[h2][0]), "number" === typeof G2 && (G2 -= 0.8 * (G2 - d[h2][1])), c2()) : d[h2] = [q2, G2];
            w || (b[h2] = D2 - p2, b[t] = M);
            b = w ? 1 / Q : Q;
            e[t] = M;
            e[h2] = k;
            g[w ? a4 ? "scaleY" : "scaleX" : "scale" + l2] = Q;
            g["translate" + l2] = b * p2 + (q2 - b * y);
          };
          a3.prototype.reset = function(a4, c2) {
            var k = this.chart, g = k.hoverSeries, e = k.hoverPoint, b = k.hoverPoints, d = k.tooltip, r = d && d.shared ? b : e;
            a4 && r && K(r).forEach(function(b2) {
              b2.series.isCartesian && "undefined" === typeof b2.plotX && (a4 = false);
            });
            if (a4)
              d && r && K(r).length && (d.refresh(r), d.shared && b ? b.forEach(function(b2) {
                b2.setState(b2.state, true);
                b2.series.isCartesian && (b2.series.xAxis.crosshair && b2.series.xAxis.drawCrosshair(null, b2), b2.series.yAxis.crosshair && b2.series.yAxis.drawCrosshair(null, b2));
              }) : e && (e.setState(
                e.state,
                true
              ), k.axes.forEach(function(b2) {
                b2.crosshair && e.series[b2.coll] === b2 && b2.drawCrosshair(null, e);
              })));
            else {
              if (e)
                e.onMouseOut();
              b && b.forEach(function(b2) {
                b2.setState();
              });
              if (g)
                g.onMouseOut();
              d && d.hide(c2);
              this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
              k.axes.forEach(function(b2) {
                b2.hideCrosshair();
              });
              this.hoverX = k.hoverPoints = k.hoverPoint = null;
            }
          };
          a3.prototype.runPointActions = function(c2, f2, k) {
            var g = this.chart, e = g.tooltip && g.tooltip.options.enabled ? g.tooltip : void 0, b = e ? e.shared : false, d = f2 || g.hoverPoint, r = d && d.series || g.hoverSeries;
            f2 = this.getHoverData(d, r, g.series, (!c2 || "touchmove" !== c2.type) && (!!f2 || r && r.directTouch && this.isDirectTouch), b, c2);
            d = f2.hoverPoint;
            r = f2.hoverSeries;
            var h2 = f2.hoverPoints;
            f2 = r && r.tooltipOptions.followPointer && !r.tooltipOptions.split;
            var l2 = b && r && !r.noSharedTooltip;
            if (d && (k || d !== g.hoverPoint || e && e.isHidden)) {
              (g.hoverPoints || []).forEach(function(b2) {
                -1 === h2.indexOf(b2) && b2.setState();
              });
              if (g.hoverSeries !== r)
                r.onMouseOver();
              this.applyInactiveState(h2);
              (h2 || []).forEach(function(b2) {
                b2.setState("hover");
              });
              g.hoverPoint && g.hoverPoint.firePointEvent("mouseOut");
              if (!d.series)
                return;
              g.hoverPoints = h2;
              g.hoverPoint = d;
              d.firePointEvent("mouseOver", void 0, function() {
                e && d && e.refresh(l2 ? h2 : d, c2);
              });
            } else
              f2 && e && !e.isHidden && (k = e.getAnchor([{}], c2), g.isInsidePlot(k[0], k[1], { visiblePlotOnly: true }) && e.updatePosition({ plotX: k[0], plotY: k[1] }));
            this.unDocMouseMove || (this.unDocMouseMove = x(g.container.ownerDocument, "mousemove", function(b2) {
              var d2 = C[a3.hoverChartIndex];
              if (d2)
                d2.pointer.onDocumentMouseMove(b2);
            }), this.eventsToUnbind.push(this.unDocMouseMove));
            g.axes.forEach(function(b2) {
              var d2 = H((b2.crosshair || {}).snap, true), a4;
              d2 && ((a4 = g.hoverPoint) && a4.series[b2.coll] === b2 || (a4 = m(h2, function(d3) {
                return d3.series && d3.series[b2.coll] === b2;
              })));
              a4 || !d2 ? b2.drawCrosshair(c2, a4) : b2.hideCrosshair();
            });
          };
          a3.prototype.scaleGroups = function(a4, c2) {
            var k = this.chart;
            k.series.forEach(function(g) {
              var e = a4 || g.getPlotBox();
              g.group && (g.xAxis && g.xAxis.zoomEnabled || k.mapView) && (g.group.attr(e), g.markerGroup && (g.markerGroup.attr(e), g.markerGroup.clip(c2 ? k.clipRect : null)), g.dataLabelsGroup && g.dataLabelsGroup.attr(e));
            });
            k.clipRect.attr(c2 || k.clipBox);
          };
          a3.prototype.setDOMEvents = function() {
            var c2 = this, f2 = this.chart.container, k = f2.ownerDocument;
            f2.onmousedown = this.onContainerMouseDown.bind(this);
            f2.onmousemove = this.onContainerMouseMove.bind(this);
            f2.onclick = this.onContainerClick.bind(this);
            this.eventsToUnbind.push(x(f2, "mouseenter", this.onContainerMouseEnter.bind(this)));
            this.eventsToUnbind.push(x(f2, "mouseleave", this.onContainerMouseLeave.bind(this)));
            a3.unbindDocumentMouseUp || (a3.unbindDocumentMouseUp = x(k, "mouseup", this.onDocumentMouseUp.bind(this)));
            for (var g = this.chart.renderTo.parentElement; g && "BODY" !== g.tagName; )
              this.eventsToUnbind.push(x(g, "scroll", function() {
                delete c2.chartPosition;
              })), g = g.parentElement;
            q.hasTouch && (this.eventsToUnbind.push(x(f2, "touchstart", this.onContainerTouchStart.bind(this), { passive: false })), this.eventsToUnbind.push(x(f2, "touchmove", this.onContainerTouchMove.bind(this), { passive: false })), a3.unbindDocumentTouchEnd || (a3.unbindDocumentTouchEnd = x(k, "touchend", this.onDocumentTouchEnd.bind(this), { passive: false })));
          };
          a3.prototype.setHoverChartIndex = function() {
            var c2 = this.chart, f2 = q.charts[H(a3.hoverChartIndex, -1)];
            if (f2 && f2 !== c2)
              f2.pointer.onContainerMouseLeave({ relatedTarget: c2.container });
            f2 && f2.mouseIsDown || (a3.hoverChartIndex = c2.index);
          };
          a3.prototype.touch = function(a4, c2) {
            var k = this.chart, g;
            this.setHoverChartIndex();
            if (1 === a4.touches.length)
              if (a4 = this.normalize(a4), (g = k.isInsidePlot(a4.chartX - k.plotLeft, a4.chartY - k.plotTop, { visiblePlotOnly: true })) && !k.openMenu) {
                c2 && this.runPointActions(a4);
                if ("touchmove" === a4.type) {
                  c2 = this.pinchDown;
                  var e = c2[0] ? 4 <= Math.sqrt(Math.pow(c2[0].chartX - a4.chartX, 2) + Math.pow(c2[0].chartY - a4.chartY, 2)) : false;
                }
                H(e, true) && this.pinch(a4);
              } else
                c2 && this.reset();
            else
              2 === a4.touches.length && this.pinch(a4);
          };
          a3.prototype.touchSelect = function(a4) {
            return !(!this.chart.options.chart.zooming.singleTouch || !a4.touches || 1 !== a4.touches.length);
          };
          a3.prototype.zoomOption = function(a4) {
            var c2 = this.chart, k = c2.options.chart;
            c2 = c2.inverted;
            var g = k.zooming.type || "";
            /touch/.test(a4.type) && (g = H(k.zooming.pinchType, g));
            this.zoomX = a4 = /x/.test(g);
            this.zoomY = k = /y/.test(g);
            this.zoomHor = a4 && !c2 || k && c2;
            this.zoomVert = k && !c2 || a4 && c2;
            this.hasZoom = a4 || k;
          };
          return a3;
        }();
        "";
        return a2;
      });
      J(a, "Core/MSPointer.js", [a["Core/Globals.js"], a["Core/Pointer.js"], a["Core/Utilities.js"]], function(a2, q, A) {
        function v() {
          var a3 = [];
          a3.item = function(a4) {
            return this[a4];
          };
          m(f, function(c2) {
            a3.push({ pageX: c2.pageX, pageY: c2.pageY, target: c2.target });
          });
          return a3;
        }
        function B(a3, c2, f2, h2) {
          var l2 = F[q.hoverChartIndex || NaN];
          "touch" !== a3.pointerType && a3.pointerType !== a3.MSPOINTER_TYPE_TOUCH || !l2 || (l2 = l2.pointer, h2(a3), l2[c2]({ type: f2, target: a3.currentTarget, preventDefault: u, touches: v() }));
        }
        var C = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(c2, f2) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c3) {
              a4.__proto__ = c3;
            } || function(a4, c3) {
              for (var f3 in c3)
                c3.hasOwnProperty(f3) && (a4[f3] = c3[f3]);
            };
            return a3(c2, f2);
          };
          return function(c2, f2) {
            function h2() {
              this.constructor = c2;
            }
            a3(c2, f2);
            c2.prototype = null === f2 ? Object.create(f2) : (h2.prototype = f2.prototype, new h2());
          };
        }(), F = a2.charts, x = a2.doc, u = a2.noop, n = a2.win, c = A.addEvent, h = A.css, m = A.objectEach, l = A.pick, p = A.removeEvent, f = {}, D = !!n.PointerEvent;
        return function(m2) {
          function u2() {
            return null !== m2 && m2.apply(this, arguments) || this;
          }
          C(u2, m2);
          u2.isRequired = function() {
            return !(a2.hasTouch || !n.PointerEvent && !n.MSPointerEvent);
          };
          u2.prototype.batchMSEvents = function(a3) {
            a3(this.chart.container, D ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
            a3(this.chart.container, D ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
            a3(x, D ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
          };
          u2.prototype.destroy = function() {
            this.batchMSEvents(p);
            m2.prototype.destroy.call(this);
          };
          u2.prototype.init = function(a3, c2) {
            m2.prototype.init.call(
              this,
              a3,
              c2
            );
            this.hasZoom && h(a3.container, { "-ms-touch-action": "none", "touch-action": "none" });
          };
          u2.prototype.onContainerPointerDown = function(a3) {
            B(a3, "onContainerTouchStart", "touchstart", function(a4) {
              f[a4.pointerId] = { pageX: a4.pageX, pageY: a4.pageY, target: a4.currentTarget };
            });
          };
          u2.prototype.onContainerPointerMove = function(a3) {
            B(a3, "onContainerTouchMove", "touchmove", function(a4) {
              f[a4.pointerId] = { pageX: a4.pageX, pageY: a4.pageY };
              f[a4.pointerId].target || (f[a4.pointerId].target = a4.currentTarget);
            });
          };
          u2.prototype.onDocumentPointerUp = function(a3) {
            B(
              a3,
              "onDocumentTouchEnd",
              "touchend",
              function(a4) {
                delete f[a4.pointerId];
              }
            );
          };
          u2.prototype.setDOMEvents = function() {
            var a3 = this.chart.tooltip;
            m2.prototype.setDOMEvents.call(this);
            (this.hasZoom || l(a3 && a3.options.followTouchMove, true)) && this.batchMSEvents(c);
          };
          return u2;
        }(q);
      });
      J(a, "Core/Legend/Legend.js", [a["Core/Animation/AnimationUtilities.js"], a["Core/FormatUtilities.js"], a["Core/Globals.js"], a["Core/Series/Point.js"], a["Core/Renderer/RendererUtilities.js"], a["Core/Utilities.js"]], function(a2, q, A, E, B, C) {
        var v = a2.animObject, x = a2.setAnimation, u = q.format, n = A.marginNames, c = B.distribute, h = C.addEvent, m = C.createElement, l = C.css, p = C.defined, f = C.discardElement, D = C.find, G = C.fireEvent, H = C.isNumber, K = C.merge, y = C.pick, t = C.relativeLength, w = C.stableSort, k = C.syncTimeout;
        a2 = function() {
          function a3(a4, b) {
            this.allItems = [];
            this.contentGroup = this.box = void 0;
            this.display = false;
            this.group = void 0;
            this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0;
            this.options = void 0;
            this.padding = 0;
            this.pages = [];
            this.proximate = false;
            this.scrollGroup = void 0;
            this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0;
            this.chart = a4;
            this.init(a4, b);
          }
          a3.prototype.init = function(a4, b) {
            this.chart = a4;
            this.setOptions(b);
            b.enabled && (this.render(), h(this.chart, "endResize", function() {
              this.legend.positionCheckboxes();
            }), this.proximate ? this.unchartrender = h(this.chart, "render", function() {
              this.legend.proximatePositions();
              this.legend.positionItems();
            }) : this.unchartrender && this.unchartrender());
          };
          a3.prototype.setOptions = function(a4) {
            var b = y(a4.padding, 8);
            this.options = a4;
            this.chart.styledMode || (this.itemStyle = a4.itemStyle, this.itemHiddenStyle = K(this.itemStyle, a4.itemHiddenStyle));
            this.itemMarginTop = a4.itemMarginTop || 0;
            this.itemMarginBottom = a4.itemMarginBottom || 0;
            this.padding = b;
            this.initialItemY = b - 5;
            this.symbolWidth = y(a4.symbolWidth, 16);
            this.pages = [];
            this.proximate = "proximate" === a4.layout && !this.chart.inverted;
            this.baseline = void 0;
          };
          a3.prototype.update = function(a4, b) {
            var d = this.chart;
            this.setOptions(K(true, this.options, a4));
            this.destroy();
            d.isDirtyLegend = d.isDirtyBox = true;
            y(b, true) && d.redraw();
            G(this, "afterUpdate");
          };
          a3.prototype.colorizeItem = function(a4, b) {
            var d = a4.legendItem || {}, e = d.group, c2 = d.label, g = d.line;
            d = d.symbol;
            if (e)
              e[b ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");
            if (!this.chart.styledMode) {
              var k2 = this.options;
              e = this.itemHiddenStyle.color;
              k2 = b ? k2.itemStyle.color : e;
              var f2 = b ? a4.color || e : e, h2 = a4.options && a4.options.marker, l2 = { fill: f2 };
              c2 && c2.css({ fill: k2, color: k2 });
              g && g.attr({ stroke: f2 });
              d && (h2 && d.isMarker && (l2 = a4.pointAttribs(), b || (l2.stroke = l2.fill = e)), d.attr(l2));
            }
            G(this, "afterColorizeItem", { item: a4, visible: b });
          };
          a3.prototype.positionItems = function() {
            this.allItems.forEach(this.positionItem, this);
            this.chart.isResizing || this.positionCheckboxes();
          };
          a3.prototype.positionItem = function(a4) {
            var b = this, d = a4.legendItem || {}, e = d.group, c2 = d.x;
            c2 = void 0 === c2 ? 0 : c2;
            d = d.y;
            d = void 0 === d ? 0 : d;
            var g = this.options, k2 = g.symbolPadding, f2 = !g.rtl;
            g = a4.checkbox;
            e && e.element && (k2 = { translateX: f2 ? c2 : this.legendWidth - c2 - 2 * k2 - 4, translateY: d }, e[p(e.translateY) ? "animate" : "attr"](k2, void 0, function() {
              G(b, "afterPositionItem", { item: a4 });
            }));
            g && (g.x = c2, g.y = d);
          };
          a3.prototype.destroyItem = function(a4) {
            for (var b = a4.checkbox, d = a4.legendItem || {}, e = 0, c2 = ["group", "label", "line", "symbol"]; e < c2.length; e++) {
              var g = c2[e];
              d[g] && (d[g] = d[g].destroy());
            }
            b && f(b);
            a4.legendItem = void 0;
          };
          a3.prototype.destroy = function() {
            for (var a4 = 0, b = this.getAllItems(); a4 < b.length; a4++)
              this.destroyItem(b[a4]);
            a4 = 0;
            for (b = "clipRect up down pager nav box title group".split(" "); a4 < b.length; a4++) {
              var d = b[a4];
              this[d] && (this[d] = this[d].destroy());
            }
            this.display = null;
          };
          a3.prototype.positionCheckboxes = function() {
            var a4 = this.group && this.group.alignAttr, b = this.clipHeight || this.legendHeight, d = this.titleHeight;
            if (a4) {
              var c2 = a4.translateY;
              this.allItems.forEach(function(e) {
                var g = e.checkbox;
                if (g) {
                  var r = c2 + d + g.y + (this.scrollOffset || 0) + 3;
                  l(g, { left: a4.translateX + e.checkboxOffset + g.x - 20 + "px", top: r + "px", display: this.proximate || r > c2 - 6 && r < c2 + b - 6 ? "" : "none" });
                }
              }, this);
            }
          };
          a3.prototype.renderTitle = function() {
            var a4 = this.options, b = this.padding, d = a4.title, c2 = 0;
            d.text && (this.title || (this.title = this.chart.renderer.label(d.text, b - 3, b - 4, void 0, void 0, void 0, a4.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(d.style), this.title.add(this.group)), d.width || this.title.css({ width: this.maxLegendWidth + "px" }), a4 = this.title.getBBox(), c2 = a4.height, this.offsetWidth = a4.width, this.contentGroup.attr({ translateY: c2 }));
            this.titleHeight = c2;
          };
          a3.prototype.setText = function(a4) {
            var b = this.options;
            a4.legendItem.label.attr({ text: b.labelFormat ? u(b.labelFormat, a4, this.chart) : b.labelFormatter.call(a4) });
          };
          a3.prototype.renderItem = function(a4) {
            var b = a4.legendItem = a4.legendItem || {}, d = this.chart, c2 = d.renderer, e = this.options, g = this.symbolWidth, k2 = e.symbolPadding || 0, f2 = this.itemStyle, h2 = this.itemHiddenStyle, l2 = "horizontal" === e.layout ? y(e.itemDistance, 20) : 0, m2 = !e.rtl, p2 = !a4.series, t2 = !p2 && a4.series.drawLegendSymbol ? a4.series : a4, n2 = t2.options, w2 = this.createCheckboxForItem && n2 && n2.showCheckbox, u2 = e.useHTML, D2 = a4.options.className, Q = b.label;
            n2 = g + k2 + l2 + (w2 ? 20 : 0);
            Q || (b.group = c2.g("legend-item").addClass("highcharts-" + t2.type + "-series highcharts-color-" + a4.colorIndex + (D2 ? " " + D2 : "") + (p2 ? " highcharts-series-" + a4.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), b.label = Q = c2.text("", m2 ? g + k2 : -k2, this.baseline || 0, u2), d.styledMode || Q.css(K(a4.visible ? f2 : h2)), Q.attr({ align: m2 ? "left" : "right", zIndex: 2 }).add(b.group), this.baseline || (this.fontMetrics = c2.fontMetrics(d.styledMode ? 12 : f2.fontSize, Q), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, Q.attr("y", this.baseline), this.symbolHeight = e.symbolHeight || this.fontMetrics.f, e.squareSymbol && (this.symbolWidth = y(e.symbolWidth, Math.max(this.symbolHeight, 16)), n2 = this.symbolWidth + k2 + l2 + (w2 ? 20 : 0), m2 && Q.attr("x", this.symbolWidth + k2))), t2.drawLegendSymbol(this, a4), this.setItemEvents && this.setItemEvents(a4, Q, u2));
            w2 && !a4.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(a4);
            this.colorizeItem(a4, a4.visible);
            !d.styledMode && f2.width || Q.css({ width: (e.itemWidth || this.widthOption || d.spacingBox.width) - n2 + "px" });
            this.setText(a4);
            d = Q.getBBox();
            c2 = this.fontMetrics && this.fontMetrics.h || 0;
            a4.itemWidth = a4.checkboxOffset = e.itemWidth || b.labelWidth || d.width + n2;
            this.maxItemWidth = Math.max(this.maxItemWidth, a4.itemWidth);
            this.totalItemWidth += a4.itemWidth;
            this.itemHeight = a4.itemHeight = Math.round(b.labelHeight || (d.height > 1.5 * c2 ? d.height : c2));
          };
          a3.prototype.layoutItem = function(a4) {
            var b = this.options, d = this.padding, c2 = "horizontal" === b.layout, e = a4.itemHeight, g = this.itemMarginBottom, k2 = this.itemMarginTop, f2 = c2 ? y(b.itemDistance, 20) : 0, h2 = this.maxLegendWidth;
            b = b.alignColumns && this.totalItemWidth > h2 ? this.maxItemWidth : a4.itemWidth;
            var l2 = a4.legendItem || {};
            c2 && this.itemX - d + b > h2 && (this.itemX = d, this.lastLineHeight && (this.itemY += k2 + this.lastLineHeight + g), this.lastLineHeight = 0);
            this.lastItemY = k2 + this.itemY + g;
            this.lastLineHeight = Math.max(e, this.lastLineHeight);
            l2.x = this.itemX;
            l2.y = this.itemY;
            c2 ? this.itemX += b : (this.itemY += k2 + e + g, this.lastLineHeight = e);
            this.offsetWidth = this.widthOption || Math.max((c2 ? this.itemX - d - (a4.checkbox ? 0 : f2) : b) + d, this.offsetWidth);
          };
          a3.prototype.getAllItems = function() {
            var a4 = [];
            this.chart.series.forEach(function(b) {
              var d = b && b.options;
              b && y(
                d.showInLegend,
                p(d.linkedTo) ? false : void 0,
                true
              ) && (a4 = a4.concat((b.legendItem || {}).labels || ("point" === d.legendType ? b.data : b)));
            });
            G(this, "afterGetAllItems", { allItems: a4 });
            return a4;
          };
          a3.prototype.getAlignment = function() {
            var a4 = this.options;
            return this.proximate ? a4.align.charAt(0) + "tv" : a4.floating ? "" : a4.align.charAt(0) + a4.verticalAlign.charAt(0) + a4.layout.charAt(0);
          };
          a3.prototype.adjustMargins = function(a4, b) {
            var d = this.chart, c2 = this.options, e = this.getAlignment();
            e && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function(g, r) {
              g.test(e) && !p(a4[r]) && (d[n[r]] = Math.max(d[n[r]], d.legend[(r + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][r] * c2[r % 2 ? "x" : "y"] + y(c2.margin, 12) + b[r] + (d.titleOffset[r] || 0)));
            });
          };
          a3.prototype.proximatePositions = function() {
            var a4 = this.chart, b = [], d = "left" === this.options.align;
            this.allItems.forEach(function(c2) {
              var e;
              var g2 = d;
              if (c2.yAxis) {
                c2.xAxis.options.reversed && (g2 = !g2);
                c2.points && (e = D(g2 ? c2.points : c2.points.slice(0).reverse(), function(b2) {
                  return H(b2.plotY);
                }));
                g2 = this.itemMarginTop + c2.legendItem.label.getBBox().height + this.itemMarginBottom;
                var r = c2.yAxis.top - a4.plotTop;
                c2.visible ? (e = e ? e.plotY : c2.yAxis.height, e += r - 0.3 * g2) : e = r + c2.yAxis.height;
                b.push({ target: e, size: g2, item: c2 });
              }
            }, this);
            for (var g, k2 = 0, f2 = c(b, a4.plotHeight); k2 < f2.length; k2++) {
              var h2 = f2[k2];
              g = h2.item.legendItem || {};
              H(h2.pos) && (g.y = a4.plotTop - a4.spacing[0] + h2.pos);
            }
          };
          a3.prototype.render = function() {
            var a4 = this.chart, b = a4.renderer, d = this.options, c2 = this.padding, g = this.getAllItems(), k2 = this.group, f2 = this.box;
            this.itemX = c2;
            this.itemY = this.initialItemY;
            this.lastItemY = this.offsetWidth = 0;
            this.widthOption = t(d.width, a4.spacingBox.width - c2);
            var h2 = a4.spacingBox.width - 2 * c2 - d.x;
            -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (h2 /= 2);
            this.maxLegendWidth = this.widthOption || h2;
            k2 || (this.group = k2 = b.g("legend").addClass(d.className || "").attr({ zIndex: 7 }).add(), this.contentGroup = b.g().attr({ zIndex: 1 }).add(k2), this.scrollGroup = b.g().add(this.contentGroup));
            this.renderTitle();
            w(g, function(b2, a5) {
              return (b2.options && b2.options.legendIndex || 0) - (a5.options && a5.options.legendIndex || 0);
            });
            d.reversed && g.reverse();
            this.allItems = g;
            this.display = h2 = !!g.length;
            this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0;
            g.forEach(this.renderItem, this);
            g.forEach(this.layoutItem, this);
            g = (this.widthOption || this.offsetWidth) + c2;
            var l2 = this.lastItemY + this.lastLineHeight + this.titleHeight;
            l2 = this.handleOverflow(l2);
            l2 += c2;
            f2 || (this.box = f2 = b.rect().addClass("highcharts-legend-box").attr({ r: d.borderRadius }).add(k2));
            a4.styledMode || f2.attr({ stroke: d.borderColor, "stroke-width": d.borderWidth || 0, fill: d.backgroundColor || "none" }).shadow(d.shadow);
            if (0 < g && 0 < l2)
              f2[f2.placed ? "animate" : "attr"](f2.crisp.call({}, { x: 0, y: 0, width: g, height: l2 }, f2.strokeWidth()));
            k2[h2 ? "show" : "hide"]();
            a4.styledMode && "none" === k2.getStyle("display") && (g = l2 = 0);
            this.legendWidth = g;
            this.legendHeight = l2;
            h2 && this.align();
            this.proximate || this.positionItems();
            G(this, "afterRender");
          };
          a3.prototype.align = function(a4) {
            void 0 === a4 && (a4 = this.chart.spacingBox);
            var b = this.chart, d = this.options, c2 = a4.y;
            /(lth|ct|rth)/.test(this.getAlignment()) && 0 < b.titleOffset[0] ? c2 += b.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < b.titleOffset[2] && (c2 -= b.titleOffset[2]);
            c2 !== a4.y && (a4 = K(a4, { y: c2 }));
            b.hasRendered || (this.group.placed = false);
            this.group.align(K(d, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : d.verticalAlign }), true, a4);
          };
          a3.prototype.handleOverflow = function(a4) {
            var b = this, d = this.chart, c2 = d.renderer, e = this.options, g = e.y, k2 = "top" === e.verticalAlign, f2 = this.padding, h2 = e.maxHeight, l2 = e.navigation, m2 = y(l2.animation, true), p2 = l2.arrowSize || 12, t2 = this.pages, n2 = this.allItems, w2 = function(a5) {
              "number" === typeof a5 ? G2.attr({ height: a5 }) : G2 && (b.clipRect = G2.destroy(), b.contentGroup.clip());
              b.contentGroup.div && (b.contentGroup.div.style.clip = a5 ? "rect(" + f2 + "px,9999px," + (f2 + a5) + "px,0)" : "auto");
            }, u2 = function(a5) {
              b[a5] = c2.circle(0, 0, 1.3 * p2).translate(p2 / 2, p2 / 2).add(q2);
              d.styledMode || b[a5].attr("fill", "rgba(0,0,0,0.0001)");
              return b[a5];
            }, D2, Q, v2;
            g = d.spacingBox.height + (k2 ? -g : g) - f2;
            var q2 = this.nav, G2 = this.clipRect;
            "horizontal" !== e.layout || "middle" === e.verticalAlign || e.floating || (g /= 2);
            h2 && (g = Math.min(g, h2));
            t2.length = 0;
            a4 && 0 < g && a4 > g && false !== l2.enabled ? (this.clipHeight = D2 = Math.max(g - 20 - this.titleHeight - f2, 0), this.currentPage = y(this.currentPage, 1), this.fullHeight = a4, n2.forEach(function(b2, a5) {
              v2 = b2.legendItem || {};
              b2 = v2.y || 0;
              var d2 = Math.round(v2.label.getBBox().height), c3 = t2.length;
              if (!c3 || b2 - t2[c3 - 1] > D2 && (Q || b2) !== t2[c3 - 1])
                t2.push(Q || b2), c3++;
              v2.pageIx = c3 - 1;
              Q && ((n2[a5 - 1].legendItem || {}).pageIx = c3 - 1);
              a5 === n2.length - 1 && b2 + d2 - t2[c3 - 1] > D2 && d2 <= D2 && (t2.push(b2), v2.pageIx = c3);
              b2 !== Q && (Q = b2);
            }), G2 || (G2 = b.clipRect = c2.clipRect(0, f2, 9999, 0), b.contentGroup.clip(G2)), w2(D2), q2 || (this.nav = q2 = c2.g().attr({ zIndex: 1 }).add(this.group), this.up = c2.symbol("triangle", 0, 0, p2, p2).add(q2), u2("upTracker").on("click", function() {
              b.scroll(-1, m2);
            }), this.pager = c2.text("", 15, 10).addClass("highcharts-legend-navigation"), !d.styledMode && l2.style && this.pager.css(l2.style), this.pager.add(q2), this.down = c2.symbol("triangle-down", 0, 0, p2, p2).add(q2), u2("downTracker").on("click", function() {
              b.scroll(1, m2);
            })), b.scroll(0), a4 = g) : q2 && (w2(), this.nav = q2.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0);
            return a4;
          };
          a3.prototype.scroll = function(a4, b) {
            var d = this, c2 = this.chart, e = this.pages, g = e.length, f2 = this.clipHeight, h2 = this.options.navigation, l2 = this.pager, m2 = this.padding, p2 = this.currentPage + a4;
            p2 > g && (p2 = g);
            0 < p2 && ("undefined" !== typeof b && x(b, c2), this.nav.attr({ translateX: m2, translateY: f2 + this.padding + 7 + this.titleHeight, visibility: "inherit" }), [this.up, this.upTracker].forEach(function(b2) {
              b2.attr({ "class": 1 === p2 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
            }), l2.attr({ text: p2 + "/" + g }), [this.down, this.downTracker].forEach(function(b2) {
              b2.attr({ x: 18 + this.pager.getBBox().width, "class": p2 === g ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
            }, this), c2.styledMode || (this.up.attr({ fill: 1 === p2 ? h2.inactiveColor : h2.activeColor }), this.upTracker.css({ cursor: 1 === p2 ? "default" : "pointer" }), this.down.attr({ fill: p2 === g ? h2.inactiveColor : h2.activeColor }), this.downTracker.css({ cursor: p2 === g ? "default" : "pointer" })), this.scrollOffset = -e[p2 - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = p2, this.positionCheckboxes(), a4 = v(y(b, c2.renderer.globalAnimation, true)), k(function() {
              G(d, "afterScroll", { currentPage: p2 });
            }, a4.duration));
          };
          a3.prototype.setItemEvents = function(a4, b, d) {
            var c2 = this, e = a4.legendItem || {}, g = c2.chart.renderer.boxWrapper, k2 = a4 instanceof E, f2 = "highcharts-legend-" + (k2 ? "point" : "series") + "-active", h2 = c2.chart.styledMode, l2 = function(b2) {
              c2.allItems.forEach(function(d2) {
                a4 !== d2 && [d2].concat(d2.linkedSeries || []).forEach(function(a5) {
                  a5.setState(b2, !k2);
                });
              });
            }, m2 = 0;
            for (d = d ? [b, e.symbol] : [e.group]; m2 < d.length; m2++)
              if (e = d[m2])
                e.on("mouseover", function() {
                  a4.visible && l2("inactive");
                  a4.setState("hover");
                  a4.visible && g.addClass(f2);
                  h2 || b.css(c2.options.itemHoverStyle);
                }).on("mouseout", function() {
                  c2.chart.styledMode || b.css(K(a4.visible ? c2.itemStyle : c2.itemHiddenStyle));
                  l2("");
                  g.removeClass(f2);
                  a4.setState();
                }).on("click", function(b2) {
                  var d2 = function() {
                    a4.setVisible && a4.setVisible();
                    l2(a4.visible ? "inactive" : "");
                  };
                  g.removeClass(f2);
                  b2 = { browserEvent: b2 };
                  a4.firePointEvent ? a4.firePointEvent("legendItemClick", b2, d2) : G(a4, "legendItemClick", b2, d2);
                });
          };
          a3.prototype.createCheckboxForItem = function(a4) {
            a4.checkbox = m("input", { type: "checkbox", className: "highcharts-legend-checkbox", checked: a4.selected, defaultChecked: a4.selected }, this.options.itemCheckboxStyle, this.chart.container);
            h(a4.checkbox, "click", function(b) {
              G(a4.series || a4, "checkboxClick", { checked: b.target.checked, item: a4 }, function() {
                a4.select();
              });
            });
          };
          return a3;
        }();
        "";
        return a2;
      });
      J(a, "Core/Series/SeriesRegistry.js", [a["Core/Globals.js"], a["Core/Defaults.js"], a["Core/Series/Point.js"], a["Core/Utilities.js"]], function(a2, q, A, E) {
        var v = q.defaultOptions, C = E.extendClass, F = E.merge, x;
        (function(u) {
          function n(a3, h) {
            var c = v.plotOptions || {}, l = h.defaultOptions, p = h.prototype;
            p.type = a3;
            p.pointClass || (p.pointClass = A);
            l && (c[a3] = l);
            u.seriesTypes[a3] = h;
          }
          u.seriesTypes = a2.seriesTypes;
          u.registerSeriesType = n;
          u.seriesType = function(a3, h, m, l, p) {
            var c = v.plotOptions || {};
            h = h || "";
            c[a3] = F(c[h], m);
            n(a3, C(u.seriesTypes[h] || function() {
            }, l));
            u.seriesTypes[a3].prototype.type = a3;
            p && (u.seriesTypes[a3].prototype.pointClass = C(A, p));
            return u.seriesTypes[a3];
          };
        })(x || (x = {}));
        return x;
      });
      J(a, "Core/Chart/Chart.js", [
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/Axis/Axis.js"],
        a["Core/Defaults.js"],
        a["Core/FormatUtilities.js"],
        a["Core/Foundation.js"],
        a["Core/Globals.js"],
        a["Core/Legend/Legend.js"],
        a["Core/MSPointer.js"],
        a["Core/Pointer.js"],
        a["Core/Renderer/RendererRegistry.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Core/Renderer/SVG/SVGRenderer.js"],
        a["Core/Time.js"],
        a["Core/Utilities.js"],
        a["Core/Renderer/HTML/AST.js"]
      ], function(a2, q, A, E, B, C, F, x, u, n, c, h, m, l, p) {
        var f = a2.animate, D = a2.animObject, v = a2.setAnimation, H = A.defaultOptions, K = A.defaultTime, y = E.numberFormat, t = B.registerEventOptions, w = C.charts, k = C.doc, g = C.marginNames, e = C.svg, b = C.win, d = c.seriesTypes, r = l.addEvent, z = l.attr, I = l.cleanRecursively, N = l.createElement, P = l.css, O = l.defined, U = l.discardElement, L = l.erase, S = l.error, aa = l.extend, ba = l.find, R = l.fireEvent, M = l.getStyle, Y = l.isArray, Q = l.isNumber, ca = l.isObject, V = l.isString, W = l.merge, Z = l.objectEach, T = l.pick, da = l.pInt, J2 = l.relativeLength, fa = l.removeEvent, ea = l.splat, ha = l.syncTimeout, ia = l.uniqueKey;
        a2 = function() {
          function a3(b2, a4, d2) {
            this.series = this.renderTo = this.renderer = this.pointer = this.pointCount = this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.legend = this.labelCollectors = this.isResizing = this.index = this.eventOptions = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0;
            this.sharedClips = {};
            this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = void 0;
            this.getArgs(
              b2,
              a4,
              d2
            );
          }
          a3.chart = function(b2, d2, c2) {
            return new a3(b2, d2, c2);
          };
          a3.prototype.getArgs = function(b2, a4, d2) {
            V(b2) || b2.nodeName ? (this.renderTo = b2, this.init(a4, d2)) : this.init(b2, a4);
          };
          a3.prototype.init = function(b2, a4) {
            var d2 = b2.plotOptions || {};
            R(this, "init", { args: arguments }, function() {
              var c2 = W(H, b2), e2 = c2.chart;
              Z(c2.plotOptions, function(b3, a5) {
                ca(b3) && (b3.tooltip = d2[a5] && W(d2[a5].tooltip) || void 0);
              });
              c2.tooltip.userOptions = b2.chart && b2.chart.forExport && b2.tooltip.userOptions || b2.tooltip;
              this.userOptions = b2;
              this.margin = [];
              this.spacing = [];
              this.bounds = {
                h: {},
                v: {}
              };
              this.labelCollectors = [];
              this.callback = a4;
              this.isResizing = 0;
              var g2 = e2.zooming = e2.zooming || {};
              b2.chart && !b2.chart.zooming && (g2.resetButton = e2.resetZoomButton);
              g2.key = T(g2.key, e2.zoomKey);
              g2.pinchType = T(g2.pinchType, e2.pinchType);
              g2.singleTouch = T(g2.singleTouch, e2.zoomBySingleTouch);
              g2.type = T(g2.type, e2.zoomType);
              this.options = c2;
              this.axes = [];
              this.series = [];
              this.time = b2.time && Object.keys(b2.time).length ? new m(b2.time) : C.time;
              this.numberFormatter = e2.numberFormatter || y;
              this.styledMode = e2.styledMode;
              this.hasCartesianSeries = e2.showAxes;
              this.index = w.length;
              w.push(this);
              C.chartCount++;
              t(this, e2);
              this.xAxis = [];
              this.yAxis = [];
              this.pointCount = this.colorCounter = this.symbolCounter = 0;
              R(this, "afterInit");
              this.firstRender();
            });
          };
          a3.prototype.initSeries = function(b2) {
            var a4 = this.options.chart;
            a4 = b2.type || a4.type || a4.defaultSeriesType;
            var c2 = d[a4];
            c2 || S(17, true, this, { missingModuleFor: a4 });
            a4 = new c2();
            "function" === typeof a4.init && a4.init(this, b2);
            return a4;
          };
          a3.prototype.setSeriesData = function() {
            this.getSeriesOrderByLinks().forEach(function(b2) {
              b2.points || b2.data || !b2.enabledDataSorting || b2.setData(b2.options.data, false);
            });
          };
          a3.prototype.getSeriesOrderByLinks = function() {
            return this.series.concat().sort(function(b2, a4) {
              return b2.linkedSeries.length || a4.linkedSeries.length ? a4.linkedSeries.length - b2.linkedSeries.length : 0;
            });
          };
          a3.prototype.orderSeries = function(b2) {
            var a4 = this.series;
            b2 = b2 || 0;
            for (var d2 = a4.length; b2 < d2; ++b2)
              a4[b2] && (a4[b2].index = b2, a4[b2].name = a4[b2].getName());
          };
          a3.prototype.isInsidePlot = function(b2, a4, d2) {
            void 0 === d2 && (d2 = {});
            var c2 = this.inverted, e2 = this.plotBox, g2 = this.plotLeft, k2 = this.plotTop, f2 = this.scrollablePlotBox, r2 = 0;
            var h2 = 0;
            d2.visiblePlotOnly && this.scrollingContainer && (h2 = this.scrollingContainer, r2 = h2.scrollLeft, h2 = h2.scrollTop);
            var l2 = d2.series;
            e2 = d2.visiblePlotOnly && f2 || e2;
            f2 = d2.inverted ? a4 : b2;
            a4 = d2.inverted ? b2 : a4;
            b2 = { x: f2, y: a4, isInsidePlot: true, options: d2 };
            if (!d2.ignoreX) {
              var m2 = l2 && (c2 && !this.polar ? l2.yAxis : l2.xAxis) || { pos: g2, len: Infinity };
              f2 = d2.paneCoordinates ? m2.pos + f2 : g2 + f2;
              f2 >= Math.max(r2 + g2, m2.pos) && f2 <= Math.min(r2 + g2 + e2.width, m2.pos + m2.len) || (b2.isInsidePlot = false);
            }
            !d2.ignoreY && b2.isInsidePlot && (c2 = d2.axis && !d2.axis.isXAxis && d2.axis || l2 && (c2 ? l2.xAxis : l2.yAxis) || { pos: k2, len: Infinity }, d2 = d2.paneCoordinates ? c2.pos + a4 : k2 + a4, d2 >= Math.max(h2 + k2, c2.pos) && d2 <= Math.min(h2 + k2 + e2.height, c2.pos + c2.len) || (b2.isInsidePlot = false));
            R(this, "afterIsInsidePlot", b2);
            return b2.isInsidePlot;
          };
          a3.prototype.redraw = function(b2) {
            R(this, "beforeRedraw");
            var a4 = this.hasCartesianSeries ? this.axes : this.colorAxis || [], d2 = this.series, c2 = this.pointer, e2 = this.legend, g2 = this.userOptions.legend, k2 = this.renderer, f2 = k2.isHidden(), r2 = [], h2 = this.isDirtyBox, l2 = this.isDirtyLegend;
            this.setResponsive && this.setResponsive(false);
            v(this.hasRendered ? b2 : false, this);
            f2 && this.temporaryDisplay();
            this.layOutTitles();
            for (b2 = d2.length; b2--; ) {
              var m2 = d2[b2];
              if (m2.options.stacking || m2.options.centerInCategory) {
                var p2 = true;
                if (m2.isDirty) {
                  var z2 = true;
                  break;
                }
              }
            }
            if (z2)
              for (b2 = d2.length; b2--; )
                m2 = d2[b2], m2.options.stacking && (m2.isDirty = true);
            d2.forEach(function(b3) {
              b3.isDirty && ("point" === b3.options.legendType ? ("function" === typeof b3.updateTotals && b3.updateTotals(), l2 = true) : g2 && (g2.labelFormatter || g2.labelFormat) && (l2 = true));
              b3.isDirtyData && R(b3, "updatedData");
            });
            l2 && e2 && e2.options.enabled && (e2.render(), this.isDirtyLegend = false);
            p2 && this.getStacks();
            a4.forEach(function(b3) {
              b3.updateNames();
              b3.setScale();
            });
            this.getMargins();
            a4.forEach(function(b3) {
              b3.isDirty && (h2 = true);
            });
            a4.forEach(function(b3) {
              var a5 = b3.min + "," + b3.max;
              b3.extKey !== a5 && (b3.extKey = a5, r2.push(function() {
                R(b3, "afterSetExtremes", aa(b3.eventArgs, b3.getExtremes()));
                delete b3.eventArgs;
              }));
              (h2 || p2) && b3.redraw();
            });
            h2 && this.drawChartBox();
            R(this, "predraw");
            d2.forEach(function(b3) {
              (h2 || b3.isDirty) && b3.visible && b3.redraw();
              b3.isDirtyData = false;
            });
            c2 && c2.reset(true);
            k2.draw();
            R(this, "redraw");
            R(this, "render");
            f2 && this.temporaryDisplay(true);
            r2.forEach(function(b3) {
              b3.call();
            });
          };
          a3.prototype.get = function(b2) {
            function a4(a5) {
              return a5.id === b2 || a5.options && a5.options.id === b2;
            }
            for (var d2 = this.series, c2 = ba(this.axes, a4) || ba(this.series, a4), e2 = 0; !c2 && e2 < d2.length; e2++)
              c2 = ba(d2[e2].points || [], a4);
            return c2;
          };
          a3.prototype.getAxes = function() {
            var b2 = this, a4 = this.options, d2 = a4.xAxis = ea(a4.xAxis || {});
            a4 = a4.yAxis = ea(a4.yAxis || {});
            R(this, "getAxes");
            d2.forEach(function(b3, a5) {
              b3.index = a5;
              b3.isX = true;
            });
            a4.forEach(function(b3, a5) {
              b3.index = a5;
            });
            d2.concat(a4).forEach(function(a5) {
              new q(
                b2,
                a5
              );
            });
            R(this, "afterGetAxes");
          };
          a3.prototype.getSelectedPoints = function() {
            return this.series.reduce(function(b2, a4) {
              a4.getPointsCollection().forEach(function(a5) {
                T(a5.selectedStaging, a5.selected) && b2.push(a5);
              });
              return b2;
            }, []);
          };
          a3.prototype.getSelectedSeries = function() {
            return this.series.filter(function(b2) {
              return b2.selected;
            });
          };
          a3.prototype.setTitle = function(b2, a4, d2) {
            this.applyDescription("title", b2);
            this.applyDescription("subtitle", a4);
            this.applyDescription("caption", void 0);
            this.layOutTitles(d2);
          };
          a3.prototype.applyDescription = function(b2, a4) {
            var d2 = this, c2 = "title" === b2 ? { color: "#333333", fontSize: this.options.isStock ? "16px" : "18px" } : { color: "#666666" };
            c2 = this.options[b2] = W(!this.styledMode && { style: c2 }, this.options[b2], a4);
            var e2 = this[b2];
            e2 && a4 && (this[b2] = e2 = e2.destroy());
            c2 && !e2 && (e2 = this.renderer.text(c2.text, 0, 0, c2.useHTML).attr({ align: c2.align, "class": "highcharts-" + b2, zIndex: c2.zIndex || 4 }).add(), e2.update = function(a5) {
              d2[{ title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }[b2]](a5);
            }, this.styledMode || e2.css(c2.style), this[b2] = e2);
          };
          a3.prototype.layOutTitles = function(b2) {
            var a4 = [0, 0, 0], d2 = this.renderer, c2 = this.spacingBox;
            ["title", "subtitle", "caption"].forEach(function(b3) {
              var e3 = this[b3], g2 = this.options[b3], k2 = g2.verticalAlign || "top";
              b3 = "title" === b3 ? "top" === k2 ? -3 : 0 : "top" === k2 ? a4[0] + 2 : 0;
              var f2;
              if (e3) {
                this.styledMode || (f2 = g2.style && g2.style.fontSize);
                f2 = d2.fontMetrics(f2, e3).b;
                e3.css({ width: (g2.width || c2.width + (g2.widthAdjust || 0)) + "px" });
                var r2 = Math.round(e3.getBBox(g2.useHTML).height);
                e3.align(aa({ y: "bottom" === k2 ? f2 : b3 + f2, height: r2 }, g2), false, "spacingBox");
                g2.floating || ("top" === k2 ? a4[0] = Math.ceil(a4[0] + r2) : "bottom" === k2 && (a4[2] = Math.ceil(a4[2] + r2)));
              }
            }, this);
            a4[0] && "top" === (this.options.title.verticalAlign || "top") && (a4[0] += this.options.title.margin);
            a4[2] && "bottom" === this.options.caption.verticalAlign && (a4[2] += this.options.caption.margin);
            var e2 = !this.titleOffset || this.titleOffset.join(",") !== a4.join(",");
            this.titleOffset = a4;
            R(this, "afterLayOutTitles");
            !this.isDirtyBox && e2 && (this.isDirtyBox = this.isDirtyLegend = e2, this.hasRendered && T(b2, true) && this.isDirtyBox && this.redraw());
          };
          a3.prototype.getChartSize = function() {
            var b2 = this.options.chart, a4 = b2.width;
            b2 = b2.height;
            var d2 = this.renderTo;
            O(a4) || (this.containerWidth = M(d2, "width"));
            O(b2) || (this.containerHeight = M(d2, "height"));
            this.chartWidth = Math.max(0, a4 || this.containerWidth || 600);
            this.chartHeight = Math.max(0, J2(b2, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400));
          };
          a3.prototype.temporaryDisplay = function(b2) {
            var a4 = this.renderTo;
            if (b2)
              for (; a4 && a4.style; )
                a4.hcOrigStyle && (P(a4, a4.hcOrigStyle), delete a4.hcOrigStyle), a4.hcOrigDetached && (k.body.removeChild(a4), a4.hcOrigDetached = false), a4 = a4.parentNode;
            else
              for (; a4 && a4.style; ) {
                k.body.contains(a4) || a4.parentNode || (a4.hcOrigDetached = true, k.body.appendChild(a4));
                if ("none" === M(a4, "display", false) || a4.hcOricDetached)
                  a4.hcOrigStyle = { display: a4.style.display, height: a4.style.height, overflow: a4.style.overflow }, b2 = { display: "block", overflow: "hidden" }, a4 !== this.renderTo && (b2.height = 0), P(a4, b2), a4.offsetWidth || a4.style.setProperty("display", "block", "important");
                a4 = a4.parentNode;
                if (a4 === k.body)
                  break;
              }
          };
          a3.prototype.setClassName = function(b2) {
            this.container.className = "highcharts-container " + (b2 || "");
          };
          a3.prototype.getContainer = function() {
            var b2 = this.options, a4 = b2.chart, d2 = ia(), c2, g2 = this.renderTo;
            g2 || (this.renderTo = g2 = a4.renderTo);
            V(g2) && (this.renderTo = g2 = k.getElementById(g2));
            g2 || S(13, true, this);
            var f2 = da(z(g2, "data-highcharts-chart"));
            Q(f2) && w[f2] && w[f2].hasRendered && w[f2].destroy();
            z(g2, "data-highcharts-chart", this.index);
            g2.innerHTML = p.emptyHTML;
            a4.skipClone || g2.offsetWidth || this.temporaryDisplay();
            this.getChartSize();
            f2 = this.chartWidth;
            var r2 = this.chartHeight;
            P(g2, { overflow: "hidden" });
            this.styledMode || (c2 = aa({
              position: "relative",
              overflow: "hidden",
              width: f2 + "px",
              height: r2 + "px",
              textAlign: "left",
              lineHeight: "normal",
              zIndex: 0,
              "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
              userSelect: "none",
              "touch-action": "manipulation",
              outline: "none"
            }, a4.style || {}));
            this.container = d2 = N("div", { id: d2 }, c2, g2);
            this._cursor = d2.style.cursor;
            this.renderer = new (a4.renderer || !e ? n.getRendererType(a4.renderer) : h)(d2, f2, r2, void 0, a4.forExport, b2.exporting && b2.exporting.allowHTML, this.styledMode);
            v(void 0, this);
            this.setClassName(a4.className);
            if (this.styledMode)
              for (var l2 in b2.defs)
                this.renderer.definition(b2.defs[l2]);
            else
              this.renderer.setStyle(a4.style);
            this.renderer.chartIndex = this.index;
            R(this, "afterGetContainer");
          };
          a3.prototype.getMargins = function(b2) {
            var a4 = this.spacing, d2 = this.margin, c2 = this.titleOffset;
            this.resetMargins();
            c2[0] && !O(d2[0]) && (this.plotTop = Math.max(this.plotTop, c2[0] + a4[0]));
            c2[2] && !O(d2[2]) && (this.marginBottom = Math.max(this.marginBottom, c2[2] + a4[2]));
            this.legend && this.legend.display && this.legend.adjustMargins(d2, a4);
            R(this, "getMargins");
            b2 || this.getAxisMargins();
          };
          a3.prototype.getAxisMargins = function() {
            var b2 = this, a4 = b2.axisOffset = [0, 0, 0, 0], d2 = b2.colorAxis, c2 = b2.margin, e2 = function(b3) {
              b3.forEach(function(b4) {
                b4.visible && b4.getOffset();
              });
            };
            b2.hasCartesianSeries ? e2(b2.axes) : d2 && d2.length && e2(d2);
            g.forEach(function(d3, e3) {
              O(c2[e3]) || (b2[d3] += a4[e3]);
            });
            b2.setChartSize();
          };
          a3.prototype.reflow = function(a4) {
            var d2 = this, c2 = d2.options.chart, e2 = d2.renderTo, g2 = O(c2.width) && O(c2.height), f2 = c2.width || M(e2, "width");
            c2 = c2.height || M(e2, "height");
            e2 = a4 ? a4.target : b;
            delete d2.pointer.chartPosition;
            if (!g2 && !d2.isPrinting && f2 && c2 && (e2 === b || e2 === k)) {
              if (f2 !== d2.containerWidth || c2 !== d2.containerHeight)
                l.clearTimeout(d2.reflowTimeout), d2.reflowTimeout = ha(function() {
                  d2.container && d2.setSize(void 0, void 0, false);
                }, a4 ? 100 : 0);
              d2.containerWidth = f2;
              d2.containerHeight = c2;
            }
          };
          a3.prototype.setReflow = function(a4) {
            var d2 = this;
            false === a4 || this.unbindReflow ? false === a4 && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = r(b, "resize", function(b2) {
              d2.options && d2.reflow(b2);
            }), r(this, "destroy", this.unbindReflow));
          };
          a3.prototype.setSize = function(b2, a4, d2) {
            var c2 = this, e2 = c2.renderer;
            c2.isResizing += 1;
            v(d2, c2);
            d2 = e2.globalAnimation;
            c2.oldChartHeight = c2.chartHeight;
            c2.oldChartWidth = c2.chartWidth;
            "undefined" !== typeof b2 && (c2.options.chart.width = b2);
            "undefined" !== typeof a4 && (c2.options.chart.height = a4);
            c2.getChartSize();
            c2.styledMode || (d2 ? f : P)(c2.container, { width: c2.chartWidth + "px", height: c2.chartHeight + "px" }, d2);
            c2.setChartSize(true);
            e2.setSize(c2.chartWidth, c2.chartHeight, d2);
            c2.axes.forEach(function(b3) {
              b3.isDirty = true;
              b3.setScale();
            });
            c2.isDirtyLegend = true;
            c2.isDirtyBox = true;
            c2.layOutTitles();
            c2.getMargins();
            c2.redraw(d2);
            c2.oldChartHeight = null;
            R(
              c2,
              "resize"
            );
            ha(function() {
              c2 && R(c2, "endResize", null, function() {
                --c2.isResizing;
              });
            }, D(d2).duration);
          };
          a3.prototype.setChartSize = function(b2) {
            var a4 = this.inverted, d2 = this.renderer, c2 = this.chartWidth, e2 = this.chartHeight, g2 = this.options.chart, f2 = this.spacing, k2 = this.clipOffset, r2, h2, l2, m2;
            this.plotLeft = r2 = Math.round(this.plotLeft);
            this.plotTop = h2 = Math.round(this.plotTop);
            this.plotWidth = l2 = Math.max(0, Math.round(c2 - r2 - this.marginRight));
            this.plotHeight = m2 = Math.max(0, Math.round(e2 - h2 - this.marginBottom));
            this.plotSizeX = a4 ? m2 : l2;
            this.plotSizeY = a4 ? l2 : m2;
            this.plotBorderWidth = g2.plotBorderWidth || 0;
            this.spacingBox = d2.spacingBox = { x: f2[3], y: f2[0], width: c2 - f2[3] - f2[1], height: e2 - f2[0] - f2[2] };
            this.plotBox = d2.plotBox = { x: r2, y: h2, width: l2, height: m2 };
            a4 = 2 * Math.floor(this.plotBorderWidth / 2);
            c2 = Math.ceil(Math.max(a4, k2[3]) / 2);
            e2 = Math.ceil(Math.max(a4, k2[0]) / 2);
            this.clipBox = { x: c2, y: e2, width: Math.floor(this.plotSizeX - Math.max(a4, k2[1]) / 2 - c2), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(a4, k2[2]) / 2 - e2)) };
            b2 || (this.axes.forEach(function(b3) {
              b3.setAxisSize();
              b3.setAxisTranslation();
            }), d2.alignElements());
            R(this, "afterSetChartSize", { skipAxes: b2 });
          };
          a3.prototype.resetMargins = function() {
            R(this, "resetMargins");
            var b2 = this, a4 = b2.options.chart;
            ["margin", "spacing"].forEach(function(d2) {
              var c2 = a4[d2], e2 = ca(c2) ? c2 : [c2, c2, c2, c2];
              ["Top", "Right", "Bottom", "Left"].forEach(function(c3, g2) {
                b2[d2][g2] = T(a4[d2 + c3], e2[g2]);
              });
            });
            g.forEach(function(a5, d2) {
              b2[a5] = T(b2.margin[d2], b2.spacing[d2]);
            });
            b2.axisOffset = [0, 0, 0, 0];
            b2.clipOffset = [0, 0, 0, 0];
          };
          a3.prototype.drawChartBox = function() {
            var b2 = this.options.chart, a4 = this.renderer, d2 = this.chartWidth, c2 = this.chartHeight, e2 = this.styledMode, g2 = this.plotBGImage, f2 = b2.backgroundColor, k2 = b2.plotBackgroundColor, r2 = b2.plotBackgroundImage, h2 = this.plotLeft, l2 = this.plotTop, m2 = this.plotWidth, p2 = this.plotHeight, z2 = this.plotBox, t2 = this.clipRect, n2 = this.clipBox, w2 = this.chartBackground, u2 = this.plotBackground, I2 = this.plotBorder, M2, y2 = "animate";
            w2 || (this.chartBackground = w2 = a4.rect().addClass("highcharts-background").add(), y2 = "attr");
            if (e2)
              var Q2 = M2 = w2.strokeWidth();
            else {
              Q2 = b2.borderWidth || 0;
              M2 = Q2 + (b2.shadow ? 8 : 0);
              f2 = { fill: f2 || "none" };
              if (Q2 || w2["stroke-width"])
                f2.stroke = b2.borderColor, f2["stroke-width"] = Q2;
              w2.attr(f2).shadow(b2.shadow);
            }
            w2[y2]({ x: M2 / 2, y: M2 / 2, width: d2 - M2 - Q2 % 2, height: c2 - M2 - Q2 % 2, r: b2.borderRadius });
            y2 = "animate";
            u2 || (y2 = "attr", this.plotBackground = u2 = a4.rect().addClass("highcharts-plot-background").add());
            u2[y2](z2);
            e2 || (u2.attr({ fill: k2 || "none" }).shadow(b2.plotShadow), r2 && (g2 ? (r2 !== g2.attr("href") && g2.attr("href", r2), g2.animate(z2)) : this.plotBGImage = a4.image(r2, h2, l2, m2, p2).add()));
            t2 ? t2.animate({ width: n2.width, height: n2.height }) : this.clipRect = a4.clipRect(n2);
            y2 = "animate";
            I2 || (y2 = "attr", this.plotBorder = I2 = a4.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add());
            e2 || I2.attr({ stroke: b2.plotBorderColor, "stroke-width": b2.plotBorderWidth || 0, fill: "none" });
            I2[y2](I2.crisp({ x: h2, y: l2, width: m2, height: p2 }, -I2.strokeWidth()));
            this.isDirtyBox = false;
            R(this, "afterDrawChartBox");
          };
          a3.prototype.propFromSeries = function() {
            var b2 = this, a4 = b2.options.chart, c2 = b2.options.series, e2, g2, f2;
            ["inverted", "angular", "polar"].forEach(function(k2) {
              g2 = d[a4.type || a4.defaultSeriesType];
              f2 = a4[k2] || g2 && g2.prototype[k2];
              for (e2 = c2 && c2.length; !f2 && e2--; )
                (g2 = d[c2[e2].type]) && g2.prototype[k2] && (f2 = true);
              b2[k2] = f2;
            });
          };
          a3.prototype.linkSeries = function() {
            var b2 = this, a4 = b2.series;
            a4.forEach(function(b3) {
              b3.linkedSeries.length = 0;
            });
            a4.forEach(function(a5) {
              var d2 = a5.options.linkedTo;
              V(d2) && (d2 = ":previous" === d2 ? b2.series[a5.index - 1] : b2.get(d2)) && d2.linkedParent !== a5 && (d2.linkedSeries.push(a5), a5.linkedParent = d2, d2.enabledDataSorting && a5.setDataSortingOptions(), a5.visible = T(a5.options.visible, d2.options.visible, a5.visible));
            });
            R(this, "afterLinkSeries");
          };
          a3.prototype.renderSeries = function() {
            this.series.forEach(function(b2) {
              b2.translate();
              b2.render();
            });
          };
          a3.prototype.renderLabels = function() {
            var b2 = this, a4 = b2.options.labels;
            a4.items && a4.items.forEach(function(d2) {
              var c2 = aa(a4.style, d2.style), e2 = da(c2.left) + b2.plotLeft, g2 = da(c2.top) + b2.plotTop + 12;
              delete c2.left;
              delete c2.top;
              b2.renderer.text(d2.html, e2, g2).attr({ zIndex: 2 }).css(c2).add();
            });
          };
          a3.prototype.render = function() {
            var b2 = this.axes, a4 = this.colorAxis, d2 = this.renderer, c2 = this.options, e2 = function(b3) {
              b3.forEach(function(b4) {
                b4.visible && b4.render();
              });
            }, g2 = 0;
            this.setTitle();
            this.legend = new F(this, c2.legend);
            this.getStacks && this.getStacks();
            this.getMargins(true);
            this.setChartSize();
            c2 = this.plotWidth;
            b2.some(function(b3) {
              if (b3.horiz && b3.visible && b3.options.labels.enabled && b3.series.length)
                return g2 = 21, true;
            });
            var f2 = this.plotHeight = Math.max(this.plotHeight - g2, 0);
            b2.forEach(function(b3) {
              b3.setScale();
            });
            this.getAxisMargins();
            var k2 = 1.1 < c2 / this.plotWidth, r2 = 1.05 < f2 / this.plotHeight;
            if (k2 || r2)
              b2.forEach(function(b3) {
                (b3.horiz && k2 || !b3.horiz && r2) && b3.setTickInterval(true);
              }), this.getMargins();
            this.drawChartBox();
            this.hasCartesianSeries ? e2(b2) : a4 && a4.length && e2(a4);
            this.seriesGroup || (this.seriesGroup = d2.g("series-group").attr({ zIndex: 3 }).add());
            this.renderSeries();
            this.renderLabels();
            this.addCredits();
            this.setResponsive && this.setResponsive();
            this.hasRendered = true;
          };
          a3.prototype.addCredits = function(a4) {
            var d2 = this, c2 = W(true, this.options.credits, a4);
            c2.enabled && !this.credits && (this.credits = this.renderer.text(c2.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
              c2.href && (b.location.href = c2.href);
            }).attr({ align: c2.position.align, zIndex: 8 }), d2.styledMode || this.credits.css(c2.style), this.credits.add().align(c2.position), this.credits.update = function(b2) {
              d2.credits = d2.credits.destroy();
              d2.addCredits(b2);
            });
          };
          a3.prototype.destroy = function() {
            var b2 = this, a4 = b2.axes, d2 = b2.series, c2 = b2.container, e2 = c2 && c2.parentNode, g2;
            R(b2, "destroy");
            b2.renderer.forExport ? L(w, b2) : w[b2.index] = void 0;
            C.chartCount--;
            b2.renderTo.removeAttribute("data-highcharts-chart");
            fa(b2);
            for (g2 = a4.length; g2--; )
              a4[g2] = a4[g2].destroy();
            this.scroller && this.scroller.destroy && this.scroller.destroy();
            for (g2 = d2.length; g2--; )
              d2[g2] = d2[g2].destroy();
            "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(a5) {
              var d3 = b2[a5];
              d3 && d3.destroy && (b2[a5] = d3.destroy());
            });
            c2 && (c2.innerHTML = p.emptyHTML, fa(c2), e2 && U(c2));
            Z(b2, function(a5, d3) {
              delete b2[d3];
            });
          };
          a3.prototype.firstRender = function() {
            var b2 = this, a4 = b2.options;
            if (!b2.isReadyToRender || b2.isReadyToRender()) {
              b2.getContainer();
              b2.resetMargins();
              b2.setChartSize();
              b2.propFromSeries();
              b2.getAxes();
              (Y(a4.series) ? a4.series : []).forEach(function(a5) {
                b2.initSeries(a5);
              });
              b2.linkSeries();
              b2.setSeriesData();
              R(b2, "beforeRender");
              u && (x.isRequired() ? b2.pointer = new x(b2, a4) : b2.pointer = new u(b2, a4));
              b2.render();
              b2.pointer.getChartPosition();
              if (!b2.renderer.imgCount && !b2.hasLoaded)
                b2.onload();
              b2.temporaryDisplay(true);
            }
          };
          a3.prototype.onload = function() {
            this.callbacks.concat([this.callback]).forEach(function(b2) {
              b2 && "undefined" !== typeof this.index && b2.apply(this, [this]);
            }, this);
            R(this, "load");
            R(this, "render");
            O(this.index) && this.setReflow(this.options.chart.reflow);
            this.warnIfA11yModuleNotLoaded();
            this.hasLoaded = true;
          };
          a3.prototype.warnIfA11yModuleNotLoaded = function() {
            var b2 = this.options, a4 = this.title;
            b2 && !this.accessibility && (this.renderer.boxWrapper.attr({ role: "img", "aria-label": (a4 && a4.element.textContent || "").replace(/</g, "&lt;") }), b2.accessibility && false === b2.accessibility.enabled || S(
              'Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.',
              false,
              this
            ));
          };
          a3.prototype.addSeries = function(b2, a4, d2) {
            var c2 = this, e2;
            b2 && (a4 = T(a4, true), R(c2, "addSeries", { options: b2 }, function() {
              e2 = c2.initSeries(b2);
              c2.isDirtyLegend = true;
              c2.linkSeries();
              e2.enabledDataSorting && e2.setData(b2.data, false);
              R(c2, "afterAddSeries", { series: e2 });
              a4 && c2.redraw(d2);
            }));
            return e2;
          };
          a3.prototype.addAxis = function(b2, a4, d2, c2) {
            return this.createAxis(a4 ? "xAxis" : "yAxis", { axis: b2, redraw: d2, animation: c2 });
          };
          a3.prototype.addColorAxis = function(b2, a4, d2) {
            return this.createAxis("colorAxis", { axis: b2, redraw: a4, animation: d2 });
          };
          a3.prototype.createAxis = function(b2, a4) {
            b2 = new q(this, W(a4.axis, { index: this[b2].length, isX: "xAxis" === b2 }));
            T(a4.redraw, true) && this.redraw(a4.animation);
            return b2;
          };
          a3.prototype.showLoading = function(b2) {
            var a4 = this, d2 = a4.options, c2 = d2.loading, e2 = function() {
              g2 && P(g2, { left: a4.plotLeft + "px", top: a4.plotTop + "px", width: a4.plotWidth + "px", height: a4.plotHeight + "px" });
            }, g2 = a4.loadingDiv, k2 = a4.loadingSpan;
            g2 || (a4.loadingDiv = g2 = N("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, a4.container));
            k2 || (a4.loadingSpan = k2 = N(
              "span",
              { className: "highcharts-loading-inner" },
              null,
              g2
            ), r(a4, "redraw", e2));
            g2.className = "highcharts-loading";
            p.setElementHTML(k2, T(b2, d2.lang.loading, ""));
            a4.styledMode || (P(g2, aa(c2.style, { zIndex: 10 })), P(k2, c2.labelStyle), a4.loadingShown || (P(g2, { opacity: 0, display: "" }), f(g2, { opacity: c2.style.opacity || 0.5 }, { duration: c2.showDuration || 0 })));
            a4.loadingShown = true;
            e2();
          };
          a3.prototype.hideLoading = function() {
            var b2 = this.options, a4 = this.loadingDiv;
            a4 && (a4.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || f(a4, { opacity: 0 }, {
              duration: b2.loading.hideDuration || 100,
              complete: function() {
                P(a4, { display: "none" });
              }
            }));
            this.loadingShown = false;
          };
          a3.prototype.update = function(b2, a4, d2, c2) {
            var e2 = this, g2 = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }, f2 = b2.isResponsiveOptions, k2 = [], r2, h2;
            R(e2, "update", { options: b2 });
            f2 || e2.setResponsive(false, true);
            b2 = I(b2, e2.options);
            e2.userOptions = W(e2.userOptions, b2);
            var l2 = b2.chart;
            if (l2) {
              W(true, e2.options.chart, l2);
              "className" in l2 && e2.setClassName(l2.className);
              "reflow" in l2 && e2.setReflow(l2.reflow);
              if ("inverted" in l2 || "polar" in l2 || "type" in l2) {
                e2.propFromSeries();
                var p2 = true;
              }
              "alignTicks" in l2 && (p2 = true);
              "events" in l2 && t(this, l2);
              Z(l2, function(b3, a5) {
                -1 !== e2.propsRequireUpdateSeries.indexOf("chart." + a5) && (r2 = true);
                -1 !== e2.propsRequireDirtyBox.indexOf(a5) && (e2.isDirtyBox = true);
                -1 !== e2.propsRequireReflow.indexOf(a5) && (f2 ? e2.isDirtyBox = true : h2 = true);
              });
              !e2.styledMode && l2.style && e2.renderer.setStyle(e2.options.chart.style || {});
            }
            !e2.styledMode && b2.colors && (this.options.colors = b2.colors);
            b2.time && (this.time === K && (this.time = new m(b2.time)), W(true, e2.options.time, b2.time));
            Z(b2, function(a5, d3) {
              if (e2[d3] && "function" === typeof e2[d3].update)
                e2[d3].update(a5, false);
              else if ("function" === typeof e2[g2[d3]])
                e2[g2[d3]](a5);
              else
                "colors" !== d3 && -1 === e2.collectionsWithUpdate.indexOf(d3) && W(true, e2.options[d3], b2[d3]);
              "chart" !== d3 && -1 !== e2.propsRequireUpdateSeries.indexOf(d3) && (r2 = true);
            });
            this.collectionsWithUpdate.forEach(function(a5) {
              if (b2[a5]) {
                var c3 = [];
                e2[a5].forEach(function(b3, a6) {
                  b3.options.isInternal || c3.push(T(b3.options.index, a6));
                });
                ea(b2[a5]).forEach(function(b3, g3) {
                  var f3 = O(b3.id), k3;
                  f3 && (k3 = e2.get(b3.id));
                  !k3 && e2[a5] && (k3 = e2[a5][c3 ? c3[g3] : g3]) && f3 && O(k3.options.id) && (k3 = void 0);
                  k3 && k3.coll === a5 && (k3.update(b3, false), d2 && (k3.touched = true));
                  !k3 && d2 && e2.collectionsWithInit[a5] && (e2.collectionsWithInit[a5][0].apply(e2, [b3].concat(e2.collectionsWithInit[a5][1] || []).concat([false])).touched = true);
                });
                d2 && e2[a5].forEach(function(b3) {
                  b3.touched || b3.options.isInternal ? delete b3.touched : k2.push(b3);
                });
              }
            });
            k2.forEach(function(b3) {
              b3.chart && b3.remove && b3.remove(false);
            });
            p2 && e2.axes.forEach(function(b3) {
              b3.update({}, false);
            });
            r2 && e2.getSeriesOrderByLinks().forEach(function(b3) {
              b3.chart && b3.update({}, false);
            }, this);
            p2 = l2 && l2.width;
            l2 = l2 && (V(l2.height) ? J2(l2.height, p2 || e2.chartWidth) : l2.height);
            h2 || Q(p2) && p2 !== e2.chartWidth || Q(l2) && l2 !== e2.chartHeight ? e2.setSize(p2, l2, c2) : T(a4, true) && e2.redraw(c2);
            R(e2, "afterUpdate", { options: b2, redraw: a4, animation: c2 });
          };
          a3.prototype.setSubtitle = function(b2, a4) {
            this.applyDescription("subtitle", b2);
            this.layOutTitles(a4);
          };
          a3.prototype.setCaption = function(b2, a4) {
            this.applyDescription("caption", b2);
            this.layOutTitles(a4);
          };
          a3.prototype.showResetZoom = function() {
            function b2() {
              a4.zoomOut();
            }
            var a4 = this, d2 = H.lang, c2 = a4.options.chart.zooming.resetButton, e2 = c2.theme, g2 = "chart" === c2.relativeTo || "spacingBox" === c2.relativeTo ? null : "scrollablePlotBox";
            R(this, "beforeShowResetZoom", null, function() {
              a4.resetZoomButton = a4.renderer.button(d2.resetZoom, null, null, b2, e2).attr({ align: c2.position.align, title: d2.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(c2.position, false, g2);
            });
            R(this, "afterShowResetZoom");
          };
          a3.prototype.zoomOut = function() {
            R(this, "selection", { resetSelection: true }, this.zoom);
          };
          a3.prototype.zoom = function(b2) {
            var a4 = this, d2 = a4.pointer, c2 = false, e2;
            !b2 || b2.resetSelection ? (a4.axes.forEach(function(b3) {
              e2 = b3.zoom();
            }), d2.initiated = false) : b2.xAxis.concat(b2.yAxis).forEach(function(b3) {
              var g3 = b3.axis;
              if (d2[g3.isXAxis ? "zoomX" : "zoomY"] && O(d2.mouseDownX) && O(d2.mouseDownY) && a4.isInsidePlot(d2.mouseDownX - a4.plotLeft, d2.mouseDownY - a4.plotTop, { axis: g3 }) || !O(a4.inverted ? d2.mouseDownX : d2.mouseDownY))
                e2 = g3.zoom(b3.min, b3.max), g3.displayBtn && (c2 = true);
            });
            var g2 = a4.resetZoomButton;
            c2 && !g2 ? a4.showResetZoom() : !c2 && ca(g2) && (a4.resetZoomButton = g2.destroy());
            e2 && a4.redraw(T(a4.options.chart.animation, b2 && b2.animation, 100 > a4.pointCount));
          };
          a3.prototype.pan = function(b2, a4) {
            var d2 = this, c2 = d2.hoverPoints;
            a4 = "object" === typeof a4 ? a4 : { enabled: a4, type: "x" };
            var e2 = d2.options.chart;
            e2 && e2.panning && (e2.panning = a4);
            var g2 = a4.type, k2;
            R(this, "pan", { originalEvent: b2 }, function() {
              c2 && c2.forEach(function(b3) {
                b3.setState();
              });
              var a5 = d2.xAxis;
              "xy" === g2 ? a5 = a5.concat(d2.yAxis) : "y" === g2 && (a5 = d2.yAxis);
              var e3 = {};
              a5.forEach(function(a6) {
                if (a6.options.panningEnabled && !a6.options.isInternal) {
                  var c3 = a6.horiz, f2 = b2[c3 ? "chartX" : "chartY"];
                  c3 = c3 ? "mouseDownX" : "mouseDownY";
                  var r2 = d2[c3], h2 = a6.minPointOffset || 0, l2 = a6.reversed && !d2.inverted || !a6.reversed && d2.inverted ? -1 : 1, m2 = a6.getExtremes(), p2 = a6.toValue(r2 - f2, true) + h2 * l2, z2 = a6.toValue(r2 + a6.len - f2, true) - (h2 * l2 || a6.isXAxis && a6.pointRangePadding || 0), t2 = z2 < p2;
                  l2 = a6.hasVerticalPanning();
                  r2 = t2 ? z2 : p2;
                  p2 = t2 ? p2 : z2;
                  var n2 = a6.panningState;
                  !l2 || a6.isXAxis || n2 && !n2.isDirty || a6.series.forEach(function(b3) {
                    var a7 = b3.getProcessedData(true);
                    a7 = b3.getExtremes(a7.yData, true);
                    n2 || (n2 = { startMin: Number.MAX_VALUE, startMax: -Number.MAX_VALUE });
                    Q(a7.dataMin) && Q(a7.dataMax) && (n2.startMin = Math.min(T(b3.options.threshold, Infinity), a7.dataMin, n2.startMin), n2.startMax = Math.max(T(b3.options.threshold, -Infinity), a7.dataMax, n2.startMax));
                  });
                  l2 = Math.min(T(n2 && n2.startMin, m2.dataMin), h2 ? m2.min : a6.toValue(a6.toPixels(m2.min) - a6.minPixelPadding));
                  z2 = Math.max(T(n2 && n2.startMax, m2.dataMax), h2 ? m2.max : a6.toValue(a6.toPixels(m2.max) + a6.minPixelPadding));
                  a6.panningState = n2;
                  a6.isOrdinal || (h2 = l2 - r2, 0 < h2 && (p2 += h2, r2 = l2), h2 = p2 - z2, 0 < h2 && (p2 = z2, r2 -= h2), a6.series.length && r2 !== m2.min && p2 !== m2.max && r2 >= l2 && p2 <= z2 && (a6.setExtremes(r2, p2, false, false, { trigger: "pan" }), !d2.resetZoomButton && r2 !== l2 && p2 !== z2 && g2.match("y") && (d2.showResetZoom(), a6.displayBtn = false), k2 = true), e3[c3] = f2);
                }
              });
              Z(e3, function(b3, a6) {
                d2[a6] = b3;
              });
              k2 && d2.redraw(false);
              P(d2.container, { cursor: "move" });
            });
          };
          return a3;
        }();
        aa(a2.prototype, {
          callbacks: [],
          collectionsWithInit: { xAxis: [a2.prototype.addAxis, [true]], yAxis: [a2.prototype.addAxis, [false]], series: [a2.prototype.addSeries] },
          collectionsWithUpdate: ["xAxis", "yAxis", "series"],
          propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
          propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
          propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")
        });
        "";
        return a2;
      });
      J(a, "Core/Legend/LegendSymbol.js", [a["Core/Utilities.js"]], function(a2) {
        var q = a2.extend, v = a2.merge, E = a2.pick, B;
        (function(a3) {
          a3.drawLineMarker = function(a4) {
            var x = this.legendItem = this.legendItem || {}, u = this.options, n = a4.symbolWidth, c = a4.symbolHeight, h = c / 2, m = this.chart.renderer, l = x.group;
            a4 = a4.baseline - Math.round(0.3 * a4.fontMetrics.b);
            var p = {}, f = u.marker, D = 0;
            this.chart.styledMode || (p = { "stroke-width": Math.min(u.lineWidth || 0, 24) }, u.dashStyle ? p.dashstyle = u.dashStyle : "square" !== u.linecap && (p["stroke-linecap"] = "round"));
            x.line = m.path().addClass("highcharts-graph").attr(p).add(l);
            p["stroke-linecap"] && (D = Math.min(x.line.strokeWidth(), n) / 2);
            x.line.attr({ d: [["M", D, a4], ["L", n - D, a4]] });
            f && false !== f.enabled && n && (u = Math.min(E(f.radius, h), h), 0 === this.symbol.indexOf("url") && (f = v(f, { width: c, height: c }), u = 0), x.symbol = x = m.symbol(this.symbol, n / 2 - u, a4 - u, 2 * u, 2 * u, q({ context: "legend" }, f)).addClass("highcharts-point").add(l), x.isMarker = true);
          };
          a3.drawRectangle = function(a4, q2) {
            q2 = q2.legendItem || {};
            var u = a4.symbolHeight, n = a4.options.squareSymbol;
            q2.symbol = this.chart.renderer.rect(n ? (a4.symbolWidth - u) / 2 : 0, a4.baseline - u + 1, n ? u : a4.symbolWidth, u, E(a4.options.symbolRadius, u / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(q2.group);
          };
        })(B || (B = {}));
        return B;
      });
      J(a, "Core/Series/SeriesDefaults.js", [], function() {
        return {
          lineWidth: 2,
          allowPointSelect: false,
          crisp: true,
          showCheckbox: false,
          animation: { duration: 1e3 },
          events: {},
          marker: {
            enabledThreshold: 2,
            lineColor: "#ffffff",
            lineWidth: 0,
            radius: 4,
            states: { normal: { animation: true }, hover: { animation: { duration: 50 }, enabled: true, radiusPlus: 2, lineWidthPlus: 1 }, select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 } }
          },
          point: { events: {} },
          dataLabels: { animation: {}, align: "center", borderWidth: 0, defer: true, formatter: function() {
            var a2 = this.series.chart.numberFormatter;
            return "number" !== typeof this.y ? "" : a2(this.y, -1);
          }, padding: 5, style: { fontSize: "11px", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 },
          cropThreshold: 300,
          opacity: 1,
          pointRange: 0,
          softThreshold: true,
          states: { normal: { animation: true }, hover: { animation: { duration: 50 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: 0.25 } }, select: { animation: { duration: 0 } }, inactive: { animation: { duration: 50 }, opacity: 0.2 } },
          stickyTracking: true,
          turboThreshold: 1e3,
          findNearestPointBy: "x"
        };
      });
      J(a, "Core/Series/Series.js", [
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/Defaults.js"],
        a["Core/Foundation.js"],
        a["Core/Globals.js"],
        a["Core/Legend/LegendSymbol.js"],
        a["Core/Series/Point.js"],
        a["Core/Series/SeriesDefaults.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Core/Renderer/SVG/SVGElement.js"],
        a["Core/Utilities.js"]
      ], function(a2, q, A, E, B, C, F, x, u, n) {
        var c = a2.animObject, h = a2.setAnimation, m = q.defaultOptions, l = A.registerEventOptions, p = E.hasTouch, f = E.svg, D = E.win, v = x.seriesTypes, H = n.arrayMax, K = n.arrayMin, y = n.clamp, t = n.cleanRecursively, w = n.correctFloat, k = n.defined, g = n.erase, e = n.error, b = n.extend, d = n.find, r = n.fireEvent, z = n.getNestedProperty, I = n.isArray, N = n.isNumber, P = n.isString, O = n.merge, U = n.objectEach, L = n.pick, S = n.removeEvent, aa = n.splat, ba = n.syncTimeout;
        a2 = function() {
          function a3() {
            this.zones = this.yAxis = this.xAxis = this.userOptions = this.tooltipOptions = this.processedYData = this.processedXData = this.points = this.options = this.linkedSeries = this.index = this.eventsToUnbind = this.eventOptions = this.data = this.chart = this._i = void 0;
          }
          a3.prototype.init = function(a4, d2) {
            r(this, "init", { options: d2 });
            var c2 = this, e2 = a4.series;
            this.eventsToUnbind = [];
            c2.chart = a4;
            c2.options = c2.setOptions(d2);
            d2 = c2.options;
            c2.linkedSeries = [];
            c2.bindAxes();
            b(
              c2,
              { name: d2.name, state: "", visible: false !== d2.visible, selected: true === d2.selected }
            );
            l(this, d2);
            var g2 = d2.events;
            if (g2 && g2.click || d2.point && d2.point.events && d2.point.events.click || d2.allowPointSelect)
              a4.runTrackerClick = true;
            c2.getColor();
            c2.getSymbol();
            c2.parallelArrays.forEach(function(b2) {
              c2[b2 + "Data"] || (c2[b2 + "Data"] = []);
            });
            c2.isCartesian && (a4.hasCartesianSeries = true);
            var k2;
            e2.length && (k2 = e2[e2.length - 1]);
            c2._i = L(k2 && k2._i, -1) + 1;
            c2.opacity = c2.options.opacity;
            a4.orderSeries(this.insert(e2));
            d2.dataSorting && d2.dataSorting.enabled ? c2.setDataSortingOptions() : c2.points || c2.data || c2.setData(d2.data, false);
            r(this, "afterInit");
          };
          a3.prototype.is = function(b2) {
            return v[b2] && this instanceof v[b2];
          };
          a3.prototype.insert = function(b2) {
            var a4 = this.options.index, d2;
            if (N(a4)) {
              for (d2 = b2.length; d2--; )
                if (a4 >= L(b2[d2].options.index, b2[d2]._i)) {
                  b2.splice(d2 + 1, 0, this);
                  break;
                }
              -1 === d2 && b2.unshift(this);
              d2 += 1;
            } else
              b2.push(this);
            return L(d2, b2.length - 1);
          };
          a3.prototype.bindAxes = function() {
            var b2 = this, a4 = b2.options, d2 = b2.chart, c2;
            r(this, "bindAxes", null, function() {
              (b2.axisTypes || []).forEach(function(g2) {
                var k2 = 0;
                d2[g2].forEach(function(d3) {
                  c2 = d3.options;
                  if (a4[g2] === k2 && !c2.isInternal || "undefined" !== typeof a4[g2] && a4[g2] === c2.id || "undefined" === typeof a4[g2] && 0 === c2.index)
                    b2.insert(d3.series), b2[g2] = d3, d3.isDirty = true;
                  c2.isInternal || k2++;
                });
                b2[g2] || b2.optionalAxis === g2 || e(18, true, d2);
              });
            });
            r(this, "afterBindAxes");
          };
          a3.prototype.updateParallelArrays = function(b2, a4) {
            var d2 = b2.series, c2 = arguments, e2 = N(a4) ? function(c3) {
              var e3 = "y" === c3 && d2.toYData ? d2.toYData(b2) : b2[c3];
              d2[c3 + "Data"][a4] = e3;
            } : function(b3) {
              Array.prototype[a4].apply(d2[b3 + "Data"], Array.prototype.slice.call(c2, 2));
            };
            d2.parallelArrays.forEach(e2);
          };
          a3.prototype.hasData = function() {
            return this.visible && "undefined" !== typeof this.dataMax && "undefined" !== typeof this.dataMin || this.visible && this.yData && 0 < this.yData.length;
          };
          a3.prototype.autoIncrement = function(b2) {
            var a4 = this.options, d2 = a4.pointIntervalUnit, c2 = a4.relativeXValue, e2 = this.chart.time, g2 = this.xIncrement, k2;
            g2 = L(g2, a4.pointStart, 0);
            this.pointInterval = k2 = L(this.pointInterval, a4.pointInterval, 1);
            c2 && N(b2) && (k2 *= b2);
            d2 && (a4 = new e2.Date(g2), "day" === d2 ? e2.set("Date", a4, e2.get("Date", a4) + k2) : "month" === d2 ? e2.set("Month", a4, e2.get(
              "Month",
              a4
            ) + k2) : "year" === d2 && e2.set("FullYear", a4, e2.get("FullYear", a4) + k2), k2 = a4.getTime() - g2);
            if (c2 && N(b2))
              return g2 + k2;
            this.xIncrement = g2 + k2;
            return g2;
          };
          a3.prototype.setDataSortingOptions = function() {
            var a4 = this.options;
            b(this, { requireSorting: false, sorted: false, enabledDataSorting: true, allowDG: false });
            k(a4.pointRange) || (a4.pointRange = 1);
          };
          a3.prototype.setOptions = function(b2) {
            var a4 = this.chart, d2 = a4.options, c2 = d2.plotOptions, e2 = a4.userOptions || {};
            b2 = O(b2);
            a4 = a4.styledMode;
            var g2 = { plotOptions: c2, userOptions: b2 };
            r(this, "setOptions", g2);
            var f2 = g2.plotOptions[this.type], h2 = e2.plotOptions || {};
            this.userOptions = g2.userOptions;
            e2 = O(f2, c2.series, e2.plotOptions && e2.plotOptions[this.type], b2);
            this.tooltipOptions = O(m.tooltip, m.plotOptions.series && m.plotOptions.series.tooltip, m.plotOptions[this.type].tooltip, d2.tooltip.userOptions, c2.series && c2.series.tooltip, c2[this.type].tooltip, b2.tooltip);
            this.stickyTracking = L(b2.stickyTracking, h2[this.type] && h2[this.type].stickyTracking, h2.series && h2.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? true : e2.stickyTracking);
            null === f2.marker && delete e2.marker;
            this.zoneAxis = e2.zoneAxis;
            c2 = this.zones = (e2.zones || []).slice();
            !e2.negativeColor && !e2.negativeFillColor || e2.zones || (d2 = { value: e2[this.zoneAxis + "Threshold"] || e2.threshold || 0, className: "highcharts-negative" }, a4 || (d2.color = e2.negativeColor, d2.fillColor = e2.negativeFillColor), c2.push(d2));
            c2.length && k(c2[c2.length - 1].value) && c2.push(a4 ? {} : { color: this.color, fillColor: this.fillColor });
            r(this, "afterSetOptions", { options: e2 });
            return e2;
          };
          a3.prototype.getName = function() {
            return L(this.options.name, "Series " + (this.index + 1));
          };
          a3.prototype.getCyclic = function(b2, a4, d2) {
            var c2 = this.chart, e2 = this.userOptions, g2 = b2 + "Index", f2 = b2 + "Counter", r2 = d2 ? d2.length : L(c2.options.chart[b2 + "Count"], c2[b2 + "Count"]);
            if (!a4) {
              var h2 = L(e2[g2], e2["_" + g2]);
              k(h2) || (c2.series.length || (c2[f2] = 0), e2["_" + g2] = h2 = c2[f2] % r2, c2[f2] += 1);
              d2 && (a4 = d2[h2]);
            }
            "undefined" !== typeof h2 && (this[g2] = h2);
            this[b2] = a4;
          };
          a3.prototype.getColor = function() {
            this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic(
              "color",
              this.options.color || m.plotOptions[this.type].color,
              this.chart.options.colors
            );
          };
          a3.prototype.getPointsCollection = function() {
            return (this.hasGroupedData ? this.points : this.data) || [];
          };
          a3.prototype.getSymbol = function() {
            this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
          };
          a3.prototype.findPointIndex = function(b2, a4) {
            var c2 = b2.id, e2 = b2.x, g2 = this.points, k2 = this.options.dataSorting, f2, r2;
            if (c2)
              k2 = this.chart.get(c2), k2 instanceof C && (f2 = k2);
            else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
              if (f2 = function(a5) {
                return !a5.touched && a5.index === b2.index;
              }, k2 && k2.matchByName ? f2 = function(a5) {
                return !a5.touched && a5.name === b2.name;
              } : this.options.relativeXValue && (f2 = function(a5) {
                return !a5.touched && a5.options.x === b2.x;
              }), f2 = d(g2, f2), !f2)
                return;
            }
            if (f2) {
              var h2 = f2 && f2.index;
              "undefined" !== typeof h2 && (r2 = true);
            }
            "undefined" === typeof h2 && N(e2) && (h2 = this.xData.indexOf(e2, a4));
            -1 !== h2 && "undefined" !== typeof h2 && this.cropped && (h2 = h2 >= this.cropStart ? h2 - this.cropStart : h2);
            !r2 && N(h2) && g2[h2] && g2[h2].touched && (h2 = void 0);
            return h2;
          };
          a3.prototype.updateData = function(b2, a4) {
            var d2 = this.options, c2 = d2.dataSorting, e2 = this.points, g2 = [], f2 = this.requireSorting, r2 = b2.length === e2.length, h2, l2, m2, p2 = true;
            this.xIncrement = null;
            b2.forEach(function(b3, a5) {
              var l3 = k(b3) && this.pointClass.prototype.optionsToObject.call({ series: this }, b3) || {}, p3 = l3.x;
              if (l3.id || N(p3)) {
                if (l3 = this.findPointIndex(l3, m2), -1 === l3 || "undefined" === typeof l3 ? g2.push(b3) : e2[l3] && b3 !== d2.data[l3] ? (e2[l3].update(b3, false, null, false), e2[l3].touched = true, f2 && (m2 = l3 + 1)) : e2[l3] && (e2[l3].touched = true), !r2 || a5 !== l3 || c2 && c2.enabled || this.hasDerivedData)
                  h2 = true;
              } else
                g2.push(b3);
            }, this);
            if (h2)
              for (b2 = e2.length; b2--; )
                (l2 = e2[b2]) && !l2.touched && l2.remove && l2.remove(false, a4);
            else
              !r2 || c2 && c2.enabled ? p2 = false : (b2.forEach(function(b3, a5) {
                b3 !== e2[a5].y && e2[a5].update && e2[a5].update(b3, false, null, false);
              }), g2.length = 0);
            e2.forEach(function(b3) {
              b3 && (b3.touched = false);
            });
            if (!p2)
              return false;
            g2.forEach(function(b3) {
              this.addPoint(b3, false, null, null, false);
            }, this);
            null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = H(this.xData), this.autoIncrement());
            return true;
          };
          a3.prototype.setData = function(b2, a4, d2, c2) {
            void 0 === a4 && (a4 = true);
            var g2 = this, k2 = g2.points, f2 = k2 && k2.length || 0, r2 = g2.options, h2 = g2.chart, l2 = r2.dataSorting, m2 = g2.xAxis, p2 = r2.turboThreshold, z2 = this.xData, t2 = this.yData, n2 = g2.pointArrayMap;
            n2 = n2 && n2.length;
            var w2 = r2.keys, u2, y2 = 0, M = 1, D2 = null;
            if (!h2.options.chart.allowMutatingData) {
              r2.data && delete g2.options.data;
              g2.userOptions.data && delete g2.userOptions.data;
              var q2 = O(true, b2);
            }
            b2 = q2 || b2 || [];
            q2 = b2.length;
            l2 && l2.enabled && (b2 = this.sortData(b2));
            h2.options.chart.allowMutatingData && false !== c2 && q2 && f2 && !g2.cropped && !g2.hasGroupedData && g2.visible && !g2.boosted && (u2 = this.updateData(b2, d2));
            if (!u2) {
              g2.xIncrement = null;
              g2.colorCounter = 0;
              this.parallelArrays.forEach(function(b3) {
                g2[b3 + "Data"].length = 0;
              });
              if (p2 && q2 > p2)
                if (D2 = g2.getFirstValidPoint(b2), N(D2))
                  for (d2 = 0; d2 < q2; d2++)
                    z2[d2] = this.autoIncrement(), t2[d2] = b2[d2];
                else if (I(D2))
                  if (n2)
                    if (D2.length === n2)
                      for (d2 = 0; d2 < q2; d2++)
                        z2[d2] = this.autoIncrement(), t2[d2] = b2[d2];
                    else
                      for (d2 = 0; d2 < q2; d2++)
                        c2 = b2[d2], z2[d2] = c2[0], t2[d2] = c2.slice(1, n2 + 1);
                  else if (w2 && (y2 = w2.indexOf("x"), M = w2.indexOf("y"), y2 = 0 <= y2 ? y2 : 0, M = 0 <= M ? M : 1), 1 === D2.length && (M = 0), y2 === M)
                    for (d2 = 0; d2 < q2; d2++)
                      z2[d2] = this.autoIncrement(), t2[d2] = b2[d2][M];
                  else
                    for (d2 = 0; d2 < q2; d2++)
                      c2 = b2[d2], z2[d2] = c2[y2], t2[d2] = c2[M];
                else
                  e(12, false, h2);
              else
                for (d2 = 0; d2 < q2; d2++)
                  "undefined" !== typeof b2[d2] && (c2 = { series: g2 }, g2.pointClass.prototype.applyOptions.apply(c2, [b2[d2]]), g2.updateParallelArrays(c2, d2));
              t2 && P(t2[0]) && e(14, true, h2);
              g2.data = [];
              g2.options.data = g2.userOptions.data = b2;
              for (d2 = f2; d2--; )
                k2[d2] && k2[d2].destroy && k2[d2].destroy();
              m2 && (m2.minRange = m2.userMinRange);
              g2.isDirty = h2.isDirtyBox = true;
              g2.isDirtyData = !!k2;
              d2 = false;
            }
            "point" === r2.legendType && (this.processData(), this.generatePoints());
            a4 && h2.redraw(d2);
          };
          a3.prototype.sortData = function(b2) {
            var a4 = this, d2 = a4.options.dataSorting.sortKey || "y", c2 = function(b3, a5) {
              return k(a5) && b3.pointClass.prototype.optionsToObject.call(
                { series: b3 },
                a5
              ) || {};
            };
            b2.forEach(function(d3, e2) {
              b2[e2] = c2(a4, d3);
              b2[e2].index = e2;
            }, this);
            b2.concat().sort(function(b3, a5) {
              b3 = z(d2, b3);
              a5 = z(d2, a5);
              return a5 < b3 ? -1 : a5 > b3 ? 1 : 0;
            }).forEach(function(b3, a5) {
              b3.x = a5;
            }, this);
            a4.linkedSeries && a4.linkedSeries.forEach(function(a5) {
              var d3 = a5.options, e2 = d3.data;
              d3.dataSorting && d3.dataSorting.enabled || !e2 || (e2.forEach(function(d4, g2) {
                e2[g2] = c2(a5, d4);
                b2[g2] && (e2[g2].x = b2[g2].x, e2[g2].index = g2);
              }), a5.setData(e2, false));
            });
            return b2;
          };
          a3.prototype.getProcessedData = function(b2) {
            var a4 = this.xAxis, d2 = this.options, c2 = d2.cropThreshold, g2 = b2 || this.getExtremesFromAll || d2.getExtremesFromAll, k2 = this.isCartesian;
            b2 = a4 && a4.val2lin;
            d2 = !(!a4 || !a4.logarithmic);
            var f2 = 0, r2 = this.xData, h2 = this.yData, l2 = this.requireSorting;
            var m2 = false;
            var p2 = r2.length;
            if (a4) {
              m2 = a4.getExtremes();
              var z2 = m2.min;
              var t2 = m2.max;
              m2 = !(!a4.categories || a4.names.length);
            }
            if (k2 && this.sorted && !g2 && (!c2 || p2 > c2 || this.forceCrop)) {
              if (r2[p2 - 1] < z2 || r2[0] > t2)
                r2 = [], h2 = [];
              else if (this.yData && (r2[0] < z2 || r2[p2 - 1] > t2)) {
                var n2 = this.cropData(this.xData, this.yData, z2, t2);
                r2 = n2.xData;
                h2 = n2.yData;
                f2 = n2.start;
                n2 = true;
              }
            }
            for (c2 = r2.length || 1; --c2; )
              if (a4 = d2 ? b2(r2[c2]) - b2(r2[c2 - 1]) : r2[c2] - r2[c2 - 1], 0 < a4 && ("undefined" === typeof w2 || a4 < w2))
                var w2 = a4;
              else
                0 > a4 && l2 && !m2 && (e(15, false, this.chart), l2 = false);
            return { xData: r2, yData: h2, cropped: n2, cropStart: f2, closestPointRange: w2 };
          };
          a3.prototype.processData = function(b2) {
            var a4 = this.xAxis;
            if (this.isCartesian && !this.isDirty && !a4.isDirty && !this.yAxis.isDirty && !b2)
              return false;
            b2 = this.getProcessedData();
            this.cropped = b2.cropped;
            this.cropStart = b2.cropStart;
            this.processedXData = b2.xData;
            this.processedYData = b2.yData;
            this.closestPointRange = this.basePointRange = b2.closestPointRange;
            r(this, "afterProcessData");
          };
          a3.prototype.cropData = function(b2, a4, d2, c2, e2) {
            var g2 = b2.length, k2, f2 = 0, r2 = g2;
            e2 = L(e2, this.cropShoulder);
            for (k2 = 0; k2 < g2; k2++)
              if (b2[k2] >= d2) {
                f2 = Math.max(0, k2 - e2);
                break;
              }
            for (d2 = k2; d2 < g2; d2++)
              if (b2[d2] > c2) {
                r2 = d2 + e2;
                break;
              }
            return { xData: b2.slice(f2, r2), yData: a4.slice(f2, r2), start: f2, end: r2 };
          };
          a3.prototype.generatePoints = function() {
            var a4 = this.options, d2 = this.processedData || a4.data, c2 = this.processedXData, e2 = this.processedYData, g2 = this.pointClass, k2 = c2.length, f2 = this.cropStart || 0, h2 = this.hasGroupedData, l2 = a4.keys, m2 = [];
            a4 = a4.dataGrouping && a4.dataGrouping.groupAll ? f2 : 0;
            var p2, z2, t2 = this.data;
            if (!t2 && !h2) {
              var n2 = [];
              n2.length = d2.length;
              t2 = this.data = n2;
            }
            l2 && h2 && (this.options.keys = false);
            for (z2 = 0; z2 < k2; z2++) {
              n2 = f2 + z2;
              if (h2) {
                var w2 = new g2().init(this, [c2[z2]].concat(aa(e2[z2])));
                w2.dataGroup = this.groupMap[a4 + z2];
                w2.dataGroup.options && (w2.options = w2.dataGroup.options, b(w2, w2.dataGroup.options), delete w2.dataLabels);
              } else
                (w2 = t2[n2]) || "undefined" === typeof d2[n2] || (t2[n2] = w2 = new g2().init(this, d2[n2], c2[z2]));
              w2 && (w2.index = h2 ? a4 + z2 : n2, m2[z2] = w2);
            }
            this.options.keys = l2;
            if (t2 && (k2 !== (p2 = t2.length) || h2))
              for (z2 = 0; z2 < p2; z2++)
                z2 !== f2 || h2 || (z2 += k2), t2[z2] && (t2[z2].destroyElements(), t2[z2].plotX = void 0);
            this.data = t2;
            this.points = m2;
            r(this, "afterGeneratePoints");
          };
          a3.prototype.getXExtremes = function(b2) {
            return { min: K(b2), max: H(b2) };
          };
          a3.prototype.getExtremes = function(b2, a4) {
            var d2 = this.xAxis, c2 = this.yAxis, e2 = this.processedXData || this.xData, g2 = [], k2 = this.requireSorting ? this.cropShoulder : 0;
            c2 = c2 ? c2.positiveValuesOnly : false;
            var f2, h2 = 0, l2 = 0, m2 = 0;
            b2 = b2 || this.stackedYData || this.processedYData || [];
            var p2 = b2.length;
            if (d2) {
              var z2 = d2.getExtremes();
              h2 = z2.min;
              l2 = z2.max;
            }
            for (f2 = 0; f2 < p2; f2++) {
              var t2 = e2[f2];
              z2 = b2[f2];
              var n2 = (N(z2) || I(z2)) && (z2.length || 0 < z2 || !c2);
              t2 = a4 || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !d2 || (e2[f2 + k2] || t2) >= h2 && (e2[f2 - k2] || t2) <= l2;
              if (n2 && t2)
                if (n2 = z2.length)
                  for (; n2--; )
                    N(z2[n2]) && (g2[m2++] = z2[n2]);
                else
                  g2[m2++] = z2;
            }
            b2 = { activeYData: g2, dataMin: K(g2), dataMax: H(g2) };
            r(this, "afterGetExtremes", { dataExtremes: b2 });
            return b2;
          };
          a3.prototype.applyExtremes = function() {
            var b2 = this.getExtremes();
            this.dataMin = b2.dataMin;
            this.dataMax = b2.dataMax;
            return b2;
          };
          a3.prototype.getFirstValidPoint = function(b2) {
            for (var a4 = b2.length, d2 = 0, c2 = null; null === c2 && d2 < a4; )
              c2 = b2[d2], d2++;
            return c2;
          };
          a3.prototype.translate = function() {
            this.processedXData || this.processData();
            this.generatePoints();
            var b2 = this.options, a4 = b2.stacking, d2 = this.xAxis, c2 = d2.categories, e2 = this.enabledDataSorting, g2 = this.yAxis, f2 = this.points, h2 = f2.length, l2 = this.pointPlacementToXValue(), m2 = !!l2, p2 = b2.threshold, z2 = b2.startFromThreshold ? p2 : 0, t2 = this.zoneAxis || "y", n2, u2, q2 = Number.MAX_VALUE;
            for (n2 = 0; n2 < h2; n2++) {
              var D2 = f2[n2], v2 = D2.x, G = void 0, P2 = void 0, O2 = D2.y, x2 = D2.low, A2 = a4 && g2.stacking && g2.stacking.stacks[(this.negStacks && O2 < (z2 ? 0 : p2) ? "-" : "") + this.stackKey];
              if (g2.positiveValuesOnly && !g2.validatePositiveValue(O2) || d2.positiveValuesOnly && !d2.validatePositiveValue(v2))
                D2.isNull = true;
              D2.plotX = u2 = w(y(d2.translate(v2, 0, 0, 0, 1, l2, "flags" === this.type), -1e5, 1e5));
              if (a4 && this.visible && A2 && A2[v2]) {
                var B2 = this.getStackIndicator(B2, v2, this.index);
                !D2.isNull && B2.key && (G = A2[v2], P2 = G.points[B2.key]);
                G && I(P2) && (x2 = P2[0], O2 = P2[1], x2 === z2 && B2.key === A2[v2].base && (x2 = L(N(p2) ? p2 : g2.min)), g2.positiveValuesOnly && k(x2) && 0 >= x2 && (x2 = void 0), D2.total = D2.stackTotal = L(G.total), D2.percentage = k(D2.y) && G.total ? D2.y / G.total * 100 : void 0, D2.stackY = O2, this.irregularWidths || G.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis));
              }
              D2.yBottom = k(x2) ? y(g2.translate(x2, 0, 1, 0, 1), -1e5, 1e5) : void 0;
              this.dataModify && (O2 = this.dataModify.modifyValue(O2, n2));
              D2.plotY = void 0;
              N(O2) && (G = g2.translate(O2, false, true, false, true), "undefined" !== typeof G && (D2.plotY = y(G, -1e5, 1e5)));
              D2.isInside = this.isPointInside(D2);
              D2.clientX = m2 ? w(d2.translate(v2, 0, 0, 0, 1, l2)) : u2;
              D2.negative = D2[t2] < (b2[t2 + "Threshold"] || p2 || 0);
              D2.category = L(c2 && c2[D2.x], D2.x);
              if (!D2.isNull && false !== D2.visible) {
                "undefined" !== typeof K2 && (q2 = Math.min(q2, Math.abs(u2 - K2)));
                var K2 = u2;
              }
              D2.zone = this.zones.length ? D2.getZone() : void 0;
              !D2.graphic && this.group && e2 && (D2.isNew = true);
            }
            this.closestPointRangePx = q2;
            r(this, "afterTranslate");
          };
          a3.prototype.getValidPoints = function(b2, a4, d2) {
            var c2 = this.chart;
            return (b2 || this.points || []).filter(function(b3) {
              return a4 && !c2.isInsidePlot(b3.plotX, b3.plotY, { inverted: c2.inverted }) ? false : false !== b3.visible && (d2 || !b3.isNull);
            });
          };
          a3.prototype.getClipBox = function() {
            var b2 = this.chart, a4 = this.xAxis, d2 = this.yAxis, c2 = O(b2.clipBox);
            a4 && a4.len !== b2.plotSizeX && (c2.width = a4.len);
            d2 && d2.len !== b2.plotSizeY && (c2.height = d2.len);
            return c2;
          };
          a3.prototype.getSharedClipKey = function() {
            return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0);
          };
          a3.prototype.setClip = function() {
            var b2 = this.chart, a4 = this.group, d2 = this.markerGroup, c2 = b2.sharedClips;
            b2 = b2.renderer;
            var e2 = this.getClipBox(), g2 = this.getSharedClipKey(), f2 = c2[g2];
            f2 ? f2.animate(e2) : c2[g2] = f2 = b2.clipRect(e2);
            a4 && a4.clip(false === this.options.clip ? void 0 : f2);
            d2 && d2.clip();
          };
          a3.prototype.animate = function(b2) {
            var a4 = this.chart, d2 = this.group, e2 = this.markerGroup, g2 = a4.inverted, f2 = c(this.options.animation), k2 = [this.getSharedClipKey(), f2.duration, f2.easing, f2.defer].join(), r2 = a4.sharedClips[k2], h2 = a4.sharedClips[k2 + "m"];
            if (b2 && d2)
              f2 = this.getClipBox(), r2 ? r2.attr("height", f2.height) : (f2.width = 0, g2 && (f2.x = a4.plotHeight), r2 = a4.renderer.clipRect(f2), a4.sharedClips[k2] = r2, h2 = a4.renderer.clipRect({ x: -99, y: -99, width: g2 ? a4.plotWidth + 199 : 99, height: g2 ? 99 : a4.plotHeight + 199 }), a4.sharedClips[k2 + "m"] = h2), d2.clip(r2), e2 && e2.clip(h2);
            else if (r2 && !r2.hasClass("highcharts-animating")) {
              a4 = this.getClipBox();
              var l2 = f2.step;
              e2 && e2.element.childNodes.length && (f2.step = function(b3, a5) {
                l2 && l2.apply(a5, arguments);
                "width" === a5.prop && h2 && h2.element && h2.attr(g2 ? "height" : "width", b3 + 99);
              });
              r2.addClass("highcharts-animating").animate(a4, f2);
            }
          };
          a3.prototype.afterAnimate = function() {
            var b2 = this;
            this.setClip();
            U(this.chart.sharedClips, function(a4, d2, c2) {
              a4 && !b2.chart.container.querySelector('[clip-path="url(#'.concat(a4.id, ')"]')) && (a4.destroy(), delete c2[d2]);
            });
            this.finishedAnimating = true;
            r(this, "afterAnimate");
          };
          a3.prototype.drawPoints = function(b2) {
            void 0 === b2 && (b2 = this.points);
            var a4 = this.chart, d2 = a4.styledMode, c2 = this.colorAxis, e2 = this.options.marker, g2 = this[this.specialGroup || "markerGroup"], f2 = this.xAxis, k2 = L(e2.enabled, !f2 || f2.isRadial ? true : null, this.closestPointRangePx >= e2.enabledThreshold * e2.radius), r2, h2;
            if (false !== e2.enabled || this._hasPointMarkers)
              for (r2 = 0; r2 < b2.length; r2++) {
                var l2 = b2[r2];
                var m2 = (h2 = l2.graphic) ? "animate" : "attr";
                var p2 = l2.marker || {};
                var z2 = !!l2.marker;
                if ((k2 && "undefined" === typeof p2.enabled || p2.enabled) && !l2.isNull && false !== l2.visible) {
                  var t2 = L(
                    p2.symbol,
                    this.symbol,
                    "rect"
                  );
                  var n2 = this.markerAttribs(l2, l2.selected && "select");
                  this.enabledDataSorting && (l2.startXPos = f2.reversed ? -(n2.width || 0) : f2.width);
                  var w2 = false !== l2.isInside;
                  !h2 && w2 && (0 < (n2.width || 0) || l2.hasImage) && (l2.graphic = h2 = a4.renderer.symbol(t2, n2.x, n2.y, n2.width, n2.height, z2 ? p2 : e2).add(g2), this.enabledDataSorting && a4.hasRendered && (h2.attr({ x: l2.startXPos }), m2 = "animate"));
                  h2 && "animate" === m2 && h2[w2 ? "show" : "hide"](w2).animate(n2);
                  if (h2)
                    if (p2 = this.pointAttribs(l2, d2 || !l2.selected ? void 0 : "select"), d2)
                      c2 && h2.css({ fill: p2.fill });
                    else
                      h2[m2](p2);
                  h2 && h2.addClass(l2.getClassName(), true);
                } else
                  h2 && (l2.graphic = h2.destroy());
              }
          };
          a3.prototype.markerAttribs = function(b2, a4) {
            var d2 = this.options, c2 = d2.marker, e2 = b2.marker || {}, g2 = e2.symbol || c2.symbol, f2 = {}, k2 = L(e2.radius, c2 && c2.radius);
            a4 && (c2 = c2.states[a4], a4 = e2.states && e2.states[a4], k2 = L(a4 && a4.radius, c2 && c2.radius, k2 && k2 + (c2 && c2.radiusPlus || 0)));
            b2.hasImage = g2 && 0 === g2.indexOf("url");
            b2.hasImage && (k2 = 0);
            b2 = b2.pos();
            N(k2) && b2 && (f2.x = b2[0] - k2, f2.y = b2[1] - k2, d2.crisp && (f2.x = Math.floor(f2.x)));
            k2 && (f2.width = f2.height = 2 * k2);
            return f2;
          };
          a3.prototype.pointAttribs = function(b2, a4) {
            var d2 = this.options.marker, c2 = b2 && b2.options, e2 = c2 && c2.marker || {}, g2 = c2 && c2.color, f2 = b2 && b2.color, k2 = b2 && b2.zone && b2.zone.color, r2 = this.color;
            b2 = L(e2.lineWidth, d2.lineWidth);
            c2 = 1;
            r2 = g2 || k2 || f2 || r2;
            g2 = e2.fillColor || d2.fillColor || r2;
            f2 = e2.lineColor || d2.lineColor || r2;
            a4 = a4 || "normal";
            d2 = d2.states[a4] || {};
            a4 = e2.states && e2.states[a4] || {};
            b2 = L(a4.lineWidth, d2.lineWidth, b2 + L(a4.lineWidthPlus, d2.lineWidthPlus, 0));
            g2 = a4.fillColor || d2.fillColor || g2;
            f2 = a4.lineColor || d2.lineColor || f2;
            c2 = L(a4.opacity, d2.opacity, c2);
            return { stroke: f2, "stroke-width": b2, fill: g2, opacity: c2 };
          };
          a3.prototype.destroy = function(b2) {
            var a4 = this, d2 = a4.chart, c2 = /AppleWebKit\/533/.test(D.navigator.userAgent), e2 = a4.data || [], f2, k2, h2, l2;
            r(a4, "destroy", { keepEventsForUpdate: b2 });
            this.removeEvents(b2);
            (a4.axisTypes || []).forEach(function(b3) {
              (l2 = a4[b3]) && l2.series && (g(l2.series, a4), l2.isDirty = l2.forceRedraw = true);
            });
            a4.legendItem && a4.chart.legend.destroyItem(a4);
            for (k2 = e2.length; k2--; )
              (h2 = e2[k2]) && h2.destroy && h2.destroy();
            a4.clips && a4.clips.forEach(function(b3) {
              return b3.destroy();
            });
            n.clearTimeout(a4.animationTimeout);
            U(a4, function(b3, a5) {
              b3 instanceof u && !b3.survive && (f2 = c2 && "group" === a5 ? "hide" : "destroy", b3[f2]());
            });
            d2.hoverSeries === a4 && (d2.hoverSeries = void 0);
            g(d2.series, a4);
            d2.orderSeries();
            U(a4, function(d3, c3) {
              b2 && "hcEvents" === c3 || delete a4[c3];
            });
          };
          a3.prototype.applyZones = function() {
            var b2 = this, a4 = this.chart, d2 = a4.renderer, c2 = this.zones, e2 = this.clips || [], g2 = this.graph, f2 = this.area, k2 = Math.max(a4.plotWidth, a4.plotHeight), r2 = this[(this.zoneAxis || "y") + "Axis"], h2 = a4.inverted, l2, m2, p2, z2, t2, n2, w2, u2, I2 = false;
            if (c2.length && (g2 || f2) && r2 && "undefined" !== typeof r2.min) {
              var D2 = r2.reversed;
              var q2 = r2.horiz;
              g2 && !this.showLine && g2.hide();
              f2 && f2.hide();
              var v2 = r2.getExtremes();
              c2.forEach(function(c3, N2) {
                l2 = D2 ? q2 ? a4.plotWidth : 0 : q2 ? 0 : r2.toPixels(v2.min) || 0;
                l2 = y(L(m2, l2), 0, k2);
                m2 = y(Math.round(r2.toPixels(L(c3.value, v2.max), true) || 0), 0, k2);
                I2 && (l2 = m2 = r2.toPixels(v2.max));
                z2 = Math.abs(l2 - m2);
                t2 = Math.min(l2, m2);
                n2 = Math.max(l2, m2);
                r2.isXAxis ? (p2 = { x: h2 ? n2 : t2, y: 0, width: z2, height: k2 }, q2 || (p2.x = a4.plotHeight - p2.x)) : (p2 = { x: 0, y: h2 ? n2 : t2, width: k2, height: z2 }, q2 && (p2.y = a4.plotWidth - p2.y));
                h2 && d2.isVML && (p2 = r2.isXAxis ? { x: 0, y: D2 ? t2 : n2, height: p2.width, width: a4.chartWidth } : {
                  x: p2.y - a4.plotLeft - a4.spacingBox.x,
                  y: 0,
                  width: p2.height,
                  height: a4.chartHeight
                });
                e2[N2] ? e2[N2].animate(p2) : e2[N2] = d2.clipRect(p2);
                w2 = b2["zone-area-" + N2];
                u2 = b2["zone-graph-" + N2];
                g2 && u2 && u2.clip(e2[N2]);
                f2 && w2 && w2.clip(e2[N2]);
                I2 = c3.value > v2.max;
                b2.resetZones && 0 === m2 && (m2 = void 0);
              });
              this.clips = e2;
            } else
              b2.visible && (g2 && g2.show(), f2 && f2.show());
          };
          a3.prototype.plotGroup = function(b2, a4, d2, c2, e2) {
            var g2 = this[b2], f2 = !g2;
            d2 = { visibility: d2, zIndex: c2 || 0.1 };
            "undefined" === typeof this.opacity || this.chart.styledMode || "inactive" === this.state || (d2.opacity = this.opacity);
            f2 && (this[b2] = g2 = this.chart.renderer.g().add(e2));
            g2.addClass("highcharts-" + a4 + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (k(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (g2.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), true);
            g2.attr(d2)[f2 ? "attr" : "animate"](this.getPlotBox(a4));
            return g2;
          };
          a3.prototype.getPlotBox = function(b2) {
            var a4 = this.xAxis, d2 = this.yAxis, c2 = this.chart;
            b2 = c2.inverted && !c2.polar && a4 && false !== this.invertible && "series" === b2;
            c2.inverted && (a4 = d2, d2 = this.xAxis);
            return { translateX: a4 ? a4.left : c2.plotLeft, translateY: d2 ? d2.top : c2.plotTop, rotation: b2 ? 90 : 0, rotationOriginX: b2 ? (a4.len - d2.len) / 2 : 0, rotationOriginY: b2 ? (a4.len + d2.len) / 2 : 0, scaleX: b2 ? -1 : 1, scaleY: 1 };
          };
          a3.prototype.removeEvents = function(b2) {
            b2 || S(this);
            this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function(b3) {
              b3();
            }), this.eventsToUnbind.length = 0);
          };
          a3.prototype.render = function() {
            var b2 = this, a4 = b2.chart, d2 = b2.options, e2 = c(d2.animation), g2 = b2.visible ? "inherit" : "hidden", f2 = d2.zIndex, k2 = b2.hasRendered, h2 = a4.seriesGroup;
            a4 = !b2.finishedAnimating && a4.renderer.isSVG ? e2.duration : 0;
            r(this, "render");
            b2.plotGroup("group", "series", g2, f2, h2);
            b2.markerGroup = b2.plotGroup("markerGroup", "markers", g2, f2, h2);
            false !== d2.clip && b2.setClip();
            b2.animate && a4 && b2.animate(true);
            b2.drawGraph && (b2.drawGraph(), b2.applyZones());
            b2.visible && b2.drawPoints();
            b2.drawDataLabels && b2.drawDataLabels();
            b2.redrawPoints && b2.redrawPoints();
            b2.drawTracker && false !== b2.options.enableMouseTracking && b2.drawTracker();
            b2.animate && a4 && b2.animate();
            k2 || (a4 && e2.defer && (a4 += e2.defer), b2.animationTimeout = ba(function() {
              b2.afterAnimate();
            }, a4 || 0));
            b2.isDirty = false;
            b2.hasRendered = true;
            r(b2, "afterRender");
          };
          a3.prototype.redraw = function() {
            var b2 = this.isDirty || this.isDirtyData;
            this.translate();
            this.render();
            b2 && delete this.kdTree;
          };
          a3.prototype.searchPoint = function(b2, a4) {
            var d2 = this.xAxis, c2 = this.yAxis, e2 = this.chart.inverted;
            return this.searchKDTree({ clientX: e2 ? d2.len - b2.chartY + d2.pos : b2.chartX - d2.pos, plotY: e2 ? c2.len - b2.chartX + c2.pos : b2.chartY - c2.pos }, a4, b2);
          };
          a3.prototype.buildKDTree = function(b2) {
            function a4(b3, c3, e2) {
              var g2 = b3 && b3.length;
              if (g2) {
                var f2 = d2.kdAxisArray[c3 % e2];
                b3.sort(function(b4, a5) {
                  return b4[f2] - a5[f2];
                });
                g2 = Math.floor(g2 / 2);
                return {
                  point: b3[g2],
                  left: a4(b3.slice(0, g2), c3 + 1, e2),
                  right: a4(b3.slice(g2 + 1), c3 + 1, e2)
                };
              }
            }
            this.buildingKdTree = true;
            var d2 = this, c2 = -1 < d2.options.findNearestPointBy.indexOf("y") ? 2 : 1;
            delete d2.kdTree;
            ba(function() {
              d2.kdTree = a4(d2.getValidPoints(null, !d2.directTouch), c2, c2);
              d2.buildingKdTree = false;
            }, d2.options.kdNow || b2 && "touchstart" === b2.type ? 0 : 1);
          };
          a3.prototype.searchKDTree = function(b2, a4, d2) {
            function c2(b3, a5, d3, h2) {
              var l2 = a5.point, m2 = e2.kdAxisArray[d3 % h2], p2 = l2, z2 = k(b3[g2]) && k(l2[g2]) ? Math.pow(b3[g2] - l2[g2], 2) : null;
              var t2 = k(b3[f2]) && k(l2[f2]) ? Math.pow(b3[f2] - l2[f2], 2) : null;
              t2 = (z2 || 0) + (t2 || 0);
              l2.dist = k(t2) ? Math.sqrt(t2) : Number.MAX_VALUE;
              l2.distX = k(z2) ? Math.sqrt(z2) : Number.MAX_VALUE;
              m2 = b3[m2] - l2[m2];
              t2 = 0 > m2 ? "left" : "right";
              z2 = 0 > m2 ? "right" : "left";
              a5[t2] && (t2 = c2(b3, a5[t2], d3 + 1, h2), p2 = t2[r2] < p2[r2] ? t2 : l2);
              a5[z2] && Math.sqrt(m2 * m2) < p2[r2] && (b3 = c2(b3, a5[z2], d3 + 1, h2), p2 = b3[r2] < p2[r2] ? b3 : p2);
              return p2;
            }
            var e2 = this, g2 = this.kdAxisArray[0], f2 = this.kdAxisArray[1], r2 = a4 ? "distX" : "dist";
            a4 = -1 < e2.options.findNearestPointBy.indexOf("y") ? 2 : 1;
            this.kdTree || this.buildingKdTree || this.buildKDTree(d2);
            if (this.kdTree)
              return c2(b2, this.kdTree, a4, a4);
          };
          a3.prototype.pointPlacementToXValue = function() {
            var b2 = this.options, a4 = b2.pointRange, d2 = this.xAxis;
            b2 = b2.pointPlacement;
            "between" === b2 && (b2 = d2.reversed ? -0.5 : 0.5);
            return N(b2) ? b2 * (a4 || d2.pointRange) : 0;
          };
          a3.prototype.isPointInside = function(b2) {
            var a4 = this.chart, d2 = this.xAxis, c2 = this.yAxis;
            return "undefined" !== typeof b2.plotY && "undefined" !== typeof b2.plotX && 0 <= b2.plotY && b2.plotY <= (c2 ? c2.len : a4.plotHeight) && 0 <= b2.plotX && b2.plotX <= (d2 ? d2.len : a4.plotWidth);
          };
          a3.prototype.drawTracker = function() {
            var b2 = this, a4 = b2.options, d2 = a4.trackByArea, c2 = [].concat(d2 ? b2.areaPath : b2.graphPath), e2 = b2.chart, g2 = e2.pointer, k2 = e2.renderer, h2 = e2.options.tooltip.snap, l2 = b2.tracker, m2 = function(a5) {
              if (e2.hoverSeries !== b2)
                b2.onMouseOver();
            }, z2 = "rgba(192,192,192," + (f ? 1e-4 : 2e-3) + ")";
            l2 ? l2.attr({ d: c2 }) : b2.graph && (b2.tracker = k2.path(c2).attr({ visibility: b2.visible ? "inherit" : "hidden", zIndex: 2 }).addClass(d2 ? "highcharts-tracker-area" : "highcharts-tracker-line").add(b2.group), e2.styledMode || b2.tracker.attr({ "stroke-linecap": "round", "stroke-linejoin": "round", stroke: z2, fill: d2 ? z2 : "none", "stroke-width": b2.graph.strokeWidth() + (d2 ? 0 : 2 * h2) }), [
              b2.tracker,
              b2.markerGroup,
              b2.dataLabelsGroup
            ].forEach(function(b3) {
              if (b3 && (b3.addClass("highcharts-tracker").on("mouseover", m2).on("mouseout", function(b4) {
                g2.onTrackerMouseOut(b4);
              }), a4.cursor && !e2.styledMode && b3.css({ cursor: a4.cursor }), p))
                b3.on("touchstart", m2);
            }));
            r(this, "afterDrawTracker");
          };
          a3.prototype.addPoint = function(b2, a4, d2, c2, e2) {
            var g2 = this.options, f2 = this.data, k2 = this.chart, h2 = this.xAxis;
            h2 = h2 && h2.hasNames && h2.names;
            var l2 = g2.data, m2 = this.xData, p2;
            a4 = L(a4, true);
            var z2 = { series: this };
            this.pointClass.prototype.applyOptions.apply(z2, [b2]);
            var t2 = z2.x;
            var n2 = m2.length;
            if (this.requireSorting && t2 < m2[n2 - 1])
              for (p2 = true; n2 && m2[n2 - 1] > t2; )
                n2--;
            this.updateParallelArrays(z2, "splice", n2, 0, 0);
            this.updateParallelArrays(z2, n2);
            h2 && z2.name && (h2[t2] = z2.name);
            l2.splice(n2, 0, b2);
            if (p2 || this.processedData)
              this.data.splice(n2, 0, null), this.processData();
            "point" === g2.legendType && this.generatePoints();
            d2 && (f2[0] && f2[0].remove ? f2[0].remove(false) : (f2.shift(), this.updateParallelArrays(z2, "shift"), l2.shift()));
            false !== e2 && r(this, "addPoint", { point: z2 });
            this.isDirtyData = this.isDirty = true;
            a4 && k2.redraw(c2);
          };
          a3.prototype.removePoint = function(b2, a4, d2) {
            var c2 = this, e2 = c2.data, g2 = e2[b2], f2 = c2.points, k2 = c2.chart, r2 = function() {
              f2 && f2.length === e2.length && f2.splice(b2, 1);
              e2.splice(b2, 1);
              c2.options.data.splice(b2, 1);
              c2.updateParallelArrays(g2 || { series: c2 }, "splice", b2, 1);
              g2 && g2.destroy();
              c2.isDirty = true;
              c2.isDirtyData = true;
              a4 && k2.redraw();
            };
            h(d2, k2);
            a4 = L(a4, true);
            g2 ? g2.firePointEvent("remove", null, r2) : r2();
          };
          a3.prototype.remove = function(b2, a4, d2, c2) {
            function e2() {
              g2.destroy(c2);
              f2.isDirtyLegend = f2.isDirtyBox = true;
              f2.linkSeries();
              L(b2, true) && f2.redraw(a4);
            }
            var g2 = this, f2 = g2.chart;
            false !== d2 ? r(
              g2,
              "remove",
              null,
              e2
            ) : e2();
          };
          a3.prototype.update = function(a4, d2) {
            a4 = t(a4, this.userOptions);
            r(this, "update", { options: a4 });
            var c2 = this, g2 = c2.chart, f2 = c2.userOptions, k2 = c2.initialType || c2.type, h2 = g2.options.plotOptions, l2 = v[k2].prototype, m2 = c2.finishedAnimating && { animation: false }, p2 = {}, z2 = ["eventOptions", "navigatorSeries", "baseSeries"], n2 = a4.type || f2.type || g2.options.chart.type, w2 = !(this.hasDerivedData || n2 && n2 !== this.type || "undefined" !== typeof a4.pointStart || "undefined" !== typeof a4.pointInterval || "undefined" !== typeof a4.relativeXValue || a4.joinBy || a4.mapData || c2.hasOptionChanged("dataGrouping") || c2.hasOptionChanged("pointStart") || c2.hasOptionChanged("pointInterval") || c2.hasOptionChanged("pointIntervalUnit") || c2.hasOptionChanged("keys"));
            n2 = n2 || k2;
            w2 && (z2.push("data", "isDirtyData", "points", "processedData", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels", "clips", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), false !== a4.visible && z2.push("area", "graph"), c2.parallelArrays.forEach(function(b2) {
              z2.push(b2 + "Data");
            }), a4.data && (a4.dataSorting && b(c2.options.dataSorting, a4.dataSorting), this.setData(a4.data, false)));
            a4 = O(f2, m2, { index: "undefined" === typeof f2.index ? c2.index : f2.index, pointStart: L(h2 && h2.series && h2.series.pointStart, f2.pointStart, c2.xData[0]) }, !w2 && { data: c2.options.data }, a4);
            w2 && a4.data && (a4.data = c2.options.data);
            z2 = ["group", "markerGroup", "dataLabelsGroup", "transformGroup", "shadowGroup"].concat(z2);
            z2.forEach(function(b2) {
              z2[b2] = c2[b2];
              delete c2[b2];
            });
            h2 = false;
            if (v[n2]) {
              if (h2 = n2 !== c2.type, c2.remove(false, false, false, true), h2)
                if (Object.setPrototypeOf)
                  Object.setPrototypeOf(
                    c2,
                    v[n2].prototype
                  );
                else {
                  m2 = Object.hasOwnProperty.call(c2, "hcEvents") && c2.hcEvents;
                  for (u2 in l2)
                    c2[u2] = void 0;
                  b(c2, v[n2].prototype);
                  m2 ? c2.hcEvents = m2 : delete c2.hcEvents;
                }
            } else
              e(17, true, g2, { missingModuleFor: n2 });
            z2.forEach(function(b2) {
              c2[b2] = z2[b2];
            });
            c2.init(g2, a4);
            if (w2 && this.points) {
              a4 = c2.options;
              if (false === a4.visible)
                p2.graphic = 1, p2.dataLabel = 1;
              else if (!c2._hasPointLabels) {
                l2 = a4.marker;
                var u2 = a4.dataLabels;
                f2 = f2.marker || {};
                !l2 || false !== l2.enabled && f2.symbol === l2.symbol && f2.height === l2.height && f2.width === l2.width || (p2.graphic = 1);
                u2 && false === u2.enabled && (p2.dataLabel = 1);
              }
              f2 = 0;
              for (l2 = this.points; f2 < l2.length; f2++)
                (u2 = l2[f2]) && u2.series && (u2.resolveColor(), Object.keys(p2).length && u2.destroyElements(p2), false === a4.showInLegend && u2.legendItem && g2.legend.destroyItem(u2));
            }
            c2.initialType = k2;
            g2.linkSeries();
            h2 && c2.linkedSeries.length && (c2.isDirtyData = true);
            r(this, "afterUpdate");
            L(d2, true) && g2.redraw(w2 ? void 0 : false);
          };
          a3.prototype.setName = function(b2) {
            this.name = this.options.name = this.userOptions.name = b2;
            this.chart.isDirtyLegend = true;
          };
          a3.prototype.hasOptionChanged = function(b2) {
            var a4 = this.options[b2], d2 = this.chart.options.plotOptions, c2 = this.userOptions[b2];
            return c2 ? a4 !== c2 : a4 !== L(d2 && d2[this.type] && d2[this.type][b2], d2 && d2.series && d2.series[b2], a4);
          };
          a3.prototype.onMouseOver = function() {
            var b2 = this.chart, a4 = b2.hoverSeries;
            b2.pointer.setHoverChartIndex();
            if (a4 && a4 !== this)
              a4.onMouseOut();
            this.options.events.mouseOver && r(this, "mouseOver");
            this.setState("hover");
            b2.hoverSeries = this;
          };
          a3.prototype.onMouseOut = function() {
            var b2 = this.options, a4 = this.chart, d2 = a4.tooltip, c2 = a4.hoverPoint;
            a4.hoverSeries = null;
            if (c2)
              c2.onMouseOut();
            this && b2.events.mouseOut && r(this, "mouseOut");
            !d2 || this.stickyTracking || d2.shared && !this.noSharedTooltip || d2.hide();
            a4.series.forEach(function(b3) {
              b3.setState("", true);
            });
          };
          a3.prototype.setState = function(b2, a4) {
            var d2 = this, c2 = d2.options, e2 = d2.graph, g2 = c2.inactiveOtherPoints, f2 = c2.states, k2 = L(f2[b2 || "normal"] && f2[b2 || "normal"].animation, d2.chart.options.chart.animation), r2 = c2.lineWidth, h2 = 0, l2 = c2.opacity;
            b2 = b2 || "";
            if (d2.state !== b2 && ([d2.group, d2.markerGroup, d2.dataLabelsGroup].forEach(function(a5) {
              a5 && (d2.state && a5.removeClass("highcharts-series-" + d2.state), b2 && a5.addClass("highcharts-series-" + b2));
            }), d2.state = b2, !d2.chart.styledMode)) {
              if (f2[b2] && false === f2[b2].enabled)
                return;
              b2 && (r2 = f2[b2].lineWidth || r2 + (f2[b2].lineWidthPlus || 0), l2 = L(f2[b2].opacity, l2));
              if (e2 && !e2.dashstyle && N(r2))
                for (c2 = { "stroke-width": r2 }, e2.animate(c2, k2); d2["zone-graph-" + h2]; )
                  d2["zone-graph-" + h2].animate(c2, k2), h2 += 1;
              g2 || [d2.group, d2.markerGroup, d2.dataLabelsGroup, d2.labelBySeries].forEach(function(b3) {
                b3 && b3.animate({ opacity: l2 }, k2);
              });
            }
            a4 && g2 && d2.points && d2.setAllPointsToState(b2 || void 0);
          };
          a3.prototype.setAllPointsToState = function(b2) {
            this.points.forEach(function(a4) {
              a4.setState && a4.setState(b2);
            });
          };
          a3.prototype.setVisible = function(b2, a4) {
            var d2 = this, c2 = d2.chart, e2 = c2.options.chart.ignoreHiddenSeries, g2 = d2.visible, f2 = (d2.visible = b2 = d2.options.visible = d2.userOptions.visible = "undefined" === typeof b2 ? !g2 : b2) ? "show" : "hide";
            ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function(b3) {
              if (d2[b3])
                d2[b3][f2]();
            });
            if (c2.hoverSeries === d2 || (c2.hoverPoint && c2.hoverPoint.series) === d2)
              d2.onMouseOut();
            d2.legendItem && c2.legend.colorizeItem(d2, b2);
            d2.isDirty = true;
            d2.options.stacking && c2.series.forEach(function(b3) {
              b3.options.stacking && b3.visible && (b3.isDirty = true);
            });
            d2.linkedSeries.forEach(function(a5) {
              a5.setVisible(b2, false);
            });
            e2 && (c2.isDirtyBox = true);
            r(d2, f2);
            false !== a4 && c2.redraw();
          };
          a3.prototype.show = function() {
            this.setVisible(true);
          };
          a3.prototype.hide = function() {
            this.setVisible(false);
          };
          a3.prototype.select = function(b2) {
            this.selected = b2 = this.options.selected = "undefined" === typeof b2 ? !this.selected : b2;
            this.checkbox && (this.checkbox.checked = b2);
            r(this, b2 ? "select" : "unselect");
          };
          a3.prototype.shouldShowTooltip = function(b2, a4, d2) {
            void 0 === d2 && (d2 = {});
            d2.series = this;
            d2.visiblePlotOnly = true;
            return this.chart.isInsidePlot(b2, a4, d2);
          };
          a3.defaultOptions = F;
          a3.types = x.seriesTypes;
          a3.registerType = x.registerSeriesType;
          return a3;
        }();
        b(a2.prototype, { axisTypes: ["xAxis", "yAxis"], coll: "series", colorCounter: 0, cropShoulder: 1, directTouch: false, drawLegendSymbol: B.drawLineMarker, isCartesian: true, kdAxisArray: ["clientX", "plotY"], parallelArrays: ["x", "y"], pointClass: C, requireSorting: true, sorted: true });
        x.series = a2;
        "";
        "";
        return a2;
      });
      J(a, "Extensions/ScrollablePlotArea.js", [
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/Axis/Axis.js"],
        a["Core/Chart/Chart.js"],
        a["Core/Series/Series.js"],
        a["Core/Renderer/RendererRegistry.js"],
        a["Core/Utilities.js"]
      ], function(a2, q, A, E, B, C) {
        var v = a2.stop, x = C.addEvent, u = C.createElement, n = C.defined, c = C.merge, h = C.pick;
        x(A, "afterSetChartSize", function(a3) {
          var h2 = this.options.chart.scrollablePlotArea, m = h2 && h2.minWidth;
          h2 = h2 && h2.minHeight;
          if (!this.renderer.forExport) {
            if (m) {
              if (this.scrollablePixelsX = m = Math.max(0, m - this.chartWidth)) {
                this.scrollablePlotBox = this.renderer.scrollablePlotBox = c(this.plotBox);
                this.plotBox.width = this.plotWidth += m;
                this.inverted ? this.clipBox.height += m : this.clipBox.width += m;
                var f = { 1: { name: "right", value: m } };
              }
            } else
              h2 && (this.scrollablePixelsY = m = Math.max(0, h2 - this.chartHeight), n(m) && (this.scrollablePlotBox = this.renderer.scrollablePlotBox = c(this.plotBox), this.plotBox.height = this.plotHeight += m, this.inverted ? this.clipBox.width += m : this.clipBox.height += m, f = { 2: { name: "bottom", value: m } }));
            f && !a3.skipAxes && this.axes.forEach(function(a4) {
              f[a4.side] ? a4.getPlotLinePath = function() {
                var c2 = f[a4.side].name, h3 = this[c2];
                this[c2] = h3 - f[a4.side].value;
                var l = q.prototype.getPlotLinePath.apply(this, arguments);
                this[c2] = h3;
                return l;
              } : (a4.setAxisSize(), a4.setAxisTranslation());
            });
          }
        });
        x(A, "render", function() {
          this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
        });
        A.prototype.setUpScrolling = function() {
          var a3 = this, c2 = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" };
          this.scrollablePixelsX && (c2.overflowX = "auto");
          this.scrollablePixelsY && (c2.overflowY = "auto");
          this.scrollingParent = u("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, this.renderTo);
          this.scrollingContainer = u("div", { className: "highcharts-scrolling" }, c2, this.scrollingParent);
          var h2;
          x(this.scrollingContainer, "scroll", function() {
            a3.pointer && (delete a3.pointer.chartPosition, a3.hoverPoint && (h2 = a3.hoverPoint), a3.pointer.runPointActions(void 0, h2, true));
          });
          this.innerContainer = u("div", { className: "highcharts-inner-container" }, null, this.scrollingContainer);
          this.innerContainer.appendChild(this.container);
          this.setUpScrolling = null;
        };
        A.prototype.moveFixedElements = function() {
          var a3 = this.container, c2 = this.fixedRenderer, h2 = ".highcharts-breadcrumbs-group .highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "), f;
          this.scrollablePixelsX && !this.inverted ? f = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? f = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? f = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (f = ".highcharts-yaxis");
          f && h2.push("" + f + ":not(.highcharts-radial-axis)", "" + f + "-labels:not(.highcharts-radial-axis-labels)");
          h2.forEach(function(f2) {
            [].forEach.call(a3.querySelectorAll(f2), function(a4) {
              (a4.namespaceURI === c2.SVG_NS ? c2.box : c2.box.parentNode).appendChild(a4);
              a4.style.pointerEvents = "auto";
            });
          });
        };
        A.prototype.applyFixed = function() {
          var a3 = !this.fixedDiv, c2 = this.options.chart, p = c2.scrollablePlotArea, f = B.getRendererType();
          a3 ? (this.fixedDiv = u("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: (c2.style && c2.style.zIndex || 0) + 2, top: 0 }, null, true), this.scrollingContainer && this.scrollingContainer.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = c2 = new f(this.fixedDiv, this.chartWidth, this.chartHeight, this.options.chart.style), this.scrollableMask = c2.path().attr({ fill: this.options.chart.backgroundColor || "#fff", "fill-opacity": h(p.opacity, 0.85), zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), x(this, "afterShowResetZoom", this.moveFixedElements), x(this, "afterApplyDrilldown", this.moveFixedElements), x(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);
          if (this.scrollableDirty || a3)
            this.scrollableDirty = false, this.moveFixedElements();
          c2 = this.chartWidth + (this.scrollablePixelsX || 0);
          f = this.chartHeight + (this.scrollablePixelsY || 0);
          v(this.container);
          this.container.style.width = c2 + "px";
          this.container.style.height = f + "px";
          this.renderer.boxWrapper.attr({ width: c2, height: f, viewBox: [0, 0, c2, f].join(" ") });
          this.chartBackground.attr({ width: c2, height: f });
          this.scrollingContainer.style.height = this.chartHeight + "px";
          a3 && (p.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * p.scrollPositionX), p.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * p.scrollPositionY));
          f = this.axisOffset;
          a3 = this.plotTop - f[0] - 1;
          p = this.plotLeft - f[3] - 1;
          c2 = this.plotTop + this.plotHeight + f[2] + 1;
          f = this.plotLeft + this.plotWidth + f[1] + 1;
          var n2 = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0), q2 = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
          a3 = this.scrollablePixelsX ? [["M", 0, a3], ["L", this.plotLeft - 1, a3], ["L", this.plotLeft - 1, c2], ["L", 0, c2], ["Z"], ["M", n2, a3], ["L", this.chartWidth, a3], ["L", this.chartWidth, c2], ["L", n2, c2], ["Z"]] : this.scrollablePixelsY ? [["M", p, 0], ["L", p, this.plotTop - 1], ["L", f, this.plotTop - 1], ["L", f, 0], ["Z"], ["M", p, q2], ["L", p, this.chartHeight], ["L", f, this.chartHeight], ["L", f, q2], ["Z"]] : [["M", 0, 0]];
          "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({ d: a3 });
        };
        x(q, "afterInit", function() {
          this.chart.scrollableDirty = true;
        });
        x(E, "show", function() {
          this.chart.scrollableDirty = true;
        });
        "";
      });
      J(a, "Core/Axis/Stacking/StackItem.js", [a["Core/FormatUtilities.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, q, A) {
        var v = a2.format, B = q.series, C = A.destroyObjectProperties, F = A.pick, x = A.isNumber;
        a2 = function() {
          function a3(a4, c, h, m, l) {
            var p = a4.chart.inverted, f = a4.reversed;
            this.axis = a4;
            a4 = this.isNegative = !!h !== !!f;
            this.options = c = c || {};
            this.x = m;
            this.cumulative = this.total = null;
            this.points = {};
            this.hasValidPoints = false;
            this.stack = l;
            this.rightCliff = this.leftCliff = 0;
            this.alignOptions = { align: c.align || (p ? a4 ? "left" : "right" : "center"), verticalAlign: c.verticalAlign || (p ? "middle" : a4 ? "bottom" : "top"), y: c.y, x: c.x };
            this.textAlign = c.textAlign || (p ? a4 ? "right" : "left" : "center");
          }
          a3.prototype.destroy = function() {
            C(
              this,
              this.axis
            );
          };
          a3.prototype.render = function(a4) {
            var c = this.axis.chart, h = this.options, m = h.format;
            m = m ? v(m, this, c) : h.formatter.call(this);
            this.label ? this.label.attr({ text: m, visibility: "hidden" }) : (this.label = c.renderer.label(m, null, void 0, h.shape, void 0, void 0, h.useHTML, false, "stack-labels"), m = { r: h.borderRadius || 0, text: m, padding: F(h.padding, 5), visibility: "hidden" }, c.styledMode || (m.fill = h.backgroundColor, m.stroke = h.borderColor, m["stroke-width"] = h.borderWidth, this.label.css(h.style || {})), this.label.attr(m), this.label.added || this.label.add(a4));
            this.label.labelrank = c.plotSizeY;
          };
          a3.prototype.setOffset = function(a4, c, h, m, l, p) {
            var f = this.alignOptions, n = this.axis, u = this.label, q2 = this.options, v2 = this.textAlign, y = n.chart;
            a4 = this.getStackBox({ xOffset: a4, width: c, boxBottom: h, boxTop: m, defaultX: l, xAxis: p });
            l = f.verticalAlign;
            u && a4 && (c = u.getBBox(), h = u.padding, m = "justify" === F(q2.overflow, "justify"), f.x = q2.x || 0, f.y = q2.y || 0, l = this.adjustStackPosition({ labelBox: c, verticalAlign: l, textAlign: v2 }), v2 = l.x, l = l.y, a4.x -= v2, a4.y -= l, u.align(f, false, a4), (v2 = y.isInsidePlot(u.alignAttr.x + f.x + v2, u.alignAttr.y + f.y + l)) || (m = false), m && B.prototype.justifyDataLabel.call(n, u, f, u.alignAttr, c, a4), u.attr({ x: u.alignAttr.x, y: u.alignAttr.y, rotation: q2.rotation, rotationOriginX: c.width / 2, rotationOriginY: c.height / 2 }), F(!m && q2.crop, true) && (v2 = x(u.x) && x(u.y) && y.isInsidePlot(u.x - h + u.width, u.y) && y.isInsidePlot(u.x + h, u.y)), u[v2 ? "show" : "hide"]());
          };
          a3.prototype.adjustStackPosition = function(a4) {
            var c = a4.labelBox, h = { bottom: 0, middle: 1, top: 2, right: 1, center: 0, left: -1 };
            return { x: c.width / 2 + c.width / 2 * h[a4.textAlign], y: c.height / 2 * h[a4.verticalAlign] };
          };
          a3.prototype.getStackBox = function(a4) {
            var c = this.axis, h = c.chart, m = a4.boxTop, l = a4.defaultX, p = a4.xOffset, f = a4.width, n = a4.boxBottom;
            m = c.stacking.usePercentage ? 100 : F(m, this.total, 0);
            m = c.toPixels(m);
            a4 = F(l, (a4.xAxis || h.xAxis[0]).toPixels(this.x)) + p;
            c = c.toPixels(n ? n : 0);
            c = Math.abs(m - c);
            n = this.isNegative;
            return h.inverted ? { x: (n ? m : m - c) - h.plotLeft, y: a4 - h.plotTop, width: c, height: f } : { x: a4 - h.plotLeft, y: (n ? m - c : m) - h.plotTop, width: f, height: c };
          };
          return a3;
        }();
        "";
        return a2;
      });
      J(
        a,
        "Core/Axis/Stacking/StackingAxis.js",
        [a["Core/Animation/AnimationUtilities.js"], a["Core/Axis/Axis.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Axis/Stacking/StackItem.js"], a["Core/Utilities.js"]],
        function(a2, q, A, E, B) {
          function v() {
            var b = this, a3 = b.inverted;
            b.yAxis.forEach(function(b2) {
              b2.stacking && b2.stacking.stacks && b2.hasVisibleSeries && (b2.stacking.oldStacks = b2.stacking.stacks);
            });
            b.series.forEach(function(d) {
              var c2 = d.xAxis && d.xAxis.options || {};
              !d.options.stacking || true !== d.visible && false !== b.options.chart.ignoreHiddenSeries || (d.stackKey = [
                d.type,
                k(d.options.stack, ""),
                a3 ? c2.top : c2.left,
                a3 ? c2.height : c2.width
              ].join());
            });
          }
          function F() {
            var b = this.stacking;
            if (b) {
              var a3 = b.stacks;
              w(a3, function(b2, d) {
                H(b2);
                a3[d] = null;
              });
              b && b.stackTotalGroup && b.stackTotalGroup.destroy();
            }
          }
          function x() {
            "yAxis" !== this.coll || this.stacking || (this.stacking = new g(this));
          }
          function u(b, a3, c2, e2) {
            !G(b) || b.x !== a3 || e2 && b.stackKey !== e2 ? b = { x: a3, index: 0, key: e2, stackKey: e2 } : b.index++;
            b.key = [c2, a3, b.index].join();
            return b;
          }
          function n() {
            var b = this, a3 = b.stackKey, c2 = b.yAxis.stacking.stacks, e2 = b.processedXData, g2 = b[b.options.stacking + "Stacker"], f2;
            g2 && [a3, "-" + a3].forEach(function(a4) {
              for (var d = e2.length, k2, r; d--; )
                k2 = e2[d], f2 = b.getStackIndicator(f2, k2, b.index, a4), (r = (k2 = c2[a4] && c2[a4][k2]) && k2.points[f2.key]) && g2.call(b, r, k2, d);
            });
          }
          function c(b, a3, c2) {
            a3 = a3.total ? 100 / a3.total : 0;
            b[0] = D(b[0] * a3);
            b[1] = D(b[1] * a3);
            this.stackedYData[c2] = b[1];
          }
          function h() {
            var b = this.yAxis.stacking;
            this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length ? p.setStackedPoints.call(this, "group") : b && w(b.stacks, function(a3, c2) {
              "group" === c2.slice(-5) && (w(a3, function(b2) {
                return b2.destroy();
              }), delete b.stacks[c2]);
            });
          }
          function m(b) {
            var a3 = this.chart, c2 = b || this.options.stacking;
            if (c2 && (true === this.visible || false === a3.options.chart.ignoreHiddenSeries)) {
              var e2 = this.processedXData, g2 = this.processedYData, f2 = [], h2 = g2.length, l2 = this.options, m2 = l2.threshold, p2 = k(l2.startFromThreshold && m2, 0);
              l2 = l2.stack;
              b = b ? "" + this.type + ",".concat(c2) : this.stackKey;
              var t2 = "-" + b, n2 = this.negStacks;
              a3 = "group" === c2 ? a3.yAxis[0] : this.yAxis;
              var w2 = a3.stacking.stacks, u2 = a3.stacking.oldStacks, q2, v2;
              a3.stacking.stacksTouched += 1;
              for (v2 = 0; v2 < h2; v2++) {
                var x2 = e2[v2];
                var A2 = g2[v2];
                var B2 = this.getStackIndicator(B2, x2, this.index);
                var K2 = B2.key;
                var H2 = (q2 = n2 && A2 < (p2 ? 0 : m2)) ? t2 : b;
                w2[H2] || (w2[H2] = {});
                w2[H2][x2] || (u2[H2] && u2[H2][x2] ? (w2[H2][x2] = u2[H2][x2], w2[H2][x2].total = null) : w2[H2][x2] = new E(a3, a3.options.stackLabels, !!q2, x2, l2));
                H2 = w2[H2][x2];
                null !== A2 ? (H2.points[K2] = H2.points[this.index] = [k(H2.cumulative, p2)], G(H2.cumulative) || (H2.base = K2), H2.touched = a3.stacking.stacksTouched, 0 < B2.index && false === this.singleStacks && (H2.points[K2][0] = H2.points[this.index + "," + x2 + ",0"][0])) : H2.points[K2] = H2.points[this.index] = null;
                "percent" === c2 ? (q2 = q2 ? b : t2, n2 && w2[q2] && w2[q2][x2] ? (q2 = w2[q2][x2], H2.total = q2.total = Math.max(q2.total, H2.total) + Math.abs(A2) || 0) : H2.total = D(H2.total + (Math.abs(A2) || 0))) : "group" === c2 ? (y(A2) && (A2 = A2[0]), null !== A2 && (H2.total = (H2.total || 0) + 1)) : H2.total = D(H2.total + (A2 || 0));
                H2.cumulative = "group" === c2 ? (H2.total || 1) - 1 : k(H2.cumulative, p2) + (A2 || 0);
                null !== A2 && (H2.points[K2].push(H2.cumulative), f2[v2] = H2.cumulative, H2.hasValidPoints = true);
              }
              "percent" === c2 && (a3.stacking.usePercentage = true);
              "group" !== c2 && (this.stackedYData = f2);
              a3.stacking.oldStacks = {};
            }
          }
          var l = a2.getDeferredAnimation, p = A.series.prototype, f = B.addEvent, D = B.correctFloat, G = B.defined, H = B.destroyObjectProperties, K = B.fireEvent, y = B.isArray, t = B.isNumber, w = B.objectEach, k = B.pick, g = function() {
            function b(b2) {
              this.oldStacks = {};
              this.stacks = {};
              this.stacksTouched = 0;
              this.axis = b2;
            }
            b.prototype.buildStacks = function() {
              var b2 = this.axis, a3 = b2.series, c2 = b2.options.reversedStacks, e2 = a3.length, g2;
              this.usePercentage = false;
              for (g2 = e2; g2--; ) {
                var f2 = a3[c2 ? g2 : e2 - g2 - 1];
                f2.setStackedPoints();
                f2.setGroupedPoints();
              }
              for (g2 = 0; g2 < e2; g2++)
                a3[g2].modifyStacks();
              K(b2, "afterBuildStacks");
            };
            b.prototype.cleanStacks = function() {
              if (this.oldStacks)
                var b2 = this.stacks = this.oldStacks;
              w(b2, function(b3) {
                w(b3, function(b4) {
                  b4.cumulative = b4.total;
                });
              });
            };
            b.prototype.resetStacks = function() {
              var b2 = this;
              w(this.stacks, function(a3) {
                w(a3, function(d, c2) {
                  t(d.touched) && d.touched < b2.stacksTouched ? (d.destroy(), delete a3[c2]) : (d.total = null, d.cumulative = null);
                });
              });
            };
            b.prototype.renderStackTotals = function() {
              var b2 = this.axis, a3 = b2.chart, c2 = a3.renderer, e2 = this.stacks;
              b2 = l(a3, b2.options.stackLabels && b2.options.stackLabels.animation || false);
              var g2 = this.stackTotalGroup = this.stackTotalGroup || c2.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add();
              g2.translate(a3.plotLeft, a3.plotTop);
              w(e2, function(b3) {
                w(b3, function(b4) {
                  b4.render(g2);
                });
              });
              g2.animate({ opacity: 1 }, b2);
            };
            return b;
          }(), e;
          (function(b) {
            var a3 = [];
            b.compose = function(b2, d, e2) {
              -1 === a3.indexOf(b2) && (a3.push(b2), f(b2, "init", x), f(b2, "destroy", F));
              -1 === a3.indexOf(d) && (a3.push(d), d.prototype.getStacks = v);
              -1 === a3.indexOf(e2) && (a3.push(e2), b2 = e2.prototype, b2.getStackIndicator = u, b2.modifyStacks = n, b2.percentStacker = c, b2.setGroupedPoints = h, b2.setStackedPoints = m);
            };
          })(e || (e = {}));
          return e;
        }
      );
      J(a, "Series/Line/LineSeries.js", [a["Core/Series/Series.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, q, A) {
        var v = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(q2, u) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c) {
              a4.__proto__ = c;
            } || function(a4, c) {
              for (var h in c)
                c.hasOwnProperty(h) && (a4[h] = c[h]);
            };
            return a3(q2, u);
          };
          return function(q2, u) {
            function n() {
              this.constructor = q2;
            }
            a3(q2, u);
            q2.prototype = null === u ? Object.create(u) : (n.prototype = u.prototype, new n());
          };
        }(), B = A.defined, C = A.merge;
        A = function(q2) {
          function x() {
            var a3 = null !== q2 && q2.apply(this, arguments) || this;
            a3.data = void 0;
            a3.options = void 0;
            a3.points = void 0;
            return a3;
          }
          v(x, q2);
          x.prototype.drawGraph = function() {
            var a3 = this, n = this.options, c = (this.gappedPath || this.getGraphPath).call(this), h = this.chart.styledMode, m = [["graph", "highcharts-graph"]];
            h || m[0].push(n.lineColor || this.color || "#cccccc", n.dashStyle);
            m = a3.getZonesGraphs(m);
            m.forEach(function(l, m2) {
              var f = l[0], p = a3[f], u = p ? "animate" : "attr";
              p ? (p.endX = a3.preventGraphAnimation ? null : c.xMap, p.animate({ d: c })) : c.length && (a3[f] = p = a3.chart.renderer.path(c).addClass(l[1]).attr({ zIndex: 1 }).add(a3.group));
              p && !h && (f = { stroke: l[2], "stroke-width": n.lineWidth || 0, fill: a3.fillGraph && a3.color || "none" }, l[3] ? f.dashstyle = l[3] : "square" !== n.linecap && (f["stroke-linecap"] = f["stroke-linejoin"] = "round"), p[u](f).shadow(2 > m2 && n.shadow));
              p && (p.startX = c.xMap, p.isArea = c.isArea);
            });
          };
          x.prototype.getGraphPath = function(a3, n, c) {
            var h = this, m = h.options, l = [], p = [], f, u = m.step;
            a3 = a3 || h.points;
            var q3 = a3.reversed;
            q3 && a3.reverse();
            (u = { right: 1, center: 2 }[u] || u && 3) && q3 && (u = 4 - u);
            a3 = this.getValidPoints(a3, false, !(m.connectNulls && !n && !c));
            a3.forEach(function(q4, v2) {
              var y = q4.plotX, t = q4.plotY, w = a3[v2 - 1];
              (q4.leftCliff || w && w.rightCliff) && !c && (f = true);
              q4.isNull && !B(n) && 0 < v2 ? f = !m.connectNulls : q4.isNull && !n ? f = true : (0 === v2 || f ? v2 = [["M", q4.plotX, q4.plotY]] : h.getPointSpline ? v2 = [h.getPointSpline(a3, q4, v2)] : u ? (v2 = 1 === u ? [["L", w.plotX, t]] : 2 === u ? [["L", (w.plotX + y) / 2, w.plotY], ["L", (w.plotX + y) / 2, t]] : [["L", y, w.plotY]], v2.push(["L", y, t])) : v2 = [["L", y, t]], p.push(q4.x), u && (p.push(q4.x), 2 === u && p.push(q4.x)), l.push.apply(l, v2), f = false);
            });
            l.xMap = p;
            return h.graphPath = l;
          };
          x.prototype.getZonesGraphs = function(a3) {
            this.zones.forEach(function(n, c) {
              c = ["zone-graph-" + c, "highcharts-graph highcharts-zone-graph-" + c + " " + (n.className || "")];
              this.chart.styledMode || c.push(n.color || this.color, n.dashStyle || this.options.dashStyle);
              a3.push(c);
            }, this);
            return a3;
          };
          x.defaultOptions = C(a2.defaultOptions, {});
          return x;
        }(a2);
        q.registerSeriesType(
          "line",
          A
        );
        "";
        return A;
      });
      J(a, "Series/Area/AreaSeries.js", [a["Core/Color/Color.js"], a["Core/Legend/LegendSymbol.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, q, A, E) {
        var v = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(c, m) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c2) {
              a4.__proto__ = c2;
            } || function(a4, c2) {
              for (var f in c2)
                c2.hasOwnProperty(f) && (a4[f] = c2[f]);
            };
            return a3(c, m);
          };
          return function(c, m) {
            function h() {
              this.constructor = c;
            }
            a3(c, m);
            c.prototype = null === m ? Object.create(m) : (h.prototype = m.prototype, new h());
          };
        }(), C = a2.parse, F = A.seriesTypes.line;
        a2 = E.extend;
        var x = E.merge, u = E.objectEach, n = E.pick;
        E = function(a3) {
          function c() {
            var c2 = null !== a3 && a3.apply(this, arguments) || this;
            c2.data = void 0;
            c2.options = void 0;
            c2.points = void 0;
            return c2;
          }
          v(c, a3);
          c.prototype.drawGraph = function() {
            this.areaPath = [];
            a3.prototype.drawGraph.apply(this);
            var c2 = this, h = this.areaPath, p = this.options, f = [["area", "highcharts-area", this.color, p.fillColor]];
            this.zones.forEach(function(a4, h2) {
              f.push(["zone-area-" + h2, "highcharts-area highcharts-zone-area-" + h2 + " " + a4.className, a4.color || c2.color, a4.fillColor || p.fillColor]);
            });
            f.forEach(function(a4) {
              var f2 = a4[0], l = {}, m = c2[f2], u2 = m ? "animate" : "attr";
              m ? (m.endX = c2.preventGraphAnimation ? null : h.xMap, m.animate({ d: h })) : (l.zIndex = 0, m = c2[f2] = c2.chart.renderer.path(h).addClass(a4[1]).add(c2.group), m.isArea = true);
              c2.chart.styledMode || (l.fill = n(a4[3], C(a4[2]).setOpacity(n(p.fillOpacity, 0.75)).get()));
              m[u2](l);
              m.startX = h.xMap;
              m.shiftUnit = p.step ? 2 : 1;
            });
          };
          c.prototype.getGraphPath = function(a4) {
            var c2 = F.prototype.getGraphPath, h = this.options, f = h.stacking, m = this.yAxis, u2 = [], q2 = [], v2 = this.index, y = m.stacking.stacks[this.stackKey], t = h.threshold, w = Math.round(m.getThreshold(h.threshold));
            h = n(h.connectNulls, "percent" === f);
            var k = function(b2, c3, e2) {
              var g2 = a4[b2];
              b2 = f && y[g2.x].points[v2];
              var k2 = g2[e2 + "Null"] || 0;
              e2 = g2[e2 + "Cliff"] || 0;
              g2 = true;
              if (e2 || k2) {
                var r2 = (k2 ? b2[0] : b2[1]) + e2;
                var h2 = b2[0] + e2;
                g2 = !!k2;
              } else
                !f && a4[c3] && a4[c3].isNull && (r2 = h2 = t);
              "undefined" !== typeof r2 && (q2.push({ plotX: d, plotY: null === r2 ? w : m.getThreshold(r2), isNull: g2, isCliff: true }), u2.push({ plotX: d, plotY: null === h2 ? w : m.getThreshold(h2), doCurve: false }));
            };
            a4 = a4 || this.points;
            f && (a4 = this.getStackPoints(a4));
            for (var g = 0, e = a4.length; g < e; ++g) {
              f || (a4[g].leftCliff = a4[g].rightCliff = a4[g].leftNull = a4[g].rightNull = void 0);
              var b = a4[g].isNull;
              var d = n(a4[g].rectPlotX, a4[g].plotX);
              var r = f ? n(a4[g].yBottom, w) : w;
              if (!b || h)
                h || k(g, g - 1, "left"), b && !f && h || (q2.push(a4[g]), u2.push({ x: g, plotX: d, plotY: r })), h || k(g, g + 1, "right");
            }
            k = c2.call(this, q2, true, true);
            u2.reversed = true;
            b = c2.call(this, u2, true, true);
            (r = b[0]) && "M" === r[0] && (b[0] = ["L", r[1], r[2]]);
            b = k.concat(b);
            b.length && b.push(["Z"]);
            c2 = c2.call(this, q2, false, h);
            b.xMap = k.xMap;
            this.areaPath = b;
            return c2;
          };
          c.prototype.getStackPoints = function(a4) {
            var c2 = this, h = [], f = [], m = this.xAxis, q2 = this.yAxis, v2 = q2.stacking.stacks[this.stackKey], x2 = {}, y = q2.series, t = y.length, w = q2.options.reversedStacks ? 1 : -1, k = y.indexOf(c2);
            a4 = a4 || this.points;
            if (this.options.stacking) {
              for (var g = 0; g < a4.length; g++)
                a4[g].leftNull = a4[g].rightNull = void 0, x2[a4[g].x] = a4[g];
              u(v2, function(b, a5) {
                null !== b.total && f.push(a5);
              });
              f.sort(function(b, a5) {
                return b - a5;
              });
              var e = y.map(function(b) {
                return b.visible;
              });
              f.forEach(function(b, a5) {
                var d = 0, g2, l;
                if (x2[b] && !x2[b].isNull)
                  h.push(x2[b]), [-1, 1].forEach(function(d2) {
                    var r = 1 === d2 ? "rightNull" : "leftNull", h2 = v2[f[a5 + d2]], m2 = 0;
                    if (h2)
                      for (var p2 = k; 0 <= p2 && p2 < t; ) {
                        var z = y[p2].index;
                        g2 = h2.points[z];
                        g2 || (z === c2.index ? x2[b][r] = true : e[p2] && (l = v2[b].points[z]) && (m2 -= l[1] - l[0]));
                        p2 += w;
                      }
                    x2[b][1 === d2 ? "rightCliff" : "leftCliff"] = m2;
                  });
                else {
                  for (var p = k; 0 <= p && p < t; ) {
                    if (g2 = v2[b].points[y[p].index]) {
                      d = g2[1];
                      break;
                    }
                    p += w;
                  }
                  d = n(d, 0);
                  d = q2.translate(d, 0, 1, 0, 1);
                  h.push({ isNull: true, plotX: m.translate(b, 0, 0, 0, 1), x: b, plotY: d, yBottom: d });
                }
              });
            }
            return h;
          };
          c.defaultOptions = x(F.defaultOptions, { threshold: 0 });
          return c;
        }(F);
        a2(E.prototype, { singleStacks: false, drawLegendSymbol: q.drawRectangle });
        A.registerSeriesType("area", E);
        "";
        return E;
      });
      J(a, "Series/Spline/SplineSeries.js", [a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, q) {
        var v = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(q2, u) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c) {
              a4.__proto__ = c;
            } || function(a4, c) {
              for (var h in c)
                c.hasOwnProperty(h) && (a4[h] = c[h]);
            };
            return a3(q2, u);
          };
          return function(q2, u) {
            function n() {
              this.constructor = q2;
            }
            a3(q2, u);
            q2.prototype = null === u ? Object.create(u) : (n.prototype = u.prototype, new n());
          };
        }(), E = a2.seriesTypes.line, B = q.merge, C = q.pick;
        q = function(a3) {
          function q2() {
            var u = null !== a3 && a3.apply(this, arguments) || this;
            u.data = void 0;
            u.options = void 0;
            u.points = void 0;
            return u;
          }
          v(q2, a3);
          q2.prototype.getPointSpline = function(a4, n, c) {
            var h = n.plotX || 0, m = n.plotY || 0, l = a4[c - 1];
            c = a4[c + 1];
            if (l && !l.isNull && false !== l.doCurve && !n.isCliff && c && !c.isNull && false !== c.doCurve && !n.isCliff) {
              a4 = l.plotY || 0;
              var p = c.plotX || 0;
              c = c.plotY || 0;
              var f = 0;
              var u = (1.5 * h + (l.plotX || 0)) / 2.5;
              var q3 = (1.5 * m + a4) / 2.5;
              p = (1.5 * h + p) / 2.5;
              var v2 = (1.5 * m + c) / 2.5;
              p !== u && (f = (v2 - q3) * (p - h) / (p - u) + m - v2);
              q3 += f;
              v2 += f;
              q3 > a4 && q3 > m ? (q3 = Math.max(a4, m), v2 = 2 * m - q3) : q3 < a4 && q3 < m && (q3 = Math.min(a4, m), v2 = 2 * m - q3);
              v2 > c && v2 > m ? (v2 = Math.max(c, m), q3 = 2 * m - v2) : v2 < c && v2 < m && (v2 = Math.min(c, m), q3 = 2 * m - v2);
              n.rightContX = p;
              n.rightContY = v2;
            }
            n = ["C", C(l.rightContX, l.plotX, 0), C(l.rightContY, l.plotY, 0), C(u, h, 0), C(q3, m, 0), h, m];
            l.rightContX = l.rightContY = void 0;
            return n;
          };
          q2.defaultOptions = B(E.defaultOptions);
          return q2;
        }(E);
        a2.registerSeriesType(
          "spline",
          q
        );
        "";
        return q;
      });
      J(a, "Series/AreaSpline/AreaSplineSeries.js", [a["Series/Spline/SplineSeries.js"], a["Core/Legend/LegendSymbol.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, q, A, E) {
        var v = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(c, h) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c2) {
              a4.__proto__ = c2;
            } || function(a4, c2) {
              for (var h2 in c2)
                c2.hasOwnProperty(h2) && (a4[h2] = c2[h2]);
            };
            return a3(c, h);
          };
          return function(c, h) {
            function m() {
              this.constructor = c;
            }
            a3(c, h);
            c.prototype = null === h ? Object.create(h) : (m.prototype = h.prototype, new m());
          };
        }(), C = A.seriesTypes, F = C.area;
        C = C.area.prototype;
        var x = E.extend, u = E.merge;
        E = function(n) {
          function c() {
            var a3 = null !== n && n.apply(this, arguments) || this;
            a3.data = void 0;
            a3.points = void 0;
            a3.options = void 0;
            return a3;
          }
          v(c, n);
          c.defaultOptions = u(a2.defaultOptions, F.defaultOptions);
          return c;
        }(a2);
        x(E.prototype, { getGraphPath: C.getGraphPath, getStackPoints: C.getStackPoints, drawGraph: C.drawGraph, drawLegendSymbol: q.drawRectangle });
        A.registerSeriesType("areaspline", E);
        "";
        return E;
      });
      J(a, "Series/Column/ColumnSeriesDefaults.js", [], function() {
        "";
        return { borderRadius: 0, centerInCategory: false, groupPadding: 0.2, marker: null, pointPadding: 0.1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: false, brightness: 0.1 }, select: { color: "#cccccc", borderColor: "#000000" } }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: true, stickyTracking: false, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff" };
      });
      J(a, "Series/Column/ColumnSeries.js", [
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/Color/Color.js"],
        a["Series/Column/ColumnSeriesDefaults.js"],
        a["Core/Globals.js"],
        a["Core/Legend/LegendSymbol.js"],
        a["Core/Series/Series.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Core/Utilities.js"]
      ], function(a2, q, A, E, B, C, F, x) {
        var u = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(c2, f2) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c3) {
              a4.__proto__ = c3;
            } || function(a4, c3) {
              for (var b in c3)
                c3.hasOwnProperty(b) && (a4[b] = c3[b]);
            };
            return a3(c2, f2);
          };
          return function(c2, f2) {
            function g() {
              this.constructor = c2;
            }
            a3(c2, f2);
            c2.prototype = null === f2 ? Object.create(f2) : (g.prototype = f2.prototype, new g());
          };
        }(), n = a2.animObject, c = q.parse, h = E.hasTouch;
        a2 = E.noop;
        var m = x.clamp, l = x.defined, p = x.extend, f = x.fireEvent, v = x.isArray, G = x.isNumber, H = x.merge, K = x.pick, y = x.objectEach;
        x = function(a3) {
          function t() {
            var c2 = null !== a3 && a3.apply(this, arguments) || this;
            c2.borderWidth = void 0;
            c2.data = void 0;
            c2.group = void 0;
            c2.options = void 0;
            c2.points = void 0;
            return c2;
          }
          u(t, a3);
          t.prototype.animate = function(a4) {
            var c2 = this, e = this.yAxis, b = c2.options, d = this.chart.inverted, f2 = {}, k = d ? "translateX" : "translateY";
            if (a4)
              f2.scaleY = 1e-3, a4 = m(e.toPixels(b.threshold), e.pos, e.pos + e.len), d ? f2.translateX = a4 - e.len : f2.translateY = a4, c2.clipBox && c2.setClip(), c2.group.attr(f2);
            else {
              var h2 = Number(c2.group.attr(k));
              c2.group.animate({ scaleY: 1 }, p(n(c2.options.animation), { step: function(b2, a5) {
                c2.group && (f2[k] = h2 + a5.pos * (e.pos - h2), c2.group.attr(f2));
              } }));
            }
          };
          t.prototype.init = function(c2, g) {
            a3.prototype.init.apply(this, arguments);
            var e = this;
            c2 = e.chart;
            c2.hasRendered && c2.series.forEach(function(b) {
              b.type === e.type && (b.isDirty = true);
            });
          };
          t.prototype.getColumnMetrics = function() {
            var a4 = this, c2 = a4.options, e = a4.xAxis, b = a4.yAxis, d = e.options.reversedStacks;
            d = e.reversed && !d || !e.reversed && d;
            var f2 = {}, h2, l2 = 0;
            false === c2.grouping ? l2 = 1 : a4.chart.series.forEach(function(d2) {
              var c3 = d2.yAxis, e2 = d2.options;
              if (d2.type === a4.type && (d2.visible || !a4.chart.options.chart.ignoreHiddenSeries) && b.len === c3.len && b.pos === c3.pos) {
                if (e2.stacking && "group" !== e2.stacking) {
                  h2 = d2.stackKey;
                  "undefined" === typeof f2[h2] && (f2[h2] = l2++);
                  var g = f2[h2];
                } else
                  false !== e2.grouping && (g = l2++);
                d2.columnIndex = g;
              }
            });
            var m2 = Math.min(Math.abs(e.transA) * (e.ordinal && e.ordinal.slope || c2.pointRange || e.closestPointRange || e.tickInterval || 1), e.len), p2 = m2 * c2.groupPadding, t2 = (m2 - 2 * p2) / (l2 || 1);
            c2 = Math.min(c2.maxPointWidth || e.len, K(c2.pointWidth, t2 * (1 - 2 * c2.pointPadding)));
            a4.columnMetrics = { width: c2, offset: (t2 - c2) / 2 + (p2 + ((a4.columnIndex || 0) + (d ? 1 : 0)) * t2 - m2 / 2) * (d ? -1 : 1), paddedWidth: t2, columnCount: l2 };
            return a4.columnMetrics;
          };
          t.prototype.crispCol = function(a4, c2, e, b) {
            var d = this.chart, g = this.borderWidth, f2 = -(g % 2 ? 0.5 : 0);
            g = g % 2 ? 0.5 : 1;
            d.inverted && d.renderer.isVML && (g += 1);
            this.options.crisp && (e = Math.round(a4 + e) + f2, a4 = Math.round(a4) + f2, e -= a4);
            b = Math.round(c2 + b) + g;
            f2 = 0.5 >= Math.abs(c2) && 0.5 < b;
            c2 = Math.round(c2) + g;
            b -= c2;
            f2 && b && (--c2, b += 1);
            return { x: a4, y: c2, width: e, height: b };
          };
          t.prototype.adjustForMissingColumns = function(a4, c2, e, b) {
            var d = this, g = this.options.stacking;
            if (!e.isNull && 1 < b.columnCount) {
              var f2 = this.yAxis.options.reversedStacks, k = 0, h2 = f2 ? 0 : -b.columnCount;
              y(this.yAxis.stacking && this.yAxis.stacking.stacks, function(b2) {
                if ("number" === typeof e.x) {
                  var a5 = b2[e.x.toString()];
                  a5 && (b2 = a5.points[d.index], g ? (b2 && (k = h2), a5.hasValidPoints && (f2 ? h2++ : h2--)) : v(b2) && (b2 = Object.keys(a5.points).filter(function(b3) {
                    return !b3.match(",") && a5.points[b3] && 1 < a5.points[b3].length;
                  }).map(parseFloat).sort(function(b3, a6) {
                    return a6 - b3;
                  }), k = b2.indexOf(d.index), h2 = b2.length));
                }
              });
              a4 = (e.plotX || 0) + ((h2 - 1) * b.paddedWidth + c2) / 2 - c2 - k * b.paddedWidth;
            }
            return a4;
          };
          t.prototype.translate = function() {
            var a4 = this, c2 = a4.chart, e = a4.options, b = a4.dense = 2 > a4.closestPointRange * a4.xAxis.transA;
            b = a4.borderWidth = K(e.borderWidth, b ? 0 : 1);
            var d = a4.xAxis, f2 = a4.yAxis, h2 = e.threshold, p2 = a4.translatedThreshold = f2.getThreshold(h2), t2 = K(e.minPointLength, 5), n2 = a4.getColumnMetrics(), w = n2.width, u2 = a4.pointXOffset = n2.offset, q2 = a4.dataMin, y2 = a4.dataMax, v2 = a4.barW = Math.max(w, 1 + 2 * b);
            c2.inverted && (p2 -= 0.5);
            e.pointPadding && (v2 = Math.ceil(v2));
            C.prototype.translate.apply(a4);
            a4.points.forEach(function(b2) {
              var g = K(b2.yBottom, p2), k = 999 + Math.abs(g), r = b2.plotX || 0;
              k = m(b2.plotY, -k, f2.len + k);
              var z = Math.min(k, g), I = Math.max(k, g) - z, D = w, N = r + u2, x2 = v2;
              t2 && Math.abs(I) < t2 && (I = t2, r = !f2.reversed && !b2.negative || f2.reversed && b2.negative, G(h2) && G(y2) && b2.y === h2 && y2 <= h2 && (f2.min || 0) < h2 && (q2 !== y2 || (f2.max || 0) <= h2) && (r = !r), z = Math.abs(z - p2) > t2 ? g - t2 : p2 - (r ? t2 : 0));
              l(b2.options.pointWidth) && (D = x2 = Math.ceil(b2.options.pointWidth), N -= Math.round((D - w) / 2));
              e.centerInCategory && (N = a4.adjustForMissingColumns(N, D, b2, n2));
              b2.barX = N;
              b2.pointWidth = D;
              b2.tooltipPos = c2.inverted ? [m(f2.len + f2.pos - c2.plotLeft - k, f2.pos - c2.plotLeft, f2.len + f2.pos - c2.plotLeft), d.len + d.pos - c2.plotTop - N - x2 / 2, I] : [d.left - c2.plotLeft + N + x2 / 2, m(k + f2.pos - c2.plotTop, f2.pos - c2.plotTop, f2.len + f2.pos - c2.plotTop), I];
              b2.shapeType = a4.pointClass.prototype.shapeType || "rect";
              b2.shapeArgs = a4.crispCol.apply(a4, b2.isNull ? [N, p2, x2, 0] : [N, z, x2, I]);
            });
          };
          t.prototype.drawGraph = function() {
            this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
          };
          t.prototype.pointAttribs = function(a4, g) {
            var e = this.options, b = this.pointAttrToOptions || {}, d = b.stroke || "borderColor", f2 = b["stroke-width"] || "borderWidth", k = a4 && a4.color || this.color, h2 = a4 && a4[d] || e[d] || k;
            b = a4 && a4.options.dashStyle || e.dashStyle;
            var l2 = a4 && a4[f2] || e[f2] || this[f2] || 0, m2 = K(a4 && a4.opacity, e.opacity, 1);
            if (a4 && this.zones.length) {
              var p2 = a4.getZone();
              k = a4.options.color || p2 && (p2.color || a4.nonZonedColor) || this.color;
              p2 && (h2 = p2.borderColor || h2, b = p2.dashStyle || b, l2 = p2.borderWidth || l2);
            }
            g && a4 && (a4 = H(e.states[g], a4.options.states && a4.options.states[g] || {}), g = a4.brightness, k = a4.color || "undefined" !== typeof g && c(k).brighten(a4.brightness).get() || k, h2 = a4[d] || h2, l2 = a4[f2] || l2, b = a4.dashStyle || b, m2 = K(a4.opacity, m2));
            d = { fill: k, stroke: h2, "stroke-width": l2, opacity: m2 };
            b && (d.dashstyle = b);
            return d;
          };
          t.prototype.drawPoints = function(a4) {
            void 0 === a4 && (a4 = this.points);
            var c2 = this, e = this.chart, b = c2.options, d = e.renderer, f2 = b.animationLimit || 250, k;
            a4.forEach(function(a5) {
              var g = a5.graphic, r = !!g, h2 = g && e.pointCount < f2 ? "animate" : "attr";
              if (G(a5.plotY) && null !== a5.y) {
                k = a5.shapeArgs;
                g && a5.hasNewShapeType() && (g = g.destroy());
                c2.enabledDataSorting && (a5.startXPos = c2.xAxis.reversed ? -(k ? k.width || 0 : 0) : c2.xAxis.width);
                g || (a5.graphic = g = d[a5.shapeType](k).add(a5.group || c2.group)) && c2.enabledDataSorting && e.hasRendered && e.pointCount < f2 && (g.attr({ x: a5.startXPos }), r = true, h2 = "animate");
                if (g && r)
                  g[h2](H(k));
                if (b.borderRadius)
                  g[h2]({ r: b.borderRadius });
                e.styledMode || g[h2](c2.pointAttribs(a5, a5.selected && "select")).shadow(false !== a5.allowShadow && b.shadow, null, b.stacking && !b.borderRadius);
                g && (g.addClass(a5.getClassName(), true), g.attr({ visibility: a5.visible ? "inherit" : "hidden" }));
              } else
                g && (a5.graphic = g.destroy());
            });
          };
          t.prototype.drawTracker = function(a4) {
            void 0 === a4 && (a4 = this.points);
            var c2 = this, e = c2.chart, b = e.pointer, d = function(a5) {
              var d2 = b.getPointFromEvent(a5);
              "undefined" !== typeof d2 && (b.isDirectTouch = true, d2.onMouseOver(a5));
            }, k;
            a4.forEach(function(b2) {
              k = v(b2.dataLabels) ? b2.dataLabels : b2.dataLabel ? [b2.dataLabel] : [];
              b2.graphic && (b2.graphic.element.point = b2);
              k.forEach(function(a5) {
                a5.div ? a5.div.point = b2 : a5.element.point = b2;
              });
            });
            c2._hasTracking || (c2.trackerGroups.forEach(function(a5) {
              if (c2[a5]) {
                c2[a5].addClass("highcharts-tracker").on("mouseover", d).on("mouseout", function(a6) {
                  b.onTrackerMouseOut(a6);
                });
                if (h)
                  c2[a5].on("touchstart", d);
                !e.styledMode && c2.options.cursor && c2[a5].css({ cursor: c2.options.cursor });
              }
            }), c2._hasTracking = true);
            f(this, "afterDrawTracker");
          };
          t.prototype.remove = function() {
            var a4 = this, c2 = a4.chart;
            c2.hasRendered && c2.series.forEach(function(c3) {
              c3.type === a4.type && (c3.isDirty = true);
            });
            C.prototype.remove.apply(a4, arguments);
          };
          t.defaultOptions = H(C.defaultOptions, A);
          return t;
        }(C);
        p(x.prototype, { cropShoulder: 0, directTouch: true, drawLegendSymbol: B.drawRectangle, getSymbol: a2, negStacks: true, trackerGroups: ["group", "dataLabelsGroup"] });
        F.registerSeriesType("column", x);
        "";
        return x;
      });
      J(a, "Core/Series/DataLabel.js", [a["Core/Animation/AnimationUtilities.js"], a["Core/FormatUtilities.js"], a["Core/Utilities.js"]], function(a2, q, A) {
        var v = a2.getDeferredAnimation, B = q.format, C = A.defined, F = A.extend, x = A.fireEvent, u = A.isArray, n = A.isString, c = A.merge, h = A.objectEach, m = A.pick, l = A.splat, p;
        (function(a3) {
          function f(a4, c2, e, b, d) {
            var g = this, f2 = this.chart, k = this.isCartesian && f2.inverted, h2 = this.enabledDataSorting, l2 = a4.plotX, p3 = a4.plotY, t2 = e.rotation, n2 = e.align, w2 = C(l2) && C(p3) && f2.isInsidePlot(l2, Math.round(p3), { inverted: k, paneCoordinates: true, series: g });
            p3 = function(b2) {
              h2 && g.xAxis && !u2 && g.setDataLabelStartPos(a4, c2, d, w2, b2);
            };
            var u2 = "justify" === m(e.overflow, h2 ? "none" : "justify");
            l2 = this.visible && false !== a4.visible && C(l2) && (a4.series.forceDL || h2 && !u2 || w2 || m(e.inside, !!this.options.stacking) && b && f2.isInsidePlot(l2, k ? b.x + 1 : b.y + b.height - 1, { inverted: k, paneCoordinates: true, series: g }));
            k = a4.pos();
            if (l2 && k) {
              t2 && c2.attr({ align: n2 });
              n2 = c2.getBBox(true);
              var q3 = [0, 0];
              var y2 = f2.renderer.fontMetrics(f2.styledMode ? void 0 : e.style.fontSize, c2).b;
              b = F({ x: k[0], y: Math.round(k[1]), width: 0, height: 0 }, b);
              F(e, { width: n2.width, height: n2.height });
              t2 ? (u2 = false, q3 = f2.renderer.rotCorr(y2, t2), y2 = { x: b.x + (e.x || 0) + b.width / 2 + q3.x, y: b.y + (e.y || 0) + { top: 0, middle: 0.5, bottom: 1 }[e.verticalAlign] * b.height }, q3 = [n2.x - Number(c2.attr("x")), n2.y - Number(c2.attr("y"))], p3(y2), c2[d ? "attr" : "animate"](y2)) : (p3(b), c2.align(e, void 0, b), y2 = c2.alignAttr);
              u2 && 0 <= b.height ? this.justifyDataLabel(c2, e, y2, n2, b, d) : m(e.crop, true) && (b = y2.x, p3 = y2.y, b += q3[0], p3 += q3[1], l2 = f2.isInsidePlot(b, p3, { paneCoordinates: true, series: g }) && f2.isInsidePlot(b + n2.width, p3 + n2.height, { paneCoordinates: true, series: g }));
              if (e.shape && !t2)
                c2[d ? "attr" : "animate"]({ anchorX: k[0], anchorY: k[1] });
            }
            d && h2 && (c2.placed = false);
            l2 || h2 && !u2 ? c2.show() : (c2.hide(), c2.placed = false);
          }
          function p2(a4, c2) {
            var e = c2.filter;
            return e ? (c2 = e.operator, a4 = a4[e.property], e = e.value, ">" === c2 && a4 > e || "<" === c2 && a4 < e || ">=" === c2 && a4 >= e || "<=" === c2 && a4 <= e || "==" === c2 && a4 == e || "===" === c2 && a4 === e ? true : false) : true;
          }
          function q2(a4) {
            void 0 === a4 && (a4 = this.points);
            var c2 = this, e = c2.chart, b = c2.options, d = c2.hasRendered || 0, f2 = e.renderer, k = e.options.chart, t2 = k.backgroundColor;
            k = k.plotBackgroundColor;
            var w2 = f2.getContrast(n(k) && k || n(t2) && t2 || "#000000"), q3 = b.dataLabels, D;
            t2 = q3.animation;
            t2 = q3.defer ? v(e, t2, c2) : { defer: 0, duration: 0 };
            q3 = y(y(
              e.options.plotOptions && e.options.plotOptions.series && e.options.plotOptions.series.dataLabels,
              e.options.plotOptions && e.options.plotOptions[c2.type] && e.options.plotOptions[c2.type].dataLabels
            ), q3);
            x(this, "drawDataLabels");
            if (u(q3) || q3.enabled || c2._hasPointLabels) {
              var A3 = c2.plotGroup("dataLabelsGroup", "data-labels", d ? "inherit" : "hidden", q3.zIndex || 6);
              A3.attr({ opacity: +d });
              !d && (d = c2.dataLabelsGroup) && (c2.visible && A3.show(), d[b.animation ? "animate" : "attr"]({ opacity: 1 }, t2));
              a4.forEach(function(a5) {
                D = l(y(q3, a5.dlOptions || a5.options && a5.options.dataLabels));
                D.forEach(function(d2, g) {
                  var k2 = d2.enabled && (!a5.isNull || a5.dataLabelOnNull) && p2(a5, d2), r = a5.connectors ? a5.connectors[g] : a5.connector, l2 = a5.dataLabels ? a5.dataLabels[g] : a5.dataLabel, t3 = !l2, z = m(d2.distance, a5.labelDistance);
                  if (k2) {
                    var n2 = a5.getLabelConfig();
                    var u2 = m(d2[a5.formatPrefix + "Format"], d2.format);
                    n2 = C(u2) ? B(u2, n2, e) : (d2[a5.formatPrefix + "Formatter"] || d2.formatter).call(n2, d2);
                    u2 = d2.style;
                    var q4 = d2.rotation;
                    e.styledMode || (u2.color = m(d2.color, u2.color, c2.color, "#000000"), "contrast" === u2.color ? (a5.contrastColor = f2.getContrast(a5.color || c2.color), u2.color = !C(z) && d2.inside || 0 > z || b.stacking ? a5.contrastColor : w2) : delete a5.contrastColor, b.cursor && (u2.cursor = b.cursor));
                    var y2 = { r: d2.borderRadius || 0, rotation: q4, padding: d2.padding, zIndex: 1 };
                    if (!e.styledMode) {
                      z = d2.backgroundColor;
                      var v2 = d2.borderColor;
                      y2.fill = "auto" === z ? a5.color : z;
                      y2.stroke = "auto" === v2 ? a5.color : v2;
                      y2["stroke-width"] = d2.borderWidth;
                    }
                    h(y2, function(b2, a6) {
                      "undefined" === typeof b2 && delete y2[a6];
                    });
                  }
                  !l2 || k2 && C(n2) && !!l2.div === !!d2.useHTML && (l2.rotation && d2.rotation || l2.rotation === d2.rotation) || (t3 = true, a5.dataLabel = l2 = a5.dataLabel && a5.dataLabel.destroy(), a5.dataLabels && (1 === a5.dataLabels.length ? delete a5.dataLabels : delete a5.dataLabels[g]), g || delete a5.dataLabel, r && (a5.connector = a5.connector.destroy(), a5.connectors && (1 === a5.connectors.length ? delete a5.connectors : delete a5.connectors[g])));
                  k2 && C(n2) ? (l2 ? y2.text = n2 : (a5.dataLabels = a5.dataLabels || [], l2 = a5.dataLabels[g] = q4 ? f2.text(n2, 0, 0, d2.useHTML).addClass("highcharts-data-label") : f2.label(n2, 0, 0, d2.shape, null, null, d2.useHTML, null, "data-label"), g || (a5.dataLabel = l2), l2.addClass(" highcharts-data-label-color-" + a5.colorIndex + " " + (d2.className || "") + (d2.useHTML ? " highcharts-tracker" : ""))), l2.options = d2, l2.attr(y2), e.styledMode || l2.css(u2).shadow(d2.shadow), (g = d2[a5.formatPrefix + "TextPath"] || d2.textPath) && !d2.useHTML && (l2.setTextPath(a5.getDataLabelPath && a5.getDataLabelPath(l2) || a5.graphic, g), a5.dataLabelPath && !g.enabled && (a5.dataLabelPath = a5.dataLabelPath.destroy())), l2.added || l2.add(A3), c2.alignDataLabel(a5, l2, d2, null, t3)) : l2 && l2.hide();
                });
              });
            }
            x(this, "afterDrawDataLabels");
          }
          function A2(a4, c2, e, b, d, f2) {
            var g = this.chart, k = c2.align, r = c2.verticalAlign, h2 = a4.box ? 0 : a4.padding || 0, l2 = c2.x;
            l2 = void 0 === l2 ? 0 : l2;
            var m2 = c2.y;
            m2 = void 0 === m2 ? 0 : m2;
            var p3 = (e.x || 0) + h2;
            if (0 > p3) {
              "right" === k && 0 <= l2 ? (c2.align = "left", c2.inside = true) : l2 -= p3;
              var t2 = true;
            }
            p3 = (e.x || 0) + b.width - h2;
            p3 > g.plotWidth && ("left" === k && 0 >= l2 ? (c2.align = "right", c2.inside = true) : l2 += g.plotWidth - p3, t2 = true);
            p3 = e.y + h2;
            0 > p3 && ("bottom" === r && 0 <= m2 ? (c2.verticalAlign = "top", c2.inside = true) : m2 -= p3, t2 = true);
            p3 = (e.y || 0) + b.height - h2;
            p3 > g.plotHeight && ("top" === r && 0 >= m2 ? (c2.verticalAlign = "bottom", c2.inside = true) : m2 += g.plotHeight - p3, t2 = true);
            t2 && (c2.x = l2, c2.y = m2, a4.placed = !f2, a4.align(c2, void 0, d));
            return t2;
          }
          function y(a4, g) {
            var e = [], b;
            if (u(a4) && !u(g))
              e = a4.map(function(b2) {
                return c(
                  b2,
                  g
                );
              });
            else if (u(g) && !u(a4))
              e = g.map(function(b2) {
                return c(a4, b2);
              });
            else if (u(a4) || u(g))
              for (b = Math.max(a4.length, g.length); b--; )
                e[b] = c(a4[b], g[b]);
            else
              e = c(a4, g);
            return e;
          }
          function t(a4, c2, e, b, d) {
            var g = this.chart, f2 = g.inverted, k = this.xAxis, h2 = k.reversed, l2 = f2 ? c2.height / 2 : c2.width / 2;
            a4 = (a4 = a4.pointWidth) ? a4 / 2 : 0;
            c2.startXPos = f2 ? d.x : h2 ? -l2 - a4 : k.width - l2 + a4;
            c2.startYPos = f2 ? h2 ? this.yAxis.height - l2 + a4 : -l2 - a4 : d.y;
            b ? "hidden" === c2.visibility && (c2.show(), c2.attr({ opacity: 0 }).animate({ opacity: 1 })) : c2.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, c2.hide);
            g.hasRendered && (e && c2.attr({ x: c2.startXPos, y: c2.startYPos }), c2.placed = true);
          }
          var w = [];
          a3.compose = function(a4) {
            if (-1 === w.indexOf(a4)) {
              var c2 = a4.prototype;
              w.push(a4);
              c2.alignDataLabel = f;
              c2.drawDataLabels = q2;
              c2.justifyDataLabel = A2;
              c2.setDataLabelStartPos = t;
            }
          };
        })(p || (p = {}));
        "";
        return p;
      });
      J(a, "Series/Column/ColumnDataLabel.js", [a["Core/Series/DataLabel.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, q, A) {
        var v = q.series, B = A.merge, C = A.pick, F;
        (function(q2) {
          function u(a3, h, m, l, p) {
            var c = this.chart.inverted, n2 = a3.series, u2 = (n2.xAxis ? n2.xAxis.len : this.chart.plotSizeX) || 0;
            n2 = (n2.yAxis ? n2.yAxis.len : this.chart.plotSizeY) || 0;
            var q3 = a3.dlBox || a3.shapeArgs, x = C(a3.below, a3.plotY > C(this.translatedThreshold, n2)), y = C(m.inside, !!this.options.stacking);
            q3 && (l = B(q3), 0 > l.y && (l.height += l.y, l.y = 0), q3 = l.y + l.height - n2, 0 < q3 && q3 < l.height && (l.height -= q3), c && (l = { x: n2 - l.y - l.height, y: u2 - l.x - l.width, width: l.height, height: l.width }), y || (c ? (l.x += x ? 0 : l.width, l.width = 0) : (l.y += x ? l.height : 0, l.height = 0)));
            m.align = C(m.align, !c || y ? "center" : x ? "right" : "left");
            m.verticalAlign = C(m.verticalAlign, c || y ? "middle" : x ? "top" : "bottom");
            v.prototype.alignDataLabel.call(this, a3, h, m, l, p);
            m.inside && a3.contrastColor && h.css({ color: a3.contrastColor });
          }
          var n = [];
          q2.compose = function(c) {
            a2.compose(v);
            -1 === n.indexOf(c) && (n.push(c), c.prototype.alignDataLabel = u);
          };
        })(F || (F = {}));
        return F;
      });
      J(a, "Series/Bar/BarSeries.js", [a["Series/Column/ColumnSeries.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, q, A) {
        var v = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(q2, u) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c) {
              a4.__proto__ = c;
            } || function(a4, c) {
              for (var h in c)
                c.hasOwnProperty(h) && (a4[h] = c[h]);
            };
            return a3(q2, u);
          };
          return function(q2, u) {
            function n() {
              this.constructor = q2;
            }
            a3(q2, u);
            q2.prototype = null === u ? Object.create(u) : (n.prototype = u.prototype, new n());
          };
        }(), B = A.extend, C = A.merge;
        A = function(q2) {
          function x() {
            var a3 = null !== q2 && q2.apply(this, arguments) || this;
            a3.data = void 0;
            a3.options = void 0;
            a3.points = void 0;
            return a3;
          }
          v(x, q2);
          x.defaultOptions = C(a2.defaultOptions, {});
          return x;
        }(a2);
        B(A.prototype, { inverted: true });
        q.registerSeriesType("bar", A);
        "";
        return A;
      });
      J(a, "Series/Scatter/ScatterSeriesDefaults.js", [], function() {
        "";
        return { lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: true }, tooltip: { headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 10px"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" } };
      });
      J(a, "Series/Scatter/ScatterSeries.js", [
        a["Series/Scatter/ScatterSeriesDefaults.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Core/Utilities.js"]
      ], function(a2, q, A) {
        var v = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(c, h) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c2) {
              a4.__proto__ = c2;
            } || function(a4, c2) {
              for (var h2 in c2)
                c2.hasOwnProperty(h2) && (a4[h2] = c2[h2]);
            };
            return a3(c, h);
          };
          return function(c, h) {
            function m() {
              this.constructor = c;
            }
            a3(c, h);
            c.prototype = null === h ? Object.create(h) : (m.prototype = h.prototype, new m());
          };
        }(), B = q.seriesTypes, C = B.column, F = B.line;
        B = A.addEvent;
        var x = A.extend, u = A.merge;
        A = function(n) {
          function c() {
            var a3 = null !== n && n.apply(this, arguments) || this;
            a3.data = void 0;
            a3.options = void 0;
            a3.points = void 0;
            return a3;
          }
          v(c, n);
          c.prototype.applyJitter = function() {
            var a3 = this, c2 = this.options.jitter, l = this.points.length;
            c2 && this.points.forEach(function(h, f) {
              ["x", "y"].forEach(function(m, p) {
                var n2 = "plot" + m.toUpperCase();
                if (c2[m] && !h.isNull) {
                  var u2 = a3[m + "Axis"];
                  var q2 = c2[m] * u2.transA;
                  if (u2 && !u2.isLog) {
                    var t = Math.max(0, h[n2] - q2);
                    u2 = Math.min(u2.len, h[n2] + q2);
                    p = 1e4 * Math.sin(f + p * l);
                    h[n2] = t + (u2 - t) * (p - Math.floor(p));
                    "x" === m && (h.clientX = h.plotX);
                  }
                }
              });
            });
          };
          c.prototype.drawGraph = function() {
            this.options.lineWidth ? n.prototype.drawGraph.call(this) : this.graph && (this.graph = this.graph.destroy());
          };
          c.defaultOptions = u(F.defaultOptions, a2);
          return c;
        }(F);
        x(A.prototype, { drawTracker: C.prototype.drawTracker, sorted: false, requireSorting: false, noSharedTooltip: true, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: false });
        B(A, "afterTranslate", function() {
          this.applyJitter();
        });
        q.registerSeriesType("scatter", A);
        return A;
      });
      J(a, "Series/CenteredUtilities.js", [
        a["Core/Globals.js"],
        a["Core/Series/Series.js"],
        a["Core/Utilities.js"]
      ], function(a2, q, A) {
        var v = a2.deg2rad, B = A.fireEvent, C = A.isNumber, F = A.pick, x = A.relativeLength, u;
        (function(a3) {
          a3.getCenter = function() {
            var a4 = this.options, h = this.chart, m = 2 * (a4.slicedOffset || 0), l = h.plotWidth - 2 * m, p = h.plotHeight - 2 * m, f = a4.center, n = Math.min(l, p), u2 = a4.thickness, v2 = a4.size, A2 = a4.innerSize || 0;
            "string" === typeof v2 && (v2 = parseFloat(v2));
            "string" === typeof A2 && (A2 = parseFloat(A2));
            a4 = [F(f[0], "50%"), F(f[1], "50%"), F(v2 && 0 > v2 ? void 0 : a4.size, "100%"), F(A2 && 0 > A2 ? void 0 : a4.innerSize || 0, "0%")];
            !h.angular || this instanceof q || (a4[3] = 0);
            for (f = 0; 4 > f; ++f)
              v2 = a4[f], h = 2 > f || 2 === f && /%$/.test(v2), a4[f] = x(v2, [l, p, n, a4[2]][f]) + (h ? m : 0);
            a4[3] > a4[2] && (a4[3] = a4[2]);
            C(u2) && 2 * u2 < a4[2] && 0 < u2 && (a4[3] = a4[2] - 2 * u2);
            B(this, "afterGetCenter", { positions: a4 });
            return a4;
          };
          a3.getStartAndEndRadians = function(a4, h) {
            a4 = C(a4) ? a4 : 0;
            h = C(h) && h > a4 && 360 > h - a4 ? h : a4 + 360;
            return { start: v * (a4 + -90), end: v * (h + -90) };
          };
        })(u || (u = {}));
        "";
        return u;
      });
      J(
        a,
        "Series/Pie/PiePoint.js",
        [a["Core/Animation/AnimationUtilities.js"], a["Core/Series/Point.js"], a["Core/Utilities.js"]],
        function(a2, q, A) {
          var v = this && this.__extends || /* @__PURE__ */ function() {
            var a3 = function(c, m) {
              a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c2) {
                a4.__proto__ = c2;
              } || function(a4, c2) {
                for (var f in c2)
                  c2.hasOwnProperty(f) && (a4[f] = c2[f]);
              };
              return a3(c, m);
            };
            return function(c, m) {
              function h() {
                this.constructor = c;
              }
              a3(c, m);
              c.prototype = null === m ? Object.create(m) : (h.prototype = m.prototype, new h());
            };
          }(), B = a2.setAnimation, C = A.addEvent, F = A.defined;
          a2 = A.extend;
          var x = A.isNumber, u = A.pick, n = A.relativeLength;
          q = function(a3) {
            function c() {
              var c2 = null !== a3 && a3.apply(this, arguments) || this;
              c2.labelDistance = void 0;
              c2.options = void 0;
              c2.series = void 0;
              return c2;
            }
            v(c, a3);
            c.prototype.getConnectorPath = function() {
              var a4 = this.labelPosition, c2 = this.series.options.dataLabels, h = this.connectorShapes, f = c2.connectorShape;
              h[f] && (f = h[f]);
              return f.call(this, { x: a4.final.x, y: a4.final.y, alignment: a4.alignment }, a4.connectorPosition, c2);
            };
            c.prototype.getTranslate = function() {
              return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 };
            };
            c.prototype.haloPath = function(a4) {
              var c2 = this.shapeArgs;
              return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c2.x, c2.y, c2.r + a4, c2.r + a4, { innerR: c2.r - 1, start: c2.start, end: c2.end });
            };
            c.prototype.init = function() {
              var c2 = this;
              a3.prototype.init.apply(this, arguments);
              this.name = u(this.name, "Slice");
              var h = function(a4) {
                c2.slice("select" === a4.type);
              };
              C(this, "select", h);
              C(this, "unselect", h);
              return this;
            };
            c.prototype.isValid = function() {
              return x(this.y) && 0 <= this.y;
            };
            c.prototype.setVisible = function(a4, c2) {
              var h = this, f = this.series, l = f.chart, m = f.options.ignoreHiddenPoint;
              c2 = u(c2, m);
              a4 !== this.visible && (this.visible = this.options.visible = a4 = "undefined" === typeof a4 ? !this.visible : a4, f.options.data[f.data.indexOf(this)] = this.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function(c3) {
                if (h[c3])
                  h[c3][a4 ? "show" : "hide"](a4);
              }), this.legendItem && l.legend.colorizeItem(this, a4), a4 || "hover" !== this.state || this.setState(""), m && (f.isDirty = true), c2 && l.redraw());
            };
            c.prototype.slice = function(a4, c2, h) {
              var f = this.series;
              B(h, f.chart);
              u(c2, true);
              this.sliced = this.options.sliced = F(a4) ? a4 : !this.sliced;
              f.options.data[f.data.indexOf(this)] = this.options;
              this.graphic && this.graphic.animate(this.getTranslate());
              this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
            };
            return c;
          }(q);
          a2(q.prototype, { connectorShapes: { fixedOffset: function(a3, h, m) {
            var c = h.breakAt;
            h = h.touchingSliceAt;
            return [["M", a3.x, a3.y], m.softConnector ? ["C", a3.x + ("left" === a3.alignment ? -5 : 5), a3.y, 2 * c.x - h.x, 2 * c.y - h.y, c.x, c.y] : ["L", c.x, c.y], ["L", h.x, h.y]];
          }, straight: function(a3, h) {
            h = h.touchingSliceAt;
            return [["M", a3.x, a3.y], ["L", h.x, h.y]];
          }, crookedLine: function(a3, h, m) {
            h = h.touchingSliceAt;
            var c = this.series, p = c.center[0], f = c.chart.plotWidth, u2 = c.chart.plotLeft;
            c = a3.alignment;
            var q2 = this.shapeArgs.r;
            m = n(m.crookDistance, 1);
            f = "left" === c ? p + q2 + (f + u2 - p - q2) * (1 - m) : u2 + (p - q2) * m;
            m = ["L", f, a3.y];
            p = true;
            if ("left" === c ? f > a3.x || f < h.x : f < a3.x || f > h.x)
              p = false;
            a3 = [["M", a3.x, a3.y]];
            p && a3.push(m);
            a3.push(["L", h.x, h.y]);
            return a3;
          } } });
          return q;
        }
      );
      J(a, "Series/Pie/PieSeriesDefaults.js", [], function() {
        "";
        return { center: [null, null], clip: false, colorByPoint: true, dataLabels: {
          allowOverlap: true,
          connectorPadding: 5,
          connectorShape: "fixedOffset",
          crookDistance: "70%",
          distance: 30,
          enabled: true,
          formatter: function() {
            return this.point.isNull ? void 0 : this.point.name;
          },
          softConnector: true,
          x: 0
        }, fillColor: void 0, ignoreHiddenPoint: true, inactiveOtherPoints: true, legendType: "point", marker: null, size: null, showInLegend: false, slicedOffset: 10, stickyTracking: false, tooltip: { followPointer: true }, borderColor: "#ffffff", borderWidth: 1, lineWidth: void 0, states: { hover: { brightness: 0.1 } } };
      });
      J(a, "Series/Pie/PieSeries.js", [
        a["Series/CenteredUtilities.js"],
        a["Series/Column/ColumnSeries.js"],
        a["Core/Globals.js"],
        a["Core/Legend/LegendSymbol.js"],
        a["Series/Pie/PiePoint.js"],
        a["Series/Pie/PieSeriesDefaults.js"],
        a["Core/Series/Series.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Core/Renderer/SVG/Symbols.js"],
        a["Core/Utilities.js"]
      ], function(a2, q, A, E, B, C, F, x, u, n) {
        var c = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(c2, f2) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c3) {
              a4.__proto__ = c3;
            } || function(a4, c3) {
              for (var f3 in c3)
                c3.hasOwnProperty(f3) && (a4[f3] = c3[f3]);
            };
            return a3(c2, f2);
          };
          return function(c2, f2) {
            function h2() {
              this.constructor = c2;
            }
            a3(c2, f2);
            c2.prototype = null === f2 ? Object.create(f2) : (h2.prototype = f2.prototype, new h2());
          };
        }(), h = a2.getStartAndEndRadians;
        A = A.noop;
        var m = n.clamp, l = n.extend, p = n.fireEvent, f = n.merge, v = n.pick, G = n.relativeLength;
        n = function(a3) {
          function l2() {
            var c2 = null !== a3 && a3.apply(this, arguments) || this;
            c2.center = void 0;
            c2.data = void 0;
            c2.maxLabelDistance = void 0;
            c2.options = void 0;
            c2.points = void 0;
            return c2;
          }
          c(l2, a3);
          l2.prototype.animate = function(a4) {
            var c2 = this, f2 = c2.points, k = c2.startAngleRad;
            a4 || f2.forEach(function(a5) {
              var e = a5.graphic, b = a5.shapeArgs;
              e && b && (e.attr({ r: v(a5.startR, c2.center && c2.center[3] / 2), start: k, end: k }), e.animate({ r: b.r, start: b.start, end: b.end }, c2.options.animation));
            });
          };
          l2.prototype.drawEmpty = function() {
            var a4 = this.startAngleRad, c2 = this.endAngleRad, f2 = this.options;
            if (0 === this.total && this.center) {
              var k = this.center[0];
              var g = this.center[1];
              this.graph || (this.graph = this.chart.renderer.arc(k, g, this.center[1] / 2, 0, a4, c2).addClass("highcharts-empty-series").add(this.group));
              this.graph.attr({ d: u.arc(k, g, this.center[2] / 2, 0, { start: a4, end: c2, innerR: this.center[3] / 2 }) });
              this.chart.styledMode || this.graph.attr({ "stroke-width": f2.borderWidth, fill: f2.fillColor || "none", stroke: f2.color || "#cccccc" });
            } else
              this.graph && (this.graph = this.graph.destroy());
          };
          l2.prototype.drawPoints = function() {
            var a4 = this.chart.renderer;
            this.points.forEach(function(c2) {
              c2.graphic && c2.hasNewShapeType() && (c2.graphic = c2.graphic.destroy());
              c2.graphic || (c2.graphic = a4[c2.shapeType](c2.shapeArgs).add(c2.series.group), c2.delayedRendering = true);
            });
          };
          l2.prototype.generatePoints = function() {
            a3.prototype.generatePoints.call(this);
            this.updateTotals();
          };
          l2.prototype.getX = function(a4, c2, f2) {
            var k = this.center, g = this.radii ? this.radii[f2.index] || 0 : k[2] / 2;
            a4 = Math.asin(m((a4 - k[1]) / (g + f2.labelDistance), -1, 1));
            return k[0] + (c2 ? -1 : 1) * Math.cos(a4) * (g + f2.labelDistance) + (0 < f2.labelDistance ? (c2 ? -1 : 1) * this.options.dataLabels.padding : 0);
          };
          l2.prototype.hasData = function() {
            return !!this.processedXData.length;
          };
          l2.prototype.redrawPoints = function() {
            var a4 = this, c2 = a4.chart, h2 = c2.renderer, k = a4.options.shadow, g, e, b, d;
            this.drawEmpty();
            !k || a4.shadowGroup || c2.styledMode || (a4.shadowGroup = h2.g("shadow").attr({ zIndex: -1 }).add(a4.group));
            a4.points.forEach(function(r) {
              var l3 = {};
              e = r.graphic;
              if (!r.isNull && e) {
                var m2 = void 0;
                d = r.shapeArgs;
                g = r.getTranslate();
                c2.styledMode || (m2 = r.shadowGroup, k && !m2 && (m2 = r.shadowGroup = h2.g("shadow").add(a4.shadowGroup)), m2 && m2.attr(g), b = a4.pointAttribs(r, r.selected && "select"));
                r.delayedRendering ? (e.setRadialReference(a4.center).attr(d).attr(g), c2.styledMode || e.attr(b).attr({ "stroke-linejoin": "round" }).shadow(k, m2), r.delayedRendering = false) : (e.setRadialReference(a4.center), c2.styledMode || f(true, l3, b), f(true, l3, d, g), e.animate(l3));
                e.attr({ visibility: r.visible ? "inherit" : "hidden" });
                e.addClass(r.getClassName(), true);
              } else
                e && (r.graphic = e.destroy());
            });
          };
          l2.prototype.sortByAngle = function(a4, c2) {
            a4.sort(function(a5, f2) {
              return "undefined" !== typeof a5.angle && (f2.angle - a5.angle) * c2;
            });
          };
          l2.prototype.translate = function(a4) {
            p(this, "translate");
            this.generatePoints();
            var c2 = this.options, f2 = c2.slicedOffset, k = f2 + (c2.borderWidth || 0), g = h(c2.startAngle, c2.endAngle), e = this.startAngleRad = g.start;
            g = (this.endAngleRad = g.end) - e;
            var b = this.points, d = c2.dataLabels.distance;
            c2 = c2.ignoreHiddenPoint;
            var r = b.length, l3, m2 = 0;
            a4 || (this.center = a4 = this.getCenter());
            for (l3 = 0; l3 < r; l3++) {
              var n2 = b[l3];
              var u2 = e + m2 * g;
              !n2.isValid() || c2 && !n2.visible || (m2 += n2.percentage / 100);
              var q2 = e + m2 * g;
              var y = { x: a4[0], y: a4[1], r: a4[2] / 2, innerR: a4[3] / 2, start: Math.round(1e3 * u2) / 1e3, end: Math.round(1e3 * q2) / 1e3 };
              n2.shapeType = "arc";
              n2.shapeArgs = y;
              n2.labelDistance = v(n2.options.dataLabels && n2.options.dataLabels.distance, d);
              n2.labelDistance = G(n2.labelDistance, y.r);
              this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, n2.labelDistance);
              q2 = (q2 + u2) / 2;
              q2 > 1.5 * Math.PI ? q2 -= 2 * Math.PI : q2 < -Math.PI / 2 && (q2 += 2 * Math.PI);
              n2.slicedTranslation = { translateX: Math.round(Math.cos(q2) * f2), translateY: Math.round(Math.sin(q2) * f2) };
              y = Math.cos(q2) * a4[2] / 2;
              var D = Math.sin(q2) * a4[2] / 2;
              n2.tooltipPos = [a4[0] + 0.7 * y, a4[1] + 0.7 * D];
              n2.half = q2 < -Math.PI / 2 || q2 > Math.PI / 2 ? 1 : 0;
              n2.angle = q2;
              u2 = Math.min(k, n2.labelDistance / 5);
              n2.labelPosition = { natural: { x: a4[0] + y + Math.cos(q2) * n2.labelDistance, y: a4[1] + D + Math.sin(q2) * n2.labelDistance }, "final": {}, alignment: 0 > n2.labelDistance ? "center" : n2.half ? "right" : "left", connectorPosition: { breakAt: { x: a4[0] + y + Math.cos(q2) * u2, y: a4[1] + D + Math.sin(q2) * u2 }, touchingSliceAt: { x: a4[0] + y, y: a4[1] + D } } };
            }
            p(this, "afterTranslate");
          };
          l2.prototype.updateTotals = function() {
            var a4 = this.points, c2 = a4.length, f2 = this.options.ignoreHiddenPoint, k, g = 0;
            for (k = 0; k < c2; k++) {
              var e = a4[k];
              !e.isValid() || f2 && !e.visible || (g += e.y);
            }
            this.total = g;
            for (k = 0; k < c2; k++)
              e = a4[k], e.percentage = 0 < g && (e.visible || !f2) ? e.y / g * 100 : 0, e.total = g;
          };
          l2.defaultOptions = f(F.defaultOptions, C);
          return l2;
        }(F);
        l(n.prototype, {
          axisTypes: [],
          directTouch: true,
          drawGraph: void 0,
          drawLegendSymbol: E.drawRectangle,
          drawTracker: q.prototype.drawTracker,
          getCenter: a2.getCenter,
          getSymbol: A,
          isCartesian: false,
          noSharedTooltip: true,
          pointAttribs: q.prototype.pointAttribs,
          pointClass: B,
          requireSorting: false,
          searchPoint: A,
          trackerGroups: ["group", "dataLabelsGroup"]
        });
        x.registerSeriesType("pie", n);
        return n;
      });
      J(
        a,
        "Series/Pie/PieDataLabel.js",
        [a["Core/Series/DataLabel.js"], a["Core/Globals.js"], a["Core/Renderer/RendererUtilities.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]],
        function(a2, q, A, E, B) {
          var v = q.noop, F = A.distribute, x = E.series, u = B.arrayMax, n = B.clamp, c = B.defined, h = B.merge, m = B.pick, l = B.relativeLength, p;
          (function(f) {
            function p2() {
              var a3 = this, f2 = a3.data, k = a3.chart, g = a3.options.dataLabels || {}, e = g.connectorPadding, b = k.plotWidth, d = k.plotHeight, r = k.plotLeft, l2 = Math.round(k.chartWidth / 3), p3 = a3.center, n2 = p3[2] / 2, q3 = p3[1], y2 = [[], []], v2 = [0, 0, 0, 0], D = a3.dataLabelPositioners, A3, B3, G, C, E2, H, K, J2, V, W, Z, T;
              a3.visible && (g.enabled || a3._hasPointLabels) && (f2.forEach(function(a4) {
                a4.dataLabel && a4.visible && a4.dataLabel.shortened && (a4.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), a4.dataLabel.shortened = false);
              }), x.prototype.drawDataLabels.apply(a3), f2.forEach(function(a4) {
                a4.dataLabel && (a4.visible ? (y2[a4.half].push(a4), a4.dataLabel._pos = null, !c(g.style.width) && !c(a4.options.dataLabels && a4.options.dataLabels.style && a4.options.dataLabels.style.width) && a4.dataLabel.getBBox().width > l2 && (a4.dataLabel.css({ width: Math.round(0.7 * l2) + "px" }), a4.dataLabel.shortened = true)) : (a4.dataLabel = a4.dataLabel.destroy(), a4.dataLabels && 1 === a4.dataLabels.length && delete a4.dataLabels));
              }), y2.forEach(function(f3, h2) {
                var l3 = f3.length, t = [], z;
                if (l3) {
                  a3.sortByAngle(f3, h2 - 0.5);
                  if (0 < a3.maxLabelDistance) {
                    var u2 = Math.max(0, q3 - n2 - a3.maxLabelDistance);
                    var w = Math.min(q3 + n2 + a3.maxLabelDistance, k.plotHeight);
                    f3.forEach(function(a4) {
                      0 < a4.labelDistance && a4.dataLabel && (a4.top = Math.max(0, q3 - n2 - a4.labelDistance), a4.bottom = Math.min(q3 + n2 + a4.labelDistance, k.plotHeight), z = a4.dataLabel.getBBox().height || 21, a4.distributeBox = { target: a4.labelPosition.natural.y - a4.top + z / 2, size: z, rank: a4.y }, t.push(a4.distributeBox));
                    });
                    u2 = w + z - u2;
                    F(t, u2, u2 / 5);
                  }
                  for (Z = 0; Z < l3; Z++) {
                    A3 = f3[Z];
                    H = A3.labelPosition;
                    C = A3.dataLabel;
                    W = false === A3.visible ? "hidden" : "inherit";
                    V = u2 = H.natural.y;
                    t && c(A3.distributeBox) && ("undefined" === typeof A3.distributeBox.pos ? W = "hidden" : (K = A3.distributeBox.size, V = D.radialDistributionY(A3)));
                    delete A3.positionIndex;
                    if (g.justify)
                      J2 = D.justify(A3, n2, p3);
                    else
                      switch (g.alignTo) {
                        case "connectors":
                          J2 = D.alignToConnectors(f3, h2, b, r);
                          break;
                        case "plotEdges":
                          J2 = D.alignToPlotEdges(C, h2, b, r);
                          break;
                        default:
                          J2 = D.radialDistributionX(a3, A3, V, u2);
                      }
                    C._attr = {
                      visibility: W,
                      align: H.alignment
                    };
                    T = A3.options.dataLabels || {};
                    C._pos = { x: J2 + m(T.x, g.x) + ({ left: e, right: -e }[H.alignment] || 0), y: V + m(T.y, g.y) - 10 };
                    H.final.x = J2;
                    H.final.y = V;
                    m(g.crop, true) && (E2 = C.getBBox().width, u2 = null, J2 - E2 < e && 1 === h2 ? (u2 = Math.round(E2 - J2 + e), v2[3] = Math.max(u2, v2[3])) : J2 + E2 > b - e && 0 === h2 && (u2 = Math.round(J2 + E2 - b + e), v2[1] = Math.max(u2, v2[1])), 0 > V - K / 2 ? v2[0] = Math.max(Math.round(-V + K / 2), v2[0]) : V + K / 2 > d && (v2[2] = Math.max(Math.round(V + K / 2 - d), v2[2])), C.sideOverflow = u2);
                  }
                }
              }), 0 === u(v2) || this.verifyDataLabelOverflow(v2)) && (this.placeDataLabels(), this.points.forEach(function(b2) {
                T = h(g, b2.options.dataLabels);
                if (B3 = m(T.connectorWidth, 1)) {
                  var c2;
                  G = b2.connector;
                  if ((C = b2.dataLabel) && C._pos && b2.visible && 0 < b2.labelDistance) {
                    W = C._attr.visibility;
                    if (c2 = !G)
                      b2.connector = G = k.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + b2.colorIndex + (b2.className ? " " + b2.className : "")).add(a3.dataLabelsGroup), k.styledMode || G.attr({ "stroke-width": B3, stroke: T.connectorColor || b2.color || "#666666" });
                    G[c2 ? "attr" : "animate"]({ d: b2.getConnectorPath() });
                    G.attr("visibility", W);
                  } else
                    G && (b2.connector = G.destroy());
                }
              }));
            }
            function q2() {
              this.points.forEach(function(a3) {
                var c2 = a3.dataLabel, f2;
                c2 && a3.visible && ((f2 = c2._pos) ? (c2.sideOverflow && (c2._attr.width = Math.max(c2.getBBox().width - c2.sideOverflow, 0), c2.css({ width: c2._attr.width + "px", textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis" }), c2.shortened = true), c2.attr(c2._attr), c2[c2.moved ? "animate" : "attr"](f2), c2.moved = true) : c2 && c2.attr({ y: -9999 }));
                delete a3.distributeBox;
              }, this);
            }
            function A2(a3) {
              var c2 = this.center, f2 = this.options, g = f2.center, e = f2.minSize || 80, b = null !== f2.size;
              if (!b) {
                if (null !== g[0])
                  var d = Math.max(c2[2] - Math.max(a3[1], a3[3]), e);
                else
                  d = Math.max(c2[2] - a3[1] - a3[3], e), c2[0] += (a3[3] - a3[1]) / 2;
                null !== g[1] ? d = n(d, e, c2[2] - Math.max(a3[0], a3[2])) : (d = n(d, e, c2[2] - a3[0] - a3[2]), c2[1] += (a3[0] - a3[2]) / 2);
                d < c2[2] ? (c2[2] = d, c2[3] = Math.min(f2.thickness ? Math.max(0, d - 2 * f2.thickness) : Math.max(0, l(f2.innerSize || 0, d)), d), this.translate(c2), this.drawDataLabels && this.drawDataLabels()) : b = true;
              }
              return b;
            }
            var B2 = [], y = { radialDistributionY: function(a3) {
              return a3.top + a3.distributeBox.pos;
            }, radialDistributionX: function(a3, c2, f2, g) {
              return a3.getX(f2 < c2.top + 2 || f2 > c2.bottom - 2 ? g : f2, c2.half, c2);
            }, justify: function(a3, c2, f2) {
              return f2[0] + (a3.half ? -1 : 1) * (c2 + a3.labelDistance);
            }, alignToPlotEdges: function(a3, c2, f2, g) {
              a3 = a3.getBBox().width;
              return c2 ? a3 + g : f2 - a3 - g;
            }, alignToConnectors: function(a3, c2, f2, g) {
              var e = 0, b;
              a3.forEach(function(a4) {
                b = a4.dataLabel.getBBox().width;
                b > e && (e = b);
              });
              return c2 ? e + g : f2 - e - g;
            } };
            f.compose = function(c2) {
              a2.compose(x);
              -1 === B2.indexOf(c2) && (B2.push(c2), c2 = c2.prototype, c2.dataLabelPositioners = y, c2.alignDataLabel = v, c2.drawDataLabels = p2, c2.placeDataLabels = q2, c2.verifyDataLabelOverflow = A2);
            };
          })(p || (p = {}));
          return p;
        }
      );
      J(a, "Extensions/OverlappingDataLabels.js", [a["Core/Chart/Chart.js"], a["Core/Utilities.js"]], function(a2, q) {
        function v(a3, c) {
          var h = false;
          if (a3) {
            var m = a3.newOpacity;
            a3.oldOpacity !== m && (a3.alignAttr && a3.placed ? (a3[m ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), h = true, a3.alignAttr.opacity = m, a3[a3.isOld ? "animate" : "attr"](a3.alignAttr, null, function() {
              c.styledMode || a3.css({ pointerEvents: m ? "auto" : "none" });
            }), B(c, "afterHideOverlappingLabel")) : a3.attr({ opacity: m }));
            a3.isOld = true;
          }
          return h;
        }
        var E = q.addEvent, B = q.fireEvent, C = q.isArray, F = q.isNumber, x = q.objectEach, u = q.pick;
        E(a2, "render", function() {
          var a3 = this, c = [];
          (this.labelCollectors || []).forEach(function(a4) {
            c = c.concat(a4());
          });
          (this.yAxis || []).forEach(function(a4) {
            a4.stacking && a4.options.stackLabels && !a4.options.stackLabels.allowOverlap && x(a4.stacking.stacks, function(a5) {
              x(a5, function(a6) {
                a6.label && c.push(a6.label);
              });
            });
          });
          (this.series || []).forEach(function(h) {
            var m = h.options.dataLabels;
            h.visible && (false !== m.enabled || h._hasPointLabels) && (m = function(h2) {
              return h2.forEach(function(h3) {
                h3.visible && (C(h3.dataLabels) ? h3.dataLabels : h3.dataLabel ? [h3.dataLabel] : []).forEach(function(f) {
                  var l = f.options;
                  f.labelrank = u(l.labelrank, h3.labelrank, h3.shapeArgs && h3.shapeArgs.height);
                  l.allowOverlap ? (f.oldOpacity = f.opacity, f.newOpacity = 1, v(f, a3)) : c.push(f);
                });
              });
            }, m(h.nodes || []), m(h.points));
          });
          this.hideOverlappingLabels(c);
        });
        a2.prototype.hideOverlappingLabels = function(a3) {
          var c = this, h = a3.length, m = c.renderer, l, p, f, n = false;
          var u2 = function(a4) {
            var c2, f2 = a4.box ? 0 : a4.padding || 0, k = c2 = 0, g;
            if (a4 && (!a4.alignAttr || a4.placed)) {
              var e = a4.alignAttr || { x: a4.attr("x"), y: a4.attr("y") };
              var b = a4.parentGroup;
              a4.width || (c2 = a4.getBBox(), a4.width = c2.width, a4.height = c2.height, c2 = m.fontMetrics(null, a4.element).h);
              var d = a4.width - 2 * f2;
              (g = { left: "0", center: "0.5", right: "1" }[a4.alignValue]) ? k = +g * d : F(a4.x) && Math.round(a4.x) !== a4.translateX && (k = a4.x - a4.translateX);
              return { x: e.x + (b.translateX || 0) + f2 - (k || 0), y: e.y + (b.translateY || 0) + f2 - c2, width: a4.width - 2 * f2, height: a4.height - 2 * f2 };
            }
          };
          for (p = 0; p < h; p++)
            if (l = a3[p])
              l.oldOpacity = l.opacity, l.newOpacity = 1, l.absoluteBox = u2(l);
          a3.sort(function(a4, c2) {
            return (c2.labelrank || 0) - (a4.labelrank || 0);
          });
          for (p = 0; p < h; p++) {
            var q2 = (u2 = a3[p]) && u2.absoluteBox;
            for (l = p + 1; l < h; ++l) {
              var x2 = (f = a3[l]) && f.absoluteBox;
              !q2 || !x2 || u2 === f || 0 === u2.newOpacity || 0 === f.newOpacity || "hidden" === u2.visibility || "hidden" === f.visibility || x2.x >= q2.x + q2.width || x2.x + x2.width <= q2.x || x2.y >= q2.y + q2.height || x2.y + x2.height <= q2.y || ((u2.labelrank < f.labelrank ? u2 : f).newOpacity = 0);
            }
          }
          a3.forEach(function(a4) {
            v(a4, c) && (n = true);
          });
          n && B(c, "afterHideAllOverlappingLabels");
        };
      });
      J(a, "Core/Responsive.js", [a["Core/Utilities.js"]], function(a2) {
        var q = a2.extend, v = a2.find, E = a2.isArray, B = a2.isObject, C = a2.merge, F = a2.objectEach, x = a2.pick, u = a2.splat, n = a2.uniqueKey, c;
        (function(a3) {
          var c2 = [];
          a3.compose = function(a4) {
            -1 === c2.indexOf(a4) && (c2.push(a4), q(a4.prototype, h.prototype));
            return a4;
          };
          var h = function() {
            function a4() {
            }
            a4.prototype.currentOptions = function(a5) {
              function c3(a6, h3, l, m) {
                var k;
                F(a6, function(a7, e) {
                  if (!m && -1 < f.collectionsWithUpdate.indexOf(e) && h3[e])
                    for (a7 = u(a7), l[e] = [], k = 0; k < Math.max(a7.length, h3[e].length); k++)
                      h3[e][k] && (void 0 === a7[k] ? l[e][k] = h3[e][k] : (l[e][k] = {}, c3(a7[k], h3[e][k], l[e][k], m + 1)));
                  else
                    B(a7) ? (l[e] = E(a7) ? [] : {}, c3(a7, h3[e] || {}, l[e], m + 1)) : l[e] = "undefined" === typeof h3[e] ? null : h3[e];
                });
              }
              var f = this, h2 = {};
              c3(a5, this.options, h2, 0);
              return h2;
            };
            a4.prototype.matchResponsiveRule = function(a5, c3) {
              var f = a5.condition;
              (f.callback || function() {
                return this.chartWidth <= x(f.maxWidth, Number.MAX_VALUE) && this.chartHeight <= x(f.maxHeight, Number.MAX_VALUE) && this.chartWidth >= x(f.minWidth, 0) && this.chartHeight >= x(f.minHeight, 0);
              }).call(this) && c3.push(a5._id);
            };
            a4.prototype.setResponsive = function(a5, c3) {
              var f = this, h2 = this.options.responsive, l = this.currentResponsive, m = [];
              !c3 && h2 && h2.rules && h2.rules.forEach(function(a6) {
                "undefined" === typeof a6._id && (a6._id = n());
                f.matchResponsiveRule(a6, m);
              }, this);
              c3 = C.apply(void 0, m.map(function(a6) {
                return v((h2 || {}).rules || [], function(c4) {
                  return c4._id === a6;
                });
              }).map(function(a6) {
                return a6 && a6.chartOptions;
              }));
              c3.isResponsiveOptions = true;
              m = m.toString() || void 0;
              m !== (l && l.ruleIds) && (l && this.update(l.undoOptions, a5, true), m ? (l = this.currentOptions(c3), l.isResponsiveOptions = true, this.currentResponsive = { ruleIds: m, mergedOptions: c3, undoOptions: l }, this.update(c3, a5, true)) : this.currentResponsive = void 0);
            };
            return a4;
          }();
        })(c || (c = {}));
        "";
        "";
        return c;
      });
      J(a, "masters/highcharts.src.js", [
        a["Core/Globals.js"],
        a["Core/Utilities.js"],
        a["Core/Defaults.js"],
        a["Core/Animation/Fx.js"],
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/Renderer/HTML/AST.js"],
        a["Core/FormatUtilities.js"],
        a["Core/Renderer/RendererUtilities.js"],
        a["Core/Renderer/SVG/SVGElement.js"],
        a["Core/Renderer/SVG/SVGRenderer.js"],
        a["Core/Renderer/HTML/HTMLElement.js"],
        a["Core/Renderer/HTML/HTMLRenderer.js"],
        a["Core/Axis/Axis.js"],
        a["Core/Axis/DateTimeAxis.js"],
        a["Core/Axis/LogarithmicAxis.js"],
        a["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],
        a["Core/Axis/Tick.js"],
        a["Core/Tooltip.js"],
        a["Core/Series/Point.js"],
        a["Core/Pointer.js"],
        a["Core/MSPointer.js"],
        a["Core/Legend/Legend.js"],
        a["Core/Chart/Chart.js"],
        a["Core/Axis/Stacking/StackingAxis.js"],
        a["Core/Axis/Stacking/StackItem.js"],
        a["Core/Series/Series.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Series/Column/ColumnSeries.js"],
        a["Series/Column/ColumnDataLabel.js"],
        a["Series/Pie/PieSeries.js"],
        a["Series/Pie/PieDataLabel.js"],
        a["Core/Series/DataLabel.js"],
        a["Core/Responsive.js"],
        a["Core/Color/Color.js"],
        a["Core/Time.js"]
      ], function(a2, q, A, E, B, C, F, x, u, n, c, h, m, l, p, f, D, G, H, K, y, t, w, k, g, e, b, d, r, z, I, N, P, O, U) {
        a2.animate = B.animate;
        a2.animObject = B.animObject;
        a2.getDeferredAnimation = B.getDeferredAnimation;
        a2.setAnimation = B.setAnimation;
        a2.stop = B.stop;
        a2.timers = E.timers;
        a2.AST = C;
        a2.Axis = m;
        a2.Chart = w;
        a2.chart = w.chart;
        a2.Fx = E;
        a2.Legend = t;
        a2.PlotLineOrBand = f;
        a2.Point = H;
        a2.Pointer = y.isRequired() ? y : K;
        a2.Series = e;
        a2.StackItem = g;
        a2.SVGElement = u;
        a2.SVGRenderer = n;
        a2.Tick = D;
        a2.Time = U;
        a2.Tooltip = G;
        a2.Color = O;
        a2.color = O.parse;
        h.compose(n);
        c.compose(u);
        a2.defaultOptions = A.defaultOptions;
        a2.getOptions = A.getOptions;
        a2.time = A.defaultTime;
        a2.setOptions = A.setOptions;
        a2.dateFormat = F.dateFormat;
        a2.format = F.format;
        a2.numberFormat = F.numberFormat;
        a2.addEvent = q.addEvent;
        a2.arrayMax = q.arrayMax;
        a2.arrayMin = q.arrayMin;
        a2.attr = q.attr;
        a2.clearTimeout = q.clearTimeout;
        a2.correctFloat = q.correctFloat;
        a2.createElement = q.createElement;
        a2.css = q.css;
        a2.defined = q.defined;
        a2.destroyObjectProperties = q.destroyObjectProperties;
        a2.discardElement = q.discardElement;
        a2.distribute = x.distribute;
        a2.erase = q.erase;
        a2.error = q.error;
        a2.extend = q.extend;
        a2.extendClass = q.extendClass;
        a2.find = q.find;
        a2.fireEvent = q.fireEvent;
        a2.getMagnitude = q.getMagnitude;
        a2.getStyle = q.getStyle;
        a2.inArray = q.inArray;
        a2.isArray = q.isArray;
        a2.isClass = q.isClass;
        a2.isDOMElement = q.isDOMElement;
        a2.isFunction = q.isFunction;
        a2.isNumber = q.isNumber;
        a2.isObject = q.isObject;
        a2.isString = q.isString;
        a2.keys = q.keys;
        a2.merge = q.merge;
        a2.normalizeTickInterval = q.normalizeTickInterval;
        a2.objectEach = q.objectEach;
        a2.offset = q.offset;
        a2.pad = q.pad;
        a2.pick = q.pick;
        a2.pInt = q.pInt;
        a2.relativeLength = q.relativeLength;
        a2.removeEvent = q.removeEvent;
        a2.seriesType = b.seriesType;
        a2.splat = q.splat;
        a2.stableSort = q.stableSort;
        a2.syncTimeout = q.syncTimeout;
        a2.timeUnits = q.timeUnits;
        a2.uniqueKey = q.uniqueKey;
        a2.useSerialIds = q.useSerialIds;
        a2.wrap = q.wrap;
        r.compose(d);
        N.compose(e);
        l.compose(m);
        p.compose(m);
        I.compose(z);
        f.compose(m);
        P.compose(w);
        k.compose(
          m,
          w,
          e
        );
        return a2;
      });
      J(a, "Core/Axis/BrokenAxis.js", [a["Core/Axis/Stacking/StackItem.js"], a["Core/Utilities.js"]], function(a2, q) {
        var v = q.addEvent, E = q.find, B = q.fireEvent, C = q.isArray, F = q.isNumber, x = q.pick, u;
        (function(n) {
          function c() {
            "undefined" !== typeof this.brokenAxis && this.brokenAxis.setBreaks(this.options.breaks, false);
          }
          function h() {
            this.brokenAxis && this.brokenAxis.hasBreaks && (this.options.ordinal = false);
          }
          function m() {
            var a3 = this.brokenAxis;
            if (a3 && a3.hasBreaks) {
              for (var c2 = this.tickPositions, f2 = this.tickPositions.info, k = [], g = 0; g < c2.length; g++)
                a3.isInAnyBreak(c2[g]) || k.push(c2[g]);
              this.tickPositions = k;
              this.tickPositions.info = f2;
            }
          }
          function l() {
            this.brokenAxis || (this.brokenAxis = new K(this));
          }
          function p() {
            var a3 = this.options.connectNulls, c2 = this.points, f2 = this.xAxis, k = this.yAxis;
            if (this.isDirty)
              for (var g = c2.length; g--; ) {
                var e = c2[g], b = !(null === e.y && false === a3) && (f2 && f2.brokenAxis && f2.brokenAxis.isInAnyBreak(e.x, true) || k && k.brokenAxis && k.brokenAxis.isInAnyBreak(e.y, true));
                e.visible = b ? false : false !== e.options.visible;
              }
          }
          function f() {
            this.drawBreaks(
              this.xAxis,
              ["x"]
            );
            this.drawBreaks(this.yAxis, x(this.pointArrayMap, ["y"]));
          }
          function u2(a3, c2) {
            var f2 = this, k = f2.points, g, e, b, d;
            if (a3 && a3.brokenAxis && a3.brokenAxis.hasBreaks) {
              var h2 = a3.brokenAxis;
              c2.forEach(function(c3) {
                g = h2 && h2.breakArray || [];
                e = a3.isXAxis ? a3.min : x(f2.options.threshold, a3.min);
                k.forEach(function(f3) {
                  d = x(f3["stack" + c3.toUpperCase()], f3[c3]);
                  g.forEach(function(c4) {
                    if (F(e) && F(d)) {
                      b = false;
                      if (e < c4.from && d > c4.to || e > c4.from && d < c4.from)
                        b = "pointBreak";
                      else if (e < c4.from && d > c4.from && d < c4.to || e > c4.from && d > c4.to && d < c4.from)
                        b = "pointInBreak";
                      b && B(a3, b, { point: f3, brk: c4 });
                    }
                  });
                });
              });
            }
          }
          function q2() {
            var c2 = this.currentDataGrouping, f2 = c2 && c2.gapSize;
            c2 = this.points.slice();
            var h2 = this.yAxis, k = this.options.gapSize, g = c2.length - 1, e;
            if (k && 0 < g)
              for ("value" !== this.options.gapUnit && (k *= this.basePointRange), f2 && f2 > k && f2 >= this.basePointRange && (k = f2), e = void 0; g--; )
                e && false !== e.visible || (e = c2[g + 1]), f2 = c2[g], false !== e.visible && false !== f2.visible && (e.x - f2.x > k && (e = (f2.x + e.x) / 2, c2.splice(g + 1, 0, { isNull: true, x: e }), h2.stacking && this.options.stacking && (e = h2.stacking.stacks[this.stackKey][e] = new a2(
                  h2,
                  h2.options.stackLabels,
                  false,
                  e,
                  this.stack
                ), e.total = 0)), e = f2);
            return this.getGraphPath(c2);
          }
          var A = [];
          n.compose = function(a3, n2) {
            -1 === A.indexOf(a3) && (A.push(a3), a3.keepProps.push("brokenAxis"), v(a3, "init", l), v(a3, "afterInit", c), v(a3, "afterSetTickPositions", m), v(a3, "afterSetOptions", h));
            if (-1 === A.indexOf(n2)) {
              A.push(n2);
              var t = n2.prototype;
              t.drawBreaks = u2;
              t.gappedPath = q2;
              v(n2, "afterGeneratePoints", p);
              v(n2, "afterRender", f);
            }
            return a3;
          };
          var K = function() {
            function a3(a4) {
              this.hasBreaks = false;
              this.axis = a4;
            }
            a3.isInBreak = function(a4, c2) {
              var f2 = a4.repeat || Infinity, g = a4.from, e = a4.to - a4.from;
              c2 = c2 >= g ? (c2 - g) % f2 : f2 - (g - c2) % f2;
              return a4.inclusive ? c2 <= e : c2 < e && 0 !== c2;
            };
            a3.lin2Val = function(c2) {
              var f2 = this.brokenAxis;
              f2 = f2 && f2.breakArray;
              if (!f2 || !F(c2))
                return c2;
              var k;
              for (k = 0; k < f2.length; k++) {
                var g = f2[k];
                if (g.from >= c2)
                  break;
                else
                  g.to < c2 ? c2 += g.len : a3.isInBreak(g, c2) && (c2 += g.len);
              }
              return c2;
            };
            a3.val2Lin = function(c2) {
              var f2 = this.brokenAxis;
              f2 = f2 && f2.breakArray;
              if (!f2 || !F(c2))
                return c2;
              var k = c2, g;
              for (g = 0; g < f2.length; g++) {
                var e = f2[g];
                if (e.to <= c2)
                  k -= e.len;
                else if (e.from >= c2)
                  break;
                else if (a3.isInBreak(e, c2)) {
                  k -= c2 - e.from;
                  break;
                }
              }
              return k;
            };
            a3.prototype.findBreakAt = function(a4, c2) {
              return E(c2, function(c3) {
                return c3.from < a4 && a4 < c3.to;
              });
            };
            a3.prototype.isInAnyBreak = function(c2, f2) {
              var k = this.axis, g = k.options.breaks || [], e = g.length, b;
              if (e && F(c2)) {
                for (; e--; )
                  if (a3.isInBreak(g[e], c2)) {
                    var d = true;
                    b || (b = x(g[e].showPoints, !k.isXAxis));
                  }
                var h2 = d && f2 ? d && !b : d;
              }
              return h2;
            };
            a3.prototype.setBreaks = function(c2, f2) {
              var k = this, g = k.axis, e = C(c2) && !!c2.length;
              g.isDirty = k.hasBreaks !== e;
              k.hasBreaks = e;
              g.options.breaks = g.userOptions.breaks = c2;
              g.forceRedraw = true;
              g.series.forEach(function(a4) {
                a4.isDirty = true;
              });
              e || g.val2lin !== a3.val2Lin || (delete g.val2lin, delete g.lin2val);
              e && (g.userOptions.ordinal = false, g.lin2val = a3.lin2Val, g.val2lin = a3.val2Lin, g.setExtremes = function(a4, c3, e2, f3, h2) {
                if (k.hasBreaks) {
                  for (var b = this.options.breaks || [], d; d = k.findBreakAt(a4, b); )
                    a4 = d.to;
                  for (; d = k.findBreakAt(c3, b); )
                    c3 = d.from;
                  c3 < a4 && (c3 = a4);
                }
                g.constructor.prototype.setExtremes.call(this, a4, c3, e2, f3, h2);
              }, g.setAxisTranslation = function() {
                g.constructor.prototype.setAxisTranslation.call(this);
                k.unitLength = void 0;
                if (k.hasBreaks) {
                  var b = g.options.breaks || [], c3 = [], e2 = [], f3 = x(g.pointRangePadding, 0), h2 = 0, l2, m2 = g.userMin || g.min, p2 = g.userMax || g.max, n2;
                  b.forEach(function(b2) {
                    l2 = b2.repeat || Infinity;
                    F(m2) && F(p2) && (a3.isInBreak(b2, m2) && (m2 += b2.to % l2 - m2 % l2), a3.isInBreak(b2, p2) && (p2 -= p2 % l2 - b2.from % l2));
                  });
                  b.forEach(function(a4) {
                    t = a4.from;
                    l2 = a4.repeat || Infinity;
                    if (F(m2) && F(p2)) {
                      for (; t - l2 > m2; )
                        t -= l2;
                      for (; t < m2; )
                        t += l2;
                      for (n2 = t; n2 < p2; n2 += l2)
                        c3.push({ value: n2, move: "in" }), c3.push({ value: n2 + a4.to - a4.from, move: "out", size: a4.breakSize });
                    }
                  });
                  c3.sort(function(a4, b2) {
                    return a4.value === b2.value ? ("in" === a4.move ? 0 : 1) - ("in" === b2.move ? 0 : 1) : a4.value - b2.value;
                  });
                  var u3 = 0;
                  var t = m2;
                  c3.forEach(function(a4) {
                    u3 += "in" === a4.move ? 1 : -1;
                    1 === u3 && "in" === a4.move && (t = a4.value);
                    0 === u3 && F(t) && (e2.push({ from: t, to: a4.value, len: a4.value - t - (a4.size || 0) }), h2 += a4.value - t - (a4.size || 0));
                  });
                  k.breakArray = e2;
                  F(m2) && F(p2) && F(g.min) && (k.unitLength = p2 - m2 - h2 + f3, B(g, "afterBreaks"), g.staticScale ? g.transA = g.staticScale : k.unitLength && (g.transA *= (p2 - g.min + f3) / k.unitLength), f3 && (g.minPixelPadding = g.transA * (g.minPointOffset || 0)), g.min = m2, g.max = p2);
                }
              });
              x(f2, true) && g.chart.redraw();
            };
            return a3;
          }();
          n.Additions = K;
        })(u || (u = {}));
        return u;
      });
      J(a, "masters/modules/broken-axis.src.js", [a["Core/Globals.js"], a["Core/Axis/BrokenAxis.js"]], function(a2, q) {
        q.compose(a2.Axis, a2.Series);
      });
      J(a, "Extensions/DataGrouping/ApproximationRegistry.js", [], function() {
        return {};
      });
      J(a, "Extensions/DataGrouping/ApproximationDefaults.js", [a["Extensions/DataGrouping/ApproximationRegistry.js"], a["Core/Utilities.js"]], function(a2, q) {
        function v(a3) {
          var c = a3.length;
          a3 = E(a3);
          u(a3) && c && (a3 = F(a3 / c));
          return a3;
        }
        function E(a3) {
          var c = a3.length;
          if (!c && a3.hasNulls)
            var h = null;
          else if (c)
            for (h = 0; c--; )
              h += a3[c];
          return h;
        }
        var B = q.arrayMax, C = q.arrayMin, F = q.correctFloat, x = q.extend, u = q.isNumber;
        q = { average: v, averages: function() {
          var a3 = [];
          [].forEach.call(arguments, function(c) {
            a3.push(v(c));
          });
          return "undefined" === typeof a3[0] ? void 0 : a3;
        }, close: function(a3) {
          return a3.length ? a3[a3.length - 1] : a3.hasNulls ? null : void 0;
        }, high: function(a3) {
          return a3.length ? B(a3) : a3.hasNulls ? null : void 0;
        }, hlc: function(n, c, h) {
          n = a2.high(n);
          c = a2.low(c);
          h = a2.close(h);
          if (u(n) || u(c) || u(h))
            return [n, c, h];
        }, low: function(a3) {
          return a3.length ? C(a3) : a3.hasNulls ? null : void 0;
        }, ohlc: function(n, c, h, m) {
          n = a2.open(n);
          c = a2.high(c);
          h = a2.low(h);
          m = a2.close(m);
          if (u(n) || u(c) || u(h) || u(m))
            return [n, c, h, m];
        }, open: function(a3) {
          return a3.length ? a3[0] : a3.hasNulls ? null : void 0;
        }, range: function(n, c) {
          n = a2.low(n);
          c = a2.high(c);
          if (u(n) || u(c))
            return [n, c];
          if (null === n && null === c)
            return null;
        }, sum: E };
        x(a2, q);
        return q;
      });
      J(a, "Extensions/DataGrouping/DataGroupingDefaults.js", [], function() {
        return { common: { groupPixelWidth: 2, dateTimeLabelFormats: { millisecond: [
          "%A, %b %e, %H:%M:%S.%L",
          "%A, %b %e, %H:%M:%S.%L",
          "-%H:%M:%S.%L"
        ], second: ["%A, %b %e, %H:%M:%S", "%A, %b %e, %H:%M:%S", "-%H:%M:%S"], minute: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], hour: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], day: ["%A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"], week: ["Week from %A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"], month: ["%B %Y", "%B", "-%B %Y"], year: ["%Y", "%Y", "-%Y"] } }, seriesSpecific: {
          line: {},
          spline: {},
          area: {},
          areaspline: {},
          arearange: {},
          column: { groupPixelWidth: 10 },
          columnrange: { groupPixelWidth: 10 },
          candlestick: { groupPixelWidth: 10 },
          ohlc: { groupPixelWidth: 5 },
          hlc: { groupPixelWidth: 5 },
          heikinashi: { groupPixelWidth: 10 }
        }, units: [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1]], ["week", [1]], ["month", [1, 3, 6]], ["year", null]] };
      });
      J(a, "Extensions/DataGrouping/DataGroupingAxisComposition.js", [a["Extensions/DataGrouping/DataGroupingDefaults.js"], a["Core/Utilities.js"]], function(a2, q) {
        function v(a3) {
          var c2 = this, h2 = c2.series;
          h2.forEach(function(a4) {
            a4.groupPixelWidth = void 0;
          });
          h2.forEach(function(f) {
            f.groupPixelWidth = c2.getGroupPixelWidth && c2.getGroupPixelWidth();
            f.groupPixelWidth && (f.hasProcessed = true);
            f.applyGrouping(!!a3.hasExtremesChanged);
          });
        }
        function E() {
          for (var c2 = this.series, h2 = c2.length, p = 0, f = false, u2, q2; h2--; )
            if (q2 = c2[h2].options.dataGrouping) {
              if (p = Math.max(p, n(q2.groupPixelWidth, a2.common.groupPixelWidth)), u2 = (c2[h2].processedXData || c2[h2].data).length, c2[h2].groupPixelWidth || u2 > this.chart.plotSizeX / p || u2 && q2.forced)
                f = true;
            }
          return f ? p : 0;
        }
        function B() {
          this.series.forEach(function(a3) {
            a3.hasProcessed = false;
          });
        }
        function C(a3, c2) {
          var l;
          c2 = n(c2, true);
          a3 || (a3 = { forced: false, units: null });
          if (this instanceof h)
            for (l = this.series.length; l--; )
              this.series[l].update({ dataGrouping: a3 }, false);
          else
            this.chart.options.series.forEach(function(c3) {
              c3.dataGrouping = "boolean" === typeof a3 ? a3 : u(a3, c3.dataGrouping);
            });
          this.ordinal && (this.ordinal.slope = void 0);
          c2 && this.chart.redraw();
        }
        var F = q.addEvent, x = q.extend, u = q.merge, n = q.pick, c = [], h;
        return { compose: function(a3) {
          h = a3;
          -1 === c.indexOf(a3) && (c.push(a3), F(a3, "afterSetScale", B), F(a3, "postProcessData", v), x(
            a3.prototype,
            { applyGrouping: v, getGroupPixelWidth: E, setDataGrouping: C }
          ));
        } };
      });
      J(a, "Extensions/DataGrouping/DataGroupingSeriesComposition.js", [a["Extensions/DataGrouping/ApproximationRegistry.js"], a["Extensions/DataGrouping/DataGroupingDefaults.js"], a["Core/Axis/DateTimeAxis.js"], a["Core/Defaults.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, q, A, E, B, C) {
        function v(a3) {
          var c2 = this.chart, g = this.options.dataGrouping, e = false !== this.allowDG && g && K(g.enabled, c2.options.isStock), b = this.visible || !c2.options.chart.ignoreHiddenSeries, d = this.currentDataGrouping, h2 = false;
          e && !this.requireSorting && (this.requireSorting = h2 = true);
          a3 = false === !(this.isCartesian && !this.isDirty && !this.xAxis.isDirty && !this.yAxis.isDirty && !a3) || !e;
          h2 && (this.requireSorting = false);
          if (!a3) {
            this.destroyGroupedData();
            var l2 = g.groupAll ? this.xData : this.processedXData, n2 = g.groupAll ? this.yData : this.processedYData;
            e = c2.plotSizeX;
            a3 = this.xAxis;
            var u2 = a3.options.ordinal, t2 = this.groupPixelWidth;
            h2 = void 0;
            if (t2 && l2 && l2.length && e) {
              this.isDirty = h2 = true;
              this.points = null;
              var w = a3.getExtremes();
              var y2 = w.min;
              w = w.max;
              u2 = u2 && a3.ordinal && a3.ordinal.getGroupIntervalFactor(y2, w, this) || 1;
              e = a3.getTimeTicks(A.Additions.prototype.normalizeTimeTickInterval(t2 * (w - y2) / e * u2, g.units || q.units), Math.min(y2, l2[0]), Math.max(w, l2[l2.length - 1]), a3.options.startOfWeek, l2, this.closestPointRange);
              t2 = m.groupData.apply(this, [l2, n2, e, g.approximation]);
              l2 = t2.groupedXData;
              n2 = t2.groupedYData;
              u2 = 0;
              g && g.smoothed && l2.length && (g.firstAnchor = "firstPoint", g.anchor = "middle", g.lastAnchor = "lastPoint", f(32, false, c2, { "dataGrouping.smoothed": "use dataGrouping.anchor" }));
              c2 = l2;
              var v2 = this.options.dataGrouping;
              y2 = this.currentDataGrouping && this.currentDataGrouping.gapSize;
              if (v2 && this.xData && y2 && this.groupMap) {
                var D2 = c2.length - 1;
                var x2 = v2.anchor;
                var B2 = K(v2.firstAnchor, x2);
                v2 = K(v2.lastAnchor, x2);
                if (x2 && "start" !== x2) {
                  var C2 = y2 * { middle: 0.5, end: 1 }[x2];
                  for (x2 = c2.length - 1; x2-- && 0 < x2; )
                    c2[x2] += C2;
                }
                if (B2 && "start" !== B2 && this.xData[0] >= c2[0]) {
                  x2 = this.groupMap[0].start;
                  C2 = this.groupMap[0].length;
                  var E2 = void 0;
                  G(x2) && G(C2) && (E2 = x2 + (C2 - 1));
                  c2[0] = { middle: c2[0] + 0.5 * y2, end: c2[0] + y2, firstPoint: this.xData[0], lastPoint: E2 && this.xData[E2] }[B2];
                }
                v2 && "start" !== v2 && y2 && c2[D2] >= w - y2 && (w = this.groupMap[this.groupMap.length - 1].start, c2[D2] = { middle: c2[D2] + 0.5 * y2, end: c2[D2] + y2, firstPoint: w && this.xData[w], lastPoint: this.xData[this.xData.length - 1] }[v2]);
              }
              for (w = 1; w < e.length; w++)
                e.info.segmentStarts && -1 !== e.info.segmentStarts.indexOf(w) || (u2 = Math.max(e[w] - e[w - 1], u2));
              w = e.info;
              w.gapSize = u2;
              this.closestPointRange = e.info.totalRange;
              this.groupMap = t2.groupMap;
              if (b) {
                b = l2;
                if (p(b[0]) && G(a3.min) && G(a3.dataMin) && b[0] < a3.min) {
                  if (!p(a3.options.min) && a3.min <= a3.dataMin || a3.min === a3.dataMin)
                    a3.min = Math.min(b[0], a3.min);
                  a3.dataMin = Math.min(b[0], a3.dataMin);
                }
                if (p(b[b.length - 1]) && G(a3.max) && G(a3.dataMax) && b[b.length - 1] > a3.max) {
                  if (!p(a3.options.max) && G(a3.dataMax) && a3.max >= a3.dataMax || a3.max === a3.dataMax)
                    a3.max = Math.max(b[b.length - 1], a3.max);
                  a3.dataMax = Math.max(b[b.length - 1], a3.dataMax);
                }
              }
              g.groupAll && (this.allGroupedData = n2, g = this.cropData(l2, n2, a3.min, a3.max, 1), l2 = g.xData, n2 = g.yData, this.cropStart = g.start);
              this.processedXData = l2;
              this.processedYData = n2;
            } else
              this.groupMap = null;
            this.hasGroupedData = h2;
            this.currentDataGrouping = w;
            this.preventGraphAnimation = (d && d.totalRange) !== (w && w.totalRange);
          }
        }
        function x() {
          this.groupedData && (this.groupedData.forEach(function(a3, c2) {
            a3 && (this.groupedData[c2] = a3.destroy ? a3.destroy() : null);
          }, this), this.groupedData.length = 0);
        }
        function u() {
          y.apply(this);
          this.destroyGroupedData();
          this.groupedData = this.hasGroupedData ? this.points : null;
        }
        function n() {
          return this.is("arearange") ? "range" : this.is("ohlc") ? "ohlc" : this.is("hlc") ? "hlc" : this.is("column") ? "sum" : "average";
        }
        function c(c2, f2, g, e) {
          var b = this, d = b.data, h2 = b.options && b.options.data, k = [], l2 = [], m2 = [], n2 = c2.length, u2 = !!f2, t2 = [], q2 = b.pointArrayMap, w = q2 && q2.length, y2 = ["x"].concat(q2 || ["y"]), v2 = this.options.dataGrouping && this.options.dataGrouping.groupAll, x2 = 0, D2 = 0;
          e = "function" === typeof e ? e : e && a2[e] ? a2[e] : a2[b.getDGApproximation && b.getDGApproximation() || "average"];
          if (w)
            for (var A2 = q2.length; A2--; )
              t2.push([]);
          else
            t2.push([]);
          A2 = w || 1;
          for (var B2 = 0; B2 <= n2; B2++)
            if (!(c2[B2] < g[0])) {
              for (; "undefined" !== typeof g[x2 + 1] && c2[B2] >= g[x2 + 1] || B2 === n2; ) {
                var C2 = g[x2];
                b.dataGroupInfo = { start: v2 ? D2 : b.cropStart + D2, length: t2[0].length };
                var E2 = e.apply(b, t2);
                b.pointClass && !p(b.dataGroupInfo.options) && (b.dataGroupInfo.options = H(b.pointClass.prototype.optionsToObject.call({ series: b }, b.options.data[b.cropStart + D2])), y2.forEach(function(a3) {
                  delete b.dataGroupInfo.options[a3];
                }));
                "undefined" !== typeof E2 && (k.push(C2), l2.push(E2), m2.push(b.dataGroupInfo));
                D2 = B2;
                for (C2 = 0; C2 < A2; C2++)
                  t2[C2].length = 0, t2[C2].hasNulls = false;
                x2 += 1;
                if (B2 === n2)
                  break;
              }
              if (B2 === n2)
                break;
              if (q2) {
                C2 = b.options.dataGrouping && b.options.dataGrouping.groupAll ? B2 : b.cropStart + B2;
                E2 = d && d[C2] || b.pointClass.prototype.applyOptions.apply(
                  { series: b },
                  [h2[C2]]
                );
                var F = void 0;
                for (C2 = 0; C2 < w; C2++)
                  F = E2[q2[C2]], G(F) ? t2[C2].push(F) : null === F && (t2[C2].hasNulls = true);
              } else
                C2 = u2 ? f2[B2] : null, G(C2) ? t2[0].push(C2) : null === C2 && (t2[0].hasNulls = true);
            }
          return { groupedXData: k, groupedYData: l2, groupMap: m2 };
        }
        function h(a3) {
          a3 = a3.options;
          var c2 = this.type, g = this.chart.options.plotOptions, e = this.useCommonDataGrouping && q.common, b = q.seriesSpecific, d = E.defaultOptions.plotOptions[c2].dataGrouping;
          if (g && (b[c2] || e)) {
            var f2 = this.chart.rangeSelector;
            d || (d = H(q.common, b[c2]));
            a3.dataGrouping = H(
              e,
              d,
              g.series && g.series.dataGrouping,
              g[c2].dataGrouping,
              this.userOptions.dataGrouping,
              !a3.isInternal && f2 && G(f2.selected) && f2.buttonOptions[f2.selected].dataGrouping
            );
          }
        }
        var m = B.series.prototype, l = C.addEvent, p = C.defined, f = C.error, D = C.extend, G = C.isNumber, H = C.merge, K = C.pick, y = m.generatePoints, t = [];
        return { compose: function(a3) {
          var k = a3.prototype.pointClass;
          -1 === t.indexOf(k) && (t.push(k), l(k, "update", function() {
            if (this.dataGroup)
              return f(24, false, this.series.chart), false;
          }));
          -1 === t.indexOf(a3) && (t.push(a3), l(a3, "afterSetOptions", h), l(a3, "destroy", x), D(
            a3.prototype,
            { applyGrouping: v, destroyGroupedData: x, generatePoints: u, getDGApproximation: n, groupData: c }
          ));
        }, groupData: c };
      });
      J(a, "Extensions/DataGrouping/DataGrouping.js", [a["Extensions/DataGrouping/DataGroupingAxisComposition.js"], a["Extensions/DataGrouping/DataGroupingDefaults.js"], a["Extensions/DataGrouping/DataGroupingSeriesComposition.js"], a["Core/FormatUtilities.js"], a["Core/Utilities.js"]], function(a2, q, A, E, B) {
        function v(a3) {
          var c2 = this.chart, h = c2.time, p = a3.labelConfig, f = p.series, v2 = f.tooltipOptions, x2 = f.options.dataGrouping, A2 = f.xAxis, B2 = v2.xDateFormat, y = v2[a3.isFooter ? "footerFormat" : "headerFormat"];
          if (A2 && "datetime" === A2.options.type && x2 && n(p.key)) {
            var t = f.currentDataGrouping;
            x2 = x2.dateTimeLabelFormats || q.common.dateTimeLabelFormats;
            if (t)
              if (v2 = x2[t.unitName], 1 === t.count)
                B2 = v2[0];
              else {
                B2 = v2[1];
                var w = v2[2];
              }
            else
              !B2 && x2 && A2.dateTime && (B2 = A2.dateTime.getXDateFormat(p.x, v2.dateTimeLabelFormats));
            B2 = h.dateFormat(B2, p.key);
            w && (B2 += h.dateFormat(w, p.key + t.totalRange - 1));
            f.chart.styledMode && (y = this.styledModeFormat(y));
            a3.text = F(y, {
              point: u(p.point, { key: B2 }),
              series: f
            }, c2);
            a3.preventDefault();
          }
        }
        var F = E.format, x = B.addEvent, u = B.extend, n = B.isNumber, c = [];
        E = { compose: function(h, m, l) {
          a2.compose(h);
          A.compose(m);
          -1 === c.indexOf(l) && (c.push(l), x(l, "headerFormatter", v));
        }, groupData: A.groupData };
        "";
        "";
        return E;
      });
      J(a, "masters/modules/datagrouping.src.js", [a["Core/Globals.js"], a["Extensions/DataGrouping/ApproximationDefaults.js"], a["Extensions/DataGrouping/ApproximationRegistry.js"], a["Extensions/DataGrouping/DataGrouping.js"]], function(a2, q, A, E) {
        a2.dataGrouping = {
          approximationDefaults: q,
          approximations: A
        };
        E.compose(a2.Axis, a2.Series, a2.Tooltip);
      });
      J(a, "Series/DataModifyComposition.js", [a["Core/Axis/Axis.js"], a["Core/Series/Point.js"], a["Core/Series/Series.js"], a["Core/Utilities.js"]], function(a2, q, A, E) {
        var v = q.prototype.tooltipFormatter, C = E.addEvent, F = E.arrayMax, x = E.arrayMin, u = E.correctFloat, n = E.defined, c = E.isArray, h = E.isNumber, m = E.isString, l = E.pick, p;
        (function(a3) {
          function f(a4, b2, c2) {
            this.isXAxis || (this.series.forEach(function(c3) {
              "compare" === a4 && "boolean" !== typeof b2 ? c3.setCompare(b2, false) : "cumulative" !== a4 || m(b2) || c3.setCumulative(b2, false);
            }), l(c2, true) && this.chart.redraw());
          }
          function p2(a4) {
            var b2 = this, c2 = b2.series.chart.numberFormatter, d = function(d2) {
              a4 = a4.replace("{point." + d2 + "}", (0 < b2[d2] && "change" === d2 ? "+" : "") + c2(b2[d2], l(b2.series.tooltipOptions.changeDecimals, 2)));
            };
            n(b2.change) && d("change");
            n(b2.cumulativeSum) && d("cumulativeSum");
            return v.apply(this, [a4]);
          }
          function q2() {
            var a4 = this.options.compare;
            if ("percent" === a4 || "value" === a4 || this.options.cumulative) {
              var c2 = new b(this);
              "percent" === a4 || "value" === a4 ? c2.initCompare(a4) : c2.initCumulative();
            }
            this.dataModify = c2;
          }
          function A2(a4) {
            a4 = a4.dataExtremes;
            var d = a4.activeYData;
            if (this.dataModify && a4) {
              var e2 = void 0;
              this.options.compare ? e2 = [this.dataModify.modifyValue(a4.dataMin), this.dataModify.modifyValue(a4.dataMax)] : this.options.cumulative && c(d) && 2 <= d.length && (e2 = b.getCumulativeExtremes(d));
              e2 && (a4.dataMin = x(e2), a4.dataMax = F(e2));
            }
          }
          function y(a4, b2) {
            this.options.compare = this.userOptions.compare = a4;
            this.update({}, l(b2, true));
            !this.dataModify || "value" !== a4 && "percent" !== a4 ? this.points.forEach(function(a5) {
              delete a5.change;
            }) : this.dataModify.initCompare(a4);
          }
          function t() {
            if (this.xAxis && this.processedYData && this.dataModify) {
              var a4 = this.processedXData, b2 = this.processedYData, c2 = b2.length, e2 = true === this.options.compareStart ? 0 : 1, g2 = -1, f2;
              this.pointArrayMap && (g2 = this.pointArrayMap.indexOf(this.options.pointValKey || this.pointValKey || "y"));
              for (f2 = 0; f2 < c2 - e2; f2++) {
                var k2 = b2[f2] && -1 < g2 ? b2[f2][g2] : b2[f2];
                if (h(k2) && 0 !== k2 && a4[f2 + e2] >= (this.xAxis.min || 0)) {
                  this.dataModify.compareValue = k2;
                  break;
                }
              }
            }
          }
          function w(a4, b2) {
            this.setModifier("compare", a4, b2);
          }
          function k(a4, b2) {
            a4 = l(a4, false);
            this.options.cumulative = this.userOptions.cumulative = a4;
            this.update({}, l(b2, true));
            this.dataModify ? this.dataModify.initCumulative() : this.points.forEach(function(a5) {
              delete a5.cumulativeSum;
            });
          }
          function g(a4, b2) {
            this.setModifier("cumulative", a4, b2);
          }
          var e = [];
          a3.compose = function(a4, b2, c2) {
            if (-1 === e.indexOf(a4)) {
              e.push(a4);
              var d = a4.prototype;
              d.setCompare = y;
              d.setCumulative = k;
              C(a4, "afterInit", q2);
              C(a4, "afterGetExtremes", A2);
              C(a4, "afterProcessData", t);
            }
            -1 === e.indexOf(b2) && (e.push(b2), b2 = b2.prototype, b2.setCompare = w, b2.setModifier = f, b2.setCumulative = g);
            -1 === e.indexOf(c2) && (e.push(c2), c2.prototype.tooltipFormatter = p2);
            return a4;
          };
          var b = function() {
            function a4(a5) {
              this.series = a5;
            }
            a4.prototype.modifyValue = function() {
              return 0;
            };
            a4.getCumulativeExtremes = function(a5) {
              var b2 = Infinity, c2 = -Infinity;
              a5.reduce(function(a6, d) {
                d = a6 + d;
                b2 = Math.min(b2, d, a6);
                c2 = Math.max(c2, d, a6);
                return d;
              });
              return [b2, c2];
            };
            a4.prototype.initCompare = function(a5) {
              this.modifyValue = function(b2, c2) {
                null === b2 && (b2 = 0);
                var d = this.compareValue;
                return "undefined" !== typeof b2 && "undefined" !== typeof d ? (b2 = "value" === a5 ? b2 - d : b2 / d * 100 - (100 === this.series.options.compareBase ? 0 : 100), "undefined" !== typeof c2 && (c2 = this.series.points[c2]) && (c2.change = b2), b2) : 0;
              };
            };
            a4.prototype.initCumulative = function() {
              this.modifyValue = function(a5, b2) {
                null === a5 && (a5 = 0);
                if (void 0 !== a5 && void 0 !== b2) {
                  var c2 = 0 < b2 ? this.series.points[b2 - 1] : null;
                  c2 && c2.cumulativeSum && (a5 = u(c2.cumulativeSum + a5));
                  if (b2 = this.series.points[b2])
                    b2.cumulativeSum = a5;
                  return a5;
                }
                return 0;
              };
            };
            return a4;
          }();
          a3.Additions = b;
        })(p || (p = {}));
        "";
        return p;
      });
      J(a, "Core/Axis/NavigatorAxisComposition.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, q) {
        function v() {
          this.navigatorAxis || (this.navigatorAxis = new h(this));
        }
        function E(a3) {
          var c2 = this.chart.options, h2 = c2.navigator, f = this.navigatorAxis, m = c2.chart.zooming.pinchType, n2 = c2.rangeSelector;
          c2 = c2.chart.zooming.type;
          this.isXAxis && (h2 && h2.enabled || n2 && n2.enabled) && ("y" === c2 ? a3.zoomed = false : (!B && "xy" === c2 || B && "xy" === m) && this.options.range && (h2 = f.previousZoom, x(a3.newMin) ? f.previousZoom = [this.min, this.max] : h2 && (a3.newMin = h2[0], a3.newMax = h2[1], f.previousZoom = void 0)));
          "undefined" !== typeof a3.zoomed && a3.preventDefault();
        }
        var B = a2.isTouchDevice, C = q.addEvent, F = q.correctFloat, x = q.defined, u = q.isNumber, n = q.pick, c = [], h = function() {
          function a3(a4) {
            this.axis = a4;
          }
          a3.compose = function(a4) {
            -1 === c.indexOf(a4) && (c.push(a4), a4.keepProps.push("navigatorAxis"), C(a4, "init", v), C(a4, "zoom", E));
          };
          a3.prototype.destroy = function() {
            this.axis = void 0;
          };
          a3.prototype.toFixedRange = function(a4, c2, f, h2) {
            var l = this.axis, m = l.chart;
            a4 = n(f, l.translate(a4, true, !l.horiz));
            c2 = n(h2, l.translate(c2, true, !l.horiz));
            m = m && m.fixedRange;
            l = (l.pointRange || 0) / 2;
            var p = m && (c2 - a4) / m;
            x(f) || (a4 = F(a4 + l));
            x(h2) || (c2 = F(c2 - l));
            0.7 < p && 1.3 > p && (h2 ? a4 = c2 - m : c2 = a4 + m);
            u(a4) && u(c2) || (a4 = c2 = void 0);
            return { min: a4, max: c2 };
          };
          return a3;
        }();
        return h;
      });
      J(a, "Stock/Navigator/NavigatorDefaults.js", [a["Core/Color/Color.js"], a["Core/Series/SeriesRegistry.js"]], function(a2, q) {
        a2 = a2.parse;
        q = q.seriesTypes;
        q = { height: 40, margin: 25, maskInside: true, handles: { width: 7, height: 15, symbols: ["navigator-handle", "navigator-handle"], enabled: true, lineWidth: 1, backgroundColor: "#f2f2f2", borderColor: "#999999" }, maskFill: a2("#6685c2").setOpacity(0.3).get(), outlineColor: "#cccccc", outlineWidth: 1, series: {
          type: "undefined" === typeof q.areaspline ? "line" : "areaspline",
          fillOpacity: 0.05,
          lineWidth: 1,
          compare: null,
          dataGrouping: { approximation: "average", enabled: true, groupPixelWidth: 2, firstAnchor: "firstPoint", anchor: "middle", lastAnchor: "lastPoint", units: [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2, 3, 4]], ["week", [1, 2, 3]], ["month", [1, 3, 6]], ["year", null]] },
          dataLabels: { enabled: false, zIndex: 2 },
          id: "highcharts-navigator-series",
          className: "highcharts-navigator-series",
          lineColor: null,
          marker: { enabled: false },
          threshold: null
        }, xAxis: { overscroll: 0, className: "highcharts-navigator-xaxis", tickLength: 0, lineWidth: 0, gridLineColor: "#e6e6e6", gridLineWidth: 1, tickPixelInterval: 200, labels: { align: "left", style: { color: "#999999" }, x: 3, y: -4 }, crosshair: false }, yAxis: { className: "highcharts-navigator-yaxis", gridLineWidth: 0, startOnTick: false, endOnTick: false, minPadding: 0.1, maxPadding: 0.1, labels: { enabled: false }, crosshair: false, title: { text: null }, tickLength: 0, tickWidth: 0 } };
        "";
        return q;
      });
      J(
        a,
        "Stock/Navigator/NavigatorSymbols.js",
        [],
        function() {
          return { "navigator-handle": function(a2, q, A, E, B) {
            void 0 === B && (B = {});
            a2 = B.width ? B.width / 2 : A;
            q = Math.round(a2 / 3) + 0.5;
            E = B.height || E;
            return [["M", -a2 - 1, 0.5], ["L", a2, 0.5], ["L", a2, E + 0.5], ["L", -a2 - 1, E + 0.5], ["L", -a2 - 1, 0.5], ["M", -q, 4], ["L", -q, E - 3], ["M", q - 1, 4], ["L", q - 1, E - 3]];
          } };
        }
      );
      J(a, "Stock/Navigator/NavigatorComposition.js", [
        a["Core/Defaults.js"],
        a["Core/Globals.js"],
        a["Core/Axis/NavigatorAxisComposition.js"],
        a["Stock/Navigator/NavigatorDefaults.js"],
        a["Stock/Navigator/NavigatorSymbols.js"],
        a["Core/Renderer/RendererRegistry.js"],
        a["Core/Utilities.js"]
      ], function(a2, q, A, E, B, C, F) {
        function v() {
          this.navigator && this.navigator.setBaseSeries(null, false);
        }
        function u() {
          var a3 = this.legend, b = this.navigator;
          if (b) {
            var c2 = a3 && a3.options;
            var g2 = b.xAxis;
            var f2 = b.yAxis;
            var h2 = b.scrollbarHeight;
            this.inverted ? (b.left = b.opposite ? this.chartWidth - h2 - b.height : this.spacing[3] + h2, b.top = this.plotTop + h2) : (b.left = w(g2.left, this.plotLeft + h2), b.top = b.navigatorOptions.top || this.chartHeight - b.height - h2 - this.spacing[2] - (this.rangeSelector && this.extraBottomMargin ? this.rangeSelector.getHeight() : 0) - (c2 && "bottom" === c2.verticalAlign && "proximate" !== c2.layout && c2.enabled && !c2.floating ? a3.legendHeight + w(c2.margin, 10) : 0) - (this.titleOffset ? this.titleOffset[2] : 0));
            g2 && f2 && (this.inverted ? g2.options.left = f2.options.left = b.left : g2.options.top = f2.options.top = b.top, g2.setAxisSize(), f2.setAxisSize());
          }
        }
        function n(a3) {
          this.navigator || this.scroller || !this.options.navigator.enabled && !this.options.scrollbar.enabled || (this.scroller = this.navigator = new g(this), w(a3.redraw, true) && this.redraw(a3.animation));
        }
        function c() {
          var a3 = this.options;
          if (a3.navigator.enabled || a3.scrollbar.enabled)
            this.scroller = this.navigator = new g(this);
        }
        function h() {
          var a3 = this.options, b = a3.navigator, c2 = a3.rangeSelector;
          if ((b && b.enabled || c2 && c2.enabled) && (!G && "x" === a3.chart.zooming.type || G && "x" === a3.chart.zooming.pinchType))
            return false;
        }
        function m(a3) {
          var b = a3.navigator;
          b && a3.xAxis[0] && (a3 = a3.xAxis[0].getExtremes(), b.render(a3.min, a3.max));
        }
        function l(a3) {
          var b = a3.options.navigator || {}, c2 = a3.options.scrollbar || {};
          this.navigator || this.scroller || !b.enabled && !c2.enabled || (t(
            true,
            this.options.navigator,
            b
          ), t(true, this.options.scrollbar, c2), delete a3.options.navigator, delete a3.options.scrollbar);
        }
        function p() {
          this.chart.navigator && !this.options.isInternal && this.chart.navigator.setBaseSeries(null, false);
        }
        var f = a2.defaultOptions, D = a2.setOptions, G = q.isTouchDevice, H = C.getRendererType, K = F.addEvent, y = F.extend, t = F.merge, w = F.pick, k = [], g;
        return { compose: function(a3, b, d, r) {
          A.compose(a3);
          g = d;
          -1 === k.indexOf(b) && (k.push(b), b.prototype.callbacks.push(m), K(b, "afterAddSeries", v), K(b, "afterSetChartSize", u), K(b, "afterUpdate", n), K(b, "beforeRender", c), K(b, "beforeShowResetZoom", h), K(b, "update", l));
          -1 === k.indexOf(r) && (k.push(r), K(r, "afterUpdate", p));
          -1 === k.indexOf(H) && (k.push(H), y(H().prototype.symbols, B));
          -1 === k.indexOf(D) && (k.push(D), y(f, { navigator: E }));
        } };
      });
      J(a, "Core/Axis/ScrollbarAxis.js", [a["Core/Utilities.js"]], function(a2) {
        var q = a2.addEvent, v = a2.defined, E = a2.pick;
        return function() {
          function a3() {
          }
          a3.compose = function(A, B) {
            if (-1 === a3.composed.indexOf(A))
              a3.composed.push(A);
            else
              return A;
            var x = function(a4) {
              var n = E(
                a4.options && a4.options.min,
                a4.min
              ), c = E(a4.options && a4.options.max, a4.max);
              return { axisMin: n, axisMax: c, scrollMin: v(a4.dataMin) ? Math.min(n, a4.min, a4.dataMin, E(a4.threshold, Infinity)) : n, scrollMax: v(a4.dataMax) ? Math.max(c, a4.max, a4.dataMax, E(a4.threshold, -Infinity)) : c };
            };
            q(A, "afterInit", function() {
              var a4 = this;
              a4.options && a4.options.scrollbar && a4.options.scrollbar.enabled && (a4.options.scrollbar.vertical = !a4.horiz, a4.options.startOnTick = a4.options.endOnTick = false, a4.scrollbar = new B(a4.chart.renderer, a4.options.scrollbar, a4.chart), q(a4.scrollbar, "changed", function(n) {
                var c = x(a4), h = c.axisMax, m = c.scrollMin, l = c.scrollMax - m;
                v(c.axisMin) && v(h) && (a4.horiz && !a4.reversed || !a4.horiz && a4.reversed ? (c = m + l * this.to, m += l * this.from) : (c = m + l * (1 - this.from), m += l * (1 - this.to)), this.shouldUpdateExtremes(n.DOMType) ? a4.setExtremes(m, c, true, "mousemove" !== n.DOMType && "touchmove" !== n.DOMType, n) : this.setRange(this.from, this.to));
              }));
            });
            q(A, "afterRender", function() {
              var a4 = x(this), n = a4.scrollMin, c = a4.scrollMax;
              a4 = this.scrollbar;
              var h = this.axisTitleMargin + (this.titleOffset || 0), m = this.chart.scrollbarsOffsets, l = this.options.margin || 0;
              a4 && (this.horiz ? (this.opposite || (m[1] += h), a4.position(this.left, this.top + this.height + 2 + m[1] - (this.opposite ? l : 0), this.width, this.height), this.opposite || (m[1] += l), h = 1) : (this.opposite && (m[0] += h), a4.position(a4.options.opposite ? this.left + this.width + 2 + m[0] - (this.opposite ? 0 : l) : this.opposite ? 0 : l, this.top, this.width, this.height), this.opposite && (m[0] += l), h = 0), m[h] += a4.size + a4.options.margin, isNaN(n) || isNaN(c) || !v(this.min) || !v(this.max) || this.min === this.max ? a4.setRange(0, 1) : (m = (this.min - n) / (c - n), n = (this.max - n) / (c - n), this.horiz && !this.reversed || !this.horiz && this.reversed ? a4.setRange(m, n) : a4.setRange(1 - n, 1 - m)));
            });
            q(A, "afterGetOffset", function() {
              var a4 = this.scrollbar && !this.scrollbar.options.opposite;
              a4 = this.horiz ? 2 : a4 ? 3 : 1;
              var n = this.scrollbar;
              n && (this.chart.scrollbarsOffsets = [0, 0], this.chart.axisOffset[a4] += n.size + n.options.margin);
            });
            return A;
          };
          a3.composed = [];
          return a3;
        }();
      });
      J(a, "Stock/Scrollbar/ScrollbarDefaults.js", [a["Core/Globals.js"]], function(a2) {
        return {
          height: a2.isTouchDevice ? 20 : 14,
          barBorderRadius: 0,
          buttonBorderRadius: 0,
          liveRedraw: void 0,
          margin: 10,
          minWidth: 6,
          opposite: true,
          step: 0.2,
          zIndex: 3,
          barBackgroundColor: "#cccccc",
          barBorderWidth: 1,
          barBorderColor: "#cccccc",
          buttonArrowColor: "#333333",
          buttonBackgroundColor: "#e6e6e6",
          buttonBorderColor: "#cccccc",
          buttonBorderWidth: 1,
          rifleColor: "#333333",
          trackBackgroundColor: "#f2f2f2",
          trackBorderColor: "#f2f2f2",
          trackBorderWidth: 1
        };
      });
      J(
        a,
        "Stock/Scrollbar/Scrollbar.js",
        [a["Core/Defaults.js"], a["Core/Globals.js"], a["Core/Axis/ScrollbarAxis.js"], a["Stock/Scrollbar/ScrollbarDefaults.js"], a["Core/Utilities.js"]],
        function(a2, q, A, E, B) {
          var v = a2.defaultOptions, F = B.addEvent, x = B.correctFloat, u = B.defined, n = B.destroyObjectProperties, c = B.fireEvent, h = B.merge, m = B.pick, l = B.removeEvent;
          a2 = function() {
            function a3(a4, c2, h2) {
              this._events = [];
              this.chart = void 0;
              this.from = this.chartY = this.chartX = 0;
              this.scrollbar = this.renderer = this.options = this.group = void 0;
              this.scrollbarButtons = [];
              this.scrollbarGroup = void 0;
              this.scrollbarLeft = 0;
              this.scrollbarRifles = void 0;
              this.scrollbarStrokeWidth = 1;
              this.to = this.size = this.scrollbarTop = 0;
              this.track = void 0;
              this.trackBorderWidth = 1;
              this.userOptions = void 0;
              this.y = this.x = 0;
              this.init(a4, c2, h2);
            }
            a3.compose = function(c2) {
              A.compose(c2, a3);
            };
            a3.swapXY = function(a4, c2) {
              c2 && a4.forEach(function(a5) {
                for (var c3 = a5.length, f, h2 = 0; h2 < c3; h2 += 2)
                  f = a5[h2 + 1], "number" === typeof f && (a5[h2 + 1] = a5[h2 + 2], a5[h2 + 2] = f);
              });
              return a4;
            };
            a3.prototype.addEvents = function() {
              var a4 = this.options.inverted ? [1, 0] : [0, 1], c2 = this.scrollbarButtons, h2 = this.scrollbarGroup.element, l2 = this.track.element, m2 = this.mouseDownHandler.bind(this), p = this.mouseMoveHandler.bind(this), n2 = this.mouseUpHandler.bind(this);
              a4 = [[c2[a4[0]].element, "click", this.buttonToMinClick.bind(this)], [c2[a4[1]].element, "click", this.buttonToMaxClick.bind(this)], [l2, "click", this.trackClick.bind(this)], [h2, "mousedown", m2], [h2.ownerDocument, "mousemove", p], [h2.ownerDocument, "mouseup", n2]];
              q.hasTouch && a4.push([h2, "touchstart", m2], [h2.ownerDocument, "touchmove", p], [h2.ownerDocument, "touchend", n2]);
              a4.forEach(function(a5) {
                F.apply(null, a5);
              });
              this._events = a4;
            };
            a3.prototype.buttonToMaxClick = function(a4) {
              var f = (this.to - this.from) * m(this.options.step, 0.2);
              this.updatePosition(this.from + f, this.to + f);
              c(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: a4 });
            };
            a3.prototype.buttonToMinClick = function(a4) {
              var f = x(this.to - this.from) * m(this.options.step, 0.2);
              this.updatePosition(x(this.from - f), x(this.to - f));
              c(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: a4 });
            };
            a3.prototype.cursorToScrollbarPosition = function(a4) {
              var c2 = this.options;
              c2 = c2.minWidth > this.calculatedWidth ? c2.minWidth : 0;
              return { chartX: (a4.chartX - this.x - this.xOffset) / (this.barWidth - c2), chartY: (a4.chartY - this.y - this.yOffset) / (this.barWidth - c2) };
            };
            a3.prototype.destroy = function() {
              var a4 = this, c2 = a4.chart.scroller;
              a4.removeEvents();
              ["track", "scrollbarRifles", "scrollbar", "scrollbarGroup", "group"].forEach(function(c3) {
                a4[c3] && a4[c3].destroy && (a4[c3] = a4[c3].destroy());
              });
              c2 && a4 === c2.scrollbar && (c2.scrollbar = null, n(c2.scrollbarButtons));
            };
            a3.prototype.drawScrollbarButton = function(c2) {
              var f = this.renderer, h2 = this.scrollbarButtons, l2 = this.options, m2 = this.size, p = f.g().add(this.group);
              h2.push(p);
              p = f.rect().addClass("highcharts-scrollbar-button").add(p);
              this.chart.styledMode || p.attr({ stroke: l2.buttonBorderColor, "stroke-width": l2.buttonBorderWidth, fill: l2.buttonBackgroundColor });
              p.attr(p.crisp({ x: -0.5, y: -0.5, width: m2 + 1, height: m2 + 1, r: l2.buttonBorderRadius }, p.strokeWidth()));
              p = f.path(a3.swapXY([["M", m2 / 2 + (c2 ? -1 : 1), m2 / 2 - 3], ["L", m2 / 2 + (c2 ? -1 : 1), m2 / 2 + 3], ["L", m2 / 2 + (c2 ? 2 : -2), m2 / 2]], l2.vertical)).addClass("highcharts-scrollbar-arrow").add(h2[c2]);
              this.chart.styledMode || p.attr({ fill: l2.buttonArrowColor });
            };
            a3.prototype.init = function(a4, c2, l2) {
              this.scrollbarButtons = [];
              this.renderer = a4;
              this.userOptions = c2;
              this.options = h(E, v.scrollbar, c2);
              this.chart = l2;
              this.size = m(this.options.size, this.options.height);
              c2.enabled && (this.render(), this.addEvents());
            };
            a3.prototype.mouseDownHandler = function(a4) {
              a4 = this.chart.pointer.normalize(a4);
              a4 = this.cursorToScrollbarPosition(a4);
              this.chartX = a4.chartX;
              this.chartY = a4.chartY;
              this.initPositions = [this.from, this.to];
              this.grabbedCenter = true;
            };
            a3.prototype.mouseMoveHandler = function(a4) {
              var f = this.chart.pointer.normalize(a4), h2 = this.options.vertical ? "chartY" : "chartX", l2 = this.initPositions || [];
              !this.grabbedCenter || a4.touches && 0 === a4.touches[0][h2] || (f = this.cursorToScrollbarPosition(f)[h2], h2 = this[h2], h2 = f - h2, this.hasDragged = true, this.updatePosition(l2[0] + h2, l2[1] + h2), this.hasDragged && c(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMType: a4.type, DOMEvent: a4 }));
            };
            a3.prototype.mouseUpHandler = function(a4) {
              this.hasDragged && c(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMType: a4.type, DOMEvent: a4 });
              this.grabbedCenter = this.hasDragged = this.chartX = this.chartY = null;
            };
            a3.prototype.position = function(a4, c2, h2, l2) {
              var f = this.options.vertical, m2 = this.rendered ? "animate" : "attr", p = l2, n2 = 0;
              this.group.show();
              this.x = a4;
              this.y = c2 + this.trackBorderWidth;
              this.width = h2;
              this.height = l2;
              this.xOffset = p;
              this.yOffset = n2;
              f ? (this.width = this.yOffset = h2 = n2 = this.size, this.xOffset = p = 0, this.barWidth = l2 - 2 * h2, this.x = a4 += this.options.margin) : (this.height = this.xOffset = l2 = p = this.size, this.barWidth = h2 - 2 * l2, this.y += this.options.margin);
              this.group[m2]({ translateX: a4, translateY: this.y });
              this.track[m2]({ width: h2, height: l2 });
              this.scrollbarButtons[1][m2]({ translateX: f ? 0 : h2 - p, translateY: f ? l2 - n2 : 0 });
            };
            a3.prototype.removeEvents = function() {
              this._events.forEach(function(a4) {
                l.apply(null, a4);
              });
              this._events.length = 0;
            };
            a3.prototype.render = function() {
              var c2 = this.renderer, h2 = this.options, l2 = this.size, m2 = this.chart.styledMode, p = c2.g("scrollbar").attr({ zIndex: h2.zIndex }).hide().add();
              this.group = p;
              this.track = c2.rect().addClass("highcharts-scrollbar-track").attr({ x: 0, r: h2.trackBorderRadius || 0, height: l2, width: l2 }).add(p);
              m2 || this.track.attr({
                fill: h2.trackBackgroundColor,
                stroke: h2.trackBorderColor,
                "stroke-width": h2.trackBorderWidth
              });
              this.trackBorderWidth = this.track.strokeWidth();
              this.track.attr({ y: -this.trackBorderWidth % 2 / 2 });
              this.scrollbarGroup = c2.g().add(p);
              this.scrollbar = c2.rect().addClass("highcharts-scrollbar-thumb").attr({ height: l2, width: l2, r: h2.barBorderRadius || 0 }).add(this.scrollbarGroup);
              this.scrollbarRifles = c2.path(a3.swapXY([["M", -3, l2 / 4], ["L", -3, 2 * l2 / 3], ["M", 0, l2 / 4], ["L", 0, 2 * l2 / 3], ["M", 3, l2 / 4], ["L", 3, 2 * l2 / 3]], h2.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup);
              m2 || (this.scrollbar.attr({
                fill: h2.barBackgroundColor,
                stroke: h2.barBorderColor,
                "stroke-width": h2.barBorderWidth
              }), this.scrollbarRifles.attr({ stroke: h2.rifleColor, "stroke-width": 1 }));
              this.scrollbarStrokeWidth = this.scrollbar.strokeWidth();
              this.scrollbarGroup.translate(-this.scrollbarStrokeWidth % 2 / 2, -this.scrollbarStrokeWidth % 2 / 2);
              this.drawScrollbarButton(0);
              this.drawScrollbarButton(1);
            };
            a3.prototype.setRange = function(a4, c2) {
              var f = this.options, h2 = f.vertical, l2 = f.minWidth, m2 = this.barWidth, p = !this.rendered || this.hasDragged || this.chart.navigator && this.chart.navigator.hasDragged ? "attr" : "animate";
              if (u(m2)) {
                var n2 = m2 * Math.min(c2, 1);
                a4 = Math.max(a4, 0);
                var k = Math.ceil(m2 * a4);
                this.calculatedWidth = n2 = x(n2 - k);
                n2 < l2 && (k = (m2 - l2 + n2) * a4, n2 = l2);
                l2 = Math.floor(k + this.xOffset + this.yOffset);
                m2 = n2 / 2 - 0.5;
                this.from = a4;
                this.to = c2;
                h2 ? (this.scrollbarGroup[p]({ translateY: l2 }), this.scrollbar[p]({ height: n2 }), this.scrollbarRifles[p]({ translateY: m2 }), this.scrollbarTop = l2, this.scrollbarLeft = 0) : (this.scrollbarGroup[p]({ translateX: l2 }), this.scrollbar[p]({ width: n2 }), this.scrollbarRifles[p]({ translateX: m2 }), this.scrollbarLeft = l2, this.scrollbarTop = 0);
                12 >= n2 ? this.scrollbarRifles.hide() : this.scrollbarRifles.show();
                false === f.showFull && (0 >= a4 && 1 <= c2 ? this.group.hide() : this.group.show());
                this.rendered = true;
              }
            };
            a3.prototype.shouldUpdateExtremes = function(a4) {
              return m(this.options.liveRedraw, q.svg && !q.isTouchDevice && !this.chart.boosted) || "mouseup" === a4 || "touchend" === a4 || !u(a4);
            };
            a3.prototype.trackClick = function(a4) {
              var f = this.chart.pointer.normalize(a4), h2 = this.to - this.from, l2 = this.y + this.scrollbarTop, m2 = this.x + this.scrollbarLeft;
              this.options.vertical && f.chartY > l2 || !this.options.vertical && f.chartX > m2 ? this.updatePosition(this.from + h2, this.to + h2) : this.updatePosition(this.from - h2, this.to - h2);
              c(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: a4 });
            };
            a3.prototype.update = function(a4) {
              this.destroy();
              this.init(this.chart.renderer, h(true, this.options, a4), this.chart);
            };
            a3.prototype.updatePosition = function(a4, c2) {
              1 < c2 && (a4 = x(1 - x(c2 - a4)), c2 = 1);
              0 > a4 && (c2 = x(c2 - a4), a4 = 0);
              this.from = a4;
              this.to = c2;
            };
            a3.defaultOptions = E;
            return a3;
          }();
          v.scrollbar = h(true, a2.defaultOptions, v.scrollbar);
          return a2;
        }
      );
      J(
        a,
        "Stock/Navigator/Navigator.js",
        [a["Core/Axis/Axis.js"], a["Core/Defaults.js"], a["Core/Globals.js"], a["Core/Axis/NavigatorAxisComposition.js"], a["Stock/Navigator/NavigatorComposition.js"], a["Stock/Scrollbar/Scrollbar.js"], a["Core/Utilities.js"]],
        function(a2, q, A, E, B, C, F) {
          function v(a3) {
            for (var b = [], c2 = 1; c2 < arguments.length; c2++)
              b[c2 - 1] = arguments[c2];
            b = [].filter.call(b, y);
            if (b.length)
              return Math[a3].apply(0, b);
          }
          var u = q.defaultOptions, n = A.hasTouch, c = A.isTouchDevice, h = F.addEvent, m = F.clamp, l = F.correctFloat, p = F.defined, f = F.destroyObjectProperties, D = F.erase, G = F.extend, H = F.find, K = F.isArray, y = F.isNumber, t = F.merge, w = F.pick, k = F.removeEvent, g = F.splat;
          return function() {
            function e(a3) {
              this.zoomedMin = this.zoomedMax = this.yAxis = this.xAxis = this.top = this.size = this.shades = this.rendered = this.range = this.outlineHeight = this.outline = this.opposite = this.navigatorSize = this.navigatorSeries = this.navigatorOptions = this.navigatorGroup = this.navigatorEnabled = this.left = this.height = this.handles = this.chart = this.baseSeries = void 0;
              this.init(a3);
            }
            e.compose = function(a3, c2, g2) {
              B.compose(
                a3,
                c2,
                e,
                g2
              );
            };
            e.prototype.drawHandle = function(a3, c2, e2, g2) {
              var b = this.navigatorOptions.handles.height;
              this.handles[c2][g2](e2 ? { translateX: Math.round(this.left + this.height / 2), translateY: Math.round(this.top + parseInt(a3, 10) + 0.5 - b) } : { translateX: Math.round(this.left + parseInt(a3, 10)), translateY: Math.round(this.top + this.height / 2 - b / 2 - 1) });
            };
            e.prototype.drawOutline = function(a3, c2, e2, g2) {
              var b = this.navigatorOptions.maskInside, d = this.outline.strokeWidth(), f2 = d / 2, h2 = d % 2 / 2;
              d = this.outlineHeight;
              var k2 = this.scrollbarHeight || 0, l2 = this.size, r = this.left - k2, m2 = this.top;
              e2 ? (r -= f2, e2 = m2 + c2 + h2, c2 = m2 + a3 + h2, h2 = [["M", r + d, m2 - k2 - h2], ["L", r + d, e2], ["L", r, e2], ["L", r, c2], ["L", r + d, c2], ["L", r + d, m2 + l2 + k2]], b && h2.push(["M", r + d, e2 - f2], ["L", r + d, c2 + f2])) : (a3 += r + k2 - h2, c2 += r + k2 - h2, m2 += f2, h2 = [["M", r, m2], ["L", a3, m2], ["L", a3, m2 + d], ["L", c2, m2 + d], ["L", c2, m2], ["L", r + l2 + 2 * k2, m2]], b && h2.push(["M", a3 - f2, m2], ["L", c2 + f2, m2]));
              this.outline[g2]({ d: h2 });
            };
            e.prototype.drawMasks = function(a3, c2, e2, g2) {
              var b = this.left, d = this.top, f2 = this.height;
              if (e2) {
                var h2 = [b, b, b];
                var k2 = [d, d + a3, d + c2];
                var r = [f2, f2, f2];
                var l2 = [a3, c2 - a3, this.size - c2];
              } else
                h2 = [b, b + a3, b + c2], k2 = [d, d, d], r = [a3, c2 - a3, this.size - c2], l2 = [f2, f2, f2];
              this.shades.forEach(function(a4, b2) {
                a4[g2]({ x: h2[b2], y: k2[b2], width: r[b2], height: l2[b2] });
              });
            };
            e.prototype.renderElements = function() {
              var a3 = this, c2 = a3.navigatorOptions, e2 = c2.maskInside, g2 = a3.chart, f2 = g2.renderer, h2 = { cursor: g2.inverted ? "ns-resize" : "ew-resize" }, k2 = a3.navigatorGroup = f2.g("navigator").attr({ zIndex: 8, visibility: "hidden" }).add();
              [!e2, e2, !e2].forEach(function(b, d) {
                var e3 = f2.rect().addClass("highcharts-navigator-mask" + (1 === d ? "-inside" : "-outside")).add(k2);
                g2.styledMode || (e3.attr({ fill: b ? c2.maskFill : "rgba(0,0,0,0)" }), 1 === d && e3.css(h2));
                a3.shades[d] = e3;
              });
              a3.outline = f2.path().addClass("highcharts-navigator-outline").add(k2);
              g2.styledMode || a3.outline.attr({ "stroke-width": c2.outlineWidth, stroke: c2.outlineColor });
              if (c2.handles && c2.handles.enabled) {
                var l2 = c2.handles, m2 = l2.height, p2 = l2.width;
                [0, 1].forEach(function(b) {
                  a3.handles[b] = f2.symbol(l2.symbols[b], -p2 / 2 - 1, 0, p2, m2, l2);
                  g2.inverted && a3.handles[b].attr({ rotation: 90, rotationOriginX: Math.floor(-p2 / 2), rotationOriginY: (m2 + p2) / 2 });
                  a3.handles[b].attr({ zIndex: 7 - b }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][b]).add(k2);
                  g2.styledMode || a3.handles[b].attr({ fill: l2.backgroundColor, stroke: l2.borderColor, "stroke-width": l2.lineWidth }).css(h2);
                });
              }
            };
            e.prototype.update = function(a3) {
              (this.series || []).forEach(function(a4) {
                a4.baseSeries && delete a4.baseSeries.navigatorSeries;
              });
              this.destroy();
              t(true, this.chart.options.navigator, a3);
              this.init(this.chart);
            };
            e.prototype.render = function(a3, c2, e2, g2) {
              var b = this.chart, d = this.xAxis, f2 = d.pointRange || 0, h2 = d.navigatorAxis.fake ? b.xAxis[0] : d, k2 = this.navigatorEnabled, r = this.rendered, n2 = b.inverted, t2 = b.xAxis[0].minRange, q2 = b.xAxis[0].options.maxRange, u2 = this.scrollbarHeight, z;
              if (!this.hasDragged || p(e2)) {
                a3 = l(a3 - f2 / 2);
                c2 = l(c2 + f2 / 2);
                if (!y(a3) || !y(c2))
                  if (r)
                    e2 = 0, g2 = w(d.width, h2.width);
                  else
                    return;
                this.left = w(d.left, b.plotLeft + u2 + (n2 ? b.plotWidth : 0));
                var v2 = this.size = z = w(d.len, (n2 ? b.plotHeight : b.plotWidth) - 2 * u2);
                b = n2 ? u2 : z + 2 * u2;
                e2 = w(e2, d.toPixels(a3, true));
                g2 = w(g2, d.toPixels(c2, true));
                y(e2) && Infinity !== Math.abs(e2) || (e2 = 0, g2 = b);
                a3 = d.toValue(e2, true);
                c2 = d.toValue(g2, true);
                var x = Math.abs(l(c2 - a3));
                x < t2 ? this.grabbedLeft ? e2 = d.toPixels(c2 - t2 - f2, true) : this.grabbedRight && (g2 = d.toPixels(a3 + t2 + f2, true)) : p(q2) && l(x - f2) > q2 && (this.grabbedLeft ? e2 = d.toPixels(c2 - q2 - f2, true) : this.grabbedRight && (g2 = d.toPixels(a3 + q2 + f2, true)));
                this.zoomedMax = m(Math.max(e2, g2), 0, v2);
                this.zoomedMin = m(this.fixedWidth ? this.zoomedMax - this.fixedWidth : Math.min(e2, g2), 0, v2);
                this.range = this.zoomedMax - this.zoomedMin;
                v2 = Math.round(this.zoomedMax);
                e2 = Math.round(this.zoomedMin);
                k2 && (this.navigatorGroup.attr({ visibility: "inherit" }), r = r && !this.hasDragged ? "animate" : "attr", this.drawMasks(e2, v2, n2, r), this.drawOutline(
                  e2,
                  v2,
                  n2,
                  r
                ), this.navigatorOptions.handles.enabled && (this.drawHandle(e2, 0, n2, r), this.drawHandle(v2, 1, n2, r)));
                this.scrollbar && (n2 ? (n2 = this.top - u2, h2 = this.left - u2 + (k2 || !h2.opposite ? 0 : (h2.titleOffset || 0) + h2.axisTitleMargin), u2 = z + 2 * u2) : (n2 = this.top + (k2 ? this.height : -u2), h2 = this.left - u2), this.scrollbar.position(h2, n2, b, u2), this.scrollbar.setRange(this.zoomedMin / (z || 1), this.zoomedMax / (z || 1)));
                this.rendered = true;
              }
            };
            e.prototype.addMouseEvents = function() {
              var a3 = this, c2 = a3.chart, e2 = c2.container, g2 = [], f2, k2;
              a3.mouseMoveHandler = f2 = function(b) {
                a3.onMouseMove(b);
              };
              a3.mouseUpHandler = k2 = function(b) {
                a3.onMouseUp(b);
              };
              g2 = a3.getPartsEvents("mousedown");
              g2.push(h(c2.renderTo, "mousemove", f2), h(e2.ownerDocument, "mouseup", k2));
              n && (g2.push(h(c2.renderTo, "touchmove", f2), h(e2.ownerDocument, "touchend", k2)), g2.concat(a3.getPartsEvents("touchstart")));
              a3.eventsToUnbind = g2;
              a3.series && a3.series[0] && g2.push(h(a3.series[0].xAxis, "foundExtremes", function() {
                c2.navigator.modifyNavigatorAxisExtremes();
              }));
            };
            e.prototype.getPartsEvents = function(a3) {
              var b = this, c2 = [];
              ["shades", "handles"].forEach(function(d) {
                b[d].forEach(function(e2, g2) {
                  c2.push(h(e2.element, a3, function(a4) {
                    b[d + "Mousedown"](a4, g2);
                  }));
                });
              });
              return c2;
            };
            e.prototype.shadesMousedown = function(a3, c2) {
              a3 = this.chart.pointer.normalize(a3);
              var b = this.chart, d = this.xAxis, e2 = this.zoomedMin, g2 = this.size, f2 = this.range, h2 = this.left, k2 = a3.chartX;
              b.inverted && (k2 = a3.chartY, h2 = this.top);
              if (1 === c2)
                this.grabbedCenter = k2, this.fixedWidth = f2, this.dragOffset = k2 - e2;
              else {
                a3 = k2 - h2 - f2 / 2;
                if (0 === c2)
                  a3 = Math.max(0, a3);
                else if (2 === c2 && a3 + f2 >= g2)
                  if (a3 = g2 - f2, this.reversedExtremes) {
                    a3 -= f2;
                    var l2 = this.getUnionExtremes().dataMin;
                  } else
                    var m2 = this.getUnionExtremes().dataMax;
                a3 !== e2 && (this.fixedWidth = f2, c2 = d.navigatorAxis.toFixedRange(a3, a3 + f2, l2, m2), p(c2.min) && b.xAxis[0].setExtremes(Math.min(c2.min, c2.max), Math.max(c2.min, c2.max), true, null, { trigger: "navigator" }));
              }
            };
            e.prototype.handlesMousedown = function(a3, c2) {
              this.chart.pointer.normalize(a3);
              a3 = this.chart;
              var b = a3.xAxis[0], d = this.reversedExtremes;
              0 === c2 ? (this.grabbedLeft = true, this.otherHandlePos = this.zoomedMax, this.fixedExtreme = d ? b.min : b.max) : (this.grabbedRight = true, this.otherHandlePos = this.zoomedMin, this.fixedExtreme = d ? b.max : b.min);
              a3.fixedRange = null;
            };
            e.prototype.onMouseMove = function(a3) {
              var b = this, e2 = b.chart, g2 = b.navigatorSize, f2 = b.range, h2 = b.dragOffset, k2 = e2.inverted, l2 = b.left;
              a3.touches && 0 === a3.touches[0].pageX || (a3 = e2.pointer.normalize(a3), e2 = a3.chartX, k2 && (l2 = b.top, e2 = a3.chartY), b.grabbedLeft ? (b.hasDragged = true, b.render(0, 0, e2 - l2, b.otherHandlePos)) : b.grabbedRight ? (b.hasDragged = true, b.render(0, 0, b.otherHandlePos, e2 - l2)) : b.grabbedCenter && (b.hasDragged = true, e2 < h2 ? e2 = h2 : e2 > g2 + h2 - f2 && (e2 = g2 + h2 - f2), b.render(0, 0, e2 - h2, e2 - h2 + f2)), b.hasDragged && b.scrollbar && w(
                b.scrollbar.options.liveRedraw,
                A.svg && !c && !this.chart.boosted
              ) && (a3.DOMType = a3.type, setTimeout(function() {
                b.onMouseUp(a3);
              }, 0)));
            };
            e.prototype.onMouseUp = function(a3) {
              var b = this.chart, c2 = this.xAxis, e2 = this.scrollbar, g2 = a3.DOMEvent || a3, f2 = b.inverted, h2 = this.rendered && !this.hasDragged ? "animate" : "attr";
              if (this.hasDragged && (!e2 || !e2.hasDragged) || "scrollbar" === a3.trigger) {
                e2 = this.getUnionExtremes();
                if (this.zoomedMin === this.otherHandlePos)
                  var k2 = this.fixedExtreme;
                else if (this.zoomedMax === this.otherHandlePos)
                  var l2 = this.fixedExtreme;
                this.zoomedMax === this.size && (l2 = this.reversedExtremes ? e2.dataMin : e2.dataMax);
                0 === this.zoomedMin && (k2 = this.reversedExtremes ? e2.dataMax : e2.dataMin);
                c2 = c2.navigatorAxis.toFixedRange(this.zoomedMin, this.zoomedMax, k2, l2);
                p(c2.min) && b.xAxis[0].setExtremes(Math.min(c2.min, c2.max), Math.max(c2.min, c2.max), true, this.hasDragged ? false : null, { trigger: "navigator", triggerOp: "navigator-drag", DOMEvent: g2 });
              }
              "mousemove" !== a3.DOMType && "touchmove" !== a3.DOMType && (this.grabbedLeft = this.grabbedRight = this.grabbedCenter = this.fixedWidth = this.fixedExtreme = this.otherHandlePos = this.hasDragged = this.dragOffset = null);
              this.navigatorEnabled && y(this.zoomedMin) && y(this.zoomedMax) && (b = Math.round(this.zoomedMin), a3 = Math.round(this.zoomedMax), this.shades && this.drawMasks(b, a3, f2, h2), this.outline && this.drawOutline(b, a3, f2, h2), this.navigatorOptions.handles.enabled && Object.keys(this.handles).length === this.handles.length && (this.drawHandle(b, 0, f2, h2), this.drawHandle(a3, 1, f2, h2)));
            };
            e.prototype.removeEvents = function() {
              this.eventsToUnbind && (this.eventsToUnbind.forEach(function(a3) {
                a3();
              }), this.eventsToUnbind = void 0);
              this.removeBaseSeriesEvents();
            };
            e.prototype.removeBaseSeriesEvents = function() {
              var a3 = this.baseSeries || [];
              this.navigatorEnabled && a3[0] && (false !== this.navigatorOptions.adaptToUpdatedData && a3.forEach(function(a4) {
                k(a4, "updatedData", this.updatedDataHandler);
              }, this), a3[0].xAxis && k(a3[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes));
            };
            e.prototype.init = function(b) {
              var c2 = b.options, e2 = c2.navigator || {}, g2 = e2.enabled, f2 = c2.scrollbar || {}, k2 = f2.enabled;
              c2 = g2 && e2.height || 0;
              var l2 = k2 && f2.height || 0;
              this.handles = [];
              this.shades = [];
              this.chart = b;
              this.setBaseSeries();
              this.height = c2;
              this.scrollbarHeight = l2;
              this.scrollbarEnabled = k2;
              this.navigatorEnabled = g2;
              this.navigatorOptions = e2;
              this.scrollbarOptions = f2;
              this.outlineHeight = c2 + l2;
              this.opposite = w(e2.opposite, !(g2 || !b.inverted));
              var m2 = this;
              g2 = m2.baseSeries;
              f2 = b.xAxis.length;
              k2 = b.yAxis.length;
              var p2 = g2 && g2[0] && g2[0].xAxis || b.xAxis[0] || { options: {} };
              b.isDirtyBox = true;
              m2.navigatorEnabled ? (m2.xAxis = new a2(b, t({ breaks: p2.options.breaks, ordinal: p2.options.ordinal }, e2.xAxis, {
                id: "navigator-x-axis",
                yAxis: "navigator-y-axis",
                isX: true,
                type: "datetime",
                index: f2,
                isInternal: true,
                offset: 0,
                keepOrdinalPadding: true,
                startOnTick: false,
                endOnTick: false,
                minPadding: 0,
                maxPadding: 0,
                zoomEnabled: false
              }, b.inverted ? { offsets: [l2, 0, -l2, 0], width: c2 } : { offsets: [0, -l2, 0, l2], height: c2 })), m2.yAxis = new a2(b, t(e2.yAxis, { id: "navigator-y-axis", alignTicks: false, offset: 0, index: k2, isInternal: true, reversed: w(e2.yAxis && e2.yAxis.reversed, b.yAxis[0] && b.yAxis[0].reversed, false), zoomEnabled: false }, b.inverted ? { width: c2 } : { height: c2 })), g2 || e2.series.data ? m2.updateNavigatorSeries(false) : 0 === b.series.length && (m2.unbindRedraw = h(b, "beforeRedraw", function() {
                0 < b.series.length && !m2.series && (m2.setBaseSeries(), m2.unbindRedraw());
              })), m2.reversedExtremes = b.inverted && !m2.xAxis.reversed || !b.inverted && m2.xAxis.reversed, m2.renderElements(), m2.addMouseEvents()) : (m2.xAxis = { chart: b, navigatorAxis: { fake: true }, translate: function(a3, c3) {
                var d = b.xAxis[0], e3 = d.getExtremes(), g3 = d.len - 2 * l2, f3 = v("min", d.options.min, e3.dataMin);
                d = v("max", d.options.max, e3.dataMax) - f3;
                return c3 ? a3 * d / g3 + f3 : g3 * (a3 - f3) / d;
              }, toPixels: function(a3) {
                return this.translate(a3);
              }, toValue: function(a3) {
                return this.translate(
                  a3,
                  true
                );
              } }, m2.xAxis.navigatorAxis.axis = m2.xAxis, m2.xAxis.navigatorAxis.toFixedRange = E.prototype.toFixedRange.bind(m2.xAxis.navigatorAxis));
              b.options.scrollbar.enabled && (b.scrollbar = m2.scrollbar = new C(b.renderer, t(b.options.scrollbar, { margin: m2.navigatorEnabled ? 0 : 10, vertical: b.inverted }), b), h(m2.scrollbar, "changed", function(a3) {
                var b2 = m2.size, c3 = b2 * this.to;
                b2 *= this.from;
                m2.hasDragged = m2.scrollbar.hasDragged;
                m2.render(0, 0, b2, c3);
                this.shouldUpdateExtremes(a3.DOMType) && setTimeout(function() {
                  m2.onMouseUp(a3);
                });
              }));
              m2.addBaseSeriesEvents();
              m2.addChartEvents();
            };
            e.prototype.getUnionExtremes = function(a3) {
              var b = this.chart.xAxis[0], c2 = this.xAxis, e2 = c2.options, g2 = b.options, f2;
              a3 && null === b.dataMin || (f2 = { dataMin: w(e2 && e2.min, v("min", g2.min, b.dataMin, c2.dataMin, c2.min)), dataMax: w(e2 && e2.max, v("max", g2.max, b.dataMax, c2.dataMax, c2.max)) });
              return f2;
            };
            e.prototype.setBaseSeries = function(a3, c2) {
              var b = this.chart, d = this.baseSeries = [];
              a3 = a3 || b.options && b.options.navigator.baseSeries || (b.series.length ? H(b.series, function(a4) {
                return !a4.options.isInternal;
              }).index : 0);
              (b.series || []).forEach(function(b2, c3) {
                b2.options.isInternal || !b2.options.showInNavigator && (c3 !== a3 && b2.options.id !== a3 || false === b2.options.showInNavigator) || d.push(b2);
              });
              this.xAxis && !this.xAxis.navigatorAxis.fake && this.updateNavigatorSeries(true, c2);
            };
            e.prototype.updateNavigatorSeries = function(a3, c2) {
              var b = this, d = b.chart, e2 = b.baseSeries, f2 = { enableMouseTracking: false, index: null, linkedTo: null, group: "nav", padXAxis: false, xAxis: "navigator-x-axis", yAxis: "navigator-y-axis", showInLegend: false, stacking: void 0, isInternal: true, states: { inactive: { opacity: 1 } } }, h2 = b.series = (b.series || []).filter(function(a4) {
                var c3 = a4.baseSeries;
                return 0 > e2.indexOf(c3) ? (c3 && (k(c3, "updatedData", b.updatedDataHandler), delete c3.navigatorSeries), a4.chart && a4.destroy(), false) : true;
              }), l2, m2, p2 = b.navigatorOptions.series, n2;
              e2 && e2.length && e2.forEach(function(a4) {
                var k2 = a4.navigatorSeries, r = G({ color: a4.color, visible: a4.visible }, K(p2) ? u.navigator.series : p2);
                k2 && false === b.navigatorOptions.adaptToUpdatedData || (f2.name = "Navigator " + e2.length, l2 = a4.options || {}, n2 = l2.navigatorOptions || {}, r.dataLabels = g(r.dataLabels), m2 = t(
                  l2,
                  f2,
                  r,
                  n2
                ), m2.pointRange = w(r.pointRange, n2.pointRange, u.plotOptions[m2.type || "line"].pointRange), r = n2.data || r.data, b.hasNavigatorData = b.hasNavigatorData || !!r, m2.data = r || l2.data && l2.data.slice(0), k2 && k2.options ? k2.update(m2, c2) : (a4.navigatorSeries = d.initSeries(m2), a4.navigatorSeries.baseSeries = a4, h2.push(a4.navigatorSeries)));
              });
              if (p2.data && (!e2 || !e2.length) || K(p2))
                b.hasNavigatorData = false, p2 = g(p2), p2.forEach(function(a4, c3) {
                  f2.name = "Navigator " + (h2.length + 1);
                  m2 = t(u.navigator.series, { color: d.series[c3] && !d.series[c3].options.isInternal && d.series[c3].color || d.options.colors[c3] || d.options.colors[0] }, f2, a4);
                  m2.data = a4.data;
                  m2.data && (b.hasNavigatorData = true, h2.push(d.initSeries(m2)));
                });
              a3 && this.addBaseSeriesEvents();
            };
            e.prototype.addBaseSeriesEvents = function() {
              var a3 = this, c2 = this, e2 = c2.baseSeries || [];
              e2[0] && e2[0].xAxis && e2[0].eventsToUnbind.push(h(e2[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes));
              e2.forEach(function(b) {
                b.eventsToUnbind.push(h(b, "show", function() {
                  this.navigatorSeries && this.navigatorSeries.setVisible(true, false);
                }));
                b.eventsToUnbind.push(h(b, "hide", function() {
                  this.navigatorSeries && this.navigatorSeries.setVisible(false, false);
                }));
                false !== a3.navigatorOptions.adaptToUpdatedData && b.xAxis && b.eventsToUnbind.push(h(b, "updatedData", a3.updatedDataHandler));
                b.eventsToUnbind.push(h(b, "remove", function() {
                  this.navigatorSeries && (D(c2.series, this.navigatorSeries), p(this.navigatorSeries.options) && this.navigatorSeries.remove(false), delete this.navigatorSeries);
                }));
              });
            };
            e.prototype.getBaseSeriesMin = function(a3) {
              return this.baseSeries.reduce(
                function(a4, b) {
                  return Math.min(a4, b.xData && b.xData.length ? b.xData[0] : a4);
                },
                a3
              );
            };
            e.prototype.modifyNavigatorAxisExtremes = function() {
              var a3 = this.xAxis;
              if ("undefined" !== typeof a3.getExtremes) {
                var c2 = this.getUnionExtremes(true);
                !c2 || c2.dataMin === a3.min && c2.dataMax === a3.max || (a3.min = c2.dataMin, a3.max = c2.dataMax);
              }
            };
            e.prototype.modifyBaseAxisExtremes = function() {
              var a3 = this.chart.navigator, c2 = this.getExtremes(), e2 = c2.dataMin, g2 = c2.dataMax;
              c2 = c2.max - c2.min;
              var f2 = a3.stickToMin, h2 = a3.stickToMax, k2 = w(this.options.overscroll, 0), l2 = a3.series && a3.series[0], m2 = !!this.setExtremes;
              if (!this.eventArgs || "rangeSelectorButton" !== this.eventArgs.trigger) {
                if (f2) {
                  var p2 = e2;
                  var n2 = p2 + c2;
                }
                h2 && (n2 = g2 + k2, f2 || (p2 = Math.max(e2, n2 - c2, a3.getBaseSeriesMin(l2 && l2.xData ? l2.xData[0] : -Number.MAX_VALUE))));
                m2 && (f2 || h2) && y(p2) && (this.min = this.userMin = p2, this.max = this.userMax = n2);
              }
              a3.stickToMin = a3.stickToMax = null;
            };
            e.prototype.updatedDataHandler = function() {
              var a3 = this.chart.navigator, c2 = this.navigatorSeries;
              a3.stickToMax = w(this.chart.options.navigator && this.chart.options.navigator.stickToMax, a3.reversedExtremes ? 0 === Math.round(a3.zoomedMin) : Math.round(a3.zoomedMax) >= Math.round(a3.size));
              a3.stickToMin = a3.shouldStickToMin(this, a3);
              c2 && !a3.hasNavigatorData && (c2.options.pointStart = this.xData[0], c2.setData(this.options.data, false, null, false));
            };
            e.prototype.shouldStickToMin = function(a3, c2) {
              c2 = c2.getBaseSeriesMin(a3.xData[0]);
              var b = a3.xAxis;
              a3 = b.max;
              var d = b.min;
              b = b.options.range;
              return y(a3) && y(d) ? b && 0 < a3 - c2 ? a3 - c2 < b : d <= c2 : false;
            };
            e.prototype.addChartEvents = function() {
              this.eventsToUnbind || (this.eventsToUnbind = []);
              this.eventsToUnbind.push(h(this.chart, "redraw", function() {
                var a3 = this.navigator, c2 = a3 && (a3.baseSeries && a3.baseSeries[0] && a3.baseSeries[0].xAxis || this.xAxis[0]);
                c2 && a3.render(c2.min, c2.max);
              }), h(this.chart, "getMargins", function() {
                var a3 = this.navigator, c2 = a3.opposite ? "plotTop" : "marginBottom";
                this.inverted && (c2 = a3.opposite ? "marginRight" : "plotLeft");
                this[c2] = (this[c2] || 0) + (a3.navigatorEnabled || !this.inverted ? a3.outlineHeight : 0) + a3.navigatorOptions.margin;
              }));
            };
            e.prototype.destroy = function() {
              var a3 = this;
              this.removeEvents();
              this.xAxis && (D(this.chart.xAxis, this.xAxis), D(this.chart.axes, this.xAxis));
              this.yAxis && (D(this.chart.yAxis, this.yAxis), D(this.chart.axes, this.yAxis));
              (this.series || []).forEach(function(a4) {
                a4.destroy && a4.destroy();
              });
              "series xAxis yAxis shades outline scrollbarTrack scrollbarRifles scrollbarGroup scrollbar navigatorGroup rendered".split(" ").forEach(function(b) {
                a3[b] && a3[b].destroy && a3[b].destroy();
                a3[b] = null;
              });
              [this.handles].forEach(function(a4) {
                f(a4);
              });
            };
            return e;
          }();
        }
      );
      J(a, "Stock/RangeSelector/RangeSelectorDefaults.js", [], function() {
        return { lang: { rangeSelectorZoom: "Zoom", rangeSelectorFrom: "", rangeSelectorTo: "→" }, rangeSelector: {
          allButtonsEnabled: false,
          buttons: void 0,
          buttonSpacing: 5,
          dropdown: "responsive",
          enabled: void 0,
          verticalAlign: "top",
          buttonTheme: { width: 28, height: 18, padding: 2, zIndex: 7 },
          floating: false,
          x: 0,
          y: 0,
          height: void 0,
          inputBoxBorderColor: "none",
          inputBoxHeight: 17,
          inputBoxWidth: void 0,
          inputDateFormat: "%b %e, %Y",
          inputDateParser: void 0,
          inputEditDateFormat: "%Y-%m-%d",
          inputEnabled: true,
          inputPosition: { align: "right", x: 0, y: 0 },
          inputSpacing: 5,
          selected: void 0,
          buttonPosition: { align: "left", x: 0, y: 0 },
          inputStyle: { color: "#335cad", cursor: "pointer" },
          labelStyle: { color: "#666666" }
        } };
      });
      J(a, "Stock/RangeSelector/RangeSelectorComposition.js", [a["Core/Defaults.js"], a["Stock/RangeSelector/RangeSelectorDefaults.js"], a["Core/Utilities.js"]], function(a2, q, A) {
        function v() {
          var a3 = this.range, c2 = a3.type, e = this.max, b = this.chart.time, d = function(a4, d2) {
            var e2 = "year" === c2 ? "FullYear" : "Month", g = new b.Date(a4), f3 = b.get(e2, g);
            b.set(e2, g, f3 + d2);
            f3 === b.get(e2, g) && b.set("Date", g, 0);
            return g.getTime() - a4;
          };
          if (G(a3)) {
            var f2 = e - a3;
            var h2 = a3;
          } else
            a3 && (f2 = e + d(e, -(a3.count || 1)), this.chart && (this.chart.fixedRange = e - f2));
          var l2 = K(
            this.dataMin,
            Number.MIN_VALUE
          );
          G(f2) || (f2 = l2);
          f2 <= l2 && (f2 = l2, "undefined" === typeof h2 && (h2 = d(f2, a3.count)), this.newMax = Math.min(f2 + h2, K(this.dataMax, Number.MAX_VALUE)));
          G(e) ? !G(a3) && a3 && a3._offsetMin && (f2 += a3._offsetMin) : f2 = void 0;
          return f2;
        }
        function B() {
          this.options.rangeSelector && this.options.rangeSelector.enabled && (this.rangeSelector = new w(this));
        }
        function C() {
          var a3 = this.axes, c2 = this.rangeSelector;
          c2 && (G(c2.deferredYTDClick) && (c2.clickButton(c2.deferredYTDClick), delete c2.deferredYTDClick), a3.forEach(function(a4) {
            a4.updateNames();
            a4.setScale();
          }), this.getAxisMargins(), c2.render(), a3 = c2.options.verticalAlign, c2.options.floating || ("bottom" === a3 ? this.extraBottomMargin = true : "middle" !== a3 && (this.extraTopMargin = true)));
        }
        function F(a3) {
          var c2, e, b, d, f2 = a3.rangeSelector, h2 = function() {
            f2 && (c2 = a3.xAxis[0].getExtremes(), e = a3.legend, d = f2 && f2.options.verticalAlign, G(c2.min) && f2.render(c2.min, c2.max), e.display && "top" === d && d === e.options.verticalAlign && (b = H(a3.spacingBox), b.y = "vertical" === e.options.layout ? a3.plotTop : b.y + f2.getHeight(), e.group.placed = false, e.align(b)));
          };
          f2 && (D(y, function(b2) {
            return b2[0] === a3;
          }) || y.push([a3, [l(a3.xAxis[0], "afterSetExtremes", function(a4) {
            f2 && f2.render(a4.min, a4.max);
          }), l(a3, "redraw", h2)]]), h2());
        }
        function x() {
          for (var a3 = 0, c2 = y.length; a3 < c2; ++a3) {
            var e = y[a3];
            if (e[0] === this) {
              e[1].forEach(function(a4) {
                return a4();
              });
              y.splice(a3, 1);
              break;
            }
          }
        }
        function u() {
          var a3 = this.rangeSelector;
          a3 && (a3 = a3.getHeight(), this.extraTopMargin && (this.plotTop += a3), this.extraBottomMargin && (this.marginBottom += a3));
        }
        function n() {
          var a3 = this.rangeSelector;
          a3 && !a3.options.floating && (a3.render(), a3 = a3.options.verticalAlign, "bottom" === a3 ? this.extraBottomMargin = true : "middle" !== a3 && (this.extraTopMargin = true));
        }
        function c(a3) {
          var c2 = a3.options.rangeSelector;
          a3 = this.extraBottomMargin;
          var e = this.extraTopMargin, b = this.rangeSelector;
          c2 && c2.enabled && !p(b) && this.options.rangeSelector && (this.options.rangeSelector.enabled = true, this.rangeSelector = b = new w(this));
          this.extraTopMargin = this.extraBottomMargin = false;
          b && (F(this), c2 = c2 && c2.verticalAlign || b.options && b.options.verticalAlign, b.options.floating || ("bottom" === c2 ? this.extraBottomMargin = true : "middle" !== c2 && (this.extraTopMargin = true)), this.extraBottomMargin !== a3 || this.extraTopMargin !== e) && (this.isDirtyBox = true);
        }
        var h = a2.defaultOptions, m = a2.setOptions, l = A.addEvent, p = A.defined, f = A.extend, D = A.find, G = A.isNumber, H = A.merge, K = A.pick, y = [], t = [], w;
        return { compose: function(a3, g, e) {
          w = e;
          -1 === t.indexOf(a3) && (t.push(a3), a3.prototype.minFromRange = v);
          -1 === t.indexOf(g) && (t.push(g), l(g, "afterGetContainer", B), l(g, "beforeRender", C), l(g, "destroy", x), l(g, "getMargins", u), l(g, "render", n), l(g, "update", c), g.prototype.callbacks.push(F));
          -1 === t.indexOf(m) && (f(
            h,
            { rangeSelector: q.rangeSelector }
          ), f(h.lang, q.lang));
        } };
      });
      J(a, "Stock/RangeSelector/RangeSelector.js", [a["Core/Axis/Axis.js"], a["Core/Defaults.js"], a["Core/Globals.js"], a["Stock/RangeSelector/RangeSelectorComposition.js"], a["Core/Renderer/SVG/SVGElement.js"], a["Core/Utilities.js"]], function(a2, q, A, E, B, C) {
        function v(a3) {
          if (-1 !== a3.indexOf("%L"))
            return "text";
          var c2 = "aAdewbBmoyY".split("").some(function(b) {
            return -1 !== a3.indexOf("%" + b);
          }), e = "HkIlMS".split("").some(function(b) {
            return -1 !== a3.indexOf("%" + b);
          });
          return c2 && e ? "datetime-local" : c2 ? "date" : e ? "time" : "text";
        }
        var x = q.defaultOptions, u = C.addEvent, n = C.createElement, c = C.css, h = C.defined, m = C.destroyObjectProperties, l = C.discardElement, p = C.extend, f = C.fireEvent, D = C.isNumber, G = C.merge, H = C.objectEach, K = C.pad, y = C.pick, t = C.pInt, w = C.splat;
        q = function() {
          function k(a3) {
            this.buttons = void 0;
            this.buttonOptions = k.prototype.defaultButtons;
            this.initialButtonGroupWidth = 0;
            this.options = void 0;
            this.chart = a3;
            this.init(a3);
          }
          k.compose = function(a3, c2) {
            E.compose(a3, c2, k);
          };
          k.prototype.clickButton = function(c2, e) {
            var b = this.chart, d = this.buttonOptions[c2], g = b.xAxis[0], k2 = b.scroller && b.scroller.getUnionExtremes() || g || {}, l2 = d.type, m2 = d.dataGrouping, p2 = k2.dataMin, n2 = k2.dataMax, t2 = g && Math.round(Math.min(g.max, y(n2, g.max)));
            k2 = d._range;
            var q2, v2 = true;
            if (null !== p2 && null !== n2) {
              b.fixedRange = k2;
              this.setSelected(c2);
              m2 && (this.forcedDataGrouping = true, a2.prototype.setDataGrouping.call(g || { chart: this.chart }, m2, false), this.frozenStates = d.preserveDataGrouping);
              if ("month" === l2 || "year" === l2)
                if (g) {
                  l2 = { range: d, max: t2, chart: b, dataMin: p2, dataMax: n2 };
                  var x2 = g.minFromRange.call(l2);
                  D(l2.newMax) && (t2 = l2.newMax);
                  v2 = false;
                } else
                  k2 = d;
              else if (k2)
                x2 = Math.max(t2 - k2, p2), t2 = Math.min(x2 + k2, n2), v2 = false;
              else if ("ytd" === l2)
                if (g) {
                  if ("undefined" === typeof n2 || "undefined" === typeof p2)
                    p2 = Number.MAX_VALUE, n2 = Number.MIN_VALUE, b.series.forEach(function(a3) {
                      if (a3 = a3.xData)
                        p2 = Math.min(a3[0], p2), n2 = Math.max(a3[a3.length - 1], n2);
                    }), e = false;
                  l2 = this.getYTDExtremes(n2, p2, b.time.useUTC);
                  x2 = q2 = l2.min;
                  t2 = l2.max;
                } else {
                  this.deferredYTDClick = c2;
                  return;
                }
              else
                "all" === l2 && g && (b.navigator && b.navigator.baseSeries[0] && (b.navigator.baseSeries[0].xAxis.options.range = void 0), x2 = p2, t2 = n2);
              v2 && d._offsetMin && h(x2) && (x2 += d._offsetMin);
              d._offsetMax && h(t2) && (t2 += d._offsetMax);
              this.dropdown && (this.dropdown.selectedIndex = c2 + 1);
              if (g)
                g.setExtremes(x2, t2, y(e, true), void 0, { trigger: "rangeSelectorButton", rangeSelectorButton: d });
              else {
                var A2 = w(b.options.xAxis)[0];
                var B2 = A2.range;
                A2.range = k2;
                var C2 = A2.min;
                A2.min = q2;
                u(b, "load", function() {
                  A2.range = B2;
                  A2.min = C2;
                });
              }
              f(this, "afterBtnClick");
            }
          };
          k.prototype.setSelected = function(a3) {
            this.selected = this.options.selected = a3;
          };
          k.prototype.init = function(a3) {
            var c2 = this, b = a3.options.rangeSelector, d = b.buttons || c2.defaultButtons.slice(), g = b.selected, h2 = function() {
              var a4 = c2.minInput, b2 = c2.maxInput;
              a4 && a4.blur && f(a4, "blur");
              b2 && b2.blur && f(b2, "blur");
            };
            c2.chart = a3;
            c2.options = b;
            c2.buttons = [];
            c2.buttonOptions = d;
            this.eventsToUnbind = [];
            this.eventsToUnbind.push(u(a3.container, "mousedown", h2));
            this.eventsToUnbind.push(u(a3, "resize", h2));
            d.forEach(c2.computeButtonRange);
            "undefined" !== typeof g && d[g] && this.clickButton(g, false);
            this.eventsToUnbind.push(u(a3, "load", function() {
              a3.xAxis && a3.xAxis[0] && u(a3.xAxis[0], "setExtremes", function(b2) {
                this.max - this.min !== a3.fixedRange && "rangeSelectorButton" !== b2.trigger && "updatedData" !== b2.trigger && c2.forcedDataGrouping && !c2.frozenStates && this.setDataGrouping(false, false);
              });
            }));
          };
          k.prototype.updateButtonStates = function() {
            var a3 = this, c2 = this.chart, b = this.dropdown, d = c2.xAxis[0], f2 = Math.round(d.max - d.min), h2 = !d.hasVisibleSeries, k2 = c2.scroller && c2.scroller.getUnionExtremes() || d, l2 = k2.dataMin, m2 = k2.dataMax;
            c2 = a3.getYTDExtremes(m2, l2, c2.time.useUTC);
            var p2 = c2.min, n2 = c2.max, t2 = a3.selected, u2 = a3.options.allButtonsEnabled, q2 = a3.buttons, w2 = D(t2);
            a3.buttonOptions.forEach(function(c3, e) {
              var g = c3._range, k3 = c3.type, r = c3.count || 1, z = q2[e], v2 = c3._offsetMax - c3._offsetMin, x2 = e === t2, y2 = g > m2 - l2, A2 = g < d.minRange;
              c3 = 0;
              var B2 = false, D2 = false;
              g = g === f2;
              ("month" === k3 || "year" === k3) && f2 + 36e5 >= 864e5 * { month: 28, year: 365 }[k3] * r - v2 && f2 - 36e5 <= 864e5 * { month: 31, year: 366 }[k3] * r + v2 ? g = true : "ytd" === k3 ? (g = n2 - p2 + v2 === f2, B2 = !x2) : "all" === k3 && (g = d.max - d.min >= m2 - l2, D2 = !x2 && w2 && g);
              k3 = !u2 && (y2 || A2 || D2 || h2);
              r = x2 && g || g && !w2 && !B2 || x2 && a3.frozenStates;
              k3 ? c3 = 3 : r && (w2 = true, c3 = 2);
              z.state !== c3 && (z.setState(c3), b && (b.options[e + 1].disabled = k3, 2 === c3 && (b.selectedIndex = e + 1)), 0 === c3 && t2 === e && a3.setSelected());
            });
          };
          k.prototype.computeButtonRange = function(a3) {
            var c2 = a3.type, b = a3.count || 1, d = { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5 };
            if (d[c2])
              a3._range = d[c2] * b;
            else if ("month" === c2 || "year" === c2)
              a3._range = 864e5 * { month: 30, year: 365 }[c2] * b;
            a3._offsetMin = y(a3.offsetMin, 0);
            a3._offsetMax = y(a3.offsetMax, 0);
            a3._range += a3._offsetMax - a3._offsetMin;
          };
          k.prototype.getInputValue = function(a3) {
            a3 = "min" === a3 ? this.minInput : this.maxInput;
            var c2 = this.chart.options.rangeSelector, b = this.chart.time;
            return a3 ? ("text" === a3.type && c2.inputDateParser || this.defaultInputDateParser)(a3.value, b.useUTC, b) : 0;
          };
          k.prototype.setInputValue = function(a3, c2) {
            var b = this.options, d = this.chart.time, e = "min" === a3 ? this.minInput : this.maxInput;
            a3 = "min" === a3 ? this.minDateBox : this.maxDateBox;
            if (e) {
              var g = e.getAttribute("data-hc-time");
              g = h(g) ? Number(g) : void 0;
              h(c2) && (h(g) && e.setAttribute("data-hc-time-previous", g), e.setAttribute("data-hc-time", c2), g = c2);
              e.value = d.dateFormat(this.inputTypeFormats[e.type] || b.inputEditDateFormat, g);
              a3 && a3.attr({ text: d.dateFormat(b.inputDateFormat, g) });
            }
          };
          k.prototype.setInputExtremes = function(a3, c2, b) {
            if (a3 = "min" === a3 ? this.minInput : this.maxInput) {
              var d = this.inputTypeFormats[a3.type], e = this.chart.time;
              d && (c2 = e.dateFormat(d, c2), a3.min !== c2 && (a3.min = c2), b = e.dateFormat(d, b), a3.max !== b && (a3.max = b));
            }
          };
          k.prototype.showInput = function(a3) {
            var e = "min" === a3 ? this.minDateBox : this.maxDateBox;
            if ((a3 = "min" === a3 ? this.minInput : this.maxInput) && e && this.inputGroup) {
              var b = "text" === a3.type, d = this.inputGroup, g = d.translateX;
              d = d.translateY;
              var f2 = this.options.inputBoxWidth;
              c(a3, { width: b ? e.width + (f2 ? -2 : 20) + "px" : "auto", height: b ? e.height - 2 + "px" : "auto", border: "2px solid silver" });
              b && f2 ? c(a3, { left: g + e.x + "px", top: d + "px" }) : c(a3, { left: Math.min(Math.round(e.x + g - (a3.offsetWidth - e.width) / 2), this.chart.chartWidth - a3.offsetWidth) + "px", top: d - (a3.offsetHeight - e.height) / 2 + "px" });
            }
          };
          k.prototype.hideInput = function(a3) {
            (a3 = "min" === a3 ? this.minInput : this.maxInput) && c(a3, { top: "-9999em", border: 0, width: "1px", height: "1px" });
          };
          k.prototype.defaultInputDateParser = function(a3, c2, b) {
            var d = a3.split("/").join("-").split(" ").join("T");
            -1 === d.indexOf("T") && (d += "T00:00");
            if (c2)
              d += "Z";
            else {
              var e;
              if (e = A.isSafari)
                e = d, e = !(6 < e.length && (e.lastIndexOf("-") === e.length - 6 || e.lastIndexOf("+") === e.length - 6));
              e && (e = new Date(d).getTimezoneOffset() / 60, d += 0 >= e ? "+".concat(K(-e), ":00") : "-".concat(K(e), ":00"));
            }
            d = Date.parse(d);
            D(d) || (a3 = a3.split("-"), d = Date.UTC(t(a3[0]), t(a3[1]) - 1, t(a3[2])));
            b && c2 && D(d) && (d += b.getTimezoneOffset(d));
            return d;
          };
          k.prototype.drawInput = function(a3) {
            function e() {
              var c2 = f2.maxInput, d2 = f2.minInput, e2 = b.xAxis[0], g2 = b.scroller && b.scroller.xAxis ? b.scroller.xAxis : e2, h3 = g2.dataMin;
              g2 = g2.dataMax;
              var k3 = f2.getInputValue(a3);
              k3 !== Number(u2.getAttribute("data-hc-time-previous")) && D(k3) && (u2.setAttribute("data-hc-time-previous", k3), m2 && c2 && D(h3) ? k3 > Number(c2.getAttribute("data-hc-time")) ? k3 = void 0 : k3 < h3 && (k3 = h3) : d2 && D(g2) && (k3 < Number(d2.getAttribute("data-hc-time")) ? k3 = void 0 : k3 > g2 && (k3 = g2)), "undefined" !== typeof k3 && e2.setExtremes(m2 ? k3 : e2.min, m2 ? e2.max : k3, void 0, void 0, { trigger: "rangeSelectorInput" }));
            }
            var b = this.chart, d = this.div, g = this.inputGroup, f2 = this, h2 = b.renderer.style || {}, k2 = b.renderer, l2 = b.options.rangeSelector, m2 = "min" === a3, t2 = x.lang[m2 ? "rangeSelectorFrom" : "rangeSelectorTo"] || "";
            t2 = k2.label(t2, 0).addClass("highcharts-range-label").attr({ padding: t2 ? 2 : 0, height: t2 ? l2.inputBoxHeight : 0 }).add(g);
            k2 = k2.label("", 0).addClass("highcharts-range-input").attr({ padding: 2, width: l2.inputBoxWidth, height: l2.inputBoxHeight, "text-align": "center" }).on("click", function() {
              f2.showInput(a3);
              f2[a3 + "Input"].focus();
            });
            b.styledMode || k2.attr({ stroke: l2.inputBoxBorderColor, "stroke-width": 1 });
            k2.add(g);
            var u2 = n(
              "input",
              { name: a3, className: "highcharts-range-selector" },
              void 0,
              d
            );
            u2.setAttribute("type", v(l2.inputDateFormat || "%b %e, %Y"));
            b.styledMode || (t2.css(G(h2, l2.labelStyle)), k2.css(G({ color: "#333333" }, h2, l2.inputStyle)), c(u2, p({ position: "absolute", border: 0, boxShadow: "0 0 15px rgba(0,0,0,0.3)", width: "1px", height: "1px", padding: 0, textAlign: "center", fontSize: h2.fontSize, fontFamily: h2.fontFamily, top: "-9999em" }, l2.inputStyle)));
            u2.onfocus = function() {
              f2.showInput(a3);
            };
            u2.onblur = function() {
              u2 === A.doc.activeElement && e();
              f2.hideInput(a3);
              f2.setInputValue(a3);
              u2.blur();
            };
            var q2 = false;
            u2.onchange = function() {
              q2 || (e(), f2.hideInput(a3), u2.blur());
            };
            u2.onkeypress = function(a4) {
              13 === a4.keyCode && e();
            };
            u2.onkeydown = function(a4) {
              q2 = true;
              38 !== a4.keyCode && 40 !== a4.keyCode || e();
            };
            u2.onkeyup = function() {
              q2 = false;
            };
            return { dateBox: k2, input: u2, label: t2 };
          };
          k.prototype.getPosition = function() {
            var a3 = this.chart, c2 = a3.options.rangeSelector;
            a3 = "top" === c2.verticalAlign ? a3.plotTop - a3.axisOffset[0] : 0;
            return { buttonTop: a3 + c2.buttonPosition.y, inputTop: a3 + c2.inputPosition.y - 10 };
          };
          k.prototype.getYTDExtremes = function(a3, c2, b) {
            var d = this.chart.time, e = new d.Date(a3), g = d.get("FullYear", e);
            b = b ? d.Date.UTC(g, 0, 1) : +new d.Date(g, 0, 1);
            c2 = Math.max(c2, b);
            e = e.getTime();
            return { max: Math.min(a3 || e, e), min: c2 };
          };
          k.prototype.render = function(a3, c2) {
            var b = this.chart, d = b.renderer, e = b.container, g = b.options, f2 = g.rangeSelector, k2 = y(g.chart.style && g.chart.style.zIndex, 0) + 1;
            g = f2.inputEnabled;
            if (false !== f2.enabled) {
              this.rendered || (this.group = d.g("range-selector-group").attr({ zIndex: 7 }).add(), this.div = n("div", void 0, { position: "relative", height: 0, zIndex: k2 }), this.buttonOptions.length && this.renderButtons(), e.parentNode && e.parentNode.insertBefore(this.div, e), g && (this.inputGroup = d.g("input-group").add(this.group), d = this.drawInput("min"), this.minDateBox = d.dateBox, this.minLabel = d.label, this.minInput = d.input, d = this.drawInput("max"), this.maxDateBox = d.dateBox, this.maxLabel = d.label, this.maxInput = d.input));
              if (g && (this.setInputValue("min", a3), this.setInputValue("max", c2), a3 = b.scroller && b.scroller.getUnionExtremes() || b.xAxis[0] || {}, h(a3.dataMin) && h(a3.dataMax) && (b = b.xAxis[0].minRange || 0, this.setInputExtremes(
                "min",
                a3.dataMin,
                Math.min(a3.dataMax, this.getInputValue("max")) - b
              ), this.setInputExtremes("max", Math.max(a3.dataMin, this.getInputValue("min")) + b, a3.dataMax)), this.inputGroup)) {
                var l2 = 0;
                [this.minLabel, this.minDateBox, this.maxLabel, this.maxDateBox].forEach(function(a4) {
                  if (a4) {
                    var b2 = a4.getBBox().width;
                    b2 && (a4.attr({ x: l2 }), l2 += b2 + f2.inputSpacing);
                  }
                });
              }
              this.alignElements();
              this.rendered = true;
            }
          };
          k.prototype.renderButtons = function() {
            var a3 = this, c2 = this.buttons, b = this.options, d = x.lang, h2 = this.chart.renderer, k2 = G(b.buttonTheme), l2 = k2 && k2.states, m2 = k2.width || 28;
            delete k2.width;
            delete k2.states;
            this.buttonGroup = h2.g("range-selector-buttons").add(this.group);
            var p2 = this.dropdown = n("select", void 0, { position: "absolute", width: "1px", height: "1px", padding: 0, border: 0, top: "-9999em", cursor: "pointer", opacity: 1e-4 }, this.div);
            u(p2, "touchstart", function() {
              p2.style.fontSize = "16px";
            });
            [[A.isMS ? "mouseover" : "mouseenter"], [A.isMS ? "mouseout" : "mouseleave"], ["change", "click"]].forEach(function(b2) {
              var d2 = b2[0], e = b2[1];
              u(p2, d2, function() {
                var b3 = c2[a3.currentButtonIndex()];
                b3 && f(
                  b3.element,
                  e || d2
                );
              });
            });
            this.zoomText = h2.label(d && d.rangeSelectorZoom || "", 0).attr({ padding: b.buttonTheme.padding, height: b.buttonTheme.height, paddingLeft: 0, paddingRight: 0 }).add(this.buttonGroup);
            this.chart.styledMode || (this.zoomText.css(b.labelStyle), k2["stroke-width"] = y(k2["stroke-width"], 0));
            n("option", { textContent: this.zoomText.textStr, disabled: true }, void 0, p2);
            this.buttonOptions.forEach(function(b2, d2) {
              n("option", { textContent: b2.title || b2.text }, void 0, p2);
              c2[d2] = h2.button(b2.text, 0, 0, function(c3) {
                var e = b2.events && b2.events.click, g;
                e && (g = e.call(b2, c3));
                false !== g && a3.clickButton(d2);
                a3.isActive = true;
              }, k2, l2 && l2.hover, l2 && l2.select, l2 && l2.disabled).attr({ "text-align": "center", width: m2 }).add(a3.buttonGroup);
              b2.title && c2[d2].attr("title", b2.title);
            });
          };
          k.prototype.alignElements = function() {
            var a3 = this, c2 = this.buttonGroup, b = this.buttons, d = this.chart, f2 = this.group, h2 = this.inputGroup, k2 = this.options, l2 = this.zoomText, m2 = d.options, p2 = m2.exporting && false !== m2.exporting.enabled && m2.navigation && m2.navigation.buttonOptions;
            m2 = k2.buttonPosition;
            var n2 = k2.inputPosition, t2 = k2.verticalAlign, u2 = function(b2, c3) {
              return p2 && a3.titleCollision(d) && "top" === t2 && "right" === c3.align && c3.y - b2.getBBox().height - 12 < (p2.y || 0) + (p2.height || 0) + d.spacing[0] ? -40 : 0;
            }, q2 = d.plotLeft;
            if (f2 && m2 && n2) {
              var w2 = m2.x - d.spacing[3];
              if (c2) {
                this.positionButtons();
                if (!this.initialButtonGroupWidth) {
                  var v2 = 0;
                  l2 && (v2 += l2.getBBox().width + 5);
                  b.forEach(function(a4, c3) {
                    v2 += a4.width;
                    c3 !== b.length - 1 && (v2 += k2.buttonSpacing);
                  });
                  this.initialButtonGroupWidth = v2;
                }
                q2 -= d.spacing[3];
                this.updateButtonStates();
                l2 = u2(c2, m2);
                this.alignButtonGroup(l2);
                f2.placed = c2.placed = d.hasLoaded;
              }
              c2 = 0;
              h2 && (c2 = u2(h2, n2), "left" === n2.align ? w2 = q2 : "right" === n2.align && (w2 = -Math.max(d.axisOffset[1], -c2)), h2.align({ y: n2.y, width: h2.getBBox().width, align: n2.align, x: n2.x + w2 - 2 }, true, d.spacingBox), h2.placed = d.hasLoaded);
              this.handleCollision(c2);
              f2.align({ verticalAlign: t2 }, true, d.spacingBox);
              h2 = f2.alignAttr.translateY;
              c2 = f2.getBBox().height + 20;
              u2 = 0;
              "bottom" === t2 && (u2 = (u2 = d.legend && d.legend.options) && "bottom" === u2.verticalAlign && u2.enabled && !u2.floating ? d.legend.legendHeight + y(u2.margin, 10) : 0, c2 = c2 + u2 - 20, u2 = h2 - c2 - (k2.floating ? 0 : k2.y) - (d.titleOffset ? d.titleOffset[2] : 0) - 10);
              if ("top" === t2)
                k2.floating && (u2 = 0), d.titleOffset && d.titleOffset[0] && (u2 = d.titleOffset[0]), u2 += d.margin[0] - d.spacing[0] || 0;
              else if ("middle" === t2) {
                if (n2.y === m2.y)
                  u2 = h2;
                else if (n2.y || m2.y)
                  u2 = 0 > n2.y || 0 > m2.y ? u2 - Math.min(n2.y, m2.y) : h2 - c2;
              }
              f2.translate(k2.x, k2.y + Math.floor(u2));
              m2 = this.minInput;
              n2 = this.maxInput;
              h2 = this.dropdown;
              k2.inputEnabled && m2 && n2 && (m2.style.marginTop = f2.translateY + "px", n2.style.marginTop = f2.translateY + "px");
              h2 && (h2.style.marginTop = f2.translateY + "px");
            }
          };
          k.prototype.alignButtonGroup = function(a3, c2) {
            var b = this.chart, d = this.buttonGroup, e = this.options.buttonPosition, g = b.plotLeft - b.spacing[3], f2 = e.x - b.spacing[3];
            "right" === e.align ? f2 += a3 - g : "center" === e.align && (f2 -= g / 2);
            d && d.align({ y: e.y, width: y(c2, this.initialButtonGroupWidth), align: e.align, x: f2 }, true, b.spacingBox);
          };
          k.prototype.positionButtons = function() {
            var a3 = this.buttons, c2 = this.chart, b = this.options, d = this.zoomText, f2 = c2.hasLoaded ? "animate" : "attr", h2 = b.buttonPosition, k2 = c2 = c2.plotLeft;
            d && "hidden" !== d.visibility && (d[f2]({ x: y(c2 + h2.x, c2) }), k2 += h2.x + d.getBBox().width + 5);
            d = 0;
            for (h2 = this.buttonOptions.length; d < h2; ++d)
              if ("hidden" !== a3[d].visibility)
                a3[d][f2]({ x: k2 }), k2 += a3[d].width + b.buttonSpacing;
              else
                a3[d][f2]({ x: c2 });
          };
          k.prototype.handleCollision = function(a3) {
            var c2 = this, b = this.chart, d = this.buttonGroup, g = this.inputGroup, f2 = this.options, h2 = f2.buttonPosition, k2 = f2.dropdown, l2 = f2.inputPosition;
            f2 = function() {
              var a4 = 0;
              c2.buttons.forEach(function(b2) {
                b2 = b2.getBBox();
                b2.width > a4 && (a4 = b2.width);
              });
              return a4;
            };
            var m2 = function(b2) {
              if (g && d) {
                var c3 = g.alignAttr.translateX + g.alignOptions.x - a3 + g.getBBox().x + 2, e = g.alignOptions.width, f3 = d.alignAttr.translateX + d.getBBox().x;
                return f3 + b2 > c3 && c3 + e > f3 && h2.y < l2.y + g.getBBox().height;
              }
              return false;
            }, p2 = function() {
              g && d && g.attr({ translateX: g.alignAttr.translateX + (b.axisOffset[1] >= -a3 ? 0 : -a3), translateY: g.alignAttr.translateY + d.getBBox().height + 10 });
            };
            if (d) {
              if ("always" === k2) {
                this.collapseButtons(a3);
                m2(f2()) && p2();
                return;
              }
              "never" === k2 && this.expandButtons();
            }
            g && d ? l2.align === h2.align || m2(this.initialButtonGroupWidth + 20) ? "responsive" === k2 ? (this.collapseButtons(a3), m2(f2()) && p2()) : p2() : "responsive" === k2 && this.expandButtons() : d && "responsive" === k2 && (this.initialButtonGroupWidth > b.plotWidth ? this.collapseButtons(a3) : this.expandButtons());
          };
          k.prototype.collapseButtons = function(a3) {
            var c2 = this.buttons, b = this.buttonOptions, d = this.chart, g = this.dropdown, f2 = this.options, h2 = this.zoomText, k2 = d.userOptions.rangeSelector && d.userOptions.rangeSelector.buttonTheme || {}, l2 = function(a4) {
              return { text: a4 ? "" + a4 + " ▾" : "▾", width: "auto", paddingLeft: y(f2.buttonTheme.paddingLeft, k2.padding, 8), paddingRight: y(f2.buttonTheme.paddingRight, k2.padding, 8) };
            };
            h2 && h2.hide();
            var m2 = false;
            b.forEach(function(a4, b2) {
              b2 = c2[b2];
              2 !== b2.state ? b2.hide() : (b2.show(), b2.attr(l2(a4.text)), m2 = true);
            });
            m2 || (g && (g.selectedIndex = 0), c2[0].show(), c2[0].attr(l2(this.zoomText && this.zoomText.textStr)));
            b = f2.buttonPosition.align;
            this.positionButtons();
            "right" !== b && "center" !== b || this.alignButtonGroup(a3, c2[this.currentButtonIndex()].getBBox().width);
            this.showDropdown();
          };
          k.prototype.expandButtons = function() {
            var a3 = this.buttons, c2 = this.buttonOptions, b = this.options, d = this.zoomText;
            this.hideDropdown();
            d && d.show();
            c2.forEach(function(c3, d2) {
              d2 = a3[d2];
              d2.show();
              d2.attr({
                text: c3.text,
                width: b.buttonTheme.width || 28,
                paddingLeft: y(b.buttonTheme.paddingLeft, "unset"),
                paddingRight: y(b.buttonTheme.paddingRight, "unset")
              });
              2 > d2.state && d2.setState(0);
            });
            this.positionButtons();
          };
          k.prototype.currentButtonIndex = function() {
            var a3 = this.dropdown;
            return a3 && 0 < a3.selectedIndex ? a3.selectedIndex - 1 : 0;
          };
          k.prototype.showDropdown = function() {
            var a3 = this.buttonGroup, e = this.buttons, b = this.chart, d = this.dropdown;
            if (a3 && d) {
              var f2 = a3.translateX;
              a3 = a3.translateY;
              e = e[this.currentButtonIndex()].getBBox();
              c(d, { left: b.plotLeft + f2 + "px", top: a3 + 0.5 + "px", width: e.width + "px", height: e.height + "px" });
              this.hasVisibleDropdown = true;
            }
          };
          k.prototype.hideDropdown = function() {
            var a3 = this.dropdown;
            a3 && (c(a3, { top: "-9999em", width: "1px", height: "1px" }), this.hasVisibleDropdown = false);
          };
          k.prototype.getHeight = function() {
            var a3 = this.options, c2 = this.group, b = a3.y, d = a3.buttonPosition.y, f2 = a3.inputPosition.y;
            if (a3.height)
              return a3.height;
            this.alignElements();
            a3 = c2 ? c2.getBBox(true).height + 13 + b : 0;
            c2 = Math.min(f2, d);
            if (0 > f2 && 0 > d || 0 < f2 && 0 < d)
              a3 += Math.abs(c2);
            return a3;
          };
          k.prototype.titleCollision = function(a3) {
            return !(a3.options.title.text || a3.options.subtitle.text);
          };
          k.prototype.update = function(a3) {
            var c2 = this.chart;
            G(true, c2.options.rangeSelector, a3);
            this.destroy();
            this.init(c2);
            this.render();
          };
          k.prototype.destroy = function() {
            var a3 = this, c2 = a3.minInput, b = a3.maxInput;
            a3.eventsToUnbind && (a3.eventsToUnbind.forEach(function(a4) {
              return a4();
            }), a3.eventsToUnbind = void 0);
            m(a3.buttons);
            c2 && (c2.onfocus = c2.onblur = c2.onchange = null);
            b && (b.onfocus = b.onblur = b.onchange = null);
            H(a3, function(b2, c3) {
              b2 && "chart" !== c3 && (b2 instanceof B ? b2.destroy() : b2 instanceof X.HTMLElement && l(b2));
              b2 !== k.prototype[c3] && (a3[c3] = null);
            }, this);
          };
          return k;
        }();
        p(q.prototype, { defaultButtons: [{ type: "month", count: 1, text: "1m", title: "View 1 month" }, { type: "month", count: 3, text: "3m", title: "View 3 months" }, { type: "month", count: 6, text: "6m", title: "View 6 months" }, { type: "ytd", text: "YTD", title: "View year to date" }, { type: "year", count: 1, text: "1y", title: "View 1 year" }, { type: "all", text: "All", title: "View all" }], inputTypeFormats: { "datetime-local": "%Y-%m-%dT%H:%M:%S", date: "%Y-%m-%d", time: "%H:%M:%S" } });
        "";
        return q;
      });
      J(a, "Core/Axis/OrdinalAxis.js", [a["Core/Axis/Axis.js"], a["Core/Globals.js"], a["Core/Series/Series.js"], a["Core/Utilities.js"]], function(a2, q, A, E) {
        var v = E.addEvent, C = E.correctFloat, F = E.css, x = E.defined, u = E.error, n = E.pick, c = E.timeUnits, h = [], m;
        (function(a3) {
          function l(a4, d, e2, g2, f2, h2, k2) {
            void 0 === f2 && (f2 = []);
            void 0 === h2 && (h2 = 0);
            var b = {}, l2 = this.options.tickPixelInterval, m3 = this.chart.time, p = [], r, n2, t2 = 0, q2 = [], w2 = -Number.MAX_VALUE;
            if (!this.options.ordinal && !this.options.breaks || !f2 || 3 > f2.length || "undefined" === typeof d)
              return m3.getTimeTicks.apply(m3, arguments);
            var z = f2.length;
            for (r = 0; r < z; r++) {
              var v2 = r && f2[r - 1] > e2;
              f2[r] < d && (t2 = r);
              if (r === z - 1 || f2[r + 1] - f2[r] > 5 * h2 || v2) {
                if (f2[r] > w2) {
                  for (n2 = m3.getTimeTicks(a4, f2[t2], f2[r], g2); n2.length && n2[0] <= w2; )
                    n2.shift();
                  n2.length && (w2 = n2[n2.length - 1]);
                  p.push(q2.length);
                  q2 = q2.concat(n2);
                }
                t2 = r + 1;
              }
              if (v2)
                break;
            }
            if (n2) {
              n2 = n2.info;
              if (k2 && n2.unitRange <= c.hour) {
                r = q2.length - 1;
                for (t2 = 1; t2 < r; t2++)
                  if (m3.dateFormat("%d", q2[t2]) !== m3.dateFormat("%d", q2[t2 - 1])) {
                    b[q2[t2]] = "day";
                    var y2 = true;
                  }
                y2 && (b[q2[0]] = "day");
                n2.higherRanks = b;
              }
              n2.segmentStarts = p;
              q2.info = n2;
            } else
              u(12, false, this.chart);
            if (k2 && x(l2)) {
              n2 = q2.length;
              m3 = [];
              t2 = [];
              r = void 0;
              for (y2 = n2; y2--; )
                p = this.translate(q2[y2]), r && (t2[y2] = r - p), m3[y2] = r = p;
              t2.sort();
              t2 = t2[Math.floor(t2.length / 2)];
              t2 < 0.6 * l2 && (t2 = null);
              y2 = q2[n2 - 1] > e2 ? n2 - 1 : n2;
              for (r = void 0; y2--; )
                p = m3[y2], n2 = Math.abs(r - p), r && n2 < 0.8 * l2 && (null === t2 || n2 < 0.8 * t2) ? (b[q2[y2]] && !b[q2[y2 + 1]] ? (n2 = y2 + 1, r = p) : n2 = y2, q2.splice(n2, 1)) : r = p;
            }
            return q2;
          }
          function f(a4) {
            var b = this.ordinal.positions;
            if (!b)
              return a4;
            var c2 = b.length - 1;
            if (0 > a4)
              a4 = b[0];
            else if (a4 > c2)
              a4 = b[c2];
            else {
              c2 = Math.floor(a4);
              var e2 = a4 - c2;
            }
            return "undefined" !== typeof e2 && "undefined" !== typeof b[c2] ? b[c2] + (e2 ? e2 * (b[c2 + 1] - b[c2]) : 0) : a4;
          }
          function m2(a4) {
            var b = this.ordinal, c2 = b.positions;
            if (!c2)
              return a4;
            var e2 = (a4 - (this.old ? this.old.min : this.min)) * (this.old ? this.old.transA : this.transA) + this.minPixelPadding;
            0 < e2 && e2 < this.left + this.len || (b.extendedOrdinalPositions || (b.extendedOrdinalPositions = b.getExtendedPositions()), c2 = b.extendedOrdinalPositions);
            if (c2 && c2.length) {
              a4 = b.getIndexOfPoint(e2, c2);
              b = C(a4 % 1);
              if (0 <= a4 && a4 < c2.length - 1)
                return c2[Math.floor(a4)] + b * (c2[Math.ceil(a4)] - c2[Math.floor(a4)]);
              b = c2.length;
              e2 = c2[0];
              c2 = c2[b - 1];
              var g2 = (c2 - e2) / (b - 1);
              return 0 > a4 ? e2 + g2 * a4 : c2 + g2 * (a4 - b);
            }
            return a4;
          }
          function B(b, c2) {
            var d = a3.Additions.findIndexOf(b, c2, true);
            return b[d] === c2 ? d : d + (c2 - b[d]) / (b[d + 1] - b[d]);
          }
          function E2() {
            this.ordinal || (this.ordinal = new a3.Additions(this));
          }
          function K() {
            this.isXAxis && x(this.options.overscroll) && this.max === this.dataMax && (!this.chart.mouseIsDown || this.isInternal) && (!this.eventArgs || this.eventArgs && "navigator" !== this.eventArgs.trigger) && (this.max += this.options.overscroll, !this.isInternal && x(this.userMin) && (this.min += this.options.overscroll));
          }
          function y() {
            this.horiz && !this.isDirty && (this.isDirty = this.isOrdinal && this.chart.navigator && !this.chart.navigator.adaptToUpdatedData);
          }
          function t() {
            this.ordinal && (this.ordinal.beforeSetTickPositions(), this.tickInterval = this.ordinal.postProcessTickInterval(this.tickInterval));
          }
          function w(a4) {
            var b = this.xAxis[0], c2 = b.options.overscroll, e2 = a4.originalEvent.chartX, g2 = this.options.chart.panning, f2 = false;
            if (g2 && "y" !== g2.type && b.options.ordinal && b.series.length) {
              var h2 = this.mouseDownX, k2 = b.getExtremes(), l2 = k2.dataMax, m3 = k2.min, p = k2.max, n2 = this.hoverPoints, t2 = b.closestPointRange || b.ordinal && b.ordinal.overscrollPointsRange;
              h2 = (h2 - e2) / (b.translationSlope * (b.ordinal.slope || t2));
              t2 = b.ordinal.getExtendedPositions();
              t2 = { ordinal: { positions: t2, extendedOrdinalPositions: t2 } };
              var u2 = b.index2val, q2 = b.val2lin, w2 = void 0, v2 = w2 = void 0, y2 = void 0;
              t2.ordinal.positions ? 1 < Math.abs(h2) && (n2 && n2.forEach(function(a5) {
                a5.setState();
              }), 0 > h2 ? (v2 = t2, y2 = b.ordinal.positions ? b : t2) : (v2 = b.ordinal.positions ? b : t2, y2 = t2), w2 = y2.ordinal.positions, l2 > w2[w2.length - 1] && w2.push(l2), this.fixedRange = p - m3, w2 = b.navigatorAxis.toFixedRange(void 0, void 0, u2.apply(v2, [q2.apply(v2, [m3, true]) + h2]), u2.apply(y2, [q2.apply(y2, [p, true]) + h2])), w2.min >= Math.min(k2.dataMin, m3) && w2.max <= Math.max(l2, p) + c2 && b.setExtremes(w2.min, w2.max, true, false, { trigger: "pan" }), this.mouseDownX = e2, F(this.container, { cursor: "move" })) : f2 = true;
            } else
              f2 = true;
            f2 || g2 && /y/.test(g2.type) ? c2 && (b.max = b.dataMax + c2) : a4.preventDefault();
          }
          function k() {
            var a4 = this.xAxis;
            a4 && a4.options.ordinal && (delete a4.ordinal.index, delete a4.ordinal.extendedOrdinalPositions);
          }
          function g(a4, c2) {
            var b = this.ordinal, d = b.positions, e2 = b.slope, g2 = b.extendedOrdinalPositions;
            if (!d)
              return a4;
            var f2 = d.length;
            if (d[0] <= a4 && d[f2 - 1] >= a4)
              a4 = B(d, a4);
            else {
              g2 || (g2 = b.getExtendedPositions && b.getExtendedPositions(), b.extendedOrdinalPositions = g2);
              if (!g2 || !g2.length)
                return a4;
              f2 = g2.length;
              e2 || (e2 = (g2[f2 - 1] - g2[0]) / f2);
              d = B(g2, d[0]);
              a4 >= g2[0] && a4 <= g2[f2 - 1] ? a4 = B(g2, a4) - d : a4 < g2[0] ? (a4 = g2[0] - a4, a4 = -d - a4 / e2) : (a4 -= g2[f2 - 1], a4 = a4 / e2 + f2 - d);
            }
            return c2 ? a4 : e2 * (a4 || 0) + b.offset;
          }
          a3.compose = function(a4, c2, e2) {
            if (-1 === h.indexOf(a4)) {
              h.push(a4);
              var b = a4.prototype;
              b.getTimeTicks = l;
              b.index2val = f;
              b.lin2val = m2;
              b.val2lin = g;
              b.ordinal2lin = b.val2lin;
              v(a4, "afterInit", E2);
              v(a4, "foundExtremes", K);
              v(a4, "afterSetScale", y);
              v(a4, "initialAxisTranslation", t);
            }
            -1 === h.indexOf(e2) && (h.push(e2), v(e2, "pan", w));
            -1 === h.indexOf(c2) && (h.push(c2), v(c2, "updatedData", k));
            return a4;
          };
          var e = function() {
            function a4(a5) {
              this.index = {};
              this.axis = a5;
            }
            a4.prototype.beforeSetTickPositions = function() {
              var a5 = this.axis, b = a5.ordinal, c2 = a5.getExtremes(), e2 = c2.min, g2 = c2.max, f2 = a5.isXAxis && !!a5.options.breaks;
              c2 = a5.options.ordinal;
              var h2 = a5.chart.options.chart.ignoreHiddenSeries, k2, l2, m3 = [], p = Number.MAX_VALUE, t2 = false, u2 = false, q2 = false;
              if (c2 || f2) {
                var w2 = 0;
                a5.series.forEach(function(a6, b2) {
                  k2 = [];
                  0 < b2 && "highcharts-navigator-series" !== a6.options.id && 1 < a6.processedXData.length && (u2 = w2 !== a6.processedXData[1] - a6.processedXData[0]);
                  w2 = a6.processedXData[1] - a6.processedXData[0];
                  a6.boosted && (q2 = a6.boosted);
                  if (!(h2 && false === a6.visible || false === a6.takeOrdinalPosition && !f2) && (m3 = m3.concat(a6.processedXData), v2 = m3.length, m3.sort(function(a7, b3) {
                    return a7 - b3;
                  }), p = Math.min(p, n(a6.closestPointRange, p)), v2)) {
                    for (b2 = 0; b2 < v2 - 1; )
                      m3[b2] !== m3[b2 + 1] && k2.push(m3[b2 + 1]), b2++;
                    k2[0] !== m3[0] && k2.unshift(m3[0]);
                    m3 = k2;
                  }
                });
                u2 && q2 && (m3.pop(), m3.shift());
                var v2 = m3.length;
                if (2 < v2) {
                  var y2 = m3[1] - m3[0];
                  for (l2 = v2 - 1; l2-- && !t2; )
                    m3[l2 + 1] - m3[l2] !== y2 && (t2 = true);
                  !a5.options.keepOrdinalPadding && (m3[0] - e2 > y2 || g2 - m3[m3.length - 1] > y2) && (t2 = true);
                } else
                  a5.options.overscroll && (2 === v2 ? p = m3[1] - m3[0] : 1 === v2 ? (p = a5.options.overscroll, m3 = [m3[0], m3[0] + p]) : p = b.overscrollPointsRange);
                t2 || a5.forceOrdinal ? (a5.options.overscroll && (b.overscrollPointsRange = p, m3 = m3.concat(b.getOverscrollPositions())), b.positions = m3, y2 = a5.ordinal2lin(Math.max(e2, m3[0]), true), l2 = Math.max(a5.ordinal2lin(Math.min(g2, m3[m3.length - 1]), true), 1), b.slope = g2 = (g2 - e2) / (l2 - y2), b.offset = e2 - y2 * g2) : (b.overscrollPointsRange = n(a5.closestPointRange, b.overscrollPointsRange), b.positions = a5.ordinal.slope = b.offset = void 0);
              }
              a5.isOrdinal = c2 && t2;
              b.groupIntervalFactor = null;
            };
            a4.findIndexOf = function(a5, b, c2) {
              for (var d = 0, e2 = a5.length - 1, g2; d < e2; )
                g2 = Math.ceil((d + e2) / 2), a5[g2] <= b ? d = g2 : e2 = g2 - 1;
              return a5[d] === b ? d : c2 ? d : -1;
            };
            a4.prototype.getExtendedPositions = function() {
              var a5 = this, b = a5.axis, c2 = b.constructor.prototype, e2 = b.chart, g2 = b.series[0].currentDataGrouping, f2 = g2 ? g2.count + g2.unitName : "raw", h2 = b.options.overscroll, k2 = b.getExtremes(), l2 = void 0, m3 = a5.index;
              m3 || (m3 = a5.index = {});
              if (!m3[f2]) {
                var p = { series: [], chart: e2, forceOrdinal: false, getExtremes: function() {
                  return { min: k2.dataMin, max: k2.dataMax + h2 };
                }, getGroupPixelWidth: c2.getGroupPixelWidth, getTimeTicks: c2.getTimeTicks, options: { ordinal: true }, ordinal: { getGroupIntervalFactor: this.getGroupIntervalFactor }, ordinal2lin: c2.ordinal2lin, getIndexOfPoint: c2.getIndexOfPoint, val2lin: c2.val2lin };
                p.ordinal.axis = p;
                b.series.forEach(function(b2) {
                  l2 = {
                    xAxis: p,
                    xData: b2.xData.slice(),
                    chart: e2,
                    destroyGroupedData: q.noop,
                    getProcessedData: A.prototype.getProcessedData,
                    applyGrouping: A.prototype.applyGrouping
                  };
                  l2.xData = l2.xData.concat(a5.getOverscrollPositions());
                  l2.options = { dataGrouping: g2 ? { firstAnchor: "firstPoint", anchor: "middle", lastAnchor: "lastPoint", enabled: true, forced: true, approximation: "open", units: [[g2.unitName, [g2.count]]] } : { enabled: false } };
                  p.series.push(l2);
                  b2.processData.apply(l2);
                });
                l2.closestPointRange !== l2.basePointRange && l2.currentDataGrouping && (p.forceOrdinal = true);
                b.ordinal.beforeSetTickPositions.apply({ axis: p });
                m3[f2] = p.ordinal.positions;
              }
              return m3[f2];
            };
            a4.prototype.getGroupIntervalFactor = function(a5, b, c2) {
              c2 = c2.processedXData;
              var d = c2.length, e2 = [];
              var g2 = this.groupIntervalFactor;
              if (!g2) {
                for (g2 = 0; g2 < d - 1; g2++)
                  e2[g2] = c2[g2 + 1] - c2[g2];
                e2.sort(function(a6, b2) {
                  return a6 - b2;
                });
                e2 = e2[Math.floor(d / 2)];
                a5 = Math.max(a5, c2[0]);
                b = Math.min(b, c2[d - 1]);
                this.groupIntervalFactor = g2 = d * e2 / (b - a5);
              }
              return g2;
            };
            a4.prototype.getIndexOfPoint = function(b, c2) {
              var d = this.axis, e2 = this.positions ? this.positions[0] : 0, g2 = d.series[0].points && d.series[0].points[0] && d.series[0].points[0].plotX || d.minPixelPadding;
              1 < d.series.length && d.series.forEach(function(a5) {
                a5.points && x(a5.points[0]) && x(a5.points[0].plotX) && a5.points[0].plotX < g2 && a5.points[0].plotX >= n(d.min, -Infinity) && (g2 = a5.points[0].plotX);
              });
              b = (b - g2) / (d.translationSlope * (this.slope || d.closestPointRange || this.overscrollPointsRange));
              return a4.findIndexOf(c2, e2) + b;
            };
            a4.prototype.getOverscrollPositions = function() {
              var a5 = this.axis, b = a5.options.overscroll, c2 = this.overscrollPointsRange, e2 = [], g2 = a5.dataMax;
              if (x(c2))
                for (; g2 <= a5.dataMax + b; )
                  g2 += c2, e2.push(g2);
              return e2;
            };
            a4.prototype.postProcessTickInterval = function(a5) {
              var b = this.axis, c2 = this.slope;
              return c2 ? b.options.breaks ? b.closestPointRange || a5 : a5 / (c2 / b.closestPointRange) : a5;
            };
            return a4;
          }();
          a3.Additions = e;
        })(m || (m = {}));
        return m;
      });
      J(a, "Series/HLC/HLCPoint.js", [a["Core/Series/SeriesRegistry.js"]], function(a2) {
        var q = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(q2, v) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, q3) {
              a4.__proto__ = q3;
            } || function(a4, q3) {
              for (var v2 in q3)
                q3.hasOwnProperty(v2) && (a4[v2] = q3[v2]);
            };
            return a3(
              q2,
              v
            );
          };
          return function(q2, v) {
            function A() {
              this.constructor = q2;
            }
            a3(q2, v);
            q2.prototype = null === v ? Object.create(v) : (A.prototype = v.prototype, new A());
          };
        }();
        return function(a3) {
          function v() {
            var q2 = null !== a3 && a3.apply(this, arguments) || this;
            q2.close = void 0;
            q2.high = void 0;
            q2.low = void 0;
            q2.options = void 0;
            q2.plotClose = void 0;
            q2.series = void 0;
            return q2;
          }
          q(v, a3);
          return v;
        }(a2.seriesTypes.column.prototype.pointClass);
      });
      J(a, "Series/HLC/HLCSeriesDefaults.js", [], function() {
        "";
        return {
          lineWidth: 1,
          tooltip: { pointFormat: '<span style="color:{point.color}">●</span> <b> {series.name}</b><br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>' },
          threshold: null,
          states: { hover: { lineWidth: 3 } },
          stickyTracking: true
        };
      });
      J(a, "Series/HLC/HLCSeries.js", [a["Series/HLC/HLCPoint.js"], a["Series/HLC/HLCSeriesDefaults.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, q, A, E) {
        var v = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(n, c) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c2) {
              a4.__proto__ = c2;
            } || function(a4, c2) {
              for (var h in c2)
                c2.hasOwnProperty(h) && (a4[h] = c2[h]);
            };
            return a3(n, c);
          };
          return function(n, c) {
            function h() {
              this.constructor = n;
            }
            a3(n, c);
            n.prototype = null === c ? Object.create(c) : (h.prototype = c.prototype, new h());
          };
        }(), C = A.seriesTypes.column, F = E.extend, x = E.merge;
        E = function(a3) {
          function n() {
            var c = null !== a3 && a3.apply(this, arguments) || this;
            c.data = void 0;
            c.options = void 0;
            c.points = void 0;
            c.yData = void 0;
            return c;
          }
          v(n, a3);
          n.prototype.extendStem = function(a4, h, m) {
            var c = a4[0];
            a4 = a4[1];
            "number" === typeof c[2] && (c[2] = Math.max(m + h, c[2]));
            "number" === typeof a4[2] && (a4[2] = Math.min(m - h, a4[2]));
          };
          n.prototype.getPointPath = function(a4, h) {
            h = h.strokeWidth();
            var c = a4.series, l = h % 2 / 2, p = Math.round(a4.plotX) - l, f = Math.round(a4.shapeArgs.width / 2), n2 = [["M", p, Math.round(a4.yBottom)], ["L", p, Math.round(a4.plotHigh)]];
            null !== a4.close && (a4 = Math.round(a4.plotClose) + l, n2.push(["M", p, a4], ["L", p + f, a4]), c.extendStem(n2, h / 2, a4));
            return n2;
          };
          n.prototype.drawSinglePoint = function(a4) {
            var c = a4.series, m = c.chart, l = a4.graphic;
            "undefined" !== typeof a4.plotY && (l || (a4.graphic = l = m.renderer.path().add(c.group)), m.styledMode || l.attr(c.pointAttribs(a4, a4.selected && "select")), c = c.getPointPath(a4, l), l[l ? "animate" : "attr"]({ d: c }).addClass(
              a4.getClassName(),
              true
            ));
          };
          n.prototype.drawPoints = function() {
            this.points.forEach(this.drawSinglePoint);
          };
          n.prototype.init = function() {
            a3.prototype.init.apply(this, arguments);
            this.options.stacking = void 0;
          };
          n.prototype.pointAttribs = function(c, h) {
            c = a3.prototype.pointAttribs.call(this, c, h);
            delete c.fill;
            return c;
          };
          n.prototype.toYData = function(a4) {
            return [a4.high, a4.low, a4.close];
          };
          n.prototype.translate = function() {
            var c = this, h = c.yAxis, m = this.pointArrayMap && this.pointArrayMap.slice() || [], l = m.map(function(a4) {
              return "plot".concat(a4.charAt(0).toUpperCase() + a4.slice(1));
            });
            l.push("yBottom");
            m.push("low");
            a3.prototype.translate.apply(c);
            c.points.forEach(function(a4) {
              m.forEach(function(f, m2) {
                f = a4[f];
                null !== f && (c.dataModify && (f = c.dataModify.modifyValue(f)), a4[l[m2]] = h.toPixels(f, true));
              });
              a4.tooltipPos[1] = a4.plotHigh + h.pos - c.chart.plotTop;
            });
          };
          n.defaultOptions = x(C.defaultOptions, q);
          return n;
        }(C);
        F(E.prototype, { pointClass: a2, animate: null, directTouch: false, pointArrayMap: ["high", "low", "close"], pointAttrToOptions: { stroke: "color", "stroke-width": "lineWidth" }, pointValKey: "close" });
        A.registerSeriesType("hlc", E);
        return E;
      });
      J(a, "Series/OHLC/OHLCPoint.js", [a["Core/Series/SeriesRegistry.js"]], function(a2) {
        var q = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(q2, v) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, q3) {
              a4.__proto__ = q3;
            } || function(a4, q3) {
              for (var v2 in q3)
                q3.hasOwnProperty(v2) && (a4[v2] = q3[v2]);
            };
            return a3(q2, v);
          };
          return function(q2, v) {
            function A() {
              this.constructor = q2;
            }
            a3(q2, v);
            q2.prototype = null === v ? Object.create(v) : (A.prototype = v.prototype, new A());
          };
        }();
        return function(a3) {
          function v() {
            var q2 = null !== a3 && a3.apply(this, arguments) || this;
            q2.open = void 0;
            q2.options = void 0;
            q2.plotOpen = void 0;
            q2.series = void 0;
            return q2;
          }
          q(v, a3);
          v.prototype.getClassName = function() {
            return a3.prototype.getClassName.call(this) + (this.open < this.close ? " highcharts-point-up" : " highcharts-point-down");
          };
          v.prototype.resolveUpColor = function() {
            this.open < this.close && !this.options.color && this.series.options.upColor && (this.color = this.series.options.upColor);
          };
          v.prototype.resolveColor = function() {
            a3.prototype.resolveColor.call(this);
            this.resolveUpColor();
          };
          v.prototype.getZone = function() {
            var q2 = a3.prototype.getZone.call(this);
            this.resolveUpColor();
            return q2;
          };
          v.prototype.applyOptions = function() {
            a3.prototype.applyOptions.apply(this, arguments);
            this.resolveColor && this.resolveColor();
            return this;
          };
          return v;
        }(a2.seriesTypes.hlc.prototype.pointClass);
      });
      J(a, "Series/OHLC/OHLCSeriesDefaults.js", [], function() {
        "";
        return { tooltip: { pointFormat: '<span style="color:{point.color}">●</span> <b> {series.name}</b><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>' } };
      });
      J(a, "Series/OHLC/OHLCSeries.js", [a["Series/OHLC/OHLCPoint.js"], a["Series/OHLC/OHLCSeriesDefaults.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, q, A, E) {
        function v(a3) {
          a3 = a3.options;
          var c2 = a3.dataGrouping;
          c2 && a3.useOhlcData && "highcharts-navigator-series" !== a3.id && (c2.approximation = "ohlc");
        }
        function C(a3) {
          a3 = a3.options;
          a3.useOhlcData && "highcharts-navigator-series" !== a3.id && n(this, { pointValKey: m.prototype.pointValKey, pointArrayMap: m.prototype.pointArrayMap, toYData: m.prototype.toYData });
        }
        var F = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(c2, f) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c3) {
              a4.__proto__ = c3;
            } || function(a4, c3) {
              for (var f2 in c3)
                c3.hasOwnProperty(f2) && (a4[f2] = c3[f2]);
            };
            return a3(c2, f);
          };
          return function(c2, f) {
            function h2() {
              this.constructor = c2;
            }
            a3(c2, f);
            c2.prototype = null === f ? Object.create(f) : (h2.prototype = f.prototype, new h2());
          };
        }(), x = A.seriesTypes.hlc, u = E.addEvent, n = E.extend, c = E.merge, h = [], m = function(a3) {
          function l() {
            var c2 = null !== a3 && a3.apply(this, arguments) || this;
            c2.data = void 0;
            c2.options = void 0;
            c2.points = void 0;
            return c2;
          }
          F(l, a3);
          l.compose = function(a4) {
            for (var c2 = 1; c2 < arguments.length; c2++)
              ;
            -1 === h.indexOf(a4) && (h.push(a4), u(a4, "afterSetOptions", v), u(a4, "init", C));
          };
          l.prototype.getPointPath = function(c2, h2) {
            var f = a3.prototype.getPointPath.call(this, c2, h2);
            h2 = h2.strokeWidth();
            var l2 = h2 % 2 / 2, m2 = Math.round(c2.plotX) - l2, p = Math.round(c2.shapeArgs.width / 2);
            null !== c2.open && (c2 = Math.round(c2.plotOpen) + l2, f.push(["M", m2, c2], ["L", m2 - p, c2]), a3.prototype.extendStem.call(this, f, h2 / 2, c2));
            return f;
          };
          l.prototype.pointAttribs = function(c2, h2) {
            h2 = a3.prototype.pointAttribs.call(this, c2, h2);
            var f = this.options;
            delete h2.fill;
            !c2.options.color && f.upColor && c2.open < c2.close && (h2.stroke = f.upColor);
            return h2;
          };
          l.prototype.toYData = function(a4) {
            return [a4.open, a4.high, a4.low, a4.close];
          };
          l.defaultOptions = c(x.defaultOptions, q);
          return l;
        }(x);
        n(m.prototype, { pointClass: a2, pointArrayMap: ["open", "high", "low", "close"] });
        A.registerSeriesType("ohlc", m);
        return m;
      });
      J(a, "Series/Candlestick/CandlestickSeriesDefaults.js", [a["Core/Defaults.js"], a["Core/Utilities.js"]], function(a2, q) {
        "";
        return { states: { hover: { lineWidth: 2 } }, threshold: null, lineColor: "#000000", lineWidth: 1, upColor: "#ffffff", stickyTracking: true };
      });
      J(a, "Series/Candlestick/CandlestickSeries.js", [a["Series/Candlestick/CandlestickSeriesDefaults.js"], a["Core/Defaults.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, q, A, E) {
        var v = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(c, h) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c2) {
              a4.__proto__ = c2;
            } || function(a4, c2) {
              for (var h2 in c2)
                c2.hasOwnProperty(h2) && (a4[h2] = c2[h2]);
            };
            return a3(c, h);
          };
          return function(c, h) {
            function m() {
              this.constructor = c;
            }
            a3(c, h);
            c.prototype = null === h ? Object.create(h) : (m.prototype = h.prototype, new m());
          };
        }(), C = q.defaultOptions;
        q = A.seriesTypes;
        var F = q.column, x = q.ohlc, u = E.merge;
        E = function(n) {
          function c() {
            var a3 = null !== n && n.apply(this, arguments) || this;
            a3.data = void 0;
            a3.options = void 0;
            a3.points = void 0;
            return a3;
          }
          v(c, n);
          c.prototype.pointAttribs = function(a3, c2) {
            var h = F.prototype.pointAttribs.call(this, a3, c2), m = this.options, f = a3.open < a3.close, n2 = m.lineColor || this.color, q2 = a3.color || this.color;
            h["stroke-width"] = m.lineWidth;
            h.fill = a3.options.color || (f ? m.upColor || q2 : q2);
            h.stroke = a3.options.lineColor || (f ? m.upLineColor || n2 : n2);
            c2 && (a3 = m.states[c2], h.fill = a3.color || h.fill, h.stroke = a3.lineColor || h.stroke, h["stroke-width"] = a3.lineWidth || h["stroke-width"]);
            return h;
          };
          c.prototype.drawPoints = function() {
            for (var a3 = this.chart, c2 = this.yAxis.reversed, l = 0, p = this.points; l < p.length; l++) {
              var f = p[l], n2 = f.graphic, q2 = !n2;
              if ("undefined" !== typeof f.plotY) {
                n2 || (f.graphic = n2 = a3.renderer.path().add(this.group));
                this.chart.styledMode || n2.attr(this.pointAttribs(f, f.selected && "select")).shadow(this.options.shadow);
                var u2 = n2.strokeWidth() % 2 / 2;
                var v2 = Math.round(f.plotX) - u2;
                var y = f.plotOpen;
                var t = f.plotClose;
                var w = Math.min(y, t);
                y = Math.max(y, t);
                var k = Math.round(f.shapeArgs.width / 2);
                t = c2 ? y !== f.yBottom : Math.round(w) !== Math.round(f.plotHigh);
                var g = c2 ? Math.round(w) !== Math.round(f.plotHigh) : y !== f.yBottom;
                w = Math.round(w) + u2;
                y = Math.round(y) + u2;
                u2 = [];
                u2.push(["M", v2 - k, y], ["L", v2 - k, w], ["L", v2 + k, w], ["L", v2 + k, y], ["Z"], ["M", v2, w], [
                  "L",
                  v2,
                  t ? Math.round(c2 ? f.yBottom : f.plotHigh) : w
                ], ["M", v2, y], ["L", v2, g ? Math.round(c2 ? f.plotHigh : f.yBottom) : y]);
                n2[q2 ? "attr" : "animate"]({ d: u2 }).addClass(f.getClassName(), true);
              }
            }
          };
          c.defaultOptions = u(x.defaultOptions, C.plotOptions, { tooltip: x.defaultOptions.tooltip }, a2);
          return c;
        }(x);
        A.registerSeriesType("candlestick", E);
        return E;
      });
      J(a, "Series/Flags/FlagsPoint.js", [a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, q) {
        var v = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(q2, v2) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, q3) {
              a4.__proto__ = q3;
            } || function(a4, q3) {
              for (var n in q3)
                q3.hasOwnProperty(n) && (a4[n] = q3[n]);
            };
            return a3(q2, v2);
          };
          return function(q2, v2) {
            function x() {
              this.constructor = q2;
            }
            a3(q2, v2);
            q2.prototype = null === v2 ? Object.create(v2) : (x.prototype = v2.prototype, new x());
          };
        }(), E = q.isNumber;
        return function(a3) {
          function q2() {
            var q3 = null !== a3 && a3.apply(this, arguments) || this;
            q3.options = void 0;
            q3.series = void 0;
            q3.ttBelow = false;
            return q3;
          }
          v(q2, a3);
          q2.prototype.isValid = function() {
            return E(this.y) || "undefined" === typeof this.y;
          };
          q2.prototype.hasNewShapeType = function() {
            var a4 = this.options.shape || this.series.options.shape;
            return this.graphic && a4 && a4 !== this.graphic.symbolKey;
          };
          return q2;
        }(a2.seriesTypes.column.prototype.pointClass);
      });
      J(a, "Series/Flags/FlagsSeriesDefaults.js", [], function() {
        "";
        return { pointRange: 0, allowOverlapX: false, shape: "flag", stackDistance: 12, textAlign: "center", tooltip: { pointFormat: "{point.text}" }, threshold: null, y: -30, fillColor: "#ffffff", lineWidth: 1, states: { hover: { lineColor: "#000000", fillColor: "#ccd6eb" } }, style: {
          fontSize: "11px",
          fontWeight: "bold"
        } };
      });
      J(a, "Series/Flags/FlagsSymbols.js", [a["Core/Renderer/RendererRegistry.js"]], function(a2) {
        var q;
        (function(q2) {
          function v(a3, q3, u, n, c) {
            var h = c && c.anchorX || a3;
            c = c && c.anchorY || q3;
            var m = this.circle(h - 1, c - 1, 2, 2);
            m.push(["M", h, c], ["L", a3, q3 + n], ["L", a3, q3], ["L", a3 + u, q3], ["L", a3 + u, q3 + n], ["L", a3, q3 + n], ["Z"]);
            return m;
          }
          function A(a3, q3) {
            a3[q3 + "pin"] = function(u, n, c, h, m) {
              var l = m && m.anchorX;
              m = m && m.anchorY;
              "circle" === q3 && h > c && (u -= Math.round((h - c) / 2), c = h);
              var p = a3[q3](u, n, c, h);
              if (l && m) {
                var f = l;
                "circle" === q3 ? f = u + c / 2 : (u = p[0], c = p[1], "M" === u[0] && "L" === c[0] && (f = (u[1] + c[1]) / 2));
                p.push(["M", f, n > m ? n : n + h], ["L", l, m]);
                p = p.concat(a3.circle(l - 1, m - 1, 2, 2));
              }
              return p;
            };
          }
          var C = [];
          q2.compose = function(q3) {
            if (-1 === C.indexOf(q3)) {
              C.push(q3);
              var x = q3.prototype.symbols;
              x.flag = v;
              A(x, "circle");
              A(x, "square");
            }
            var u = a2.getRendererType();
            C.indexOf(u) && (C.push(u), x = q3.prototype.symbols, q3 = u.prototype.symbols, q3.circlepin = x.circlepin, q3.flag = x.flag.bind(x), q3.squarepin = x.squarepin);
          };
        })(q || (q = {}));
        return q;
      });
      J(a, "Series/OnSeriesComposition.js", [
        a["Series/Column/ColumnSeries.js"],
        a["Core/Series/Series.js"],
        a["Core/Utilities.js"]
      ], function(a2, q, A) {
        var v = a2.prototype, B = q.prototype, C = A.defined, F = A.stableSort, x;
        (function(a3) {
          function n(a4) {
            return B.getPlotBox.call(this.options.onSeries && this.chart.get(this.options.onSeries) || this, a4);
          }
          function c() {
            v.translate.apply(this);
            var a4 = this, c2 = a4.options, h2 = a4.chart, f = a4.points, n2 = c2.onSeries, q2 = (n2 = n2 && h2.get(n2)) && n2.options.step, u = n2 && n2.points, x2 = h2.inverted, y = a4.xAxis, t = a4.yAxis;
            h2 = f.length - 1;
            var w;
            c2 = c2.onKey || "y";
            var k = u && u.length, g = 0, e;
            if (n2 && n2.visible && k) {
              g = (n2.pointXOffset || 0) + (n2.barW || 0) / 2;
              var b = n2.currentDataGrouping;
              var d = u[k - 1].x + (b ? b.totalRange : 0);
              F(f, function(a5, b2) {
                return a5.x - b2.x;
              });
              for (c2 = "plot" + c2[0].toUpperCase() + c2.substr(1); k-- && f[h2]; ) {
                var r = u[k];
                b = f[h2];
                b.y = r.y;
                if (r.x <= b.x && "undefined" !== typeof r[c2]) {
                  if (b.x <= d && (b.plotY = r[c2], r.x < b.x && !q2 && (e = u[k + 1]) && "undefined" !== typeof e[c2])) {
                    var z = (b.x - r.x) / (e.x - r.x);
                    b.plotY += z * (e[c2] - r[c2]);
                    b.y += z * (e.y - r.y);
                  }
                  h2--;
                  k++;
                  if (0 > h2)
                    break;
                }
              }
            }
            f.forEach(function(b2, c3) {
              b2.plotX += g;
              if ("undefined" === typeof b2.plotY || x2)
                0 <= b2.plotX && b2.plotX <= y.len ? x2 ? (b2.plotY = y.translate(b2.x, 0, 1, 0, 1), b2.plotX = C(b2.y) ? t.translate(b2.y, 0, 0, 0, 1) : 0) : b2.plotY = (y.opposite ? 0 : a4.yAxis.len) + y.offset : b2.shapeArgs = {};
              if ((w = f[c3 - 1]) && w.plotX === b2.plotX) {
                "undefined" === typeof w.stackIndex && (w.stackIndex = 0);
                var d2 = w.stackIndex + 1;
              }
              b2.stackIndex = d2;
            });
            this.onSeries = n2;
          }
          var h = [];
          a3.compose = function(a4) {
            if (-1 === h.indexOf(a4)) {
              h.push(a4);
              var l = a4.prototype;
              l.getPlotBox = n;
              l.translate = c;
            }
            return a4;
          };
          a3.getPlotBox = n;
          a3.translate = c;
        })(x || (x = {}));
        return x;
      });
      J(a, "Series/Flags/FlagsSeries.js", [
        a["Series/Flags/FlagsPoint.js"],
        a["Series/Flags/FlagsSeriesDefaults.js"],
        a["Series/Flags/FlagsSymbols.js"],
        a["Core/Globals.js"],
        a["Series/OnSeriesComposition.js"],
        a["Core/Renderer/RendererUtilities.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Core/Renderer/SVG/SVGElement.js"],
        a["Core/Utilities.js"]
      ], function(a2, q, A, E, B, C, F, x, u) {
        var n = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(c2, f2) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c3) {
              a4.__proto__ = c3;
            } || function(a4, c3) {
              for (var f3 in c3)
                c3.hasOwnProperty(f3) && (a4[f3] = c3[f3]);
            };
            return a3(c2, f2);
          };
          return function(c2, f2) {
            function h2() {
              this.constructor = c2;
            }
            a3(c2, f2);
            c2.prototype = null === f2 ? Object.create(f2) : (h2.prototype = f2.prototype, new h2());
          };
        }();
        E = E.noop;
        var c = C.distribute, h = F.series, m = F.seriesTypes.column, l = u.addEvent, p = u.defined;
        C = u.extend;
        var f = u.merge, v = u.objectEach, G = u.wrap;
        u = function(a3) {
          function u2() {
            var c2 = null !== a3 && a3.apply(this, arguments) || this;
            c2.data = void 0;
            c2.options = void 0;
            c2.points = void 0;
            return c2;
          }
          n(u2, a3);
          u2.prototype.animate = function(a4) {
            a4 && this.setClip();
          };
          u2.prototype.drawPoints = function() {
            var a4 = this.points, h2 = this.chart, l2 = h2.renderer, k = h2.inverted, g = this.options, e = g.y, b = this.yAxis, d = {}, m2 = [], n2;
            for (n2 = a4.length; n2--; ) {
              var q2 = a4[n2];
              var u3 = (k ? q2.plotY : q2.plotX) > this.xAxis.len;
              var A2 = q2.plotX;
              var B2 = q2.stackIndex;
              var C2 = q2.options.shape || g.shape;
              var D = q2.plotY;
              "undefined" !== typeof D && (D = q2.plotY + e - ("undefined" !== typeof B2 && B2 * g.stackDistance));
              q2.anchorX = B2 ? void 0 : q2.plotX;
              var E2 = B2 ? void 0 : q2.plotY;
              var F2 = "flag" !== C2;
              B2 = q2.graphic;
              "undefined" !== typeof D && 0 <= A2 && !u3 ? (B2 && q2.hasNewShapeType() && (B2 = B2.destroy()), B2 || (B2 = q2.graphic = l2.label(
                "",
                null,
                null,
                C2,
                null,
                null,
                g.useHTML
              ).addClass("highcharts-point").add(this.markerGroup), q2.graphic.div && (q2.graphic.div.point = q2), B2.isNew = true), B2.attr({ align: F2 ? "center" : "left", width: g.width, height: g.height, "text-align": g.textAlign }), h2.styledMode || B2.attr(this.pointAttribs(q2)).css(f(g.style, q2.style)).shadow(g.shadow), 0 < A2 && (A2 -= B2.strokeWidth() % 2), C2 = { y: D, anchorY: E2 }, g.allowOverlapX && (C2.x = A2, C2.anchorX = q2.anchorX), B2.attr({ text: q2.options.title || g.title || "A" })[B2.isNew ? "attr" : "animate"](C2), g.allowOverlapX || (d[q2.plotX] ? d[q2.plotX].size = Math.max(d[q2.plotX].size, B2.width) : d[q2.plotX] = { align: F2 ? 0.5 : 0, size: B2.width, target: A2, anchorX: A2 }), q2.tooltipPos = [A2, D + b.pos - h2.plotTop]) : B2 && (q2.graphic = B2.destroy());
            }
            if (!g.allowOverlapX) {
              var H = 100;
              v(d, function(a5) {
                a5.plotX = a5.anchorX;
                m2.push(a5);
                H = Math.max(a5.size, H);
              });
              c(m2, k ? b.len : this.xAxis.len, H);
              for (h2 = 0; h2 < a4.length; h2++)
                l2 = a4[h2], e = l2.plotX, (e = (k = l2.graphic) && d[e]) && k && (p(e.pos) ? k[k.isNew ? "attr" : "animate"]({ x: e.pos + (e.align || 0) * e.size, anchorX: l2.anchorX }).show().isNew = false : k.hide().isNew = true);
            }
            g.useHTML && this.markerGroup && G(this.markerGroup, "on", function(a5) {
              return x.prototype.on.apply(a5.apply(this, [].slice.call(arguments, 1)), [].slice.call(arguments, 1));
            });
          };
          u2.prototype.drawTracker = function() {
            var c2 = this.points;
            a3.prototype.drawTracker.call(this);
            for (var f2 = function(a4) {
              var g = a4.graphic;
              g && (a4.unbindMouseOver && a4.unbindMouseOver(), a4.unbindMouseOver = l(g.element, "mouseover", function() {
                0 < a4.stackIndex && !a4.raised && (a4._y = g.y, g.attr({ y: a4._y - 8 }), a4.raised = true);
                for (var e = 0; e < c2.length; e++) {
                  var b = c2[e];
                  b !== a4 && b.raised && b.graphic && (b.graphic.attr({ y: b._y }), b.raised = false);
                }
              }));
            }, h2 = 0; h2 < c2.length; h2++)
              f2(c2[h2]);
          };
          u2.prototype.pointAttribs = function(a4, c2) {
            var f2 = this.options, h2 = a4 && a4.color || this.color, g = f2.lineColor, e = a4 && a4.lineWidth;
            a4 = a4 && a4.fillColor || f2.fillColor;
            c2 && (a4 = f2.states[c2].fillColor, g = f2.states[c2].lineColor, e = f2.states[c2].lineWidth);
            return { fill: a4 || h2, stroke: g || h2, "stroke-width": e || f2.lineWidth || 0 };
          };
          u2.prototype.setClip = function() {
            h.prototype.setClip.apply(this, arguments);
            false !== this.options.clip && this.sharedClipKey && this.markerGroup && this.markerGroup.clip(this.chart.sharedClips[this.sharedClipKey]);
          };
          u2.compose = A.compose;
          u2.defaultOptions = f(m.defaultOptions, q);
          return u2;
        }(m);
        B.compose(u);
        C(u.prototype, { allowDG: false, forceCrop: true, invertible: false, noSharedTooltip: true, pointClass: a2, sorted: false, takeOrdinalPosition: false, trackerGroups: ["markerGroup"], buildKDTree: E, init: h.prototype.init });
        F.registerSeriesType("flags", u);
        "";
        return u;
      });
      J(a, "Core/Chart/StockChart.js", [
        a["Core/Axis/Axis.js"],
        a["Core/Chart/Chart.js"],
        a["Core/FormatUtilities.js"],
        a["Core/Defaults.js"],
        a["Stock/Navigator/NavigatorDefaults.js"],
        a["Stock/RangeSelector/RangeSelectorDefaults.js"],
        a["Stock/Scrollbar/ScrollbarDefaults.js"],
        a["Core/Series/Series.js"],
        a["Core/Renderer/SVG/SVGRenderer.js"],
        a["Core/Utilities.js"]
      ], function(a2, q, A, E, B, C, F, x, u, n) {
        function c(a3, c2) {
          return "xAxis" === a3 ? { minPadding: 0, maxPadding: 0, overscroll: 0, ordinal: true, title: { text: null }, labels: { overflow: "justify" }, showLastLabel: true } : "yAxis" === a3 ? {
            labels: { y: -2 },
            opposite: w(c2.opposite, true),
            showLastLabel: !(!c2.categories && "category" !== c2.type),
            title: { text: null }
          } : {};
        }
        function h(a3, c2) {
          return "xAxis" === a3 ? (a3 = { type: "datetime", categories: void 0 }, w(c2.navigator && c2.navigator.enabled, B.enabled, true) && (a3.startOnTick = false, a3.endOnTick = false), a3) : {};
        }
        var m = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(c2, b) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, b2) {
              a4.__proto__ = b2;
            } || function(a4, b2) {
              for (var c3 in b2)
                b2.hasOwnProperty(c3) && (a4[c3] = b2[c3]);
            };
            return a3(c2, b);
          };
          return function(c2, b) {
            function d() {
              this.constructor = c2;
            }
            a3(c2, b);
            c2.prototype = null === b ? Object.create(b) : (d.prototype = b.prototype, new d());
          };
        }(), l = A.format, p = E.getOptions;
        A = n.addEvent;
        var f = n.clamp, v = n.defined, G = n.extend, H = n.find, J2 = n.isNumber, y = n.isString, t = n.merge, w = n.pick, k = n.splat;
        n = function(a3) {
          function e() {
            return null !== a3 && a3.apply(this, arguments) || this;
          }
          m(e, a3);
          e.prototype.init = function(b, d) {
            var e2 = p(), g = b.xAxis, f2 = b.yAxis, l2 = w(b.navigator && b.navigator.enabled, B.enabled, true);
            b.xAxis = b.yAxis = void 0;
            l2 = t({ chart: { panning: { enabled: true, type: "x" }, zooming: { pinchType: "x" } }, navigator: { enabled: l2 }, scrollbar: { enabled: w(
              F.enabled,
              true
            ) }, rangeSelector: { enabled: w(C.rangeSelector.enabled, true) }, title: { text: null }, tooltip: { split: w(e2.tooltip.split, true), crosshairs: true }, legend: { enabled: false } }, b, { isStock: true });
            b.xAxis = g;
            b.yAxis = f2;
            l2.xAxis = k(b.xAxis || {}).map(function(a4, d2) {
              return t(c("xAxis", a4), e2.xAxis, e2.xAxis && e2.xAxis[d2], a4, h("xAxis", b));
            });
            l2.yAxis = k(b.yAxis || {}).map(function(a4, b2) {
              return t(c("yAxis", a4), e2.yAxis, e2.yAxis && e2.yAxis[b2], a4);
            });
            a3.prototype.init.call(this, l2, d);
          };
          e.prototype.createAxis = function(b, d) {
            d.axis = t(c(b, d.axis), d.axis, h(b, this.userOptions));
            return a3.prototype.createAxis.call(this, b, d);
          };
          return e;
        }(q);
        (function(a3) {
          a3.stockChart = function(c2, b, d) {
            return new a3(c2, b, d);
          };
        })(n || (n = {}));
        A(x, "setOptions", function(a3) {
          var c2;
          this.chart.options.isStock && (this.is("column") || this.is("columnrange") ? c2 = { borderWidth: 0, shadow: false } : this.is("scatter") || this.is("sma") || (c2 = { marker: { enabled: false, radius: 2 } }), c2 && (a3.plotOptions[this.type] = t(a3.plotOptions[this.type], c2)));
        });
        A(a2, "autoLabelAlign", function(a3) {
          var c2 = this.chart, b = this.options;
          c2 = c2._labelPanes = c2._labelPanes || {};
          var d = this.options.labels;
          this.chart.options.isStock && "yAxis" === this.coll && (b = b.top + "," + b.height, !c2[b] && d.enabled && (15 === d.x && (d.x = 0), "undefined" === typeof d.align && (d.align = "right"), c2[b] = this, a3.align = "right", a3.preventDefault()));
        });
        A(a2, "destroy", function() {
          var a3 = this.chart, c2 = this.options && this.options.top + "," + this.options.height;
          c2 && a3._labelPanes && a3._labelPanes[c2] === this && delete a3._labelPanes[c2];
        });
        A(a2, "getPlotLinePath", function(a3) {
          function c2(a4) {
            var c3 = "xAxis" === a4 ? "yAxis" : "xAxis";
            a4 = b.options[c3];
            return J2(a4) ? [g[c3][a4]] : y(a4) ? [g.get(a4)] : d.map(function(a5) {
              return a5[c3];
            });
          }
          var b = this, d = this.isLinked && !this.series ? this.linkedParent.series : this.series, g = b.chart, h2 = g.renderer, k2 = b.left, l2 = b.top, m2, n2, p2, q2, t2 = [], u2 = [], x2 = a3.translatedValue, A2 = a3.value, B2 = a3.force;
          if (g.options.isStock && false !== a3.acrossPanes && "xAxis" === b.coll || "yAxis" === b.coll) {
            a3.preventDefault();
            u2 = c2(b.coll);
            var C2 = b.isXAxis ? g.yAxis : g.xAxis;
            C2.forEach(function(a4) {
              if (v(a4.options.id) ? -1 === a4.options.id.indexOf("navigator") : 1) {
                var c3 = a4.isXAxis ? "yAxis" : "xAxis";
                c3 = v(a4.options[c3]) ? g[c3][a4.options[c3]] : g[c3][0];
                b === c3 && u2.push(a4);
              }
            });
            var D = u2.length ? [] : [b.isXAxis ? g.yAxis[0] : g.xAxis[0]];
            u2.forEach(function(a4) {
              -1 !== D.indexOf(a4) || H(D, function(b2) {
                return b2.pos === a4.pos && b2.len === a4.len;
              }) || D.push(a4);
            });
            var E2 = w(x2, b.translate(A2, void 0, void 0, a3.old));
            J2(E2) && (b.horiz ? D.forEach(function(a4) {
              var c3;
              n2 = a4.pos;
              q2 = n2 + a4.len;
              m2 = p2 = Math.round(E2 + b.transB);
              "pass" !== B2 && (m2 < k2 || m2 > k2 + b.width) && (B2 ? m2 = p2 = f(m2, k2, k2 + b.width) : c3 = true);
              c3 || t2.push(["M", m2, n2], ["L", p2, q2]);
            }) : D.forEach(function(a4) {
              var c3;
              m2 = a4.pos;
              p2 = m2 + a4.len;
              n2 = q2 = Math.round(l2 + b.height - E2);
              "pass" !== B2 && (n2 < l2 || n2 > l2 + b.height) && (B2 ? n2 = q2 = f(n2, l2, l2 + b.height) : c3 = true);
              c3 || t2.push(["M", m2, n2], ["L", p2, q2]);
            }));
            a3.path = 0 < t2.length ? h2.crispPolyLine(t2, a3.lineWidth || 1) : null;
          }
        });
        u.prototype.crispPolyLine = function(a3, c2) {
          for (var b = 0; b < a3.length; b += 2) {
            var d = a3[b], e = a3[b + 1];
            d[1] === e[1] && (d[1] = e[1] = Math.round(d[1]) - c2 % 2 / 2);
            d[2] === e[2] && (d[2] = e[2] = Math.round(d[2]) + c2 % 2 / 2);
          }
          return a3;
        };
        A(a2, "afterHideCrosshair", function() {
          this.crossLabel && (this.crossLabel = this.crossLabel.hide());
        });
        A(a2, "afterDrawCrosshair", function(a3) {
          var c2, b;
          if (this.crosshair && this.crosshair.label && this.crosshair.label.enabled && this.cross && J2(this.min) && J2(this.max)) {
            var d = this.chart, f2 = this.logarithmic, g = this.crosshair.label, h2 = this.horiz, k2 = this.opposite, m2 = this.left, n2 = this.top, p2 = this.crossLabel, q2 = g.format, t2 = "", u2 = "inside" === this.options.tickPosition, v2 = false !== this.crosshair.snap, y2 = 0, x2 = a3.e || this.cross && this.cross.e;
            a3 = a3.point;
            var A2 = this.min, B2 = this.max;
            f2 && (A2 = f2.lin2log(A2), B2 = f2.lin2log(B2));
            f2 = h2 ? "center" : k2 ? "right" === this.labelAlign ? "right" : "left" : "left" === this.labelAlign ? "left" : "center";
            p2 || (p2 = this.crossLabel = d.renderer.label("", 0, void 0, g.shape || "callout").addClass("highcharts-crosshair-label highcharts-color-" + (a3 && a3.series ? a3.series.colorIndex : this.series[0] && this.series[0].colorIndex)).attr({ align: g.align || f2, padding: w(g.padding, 8), r: w(g.borderRadius, 3), zIndex: 2 }).add(this.labelGroup), d.styledMode || p2.attr({ fill: g.backgroundColor || a3 && a3.series && a3.series.color || "#666666", stroke: g.borderColor || "", "stroke-width": g.borderWidth || 0 }).css(G({
              color: "#ffffff",
              fontWeight: "normal",
              fontSize: "11px",
              textAlign: "center"
            }, g.style || {})));
            h2 ? (f2 = v2 ? (a3.plotX || 0) + m2 : x2.chartX, n2 += k2 ? 0 : this.height) : (f2 = k2 ? this.width + m2 : 0, n2 = v2 ? (a3.plotY || 0) + n2 : x2.chartY);
            q2 || g.formatter || (this.dateTime && (t2 = "%b %d, %Y"), q2 = "{value" + (t2 ? ":" + t2 : "") + "}");
            t2 = v2 ? this.isXAxis ? a3.x : a3.y : this.toValue(h2 ? x2.chartX : x2.chartY);
            v2 = a3 && a3.series ? a3.series.isPointInside(a3) : J2(t2) && t2 > A2 && t2 < B2;
            x2 = "";
            q2 ? x2 = l(q2, { value: t2 }, d) : g.formatter && J2(t2) && (x2 = g.formatter.call(this, t2));
            p2.attr({ text: x2, x: f2, y: n2, visibility: v2 ? "inherit" : "hidden" });
            g = p2.getBBox();
            if (J2(p2.y))
              if (h2) {
                if (u2 && !k2 || !u2 && k2)
                  n2 = p2.y - g.height;
              } else
                n2 = p2.y - g.height / 2;
            h2 ? (c2 = m2 - g.x, b = m2 + this.width - g.x) : (c2 = "left" === this.labelAlign ? m2 : 0, b = "right" === this.labelAlign ? m2 + this.width : d.chartWidth);
            p2.translateX < c2 && (y2 = c2 - p2.translateX);
            p2.translateX + g.width >= b && (y2 = -(p2.translateX + g.width - b));
            p2.attr({ x: f2 + y2, y: n2, anchorX: h2 ? f2 : this.opposite ? 0 : d.chartWidth, anchorY: h2 ? this.opposite ? d.chartHeight : 0 : n2 + g.height / 2 });
          }
        });
        x.prototype.forceCropping = function() {
          var a3 = this.chart, c2 = this.options.dataGrouping;
          return false !== this.allowDG && c2 && w(c2.enabled, a3.options.isStock);
        };
        A(q, "update", function(a3) {
          a3 = a3.options;
          "scrollbar" in a3 && this.navigator && (t(true, this.options.scrollbar, a3.scrollbar), this.navigator.update({}), delete a3.scrollbar);
        });
        return n;
      });
      J(a, "masters/modules/stock.src.js", [a["Core/Globals.js"], a["Series/DataModifyComposition.js"], a["Stock/Navigator/Navigator.js"], a["Stock/RangeSelector/RangeSelector.js"], a["Stock/Scrollbar/Scrollbar.js"], a["Core/Axis/OrdinalAxis.js"], a["Series/OHLC/OHLCSeries.js"], a["Series/Flags/FlagsSeries.js"], a["Core/Chart/StockChart.js"]], function(a2, q, A, E, B, C, F, x, u) {
        a2.Navigator = A;
        a2.RangeSelector = E;
        a2.Scrollbar = B;
        a2.StockChart = a2.stockChart = u.stockChart;
        q.compose(a2.Series, a2.Axis, a2.Point);
        x.compose(a2.Renderer);
        A.compose(a2.Axis, a2.Chart, a2.Series);
        F.compose(a2.Series);
        C.compose(a2.Axis, a2.Series, a2.Chart);
        E.compose(a2.Axis, a2.Chart);
        B.compose(a2.Axis);
      });
      J(a, "masters/highstock.src.js", [a["masters/highcharts.src.js"]], function(a2) {
        a2.product = "Highstock";
        return a2;
      });
      a["masters/highstock.src.js"]._modules = a;
      return a["masters/highstock.src.js"];
    });
  }
});
export default require_highstock();
//# sourceMappingURL=highcharts_highstock.js.map
