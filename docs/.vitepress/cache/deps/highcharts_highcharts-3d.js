import {
  __commonJS
} from "./chunk-P2LSHJDD.js";

// node_modules/highcharts/highcharts-3d.js
var require_highcharts_3d = __commonJS({
  "node_modules/highcharts/highcharts-3d.js"(exports, module) {
    (function(a) {
      "object" === typeof module && module.exports ? (a["default"] = a, module.exports = a) : "function" === typeof define && define.amd ? define("highcharts/highcharts-3d", ["highcharts"], function(D) {
        a(D);
        a.Highcharts = D;
        return a;
      }) : a("undefined" !== typeof Highcharts ? Highcharts : void 0);
    })(function(a) {
      function D(a2, y, r, F) {
        a2.hasOwnProperty(y) || (a2[y] = F.apply(null, r), "function" === typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: y, module: a2[y] } })));
      }
      a = a ? a._modules : {};
      D(
        a,
        "Core/Math3D.js",
        [a["Core/Globals.js"], a["Core/Utilities.js"]],
        function(a2, y) {
          function r(n2, f, k, c) {
            var b = f.options.chart.options3d, a3 = m(c, k ? f.inverted : false), g = { x: f.plotWidth / 2, y: f.plotHeight / 2, z: b.depth / 2, vd: m(b.depth, 1) * m(b.viewDistance, 0) }, C = f.scale3d || 1;
            c = G * b.beta * (a3 ? -1 : 1);
            b = G * b.alpha * (a3 ? -1 : 1);
            var q = Math.cos(b), t = Math.cos(-c), z = Math.sin(b), v = Math.sin(-c);
            k || (g.x += f.plotLeft, g.y += f.plotTop);
            return n2.map(function(b2) {
              var f2 = (a3 ? b2.y : b2.x) - g.x;
              var c2 = (a3 ? b2.x : b2.y) - g.y;
              b2 = (b2.z || 0) - g.z;
              f2 = { x: t * f2 - v * b2, y: -z * v * f2 + q * c2 - t * z * b2, z: q * v * f2 + z * c2 + q * t * b2 };
              c2 = A(f2, g, g.vd);
              c2.x = c2.x * C + g.x;
              c2.y = c2.y * C + g.y;
              c2.z = f2.z * C + g.z;
              return { x: a3 ? c2.y : c2.x, y: a3 ? c2.x : c2.y, z: c2.z };
            });
          }
          function A(a3, f, k) {
            f = 0 < k && k < Number.POSITIVE_INFINITY ? k / (a3.z + f.z + k) : 1;
            return { x: a3.x * f, y: a3.y * f };
          }
          function n(a3) {
            var f = 0, k;
            for (k = 0; k < a3.length; k++) {
              var c = (k + 1) % a3.length;
              f += a3[k].x * a3[c].y - a3[c].x * a3[k].y;
            }
            return f / 2;
          }
          var G = a2.deg2rad, m = y.pick;
          return { perspective: r, perspective3D: A, pointCameraDistance: function(a3, f) {
            var k = f.options.chart.options3d, c = f.plotWidth / 2;
            f = f.plotHeight / 2;
            k = m(k.depth, 1) * m(k.viewDistance, 0) + k.depth;
            return Math.sqrt(Math.pow(c - m(a3.plotX, a3.x), 2) + Math.pow(f - m(a3.plotY, a3.y), 2) + Math.pow(k - m(a3.plotZ, a3.z), 2));
          }, shapeArea: n, shapeArea3D: function(a3, f, k) {
            return n(r(a3, f, k));
          } };
        }
      );
      D(a, "Core/Renderer/SVG/SVGElement3D.js", [a["Core/Color/Color.js"], a["Core/Renderer/SVG/SVGElement.js"], a["Core/Utilities.js"]], function(a2, y, r) {
        var A = a2.parse, n = r.defined;
        a2 = r.merge;
        var G = r.objectEach, m = r.pick, z = { base: { initArgs: function(f) {
          var a3 = this, c = a3.renderer, b = c[a3.pathType + "Path"](f), n2 = b.zIndexes;
          a3.parts.forEach(function(g) {
            var f2 = { "class": "highcharts-3d-" + g, zIndex: n2[g] || 0 };
            c.styledMode && ("top" === g ? f2.filter = "url(#highcharts-brighter)" : "side" === g && (f2.filter = "url(#highcharts-darker)"));
            a3[g] = c.path(b[g]).attr(f2).add(a3);
          });
          a3.attr({ "stroke-linejoin": "round", zIndex: n2.group });
          a3.originalDestroy = a3.destroy;
          a3.destroy = a3.destroyParts;
          a3.forcedSides = b.forcedSides;
        }, singleSetterForParts: function(a3, n2, c, b, l, g) {
          var f = {};
          b = [null, null, b || "attr", l, g];
          var q = c && c.zIndexes;
          c ? (q && q.group && this.attr({ zIndex: q.group }), G(c, function(b2, g2) {
            f[g2] = {};
            f[g2][a3] = b2;
            q && (f[g2].zIndex = c.zIndexes[g2] || 0);
          }), b[1] = f) : (f[a3] = n2, b[0] = f);
          return this.processParts.apply(this, b);
        }, processParts: function(a3, n2, c, b, l) {
          var g = this;
          g.parts.forEach(function(f) {
            n2 && (a3 = m(n2[f], false));
            if (false !== a3)
              g[f][c](a3, b, l);
          });
          return g;
        }, destroyParts: function() {
          this.processParts(null, null, "destroy");
          return this.originalDestroy();
        } } };
        z.cuboid = a2(z.base, { parts: ["front", "top", "side"], pathType: "cuboid", attr: function(a3, k, c, b) {
          if ("string" === typeof a3 && "undefined" !== typeof k) {
            var f = a3;
            a3 = {};
            a3[f] = k;
          }
          return a3.shapeArgs || n(a3.x) ? this.singleSetterForParts("d", null, this.renderer[this.pathType + "Path"](a3.shapeArgs || a3)) : y.prototype.attr.call(this, a3, void 0, c, b);
        }, animate: function(a3, k, c) {
          if (n(a3.x) && n(a3.y)) {
            a3 = this.renderer[this.pathType + "Path"](a3);
            var b = a3.forcedSides;
            this.singleSetterForParts("d", null, a3, "animate", k, c);
            this.attr({ zIndex: a3.zIndexes.group });
            b !== this.forcedSides && (this.forcedSides = b, this.renderer.styledMode || z.cuboid.fillSetter.call(this, this.fill));
          } else
            y.prototype.animate.call(this, a3, k, c);
          return this;
        }, fillSetter: function(a3) {
          this.forcedSides = this.forcedSides || [];
          this.singleSetterForParts("fill", null, { front: a3, top: A(a3).brighten(0 <= this.forcedSides.indexOf("top") ? 0 : 0.1).get(), side: A(a3).brighten(0 <= this.forcedSides.indexOf("side") ? 0 : -0.1).get() });
          this.color = this.fill = a3;
          return this;
        } });
        return z;
      });
      D(a, "Core/Renderer/SVG/SVGRenderer3D.js", [
        a["Core/Animation/AnimationUtilities.js"],
        a["Core/Color/Color.js"],
        a["Core/Globals.js"],
        a["Core/Math3D.js"],
        a["Core/Renderer/SVG/SVGElement.js"],
        a["Core/Renderer/SVG/SVGElement3D.js"],
        a["Core/Renderer/SVG/SVGRenderer.js"],
        a["Core/Utilities.js"]
      ], function(a2, y, r, F, n, G, m, z) {
        var f = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(h, b2) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, e) {
              a4.__proto__ = e;
            } || function(a4, e) {
              for (var u in e)
                e.hasOwnProperty(u) && (a4[u] = e[u]);
            };
            return a3(h, b2);
          };
          return function(h, b2) {
            function g2() {
              this.constructor = h;
            }
            a3(h, b2);
            h.prototype = null === b2 ? Object.create(b2) : (g2.prototype = b2.prototype, new g2());
          };
        }(), k = a2.animObject, c = y.parse, b = r.charts, l = r.deg2rad, g = F.perspective, C = F.shapeArea, q = z.defined, t = z.extend, x = z.merge, v = z.pick, A = Math.cos, E = Math.sin, I = Math.PI, N = 4 * (Math.sqrt(2) - 1) / 3 / (I / 2);
        return function(a3) {
          function h() {
            return null !== a3 && a3.apply(this, arguments) || this;
          }
          f(h, a3);
          h.compose = function(a4) {
            a4 = a4.prototype;
            var b2 = h.prototype;
            a4.elements3d = G;
            a4.arc3d = b2.arc3d;
            a4.arc3dPath = b2.arc3dPath;
            a4.cuboid = b2.cuboid;
            a4.cuboidPath = b2.cuboidPath;
            a4.element3d = b2.element3d;
            a4.face3d = b2.face3d;
            a4.polyhedron = b2.polyhedron;
            a4.toLinePath = b2.toLinePath;
            a4.toLineSegments = b2.toLineSegments;
          };
          h.curveTo = function(a4, b2, e, u, d, p, w, B) {
            var h2 = [], g2 = p - d;
            return p > d && p - d > Math.PI / 2 + 1e-4 ? (h2 = h2.concat(this.curveTo(a4, b2, e, u, d, d + Math.PI / 2, w, B)), h2 = h2.concat(this.curveTo(a4, b2, e, u, d + Math.PI / 2, p, w, B))) : p < d && d - p > Math.PI / 2 + 1e-4 ? (h2 = h2.concat(this.curveTo(a4, b2, e, u, d, d - Math.PI / 2, w, B)), h2 = h2.concat(this.curveTo(a4, b2, e, u, d - Math.PI / 2, p, w, B))) : [["C", a4 + e * Math.cos(d) - e * N * g2 * Math.sin(d) + w, b2 + u * Math.sin(d) + u * N * g2 * Math.cos(d) + B, a4 + e * Math.cos(p) + e * N * g2 * Math.sin(p) + w, b2 + u * Math.sin(p) - u * N * g2 * Math.cos(p) + B, a4 + e * Math.cos(p) + w, b2 + u * Math.sin(p) + B]];
          };
          h.prototype.toLinePath = function(a4, b2) {
            var e = [];
            a4.forEach(function(a5) {
              e.push([
                "L",
                a5.x,
                a5.y
              ]);
            });
            a4.length && (e[0][0] = "M", b2 && e.push(["Z"]));
            return e;
          };
          h.prototype.toLineSegments = function(a4) {
            var b2 = [], e = true;
            a4.forEach(function(a5) {
              b2.push(e ? ["M", a5.x, a5.y] : ["L", a5.x, a5.y]);
              e = !e;
            });
            return b2;
          };
          h.prototype.face3d = function(a4) {
            var h2 = this, e = this.createElement("path");
            e.vertexes = [];
            e.insidePlotArea = false;
            e.enabled = true;
            e.attr = function(e2) {
              if ("object" === typeof e2 && (q(e2.enabled) || q(e2.vertexes) || q(e2.insidePlotArea))) {
                this.enabled = v(e2.enabled, this.enabled);
                this.vertexes = v(e2.vertexes, this.vertexes);
                this.insidePlotArea = v(e2.insidePlotArea, this.insidePlotArea);
                delete e2.enabled;
                delete e2.vertexes;
                delete e2.insidePlotArea;
                var d = g(this.vertexes, b[h2.chartIndex], this.insidePlotArea), p = h2.toLinePath(d, true);
                d = C(d);
                e2.d = p;
                e2.visibility = this.enabled && 0 < d ? "inherit" : "hidden";
              }
              return n.prototype.attr.apply(this, arguments);
            };
            e.animate = function(e2) {
              if ("object" === typeof e2 && (q(e2.enabled) || q(e2.vertexes) || q(e2.insidePlotArea))) {
                this.enabled = v(e2.enabled, this.enabled);
                this.vertexes = v(e2.vertexes, this.vertexes);
                this.insidePlotArea = v(
                  e2.insidePlotArea,
                  this.insidePlotArea
                );
                delete e2.enabled;
                delete e2.vertexes;
                delete e2.insidePlotArea;
                var d = g(this.vertexes, b[h2.chartIndex], this.insidePlotArea), p = h2.toLinePath(d, true);
                d = C(d);
                d = this.enabled && 0 < d ? "visible" : "hidden";
                e2.d = p;
                this.attr("visibility", d);
              }
              return n.prototype.animate.apply(this, arguments);
            };
            return e.attr(a4);
          };
          h.prototype.polyhedron = function(a4) {
            var b2 = this, e = this.g(), h2 = e.destroy;
            this.styledMode || e.attr({ "stroke-linejoin": "round" });
            e.faces = [];
            e.destroy = function() {
              for (var d = 0; d < e.faces.length; d++)
                e.faces[d].destroy();
              return h2.call(this);
            };
            e.attr = function(d, p, a5, h3) {
              if ("object" === typeof d && q(d.faces)) {
                for (; e.faces.length > d.faces.length; )
                  e.faces.pop().destroy();
                for (; e.faces.length < d.faces.length; )
                  e.faces.push(b2.face3d().add(e));
                for (var w = 0; w < d.faces.length; w++)
                  b2.styledMode && delete d.faces[w].fill, e.faces[w].attr(d.faces[w], null, a5, h3);
                delete d.faces;
              }
              return n.prototype.attr.apply(this, arguments);
            };
            e.animate = function(d, p, a5) {
              if (d && d.faces) {
                for (; e.faces.length > d.faces.length; )
                  e.faces.pop().destroy();
                for (; e.faces.length < d.faces.length; )
                  e.faces.push(b2.face3d().add(e));
                for (var w = 0; w < d.faces.length; w++)
                  e.faces[w].animate(d.faces[w], p, a5);
                delete d.faces;
              }
              return n.prototype.animate.apply(this, arguments);
            };
            return e.attr(a4);
          };
          h.prototype.element3d = function(a4, b2) {
            var e = this.g();
            t(e, this.elements3d[a4]);
            e.initArgs(b2);
            return e;
          };
          h.prototype.cuboid = function(a4) {
            return this.element3d("cuboid", a4);
          };
          h.prototype.cuboidPath = function(a4) {
            function h2(e2) {
              return 0 === w && 1 < e2 && 6 > e2 ? { x: H[e2].x, y: H[e2].y + 10, z: H[e2].z } : H[0].x === H[7].x && 4 <= e2 ? { x: H[e2].x + 10, y: H[e2].y, z: H[e2].z } : 0 === c2 && 2 > e2 || 5 < e2 ? {
                x: H[e2].x,
                y: H[e2].y,
                z: H[e2].z + 10
              } : H[e2];
            }
            function e(e2) {
              return H[e2];
            }
            var u = a4.x || 0, d = a4.y || 0, p = a4.z || 0, w = a4.height || 0, B = a4.width || 0, c2 = a4.depth || 0, f2 = b[this.chartIndex], n2 = f2.options.chart.options3d.alpha, q2 = 0, H = [{ x: u, y: d, z: p }, { x: u + B, y: d, z: p }, { x: u + B, y: d + w, z: p }, { x: u, y: d + w, z: p }, { x: u, y: d + w, z: p + c2 }, { x: u + B, y: d + w, z: p + c2 }, { x: u + B, y: d, z: p + c2 }, { x: u, y: d, z: p + c2 }], k2 = [];
            H = g(H, f2, a4.insidePlotArea);
            var M = function(d2, a5, p2) {
              var w2 = [[], -1], b2 = d2.map(e), u2 = a5.map(e);
              d2 = d2.map(h2);
              a5 = a5.map(h2);
              0 > C(b2) ? w2 = [b2, 0] : 0 > C(u2) ? w2 = [u2, 1] : p2 && (k2.push(p2), w2 = 0 > C(d2) ? [b2, 0] : 0 > C(a5) ? [u2, 1] : [b2, 0]);
              return w2;
            };
            var l2 = M([3, 2, 1, 0], [7, 6, 5, 4], "front");
            a4 = l2[0];
            var K = l2[1];
            l2 = M([1, 6, 7, 0], [4, 5, 2, 3], "top");
            B = l2[0];
            var t2 = l2[1];
            l2 = M([1, 2, 5, 6], [0, 7, 4, 3], "side");
            M = l2[0];
            l2 = l2[1];
            1 === l2 ? q2 += 1e6 * (f2.plotWidth - u) : l2 || (q2 += 1e6 * u);
            q2 += 10 * (!t2 || 0 <= n2 && 180 >= n2 || 360 > n2 && 357.5 < n2 ? f2.plotHeight - d : 10 + d);
            1 === K ? q2 += 100 * p : K || (q2 += 100 * (1e3 - p));
            return { front: this.toLinePath(a4, true), top: this.toLinePath(B, true), side: this.toLinePath(M, true), zIndexes: { group: Math.round(q2) }, forcedSides: k2, isFront: K, isTop: t2 };
          };
          h.prototype.arc3d = function(a4) {
            function b2(e2) {
              var a5 = false, p = {}, b3;
              e2 = x(e2);
              for (b3 in e2)
                -1 !== d.indexOf(b3) && (p[b3] = e2[b3], delete e2[b3], a5 = true);
              return a5 ? [p, e2] : false;
            }
            var e = this.g(), h2 = e.renderer, d = "x y r innerR start end depth".split(" ");
            a4 = x(a4);
            a4.alpha = (a4.alpha || 0) * l;
            a4.beta = (a4.beta || 0) * l;
            e.top = h2.path();
            e.side1 = h2.path();
            e.side2 = h2.path();
            e.inn = h2.path();
            e.out = h2.path();
            e.onAdd = function() {
              var d2 = e.parentGroup, a5 = e.attr("class");
              e.top.add(e);
              ["out", "inn", "side1", "side2"].forEach(function(p) {
                e[p].attr({ "class": a5 + " highcharts-3d-side" }).add(d2);
              });
            };
            ["addClass", "removeClass"].forEach(function(d2) {
              e[d2] = function() {
                var a5 = arguments;
                ["top", "out", "inn", "side1", "side2"].forEach(function(p) {
                  e[p][d2].apply(e[p], a5);
                });
              };
            });
            e.setPaths = function(d2) {
              var a5 = e.renderer.arc3dPath(d2), p = 100 * a5.zTop;
              e.attribs = d2;
              e.top.attr({ d: a5.top, zIndex: a5.zTop });
              e.inn.attr({ d: a5.inn, zIndex: a5.zInn });
              e.out.attr({ d: a5.out, zIndex: a5.zOut });
              e.side1.attr({ d: a5.side1, zIndex: a5.zSide1 });
              e.side2.attr({ d: a5.side2, zIndex: a5.zSide2 });
              e.zIndex = p;
              e.attr({ zIndex: p });
              d2.center && (e.top.setRadialReference(d2.center), delete d2.center);
            };
            e.setPaths(a4);
            e.fillSetter = function(e2) {
              var d2 = c(e2).brighten(-0.1).get();
              this.fill = e2;
              this.side1.attr({ fill: d2 });
              this.side2.attr({ fill: d2 });
              this.inn.attr({ fill: d2 });
              this.out.attr({ fill: d2 });
              this.top.attr({ fill: e2 });
              return this;
            };
            ["opacity", "translateX", "translateY", "visibility"].forEach(function(d2) {
              e[d2 + "Setter"] = function(d3, a5) {
                e[a5] = d3;
                ["out", "inn", "side1", "side2", "top"].forEach(function(p) {
                  e[p].attr(a5, d3);
                });
              };
            });
            e.attr = function(d2) {
              var a5;
              if ("object" === typeof d2 && (a5 = b2(d2))) {
                var p = a5[0];
                arguments[0] = a5[1];
                t(e.attribs, p);
                e.setPaths(e.attribs);
              }
              return n.prototype.attr.apply(
                e,
                arguments
              );
            };
            e.animate = function(d2, a5, h3) {
              var p = this.attribs, u = "data-" + Math.random().toString(26).substring(2, 9);
              delete d2.center;
              delete d2.z;
              delete d2.alpha;
              delete d2.beta;
              var w = k(v(a5, this.renderer.globalAnimation));
              if (w.duration) {
                a5 = b2(d2);
                e[u] = 0;
                d2[u] = 1;
                e[u + "Setter"] = r.noop;
                if (a5) {
                  var B = a5[0];
                  w.step = function(d3, e2) {
                    function a6(d4) {
                      return p[d4] + (v(B[d4], p[d4]) - p[d4]) * e2.pos;
                    }
                    e2.prop === u && e2.elem.setPaths(x(p, { x: a6("x"), y: a6("y"), r: a6("r"), innerR: a6("innerR"), start: a6("start"), end: a6("end"), depth: a6("depth") }));
                  };
                }
                a5 = w;
              }
              return n.prototype.animate.call(
                this,
                d2,
                a5,
                h3
              );
            };
            e.destroy = function() {
              this.top.destroy();
              this.out.destroy();
              this.inn.destroy();
              this.side1.destroy();
              this.side2.destroy();
              return n.prototype.destroy.call(this);
            };
            e.hide = function() {
              this.top.hide();
              this.out.hide();
              this.inn.hide();
              this.side1.hide();
              this.side2.hide();
            };
            e.show = function(d2) {
              this.top.show(d2);
              this.out.show(d2);
              this.inn.show(d2);
              this.side1.show(d2);
              this.side2.show(d2);
            };
            return e;
          };
          h.prototype.arc3dPath = function(a4) {
            function b2(d2) {
              d2 %= 2 * Math.PI;
              d2 > Math.PI && (d2 = 2 * Math.PI - d2);
              return d2;
            }
            var e = a4.x || 0, u = a4.y || 0, d = a4.start || 0, p = (a4.end || 0) - 1e-5, w = a4.r || 0, B = a4.innerR || 0, g2 = a4.depth || 0, c2 = a4.alpha || 0, f2 = a4.beta || 0, n2 = Math.cos(d), q2 = Math.sin(d);
            a4 = Math.cos(p);
            var k2 = Math.sin(p), l2 = w * Math.cos(f2);
            w *= Math.cos(c2);
            var t2 = B * Math.cos(f2), v2 = B * Math.cos(c2);
            B = g2 * Math.sin(f2);
            var m2 = g2 * Math.sin(c2);
            g2 = [["M", e + l2 * n2, u + w * q2]];
            g2 = g2.concat(h.curveTo(e, u, l2, w, d, p, 0, 0));
            g2.push(["L", e + t2 * a4, u + v2 * k2]);
            g2 = g2.concat(h.curveTo(e, u, t2, v2, p, d, 0, 0));
            g2.push(["Z"]);
            var C2 = 0 < f2 ? Math.PI / 2 : 0;
            f2 = 0 < c2 ? 0 : Math.PI / 2;
            C2 = d > -C2 ? d : p > -C2 ? -C2 : d;
            var x2 = p < I - f2 ? p : d < I - f2 ? I - f2 : p, z2 = 2 * I - f2;
            c2 = [[
              "M",
              e + l2 * A(C2),
              u + w * E(C2)
            ]];
            c2 = c2.concat(h.curveTo(e, u, l2, w, C2, x2, 0, 0));
            p > z2 && d < z2 ? (c2.push(["L", e + l2 * A(x2) + B, u + w * E(x2) + m2]), c2 = c2.concat(h.curveTo(e, u, l2, w, x2, z2, B, m2)), c2.push(["L", e + l2 * A(z2), u + w * E(z2)]), c2 = c2.concat(h.curveTo(e, u, l2, w, z2, p, 0, 0)), c2.push(["L", e + l2 * A(p) + B, u + w * E(p) + m2]), c2 = c2.concat(h.curveTo(e, u, l2, w, p, z2, B, m2)), c2.push(["L", e + l2 * A(z2), u + w * E(z2)]), c2 = c2.concat(h.curveTo(e, u, l2, w, z2, x2, 0, 0))) : p > I - f2 && d < I - f2 && (c2.push(["L", e + l2 * Math.cos(x2) + B, u + w * Math.sin(x2) + m2]), c2 = c2.concat(h.curveTo(e, u, l2, w, x2, p, B, m2)), c2.push(["L", e + l2 * Math.cos(p), u + w * Math.sin(p)]), c2 = c2.concat(h.curveTo(e, u, l2, w, p, x2, 0, 0)));
            c2.push(["L", e + l2 * Math.cos(x2) + B, u + w * Math.sin(x2) + m2]);
            c2 = c2.concat(h.curveTo(e, u, l2, w, x2, C2, B, m2));
            c2.push(["Z"]);
            f2 = [["M", e + t2 * n2, u + v2 * q2]];
            f2 = f2.concat(h.curveTo(e, u, t2, v2, d, p, 0, 0));
            f2.push(["L", e + t2 * Math.cos(p) + B, u + v2 * Math.sin(p) + m2]);
            f2 = f2.concat(h.curveTo(e, u, t2, v2, p, d, B, m2));
            f2.push(["Z"]);
            n2 = [["M", e + l2 * n2, u + w * q2], ["L", e + l2 * n2 + B, u + w * q2 + m2], ["L", e + t2 * n2 + B, u + v2 * q2 + m2], ["L", e + t2 * n2, u + v2 * q2], ["Z"]];
            e = [["M", e + l2 * a4, u + w * k2], ["L", e + l2 * a4 + B, u + w * k2 + m2], ["L", e + t2 * a4 + B, u + v2 * k2 + m2], ["L", e + t2 * a4, u + v2 * k2], ["Z"]];
            k2 = Math.atan2(
              m2,
              -B
            );
            u = Math.abs(p + k2);
            a4 = Math.abs(d + k2);
            d = Math.abs((d + p) / 2 + k2);
            u = b2(u);
            a4 = b2(a4);
            d = b2(d);
            d *= 1e5;
            p = 1e5 * a4;
            u *= 1e5;
            return { top: g2, zTop: 1e5 * Math.PI + 1, out: c2, zOut: Math.max(d, p, u), inn: f2, zInn: Math.max(d, p, u), side1: n2, zSide1: 0.99 * u, side2: e, zSide2: 0.99 * p };
          };
          return h;
        }(m);
      });
      D(a, "Core/Chart/Chart3D.js", [a["Core/Color/Color.js"], a["Core/Defaults.js"], a["Core/Math3D.js"], a["Core/Utilities.js"]], function(a2, y, r, F) {
        var n = a2.parse, A = y.defaultOptions, m = r.perspective, z = r.shapeArea3D, f = F.addEvent, k = F.isArray, c = F.merge, b = F.pick, l = F.wrap, g;
        (function(a3) {
          function g2(a4) {
            this.is3d() && "scatter" === a4.options.type && (a4.options.type = "scatter3d");
          }
          function t() {
            if (this.chart3d && this.is3d()) {
              var a4 = this.renderer, b2 = this.options.chart.options3d, d = this.chart3d.get3dFrame(), p = this.plotLeft, h2 = this.plotLeft + this.plotWidth, g3 = this.plotTop, c2 = this.plotTop + this.plotHeight;
              b2 = b2.depth;
              var f2 = p - (d.left.visible ? d.left.size : 0), l2 = h2 + (d.right.visible ? d.right.size : 0), q = g3 - (d.top.visible ? d.top.size : 0), k2 = c2 + (d.bottom.visible ? d.bottom.size : 0), t2 = 0 - (d.front.visible ? d.front.size : 0), m2 = b2 + (d.back.visible ? d.back.size : 0), v2 = this.hasRendered ? "animate" : "attr";
              this.chart3d.frame3d = d;
              this.frameShapes || (this.frameShapes = { bottom: a4.polyhedron().add(), top: a4.polyhedron().add(), left: a4.polyhedron().add(), right: a4.polyhedron().add(), back: a4.polyhedron().add(), front: a4.polyhedron().add() });
              this.frameShapes.bottom[v2]({ "class": "highcharts-3d-frame highcharts-3d-frame-bottom", zIndex: d.bottom.frontFacing ? -1e3 : 1e3, faces: [{ fill: n(d.bottom.color).brighten(0.1).get(), vertexes: [
                { x: f2, y: k2, z: t2 },
                { x: l2, y: k2, z: t2 },
                { x: l2, y: k2, z: m2 },
                { x: f2, y: k2, z: m2 }
              ], enabled: d.bottom.visible }, { fill: n(d.bottom.color).brighten(0.1).get(), vertexes: [{ x: p, y: c2, z: b2 }, { x: h2, y: c2, z: b2 }, { x: h2, y: c2, z: 0 }, { x: p, y: c2, z: 0 }], enabled: d.bottom.visible }, { fill: n(d.bottom.color).brighten(-0.1).get(), vertexes: [{ x: f2, y: k2, z: t2 }, { x: f2, y: k2, z: m2 }, { x: p, y: c2, z: b2 }, { x: p, y: c2, z: 0 }], enabled: d.bottom.visible && !d.left.visible }, { fill: n(d.bottom.color).brighten(-0.1).get(), vertexes: [{ x: l2, y: k2, z: m2 }, { x: l2, y: k2, z: t2 }, { x: h2, y: c2, z: 0 }, { x: h2, y: c2, z: b2 }], enabled: d.bottom.visible && !d.right.visible }, {
                fill: n(d.bottom.color).get(),
                vertexes: [{ x: l2, y: k2, z: t2 }, { x: f2, y: k2, z: t2 }, { x: p, y: c2, z: 0 }, { x: h2, y: c2, z: 0 }],
                enabled: d.bottom.visible && !d.front.visible
              }, { fill: n(d.bottom.color).get(), vertexes: [{ x: f2, y: k2, z: m2 }, { x: l2, y: k2, z: m2 }, { x: h2, y: c2, z: b2 }, { x: p, y: c2, z: b2 }], enabled: d.bottom.visible && !d.back.visible }] });
              this.frameShapes.top[v2]({ "class": "highcharts-3d-frame highcharts-3d-frame-top", zIndex: d.top.frontFacing ? -1e3 : 1e3, faces: [
                { fill: n(d.top.color).brighten(0.1).get(), vertexes: [{ x: f2, y: q, z: m2 }, { x: l2, y: q, z: m2 }, { x: l2, y: q, z: t2 }, { x: f2, y: q, z: t2 }], enabled: d.top.visible },
                { fill: n(d.top.color).brighten(0.1).get(), vertexes: [{ x: p, y: g3, z: 0 }, { x: h2, y: g3, z: 0 }, { x: h2, y: g3, z: b2 }, { x: p, y: g3, z: b2 }], enabled: d.top.visible },
                { fill: n(d.top.color).brighten(-0.1).get(), vertexes: [{ x: f2, y: q, z: m2 }, { x: f2, y: q, z: t2 }, { x: p, y: g3, z: 0 }, { x: p, y: g3, z: b2 }], enabled: d.top.visible && !d.left.visible },
                { fill: n(d.top.color).brighten(-0.1).get(), vertexes: [{ x: l2, y: q, z: t2 }, { x: l2, y: q, z: m2 }, { x: h2, y: g3, z: b2 }, { x: h2, y: g3, z: 0 }], enabled: d.top.visible && !d.right.visible },
                { fill: n(d.top.color).get(), vertexes: [{ x: f2, y: q, z: t2 }, { x: l2, y: q, z: t2 }, {
                  x: h2,
                  y: g3,
                  z: 0
                }, { x: p, y: g3, z: 0 }], enabled: d.top.visible && !d.front.visible },
                { fill: n(d.top.color).get(), vertexes: [{ x: l2, y: q, z: m2 }, { x: f2, y: q, z: m2 }, { x: p, y: g3, z: b2 }, { x: h2, y: g3, z: b2 }], enabled: d.top.visible && !d.back.visible }
              ] });
              this.frameShapes.left[v2]({ "class": "highcharts-3d-frame highcharts-3d-frame-left", zIndex: d.left.frontFacing ? -1e3 : 1e3, faces: [
                { fill: n(d.left.color).brighten(0.1).get(), vertexes: [{ x: f2, y: k2, z: t2 }, { x: p, y: c2, z: 0 }, { x: p, y: c2, z: b2 }, { x: f2, y: k2, z: m2 }], enabled: d.left.visible && !d.bottom.visible },
                {
                  fill: n(d.left.color).brighten(0.1).get(),
                  vertexes: [{ x: f2, y: q, z: m2 }, { x: p, y: g3, z: b2 }, { x: p, y: g3, z: 0 }, { x: f2, y: q, z: t2 }],
                  enabled: d.left.visible && !d.top.visible
                },
                { fill: n(d.left.color).brighten(-0.1).get(), vertexes: [{ x: f2, y: k2, z: m2 }, { x: f2, y: q, z: m2 }, { x: f2, y: q, z: t2 }, { x: f2, y: k2, z: t2 }], enabled: d.left.visible },
                { fill: n(d.left.color).brighten(-0.1).get(), vertexes: [{ x: p, y: g3, z: b2 }, { x: p, y: c2, z: b2 }, { x: p, y: c2, z: 0 }, { x: p, y: g3, z: 0 }], enabled: d.left.visible },
                { fill: n(d.left.color).get(), vertexes: [{ x: f2, y: k2, z: t2 }, { x: f2, y: q, z: t2 }, { x: p, y: g3, z: 0 }, { x: p, y: c2, z: 0 }], enabled: d.left.visible && !d.front.visible },
                { fill: n(d.left.color).get(), vertexes: [{ x: f2, y: q, z: m2 }, { x: f2, y: k2, z: m2 }, { x: p, y: c2, z: b2 }, { x: p, y: g3, z: b2 }], enabled: d.left.visible && !d.back.visible }
              ] });
              this.frameShapes.right[v2]({ "class": "highcharts-3d-frame highcharts-3d-frame-right", zIndex: d.right.frontFacing ? -1e3 : 1e3, faces: [{ fill: n(d.right.color).brighten(0.1).get(), vertexes: [{ x: l2, y: k2, z: m2 }, { x: h2, y: c2, z: b2 }, { x: h2, y: c2, z: 0 }, { x: l2, y: k2, z: t2 }], enabled: d.right.visible && !d.bottom.visible }, { fill: n(d.right.color).brighten(0.1).get(), vertexes: [{ x: l2, y: q, z: t2 }, { x: h2, y: g3, z: 0 }, {
                x: h2,
                y: g3,
                z: b2
              }, { x: l2, y: q, z: m2 }], enabled: d.right.visible && !d.top.visible }, { fill: n(d.right.color).brighten(-0.1).get(), vertexes: [{ x: h2, y: g3, z: 0 }, { x: h2, y: c2, z: 0 }, { x: h2, y: c2, z: b2 }, { x: h2, y: g3, z: b2 }], enabled: d.right.visible }, { fill: n(d.right.color).brighten(-0.1).get(), vertexes: [{ x: l2, y: k2, z: t2 }, { x: l2, y: q, z: t2 }, { x: l2, y: q, z: m2 }, { x: l2, y: k2, z: m2 }], enabled: d.right.visible }, { fill: n(d.right.color).get(), vertexes: [{ x: l2, y: q, z: t2 }, { x: l2, y: k2, z: t2 }, { x: h2, y: c2, z: 0 }, { x: h2, y: g3, z: 0 }], enabled: d.right.visible && !d.front.visible }, {
                fill: n(d.right.color).get(),
                vertexes: [{ x: l2, y: k2, z: m2 }, { x: l2, y: q, z: m2 }, { x: h2, y: g3, z: b2 }, { x: h2, y: c2, z: b2 }],
                enabled: d.right.visible && !d.back.visible
              }] });
              this.frameShapes.back[v2]({ "class": "highcharts-3d-frame highcharts-3d-frame-back", zIndex: d.back.frontFacing ? -1e3 : 1e3, faces: [{ fill: n(d.back.color).brighten(0.1).get(), vertexes: [{ x: l2, y: k2, z: m2 }, { x: f2, y: k2, z: m2 }, { x: p, y: c2, z: b2 }, { x: h2, y: c2, z: b2 }], enabled: d.back.visible && !d.bottom.visible }, { fill: n(d.back.color).brighten(0.1).get(), vertexes: [{ x: f2, y: q, z: m2 }, { x: l2, y: q, z: m2 }, { x: h2, y: g3, z: b2 }, { x: p, y: g3, z: b2 }], enabled: d.back.visible && !d.top.visible }, { fill: n(d.back.color).brighten(-0.1).get(), vertexes: [{ x: f2, y: k2, z: m2 }, { x: f2, y: q, z: m2 }, { x: p, y: g3, z: b2 }, { x: p, y: c2, z: b2 }], enabled: d.back.visible && !d.left.visible }, { fill: n(d.back.color).brighten(-0.1).get(), vertexes: [{ x: l2, y: q, z: m2 }, { x: l2, y: k2, z: m2 }, { x: h2, y: c2, z: b2 }, { x: h2, y: g3, z: b2 }], enabled: d.back.visible && !d.right.visible }, { fill: n(d.back.color).get(), vertexes: [{ x: p, y: g3, z: b2 }, { x: h2, y: g3, z: b2 }, { x: h2, y: c2, z: b2 }, { x: p, y: c2, z: b2 }], enabled: d.back.visible }, { fill: n(d.back.color).get(), vertexes: [
                { x: f2, y: k2, z: m2 },
                { x: l2, y: k2, z: m2 },
                { x: l2, y: q, z: m2 },
                { x: f2, y: q, z: m2 }
              ], enabled: d.back.visible }] });
              this.frameShapes.front[v2]({ "class": "highcharts-3d-frame highcharts-3d-frame-front", zIndex: d.front.frontFacing ? -1e3 : 1e3, faces: [{ fill: n(d.front.color).brighten(0.1).get(), vertexes: [{ x: f2, y: k2, z: t2 }, { x: l2, y: k2, z: t2 }, { x: h2, y: c2, z: 0 }, { x: p, y: c2, z: 0 }], enabled: d.front.visible && !d.bottom.visible }, { fill: n(d.front.color).brighten(0.1).get(), vertexes: [{ x: l2, y: q, z: t2 }, { x: f2, y: q, z: t2 }, { x: p, y: g3, z: 0 }, { x: h2, y: g3, z: 0 }], enabled: d.front.visible && !d.top.visible }, {
                fill: n(d.front.color).brighten(-0.1).get(),
                vertexes: [{ x: f2, y: q, z: t2 }, { x: f2, y: k2, z: t2 }, { x: p, y: c2, z: 0 }, { x: p, y: g3, z: 0 }],
                enabled: d.front.visible && !d.left.visible
              }, { fill: n(d.front.color).brighten(-0.1).get(), vertexes: [{ x: l2, y: k2, z: t2 }, { x: l2, y: q, z: t2 }, { x: h2, y: g3, z: 0 }, { x: h2, y: c2, z: 0 }], enabled: d.front.visible && !d.right.visible }, { fill: n(d.front.color).get(), vertexes: [{ x: h2, y: g3, z: 0 }, { x: p, y: g3, z: 0 }, { x: p, y: c2, z: 0 }, { x: h2, y: c2, z: 0 }], enabled: d.front.visible }, { fill: n(d.front.color).get(), vertexes: [{ x: l2, y: k2, z: t2 }, { x: f2, y: k2, z: t2 }, { x: f2, y: q, z: t2 }, { x: l2, y: q, z: t2 }], enabled: d.front.visible }] });
            }
          }
          function x() {
            this.styledMode && [{ name: "darker", slope: 0.6 }, { name: "brighter", slope: 1.4 }].forEach(function(a4) {
              this.renderer.definition({ tagName: "filter", attributes: { id: "highcharts-" + a4.name }, children: [{ tagName: "feComponentTransfer", children: [{ tagName: "feFuncR", attributes: { type: "linear", slope: a4.slope } }, { tagName: "feFuncG", attributes: { type: "linear", slope: a4.slope } }, { tagName: "feFuncB", attributes: { type: "linear", slope: a4.slope } }] }] });
            }, this);
          }
          function v() {
            var a4 = this.options;
            this.is3d() && (a4.series || []).forEach(function(e) {
              "scatter" === (e.type || a4.chart.type || a4.chart.defaultSeriesType) && (e.type = "scatter3d");
            });
          }
          function C() {
            var a4 = this.options.chart.options3d;
            if (this.chart3d && this.is3d()) {
              a4 && (a4.alpha = a4.alpha % 360 + (0 <= a4.alpha ? 0 : 360), a4.beta = a4.beta % 360 + (0 <= a4.beta ? 0 : 360));
              var b2 = this.inverted, d = this.clipBox, h2 = this.margin;
              d[b2 ? "y" : "x"] = -(h2[3] || 0);
              d[b2 ? "x" : "y"] = -(h2[0] || 0);
              d[b2 ? "height" : "width"] = this.chartWidth + (h2[3] || 0) + (h2[1] || 0);
              d[b2 ? "width" : "height"] = this.chartHeight + (h2[0] || 0) + (h2[2] || 0);
              this.scale3d = 1;
              true === a4.fitToPlot && (this.scale3d = this.chart3d.getScale(a4.depth));
              this.chart3d.frame3d = this.chart3d.get3dFrame();
            }
          }
          function E() {
            this.is3d() && (this.isDirtyBox = true);
          }
          function r2() {
            this.chart3d && this.is3d() && (this.chart3d.frame3d = this.chart3d.get3dFrame());
          }
          function y2() {
            this.chart3d || (this.chart3d = new L(this));
          }
          function O(a4) {
            return this.is3d() || a4.apply(this, [].slice.call(arguments, 1));
          }
          function h(a4) {
            var e = this.series.length;
            if (this.is3d())
              for (; e--; )
                a4 = this.series[e], a4.translate(), a4.render();
            else
              a4.call(this);
          }
          function K(a4) {
            a4.apply(this, [].slice.call(arguments, 1));
            this.is3d() && (this.container.className += " highcharts-3d-chart");
          }
          var L = function() {
            function a4(a5) {
              this.frame3d = void 0;
              this.chart = a5;
            }
            a4.prototype.get3dFrame = function() {
              var a5 = this.chart, d = a5.options.chart.options3d, e = d.frame, h2 = a5.plotLeft, g3 = a5.plotLeft + a5.plotWidth, c2 = a5.plotTop, f2 = a5.plotTop + a5.plotHeight, l2 = d.depth, q = function(d2) {
                d2 = z(d2, a5);
                return 0.5 < d2 ? 1 : -0.5 > d2 ? -1 : 0;
              }, k2 = q([{ x: h2, y: f2, z: l2 }, { x: g3, y: f2, z: l2 }, { x: g3, y: f2, z: 0 }, { x: h2, y: f2, z: 0 }]), t2 = q([{ x: h2, y: c2, z: 0 }, { x: g3, y: c2, z: 0 }, { x: g3, y: c2, z: l2 }, { x: h2, y: c2, z: l2 }]), n2 = q([{ x: h2, y: c2, z: 0 }, { x: h2, y: c2, z: l2 }, {
                x: h2,
                y: f2,
                z: l2
              }, { x: h2, y: f2, z: 0 }]), v2 = q([{ x: g3, y: c2, z: l2 }, { x: g3, y: c2, z: 0 }, { x: g3, y: f2, z: 0 }, { x: g3, y: f2, z: l2 }]), x2 = q([{ x: h2, y: f2, z: 0 }, { x: g3, y: f2, z: 0 }, { x: g3, y: c2, z: 0 }, { x: h2, y: c2, z: 0 }]);
              q = q([{ x: h2, y: c2, z: l2 }, { x: g3, y: c2, z: l2 }, { x: g3, y: f2, z: l2 }, { x: h2, y: f2, z: l2 }]);
              var L2 = false, C2 = false, E2 = false, A2 = false;
              [].concat(a5.xAxis, a5.yAxis, a5.zAxis).forEach(function(a6) {
                a6 && (a6.horiz ? a6.opposite ? C2 = true : L2 = true : a6.opposite ? A2 = true : E2 = true);
              });
              var r3 = function(a6, d2, e2) {
                for (var h3 = ["size", "color", "visible"], g4 = {}, c3 = 0; c3 < h3.length; c3++)
                  for (var f3 = h3[c3], l3 = 0; l3 < a6.length; l3++)
                    if ("object" === typeof a6[l3]) {
                      var q2 = a6[l3][f3];
                      if ("undefined" !== typeof q2 && null !== q2) {
                        g4[f3] = q2;
                        break;
                      }
                    }
                a6 = e2;
                true === g4.visible || false === g4.visible ? a6 = g4.visible : "auto" === g4.visible && (a6 = 0 < d2);
                return { size: b(g4.size, 1), color: b(g4.color, "none"), frontFacing: 0 < d2, visible: a6 };
              };
              e = { axes: {}, bottom: r3([e.bottom, e.top, e], k2, L2), top: r3([e.top, e.bottom, e], t2, C2), left: r3([e.left, e.right, e.side, e], n2, E2), right: r3([e.right, e.left, e.side, e], v2, A2), back: r3([e.back, e.front, e], q, true), front: r3([e.front, e.back, e], x2, false) };
              "auto" === d.axisLabelPosition ? (v2 = function(a6, d2) {
                return a6.visible !== d2.visible || a6.visible && d2.visible && a6.frontFacing !== d2.frontFacing;
              }, d = [], v2(e.left, e.front) && d.push({ y: (c2 + f2) / 2, x: h2, z: 0, xDir: { x: 1, y: 0, z: 0 } }), v2(e.left, e.back) && d.push({ y: (c2 + f2) / 2, x: h2, z: l2, xDir: { x: 0, y: 0, z: -1 } }), v2(e.right, e.front) && d.push({ y: (c2 + f2) / 2, x: g3, z: 0, xDir: { x: 0, y: 0, z: 1 } }), v2(e.right, e.back) && d.push({ y: (c2 + f2) / 2, x: g3, z: l2, xDir: { x: -1, y: 0, z: 0 } }), k2 = [], v2(e.bottom, e.front) && k2.push({ x: (h2 + g3) / 2, y: f2, z: 0, xDir: { x: 1, y: 0, z: 0 } }), v2(e.bottom, e.back) && k2.push({ x: (h2 + g3) / 2, y: f2, z: l2, xDir: { x: -1, y: 0, z: 0 } }), t2 = [], v2(e.top, e.front) && t2.push({
                x: (h2 + g3) / 2,
                y: c2,
                z: 0,
                xDir: { x: 1, y: 0, z: 0 }
              }), v2(e.top, e.back) && t2.push({ x: (h2 + g3) / 2, y: c2, z: l2, xDir: { x: -1, y: 0, z: 0 } }), n2 = [], v2(e.bottom, e.left) && n2.push({ z: (0 + l2) / 2, y: f2, x: h2, xDir: { x: 0, y: 0, z: -1 } }), v2(e.bottom, e.right) && n2.push({ z: (0 + l2) / 2, y: f2, x: g3, xDir: { x: 0, y: 0, z: 1 } }), f2 = [], v2(e.top, e.left) && f2.push({ z: (0 + l2) / 2, y: c2, x: h2, xDir: { x: 0, y: 0, z: -1 } }), v2(e.top, e.right) && f2.push({ z: (0 + l2) / 2, y: c2, x: g3, xDir: { x: 0, y: 0, z: 1 } }), h2 = function(d2, e2, h3) {
                if (0 === d2.length)
                  return null;
                if (1 === d2.length)
                  return d2[0];
                for (var b2 = m(d2, a5, false), g4 = 0, c3 = 1; c3 < b2.length; c3++)
                  h3 * b2[c3][e2] > h3 * b2[g4][e2] ? g4 = c3 : h3 * b2[c3][e2] === h3 * b2[g4][e2] && b2[c3].z < b2[g4].z && (g4 = c3);
                return d2[g4];
              }, e.axes = { y: { left: h2(d, "x", -1), right: h2(d, "x", 1) }, x: { top: h2(t2, "y", -1), bottom: h2(k2, "y", 1) }, z: { top: h2(f2, "y", -1), bottom: h2(n2, "y", 1) } }) : e.axes = { y: { left: { x: h2, z: 0, xDir: { x: 1, y: 0, z: 0 } }, right: { x: g3, z: 0, xDir: { x: 0, y: 0, z: 1 } } }, x: { top: { y: c2, z: 0, xDir: { x: 1, y: 0, z: 0 } }, bottom: { y: f2, z: 0, xDir: { x: 1, y: 0, z: 0 } } }, z: { top: { x: E2 ? g3 : h2, y: c2, xDir: E2 ? { x: 0, y: 0, z: 1 } : { x: 0, y: 0, z: -1 } }, bottom: { x: E2 ? g3 : h2, y: f2, xDir: E2 ? { x: 0, y: 0, z: 1 } : { x: 0, y: 0, z: -1 } } } };
              return e;
            };
            a4.prototype.getScale = function(a5) {
              var d = this.chart, e = d.plotLeft, h2 = d.plotWidth + e, b2 = d.plotTop, g3 = d.plotHeight + b2, c2 = e + d.plotWidth / 2, f2 = b2 + d.plotHeight / 2, l2 = Number.MAX_VALUE, q = -Number.MAX_VALUE, k2 = Number.MAX_VALUE, t2 = -Number.MAX_VALUE, n2 = 1;
              var v2 = [{ x: e, y: b2, z: 0 }, { x: e, y: b2, z: a5 }];
              [0, 1].forEach(function(a6) {
                v2.push({ x: h2, y: v2[a6].y, z: v2[a6].z });
              });
              [0, 1, 2, 3].forEach(function(a6) {
                v2.push({ x: v2[a6].x, y: g3, z: v2[a6].z });
              });
              v2 = m(v2, d, false);
              v2.forEach(function(a6) {
                l2 = Math.min(l2, a6.x);
                q = Math.max(q, a6.x);
                k2 = Math.min(k2, a6.y);
                t2 = Math.max(t2, a6.y);
              });
              e > l2 && (n2 = Math.min(n2, 1 - Math.abs((e + c2) / (l2 + c2)) % 1));
              h2 < q && (n2 = Math.min(n2, (h2 - c2) / (q - c2)));
              b2 > k2 && (n2 = 0 > k2 ? Math.min(n2, (b2 + f2) / (-k2 + b2 + f2)) : Math.min(n2, 1 - (b2 + f2) / (k2 + f2) % 1));
              g3 < t2 && (n2 = Math.min(n2, Math.abs((g3 - f2) / (t2 - f2))));
              return n2;
            };
            return a4;
          }();
          a3.Composition = L;
          a3.defaultOptions = { chart: { options3d: { enabled: false, alpha: 0, beta: 0, depth: 100, fitToPlot: true, viewDistance: 25, axisLabelPosition: null, frame: { visible: "default", size: 1, bottom: {}, top: {}, left: {}, right: {}, back: {}, front: {} } } } };
          a3.compose = function(e, b2) {
            var d = e.prototype;
            b2 = b2.prototype;
            d.is3d = function() {
              return !(!this.options.chart.options3d || !this.options.chart.options3d.enabled);
            };
            d.propsRequireDirtyBox.push("chart.options3d");
            d.propsRequireUpdateSeries.push("chart.options3d");
            b2.matrixSetter = function() {
              if (1 > this.pos && (k(this.start) || k(this.end))) {
                var a4 = this.start || [1, 0, 0, 1, 0, 0], d2 = this.end || [1, 0, 0, 1, 0, 0];
                var e2 = [];
                for (var h2 = 0; 6 > h2; h2++)
                  e2.push(this.pos * d2[h2] + (1 - this.pos) * a4[h2]);
              } else
                e2 = this.end;
              this.elem.attr(this.prop, e2, null, true);
            };
            c(true, A, a3.defaultOptions);
            f(e, "init", y2);
            f(e, "addSeries", g2);
            f(e, "afterDrawChartBox", t);
            f(e, "afterGetContainer", x);
            f(e, "afterInit", v);
            f(e, "afterSetChartSize", C);
            f(e, "beforeRedraw", E);
            f(e, "beforeRender", r2);
            l(d, "isInsidePlot", O);
            l(d, "renderSeries", h);
            l(d, "setClassName", K);
          };
        })(g || (g = {}));
        "";
        return g;
      });
      D(a, "Core/Axis/ZAxis.js", [a["Core/Axis/Axis.js"], a["Core/Utilities.js"]], function(a2, y) {
        function r(a3) {
          return new c(this, a3);
        }
        function A() {
          var a3 = this, c2 = this.options.zAxis = f(this.options.zAxis || {});
          this.is3d() && (this.zAxis = [], c2.forEach(function(b, c3) {
            b.index = c3;
            b.isX = true;
            a3.addZAxis(b).setScale();
          }));
        }
        var n = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(b, c2) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, b2) {
              a4.__proto__ = b2;
            } || function(a4, b2) {
              for (var c3 in b2)
                b2.hasOwnProperty(c3) && (a4[c3] = b2[c3]);
            };
            return a3(b, c2);
          };
          return function(b, c2) {
            function g() {
              this.constructor = b;
            }
            a3(b, c2);
            b.prototype = null === c2 ? Object.create(c2) : (g.prototype = c2.prototype, new g());
          };
        }(), G = y.addEvent, m = y.merge, z = y.pick, f = y.splat, k = [], c = function(a3) {
          function b(b2, c2) {
            b2 = a3.call(this, b2, c2) || this;
            b2.isZAxis = true;
            return b2;
          }
          n(b, a3);
          b.compose = function(a4) {
            -1 === k.indexOf(a4) && (k.push(a4), G(a4, "afterGetAxes", A), a4 = a4.prototype, a4.addZAxis = r, a4.collectionsWithInit.zAxis = [a4.addZAxis], a4.collectionsWithUpdate.push("zAxis"));
          };
          b.prototype.getSeriesExtremes = function() {
            var a4 = this, b2 = this.chart;
            this.hasVisibleSeries = false;
            this.dataMin = this.dataMax = this.ignoreMinPadding = this.ignoreMaxPadding = void 0;
            this.stacking && this.stacking.buildStacks();
            this.series.forEach(function(c2) {
              if (c2.visible || !b2.options.chart.ignoreHiddenSeries)
                a4.hasVisibleSeries = true, c2 = c2.zData, c2.length && (a4.dataMin = Math.min(z(
                  a4.dataMin,
                  c2[0]
                ), Math.min.apply(null, c2)), a4.dataMax = Math.max(z(a4.dataMax, c2[0]), Math.max.apply(null, c2)));
            });
          };
          b.prototype.setAxisSize = function() {
            var b2 = this.chart;
            a3.prototype.setAxisSize.call(this);
            this.width = this.len = b2.options.chart.options3d && b2.options.chart.options3d.depth || 0;
            this.right = b2.chartWidth - this.width - this.left;
          };
          b.prototype.setOptions = function(b2) {
            b2 = m({ offset: 0, lineWidth: 0 }, b2);
            this.isZAxis = true;
            a3.prototype.setOptions.call(this, b2);
            this.coll = "zAxis";
          };
          return b;
        }(a2);
        return c;
      });
      D(
        a,
        "Core/Axis/Axis3DDefaults.js",
        [],
        function() {
          return { labels: { position3d: "offset", skew3d: false }, title: { position3d: null, skew3d: null } };
        }
      );
      D(a, "Core/Axis/Tick3DComposition.js", [a["Core/Utilities.js"]], function(a2) {
        function A(a3) {
          var f = this.axis.axis3D;
          f && n(a3.pos, f.fix3dPosition(a3.pos));
        }
        function r(a3) {
          var f = this.axis.axis3D, k = a3.apply(this, [].slice.call(arguments, 1));
          if (f) {
            var c = k[0], b = k[1];
            if ("M" === c[0] && "L" === b[0])
              return f = [f.fix3dPosition({ x: c[1], y: c[2], z: 0 }), f.fix3dPosition({ x: b[1], y: b[2], z: 0 })], this.axis.chart.renderer.toLineSegments(f);
          }
          return k;
        }
        var F = a2.addEvent, n = a2.extend, G = a2.wrap, m = [];
        return { compose: function(a3) {
          -1 === m.indexOf(a3) && (m.push(a3), F(a3, "afterGetLabelPosition", A), G(a3.prototype, "getMarkPath", r));
        } };
      });
      D(a, "Core/Axis/Axis3DComposition.js", [a["Core/Axis/Axis3DDefaults.js"], a["Core/Globals.js"], a["Core/Math3D.js"], a["Core/Axis/Tick3DComposition.js"], a["Core/Utilities.js"]], function(a2, y, r, F, n) {
        function A() {
          var a3 = this.chart, b2 = this.options;
          a3.is3d && a3.is3d() && "colorAxis" !== this.coll && (b2.tickWidth = J(b2.tickWidth, 0), b2.gridLineWidth = J(
            b2.gridLineWidth,
            1
          ));
        }
        function m(a3) {
          this.chart.is3d() && "colorAxis" !== this.coll && a3.point && (a3.point.crosshairPos = this.isXAxis ? a3.point.axisXpos : this.len - a3.point.axisYpos);
        }
        function z() {
          this.axis3D || (this.axis3D = new D2(this));
        }
        function f(a3) {
          return this.chart.is3d() && "colorAxis" !== this.coll ? [] : a3.apply(this, [].slice.call(arguments, 1));
        }
        function k(a3) {
          if (!this.chart.is3d() || "colorAxis" === this.coll)
            return a3.apply(this, [].slice.call(arguments, 1));
          var b2 = arguments, c2 = b2[2], f2 = [];
          b2 = this.getPlotLinePath({ value: b2[1] });
          c2 = this.getPlotLinePath({ value: c2 });
          if (b2 && c2)
            for (var e = 0; e < b2.length; e += 2) {
              var g2 = b2[e], d = b2[e + 1], l2 = c2[e], k2 = c2[e + 1];
              "M" === g2[0] && "L" === d[0] && "M" === l2[0] && "L" === k2[0] && f2.push(g2, d, k2, ["L", l2[1], l2[2]], ["Z"]);
            }
          return f2;
        }
        function c(a3) {
          var b2 = this.axis3D, c2 = this.chart, f2 = a3.apply(this, [].slice.call(arguments, 1));
          if ("colorAxis" === this.coll || !c2.chart3d || !c2.is3d() || null === f2)
            return f2;
          var e = c2.options.chart.options3d, g2 = this.isZAxis ? c2.plotWidth : e.depth;
          e = c2.chart3d.frame3d;
          var d = f2[0], l2 = f2[1];
          f2 = [];
          "M" === d[0] && "L" === l2[0] && (b2 = [b2.swapZ({ x: d[1], y: d[2], z: 0 }), b2.swapZ({
            x: d[1],
            y: d[2],
            z: g2
          }), b2.swapZ({ x: l2[1], y: l2[2], z: 0 }), b2.swapZ({ x: l2[1], y: l2[2], z: g2 })], this.horiz ? (this.isZAxis ? (e.left.visible && f2.push(b2[0], b2[2]), e.right.visible && f2.push(b2[1], b2[3])) : (e.front.visible && f2.push(b2[0], b2[2]), e.back.visible && f2.push(b2[1], b2[3])), e.top.visible && f2.push(b2[0], b2[1]), e.bottom.visible && f2.push(b2[2], b2[3])) : (e.front.visible && f2.push(b2[0], b2[2]), e.back.visible && f2.push(b2[1], b2[3]), e.left.visible && f2.push(b2[0], b2[1]), e.right.visible && f2.push(b2[2], b2[3])), f2 = C(f2, this.chart, false));
          return c2.renderer.toLineSegments(f2);
        }
        function b(a3, b2) {
          var c2 = this.chart, h = this.ticks, e = this.gridGroup;
          if (this.categories && c2.frameShapes && c2.is3d() && e && b2 && b2.label) {
            e = e.element.childNodes[0].getBBox();
            var f2 = c2.frameShapes.left.getBBox(), d = c2.options.chart.options3d;
            c2 = { x: c2.plotWidth / 2, y: c2.plotHeight / 2, z: d.depth / 2, vd: J(d.depth, 1) * J(d.viewDistance, 0) };
            d = b2.pos;
            var g2 = h[d - 1], l2 = h[d + 1], k2 = h = void 0;
            0 !== d && g2 && g2.label && g2.label.xy && (h = q({ x: g2.label.xy.x, y: g2.label.xy.y, z: null }, c2, c2.vd));
            l2 && l2.label && l2.label.xy && (k2 = q(
              { x: l2.label.xy.x, y: l2.label.xy.y, z: null },
              c2,
              c2.vd
            ));
            d = { x: b2.label.xy.x, y: b2.label.xy.y, z: null };
            d = q(d, c2, c2.vd);
            return Math.abs(h ? d.x - h.x : k2 ? k2.x - d.x : e.x - f2.x);
          }
          return a3.apply(this, [].slice.call(arguments, 1));
        }
        function l(a3) {
          var b2 = a3.apply(this, [].slice.call(arguments, 1));
          return this.axis3D ? this.axis3D.fix3dPosition(b2, true) : b2;
        }
        var g = y.deg2rad, C = r.perspective, q = r.perspective3D, t = r.shapeArea, x = n.addEvent, v = n.merge, J = n.pick, E = n.wrap, I = [], D2 = function() {
          function q2(a3) {
            this.axis = a3;
          }
          q2.compose = function(h, g2) {
            F.compose(g2);
            -1 === I.indexOf(h) && (I.push(h), v(
              true,
              h.defaultOptions,
              a2
            ), h.keepProps.push("axis3D"), x(h, "init", z), x(h, "afterSetOptions", A), x(h, "drawCrosshair", m), h = h.prototype, E(h, "getLinePath", f), E(h, "getPlotBandPath", k), E(h, "getPlotLinePath", c), E(h, "getSlotWidth", b), E(h, "getTitlePosition", l));
          };
          q2.prototype.fix3dPosition = function(a3, b2) {
            var c2 = this.axis, e = c2.chart;
            if ("colorAxis" === c2.coll || !e.chart3d || !e.is3d())
              return a3;
            var f2 = g * e.options.chart.options3d.alpha, d = g * e.options.chart.options3d.beta, h = J(b2 && c2.options.title.position3d, c2.options.labels.position3d);
            b2 = J(
              b2 && c2.options.title.skew3d,
              c2.options.labels.skew3d
            );
            var l2 = e.chart3d.frame3d, k2 = e.plotLeft, q3 = e.plotWidth + k2, n2 = e.plotTop, m2 = e.plotHeight + n2, v2 = e = 0, x2 = { x: 0, y: 1, z: 0 }, E2 = false;
            a3 = c2.axis3D.swapZ({ x: a3.x, y: a3.y, z: 0 });
            if (c2.isZAxis)
              if (c2.opposite) {
                if (null === l2.axes.z.top)
                  return {};
                v2 = a3.y - n2;
                a3.x = l2.axes.z.top.x;
                a3.y = l2.axes.z.top.y;
                k2 = l2.axes.z.top.xDir;
                E2 = !l2.top.frontFacing;
              } else {
                if (null === l2.axes.z.bottom)
                  return {};
                v2 = a3.y - m2;
                a3.x = l2.axes.z.bottom.x;
                a3.y = l2.axes.z.bottom.y;
                k2 = l2.axes.z.bottom.xDir;
                E2 = !l2.bottom.frontFacing;
              }
            else if (c2.horiz)
              if (c2.opposite) {
                if (null === l2.axes.x.top)
                  return {};
                v2 = a3.y - n2;
                a3.y = l2.axes.x.top.y;
                a3.z = l2.axes.x.top.z;
                k2 = l2.axes.x.top.xDir;
                E2 = !l2.top.frontFacing;
              } else {
                if (null === l2.axes.x.bottom)
                  return {};
                v2 = a3.y - m2;
                a3.y = l2.axes.x.bottom.y;
                a3.z = l2.axes.x.bottom.z;
                k2 = l2.axes.x.bottom.xDir;
                E2 = !l2.bottom.frontFacing;
              }
            else if (c2.opposite) {
              if (null === l2.axes.y.right)
                return {};
              e = a3.x - q3;
              a3.x = l2.axes.y.right.x;
              a3.z = l2.axes.y.right.z;
              k2 = l2.axes.y.right.xDir;
              k2 = { x: k2.z, y: k2.y, z: -k2.x };
            } else {
              if (null === l2.axes.y.left)
                return {};
              e = a3.x - k2;
              a3.x = l2.axes.y.left.x;
              a3.z = l2.axes.y.left.z;
              k2 = l2.axes.y.left.xDir;
            }
            "chart" !== h && ("flap" === h ? c2.horiz ? (d = Math.sin(f2), f2 = Math.cos(f2), c2.opposite && (d = -d), E2 && (d = -d), x2 = { x: k2.z * d, y: f2, z: -k2.x * d }) : k2 = { x: Math.cos(d), y: 0, z: Math.sin(d) } : "ortho" === h ? c2.horiz ? (x2 = Math.cos(f2), h = Math.sin(d) * x2, f2 = -Math.sin(f2), d = -x2 * Math.cos(d), x2 = { x: k2.y * d - k2.z * f2, y: k2.z * h - k2.x * d, z: k2.x * f2 - k2.y * h }, f2 = 1 / Math.sqrt(x2.x * x2.x + x2.y * x2.y + x2.z * x2.z), E2 && (f2 = -f2), x2 = { x: f2 * x2.x, y: f2 * x2.y, z: f2 * x2.z }) : k2 = { x: Math.cos(d), y: 0, z: Math.sin(d) } : c2.horiz ? x2 = { x: Math.sin(d) * Math.sin(f2), y: Math.cos(f2), z: -Math.cos(d) * Math.sin(f2) } : k2 = { x: Math.cos(d), y: 0, z: Math.sin(d) });
            a3.x += e * k2.x + v2 * x2.x;
            a3.y += e * k2.y + v2 * x2.y;
            a3.z += e * k2.z + v2 * x2.z;
            e = C([a3], c2.chart)[0];
            b2 && (0 > t(C([a3, { x: a3.x + k2.x, y: a3.y + k2.y, z: a3.z + k2.z }, { x: a3.x + x2.x, y: a3.y + x2.y, z: a3.z + x2.z }], c2.chart)) && (k2 = { x: -k2.x, y: -k2.y, z: -k2.z }), a3 = C([{ x: a3.x, y: a3.y, z: a3.z }, { x: a3.x + k2.x, y: a3.y + k2.y, z: a3.z + k2.z }, { x: a3.x + x2.x, y: a3.y + x2.y, z: a3.z + x2.z }], c2.chart), e.matrix = [a3[1].x - a3[0].x, a3[1].y - a3[0].y, a3[2].x - a3[0].x, a3[2].y - a3[0].y, e.x, e.y], e.matrix[4] -= e.x * e.matrix[0] + e.y * e.matrix[2], e.matrix[5] -= e.x * e.matrix[1] + e.y * e.matrix[3]);
            return e;
          };
          q2.prototype.swapZ = function(a3, b2) {
            var c2 = this.axis;
            return c2.isZAxis ? (b2 = b2 ? 0 : c2.chart.plotLeft, { x: b2 + a3.z, y: a3.y, z: a3.x - b2 }) : a3;
          };
          return q2;
        }();
        return D2;
      });
      D(a, "Core/Series/Series3D.js", [a["Core/Math3D.js"], a["Core/Series/Series.js"], a["Core/Utilities.js"]], function(a2, y, r) {
        var A = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(c, b) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, b2) {
              a4.__proto__ = b2;
            } || function(a4, b2) {
              for (var c2 in b2)
                b2.hasOwnProperty(c2) && (a4[c2] = b2[c2]);
            };
            return a3(c, b);
          };
          return function(c, b) {
            function f2() {
              this.constructor = c;
            }
            a3(c, b);
            c.prototype = null === b ? Object.create(b) : (f2.prototype = b.prototype, new f2());
          };
        }(), n = a2.perspective;
        a2 = r.addEvent;
        var G = r.extend, m = r.merge, z = r.pick, f = r.isNumber;
        r = function(a3) {
          function c() {
            return null !== a3 && a3.apply(this, arguments) || this;
          }
          A(c, a3);
          c.prototype.translate = function() {
            a3.prototype.translate.apply(this, arguments);
            this.chart.is3d() && this.translate3dPoints();
          };
          c.prototype.translate3dPoints = function() {
            var a4 = this.options, c2 = this.chart, g = z(this.zAxis, c2.options.zAxis[0]), k = [], q, t = [];
            this.zPadding = (a4.stacking ? f(a4.stack) ? a4.stack : 0 : this.index || 0) * (a4.depth || 0 + (a4.groupZPadding || 1));
            for (q = 0; q < this.data.length; q++) {
              a4 = this.data[q];
              if (g && g.translate) {
                var m2 = g.logarithmic && g.val2lin ? g.val2lin(a4.z) : a4.z;
                a4.plotZ = g.translate(m2);
                a4.isInside = a4.isInside ? m2 >= g.min && m2 <= g.max : false;
              } else
                a4.plotZ = this.zPadding;
              a4.axisXpos = a4.plotX;
              a4.axisYpos = a4.plotY;
              a4.axisZpos = a4.plotZ;
              k.push({ x: a4.plotX, y: a4.plotY, z: a4.plotZ });
              t.push(a4.plotX || 0);
            }
            this.rawPointsX = t;
            c2 = n(k, c2, true);
            for (q = 0; q < this.data.length; q++)
              a4 = this.data[q], g = c2[q], a4.plotX = g.x, a4.plotY = g.y, a4.plotZ = g.z;
          };
          c.defaultOptions = m(y.defaultOptions);
          return c;
        }(y);
        a2(y, "afterTranslate", function() {
          this.chart.is3d() && this.translate3dPoints();
        });
        G(y.prototype, { translate3dPoints: r.prototype.translate3dPoints });
        return r;
      });
      D(a, "Series/Area3D/Area3DSeries.js", [a["Core/Math3D.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, y, r) {
        function A(a3) {
          var f = a3.apply(this, [].slice.call(arguments, 1));
          if (!this.chart.is3d())
            return f;
          var c = G.getGraphPath, b = this.options, l = Math.round(this.yAxis.getThreshold(b.threshold)), g = [];
          if (this.rawPointsX)
            for (var m2 = 0; m2 < this.points.length; m2++)
              g.push({ x: this.rawPointsX[m2], y: b.stacking ? this.points[m2].yBottom : l, z: this.zPadding });
          b = this.chart.options.chart.options3d;
          g = n(g, this.chart, true).map(function(a4) {
            return { plotX: a4.x, plotY: a4.y, plotZ: a4.z };
          });
          this.group && b && b.depth && b.beta && (this.markerGroup && (this.markerGroup.add(this.group), this.markerGroup.attr({ translateX: 0, translateY: 0 })), this.group.attr({ zIndex: Math.max(1, 270 < b.beta || 90 > b.beta ? b.depth - Math.round(this.zPadding || 0) : Math.round(this.zPadding || 0)) }));
          g.reversed = true;
          c = c.call(this, g, true, true);
          c[0] && "M" === c[0][0] && (c[0] = ["L", c[0][1], c[0][2]]);
          this.areaPath && (c = this.areaPath.splice(0, this.areaPath.length / 2).concat(c), c.xMap = this.areaPath.xMap, this.areaPath = c);
          return f;
        }
        var n = a2.perspective, G = y.seriesTypes.line.prototype, m = r.wrap, z = [];
        return { compose: function(a3) {
          -1 === z.indexOf(a3) && (z.push(a3), m(a3.prototype, "getGraphPath", A));
        } };
      });
      D(a, "Series/Column3D/Column3DComposition.js", [
        a["Series/Column/ColumnSeries.js"],
        a["Core/Globals.js"],
        a["Core/Series/Series.js"],
        a["Core/Math3D.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Core/Axis/Stacking/StackItem.js"],
        a["Core/Utilities.js"]
      ], function(a2, y, r, F, n, G, m) {
        function z(a3, b2) {
          var c2 = a3.series, f2 = { totalStacks: 0 }, g2, l2 = 1;
          c2.forEach(function(a4) {
            g2 = A(a4.options.stack, b2 ? 0 : c2.length - 1 - a4.index);
            f2[g2] ? f2[g2].series.push(a4) : (f2[g2] = { series: [a4], position: l2 }, l2++);
          });
          f2.totalStacks = l2 + 1;
          return f2;
        }
        function f(a3) {
          var b2 = a3.apply(this, [].slice.call(arguments, 1));
          this.chart.is3d && this.chart.is3d() && (b2.stroke = this.options.edgeColor || b2.fill, b2["stroke-width"] = A(
            this.options.edgeWidth,
            1
          ));
          return b2;
        }
        function k(a3, b2, c2) {
          var f2 = this.chart.is3d && this.chart.is3d();
          f2 && (this.options.inactiveOtherPoints = true);
          a3.call(this, b2, c2);
          f2 && (this.options.inactiveOtherPoints = false);
        }
        function c(a3) {
          for (var b2 = [], c2 = 1; c2 < arguments.length; c2++)
            b2[c2 - 1] = arguments[c2];
          return this.series.chart.is3d() ? this.graphic && "g" !== this.graphic.element.nodeName : a3.apply(this, b2);
        }
        var b = a2.prototype, l = y.svg, g = F.perspective;
        y = m.addEvent;
        var A = m.pick;
        m = m.wrap;
        m(b, "translate", function(a3) {
          a3.apply(this, [].slice.call(arguments, 1));
          this.chart.is3d() && this.translate3dShapes();
        });
        m(r.prototype, "justifyDataLabel", function(a3) {
          return arguments[2].outside3dPlot ? false : a3.apply(this, [].slice.call(arguments, 1));
        });
        b.translate3dPoints = function() {
        };
        b.translate3dShapes = function() {
          var a3 = this, b2 = a3.chart, c2 = a3.options, f2 = c2.depth, l2 = (c2.stacking ? c2.stack || 0 : a3.index) * (f2 + (c2.groupZPadding || 1)), k2 = a3.borderWidth % 2 ? 0.5 : 0, n2;
          b2.inverted && !a3.yAxis.reversed && (k2 *= -1);
          false !== c2.grouping && (l2 = 0);
          l2 += c2.groupZPadding || 1;
          a3.data.forEach(function(c3) {
            c3.outside3dPlot = null;
            if (null !== c3.y) {
              var m2 = c3.shapeArgs, h = c3.tooltipPos, q;
              [["x", "width"], ["y", "height"]].forEach(function(b3) {
                q = m2[b3[0]] - k2;
                0 > q && (m2[b3[1]] += m2[b3[0]] + k2, m2[b3[0]] = -k2, q = 0);
                q + m2[b3[1]] > a3[b3[0] + "Axis"].len && 0 !== m2[b3[1]] && (m2[b3[1]] = a3[b3[0] + "Axis"].len - m2[b3[0]]);
                if (0 !== m2[b3[1]] && (m2[b3[0]] >= a3[b3[0] + "Axis"].len || m2[b3[0]] + m2[b3[1]] <= k2)) {
                  for (var e in m2)
                    m2[e] = "y" === e ? -9999 : 0;
                  c3.outside3dPlot = true;
                }
              });
              "rect" === c3.shapeType && (c3.shapeType = "cuboid");
              m2.z = l2;
              m2.depth = f2;
              m2.insidePlotArea = true;
              n2 = { x: m2.x + m2.width / 2, y: m2.y, z: l2 + f2 / 2 };
              b2.inverted && (n2.x = m2.height, n2.y = c3.clientX);
              c3.plot3d = g(
                [n2],
                b2,
                true,
                false
              )[0];
              h = g([{ x: h[0], y: h[1], z: l2 + f2 / 2 }], b2, true, false)[0];
              c3.tooltipPos = [h.x, h.y];
            }
          });
          a3.z = l2;
        };
        m(b, "animate", function(a3) {
          if (this.chart.is3d()) {
            var b2 = arguments[1], c2 = this.yAxis, f2 = this, g2 = this.yAxis.reversed;
            l && (b2 ? f2.data.forEach(function(a4) {
              null !== a4.y && (a4.height = a4.shapeArgs.height, a4.shapey = a4.shapeArgs.y, a4.shapeArgs.height = 1, g2 || (a4.shapeArgs.y = a4.stackY ? a4.plotY + c2.translate(a4.stackY) : a4.plotY + (a4.negative ? -a4.height : a4.height)));
            }) : (f2.data.forEach(function(a4) {
              if (null !== a4.y && (a4.shapeArgs.height = a4.height, a4.shapeArgs.y = a4.shapey, a4.graphic))
                a4.graphic[a4.outside3dPlot ? "attr" : "animate"](a4.shapeArgs, f2.options.animation);
            }), this.drawDataLabels()));
          } else
            a3.apply(this, [].slice.call(arguments, 1));
        });
        m(b, "plotGroup", function(a3, b2, c2, f2, g2, l2) {
          "dataLabelsGroup" !== b2 && "markerGroup" !== b2 && this.chart.is3d() && (this[b2] && delete this[b2], l2 && (this.chart.columnGroup || (this.chart.columnGroup = this.chart.renderer.g("columnGroup").add(l2)), this[b2] = this.chart.columnGroup, this.chart.columnGroup.attr(this.getPlotBox()), this[b2].survive = true, "group" === b2 && (arguments[3] = "visible")));
          return a3.apply(this, Array.prototype.slice.call(arguments, 1));
        });
        m(b, "setVisible", function(a3, b2) {
          var c2 = this;
          c2.chart.is3d() && c2.data.forEach(function(a4) {
            a4.visible = a4.options.visible = b2 = "undefined" === typeof b2 ? !A(c2.visible, a4.visible) : b2;
            c2.options.data[c2.data.indexOf(a4)] = a4.options;
            a4.graphic && a4.graphic.attr({ visibility: b2 ? "visible" : "hidden" });
          });
          a3.apply(this, Array.prototype.slice.call(arguments, 1));
        });
        y(a2, "afterInit", function() {
          if (this.chart.is3d()) {
            var a3 = this.options, b2 = a3.grouping, c2 = a3.stacking, f2 = this.yAxis.options.reversedStacks, g2 = 0;
            if ("undefined" === typeof b2 || b2) {
              b2 = z(this.chart, c2);
              g2 = a3.stack || 0;
              for (c2 = 0; c2 < b2[g2].series.length && b2[g2].series[c2] !== this; c2++)
                ;
              g2 = 10 * (b2.totalStacks - b2[g2].position) + (f2 ? c2 : -c2);
              this.xAxis.reversed || (g2 = 10 * b2.totalStacks - g2);
            }
            a3.depth = a3.depth || 25;
            this.z = this.z || 0;
            a3.zIndex = g2;
          }
        });
        m(b, "pointAttribs", f);
        m(b, "setState", k);
        m(b.pointClass.prototype, "hasNewShapeType", c);
        n.seriesTypes.columnRange && (y = n.seriesTypes.columnrange.prototype, m(y, "pointAttribs", f), m(y, "setState", k), m(y.pointClass.prototype, "hasNewShapeType", c), y.plotGroup = b.plotGroup, y.setVisible = b.setVisible);
        m(r.prototype, "alignDataLabel", function(a3, b2, c2, f2, l2) {
          var k2 = this.chart;
          f2.outside3dPlot = b2.outside3dPlot;
          if (k2.is3d() && this.is("column")) {
            var m2 = this.options, n2 = A(f2.inside, !!this.options.stacking), q = k2.options.chart.options3d, h = b2.pointWidth / 2 || 0;
            m2 = { x: l2.x + h, y: l2.y, z: this.z + m2.depth / 2 };
            k2.inverted && (n2 && (l2.width = 0, m2.x += b2.shapeArgs.height / 2), 90 <= q.alpha && 270 >= q.alpha && (m2.y += b2.shapeArgs.width));
            m2 = g([m2], k2, true, false)[0];
            l2.x = m2.x - h;
            l2.y = b2.outside3dPlot ? -9e9 : m2.y;
          }
          a3.apply(this, [].slice.call(
            arguments,
            1
          ));
        });
        m(G.prototype, "getStackBox", function(a3, b2) {
          var c2 = a3.apply(this, [].slice.call(arguments, 1)), f2 = this.axis.chart, l2 = b2.width;
          if (f2.is3d() && this.base) {
            var k2 = +this.base.split(",")[0], m2 = f2.series[k2];
            k2 = f2.options.chart.options3d;
            m2 && m2 instanceof n.seriesTypes.column && (m2 = { x: c2.x + (f2.inverted ? c2.height : l2 / 2), y: c2.y, z: m2.options.depth / 2 }, f2.inverted && (c2.width = 0, 90 <= k2.alpha && 270 >= k2.alpha && (m2.y += l2)), m2 = g([m2], f2, true, false)[0], c2.x = m2.x - l2 / 2, c2.y = m2.y);
          }
          return c2;
        });
        "";
        return a2;
      });
      D(
        a,
        "Series/Pie3D/Pie3DPoint.js",
        [a["Core/Series/SeriesRegistry.js"]],
        function(a2) {
          var A = this && this.__extends || /* @__PURE__ */ function() {
            var a3 = function(n, r2) {
              a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, n2) {
                a4.__proto__ = n2;
              } || function(a4, n2) {
                for (var f in n2)
                  n2.hasOwnProperty(f) && (a4[f] = n2[f]);
              };
              return a3(n, r2);
            };
            return function(n, r2) {
              function m() {
                this.constructor = n;
              }
              a3(n, r2);
              n.prototype = null === r2 ? Object.create(r2) : (m.prototype = r2.prototype, new m());
            };
          }();
          a2 = a2.seriesTypes.pie.prototype.pointClass;
          var r = a2.prototype.haloPath;
          return function(a3) {
            function n() {
              var n2 = null !== a3 && a3.apply(this, arguments) || this;
              n2.series = void 0;
              return n2;
            }
            A(n, a3);
            n.prototype.haloPath = function() {
              return this.series.chart.is3d() ? [] : r.apply(this, arguments);
            };
            return n;
          }(a2);
        }
      );
      D(a, "Series/Pie3D/Pie3DSeries.js", [a["Core/Globals.js"], a["Series/Pie3D/Pie3DPoint.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, y, r, F) {
        var n = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(f, c) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c2) {
              a4.__proto__ = c2;
            } || function(a4, c2) {
              for (var b in c2)
                c2.hasOwnProperty(b) && (a4[b] = c2[b]);
            };
            return a3(f, c);
          };
          return function(f, c) {
            function b() {
              this.constructor = f;
            }
            a3(f, c);
            f.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b());
          };
        }(), A = a2.deg2rad, m = a2.svg;
        a2 = F.extend;
        var z = F.pick;
        r = function(a3) {
          function f() {
            return null !== a3 && a3.apply(this, arguments) || this;
          }
          n(f, a3);
          f.prototype.addPoint = function() {
            a3.prototype.addPoint.apply(this, arguments);
            this.chart.is3d() && this.update(this.userOptions, true);
          };
          f.prototype.animate = function(c) {
            if (this.chart.is3d()) {
              var b = this.options.animation;
              var f2 = this.center;
              var g = this.group, k = this.markerGroup;
              m && (true === b && (b = {}), c ? (g.oldtranslateX = z(g.oldtranslateX, g.translateX), g.oldtranslateY = z(g.oldtranslateY, g.translateY), f2 = { translateX: f2[0], translateY: f2[1], scaleX: 1e-3, scaleY: 1e-3 }, g.attr(f2), k && (k.attrSetters = g.attrSetters, k.attr(f2))) : (f2 = { translateX: g.oldtranslateX, translateY: g.oldtranslateY, scaleX: 1, scaleY: 1 }, g.animate(f2, b), k && k.animate(f2, b)));
            } else
              a3.prototype.animate.apply(this, arguments);
          };
          f.prototype.drawDataLabels = function() {
            if (this.chart.is3d()) {
              var c = this.chart.options.chart.options3d;
              this.data.forEach(function(a4) {
                var b = a4.shapeArgs, f2 = b.r, k = (b.start + b.end) / 2;
                a4 = a4.labelPosition;
                var m2 = a4.connectorPosition, n2 = -f2 * (1 - Math.cos((b.alpha || c.alpha) * A)) * Math.sin(k), r2 = f2 * (Math.cos((b.beta || c.beta) * A) - 1) * Math.cos(k);
                [a4.natural, m2.breakAt, m2.touchingSliceAt].forEach(function(a5) {
                  a5.x += r2;
                  a5.y += n2;
                });
              });
            }
            a3.prototype.drawDataLabels.apply(this, arguments);
          };
          f.prototype.pointAttribs = function(c) {
            var b = a3.prototype.pointAttribs.apply(this, arguments), f2 = this.options;
            this.chart.is3d() && !this.chart.styledMode && (b.stroke = f2.edgeColor || c.color || this.color, b["stroke-width"] = z(f2.edgeWidth, 1));
            return b;
          };
          f.prototype.translate = function() {
            a3.prototype.translate.apply(this, arguments);
            if (this.chart.is3d()) {
              var c = this, b = c.options, f2 = b.depth || 0, g = c.chart.options.chart.options3d, k = g.alpha, m2 = g.beta, n2 = b.stacking ? (b.stack || 0) * f2 : c._i * f2;
              n2 += f2 / 2;
              false !== b.grouping && (n2 = 0);
              c.data.forEach(function(a4) {
                var g2 = a4.shapeArgs;
                a4.shapeType = "arc3d";
                g2.z = n2;
                g2.depth = 0.75 * f2;
                g2.alpha = k;
                g2.beta = m2;
                g2.center = c.center;
                g2 = (g2.end + g2.start) / 2;
                a4.slicedTranslation = { translateX: Math.round(Math.cos(g2) * b.slicedOffset * Math.cos(k * A)), translateY: Math.round(Math.sin(g2) * b.slicedOffset * Math.cos(k * A)) };
              });
            }
          };
          f.prototype.drawTracker = function() {
            a3.prototype.drawTracker.apply(this, arguments);
            this.chart.is3d() && this.points.forEach(function(a4) {
              a4.graphic && ["out", "inn", "side1", "side2"].forEach(function(b) {
                a4.graphic && (a4.graphic[b].element.point = a4);
              });
            });
          };
          return f;
        }(r.seriesTypes.pie);
        a2(r.prototype, { pointClass: y });
        "";
        return r;
      });
      D(
        a,
        "Series/Pie3D/Pie3DComposition.js",
        [a["Series/Pie3D/Pie3DPoint.js"], a["Series/Pie3D/Pie3DSeries.js"], a["Core/Series/SeriesRegistry.js"]],
        function(a2, y, r) {
          r.seriesTypes.pie.prototype.pointClass.prototype.haloPath = a2.prototype.haloPath;
          r.seriesTypes.pie = y;
        }
      );
      D(a, "Series/Scatter3D/Scatter3DPoint.js", [a["Series/Scatter/ScatterSeries.js"], a["Core/Utilities.js"]], function(a2, y) {
        var r = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(n, m) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, f) {
              a4.__proto__ = f;
            } || function(a4, f) {
              for (var k in f)
                f.hasOwnProperty(k) && (a4[k] = f[k]);
            };
            return a3(n, m);
          };
          return function(n, m) {
            function r2() {
              this.constructor = n;
            }
            a3(n, m);
            n.prototype = null === m ? Object.create(m) : (r2.prototype = m.prototype, new r2());
          };
        }(), A = y.defined;
        return function(a3) {
          function n() {
            var m = null !== a3 && a3.apply(this, arguments) || this;
            m.options = void 0;
            m.series = void 0;
            return m;
          }
          r(n, a3);
          n.prototype.applyOptions = function() {
            a3.prototype.applyOptions.apply(this, arguments);
            A(this.z) || (this.z = 0);
            return this;
          };
          return n;
        }(a2.prototype.pointClass);
      });
      D(a, "Series/Scatter3D/Scatter3DSeries.js", [
        a["Core/Math3D.js"],
        a["Series/Scatter3D/Scatter3DPoint.js"],
        a["Series/Scatter/ScatterSeries.js"],
        a["Core/Series/SeriesRegistry.js"],
        a["Core/Utilities.js"]
      ], function(a2, y, r, D2, n) {
        var A = this && this.__extends || /* @__PURE__ */ function() {
          var a3 = function(f, c) {
            a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c2) {
              a4.__proto__ = c2;
            } || function(a4, c2) {
              for (var b in c2)
                c2.hasOwnProperty(b) && (a4[b] = c2[b]);
            };
            return a3(f, c);
          };
          return function(f, c) {
            function b() {
              this.constructor = f;
            }
            a3(f, c);
            f.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b());
          };
        }(), m = a2.pointCameraDistance;
        a2 = n.extend;
        var z = n.merge;
        n = function(a3) {
          function f() {
            var c = null !== a3 && a3.apply(this, arguments) || this;
            c.data = void 0;
            c.options = void 0;
            c.points = void 0;
            return c;
          }
          A(f, a3);
          f.prototype.pointAttribs = function(c) {
            var b = a3.prototype.pointAttribs.apply(this, arguments);
            this.chart.is3d() && c && (b.zIndex = m(c, this.chart));
            return b;
          };
          f.defaultOptions = z(r.defaultOptions, { tooltip: { pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>z: <b>{point.z}</b><br/>" } });
          return f;
        }(r);
        a2(
          n.prototype,
          { axisTypes: ["xAxis", "yAxis", "zAxis"], directTouch: true, parallelArrays: ["x", "y", "z"], pointArrayMap: ["x", "y", "z"], pointClass: y }
        );
        D2.registerSeriesType("scatter3d", n);
        "";
        return n;
      });
      D(a, "masters/highcharts-3d.src.js", [a["Core/Globals.js"], a["Core/Renderer/SVG/SVGRenderer3D.js"], a["Core/Chart/Chart3D.js"], a["Core/Axis/ZAxis.js"], a["Core/Axis/Axis3DComposition.js"], a["Series/Area3D/Area3DSeries.js"]], function(a2, y, r, D2, n, G) {
        y.compose(a2.SVGRenderer);
        r.compose(a2.Chart, a2.Fx);
        D2.compose(a2.Chart);
        n.compose(
          a2.Axis,
          a2.Tick
        );
        G.compose(a2.seriesTypes.area);
      });
    });
  }
});
export default require_highcharts_3d();
//# sourceMappingURL=highcharts_highcharts-3d.js.map
