!function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: r})
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 16)
}([function (e, t, n) {
    e.exports = n(17).default
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0, t.extend = l, t.indexOf = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1
    }, t.escapeExpression = function (e) {
        if ("string" != typeof e) {
            if (e && e.toHTML) return e.toHTML();
            if (null == e) return "";
            if (!e) return e + "";
            e = "" + e
        }
        if (!o.test(e)) return e;
        return e.replace(i, a)
    }, t.isEmpty = function (e) {
        return !e && 0 !== e || !(!c(e) || 0 !== e.length)
    }, t.createFrame = function (e) {
        var t = l({}, e);
        return t._parent = e, t
    }, t.blockParams = function (e, t) {
        return e.path = t, e
    }, t.appendContextPath = function (e, t) {
        return (e ? e + "." : "") + t
    };
    var r = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;", "=": "&#x3D;"},
        i = /[&<>"'`=]/g, o = /[&<>"'`=]/;

    function a(e) {
        return r[e]
    }

    function l(e) {
        for (var t = 1; t < arguments.length; t++) for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
        return e
    }

    var s = Object.prototype.toString;
    t.toString = s;
    var u = function (e) {
        return "function" == typeof e
    };
    u(/x/) && (t.isFunction = u = function (e) {
        return "function" == typeof e && "[object Function]" === s.call(e)
    }), t.isFunction = u;
    var c = Array.isArray || function (e) {
        return !(!e || "object" != typeof e) && "[object Array]" === s.call(e)
    };
    t.isArray = c
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];

    function i(e, t) {
        var n = t && t.loc, o = void 0, a = void 0;
        n && (e += " - " + (o = n.start.line) + ":" + (a = n.start.column));
        for (var l = Error.prototype.constructor.call(this, e), s = 0; s < r.length; s++) this[r[s]] = l[r[s]];
        Error.captureStackTrace && Error.captureStackTrace(this, i);
        try {
            n && (this.lineNumber = o, Object.defineProperty ? Object.defineProperty(this, "column", {
                value: a,
                enumerable: !0
            }) : this.column = a)
        } catch (e) {
        }
    }

    i.prototype = new Error, t.default = i, e.exports = t.default
}, function (e, t, n) {
    var r = n(0);
    e.exports = (r.default || r).template({
        1: function (e, t, n, r, i) {
            var o;
            return 'id="' + e.escapeExpression("function" == typeof (o = null != (o = n.id || (null != t ? t.id : t)) ? o : n.helperMissing) ? o.call(null != t ? t : e.nullContext || {}, {
                name: "id",
                hash: {},
                data: i
            }) : o) + '"'
        }, 3: function (e, t, n, r, i) {
            var o, a = null != t ? t : e.nullContext || {}, l = n.helperMissing, s = e.escapeExpression;
            return "data-key=" + s("function" == typeof (o = null != (o = n.key || (null != t ? t.key : t)) ? o : l) ? o.call(a, {
                name: "key",
                hash: {},
                data: i
            }) : o) + " value=" + s("function" == typeof (o = null != (o = n.key || (null != t ? t.key : t)) ? o : l) ? o.call(a, {
                name: "key",
                hash: {},
                data: i
            }) : o)
        }, 5: function (e, t, n, r, i) {
            var o;
            return 'for="' + e.escapeExpression("function" == typeof (o = null != (o = n.id || (null != t ? t.id : t)) ? o : n.helperMissing) ? o.call(null != t ? t : e.nullContext || {}, {
                name: "id",
                hash: {},
                data: i
            }) : o) + '"'
        }, compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
            var o, a, l = null != t ? t : e.nullContext || {}, s = n.helperMissing, u = e.escapeExpression;
            return '<div class="control ' + u("function" == typeof (a = null != (a = n.classes || (null != t ? t.classes : t)) ? a : s) ? a.call(l, {
                name: "classes",
                hash: {},
                data: i
            }) : a) + '">\r\n    <input type="checkbox" ' + (null != (o = n.if.call(l, null != t ? t.id : t, {
                name: "if",
                hash: {},
                fn: e.program(1, i, 0),
                inverse: e.noop,
                data: i
            })) ? o : "") + " " + (null != (o = n.if.call(l, null != t ? t.key : t, {
                name: "if",
                hash: {},
                fn: e.program(3, i, 0),
                inverse: e.noop,
                data: i
            })) ? o : "") + ">\r\n    <label " + (null != (o = n.if.call(l, null != t ? t.id : t, {
                name: "if",
                hash: {},
                fn: e.program(5, i, 0),
                inverse: e.noop,
                data: i
            })) ? o : "") + ">" + u("function" == typeof (a = null != (a = n.label || (null != t ? t.label : t)) ? a : s) ? a.call(l, {
                name: "label",
                hash: {},
                data: i
            }) : a) + "</label>\r\n</div>\r\n"
        }, useData: !0
    })
}, function (e, t, n) {
    var r = n(0);
    e.exports = (r.default || r).template({
        1: function (e, t, n, r, i) {
            return "multiple"
        }, 3: function (e, t, n, r, i, o, a) {
            var l;
            return null != (l = n.if.call(null != t ? t : e.nullContext || {}, null != a[1] ? a[1].multiple : a[1], {
                name: "if",
                hash: {},
                fn: e.program(4, i, 0, o, a),
                inverse: e.program(6, i, 0, o, a),
                data: i
            })) ? l : ""
        }, 4: function (e, t, r, i, o) {
            var a;
            return null != (a = e.invokePartial(n(33), t, {
                name: "dropdown-option-multiple",
                hash: {label: null != t ? t.label : t, key: null != t ? t.key : t},
                data: o,
                indent: "                ",
                helpers: r,
                partials: i,
                decorators: e.decorators
            })) ? a : ""
        }, 6: function (e, t, r, i, o) {
            var a;
            return null != (a = e.invokePartial(n(10), t, {
                name: "dropdown-option",
                hash: {index: o && o.index, label: null != t ? t.label : t, key: null != t ? t.key : t},
                data: o,
                indent: "                ",
                helpers: r,
                partials: i,
                decorators: e.decorators
            })) ? a : ""
        }, compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i, o, a) {
            var l, s = null != t ? t : e.nullContext || {};
            return '<div class="control ' + e.escapeExpression(e.lambda(null != t ? t.classes : t, t)) + '">\r\n    <select ' + (null != (l = n.if.call(s, null != t ? t.multiple : t, {
                name: "if",
                hash: {},
                fn: e.program(1, i, 0, o, a),
                inverse: e.noop,
                data: i
            })) ? l : "") + ">\r\n" + (null != (l = n.each.call(s, null != t ? t.data : t, {
                name: "each",
                hash: {},
                fn: e.program(3, i, 0, o, a),
                inverse: e.noop,
                data: i
            })) ? l : "") + "    </select>\r\n</div>\r\n"
        }, usePartial: !0, useData: !0, useDepths: !0
    })
}, function (e, t, n) {
    !function (t, n) {
        e.exports = n()
    }(0, function () {
        "use strict";
        var e = navigator.userAgent, t = navigator.platform, n = /gecko\/\d/i.test(e), r = /MSIE \d/.test(e),
            i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e), o = /Edge\/(\d+)/.exec(e), a = r || i || o,
            l = a && (r ? document.documentMode || 6 : +(o || i)[1]), s = !o && /WebKit\//.test(e),
            u = s && /Qt\/\d+\.\d+/.test(e), c = !o && /Chrome\//.test(e), f = /Opera\//.test(e),
            d = /Apple Computer/.test(navigator.vendor), h = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
            p = /PhantomJS/.test(e), g = !o && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e), m = /Android/.test(e),
            v = g || m || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e), y = g || /Mac/.test(t),
            b = /\bCrOS\b/.test(e), x = /win/i.test(t), w = f && e.match(/Version\/(\d*\.\d*)/);
        w && (w = Number(w[1])), w && w >= 15 && (f = !1, s = !0);
        var k = y && (u || f && (null == w || w < 12.11)), C = n || a && l >= 9;

        function S(e) {
            return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
        }

        var T, L = function (e, t) {
            var n = e.className, r = S(t).exec(n);
            if (r) {
                var i = n.slice(r.index + r[0].length);
                e.className = n.slice(0, r.index) + (i ? r[1] + i : "")
            }
        };

        function N(e) {
            for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
            return e
        }

        function A(e, t) {
            return N(e).appendChild(t)
        }

        function M(e, t, n, r) {
            var i = document.createElement(e);
            if (n && (i.className = n), r && (i.style.cssText = r), "string" == typeof t) i.appendChild(document.createTextNode(t)); else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
            return i
        }

        function O(e, t, n, r) {
            var i = M(e, t, n, r);
            return i.setAttribute("role", "presentation"), i
        }

        function E(e, t) {
            if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
            do {
                if (11 == t.nodeType && (t = t.host), t == e) return !0
            } while (t = t.parentNode)
        }

        function D() {
            var e;
            try {
                e = document.activeElement
            } catch (t) {
                e = document.body || null
            }
            for (; e && e.shadowRoot && e.shadowRoot.activeElement;) e = e.shadowRoot.activeElement;
            return e
        }

        function P(e, t) {
            var n = e.className;
            S(t).test(n) || (e.className += (n ? " " : "") + t)
        }

        function H(e, t) {
            for (var n = e.split(" "), r = 0; r < n.length; r++) n[r] && !S(n[r]).test(t) && (t += " " + n[r]);
            return t
        }

        T = document.createRange ? function (e, t, n, r) {
            var i = document.createRange();
            return i.setEnd(r || e, n), i.setStart(e, t), i
        } : function (e, t, n) {
            var r = document.body.createTextRange();
            try {
                r.moveToElementText(e.parentNode)
            } catch (e) {
                return r
            }
            return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r
        };
        var R = function (e) {
            e.select()
        };

        function I(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return function () {
                return e.apply(null, t)
            }
        }

        function W(e, t, n) {
            for (var r in t || (t = {}), e) !e.hasOwnProperty(r) || !1 === n && t.hasOwnProperty(r) || (t[r] = e[r]);
            return t
        }

        function F(e, t, n, r, i) {
            null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
            for (var o = r || 0, a = i || 0; ;) {
                var l = e.indexOf("\t", o);
                if (l < 0 || l >= t) return a + (t - o);
                a += l - o, a += n - a % n, o = l + 1
            }
        }

        g ? R = function (e) {
            e.selectionStart = 0, e.selectionEnd = e.value.length
        } : a && (R = function (e) {
            try {
                e.select()
            } catch (e) {
            }
        });
        var j = function () {
            this.id = null
        };

        function _(e, t) {
            for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
            return -1
        }

        j.prototype.set = function (e, t) {
            clearTimeout(this.id), this.id = setTimeout(t, e)
        };
        var B = 30, z = {
            toString: function () {
                return "CodeMirror.Pass"
            }
        }, q = {scroll: !1}, $ = {origin: "*mouse"}, U = {origin: "+move"};

        function V(e, t, n) {
            for (var r = 0, i = 0; ;) {
                var o = e.indexOf("\t", r);
                -1 == o && (o = e.length);
                var a = o - r;
                if (o == e.length || i + a >= t) return r + Math.min(a, t - i);
                if (i += o - r, r = o + 1, (i += n - i % n) >= t) return r
            }
        }

        var G = [""];

        function X(e) {
            for (; G.length <= e;) G.push(K(G) + " ");
            return G[e]
        }

        function K(e) {
            return e[e.length - 1]
        }

        function Y(e, t) {
            for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
            return n
        }

        function Q() {
        }

        function J(e, t) {
            var n;
            return Object.create ? n = Object.create(e) : (Q.prototype = e, n = new Q), t && W(t, n), n
        }

        var Z = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

        function ee(e) {
            return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || Z.test(e))
        }

        function te(e, t) {
            return t ? !!(t.source.indexOf("\\w") > -1 && ee(e)) || t.test(e) : ee(e)
        }

        function ne(e) {
            for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
            return !0
        }

        var re = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

        function ie(e) {
            return e.charCodeAt(0) >= 768 && re.test(e)
        }

        function oe(e, t, n) {
            for (; (n < 0 ? t > 0 : t < e.length) && ie(e.charAt(t));) t += n;
            return t
        }

        function ae(e, t, n) {
            for (var r = t > n ? -1 : 1; ;) {
                if (t == n) return t;
                var i = (t + n) / 2, o = r < 0 ? Math.ceil(i) : Math.floor(i);
                if (o == t) return e(o) ? t : n;
                e(o) ? n = o : t = o + r
            }
        }

        function le(e, t) {
            if ((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
            for (var n = e; !n.lines;) for (var r = 0; ; ++r) {
                var i = n.children[r], o = i.chunkSize();
                if (t < o) {
                    n = i;
                    break
                }
                t -= o
            }
            return n.lines[t]
        }

        function se(e, t, n) {
            var r = [], i = t.line;
            return e.iter(t.line, n.line + 1, function (e) {
                var o = e.text;
                i == n.line && (o = o.slice(0, n.ch)), i == t.line && (o = o.slice(t.ch)), r.push(o), ++i
            }), r
        }

        function ue(e, t, n) {
            var r = [];
            return e.iter(t, n, function (e) {
                r.push(e.text)
            }), r
        }

        function ce(e, t) {
            var n = t - e.height;
            if (n) for (var r = e; r; r = r.parent) r.height += n
        }

        function fe(e) {
            if (null == e.parent) return null;
            for (var t = e.parent, n = _(t.lines, e), r = t.parent; r; t = r, r = r.parent) for (var i = 0; r.children[i] != t; ++i) n += r.children[i].chunkSize();
            return n + t.first
        }

        function de(e, t) {
            var n = e.first;
            e:do {
                for (var r = 0; r < e.children.length; ++r) {
                    var i = e.children[r], o = i.height;
                    if (t < o) {
                        e = i;
                        continue e
                    }
                    t -= o, n += i.chunkSize()
                }
                return n
            } while (!e.lines);
            for (var a = 0; a < e.lines.length; ++a) {
                var l = e.lines[a].height;
                if (t < l) break;
                t -= l
            }
            return n + a
        }

        function he(e, t) {
            return t >= e.first && t < e.first + e.size
        }

        function pe(e, t) {
            return String(e.lineNumberFormatter(t + e.firstLineNumber))
        }

        function ge(e, t, n) {
            if (void 0 === n && (n = null), !(this instanceof ge)) return new ge(e, t, n);
            this.line = e, this.ch = t, this.sticky = n
        }

        function me(e, t) {
            return e.line - t.line || e.ch - t.ch
        }

        function ve(e, t) {
            return e.sticky == t.sticky && 0 == me(e, t)
        }

        function ye(e) {
            return ge(e.line, e.ch)
        }

        function be(e, t) {
            return me(e, t) < 0 ? t : e
        }

        function xe(e, t) {
            return me(e, t) < 0 ? e : t
        }

        function we(e, t) {
            return Math.max(e.first, Math.min(t, e.first + e.size - 1))
        }

        function ke(e, t) {
            if (t.line < e.first) return ge(e.first, 0);
            var n = e.first + e.size - 1;
            return t.line > n ? ge(n, le(e, n).text.length) : function (e, t) {
                var n = e.ch;
                return null == n || n > t ? ge(e.line, t) : n < 0 ? ge(e.line, 0) : e
            }(t, le(e, t.line).text.length)
        }

        function Ce(e, t) {
            for (var n = [], r = 0; r < t.length; r++) n[r] = ke(e, t[r]);
            return n
        }

        var Se = !1, Te = !1;

        function Le(e, t, n) {
            this.marker = e, this.from = t, this.to = n
        }

        function Ne(e, t) {
            if (e) for (var n = 0; n < e.length; ++n) {
                var r = e[n];
                if (r.marker == t) return r
            }
        }

        function Ae(e, t) {
            for (var n, r = 0; r < e.length; ++r) e[r] != t && (n || (n = [])).push(e[r]);
            return n
        }

        function Me(e, t) {
            if (t.full) return null;
            var n = he(e, t.from.line) && le(e, t.from.line).markedSpans,
                r = he(e, t.to.line) && le(e, t.to.line).markedSpans;
            if (!n && !r) return null;
            var i = t.from.ch, o = t.to.ch, a = 0 == me(t.from, t.to), l = function (e, t, n) {
                var r;
                if (e) for (var i = 0; i < e.length; ++i) {
                    var o = e[i], a = o.marker;
                    if (null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t) || o.from == t && "bookmark" == a.type && (!n || !o.marker.insertLeft)) {
                        var l = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
                        (r || (r = [])).push(new Le(a, o.from, l ? null : o.to))
                    }
                }
                return r
            }(n, i, a), s = function (e, t, n) {
                var r;
                if (e) for (var i = 0; i < e.length; ++i) {
                    var o = e[i], a = o.marker;
                    if (null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t) || o.from == t && "bookmark" == a.type && (!n || o.marker.insertLeft)) {
                        var l = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);
                        (r || (r = [])).push(new Le(a, l ? null : o.from - t, null == o.to ? null : o.to - t))
                    }
                }
                return r
            }(r, o, a), u = 1 == t.text.length, c = K(t.text).length + (u ? i : 0);
            if (l) for (var f = 0; f < l.length; ++f) {
                var d = l[f];
                if (null == d.to) {
                    var h = Ne(s, d.marker);
                    h ? u && (d.to = null == h.to ? null : h.to + c) : d.to = i
                }
            }
            if (s) for (var p = 0; p < s.length; ++p) {
                var g = s[p];
                if (null != g.to && (g.to += c), null == g.from) Ne(l, g.marker) || (g.from = c, u && (l || (l = [])).push(g)); else g.from += c, u && (l || (l = [])).push(g)
            }
            l && (l = Oe(l)), s && s != l && (s = Oe(s));
            var m = [l];
            if (!u) {
                var v, y = t.text.length - 2;
                if (y > 0 && l) for (var b = 0; b < l.length; ++b) null == l[b].to && (v || (v = [])).push(new Le(l[b].marker, null, null));
                for (var x = 0; x < y; ++x) m.push(v);
                m.push(s)
            }
            return m
        }

        function Oe(e) {
            for (var t = 0; t < e.length; ++t) {
                var n = e[t];
                null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1)
            }
            return e.length ? e : null
        }

        function Ee(e) {
            var t = e.markedSpans;
            if (t) {
                for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
                e.markedSpans = null
            }
        }

        function De(e, t) {
            if (t) {
                for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
                e.markedSpans = t
            }
        }

        function Pe(e) {
            return e.inclusiveLeft ? -1 : 0
        }

        function He(e) {
            return e.inclusiveRight ? 1 : 0
        }

        function Re(e, t) {
            var n = e.lines.length - t.lines.length;
            if (0 != n) return n;
            var r = e.find(), i = t.find(), o = me(r.from, i.from) || Pe(e) - Pe(t);
            if (o) return -o;
            var a = me(r.to, i.to) || He(e) - He(t);
            return a || t.id - e.id
        }

        function Ie(e, t) {
            var n, r = Te && e.markedSpans;
            if (r) for (var i = void 0, o = 0; o < r.length; ++o) (i = r[o]).marker.collapsed && null == (t ? i.from : i.to) && (!n || Re(n, i.marker) < 0) && (n = i.marker);
            return n
        }

        function We(e) {
            return Ie(e, !0)
        }

        function Fe(e) {
            return Ie(e, !1)
        }

        function je(e, t) {
            var n, r = Te && e.markedSpans;
            if (r) for (var i = 0; i < r.length; ++i) {
                var o = r[i];
                o.marker.collapsed && (null == o.from || o.from < t) && (null == o.to || o.to > t) && (!n || Re(n, o.marker) < 0) && (n = o.marker)
            }
            return n
        }

        function _e(e, t, n, r, i) {
            var o = le(e, t), a = Te && o.markedSpans;
            if (a) for (var l = 0; l < a.length; ++l) {
                var s = a[l];
                if (s.marker.collapsed) {
                    var u = s.marker.find(0), c = me(u.from, n) || Pe(s.marker) - Pe(i),
                        f = me(u.to, r) || He(s.marker) - He(i);
                    if (!(c >= 0 && f <= 0 || c <= 0 && f >= 0) && (c <= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? me(u.to, n) >= 0 : me(u.to, n) > 0) || c >= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? me(u.from, r) <= 0 : me(u.from, r) < 0))) return !0
                }
            }
        }

        function Be(e) {
            for (var t; t = We(e);) e = t.find(-1, !0).line;
            return e
        }

        function ze(e, t) {
            var n = le(e, t), r = Be(n);
            return n == r ? t : fe(r)
        }

        function qe(e, t) {
            if (t > e.lastLine()) return t;
            var n, r = le(e, t);
            if (!$e(e, r)) return t;
            for (; n = Fe(r);) r = n.find(1, !0).line;
            return fe(r) + 1
        }

        function $e(e, t) {
            var n = Te && t.markedSpans;
            if (n) for (var r = void 0, i = 0; i < n.length; ++i) if ((r = n[i]).marker.collapsed) {
                if (null == r.from) return !0;
                if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && Ue(e, t, r)) return !0
            }
        }

        function Ue(e, t, n) {
            if (null == n.to) {
                var r = n.marker.find(1, !0);
                return Ue(e, r.line, Ne(r.line.markedSpans, n.marker))
            }
            if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
            for (var i = void 0, o = 0; o < t.markedSpans.length; ++o) if ((i = t.markedSpans[o]).marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && Ue(e, t, i)) return !0
        }

        function Ve(e) {
            for (var t = 0, n = (e = Be(e)).parent, r = 0; r < n.lines.length; ++r) {
                var i = n.lines[r];
                if (i == e) break;
                t += i.height
            }
            for (var o = n.parent; o; o = (n = o).parent) for (var a = 0; a < o.children.length; ++a) {
                var l = o.children[a];
                if (l == n) break;
                t += l.height
            }
            return t
        }

        function Ge(e) {
            if (0 == e.height) return 0;
            for (var t, n = e.text.length, r = e; t = We(r);) {
                var i = t.find(0, !0);
                r = i.from.line, n += i.from.ch - i.to.ch
            }
            for (r = e; t = Fe(r);) {
                var o = t.find(0, !0);
                n -= r.text.length - o.from.ch, n += (r = o.to.line).text.length - o.to.ch
            }
            return n
        }

        function Xe(e) {
            var t = e.display, n = e.doc;
            t.maxLine = le(n, n.first), t.maxLineLength = Ge(t.maxLine), t.maxLineChanged = !0, n.iter(function (e) {
                var n = Ge(e);
                n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e)
            })
        }

        var Ke = null;

        function Ye(e, t, n) {
            var r;
            Ke = null;
            for (var i = 0; i < e.length; ++i) {
                var o = e[i];
                if (o.from < t && o.to > t) return i;
                o.to == t && (o.from != o.to && "before" == n ? r = i : Ke = i), o.from == t && (o.from != o.to && "before" != n ? r = i : Ke = i)
            }
            return null != r ? r : Ke
        }

        var Qe = function () {
            var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
                t = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";

            function n(n) {
                return n <= 247 ? e.charAt(n) : 1424 <= n && n <= 1524 ? "R" : 1536 <= n && n <= 1785 ? t.charAt(n - 1536) : 1774 <= n && n <= 2220 ? "r" : 8192 <= n && n <= 8203 ? "w" : 8204 == n ? "b" : "L"
            }

            var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, i = /[stwN]/, o = /[LRr]/, a = /[Lb1n]/, l = /[1n]/;

            function s(e, t, n) {
                this.level = e, this.from = t, this.to = n
            }

            return function (e, t) {
                var u = "ltr" == t ? "L" : "R";
                if (0 == e.length || "ltr" == t && !r.test(e)) return !1;
                for (var c = e.length, f = [], d = 0; d < c; ++d) f.push(n(e.charCodeAt(d)));
                for (var h = 0, p = u; h < c; ++h) {
                    var g = f[h];
                    "m" == g ? f[h] = p : p = g
                }
                for (var m = 0, v = u; m < c; ++m) {
                    var y = f[m];
                    "1" == y && "r" == v ? f[m] = "n" : o.test(y) && (v = y, "r" == y && (f[m] = "R"))
                }
                for (var b = 1, x = f[0]; b < c - 1; ++b) {
                    var w = f[b];
                    "+" == w && "1" == x && "1" == f[b + 1] ? f[b] = "1" : "," != w || x != f[b + 1] || "1" != x && "n" != x || (f[b] = x), x = w
                }
                for (var k = 0; k < c; ++k) {
                    var C = f[k];
                    if ("," == C) f[k] = "N"; else if ("%" == C) {
                        var S = void 0;
                        for (S = k + 1; S < c && "%" == f[S]; ++S) ;
                        for (var T = k && "!" == f[k - 1] || S < c && "1" == f[S] ? "1" : "N", L = k; L < S; ++L) f[L] = T;
                        k = S - 1
                    }
                }
                for (var N = 0, A = u; N < c; ++N) {
                    var M = f[N];
                    "L" == A && "1" == M ? f[N] = "L" : o.test(M) && (A = M)
                }
                for (var O = 0; O < c; ++O) if (i.test(f[O])) {
                    var E = void 0;
                    for (E = O + 1; E < c && i.test(f[E]); ++E) ;
                    for (var D = "L" == (O ? f[O - 1] : u), P = D == ("L" == (E < c ? f[E] : u)) ? D ? "L" : "R" : u, H = O; H < E; ++H) f[H] = P;
                    O = E - 1
                }
                for (var R, I = [], W = 0; W < c;) if (a.test(f[W])) {
                    var F = W;
                    for (++W; W < c && a.test(f[W]); ++W) ;
                    I.push(new s(0, F, W))
                } else {
                    var j = W, _ = I.length;
                    for (++W; W < c && "L" != f[W]; ++W) ;
                    for (var B = j; B < W;) if (l.test(f[B])) {
                        j < B && I.splice(_, 0, new s(1, j, B));
                        var z = B;
                        for (++B; B < W && l.test(f[B]); ++B) ;
                        I.splice(_, 0, new s(2, z, B)), j = B
                    } else ++B;
                    j < W && I.splice(_, 0, new s(1, j, W))
                }
                return "ltr" == t && (1 == I[0].level && (R = e.match(/^\s+/)) && (I[0].from = R[0].length, I.unshift(new s(0, 0, R[0].length))), 1 == K(I).level && (R = e.match(/\s+$/)) && (K(I).to -= R[0].length, I.push(new s(0, c - R[0].length, c)))), "rtl" == t ? I.reverse() : I
            }
        }();

        function Je(e, t) {
            var n = e.order;
            return null == n && (n = e.order = Qe(e.text, t)), n
        }

        var Ze = [], et = function (e, t, n) {
            if (e.addEventListener) e.addEventListener(t, n, !1); else if (e.attachEvent) e.attachEvent("on" + t, n); else {
                var r = e._handlers || (e._handlers = {});
                r[t] = (r[t] || Ze).concat(n)
            }
        };

        function tt(e, t) {
            return e._handlers && e._handlers[t] || Ze
        }

        function nt(e, t, n) {
            if (e.removeEventListener) e.removeEventListener(t, n, !1); else if (e.detachEvent) e.detachEvent("on" + t, n); else {
                var r = e._handlers, i = r && r[t];
                if (i) {
                    var o = _(i, n);
                    o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)))
                }
            }
        }

        function rt(e, t) {
            var n = tt(e, t);
            if (n.length) for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) n[i].apply(null, r)
        }

        function it(e, t, n) {
            return "string" == typeof t && (t = {
                type: t, preventDefault: function () {
                    this.defaultPrevented = !0
                }
            }), rt(e, n || t.type, e, t), ct(t) || t.codemirrorIgnore
        }

        function ot(e) {
            var t = e._handlers && e._handlers.cursorActivity;
            if (t) for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r) -1 == _(n, t[r]) && n.push(t[r])
        }

        function at(e, t) {
            return tt(e, t).length > 0
        }

        function lt(e) {
            e.prototype.on = function (e, t) {
                et(this, e, t)
            }, e.prototype.off = function (e, t) {
                nt(this, e, t)
            }
        }

        function st(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        }

        function ut(e) {
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
        }

        function ct(e) {
            return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
        }

        function ft(e) {
            st(e), ut(e)
        }

        function dt(e) {
            return e.target || e.srcElement
        }

        function ht(e) {
            var t = e.which;
            return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), y && e.ctrlKey && 1 == t && (t = 3), t
        }

        var pt, gt, mt = function () {
            if (a && l < 9) return !1;
            var e = M("div");
            return "draggable" in e || "dragDrop" in e
        }();

        function vt(e) {
            if (null == pt) {
                var t = M("span", "​");
                A(e, M("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (pt = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(a && l < 8))
            }
            var n = pt ? M("span", "​") : M("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
            return n.setAttribute("cm-text", ""), n
        }

        function yt(e) {
            if (null != gt) return gt;
            var t = A(e, document.createTextNode("AخA")), n = T(t, 0, 1).getBoundingClientRect(),
                r = T(t, 1, 2).getBoundingClientRect();
            return N(e), !(!n || n.left == n.right) && (gt = r.right - n.right < 3)
        }

        var bt = 3 != "\n\nb".split(/\n/).length ? function (e) {
            for (var t = 0, n = [], r = e.length; t <= r;) {
                var i = e.indexOf("\n", t);
                -1 == i && (i = e.length);
                var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i), a = o.indexOf("\r");
                -1 != a ? (n.push(o.slice(0, a)), t += a + 1) : (n.push(o), t = i + 1)
            }
            return n
        } : function (e) {
            return e.split(/\r\n?|\n/)
        }, xt = window.getSelection ? function (e) {
            try {
                return e.selectionStart != e.selectionEnd
            } catch (e) {
                return !1
            }
        } : function (e) {
            var t;
            try {
                t = e.ownerDocument.selection.createRange()
            } catch (e) {
            }
            return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t)
        }, wt = function () {
            var e = M("div");
            return "oncopy" in e || (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy)
        }(), kt = null;
        var Ct = {}, St = {};

        function Tt(e) {
            if ("string" == typeof e && St.hasOwnProperty(e)) e = St[e]; else if (e && "string" == typeof e.name && St.hasOwnProperty(e.name)) {
                var t = St[e.name];
                "string" == typeof t && (t = {name: t}), (e = J(t, e)).name = t.name
            } else {
                if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Tt("application/xml");
                if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Tt("application/json")
            }
            return "string" == typeof e ? {name: e} : e || {name: "null"}
        }

        function Lt(e, t) {
            t = Tt(t);
            var n = Ct[t.name];
            if (!n) return Lt(e, "text/plain");
            var r = n(e, t);
            if (Nt.hasOwnProperty(t.name)) {
                var i = Nt[t.name];
                for (var o in i) i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), r[o] = i[o])
            }
            if (r.name = t.name, t.helperType && (r.helperType = t.helperType), t.modeProps) for (var a in t.modeProps) r[a] = t.modeProps[a];
            return r
        }

        var Nt = {};

        function At(e, t) {
            W(t, Nt.hasOwnProperty(e) ? Nt[e] : Nt[e] = {})
        }

        function Mt(e, t) {
            if (!0 === t) return t;
            if (e.copyState) return e.copyState(t);
            var n = {};
            for (var r in t) {
                var i = t[r];
                i instanceof Array && (i = i.concat([])), n[r] = i
            }
            return n
        }

        function Ot(e, t) {
            for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e;) t = n.state, e = n.mode;
            return n || {mode: e, state: t}
        }

        function Et(e, t, n) {
            return !e.startState || e.startState(t, n)
        }

        var Dt = function (e, t, n) {
            this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = n
        };
        Dt.prototype.eol = function () {
            return this.pos >= this.string.length
        }, Dt.prototype.sol = function () {
            return this.pos == this.lineStart
        }, Dt.prototype.peek = function () {
            return this.string.charAt(this.pos) || void 0
        }, Dt.prototype.next = function () {
            if (this.pos < this.string.length) return this.string.charAt(this.pos++)
        }, Dt.prototype.eat = function (e) {
            var t = this.string.charAt(this.pos);
            if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t
        }, Dt.prototype.eatWhile = function (e) {
            for (var t = this.pos; this.eat(e);) ;
            return this.pos > t
        }, Dt.prototype.eatSpace = function () {
            for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos;
            return this.pos > e
        }, Dt.prototype.skipToEnd = function () {
            this.pos = this.string.length
        }, Dt.prototype.skipTo = function (e) {
            var t = this.string.indexOf(e, this.pos);
            if (t > -1) return this.pos = t, !0
        }, Dt.prototype.backUp = function (e) {
            this.pos -= e
        }, Dt.prototype.column = function () {
            return this.lastColumnPos < this.start && (this.lastColumnValue = F(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? F(this.string, this.lineStart, this.tabSize) : 0)
        }, Dt.prototype.indentation = function () {
            return F(this.string, null, this.tabSize) - (this.lineStart ? F(this.string, this.lineStart, this.tabSize) : 0)
        }, Dt.prototype.match = function (e, t, n) {
            if ("string" != typeof e) {
                var r = this.string.slice(this.pos).match(e);
                return r && r.index > 0 ? null : (r && !1 !== t && (this.pos += r[0].length), r)
            }
            var i = function (e) {
                return n ? e.toLowerCase() : e
            };
            if (i(this.string.substr(this.pos, e.length)) == i(e)) return !1 !== t && (this.pos += e.length), !0
        }, Dt.prototype.current = function () {
            return this.string.slice(this.start, this.pos)
        }, Dt.prototype.hideFirstChars = function (e, t) {
            this.lineStart += e;
            try {
                return t()
            } finally {
                this.lineStart -= e
            }
        }, Dt.prototype.lookAhead = function (e) {
            var t = this.lineOracle;
            return t && t.lookAhead(e)
        }, Dt.prototype.baseToken = function () {
            var e = this.lineOracle;
            return e && e.baseToken(this.pos)
        };
        var Pt = function (e, t) {
            this.state = e, this.lookAhead = t
        }, Ht = function (e, t, n, r) {
            this.state = t, this.doc = e, this.line = n, this.maxLookAhead = r || 0, this.baseTokens = null, this.baseTokenPos = 1
        };

        function Rt(e, t, n, r) {
            var i = [e.state.modeGen], o = {};
            $t(e, t.text, e.doc.mode, n, function (e, t) {
                return i.push(e, t)
            }, o, r);
            for (var a = n.state, l = function (r) {
                n.baseTokens = i;
                var l = e.state.overlays[r], s = 1, u = 0;
                n.state = !0, $t(e, t.text, l.mode, n, function (e, t) {
                    for (var n = s; u < e;) {
                        var r = i[s];
                        r > e && i.splice(s, 1, e, i[s + 1], r), s += 2, u = Math.min(e, r)
                    }
                    if (t) if (l.opaque) i.splice(n, s - n, e, "overlay " + t), s = n + 2; else for (; n < s; n += 2) {
                        var o = i[n + 1];
                        i[n + 1] = (o ? o + " " : "") + "overlay " + t
                    }
                }, o), n.state = a, n.baseTokens = null, n.baseTokenPos = 1
            }, s = 0; s < e.state.overlays.length; ++s) l(s);
            return {styles: i, classes: o.bgClass || o.textClass ? o : null}
        }

        function It(e, t, n) {
            if (!t.styles || t.styles[0] != e.state.modeGen) {
                var r = Wt(e, fe(t)), i = t.text.length > e.options.maxHighlightLength && Mt(e.doc.mode, r.state),
                    o = Rt(e, t, r);
                i && (r.state = i), t.stateAfter = r.save(!i), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier))
            }
            return t.styles
        }

        function Wt(e, t, n) {
            var r = e.doc, i = e.display;
            if (!r.mode.startState) return new Ht(r, !0, t);
            var o = function (e, t, n) {
                    for (var r, i, o = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), l = t; l > a; --l) {
                        if (l <= o.first) return o.first;
                        var s = le(o, l - 1), u = s.stateAfter;
                        if (u && (!n || l + (u instanceof Pt ? u.lookAhead : 0) <= o.modeFrontier)) return l;
                        var c = F(s.text, null, e.options.tabSize);
                        (null == i || r > c) && (i = l - 1, r = c)
                    }
                    return i
                }(e, t, n), a = o > r.first && le(r, o - 1).stateAfter,
                l = a ? Ht.fromSaved(r, a, o) : new Ht(r, Et(r.mode), o);
            return r.iter(o, t, function (n) {
                Ft(e, n.text, l);
                var r = l.line;
                n.stateAfter = r == t - 1 || r % 5 == 0 || r >= i.viewFrom && r < i.viewTo ? l.save() : null, l.nextLine()
            }), n && (r.modeFrontier = l.line), l
        }

        function Ft(e, t, n, r) {
            var i = e.doc.mode, o = new Dt(t, e.options.tabSize, n);
            for (o.start = o.pos = r || 0, "" == t && jt(i, n.state); !o.eol();) _t(i, o, n.state), o.start = o.pos
        }

        function jt(e, t) {
            if (e.blankLine) return e.blankLine(t);
            if (e.innerMode) {
                var n = Ot(e, t);
                return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0
            }
        }

        function _t(e, t, n, r) {
            for (var i = 0; i < 10; i++) {
                r && (r[0] = Ot(e, n).mode);
                var o = e.token(t, n);
                if (t.pos > t.start) return o
            }
            throw new Error("Mode " + e.name + " failed to advance stream.")
        }

        Ht.prototype.lookAhead = function (e) {
            var t = this.doc.getLine(this.line + e);
            return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t
        }, Ht.prototype.baseToken = function (e) {
            if (!this.baseTokens) return null;
            for (; this.baseTokens[this.baseTokenPos] <= e;) this.baseTokenPos += 2;
            var t = this.baseTokens[this.baseTokenPos + 1];
            return {type: t && t.replace(/( |^)overlay .*/, ""), size: this.baseTokens[this.baseTokenPos] - e}
        }, Ht.prototype.nextLine = function () {
            this.line++, this.maxLookAhead > 0 && this.maxLookAhead--
        }, Ht.fromSaved = function (e, t, n) {
            return t instanceof Pt ? new Ht(e, Mt(e.mode, t.state), n, t.lookAhead) : new Ht(e, Mt(e.mode, t), n)
        }, Ht.prototype.save = function (e) {
            var t = !1 !== e ? Mt(this.doc.mode, this.state) : this.state;
            return this.maxLookAhead > 0 ? new Pt(t, this.maxLookAhead) : t
        };
        var Bt = function (e, t, n) {
            this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = n
        };

        function zt(e, t, n, r) {
            var i, o, a = e.doc, l = a.mode, s = le(a, (t = ke(a, t)).line), u = Wt(e, t.line, n),
                c = new Dt(s.text, e.options.tabSize, u);
            for (r && (o = []); (r || c.pos < t.ch) && !c.eol();) c.start = c.pos, i = _t(l, c, u.state), r && o.push(new Bt(c, i, Mt(a.mode, u.state)));
            return r ? o : new Bt(c, i, u.state)
        }

        function qt(e, t) {
            if (e) for (; ;) {
                var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                if (!n) break;
                e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
                var r = n[1] ? "bgClass" : "textClass";
                null == t[r] ? t[r] = n[2] : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(t[r]) || (t[r] += " " + n[2])
            }
            return e
        }

        function $t(e, t, n, r, i, o, a) {
            var l = n.flattenSpans;
            null == l && (l = e.options.flattenSpans);
            var s, u = 0, c = null, f = new Dt(t, e.options.tabSize, r), d = e.options.addModeClass && [null];
            for ("" == t && qt(jt(n, r.state), o); !f.eol();) {
                if (f.pos > e.options.maxHighlightLength ? (l = !1, a && Ft(e, t, r, f.pos), f.pos = t.length, s = null) : s = qt(_t(n, f, r.state, d), o), d) {
                    var h = d[0].name;
                    h && (s = "m-" + (s ? h + " " + s : h))
                }
                if (!l || c != s) {
                    for (; u < f.start;) i(u = Math.min(f.start, u + 5e3), c);
                    c = s
                }
                f.start = f.pos
            }
            for (; u < f.pos;) {
                var p = Math.min(f.pos, u + 5e3);
                i(p, c), u = p
            }
        }

        var Ut = function (e, t, n) {
            this.text = e, De(this, t), this.height = n ? n(this) : 1
        };

        function Vt(e) {
            e.parent = null, Ee(e)
        }

        Ut.prototype.lineNo = function () {
            return fe(this)
        }, lt(Ut);
        var Gt = {}, Xt = {};

        function Kt(e, t) {
            if (!e || /^\s*$/.test(e)) return null;
            var n = t.addModeClass ? Xt : Gt;
            return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"))
        }

        function Yt(e, t) {
            var n = O("span", null, null, s ? "padding-right: .1px" : null), r = {
                pre: O("pre", [n], "CodeMirror-line"),
                content: n,
                col: 0,
                pos: 0,
                cm: e,
                trailingSpace: !1,
                splitSpaces: e.getOption("lineWrapping")
            };
            t.measure = {};
            for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
                var o = i ? t.rest[i - 1] : t.line, a = void 0;
                r.pos = 0, r.addToken = Jt, yt(e.display.measure) && (a = Je(o, e.doc.direction)) && (r.addToken = Zt(r.addToken, a)), r.map = [], tn(o, r, It(e, o, t != e.display.externalMeasured && fe(o))), o.styleClasses && (o.styleClasses.bgClass && (r.bgClass = H(o.styleClasses.bgClass, r.bgClass || "")), o.styleClasses.textClass && (r.textClass = H(o.styleClasses.textClass, r.textClass || ""))), 0 == r.map.length && r.map.push(0, 0, r.content.appendChild(vt(e.display.measure))), 0 == i ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}))
            }
            if (s) {
                var l = r.content.lastChild;
                (/\bcm-tab\b/.test(l.className) || l.querySelector && l.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack")
            }
            return rt(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = H(r.pre.className, r.textClass || "")), r
        }

        function Qt(e) {
            var t = M("span", "•", "cm-invalidchar");
            return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t
        }

        function Jt(e, t, n, r, i, o, s) {
            if (t) {
                var u, c = e.splitSpaces ? function (e, t) {
                    if (e.length > 1 && !/  /.test(e)) return e;
                    for (var n = t, r = "", i = 0; i < e.length; i++) {
                        var o = e.charAt(i);
                        " " != o || !n || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = " "), r += o, n = " " == o
                    }
                    return r
                }(t, e.trailingSpace) : t, f = e.cm.state.specialChars, d = !1;
                if (f.test(t)) {
                    u = document.createDocumentFragment();
                    for (var h = 0; ;) {
                        f.lastIndex = h;
                        var p = f.exec(t), g = p ? p.index - h : t.length - h;
                        if (g) {
                            var m = document.createTextNode(c.slice(h, h + g));
                            a && l < 9 ? u.appendChild(M("span", [m])) : u.appendChild(m), e.map.push(e.pos, e.pos + g, m), e.col += g, e.pos += g
                        }
                        if (!p) break;
                        h += g + 1;
                        var v = void 0;
                        if ("\t" == p[0]) {
                            var y = e.cm.options.tabSize, b = y - e.col % y;
                            (v = u.appendChild(M("span", X(b), "cm-tab"))).setAttribute("role", "presentation"), v.setAttribute("cm-text", "\t"), e.col += b
                        } else "\r" == p[0] || "\n" == p[0] ? ((v = u.appendChild(M("span", "\r" == p[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", p[0]), e.col += 1) : ((v = e.cm.options.specialCharPlaceholder(p[0])).setAttribute("cm-text", p[0]), a && l < 9 ? u.appendChild(M("span", [v])) : u.appendChild(v), e.col += 1);
                        e.map.push(e.pos, e.pos + 1, v), e.pos++
                    }
                } else e.col += t.length, u = document.createTextNode(c), e.map.push(e.pos, e.pos + t.length, u), a && l < 9 && (d = !0), e.pos += t.length;
                if (e.trailingSpace = 32 == c.charCodeAt(t.length - 1), n || r || i || d || s) {
                    var x = n || "";
                    r && (x += r), i && (x += i);
                    var w = M("span", [u], x, s);
                    return o && (w.title = o), e.content.appendChild(w)
                }
                e.content.appendChild(u)
            }
        }

        function Zt(e, t) {
            return function (n, r, i, o, a, l, s) {
                i = i ? i + " cm-force-border" : "cm-force-border";
                for (var u = n.pos, c = u + r.length; ;) {
                    for (var f = void 0, d = 0; d < t.length && !((f = t[d]).to > u && f.from <= u); d++) ;
                    if (f.to >= c) return e(n, r, i, o, a, l, s);
                    e(n, r.slice(0, f.to - u), i, o, null, l, s), o = null, r = r.slice(f.to - u), u = f.to
                }
            }
        }

        function en(e, t, n, r) {
            var i = !r && n.widgetNode;
            i && e.map.push(e.pos, e.pos + t, i), !r && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = !1
        }

        function tn(e, t, n) {
            var r = e.markedSpans, i = e.text, o = 0;
            if (r) for (var a, l, s, u, c, f, d, h = i.length, p = 0, g = 1, m = "", v = 0; ;) {
                if (v == p) {
                    s = u = c = f = l = "", d = null, v = 1 / 0;
                    for (var y = [], b = void 0, x = 0; x < r.length; ++x) {
                        var w = r[x], k = w.marker;
                        "bookmark" == k.type && w.from == p && k.widgetNode ? y.push(k) : w.from <= p && (null == w.to || w.to > p || k.collapsed && w.to == p && w.from == p) ? (null != w.to && w.to != p && v > w.to && (v = w.to, u = ""), k.className && (s += " " + k.className), k.css && (l = (l ? l + ";" : "") + k.css), k.startStyle && w.from == p && (c += " " + k.startStyle), k.endStyle && w.to == v && (b || (b = [])).push(k.endStyle, w.to), k.title && !f && (f = k.title), k.collapsed && (!d || Re(d.marker, k) < 0) && (d = w)) : w.from > p && v > w.from && (v = w.from)
                    }
                    if (b) for (var C = 0; C < b.length; C += 2) b[C + 1] == v && (u += " " + b[C]);
                    if (!d || d.from == p) for (var S = 0; S < y.length; ++S) en(t, 0, y[S]);
                    if (d && (d.from || 0) == p) {
                        if (en(t, (null == d.to ? h + 1 : d.to) - p, d.marker, null == d.from), null == d.to) return;
                        d.to == p && (d = !1)
                    }
                }
                if (p >= h) break;
                for (var T = Math.min(h, v); ;) {
                    if (m) {
                        var L = p + m.length;
                        if (!d) {
                            var N = L > T ? m.slice(0, T - p) : m;
                            t.addToken(t, N, a ? a + s : s, c, p + N.length == v ? u : "", f, l)
                        }
                        if (L >= T) {
                            m = m.slice(T - p), p = T;
                            break
                        }
                        p = L, c = ""
                    }
                    m = i.slice(o, o = n[g++]), a = Kt(n[g++], t.cm.options)
                }
            } else for (var A = 1; A < n.length; A += 2) t.addToken(t, i.slice(o, o = n[A]), Kt(n[A + 1], t.cm.options))
        }

        function nn(e, t, n) {
            this.line = t, this.rest = function (e) {
                for (var t, n; t = Fe(e);) e = t.find(1, !0).line, (n || (n = [])).push(e);
                return n
            }(t), this.size = this.rest ? fe(K(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = $e(e, t)
        }

        function rn(e, t, n) {
            for (var r, i = [], o = t; o < n; o = r) {
                var a = new nn(e.doc, le(e.doc, o), o);
                r = o + a.size, i.push(a)
            }
            return i
        }

        var on = null;
        var an = null;

        function ln(e, t) {
            var n = tt(e, t);
            if (n.length) {
                var r, i = Array.prototype.slice.call(arguments, 2);
                on ? r = on.delayedCallbacks : an ? r = an : (r = an = [], setTimeout(sn, 0));
                for (var o = function (e) {
                    r.push(function () {
                        return n[e].apply(null, i)
                    })
                }, a = 0; a < n.length; ++a) o(a)
            }
        }

        function sn() {
            var e = an;
            an = null;
            for (var t = 0; t < e.length; ++t) e[t]()
        }

        function un(e, t, n, r) {
            for (var i = 0; i < t.changes.length; i++) {
                var o = t.changes[i];
                "text" == o ? dn(e, t) : "gutter" == o ? pn(e, t, n, r) : "class" == o ? hn(e, t) : "widget" == o && gn(e, t, r)
            }
            t.changes = null
        }

        function cn(e) {
            return e.node == e.text && (e.node = M("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), a && l < 8 && (e.node.style.zIndex = 2)), e.node
        }

        function fn(e, t) {
            var n = e.display.externalMeasured;
            return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : Yt(e, t)
        }

        function dn(e, t) {
            var n = t.text.className, r = fn(e, t);
            t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, hn(e, t)) : n && (t.text.className = n)
        }

        function hn(e, t) {
            !function (e, t) {
                var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
                if (n && (n += " CodeMirror-linebackground"), t.background) n ? t.background.className = n : (t.background.parentNode.removeChild(t.background), t.background = null); else if (n) {
                    var r = cn(t);
                    t.background = r.insertBefore(M("div", null, n), r.firstChild), e.display.input.setUneditable(t.background)
                }
            }(e, t), t.line.wrapClass ? cn(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
            var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
            t.text.className = n || ""
        }

        function pn(e, t, n, r) {
            if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
                var i = cn(t);
                t.gutterBackground = M("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), i.insertBefore(t.gutterBackground, t.text)
            }
            var o = t.line.gutterMarkers;
            if (e.options.lineNumbers || o) {
                var a = cn(t),
                    l = t.gutter = M("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
                if (e.display.input.setUneditable(l), a.insertBefore(l, t.text), t.line.gutterClass && (l.className += " " + t.line.gutterClass), !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (t.lineNumber = l.appendChild(M("div", pe(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), o) for (var s = 0; s < e.options.gutters.length; ++s) {
                    var u = e.options.gutters[s], c = o.hasOwnProperty(u) && o[u];
                    c && l.appendChild(M("div", [c], "CodeMirror-gutter-elt", "left: " + r.gutterLeft[u] + "px; width: " + r.gutterWidth[u] + "px"))
                }
            }
        }

        function gn(e, t, n) {
            t.alignable && (t.alignable = null);
            for (var r = t.node.firstChild, i = void 0; r; r = i) i = r.nextSibling, "CodeMirror-linewidget" == r.className && t.node.removeChild(r);
            vn(e, t, n)
        }

        function mn(e, t, n, r) {
            var i = fn(e, t);
            return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), hn(e, t), pn(e, t, n, r), vn(e, t, r), t.node
        }

        function vn(e, t, n) {
            if (yn(e, t.line, t, n, !0), t.rest) for (var r = 0; r < t.rest.length; r++) yn(e, t.rest[r], t, n, !1)
        }

        function yn(e, t, n, r, i) {
            if (t.widgets) for (var o = cn(n), a = 0, l = t.widgets; a < l.length; ++a) {
                var s = l[a], u = M("div", [s.node], "CodeMirror-linewidget");
                s.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"), bn(s, u, n, r), e.display.input.setUneditable(u), i && s.above ? o.insertBefore(u, n.gutter || n.text) : o.appendChild(u), ln(s, "redraw")
            }
        }

        function bn(e, t, n, r) {
            if (e.noHScroll) {
                (n.alignable || (n.alignable = [])).push(t);
                var i = r.wrapperWidth;
                t.style.left = r.fixedPos + "px", e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = i + "px"
            }
            e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"))
        }

        function xn(e) {
            if (null != e.height) return e.height;
            var t = e.doc.cm;
            if (!t) return 0;
            if (!E(document.body, e.node)) {
                var n = "position: relative;";
                e.coverGutter && (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (n += "width: " + t.display.wrapper.clientWidth + "px;"), A(t.display.measure, M("div", [e.node], null, n))
            }
            return e.height = e.node.parentNode.offsetHeight
        }

        function wn(e, t) {
            for (var n = dt(t); n != e.wrapper; n = n.parentNode) if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover) return !0
        }

        function kn(e) {
            return e.lineSpace.offsetTop
        }

        function Cn(e) {
            return e.mover.offsetHeight - e.lineSpace.offsetHeight
        }

        function Sn(e) {
            if (e.cachedPaddingH) return e.cachedPaddingH;
            var t = A(e.measure, M("pre", "x")),
                n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                r = {left: parseInt(n.paddingLeft), right: parseInt(n.paddingRight)};
            return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r
        }

        function Tn(e) {
            return B - e.display.nativeBarWidth
        }

        function Ln(e) {
            return e.display.scroller.clientWidth - Tn(e) - e.display.barWidth
        }

        function Nn(e) {
            return e.display.scroller.clientHeight - Tn(e) - e.display.barHeight
        }

        function An(e, t, n) {
            if (e.line == t) return {map: e.measure.map, cache: e.measure.cache};
            for (var r = 0; r < e.rest.length; r++) if (e.rest[r] == t) return {
                map: e.measure.maps[r],
                cache: e.measure.caches[r]
            };
            for (var i = 0; i < e.rest.length; i++) if (fe(e.rest[i]) > n) return {
                map: e.measure.maps[i],
                cache: e.measure.caches[i],
                before: !0
            }
        }

        function Mn(e, t, n, r) {
            return Dn(e, En(e, t), n, r)
        }

        function On(e, t) {
            if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[lr(e, t)];
            var n = e.display.externalMeasured;
            return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0
        }

        function En(e, t) {
            var n = fe(t), r = On(e, n);
            r && !r.text ? r = null : r && r.changes && (un(e, r, n, nr(e)), e.curOp.forceUpdate = !0), r || (r = function (e, t) {
                var n = fe(t = Be(t)), r = e.display.externalMeasured = new nn(e.doc, t, n);
                r.lineN = n;
                var i = r.built = Yt(e, r);
                return r.text = i.pre, A(e.display.lineMeasure, i.pre), r
            }(e, t));
            var i = An(r, t, n);
            return {line: t, view: r, rect: null, map: i.map, cache: i.cache, before: i.before, hasHeights: !1}
        }

        function Dn(e, t, n, r, i) {
            t.before && (n = -1);
            var o, s = n + (r || "");
            return t.cache.hasOwnProperty(s) ? o = t.cache[s] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (!function (e, t, n) {
                var r = e.options.lineWrapping, i = r && Ln(e);
                if (!t.measure.heights || r && t.measure.width != i) {
                    var o = t.measure.heights = [];
                    if (r) {
                        t.measure.width = i;
                        for (var a = t.text.firstChild.getClientRects(), l = 0; l < a.length - 1; l++) {
                            var s = a[l], u = a[l + 1];
                            Math.abs(s.bottom - u.bottom) > 2 && o.push((s.bottom + u.top) / 2 - n.top)
                        }
                    }
                    o.push(n.bottom - n.top)
                }
            }(e, t.view, t.rect), t.hasHeights = !0), (o = function (e, t, n, r) {
                var i, o = Rn(t.map, n, r), s = o.node, u = o.start, c = o.end, f = o.collapse;
                if (3 == s.nodeType) {
                    for (var d = 0; d < 4; d++) {
                        for (; u && ie(t.line.text.charAt(o.coverStart + u));) --u;
                        for (; o.coverStart + c < o.coverEnd && ie(t.line.text.charAt(o.coverStart + c));) ++c;
                        if ((i = a && l < 9 && 0 == u && c == o.coverEnd - o.coverStart ? s.parentNode.getBoundingClientRect() : In(T(s, u, c).getClientRects(), r)).left || i.right || 0 == u) break;
                        c = u, u -= 1, f = "right"
                    }
                    a && l < 11 && (i = function (e, t) {
                        if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !function (e) {
                            if (null != kt) return kt;
                            var t = A(e, M("span", "x")), n = t.getBoundingClientRect(),
                                r = T(t, 0, 1).getBoundingClientRect();
                            return kt = Math.abs(n.left - r.left) > 1
                        }(e)) return t;
                        var n = screen.logicalXDPI / screen.deviceXDPI, r = screen.logicalYDPI / screen.deviceYDPI;
                        return {left: t.left * n, right: t.right * n, top: t.top * r, bottom: t.bottom * r}
                    }(e.display.measure, i))
                } else {
                    var h;
                    u > 0 && (f = r = "right"), i = e.options.lineWrapping && (h = s.getClientRects()).length > 1 ? h["right" == r ? h.length - 1 : 0] : s.getBoundingClientRect()
                }
                if (a && l < 9 && !u && (!i || !i.left && !i.right)) {
                    var p = s.parentNode.getClientRects()[0];
                    i = p ? {left: p.left, right: p.left + tr(e.display), top: p.top, bottom: p.bottom} : Hn
                }
                for (var g = i.top - t.rect.top, m = i.bottom - t.rect.top, v = (g + m) / 2, y = t.view.measure.heights, b = 0; b < y.length - 1 && !(v < y[b]); b++) ;
                var x = b ? y[b - 1] : 0, w = y[b], k = {
                    left: ("right" == f ? i.right : i.left) - t.rect.left,
                    right: ("left" == f ? i.left : i.right) - t.rect.left,
                    top: x,
                    bottom: w
                };
                i.left || i.right || (k.bogus = !0);
                e.options.singleCursorHeightPerLine || (k.rtop = g, k.rbottom = m);
                return k
            }(e, t, n, r)).bogus || (t.cache[s] = o)), {
                left: o.left,
                right: o.right,
                top: i ? o.rtop : o.top,
                bottom: i ? o.rbottom : o.bottom
            }
        }

        var Pn, Hn = {left: 0, right: 0, top: 0, bottom: 0};

        function Rn(e, t, n) {
            for (var r, i, o, a, l, s, u = 0; u < e.length; u += 3) if (l = e[u], s = e[u + 1], t < l ? (i = 0, o = 1, a = "left") : t < s ? o = (i = t - l) + 1 : (u == e.length - 3 || t == s && e[u + 3] > t) && (i = (o = s - l) - 1, t >= s && (a = "right")), null != i) {
                if (r = e[u + 2], l == s && n == (r.insertLeft ? "left" : "right") && (a = n), "left" == n && 0 == i) for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft;) r = e[2 + (u -= 3)], a = "left";
                if ("right" == n && i == s - l) for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft;) r = e[(u += 3) + 2], a = "right";
                break
            }
            return {node: r, start: i, end: o, collapse: a, coverStart: l, coverEnd: s}
        }

        function In(e, t) {
            var n = Hn;
            if ("left" == t) for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++) ; else for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--) ;
            return n
        }

        function Wn(e) {
            if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest)) for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {}
        }

        function Fn(e) {
            e.display.externalMeasure = null, N(e.display.lineMeasure);
            for (var t = 0; t < e.display.view.length; t++) Wn(e.display.view[t])
        }

        function jn(e) {
            Fn(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null
        }

        function _n() {
            return c && m ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
        }

        function Bn() {
            return c && m ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
        }

        function zn(e) {
            var t = 0;
            if (e.widgets) for (var n = 0; n < e.widgets.length; ++n) e.widgets[n].above && (t += xn(e.widgets[n]));
            return t
        }

        function qn(e, t, n, r, i) {
            if (!i) {
                var o = zn(t);
                n.top += o, n.bottom += o
            }
            if ("line" == r) return n;
            r || (r = "local");
            var a = Ve(t);
            if ("local" == r ? a += kn(e.display) : a -= e.display.viewOffset, "page" == r || "window" == r) {
                var l = e.display.lineSpace.getBoundingClientRect();
                a += l.top + ("window" == r ? 0 : Bn());
                var s = l.left + ("window" == r ? 0 : _n());
                n.left += s, n.right += s
            }
            return n.top += a, n.bottom += a, n
        }

        function $n(e, t, n) {
            if ("div" == n) return t;
            var r = t.left, i = t.top;
            if ("page" == n) r -= _n(), i -= Bn(); else if ("local" == n || !n) {
                var o = e.display.sizer.getBoundingClientRect();
                r += o.left, i += o.top
            }
            var a = e.display.lineSpace.getBoundingClientRect();
            return {left: r - a.left, top: i - a.top}
        }

        function Un(e, t, n, r, i) {
            return r || (r = le(e.doc, t.line)), qn(e, r, Mn(e, r, t.ch, i), n)
        }

        function Vn(e, t, n, r, i, o) {
            function a(t, a) {
                var l = Dn(e, i, t, a ? "right" : "left", o);
                return a ? l.left = l.right : l.right = l.left, qn(e, r, l, n)
            }

            r = r || le(e.doc, t.line), i || (i = En(e, r));
            var l = Je(r, e.doc.direction), s = t.ch, u = t.sticky;
            if (s >= r.text.length ? (s = r.text.length, u = "before") : s <= 0 && (s = 0, u = "after"), !l) return a("before" == u ? s - 1 : s, "before" == u);

            function c(e, t, n) {
                var r = 1 == l[t].level;
                return a(n ? e - 1 : e, r != n)
            }

            var f = Ye(l, s, u), d = Ke, h = c(s, f, "before" == u);
            return null != d && (h.other = c(s, d, "before" != u)), h
        }

        function Gn(e, t) {
            var n = 0;
            t = ke(e.doc, t), e.options.lineWrapping || (n = tr(e.display) * t.ch);
            var r = le(e.doc, t.line), i = Ve(r) + kn(e.display);
            return {left: n, right: n, top: i, bottom: i + r.height}
        }

        function Xn(e, t, n, r, i) {
            var o = ge(e, t, n);
            return o.xRel = i, r && (o.outside = !0), o
        }

        function Kn(e, t, n) {
            var r = e.doc;
            if ((n += e.display.viewOffset) < 0) return Xn(r.first, 0, null, !0, -1);
            var i = de(r, n), o = r.first + r.size - 1;
            if (i > o) return Xn(r.first + r.size - 1, le(r, o).text.length, null, !0, 1);
            t < 0 && (t = 0);
            for (var a = le(r, i); ;) {
                var l = Zn(e, a, i, t, n), s = je(a, l.ch + (l.xRel > 0 ? 1 : 0));
                if (!s) return l;
                var u = s.find(1);
                if (u.line == i) return u;
                a = le(r, i = u.line)
            }
        }

        function Yn(e, t, n, r) {
            r -= zn(t);
            var i = t.text.length, o = ae(function (t) {
                return Dn(e, n, t - 1).bottom <= r
            }, i, 0);
            return {
                begin: o, end: i = ae(function (t) {
                    return Dn(e, n, t).top > r
                }, o, i)
            }
        }

        function Qn(e, t, n, r) {
            return n || (n = En(e, t)), Yn(e, t, n, qn(e, t, Dn(e, n, r), "line").top)
        }

        function Jn(e, t, n, r) {
            return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t)
        }

        function Zn(e, t, n, r, i) {
            i -= Ve(t);
            var o = En(e, t), a = zn(t), l = 0, s = t.text.length, u = !0, c = Je(t, e.doc.direction);
            if (c) {
                var f = (e.options.lineWrapping ? function (e, t, n, r, i, o, a) {
                    var l = Yn(e, t, r, a), s = l.begin, u = l.end;
                    /\s/.test(t.text.charAt(u - 1)) && u--;
                    for (var c = null, f = null, d = 0; d < i.length; d++) {
                        var h = i[d];
                        if (!(h.from >= u || h.to <= s)) {
                            var p = 1 != h.level, g = Dn(e, r, p ? Math.min(u, h.to) - 1 : Math.max(s, h.from)).right,
                                m = g < o ? o - g + 1e9 : g - o;
                            (!c || f > m) && (c = h, f = m)
                        }
                    }
                    c || (c = i[i.length - 1]);
                    c.from < s && (c = {from: s, to: c.to, level: c.level});
                    c.to > u && (c = {from: c.from, to: u, level: c.level});
                    return c
                } : function (e, t, n, r, i, o, a) {
                    var l = ae(function (l) {
                        var s = i[l], u = 1 != s.level;
                        return Jn(Vn(e, ge(n, u ? s.to : s.from, u ? "before" : "after"), "line", t, r), o, a, !0)
                    }, 0, i.length - 1), s = i[l];
                    if (l > 0) {
                        var u = 1 != s.level, c = Vn(e, ge(n, u ? s.from : s.to, u ? "after" : "before"), "line", t, r);
                        Jn(c, o, a, !0) && c.top > a && (s = i[l - 1])
                    }
                    return s
                })(e, t, n, o, c, r, i);
                l = (u = 1 != f.level) ? f.from : f.to - 1, s = u ? f.to : f.from - 1
            }
            var d, h, p = null, g = null, m = ae(function (t) {
                var n = Dn(e, o, t);
                return n.top += a, n.bottom += a, !!Jn(n, r, i, !1) && (n.top <= i && n.left <= r && (p = t, g = n), !0)
            }, l, s), v = !1;
            if (g) {
                var y = r - g.left < g.right - r, b = y == u;
                m = p + (b ? 0 : 1), h = b ? "after" : "before", d = y ? g.left : g.right
            } else {
                u || m != s && m != l || m++, h = 0 == m ? "after" : m == t.text.length ? "before" : Dn(e, o, m - (u ? 1 : 0)).bottom + a <= i == u ? "after" : "before";
                var x = Vn(e, ge(n, m, h), "line", t, o);
                d = x.left, v = i < x.top || i >= x.bottom
            }
            return Xn(n, m = oe(t.text, m, 1), h, v, r - d)
        }

        function er(e) {
            if (null != e.cachedTextHeight) return e.cachedTextHeight;
            if (null == Pn) {
                Pn = M("pre");
                for (var t = 0; t < 49; ++t) Pn.appendChild(document.createTextNode("x")), Pn.appendChild(M("br"));
                Pn.appendChild(document.createTextNode("x"))
            }
            A(e.measure, Pn);
            var n = Pn.offsetHeight / 50;
            return n > 3 && (e.cachedTextHeight = n), N(e.measure), n || 1
        }

        function tr(e) {
            if (null != e.cachedCharWidth) return e.cachedCharWidth;
            var t = M("span", "xxxxxxxxxx"), n = M("pre", [t]);
            A(e.measure, n);
            var r = t.getBoundingClientRect(), i = (r.right - r.left) / 10;
            return i > 2 && (e.cachedCharWidth = i), i || 10
        }

        function nr(e) {
            for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, a = 0; o; o = o.nextSibling, ++a) n[e.options.gutters[a]] = o.offsetLeft + o.clientLeft + i, r[e.options.gutters[a]] = o.clientWidth;
            return {
                fixedPos: rr(t),
                gutterTotalWidth: t.gutters.offsetWidth,
                gutterLeft: n,
                gutterWidth: r,
                wrapperWidth: t.wrapper.clientWidth
            }
        }

        function rr(e) {
            return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
        }

        function ir(e) {
            var t = er(e.display), n = e.options.lineWrapping,
                r = n && Math.max(5, e.display.scroller.clientWidth / tr(e.display) - 3);
            return function (i) {
                if ($e(e.doc, i)) return 0;
                var o = 0;
                if (i.widgets) for (var a = 0; a < i.widgets.length; a++) i.widgets[a].height && (o += i.widgets[a].height);
                return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t
            }
        }

        function or(e) {
            var t = e.doc, n = ir(e);
            t.iter(function (e) {
                var t = n(e);
                t != e.height && ce(e, t)
            })
        }

        function ar(e, t, n, r) {
            var i = e.display;
            if (!n && "true" == dt(t).getAttribute("cm-not-content")) return null;
            var o, a, l = i.lineSpace.getBoundingClientRect();
            try {
                o = t.clientX - l.left, a = t.clientY - l.top
            } catch (t) {
                return null
            }
            var s, u = Kn(e, o, a);
            if (r && 1 == u.xRel && (s = le(e.doc, u.line).text).length == u.ch) {
                var c = F(s, s.length, e.options.tabSize) - s.length;
                u = ge(u.line, Math.max(0, Math.round((o - Sn(e.display).left) / tr(e.display)) - c))
            }
            return u
        }

        function lr(e, t) {
            if (t >= e.display.viewTo) return null;
            if ((t -= e.display.viewFrom) < 0) return null;
            for (var n = e.display.view, r = 0; r < n.length; r++) if ((t -= n[r].size) < 0) return r
        }

        function sr(e) {
            e.display.input.showSelection(e.display.input.prepareSelection())
        }

        function ur(e, t) {
            void 0 === t && (t = !0);
            for (var n = e.doc, r = {}, i = r.cursors = document.createDocumentFragment(), o = r.selection = document.createDocumentFragment(), a = 0; a < n.sel.ranges.length; a++) if (t || a != n.sel.primIndex) {
                var l = n.sel.ranges[a];
                if (!(l.from().line >= e.display.viewTo || l.to().line < e.display.viewFrom)) {
                    var s = l.empty();
                    (s || e.options.showCursorWhenSelecting) && cr(e, l.head, i), s || dr(e, l, o)
                }
            }
            return r
        }

        function cr(e, t, n) {
            var r = Vn(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
                i = n.appendChild(M("div", " ", "CodeMirror-cursor"));
            if (i.style.left = r.left + "px", i.style.top = r.top + "px", i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", r.other) {
                var o = n.appendChild(M("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
                o.style.display = "", o.style.left = r.other.left + "px", o.style.top = r.other.top + "px", o.style.height = .85 * (r.other.bottom - r.other.top) + "px"
            }
        }

        function fr(e, t) {
            return e.top - t.top || e.left - t.left
        }

        function dr(e, t, n) {
            var r = e.display, i = e.doc, o = document.createDocumentFragment(), a = Sn(e.display), l = a.left,
                s = Math.max(r.sizerWidth, Ln(e) - r.sizer.offsetLeft) - a.right, u = "ltr" == i.direction;

            function c(e, t, n, r) {
                t < 0 && (t = 0), t = Math.round(t), r = Math.round(r), o.appendChild(M("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == n ? s - e : n) + "px;\n                             height: " + (r - t) + "px"))
            }

            function f(t, n, r) {
                var o, a, f = le(i, t), d = f.text.length;

                function h(n, r) {
                    return Un(e, ge(t, n), "div", f, r)
                }

                function p(t, n, r) {
                    var i = Qn(e, f, null, t), o = "ltr" == n == ("after" == r) ? "left" : "right";
                    return h("after" == r ? i.begin : i.end - (/\s/.test(f.text.charAt(i.end - 1)) ? 2 : 1), o)[o]
                }

                var g = Je(f, i.direction);
                return function (e, t, n, r) {
                    if (!e) return r(t, n, "ltr", 0);
                    for (var i = !1, o = 0; o < e.length; ++o) {
                        var a = e[o];
                        (a.from < n && a.to > t || t == n && a.to == t) && (r(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr", o), i = !0)
                    }
                    i || r(t, n, "ltr")
                }(g, n || 0, null == r ? d : r, function (e, t, i, f) {
                    var m = "ltr" == i, v = h(e, m ? "left" : "right"), y = h(t - 1, m ? "right" : "left"),
                        b = null == n && 0 == e, x = null == r && t == d, w = 0 == f, k = !g || f == g.length - 1;
                    if (y.top - v.top <= 3) {
                        var C = (u ? x : b) && k, S = (u ? b : x) && w ? l : (m ? v : y).left,
                            T = C ? s : (m ? y : v).right;
                        c(S, v.top, T - S, v.bottom)
                    } else {
                        var L, N, A, M;
                        m ? (L = u && b && w ? l : v.left, N = u ? s : p(e, i, "before"), A = u ? l : p(t, i, "after"), M = u && x && k ? s : y.right) : (L = u ? p(e, i, "before") : l, N = !u && b && w ? s : v.right, A = !u && x && k ? l : y.left, M = u ? p(t, i, "after") : s), c(L, v.top, N - L, v.bottom), v.bottom < y.top && c(l, v.bottom, null, y.top), c(A, y.top, M - A, y.bottom)
                    }
                    (!o || fr(v, o) < 0) && (o = v), fr(y, o) < 0 && (o = y), (!a || fr(v, a) < 0) && (a = v), fr(y, a) < 0 && (a = y)
                }), {start: o, end: a}
            }

            var d = t.from(), h = t.to();
            if (d.line == h.line) f(d.line, d.ch, h.ch); else {
                var p = le(i, d.line), g = le(i, h.line), m = Be(p) == Be(g),
                    v = f(d.line, d.ch, m ? p.text.length + 1 : null).end, y = f(h.line, m ? 0 : null, h.ch).start;
                m && (v.top < y.top - 2 ? (c(v.right, v.top, null, v.bottom), c(l, y.top, y.left, y.bottom)) : c(v.right, v.top, y.left - v.right, v.bottom)), v.bottom < y.top && c(l, v.bottom, null, y.top)
            }
            n.appendChild(o)
        }

        function hr(e) {
            if (e.state.focused) {
                var t = e.display;
                clearInterval(t.blinker);
                var n = !0;
                t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function () {
                    return t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden"
                }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
            }
        }

        function pr(e) {
            e.state.focused || (e.display.input.focus(), mr(e))
        }

        function gr(e) {
            e.state.delayingBlurEvent = !0, setTimeout(function () {
                e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, vr(e))
            }, 100)
        }

        function mr(e, t) {
            e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (rt(e, "focus", e, t), e.state.focused = !0, P(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), s && setTimeout(function () {
                return e.display.input.reset(!0)
            }, 20)), e.display.input.receivedFocus()), hr(e))
        }

        function vr(e, t) {
            e.state.delayingBlurEvent || (e.state.focused && (rt(e, "blur", e, t), e.state.focused = !1, L(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function () {
                e.state.focused || (e.display.shift = !1)
            }, 150))
        }

        function yr(e) {
            for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
                var i = t.view[r], o = void 0;
                if (!i.hidden) {
                    if (a && l < 8) {
                        var s = i.node.offsetTop + i.node.offsetHeight;
                        o = s - n, n = s
                    } else {
                        var u = i.node.getBoundingClientRect();
                        o = u.bottom - u.top
                    }
                    var c = i.line.height - o;
                    if (o < 2 && (o = er(t)), (c > .005 || c < -.005) && (ce(i.line, o), br(i.line), i.rest)) for (var f = 0; f < i.rest.length; f++) br(i.rest[f])
                }
            }
        }

        function br(e) {
            if (e.widgets) for (var t = 0; t < e.widgets.length; ++t) {
                var n = e.widgets[t], r = n.node.parentNode;
                r && (n.height = r.offsetHeight)
            }
        }

        function xr(e, t, n) {
            var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
            r = Math.floor(r - kn(e));
            var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight, o = de(t, r), a = de(t, i);
            if (n && n.ensure) {
                var l = n.ensure.from.line, s = n.ensure.to.line;
                l < o ? (o = l, a = de(t, Ve(le(t, l)) + e.wrapper.clientHeight)) : Math.min(s, t.lastLine()) >= a && (o = de(t, Ve(le(t, s)) - e.wrapper.clientHeight), a = s)
            }
            return {from: o, to: Math.max(a, o + 1)}
        }

        function wr(e) {
            var t = e.display, n = t.view;
            if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
                for (var r = rr(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", a = 0; a < n.length; a++) if (!n[a].hidden) {
                    e.options.fixedGutter && (n[a].gutter && (n[a].gutter.style.left = o), n[a].gutterBackground && (n[a].gutterBackground.style.left = o));
                    var l = n[a].alignable;
                    if (l) for (var s = 0; s < l.length; s++) l[s].style.left = o
                }
                e.options.fixedGutter && (t.gutters.style.left = r + i + "px")
            }
        }

        function kr(e) {
            if (!e.options.lineNumbers) return !1;
            var t = e.doc, n = pe(e.options, t.first + t.size - 1), r = e.display;
            if (n.length != r.lineNumChars) {
                var i = r.measure.appendChild(M("div", [M("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                    o = i.firstChild.offsetWidth, a = i.offsetWidth - o;
                return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - a) + 1, r.lineNumWidth = r.lineNumInnerWidth + a, r.lineNumChars = r.lineNumInnerWidth ? n.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", si(e), !0
            }
            return !1
        }

        function Cr(e, t) {
            var n = e.display, r = er(e.display);
            t.top < 0 && (t.top = 0);
            var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop, o = Nn(e), a = {};
            t.bottom - t.top > o && (t.bottom = t.top + o);
            var l = e.doc.height + Cn(n), s = t.top < r, u = t.bottom > l - r;
            if (t.top < i) a.scrollTop = s ? 0 : t.top; else if (t.bottom > i + o) {
                var c = Math.min(t.top, (u ? l : t.bottom) - o);
                c != i && (a.scrollTop = c)
            }
            var f = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft,
                d = Ln(e) - (e.options.fixedGutter ? n.gutters.offsetWidth : 0), h = t.right - t.left > d;
            return h && (t.right = t.left + d), t.left < 10 ? a.scrollLeft = 0 : t.left < f ? a.scrollLeft = Math.max(0, t.left - (h ? 0 : 10)) : t.right > d + f - 3 && (a.scrollLeft = t.right + (h ? 0 : 10) - d), a
        }

        function Sr(e, t) {
            null != t && (Nr(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t)
        }

        function Tr(e) {
            Nr(e);
            var t = e.getCursor();
            e.curOp.scrollToPos = {from: t, to: t, margin: e.options.cursorScrollMargin}
        }

        function Lr(e, t, n) {
            null == t && null == n || Nr(e), null != t && (e.curOp.scrollLeft = t), null != n && (e.curOp.scrollTop = n)
        }

        function Nr(e) {
            var t = e.curOp.scrollToPos;
            t && (e.curOp.scrollToPos = null, Ar(e, Gn(e, t.from), Gn(e, t.to), t.margin))
        }

        function Ar(e, t, n, r) {
            var i = Cr(e, {
                left: Math.min(t.left, n.left),
                top: Math.min(t.top, n.top) - r,
                right: Math.max(t.right, n.right),
                bottom: Math.max(t.bottom, n.bottom) + r
            });
            Lr(e, i.scrollLeft, i.scrollTop)
        }

        function Mr(e, t) {
            Math.abs(e.doc.scrollTop - t) < 2 || (n || li(e, {top: t}), Or(e, t, !0), n && li(e), ni(e, 100))
        }

        function Or(e, t, n) {
            t = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t), (e.display.scroller.scrollTop != t || n) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t))
        }

        function Er(e, t, n, r) {
            t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r || (e.doc.scrollLeft = t, wr(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t))
        }

        function Dr(e) {
            var t = e.display, n = t.gutters.offsetWidth, r = Math.round(e.doc.height + Cn(e.display));
            return {
                clientHeight: t.scroller.clientHeight,
                viewHeight: t.wrapper.clientHeight,
                scrollWidth: t.scroller.scrollWidth,
                clientWidth: t.scroller.clientWidth,
                viewWidth: t.wrapper.clientWidth,
                barLeft: e.options.fixedGutter ? n : 0,
                docHeight: r,
                scrollHeight: r + Tn(e) + t.barHeight,
                nativeBarWidth: t.nativeBarWidth,
                gutterWidth: n
            }
        }

        var Pr = function (e, t, n) {
            this.cm = n;
            var r = this.vert = M("div", [M("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
                i = this.horiz = M("div", [M("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
            r.tabIndex = i.tabIndex = -1, e(r), e(i), et(r, "scroll", function () {
                r.clientHeight && t(r.scrollTop, "vertical")
            }), et(i, "scroll", function () {
                i.clientWidth && t(i.scrollLeft, "horizontal")
            }), this.checkedZeroWidth = !1, a && l < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
        };
        Pr.prototype.update = function (e) {
            var t = e.scrollWidth > e.clientWidth + 1, n = e.scrollHeight > e.clientHeight + 1, r = e.nativeBarWidth;
            if (n) {
                this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0";
                var i = e.viewHeight - (t ? r : 0);
                this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px"
            } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
            if (t) {
                this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
                var o = e.viewWidth - e.barLeft - (n ? r : 0);
                this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px"
            } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
            return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == r && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
                right: n ? r : 0,
                bottom: t ? r : 0
            }
        }, Pr.prototype.setScrollLeft = function (e) {
            this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
        }, Pr.prototype.setScrollTop = function (e) {
            this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
        }, Pr.prototype.zeroWidthHack = function () {
            var e = y && !h ? "12px" : "18px";
            this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new j, this.disableVert = new j
        }, Pr.prototype.enableZeroWidthBar = function (e, t, n) {
            e.style.pointerEvents = "auto", t.set(1e3, function r() {
                var i = e.getBoundingClientRect();
                ("vert" == n ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) != e ? e.style.pointerEvents = "none" : t.set(1e3, r)
            })
        }, Pr.prototype.clear = function () {
            var e = this.horiz.parentNode;
            e.removeChild(this.horiz), e.removeChild(this.vert)
        };
        var Hr = function () {
        };

        function Rr(e, t) {
            t || (t = Dr(e));
            var n = e.display.barWidth, r = e.display.barHeight;
            Ir(e, t);
            for (var i = 0; i < 4 && n != e.display.barWidth || r != e.display.barHeight; i++) n != e.display.barWidth && e.options.lineWrapping && yr(e), Ir(e, Dr(e)), n = e.display.barWidth, r = e.display.barHeight
        }

        function Ir(e, t) {
            var n = e.display, r = n.scrollbars.update(t);
            n.sizer.style.paddingRight = (n.barWidth = r.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px", n.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = ""
        }

        Hr.prototype.update = function () {
            return {bottom: 0, right: 0}
        }, Hr.prototype.setScrollLeft = function () {
        }, Hr.prototype.setScrollTop = function () {
        }, Hr.prototype.clear = function () {
        };
        var Wr = {native: Pr, null: Hr};

        function Fr(e) {
            e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && L(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new Wr[e.options.scrollbarStyle](function (t) {
                e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), et(t, "mousedown", function () {
                    e.state.focused && setTimeout(function () {
                        return e.display.input.focus()
                    }, 0)
                }), t.setAttribute("cm-not-content", "true")
            }, function (t, n) {
                "horizontal" == n ? Er(e, t) : Mr(e, t)
            }, e), e.display.scrollbars.addClass && P(e.display.wrapper, e.display.scrollbars.addClass)
        }

        var jr = 0;

        function _r(e) {
            e.curOp = {
                cm: e,
                viewChanged: !1,
                startHeight: e.doc.height,
                forceUpdate: !1,
                updateInput: null,
                typing: !1,
                changeObjs: null,
                cursorActivityHandlers: null,
                cursorActivityCalled: 0,
                selectionChanged: !1,
                updateMaxLine: !1,
                scrollLeft: null,
                scrollTop: null,
                scrollToPos: null,
                focus: !1,
                id: ++jr
            }, function (e) {
                on ? on.ops.push(e) : e.ownsGroup = on = {ops: [e], delayedCallbacks: []}
            }(e.curOp)
        }

        function Br(e) {
            !function (e, t) {
                var n = e.ownsGroup;
                if (n) try {
                    !function (e) {
                        var t = e.delayedCallbacks, n = 0;
                        do {
                            for (; n < t.length; n++) t[n].call(null);
                            for (var r = 0; r < e.ops.length; r++) {
                                var i = e.ops[r];
                                if (i.cursorActivityHandlers) for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
                            }
                        } while (n < t.length)
                    }(n)
                } finally {
                    on = null, t(n)
                }
            }(e.curOp, function (e) {
                for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
                !function (e) {
                    for (var t = e.ops, n = 0; n < t.length; n++) zr(t[n]);
                    for (var r = 0; r < t.length; r++) qr(t[r]);
                    for (var i = 0; i < t.length; i++) $r(t[i]);
                    for (var o = 0; o < t.length; o++) Ur(t[o]);
                    for (var a = 0; a < t.length; a++) Vr(t[a])
                }(e)
            })
        }

        function zr(e) {
            var t = e.cm, n = t.display;
            !function (e) {
                var t = e.display;
                !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Tn(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Tn(e) + "px", t.scrollbarsClipped = !0)
            }(t), e.updateMaxLine && Xe(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new ii(t, e.mustUpdate && {
                top: e.scrollTop,
                ensure: e.scrollToPos
            }, e.forceUpdate)
        }

        function qr(e) {
            e.updatedDisplay = e.mustUpdate && oi(e.cm, e.update)
        }

        function $r(e) {
            var t = e.cm, n = t.display;
            e.updatedDisplay && yr(t), e.barMeasure = Dr(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Mn(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + Tn(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - Ln(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection())
        }

        function Ur(e) {
            var t = e.cm;
            null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && Er(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
            var n = e.focus && e.focus == D();
            e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n), (e.updatedDisplay || e.startHeight != t.doc.height) && Rr(t, e.barMeasure), e.updatedDisplay && ui(t, e.barMeasure), e.selectionChanged && hr(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), n && pr(e.cm)
        }

        function Vr(e) {
            var t = e.cm, n = t.display, r = t.doc;
            (e.updatedDisplay && ai(t, e.update), null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null), null != e.scrollTop && Or(t, e.scrollTop, e.forceScroll), null != e.scrollLeft && Er(t, e.scrollLeft, !0, !0), e.scrollToPos) && function (e, t) {
                if (!it(e, "scrollCursorIntoView")) {
                    var n = e.display, r = n.sizer.getBoundingClientRect(), i = null;
                    if (t.top + r.top < 0 ? i = !0 : t.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !p) {
                        var o = M("div", "​", null, "position: absolute;\n                         top: " + (t.top - n.viewOffset - kn(e.display)) + "px;\n                         height: " + (t.bottom - t.top + Tn(e) + n.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
                        e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o)
                    }
                }
            }(t, function (e, t, n, r) {
                var i;
                null == r && (r = 0), e.options.lineWrapping || t != n || (n = "before" == (t = t.ch ? ge(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t).sticky ? ge(t.line, t.ch + 1, "before") : t);
                for (var o = 0; o < 5; o++) {
                    var a = !1, l = Vn(e, t), s = n && n != t ? Vn(e, n) : l, u = Cr(e, i = {
                        left: Math.min(l.left, s.left),
                        top: Math.min(l.top, s.top) - r,
                        right: Math.max(l.left, s.left),
                        bottom: Math.max(l.bottom, s.bottom) + r
                    }), c = e.doc.scrollTop, f = e.doc.scrollLeft;
                    if (null != u.scrollTop && (Mr(e, u.scrollTop), Math.abs(e.doc.scrollTop - c) > 1 && (a = !0)), null != u.scrollLeft && (Er(e, u.scrollLeft), Math.abs(e.doc.scrollLeft - f) > 1 && (a = !0)), !a) break
                }
                return i
            }(t, ke(r, e.scrollToPos.from), ke(r, e.scrollToPos.to), e.scrollToPos.margin));
            var i = e.maybeHiddenMarkers, o = e.maybeUnhiddenMarkers;
            if (i) for (var a = 0; a < i.length; ++a) i[a].lines.length || rt(i[a], "hide");
            if (o) for (var l = 0; l < o.length; ++l) o[l].lines.length && rt(o[l], "unhide");
            n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop), e.changeObjs && rt(t, "changes", t, e.changeObjs), e.update && e.update.finish()
        }

        function Gr(e, t) {
            if (e.curOp) return t();
            _r(e);
            try {
                return t()
            } finally {
                Br(e)
            }
        }

        function Xr(e, t) {
            return function () {
                if (e.curOp) return t.apply(e, arguments);
                _r(e);
                try {
                    return t.apply(e, arguments)
                } finally {
                    Br(e)
                }
            }
        }

        function Kr(e) {
            return function () {
                if (this.curOp) return e.apply(this, arguments);
                _r(this);
                try {
                    return e.apply(this, arguments)
                } finally {
                    Br(this)
                }
            }
        }

        function Yr(e) {
            return function () {
                var t = this.cm;
                if (!t || t.curOp) return e.apply(this, arguments);
                _r(t);
                try {
                    return e.apply(this, arguments)
                } finally {
                    Br(t)
                }
            }
        }

        function Qr(e, t, n, r) {
            null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0);
            var i = e.display;
            if (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) Te && ze(e.doc, t) < i.viewTo && Zr(e); else if (n <= i.viewFrom) Te && qe(e.doc, n + r) > i.viewFrom ? Zr(e) : (i.viewFrom += r, i.viewTo += r); else if (t <= i.viewFrom && n >= i.viewTo) Zr(e); else if (t <= i.viewFrom) {
                var o = ei(e, n, n + r, 1);
                o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += r) : Zr(e)
            } else if (n >= i.viewTo) {
                var a = ei(e, t, t, -1);
                a ? (i.view = i.view.slice(0, a.index), i.viewTo = a.lineN) : Zr(e)
            } else {
                var l = ei(e, t, t, -1), s = ei(e, n, n + r, 1);
                l && s ? (i.view = i.view.slice(0, l.index).concat(rn(e, l.lineN, s.lineN)).concat(i.view.slice(s.index)), i.viewTo += r) : Zr(e)
            }
            var u = i.externalMeasured;
            u && (n < u.lineN ? u.lineN += r : t < u.lineN + u.size && (i.externalMeasured = null))
        }

        function Jr(e, t, n) {
            e.curOp.viewChanged = !0;
            var r = e.display, i = e.display.externalMeasured;
            if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
                var o = r.view[lr(e, t)];
                if (null != o.node) {
                    var a = o.changes || (o.changes = []);
                    -1 == _(a, n) && a.push(n)
                }
            }
        }

        function Zr(e) {
            e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
        }

        function ei(e, t, n, r) {
            var i, o = lr(e, t), a = e.display.view;
            if (!Te || n == e.doc.first + e.doc.size) return {index: o, lineN: n};
            for (var l = e.display.viewFrom, s = 0; s < o; s++) l += a[s].size;
            if (l != t) {
                if (r > 0) {
                    if (o == a.length - 1) return null;
                    i = l + a[o].size - t, o++
                } else i = l - t;
                t += i, n += i
            }
            for (; ze(e.doc, n) != n;) {
                if (o == (r < 0 ? 0 : a.length - 1)) return null;
                n += r * a[o - (r < 0 ? 1 : 0)].size, o += r
            }
            return {index: o, lineN: n}
        }

        function ti(e) {
            for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
                var i = t[r];
                i.hidden || i.node && !i.changes || ++n
            }
            return n
        }

        function ni(e, t) {
            e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, I(ri, e))
        }

        function ri(e) {
            var t = e.doc;
            if (!(t.highlightFrontier >= e.display.viewTo)) {
                var n = +new Date + e.options.workTime, r = Wt(e, t.highlightFrontier), i = [];
                t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function (o) {
                    if (r.line >= e.display.viewFrom) {
                        var a = o.styles, l = o.text.length > e.options.maxHighlightLength ? Mt(t.mode, r.state) : null,
                            s = Rt(e, o, r, !0);
                        l && (r.state = l), o.styles = s.styles;
                        var u = o.styleClasses, c = s.classes;
                        c ? o.styleClasses = c : u && (o.styleClasses = null);
                        for (var f = !a || a.length != o.styles.length || u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass), d = 0; !f && d < a.length; ++d) f = a[d] != o.styles[d];
                        f && i.push(r.line), o.stateAfter = r.save(), r.nextLine()
                    } else o.text.length <= e.options.maxHighlightLength && Ft(e, o.text, r), o.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine();
                    if (+new Date > n) return ni(e, e.options.workDelay), !0
                }), t.highlightFrontier = r.line, t.modeFrontier = Math.max(t.modeFrontier, r.line), i.length && Gr(e, function () {
                    for (var t = 0; t < i.length; t++) Jr(e, i[t], "text")
                })
            }
        }

        var ii = function (e, t, n) {
            var r = e.display;
            this.viewport = t, this.visible = xr(r, e.doc, t), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = Ln(e), this.force = n, this.dims = nr(e), this.events = []
        };

        function oi(e, t) {
            var n = e.display, r = e.doc;
            if (t.editorIsHidden) return Zr(e), !1;
            if (!t.force && t.visible.from >= n.viewFrom && t.visible.to <= n.viewTo && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && 0 == ti(e)) return !1;
            kr(e) && (Zr(e), t.dims = nr(e));
            var i = r.first + r.size, o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
                a = Math.min(i, t.visible.to + e.options.viewportMargin);
            n.viewFrom < o && o - n.viewFrom < 20 && (o = Math.max(r.first, n.viewFrom)), n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(i, n.viewTo)), Te && (o = ze(e.doc, o), a = qe(e.doc, a));
            var l = o != n.viewFrom || a != n.viewTo || n.lastWrapHeight != t.wrapperHeight || n.lastWrapWidth != t.wrapperWidth;
            !function (e, t, n) {
                var r = e.display;
                0 == r.view.length || t >= r.viewTo || n <= r.viewFrom ? (r.view = rn(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = rn(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(lr(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat(rn(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, lr(e, n)))), r.viewTo = n
            }(e, o, a), n.viewOffset = Ve(le(e.doc, n.viewFrom)), e.display.mover.style.top = n.viewOffset + "px";
            var u = ti(e);
            if (!l && 0 == u && !t.force && n.renderedView == n.view && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)) return !1;
            var c = function (e) {
                if (e.hasFocus()) return null;
                var t = D();
                if (!t || !E(e.display.lineDiv, t)) return null;
                var n = {activeElt: t};
                if (window.getSelection) {
                    var r = window.getSelection();
                    r.anchorNode && r.extend && E(e.display.lineDiv, r.anchorNode) && (n.anchorNode = r.anchorNode, n.anchorOffset = r.anchorOffset, n.focusNode = r.focusNode, n.focusOffset = r.focusOffset)
                }
                return n
            }(e);
            return u > 4 && (n.lineDiv.style.display = "none"), function (e, t, n) {
                var r = e.display, i = e.options.lineNumbers, o = r.lineDiv, a = o.firstChild;

                function l(t) {
                    var n = t.nextSibling;
                    return s && y && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), n
                }

                for (var u = r.view, c = r.viewFrom, f = 0; f < u.length; f++) {
                    var d = u[f];
                    if (d.hidden) ; else if (d.node && d.node.parentNode == o) {
                        for (; a != d.node;) a = l(a);
                        var h = i && null != t && t <= c && d.lineNumber;
                        d.changes && (_(d.changes, "gutter") > -1 && (h = !1), un(e, d, c, n)), h && (N(d.lineNumber), d.lineNumber.appendChild(document.createTextNode(pe(e.options, c)))), a = d.node.nextSibling
                    } else {
                        var p = mn(e, d, c, n);
                        o.insertBefore(p, a)
                    }
                    c += d.size
                }
                for (; a;) a = l(a)
            }(e, n.updateLineNumbers, t.dims), u > 4 && (n.lineDiv.style.display = ""), n.renderedView = n.view, function (e) {
                if (e && e.activeElt && e.activeElt != D() && (e.activeElt.focus(), e.anchorNode && E(document.body, e.anchorNode) && E(document.body, e.focusNode))) {
                    var t = window.getSelection(), n = document.createRange();
                    n.setEnd(e.anchorNode, e.anchorOffset), n.collapse(!1), t.removeAllRanges(), t.addRange(n), t.extend(e.focusNode, e.focusOffset)
                }
            }(c), N(n.cursorDiv), N(n.selectionDiv), n.gutters.style.height = n.sizer.style.minHeight = 0, l && (n.lastWrapHeight = t.wrapperHeight, n.lastWrapWidth = t.wrapperWidth, ni(e, 400)), n.updateLineNumbers = null, !0
        }

        function ai(e, t) {
            for (var n = t.viewport, r = !0; (r && e.options.lineWrapping && t.oldDisplayWidth != Ln(e) || (n && null != n.top && (n = {top: Math.min(e.doc.height + Cn(e.display) - Nn(e), n.top)}), t.visible = xr(e.display, e.doc, n), !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && oi(e, t); r = !1) {
                yr(e);
                var i = Dr(e);
                sr(e), Rr(e, i), ui(e, i), t.force = !1
            }
            t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo)
        }

        function li(e, t) {
            var n = new ii(e, t);
            if (oi(e, n)) {
                yr(e), ai(e, n);
                var r = Dr(e);
                sr(e), Rr(e, r), ui(e, r), n.finish()
            }
        }

        function si(e) {
            var t = e.display.gutters.offsetWidth;
            e.display.sizer.style.marginLeft = t + "px"
        }

        function ui(e, t) {
            e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + Tn(e) + "px"
        }

        function ci(e) {
            var t = e.display.gutters, n = e.options.gutters;
            N(t);
            for (var r = 0; r < n.length; ++r) {
                var i = n[r], o = t.appendChild(M("div", null, "CodeMirror-gutter " + i));
                "CodeMirror-linenumbers" == i && (e.display.lineGutter = o, o.style.width = (e.display.lineNumWidth || 1) + "px")
            }
            t.style.display = r ? "" : "none", si(e)
        }

        function fi(e) {
            var t = _(e.gutters, "CodeMirror-linenumbers");
            -1 == t && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1))
        }

        ii.prototype.signal = function (e, t) {
            at(e, t) && this.events.push(arguments)
        }, ii.prototype.finish = function () {
            for (var e = 0; e < this.events.length; e++) rt.apply(null, this.events[e])
        };
        var di = 0, hi = null;

        function pi(e) {
            var t = e.wheelDeltaX, n = e.wheelDeltaY;
            return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta), {
                x: t,
                y: n
            }
        }

        function gi(e) {
            var t = pi(e);
            return t.x *= hi, t.y *= hi, t
        }

        function mi(e, t) {
            var r = pi(t), i = r.x, o = r.y, a = e.display, l = a.scroller, u = l.scrollWidth > l.clientWidth,
                c = l.scrollHeight > l.clientHeight;
            if (i && u || o && c) {
                if (o && y && s) e:for (var d = t.target, h = a.view; d != l; d = d.parentNode) for (var p = 0; p < h.length; p++) if (h[p].node == d) {
                    e.display.currentWheelTarget = d;
                    break e
                }
                if (i && !n && !f && null != hi) return o && c && Mr(e, Math.max(0, l.scrollTop + o * hi)), Er(e, Math.max(0, l.scrollLeft + i * hi)), (!o || o && c) && st(t), void (a.wheelStartX = null);
                if (o && null != hi) {
                    var g = o * hi, m = e.doc.scrollTop, v = m + a.wrapper.clientHeight;
                    g < 0 ? m = Math.max(0, m + g - 50) : v = Math.min(e.doc.height, v + g + 50), li(e, {
                        top: m,
                        bottom: v
                    })
                }
                di < 20 && (null == a.wheelStartX ? (a.wheelStartX = l.scrollLeft, a.wheelStartY = l.scrollTop, a.wheelDX = i, a.wheelDY = o, setTimeout(function () {
                    if (null != a.wheelStartX) {
                        var e = l.scrollLeft - a.wheelStartX, t = l.scrollTop - a.wheelStartY,
                            n = t && a.wheelDY && t / a.wheelDY || e && a.wheelDX && e / a.wheelDX;
                        a.wheelStartX = a.wheelStartY = null, n && (hi = (hi * di + n) / (di + 1), ++di)
                    }
                }, 200)) : (a.wheelDX += i, a.wheelDY += o))
            }
        }

        a ? hi = -.53 : n ? hi = 15 : c ? hi = -.7 : d && (hi = -1 / 3);
        var vi = function (e, t) {
            this.ranges = e, this.primIndex = t
        };
        vi.prototype.primary = function () {
            return this.ranges[this.primIndex]
        }, vi.prototype.equals = function (e) {
            if (e == this) return !0;
            if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
            for (var t = 0; t < this.ranges.length; t++) {
                var n = this.ranges[t], r = e.ranges[t];
                if (!ve(n.anchor, r.anchor) || !ve(n.head, r.head)) return !1
            }
            return !0
        }, vi.prototype.deepCopy = function () {
            for (var e = [], t = 0; t < this.ranges.length; t++) e[t] = new yi(ye(this.ranges[t].anchor), ye(this.ranges[t].head));
            return new vi(e, this.primIndex)
        }, vi.prototype.somethingSelected = function () {
            for (var e = 0; e < this.ranges.length; e++) if (!this.ranges[e].empty()) return !0;
            return !1
        }, vi.prototype.contains = function (e, t) {
            t || (t = e);
            for (var n = 0; n < this.ranges.length; n++) {
                var r = this.ranges[n];
                if (me(t, r.from()) >= 0 && me(e, r.to()) <= 0) return n
            }
            return -1
        };
        var yi = function (e, t) {
            this.anchor = e, this.head = t
        };

        function bi(e, t) {
            var n = e[t];
            e.sort(function (e, t) {
                return me(e.from(), t.from())
            }), t = _(e, n);
            for (var r = 1; r < e.length; r++) {
                var i = e[r], o = e[r - 1];
                if (me(o.to(), i.from()) >= 0) {
                    var a = xe(o.from(), i.from()), l = be(o.to(), i.to()),
                        s = o.empty() ? i.from() == i.head : o.from() == o.head;
                    r <= t && --t, e.splice(--r, 2, new yi(s ? l : a, s ? a : l))
                }
            }
            return new vi(e, t)
        }

        function xi(e, t) {
            return new vi([new yi(e, t || e)], 0)
        }

        function wi(e) {
            return e.text ? ge(e.from.line + e.text.length - 1, K(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
        }

        function ki(e, t) {
            if (me(e, t.from) < 0) return e;
            if (me(e, t.to) <= 0) return wi(t);
            var n = e.line + t.text.length - (t.to.line - t.from.line) - 1, r = e.ch;
            return e.line == t.to.line && (r += wi(t).ch - t.to.ch), ge(n, r)
        }

        function Ci(e, t) {
            for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
                var i = e.sel.ranges[r];
                n.push(new yi(ki(i.anchor, t), ki(i.head, t)))
            }
            return bi(n, e.sel.primIndex)
        }

        function Si(e, t, n) {
            return e.line == t.line ? ge(n.line, e.ch - t.ch + n.ch) : ge(n.line + (e.line - t.line), e.ch)
        }

        function Ti(e) {
            e.doc.mode = Lt(e.options, e.doc.modeOption), Li(e)
        }

        function Li(e) {
            e.doc.iter(function (e) {
                e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
            }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, ni(e, 100), e.state.modeGen++, e.curOp && Qr(e)
        }

        function Ni(e, t) {
            return 0 == t.from.ch && 0 == t.to.ch && "" == K(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
        }

        function Ai(e, t, n, r) {
            function i(e) {
                return n ? n[e] : null
            }

            function o(e, n, i) {
                !function (e, t, n, r) {
                    e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), Ee(e), De(e, n);
                    var i = r ? r(e) : 1;
                    i != e.height && ce(e, i)
                }(e, n, i, r), ln(e, "change", e, t)
            }

            function a(e, t) {
                for (var n = [], o = e; o < t; ++o) n.push(new Ut(u[o], i(o), r));
                return n
            }

            var l = t.from, s = t.to, u = t.text, c = le(e, l.line), f = le(e, s.line), d = K(u), h = i(u.length - 1),
                p = s.line - l.line;
            if (t.full) e.insert(0, a(0, u.length)), e.remove(u.length, e.size - u.length); else if (Ni(e, t)) {
                var g = a(0, u.length - 1);
                o(f, f.text, h), p && e.remove(l.line, p), g.length && e.insert(l.line, g)
            } else if (c == f) if (1 == u.length) o(c, c.text.slice(0, l.ch) + d + c.text.slice(s.ch), h); else {
                var m = a(1, u.length - 1);
                m.push(new Ut(d + c.text.slice(s.ch), h, r)), o(c, c.text.slice(0, l.ch) + u[0], i(0)), e.insert(l.line + 1, m)
            } else if (1 == u.length) o(c, c.text.slice(0, l.ch) + u[0] + f.text.slice(s.ch), i(0)), e.remove(l.line + 1, p); else {
                o(c, c.text.slice(0, l.ch) + u[0], i(0)), o(f, d + f.text.slice(s.ch), h);
                var v = a(1, u.length - 1);
                p > 1 && e.remove(l.line + 1, p - 1), e.insert(l.line + 1, v)
            }
            ln(e, "change", e, t)
        }

        function Mi(e, t, n) {
            !function e(r, i, o) {
                if (r.linked) for (var a = 0; a < r.linked.length; ++a) {
                    var l = r.linked[a];
                    if (l.doc != i) {
                        var s = o && l.sharedHist;
                        n && !s || (t(l.doc, s), e(l.doc, r, s))
                    }
                }
            }(e, null, !0)
        }

        function Oi(e, t) {
            if (t.cm) throw new Error("This document is already in use.");
            e.doc = t, t.cm = e, or(e), Ti(e), Ei(e), e.options.lineWrapping || Xe(e), e.options.mode = t.modeOption, Qr(e)
        }

        function Ei(e) {
            ("rtl" == e.doc.direction ? P : L)(e.display.lineDiv, "CodeMirror-rtl")
        }

        function Di(e) {
            this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1
        }

        function Pi(e, t) {
            var n = {from: ye(t.from), to: wi(t), text: se(e, t.from, t.to)};
            return Fi(e, n, t.from.line, t.to.line + 1), Mi(e, function (e) {
                return Fi(e, n, t.from.line, t.to.line + 1)
            }, !0), n
        }

        function Hi(e) {
            for (; e.length;) {
                if (!K(e).ranges) break;
                e.pop()
            }
        }

        function Ri(e, t, n, r) {
            var i = e.history;
            i.undone.length = 0;
            var o, a, l = +new Date;
            if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && i.lastModTime > l - (e.cm ? e.cm.options.historyEventDelay : 500) || "*" == t.origin.charAt(0))) && (o = function (e, t) {
                return t ? (Hi(e.done), K(e.done)) : e.done.length && !K(e.done).ranges ? K(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), K(e.done)) : void 0
            }(i, i.lastOp == r))) a = K(o.changes), 0 == me(t.from, t.to) && 0 == me(t.from, a.to) ? a.to = wi(t) : o.changes.push(Pi(e, t)); else {
                var s = K(i.done);
                for (s && s.ranges || Wi(e.sel, i.done), o = {
                    changes: [Pi(e, t)],
                    generation: i.generation
                }, i.done.push(o); i.done.length > i.undoDepth;) i.done.shift(), i.done[0].ranges || i.done.shift()
            }
            i.done.push(n), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = l, i.lastOp = i.lastSelOp = r, i.lastOrigin = i.lastSelOrigin = t.origin, a || rt(e, "historyAdded")
        }

        function Ii(e, t, n, r) {
            var i = e.history, o = r && r.origin;
            n == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || function (e, t, n, r) {
                var i = t.charAt(0);
                return "*" == i || "+" == i && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
            }(e, o, K(i.done), t)) ? i.done[i.done.length - 1] = t : Wi(t, i.done), i.lastSelTime = +new Date, i.lastSelOrigin = o, i.lastSelOp = n, r && !1 !== r.clearRedo && Hi(i.undone)
        }

        function Wi(e, t) {
            var n = K(t);
            n && n.ranges && n.equals(e) || t.push(e)
        }

        function Fi(e, t, n, r) {
            var i = t["spans_" + e.id], o = 0;
            e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function (n) {
                n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans), ++o
            })
        }

        function ji(e) {
            if (!e) return null;
            for (var t, n = 0; n < e.length; ++n) e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
            return t ? t.length ? t : null : e
        }

        function _i(e, t) {
            var n = function (e, t) {
                var n = t["spans_" + e.id];
                if (!n) return null;
                for (var r = [], i = 0; i < t.text.length; ++i) r.push(ji(n[i]));
                return r
            }(e, t), r = Me(e, t);
            if (!n) return r;
            if (!r) return n;
            for (var i = 0; i < n.length; ++i) {
                var o = n[i], a = r[i];
                if (o && a) e:for (var l = 0; l < a.length; ++l) {
                    for (var s = a[l], u = 0; u < o.length; ++u) if (o[u].marker == s.marker) continue e;
                    o.push(s)
                } else a && (n[i] = a)
            }
            return n
        }

        function Bi(e, t, n) {
            for (var r = [], i = 0; i < e.length; ++i) {
                var o = e[i];
                if (o.ranges) r.push(n ? vi.prototype.deepCopy.call(o) : o); else {
                    var a = o.changes, l = [];
                    r.push({changes: l});
                    for (var s = 0; s < a.length; ++s) {
                        var u = a[s], c = void 0;
                        if (l.push({
                            from: u.from,
                            to: u.to,
                            text: u.text
                        }), t) for (var f in u) (c = f.match(/^spans_(\d+)$/)) && _(t, Number(c[1])) > -1 && (K(l)[f] = u[f], delete u[f])
                    }
                }
            }
            return r
        }

        function zi(e, t, n, r) {
            if (r) {
                var i = e.anchor;
                if (n) {
                    var o = me(t, i) < 0;
                    o != me(n, i) < 0 ? (i = t, t = n) : o != me(t, n) < 0 && (t = n)
                }
                return new yi(i, t)
            }
            return new yi(n || t, t)
        }

        function qi(e, t, n, r, i) {
            null == i && (i = e.cm && (e.cm.display.shift || e.extend)), Xi(e, new vi([zi(e.sel.primary(), t, n, i)], 0), r)
        }

        function $i(e, t, n) {
            for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++) r[o] = zi(e.sel.ranges[o], t[o], null, i);
            Xi(e, bi(r, e.sel.primIndex), n)
        }

        function Ui(e, t, n, r) {
            var i = e.sel.ranges.slice(0);
            i[t] = n, Xi(e, bi(i, e.sel.primIndex), r)
        }

        function Vi(e, t, n, r) {
            Xi(e, xi(t, n), r)
        }

        function Gi(e, t, n) {
            var r = e.history.done, i = K(r);
            i && i.ranges ? (r[r.length - 1] = t, Ki(e, t, n)) : Xi(e, t, n)
        }

        function Xi(e, t, n) {
            Ki(e, t, n), Ii(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n)
        }

        function Ki(e, t, n) {
            (at(e, "beforeSelectionChange") || e.cm && at(e.cm, "beforeSelectionChange")) && (t = function (e, t, n) {
                var r = {
                    ranges: t.ranges, update: function (t) {
                        this.ranges = [];
                        for (var n = 0; n < t.length; n++) this.ranges[n] = new yi(ke(e, t[n].anchor), ke(e, t[n].head))
                    }, origin: n && n.origin
                };
                return rt(e, "beforeSelectionChange", e, r), e.cm && rt(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != t.ranges ? bi(r.ranges, r.ranges.length - 1) : t
            }(e, t, n)), Yi(e, Ji(e, t, n && n.bias || (me(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1), !0)), n && !1 === n.scroll || !e.cm || Tr(e.cm)
        }

        function Yi(e, t) {
            t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, ot(e.cm)), ln(e, "cursorActivity", e))
        }

        function Qi(e) {
            Yi(e, Ji(e, e.sel, null, !1))
        }

        function Ji(e, t, n, r) {
            for (var i, o = 0; o < t.ranges.length; o++) {
                var a = t.ranges[o], l = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                    s = eo(e, a.anchor, l && l.anchor, n, r), u = eo(e, a.head, l && l.head, n, r);
                (i || s != a.anchor || u != a.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new yi(s, u))
            }
            return i ? bi(i, t.primIndex) : t
        }

        function Zi(e, t, n, r, i) {
            var o = le(e, t.line);
            if (o.markedSpans) for (var a = 0; a < o.markedSpans.length; ++a) {
                var l = o.markedSpans[a], s = l.marker;
                if ((null == l.from || (s.inclusiveLeft ? l.from <= t.ch : l.from < t.ch)) && (null == l.to || (s.inclusiveRight ? l.to >= t.ch : l.to > t.ch))) {
                    if (i && (rt(s, "beforeCursorEnter"), s.explicitlyCleared)) {
                        if (o.markedSpans) {
                            --a;
                            continue
                        }
                        break
                    }
                    if (!s.atomic) continue;
                    if (n) {
                        var u = s.find(r < 0 ? 1 : -1), c = void 0;
                        if ((r < 0 ? s.inclusiveRight : s.inclusiveLeft) && (u = to(e, u, -r, u && u.line == t.line ? o : null)), u && u.line == t.line && (c = me(u, n)) && (r < 0 ? c < 0 : c > 0)) return Zi(e, u, t, r, i)
                    }
                    var f = s.find(r < 0 ? -1 : 1);
                    return (r < 0 ? s.inclusiveLeft : s.inclusiveRight) && (f = to(e, f, r, f.line == t.line ? o : null)), f ? Zi(e, f, t, r, i) : null
                }
            }
            return t
        }

        function eo(e, t, n, r, i) {
            var o = r || 1,
                a = Zi(e, t, n, o, i) || !i && Zi(e, t, n, o, !0) || Zi(e, t, n, -o, i) || !i && Zi(e, t, n, -o, !0);
            return a || (e.cantEdit = !0, ge(e.first, 0))
        }

        function to(e, t, n, r) {
            return n < 0 && 0 == t.ch ? t.line > e.first ? ke(e, ge(t.line - 1)) : null : n > 0 && t.ch == (r || le(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? ge(t.line + 1, 0) : null : new ge(t.line, t.ch + n)
        }

        function no(e) {
            e.setSelection(ge(e.firstLine(), 0), ge(e.lastLine()), q)
        }

        function ro(e, t, n) {
            var r = {
                canceled: !1, from: t.from, to: t.to, text: t.text, origin: t.origin, cancel: function () {
                    return r.canceled = !0
                }
            };
            return n && (r.update = function (t, n, i, o) {
                t && (r.from = ke(e, t)), n && (r.to = ke(e, n)), i && (r.text = i), void 0 !== o && (r.origin = o)
            }), rt(e, "beforeChange", e, r), e.cm && rt(e.cm, "beforeChange", e.cm, r), r.canceled ? null : {
                from: r.from,
                to: r.to,
                text: r.text,
                origin: r.origin
            }
        }

        function io(e, t, n) {
            if (e.cm) {
                if (!e.cm.curOp) return Xr(e.cm, io)(e, t, n);
                if (e.cm.state.suppressEdits) return
            }
            if (!(at(e, "beforeChange") || e.cm && at(e.cm, "beforeChange")) || (t = ro(e, t, !0))) {
                var r = Se && !n && function (e, t, n) {
                    var r = null;
                    if (e.iter(t.line, n.line + 1, function (e) {
                        if (e.markedSpans) for (var t = 0; t < e.markedSpans.length; ++t) {
                            var n = e.markedSpans[t].marker;
                            !n.readOnly || r && -1 != _(r, n) || (r || (r = [])).push(n)
                        }
                    }), !r) return null;
                    for (var i = [{
                        from: t,
                        to: n
                    }], o = 0; o < r.length; ++o) for (var a = r[o], l = a.find(0), s = 0; s < i.length; ++s) {
                        var u = i[s];
                        if (!(me(u.to, l.from) < 0 || me(u.from, l.to) > 0)) {
                            var c = [s, 1], f = me(u.from, l.from), d = me(u.to, l.to);
                            (f < 0 || !a.inclusiveLeft && !f) && c.push({
                                from: u.from,
                                to: l.from
                            }), (d > 0 || !a.inclusiveRight && !d) && c.push({
                                from: l.to,
                                to: u.to
                            }), i.splice.apply(i, c), s += c.length - 3
                        }
                    }
                    return i
                }(e, t.from, t.to);
                if (r) for (var i = r.length - 1; i >= 0; --i) oo(e, {
                    from: r[i].from,
                    to: r[i].to,
                    text: i ? [""] : t.text,
                    origin: t.origin
                }); else oo(e, t)
            }
        }

        function oo(e, t) {
            if (1 != t.text.length || "" != t.text[0] || 0 != me(t.from, t.to)) {
                var n = Ci(e, t);
                Ri(e, t, n, e.cm ? e.cm.curOp.id : NaN), so(e, t, n, Me(e, t));
                var r = [];
                Mi(e, function (e, n) {
                    n || -1 != _(r, e.history) || (ho(e.history, t), r.push(e.history)), so(e, t, null, Me(e, t))
                })
            }
        }

        function ao(e, t, n) {
            var r = e.cm && e.cm.state.suppressEdits;
            if (!r || n) {
                for (var i, o = e.history, a = e.sel, l = "undo" == t ? o.done : o.undone, s = "undo" == t ? o.undone : o.done, u = 0; u < l.length && (i = l[u], n ? !i.ranges || i.equals(e.sel) : i.ranges); u++) ;
                if (u != l.length) {
                    for (o.lastOrigin = o.lastSelOrigin = null; ;) {
                        if (!(i = l.pop()).ranges) {
                            if (r) return void l.push(i);
                            break
                        }
                        if (Wi(i, s), n && !i.equals(e.sel)) return void Xi(e, i, {clearRedo: !1});
                        a = i
                    }
                    var c = [];
                    Wi(a, s), s.push({
                        changes: c,
                        generation: o.generation
                    }), o.generation = i.generation || ++o.maxGeneration;
                    for (var f = at(e, "beforeChange") || e.cm && at(e.cm, "beforeChange"), d = function (n) {
                        var r = i.changes[n];
                        if (r.origin = t, f && !ro(e, r, !1)) return l.length = 0, {};
                        c.push(Pi(e, r));
                        var o = n ? Ci(e, r) : K(l);
                        so(e, r, o, _i(e, r)), !n && e.cm && e.cm.scrollIntoView({from: r.from, to: wi(r)});
                        var a = [];
                        Mi(e, function (e, t) {
                            t || -1 != _(a, e.history) || (ho(e.history, r), a.push(e.history)), so(e, r, null, _i(e, r))
                        })
                    }, h = i.changes.length - 1; h >= 0; --h) {
                        var p = d(h);
                        if (p) return p.v
                    }
                }
            }
        }

        function lo(e, t) {
            if (0 != t && (e.first += t, e.sel = new vi(Y(e.sel.ranges, function (e) {
                return new yi(ge(e.anchor.line + t, e.anchor.ch), ge(e.head.line + t, e.head.ch))
            }), e.sel.primIndex), e.cm)) {
                Qr(e.cm, e.first, e.first - t, t);
                for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) Jr(e.cm, r, "gutter")
            }
        }

        function so(e, t, n, r) {
            if (e.cm && !e.cm.curOp) return Xr(e.cm, so)(e, t, n, r);
            if (t.to.line < e.first) lo(e, t.text.length - 1 - (t.to.line - t.from.line)); else if (!(t.from.line > e.lastLine())) {
                if (t.from.line < e.first) {
                    var i = t.text.length - 1 - (e.first - t.from.line);
                    lo(e, i), t = {
                        from: ge(e.first, 0),
                        to: ge(t.to.line + i, t.to.ch),
                        text: [K(t.text)],
                        origin: t.origin
                    }
                }
                var o = e.lastLine();
                t.to.line > o && (t = {
                    from: t.from,
                    to: ge(o, le(e, o).text.length),
                    text: [t.text[0]],
                    origin: t.origin
                }), t.removed = se(e, t.from, t.to), n || (n = Ci(e, t)), e.cm ? function (e, t, n) {
                    var r = e.doc, i = e.display, o = t.from, a = t.to, l = !1, s = o.line;
                    e.options.lineWrapping || (s = fe(Be(le(r, o.line))), r.iter(s, a.line + 1, function (e) {
                        if (e == i.maxLine) return l = !0, !0
                    }));
                    r.sel.contains(t.from, t.to) > -1 && ot(e);
                    Ai(r, t, n, ir(e)), e.options.lineWrapping || (r.iter(s, o.line + t.text.length, function (e) {
                        var t = Ge(e);
                        t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, l = !1)
                    }), l && (e.curOp.updateMaxLine = !0));
                    (function (e, t) {
                        if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
                            for (var n = e.first, r = t - 1; r > n; r--) {
                                var i = le(e, r).stateAfter;
                                if (i && (!(i instanceof Pt) || r + i.lookAhead < t)) {
                                    n = r + 1;
                                    break
                                }
                            }
                            e.highlightFrontier = Math.min(e.highlightFrontier, n)
                        }
                    })(r, o.line), ni(e, 400);
                    var u = t.text.length - (a.line - o.line) - 1;
                    t.full ? Qr(e) : o.line != a.line || 1 != t.text.length || Ni(e.doc, t) ? Qr(e, o.line, a.line + 1, u) : Jr(e, o.line, "text");
                    var c = at(e, "changes"), f = at(e, "change");
                    if (f || c) {
                        var d = {from: o, to: a, text: t.text, removed: t.removed, origin: t.origin};
                        f && ln(e, "change", e, d), c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(d)
                    }
                    e.display.selForContextMenu = null
                }(e.cm, t, r) : Ai(e, t, r), Ki(e, n, q)
            }
        }

        function uo(e, t, n, r, i) {
            var o;
            (r || (r = n), me(r, n) < 0) && (n = (o = [r, n])[0], r = o[1]);
            "string" == typeof t && (t = e.splitLines(t)), io(e, {from: n, to: r, text: t, origin: i})
        }

        function co(e, t, n, r) {
            n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0)
        }

        function fo(e, t, n, r) {
            for (var i = 0; i < e.length; ++i) {
                var o = e[i], a = !0;
                if (o.ranges) {
                    o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
                    for (var l = 0; l < o.ranges.length; l++) co(o.ranges[l].anchor, t, n, r), co(o.ranges[l].head, t, n, r)
                } else {
                    for (var s = 0; s < o.changes.length; ++s) {
                        var u = o.changes[s];
                        if (n < u.from.line) u.from = ge(u.from.line + r, u.from.ch), u.to = ge(u.to.line + r, u.to.ch); else if (t <= u.to.line) {
                            a = !1;
                            break
                        }
                    }
                    a || (e.splice(0, i + 1), i = 0)
                }
            }
        }

        function ho(e, t) {
            var n = t.from.line, r = t.to.line, i = t.text.length - (r - n) - 1;
            fo(e.done, n, r, i), fo(e.undone, n, r, i)
        }

        function po(e, t, n, r) {
            var i = t, o = t;
            return "number" == typeof t ? o = le(e, we(e, t)) : i = fe(t), null == i ? null : (r(o, i) && e.cm && Jr(e.cm, i, n), o)
        }

        function go(e) {
            this.lines = e, this.parent = null;
            for (var t = 0, n = 0; n < e.length; ++n) e[n].parent = this, t += e[n].height;
            this.height = t
        }

        function mo(e) {
            this.children = e;
            for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
                var i = e[r];
                t += i.chunkSize(), n += i.height, i.parent = this
            }
            this.size = t, this.height = n, this.parent = null
        }

        yi.prototype.from = function () {
            return xe(this.anchor, this.head)
        }, yi.prototype.to = function () {
            return be(this.anchor, this.head)
        }, yi.prototype.empty = function () {
            return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
        }, go.prototype = {
            chunkSize: function () {
                return this.lines.length
            }, removeInner: function (e, t) {
                for (var n = e, r = e + t; n < r; ++n) {
                    var i = this.lines[n];
                    this.height -= i.height, Vt(i), ln(i, "delete")
                }
                this.lines.splice(e, t)
            }, collapse: function (e) {
                e.push.apply(e, this.lines)
            }, insertInner: function (e, t, n) {
                this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
                for (var r = 0; r < t.length; ++r) t[r].parent = this
            }, iterN: function (e, t, n) {
                for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0
            }
        }, mo.prototype = {
            chunkSize: function () {
                return this.size
            }, removeInner: function (e, t) {
                this.size -= t;
                for (var n = 0; n < this.children.length; ++n) {
                    var r = this.children[n], i = r.chunkSize();
                    if (e < i) {
                        var o = Math.min(t, i - e), a = r.height;
                        if (r.removeInner(e, o), this.height -= a - r.height, i == o && (this.children.splice(n--, 1), r.parent = null), 0 == (t -= o)) break;
                        e = 0
                    } else e -= i
                }
                if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof go))) {
                    var l = [];
                    this.collapse(l), this.children = [new go(l)], this.children[0].parent = this
                }
            }, collapse: function (e) {
                for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e)
            }, insertInner: function (e, t, n) {
                this.size += t.length, this.height += n;
                for (var r = 0; r < this.children.length; ++r) {
                    var i = this.children[r], o = i.chunkSize();
                    if (e <= o) {
                        if (i.insertInner(e, t, n), i.lines && i.lines.length > 50) {
                            for (var a = i.lines.length % 25 + 25, l = a; l < i.lines.length;) {
                                var s = new go(i.lines.slice(l, l += 25));
                                i.height -= s.height, this.children.splice(++r, 0, s), s.parent = this
                            }
                            i.lines = i.lines.slice(0, a), this.maybeSpill()
                        }
                        break
                    }
                    e -= o
                }
            }, maybeSpill: function () {
                if (!(this.children.length <= 10)) {
                    var e = this;
                    do {
                        var t = new mo(e.children.splice(e.children.length - 5, 5));
                        if (e.parent) {
                            e.size -= t.size, e.height -= t.height;
                            var n = _(e.parent.children, e);
                            e.parent.children.splice(n + 1, 0, t)
                        } else {
                            var r = new mo(e.children);
                            r.parent = e, e.children = [r, t], e = r
                        }
                        t.parent = e.parent
                    } while (e.children.length > 10);
                    e.parent.maybeSpill()
                }
            }, iterN: function (e, t, n) {
                for (var r = 0; r < this.children.length; ++r) {
                    var i = this.children[r], o = i.chunkSize();
                    if (e < o) {
                        var a = Math.min(t, o - e);
                        if (i.iterN(e, a, n)) return !0;
                        if (0 == (t -= a)) break;
                        e = 0
                    } else e -= o
                }
            }
        };
        var vo = function (e, t, n) {
            if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
            this.doc = e, this.node = t
        };

        function yo(e, t, n) {
            Ve(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Sr(e, n)
        }

        vo.prototype.clear = function () {
            var e = this.doc.cm, t = this.line.widgets, n = this.line, r = fe(n);
            if (null != r && t) {
                for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
                t.length || (n.widgets = null);
                var o = xn(this);
                ce(n, Math.max(0, n.height - o)), e && (Gr(e, function () {
                    yo(e, n, -o), Jr(e, r, "widget")
                }), ln(e, "lineWidgetCleared", e, this, r))
            }
        }, vo.prototype.changed = function () {
            var e = this, t = this.height, n = this.doc.cm, r = this.line;
            this.height = null;
            var i = xn(this) - t;
            i && ($e(this.doc, r) || ce(r, r.height + i), n && Gr(n, function () {
                n.curOp.forceUpdate = !0, yo(n, r, i), ln(n, "lineWidgetChanged", n, e, fe(r))
            }))
        }, lt(vo);
        var bo = 0, xo = function (e, t) {
            this.lines = [], this.type = t, this.doc = e, this.id = ++bo
        };

        function wo(e, t, n, r, i) {
            if (r && r.shared) return function (e, t, n, r, i) {
                (r = W(r)).shared = !1;
                var o = [wo(e, t, n, r, i)], a = o[0], l = r.widgetNode;
                return Mi(e, function (e) {
                    l && (r.widgetNode = l.cloneNode(!0)), o.push(wo(e, ke(e, t), ke(e, n), r, i));
                    for (var s = 0; s < e.linked.length; ++s) if (e.linked[s].isParent) return;
                    a = K(o)
                }), new ko(o, a)
            }(e, t, n, r, i);
            if (e.cm && !e.cm.curOp) return Xr(e.cm, wo)(e, t, n, r, i);
            var o = new xo(e, i), a = me(t, n);
            if (r && W(r, o, !1), a > 0 || 0 == a && !1 !== o.clearWhenEmpty) return o;
            if (o.replacedWith && (o.collapsed = !0, o.widgetNode = O("span", [o.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
                if (_e(e, t.line, t, n, o) || t.line != n.line && _e(e, n.line, t, n, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
                Te = !0
            }
            o.addToHistory && Ri(e, {from: t, to: n, origin: "markText"}, e.sel, NaN);
            var l, s = t.line, u = e.cm;
            if (e.iter(s, n.line + 1, function (e) {
                u && o.collapsed && !u.options.lineWrapping && Be(e) == u.display.maxLine && (l = !0), o.collapsed && s != t.line && ce(e, 0), function (e, t) {
                    e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], t.marker.attachLine(e)
                }(e, new Le(o, s == t.line ? t.ch : null, s == n.line ? n.ch : null)), ++s
            }), o.collapsed && e.iter(t.line, n.line + 1, function (t) {
                $e(e, t) && ce(t, 0)
            }), o.clearOnEnter && et(o, "beforeCursorEnter", function () {
                return o.clear()
            }), o.readOnly && (Se = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed && (o.id = ++bo, o.atomic = !0), u) {
                if (l && (u.curOp.updateMaxLine = !0), o.collapsed) Qr(u, t.line, n.line + 1); else if (o.className || o.title || o.startStyle || o.endStyle || o.css) for (var c = t.line; c <= n.line; c++) Jr(u, c, "text");
                o.atomic && Qi(u.doc), ln(u, "markerAdded", u, o)
            }
            return o
        }

        xo.prototype.clear = function () {
            if (!this.explicitlyCleared) {
                var e = this.doc.cm, t = e && !e.curOp;
                if (t && _r(e), at(this, "clear")) {
                    var n = this.find();
                    n && ln(this, "clear", n.from, n.to)
                }
                for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
                    var a = this.lines[o], l = Ne(a.markedSpans, this);
                    e && !this.collapsed ? Jr(e, fe(a), "text") : e && (null != l.to && (i = fe(a)), null != l.from && (r = fe(a))), a.markedSpans = Ae(a.markedSpans, l), null == l.from && this.collapsed && !$e(this.doc, a) && e && ce(a, er(e.display))
                }
                if (e && this.collapsed && !e.options.lineWrapping) for (var s = 0; s < this.lines.length; ++s) {
                    var u = Be(this.lines[s]), c = Ge(u);
                    c > e.display.maxLineLength && (e.display.maxLine = u, e.display.maxLineLength = c, e.display.maxLineChanged = !0)
                }
                null != r && e && this.collapsed && Qr(e, r, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && Qi(e.doc)), e && ln(e, "markerCleared", e, this, r, i), t && Br(e), this.parent && this.parent.clear()
            }
        }, xo.prototype.find = function (e, t) {
            var n, r;
            null == e && "bookmark" == this.type && (e = 1);
            for (var i = 0; i < this.lines.length; ++i) {
                var o = this.lines[i], a = Ne(o.markedSpans, this);
                if (null != a.from && (n = ge(t ? o : fe(o), a.from), -1 == e)) return n;
                if (null != a.to && (r = ge(t ? o : fe(o), a.to), 1 == e)) return r
            }
            return n && {from: n, to: r}
        }, xo.prototype.changed = function () {
            var e = this, t = this.find(-1, !0), n = this, r = this.doc.cm;
            t && r && Gr(r, function () {
                var i = t.line, o = fe(t.line), a = On(r, o);
                if (a && (Wn(a), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !$e(n.doc, i) && null != n.height) {
                    var l = n.height;
                    n.height = null;
                    var s = xn(n) - l;
                    s && ce(i, i.height + s)
                }
                ln(r, "markerChanged", r, e)
            })
        }, xo.prototype.attachLine = function (e) {
            if (!this.lines.length && this.doc.cm) {
                var t = this.doc.cm.curOp;
                t.maybeHiddenMarkers && -1 != _(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
            }
            this.lines.push(e)
        }, xo.prototype.detachLine = function (e) {
            if (this.lines.splice(_(this.lines, e), 1), !this.lines.length && this.doc.cm) {
                var t = this.doc.cm.curOp;
                (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
            }
        }, lt(xo);
        var ko = function (e, t) {
            this.markers = e, this.primary = t;
            for (var n = 0; n < e.length; ++n) e[n].parent = this
        };

        function Co(e) {
            return e.findMarks(ge(e.first, 0), e.clipPos(ge(e.lastLine())), function (e) {
                return e.parent
            })
        }

        function So(e) {
            for (var t = function (t) {
                var n = e[t], r = [n.primary.doc];
                Mi(n.primary.doc, function (e) {
                    return r.push(e)
                });
                for (var i = 0; i < n.markers.length; i++) {
                    var o = n.markers[i];
                    -1 == _(r, o.doc) && (o.parent = null, n.markers.splice(i--, 1))
                }
            }, n = 0; n < e.length; n++) t(n)
        }

        ko.prototype.clear = function () {
            if (!this.explicitlyCleared) {
                this.explicitlyCleared = !0;
                for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
                ln(this, "clear")
            }
        }, ko.prototype.find = function (e, t) {
            return this.primary.find(e, t)
        }, lt(ko);
        var To = 0, Lo = function (e, t, n, r, i) {
            if (!(this instanceof Lo)) return new Lo(e, t, n, r, i);
            null == n && (n = 0), mo.call(this, [new go([new Ut("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = n;
            var o = ge(n, 0);
            this.sel = xi(o), this.history = new Di(null), this.id = ++To, this.modeOption = t, this.lineSep = r, this.direction = "rtl" == i ? "rtl" : "ltr", this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), Ai(this, {
                from: o,
                to: o,
                text: e
            }), Xi(this, xi(o), q)
        };
        Lo.prototype = J(mo.prototype, {
            constructor: Lo, iter: function (e, t, n) {
                n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e)
            }, insert: function (e, t) {
                for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
                this.insertInner(e - this.first, t, n)
            }, remove: function (e, t) {
                this.removeInner(e - this.first, t)
            }, getValue: function (e) {
                var t = ue(this, this.first, this.first + this.size);
                return !1 === e ? t : t.join(e || this.lineSeparator())
            }, setValue: Yr(function (e) {
                var t = ge(this.first, 0), n = this.first + this.size - 1;
                io(this, {
                    from: t,
                    to: ge(n, le(this, n).text.length),
                    text: this.splitLines(e),
                    origin: "setValue",
                    full: !0
                }, !0), this.cm && Lr(this.cm, 0, 0), Xi(this, xi(t), q)
            }), replaceRange: function (e, t, n, r) {
                uo(this, e, t = ke(this, t), n = n ? ke(this, n) : t, r)
            }, getRange: function (e, t, n) {
                var r = se(this, ke(this, e), ke(this, t));
                return !1 === n ? r : r.join(n || this.lineSeparator())
            }, getLine: function (e) {
                var t = this.getLineHandle(e);
                return t && t.text
            }, getLineHandle: function (e) {
                if (he(this, e)) return le(this, e)
            }, getLineNumber: function (e) {
                return fe(e)
            }, getLineHandleVisualStart: function (e) {
                return "number" == typeof e && (e = le(this, e)), Be(e)
            }, lineCount: function () {
                return this.size
            }, firstLine: function () {
                return this.first
            }, lastLine: function () {
                return this.first + this.size - 1
            }, clipPos: function (e) {
                return ke(this, e)
            }, getCursor: function (e) {
                var t = this.sel.primary();
                return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from()
            }, listSelections: function () {
                return this.sel.ranges
            }, somethingSelected: function () {
                return this.sel.somethingSelected()
            }, setCursor: Yr(function (e, t, n) {
                Vi(this, ke(this, "number" == typeof e ? ge(e, t || 0) : e), null, n)
            }), setSelection: Yr(function (e, t, n) {
                Vi(this, ke(this, e), ke(this, t || e), n)
            }), extendSelection: Yr(function (e, t, n) {
                qi(this, ke(this, e), t && ke(this, t), n)
            }), extendSelections: Yr(function (e, t) {
                $i(this, Ce(this, e), t)
            }), extendSelectionsBy: Yr(function (e, t) {
                $i(this, Ce(this, Y(this.sel.ranges, e)), t)
            }), setSelections: Yr(function (e, t, n) {
                if (e.length) {
                    for (var r = [], i = 0; i < e.length; i++) r[i] = new yi(ke(this, e[i].anchor), ke(this, e[i].head));
                    null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Xi(this, bi(r, t), n)
                }
            }), addSelection: Yr(function (e, t, n) {
                var r = this.sel.ranges.slice(0);
                r.push(new yi(ke(this, e), ke(this, t || e))), Xi(this, bi(r, r.length - 1), n)
            }), getSelection: function (e) {
                for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
                    var i = se(this, n[r].from(), n[r].to());
                    t = t ? t.concat(i) : i
                }
                return !1 === e ? t : t.join(e || this.lineSeparator())
            }, getSelections: function (e) {
                for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
                    var i = se(this, n[r].from(), n[r].to());
                    !1 !== e && (i = i.join(e || this.lineSeparator())), t[r] = i
                }
                return t
            }, replaceSelection: function (e, t, n) {
                for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
                this.replaceSelections(r, t, n || "+input")
            }, replaceSelections: Yr(function (e, t, n) {
                for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
                    var a = i.ranges[o];
                    r[o] = {from: a.from(), to: a.to(), text: this.splitLines(e[o]), origin: n}
                }
                for (var l = t && "end" != t && function (e, t, n) {
                    for (var r = [], i = ge(e.first, 0), o = i, a = 0; a < t.length; a++) {
                        var l = t[a], s = Si(l.from, i, o), u = Si(wi(l), i, o);
                        if (i = l.to, o = u, "around" == n) {
                            var c = e.sel.ranges[a], f = me(c.head, c.anchor) < 0;
                            r[a] = new yi(f ? u : s, f ? s : u)
                        } else r[a] = new yi(s, s)
                    }
                    return new vi(r, e.sel.primIndex)
                }(this, r, t), s = r.length - 1; s >= 0; s--) io(this, r[s]);
                l ? Gi(this, l) : this.cm && Tr(this.cm)
            }), undo: Yr(function () {
                ao(this, "undo")
            }), redo: Yr(function () {
                ao(this, "redo")
            }), undoSelection: Yr(function () {
                ao(this, "undo", !0)
            }), redoSelection: Yr(function () {
                ao(this, "redo", !0)
            }), setExtending: function (e) {
                this.extend = e
            }, getExtending: function () {
                return this.extend
            }, historySize: function () {
                for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) e.done[r].ranges || ++t;
                for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
                return {undo: t, redo: n}
            }, clearHistory: function () {
                this.history = new Di(this.history.maxGeneration)
            }, markClean: function () {
                this.cleanGeneration = this.changeGeneration(!0)
            }, changeGeneration: function (e) {
                return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
            }, isClean: function (e) {
                return this.history.generation == (e || this.cleanGeneration)
            }, getHistory: function () {
                return {done: Bi(this.history.done), undone: Bi(this.history.undone)}
            }, setHistory: function (e) {
                var t = this.history = new Di(this.history.maxGeneration);
                t.done = Bi(e.done.slice(0), null, !0), t.undone = Bi(e.undone.slice(0), null, !0)
            }, setGutterMarker: Yr(function (e, t, n) {
                return po(this, e, "gutter", function (e) {
                    var r = e.gutterMarkers || (e.gutterMarkers = {});
                    return r[t] = n, !n && ne(r) && (e.gutterMarkers = null), !0
                })
            }), clearGutter: Yr(function (e) {
                var t = this;
                this.iter(function (n) {
                    n.gutterMarkers && n.gutterMarkers[e] && po(t, n, "gutter", function () {
                        return n.gutterMarkers[e] = null, ne(n.gutterMarkers) && (n.gutterMarkers = null), !0
                    })
                })
            }), lineInfo: function (e) {
                var t;
                if ("number" == typeof e) {
                    if (!he(this, e)) return null;
                    if (t = e, !(e = le(this, e))) return null
                } else if (null == (t = fe(e))) return null;
                return {
                    line: t,
                    handle: e,
                    text: e.text,
                    gutterMarkers: e.gutterMarkers,
                    textClass: e.textClass,
                    bgClass: e.bgClass,
                    wrapClass: e.wrapClass,
                    widgets: e.widgets
                }
            }, addLineClass: Yr(function (e, t, n) {
                return po(this, e, "gutter" == t ? "gutter" : "class", function (e) {
                    var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass";
                    if (e[r]) {
                        if (S(n).test(e[r])) return !1;
                        e[r] += " " + n
                    } else e[r] = n;
                    return !0
                })
            }), removeLineClass: Yr(function (e, t, n) {
                return po(this, e, "gutter" == t ? "gutter" : "class", function (e) {
                    var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
                        i = e[r];
                    if (!i) return !1;
                    if (null == n) e[r] = null; else {
                        var o = i.match(S(n));
                        if (!o) return !1;
                        var a = o.index + o[0].length;
                        e[r] = i.slice(0, o.index) + (o.index && a != i.length ? " " : "") + i.slice(a) || null
                    }
                    return !0
                })
            }), addLineWidget: Yr(function (e, t, n) {
                return function (e, t, n, r) {
                    var i = new vo(e, n, r), o = e.cm;
                    return o && i.noHScroll && (o.display.alignWidgets = !0), po(e, t, "widget", function (t) {
                        var n = t.widgets || (t.widgets = []);
                        if (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = t, o && !$e(e, t)) {
                            var r = Ve(t) < e.scrollTop;
                            ce(t, t.height + xn(i)), r && Sr(o, i.height), o.curOp.forceUpdate = !0
                        }
                        return !0
                    }), o && ln(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : fe(t)), i
                }(this, e, t, n)
            }), removeLineWidget: function (e) {
                e.clear()
            }, markText: function (e, t, n) {
                return wo(this, ke(this, e), ke(this, t), n, n && n.type || "range")
            }, setBookmark: function (e, t) {
                var n = {
                    replacedWith: t && (null == t.nodeType ? t.widget : t),
                    insertLeft: t && t.insertLeft,
                    clearWhenEmpty: !1,
                    shared: t && t.shared,
                    handleMouseEvents: t && t.handleMouseEvents
                };
                return wo(this, e = ke(this, e), e, n, "bookmark")
            }, findMarksAt: function (e) {
                var t = [], n = le(this, (e = ke(this, e)).line).markedSpans;
                if (n) for (var r = 0; r < n.length; ++r) {
                    var i = n[r];
                    (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
                }
                return t
            }, findMarks: function (e, t, n) {
                e = ke(this, e), t = ke(this, t);
                var r = [], i = e.line;
                return this.iter(e.line, t.line + 1, function (o) {
                    var a = o.markedSpans;
                    if (a) for (var l = 0; l < a.length; l++) {
                        var s = a[l];
                        null != s.to && i == e.line && e.ch >= s.to || null == s.from && i != e.line || null != s.from && i == t.line && s.from >= t.ch || n && !n(s.marker) || r.push(s.marker.parent || s.marker)
                    }
                    ++i
                }), r
            }, getAllMarks: function () {
                var e = [];
                return this.iter(function (t) {
                    var n = t.markedSpans;
                    if (n) for (var r = 0; r < n.length; ++r) null != n[r].from && e.push(n[r].marker)
                }), e
            }, posFromIndex: function (e) {
                var t, n = this.first, r = this.lineSeparator().length;
                return this.iter(function (i) {
                    var o = i.text.length + r;
                    if (o > e) return t = e, !0;
                    e -= o, ++n
                }), ke(this, ge(n, t))
            }, indexFromPos: function (e) {
                var t = (e = ke(this, e)).ch;
                if (e.line < this.first || e.ch < 0) return 0;
                var n = this.lineSeparator().length;
                return this.iter(this.first, e.line, function (e) {
                    t += e.text.length + n
                }), t
            }, copy: function (e) {
                var t = new Lo(ue(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
                return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t
            }, linkedDoc: function (e) {
                e || (e = {});
                var t = this.first, n = this.first + this.size;
                null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);
                var r = new Lo(ue(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
                return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({
                    doc: r,
                    sharedHist: e.sharedHist
                }), r.linked = [{doc: this, isParent: !0, sharedHist: e.sharedHist}], function (e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n], i = r.find(), o = e.clipPos(i.from), a = e.clipPos(i.to);
                        if (me(o, a)) {
                            var l = wo(e, o, a, r.primary, r.primary.type);
                            r.markers.push(l), l.parent = r
                        }
                    }
                }(r, Co(this)), r
            }, unlinkDoc: function (e) {
                if (e instanceof Sa && (e = e.doc), this.linked) for (var t = 0; t < this.linked.length; ++t) {
                    if (this.linked[t].doc == e) {
                        this.linked.splice(t, 1), e.unlinkDoc(this), So(Co(this));
                        break
                    }
                }
                if (e.history == this.history) {
                    var n = [e.id];
                    Mi(e, function (e) {
                        return n.push(e.id)
                    }, !0), e.history = new Di(null), e.history.done = Bi(this.history.done, n), e.history.undone = Bi(this.history.undone, n)
                }
            }, iterLinkedDocs: function (e) {
                Mi(this, e)
            }, getMode: function () {
                return this.mode
            }, getEditor: function () {
                return this.cm
            }, splitLines: function (e) {
                return this.lineSep ? e.split(this.lineSep) : bt(e)
            }, lineSeparator: function () {
                return this.lineSep || "\n"
            }, setDirection: Yr(function (e) {
                "rtl" != e && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function (e) {
                    return e.order = null
                }), this.cm && function (e) {
                    Gr(e, function () {
                        Ei(e), Qr(e)
                    })
                }(this.cm))
            })
        }), Lo.prototype.eachLine = Lo.prototype.iter;
        var No = 0;

        function Ao(e) {
            var t = this;
            if (Mo(t), !it(t, e) && !wn(t.display, e)) {
                st(e), a && (No = +new Date);
                var n = ar(t, e, !0), r = e.dataTransfer.files;
                if (n && !t.isReadOnly()) if (r && r.length && window.FileReader && window.File) for (var i = r.length, o = Array(i), l = 0, s = function (e, r) {
                    if (!t.options.allowDropFileTypes || -1 != _(t.options.allowDropFileTypes, e.type)) {
                        var a = new FileReader;
                        a.onload = Xr(t, function () {
                            var e = a.result;
                            if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), o[r] = e, ++l == i) {
                                var s = {
                                    from: n = ke(t.doc, n),
                                    to: n,
                                    text: t.doc.splitLines(o.join(t.doc.lineSeparator())),
                                    origin: "paste"
                                };
                                io(t.doc, s), Gi(t.doc, xi(n, wi(s)))
                            }
                        }), a.readAsText(e)
                    }
                }, u = 0; u < i; ++u) s(r[u], u); else {
                    if (t.state.draggingText && t.doc.sel.contains(n) > -1) return t.state.draggingText(e), void setTimeout(function () {
                        return t.display.input.focus()
                    }, 20);
                    try {
                        var c = e.dataTransfer.getData("Text");
                        if (c) {
                            var f;
                            if (t.state.draggingText && !t.state.draggingText.copy && (f = t.listSelections()), Ki(t.doc, xi(n, n)), f) for (var d = 0; d < f.length; ++d) uo(t.doc, "", f[d].anchor, f[d].head, "drag");
                            t.replaceSelection(c, "around", "paste"), t.display.input.focus()
                        }
                    } catch (e) {
                    }
                }
            }
        }

        function Mo(e) {
            e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null)
        }

        function Oo(e) {
            if (document.getElementsByClassName) for (var t = document.getElementsByClassName("CodeMirror"), n = 0; n < t.length; n++) {
                var r = t[n].CodeMirror;
                r && e(r)
            }
        }

        var Eo = !1;

        function Do() {
            Eo || (!function () {
                var e;
                et(window, "resize", function () {
                    null == e && (e = setTimeout(function () {
                        e = null, Oo(Po)
                    }, 100))
                }), et(window, "blur", function () {
                    return Oo(vr)
                })
            }(), Eo = !0)
        }

        function Po(e) {
            var t = e.display;
            t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize()
        }

        for (var Ho = {
            3: "Pause",
            8: "Backspace",
            9: "Tab",
            13: "Enter",
            16: "Shift",
            17: "Ctrl",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Esc",
            32: "Space",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "Left",
            38: "Up",
            39: "Right",
            40: "Down",
            44: "PrintScrn",
            45: "Insert",
            46: "Delete",
            59: ";",
            61: "=",
            91: "Mod",
            92: "Mod",
            93: "Mod",
            106: "*",
            107: "=",
            109: "-",
            110: ".",
            111: "/",
            127: "Delete",
            145: "ScrollLock",
            173: "-",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
            63232: "Up",
            63233: "Down",
            63234: "Left",
            63235: "Right",
            63272: "Delete",
            63273: "Home",
            63275: "End",
            63276: "PageUp",
            63277: "PageDown",
            63302: "Insert"
        }, Ro = 0; Ro < 10; Ro++) Ho[Ro + 48] = Ho[Ro + 96] = String(Ro);
        for (var Io = 65; Io <= 90; Io++) Ho[Io] = String.fromCharCode(Io);
        for (var Wo = 1; Wo <= 12; Wo++) Ho[Wo + 111] = Ho[Wo + 63235] = "F" + Wo;
        var Fo = {};

        function jo(e) {
            var t, n, r, i, o = e.split(/-(?!$)/);
            e = o[o.length - 1];
            for (var a = 0; a < o.length - 1; a++) {
                var l = o[a];
                if (/^(cmd|meta|m)$/i.test(l)) i = !0; else if (/^a(lt)?$/i.test(l)) t = !0; else if (/^(c|ctrl|control)$/i.test(l)) n = !0; else {
                    if (!/^s(hift)?$/i.test(l)) throw new Error("Unrecognized modifier name: " + l);
                    r = !0
                }
            }
            return t && (e = "Alt-" + e), n && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), r && (e = "Shift-" + e), e
        }

        function _o(e) {
            var t = {};
            for (var n in e) if (e.hasOwnProperty(n)) {
                var r = e[n];
                if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
                if ("..." == r) {
                    delete e[n];
                    continue
                }
                for (var i = Y(n.split(" "), jo), o = 0; o < i.length; o++) {
                    var a = void 0, l = void 0;
                    o == i.length - 1 ? (l = i.join(" "), a = r) : (l = i.slice(0, o + 1).join(" "), a = "...");
                    var s = t[l];
                    if (s) {
                        if (s != a) throw new Error("Inconsistent bindings for " + l)
                    } else t[l] = a
                }
                delete e[n]
            }
            for (var u in t) e[u] = t[u];
            return e
        }

        function Bo(e, t, n, r) {
            var i = (t = Uo(t)).call ? t.call(e, r) : t[e];
            if (!1 === i) return "nothing";
            if ("..." === i) return "multi";
            if (null != i && n(i)) return "handled";
            if (t.fallthrough) {
                if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return Bo(e, t.fallthrough, n, r);
                for (var o = 0; o < t.fallthrough.length; o++) {
                    var a = Bo(e, t.fallthrough[o], n, r);
                    if (a) return a
                }
            }
        }

        function zo(e) {
            var t = "string" == typeof e ? e : Ho[e.keyCode];
            return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
        }

        function qo(e, t, n) {
            var r = e;
            return t.altKey && "Alt" != r && (e = "Alt-" + e), (k ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e), (k ? t.ctrlKey : t.metaKey) && "Cmd" != r && (e = "Cmd-" + e), !n && t.shiftKey && "Shift" != r && (e = "Shift-" + e), e
        }

        function $o(e, t) {
            if (f && 34 == e.keyCode && e.char) return !1;
            var n = Ho[e.keyCode];
            return null != n && !e.altGraphKey && (3 == e.keyCode && e.code && (n = e.code), qo(n, e, t))
        }

        function Uo(e) {
            return "string" == typeof e ? Fo[e] : e
        }

        function Vo(e, t) {
            for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
                for (var o = t(n[i]); r.length && me(o.from, K(r).to) <= 0;) {
                    var a = r.pop();
                    if (me(a.from, o.from) < 0) {
                        o.from = a.from;
                        break
                    }
                }
                r.push(o)
            }
            Gr(e, function () {
                for (var t = r.length - 1; t >= 0; t--) uo(e.doc, "", r[t].from, r[t].to, "+delete");
                Tr(e)
            })
        }

        function Go(e, t, n) {
            var r = oe(e.text, t + n, n);
            return r < 0 || r > e.text.length ? null : r
        }

        function Xo(e, t, n) {
            var r = Go(e, t.ch, n);
            return null == r ? null : new ge(t.line, r, n < 0 ? "after" : "before")
        }

        function Ko(e, t, n, r, i) {
            if (e) {
                var o = Je(n, t.doc.direction);
                if (o) {
                    var a, l = i < 0 ? K(o) : o[0], s = i < 0 == (1 == l.level) ? "after" : "before";
                    if (l.level > 0 || "rtl" == t.doc.direction) {
                        var u = En(t, n);
                        a = i < 0 ? n.text.length - 1 : 0;
                        var c = Dn(t, u, a).top;
                        a = ae(function (e) {
                            return Dn(t, u, e).top == c
                        }, i < 0 == (1 == l.level) ? l.from : l.to - 1, a), "before" == s && (a = Go(n, a, 1))
                    } else a = i < 0 ? l.to : l.from;
                    return new ge(r, a, s)
                }
            }
            return new ge(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after")
        }

        Fo.basic = {
            Left: "goCharLeft",
            Right: "goCharRight",
            Up: "goLineUp",
            Down: "goLineDown",
            End: "goLineEnd",
            Home: "goLineStartSmart",
            PageUp: "goPageUp",
            PageDown: "goPageDown",
            Delete: "delCharAfter",
            Backspace: "delCharBefore",
            "Shift-Backspace": "delCharBefore",
            Tab: "defaultTab",
            "Shift-Tab": "indentAuto",
            Enter: "newlineAndIndent",
            Insert: "toggleOverwrite",
            Esc: "singleSelection"
        }, Fo.pcDefault = {
            "Ctrl-A": "selectAll",
            "Ctrl-D": "deleteLine",
            "Ctrl-Z": "undo",
            "Shift-Ctrl-Z": "redo",
            "Ctrl-Y": "redo",
            "Ctrl-Home": "goDocStart",
            "Ctrl-End": "goDocEnd",
            "Ctrl-Up": "goLineUp",
            "Ctrl-Down": "goLineDown",
            "Ctrl-Left": "goGroupLeft",
            "Ctrl-Right": "goGroupRight",
            "Alt-Left": "goLineStart",
            "Alt-Right": "goLineEnd",
            "Ctrl-Backspace": "delGroupBefore",
            "Ctrl-Delete": "delGroupAfter",
            "Ctrl-S": "save",
            "Ctrl-F": "find",
            "Ctrl-G": "findNext",
            "Shift-Ctrl-G": "findPrev",
            "Shift-Ctrl-F": "replace",
            "Shift-Ctrl-R": "replaceAll",
            "Ctrl-[": "indentLess",
            "Ctrl-]": "indentMore",
            "Ctrl-U": "undoSelection",
            "Shift-Ctrl-U": "redoSelection",
            "Alt-U": "redoSelection",
            fallthrough: "basic"
        }, Fo.emacsy = {
            "Ctrl-F": "goCharRight",
            "Ctrl-B": "goCharLeft",
            "Ctrl-P": "goLineUp",
            "Ctrl-N": "goLineDown",
            "Alt-F": "goWordRight",
            "Alt-B": "goWordLeft",
            "Ctrl-A": "goLineStart",
            "Ctrl-E": "goLineEnd",
            "Ctrl-V": "goPageDown",
            "Shift-Ctrl-V": "goPageUp",
            "Ctrl-D": "delCharAfter",
            "Ctrl-H": "delCharBefore",
            "Alt-D": "delWordAfter",
            "Alt-Backspace": "delWordBefore",
            "Ctrl-K": "killLine",
            "Ctrl-T": "transposeChars",
            "Ctrl-O": "openLine"
        }, Fo.macDefault = {
            "Cmd-A": "selectAll",
            "Cmd-D": "deleteLine",
            "Cmd-Z": "undo",
            "Shift-Cmd-Z": "redo",
            "Cmd-Y": "redo",
            "Cmd-Home": "goDocStart",
            "Cmd-Up": "goDocStart",
            "Cmd-End": "goDocEnd",
            "Cmd-Down": "goDocEnd",
            "Alt-Left": "goGroupLeft",
            "Alt-Right": "goGroupRight",
            "Cmd-Left": "goLineLeft",
            "Cmd-Right": "goLineRight",
            "Alt-Backspace": "delGroupBefore",
            "Ctrl-Alt-Backspace": "delGroupAfter",
            "Alt-Delete": "delGroupAfter",
            "Cmd-S": "save",
            "Cmd-F": "find",
            "Cmd-G": "findNext",
            "Shift-Cmd-G": "findPrev",
            "Cmd-Alt-F": "replace",
            "Shift-Cmd-Alt-F": "replaceAll",
            "Cmd-[": "indentLess",
            "Cmd-]": "indentMore",
            "Cmd-Backspace": "delWrappedLineLeft",
            "Cmd-Delete": "delWrappedLineRight",
            "Cmd-U": "undoSelection",
            "Shift-Cmd-U": "redoSelection",
            "Ctrl-Up": "goDocStart",
            "Ctrl-Down": "goDocEnd",
            fallthrough: ["basic", "emacsy"]
        }, Fo.default = y ? Fo.macDefault : Fo.pcDefault;
        var Yo = {
            selectAll: no, singleSelection: function (e) {
                return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), q)
            }, killLine: function (e) {
                return Vo(e, function (t) {
                    if (t.empty()) {
                        var n = le(e.doc, t.head.line).text.length;
                        return t.head.ch == n && t.head.line < e.lastLine() ? {
                            from: t.head,
                            to: ge(t.head.line + 1, 0)
                        } : {from: t.head, to: ge(t.head.line, n)}
                    }
                    return {from: t.from(), to: t.to()}
                })
            }, deleteLine: function (e) {
                return Vo(e, function (t) {
                    return {from: ge(t.from().line, 0), to: ke(e.doc, ge(t.to().line + 1, 0))}
                })
            }, delLineLeft: function (e) {
                return Vo(e, function (e) {
                    return {from: ge(e.from().line, 0), to: e.from()}
                })
            }, delWrappedLineLeft: function (e) {
                return Vo(e, function (t) {
                    var n = e.charCoords(t.head, "div").top + 5;
                    return {from: e.coordsChar({left: 0, top: n}, "div"), to: t.from()}
                })
            }, delWrappedLineRight: function (e) {
                return Vo(e, function (t) {
                    var n = e.charCoords(t.head, "div").top + 5,
                        r = e.coordsChar({left: e.display.lineDiv.offsetWidth + 100, top: n}, "div");
                    return {from: t.from(), to: r}
                })
            }, undo: function (e) {
                return e.undo()
            }, redo: function (e) {
                return e.redo()
            }, undoSelection: function (e) {
                return e.undoSelection()
            }, redoSelection: function (e) {
                return e.redoSelection()
            }, goDocStart: function (e) {
                return e.extendSelection(ge(e.firstLine(), 0))
            }, goDocEnd: function (e) {
                return e.extendSelection(ge(e.lastLine()))
            }, goLineStart: function (e) {
                return e.extendSelectionsBy(function (t) {
                    return Qo(e, t.head.line)
                }, {origin: "+move", bias: 1})
            }, goLineStartSmart: function (e) {
                return e.extendSelectionsBy(function (t) {
                    return Jo(e, t.head)
                }, {origin: "+move", bias: 1})
            }, goLineEnd: function (e) {
                return e.extendSelectionsBy(function (t) {
                    return function (e, t) {
                        var n = le(e.doc, t), r = function (e) {
                            for (var t; t = Fe(e);) e = t.find(1, !0).line;
                            return e
                        }(n);
                        r != n && (t = fe(r));
                        return Ko(!0, e, n, t, -1)
                    }(e, t.head.line)
                }, {origin: "+move", bias: -1})
            }, goLineRight: function (e) {
                return e.extendSelectionsBy(function (t) {
                    var n = e.cursorCoords(t.head, "div").top + 5;
                    return e.coordsChar({left: e.display.lineDiv.offsetWidth + 100, top: n}, "div")
                }, U)
            }, goLineLeft: function (e) {
                return e.extendSelectionsBy(function (t) {
                    var n = e.cursorCoords(t.head, "div").top + 5;
                    return e.coordsChar({left: 0, top: n}, "div")
                }, U)
            }, goLineLeftSmart: function (e) {
                return e.extendSelectionsBy(function (t) {
                    var n = e.cursorCoords(t.head, "div").top + 5, r = e.coordsChar({left: 0, top: n}, "div");
                    return r.ch < e.getLine(r.line).search(/\S/) ? Jo(e, t.head) : r
                }, U)
            }, goLineUp: function (e) {
                return e.moveV(-1, "line")
            }, goLineDown: function (e) {
                return e.moveV(1, "line")
            }, goPageUp: function (e) {
                return e.moveV(-1, "page")
            }, goPageDown: function (e) {
                return e.moveV(1, "page")
            }, goCharLeft: function (e) {
                return e.moveH(-1, "char")
            }, goCharRight: function (e) {
                return e.moveH(1, "char")
            }, goColumnLeft: function (e) {
                return e.moveH(-1, "column")
            }, goColumnRight: function (e) {
                return e.moveH(1, "column")
            }, goWordLeft: function (e) {
                return e.moveH(-1, "word")
            }, goGroupRight: function (e) {
                return e.moveH(1, "group")
            }, goGroupLeft: function (e) {
                return e.moveH(-1, "group")
            }, goWordRight: function (e) {
                return e.moveH(1, "word")
            }, delCharBefore: function (e) {
                return e.deleteH(-1, "char")
            }, delCharAfter: function (e) {
                return e.deleteH(1, "char")
            }, delWordBefore: function (e) {
                return e.deleteH(-1, "word")
            }, delWordAfter: function (e) {
                return e.deleteH(1, "word")
            }, delGroupBefore: function (e) {
                return e.deleteH(-1, "group")
            }, delGroupAfter: function (e) {
                return e.deleteH(1, "group")
            }, indentAuto: function (e) {
                return e.indentSelection("smart")
            }, indentMore: function (e) {
                return e.indentSelection("add")
            }, indentLess: function (e) {
                return e.indentSelection("subtract")
            }, insertTab: function (e) {
                return e.replaceSelection("\t")
            }, insertSoftTab: function (e) {
                for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
                    var o = n[i].from(), a = F(e.getLine(o.line), o.ch, r);
                    t.push(X(r - a % r))
                }
                e.replaceSelections(t)
            }, defaultTab: function (e) {
                e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
            }, transposeChars: function (e) {
                return Gr(e, function () {
                    for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) if (t[r].empty()) {
                        var i = t[r].head, o = le(e.doc, i.line).text;
                        if (o) if (i.ch == o.length && (i = new ge(i.line, i.ch - 1)), i.ch > 0) i = new ge(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), ge(i.line, i.ch - 2), i, "+transpose"); else if (i.line > e.doc.first) {
                            var a = le(e.doc, i.line - 1).text;
                            a && (i = new ge(i.line, 1), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1), ge(i.line - 1, a.length - 1), i, "+transpose"))
                        }
                        n.push(new yi(i, i))
                    }
                    e.setSelections(n)
                })
            }, newlineAndIndent: function (e) {
                return Gr(e, function () {
                    for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--) e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
                    t = e.listSelections();
                    for (var r = 0; r < t.length; r++) e.indentLine(t[r].from().line, null, !0);
                    Tr(e)
                })
            }, openLine: function (e) {
                return e.replaceSelection("\n", "start")
            }, toggleOverwrite: function (e) {
                return e.toggleOverwrite()
            }
        };

        function Qo(e, t) {
            var n = le(e.doc, t), r = Be(n);
            return r != n && (t = fe(r)), Ko(!0, e, r, t, 1)
        }

        function Jo(e, t) {
            var n = Qo(e, t.line), r = le(e.doc, n.line), i = Je(r, e.doc.direction);
            if (!i || 0 == i[0].level) {
                var o = Math.max(0, r.text.search(/\S/)), a = t.line == n.line && t.ch <= o && t.ch;
                return ge(n.line, a ? 0 : o, n.sticky)
            }
            return n
        }

        function Zo(e, t, n) {
            if ("string" == typeof t && !(t = Yo[t])) return !1;
            e.display.input.ensurePolled();
            var r = e.display.shift, i = !1;
            try {
                e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), i = t(e) != z
            } finally {
                e.display.shift = r, e.state.suppressEdits = !1
            }
            return i
        }

        var ea = new j;

        function ta(e, t, n, r) {
            var i = e.state.keySeq;
            if (i) {
                if (zo(t)) return "handled";
                if (/\'$/.test(t) ? e.state.keySeq = null : ea.set(50, function () {
                    e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset())
                }), na(e, i + " " + t, n, r)) return !0
            }
            return na(e, t, n, r)
        }

        function na(e, t, n, r) {
            var i = function (e, t, n) {
                for (var r = 0; r < e.state.keyMaps.length; r++) {
                    var i = Bo(t, e.state.keyMaps[r], n, e);
                    if (i) return i
                }
                return e.options.extraKeys && Bo(t, e.options.extraKeys, n, e) || Bo(t, e.options.keyMap, n, e)
            }(e, t, r);
            return "multi" == i && (e.state.keySeq = t), "handled" == i && ln(e, "keyHandled", e, t, n), "handled" != i && "multi" != i || (st(n), hr(e)), !!i
        }

        function ra(e, t) {
            var n = $o(t, !0);
            return !!n && (t.shiftKey && !e.state.keySeq ? ta(e, "Shift-" + n, t, function (t) {
                return Zo(e, t, !0)
            }) || ta(e, n, t, function (t) {
                if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return Zo(e, t)
            }) : ta(e, n, t, function (t) {
                return Zo(e, t)
            }))
        }

        var ia = null;

        function oa(e) {
            var t = this;
            if (t.curOp.focus = D(), !it(t, e)) {
                a && l < 11 && 27 == e.keyCode && (e.returnValue = !1);
                var n = e.keyCode;
                t.display.shift = 16 == n || e.shiftKey;
                var r = ra(t, e);
                f && (ia = r ? n : null, !r && 88 == n && !wt && (y ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), 18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || function (e) {
                    var t = e.display.lineDiv;

                    function n(e) {
                        18 != e.keyCode && e.altKey || (L(t, "CodeMirror-crosshair"), nt(document, "keyup", n), nt(document, "mouseover", n))
                    }

                    P(t, "CodeMirror-crosshair"), et(document, "keyup", n), et(document, "mouseover", n)
                }(t)
            }
        }

        function aa(e) {
            16 == e.keyCode && (this.doc.sel.shift = !1), it(this, e)
        }

        function la(e) {
            var t = this;
            if (!(wn(t.display, e) || it(t, e) || e.ctrlKey && !e.altKey || y && e.metaKey)) {
                var n = e.keyCode, r = e.charCode;
                if (f && n == ia) return ia = null, void st(e);
                if (!f || e.which && !(e.which < 10) || !ra(t, e)) {
                    var i = String.fromCharCode(null == r ? n : r);
                    "\b" != i && (function (e, t, n) {
                        return ta(e, "'" + n + "'", t, function (t) {
                            return Zo(e, t, !0)
                        })
                    }(t, e, i) || t.display.input.onKeyPress(e))
                }
            }
        }

        var sa, ua, ca = function (e, t, n) {
            this.time = e, this.pos = t, this.button = n
        };

        function fa(e) {
            var t = this, n = t.display;
            if (!(it(t, e) || n.activeTouch && n.input.supportsTouch())) if (n.input.ensurePolled(), n.shift = e.shiftKey, wn(n, e)) s || (n.scroller.draggable = !1, setTimeout(function () {
                return n.scroller.draggable = !0
            }, 100)); else {
                var r = ht(e);
                if (3 == r && C ? !ma(t, e) : !pa(t, e)) {
                    var i = ar(t, e), o = i ? function (e, t) {
                        var n = +new Date;
                        return ua && ua.compare(n, e, t) ? (sa = ua = null, "triple") : sa && sa.compare(n, e, t) ? (ua = new ca(n, e, t), sa = null, "double") : (sa = new ca(n, e, t), ua = null, "single")
                    }(i, r) : "single";
                    window.focus(), 1 == r && t.state.selectingText && t.state.selectingText(e), i && function (e, t, n, r, i) {
                        var o = "Click";
                        "double" == r ? o = "Double" + o : "triple" == r && (o = "Triple" + o);
                        return ta(e, qo(o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o, i), i, function (t) {
                            if ("string" == typeof t && (t = Yo[t]), !t) return !1;
                            var r = !1;
                            try {
                                e.isReadOnly() && (e.state.suppressEdits = !0), r = t(e, n) != z
                            } finally {
                                e.state.suppressEdits = !1
                            }
                            return r
                        })
                    }(t, r, i, o, e) || (1 == r ? i ? function (e, t, n, r) {
                        a ? setTimeout(I(pr, e), 0) : e.curOp.focus = D();
                        var i, o = function (e, t, n) {
                            var r = e.getOption("configureMouse"), i = r ? r(e, t, n) : {};
                            if (null == i.unit) {
                                var o = b ? n.shiftKey && n.metaKey : n.altKey;
                                i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line"
                            }
                            (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey);
                            null == i.addNew && (i.addNew = y ? n.metaKey : n.ctrlKey);
                            null == i.moveOnDrag && (i.moveOnDrag = !(y ? n.altKey : n.ctrlKey));
                            return i
                        }(e, n, r), u = e.doc.sel;
                        e.options.dragDrop && mt && !e.isReadOnly() && "single" == n && (i = u.contains(t)) > -1 && (me((i = u.ranges[i]).from(), t) < 0 || t.xRel > 0) && (me(i.to(), t) > 0 || t.xRel < 0) ? function (e, t, n, r) {
                            var i = e.display, o = !1, u = Xr(e, function (t) {
                                s && (i.scroller.draggable = !1), e.state.draggingText = !1, nt(i.wrapper.ownerDocument, "mouseup", u), nt(i.wrapper.ownerDocument, "mousemove", c), nt(i.scroller, "dragstart", f), nt(i.scroller, "drop", u), o || (st(t), r.addNew || qi(e.doc, n, null, null, r.extend), s || a && 9 == l ? setTimeout(function () {
                                    i.wrapper.ownerDocument.body.focus(), i.input.focus()
                                }, 20) : i.input.focus())
                            }), c = function (e) {
                                o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10
                            }, f = function () {
                                return o = !0
                            };
                            s && (i.scroller.draggable = !0);
                            e.state.draggingText = u, u.copy = !r.moveOnDrag, i.scroller.dragDrop && i.scroller.dragDrop();
                            et(i.wrapper.ownerDocument, "mouseup", u), et(i.wrapper.ownerDocument, "mousemove", c), et(i.scroller, "dragstart", f), et(i.scroller, "drop", u), gr(e), setTimeout(function () {
                                return i.input.focus()
                            }, 20)
                        }(e, r, t, o) : function (e, t, n, r) {
                            var i = e.display, o = e.doc;
                            st(t);
                            var a, l, s = o.sel, u = s.ranges;
                            r.addNew && !r.extend ? (l = o.sel.contains(n), a = l > -1 ? u[l] : new yi(n, n)) : (a = o.sel.primary(), l = o.sel.primIndex);
                            if ("rectangle" == r.unit) r.addNew || (a = new yi(n, n)), n = ar(e, t, !0, !0), l = -1; else {
                                var c = da(e, n, r.unit);
                                a = r.extend ? zi(a, c.anchor, c.head, r.extend) : c
                            }
                            r.addNew ? -1 == l ? (l = u.length, Xi(o, bi(u.concat([a]), l), {
                                scroll: !1,
                                origin: "*mouse"
                            })) : u.length > 1 && u[l].empty() && "char" == r.unit && !r.extend ? (Xi(o, bi(u.slice(0, l).concat(u.slice(l + 1)), 0), {
                                scroll: !1,
                                origin: "*mouse"
                            }), s = o.sel) : Ui(o, l, a, $) : (l = 0, Xi(o, new vi([a], 0), $), s = o.sel);
                            var f = n;

                            function d(t) {
                                if (0 != me(f, t)) if (f = t, "rectangle" == r.unit) {
                                    for (var i = [], u = e.options.tabSize, c = F(le(o, n.line).text, n.ch, u), d = F(le(o, t.line).text, t.ch, u), h = Math.min(c, d), p = Math.max(c, d), g = Math.min(n.line, t.line), m = Math.min(e.lastLine(), Math.max(n.line, t.line)); g <= m; g++) {
                                        var v = le(o, g).text, y = V(v, h, u);
                                        h == p ? i.push(new yi(ge(g, y), ge(g, y))) : v.length > y && i.push(new yi(ge(g, y), ge(g, V(v, p, u))))
                                    }
                                    i.length || i.push(new yi(n, n)), Xi(o, bi(s.ranges.slice(0, l).concat(i), l), {
                                        origin: "*mouse",
                                        scroll: !1
                                    }), e.scrollIntoView(t)
                                } else {
                                    var b, x = a, w = da(e, t, r.unit), k = x.anchor;
                                    me(w.anchor, k) > 0 ? (b = w.head, k = xe(x.from(), w.anchor)) : (b = w.anchor, k = be(x.to(), w.head));
                                    var C = s.ranges.slice(0);
                                    C[l] = function (e, t) {
                                        var n = t.anchor, r = t.head, i = le(e.doc, n.line);
                                        if (0 == me(n, r) && n.sticky == r.sticky) return t;
                                        var o = Je(i);
                                        if (!o) return t;
                                        var a = Ye(o, n.ch, n.sticky), l = o[a];
                                        if (l.from != n.ch && l.to != n.ch) return t;
                                        var s, u = a + (l.from == n.ch == (1 != l.level) ? 0 : 1);
                                        if (0 == u || u == o.length) return t;
                                        if (r.line != n.line) s = (r.line - n.line) * ("ltr" == e.doc.direction ? 1 : -1) > 0; else {
                                            var c = Ye(o, r.ch, r.sticky),
                                                f = c - a || (r.ch - n.ch) * (1 == l.level ? -1 : 1);
                                            s = c == u - 1 || c == u ? f < 0 : f > 0
                                        }
                                        var d = o[u + (s ? -1 : 0)], h = s == (1 == d.level), p = h ? d.from : d.to,
                                            g = h ? "after" : "before";
                                        return n.ch == p && n.sticky == g ? t : new yi(new ge(n.line, p, g), r)
                                    }(e, new yi(ke(o, k), b)), Xi(o, bi(C, l), $)
                                }
                            }

                            var h = i.wrapper.getBoundingClientRect(), p = 0;

                            function g(t) {
                                e.state.selectingText = !1, p = 1 / 0, st(t), i.input.focus(), nt(i.wrapper.ownerDocument, "mousemove", m), nt(i.wrapper.ownerDocument, "mouseup", v), o.history.lastSelOrigin = null
                            }

                            var m = Xr(e, function (t) {
                                0 !== t.buttons && ht(t) ? function t(n) {
                                    var a = ++p;
                                    var l = ar(e, n, !0, "rectangle" == r.unit);
                                    if (!l) return;
                                    if (0 != me(l, f)) {
                                        e.curOp.focus = D(), d(l);
                                        var s = xr(i, o);
                                        (l.line >= s.to || l.line < s.from) && setTimeout(Xr(e, function () {
                                            p == a && t(n)
                                        }), 150)
                                    } else {
                                        var u = n.clientY < h.top ? -20 : n.clientY > h.bottom ? 20 : 0;
                                        u && setTimeout(Xr(e, function () {
                                            p == a && (i.scroller.scrollTop += u, t(n))
                                        }), 50)
                                    }
                                }(t) : g(t)
                            }), v = Xr(e, g);
                            e.state.selectingText = v, et(i.wrapper.ownerDocument, "mousemove", m), et(i.wrapper.ownerDocument, "mouseup", v)
                        }(e, r, t, o)
                    }(t, i, o, e) : dt(e) == n.scroller && st(e) : 2 == r ? (i && qi(t.doc, i), setTimeout(function () {
                        return n.input.focus()
                    }, 20)) : 3 == r && (C ? ga(t, e) : gr(t)))
                }
            }
        }

        function da(e, t, n) {
            if ("char" == n) return new yi(t, t);
            if ("word" == n) return e.findWordAt(t);
            if ("line" == n) return new yi(ge(t.line, 0), ke(e.doc, ge(t.line + 1, 0)));
            var r = n(e, t);
            return new yi(r.from, r.to)
        }

        function ha(e, t, n, r) {
            var i, o;
            if (t.touches) i = t.touches[0].clientX, o = t.touches[0].clientY; else try {
                i = t.clientX, o = t.clientY
            } catch (t) {
                return !1
            }
            if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
            r && st(t);
            var a = e.display, l = a.lineDiv.getBoundingClientRect();
            if (o > l.bottom || !at(e, n)) return ct(t);
            o -= l.top - a.viewOffset;
            for (var s = 0; s < e.options.gutters.length; ++s) {
                var u = a.gutters.childNodes[s];
                if (u && u.getBoundingClientRect().right >= i) return rt(e, n, e, de(e.doc, o), e.options.gutters[s], t), ct(t)
            }
        }

        function pa(e, t) {
            return ha(e, t, "gutterClick", !0)
        }

        function ga(e, t) {
            wn(e.display, t) || ma(e, t) || it(e, t, "contextmenu") || e.display.input.onContextMenu(t)
        }

        function ma(e, t) {
            return !!at(e, "gutterContextMenu") && ha(e, t, "gutterContextMenu", !1)
        }

        function va(e) {
            e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), jn(e)
        }

        ca.prototype.compare = function (e, t, n) {
            return this.time + 400 > e && 0 == me(t, this.pos) && n == this.button
        };
        var ya = {
            toString: function () {
                return "CodeMirror.Init"
            }
        }, ba = {}, xa = {};

        function wa(e) {
            ci(e), Qr(e), wr(e)
        }

        function ka(e, t, n) {
            if (!t != !(n && n != ya)) {
                var r = e.display.dragFunctions, i = t ? et : nt;
                i(e.display.scroller, "dragstart", r.start), i(e.display.scroller, "dragenter", r.enter), i(e.display.scroller, "dragover", r.over), i(e.display.scroller, "dragleave", r.leave), i(e.display.scroller, "drop", r.drop)
            }
        }

        function Ca(e) {
            e.options.lineWrapping ? (P(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (L(e.display.wrapper, "CodeMirror-wrap"), Xe(e)), or(e), Qr(e), jn(e), setTimeout(function () {
                return Rr(e)
            }, 100)
        }

        function Sa(e, t) {
            var r = this;
            if (!(this instanceof Sa)) return new Sa(e, t);
            this.options = t = t ? W(t) : {}, W(ba, t, !1), fi(t);
            var i = t.value;
            "string" == typeof i ? i = new Lo(i, t.mode, null, t.lineSeparator, t.direction) : t.mode && (i.modeOption = t.mode), this.doc = i;
            var o = new Sa.inputStyles[t.inputStyle](this), u = this.display = new function (e, t, r) {
                var i = this;
                this.input = r, i.scrollbarFiller = M("div", null, "CodeMirror-scrollbar-filler"), i.scrollbarFiller.setAttribute("cm-not-content", "true"), i.gutterFiller = M("div", null, "CodeMirror-gutter-filler"), i.gutterFiller.setAttribute("cm-not-content", "true"), i.lineDiv = O("div", null, "CodeMirror-code"), i.selectionDiv = M("div", null, null, "position: relative; z-index: 1"), i.cursorDiv = M("div", null, "CodeMirror-cursors"), i.measure = M("div", null, "CodeMirror-measure"), i.lineMeasure = M("div", null, "CodeMirror-measure"), i.lineSpace = O("div", [i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv], null, "position: relative; outline: none");
                var o = O("div", [i.lineSpace], "CodeMirror-lines");
                i.mover = M("div", [o], null, "position: relative"), i.sizer = M("div", [i.mover], "CodeMirror-sizer"), i.sizerWidth = null, i.heightForcer = M("div", null, null, "position: absolute; height: " + B + "px; width: 1px;"), i.gutters = M("div", null, "CodeMirror-gutters"), i.lineGutter = null, i.scroller = M("div", [i.sizer, i.heightForcer, i.gutters], "CodeMirror-scroll"), i.scroller.setAttribute("tabIndex", "-1"), i.wrapper = M("div", [i.scrollbarFiller, i.gutterFiller, i.scroller], "CodeMirror"), a && l < 8 && (i.gutters.style.zIndex = -1, i.scroller.style.paddingRight = 0), s || n && v || (i.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)), i.viewFrom = i.viewTo = t.first, i.reportedViewFrom = i.reportedViewTo = t.first, i.view = [], i.renderedView = null, i.externalMeasured = null, i.viewOffset = 0, i.lastWrapHeight = i.lastWrapWidth = 0, i.updateLineNumbers = null, i.nativeBarWidth = i.barHeight = i.barWidth = 0, i.scrollbarsClipped = !1, i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null, i.alignWidgets = !1, i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null, i.maxLine = null, i.maxLineLength = 0, i.maxLineChanged = !1, i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null, i.shift = !1, i.selForContextMenu = null, i.activeTouch = null, r.init(i)
            }(e, i, o);
            for (var c in u.wrapper.CodeMirror = this, ci(this), va(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), Fr(this), this.state = {
                keyMaps: [],
                overlays: [],
                modeGen: 0,
                overwrite: !1,
                delayingBlurEvent: !1,
                focused: !1,
                suppressEdits: !1,
                pasteIncoming: !1,
                cutIncoming: !1,
                selectingText: !1,
                draggingText: !1,
                highlight: new j,
                keySeq: null,
                specialChars: null
            }, t.autofocus && !v && u.input.focus(), a && l < 11 && setTimeout(function () {
                return r.display.input.reset(!0)
            }, 20), function (e) {
                var t = e.display;
                et(t.scroller, "mousedown", Xr(e, fa)), et(t.scroller, "dblclick", a && l < 11 ? Xr(e, function (t) {
                    if (!it(e, t)) {
                        var n = ar(e, t);
                        if (n && !pa(e, t) && !wn(e.display, t)) {
                            st(t);
                            var r = e.findWordAt(n);
                            qi(e.doc, r.anchor, r.head)
                        }
                    }
                }) : function (t) {
                    return it(e, t) || st(t)
                });
                C || et(t.scroller, "contextmenu", function (t) {
                    return ga(e, t)
                });
                var n, r = {end: 0};

                function i() {
                    t.activeTouch && (n = setTimeout(function () {
                        return t.activeTouch = null
                    }, 1e3), (r = t.activeTouch).end = +new Date)
                }

                function o(e, t) {
                    if (null == t.left) return !0;
                    var n = t.left - e.left, r = t.top - e.top;
                    return n * n + r * r > 400
                }

                et(t.scroller, "touchstart", function (i) {
                    if (!it(e, i) && !function (e) {
                        if (1 != e.touches.length) return !1;
                        var t = e.touches[0];
                        return t.radiusX <= 1 && t.radiusY <= 1
                    }(i) && !pa(e, i)) {
                        t.input.ensurePolled(), clearTimeout(n);
                        var o = +new Date;
                        t.activeTouch = {
                            start: o,
                            moved: !1,
                            prev: o - r.end <= 300 ? r : null
                        }, 1 == i.touches.length && (t.activeTouch.left = i.touches[0].pageX, t.activeTouch.top = i.touches[0].pageY)
                    }
                }), et(t.scroller, "touchmove", function () {
                    t.activeTouch && (t.activeTouch.moved = !0)
                }), et(t.scroller, "touchend", function (n) {
                    var r = t.activeTouch;
                    if (r && !wn(t, n) && null != r.left && !r.moved && new Date - r.start < 300) {
                        var a, l = e.coordsChar(t.activeTouch, "page");
                        a = !r.prev || o(r, r.prev) ? new yi(l, l) : !r.prev.prev || o(r, r.prev.prev) ? e.findWordAt(l) : new yi(ge(l.line, 0), ke(e.doc, ge(l.line + 1, 0))), e.setSelection(a.anchor, a.head), e.focus(), st(n)
                    }
                    i()
                }), et(t.scroller, "touchcancel", i), et(t.scroller, "scroll", function () {
                    t.scroller.clientHeight && (Mr(e, t.scroller.scrollTop), Er(e, t.scroller.scrollLeft, !0), rt(e, "scroll", e))
                }), et(t.scroller, "mousewheel", function (t) {
                    return mi(e, t)
                }), et(t.scroller, "DOMMouseScroll", function (t) {
                    return mi(e, t)
                }), et(t.wrapper, "scroll", function () {
                    return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0
                }), t.dragFunctions = {
                    enter: function (t) {
                        it(e, t) || ft(t)
                    }, over: function (t) {
                        it(e, t) || (!function (e, t) {
                            var n = ar(e, t);
                            if (n) {
                                var r = document.createDocumentFragment();
                                cr(e, n, r), e.display.dragCursor || (e.display.dragCursor = M("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), A(e.display.dragCursor, r)
                            }
                        }(e, t), ft(t))
                    }, start: function (t) {
                        return function (e, t) {
                            if (a && (!e.state.draggingText || +new Date - No < 100)) ft(t); else if (!it(e, t) && !wn(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !d)) {
                                var n = M("img", null, null, "position: fixed; left: 0; top: 0;");
                                n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", f && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), f && n.parentNode.removeChild(n)
                            }
                        }(e, t)
                    }, drop: Xr(e, Ao), leave: function (t) {
                        it(e, t) || Mo(e)
                    }
                };
                var s = t.input.getField();
                et(s, "keyup", function (t) {
                    return aa.call(e, t)
                }), et(s, "keydown", Xr(e, oa)), et(s, "keypress", Xr(e, la)), et(s, "focus", function (t) {
                    return mr(e, t)
                }), et(s, "blur", function (t) {
                    return vr(e, t)
                })
            }(this), Do(), _r(this), this.curOp.forceUpdate = !0, Oi(this, i), t.autofocus && !v || this.hasFocus() ? setTimeout(I(mr, this), 20) : vr(this), xa) xa.hasOwnProperty(c) && xa[c](r, t[c], ya);
            kr(this), t.finishInit && t.finishInit(this);
            for (var h = 0; h < Ta.length; ++h) Ta[h](r);
            Br(this), s && t.lineWrapping && "optimizelegibility" == getComputedStyle(u.lineDiv).textRendering && (u.lineDiv.style.textRendering = "auto")
        }

        Sa.defaults = ba, Sa.optionHandlers = xa;
        var Ta = [];

        function La(e, t, n, r) {
            var i, o = e.doc;
            null == n && (n = "add"), "smart" == n && (o.mode.indent ? i = Wt(e, t).state : n = "prev");
            var a = e.options.tabSize, l = le(o, t), s = F(l.text, null, a);
            l.stateAfter && (l.stateAfter = null);
            var u, c = l.text.match(/^\s*/)[0];
            if (r || /\S/.test(l.text)) {
                if ("smart" == n && ((u = o.mode.indent(i, l.text.slice(c.length), l.text)) == z || u > 150)) {
                    if (!r) return;
                    n = "prev"
                }
            } else u = 0, n = "not";
            "prev" == n ? u = t > o.first ? F(le(o, t - 1).text, null, a) : 0 : "add" == n ? u = s + e.options.indentUnit : "subtract" == n ? u = s - e.options.indentUnit : "number" == typeof n && (u = s + n), u = Math.max(0, u);
            var f = "", d = 0;
            if (e.options.indentWithTabs) for (var h = Math.floor(u / a); h; --h) d += a, f += "\t";
            if (d < u && (f += X(u - d)), f != c) return uo(o, f, ge(t, 0), ge(t, c.length), "+input"), l.stateAfter = null, !0;
            for (var p = 0; p < o.sel.ranges.length; p++) {
                var g = o.sel.ranges[p];
                if (g.head.line == t && g.head.ch < c.length) {
                    var m = ge(t, c.length);
                    Ui(o, p, new yi(m, m));
                    break
                }
            }
        }

        Sa.defineInitHook = function (e) {
            return Ta.push(e)
        };
        var Na = null;

        function Aa(e) {
            Na = e
        }

        function Ma(e, t, n, r, i) {
            var o = e.doc;
            e.display.shift = !1, r || (r = o.sel);
            var a, l = e.state.pasteIncoming || "paste" == i, s = bt(t), u = null;
            if (l && r.ranges.length > 1) if (Na && Na.text.join("\n") == t) {
                if (r.ranges.length % Na.text.length == 0) {
                    u = [];
                    for (var c = 0; c < Na.text.length; c++) u.push(o.splitLines(Na.text[c]))
                }
            } else s.length == r.ranges.length && e.options.pasteLinesPerSelection && (u = Y(s, function (e) {
                return [e]
            }));
            for (var f = r.ranges.length - 1; f >= 0; f--) {
                var d = r.ranges[f], h = d.from(), p = d.to();
                d.empty() && (n && n > 0 ? h = ge(h.line, h.ch - n) : e.state.overwrite && !l ? p = ge(p.line, Math.min(le(o, p.line).text.length, p.ch + K(s).length)) : Na && Na.lineWise && Na.text.join("\n") == t && (h = p = ge(h.line, 0))), a = e.curOp.updateInput;
                var g = {
                    from: h,
                    to: p,
                    text: u ? u[f % u.length] : s,
                    origin: i || (l ? "paste" : e.state.cutIncoming ? "cut" : "+input")
                };
                io(e.doc, g), ln(e, "inputRead", e, g)
            }
            t && !l && Ea(e, t), Tr(e), e.curOp.updateInput = a, e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = !1
        }

        function Oa(e, t) {
            var n = e.clipboardData && e.clipboardData.getData("Text");
            if (n) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || Gr(t, function () {
                return Ma(t, n, 0, null, "paste")
            }), !0
        }

        function Ea(e, t) {
            if (e.options.electricChars && e.options.smartIndent) for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
                var i = n.ranges[r];
                if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
                    var o = e.getModeAt(i.head), a = !1;
                    if (o.electricChars) {
                        for (var l = 0; l < o.electricChars.length; l++) if (t.indexOf(o.electricChars.charAt(l)) > -1) {
                            a = La(e, i.head.line, "smart");
                            break
                        }
                    } else o.electricInput && o.electricInput.test(le(e.doc, i.head.line).text.slice(0, i.head.ch)) && (a = La(e, i.head.line, "smart"));
                    a && ln(e, "electricInput", e, i.head.line)
                }
            }
        }

        function Da(e) {
            for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
                var i = e.doc.sel.ranges[r].head.line, o = {anchor: ge(i, 0), head: ge(i + 1, 0)};
                n.push(o), t.push(e.getRange(o.anchor, o.head))
            }
            return {text: t, ranges: n}
        }

        function Pa(e, t) {
            e.setAttribute("autocorrect", "off"), e.setAttribute("autocapitalize", "off"), e.setAttribute("spellcheck", !!t)
        }

        function Ha() {
            var e = M("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
                t = M("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
            return s ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), g && (e.style.border = "1px solid black"), Pa(e), t
        }

        function Ra(e, t, n, r, i) {
            var o = t, a = n, l = le(e, t.line);

            function s(r) {
                var o;
                if (null == (o = i ? function (e, t, n, r) {
                    var i = Je(t, e.doc.direction);
                    if (!i) return Xo(t, n, r);
                    n.ch >= t.text.length ? (n.ch = t.text.length, n.sticky = "before") : n.ch <= 0 && (n.ch = 0, n.sticky = "after");
                    var o = Ye(i, n.ch, n.sticky), a = i[o];
                    if ("ltr" == e.doc.direction && a.level % 2 == 0 && (r > 0 ? a.to > n.ch : a.from < n.ch)) return Xo(t, n, r);
                    var l, s = function (e, n) {
                        return Go(t, e instanceof ge ? e.ch : e, n)
                    }, u = function (n) {
                        return e.options.lineWrapping ? (l = l || En(e, t), Qn(e, t, l, n)) : {
                            begin: 0,
                            end: t.text.length
                        }
                    }, c = u("before" == n.sticky ? s(n, -1) : n.ch);
                    if ("rtl" == e.doc.direction || 1 == a.level) {
                        var f = 1 == a.level == r < 0, d = s(n, f ? 1 : -1);
                        if (null != d && (f ? d <= a.to && d <= c.end : d >= a.from && d >= c.begin)) {
                            var h = f ? "before" : "after";
                            return new ge(n.line, d, h)
                        }
                    }
                    var p = function (e, t, r) {
                        for (var o = function (e, t) {
                            return t ? new ge(n.line, s(e, 1), "before") : new ge(n.line, e, "after")
                        }; e >= 0 && e < i.length; e += t) {
                            var a = i[e], l = t > 0 == (1 != a.level), u = l ? r.begin : s(r.end, -1);
                            if (a.from <= u && u < a.to) return o(u, l);
                            if (u = l ? a.from : s(a.to, -1), r.begin <= u && u < r.end) return o(u, l)
                        }
                    }, g = p(o + r, r, c);
                    if (g) return g;
                    var m = r > 0 ? c.end : s(c.begin, -1);
                    return null == m || r > 0 && m == t.text.length || !(g = p(r > 0 ? 0 : i.length - 1, r, u(m))) ? null : g
                }(e.cm, l, t, n) : Xo(l, t, n))) {
                    if (r || !function () {
                        var r = t.line + n;
                        return !(r < e.first || r >= e.first + e.size) && (t = new ge(r, t.ch, t.sticky), l = le(e, r))
                    }()) return !1;
                    t = Ko(i, e.cm, l, t.line, n)
                } else t = o;
                return !0
            }

            if ("char" == r) s(); else if ("column" == r) s(!0); else if ("word" == r || "group" == r) for (var u = null, c = "group" == r, f = e.cm && e.cm.getHelper(t, "wordChars"), d = !0; !(n < 0) || s(!d); d = !1) {
                var h = l.text.charAt(t.ch) || "\n",
                    p = te(h, f) ? "w" : c && "\n" == h ? "n" : !c || /\s/.test(h) ? null : "p";
                if (!c || d || p || (p = "s"), u && u != p) {
                    n < 0 && (n = 1, s(), t.sticky = "after");
                    break
                }
                if (p && (u = p), n > 0 && !s(!d)) break
            }
            var g = eo(e, t, o, a, !0);
            return ve(o, g) && (g.hitSide = !0), g
        }

        function Ia(e, t, n, r) {
            var i, o, a = e.doc, l = t.left;
            if ("page" == r) {
                var s = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                    u = Math.max(s - .5 * er(e.display), 3);
                i = (n > 0 ? t.bottom : t.top) + n * u
            } else "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);
            for (; (o = Kn(e, l, i)).outside;) {
                if (n < 0 ? i <= 0 : i >= a.height) {
                    o.hitSide = !0;
                    break
                }
                i += 5 * n
            }
            return o
        }

        var Wa = function (e) {
            this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new j, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null
        };

        function Fa(e, t) {
            var n = On(e, t.line);
            if (!n || n.hidden) return null;
            var r = le(e.doc, t.line), i = An(n, r, t.line), o = Je(r, e.doc.direction), a = "left";
            o && (a = Ye(o, t.ch) % 2 ? "right" : "left");
            var l = Rn(i.map, t.ch, a);
            return l.offset = "right" == l.collapse ? l.end : l.start, l
        }

        function ja(e, t) {
            return t && (e.bad = !0), e
        }

        function _a(e, t, n) {
            var r;
            if (t == e.display.lineDiv) {
                if (!(r = e.display.lineDiv.childNodes[n])) return ja(e.clipPos(ge(e.display.viewTo - 1)), !0);
                t = null, n = 0
            } else for (r = t; ; r = r.parentNode) {
                if (!r || r == e.display.lineDiv) return null;
                if (r.parentNode && r.parentNode == e.display.lineDiv) break
            }
            for (var i = 0; i < e.display.view.length; i++) {
                var o = e.display.view[i];
                if (o.node == r) return Ba(o, t, n)
            }
        }

        function Ba(e, t, n) {
            var r = e.text.firstChild, i = !1;
            if (!t || !E(r, t)) return ja(ge(fe(e.line), 0), !0);
            if (t == r && (i = !0, t = r.childNodes[n], n = 0, !t)) {
                var o = e.rest ? K(e.rest) : e.line;
                return ja(ge(fe(o), o.text.length), i)
            }
            var a = 3 == t.nodeType ? t : null, l = t;
            for (a || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (a = t.firstChild, n && (n = a.nodeValue.length)); l.parentNode != r;) l = l.parentNode;
            var s = e.measure, u = s.maps;

            function c(t, n, r) {
                for (var i = -1; i < (u ? u.length : 0); i++) for (var o = i < 0 ? s.map : u[i], a = 0; a < o.length; a += 3) {
                    var l = o[a + 2];
                    if (l == t || l == n) {
                        var c = fe(i < 0 ? e.line : e.rest[i]), f = o[a] + r;
                        return (r < 0 || l != t) && (f = o[a + (r ? 1 : 0)]), ge(c, f)
                    }
                }
            }

            var f = c(a, l, n);
            if (f) return ja(f, i);
            for (var d = l.nextSibling, h = a ? a.nodeValue.length - n : 0; d; d = d.nextSibling) {
                if (f = c(d, d.firstChild, 0)) return ja(ge(f.line, f.ch - h), i);
                h += d.textContent.length
            }
            for (var p = l.previousSibling, g = n; p; p = p.previousSibling) {
                if (f = c(p, p.firstChild, -1)) return ja(ge(f.line, f.ch + g), i);
                g += p.textContent.length
            }
        }

        Wa.prototype.init = function (e) {
            var t = this, n = this, r = n.cm, i = n.div = e.lineDiv;

            function o(e) {
                if (!it(r, e)) {
                    if (r.somethingSelected()) Aa({
                        lineWise: !1,
                        text: r.getSelections()
                    }), "cut" == e.type && r.replaceSelection("", null, "cut"); else {
                        if (!r.options.lineWiseCopyCut) return;
                        var t = Da(r);
                        Aa({lineWise: !0, text: t.text}), "cut" == e.type && r.operation(function () {
                            r.setSelections(t.ranges, 0, q), r.replaceSelection("", null, "cut")
                        })
                    }
                    if (e.clipboardData) {
                        e.clipboardData.clearData();
                        var o = Na.text.join("\n");
                        if (e.clipboardData.setData("Text", o), e.clipboardData.getData("Text") == o) return void e.preventDefault()
                    }
                    var a = Ha(), l = a.firstChild;
                    r.display.lineSpace.insertBefore(a, r.display.lineSpace.firstChild), l.value = Na.text.join("\n");
                    var s = document.activeElement;
                    R(l), setTimeout(function () {
                        r.display.lineSpace.removeChild(a), s.focus(), s == i && n.showPrimarySelection()
                    }, 50)
                }
            }

            Pa(i, r.options.spellcheck), et(i, "paste", function (e) {
                it(r, e) || Oa(e, r) || l <= 11 && setTimeout(Xr(r, function () {
                    return t.updateFromDOM()
                }), 20)
            }), et(i, "compositionstart", function (e) {
                t.composing = {data: e.data, done: !1}
            }), et(i, "compositionupdate", function (e) {
                t.composing || (t.composing = {data: e.data, done: !1})
            }), et(i, "compositionend", function (e) {
                t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = !0)
            }), et(i, "touchstart", function () {
                return n.forceCompositionEnd()
            }), et(i, "input", function () {
                t.composing || t.readFromDOMSoon()
            }), et(i, "copy", o), et(i, "cut", o)
        }, Wa.prototype.prepareSelection = function () {
            var e = ur(this.cm, !1);
            return e.focus = this.cm.state.focused, e
        }, Wa.prototype.showSelection = function (e, t) {
            e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e))
        }, Wa.prototype.getSelection = function () {
            return this.cm.display.wrapper.ownerDocument.getSelection()
        }, Wa.prototype.showPrimarySelection = function () {
            var e = this.getSelection(), t = this.cm, r = t.doc.sel.primary(), i = r.from(), o = r.to();
            if (t.display.viewTo == t.display.viewFrom || i.line >= t.display.viewTo || o.line < t.display.viewFrom) e.removeAllRanges(); else {
                var a = _a(t, e.anchorNode, e.anchorOffset), l = _a(t, e.focusNode, e.focusOffset);
                if (!a || a.bad || !l || l.bad || 0 != me(xe(a, l), i) || 0 != me(be(a, l), o)) {
                    var s = t.display.view,
                        u = i.line >= t.display.viewFrom && Fa(t, i) || {node: s[0].measure.map[2], offset: 0},
                        c = o.line < t.display.viewTo && Fa(t, o);
                    if (!c) {
                        var f = s[s.length - 1].measure, d = f.maps ? f.maps[f.maps.length - 1] : f.map;
                        c = {node: d[d.length - 1], offset: d[d.length - 2] - d[d.length - 3]}
                    }
                    if (u && c) {
                        var h, p = e.rangeCount && e.getRangeAt(0);
                        try {
                            h = T(u.node, u.offset, c.offset, c.node)
                        } catch (e) {
                        }
                        h && (!n && t.state.focused ? (e.collapse(u.node, u.offset), h.collapsed || (e.removeAllRanges(), e.addRange(h))) : (e.removeAllRanges(), e.addRange(h)), p && null == e.anchorNode ? e.addRange(p) : n && this.startGracePeriod()), this.rememberSelection()
                    } else e.removeAllRanges()
                }
            }
        }, Wa.prototype.startGracePeriod = function () {
            var e = this;
            clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function () {
                e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function () {
                    return e.cm.curOp.selectionChanged = !0
                })
            }, 20)
        }, Wa.prototype.showMultipleSelections = function (e) {
            A(this.cm.display.cursorDiv, e.cursors), A(this.cm.display.selectionDiv, e.selection)
        }, Wa.prototype.rememberSelection = function () {
            var e = this.getSelection();
            this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset
        }, Wa.prototype.selectionInEditor = function () {
            var e = this.getSelection();
            if (!e.rangeCount) return !1;
            var t = e.getRangeAt(0).commonAncestorContainer;
            return E(this.div, t)
        }, Wa.prototype.focus = function () {
            "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() || this.showSelection(this.prepareSelection(), !0), this.div.focus())
        }, Wa.prototype.blur = function () {
            this.div.blur()
        }, Wa.prototype.getField = function () {
            return this.div
        }, Wa.prototype.supportsTouch = function () {
            return !0
        }, Wa.prototype.receivedFocus = function () {
            var e = this;
            this.selectionInEditor() ? this.pollSelection() : Gr(this.cm, function () {
                return e.cm.curOp.selectionChanged = !0
            }), this.polling.set(this.cm.options.pollInterval, function t() {
                e.cm.state.focused && (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, t))
            })
        }, Wa.prototype.selectionChanged = function () {
            var e = this.getSelection();
            return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
        }, Wa.prototype.pollSelection = function () {
            if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
                var e = this.getSelection(), t = this.cm;
                if (m && c && this.cm.options.gutters.length && function (e) {
                    for (var t = e; t; t = t.parentNode) if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
                    return !1
                }(e.anchorNode)) return this.cm.triggerOnKeyDown({
                    type: "keydown",
                    keyCode: 8,
                    preventDefault: Math.abs
                }), this.blur(), void this.focus();
                if (!this.composing) {
                    this.rememberSelection();
                    var n = _a(t, e.anchorNode, e.anchorOffset), r = _a(t, e.focusNode, e.focusOffset);
                    n && r && Gr(t, function () {
                        Xi(t.doc, xi(n, r), q), (n.bad || r.bad) && (t.curOp.selectionChanged = !0)
                    })
                }
            }
        }, Wa.prototype.pollContent = function () {
            null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
            var e, t, n, r = this.cm, i = r.display, o = r.doc.sel.primary(), a = o.from(), l = o.to();
            if (0 == a.ch && a.line > r.firstLine() && (a = ge(a.line - 1, le(r.doc, a.line - 1).length)), l.ch == le(r.doc, l.line).text.length && l.line < r.lastLine() && (l = ge(l.line + 1, 0)), a.line < i.viewFrom || l.line > i.viewTo - 1) return !1;
            a.line == i.viewFrom || 0 == (e = lr(r, a.line)) ? (t = fe(i.view[0].line), n = i.view[0].node) : (t = fe(i.view[e].line), n = i.view[e - 1].node.nextSibling);
            var s, u, c = lr(r, l.line);
            if (c == i.view.length - 1 ? (s = i.viewTo - 1, u = i.lineDiv.lastChild) : (s = fe(i.view[c + 1].line) - 1, u = i.view[c + 1].node.previousSibling), !n) return !1;
            for (var f = r.doc.splitLines(function (e, t, n, r, i) {
                var o = "", a = !1, l = e.doc.lineSeparator(), s = !1;

                function u() {
                    a && (o += l, s && (o += l), a = s = !1)
                }

                function c(e) {
                    e && (u(), o += e)
                }

                function f(t) {
                    if (1 == t.nodeType) {
                        var n = t.getAttribute("cm-text");
                        if (n) return void c(n);
                        var o, d = t.getAttribute("cm-marker");
                        if (d) {
                            var h = e.findMarks(ge(r, 0), ge(i + 1, 0), function (e) {
                                return function (t) {
                                    return t.id == e
                                }
                            }(+d));
                            return void (h.length && (o = h[0].find(0)) && c(se(e.doc, o.from, o.to).join(l)))
                        }
                        if ("false" == t.getAttribute("contenteditable")) return;
                        var p = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                        if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
                        p && u();
                        for (var g = 0; g < t.childNodes.length; g++) f(t.childNodes[g]);
                        /^(pre|p)$/i.test(t.nodeName) && (s = !0), p && (a = !0)
                    } else 3 == t.nodeType && c(t.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "))
                }

                for (; f(t), t != n;) t = t.nextSibling, s = !1;
                return o
            }(r, n, u, t, s)), d = se(r.doc, ge(t, 0), ge(s, le(r.doc, s).text.length)); f.length > 1 && d.length > 1;) if (K(f) == K(d)) f.pop(), d.pop(), s--; else {
                if (f[0] != d[0]) break;
                f.shift(), d.shift(), t++
            }
            for (var h = 0, p = 0, g = f[0], m = d[0], v = Math.min(g.length, m.length); h < v && g.charCodeAt(h) == m.charCodeAt(h);) ++h;
            for (var y = K(f), b = K(d), x = Math.min(y.length - (1 == f.length ? h : 0), b.length - (1 == d.length ? h : 0)); p < x && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);) ++p;
            if (1 == f.length && 1 == d.length && t == a.line) for (; h && h > a.ch && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);) h--, p++;
            f[f.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, ""), f[0] = f[0].slice(h).replace(/\u200b+$/, "");
            var w = ge(t, h), k = ge(s, d.length ? K(d).length - p : 0);
            return f.length > 1 || f[0] || me(w, k) ? (uo(r.doc, f, w, k, "+input"), !0) : void 0
        }, Wa.prototype.ensurePolled = function () {
            this.forceCompositionEnd()
        }, Wa.prototype.reset = function () {
            this.forceCompositionEnd()
        }, Wa.prototype.forceCompositionEnd = function () {
            this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus())
        }, Wa.prototype.readFromDOMSoon = function () {
            var e = this;
            null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function () {
                if (e.readDOMTimeout = null, e.composing) {
                    if (!e.composing.done) return;
                    e.composing = null
                }
                e.updateFromDOM()
            }, 80))
        }, Wa.prototype.updateFromDOM = function () {
            var e = this;
            !this.cm.isReadOnly() && this.pollContent() || Gr(this.cm, function () {
                return Qr(e.cm)
            })
        }, Wa.prototype.setUneditable = function (e) {
            e.contentEditable = "false"
        }, Wa.prototype.onKeyPress = function (e) {
            0 == e.charCode || this.composing || (e.preventDefault(), this.cm.isReadOnly() || Xr(this.cm, Ma)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0))
        }, Wa.prototype.readOnlyChanged = function (e) {
            this.div.contentEditable = String("nocursor" != e)
        }, Wa.prototype.onContextMenu = function () {
        }, Wa.prototype.resetPosition = function () {
        }, Wa.prototype.needsContentAttribute = !0;
        var za = function (e) {
            this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new j, this.hasSelection = !1, this.composing = null
        };
        za.prototype.init = function (e) {
            var t = this, n = this, r = this.cm;
            this.createField(e);
            var i = this.textarea;

            function o(e) {
                if (!it(r, e)) {
                    if (r.somethingSelected()) Aa({lineWise: !1, text: r.getSelections()}); else {
                        if (!r.options.lineWiseCopyCut) return;
                        var t = Da(r);
                        Aa({
                            lineWise: !0,
                            text: t.text
                        }), "cut" == e.type ? r.setSelections(t.ranges, null, q) : (n.prevInput = "", i.value = t.text.join("\n"), R(i))
                    }
                    "cut" == e.type && (r.state.cutIncoming = !0)
                }
            }

            e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), g && (i.style.width = "0px"), et(i, "input", function () {
                a && l >= 9 && t.hasSelection && (t.hasSelection = null), n.poll()
            }), et(i, "paste", function (e) {
                it(r, e) || Oa(e, r) || (r.state.pasteIncoming = !0, n.fastPoll())
            }), et(i, "cut", o), et(i, "copy", o), et(e.scroller, "paste", function (t) {
                wn(e, t) || it(r, t) || (r.state.pasteIncoming = !0, n.focus())
            }), et(e.lineSpace, "selectstart", function (t) {
                wn(e, t) || st(t)
            }), et(i, "compositionstart", function () {
                var e = r.getCursor("from");
                n.composing && n.composing.range.clear(), n.composing = {
                    start: e,
                    range: r.markText(e, r.getCursor("to"), {className: "CodeMirror-composing"})
                }
            }), et(i, "compositionend", function () {
                n.composing && (n.poll(), n.composing.range.clear(), n.composing = null)
            })
        }, za.prototype.createField = function (e) {
            this.wrapper = Ha(), this.textarea = this.wrapper.firstChild
        }, za.prototype.prepareSelection = function () {
            var e = this.cm, t = e.display, n = e.doc, r = ur(e);
            if (e.options.moveInputWithCursor) {
                var i = Vn(e, n.sel.primary().head, "div"), o = t.wrapper.getBoundingClientRect(),
                    a = t.lineDiv.getBoundingClientRect();
                r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top)), r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left))
            }
            return r
        }, za.prototype.showSelection = function (e) {
            var t = this.cm.display;
            A(t.cursorDiv, e.cursors), A(t.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px")
        }, za.prototype.reset = function (e) {
            if (!this.contextMenuPending && !this.composing) {
                var t = this.cm;
                if (t.somethingSelected()) {
                    this.prevInput = "";
                    var n = t.getSelection();
                    this.textarea.value = n, t.state.focused && R(this.textarea), a && l >= 9 && (this.hasSelection = n)
                } else e || (this.prevInput = this.textarea.value = "", a && l >= 9 && (this.hasSelection = null))
            }
        }, za.prototype.getField = function () {
            return this.textarea
        }, za.prototype.supportsTouch = function () {
            return !1
        }, za.prototype.focus = function () {
            if ("nocursor" != this.cm.options.readOnly && (!v || D() != this.textarea)) try {
                this.textarea.focus()
            } catch (e) {
            }
        }, za.prototype.blur = function () {
            this.textarea.blur()
        }, za.prototype.resetPosition = function () {
            this.wrapper.style.top = this.wrapper.style.left = 0
        }, za.prototype.receivedFocus = function () {
            this.slowPoll()
        }, za.prototype.slowPoll = function () {
            var e = this;
            this.pollingFast || this.polling.set(this.cm.options.pollInterval, function () {
                e.poll(), e.cm.state.focused && e.slowPoll()
            })
        }, za.prototype.fastPoll = function () {
            var e = !1, t = this;
            t.pollingFast = !0, t.polling.set(20, function n() {
                t.poll() || e ? (t.pollingFast = !1, t.slowPoll()) : (e = !0, t.polling.set(60, n))
            })
        }, za.prototype.poll = function () {
            var e = this, t = this.cm, n = this.textarea, r = this.prevInput;
            if (this.contextMenuPending || !t.state.focused || xt(n) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
            var i = n.value;
            if (i == r && !t.somethingSelected()) return !1;
            if (a && l >= 9 && this.hasSelection === i || y && /[\uf700-\uf7ff]/.test(i)) return t.display.input.reset(), !1;
            if (t.doc.sel == t.display.selForContextMenu) {
                var o = i.charCodeAt(0);
                if (8203 != o || r || (r = "​"), 8666 == o) return this.reset(), this.cm.execCommand("undo")
            }
            for (var s = 0, u = Math.min(r.length, i.length); s < u && r.charCodeAt(s) == i.charCodeAt(s);) ++s;
            return Gr(t, function () {
                Ma(t, i.slice(s), r.length - s, null, e.composing ? "*compose" : null), i.length > 1e3 || i.indexOf("\n") > -1 ? n.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {className: "CodeMirror-composing"}))
            }), !0
        }, za.prototype.ensurePolled = function () {
            this.pollingFast && this.poll() && (this.pollingFast = !1)
        }, za.prototype.onKeyPress = function () {
            a && l >= 9 && (this.hasSelection = null), this.fastPoll()
        }, za.prototype.onContextMenu = function (e) {
            var t = this, n = t.cm, r = n.display, i = t.textarea, o = ar(n, e), u = r.scroller.scrollTop;
            if (o && !f) {
                n.options.resetSelectionOnContextMenu && -1 == n.doc.sel.contains(o) && Xr(n, Xi)(n.doc, xi(o), q);
                var c = i.style.cssText, d = t.wrapper.style.cssText;
                t.wrapper.style.cssText = "position: absolute";
                var h, p = t.wrapper.getBoundingClientRect();
                if (i.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - p.top - 5) + "px; left: " + (e.clientX - p.left - 5) + "px;\n      z-index: 1000; background: " + (a ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", s && (h = window.scrollY), r.input.focus(), s && window.scrollTo(null, h), r.input.reset(), n.somethingSelected() || (i.value = t.prevInput = " "), t.contextMenuPending = !0, r.selForContextMenu = n.doc.sel, clearTimeout(r.detectingSelectAll), a && l >= 9 && m(), C) {
                    ft(e);
                    var g = function () {
                        nt(window, "mouseup", g), setTimeout(v, 20)
                    };
                    et(window, "mouseup", g)
                } else setTimeout(v, 50)
            }

            function m() {
                if (null != i.selectionStart) {
                    var e = n.somethingSelected(), o = "​" + (e ? i.value : "");
                    i.value = "⇚", i.value = o, t.prevInput = e ? "" : "​", i.selectionStart = 1, i.selectionEnd = o.length, r.selForContextMenu = n.doc.sel
                }
            }

            function v() {
                if (t.contextMenuPending = !1, t.wrapper.style.cssText = d, i.style.cssText = c, a && l < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = u), null != i.selectionStart) {
                    (!a || a && l < 9) && m();
                    var e = 0, o = function () {
                        r.selForContextMenu == n.doc.sel && 0 == i.selectionStart && i.selectionEnd > 0 && "​" == t.prevInput ? Xr(n, no)(n) : e++ < 10 ? r.detectingSelectAll = setTimeout(o, 500) : (r.selForContextMenu = null, r.input.reset())
                    };
                    r.detectingSelectAll = setTimeout(o, 200)
                }
            }
        }, za.prototype.readOnlyChanged = function (e) {
            e || this.reset(), this.textarea.disabled = "nocursor" == e
        }, za.prototype.setUneditable = function () {
        }, za.prototype.needsContentAttribute = !1, function (e) {
            var t = e.optionHandlers;

            function n(n, r, i, o) {
                e.defaults[n] = r, i && (t[n] = o ? function (e, t, n) {
                    n != ya && i(e, t, n)
                } : i)
            }

            e.defineOption = n, e.Init = ya, n("value", "", function (e, t) {
                return e.setValue(t)
            }, !0), n("mode", null, function (e, t) {
                e.doc.modeOption = t, Ti(e)
            }, !0), n("indentUnit", 2, Ti, !0), n("indentWithTabs", !1), n("smartIndent", !0), n("tabSize", 4, function (e) {
                Li(e), jn(e), Qr(e)
            }, !0), n("lineSeparator", null, function (e, t) {
                if (e.doc.lineSep = t, t) {
                    var n = [], r = e.doc.first;
                    e.doc.iter(function (e) {
                        for (var i = 0; ;) {
                            var o = e.text.indexOf(t, i);
                            if (-1 == o) break;
                            i = o + t.length, n.push(ge(r, o))
                        }
                        r++
                    });
                    for (var i = n.length - 1; i >= 0; i--) uo(e.doc, t, n[i], ge(n[i].line, n[i].ch + t.length))
                }
            }), n("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function (e, t, n) {
                e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), n != ya && e.refresh()
            }), n("specialCharPlaceholder", Qt, function (e) {
                return e.refresh()
            }, !0), n("electricChars", !0), n("inputStyle", v ? "contenteditable" : "textarea", function () {
                throw new Error("inputStyle can not (yet) be changed in a running editor")
            }, !0), n("spellcheck", !1, function (e, t) {
                return e.getInputField().spellcheck = t
            }, !0), n("rtlMoveVisually", !x), n("wholeLineUpdateBefore", !0), n("theme", "default", function (e) {
                va(e), wa(e)
            }, !0), n("keyMap", "default", function (e, t, n) {
                var r = Uo(t), i = n != ya && Uo(n);
                i && i.detach && i.detach(e, r), r.attach && r.attach(e, i || null)
            }), n("extraKeys", null), n("configureMouse", null), n("lineWrapping", !1, Ca, !0), n("gutters", [], function (e) {
                fi(e.options), wa(e)
            }, !0), n("fixedGutter", !0, function (e, t) {
                e.display.gutters.style.left = t ? rr(e.display) + "px" : "0", e.refresh()
            }, !0), n("coverGutterNextToScrollbar", !1, function (e) {
                return Rr(e)
            }, !0), n("scrollbarStyle", "native", function (e) {
                Fr(e), Rr(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
            }, !0), n("lineNumbers", !1, function (e) {
                fi(e.options), wa(e)
            }, !0), n("firstLineNumber", 1, wa, !0), n("lineNumberFormatter", function (e) {
                return e
            }, wa, !0), n("showCursorWhenSelecting", !1, sr, !0), n("resetSelectionOnContextMenu", !0), n("lineWiseCopyCut", !0), n("pasteLinesPerSelection", !0), n("readOnly", !1, function (e, t) {
                "nocursor" == t && (vr(e), e.display.input.blur()), e.display.input.readOnlyChanged(t)
            }), n("disableInput", !1, function (e, t) {
                t || e.display.input.reset()
            }, !0), n("dragDrop", !0, ka), n("allowDropFileTypes", null), n("cursorBlinkRate", 530), n("cursorScrollMargin", 0), n("cursorHeight", 1, sr, !0), n("singleCursorHeightPerLine", !0, sr, !0), n("workTime", 100), n("workDelay", 100), n("flattenSpans", !0, Li, !0), n("addModeClass", !1, Li, !0), n("pollInterval", 100), n("undoDepth", 200, function (e, t) {
                return e.doc.history.undoDepth = t
            }), n("historyEventDelay", 1250), n("viewportMargin", 10, function (e) {
                return e.refresh()
            }, !0), n("maxHighlightLength", 1e4, Li, !0), n("moveInputWithCursor", !0, function (e, t) {
                t || e.display.input.resetPosition()
            }), n("tabindex", null, function (e, t) {
                return e.display.input.getField().tabIndex = t || ""
            }), n("autofocus", null), n("direction", "ltr", function (e, t) {
                return e.doc.setDirection(t)
            }, !0), n("phrases", null)
        }(Sa), function (e) {
            var t = e.optionHandlers, n = e.helpers = {};
            e.prototype = {
                constructor: e,
                focus: function () {
                    window.focus(), this.display.input.focus()
                },
                setOption: function (e, n) {
                    var r = this.options, i = r[e];
                    r[e] == n && "mode" != e || (r[e] = n, t.hasOwnProperty(e) && Xr(this, t[e])(this, n, i), rt(this, "optionChange", this, e))
                },
                getOption: function (e) {
                    return this.options[e]
                },
                getDoc: function () {
                    return this.doc
                },
                addKeyMap: function (e, t) {
                    this.state.keyMaps[t ? "push" : "unshift"](Uo(e))
                },
                removeKeyMap: function (e) {
                    for (var t = this.state.keyMaps, n = 0; n < t.length; ++n) if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0
                },
                addOverlay: Kr(function (t, n) {
                    var r = t.token ? t : e.getMode(this.options, t);
                    if (r.startState) throw new Error("Overlays may not be stateful.");
                    !function (e, t, n) {
                        for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i;) r++;
                        e.splice(r, 0, t)
                    }(this.state.overlays, {
                        mode: r,
                        modeSpec: t,
                        opaque: n && n.opaque,
                        priority: n && n.priority || 0
                    }, function (e) {
                        return e.priority
                    }), this.state.modeGen++, Qr(this)
                }),
                removeOverlay: Kr(function (e) {
                    for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
                        var r = t[n].modeSpec;
                        if (r == e || "string" == typeof e && r.name == e) return t.splice(n, 1), this.state.modeGen++, void Qr(this)
                    }
                }),
                indentLine: Kr(function (e, t, n) {
                    "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), he(this.doc, e) && La(this, e, t, n)
                }),
                indentSelection: Kr(function (e) {
                    for (var t = this.doc.sel.ranges, n = -1, r = 0; r < t.length; r++) {
                        var i = t[r];
                        if (i.empty()) i.head.line > n && (La(this, i.head.line, e, !0), n = i.head.line, r == this.doc.sel.primIndex && Tr(this)); else {
                            var o = i.from(), a = i.to(), l = Math.max(n, o.line);
                            n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                            for (var s = l; s < n; ++s) La(this, s, e);
                            var u = this.doc.sel.ranges;
                            0 == o.ch && t.length == u.length && u[r].from().ch > 0 && Ui(this.doc, r, new yi(o, u[r].to()), q)
                        }
                    }
                }),
                getTokenAt: function (e, t) {
                    return zt(this, e, t)
                },
                getLineTokens: function (e, t) {
                    return zt(this, ge(e), t, !0)
                },
                getTokenTypeAt: function (e) {
                    e = ke(this.doc, e);
                    var t, n = It(this, le(this.doc, e.line)), r = 0, i = (n.length - 1) / 2, o = e.ch;
                    if (0 == o) t = n[2]; else for (; ;) {
                        var a = r + i >> 1;
                        if ((a ? n[2 * a - 1] : 0) >= o) i = a; else {
                            if (!(n[2 * a + 1] < o)) {
                                t = n[2 * a + 2];
                                break
                            }
                            r = a + 1
                        }
                    }
                    var l = t ? t.indexOf("overlay ") : -1;
                    return l < 0 ? t : 0 == l ? null : t.slice(0, l - 1)
                },
                getModeAt: function (t) {
                    var n = this.doc.mode;
                    return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n
                },
                getHelper: function (e, t) {
                    return this.getHelpers(e, t)[0]
                },
                getHelpers: function (e, t) {
                    var r = [];
                    if (!n.hasOwnProperty(t)) return r;
                    var i = n[t], o = this.getModeAt(e);
                    if ("string" == typeof o[t]) i[o[t]] && r.push(i[o[t]]); else if (o[t]) for (var a = 0; a < o[t].length; a++) {
                        var l = i[o[t][a]];
                        l && r.push(l)
                    } else o.helperType && i[o.helperType] ? r.push(i[o.helperType]) : i[o.name] && r.push(i[o.name]);
                    for (var s = 0; s < i._global.length; s++) {
                        var u = i._global[s];
                        u.pred(o, this) && -1 == _(r, u.val) && r.push(u.val)
                    }
                    return r
                },
                getStateAfter: function (e, t) {
                    var n = this.doc;
                    return Wt(this, (e = we(n, null == e ? n.first + n.size - 1 : e)) + 1, t).state
                },
                cursorCoords: function (e, t) {
                    var n = this.doc.sel.primary();
                    return Vn(this, null == e ? n.head : "object" == typeof e ? ke(this.doc, e) : e ? n.from() : n.to(), t || "page")
                },
                charCoords: function (e, t) {
                    return Un(this, ke(this.doc, e), t || "page")
                },
                coordsChar: function (e, t) {
                    return Kn(this, (e = $n(this, e, t || "page")).left, e.top)
                },
                lineAtHeight: function (e, t) {
                    return e = $n(this, {top: e, left: 0}, t || "page").top, de(this.doc, e + this.display.viewOffset)
                },
                heightAtLine: function (e, t, n) {
                    var r, i = !1;
                    if ("number" == typeof e) {
                        var o = this.doc.first + this.doc.size - 1;
                        e < this.doc.first ? e = this.doc.first : e > o && (e = o, i = !0), r = le(this.doc, e)
                    } else r = e;
                    return qn(this, r, {top: 0, left: 0}, t || "page", n || i).top + (i ? this.doc.height - Ve(r) : 0)
                },
                defaultTextHeight: function () {
                    return er(this.display)
                },
                defaultCharWidth: function () {
                    return tr(this.display)
                },
                getViewport: function () {
                    return {from: this.display.viewFrom, to: this.display.viewTo}
                },
                addWidget: function (e, t, n, r, i) {
                    var o = this.display, a = (e = Vn(this, ke(this.doc, e))).bottom, l = e.left;
                    if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), o.sizer.appendChild(t), "over" == r) a = e.top; else if ("above" == r || "near" == r) {
                        var s = Math.max(o.wrapper.clientHeight, this.doc.height),
                            u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                        ("above" == r || e.bottom + t.offsetHeight > s) && e.top > t.offsetHeight ? a = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= s && (a = e.bottom), l + t.offsetWidth > u && (l = u - t.offsetWidth)
                    }
                    t.style.top = a + "px", t.style.left = t.style.right = "", "right" == i ? (l = o.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? l = 0 : "middle" == i && (l = (o.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = l + "px"), n && function (e, t) {
                        var n = Cr(e, t);
                        null != n.scrollTop && Mr(e, n.scrollTop), null != n.scrollLeft && Er(e, n.scrollLeft)
                    }(this, {left: l, top: a, right: l + t.offsetWidth, bottom: a + t.offsetHeight})
                },
                triggerOnKeyDown: Kr(oa),
                triggerOnKeyPress: Kr(la),
                triggerOnKeyUp: aa,
                triggerOnMouseDown: Kr(fa),
                execCommand: function (e) {
                    if (Yo.hasOwnProperty(e)) return Yo[e].call(null, this)
                },
                triggerElectric: Kr(function (e) {
                    Ea(this, e)
                }),
                findPosH: function (e, t, n, r) {
                    var i = 1;
                    t < 0 && (i = -1, t = -t);
                    for (var o = ke(this.doc, e), a = 0; a < t && !(o = Ra(this.doc, o, i, n, r)).hitSide; ++a) ;
                    return o
                },
                moveH: Kr(function (e, t) {
                    var n = this;
                    this.extendSelectionsBy(function (r) {
                        return n.display.shift || n.doc.extend || r.empty() ? Ra(n.doc, r.head, e, t, n.options.rtlMoveVisually) : e < 0 ? r.from() : r.to()
                    }, U)
                }),
                deleteH: Kr(function (e, t) {
                    var n = this.doc.sel, r = this.doc;
                    n.somethingSelected() ? r.replaceSelection("", null, "+delete") : Vo(this, function (n) {
                        var i = Ra(r, n.head, e, t, !1);
                        return e < 0 ? {from: i, to: n.head} : {from: n.head, to: i}
                    })
                }),
                findPosV: function (e, t, n, r) {
                    var i = 1, o = r;
                    t < 0 && (i = -1, t = -t);
                    for (var a = ke(this.doc, e), l = 0; l < t; ++l) {
                        var s = Vn(this, a, "div");
                        if (null == o ? o = s.left : s.left = o, (a = Ia(this, s, i, n)).hitSide) break
                    }
                    return a
                },
                moveV: Kr(function (e, t) {
                    var n = this, r = this.doc, i = [],
                        o = !this.display.shift && !r.extend && r.sel.somethingSelected();
                    if (r.extendSelectionsBy(function (a) {
                        if (o) return e < 0 ? a.from() : a.to();
                        var l = Vn(n, a.head, "div");
                        null != a.goalColumn && (l.left = a.goalColumn), i.push(l.left);
                        var s = Ia(n, l, e, t);
                        return "page" == t && a == r.sel.primary() && Sr(n, Un(n, s, "div").top - l.top), s
                    }, U), i.length) for (var a = 0; a < r.sel.ranges.length; a++) r.sel.ranges[a].goalColumn = i[a]
                }),
                findWordAt: function (e) {
                    var t = le(this.doc, e.line).text, n = e.ch, r = e.ch;
                    if (t) {
                        var i = this.getHelper(e, "wordChars");
                        "before" != e.sticky && r != t.length || !n ? ++r : --n;
                        for (var o = t.charAt(n), a = te(o, i) ? function (e) {
                            return te(e, i)
                        } : /\s/.test(o) ? function (e) {
                            return /\s/.test(e)
                        } : function (e) {
                            return !/\s/.test(e) && !te(e)
                        }; n > 0 && a(t.charAt(n - 1));) --n;
                        for (; r < t.length && a(t.charAt(r));) ++r
                    }
                    return new yi(ge(e.line, n), ge(e.line, r))
                },
                toggleOverwrite: function (e) {
                    null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? P(this.display.cursorDiv, "CodeMirror-overwrite") : L(this.display.cursorDiv, "CodeMirror-overwrite"), rt(this, "overwriteToggle", this, this.state.overwrite))
                },
                hasFocus: function () {
                    return this.display.input.getField() == D()
                },
                isReadOnly: function () {
                    return !(!this.options.readOnly && !this.doc.cantEdit)
                },
                scrollTo: Kr(function (e, t) {
                    Lr(this, e, t)
                }),
                getScrollInfo: function () {
                    var e = this.display.scroller;
                    return {
                        left: e.scrollLeft,
                        top: e.scrollTop,
                        height: e.scrollHeight - Tn(this) - this.display.barHeight,
                        width: e.scrollWidth - Tn(this) - this.display.barWidth,
                        clientHeight: Nn(this),
                        clientWidth: Ln(this)
                    }
                },
                scrollIntoView: Kr(function (e, t) {
                    null == e ? (e = {
                        from: this.doc.sel.primary().head,
                        to: null
                    }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
                        from: ge(e, 0),
                        to: null
                    } : null == e.from && (e = {
                        from: e,
                        to: null
                    }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line ? function (e, t) {
                        Nr(e), e.curOp.scrollToPos = t
                    }(this, e) : Ar(this, e.from, e.to, e.margin)
                }),
                setSize: Kr(function (e, t) {
                    var n = this, r = function (e) {
                        return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
                    };
                    null != e && (this.display.wrapper.style.width = r(e)), null != t && (this.display.wrapper.style.height = r(t)), this.options.lineWrapping && Fn(this);
                    var i = this.display.viewFrom;
                    this.doc.iter(i, this.display.viewTo, function (e) {
                        if (e.widgets) for (var t = 0; t < e.widgets.length; t++) if (e.widgets[t].noHScroll) {
                            Jr(n, i, "widget");
                            break
                        }
                        ++i
                    }), this.curOp.forceUpdate = !0, rt(this, "refresh", this)
                }),
                operation: function (e) {
                    return Gr(this, e)
                },
                startOperation: function () {
                    return _r(this)
                },
                endOperation: function () {
                    return Br(this)
                },
                refresh: Kr(function () {
                    var e = this.display.cachedTextHeight;
                    Qr(this), this.curOp.forceUpdate = !0, jn(this), Lr(this, this.doc.scrollLeft, this.doc.scrollTop), si(this), (null == e || Math.abs(e - er(this.display)) > .5) && or(this), rt(this, "refresh", this)
                }),
                swapDoc: Kr(function (e) {
                    var t = this.doc;
                    return t.cm = null, Oi(this, e), jn(this), this.display.input.reset(), Lr(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, ln(this, "swapDoc", this, t), t
                }),
                phrase: function (e) {
                    var t = this.options.phrases;
                    return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e
                },
                getInputField: function () {
                    return this.display.input.getField()
                },
                getWrapperElement: function () {
                    return this.display.wrapper
                },
                getScrollerElement: function () {
                    return this.display.scroller
                },
                getGutterElement: function () {
                    return this.display.gutters
                }
            }, lt(e), e.registerHelper = function (t, r, i) {
                n.hasOwnProperty(t) || (n[t] = e[t] = {_global: []}), n[t][r] = i
            }, e.registerGlobalHelper = function (t, r, i, o) {
                e.registerHelper(t, r, o), n[t]._global.push({pred: i, val: o})
            }
        }(Sa);
        var qa = "iter insert remove copy getEditor constructor".split(" ");
        for (var $a in Lo.prototype) Lo.prototype.hasOwnProperty($a) && _(qa, $a) < 0 && (Sa.prototype[$a] = function (e) {
            return function () {
                return e.apply(this.doc, arguments)
            }
        }(Lo.prototype[$a]));
        return lt(Lo), Sa.inputStyles = {textarea: za, contenteditable: Wa}, Sa.defineMode = function (e) {
            Sa.defaults.mode || "null" == e || (Sa.defaults.mode = e), function (e, t) {
                arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Ct[e] = t
            }.apply(this, arguments)
        }, Sa.defineMIME = function (e, t) {
            St[e] = t
        }, Sa.defineMode("null", function () {
            return {
                token: function (e) {
                    return e.skipToEnd()
                }
            }
        }), Sa.defineMIME("text/plain", "null"), Sa.defineExtension = function (e, t) {
            Sa.prototype[e] = t
        }, Sa.defineDocExtension = function (e, t) {
            Lo.prototype[e] = t
        }, Sa.fromTextArea = function (e, t) {
            if ((t = t ? W(t) : {}).value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus) {
                var n = D();
                t.autofocus = n == e || null != e.getAttribute("autofocus") && n == document.body
            }

            function r() {
                e.value = l.getValue()
            }

            var i;
            if (e.form && (et(e.form, "submit", r), !t.leaveSubmitMethodAlone)) {
                var o = e.form;
                i = o.submit;
                try {
                    var a = o.submit = function () {
                        r(), o.submit = i, o.submit(), o.submit = a
                    }
                } catch (e) {
                }
            }
            t.finishInit = function (t) {
                t.save = r, t.getTextArea = function () {
                    return e
                }, t.toTextArea = function () {
                    t.toTextArea = isNaN, r(), e.parentNode.removeChild(t.getWrapperElement()), e.style.display = "", e.form && (nt(e.form, "submit", r), "function" == typeof e.form.submit && (e.form.submit = i))
                }
            }, e.style.display = "none";
            var l = Sa(function (t) {
                return e.parentNode.insertBefore(t, e.nextSibling)
            }, t);
            return l
        }, function (e) {
            e.off = nt, e.on = et, e.wheelEventPixels = gi, e.Doc = Lo, e.splitLines = bt, e.countColumn = F, e.findColumn = V, e.isWordChar = ee, e.Pass = z, e.signal = rt, e.Line = Ut, e.changeEnd = wi, e.scrollbarModel = Wr, e.Pos = ge, e.cmpPos = me, e.modes = Ct, e.mimeModes = St, e.resolveMode = Tt, e.getMode = Lt, e.modeExtensions = Nt, e.extendMode = At, e.copyState = Mt, e.startState = Et, e.innerMode = Ot, e.commands = Yo, e.keyMap = Fo, e.keyName = $o, e.isModifierKey = zo, e.lookupKey = Bo, e.normalizeKeyMap = _o, e.StringStream = Dt, e.SharedTextMarker = ko, e.TextMarker = xo, e.LineWidget = vo, e.e_preventDefault = st, e.e_stopPropagation = ut, e.e_stop = ft, e.addClass = P, e.contains = E, e.rmClass = L, e.keyNames = Ho
        }(Sa), Sa.version = "5.40.2", Sa
    })
}, function (e, t, n) {
    var r = n(0);
    e.exports = (r.default || r).template({
        1: function (e, t, n, r, i) {
            return "checked"
        }, 3: function (e, t, n, r, i) {
            var o;
            return 'id="' + e.escapeExpression("function" == typeof (o = null != (o = n.id || (null != t ? t.id : t)) ? o : n.helperMissing) ? o.call(null != t ? t : e.nullContext || {}, {
                name: "id",
                hash: {},
                data: i
            }) : o) + '"'
        }, 5: function (e, t, n, r, i) {
            var o;
            return 'for="' + e.escapeExpression("function" == typeof (o = null != (o = n.id || (null != t ? t.id : t)) ? o : n.helperMissing) ? o.call(null != t ? t : e.nullContext || {}, {
                name: "id",
                hash: {},
                data: i
            }) : o) + '"'
        }, compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
            var o, a, l = null != t ? t : e.nullContext || {}, s = n.helperMissing, u = e.escapeExpression;
            return '<div class="control ' + u("function" == typeof (a = null != (a = n.classes || (null != t ? t.classes : t)) ? a : s) ? a.call(l, {
                name: "classes",
                hash: {},
                data: i
            }) : a) + '">\r\n    <input ' + (null != (o = n.if.call(l, null != t ? t.checked : t, {
                name: "if",
                hash: {},
                fn: e.program(1, i, 0),
                inverse: e.noop,
                data: i
            })) ? o : "") + " " + (null != (o = n.if.call(l, null != t ? t.id : t, {
                name: "if",
                hash: {},
                fn: e.program(3, i, 0),
                inverse: e.noop,
                data: i
            })) ? o : "") + ' name="' + u("function" == typeof (a = null != (a = n.name || (null != t ? t.name : t)) ? a : s) ? a.call(l, {
                name: "name",
                hash: {},
                data: i
            }) : a) + '" value="' + u("function" == typeof (a = null != (a = n.value || (null != t ? t.value : t)) ? a : s) ? a.call(l, {
                name: "value",
                hash: {},
                data: i
            }) : a) + '" type="radio" />\r\n    <label ' + (null != (o = n.if.call(l, null != t ? t.id : t, {
                name: "if",
                hash: {},
                fn: e.program(5, i, 0),
                inverse: e.noop,
                data: i
            })) ? o : "") + ">" + u("function" == typeof (a = null != (a = n.label || (null != t ? t.label : t)) ? a : s) ? a.call(l, {
                name: "label",
                hash: {},
                data: i
            }) : a) + "</label>\r\n</div>\r\n"
        }, useData: !0
    })
}, function (e, t, n) {
    var r = n(0);
    e.exports = (r.default || r).template({
        1: function (e, t, n, r, i) {
            var o = e.lambda, a = e.escapeExpression;
            return '                <a class="nav-item tab" data-type="' + a(o(null != t ? t.id : t, t)) + '" href="#tab-' + a(o(null != t ? t.id : t, t)) + '">' + a(o(null != t ? t.label : t, t)) + "</a>\r\n"
        }, 3: function (e, t, r, i, o, a, l) {
            var s, u = e.lambda, c = e.escapeExpression;
            return '                    <div class="tab-panel" id="tab-' + c(u(null != t ? t.id : t, t)) + '" data-type="' + c(u(null != t ? t.id : t, t)) + '">\r\n' + (null != (s = e.invokePartial(n(32), t, {
                name: "form",
                hash: {operators: null != l[1] ? l[1].operators : l[1], type: t},
                data: o,
                indent: "                        ",
                helpers: r,
                partials: i,
                decorators: e.decorators
            })) ? s : "") + "                    </div>\r\n"
        }, compiler: [7, ">= 4.0.0"], main: function (e, t, r, i, o, a, l) {
            var s, u = e.lambda, c = e.escapeExpression, f = null != t ? t : e.nullContext || {};
            return '<div id="wrapper">\r\n    <div id="nav-container">\r\n        <div class="logo">' + c(u(null != (s = null != t ? t.ui : t) ? s.logoText : s, t)) + '</div>\r\n        <nav class="nav">\r\n            <a class="nav-item tab" data-type="plain" href="#tab-plain">Plain</a>\r\n' + (null != (s = r.each.call(f, null != t ? t.types : t, {
                name: "each",
                hash: {},
                fn: e.program(1, o, 0, a, l),
                inverse: e.noop,
                data: o
            })) ? s : "") + '        </nav>\r\n    </div>\r\n\r\n    <div id="content-container">\r\n        <div id="left-container">\r\n            <div id="form-container">\r\n                <div class="tab-panel" id="tab-plain" data-type="plain">\r\n' + (null != (s = e.invokePartial(n(34), t, {
                name: "form-plain",
                data: o,
                indent: "                    ",
                helpers: r,
                partials: i,
                decorators: e.decorators
            })) ? s : "") + "                </div>\r\n" + (null != (s = r.each.call(f, null != t ? t.types : t, {
                name: "each",
                hash: {},
                fn: e.program(3, o, 0, a, l),
                inverse: e.noop,
                data: o
            })) ? s : "") + '                <div id="submit-container">\r\n                    <a class="copy-html btn" href="#">' + c(u(null != (s = null != t ? t.ui : t) ? s.copyHtmlText : s, t)) + '</a>\r\n                    <a id="submit-button" type="submit" class="submit btn" href="#">' + c(u(null != (s = null != t ? t.ui : t) ? s.submitText : s, t)) + '</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div id="right-container">\r\n            <div id="global-hint-container">\r\n                ' + c(u(null != (s = null != t ? t.ui : t) ? s.globalHintText : s, t)) + '\r\n            </div>\r\n            <div id="result-container">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
        }, usePartial: !0, useData: !0, useDepths: !0
    })
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    t.__esModule = !0, t.HandlebarsEnvironment = u;
    var i = n(1), o = r(n(2)), a = n(18), l = n(26), s = r(n(28));
    t.VERSION = "4.0.12";
    t.COMPILER_REVISION = 7;
    t.REVISION_CHANGES = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: "== 1.x.x",
        5: "== 2.0.0-alpha.x",
        6: ">= 2.0.0-beta.1",
        7: ">= 4.0.0"
    };

    function u(e, t, n) {
        this.helpers = e || {}, this.partials = t || {}, this.decorators = n || {}, a.registerDefaultHelpers(this), l.registerDefaultDecorators(this)
    }

    u.prototype = {
        constructor: u, logger: s.default, log: s.default.log, registerHelper: function (e, t) {
            if ("[object Object]" === i.toString.call(e)) {
                if (t) throw new o.default("Arg not supported with multiple helpers");
                i.extend(this.helpers, e)
            } else this.helpers[e] = t
        }, unregisterHelper: function (e) {
            delete this.helpers[e]
        }, registerPartial: function (e, t) {
            if ("[object Object]" === i.toString.call(e)) i.extend(this.partials, e); else {
                if (void 0 === t) throw new o.default('Attempting to register a partial called "' + e + '" as undefined');
                this.partials[e] = t
            }
        }, unregisterPartial: function (e) {
            delete this.partials[e]
        }, registerDecorator: function (e, t) {
            if ("[object Object]" === i.toString.call(e)) {
                if (t) throw new o.default("Arg not supported with multiple decorators");
                i.extend(this.decorators, e)
            } else this.decorators[e] = t
        }, unregisterDecorator: function (e) {
            delete this.decorators[e]
        }
    };
    var c = s.default.log;
    t.log = c, t.createFrame = i.createFrame, t.logger = s.default
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    var r = n(0);
    e.exports = (r.default || r).template({
        1: function (e, t, n, r, i) {
            var o;
            return 'class="' + e.escapeExpression("function" == typeof (o = null != (o = n.classes || (null != t ? t.classes : t)) ? o : n.helperMissing) ? o.call(null != t ? t : e.nullContext || {}, {
                name: "classes",
                hash: {},
                data: i
            }) : o) + '"'
        }, 3: function (e, t, n, r, i) {
            return 'selected="selected"'
        }, compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
            var o, a, l = null != t ? t : e.nullContext || {}, s = n.helperMissing, u = e.escapeExpression;
            return "<option " + (null != (o = n.if.call(l, null != t ? t.classes : t, {
                name: "if",
                hash: {},
                fn: e.program(1, i, 0),
                inverse: e.noop,
                data: i
            })) ? o : "") + ' value="' + u("function" == typeof (a = null != (a = n.key || (null != t ? t.key : t)) ? a : s) ? a.call(l, {
                name: "key",
                hash: {},
                data: i
            }) : a) + '" ' + (null != (o = (n.eq || t && t.eq || s).call(l, null != t ? t.index : t, 0, {
                name: "eq",
                hash: {},
                fn: e.program(3, i, 0),
                inverse: e.noop,
                data: i
            })) ? o : "") + ">\r\n    " + u("function" == typeof (a = null != (a = n.label || (null != t ? t.label : t)) ? a : s) ? a.call(l, {
                name: "label",
                hash: {},
                data: i
            }) : a) + "\r\n</option>"
        }, useData: !0
    })
}, function (e, t, n) {
    var r = n(0);
    e.exports = (r.default || r).template({
        1: function (e, t, n, r, i) {
            var o;
            return "        <th>" + e.escapeExpression("function" == typeof (o = null != (o = n.key || i && i.key) ? o : n.helperMissing) ? o.call(null != t ? t : e.nullContext || {}, {
                name: "key",
                hash: {},
                data: i
            }) : o) + "</th>\r\n"
        }, 3: function (e, t, n, r, i) {
            var o;
            return "            <tr>\r\n" + (null != (o = n.each.call(null != t ? t : e.nullContext || {}, t, {
                name: "each",
                hash: {},
                fn: e.program(4, i, 0),
                inverse: e.noop,
                data: i
            })) ? o : "") + "            </tr>\r\n"
        }, 4: function (e, t, n, r, i) {
            return "                    <td>" + e.escapeExpression(e.lambda(t, t)) + "</td>\r\n"
        }, compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
            var o, a, l = e.escapeExpression, s = null != t ? t : e.nullContext || {};
            return '<div class="summary">\r\n    <span class="num">' + l(e.lambda(null != (o = null != t ? t.result : t) ? o.length : o, t)) + ' results </span>\r\n    <span class="show-hint">(showing first ' + l("function" == typeof (a = null != (a = n.previewSize || (null != t ? t.previewSize : t)) ? a : n.helperMissing) ? a.call(s, {
                name: "previewSize",
                hash: {},
                data: i
            }) : a) + ')</span>\r\n    <a class="copy-result" href="#">Copy JSON</a>\r\n    <a class="showall" href="#">Show all</a>\r\n</div>\r\n<table id="result-table">\r\n    <thead>\r\n' + (null != (o = n.each.call(s, null != (o = null != t ? t.result : t) ? o[0] : o, {
                name: "each",
                hash: {},
                fn: e.program(1, i, 0),
                inverse: e.noop,
                data: i
            })) ? o : "") + "    </thead>\r\n    <tbody>\r\n" + (null != (o = n.each.call(s, null != t ? t.result : t, {
                name: "each",
                hash: {},
                fn: e.program(3, i, 0),
                inverse: e.noop,
                data: i
            })) ? o : "") + "    </tbody>\r\n</table>\r\n"
        }, useData: !0
    })
}, function (e, t, n) {
    var r = n(0);
    e.exports = (r.default || r).template({
        1: function (e, t, n, r, i) {
            var o;
            return "(" + e.escapeExpression("function" == typeof (o = null != (o = n.code || (null != t ? t.code : t)) ? o : n.helperMissing) ? o.call(null != t ? t : e.nullContext || {}, {
                name: "code",
                hash: {},
                data: i
            }) : o) + ")"
        }, compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
            var o, a, l = null != t ? t : e.nullContext || {};
            return '<div class="summary error">\r\n    <span>Error occurred</span>\r\n    <a class="copy-result" href="#">Copy JSON</a>\r\n</div>\r\n<div class="error-message">\r\n    ' + e.escapeExpression("function" == typeof (a = null != (a = n.message || (null != t ? t.message : t)) ? a : n.helperMissing) ? a.call(l, {
                name: "message",
                hash: {},
                data: i
            }) : a) + " " + (null != (o = n.if.call(l, null != t ? t.code : t, {
                name: "if",
                hash: {},
                fn: e.program(1, i, 0),
                inverse: e.noop,
                data: i
            })) ? o : "") + "\r\n</div>\r\n"
        }, useData: !0
    })
}, function (e, t) {
    e.exports = {
        operators: {
            conditions: [{key: "EQ", label: "EQ"}, {key: "GT", label: "GT"}, {
                key: "IS",
                label: "IS"
            }, {key: "LT", label: "LT"}],
            transformations: [{key: "COUNT", label: "COUNT"}, {key: "AVG", label: "AVG"}, {
                key: "MAX",
                label: "MAX"
            }, {key: "MIN", label: "MIN"}, {key: "SUM", label: "SUM"}]
        },
        types: {
            courses: {
                label: "Courses",
                id: "courses",
                fields: [{key: "audit", label: "Audit"}, {key: "avg", label: "Average"}, {
                    key: "dept",
                    label: "Department"
                }, {key: "fail", label: "Fail"}, {key: "id", label: "ID"}, {
                    key: "instructor",
                    label: "Instructor"
                }, {key: "pass", label: "Pass"}, {key: "title", label: "Title"}, {
                    key: "uuid",
                    label: "UUID"
                }, {key: "year", label: "Year"}]
            },
            rooms: {
                label: "Rooms",
                id: "rooms",
                fields: [{key: "address", label: "Address"}, {key: "fullname", label: "Full Name"}, {
                    key: "furniture",
                    label: "Furniture"
                }, {key: "href", label: "Link"}, {key: "lat", label: "Latitude"}, {
                    key: "lon",
                    label: "Longitude"
                }, {key: "name", label: "Name"}, {key: "number", label: "Number"}, {
                    key: "seats",
                    label: "Seats"
                }, {key: "shortname", label: "Short Name"}, {key: "type", label: "Type"}]
            }
        },
        ui: {
            logoText: "CampusExplorer",
            submitText: "Submit",
            copyHtmlText: "Copy HTML",
            globalHintText: "This UI may not handle all possible error cases correctly. When in doubt, please follow the spec!"
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), n.d(t, "InstructorModule", function () {
        return c
    });
    var r = n(37), i = n.n(r), o = n(5), a = n.n(o), l = n(38), s = n.n(l);
    const u = n(13);
    n(46), n(47), n(48), window._____jq_____ = i.a;
    let c = function (e) {
        const t = 15;
        n(0);
        const r = {
            body: n(7),
            result: n(11),
            resultError: n(12),
            conditions: n(49),
            transformations: n(50),
            checkbox: n(3),
            dropdownOption: n(10)
        };
        e(document.body).append(r.body(u));
        let i, o, l = e(document.body), c = e("#nav-container"), f = e("#form-container"), d = e("#result-container"),
            h = [];

        function p(e) {
            e ? l.addClass("loading") : (l.removeClass("loading"), l.addClass("loaded-initially"))
        }

        function g(t, n) {
            let i = e(t.target).closest("form"), o = i.data("type"), a = u.types[o].fields, l = u.operators[n],
                s = r[n]({fields: a, operators: l});
            i.find("." + n + "-container").append(s)
        }

        function m(e, t) {
            setTimeout(function () {
                try {
                    let t = JSON.parse(e.getValue()), n = JSON.stringify(t, null, 2);
                    n && e.setValue(n)
                } catch (e) {
                }
            }, 1)
        }

        return e("textarea.code").each(function () {
            let t = e(this), n = a.a.fromTextArea(t.get(0), {
                lineNumbers: !1,
                mode: "javascript",
                indentWithTabs: !1,
                tabSize: 2,
                height: 700,
                matchBrackets: !0,
                autoCloseBrackets: !0
            });
            t.data("codemirror", n), n.setSize("100%", 500), n.on("paste", m)
        }), c.on("click", ".tab", function (t) {
            let n = e(t.target), r = n.attr("href");
            t.preventDefault(), n.addClass("active").siblings().removeClass("active"), e(r).addClass("active").siblings().removeClass("active")
        }), f.on("click", "#submit-button", function (e) {
            e.preventDefault()
        }).on("click", ".form-group.conditions .icon-minus", function (t) {
            t.preventDefault(), e(t.target).closest(".condition").remove()
        }).on("click", ".form-group.conditions .icon-plus", function (e) {
            e.preventDefault(), g(e, "conditions")
        }).on("click", ".form-group.transformations .icon-minus", function (t) {
            e(t.target);
            let n = e(t.target).closest(".control-group"), r = n.closest("form"), i = n.find(".term input").val();
            t.preventDefault(), r.find(".columns, .groups").find('input[data-key="' + i + '"]').closest(".control").remove(), r.find('option.transformation[value="' + i + '"]').remove(), n.remove()
        }).on("click", ".form-group.transformations .icon-plus", function (e) {
            e.preventDefault(), g(e, "transformations")
        }).on("keyup", ".form-group.transformations .term input", function (t) {
            let n = e(t.target), i = n.val(), o = n.closest(".control-group"),
                a = o.closest(".transformations-container"), l = a.closest("form"), s = l.attr("data-type"),
                c = u.types[s].fields.length + o.index() + 1;
            h = [], a.find(".term input").each(function () {
                let t = e(this).val();
                h.push({key: t, label: t})
            });
            let f = l.find(".control.transformation:nth-child(" + c + ") input");
            if (f.length) f.val(i).attr("data-key", i).siblings("label").text(i); else {
                let e = r.checkbox({classes: "transformation", key: i, label: i});
                l.find(".form-group.columns .control-group").append(e)
            }
            let d = l.find("option.transformation:nth-child(" + c + ")");
            if (d.length) d.text(i).attr("value", i); else {
                let e = r.dropdownOption({classes: "transformation", key: i, label: i});
                l.find(".form-group.order").find(".control.fields select").append(e)
            }
        }).on("click", ".copy-html", function (t) {
            let n = e(".tab-panel.active").find("form");
            t.preventDefault(), new s.a(".copy-html", {
                text: function () {
                    return n.parent().html()
                }
            })
        }), d.on("click", ".showall", function (t) {
            t.preventDefault(), d.find("#result-table").addClass("showing-all"), d.find(".show-hint").remove(), e(t.target).remove()
        }).on("click", ".copy-result", function (e) {
            e.preventDefault(), new s.a(".copy-result", {
                text: function () {
                    return o
                }
            })
        }), f.on("change", "select", function () {
            e(this).find("option").each(function () {
                let t = e(this);
                t.is(":selected") ? t.attr("selected", "selected") : t.removeAttr("selected")
            })
        }).on("keyup", 'input[type="text"]', function () {
            let t = e(this), n = t.val();
            n ? t.attr("value", n) : t.removeAttr("value")
        }).on("change", "input:checkbox", function () {
            console.log("current: " + e(this).prop("checked")), e(this).prop("checked") ? e(this).attr("checked", "checked") : e(this).removeAttr("checked")
        }).on("change", "input:radio", function () {
            let t = e(this);
            t.closest(".control-group").find("input:radio").removeAttr("checked"), t.attr("checked", "checked")
        }), e(".nav-item:visible:first").click(), l.removeClass("loading"), function (e) {
            XMLHttpRequest.prototype.send = function (t) {
                this.addEventListener("load", function () {
                    try {
                        i = JSON.parse(this.responseText), o = this.responseText
                    } catch (e) {
                    } finally {
                        p(!1)
                    }
                });
                try {
                    e.apply(this, arguments)
                } catch (e) {
                } finally {
                    p(!0)
                }
            }
        }(XMLHttpRequest.prototype.send), {
            renderResult: function (n) {
                let i;
                i = n.result ? r.result({
                    result: n.result,
                    previewSize: t
                }) : n.responseText ? r.resultError({
                    message: JSON.parse(n.responseText).error,
                    code: n.status
                }) : r.resultError({message: n.error}), e("#result-container").html(i), p(!1)
            }
        }
    }(_____jq_____)
}, function (e, t, n) {
    var r = n(0);
    e.exports = (r.default || r).template({
        compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
            var o;
            return '<div class="control ' + e.escapeExpression("function" == typeof (o = null != (o = n.classes || (null != t ? t.classes : t)) ? o : n.helperMissing) ? o.call(null != t ? t : e.nullContext || {}, {
                name: "classes",
                hash: {},
                data: i
            }) : o) + '">\r\n    <input type="text" />\r\n</div>'
        }, useData: !0
    })
}, function (e, t, n) {
    n(7), n(11), n(12), n(35), n(13), n(36), n(14), n(51), n(55), e.exports = n(56)
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }

    t.__esModule = !0;
    var o = i(n(8)), a = r(n(29)), l = r(n(2)), s = i(n(1)), u = i(n(30)), c = r(n(31));

    function f() {
        var e = new o.HandlebarsEnvironment;
        return s.extend(e, o), e.SafeString = a.default, e.Exception = l.default, e.Utils = s, e.escapeExpression = s.escapeExpression, e.VM = u, e.template = function (t) {
            return u.template(t, e)
        }, e
    }

    var d = f();
    d.create = f, c.default(d), d.default = d, t.default = d, e.exports = t.default
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {default: e}
    }

    t.__esModule = !0, t.registerDefaultHelpers = function (e) {
        i.default(e), o.default(e), a.default(e), l.default(e), s.default(e), u.default(e), c.default(e)
    };
    var i = r(n(19)), o = r(n(20)), a = r(n(21)), l = r(n(22)), s = r(n(23)), u = r(n(24)), c = r(n(25))
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(1);
    t.default = function (e) {
        e.registerHelper("blockHelperMissing", function (t, n) {
            var i = n.inverse, o = n.fn;
            if (!0 === t) return o(this);
            if (!1 === t || null == t) return i(this);
            if (r.isArray(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : i(this);
            if (n.data && n.ids) {
                var a = r.createFrame(n.data);
                a.contextPath = r.appendContextPath(n.data.contextPath, n.name), n = {data: a}
            }
            return o(t, n)
        })
    }, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(1), i = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(n(2));
    t.default = function (e) {
        e.registerHelper("each", function (e, t) {
            if (!t) throw new i.default("Must pass iterator to #each");
            var n = t.fn, o = t.inverse, a = 0, l = "", s = void 0, u = void 0;

            function c(t, i, o) {
                s && (s.key = t, s.index = i, s.first = 0 === i, s.last = !!o, u && (s.contextPath = u + t)), l += n(e[t], {
                    data: s,
                    blockParams: r.blockParams([e[t], t], [u + t, null])
                })
            }

            if (t.data && t.ids && (u = r.appendContextPath(t.data.contextPath, t.ids[0]) + "."), r.isFunction(e) && (e = e.call(this)), t.data && (s = r.createFrame(t.data)), e && "object" == typeof e) if (r.isArray(e)) for (var f = e.length; a < f; a++) a in e && c(a, a, a === e.length - 1); else {
                var d = void 0;
                for (var h in e) e.hasOwnProperty(h) && (void 0 !== d && c(d, a - 1), d = h, a++);
                void 0 !== d && c(d, a - 1, !0)
            }
            return 0 === a && (l = o(this)), l
        })
    }, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(n(2));
    t.default = function (e) {
        e.registerHelper("helperMissing", function () {
            if (1 !== arguments.length) throw new r.default('Missing helper: "' + arguments[arguments.length - 1].name + '"')
        })
    }, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(1);
    t.default = function (e) {
        e.registerHelper("if", function (e, t) {
            return r.isFunction(e) && (e = e.call(this)), !t.hash.includeZero && !e || r.isEmpty(e) ? t.inverse(this) : t.fn(this)
        }), e.registerHelper("unless", function (t, n) {
            return e.helpers.if.call(this, t, {fn: n.inverse, inverse: n.fn, hash: n.hash})
        })
    }, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = function (e) {
        e.registerHelper("log", function () {
            for (var t = [void 0], n = arguments[arguments.length - 1], r = 0; r < arguments.length - 1; r++) t.push(arguments[r]);
            var i = 1;
            null != n.hash.level ? i = n.hash.level : n.data && null != n.data.level && (i = n.data.level), t[0] = i, e.log.apply(e, t)
        })
    }, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = function (e) {
        e.registerHelper("lookup", function (e, t) {
            return e && e[t]
        })
    }, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(1);
    t.default = function (e) {
        e.registerHelper("with", function (e, t) {
            r.isFunction(e) && (e = e.call(this));
            var n = t.fn;
            if (r.isEmpty(e)) return t.inverse(this);
            var i = t.data;
            return t.data && t.ids && ((i = r.createFrame(t.data)).contextPath = r.appendContextPath(t.data.contextPath, t.ids[0])), n(e, {
                data: i,
                blockParams: r.blockParams([e], [i && i.contextPath])
            })
        })
    }, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0, t.registerDefaultDecorators = function (e) {
        r.default(e)
    };
    var r = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(n(27))
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(1);
    t.default = function (e) {
        e.registerDecorator("inline", function (e, t, n, i) {
            var o = e;
            return t.partials || (t.partials = {}, o = function (i, o) {
                var a = n.partials;
                n.partials = r.extend({}, a, t.partials);
                var l = e(i, o);
                return n.partials = a, l
            }), t.partials[i.args[0]] = i.fn, o
        })
    }, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(1), i = {
        methodMap: ["debug", "info", "warn", "error"], level: "info", lookupLevel: function (e) {
            if ("string" == typeof e) {
                var t = r.indexOf(i.methodMap, e.toLowerCase());
                e = t >= 0 ? t : parseInt(e, 10)
            }
            return e
        }, log: function (e) {
            if (e = i.lookupLevel(e), "undefined" != typeof console && i.lookupLevel(i.level) <= e) {
                var t = i.methodMap[e];
                console[t] || (t = "log");
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                console[t].apply(console, r)
            }
        }
    };
    t.default = i, e.exports = t.default
}, function (e, t, n) {
    "use strict";

    function r(e) {
        this.string = e
    }

    t.__esModule = !0, r.prototype.toString = r.prototype.toHTML = function () {
        return "" + this.string
    }, t.default = r, e.exports = t.default
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0, t.checkRevision = function (e) {
        var t = e && e[0] || 1, n = o.COMPILER_REVISION;
        if (t !== n) {
            if (t < n) {
                var r = o.REVISION_CHANGES[n], a = o.REVISION_CHANGES[t];
                throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + a + ").")
            }
            throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
        }
    }, t.template = function (e, t) {
        if (!t) throw new i.default("No environment passed to template");
        if (!e || !e.main) throw new i.default("Unknown template object: " + typeof e);
        e.main.decorator = e.main_d, t.VM.checkRevision(e.compiler);
        var n = {
            strict: function (e, t) {
                if (!(t in e)) throw new i.default('"' + t + '" not defined in ' + e);
                return e[t]
            }, lookup: function (e, t) {
                for (var n = e.length, r = 0; r < n; r++) if (e[r] && null != e[r][t]) return e[r][t]
            }, lambda: function (e, t) {
                return "function" == typeof e ? e.call(t) : e
            }, escapeExpression: r.escapeExpression, invokePartial: function (n, o, a) {
                a.hash && (o = r.extend({}, o, a.hash), a.ids && (a.ids[0] = !0));
                n = t.VM.resolvePartial.call(this, n, o, a);
                var l = t.VM.invokePartial.call(this, n, o, a);
                null == l && t.compile && (a.partials[a.name] = t.compile(n, e.compilerOptions, t), l = a.partials[a.name](o, a));
                if (null != l) {
                    if (a.indent) {
                        for (var s = l.split("\n"), u = 0, c = s.length; u < c && (s[u] || u + 1 !== c); u++) s[u] = a.indent + s[u];
                        l = s.join("\n")
                    }
                    return l
                }
                throw new i.default("The partial " + a.name + " could not be compiled when running in runtime-only mode")
            }, fn: function (t) {
                var n = e[t];
                return n.decorator = e[t + "_d"], n
            }, programs: [], program: function (e, t, n, r, i) {
                var o = this.programs[e], l = this.fn(e);
                return t || i || r || n ? o = a(this, e, l, t, n, r, i) : o || (o = this.programs[e] = a(this, e, l)), o
            }, data: function (e, t) {
                for (; e && t--;) e = e._parent;
                return e
            }, merge: function (e, t) {
                var n = e || t;
                return e && t && e !== t && (n = r.extend({}, t, e)), n
            }, nullContext: Object.seal({}), noop: t.VM.noop, compilerInfo: e.compiler
        };

        function l(t) {
            var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], i = r.data;
            l._setup(r), !r.partial && e.useData && (i = function (e, t) {
                t && "root" in t || ((t = t ? o.createFrame(t) : {}).root = e);
                return t
            }(t, i));
            var a = void 0, u = e.useBlockParams ? [] : void 0;

            function c(t) {
                return "" + e.main(n, t, n.helpers, n.partials, i, u, a)
            }

            return e.useDepths && (a = r.depths ? t != r.depths[0] ? [t].concat(r.depths) : r.depths : [t]), (c = s(e.main, c, n, r.depths || [], i, u))(t, r)
        }

        return l.isTop = !0, l._setup = function (r) {
            r.partial ? (n.helpers = r.helpers, n.partials = r.partials, n.decorators = r.decorators) : (n.helpers = n.merge(r.helpers, t.helpers), e.usePartial && (n.partials = n.merge(r.partials, t.partials)), (e.usePartial || e.useDecorators) && (n.decorators = n.merge(r.decorators, t.decorators)))
        }, l._child = function (t, r, o, l) {
            if (e.useBlockParams && !o) throw new i.default("must pass block params");
            if (e.useDepths && !l) throw new i.default("must pass parent depths");
            return a(n, t, e[t], r, 0, o, l)
        }, l
    }, t.wrapProgram = a, t.resolvePartial = function (e, t, n) {
        e ? e.call || n.name || (n.name = e, e = n.partials[e]) : e = "@partial-block" === n.name ? n.data["partial-block"] : n.partials[n.name];
        return e
    }, t.invokePartial = function (e, t, n) {
        var a = n.data && n.data["partial-block"];
        n.partial = !0, n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
        var s = void 0;
        n.fn && n.fn !== l && function () {
            n.data = o.createFrame(n.data);
            var e = n.fn;
            s = n.data["partial-block"] = function (t) {
                var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                return n.data = o.createFrame(n.data), n.data["partial-block"] = a, e(t, n)
            }, e.partials && (n.partials = r.extend({}, n.partials, e.partials))
        }();
        void 0 === e && s && (e = s);
        if (void 0 === e) throw new i.default("The partial " + n.name + " could not be found");
        if (e instanceof Function) return e(t, n)
    }, t.noop = l;
    var r = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    }(n(1)), i = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(n(2)), o = n(8);

    function a(e, t, n, r, i, o, a) {
        function l(t) {
            var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], l = a;
            return !a || t == a[0] || t === e.nullContext && null === a[0] || (l = [t].concat(a)), n(e, t, e.helpers, e.partials, i.data || r, o && [i.blockParams].concat(o), l)
        }

        return (l = s(n, l, e, a, r, o)).program = t, l.depth = a ? a.length : 0, l.blockParams = i || 0, l
    }

    function l() {
        return ""
    }

    function s(e, t, n, i, o, a) {
        if (e.decorator) {
            var l = {};
            t = e.decorator(t, l, n, i && i[0], o, a, i), r.extend(t, l)
        }
        return t
    }
}, function (e, t, n) {
    "use strict";
    (function (n) {
        t.__esModule = !0, t.default = function (e) {
            var t = void 0 !== n ? n : window, r = t.Handlebars;
            e.noConflict = function () {
                return t.Handlebars === e && (t.Handlebars = r), e
            }
        }, e.exports = t.default
    }).call(t, n(9))
}, function (e, t, n) {
    var r = n(0);
    e.exports = (r.default || r).template({
        1: function (e, t, r, i, o, a, l) {
            var s;
            return null != (s = e.invokePartial(n(3), t, {
                name: "checkbox",
                hash: {
                    key: null != t ? t.key : t,
                    id: r.hyphenate.call(null != t ? t : e.nullContext || {}, null != (s = null != l[1] ? l[1].type : l[1]) ? s.id : s, "columns", "field", null != t ? t.key : t, {
                        name: "hyphenate",
                        hash: {},
                        data: o
                    }),
                    classes: "field"
                },
                data: o,
                indent: "                ",
                helpers: r,
                partials: i,
                decorators: e.decorators
            })) ? s : ""
        }, 3: function (e, t, r, i, o, a, l) {
            var s;
            return null != (s = e.invokePartial(n(3), t, {
                name: "checkbox",
                hash: {
                    id: r.hyphenate.call(null != t ? t : e.nullContext || {}, null != (s = null != l[1] ? l[1].type : l[1]) ? s.id : s, "groups", "field", null != t ? t.key : t, {
                        name: "hyphenate",
                        hash: {},
                        data: o
                    }), classes: "field"
                },
                data: o,
                indent: "                ",
                helpers: r,
                partials: i,
                decorators: e.decorators
            })) ? s : ""
        }, compiler: [7, ">= 4.0.0"], main: function (e, t, r, i, o, a, l) {
            var s, u = null != t ? t : e.nullContext || {};
            return '<form data-type="' + e.escapeExpression(e.lambda(null != (s = null != t ? t.type : t) ? s.id : s, t)) + '">\r\n    <div class="form-group conditions">\r\n        <legend>Conditions</legend>\r\n        <div class="control-group condition-type">\r\n' + (null != (s = e.invokePartial(n(6), t, {
                name: "radio",
                hash: {
                    id: r.hyphenate.call(u, null != (s = null != t ? t.type : t) ? s.id : s, "conditiontype", "all", {
                        name: "hyphenate",
                        hash: {},
                        data: o
                    }),
                    checked: !0,
                    value: "all",
                    label: "All of the following",
                    name: "conditionType",
                    classes: "conditions-all-radio"
                },
                data: o,
                indent: "            ",
                helpers: r,
                partials: i,
                decorators: e.decorators
            })) ? s : "") + (null != (s = e.invokePartial(n(6), t, {
                name: "radio",
                hash: {
                    id: r.hyphenate.call(u, null != (s = null != t ? t.type : t) ? s.id : s, "conditiontype", "any", {
                        name: "hyphenate",
                        hash: {},
                        data: o
                    }),
                    value: "any",
                    label: "Any of the following",
                    name: "conditionType",
                    classes: "conditions-any-radio"
                },
                data: o,
                indent: "            ",
                helpers: r,
                partials: i,
                decorators: e.decorators
            })) ? s : "") + (null != (s = e.invokePartial(n(6), t, {
                name: "radio",
                hash: {
                    id: r.hyphenate.call(u, null != (s = null != t ? t.type : t) ? s.id : s, "conditiontype", "none", {
                        name: "hyphenate",
                        hash: {},
                        data: o
                    }),
                    value: "none",
                    label: "None of the following",
                    name: "conditionType",
                    classes: "conditions-none-radio"
                },
                data: o,
                indent: "            ",
                helpers: r,
                partials: i,
                decorators: e.decorators
            })) ? s : "") + '        </div>\r\n        <div class="conditions-container"></div>\r\n        <div class="icon-container"><a class="icon icon-plus" href="#"></a></div>\r\n    </div>\r\n    <div class="form-group columns">\r\n        <legend>Columns</legend>\r\n        <div class="control-group">\r\n' + (null != (s = r.each.call(u, null != (s = null != t ? t.type : t) ? s.fields : s, {
                name: "each",
                hash: {},
                fn: e.program(1, o, 0, a, l),
                inverse: e.noop,
                data: o
            })) ? s : "") + '        </div>\r\n    </div>\r\n    <div class="form-group order">\r\n        <legend>Order</legend>\r\n        <div class="control-group">\r\n' + (null != (s = e.invokePartial(n(4), t, {
                name: "dropdown",
                hash: {
                    id: r.hyphenate.call(u, null != (s = null != t ? t.type : t) ? s.id : s, "order", {
                        name: "hyphenate",
                        hash: {},
                        data: o
                    }), data: null != t ? t.fields : t, classes: "order fields", multiple: !0
                },
                data: o,
                indent: "            ",
                helpers: r,
                partials: i,
                decorators: e.decorators
            })) ? s : "") + (null != (s = e.invokePartial(n(3), t, {
                name: "checkbox",
                hash: {
                    id: r.hyphenate.call(u, null != (s = null != t ? t.type : t) ? s.id : s, "order", {
                        name: "hyphenate",
                        hash: {},
                        data: o
                    }), label: "Descending", classes: "descending"
                },
                data: o,
                indent: "            ",
                helpers: r,
                partials: i,
                decorators: e.decorators
            })) ? s : "") + '        </div>\r\n    </div>\r\n    <div class="form-group groups">\r\n        <legend>Groups</legend>\r\n        <div class="control-group">\r\n' + (null != (s = r.each.call(u, null != (s = null != t ? t.type : t) ? s.fields : s, {
                name: "each",
                hash: {},
                fn: e.program(3, o, 0, a, l),
                inverse: e.noop,
                data: o
            })) ? s : "") + '        </div>\r\n    </div>\r\n    <div class="form-group transformations">\r\n        <legend>Transformations</legend>\r\n        <div class="transformations-container"></div>\r\n        <div class="icon-container"><a class="icon icon-plus" href="#"></a></div>\r\n    </div>\r\n</form>\r\n'
        }, usePartial: !0, useData: !0, useDepths: !0
    })
}, function (e, t, n) {
    var r = n(0);
    e.exports = (r.default || r).template({
        1: function (e, t, n, r, i) {
            var o;
            return 'class="' + e.escapeExpression("function" == typeof (o = null != (o = n.classes || (null != t ? t.classes : t)) ? o : n.helperMissing) ? o.call(null != t ? t : e.nullContext || {}, {
                name: "classes",
                hash: {},
                data: i
            }) : o) + '"'
        }, compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
            var o, a, l = null != t ? t : e.nullContext || {}, s = n.helperMissing, u = e.escapeExpression;
            return "<option " + (null != (o = n.if.call(l, null != t ? t.classes : t, {
                name: "if",
                hash: {},
                fn: e.program(1, i, 0),
                inverse: e.noop,
                data: i
            })) ? o : "") + ' value="' + u("function" == typeof (a = null != (a = n.key || (null != t ? t.key : t)) ? a : s) ? a.call(l, {
                name: "key",
                hash: {},
                data: i
            }) : a) + '">\r\n    ' + u("function" == typeof (a = null != (a = n.label || (null != t ? t.label : t)) ? a : s) ? a.call(l, {
                name: "label",
                hash: {},
                data: i
            }) : a) + "\r\n</option>"
        }, useData: !0
    })
}, function (e, t, n) {
    var r = n(0);
    e.exports = (r.default || r).template({
        compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
            return '<form data-type="plain">\r\n    <div class="form-group plain">\r\n        <legend>Plain Query</legend>\r\n        <textarea class="form-control code" id="codemirror-plain-textarea" rows="3"></textarea>\r\n    </div>\r\n</form>'
        }, useData: !0
    })
}, function (e, t) {
}, function (e, t, n) {
    let r = n(0);
    r.registerHelper("eq", function (e, t, n) {
        return e === t ? n.fn(this) : n.inverse(this)
    }), r.registerHelper("hyphenate", function () {
        let e = Array.prototype.slice.call(arguments);
        return e.pop(), e.join("-")
    })
}, function (e, t, n) {
    var r;
    /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
    /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
    !function (t, n) {
        "use strict";
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function (n, i) {
        "use strict";
        var o = [], a = n.document, l = Object.getPrototypeOf, s = o.slice, u = o.concat, c = o.push, f = o.indexOf,
            d = {}, h = d.toString, p = d.hasOwnProperty, g = p.toString, m = g.call(Object), v = {}, y = function (e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            }, b = function (e) {
                return null != e && e === e.window
            }, x = {type: !0, src: !0, noModule: !0};

        function w(e, t, n) {
            var r, i = (t = t || a).createElement("script");
            if (i.text = e, n) for (r in x) n[r] && (i[r] = n[r]);
            t.head.appendChild(i).parentNode.removeChild(i)
        }

        function k(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[h.call(e)] || "object" : typeof e
        }

        var C = function (e, t) {
            return new C.fn.init(e, t)
        }, S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function T(e) {
            var t = !!e && "length" in e && e.length, n = k(e);
            return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        C.fn = C.prototype = {
            jquery: "3.3.1", constructor: C, length: 0, toArray: function () {
                return s.call(this)
            }, get: function (e) {
                return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
            }, pushStack: function (e) {
                var t = C.merge(this.constructor(), e);
                return t.prevObject = this, t
            }, each: function (e) {
                return C.each(this, e)
            }, map: function (e) {
                return this.pushStack(C.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, slice: function () {
                return this.pushStack(s.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (e) {
                var t = this.length, n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: c, sort: o.sort, splice: o.splice
        }, C.extend = C.fn.extend = function () {
            var e, t, n, r, i, o, a = arguments[0] || {}, l = 1, s = arguments.length, u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[l] || {}, l++), "object" == typeof a || y(a) || (a = {}), l === s && (a = this, l--); l < s; l++) if (null != (e = arguments[l])) for (t in e) n = a[t], a !== (r = e[t]) && (u && r && (C.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && C.isPlainObject(n) ? n : {}, a[t] = C.extend(u, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }, C.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                throw new Error(e)
            }, noop: function () {
            }, isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== h.call(e)) && (!(t = l(e)) || "function" == typeof (n = p.call(t, "constructor") && t.constructor) && g.call(n) === m)
            }, isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            }, globalEval: function (e) {
                w(e)
            }, each: function (e, t) {
                var n, r = 0;
                if (T(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e
            }, trim: function (e) {
                return null == e ? "" : (e + "").replace(S, "")
            }, makeArray: function (e, t) {
                var n = t || [];
                return null != e && (T(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
            }, inArray: function (e, t, n) {
                return null == t ? -1 : f.call(t, e, n)
            }, merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return e.length = i, e
            }, grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                return r
            }, map: function (e, t, n) {
                var r, i, o = 0, a = [];
                if (T(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return u.apply([], a)
            }, guid: 1, support: v
        }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = o[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            d["[object " + t + "]"] = t.toLowerCase()
        });
        var L =
            /*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
            function (e) {
                var t, n, r, i, o, a, l, s, u, c, f, d, h, p, g, m, v, y, b, x = "sizzle" + 1 * new Date,
                    w = e.document, k = 0, C = 0, S = ae(), T = ae(), L = ae(), N = function (e, t) {
                        return e === t && (f = !0), 0
                    }, A = {}.hasOwnProperty, M = [], O = M.pop, E = M.push, D = M.push, P = M.slice, H = function (e, t) {
                        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                        return -1
                    },
                    R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    I = "[\\x20\\t\\r\\n\\f]", W = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    F = "\\[" + I + "*(" + W + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + I + "*\\]",
                    j = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
                    _ = new RegExp(I + "+", "g"),
                    B = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
                    z = new RegExp("^" + I + "*," + I + "*"), q = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
                    $ = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"), U = new RegExp(j),
                    V = new RegExp("^" + W + "$"), G = {
                        ID: new RegExp("^#(" + W + ")"),
                        CLASS: new RegExp("^\\.(" + W + ")"),
                        TAG: new RegExp("^(" + W + "|[*])"),
                        ATTR: new RegExp("^" + F),
                        PSEUDO: new RegExp("^" + j),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + R + ")$", "i"),
                        needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
                    }, X = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/,
                    Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, J = /[+~]/,
                    Z = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"), ee = function (e, t, n) {
                        var r = "0x" + t - 65536;
                        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    }, re = function () {
                        d()
                    }, ie = ye(function (e) {
                        return !0 === e.disabled && ("form" in e || "label" in e)
                    }, {dir: "parentNode", next: "legend"});
                try {
                    D.apply(M = P.call(w.childNodes), w.childNodes), M[w.childNodes.length].nodeType
                } catch (e) {
                    D = {
                        apply: M.length ? function (e, t) {
                            E.apply(e, P.call(t))
                        } : function (e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                            e.length = n - 1
                        }
                    }
                }

                function oe(e, t, r, i) {
                    var o, l, u, c, f, p, v, y = t && t.ownerDocument, k = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== k && 9 !== k && 11 !== k) return r;
                    if (!i && ((t ? t.ownerDocument || t : w) !== h && d(t), t = t || h, g)) {
                        if (11 !== k && (f = Q.exec(e))) if (o = f[1]) {
                            if (9 === k) {
                                if (!(u = t.getElementById(o))) return r;
                                if (u.id === o) return r.push(u), r
                            } else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o) return r.push(u), r
                        } else {
                            if (f[2]) return D.apply(r, t.getElementsByTagName(e)), r;
                            if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return D.apply(r, t.getElementsByClassName(o)), r
                        }
                        if (n.qsa && !L[e + " "] && (!m || !m.test(e))) {
                            if (1 !== k) y = t, v = e; else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = x), l = (p = a(e)).length; l--;) p[l] = "#" + c + " " + ve(p[l]);
                                v = p.join(","), y = J.test(e) && ge(t.parentNode) || t
                            }
                            if (v) try {
                                return D.apply(r, y.querySelectorAll(v)), r
                            } catch (e) {
                            } finally {
                                c === x && t.removeAttribute("id")
                            }
                        }
                    }
                    return s(e.replace(B, "$1"), t, r, i)
                }

                function ae() {
                    var e = [];
                    return function t(n, i) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                }

                function le(e) {
                    return e[x] = !0, e
                }

                function se(e) {
                    var t = h.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function ue(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
                }

                function ce(e, t) {
                    var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                    return e ? 1 : -1
                }

                function fe(e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function de(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function he(e) {
                    return function (t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function pe(e) {
                    return le(function (t) {
                        return t = +t, le(function (n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function ge(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }

                for (t in n = oe.support = {}, o = oe.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, d = oe.setDocument = function (e) {
                    var t, i, a = e ? e.ownerDocument || e : w;
                    return a !== h && 9 === a.nodeType && a.documentElement ? (p = (h = a).documentElement, g = !o(h), w !== h && (i = h.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = se(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), n.getElementsByTagName = se(function (e) {
                        return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                    }), n.getElementsByClassName = Y.test(h.getElementsByClassName), n.getById = se(function (e) {
                        return p.appendChild(e).id = x, !h.getElementsByName || !h.getElementsByName(x).length
                    }), n.getById ? (r.filter.ID = function (e) {
                        var t = e.replace(Z, ee);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }, r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (r.filter.ID = function (e) {
                        var t = e.replace(Z, ee);
                        return function (e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                            var n, r, i, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                for (i = t.getElementsByName(e), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                            }
                            return []
                        }
                    }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, r = [], i = 0, o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                        if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                    }, v = [], m = [], (n.qsa = Y.test(h.querySelectorAll)) && (se(function (e) {
                        p.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + I + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]")
                    }), se(function (e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = h.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + I + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                    })), (n.matchesSelector = Y.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && se(function (e) {
                        n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", j)
                    }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = Y.test(p.compareDocumentPosition), b = t || Y.test(p.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function (e, t) {
                        if (t) for (; t = t.parentNode;) if (t === e) return !0;
                        return !1
                    }, N = t ? function (e, t) {
                        if (e === t) return f = !0, 0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === h || e.ownerDocument === w && b(w, e) ? -1 : t === h || t.ownerDocument === w && b(w, t) ? 1 : c ? H(c, e) - H(c, t) : 0 : 4 & r ? -1 : 1)
                    } : function (e, t) {
                        if (e === t) return f = !0, 0;
                        var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], l = [t];
                        if (!i || !o) return e === h ? -1 : t === h ? 1 : i ? -1 : o ? 1 : c ? H(c, e) - H(c, t) : 0;
                        if (i === o) return ce(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) l.unshift(n);
                        for (; a[r] === l[r];) r++;
                        return r ? ce(a[r], l[r]) : a[r] === w ? -1 : l[r] === w ? 1 : 0
                    }, h) : h
                }, oe.matches = function (e, t) {
                    return oe(e, null, null, t)
                }, oe.matchesSelector = function (e, t) {
                    if ((e.ownerDocument || e) !== h && d(e), t = t.replace($, "='$1']"), n.matchesSelector && g && !L[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                        var r = y.call(e, t);
                        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (e) {
                    }
                    return oe(t, h, null, [e]).length > 0
                }, oe.contains = function (e, t) {
                    return (e.ownerDocument || e) !== h && d(e), b(e, t)
                }, oe.attr = function (e, t) {
                    (e.ownerDocument || e) !== h && d(e);
                    var i = r.attrHandle[t.toLowerCase()],
                        o = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                    return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                }, oe.escape = function (e) {
                    return (e + "").replace(te, ne)
                }, oe.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, oe.uniqueSort = function (e) {
                    var t, r = [], i = 0, o = 0;
                    if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(N), f) {
                        for (; t = e[o++];) t === e[o] && (i = r.push(o));
                        for (; i--;) e.splice(r[i], 1)
                    }
                    return c = null, e
                }, i = oe.getText = function (e) {
                    var t, n = "", r = 0, o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else for (; t = e[r++];) n += i(t);
                    return n
                }, (r = oe.selectors = {
                    cacheLength: 50,
                    createPseudo: le,
                    match: G,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        }, CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                        }, PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(Z, ee).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        }, CLASS: function (e) {
                            var t = S[e + " "];
                            return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && S(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        }, ATTR: function (e, t, n) {
                            return function (r) {
                                var i = oe.attr(r, e);
                                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(_, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                            }
                        }, CHILD: function (e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), l = "of-type" === t;
                            return 1 === r && 0 === i ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, s) {
                                var u, c, f, d, h, p, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode,
                                    v = l && t.nodeName.toLowerCase(), y = !s && !l, b = !1;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (d = t; d = d[g];) if (l ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            p = g = "only" === e && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                        for (b = (h = (u = (c = (f = (d = m)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === k && u[1]) && u[2], d = h && m.childNodes[h]; d = ++h && d && d[g] || (b = h = 0) || p.pop();) if (1 === d.nodeType && ++b && d === t) {
                                            c[e] = [k, h, b];
                                            break
                                        }
                                    } else if (y && (b = h = (u = (c = (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === k && u[1]), !1 === b) for (; (d = ++h && d && d[g] || (b = h = 0) || p.pop()) && ((l ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [k, b]), d !== t));) ;
                                    return (b -= i) === r || b % r == 0 && b / r >= 0
                                }
                            }
                        }, PSEUDO: function (e, t) {
                            var n,
                                i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                            return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, n) {
                                for (var r, o = i(e, t), a = o.length; a--;) e[r = H(e, o[a])] = !(n[r] = o[a])
                            }) : function (e) {
                                return i(e, 0, n)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: le(function (e) {
                            var t = [], n = [], r = l(e.replace(B, "$1"));
                            return r[x] ? le(function (e, t, n, i) {
                                for (var o, a = r(e, null, i, []), l = e.length; l--;) (o = a[l]) && (e[l] = !(t[l] = o))
                            }) : function (e, i, o) {
                                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                            }
                        }), has: le(function (e) {
                            return function (t) {
                                return oe(e, t).length > 0
                            }
                        }), contains: le(function (e) {
                            return e = e.replace(Z, ee), function (t) {
                                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                            }
                        }), lang: le(function (e) {
                            return V.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }), target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        }, root: function (e) {
                            return e === p
                        }, focus: function (e) {
                            return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        }, enabled: he(!1), disabled: he(!0), checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        }, selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        }, empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0
                        }, parent: function (e) {
                            return !r.pseudos.empty(e)
                        }, header: function (e) {
                            return K.test(e.nodeName)
                        }, input: function (e) {
                            return X.test(e.nodeName)
                        }, button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        }, text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        }, first: pe(function () {
                            return [0]
                        }), last: pe(function (e, t) {
                            return [t - 1]
                        }), eq: pe(function (e, t, n) {
                            return [n < 0 ? n + t : n]
                        }), even: pe(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }), odd: pe(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }), lt: pe(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                            return e
                        }), gt: pe(function (e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }).pseudos.nth = r.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[t] = fe(t);
                for (t in {submit: !0, reset: !0}) r.pseudos[t] = de(t);

                function me() {
                }

                function ve(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function ye(e, t, n) {
                    var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, l = C++;
                    return t.first ? function (t, n, i) {
                        for (; t = t[r];) if (1 === t.nodeType || a) return e(t, n, i);
                        return !1
                    } : function (t, n, s) {
                        var u, c, f, d = [k, l];
                        if (s) {
                            for (; t = t[r];) if ((1 === t.nodeType || a) && e(t, n, s)) return !0
                        } else for (; t = t[r];) if (1 === t.nodeType || a) if (c = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
                            if ((u = c[o]) && u[0] === k && u[1] === l) return d[2] = u[2];
                            if (c[o] = d, d[2] = e(t, n, s)) return !0
                        }
                        return !1
                    }
                }

                function be(e) {
                    return e.length > 1 ? function (t, n, r) {
                        for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function xe(e, t, n, r, i) {
                    for (var o, a = [], l = 0, s = e.length, u = null != t; l < s; l++) (o = e[l]) && (n && !n(o, r, i) || (a.push(o), u && t.push(l)));
                    return a
                }

                function we(e, t, n, r, i, o) {
                    return r && !r[x] && (r = we(r)), i && !i[x] && (i = we(i, o)), le(function (o, a, l, s) {
                        var u, c, f, d = [], h = [], p = a.length, g = o || function (e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                                return n
                            }(t || "*", l.nodeType ? [l] : l, []), m = !e || !o && t ? g : xe(g, d, e, l, s),
                            v = n ? i || (o ? e : p || r) ? [] : a : m;
                        if (n && n(m, v, l, s), r) for (u = xe(v, h), r(u, [], l, s), c = u.length; c--;) (f = u[c]) && (v[h[c]] = !(m[h[c]] = f));
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    for (u = [], c = v.length; c--;) (f = v[c]) && u.push(m[c] = f);
                                    i(null, v = [], u, s)
                                }
                                for (c = v.length; c--;) (f = v[c]) && (u = i ? H(o, f) : d[c]) > -1 && (o[u] = !(a[u] = f))
                            }
                        } else v = xe(v === a ? v.splice(p, v.length) : v), i ? i(null, a, v, s) : D.apply(a, v)
                    })
                }

                function ke(e) {
                    for (var t, n, i, o = e.length, a = r.relative[e[0].type], l = a || r.relative[" "], s = a ? 1 : 0, c = ye(function (e) {
                        return e === t
                    }, l, !0), f = ye(function (e) {
                        return H(t, e) > -1
                    }, l, !0), d = [function (e, n, r) {
                        var i = !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                        return t = null, i
                    }]; s < o; s++) if (n = r.relative[e[s].type]) d = [ye(be(d), n)]; else {
                        if ((n = r.filter[e[s].type].apply(null, e[s].matches))[x]) {
                            for (i = ++s; i < o && !r.relative[e[i].type]; i++) ;
                            return we(s > 1 && be(d), s > 1 && ve(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(B, "$1"), n, s < i && ke(e.slice(s, i)), i < o && ke(e = e.slice(i)), i < o && ve(e))
                        }
                        d.push(n)
                    }
                    return be(d)
                }

                return me.prototype = r.filters = r.pseudos, r.setFilters = new me, a = oe.tokenize = function (e, t) {
                    var n, i, o, a, l, s, u, c = T[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (l = e, s = [], u = r.preFilter; l;) {
                        for (a in n && !(i = z.exec(l)) || (i && (l = l.slice(i[0].length) || l), s.push(o = [])), n = !1, (i = q.exec(l)) && (n = i.shift(), o.push({
                            value: n,
                            type: i[0].replace(B, " ")
                        }), l = l.slice(n.length)), r.filter) !(i = G[a].exec(l)) || u[a] && !(i = u[a](i)) || (n = i.shift(), o.push({
                            value: n,
                            type: a,
                            matches: i
                        }), l = l.slice(n.length));
                        if (!n) break
                    }
                    return t ? l.length : l ? oe.error(e) : T(e, s).slice(0)
                }, l = oe.compile = function (e, t) {
                    var n, i = [], o = [], l = L[e + " "];
                    if (!l) {
                        for (t || (t = a(e)), n = t.length; n--;) (l = ke(t[n]))[x] ? i.push(l) : o.push(l);
                        (l = L(e, function (e, t) {
                            var n = t.length > 0, i = e.length > 0, o = function (o, a, l, s, c) {
                                var f, p, m, v = 0, y = "0", b = o && [], x = [], w = u,
                                    C = o || i && r.find.TAG("*", c), S = k += null == w ? 1 : Math.random() || .1,
                                    T = C.length;
                                for (c && (u = a === h || a || c); y !== T && null != (f = C[y]); y++) {
                                    if (i && f) {
                                        for (p = 0, a || f.ownerDocument === h || (d(f), l = !g); m = e[p++];) if (m(f, a || h, l)) {
                                            s.push(f);
                                            break
                                        }
                                        c && (k = S)
                                    }
                                    n && ((f = !m && f) && v--, o && b.push(f))
                                }
                                if (v += y, n && y !== v) {
                                    for (p = 0; m = t[p++];) m(b, x, a, l);
                                    if (o) {
                                        if (v > 0) for (; y--;) b[y] || x[y] || (x[y] = O.call(s));
                                        x = xe(x)
                                    }
                                    D.apply(s, x), c && !o && x.length > 0 && v + t.length > 1 && oe.uniqueSort(s)
                                }
                                return c && (k = S, u = w), b
                            };
                            return n ? le(o) : o
                        }(o, i))).selector = e
                    }
                    return l
                }, s = oe.select = function (e, t, n, i) {
                    var o, s, u, c, f, d = "function" == typeof e && e, h = !i && a(e = d.selector || e);
                    if (n = n || [], 1 === h.length) {
                        if ((s = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = s[0]).type && 9 === t.nodeType && g && r.relative[s[1].type]) {
                            if (!(t = (r.find.ID(u.matches[0].replace(Z, ee), t) || [])[0])) return n;
                            d && (t = t.parentNode), e = e.slice(s.shift().value.length)
                        }
                        for (o = G.needsContext.test(e) ? 0 : s.length; o-- && (u = s[o], !r.relative[c = u.type]);) if ((f = r.find[c]) && (i = f(u.matches[0].replace(Z, ee), J.test(s[0].type) && ge(t.parentNode) || t))) {
                            if (s.splice(o, 1), !(e = i.length && ve(s))) return D.apply(n, i), n;
                            break
                        }
                    }
                    return (d || l(e, h))(i, t, !g, n, !t || J.test(e) && ge(t.parentNode) || t), n
                }, n.sortStable = x.split("").sort(N).join("") === x, n.detectDuplicates = !!f, d(), n.sortDetached = se(function (e) {
                    return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
                }), se(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || ue("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), n.attributes && se(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || ue("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), se(function (e) {
                    return null == e.getAttribute("disabled")
                }) || ue(R, function (e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), oe
            }(n);
        C.find = L, C.expr = L.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = L.uniqueSort, C.text = L.getText, C.isXMLDoc = L.isXML, C.contains = L.contains, C.escapeSelector = L.escape;
        var N = function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (i && C(e).is(n)) break;
                r.push(e)
            }
            return r
        }, A = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }, M = C.expr.match.needsContext;

        function O(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }

        var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function D(e, t, n) {
            return y(t) ? C.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n
            }) : t.nodeType ? C.grep(e, function (e) {
                return e === t !== n
            }) : "string" != typeof t ? C.grep(e, function (e) {
                return f.call(t, e) > -1 !== n
            }) : C.filter(t, e, n)
        }

        C.filter = function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, C.fn.extend({
            find: function (e) {
                var t, n, r = this.length, i = this;
                if ("string" != typeof e) return this.pushStack(C(e).filter(function () {
                    for (t = 0; t < r; t++) if (C.contains(i[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, i[t], n);
                return r > 1 ? C.uniqueSort(n) : n
            }, filter: function (e) {
                return this.pushStack(D(this, e || [], !1))
            }, not: function (e) {
                return this.pushStack(D(this, e || [], !0))
            }, is: function (e) {
                return !!D(this, "string" == typeof e && M.test(e) ? C(e) : e || [], !1).length
            }
        });
        var P, H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (C.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || P, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : H.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), E.test(r[1]) && C.isPlainObject(t)) for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (i = a.getElementById(r[2])) && (this[0] = i, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
        }).prototype = C.fn, P = C(a);
        var R = /^(?:parents|prev(?:Until|All))/, I = {children: !0, contents: !0, next: !0, prev: !0};

        function W(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType;) ;
            return e
        }

        C.fn.extend({
            has: function (e) {
                var t = C(e, this), n = t.length;
                return this.filter(function () {
                    for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0
                })
            }, closest: function (e, t) {
                var n, r = 0, i = this.length, o = [], a = "string" != typeof e && C(e);
                if (!M.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                    o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o)
            }, index: function (e) {
                return e ? "string" == typeof e ? f.call(C(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (e, t) {
                return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
            }, addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), C.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return N(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return N(e, "parentNode", n)
            }, next: function (e) {
                return W(e, "nextSibling")
            }, prev: function (e) {
                return W(e, "previousSibling")
            }, nextAll: function (e) {
                return N(e, "nextSibling")
            }, prevAll: function (e) {
                return N(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return N(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return N(e, "previousSibling", n)
            }, siblings: function (e) {
                return A((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return A(e.firstChild)
            }, contents: function (e) {
                return O(e, "iframe") ? e.contentDocument : (O(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
            }
        }, function (e, t) {
            C.fn[e] = function (n, r) {
                var i = C.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = C.filter(r, i)), this.length > 1 && (I[e] || C.uniqueSort(i), R.test(e) && i.reverse()), this.pushStack(i)
            }
        });
        var F = /[^\x20\t\r\n\f]+/g;

        function j(e) {
            return e
        }

        function _(e) {
            throw e
        }

        function B(e, t, n, r) {
            var i;
            try {
                e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }

        C.Callbacks = function (e) {
            e = "string" == typeof e ? function (e) {
                var t = {};
                return C.each(e.match(F) || [], function (e, n) {
                    t[n] = !0
                }), t
            }(e) : C.extend({}, e);
            var t, n, r, i, o = [], a = [], l = -1, s = function () {
                for (i = i || e.once, r = t = !0; a.length; l = -1) for (n = a.shift(); ++l < o.length;) !1 === o[l].apply(n[0], n[1]) && e.stopOnFalse && (l = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            }, u = {
                add: function () {
                    return o && (n && !t && (l = o.length - 1, a.push(n)), function t(n) {
                        C.each(n, function (n, r) {
                            y(r) ? e.unique && u.has(r) || o.push(r) : r && r.length && "string" !== k(r) && t(r)
                        })
                    }(arguments), n && !t && s()), this
                }, remove: function () {
                    return C.each(arguments, function (e, t) {
                        for (var n; (n = C.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= l && l--
                    }), this
                }, has: function (e) {
                    return e ? C.inArray(e, o) > -1 : o.length > 0
                }, empty: function () {
                    return o && (o = []), this
                }, disable: function () {
                    return i = a = [], o = n = "", this
                }, disabled: function () {
                    return !o
                }, lock: function () {
                    return i = a = [], n || t || (o = n = ""), this
                }, locked: function () {
                    return !!i
                }, fireWith: function (e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || s()), this
                }, fire: function () {
                    return u.fireWith(this, arguments), this
                }, fired: function () {
                    return !!r
                }
            };
            return u
        }, C.extend({
            Deferred: function (e) {
                var t = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]],
                    r = "pending", i = {
                        state: function () {
                            return r
                        }, always: function () {
                            return o.done(arguments).fail(arguments), this
                        }, catch: function (e) {
                            return i.then(null, e)
                        }, pipe: function () {
                            var e = arguments;
                            return C.Deferred(function (n) {
                                C.each(t, function (t, r) {
                                    var i = y(e[r[4]]) && e[r[4]];
                                    o[r[1]](function () {
                                        var e = i && i.apply(this, arguments);
                                        e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        }, then: function (e, r, i) {
                            var o = 0;

                            function a(e, t, r, i) {
                                return function () {
                                    var l = this, s = arguments, u = function () {
                                        var n, u;
                                        if (!(e < o)) {
                                            if ((n = r.apply(l, s)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                            u = n && ("object" == typeof n || "function" == typeof n) && n.then, y(u) ? i ? u.call(n, a(o, t, j, i), a(o, t, _, i)) : (o++, u.call(n, a(o, t, j, i), a(o, t, _, i), a(o, t, j, t.notifyWith))) : (r !== j && (l = void 0, s = [n]), (i || t.resolveWith)(l, s))
                                        }
                                    }, c = i ? u : function () {
                                        try {
                                            u()
                                        } catch (n) {
                                            C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= o && (r !== _ && (l = void 0, s = [n]), t.rejectWith(l, s))
                                        }
                                    };
                                    e ? c() : (C.Deferred.getStackHook && (c.stackTrace = C.Deferred.getStackHook()), n.setTimeout(c))
                                }
                            }

                            return C.Deferred(function (n) {
                                t[0][3].add(a(0, n, y(i) ? i : j, n.notifyWith)), t[1][3].add(a(0, n, y(e) ? e : j)), t[2][3].add(a(0, n, y(r) ? r : _))
                            }).promise()
                        }, promise: function (e) {
                            return null != e ? C.extend(e, i) : i
                        }
                    }, o = {};
                return C.each(t, function (e, n) {
                    var a = n[2], l = n[5];
                    i[n[1]] = a.add, l && a.add(function () {
                        r = l
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), o[n[0]] = function () {
                        return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[n[0] + "With"] = a.fireWith
                }), i.promise(o), e && e.call(o, o), o
            }, when: function (e) {
                var t = arguments.length, n = t, r = Array(n), i = s.call(arguments), o = C.Deferred(),
                    a = function (e) {
                        return function (n) {
                            r[e] = this, i[e] = arguments.length > 1 ? s.call(arguments) : n, --t || o.resolveWith(r, i)
                        }
                    };
                if (t <= 1 && (B(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || y(i[n] && i[n].then))) return o.then();
                for (; n--;) B(i[n], a(n), o.reject);
                return o.promise()
            }
        });
        var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        C.Deferred.exceptionHook = function (e, t) {
            n.console && n.console.warn && e && z.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, C.readyException = function (e) {
            n.setTimeout(function () {
                throw e
            })
        };
        var q = C.Deferred();

        function $() {
            a.removeEventListener("DOMContentLoaded", $), n.removeEventListener("load", $), C.ready()
        }

        C.fn.ready = function (e) {
            return q.then(e).catch(function (e) {
                C.readyException(e)
            }), this
        }, C.extend({
            isReady: !1, readyWait: 1, ready: function (e) {
                (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || q.resolveWith(a, [C]))
            }
        }), C.ready.then = q.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(C.ready) : (a.addEventListener("DOMContentLoaded", $), n.addEventListener("load", $));
        var U = function (e, t, n, r, i, o, a) {
            var l = 0, s = e.length, u = null == n;
            if ("object" === k(n)) for (l in i = !0, n) U(e, t, l, n[l], !0, o, a); else if (void 0 !== r && (i = !0, y(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function (e, t, n) {
                return u.call(C(e), n)
            })), t)) for (; l < s; l++) t(e[l], n, a ? r : r.call(e[l], l, t(e[l], n)));
            return i ? e : u ? t.call(e) : s ? t(e[0], n) : o
        }, V = /^-ms-/, G = /-([a-z])/g;

        function X(e, t) {
            return t.toUpperCase()
        }

        function K(e) {
            return e.replace(V, "ms-").replace(G, X)
        }

        var Y = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function Q() {
            this.expando = C.expando + Q.uid++
        }

        Q.uid = 1, Q.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            }, set: function (e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t) i[K(t)] = n; else for (r in t) i[K(r)] = t[r];
                return i
            }, get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)]
            }, access: function (e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            }, remove: function (e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in r ? [t] : t.match(F) || []).length;
                        for (; n--;) delete r[t[n]]
                    }
                    (void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            }, hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t)
            }
        };
        var J = new Q, Z = new Q, ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, te = /[A-Z]/g;

        function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = function (e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {
                }
                Z.set(e, t, n)
            } else n = void 0;
            return n
        }

        C.extend({
            hasData: function (e) {
                return Z.hasData(e) || J.hasData(e)
            }, data: function (e, t, n) {
                return Z.access(e, t, n)
            }, removeData: function (e, t) {
                Z.remove(e, t)
            }, _data: function (e, t, n) {
                return J.access(e, t, n)
            }, _removeData: function (e, t) {
                J.remove(e, t)
            }
        }), C.fn.extend({
            data: function (e, t) {
                var n, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = Z.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = K(r.slice(5)), ne(o, r, i[r]));
                        J.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function () {
                    Z.set(this, e)
                }) : U(this, function (t) {
                    var n;
                    if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) ? n : void 0 !== (n = ne(o, e)) ? n : void 0;
                    this.each(function () {
                        Z.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            }, removeData: function (e) {
                return this.each(function () {
                    Z.remove(this, e)
                })
            }
        }), C.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, C.makeArray(n)) : r.push(n)), r || []
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = C.queue(e, t), r = n.length, i = n.shift(), o = C._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                    C.dequeue(e, t)
                }, o)), !r && o && o.empty.fire()
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return J.get(e, n) || J.access(e, n, {
                    empty: C.Callbacks("once memory").add(function () {
                        J.remove(e, [t + "queue", n])
                    })
                })
            }
        }), C.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = C.queue(this, e, t);
                    C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    C.dequeue(this, e)
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var n, r = 1, i = C.Deferred(), o = this, a = this.length, l = function () {
                    --r || i.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(l));
                return l(), i.promise(t)
            }
        });
        var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"), oe = ["Top", "Right", "Bottom", "Left"],
            ae = function (e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display")
            }, le = function (e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
                return i
            };

        function se(e, t, n, r) {
            var i, o, a = 20, l = r ? function () {
                    return r.cur()
                } : function () {
                    return C.css(e, t, "")
                }, s = l(), u = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                c = (C.cssNumber[t] || "px" !== u && +s) && ie.exec(C.css(e, t));
            if (c && c[3] !== u) {
                for (s /= 2, u = u || c[3], c = +s || 1; a--;) C.style(e, t, c + u), (1 - o) * (1 - (o = l() / s || .5)) <= 0 && (a = 0), c /= o;
                c *= 2, C.style(e, t, c + u), n = n || []
            }
            return n && (c = +c || +s || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
        }

        var ue = {};

        function ce(e) {
            var t, n = e.ownerDocument, r = e.nodeName, i = ue[r];
            return i || (t = n.body.appendChild(n.createElement(r)), i = C.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ue[r] = i, i)
        }

        function fe(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
            for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
            return e
        }

        C.fn.extend({
            show: function () {
                return fe(this, !0)
            }, hide: function () {
                return fe(this)
            }, toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    ae(this) ? C(this).show() : C(this).hide()
                })
            }
        });
        var de = /^(?:checkbox|radio)$/i, he = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            pe = /^$|^module$|\/(?:java|ecma)script/i, ge = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function me(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && O(e, t) ? C.merge([e], n) : n
        }

        function ve(e, t) {
            for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
        }

        ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
        var ye = /<|&#?\w+;/;

        function be(e, t, n, r, i) {
            for (var o, a, l, s, u, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++) if ((o = e[h]) || 0 === o) if ("object" === k(o)) C.merge(d, o.nodeType ? [o] : o); else if (ye.test(o)) {
                for (a = a || f.appendChild(t.createElement("div")), l = (he.exec(o) || ["", ""])[1].toLowerCase(), s = ge[l] || ge._default, a.innerHTML = s[1] + C.htmlPrefilter(o) + s[2], c = s[0]; c--;) a = a.lastChild;
                C.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
            } else d.push(t.createTextNode(o));
            for (f.textContent = "", h = 0; o = d[h++];) if (r && C.inArray(o, r) > -1) i && i.push(o); else if (u = C.contains(o.ownerDocument, o), a = me(f.appendChild(o), "script"), u && ve(a), n) for (c = 0; o = a[c++];) pe.test(o.type || "") && n.push(o);
            return f
        }

        !function () {
            var e = a.createDocumentFragment().appendChild(a.createElement("div")), t = a.createElement("input");
            t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), v.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var xe = a.documentElement, we = /^key/, ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ce = /^([^.]*)(?:\.(.+)|)/;

        function Se() {
            return !0
        }

        function Te() {
            return !1
        }

        function Le() {
            try {
                return a.activeElement
            } catch (e) {
            }
        }

        function Ne(e, t, n, r, i, o) {
            var a, l;
            if ("object" == typeof t) {
                for (l in "string" != typeof n && (r = r || n, n = void 0), t) Ne(e, l, n, r, t[l], o);
                return e
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te; else if (!i) return e;
            return 1 === o && (a = i, (i = function (e) {
                return C().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = C.guid++)), e.each(function () {
                C.event.add(this, t, i, r, n)
            })
        }

        C.event = {
            global: {}, add: function (e, t, n, r, i) {
                var o, a, l, s, u, c, f, d, h, p, g, m = J.get(e);
                if (m) for (n.handler && (n = (o = n).handler, i = o.selector), i && C.find.matchesSelector(xe, i), n.guid || (n.guid = C.guid++), (s = m.events) || (s = m.events = {}), (a = m.handle) || (a = m.handle = function (t) {
                    return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                }), u = (t = (t || "").match(F) || [""]).length; u--;) h = g = (l = Ce.exec(t[u]) || [])[1], p = (l[2] || "").split(".").sort(), h && (f = C.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = C.event.special[h] || {}, c = C.extend({
                    type: h,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && C.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, o), (d = s[h]) || ((d = s[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, p, a) || e.addEventListener && e.addEventListener(h, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), C.event.global[h] = !0)
            }, remove: function (e, t, n, r, i) {
                var o, a, l, s, u, c, f, d, h, p, g, m = J.hasData(e) && J.get(e);
                if (m && (s = m.events)) {
                    for (u = (t = (t || "").match(F) || [""]).length; u--;) if (h = g = (l = Ce.exec(t[u]) || [])[1], p = (l[2] || "").split(".").sort(), h) {
                        for (f = C.event.special[h] || {}, d = s[h = (r ? f.delegateType : f.bindType) || h] || [], l = l[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || l && !l.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || C.removeEvent(e, h, m.handle), delete s[h])
                    } else for (h in s) C.event.remove(e, h + t[u], n, r, !0);
                    C.isEmptyObject(s) && J.remove(e, "handle events")
                }
            }, dispatch: function (e) {
                var t, n, r, i, o, a, l = C.event.fix(e), s = new Array(arguments.length),
                    u = (J.get(this, "events") || {})[l.type] || [], c = C.event.special[l.type] || {};
                for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                    for (a = C.event.handlers.call(this, l, u), t = 0; (i = a[t++]) && !l.isPropagationStopped();) for (l.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, l), l.result
                }
            }, handlers: function (e, t) {
                var n, r, i, o, a, l = [], s = t.delegateCount, u = e.target;
                if (s && u.nodeType && !("click" === e.type && e.button >= 1)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                    for (o = [], a = {}, n = 0; n < s; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? C(i, this).index(u) > -1 : C.find(i, this, null, [u]).length), a[i] && o.push(r);
                    o.length && l.push({elem: u, handlers: o})
                }
                return u = this, s < t.length && l.push({elem: u, handlers: t.slice(s)}), l
            }, addProp: function (e, t) {
                Object.defineProperty(C.Event.prototype, e, {
                    enumerable: !0, configurable: !0, get: y(t) ? function () {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[e]
                    }, set: function (t) {
                        Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                    }
                })
            }, fix: function (e) {
                return e[C.expando] ? e : new C.Event(e)
            }, special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== Le() && this.focus) return this.focus(), !1
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === Le() && this.blur) return this.blur(), !1
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && O(this, "input")) return this.click(), !1
                    }, _default: function (e) {
                        return O(e.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, C.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, C.Event = function (e, t) {
            if (!(this instanceof C.Event)) return new C.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
        }, C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: Te,
            isPropagationStopped: Te,
            isImmediatePropagationStopped: Te,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, C.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
                var t = e.button;
                return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, C.event.addProp), C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            C.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, r = e.relatedTarget, i = e.handleObj;
                    return r && (r === this || C.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), C.fn.extend({
            on: function (e, t, n, r) {
                return Ne(this, e, t, n, r)
            }, one: function (e, t, n, r) {
                return Ne(this, e, t, n, r, 1)
            }, off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
                    C.event.remove(this, e, n, t)
                })
            }
        });
        var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Me = /<script|<style|<link/i, Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function De(e, t) {
            return O(e, "table") && O(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
        }

        function Pe(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function He(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Re(e, t) {
            var n, r, i, o, a, l, s, u;
            if (1 === t.nodeType) {
                if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), u = o.events)) for (i in delete a.handle, a.events = {}, u) for (n = 0, r = u[i].length; n < r; n++) C.event.add(t, i, u[i][n]);
                Z.hasData(e) && (l = Z.access(e), s = C.extend({}, l), Z.set(t, s))
            }
        }

        function Ie(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && de.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function We(e, t, n, r) {
            t = u.apply([], t);
            var i, o, a, l, s, c, f = 0, d = e.length, h = d - 1, p = t[0], g = y(p);
            if (g || d > 1 && "string" == typeof p && !v.checkClone && Oe.test(p)) return e.each(function (i) {
                var o = e.eq(i);
                g && (t[0] = p.call(this, i, o.html())), We(o, t, n, r)
            });
            if (d && (o = (i = be(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                for (l = (a = C.map(me(i, "script"), Pe)).length; f < d; f++) s = i, f !== h && (s = C.clone(s, !0, !0), l && C.merge(a, me(s, "script"))), n.call(e[f], s, f);
                if (l) for (c = a[a.length - 1].ownerDocument, C.map(a, He), f = 0; f < l; f++) s = a[f], pe.test(s.type || "") && !J.access(s, "globalEval") && C.contains(c, s) && (s.src && "module" !== (s.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(s.src) : w(s.textContent.replace(Ee, ""), c, s))
            }
            return e
        }

        function Fe(e, t, n) {
            for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || C.cleanData(me(r)), r.parentNode && (n && C.contains(r.ownerDocument, r) && ve(me(r, "script")), r.parentNode.removeChild(r));
            return e
        }

        C.extend({
            htmlPrefilter: function (e) {
                return e.replace(Ae, "<$1></$2>")
            }, clone: function (e, t, n) {
                var r, i, o, a, l = e.cloneNode(!0), s = C.contains(e.ownerDocument, e);
                if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (a = me(l), r = 0, i = (o = me(e)).length; r < i; r++) Ie(o[r], a[r]);
                if (t) if (n) for (o = o || me(e), a = a || me(l), r = 0, i = o.length; r < i; r++) Re(o[r], a[r]); else Re(e, l);
                return (a = me(l, "script")).length > 0 && ve(a, !s && me(e, "script")), l
            }, cleanData: function (e) {
                for (var t, n, r, i = C.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events) for (r in t.events) i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0
                    }
                    n[Z.expando] && (n[Z.expando] = void 0)
                }
            }
        }), C.fn.extend({
            detach: function (e) {
                return Fe(this, e, !0)
            }, remove: function (e) {
                return Fe(this, e)
            }, text: function (e) {
                return U(this, function (e) {
                    return void 0 === e ? C.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            }, append: function () {
                return We(this, arguments, function (e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
                })
            }, prepend: function () {
                return We(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = De(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            }, before: function () {
                return We(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            }, after: function () {
                return We(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(me(e, !1)), e.textContent = "");
                return this
            }, clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return C.clone(this, e, t)
                })
            }, html: function (e) {
                return U(this, function (e) {
                    var t = this[0] || {}, n = 0, r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Me.test(e) && !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = C.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(me(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {
                        }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            }, replaceWith: function () {
                var e = [];
                return We(this, arguments, function (t) {
                    var n = this.parentNode;
                    C.inArray(this, e) < 0 && (C.cleanData(me(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            C.fn[e] = function (e) {
                for (var n, r = [], i = C(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), C(i[a])[t](n), c.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var je = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), _e = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n), t.getComputedStyle(e)
        }, Be = new RegExp(oe.join("|"), "i");

        function ze(e, t, n) {
            var r, i, o, a, l = e.style;
            return (n = n || _e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || C.contains(e.ownerDocument, e) || (a = C.style(e, t)), !v.pixelBoxStyles() && je.test(a) && Be.test(t) && (r = l.width, i = l.minWidth, o = l.maxWidth, l.minWidth = l.maxWidth = l.width = a, a = n.width, l.width = r, l.minWidth = i, l.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function qe(e, t) {
            return {
                get: function () {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }

        !function () {
            function e() {
                if (c) {
                    u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", xe.appendChild(u).appendChild(c);
                    var e = n.getComputedStyle(c);
                    r = "1%" !== e.top, s = 12 === t(e.marginLeft), c.style.right = "60%", l = 36 === t(e.right), i = 36 === t(e.width), c.style.position = "absolute", o = 36 === c.offsetWidth || "absolute", xe.removeChild(u), c = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }

            var r, i, o, l, s, u = a.createElement("div"), c = a.createElement("div");
            c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === c.style.backgroundClip, C.extend(v, {
                boxSizingReliable: function () {
                    return e(), i
                }, pixelBoxStyles: function () {
                    return e(), l
                }, pixelPosition: function () {
                    return e(), r
                }, reliableMarginLeft: function () {
                    return e(), s
                }, scrollboxSize: function () {
                    return e(), o
                }
            }))
        }();
        var $e = /^(none|table(?!-c[ea]).+)/, Ue = /^--/,
            Ve = {position: "absolute", visibility: "hidden", display: "block"},
            Ge = {letterSpacing: "0", fontWeight: "400"}, Xe = ["Webkit", "Moz", "ms"],
            Ke = a.createElement("div").style;

        function Ye(e) {
            var t = C.cssProps[e];
            return t || (t = C.cssProps[e] = function (e) {
                if (e in Ke) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;) if ((e = Xe[n] + t) in Ke) return e
            }(e) || e), t
        }

        function Qe(e, t, n) {
            var r = ie.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function Je(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0, l = 0, s = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (s += C.css(e, n + oe[a], !0, i)), r ? ("content" === n && (s -= C.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (s -= C.css(e, "border" + oe[a] + "Width", !0, i))) : (s += C.css(e, "padding" + oe[a], !0, i), "padding" !== n ? s += C.css(e, "border" + oe[a] + "Width", !0, i) : l += C.css(e, "border" + oe[a] + "Width", !0, i));
            return !r && o >= 0 && (s += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - s - l - .5))), s
        }

        function Ze(e, t, n) {
            var r = _e(e), i = ze(e, t, r), o = "border-box" === C.css(e, "boxSizing", !1, r), a = o;
            if (je.test(i)) {
                if (!n) return i;
                i = "auto"
            }
            return a = a && (v.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === C.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Je(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
        }

        function et(e, t, n, r, i) {
            return new et.prototype.init(e, t, n, r, i)
        }

        C.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = ze(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, l = K(t), s = Ue.test(t), u = e.style;
                    if (s || (t = Ye(l)), a = C.cssHooks[t] || C.cssHooks[l], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                    "string" === (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (C.cssNumber[l] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (s ? u.setProperty(t, n) : u[t] = n))
                }
            },
            css: function (e, t, n, r) {
                var i, o, a, l = K(t);
                return Ue.test(t) || (t = Ye(l)), (a = C.cssHooks[t] || C.cssHooks[l]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = ze(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
            }
        }), C.each(["height", "width"], function (e, t) {
            C.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n) return !$e.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, r) : le(e, Ve, function () {
                        return Ze(e, t, r)
                    })
                }, set: function (e, n, r) {
                    var i, o = _e(e), a = "border-box" === C.css(e, "boxSizing", !1, o), l = r && Je(e, t, r, a, o);
                    return a && v.scrollboxSize() === o.position && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Je(e, t, "border", !1, o) - .5)), l && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = C.css(e, t)), Qe(0, n, l)
                }
            }
        }), C.cssHooks.marginLeft = qe(v.reliableMarginLeft, function (e, t) {
            if (t) return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {marginLeft: 0}, function () {
                return e.getBoundingClientRect().left
            })) + "px"
        }), C.each({margin: "", padding: "", border: "Width"}, function (e, t) {
            C.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, "margin" !== e && (C.cssHooks[e + t].set = Qe)
        }), C.fn.extend({
            css: function (e, t) {
                return U(this, function (e, t, n) {
                    var r, i, o = {}, a = 0;
                    if (Array.isArray(t)) {
                        for (r = _e(e), i = t.length; a < i; a++) o[t[a]] = C.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), C.Tween = et, et.prototype = {
            constructor: et, init: function (e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (C.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = et.propHooks[this.prop];
                return e && e.get ? e.get(this) : et.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = et.propHooks[this.prop];
                return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
            }
        }, et.prototype.init.prototype = et.prototype, et.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                }, set: function (e) {
                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, et.propHooks.scrollTop = et.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, C.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }, _default: "swing"
        }, C.fx = et.prototype.init, C.fx.step = {};
        var tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;

        function ot() {
            nt && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ot) : n.setTimeout(ot, C.fx.interval), C.fx.tick())
        }

        function at() {
            return n.setTimeout(function () {
                tt = void 0
            }), tt = Date.now()
        }

        function lt(e, t) {
            var n, r = 0, i = {height: e};
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function st(e, t, n) {
            for (var r, i = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
        }

        function ut(e, t, n) {
            var r, i, o = 0, a = ut.prefilters.length, l = C.Deferred().always(function () {
                delete s.elem
            }), s = function () {
                if (i) return !1;
                for (var t = tt || at(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(r);
                return l.notifyWith(e, [u, r, n]), r < 1 && a ? n : (a || l.notifyWith(e, [u, 1, 0]), l.resolveWith(e, [u]), !1)
            }, u = l.promise({
                elem: e,
                props: C.extend({}, t),
                opts: C.extend(!0, {specialEasing: {}, easing: C.easing._default}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: tt || at(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = C.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0, r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) u.tweens[n].run(1);
                    return t ? (l.notifyWith(e, [u, 1, 0]), l.resolveWith(e, [u, t])) : l.rejectWith(e, [u, t]), this
                }
            }), c = u.props;
            for (!function (e, t) {
                var n, r, i, o, a;
                for (n in e) if (i = t[r = K(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = C.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i
            }(c, u.opts.specialEasing); o < a; o++) if (r = ut.prefilters[o].call(u, e, c, u.opts)) return y(r.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
            return C.map(c, st, u), y(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), C.fx.timer(C.extend(s, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u
        }

        C.Animation = C.extend(ut, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return se(n.elem, e, ie.exec(t), n), n
                }]
            }, tweener: function (e, t) {
                y(e) ? (t = e, e = ["*"]) : e = e.match(F);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
            }, prefilters: [function (e, t, n) {
                var r, i, o, a, l, s, u, c, f = "width" in t || "height" in t, d = this, h = {}, p = e.style,
                    g = e.nodeType && ae(e), m = J.get(e, "fxshow");
                for (r in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || l()
                }), a.unqueued++, d.always(function () {
                    d.always(function () {
                        a.unqueued--, C.queue(e, "fx").length || a.empty.fire()
                    })
                })), t) if (i = t[r], rt.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[r]) continue;
                        g = !0
                    }
                    h[r] = m && m[r] || C.style(e, r)
                }
                if ((s = !C.isEmptyObject(t)) || !C.isEmptyObject(h)) for (r in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = J.get(e, "display")), "none" === (c = C.css(e, "display")) && (u ? c = u : (fe([e], !0), u = e.style.display || u, c = C.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === C.css(e, "float") && (s || (d.done(function () {
                    p.display = u
                }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), s = !1, h) s || (m ? "hidden" in m && (g = m.hidden) : m = J.access(e, "fxshow", {display: u}), o && (m.hidden = !g), g && fe([e], !0), d.done(function () {
                    for (r in g || fe([e]), J.remove(e, "fxshow"), h) C.style(e, r, h[r])
                })), s = st(g ? m[r] : 0, r, d), r in m || (m[r] = s.start, g && (s.end = s.start, s.start = 0))
            }], prefilter: function (e, t) {
                t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
            }
        }), C.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? C.extend({}, e) : {
                complete: n || !n && t || y(e) && e,
                duration: e,
                easing: n && t || t && !y(t) && t
            };
            return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                y(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
            }, r
        }, C.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
            }, animate: function (e, t, n, r) {
                var i = C.isEmptyObject(e), o = C.speed(t, n, r), a = function () {
                    var t = ut(this, C.extend({}, e), o);
                    (i || J.get(this, "finish")) && t.stop(!0)
                };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            }, stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0, i = null != e && e + "queueHooks", o = C.timers, a = J.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && it.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || C.dequeue(this, e)
                })
            }, finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = J.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = C.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, C.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), C.each(["toggle", "show", "hide"], function (e, t) {
            var n = C.fn[t];
            C.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, r, i)
            }
        }), C.each({
            slideDown: lt("show"),
            slideUp: lt("hide"),
            slideToggle: lt("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            C.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), C.timers = [], C.fx.tick = function () {
            var e, t = 0, n = C.timers;
            for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || C.fx.stop(), tt = void 0
        }, C.fx.timer = function (e) {
            C.timers.push(e), C.fx.start()
        }, C.fx.interval = 13, C.fx.start = function () {
            nt || (nt = !0, ot())
        }, C.fx.stop = function () {
            nt = null
        }, C.fx.speeds = {slow: 600, fast: 200, _default: 400}, C.fn.delay = function (e, t) {
            return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, r) {
                var i = n.setTimeout(t, e);
                r.stop = function () {
                    n.clearTimeout(i)
                }
            })
        }, function () {
            var e = a.createElement("input"), t = a.createElement("select").appendChild(a.createElement("option"));
            e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = a.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value
        }();
        var ct, ft = C.expr.attrHandle;
        C.fn.extend({
            attr: function (e, t) {
                return U(this, C.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each(function () {
                    C.removeAttr(this, e)
                })
            }
        }), C.extend({
            attr: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!v.radioValue && "radio" === t && O(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }, removeAttr: function (e, t) {
                var n, r = 0, i = t && t.match(F);
                if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n)
            }
        }), ct = {
            set: function (e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ft[t] || C.find.attr;
            ft[t] = function (e, t, r) {
                var i, o, a = t.toLowerCase();
                return r || (o = ft[a], ft[a] = i, i = null != n(e, t, r) ? a : null, ft[a] = o), i
            }
        });
        var dt = /^(?:input|select|textarea|button)$/i, ht = /^(?:a|area)$/i;

        function pt(e) {
            return (e.match(F) || []).join(" ")
        }

        function gt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function mt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(F) || []
        }

        C.fn.extend({
            prop: function (e, t) {
                return U(this, C.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return this.each(function () {
                    delete this[C.propFix[e] || e]
                })
            }
        }), C.extend({
            prop: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, i = C.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = C.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : dt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), v.optSelected || (C.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }, set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            C.propFix[this.toLowerCase()] = this
        }), C.fn.extend({
            addClass: function (e) {
                var t, n, r, i, o, a, l, s = 0;
                if (y(e)) return this.each(function (t) {
                    C(this).addClass(e.call(this, t, gt(this)))
                });
                if ((t = mt(e)).length) for (; n = this[s++];) if (i = gt(n), r = 1 === n.nodeType && " " + pt(i) + " ") {
                    for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    i !== (l = pt(r)) && n.setAttribute("class", l)
                }
                return this
            }, removeClass: function (e) {
                var t, n, r, i, o, a, l, s = 0;
                if (y(e)) return this.each(function (t) {
                    C(this).removeClass(e.call(this, t, gt(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((t = mt(e)).length) for (; n = this[s++];) if (i = gt(n), r = 1 === n.nodeType && " " + pt(i) + " ") {
                    for (a = 0; o = t[a++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                    i !== (l = pt(r)) && n.setAttribute("class", l)
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e, r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function (n) {
                    C(this).toggleClass(e.call(this, n, gt(this), t), t)
                }) : this.each(function () {
                    var t, i, o, a;
                    if (r) for (i = 0, o = C(this), a = mt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || ((t = gt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
                })
            }, hasClass: function (e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + pt(gt(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var vt = /\r/g;
        C.fn.extend({
            val: function (e) {
                var t, n, r, i = this[0];
                return arguments.length ? (r = y(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, C(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = C.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                })) : i ? (t = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(vt, "") : null == n ? "" : n : void 0
            }
        }), C.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : pt(C.text(e))
                    }
                }, select: {
                    get: function (e) {
                        var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, l = a ? null : [],
                            s = a ? o + 1 : i.length;
                        for (r = o < 0 ? s : a ? o : 0; r < s; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !O(n.parentNode, "optgroup"))) {
                            if (t = C(n).val(), a) return t;
                            l.push(t)
                        }
                        return l
                    }, set: function (e, t) {
                        for (var n, r, i = e.options, o = C.makeArray(t), a = i.length; a--;) ((r = i[a]).selected = C.inArray(C.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), C.each(["radio", "checkbox"], function () {
            C.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1
                }
            }, v.checkOn || (C.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), v.focusin = "onfocusin" in n;
        var yt = /^(?:focusinfocus|focusoutblur)$/, bt = function (e) {
            e.stopPropagation()
        };
        C.extend(C.event, {
            trigger: function (e, t, r, i) {
                var o, l, s, u, c, f, d, h, g = [r || a], m = p.call(e, "type") ? e.type : e,
                    v = p.call(e, "namespace") ? e.namespace.split(".") : [];
                if (l = h = s = r = r || a, 3 !== r.nodeType && 8 !== r.nodeType && !yt.test(m + C.event.triggered) && (m.indexOf(".") > -1 && (m = (v = m.split(".")).shift(), v.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[C.expando] ? e : new C.Event(m, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : C.makeArray(t, [e]), d = C.event.special[m] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, t))) {
                    if (!i && !d.noBubble && !b(r)) {
                        for (u = d.delegateType || m, yt.test(u + m) || (l = l.parentNode); l; l = l.parentNode) g.push(l), s = l;
                        s === (r.ownerDocument || a) && g.push(s.defaultView || s.parentWindow || n)
                    }
                    for (o = 0; (l = g[o++]) && !e.isPropagationStopped();) h = l, e.type = o > 1 ? u : d.bindType || m, (f = (J.get(l, "events") || {})[e.type] && J.get(l, "handle")) && f.apply(l, t), (f = c && l[c]) && f.apply && Y(l) && (e.result = f.apply(l, t), !1 === e.result && e.preventDefault());
                    return e.type = m, i || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), t) || !Y(r) || c && y(r[m]) && !b(r) && ((s = r[c]) && (r[c] = null), C.event.triggered = m, e.isPropagationStopped() && h.addEventListener(m, bt), r[m](), e.isPropagationStopped() && h.removeEventListener(m, bt), C.event.triggered = void 0, s && (r[c] = s)), e.result
                }
            }, simulate: function (e, t, n) {
                var r = C.extend(new C.Event, n, {type: e, isSimulated: !0});
                C.event.trigger(r, null, t)
            }
        }), C.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    C.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0)
            }
        }), v.focusin || C.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var n = function (e) {
                C.event.simulate(t, e.target, C.event.fix(e))
            };
            C.event.special[t] = {
                setup: function () {
                    var r = this.ownerDocument || this, i = J.access(r, t);
                    i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
                }, teardown: function () {
                    var r = this.ownerDocument || this, i = J.access(r, t) - 1;
                    i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
                }
            }
        });
        var xt = n.location, wt = Date.now(), kt = /\?/;
        C.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
        };
        var Ct = /\[\]$/, St = /\r?\n/g, Tt = /^(?:submit|button|image|reset|file)$/i,
            Lt = /^(?:input|select|textarea|keygen)/i;

        function Nt(e, t, n, r) {
            var i;
            if (Array.isArray(t)) C.each(t, function (t, i) {
                n || Ct.test(e) ? r(e, i) : Nt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            }); else if (n || "object" !== k(t)) r(e, t); else for (i in t) Nt(e + "[" + i + "]", t[i], n, r)
        }

        C.param = function (e, t) {
            var n, r = [], i = function (e, t) {
                var n = y(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function () {
                i(this.name, this.value)
            }); else for (n in e) Nt(n, e[n], t, i);
            return r.join("&")
        }, C.fn.extend({
            serialize: function () {
                return C.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !C(this).is(":disabled") && Lt.test(this.nodeName) && !Tt.test(e) && (this.checked || !de.test(e))
                }).map(function (e, t) {
                    var n = C(this).val();
                    return null == n ? null : Array.isArray(n) ? C.map(n, function (e) {
                        return {name: t.name, value: e.replace(St, "\r\n")}
                    }) : {name: t.name, value: n.replace(St, "\r\n")}
                }).get()
            }
        });
        var At = /%20/g, Mt = /#.*$/, Ot = /([?&])_=[^&]*/, Et = /^(.*?):[ \t]*([^\r\n]*)$/gm, Dt = /^(?:GET|HEAD)$/,
            Pt = /^\/\//, Ht = {}, Rt = {}, It = "*/".concat("*"), Wt = a.createElement("a");

        function Ft(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0, o = t.toLowerCase().match(F) || [];
                if (y(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function jt(e, t, n, r) {
            var i = {}, o = e === Rt;

            function a(l) {
                var s;
                return i[l] = !0, C.each(e[l] || [], function (e, l) {
                    var u = l(t, n, r);
                    return "string" != typeof u || o || i[u] ? o ? !(s = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1)
                }), s
            }

            return a(t.dataTypes[0]) || !i["*"] && a("*")
        }

        function _t(e, t) {
            var n, r, i = C.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && C.extend(!0, e, r), e
        }

        Wt.href = xt.href, C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": It,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": C.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (e, t) {
                return t ? _t(_t(e, C.ajaxSettings), t) : _t(C.ajaxSettings, e)
            },
            ajaxPrefilter: Ft(Ht),
            ajaxTransport: Ft(Rt),
            ajax: function (e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, i, o, l, s, u, c, f, d, h, p = C.ajaxSetup({}, t), g = p.context || p,
                    m = p.context && (g.nodeType || g.jquery) ? C(g) : C.event, v = C.Deferred(),
                    y = C.Callbacks("once memory"), b = p.statusCode || {}, x = {}, w = {}, k = "canceled", S = {
                        readyState: 0, getResponseHeader: function (e) {
                            var t;
                            if (c) {
                                if (!l) for (l = {}; t = Et.exec(o);) l[t[1].toLowerCase()] = t[2];
                                t = l[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        }, getAllResponseHeaders: function () {
                            return c ? o : null
                        }, setRequestHeader: function (e, t) {
                            return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
                        }, overrideMimeType: function (e) {
                            return null == c && (p.mimeType = e), this
                        }, statusCode: function (e) {
                            var t;
                            if (e) if (c) S.always(e[S.status]); else for (t in e) b[t] = [b[t], e[t]];
                            return this
                        }, abort: function (e) {
                            var t = e || k;
                            return r && r.abort(t), T(0, t), this
                        }
                    };
                if (v.promise(S), p.url = ((e || p.url || xt.href) + "").replace(Pt, xt.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(F) || [""], null == p.crossDomain) {
                    u = a.createElement("a");
                    try {
                        u.href = p.url, u.href = u.href, p.crossDomain = Wt.protocol + "//" + Wt.host != u.protocol + "//" + u.host
                    } catch (e) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)), jt(Ht, p, t, S), c) return S;
                for (d in (f = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Dt.test(p.type), i = p.url.replace(Mt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(At, "+")) : (h = p.url.slice(i.length), p.data && (p.processData || "string" == typeof p.data) && (i += (kt.test(i) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (i = i.replace(Ot, "$1"), h = (kt.test(i) ? "&" : "?") + "_=" + wt++ + h), p.url = i + h), p.ifModified && (C.lastModified[i] && S.setRequestHeader("If-Modified-Since", C.lastModified[i]), C.etag[i] && S.setRequestHeader("If-None-Match", C.etag[i])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && S.setRequestHeader("Content-Type", p.contentType), S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + It + "; q=0.01" : "") : p.accepts["*"]), p.headers) S.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (!1 === p.beforeSend.call(g, S, p) || c)) return S.abort();
                if (k = "abort", y.add(p.complete), S.done(p.success), S.fail(p.error), r = jt(Rt, p, t, S)) {
                    if (S.readyState = 1, f && m.trigger("ajaxSend", [S, p]), c) return S;
                    p.async && p.timeout > 0 && (s = n.setTimeout(function () {
                        S.abort("timeout")
                    }, p.timeout));
                    try {
                        c = !1, r.send(x, T)
                    } catch (e) {
                        if (c) throw e;
                        T(-1, e)
                    }
                } else T(-1, "No Transport");

                function T(e, t, a, l) {
                    var u, d, h, x, w, k = t;
                    c || (c = !0, s && n.clearTimeout(s), r = void 0, o = l || "", S.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, a && (x = function (e, t, n) {
                        for (var r, i, o, a, l = e.contents, s = e.dataTypes; "*" === s[0];) s.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r) for (i in l) if (l[i] && l[i].test(r)) {
                            s.unshift(i);
                            break
                        }
                        if (s[0] in n) o = s[0]; else {
                            for (i in n) {
                                if (!s[0] || e.converters[i + " " + s[0]]) {
                                    o = i;
                                    break
                                }
                                a || (a = i)
                            }
                            o = o || a
                        }
                        if (o) return o !== s[0] && s.unshift(o), n[o]
                    }(p, S, a)), x = function (e, t, n, r) {
                        var i, o, a, l, s, u = {}, c = e.dataTypes.slice();
                        if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                        for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !s && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), s = o, o = c.shift()) if ("*" === o) o = s; else if ("*" !== s && s !== o) {
                            if (!(a = u[s + " " + o] || u["* " + o])) for (i in u) if ((l = i.split(" "))[1] === o && (a = u[s + " " + l[0]] || u["* " + l[0]])) {
                                !0 === a ? a = u[i] : !0 !== u[i] && (o = l[0], c.unshift(l[1]));
                                break
                            }
                            if (!0 !== a) if (a && e.throws) t = a(t); else try {
                                t = a(t)
                            } catch (e) {
                                return {state: "parsererror", error: a ? e : "No conversion from " + s + " to " + o}
                            }
                        }
                        return {state: "success", data: t}
                    }(p, x, S, u), u ? (p.ifModified && ((w = S.getResponseHeader("Last-Modified")) && (C.lastModified[i] = w), (w = S.getResponseHeader("etag")) && (C.etag[i] = w)), 204 === e || "HEAD" === p.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = x.state, d = x.data, u = !(h = x.error))) : (h = k, !e && k || (k = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || k) + "", u ? v.resolveWith(g, [d, k, S]) : v.rejectWith(g, [S, k, h]), S.statusCode(b), b = void 0, f && m.trigger(u ? "ajaxSuccess" : "ajaxError", [S, p, u ? d : h]), y.fireWith(g, [S, k]), f && (m.trigger("ajaxComplete", [S, p]), --C.active || C.event.trigger("ajaxStop")))
                }

                return S
            },
            getJSON: function (e, t, n) {
                return C.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return C.get(e, void 0, t, "script")
            }
        }), C.each(["get", "post"], function (e, t) {
            C[t] = function (e, n, r, i) {
                return y(n) && (i = i || r, r = n, n = void 0), C.ajax(C.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                }, C.isPlainObject(e) && e))
            }
        }), C._evalUrl = function (e) {
            return C.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
        }, C.fn.extend({
            wrapAll: function (e) {
                var t;
                return this[0] && (y(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            }, wrapInner: function (e) {
                return y(e) ? this.each(function (t) {
                    C(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = C(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            }, wrap: function (e) {
                var t = y(e);
                return this.each(function (n) {
                    C(this).wrapAll(t ? e.call(this, n) : e)
                })
            }, unwrap: function (e) {
                return this.parent(e).not("body").each(function () {
                    C(this).replaceWith(this.childNodes)
                }), this
            }
        }), C.expr.pseudos.hidden = function (e) {
            return !C.expr.pseudos.visible(e)
        }, C.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, C.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (e) {
            }
        };
        var Bt = {0: 200, 1223: 204}, zt = C.ajaxSettings.xhr();
        v.cors = !!zt && "withCredentials" in zt, v.ajax = zt = !!zt, C.ajaxTransport(function (e) {
            var t, r;
            if (v.cors || zt && !e.crossDomain) return {
                send: function (i, o) {
                    var a, l = e.xhr();
                    if (l.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) l[a] = e.xhrFields[a];
                    for (a in e.mimeType && l.overrideMimeType && l.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) l.setRequestHeader(a, i[a]);
                    t = function (e) {
                        return function () {
                            t && (t = r = l.onload = l.onerror = l.onabort = l.ontimeout = l.onreadystatechange = null, "abort" === e ? l.abort() : "error" === e ? "number" != typeof l.status ? o(0, "error") : o(l.status, l.statusText) : o(Bt[l.status] || l.status, l.statusText, "text" !== (l.responseType || "text") || "string" != typeof l.responseText ? {binary: l.response} : {text: l.responseText}, l.getAllResponseHeaders()))
                        }
                    }, l.onload = t(), r = l.onerror = l.ontimeout = t("error"), void 0 !== l.onabort ? l.onabort = r : l.onreadystatechange = function () {
                        4 === l.readyState && n.setTimeout(function () {
                            t && r()
                        })
                    }, t = t("abort");
                    try {
                        l.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                }, abort: function () {
                    t && t()
                }
            }
        }), C.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1)
        }), C.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (e) {
                    return C.globalEval(e), e
                }
            }
        }), C.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), C.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain) return {
                send: function (r, i) {
                    t = C("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), a.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        });
        var qt = [], $t = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = qt.pop() || C.expando + "_" + wt++;
                return this[e] = !0, e
            }
        }), C.ajaxPrefilter("json jsonp", function (e, t, r) {
            var i, o, a,
                l = !1 !== e.jsonp && ($t.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(e.data) && "data");
            if (l || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, l ? e[l] = e[l].replace($t, "$1" + i) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
                return a || C.error(i + " was not called"), a[0]
            }, e.dataTypes[0] = "json", o = n[i], n[i] = function () {
                a = arguments
            }, r.always(function () {
                void 0 === o ? C(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, qt.push(i)), a && y(o) && o(a[0]), a = o = void 0
            }), "script"
        }), v.createHTMLDocument = function () {
            var e = a.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), C.parseHTML = function (e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, t.head.appendChild(r)) : t = a), i = E.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = be([e], t, o), o && o.length && C(o).remove(), C.merge([], i.childNodes)));
            var r, i, o
        }, C.fn.load = function (e, t, n) {
            var r, i, o, a = this, l = e.indexOf(" ");
            return l > -1 && (r = pt(e.slice(l)), e = e.slice(0, l)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && C.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                o = arguments, a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
            }).always(n && function (e, t) {
                a.each(function () {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }), this
        }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            C.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), C.expr.pseudos.animated = function (e) {
            return C.grep(C.timers, function (t) {
                return e === t.elem
            }).length
        }, C.offset = {
            setOffset: function (e, t, n) {
                var r, i, o, a, l, s, u = C.css(e, "position"), c = C(e), f = {};
                "static" === u && (e.style.position = "relative"), l = c.offset(), o = C.css(e, "top"), s = C.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + s).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(s) || 0), y(t) && (t = t.call(e, n, C.extend({}, l))), null != t.top && (f.top = t.top - l.top + a), null != t.left && (f.left = t.left - l.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
            }
        }, C.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                    C.offset.setOffset(this, e, t)
                });
                var t, n, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {top: 0, left: 0} : void 0
            }, position: function () {
                if (this[0]) {
                    var e, t, n, r = this[0], i = {top: 0, left: 0};
                    if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect(); else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0), i.left += C.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - C.css(r, "marginTop", !0),
                        left: t.left - i.left - C.css(r, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                    return e || xe
                })
            }
        }), C.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
            var n = "pageYOffset" === t;
            C.fn[e] = function (r) {
                return U(this, function (e, r, i) {
                    var o;
                    if (b(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                    o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                }, e, r, arguments.length)
            }
        }), C.each(["top", "left"], function (e, t) {
            C.cssHooks[t] = qe(v.pixelPosition, function (e, n) {
                if (n) return n = ze(e, t), je.test(n) ? C(e).position()[t] + "px" : n
            })
        }), C.each({Height: "height", Width: "width"}, function (e, t) {
            C.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
                C.fn[r] = function (i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        l = n || (!0 === i || !0 === o ? "margin" : "border");
                    return U(this, function (t, n, i) {
                        var o;
                        return b(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? C.css(t, n, l) : C.style(t, n, i, l)
                    }, t, a ? i : void 0, a)
                }
            })
        }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            C.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), C.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), C.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            }, undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), C.proxy = function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = s.call(arguments, 2), (i = function () {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }).guid = e.guid = e.guid || C.guid++, i
        }, C.holdReady = function (e) {
            e ? C.readyWait++ : C.ready(!0)
        }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = O, C.isFunction = y, C.isWindow = b, C.camelCase = K, C.type = k, C.now = Date.now, C.isNumeric = function (e) {
            var t = C.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, void 0 === (r = function () {
            return C
        }.apply(t, [])) || (e.exports = r);
        var Ut = n.jQuery, Vt = n.$;
        return C.noConflict = function (e) {
            return n.$ === C && (n.$ = Vt), e && n.jQuery === C && (n.jQuery = Ut), C
        }, i || (n.jQuery = n.$ = C), C
    })
}, function (e, t, n) {
    var r, i, o;
    !function (a, l) {
        i = [e, n(39), n(41), n(42)], void 0 === (o = "function" == typeof (r = l) ? r.apply(t, i) : r) || (e.exports = o)
    }(0, function (e, t, n, r) {
        "use strict";
        var i = l(t), o = l(n), a = l(r);

        function l(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        var u = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        var c = function (e) {
            function t(e, n) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function (e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return r.resolveOptions(n), r.listenClick(e), r
            }

            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o.default), u(t, [{
                key: "resolveOptions", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === s(e.container) ? e.container : document.body
                }
            }, {
                key: "listenClick", value: function (e) {
                    var t = this;
                    this.listener = (0, a.default)(e, "click", function (e) {
                        return t.onClick(e)
                    })
                }
            }, {
                key: "onClick", value: function (e) {
                    var t = e.delegateTarget || e.currentTarget;
                    this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new i.default({
                        action: this.action(t),
                        target: this.target(t),
                        text: this.text(t),
                        container: this.container,
                        trigger: t,
                        emitter: this
                    })
                }
            }, {
                key: "defaultAction", value: function (e) {
                    return f("action", e)
                }
            }, {
                key: "defaultTarget", value: function (e) {
                    var t = f("target", e);
                    if (t) return document.querySelector(t)
                }
            }, {
                key: "defaultText", value: function (e) {
                    return f("text", e)
                }
            }, {
                key: "destroy", value: function () {
                    this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                }
            }], [{
                key: "isSupported", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                        t = "string" == typeof e ? [e] : e, n = !!document.queryCommandSupported;
                    return t.forEach(function (e) {
                        n = n && !!document.queryCommandSupported(e)
                    }), n
                }
            }]), t
        }();

        function f(e, t) {
            var n = "data-clipboard-" + e;
            if (t.hasAttribute(n)) return t.getAttribute(n)
        }

        e.exports = c
    })
}, function (e, t, n) {
    var r, i, o;
    !function (a, l) {
        i = [e, n(40)], void 0 === (o = "function" == typeof (r = l) ? r.apply(t, i) : r) || (e.exports = o)
    }(0, function (e, t) {
        "use strict";
        var n = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(t);
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), o = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.resolveOptions(t), this.initSelection()
            }

            return i(e, [{
                key: "resolveOptions", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                }
            }, {
                key: "initSelection", value: function () {
                    this.text ? this.selectFake() : this.target && this.selectTarget()
                }
            }, {
                key: "selectFake", value: function () {
                    var e = this, t = "rtl" == document.documentElement.getAttribute("dir");
                    this.removeFake(), this.fakeHandlerCallback = function () {
                        return e.removeFake()
                    }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                    var r = window.pageYOffset || document.documentElement.scrollTop;
                    this.fakeElem.style.top = r + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, n.default)(this.fakeElem), this.copyText()
                }
            }, {
                key: "removeFake", value: function () {
                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                }
            }, {
                key: "selectTarget", value: function () {
                    this.selectedText = (0, n.default)(this.target), this.copyText()
                }
            }, {
                key: "copyText", value: function () {
                    var e = void 0;
                    try {
                        e = document.execCommand(this.action)
                    } catch (t) {
                        e = !1
                    }
                    this.handleResult(e)
                }
            }, {
                key: "handleResult", value: function (e) {
                    this.emitter.emit(e ? "success" : "error", {
                        action: this.action,
                        text: this.selectedText,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this)
                    })
                }
            }, {
                key: "clearSelection", value: function () {
                    this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                }
            }, {
                key: "destroy", value: function () {
                    this.removeFake()
                }
            }, {
                key: "action", set: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                    if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                }, get: function () {
                    return this._action
                }
            }, {
                key: "target", set: function (e) {
                    if (void 0 !== e) {
                        if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                        if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        this._target = e
                    }
                }, get: function () {
                    return this._target
                }
            }]), e
        }();
        e.exports = o
    })
}, function (e, t) {
    e.exports = function (e) {
        var t;
        if ("SELECT" === e.nodeName) e.focus(), t = e.value; else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
            var n = e.hasAttribute("readonly");
            n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
        } else {
            e.hasAttribute("contenteditable") && e.focus();
            var r = window.getSelection(), i = document.createRange();
            i.selectNodeContents(e), r.removeAllRanges(), r.addRange(i), t = r.toString()
        }
        return t
    }
}, function (e, t) {
    function n() {
    }

    n.prototype = {
        on: function (e, t, n) {
            var r = this.e || (this.e = {});
            return (r[e] || (r[e] = [])).push({fn: t, ctx: n}), this
        }, once: function (e, t, n) {
            var r = this;

            function i() {
                r.off(e, i), t.apply(n, arguments)
            }

            return i._ = t, this.on(e, i, n)
        }, emit: function (e) {
            for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, i = n.length; r < i; r++) n[r].fn.apply(n[r].ctx, t);
            return this
        }, off: function (e, t) {
            var n = this.e || (this.e = {}), r = n[e], i = [];
            if (r && t) for (var o = 0, a = r.length; o < a; o++) r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
            return i.length ? n[e] = i : delete n[e], this
        }
    }, e.exports = n
}, function (e, t, n) {
    var r = n(43), i = n(44);
    e.exports = function (e, t, n) {
        if (!e && !t && !n) throw new Error("Missing required arguments");
        if (!r.string(t)) throw new TypeError("Second argument must be a String");
        if (!r.fn(n)) throw new TypeError("Third argument must be a Function");
        if (r.node(e)) return function (e, t, n) {
            return e.addEventListener(t, n), {
                destroy: function () {
                    e.removeEventListener(t, n)
                }
            }
        }(e, t, n);
        if (r.nodeList(e)) return function (e, t, n) {
            return Array.prototype.forEach.call(e, function (e) {
                e.addEventListener(t, n)
            }), {
                destroy: function () {
                    Array.prototype.forEach.call(e, function (e) {
                        e.removeEventListener(t, n)
                    })
                }
            }
        }(e, t, n);
        if (r.string(e)) return function (e, t, n) {
            return i(document.body, e, t, n)
        }(e, t, n);
        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
    }
}, function (e, t) {
    t.node = function (e) {
        return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
    }, t.nodeList = function (e) {
        var n = Object.prototype.toString.call(e);
        return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in e && (0 === e.length || t.node(e[0]))
    }, t.string = function (e) {
        return "string" == typeof e || e instanceof String
    }, t.fn = function (e) {
        return "[object Function]" === Object.prototype.toString.call(e)
    }
}, function (e, t, n) {
    var r = n(45);

    function i(e, t, n, i, o) {
        var a = function (e, t, n, i) {
            return function (n) {
                n.delegateTarget = r(n.target, t), n.delegateTarget && i.call(e, n)
            }
        }.apply(this, arguments);
        return e.addEventListener(n, a, o), {
            destroy: function () {
                e.removeEventListener(n, a, o)
            }
        }
    }

    e.exports = function (e, t, n, r, o) {
        return "function" == typeof e.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function (e) {
            return i(e, t, n, r, o)
        }))
    }
}, function (e, t) {
    var n = 9;
    if ("undefined" != typeof Element && !Element.prototype.matches) {
        var r = Element.prototype;
        r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
    }
    e.exports = function (e, t) {
        for (; e && e.nodeType !== n;) {
            if ("function" == typeof e.matches && e.matches(t)) return e;
            e = e.parentNode
        }
    }
}, function (e, t, n) {
    !function (e) {
        e(n(5))
    }(function (e) {
        "use strict";
        e.defineMode("javascript", function (t, n) {
            var r, i, o = t.indentUnit, a = n.statementIndent, l = n.jsonld, s = n.json || l, u = n.typescript,
                c = n.wordCharacters || /[\w$\xa1-\uffff]/, f = function () {
                    function e(e) {
                        return {type: e, style: "keyword"}
                    }

                    var t = e("keyword a"), n = e("keyword b"), r = e("keyword c"), i = e("keyword d"), o = e("operator"),
                        a = {type: "atom", style: "atom"};
                    return {
                        if: e("if"),
                        while: t,
                        with: t,
                        else: n,
                        do: n,
                        try: n,
                        finally: n,
                        return: i,
                        break: i,
                        continue: i,
                        new: e("new"),
                        delete: r,
                        void: r,
                        throw: r,
                        debugger: e("debugger"),
                        var: e("var"),
                        const: e("var"),
                        let: e("var"),
                        function: e("function"),
                        catch: e("catch"),
                        for: e("for"),
                        switch: e("switch"),
                        case: e("case"),
                        default: e("default"),
                        in: o,
                        typeof: o,
                        instanceof: o,
                        true: a,
                        false: a,
                        null: a,
                        undefined: a,
                        NaN: a,
                        Infinity: a,
                        this: e("this"),
                        class: e("class"),
                        super: e("atom"),
                        yield: r,
                        export: e("export"),
                        import: e("import"),
                        extends: r,
                        await: r
                    }
                }(), d = /[+\-*&%=<>!?|~^@]/,
                h = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

            function p(e, t, n) {
                return r = e, i = n, t
            }

            function g(e, t) {
                var n = e.next();
                if ('"' == n || "'" == n) return t.tokenize = function (e) {
                    return function (t, n) {
                        var r, i = !1;
                        if (l && "@" == t.peek() && t.match(h)) return n.tokenize = g, p("jsonld-keyword", "meta");
                        for (; null != (r = t.next()) && (r != e || i);) i = !i && "\\" == r;
                        return i || (n.tokenize = g), p("string", "string")
                    }
                }(n), t.tokenize(e, t);
                if ("." == n && e.match(/^\d+(?:[eE][+\-]?\d+)?/)) return p("number", "number");
                if ("." == n && e.match("..")) return p("spread", "meta");
                if (/[\[\]{}\(\),;\:\.]/.test(n)) return p(n);
                if ("=" == n && e.eat(">")) return p("=>", "operator");
                if ("0" == n && e.match(/^(?:x[\da-f]+|o[0-7]+|b[01]+)n?/i)) return p("number", "number");
                if (/\d/.test(n)) return e.match(/^\d*(?:n|(?:\.\d*)?(?:[eE][+\-]?\d+)?)?/), p("number", "number");
                if ("/" == n) return e.eat("*") ? (t.tokenize = m, m(e, t)) : e.eat("/") ? (e.skipToEnd(), p("comment", "comment")) : Ge(e, t, 1) ? (function (e) {
                    for (var t, n = !1, r = !1; null != (t = e.next());) {
                        if (!n) {
                            if ("/" == t && !r) return;
                            "[" == t ? r = !0 : r && "]" == t && (r = !1)
                        }
                        n = !n && "\\" == t
                    }
                }(e), e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), p("regexp", "string-2")) : (e.eat("="), p("operator", "operator", e.current()));
                if ("`" == n) return t.tokenize = v, v(e, t);
                if ("#" == n) return e.skipToEnd(), p("error", "error");
                if (d.test(n)) return ">" == n && t.lexical && ">" == t.lexical.type || (e.eat("=") ? "!" != n && "=" != n || e.eat("=") : /[<>*+\-]/.test(n) && (e.eat(n), ">" == n && e.eat(n))), p("operator", "operator", e.current());
                if (c.test(n)) {
                    e.eatWhile(c);
                    var r = e.current();
                    if ("." != t.lastType) {
                        if (f.propertyIsEnumerable(r)) {
                            var i = f[r];
                            return p(i.type, i.style, r)
                        }
                        if ("async" == r && e.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, !1)) return p("async", "keyword", r)
                    }
                    return p("variable", "variable", r)
                }
            }

            function m(e, t) {
                for (var n, r = !1; n = e.next();) {
                    if ("/" == n && r) {
                        t.tokenize = g;
                        break
                    }
                    r = "*" == n
                }
                return p("comment", "comment")
            }

            function v(e, t) {
                for (var n, r = !1; null != (n = e.next());) {
                    if (!r && ("`" == n || "$" == n && e.eat("{"))) {
                        t.tokenize = g;
                        break
                    }
                    r = !r && "\\" == n
                }
                return p("quasi", "string-2", e.current())
            }

            var y = "([{}])";

            function b(e, t) {
                t.fatArrowAt && (t.fatArrowAt = null);
                var n = e.string.indexOf("=>", e.start);
                if (!(n < 0)) {
                    if (u) {
                        var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, n));
                        r && (n = r.index)
                    }
                    for (var i = 0, o = !1, a = n - 1; a >= 0; --a) {
                        var l = e.string.charAt(a), s = y.indexOf(l);
                        if (s >= 0 && s < 3) {
                            if (!i) {
                                ++a;
                                break
                            }
                            if (0 == --i) {
                                "(" == l && (o = !0);
                                break
                            }
                        } else if (s >= 3 && s < 6) ++i; else if (c.test(l)) o = !0; else {
                            if (/["'\/]/.test(l)) return;
                            if (o && !i) {
                                ++a;
                                break
                            }
                        }
                    }
                    o && !i && (t.fatArrowAt = a)
                }
            }

            var x = {atom: !0, number: !0, variable: !0, string: !0, regexp: !0, this: !0, "jsonld-keyword": !0};

            function w(e, t, n, r, i, o) {
                this.indented = e, this.column = t, this.type = n, this.prev = i, this.info = o, null != r && (this.align = r)
            }

            function k(e, t) {
                for (var n = e.localVars; n; n = n.next) if (n.name == t) return !0;
                for (var r = e.context; r; r = r.prev) for (n = r.vars; n; n = n.next) if (n.name == t) return !0
            }

            var C = {state: null, column: null, marked: null, cc: null};

            function S() {
                for (var e = arguments.length - 1; e >= 0; e--) C.cc.push(arguments[e])
            }

            function T() {
                return S.apply(null, arguments), !0
            }

            function L(e, t) {
                for (var n = t; n; n = n.next) if (n.name == e) return !0;
                return !1
            }

            function N(e) {
                var t = C.state;
                if (C.marked = "def", t.context) if ("var" == t.lexical.info && t.context && t.context.block) {
                    var r = function e(t, n) {
                        if (n) {
                            if (n.block) {
                                var r = e(t, n.prev);
                                return r ? r == n.prev ? n : new M(r, n.vars, !0) : null
                            }
                            return L(t, n.vars) ? n : new M(n.prev, new O(t, n.vars), !1)
                        }
                        return null
                    }(e, t.context);
                    if (null != r) return void (t.context = r)
                } else if (!L(e, t.localVars)) return void (t.localVars = new O(e, t.localVars));
                n.globalVars && !L(e, t.globalVars) && (t.globalVars = new O(e, t.globalVars))
            }

            function A(e) {
                return "public" == e || "private" == e || "protected" == e || "abstract" == e || "readonly" == e
            }

            function M(e, t, n) {
                this.prev = e, this.vars = t, this.block = n
            }

            function O(e, t) {
                this.name = e, this.next = t
            }

            var E = new O("this", new O("arguments", null));

            function D() {
                C.state.context = new M(C.state.context, C.state.localVars, !1), C.state.localVars = E
            }

            function P() {
                C.state.context = new M(C.state.context, C.state.localVars, !0), C.state.localVars = null
            }

            function H() {
                C.state.localVars = C.state.context.vars, C.state.context = C.state.context.prev
            }

            function R(e, t) {
                var n = function () {
                    var n = C.state, r = n.indented;
                    if ("stat" == n.lexical.type) r = n.lexical.indented; else for (var i = n.lexical; i && ")" == i.type && i.align; i = i.prev) r = i.indented;
                    n.lexical = new w(r, C.stream.column(), e, null, n.lexical, t)
                };
                return n.lex = !0, n
            }

            function I() {
                var e = C.state;
                e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented), e.lexical = e.lexical.prev)
            }

            function W(e) {
                return function t(n) {
                    return n == e ? T() : ";" == e || "}" == n || ")" == n || "]" == n ? S() : T(t)
                }
            }

            function F(e, t) {
                return "var" == e ? T(R("vardef", t), ye, W(";"), I) : "keyword a" == e ? T(R("form"), z, F, I) : "keyword b" == e ? T(R("form"), F, I) : "keyword d" == e ? C.stream.match(/^\s*$/, !1) ? T() : T(R("stat"), $, W(";"), I) : "debugger" == e ? T(W(";")) : "{" == e ? T(R("}"), P, ae, I, H) : ";" == e ? T() : "if" == e ? ("else" == C.state.lexical.info && C.state.cc[C.state.cc.length - 1] == I && C.state.cc.pop()(), T(R("form"), z, F, I, Se)) : "function" == e ? T(Oe) : "for" == e ? T(R("form"), Te, F, I) : "class" == e || u && "interface" == t ? (C.marked = "keyword", T(R("form"), Pe, I)) : "variable" == e ? u && "declare" == t ? (C.marked = "keyword", T(F)) : u && ("module" == t || "enum" == t || "type" == t) && C.stream.match(/^\s*\w/, !1) ? (C.marked = "keyword", "enum" == t ? T(Ue) : "type" == t ? T(ce, W("operator"), ce, W(";")) : T(R("form"), be, W("{"), R("}"), ae, I, I)) : u && "namespace" == t ? (C.marked = "keyword", T(R("form"), _, ae, I)) : u && "abstract" == t ? (C.marked = "keyword", T(F)) : T(R("stat"), Z) : "switch" == e ? T(R("form"), z, W("{"), R("}", "switch"), P, ae, I, I, H) : "case" == e ? T(_, W(":")) : "default" == e ? T(W(":")) : "catch" == e ? T(R("form"), D, j, F, I, H) : "export" == e ? T(R("stat"), We, I) : "import" == e ? T(R("stat"), je, I) : "async" == e ? T(F) : "@" == t ? T(_, F) : S(R("stat"), _, W(";"), I)
            }

            function j(e) {
                if ("(" == e) return T(Ee, W(")"))
            }

            function _(e, t) {
                return q(e, t, !1)
            }

            function B(e, t) {
                return q(e, t, !0)
            }

            function z(e) {
                return "(" != e ? S() : T(R(")"), _, W(")"), I)
            }

            function q(e, t, n) {
                if (C.state.fatArrowAt == C.stream.start) {
                    var r = n ? Y : K;
                    if ("(" == e) return T(D, R(")"), ie(Ee, ")"), I, W("=>"), r, H);
                    if ("variable" == e) return S(D, be, W("=>"), r, H)
                }
                var i = n ? V : U;
                return x.hasOwnProperty(e) ? T(i) : "function" == e ? T(Oe, i) : "class" == e || u && "interface" == t ? (C.marked = "keyword", T(R("form"), De, I)) : "keyword c" == e || "async" == e ? T(n ? B : _) : "(" == e ? T(R(")"), $, W(")"), I, i) : "operator" == e || "spread" == e ? T(n ? B : _) : "[" == e ? T(R("]"), $e, I, i) : "{" == e ? oe(te, "}", null, i) : "quasi" == e ? S(G, i) : "new" == e ? T(function (e) {
                    return function (t) {
                        return "." == t ? T(e ? J : Q) : "variable" == t && u ? T(ge, e ? V : U) : S(e ? B : _)
                    }
                }(n)) : "import" == e ? T(_) : T()
            }

            function $(e) {
                return e.match(/[;\}\)\],]/) ? S() : S(_)
            }

            function U(e, t) {
                return "," == e ? T(_) : V(e, t, !1)
            }

            function V(e, t, n) {
                var r = 0 == n ? U : V, i = 0 == n ? _ : B;
                return "=>" == e ? T(D, n ? Y : K, H) : "operator" == e ? /\+\+|--/.test(t) || u && "!" == t ? T(r) : u && "<" == t && C.stream.match(/^([^>]|<.*?>)*>\s*\(/, !1) ? T(R(">"), ie(ce, ">"), I, r) : "?" == t ? T(_, W(":"), i) : T(i) : "quasi" == e ? S(G, r) : ";" != e ? "(" == e ? oe(B, ")", "call", r) : "." == e ? T(ee, r) : "[" == e ? T(R("]"), $, W("]"), I, r) : u && "as" == t ? (C.marked = "keyword", T(ce, r)) : "regexp" == e ? (C.state.lastType = C.marked = "operator", C.stream.backUp(C.stream.pos - C.stream.start - 1), T(i)) : void 0 : void 0
            }

            function G(e, t) {
                return "quasi" != e ? S() : "${" != t.slice(t.length - 2) ? T(G) : T(_, X)
            }

            function X(e) {
                if ("}" == e) return C.marked = "string-2", C.state.tokenize = v, T(G)
            }

            function K(e) {
                return b(C.stream, C.state), S("{" == e ? F : _)
            }

            function Y(e) {
                return b(C.stream, C.state), S("{" == e ? F : B)
            }

            function Q(e, t) {
                if ("target" == t) return C.marked = "keyword", T(U)
            }

            function J(e, t) {
                if ("target" == t) return C.marked = "keyword", T(V)
            }

            function Z(e) {
                return ":" == e ? T(I, F) : S(U, W(";"), I)
            }

            function ee(e) {
                if ("variable" == e) return C.marked = "property", T()
            }

            function te(e, t) {
                if ("async" == e) return C.marked = "property", T(te);
                if ("variable" == e || "keyword" == C.style) {
                    return C.marked = "property", "get" == t || "set" == t ? T(ne) : (u && C.state.fatArrowAt == C.stream.start && (n = C.stream.match(/^\s*:\s*/, !1)) && (C.state.fatArrowAt = C.stream.pos + n[0].length), T(re));
                    var n
                } else {
                    if ("number" == e || "string" == e) return C.marked = l ? "property" : C.style + " property", T(re);
                    if ("jsonld-keyword" == e) return T(re);
                    if (u && A(t)) return C.marked = "keyword", T(te);
                    if ("[" == e) return T(_, le, W("]"), re);
                    if ("spread" == e) return T(B, re);
                    if ("*" == t) return C.marked = "keyword", T(te);
                    if (":" == e) return S(re)
                }
            }

            function ne(e) {
                return "variable" != e ? S(re) : (C.marked = "property", T(Oe))
            }

            function re(e) {
                return ":" == e ? T(B) : "(" == e ? S(Oe) : void 0
            }

            function ie(e, t, n) {
                function r(i, o) {
                    if (n ? n.indexOf(i) > -1 : "," == i) {
                        var a = C.state.lexical;
                        return "call" == a.info && (a.pos = (a.pos || 0) + 1), T(function (n, r) {
                            return n == t || r == t ? S() : S(e)
                        }, r)
                    }
                    return i == t || o == t ? T() : T(W(t))
                }

                return function (n, i) {
                    return n == t || i == t ? T() : S(e, r)
                }
            }

            function oe(e, t, n) {
                for (var r = 3; r < arguments.length; r++) C.cc.push(arguments[r]);
                return T(R(t, n), ie(e, t), I)
            }

            function ae(e) {
                return "}" == e ? T() : S(F, ae)
            }

            function le(e, t) {
                if (u) {
                    if (":" == e) return T(ce);
                    if ("?" == t) return T(le)
                }
            }

            function se(e) {
                if (u && ":" == e) return C.stream.match(/^\s*\w+\s+is\b/, !1) ? T(_, ue, ce) : T(ce)
            }

            function ue(e, t) {
                if ("is" == t) return C.marked = "keyword", T()
            }

            function ce(e, t) {
                return "keyof" == t || "typeof" == t ? (C.marked = "keyword", T("keyof" == t ? ce : B)) : "variable" == e || "void" == t ? (C.marked = "type", T(pe)) : "string" == e || "number" == e || "atom" == e ? T(pe) : "[" == e ? T(R("]"), ie(ce, "]", ","), I, pe) : "{" == e ? T(R("}"), ie(de, "}", ",;"), I, pe) : "(" == e ? T(ie(he, ")"), fe) : "<" == e ? T(ie(ce, ">"), ce) : void 0
            }

            function fe(e) {
                if ("=>" == e) return T(ce)
            }

            function de(e, t) {
                return "variable" == e || "keyword" == C.style ? (C.marked = "property", T(de)) : "?" == t ? T(de) : ":" == e ? T(ce) : "[" == e ? T(_, le, W("]"), de) : void 0
            }

            function he(e, t) {
                return "variable" == e && C.stream.match(/^\s*[?:]/, !1) || "?" == t ? T(he) : ":" == e ? T(ce) : S(ce)
            }

            function pe(e, t) {
                return "<" == t ? T(R(">"), ie(ce, ">"), I, pe) : "|" == t || "." == e || "&" == t ? T(ce) : "[" == e ? T(W("]"), pe) : "extends" == t || "implements" == t ? (C.marked = "keyword", T(ce)) : void 0
            }

            function ge(e, t) {
                if ("<" == t) return T(R(">"), ie(ce, ">"), I, pe)
            }

            function me() {
                return S(ce, ve)
            }

            function ve(e, t) {
                if ("=" == t) return T(ce)
            }

            function ye(e, t) {
                return "enum" == t ? (C.marked = "keyword", T(Ue)) : S(be, le, ke, Ce)
            }

            function be(e, t) {
                return u && A(t) ? (C.marked = "keyword", T(be)) : "variable" == e ? (N(t), T()) : "spread" == e ? T(be) : "[" == e ? oe(we, "]") : "{" == e ? oe(xe, "}") : void 0
            }

            function xe(e, t) {
                return "variable" != e || C.stream.match(/^\s*:/, !1) ? ("variable" == e && (C.marked = "property"), "spread" == e ? T(be) : "}" == e ? S() : T(W(":"), be, ke)) : (N(t), T(ke))
            }

            function we() {
                return S(be, ke)
            }

            function ke(e, t) {
                if ("=" == t) return T(B)
            }

            function Ce(e) {
                if ("," == e) return T(ye)
            }

            function Se(e, t) {
                if ("keyword b" == e && "else" == t) return T(R("form", "else"), F, I)
            }

            function Te(e, t) {
                return "await" == t ? T(Te) : "(" == e ? T(R(")"), Le, W(")"), I) : void 0
            }

            function Le(e) {
                return "var" == e ? T(ye, W(";"), Ae) : ";" == e ? T(Ae) : "variable" == e ? T(Ne) : S(_, W(";"), Ae)
            }

            function Ne(e, t) {
                return "in" == t || "of" == t ? (C.marked = "keyword", T(_)) : T(U, Ae)
            }

            function Ae(e, t) {
                return ";" == e ? T(Me) : "in" == t || "of" == t ? (C.marked = "keyword", T(_)) : S(_, W(";"), Me)
            }

            function Me(e) {
                ")" != e && T(_)
            }

            function Oe(e, t) {
                return "*" == t ? (C.marked = "keyword", T(Oe)) : "variable" == e ? (N(t), T(Oe)) : "(" == e ? T(D, R(")"), ie(Ee, ")"), I, se, F, H) : u && "<" == t ? T(R(">"), ie(me, ">"), I, Oe) : void 0
            }

            function Ee(e, t) {
                return "@" == t && T(_, Ee), "spread" == e ? T(Ee) : u && A(t) ? (C.marked = "keyword", T(Ee)) : S(be, le, ke)
            }

            function De(e, t) {
                return "variable" == e ? Pe(e, t) : He(e, t)
            }

            function Pe(e, t) {
                if ("variable" == e) return N(t), T(He)
            }

            function He(e, t) {
                return "<" == t ? T(R(">"), ie(me, ">"), I, He) : "extends" == t || "implements" == t || u && "," == e ? ("implements" == t && (C.marked = "keyword"), T(u ? ce : _, He)) : "{" == e ? T(R("}"), Re, I) : void 0
            }

            function Re(e, t) {
                return "async" == e || "variable" == e && ("static" == t || "get" == t || "set" == t || u && A(t)) && C.stream.match(/^\s+[\w$\xa1-\uffff]/, !1) ? (C.marked = "keyword", T(Re)) : "variable" == e || "keyword" == C.style ? (C.marked = "property", T(u ? Ie : Oe, Re)) : "[" == e ? T(_, le, W("]"), u ? Ie : Oe, Re) : "*" == t ? (C.marked = "keyword", T(Re)) : ";" == e ? T(Re) : "}" == e ? T() : "@" == t ? T(_, Re) : void 0
            }

            function Ie(e, t) {
                return "?" == t ? T(Ie) : ":" == e ? T(ce, ke) : "=" == t ? T(B) : S(Oe)
            }

            function We(e, t) {
                return "*" == t ? (C.marked = "keyword", T(qe, W(";"))) : "default" == t ? (C.marked = "keyword", T(_, W(";"))) : "{" == e ? T(ie(Fe, "}"), qe, W(";")) : S(F)
            }

            function Fe(e, t) {
                return "as" == t ? (C.marked = "keyword", T(W("variable"))) : "variable" == e ? S(B, Fe) : void 0
            }

            function je(e) {
                return "string" == e ? T() : "(" == e ? S(_) : S(_e, Be, qe)
            }

            function _e(e, t) {
                return "{" == e ? oe(_e, "}") : ("variable" == e && N(t), "*" == t && (C.marked = "keyword"), T(ze))
            }

            function Be(e) {
                if ("," == e) return T(_e, Be)
            }

            function ze(e, t) {
                if ("as" == t) return C.marked = "keyword", T(_e)
            }

            function qe(e, t) {
                if ("from" == t) return C.marked = "keyword", T(_)
            }

            function $e(e) {
                return "]" == e ? T() : S(ie(B, "]"))
            }

            function Ue() {
                return S(R("form"), be, W("{"), R("}"), ie(Ve, "}"), I, I)
            }

            function Ve() {
                return S(be, ke)
            }

            function Ge(e, t, n) {
                return t.tokenize == g && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType) || "quasi" == t.lastType && /\{\s*$/.test(e.string.slice(0, e.pos - (n || 0)))
            }

            return H.lex = !0, I.lex = !0, {
                startState: function (e) {
                    var t = {
                        tokenize: g,
                        lastType: "sof",
                        cc: [],
                        lexical: new w((e || 0) - o, 0, "block", !1),
                        localVars: n.localVars,
                        context: n.localVars && new M(null, null, !1),
                        indented: e || 0
                    };
                    return n.globalVars && "object" == typeof n.globalVars && (t.globalVars = n.globalVars), t
                },
                token: function (e, t) {
                    if (e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1), t.indented = e.indentation(), b(e, t)), t.tokenize != m && e.eatSpace()) return null;
                    var n = t.tokenize(e, t);
                    return "comment" == r ? n : (t.lastType = "operator" != r || "++" != i && "--" != i ? r : "incdec", function (e, t, n, r, i) {
                        var o = e.cc;
                        for (C.state = e, C.stream = i, C.marked = null, C.cc = o, C.style = t, e.lexical.hasOwnProperty("align") || (e.lexical.align = !0); ;) if ((o.length ? o.pop() : s ? _ : F)(n, r)) {
                            for (; o.length && o[o.length - 1].lex;) o.pop()();
                            return C.marked ? C.marked : "variable" == n && k(e, r) ? "variable-2" : t
                        }
                    }(t, n, r, i, e))
                },
                indent: function (t, r) {
                    if (t.tokenize == m) return e.Pass;
                    if (t.tokenize != g) return 0;
                    var i, l = r && r.charAt(0), s = t.lexical;
                    if (!/^\s*else\b/.test(r)) for (var u = t.cc.length - 1; u >= 0; --u) {
                        var c = t.cc[u];
                        if (c == I) s = s.prev; else if (c != Se) break
                    }
                    for (; ("stat" == s.type || "form" == s.type) && ("}" == l || (i = t.cc[t.cc.length - 1]) && (i == U || i == V) && !/^[,\.=+\-*:?[\(]/.test(r));) s = s.prev;
                    a && ")" == s.type && "stat" == s.prev.type && (s = s.prev);
                    var f = s.type, h = l == f;
                    return "vardef" == f ? s.indented + ("operator" == t.lastType || "," == t.lastType ? s.info.length + 1 : 0) : "form" == f && "{" == l ? s.indented : "form" == f ? s.indented + o : "stat" == f ? s.indented + (function (e, t) {
                        return "operator" == e.lastType || "," == e.lastType || d.test(t.charAt(0)) || /[,.]/.test(t.charAt(0))
                    }(t, r) ? a || o : 0) : "switch" != s.info || h || 0 == n.doubleIndentSwitch ? s.align ? s.column + (h ? 0 : 1) : s.indented + (h ? 0 : o) : s.indented + (/^(?:case|default)\b/.test(r) ? o : 2 * o)
                },
                electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
                blockCommentStart: s ? null : "/*",
                blockCommentEnd: s ? null : "*/",
                blockCommentContinue: s ? null : " * ",
                lineComment: s ? null : "//",
                fold: "brace",
                closeBrackets: "()[]{}''\"\"``",
                helperType: s ? "json" : "javascript",
                jsonldMode: l,
                jsonMode: s,
                expressionAllowed: Ge,
                skipExpression: function (e) {
                    var t = e.cc[e.cc.length - 1];
                    t != _ && t != B || e.cc.pop()
                }
            }
        }), e.registerHelper("wordChars", "javascript", /[\w$]/), e.defineMIME("text/javascript", "javascript"), e.defineMIME("text/ecmascript", "javascript"), e.defineMIME("application/javascript", "javascript"), e.defineMIME("application/x-javascript", "javascript"), e.defineMIME("application/ecmascript", "javascript"), e.defineMIME("application/json", {
            name: "javascript",
            json: !0
        }), e.defineMIME("application/x-json", {
            name: "javascript",
            json: !0
        }), e.defineMIME("application/ld+json", {
            name: "javascript",
            jsonld: !0
        }), e.defineMIME("text/typescript", {
            name: "javascript",
            typescript: !0
        }), e.defineMIME("application/typescript", {name: "javascript", typescript: !0})
    })
}, function (e, t, n) {
    !function (e) {
        e(n(5))
    }(function (e) {
        var t = {pairs: "()[]{}''\"\"", triples: "", explode: "[]{}"}, n = e.Pos;

        function r(e, n) {
            return "pairs" == n && "string" == typeof e ? e : "object" == typeof e && null != e[n] ? e[n] : t[n]
        }

        e.defineOption("autoCloseBrackets", !1, function (t, n, a) {
            a && a != e.Init && (t.removeKeyMap(i), t.state.closeBrackets = null), n && (o(r(n, "pairs")), t.state.closeBrackets = n, t.addKeyMap(i))
        });
        var i = {
            Backspace: function (t) {
                var i = l(t);
                if (!i || t.getOption("disableInput")) return e.Pass;
                for (var o = r(i, "pairs"), a = t.listSelections(), s = 0; s < a.length; s++) {
                    if (!a[s].empty()) return e.Pass;
                    var c = u(t, a[s].head);
                    if (!c || o.indexOf(c) % 2 != 0) return e.Pass
                }
                for (var s = a.length - 1; s >= 0; s--) {
                    var f = a[s].head;
                    t.replaceRange("", n(f.line, f.ch - 1), n(f.line, f.ch + 1), "+delete")
                }
            }, Enter: function (t) {
                var n = l(t), i = n && r(n, "explode");
                if (!i || t.getOption("disableInput")) return e.Pass;
                for (var o = t.listSelections(), a = 0; a < o.length; a++) {
                    if (!o[a].empty()) return e.Pass;
                    var s = u(t, o[a].head);
                    if (!s || i.indexOf(s) % 2 != 0) return e.Pass
                }
                t.operation(function () {
                    var e = t.lineSeparator() || "\n";
                    t.replaceSelection(e + e, null), t.execCommand("goCharLeft"), o = t.listSelections();
                    for (var n = 0; n < o.length; n++) {
                        var r = o[n].head.line;
                        t.indentLine(r, null, !0), t.indentLine(r + 1, null, !0)
                    }
                })
            }
        };

        function o(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e.charAt(t), r = "'" + n + "'";
                i[r] || (i[r] = a(n))
            }
        }

        function a(t) {
            return function (i) {
                return function (t, i) {
                    var o = l(t);
                    if (!o || t.getOption("disableInput")) return e.Pass;
                    var a = r(o, "pairs"), u = a.indexOf(i);
                    if (-1 == u) return e.Pass;
                    for (var f, d = r(o, "triples"), h = a.charAt(u + 1) == i, p = t.listSelections(), g = u % 2 == 0, m = 0; m < p.length; m++) {
                        var v, y = p[m], b = y.head, x = t.getRange(b, n(b.line, b.ch + 1));
                        if (g && !y.empty()) v = "surround"; else if (!h && g || x != i) if (h && b.ch > 1 && d.indexOf(i) >= 0 && t.getRange(n(b.line, b.ch - 2), b) == i + i) {
                            if (b.ch > 2 && /\bstring/.test(t.getTokenTypeAt(n(b.line, b.ch - 2)))) return e.Pass;
                            v = "addFour"
                        } else if (h) {
                            var w = 0 == b.ch ? " " : t.getRange(n(b.line, b.ch - 1), b);
                            if (e.isWordChar(x) || w == i || e.isWordChar(w)) return e.Pass;
                            v = "both"
                        } else {
                            if (!g) return e.Pass;
                            v = "both"
                        } else v = h && c(t, b) ? "both" : d.indexOf(i) >= 0 && t.getRange(b, n(b.line, b.ch + 3)) == i + i + i ? "skipThree" : "skip";
                        if (f) {
                            if (f != v) return e.Pass
                        } else f = v
                    }
                    var k = u % 2 ? a.charAt(u - 1) : i, C = u % 2 ? i : a.charAt(u + 1);
                    t.operation(function () {
                        if ("skip" == f) t.execCommand("goCharRight"); else if ("skipThree" == f) for (var e = 0; e < 3; e++) t.execCommand("goCharRight"); else if ("surround" == f) {
                            for (var n = t.getSelections(), e = 0; e < n.length; e++) n[e] = k + n[e] + C;
                            t.replaceSelections(n, "around"), n = t.listSelections().slice();
                            for (var e = 0; e < n.length; e++) n[e] = s(n[e]);
                            t.setSelections(n)
                        } else "both" == f ? (t.replaceSelection(k + C, null), t.triggerElectric(k + C), t.execCommand("goCharLeft")) : "addFour" == f && (t.replaceSelection(k + k + k + k, "before"), t.execCommand("goCharRight"))
                    })
                }(i, t)
            }
        }

        function l(e) {
            var t = e.state.closeBrackets;
            return !t || t.override ? t : e.getModeAt(e.getCursor()).closeBrackets || t
        }

        function s(t) {
            var r = e.cmpPos(t.anchor, t.head) > 0;
            return {
                anchor: new n(t.anchor.line, t.anchor.ch + (r ? -1 : 1)),
                head: new n(t.head.line, t.head.ch + (r ? 1 : -1))
            }
        }

        function u(e, t) {
            var r = e.getRange(n(t.line, t.ch - 1), n(t.line, t.ch + 1));
            return 2 == r.length ? r : null
        }

        function c(e, t) {
            var r = e.getTokenAt(n(t.line, t.ch + 1));
            return /\bstring/.test(r.type) && r.start == t.ch && (0 == t.ch || !/\bstring/.test(e.getTokenTypeAt(t)))
        }

        o(t.pairs + "`")
    })
}, function (e, t, n) {
    !function (e) {
        e(n(5))
    }(function (e) {
        var t = /MSIE \d/.test(navigator.userAgent) && (null == document.documentMode || document.documentMode < 8),
            n = e.Pos, r = {"(": ")>", ")": "(<", "[": "]>", "]": "[<", "{": "}>", "}": "{<"};

        function i(e, t, i) {
            var a = e.getLineHandle(t.line), l = t.ch - 1, s = i && i.afterCursor;
            null == s && (s = /(^| )cm-fat-cursor($| )/.test(e.getWrapperElement().className));
            var u = !s && l >= 0 && r[a.text.charAt(l)] || r[a.text.charAt(++l)];
            if (!u) return null;
            var c = ">" == u.charAt(1) ? 1 : -1;
            if (i && i.strict && c > 0 != (l == t.ch)) return null;
            var f = e.getTokenTypeAt(n(t.line, l + 1)), d = o(e, n(t.line, l + (c > 0 ? 1 : 0)), c, f || null, i);
            return null == d ? null : {
                from: n(t.line, l),
                to: d && d.pos,
                match: d && d.ch == u.charAt(0),
                forward: c > 0
            }
        }

        function o(e, t, i, o, a) {
            for (var l = a && a.maxScanLineLength || 1e4, s = a && a.maxScanLines || 1e3, u = [], c = a && a.bracketRegex ? a.bracketRegex : /[(){}[\]]/, f = i > 0 ? Math.min(t.line + s, e.lastLine() + 1) : Math.max(e.firstLine() - 1, t.line - s), d = t.line; d != f; d += i) {
                var h = e.getLine(d);
                if (h) {
                    var p = i > 0 ? 0 : h.length - 1, g = i > 0 ? h.length : -1;
                    if (!(h.length > l)) for (d == t.line && (p = t.ch - (i < 0 ? 1 : 0)); p != g; p += i) {
                        var m = h.charAt(p);
                        if (c.test(m) && (void 0 === o || e.getTokenTypeAt(n(d, p + 1)) == o)) if (">" == r[m].charAt(1) == i > 0) u.push(m); else {
                            if (!u.length) return {pos: n(d, p), ch: m};
                            u.pop()
                        }
                    }
                }
            }
            return d - i != (i > 0 ? e.lastLine() : e.firstLine()) && null
        }

        function a(e, r, o) {
            for (var a = e.state.matchBrackets.maxHighlightLineLength || 1e3, l = [], s = e.listSelections(), u = 0; u < s.length; u++) {
                var c = s[u].empty() && i(e, s[u].head, o);
                if (c && e.getLine(c.from.line).length <= a) {
                    var f = c.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
                    l.push(e.markText(c.from, n(c.from.line, c.from.ch + 1), {className: f})), c.to && e.getLine(c.to.line).length <= a && l.push(e.markText(c.to, n(c.to.line, c.to.ch + 1), {className: f}))
                }
            }
            if (l.length) {
                t && e.state.focused && e.focus();
                var d = function () {
                    e.operation(function () {
                        for (var e = 0; e < l.length; e++) l[e].clear()
                    })
                };
                if (!r) return d;
                setTimeout(d, 800)
            }
        }

        function l(e) {
            e.operation(function () {
                e.state.matchBrackets.currentlyHighlighted && (e.state.matchBrackets.currentlyHighlighted(), e.state.matchBrackets.currentlyHighlighted = null), e.state.matchBrackets.currentlyHighlighted = a(e, !1, e.state.matchBrackets)
            })
        }

        e.defineOption("matchBrackets", !1, function (t, n, r) {
            r && r != e.Init && (t.off("cursorActivity", l), t.state.matchBrackets && t.state.matchBrackets.currentlyHighlighted && (t.state.matchBrackets.currentlyHighlighted(), t.state.matchBrackets.currentlyHighlighted = null)), n && (t.state.matchBrackets = "object" == typeof n ? n : {}, t.on("cursorActivity", l))
        }), e.defineExtension("matchBrackets", function () {
            a(this, !0)
        }), e.defineExtension("findMatchingBracket", function (e, t, n) {
            return (n || "boolean" == typeof t) && (n ? (n.strict = t, t = n) : t = t ? {strict: !0} : null), i(this, e, t)
        }), e.defineExtension("scanForBracket", function (e, t, n, r) {
            return o(this, e, t, n, r)
        })
    })
}, function (e, t, n) {
    var r = n(0);
    e.exports = (r.default || r).template({
        compiler: [7, ">= 4.0.0"], main: function (e, t, r, i, o) {
            var a;
            return '<div class="control-group condition">\r\n' + (null != (a = e.invokePartial(n(3), t, {
                name: "checkbox",
                hash: {label: "Not", classes: "not"},
                data: o,
                indent: "    ",
                helpers: r,
                partials: i,
                decorators: e.decorators
            })) ? a : "") + (null != (a = e.invokePartial(n(4), t, {
                name: "dropdown",
                hash: {data: null != t ? t.fields : t, classes: "fields"},
                data: o,
                indent: "    ",
                helpers: r,
                partials: i,
                decorators: e.decorators
            })) ? a : "") + (null != (a = e.invokePartial(n(4), t, {
                name: "dropdown",
                hash: {data: null != t ? t.operators : t, classes: "operators"},
                data: o,
                indent: "    ",
                helpers: r,
                partials: i,
                decorators: e.decorators
            })) ? a : "") + (null != (a = e.invokePartial(n(15), t, {
                name: "input",
                hash: {placeholder: "Enter search", classes: "term"},
                data: o,
                indent: "    ",
                helpers: r,
                partials: i,
                decorators: e.decorators
            })) ? a : "") + '    <a class="icon icon-minus" href="#"></a>\r\n</div>'
        }, usePartial: !0, useData: !0
    })
}, function (e, t, n) {
    var r = n(0);
    e.exports = (r.default || r).template({
        compiler: [7, ">= 4.0.0"], main: function (e, t, r, i, o) {
            var a;
            return '<div class="control-group transformation">\r\n' + (null != (a = e.invokePartial(n(15), t, {
                name: "input",
                hash: {placeholder: "Enter name", classes: "term"},
                data: o,
                indent: "    ",
                helpers: r,
                partials: i,
                decorators: e.decorators
            })) ? a : "") + (null != (a = e.invokePartial(n(4), t, {
                name: "dropdown",
                hash: {data: null != t ? t.operators : t, classes: "operators"},
                data: o,
                indent: "    ",
                helpers: r,
                partials: i,
                decorators: e.decorators
            })) ? a : "") + (null != (a = e.invokePartial(n(4), t, {
                name: "dropdown",
                hash: {data: null != t ? t.fields : t, classes: "fields"},
                data: o,
                indent: "    ",
                helpers: r,
                partials: i,
                decorators: e.decorators
            })) ? a : "") + '    <a class="icon icon-minus" href="#"></a>\r\n</div>'
        }, usePartial: !0, useData: !0
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(14);
    n(52), n(54);
    window.CampusExplorer = {
        buildQuery: function (e) {
            return console.log("CampusExplorer.buildQuery not implemented yet."), null
        }, sendQuery: function (e, t) {
            return new Promise(function (e, t) {
                console.log("CampusExplorer.sendQuery not implemented yet.")
            })
        }, renderResult: r.InstructorModule.renderResult
    }, window.____BUILD_INFO____ = {PLATFORM: "310", TARGET: "bootstrap", QUERY_LANGUAGE: "json", TABS: "courses,rooms"}
}, function (e, t, n) {
    "use strict";
    var r = n(53);
    n.n(r)
}, function (e, t) {
    let n = {
        GT: function (e, t) {
            return `${e} is greater than ${t}`
        }, LT: function (e, t) {
            return `${e} is less than ${t}`
        }, EQ: function (e, t) {
            return `${e} is equal to ${t}`
        }, IS: function (e, t) {
            return t.startsWith("*") && t.endsWith("*") ? `${e} includes "${t.replace(/\*/g, "")}"` : t.startsWith("*") ? `${e} begins with "${t.replace(/\*/g, "")}"` : t.endsWith("*") ? `${e} ends with "${t.replace(/\*/g, "")}"` : `${e} is "${t}"`
        }
    }, r = {
        GT: function (e, t) {
            return `${e} is not greater than ${t}`
        }, LT: function (e, t) {
            return `${e} is not less than ${t}`
        }, EQ: function (e, t) {
            return `${e} is not equal to ${t}`
        }, IS: function (e, t) {
            return t.startsWith("*") && t.endsWith("*") ? `${e} does not include "${t.replace(/\*/g, "")}"` : t.startsWith("*") ? `${e} does not begin with "${t.replace(/\*/g, "")}"` : t.endsWith("*") ? `${e} does not end with "${t.replace(/\*/g, "")}"` : `${e} is not "${t}"`
        }
    };
    const i = {
        courses: {
            fields: [{key: "audit", label: "Audit"}, {key: "avg", label: "Average"}, {
                key: "dept",
                label: "Department"
            }, {key: "fail", label: "Fail"}, {key: "id", label: "ID"}, {
                key: "instructor",
                label: "Instructor"
            }, {key: "pass", label: "Pass"}, {key: "title", label: "Title"}, {key: "uuid", label: "UUID"}, {
                key: "year",
                label: "Year"
            }]
        },
        rooms: {
            fields: [{key: "address", label: "Address"}, {key: "fullname", label: "Full Name"}, {
                key: "furniture",
                label: "Furniture"
            }, {key: "href", label: "Link"}, {key: "lat", label: "Latitude"}, {
                key: "lon",
                label: "Longitude"
            }, {key: "name", label: "Name"}, {key: "number", label: "Number"}, {
                key: "seats",
                label: "Seats"
            }, {key: "shortname", label: "Short Name"}, {key: "type", label: "Type"}]
        }
    };
    e.exports = class {
        constructor(e) {
            this.WHERE = e.WHERE, this.OPTIONS = e.OPTIONS, this.TRANSFORMATIONS = e.TRANSFORMATIONS, this.id = JSON.stringify(e).split("_")[0].split('"').slice(-1)[0], i.courses.fields.filter(t => t.key === JSON.stringify(e).split("_")[1].split('"')[0]).length > 0 ? this.kind = "courses" : this.kind = "rooms"
        }

        toString() {
            let e = `In ${this.kind} dataset ${this.id}`, t = "find all entries";
            Object.keys(this.WHERE).length && (t = `find entries whose ${this.constructFilter(this.WHERE, !1)}`);
            let n = `show ${this.joinByCommaAnd(this.OPTIONS.COLUMNS.map(e => this.key2Label(e)))}`;
            if (this.TRANSFORMATIONS) {
                e += ` grouped by ${this.joinByCommaAnd(this.TRANSFORMATIONS.GROUP.map(e => this.key2Label(e)))}`;
                const t = this.TRANSFORMATIONS.APPLY.map(e => {
                    const t = Object.keys(e)[0], n = Object.keys(e[t])[0], r = e[t][n];
                    return `${t} is the ${n} of ${this.key2Label(r)}`
                });
                n += `, where ${this.joinByCommaAnd(t)}`
            }
            let r = `${e}, ${t}; ${n}`;
            return this.OPTIONS.ORDER && ("string" == typeof this.OPTIONS.ORDER ? r += `; sort in ascending order by ${this.key2Label(this.OPTIONS.ORDER)}` : r += `; sort in ${"UP" === this.OPTIONS.ORDER.dir ? "ascending" : "descending"} order by ${this.joinByCommaAnd(this.OPTIONS.ORDER.keys.map(e => this.key2Label(e)))}`), r + "."
        }

        key2Label(e) {
            const t = i[this.kind].fields.filter(t => t.key === e.split("_").slice(-1)[0]);
            return 1 === t.length ? t[0].label : e
        }

        joinByCommaAnd(e) {
            return [e.slice(0, -1).join(", "), e.slice(-1)].filter(e => "" !== e).join(" and ")
        }

        constructFilter(e, t) {
            const i = Object.keys(e)[0];
            if (n[i]) {
                const o = Object.keys(e[i])[0], a = e[i][o];
                return t ? r[i](this.key2Label(o), a) : n[i](this.key2Label(o), a)
            }
            return "NOT" === i ? this.constructFilter(e[i], !t) : "AND" === i || "OR" === i ? `${this.constructFilter(e[i][0], !1)} ${i.toLowerCase()} ${this.constructFilter(e[i][1], !1)}` : void 0
        }
    }
}, function (e, t, n) {
    "use strict"
}, function (e, t) {
    "fixture" in window && function (e) {
        let t = "test/fixtures", n = Object.keys(__html__)[0], r = new RegExp("(.*fixtures)/").exec(n)[1];
        r && (t = r), fixture.setBase(t);
        let i = fixture.load("queries.json"), o = fixture.load("descriptions.json");
        window.TTT = {
            insertHtmlFixture: function (t) {
                let n = fixture.load("html/" + t + ".html"), r = e(n).attr("data-type"),
                    i = e('#wrapper form[data-type="' + r + '"]'), o = i.parent();
                i.remove(), o.html(n), e('.tab[data-type="' + r + '"]').click()
            }, getQueryFixtures: function () {
                return i
            }, getQueryDescriptions: function () {
                return o
            }, loadQueryNamesFromHtmlFixtures: function () {
                let e = [];
                for (let t in __html__) {
                    let n = t.split("/").pop().replace(".html", "");
                    e.push(n)
                }
                return e
            }, hasHtmlFixture: function (e) {
                try {
                    return fixture.load("html/" + e + ".html"), !0
                } catch (e) {
                    return !1
                }
            }
        }
    }(_____jq_____)
}, function (e, t, n) {
    const r = n(57);
    "chai" in window && function () {
        let e = [];
        !function (t) {
            XMLHttpRequest.prototype.send = function (n) {
                try {
                    t.apply(this, arguments)
                } finally {
                    e.push({xhr: this, data: n})
                }
            }
        }(XMLHttpRequest.prototype.send), chai.Assertion.addMethod("equalQuery", function (e) {
            let t = this._obj, n = r(t, e),
                i = "\nexpected:\n" + (n ? "" : JSON.stringify(e)) + "\nactual:\n" + (n ? "" : JSON.stringify(t));
            n || console.log("Queries did not match. " + i), this.assert(n, i, i, e, t)
        }), chai.Assertion.addMethod("sendAjaxRequest", function (t) {
            let n, r, i, o = "", a = e.length > 0, l = t;
            "object" == typeof l && (l = JSON.stringify(l)), a ? n = e.pop() : o = "no Ajax request was sent", o || (r = l === n.data) || (o = "query was not set correctly in request body"), o || (i = "function" == typeof n.xhr.onload) || (o = "no onload handler was set on Ajax request"), this._obj.then(function (e) {
            }).catch(function (e) {
            });
            let s = a && r && i;
            s || console.log(`Ajax request was not sent correctly. Last error: ${o}`), this.assert(s, o, o)
        })
    }()
}, function (e, t, n) {
    const r = n(58);

    function i(e, t) {
        return !(!Array.isArray(e) || !Array.isArray(t)) && e.every(function (e) {
            return t.indexOf(e) >= 0
        })
    }

    function o(e) {
        return "string" == typeof e ? {dir: "UP", keys: [e]} : e
    }

    e.exports = function (e, t) {
        if (!e || !t) return console.log("Tried to compare queries but one of them was undefined"), !1;
        if ("string" == typeof e && "string" == typeof t) try {
            e = new r(e).toJSON(), t = new r(t).toJSON()
        } catch (e) {
            return console.log("Tried to convert from natural to json but failed"), !1
        }
        let n = e.OPTIONS && e.OPTIONS.COLUMNS, a = t.OPTIONS && t.OPTIONS.COLUMNS,
            l = e.TRANSFORMATIONS && e.TRANSFORMATIONS.GROUP, s = t.TRANSFORMATIONS && t.TRANSFORMATIONS.GROUP,
            u = e.OPTIONS && e.OPTIONS.ORDER, c = t.OPTIONS && t.OPTIONS.ORDER,
            f = t.TRANSFORMATIONS && t.TRANSFORMATIONS.APPLY, d = e.TRANSFORMATIONS && e.TRANSFORMATIONS.APPLY;
        return !n && !a || i(n, a) ? !l && !s || i(l, s) ? JSON.stringify(e.WHERE) === JSON.stringify(t.WHERE) ? !u && !c || o(u).dir === o(c).dir && i(o(u).keys, o(c).keys) ? !(JSON.stringify(d) !== JSON.stringify(f) && (console.log("Transformations not matching"), 1)) : (console.log("Order not matching"), !1) : (console.log("Conditions not matching"), !1) : (console.log("Groups not matching"), !1) : (console.log("Columns not matching"), !1)
    }
}, function (module, exports, __webpack_require__) {
    (function (global) {
        function assert(e) {
            if (!e) throw new Error("Invalid query string")
        }

        const comparators = {
            "is greater than": {
                operator: "GT", transform: function (e) {
                    const t = Number(e);
                    return assert(!isNaN(t)), t
                }, negation: !1
            }, "is not greater than": {
                operator: "GT", transform: function (e) {
                    const t = Number(e);
                    return assert(!isNaN(t)), t
                }, negation: !0
            }, "is less than": {
                operator: "LT", transform: function (e) {
                    const t = Number(e);
                    return assert(!isNaN(t)), t
                }, negation: !1
            }, "is not less than": {
                operator: "LT", transform: function (e) {
                    const t = Number(e);
                    return assert(!isNaN(t)), t
                }, negation: !0
            }, "is equal to": {
                operator: "EQ", transform: function (e) {
                    const t = Number(e);
                    return assert(!isNaN(t)), t
                }, negation: !1
            }, "is not equal to": {
                operator: "EQ", transform: function (e) {
                    const t = Number(e);
                    return assert(!isNaN(t)), t
                }, negation: !0
            }, includes: {
                operator: "IS", transform: function (v) {
                    return assert(!v.includes("*")), `*${eval(v)}*`
                }, negation: !1
            }, "does not include": {
                operator: "IS", transform: function (v) {
                    return assert(!v.includes("*")), `*${eval(v)}*`
                }, negation: !0
            }, "begins with": {
                operator: "IS", transform: function (v) {
                    return assert(!v.includes("*")), `${eval(v)}*`
                }, negation: !1
            }, "does not begin with": {
                operator: "IS", transform: function (v) {
                    return assert(!v.includes("*")), `${eval(v)}*`
                }, negation: !0
            }, "ends with": {
                operator: "IS", transform: function (v) {
                    return assert(!v.includes("*")), `*${eval(v)}`
                }, negation: !1
            }, "does not end with": {
                operator: "IS", transform: function (v) {
                    return assert(!v.includes("*")), `*${eval(v)}`
                }, negation: !0
            }, is: {
                operator: "IS", transform: function (v) {
                    return assert(!v.includes("*")), `${eval(v)}`
                }, negation: !1
            }, "is not": {
                operator: "IS", transform: function (v) {
                    return assert(!v.includes("*")), `${eval(v)}`
                }, negation: !0
            }
        }, keys = {
            courses: {
                fields: [{key: "audit", label: "Audit"}, {key: "avg", label: "Average"}, {
                    key: "dept",
                    label: "Department"
                }, {key: "fail", label: "Fail"}, {key: "id", label: "ID"}, {
                    key: "instructor",
                    label: "Instructor"
                }, {key: "pass", label: "Pass"}, {key: "title", label: "Title"}, {
                    key: "uuid",
                    label: "UUID"
                }, {key: "year", label: "Year"}]
            },
            rooms: {
                fields: [{key: "address", label: "Address"}, {
                    key: "fullname",
                    label: "Full Name"
                }, {key: "furniture", label: "Furniture"}, {key: "href", label: "Link"}, {
                    key: "lat",
                    label: "Latitude"
                }, {key: "lon", label: "Longitude"}, {key: "name", label: "Name"}, {
                    key: "number",
                    label: "Number"
                }, {key: "seats", label: "Seats"}, {key: "shortname", label: "Short Name"}, {
                    key: "type",
                    label: "Type"
                }]
            }
        };

        function singleOrMoreRegex(e) {
            const t = new RegExp(`${e.source} and ${e.source}`), n = new RegExp(`(${e.source}, )+${t.source}`);
            return new RegExp(`((${n.source})|${e.source}|${t.source})`)
        }

        class Converter {
            constructor(e) {
                global.DELIVERABLE_D1;
                const t = /[a-zA-Z0-9_ ]+/, n = singleOrMoreRegex(t),
                    r = singleOrMoreRegex(new RegExp(`${t.source} is the (AVG|SUM|MIN|MAX|COUNT) of ${t.source}`)),
                    i = new RegExp("(is greater than|is not greater than|is less than|is not less than|is equal to|is not equal to|includes|does not include|begins with|does not begin with|ends with|does not end with|is|is not)"),
                    o = new RegExp(`${t.source} ${i.source} ("[^*"]*"|[+-]?([0-9]*[.])?[0-9]+)`);
                let a = /(courses|rooms)/;
                !0 === global.DELIVERABLE_D1 && (a = /courses/);
                let l = new RegExp(`^In ${a.source} dataset [a-zA-Z0-9]+( grouped by ${n.source})?, find (entries whose ${o.source}( (and|or) ${o.source})*|all entries); show ${n.source}(, where ${r.source})?(; sort in (ascending|descending) order by ${n.source})?[.]$`);
                !0 === global.DELIVERABLE_D1 && (l = new RegExp(`^In ${a.source} dataset [a-zA-Z0-9]+, find (entries whose ${o.source}( (and|or) ${o.source})*|all entries); show ${n.source}(; sort in ascending order by ${t.source})?[.]$`)), assert(l.test(e)), e.endsWith(".") && (e = e.substring(0, e.length - 1));
                let s = e.split(/[;]/);
                for (let e of s) (e = e.trim()).startsWith("In") ? (this.loadTypeAndId(e), this.loadWhere(e), this.loadGroup(e)) : e.startsWith("sort") ? this.loadSort(e) : e.startsWith("show") && (this.loadColumns(e), this.loadApply(e))
            }

            loadTypeAndId(e) {
                this.kind = e.split(" dataset ")[0].split("In ")[1].trim(), this.id = e.split(/ grouped by |,/)[0].split(`${this.kind} dataset`)[1].trim()
            }

            loadGroup(e) {
                if (e.includes(" grouped by ")) {
                    const t = e.split(/ grouped by /)[1].split(/ find /)[0].split(/,| and /).filter(e => "" !== e.trim()).map(e => e.trim());
                    this.GROUP = t.map(e => this.label2Key(e))
                }
            }

            loadWhere(e) {
                if (e.includes("find all entries")) return void (this.WHERE = {});
                let t = e.split(", find entries whose")[1], n = t.split(/ and | or /).map(e => e.trim()),
                    r = (t.match(/ and | or /g) || []).map(e => e.trim());
                this.WHERE = this.parseFilters(n, r)
            }

            parseFilters(e, t) {
                if (0 === t.length) return this.parseFilter(e[0]);
                let n = {};
                return n[t.slice(-1)[0].toUpperCase()] = [this.parseFilters(e.slice(0, -1), t.slice(0, -1)), this.parseFilter(e.slice(-1)[0])], n
            }

            parseFilter(e) {
                for (let t in comparators) if (e.includes(t)) {
                    const n = e.split(t)[0].trim();
                    !0 === global.DELIVERABLE_D1 && assert("Year" !== n);
                    const r = keys[this.kind].fields.filter(e => e.label === n)[0].key, i = e.split(t)[1].trim();
                    let o = {};
                    return o[comparators[t].operator] = {}, o[comparators[t].operator][`${this.id}_${r}`] = comparators[t].transform(i.trim()), comparators[t].negation && (o = {NOT: o}), o
                }
                throw new Error("Something wrong here")
            }

            loadSort(e) {
                const t = e.split("sort in")[1].split("order")[0].trim();
                switch (this.ORDER = {}, t) {
                    case"ascending":
                        this.ORDER.dir = "UP";
                        break;
                    default:
                        this.ORDER.dir = "DOWN"
                }
                this.ORDER.keys = e.split("order by ")[1].split(/,| and /).map(e => e.trim()).filter(e => "" !== e).map(e => this.label2Key(e))
            }

            label2Key(e) {
                !0 === global.DELIVERABLE_D1 && assert("Year" !== e);
                const t = keys[this.kind].fields.filter(t => t.label === e);
                return 1 === t.length ? `${this.id}_${t[0].key}` : e
            }

            loadColumns(e) {
                const t = e.split("show")[1].split(" where ")[0].split(/,| and /).map(e => e.trim()).filter(e => "" !== e).map(e => this.label2Key(e));
                this.COLUMNS = t
            }

            loadApply(e) {
                if (e.includes(" where ")) {
                    this.APPLY = [];
                    const t = e.split(" where ")[1].split(/,| and /);
                    for (const e of t) {
                        const t = e.split(" is the ")[0].trim(), n = e.split(" is the ")[1].split(" of ")[0].trim(),
                            r = e.split(" of ")[1].trim();
                        let i = {};
                        i[t] = {}, i[t][n] = this.label2Key(r), this.APPLY.push(i)
                    }
                } else void 0 !== this.GROUP && (this.APPLY = [])
            }

            toJSON() {
                let e = {};
                return e.WHERE = this.WHERE, e.OPTIONS = {}, e.OPTIONS.COLUMNS = this.COLUMNS, void 0 !== this.ORDER && (e.OPTIONS.ORDER = this.ORDER), void 0 !== this.GROUP && (e.TRANSFORMATIONS = {
                    GROUP: this.GROUP,
                    APPLY: this.APPLY
                }), e
            }
        }

        module.exports = Converter
    }).call(exports, __webpack_require__(9))
}]);
