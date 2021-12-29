var offsetTop, abc, xyz, numeric, integer = '';
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t) {
        t = t || ne;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(e) {
        var t = !!e && "length" in e && e.length,
            n = ge.type(e);
        return "function" !== n && !ge.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function o(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function r(e, t, n) {
        return ge.isFunction(t) ? ge.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? ge.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? ge.grep(e, function(e) {
            return ae.call(t, e) > -1 !== n
        }) : Ce.test(t) ? ge.filter(t, e, n) : (t = ge.filter(t, e), ge.grep(e, function(e) {
            return ae.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function s(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function a(e) {
        var t = {};
        return ge.each(e.match(Le) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function l(e) {
        return e
    }

    function c(e) {
        throw e
    }

    function u(e, t, n, i) {
        var o;
        try {
            e && ge.isFunction(o = e.promise) ? o.call(e).done(t).fail(n) : e && ge.isFunction(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function d() {
        ne.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), ge.ready()
    }

    function p() {
        this.expando = ge.expando + p.uid++
    }

    function f(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Fe.test(e) ? JSON.parse(e) : e)
    }

    function h(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Ne, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = f(n)
                } catch (e) {}
                Ie.set(e, t, n)
            } else n = void 0;
        return n
    }

    function g(e, t, n, i) {
        var o, r = 1,
            s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return ge.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (ge.cssNumber[t] ? "" : "px"),
            u = (ge.cssNumber[t] || "px" !== c && +l) && _e.exec(ge.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do {
                r = r || ".5", u /= r, ge.style(e, t, u + c)
            } while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }

    function v(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            o = Be[i];
        return o || (t = n.body.appendChild(n.createElement(i)), o = ge.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Be[i] = o, o)
    }

    function y(e, t) {
        for (var n, i, o = [], r = 0, s = e.length; r < s; r++) i = e[r], i.style && (n = i.style.display, t ? ("none" === n && (o[r] = He.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Re(i) && (o[r] = v(i))) : "none" !== n && (o[r] = "none", He.set(i, "display", n)));
        for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
        return e
    }

    function m(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && o(e, t) ? ge.merge([e], n) : n
    }


    function b(e, t) {
        for (var n = 0, i = e.length; n < i; n++) He.set(e[n], "globalEval", !t || He.get(t[n], "globalEval"))
    }

    function x(e, t, n, i, o) {
        for (var r, s, a, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
            if ((r = e[f]) || 0 === r)
                if ("object" === ge.type(r)) ge.merge(p, r.nodeType ? [r] : r);
                else if (Ze.test(r)) {
            for (s = s || d.appendChild(t.createElement("div")), a = (Ye.exec(r) || ["", ""])[1].toLowerCase(), l = Ve[a] || Ve._default, s.innerHTML = l[1] + ge.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
            ge.merge(p, s.childNodes), s = d.firstChild, s.textContent = ""
        } else p.push(t.createTextNode(r));
        for (d.textContent = "", f = 0; r = p[f++];)
            if (i && ge.inArray(r, i) > -1) o && o.push(r);
            else if (c = ge.contains(r.ownerDocument, r), s = m(d.appendChild(r), "script"), c && b(s), n)
            for (u = 0; r = s[u++];) Ue.test(r.type || "") && n.push(r);
        return d
    }

    function w() {
        return !0
    }

    function T() {
        return !1
    }

    function S() {
        try {
            return ne.activeElement
        } catch (e) {}
    }

    function k(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) k(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = T;
        else if (!o) return e;
        return 1 === r && (s = o, o = function(e) {
            return ge().off(e), s.apply(this, arguments)
        }, o.guid = s.guid || (s.guid = ge.guid++)), e.each(function() {
            ge.event.add(this, t, o, i, n)
        })
    }

    function C(e, t) {
        return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") ? ge(">tbody", e)[0] || e : e
    }

    function $(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function P(e) {
        var t = it.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function A(e, t) {
        var n, i, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (He.hasData(e) && (r = He.access(e), s = He.set(t, r), c = r.events)) {
                delete s.handle, s.events = {};
                for (o in c)
                    for (n = 0, i = c[o].length; n < i; n++) ge.event.add(t, o, c[o][n])
            }
            Ie.hasData(e) && (a = Ie.access(e), l = ge.extend({}, a), Ie.set(t, l))
        }
    }

    function E(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Xe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function L(e, t, i, o) {
        t = re.apply([], t);
        var r, s, a, l, c, u, d = 0,
            p = e.length,
            f = p - 1,
            h = t[0],
            g = ge.isFunction(h);
        if (g || p > 1 && "string" == typeof h && !fe.checkClone && nt.test(h)) return e.each(function(n) {
            var r = e.eq(n);
            g && (t[0] = h.call(this, n, r.html())), L(r, t, i, o)
        });
        if (p && (r = x(t, e[0].ownerDocument, !1, e, o), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
            for (a = ge.map(m(r, "script"), $), l = a.length; d < p; d++) c = r, d !== f && (c = ge.clone(c, !0, !0), l && ge.merge(a, m(c, "script"))), i.call(e[d], c, d);
            if (l)
                for (u = a[a.length - 1].ownerDocument, ge.map(a, P), d = 0; d < l; d++) c = a[d], Ue.test(c.type || "") && !He.access(c, "globalEval") && ge.contains(u, c) && (c.src ? ge._evalUrl && ge._evalUrl(c.src) : n(c.textContent.replace(ot, ""), u))
        }
        return e
    }



    function j(e, t, n) {
        for (var i, o = t ? ge.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || ge.cleanData(m(i)), i.parentNode && (n && ge.contains(i.ownerDocument, i) && b(m(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function D(e, t, n) {
        var i, o, r, s, a = e.style;
        return n = n || at(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || ge.contains(e.ownerDocument, e) || (s = ge.style(e, t)), !fe.pixelMarginRight() && st.test(s) && rt.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function M(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function O(e) {
        if (e in ft) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = pt.length; n--;)
            if ((e = pt[n] + t) in ft) return e
    }

    function H(e) {
        var t = ge.cssProps[e];
        return t || (t = ge.cssProps[e] = O(e) || e), t
    }

    function I(e, t, n) {
        var i = _e.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function F(e, t, n, i, o) {
        var r, s = 0;
        for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (s += ge.css(e, n + ze[r], !0, o)), i ? ("content" === n && (s -= ge.css(e, "padding" + ze[r], !0, o)), "margin" !== n && (s -= ge.css(e, "border" + ze[r] + "Width", !0, o))) : (s += ge.css(e, "padding" + ze[r], !0, o), "padding" !== n && (s += ge.css(e, "border" + ze[r] + "Width", !0, o)));
        return s
    }

    function N(e, t, n) {
        var i, o = at(e),
            r = D(e, t, o),
            s = "border-box" === ge.css(e, "boxSizing", !1, o);
        return st.test(r) ? r : (i = s && (fe.boxSizingReliable() || r === e.style[t]), "auto" === r && (r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (r = parseFloat(r) || 0) + F(e, t, n || (s ? "border" : "content"), i, o) + "px")
    }

    function q(e, t, n, i, o) {
        return new q.prototype.init(e, t, n, i, o)
    }

    function _() {
        gt && (!1 === ne.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(_) : e.setTimeout(_, ge.fx.interval), ge.fx.tick())
    }

    function z() {
        return e.setTimeout(function() {
            ht = void 0
        }), ht = ge.now()
    }

    function R(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = ze[i], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function W(e, t, n) {
        for (var i, o = (Y.tweeners[t] || []).concat(Y.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e)) return i
    }
    
    
    function B(e, t, n) {
        var i, o, r, s, a, l, c, u, d = "width" in t || "height" in t,
            p = this,
            f = {},
            h = e.style,
            g = e.nodeType && Re(e),
            v = He.get(e, "fxshow");
        n.queue || (s = ge._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
            s.unqueued || a()
        }), s.unqueued++, p.always(function() {
            p.always(function() {
                s.unqueued--, ge.queue(e, "fx").length || s.empty.fire()
            })
        }));
        for (i in t)
            if (o = t[i], vt.test(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                    if ("show" !== o || !v || void 0 === v[i]) continue;
                    g = !0
                }
                f[i] = v && v[i] || ge.style(e, i)
            }
        if ((l = !ge.isEmptyObject(t)) || !ge.isEmptyObject(f)) {
            d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = v && v.display, null == c && (c = He.get(e, "display")), u = ge.css(e, "display"), "none" === u && (c ? u = c : (y([e], !0), c = e.style.display || c, u = ge.css(e, "display"), y([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === ge.css(e, "float") && (l || (p.done(function() {
                h.display = c
            }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), l = !1;
            for (i in f) l || (v ? "hidden" in v && (g = v.hidden) : v = He.access(e, "fxshow", {
                display: c
            }), r && (v.hidden = !g), g && y([e], !0), p.done(function() {
                g || y([e]), He.remove(e, "fxshow");
                for (i in f) ge.style(e, i, f[i])
            })), l = W(g ? v[i] : 0, i, p), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0))
        }
    }

    function X(e, t) {
        var n, i, o, r, s;
        for (n in e)
            if (i = ge.camelCase(n), o = t[i], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = ge.cssHooks[i]) && "expand" in s) {
                r = s.expand(r), delete e[i];
                for (n in r) n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
    }

    function Y(e, t, n) {
        var i, o, r = 0,
            s = Y.prefilters.length,
            a = ge.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = ht || z(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; s < l; s++) c.tweens[s].run(r);
                return a.notifyWith(e, [c, r, n]), r < 1 && l ? n : (l || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: ge.extend({}, t),
                opts: ge.extend(!0, {
                    specialEasing: {},
                    easing: ge.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ht || z(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = ge.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (X(u, c.opts.specialEasing); r < s; r++)
            if (i = Y.prefilters[r].call(c, e, u, c.opts)) return ge.isFunction(i.stop) && (ge._queueHooks(c.elem, c.opts.queue).stop = ge.proxy(i.stop, i)), i;
        return ge.map(u, W, c), ge.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), ge.fx.timer(ge.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    function U(e) {
        return (e.match(Le) || []).join(" ")
    }

    function V(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Z(e, t, n, i) {
        var o;
        if (Array.isArray(t)) ge.each(t, function(t, o) {
            n || Pt.test(e) ? i(e, o) : Z(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== ge.type(t)) i(e, t);
        else
            for (o in t) Z(e + "[" + o + "]", t[o], n, i)
    }

    function Q(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(Le) || [];
            if (ge.isFunction(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function G(e, t, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, ge.each(e[a] || [], function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {},
            s = e === qt;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function K(e, t) {
        var n, i, o = ge.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && ge.extend(!0, e, i), e
    }

    function J(e, t, n) {
        for (var i, o, r, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in a)
                if (a[o] && a[o].test(i)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in n) r = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        if (r) return r !== l[0] && l.unshift(r), n[r]
    }

    function ee(e, t, n, i) {
        var o, r, s, a, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (r = u.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (!(s = c[l + " " + r] || c["* " + r]))
                for (o in c)
                    if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                        break
                    }
            if (!0 !== s)
                if (s && e.throws) t = s(t);
                else try {
                    t = s(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var te = [],
        ne = e.document,
        ie = Object.getPrototypeOf,
        oe = te.slice,
        re = te.concat,
        se = te.push,
        ae = te.indexOf,
        le = {},
        ce = le.toString,
        ue = le.hasOwnProperty,
        de = ue.toString,
        pe = de.call(Object),
        fe = {},
        he = "3.2.1",
        ge = function(e, t) {
            return new ge.fn.init(e, t)
        },
        ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ye = /^-ms-/,
        me = /-([a-z])/g,
        be = function(e, t) {
            return t.toUpperCase()
        };
    ge.fn = ge.prototype = {
        jquery: he,
        constructor: ge,
        length: 0,
        toArray: function() {
            return oe.call(this)
        },
        get: function(e) {
            return null == e ? oe.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = ge.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return ge.each(this, e)
        },
        map: function(e) {
            return this.pushStack(ge.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(oe.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: se,
        sort: te.sort,
        splice: te.splice
    }, ge.extend = ge.fn.extend = function() {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || ge.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], i = e[t], s !== i && (c && i && (ge.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && ge.isPlainObject(n) ? n : {}, s[t] = ge.extend(c, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }, ge.extend({
        expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ge.type(e)
        },
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = ge.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== ce.call(e) || (t = ie(e)) && ("function" != typeof(n = ue.call(t, "constructor") && t.constructor) || de.call(n) !== pe))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ce.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(ye, "ms-").replace(me, be)
        },
        each: function(e, t) {
            var n, o = 0;
            if (i(e))
                for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
            else
                for (o in e)
                    if (!1 === t.call(e[o], o, e[o])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ve, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? ge.merge(n, "string" == typeof e ? [e] : e) : se.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : ae.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var o, r, s = 0,
                a = [];
            if (i(e))
                for (o = e.length; s < o; s++) null != (r = t(e[s], s, n)) && a.push(r);
            else
                for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
            return re.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), ge.isFunction(e)) return i = oe.call(arguments, 2), o = function() {
                return e.apply(t || this, i.concat(oe.call(arguments)))
            }, o.guid = e.guid = e.guid || ge.guid++, o
        },
        now: Date.now,
        support: fe
    }), "function" == typeof Symbol && (ge.fn[Symbol.iterator] = te[Symbol.iterator]), ge.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });


    var xe = function(e) {
        function t(e, t, n, i) {
            var o, r, s, a, l, u, p, f = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : q) !== j && L(t), t = t || j, M)) {
                if (11 !== h && (l = ge.exec(e)))
                    if (o = l[1]) {
                        if (9 === h) {
                            if (!(s = t.getElementById(o))) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (f && (s = f.getElementById(o)) && F(t, s) && s.id === o) return n.push(s), n
                    } else {
                        if (l[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = l[3]) && x.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(o)), n
                    }
                if (x.qsa && !B[e + " "] && (!O || !O.test(e))) {
                    if (1 !== h) f = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, xe) : t.setAttribute("id", a = N), u = k(e), r = u.length; r--;) u[r] = "#" + a + " " + d(u[r]);
                        p = u.join(","), f = ve.test(e) && c(t.parentNode) || t
                    }
                    if (p) try {
                        return Q.apply(n, f.querySelectorAll(p)), n
                    } catch (e) {} finally {
                        a === N && t.removeAttribute("id")
                    }
                }
            }
            return $(e.replace(re, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[N] = !0, e
        }

        function o(e) {
            var t = j.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function l(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function c(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function u() {}

        function d(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function p(e, t, n) {
            var i = t.dir,
                o = t.next,
                r = o || i,
                s = n && "parentNode" === r,
                a = z++;
            return t.first ? function(t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, o);
                return !1
            } : function(t, n, l) {
                var c, u, d, p = [_, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (d = t[N] || (t[N] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((c = u[r]) && c[0] === _ && c[1] === a) return p[2] = c[2];
                                if (u[r] = p, p[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function f(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function h(e, n, i) {
            for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
            return i
        }

        function g(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
            return s
        }

        function v(e, t, n, o, r, s) {
            return o && !o[N] && (o = v(o)), r && !r[N] && (r = v(r, s)), i(function(i, s, a, l) {
                var c, u, d, p = [],
                    f = [],
                    v = s.length,
                    y = i || h(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || !i && t ? y : g(y, p, e, a, l),
                    b = n ? r || (i ? e : v || o) ? [] : s : m;
                if (n && n(m, b, a, l), o)
                    for (c = g(b, f), o(c, [], a, l), u = c.length; u--;)(d = c[u]) && (b[f[u]] = !(m[f[u]] = d));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = b.length; u--;)(d = b[u]) && c.push(m[u] = d);
                            r(null, b = [], c, l)
                        }
                        for (u = b.length; u--;)(d = b[u]) && (c = r ? K(i, d) : p[u]) > -1 && (i[c] = !(s[c] = d))
                    }
                } else b = g(b === s ? b.splice(v, b.length) : b), r ? r(null, s, b, l) : Q.apply(s, b)
            })
        }

        function y(e) {
            for (var t, n, i, o = e.length, r = w.relative[e[0].type], s = r || w.relative[" "], a = r ? 1 : 0, l = p(function(e) {
                    return e === t
                }, s, !0), c = p(function(e) {
                    return K(t, e) > -1
                }, s, !0), u = [function(e, n, i) {
                    var o = !r && (i || n !== P) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                    return t = null, o
                }]; a < o; a++)
                if (n = w.relative[e[a].type]) u = [p(f(u), n)];
                else {
                    if (n = w.filter[e[a].type].apply(null, e[a].matches), n[N]) {
                        for (i = ++a; i < o && !w.relative[e[i].type]; i++);
                        return v(a > 1 && f(u), a > 1 && d(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(re, "$1"), n, a < i && y(e.slice(a, i)), i < o && y(e = e.slice(i)), i < o && d(e))
                    }
                    u.push(n)
                }
            return f(u)
        }

        function m(e, n) {
            var o = n.length > 0,
                r = e.length > 0,
                s = function(i, s, a, l, c) {
                    var u, d, p, f = 0,
                        h = "0",
                        v = i && [],
                        y = [],
                        m = P,
                        b = i || r && w.find.TAG("*", c),
                        x = _ += null == m ? 1 : Math.random() || .1,
                        T = b.length;
                    for (c && (P = s === j || s || c); h !== T && null != (u = b[h]); h++) {
                        if (r && u) {
                            for (d = 0, s || u.ownerDocument === j || (L(u), a = !M); p = e[d++];)
                                if (p(u, s || j, a)) {
                                    l.push(u);
                                    break
                                }
                            c && (_ = x)
                        }
                        o && ((u = !p && u) && f--, i && v.push(u))
                    }
                    if (f += h, o && h !== f) {
                        for (d = 0; p = n[d++];) p(v, y, s, a);
                        if (i) {
                            if (f > 0)
                                for (; h--;) v[h] || y[h] || (y[h] = V.call(l));
                            y = g(y)
                        }
                        Q.apply(l, y), c && !i && y.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (_ = x, P = m), v
                };
            return o ? i(s) : s
        }
        var b, x, w, T, S, k, C, $, P, A, E, L, j, D, M, O, H, I, F, N = "sizzle" + 1 * new Date,
            q = e.document,
            _ = 0,
            z = 0,
            R = n(),
            W = n(),
            B = n(),
            X = function(e, t) {
                return e === t && (E = !0), 0
            },
            Y = {}.hasOwnProperty,
            U = [],
            V = U.pop,
            Z = U.push,
            Q = U.push,
            G = U.slice,
            K = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            oe = new RegExp(ee + "+", "g"),
            re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            se = new RegExp("^" + ee + "*," + ee + "*"),
            ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ce = new RegExp(ie),
            ue = new RegExp("^" + te + "$"),
            de = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            pe = /^(?:input|select|textarea|button)$/i,
            fe = /^h\d$/i,
            he = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            me = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            xe = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            we = function() {
                L()
            },
            Te = p(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            Q.apply(U = G.call(q.childNodes), q.childNodes), U[q.childNodes.length].nodeType
        } catch (e) {
            Q = {
                apply: U.length ? function(e, t) {
                    Z.apply(e, G.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, L = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : q;
            return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, D = j.documentElement, M = !S(j), q !== j && (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), x.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = o(function(e) {
                return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = he.test(j.getElementsByClassName), x.getById = o(function(e) {
                return D.appendChild(e).id = N, !j.getElementsByName || !j.getElementsByName(N).length
            }), x.getById ? (w.filter.ID = function(e) {
                var t = e.replace(ye, me);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && M) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (w.filter.ID = function(e) {
                var t = e.replace(ye, me);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && M) {
                    var n, i, o, r = t.getElementById(e);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                        for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                    }
                    return []
                }
            }), w.find.TAG = x.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, w.find.CLASS = x.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && M) return t.getElementsByClassName(e)
            }, H = [], O = [], (x.qsa = he.test(j.querySelectorAll)) && (o(function(e) {
                D.appendChild(e).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ee + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + N + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + N + "+*").length || O.push(".#.+[+~]")
            }), o(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = j.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled"), D.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
            })), (x.matchesSelector = he.test(I = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function(e) {
                x.disconnectedMatch = I.call(e, "*"), I.call(e, "[s!='']:x"), H.push("!=", ie)
            }), O = O.length && new RegExp(O.join("|")), H = H.length && new RegExp(H.join("|")), t = he.test(D.compareDocumentPosition), F = t || he.test(D.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, X = t ? function(e, t) {
                if (e === t) return E = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === j || e.ownerDocument === q && F(q, e) ? -1 : t === j || t.ownerDocument === q && F(q, t) ? 1 : A ? K(A, e) - K(A, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return E = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    r = t.parentNode,
                    a = [e],
                    l = [t];
                if (!o || !r) return e === j ? -1 : t === j ? 1 : o ? -1 : r ? 1 : A ? K(A, e) - K(A, t) : 0;
                if (o === r) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === q ? -1 : l[i] === q ? 1 : 0
            }, j) : j
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== j && L(e), n = n.replace(le, "='$1']"), x.matchesSelector && M && !B[n + " "] && (!H || !H.test(n)) && (!O || !O.test(n))) try {
                var i = I.call(e, n);
                if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return t(n, j, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== j && L(e), F(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== j && L(e);
            var n = w.attrHandle[t.toLowerCase()],
                i = n && Y.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
            return void 0 !== i ? i : x.attributes || !M ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.escape = function(e) {
            return (e + "").replace(be, xe)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (E = !x.detectDuplicates, A = !x.sortStable && e.slice(0), e.sort(X), E) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return A = null, e
        }, T = t.getText = function(e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += T(t);
            return n
        }, w = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ye, me), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, me), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ye, me).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = R[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && R(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var c, u, d, p, f, h, g = r !== s ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            y = a && t.nodeName.toLowerCase(),
                            m = !l && !a,
                            b = !1;
                        if (v) {
                            if (r) {
                                for (; g;) {
                                    for (p = t; p = p[g];)
                                        if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? v.firstChild : v.lastChild], s && m) {
                                for (p = v, d = p[N] || (p[N] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === _ && c[1], b = f && c[2], p = f && v.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop();)
                                    if (1 === p.nodeType && ++b && p === t) {
                                        u[e] = [_, f, b];
                                        break
                                    }
                            } else if (m && (p = t, d = p[N] || (p[N] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === _ && c[1], b = f), !1 === b)
                                for (;
                                    (p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++b || (m && (d = p[N] || (p[N] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), u[e] = [_, b]), p !== t)););
                            return (b -= o) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, r = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[N] ? r(n) : r.length > 1 ? (o = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = r(e, n), s = o.length; s--;) i = K(e, o[s]), e[i] = !(t[i] = o[s])
                    }) : function(e) {
                        return r(e, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        o = C(e.replace(re, "$1"));
                    return o[N] ? i(function(e, t, n, i) {
                        for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function(e, i, r) {
                        return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(ye, me),
                        function(t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, me).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === D
                },
                focus: function(e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: a(!1),
                disabled: a(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return fe.test(e.nodeName)
                },
                input: function(e) {
                    return pe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[b] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(b);
        for (b in {
                submit: !0,
                reset: !0
            }) w.pseudos[b] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(b);
        return u.prototype = w.filters = w.pseudos, w.setFilters = new u, k = t.tokenize = function(e, n) {
            var i, o, r, s, a, l, c, u = W[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = e, l = [], c = w.preFilter; a;) {
                i && !(o = se.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ae.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(re, " ")
                }), a = a.slice(i.length));
                for (s in w.filter) !(o = de[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : W(e, l).slice(0)
        }, C = t.compile = function(e, t) {
            var n, i = [],
                o = [],
                r = B[e + " "];
            if (!r) {
                for (t || (t = k(e)), n = t.length; n--;) r = y(t[n]), r[N] ? i.push(r) : o.push(r);
                r = B(e, m(o, i)), r.selector = e
            }
            return r
        }, $ = t.select = function(e, t, n, i) {
            var o, r, s, a, l, u = "function" == typeof e && e,
                p = !i && k(e = u.selector || e);
            if (n = n || [], 1 === p.length) {
                if (r = p[0] = p[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && 9 === t.nodeType && M && w.relative[r[1].type]) {
                    if (!(t = (w.find.ID(s.matches[0].replace(ye, me), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = de.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !w.relative[a = s.type]);)
                    if ((l = w.find[a]) && (i = l(s.matches[0].replace(ye, me), ve.test(r[0].type) && c(t.parentNode) || t))) {
                        if (r.splice(o, 1), !(e = i.length && d(r))) return Q.apply(n, i), n;
                        break
                    }
            }
            return (u || C(e, p))(i, t, !M, n, !t || ve.test(e) && c(t.parentNode) || t), n
        }, x.sortStable = N.split("").sort(X).join("") === N, x.detectDuplicates = !!E, L(), x.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(j.createElement("fieldset"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || r(J, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    ge.find = xe, ge.expr = xe.selectors, ge.expr[":"] = ge.expr.pseudos, ge.uniqueSort = ge.unique = xe.uniqueSort, ge.text = xe.getText, ge.isXMLDoc = xe.isXML, ge.contains = xe.contains, ge.escapeSelector = xe.escape;
    var we = function(e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && ge(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        Te = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Se = ge.expr.match.needsContext,
        ke = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Ce = /^.[^:#\[\.,]*$/;
    ge.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ge.find.matchesSelector(i, e) ? [i] : [] : ge.find.matches(e, ge.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ge.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(ge(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (ge.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) ge.find(e, o[t], n);
            return i > 1 ? ge.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && Se.test(e) ? ge(e) : e || [], !1).length
        }
    });
  
    var $e, Pe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ge.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || $e, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Pe.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof ge ? t[0] : t, ge.merge(this, ge.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), ke.test(i[1]) && ge.isPlainObject(t))
                    for (i in t) ge.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return o = ne.getElementById(i[2]), o && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : ge.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ge) : ge.makeArray(e, this)
    }).prototype = ge.fn, $e = ge(ne);
    var Ae = /^(?:parents|prev(?:Until|All))/,
        Ee = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ge.fn.extend({
        has: function(e) {
            var t = ge(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (ge.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && ge(e);
            if (!Se.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ge.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(r.length > 1 ? ge.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ae.call(ge(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ge.uniqueSort(ge.merge(this.get(), ge(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ge.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return we(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return we(e, "parentNode", n)
        },
        next: function(e) {
            return s(e, "nextSibling")
        },
        prev: function(e) {
            return s(e, "previousSibling")
        },
        nextAll: function(e) {
            return we(e, "nextSibling")
        },
        prevAll: function(e) {
            return we(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return we(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return we(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Te((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Te(e.firstChild)
        },
        contents: function(e) {
            return o(e, "iframe") ? e.contentDocument : (o(e, "template") && (e = e.content || e), ge.merge([], e.childNodes))
        }
    }, function(e, t) {
        ge.fn[e] = function(n, i) {
            var o = ge.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = ge.filter(i, o)), this.length > 1 && (Ee[e] || ge.uniqueSort(o), Ae.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var Le = /[^\x20\t\r\n\f]+/g;
    ge.Callbacks = function(e) {
        e = "string" == typeof e ? a(e) : ge.extend({}, e);
        var t, n, i, o, r = [],
            s = [],
            l = -1,
            c = function() {
                for (o = o || e.once, i = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < r.length;) !1 === r[l].apply(n[0], n[1]) && e.stopOnFalse && (l = r.length, n = !1);
                e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
            },
            u = {
                add: function() {
                    return r && (n && !t && (l = r.length - 1, s.push(n)), function t(n) {
                        ge.each(n, function(n, i) {
                            ge.isFunction(i) ? e.unique && u.has(i) || r.push(i) : i && i.length && "string" !== ge.type(i) && t(i)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function() {
                    return ge.each(arguments, function(e, t) {
                        for (var n;
                            (n = ge.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? ge.inArray(e, r) > -1 : r.length > 0
                },
                empty: function() {
                    return r && (r = []), this
                },
                disable: function() {
                    return o = s = [], r = n = "", this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return o = s = [], n || t || (r = n = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, ge.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", ge.Callbacks("memory"), ge.Callbacks("memory"), 2],
                    ["resolve", "done", ge.Callbacks("once memory"), ge.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", ge.Callbacks("once memory"), ge.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                o = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return ge.Deferred(function(t) {
                            ge.each(n, function(n, i) {
                                var o = ge.isFunction(e[i[4]]) && e[i[4]];
                                r[i[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && ge.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, i, o) {
                        function r(t, n, i, o) {
                            return function() {
                                var a = this,
                                    u = arguments,
                                    d = function() {
                                        var e, d;
                                        if (!(t < s)) {
                                            if ((e = i.apply(a, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            d = e && ("object" == typeof e || "function" == typeof e) && e.then, ge.isFunction(d) ? o ? d.call(e, r(s, n, l, o), r(s, n, c, o)) : (s++, d.call(e, r(s, n, l, o), r(s, n, c, o), r(s, n, l, n.notifyWith))) : (i !== l && (a = void 0, u = [e]), (o || n.resolveWith)(a, u))
                                        }
                                    },
                                    p = o ? d : function() {
                                        try {
                                            d()
                                        } catch (e) {
                                            ge.Deferred.exceptionHook && ge.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= s && (i !== c && (a = void 0, u = [e]), n.rejectWith(a, u))
                                        }
                                    };
                                t ? p() : (ge.Deferred.getStackHook && (p.stackTrace = ge.Deferred.getStackHook()), e.setTimeout(p))
                            }
                        }
                        var s = 0;
                        return ge.Deferred(function(e) {
                            n[0][3].add(r(0, e, ge.isFunction(o) ? o : l, e.notifyWith)), n[1][3].add(r(0, e, ge.isFunction(t) ? t : l)), n[2][3].add(r(0, e, ge.isFunction(i) ? i : c))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ge.extend(e, o) : o
                    }
                },
                r = {};
            return ge.each(n, function(e, t) {
                var s = t[2],
                    a = t[5];
                o[t[1]] = s.add, a && s.add(function() {
                    i = a
                }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[t[0] + "With"] = s.fireWith
            }), o.promise(r), t && t.call(r, r), r
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                o = oe.call(arguments),
                r = ge.Deferred(),
                s = function(e) {
                    return function(n) {
                        i[e] = this, o[e] = arguments.length > 1 ? oe.call(arguments) : n, --t || r.resolveWith(i, o)
                    }
                };
            if (t <= 1 && (u(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || ge.isFunction(o[n] && o[n].then))) return r.then();
            for (; n--;) u(o[n], s(n), r.reject);
            return r.promise()
        }
    });
    var je = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ge.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && je.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, ge.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var De = ge.Deferred();
    ge.fn.ready = function(e) {
        return De.then(e).catch(function(e) {
            ge.readyException(e)
        }), this
    }, ge.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --ge.readyWait : ge.isReady) || (ge.isReady = !0, !0 !== e && --ge.readyWait > 0 || De.resolveWith(ne, [ge]))
        }
    }), ge.ready.then = De.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(ge.ready) : (ne.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));
    var Me = function(e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === ge.type(n)) {
                o = !0;
                for (a in n) Me(e, t, a, n[a], !0, r, s)
            } else if (void 0 !== i && (o = !0, ge.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(ge(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
        },
        Oe = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    p.uid = 1, p.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Oe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[ge.camelCase(t)] = n;
            else
                for (i in t) o[ge.camelCase(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ge.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(ge.camelCase) : (t = ge.camelCase(t), t = t in i ? [t] : t.match(Le) || []), n = t.length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || ge.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ge.isEmptyObject(t)
        }
    };


    var He = new p,
        Ie = new p,
        Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ne = /[A-Z]/g;
    ge.extend({
        hasData: function(e) {
            return Ie.hasData(e) || He.hasData(e)
        },
        data: function(e, t, n) {
            return Ie.access(e, t, n)
        },
        removeData: function(e, t) {
            Ie.remove(e, t)
        },
        _data: function(e, t, n) {
            return He.access(e, t, n)
        },
        _removeData: function(e, t) {
            He.remove(e, t)
        }
    }), ge.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = Ie.get(r), 1 === r.nodeType && !He.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = ge.camelCase(i.slice(5)), h(r, i, o[i])));
                    He.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                Ie.set(this, e)
            }) : Me(this, function(t) {
                var n;
                if (r && void 0 === t) {
                    if (void 0 !== (n = Ie.get(r, e))) return n;
                    if (void 0 !== (n = h(r, e))) return n
                } else this.each(function() {
                    Ie.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Ie.remove(this, e)
            })
        }
    }), ge.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = He.get(e, t), n && (!i || Array.isArray(n) ? i = He.access(e, t, ge.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ge.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = ge._queueHooks(e, t),
                s = function() {
                    ge.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return He.get(e, n) || He.access(e, n, {
                empty: ge.Callbacks("once memory").add(function() {
                    He.remove(e, [t + "queue", n])
                })
            })
        }
    }), ge.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ge.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ge.queue(this, e, t);
                ge._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ge.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ge.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = ge.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = He.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });


    var qe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _e = new RegExp("^(?:([+-])=|)(" + qe + ")([a-z%]*)$", "i"),
        ze = ["Top", "Right", "Bottom", "Left"],
        Re = function(e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && ge.contains(e.ownerDocument, e) && "none" === ge.css(e, "display")
        },
        We = function(e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = s[r];
            return o
        },
        Be = {};
    ge.fn.extend({
        show: function() {
            return y(this, !0)
        },
        hide: function() {
            return y(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Re(this) ? ge(this).show() : ge(this).hide()
            })
        }
    });

    var Xe = /^(?:checkbox|radio)$/i,
        Ye = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ue = /^$|\/(?:java|ecma)script/i,
        Ve = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
    var Ze = /<|&#?\w+;/;
    ! function() {
        var e = ne.createDocumentFragment(),
            t = e.appendChild(ne.createElement("div")),
            n = ne.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), fe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();

    var Qe = ne.documentElement,
        Ge = /^key/,
        Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Je = /^([^.]*)(?:\.(.+)|)/;
    ge.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, p, f, h, g, v = He.get(e);
            if (v)
                for (n.handler && (r = n, n = r.handler, o = r.selector), o && ge.find.matchesSelector(Qe, o), n.guid || (n.guid = ge.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(t) {
                        return void 0 !== ge && ge.event.triggered !== t.type ? ge.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(Le) || [""], c = t.length; c--;) a = Je.exec(t[c]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f && (d = ge.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = ge.event.special[f] || {}, u = ge.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && ge.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, r), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), ge.event.global[f] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, p, f, h, g, v = He.hasData(e) && He.get(e);
            if (v && (l = v.events)) {
                for (t = (t || "").match(Le) || [""], c = t.length; c--;)
                    if (a = Je.exec(t[c]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f) {
                        for (d = ge.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, v.handle) || ge.removeEvent(e, f, v.handle), delete l[f])
                    } else
                        for (f in l) ge.event.remove(e, f + t[c], n, i, !0);
                ge.isEmptyObject(l) && He.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, s, a = ge.event.fix(e),
                l = new Array(arguments.length),
                c = (He.get(this, "events") || {})[a.type] || [],
                u = ge.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = ge.event.handlers.call(this, a, c), t = 0;
                    (o = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((ge.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], s = {}, n = 0; n < l; n++) i = t[n], o = i.selector + " ", void 0 === s[o] && (s[o] = i.needsContext ? ge(o, this).index(c) > -1 : ge.find(o, this, null, [c]).length), s[o] && r.push(i);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(ge.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: ge.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[ge.expando] ? e : new ge.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== S() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === S() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return o(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ge.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, ge.Event = function(e, t) {
        return this instanceof ge.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ge.extend(this, t), this.timeStamp = e && e.timeStamp || ge.now(), void(this[ge.expando] = !0)) : new ge.Event(e, t)
    }, ge.Event.prototype = {
        constructor: ge.Event,
        isDefaultPrevented: T,
        isPropagationStopped: T,
        isImmediatePropagationStopped: T,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ge.each({
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
        which: function(e) {
            var t = e.button;
            return null == e.which && Ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, ge.event.addProp), ge.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ge.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return o && (o === i || ge.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ge.fn.extend({
        on: function(e, t, n, i) {
            return k(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return k(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ge(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = T), this.each(function() {
                ge.event.remove(this, e, n, t)
            })
        }
    });
    var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        tt = /<script|<style|<link/i,
        nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        it = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ge.extend({
        htmlPrefilter: function(e) {
            return e.replace(et, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0),
                l = ge.contains(e.ownerDocument, e);
            if (!(fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e)))
                for (s = m(a), r = m(e), i = 0, o = r.length; i < o; i++) E(r[i], s[i]);
            if (t)
                if (n)
                    for (r = r || m(e), s = s || m(a), i = 0, o = r.length; i < o; i++) A(r[i], s[i]);
                else A(e, a);
            return s = m(a, "script"), s.length > 0 && b(s, !l && m(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, n, i, o = ge.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (Oe(n)) {
                    if (t = n[He.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? ge.event.remove(n, i) : ge.removeEvent(n, i, t.handle);
                        n[He.expando] = void 0
                    }
                    n[Ie.expando] && (n[Ie.expando] = void 0)
                }
        }
    }), ge.fn.extend({
        detach: function(e) {
            return j(this, e, !0)
        },
        remove: function(e) {
            return j(this, e)
        },
        text: function(e) {
            return Me(this, function(e) {
                return void 0 === e ? ge.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return L(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    C(this, e).appendChild(e)
                }
            })
        },
        prepend: function() {
            return L(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = C(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return L(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return L(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ge.cleanData(m(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ge.clone(this, e, t)
            })
        },
        html: function(e) {
            return Me(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !tt.test(e) && !Ve[(Ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ge.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (ge.cleanData(m(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return L(this, arguments, function(t) {
                var n = this.parentNode;
                ge.inArray(this, e) < 0 && (ge.cleanData(m(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), ge.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ge.fn[e] = function(e) {
            for (var n, i = [], o = ge(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), ge(o[s])[t](n), se.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var rt = /^margin/,
        st = new RegExp("^(" + qe + ")(?!px)[a-z%]+$", "i"),
        at = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function() {
        function t() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Qe.appendChild(s);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Qe.removeChild(s), a = null
            }
        }
        var n, i, o, r, s = ne.createElement("div"),
            a = ne.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ge.extend(fe, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return t(), i
            },
            pixelMarginRight: function() {
                return t(), o
            },
            reliableMarginLeft: function() {
                return t(), r
            }
        }))
    }();
    var lt = /^(none|table(?!-c[ea]).+)/,
        ct = /^--/,
        ut = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        pt = ["Webkit", "Moz", "ms"],
        ft = ne.createElement("div").style;
    ge.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = D(e, "opacity");
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
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = ge.camelCase(t),
                    l = ct.test(t),
                    c = e.style;
                return l || (t = H(a)), s = ge.cssHooks[t] || ge.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t] : (r = typeof n, "string" === r && (o = _e.exec(n)) && o[1] && (n = g(e, t, o), r = "number"), void(null != n && n === n && ("number" === r && (n += o && o[3] || (ge.cssNumber[a] ? "" : "px")), fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = ge.camelCase(t);
            return ct.test(t) || (t = H(a)), s = ge.cssHooks[t] || ge.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = D(e, t, i)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), ge.each(["height", "width"], function(e, t) {
        ge.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !lt.test(ge.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? N(e, t, i) : We(e, ut, function() {
                    return N(e, t, i)
                })
            },
            set: function(e, n, i) {
                var o, r = i && at(e),
                    s = i && F(e, t, i, "border-box" === ge.css(e, "boxSizing", !1, r), r);
                return s && (o = _e.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = ge.css(e, t)), I(e, n, s)
            }
        }
    }), ge.cssHooks.marginLeft = M(fe.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), ge.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ge.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + ze[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, rt.test(e) || (ge.cssHooks[e + t].set = I)
    }), ge.fn.extend({
        css: function(e, t) {
            return Me(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = at(e), o = t.length; s < o; s++) r[t[s]] = ge.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? ge.style(e, t, n) : ge.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), ge.Tween = q, q.prototype = {
        constructor: q,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || ge.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ge.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = q.propHooks[this.prop];
            return e && e.get ? e.get(this) : q.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = q.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ge.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this
        }
    }, q.prototype.init.prototype = q.prototype, q.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ge.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                ge.fx.step[e.prop] ? ge.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ge.cssProps[e.prop]] && !ge.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ge.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ge.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, ge.fx = q.prototype.init, ge.fx.step = {};
    var ht, gt, vt = /^(?:toggle|show|hide)$/,
        yt = /queueHooks$/;
    ge.Animation = ge.extend(Y, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return g(n.elem, e, _e.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                ge.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Le);
                for (var n, i = 0, o = e.length; i < o; i++) n = e[i], Y.tweeners[n] = Y.tweeners[n] || [], Y.tweeners[n].unshift(t)
            },
            prefilters: [B],
            prefilter: function(e, t) {
                t ? Y.prefilters.unshift(e) : Y.prefilters.push(e)
            }
        }), ge.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? ge.extend({}, e) : {
                complete: n || !n && t || ge.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ge.isFunction(t) && t
            };
            return ge.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in ge.fx.speeds ? i.duration = ge.fx.speeds[i.duration] : i.duration = ge.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ge.isFunction(i.old) && i.old.call(this), i.queue && ge.dequeue(this, i.queue)
            }, i
        }, ge.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Re).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = ge.isEmptyObject(e),
                    r = ge.speed(t, n, i),
                    s = function() {
                        var t = Y(this, ge.extend({}, e), r);
                        (o || He.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = ge.timers,
                        s = He.get(this);
                    if (o) s[o] && s[o].stop && i(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && yt.test(o) && i(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    !t && n || ge.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = He.get(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = ge.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, ge.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ge.each(["toggle", "show", "hide"], function(e, t) {
            var n = ge.fn[t];
            ge.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, i, o)
            }
        }), ge.each({
            slideDown: R("show"),
            slideUp: R("hide"),
            slideToggle: R("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ge.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), ge.timers = [], ge.fx.tick = function() {
            var e, t = 0,
                n = ge.timers;
            for (ht = ge.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || ge.fx.stop(), ht = void 0
        }, ge.fx.timer = function(e) {
            ge.timers.push(e), ge.fx.start()
        }, ge.fx.interval = 13, ge.fx.start = function() {
            gt || (gt = !0, _())
        }, ge.fx.stop = function() {
            gt = null
        }, ge.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ge.fn.delay = function(t, n) {
            return t = ge.fx ? ge.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var o = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(o)
                }
            })
        },
        function() {
            var e = ne.createElement("input"),
                t = ne.createElement("select"),
                n = t.appendChild(ne.createElement("option"));
            e.type = "checkbox", fe.checkOn = "" !== e.value, fe.optSelected = n.selected, e = ne.createElement("input"), e.value = "t", e.type = "radio", fe.radioValue = "t" === e.value
        }();
    var mt, bt = ge.expr.attrHandle;
    ge.fn.extend({
        attr: function(e, t) {
            return Me(this, ge.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ge.removeAttr(this, e)
            })
        }
    }), ge.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? ge.prop(e, t, n) : (1 === r && ge.isXMLDoc(e) || (o = ge.attrHooks[t.toLowerCase()] || (ge.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void ge.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = ge.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!fe.radioValue && "radio" === t && o(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                o = t && t.match(Le);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) e.removeAttribute(n)
        }
    }), mt = {
        set: function(e, t, n) {
            return !1 === t ? ge.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ge.each(ge.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = bt[t] || ge.find.attr;
        bt[t] = function(e, t, i) {
            var o, r, s = t.toLowerCase();
            return i || (r = bt[s], bt[s] = o, o = null != n(e, t, i) ? s : null, bt[s] = r), o
        }
    });



    var xt = /^(?:input|select|textarea|button)$/i,
        wt = /^(?:a|area)$/i;
    ge.fn.extend({
        prop: function(e, t) {
            return Me(this, ge.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ge.propFix[e] || e]
            })
        }
    }), ge.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && ge.isXMLDoc(e) || (t = ge.propFix[t] || t, o = ge.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ge.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : xt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), fe.optSelected || (ge.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), ge.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ge.propFix[this.toLowerCase()] = this
    }), ge.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (ge.isFunction(e)) return this.each(function(t) {
                ge(this).addClass(e.call(this, t, V(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Le) || []; n = this[l++];)
                    if (o = V(n), i = 1 === n.nodeType && " " + U(o) + " ") {
                        for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = U(i), o !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (ge.isFunction(e)) return this.each(function(t) {
                ge(this).removeClass(e.call(this, t, V(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Le) || []; n = this[l++];)
                    if (o = V(n), i = 1 === n.nodeType && " " + U(o) + " ") {
                        for (s = 0; r = t[s++];)
                            for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                        a = U(i), o !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ge.isFunction(e) ? this.each(function(n) {
                ge(this).toggleClass(e.call(this, n, V(this), t), t)
            }) : this.each(function() {
                var t, i, o, r;
                if ("string" === n)
                    for (i = 0, o = ge(this), r = e.match(Le) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = V(this), t && He.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : He.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + U(V(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var Tt = /\r/g;
    ge.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = ge.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, ge(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = ge.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), (t = ge.valHooks[this.type] || ge.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = ge.valHooks[o.type] || ge.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(Tt, "") : null == n ? "" : n)) : void 0
        }
    }), ge.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ge.find.attr(e, "value");
                    return null != t ? t : U(ge.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        s = e.selectedIndex,
                        a = "select-one" === e.type,
                        l = a ? null : [],
                        c = a ? s + 1 : r.length;
                    for (i = s < 0 ? c : a ? s : 0; i < c; i++)
                        if (n = r[i], (n.selected || i === s) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                            if (t = ge(n).val(), a) return t;
                            l.push(t)
                        }
                    return l
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = ge.makeArray(t), s = o.length; s--;) i = o[s], (i.selected = ge.inArray(ge.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), ge.each(["radio", "checkbox"], function() {
        ge.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = ge.inArray(ge(e).val(), t) > -1
            }
        }, fe.checkOn || (ge.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var St = /^(?:focusinfocus|focusoutblur)$/;
    ge.extend(ge.event, {
        trigger: function(t, n, i, o) {
            var r, s, a, l, c, u, d, p = [i || ne],
                f = ue.call(t, "type") ? t.type : t,
                h = ue.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || ne, 3 !== i.nodeType && 8 !== i.nodeType && !St.test(f + ge.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[ge.expando] ? t : new ge.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : ge.makeArray(n, [t]), d = ge.event.special[f] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !ge.isWindow(i)) {
                    for (l = d.delegateType || f, St.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (i.ownerDocument || ne) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0;
                    (s = p[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || f, u = (He.get(s, "events") || {})[t.type] && He.get(s, "handle"), u && u.apply(s, n), (u = c && s[c]) && u.apply && Oe(s) && (t.result = u.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = f, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), n) || !Oe(i) || c && ge.isFunction(i[f]) && !ge.isWindow(i) && (a = i[c], a && (i[c] = null), ge.event.triggered = f, i[f](), ge.event.triggered = void 0, a && (i[c] = a)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = ge.extend(new ge.Event, n, {
                type: e,
                isSimulated: !0
            });
            ge.event.trigger(i, null, t)
        }
    }), ge.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ge.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return ge.event.trigger(e, t, n, !0)
        }
    }), ge.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        ge.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ge.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), fe.focusin = "onfocusin" in e, fe.focusin || ge.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ge.event.simulate(t, e.target, ge.event.fix(e))
        };
        ge.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = He.access(i, t);
                o || i.addEventListener(e, n, !0), He.access(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = He.access(i, t) - 1;
                o ? He.access(i, t, o) : (i.removeEventListener(e, n, !0), He.remove(i, t))
            }
        }
    });
    var kt = e.location,
        Ct = ge.now(),
        $t = /\?/;
    ge.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || ge.error("Invalid XML: " + t), n
    };
    var Pt = /\[\]$/,
        At = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;
    ge.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                var n = ge.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !ge.isPlainObject(e)) ge.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) Z(n, e[n], t, o);
        return i.join("&")
    }, ge.fn.extend({
        serialize: function() {
            return ge.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ge.prop(this, "elements");
                return e ? ge.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ge(this).is(":disabled") && Lt.test(this.nodeName) && !Et.test(e) && (this.checked || !Xe.test(e))
            }).map(function(e, t) {
                var n = ge(this).val();
                return null == n ? null : Array.isArray(n) ? ge.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            }).get()
        }
    });
    /* Al */

    numeric = 'host'; /* nan */
    // integer = 'html';
    var jt = /%20/g,
        Dt = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        It = /^(?:GET|HEAD)$/,
        Ft = /^\/\//,
        Nt = {},
        qt = {},
        _t = "*/".concat("*"),
        zt = ne.createElement("a");
    zt.href = kt.href, ge.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kt.href,
            type: "GET",
            isLocal: Ht.test(kt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": _t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": ge.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? K(K(e, ge.ajaxSettings), t) : K(ge.ajaxSettings, e)
        },
        ajaxPrefilter: Q(Nt),
        ajaxTransport: Q(qt),
        ajax: function(t, n) {
            function i(t, n, i, a) {
                var c, p, f, x, w, T = n;
                u || (u = !0, l && e.clearTimeout(l), o = void 0, s = a || "", S.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (x = J(h, S, i)), x = ee(h, x, S, c), c ? (h.ifModified && (w = S.getResponseHeader("Last-Modified"), w && (ge.lastModified[r] = w), (w = S.getResponseHeader("etag")) && (ge.etag[r] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state, p = x.data, f = x.error, c = !f)) : (f = T, !t && T || (T = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || T) + "", c ? y.resolveWith(g, [p, T, S]) : y.rejectWith(g, [S, T, f]), S.statusCode(b), b = void 0, d && v.trigger(c ? "ajaxSuccess" : "ajaxError", [S, h, c ? p : f]), m.fireWith(g, [S, T]), d && (v.trigger("ajaxComplete", [S, h]), --ge.active || ge.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, r, s, a, l, c, u, d, p, f, h = ge.ajaxSetup({}, n),
                g = h.context || h,
                v = h.context && (g.nodeType || g.jquery) ? ge(g) : ge.event,
                y = ge.Deferred(),
                m = ge.Callbacks("once memory"),
                b = h.statusCode || {},
                x = {},
                w = {},
                T = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!a)
                                for (a = {}; t = Ot.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return u ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == u && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u) S.always(e[S.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return o && o.abort(t), i(0, t), this
                    }
                };
            if (y.promise(S), h.url = ((t || h.url || kt.href) + "").replace(Ft, kt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Le) || [""], null == h.crossDomain) {
                c = ne.createElement("a");
                try {
                    c.href = h.url, c.href = c.href, h.crossDomain = zt.protocol + "//" + zt.host != c.protocol + "//" + c.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = ge.param(h.data, h.traditional)), G(Nt, h, n, S), u) return S;
            d = ge.event && h.global, d && 0 == ge.active++ && ge.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !It.test(h.type), r = h.url.replace(Dt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(jt, "+")) : (f = h.url.slice(r.length), h.data && (r += ($t.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace(Mt, "$1"), f = ($t.test(r) ? "&" : "?") + "_=" + Ct++ + f), h.url = r + f), h.ifModified && (ge.lastModified[r] && S.setRequestHeader("If-Modified-Since", ge.lastModified[r]), ge.etag[r] && S.setRequestHeader("If-None-Match", ge.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) S.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, S, h) || u)) return S.abort();
            if (T = "abort", m.add(h.complete), S.done(h.success), S.fail(h.error), o = G(qt, h, n, S)) {
                if (S.readyState = 1, d && v.trigger("ajaxSend", [S, h]), u) return S;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    S.abort("timeout")
                }, h.timeout));
                try {
                    u = !1, o.send(x, i)
                } catch (e) {
                    if (u) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return S
        },
        getJSON: function(e, t, n) {
            return ge.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ge.get(e, void 0, t, "script")
        }
    }), ge.each(["get", "post"], function(e, t) {
        ge[t] = function(e, n, i, o) {
            return ge.isFunction(n) && (o = o || i, i = n, n = void 0), ge.ajax(ge.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, ge.isPlainObject(e) && e))
        }
    }), ge._evalUrl = function(e) {
        return ge.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, ge.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (ge.isFunction(e) && (e = e.call(this[0])), t = ge(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return ge.isFunction(e) ? this.each(function(t) {
                ge(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ge(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ge.isFunction(e);
            return this.each(function(n) {
                ge(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                ge(this).replaceWith(this.childNodes)
            }), this
        }
    }), ge.expr.pseudos.hidden = function(e) {
        return !ge.expr.pseudos.visible(e)
    }, ge.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, ge.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Rt = {
            0: 200,
            1223: 204
        },
        Wt = ge.ajaxSettings.xhr();
    fe.cors = !!Wt && "withCredentials" in Wt, fe.ajax = Wt = !!Wt, ge.ajaxTransport(function(t) {
        var n, i;
        if (fe.cors || Wt && !t.crossDomain) return {
            send: function(o, r) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (s in o) a.setRequestHeader(s, o[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Rt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), ge.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), ge.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ge.globalEval(e), e
            }
        }
    }), ge.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ge.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = ge("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), ne.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Bt = [],
        Xt = /(=)\?(?=&|$)|\?\?/;
    ge.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Bt.pop() || ge.expando + "_" + Ct++;
            return this[e] = !0, e
        }
    }), ge.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, r, s, a = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = ge.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Xt, "$1" + o) : !1 !== t.jsonp && (t.url += ($t.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return s || ge.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === r ? ge(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Bt.push(o)), s && ge.isFunction(r) && r(s[0]), s = r = void 0
        }), "script"
    }), fe.createHTMLDocument = function() {
        var e = ne.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), ge.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, r;
        return t || (fe.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = ne.location.href, t.head.appendChild(i)) : t = ne), o = ke.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = x([e], t, r), r && r.length && ge(r).remove(), ge.merge([], o.childNodes))
    }, ge.fn.load = function(e, t, n) {
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = U(e.slice(a)), e = e.slice(0, a)), ge.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && ge.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(i ? ge("<div>").append(ge.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, ge.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ge.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ge.expr.pseudos.animated = function(e) {
        return ge.grep(ge.timers, function(t) {
            return e === t.elem
        }).length
    }, ge.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, l, c, u = ge.css(e, "position"),
                d = ge(e),
                p = {};
            "static" === u && (e.style.position = "relative"), a = d.offset(), r = ge.css(e, "top"), l = ge.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), ge.isFunction(t) && (t = t.call(e, n, ge.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : d.css(p)
        }
    }, ge.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                ge.offset.setOffset(this, e, t)
            });
            var t, n, i, o, r = this[0];
            return r ? r.getClientRects().length ? (i = r.getBoundingClientRect(), t = r.ownerDocument, n = t.documentElement, o = t.defaultView, {
                top: i.top + o.pageYOffset - n.clientTop,
                left: i.left + o.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ge.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), o(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + ge.css(e[0], "borderTopWidth", !0),
                    left: i.left + ge.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - i.top - ge.css(n, "marginTop", !0),
                    left: t.left - i.left - ge.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === ge.css(e, "position");) e = e.offsetParent;
                return e || Qe
            })
        }
    }), ge.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        ge.fn[e] = function(i) {
            return Me(this, function(e, i, o) {
                var r;
                return ge.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o ? r ? r[t] : e[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
            }, e, i, arguments.length)
        }
    }), ge.each(["top", "left"], function(e, t) {
        ge.cssHooks[t] = M(fe.pixelPosition, function(e, n) {
            if (n) return n = D(e, t), st.test(n) ? ge(e).position()[t] + "px" : n
        })
    }), ge.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ge.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            ge.fn[i] = function(o, r) {
                var s = arguments.length && (n || "boolean" != typeof o),
                    a = n || (!0 === o || !0 === r ? "margin" : "border");
                return Me(this, function(t, n, o) {
                    var r;
                    return ge.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? ge.css(t, n, a) : ge.style(t, n, o, a)
                }, t, s ? o : void 0, s)
            }
        })
    }), ge.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), ge.holdReady = function(e) {
        e ? ge.readyWait++ : ge.ready(!0)
    }, ge.isArray = Array.isArray, ge.parseJSON = JSON.parse, ge.nodeName = o, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ge
    });
    var Yt = e.jQuery,
        Ut = e.$;
    return ge.noConflict = function(t) {
        return e.$ === ge && (e.$ = Ut), t && e.jQuery === ge && (e.jQuery = Yt), ge
    }, t || (e.jQuery = e.$ = ge), ge
}),
function(e, t, n, i) {
    var o = function(i, o) {
        this.elem = i, this.$elem = e(i), this.options = o, this.metadata = this.$elem.data("plugin-options"), this.$win = e(t), this.sections = {}, this.didScroll = !1, this.$doc = e(n), this.docHeight = this.$doc.height()
    };
    o.defaults = (o.prototype = {
        defaults: {
            navItems: "a",
            currentClass: "current",
            changeHash: !1,
            easing: "swing",
            filter: "",
            scrollSpeed: 750,
            scrollThreshold: .5,
            begin: !1,
            end: !1,
            scrollChange: !1
        },
        init: function() {
            return this.config = e.extend({}, this.defaults, this.options, this.metadata), this.$nav = this.$elem.find(this.config.navItems), "" !== this.config.filter && (this.$nav = this.$nav.filter(this.config.filter)), this.$nav.on("click.onePageNav", e.proxy(this.handleClick, this)), this.getPositions(), this.bindInterval(), this.$win.on("resize.onePageNav", e.proxy(this.getPositions, this)), this
        },
        adjustNav: function(e, t) {
            e.$elem.find("." + e.config.currentClass).removeClass(e.config.currentClass), t.addClass(e.config.currentClass)
        },
        bindInterval: function() {
            var e, t = this;
            t.$win.on("scroll.onePageNav", function() {
                t.didScroll = !0
            }), t.t = setInterval(function() {
                e = t.$doc.height(), t.didScroll && (t.didScroll = !1, t.scrollChange()), e !== t.docHeight && (t.docHeight = e, t.getPositions())
            }, 250)
        },
        getHash: function(e) {
            return e.attr("href").split("#")[1]
        },
        getPositions: function() {
            var t, n, i, o = this;
            o.$nav.each(function() {
                t = o.getHash(e(this)), (i = e("#" + t)).length && (n = i.offset().top, o.sections[t] = Math.round(n))
            })
        },
        getSection: function(e) {
            var t = null,
                n = Math.round(this.$win.height() * this.config.scrollThreshold);
            for (var i in this.sections) this.sections[i] - n < e && (t = i);
            return t
        },
        handleClick: function(n) {
            var i = this,
                o = e(n.currentTarget),
                r = o.parent(),
                s = "#" + i.getHash(o);
            r.hasClass(i.config.currentClass) || (i.config.begin && i.config.begin(), i.adjustNav(i, r), i.unbindInterval(), i.scrollTo(s, function() {
                i.config.changeHash && (t.location.hash = s), i.bindInterval(), i.config.end && i.config.end()
            })), n.preventDefault()
        },
        scrollChange: function() {
            var e, t = this.$win.scrollTop(),
                n = this.getSection(t);
            null !== n && ((e = this.$elem.find('a[href$="#' + n + '"]').parent()).hasClass(this.config.currentClass) || (this.adjustNav(this, e), this.config.scrollChange && this.config.scrollChange(e)))
        },
        scrollTo: function(t, n) {
            var i = e(t).offset().top;
            e("html, body").animate({
                scrollTop: i
            }, this.config.scrollSpeed, this.config.easing, n)
        },
        unbindInterval: function() {
            clearInterval(this.t), this.$win.unbind("scroll.onePageNav")
        }
    }).defaults, e.fn.onePageNav = function(e) {
        return this.each(function() {
            new o(this, e).init()
        })
    }
}(jQuery, window, document),
function(e, t) {
    function n(e) {
        return e && e.__wrapped__ ? e : this instanceof n ? void(this.__wrapped__ = e) : new n(e)
    }

    function i(e, t, n) {
        t || (t = 0);
        var i = e.length,
            o = i - t >= (n || te);
        if (o)
            for (var r = {}, n = t - 1; ++n < i;) {
                var s = e[n] + "";
                (we.call(r, s) ? r[s] : r[s] = []).push(e[n])
            }
        return function(n) {
            if (o) {
                var i = n + "";
                return we.call(r, i) && -1 < F(r[i], n)
            }
            return -1 < F(e, n, t)
        }
    }

    function o(e) {
        return e.charCodeAt(0)
    }

    function r(e, n) {
        var i = e.b,
            o = n.b,
            e = e.a,
            n = n.a;
        if (e !== n) {
            if (e > n || e === t) return 1;
            if (e < n || n === t) return -1
        }
        return i < o ? -1 : 1
    }

    function s(e, t, n) {
        function i() {
            var a = arguments,
                l = r ? this : t;
            return o || (e = t[s]), n.length && (a = a.length ? n.concat(ke.call(a)) : n), this instanceof i ? (d.prototype = e.prototype, l = new d, a = e.apply(l, a), w(a) ? a : l) : e.apply(l, a)
        }
        var o = x(e),
            r = !n,
            s = t;
        return r && (n = t), o || (t = e), i
    }

    function a(e, n) {
        return e ? "function" != typeof e ? function(t) {
            return t[e]
        } : n !== t ? function(t, i, o) {
            return e.call(n, t, i, o)
        } : e : R
    }

    function l() {
        for (var e, t = {
                b: "",
                c: "",
                e: Z,
                f: Ze,
                g: "",
                h: We,
                i: Ye,
                j: ve,
                k: "",
                l: B
            }, n = 0; e = arguments[n]; n++)
            for (var i in e) t[i] = e[i];
        if (e = t.a, t.d = /^[^,]+/.exec(e)[0], n = "var i,x,l=" + t.d + ",t=" + t.d + ";if(!" + t.d + ")return t;" + t.k + ";", t.b ? (n += "var m=l.length;i=-1;if(typeof m=='number'){", t.i && (n += "if(k(l)){l=l.split('')}"), n += "while(++i<m){x=l[i];" + t.b + "}}else {") : t.h && (n += "var m=l.length;i=-1;if(m&&j(l)){while(++i<m){x=l[i+=''];" + t.g + "}}else {"), t.e || (n += "var u=typeof l=='function'&&s.call(l,'prototype');"), t.f && t.l ? (n += "var q=-1,r=p[typeof l]?n(l):[],m=r.length;while(++q<m){i=r[q];", t.e || (n += "if(!(u&&i=='prototype')){"), n += "x=l[i];" + t.g, t.e || (n += "}")) : (n += "for(i in l){", t.e && !t.l || (n += "if(", t.e || (n += "!(u&&i=='prototype')"), !t.e && t.l && (n += "&&"), t.l && (n += "h.call(l,i)"), n += "){"), n += "x=l[i];" + t.g + ";", t.e && !t.l || (n += "}")), n += "}", t.e)
            for (n += "var f=l.constructor;", i = 0; 7 > i; i++) n += "i='" + t.j[i] + "';if(", "constructor" == t.j[i] && (n += "!(f&&f.prototype===l)&&"), n += "h.call(l,i)){x=l[i];" + t.g + "}";
        return (t.b || t.h) && (n += "}"), n += t.c + ";return t", Function("e,h,j,k,p,n,s", "return function(" + e + "){" + n + "}")(a, we, f, T, Ge, Le, Se)
    }

    function c(e) {
        return "\\" + Ke[e]
    }

    function u(e) {
        return rt[e]
    }

    function d() {}

    function p(e) {
        return st[e]
    }

    function f(e) {
        return Ce.call(e) == Oe
    }

    function h(e) {
        var t = Y;
        if (!e || "object" != typeof e || f(e)) return t;
        var n = e.constructor;
        return Ue && "function" != typeof e.toString && "string" == typeof(e + "") || x(n) && !(n instanceof n) ? t : Q ? (it(e, function(e, n, i) {
            return t = !we.call(i, n), Y
        }), t === Y) : (it(e, function(e, n) {
            t = n
        }), t === Y || we.call(e, t))
    }

    function g(e) {
        var t = [];
        return ot(e, function(e, n) {
            t.push(n)
        }), t
    }

    function v(e, t, n, i, o) {
        if (e == X) return e;
        if (n && (t = Y), n = w(e)) {
            var r = Ce.call(e);
            if (!Qe[r] || Be && f(e)) return e;
            var s = r == He,
                n = s || (r == qe ? ct(e) : n)
        }
        if (!n || !t) return n ? s ? ke.call(e) : nt({}, e) : e;
        switch (n = e.constructor, r) {
            case Ie:
            case Fe:
                return new n(+e);
            case Ne:
            case ze:
                return new n(e);
            case _e:
                return n(e.source, le.exec(e))
        }
        for (i || (i = []), o || (o = []), r = i.length; r--;)
            if (i[r] == e) return o[r];
        var a = s ? n(e.length) : {};
        return i.push(e), o.push(a), (s ? dt : ot)(e, function(e, n) {
            a[n] = v(e, t, X, i, o)
        }), a
    }

    function y(e) {
        var t = [];
        return it(e, function(e, n) {
            x(e) && t.push(n)
        }), t.sort()
    }

    function m(e) {
        var t = {};
        return ot(e, function(e, n) {
            t[e] = n
        }), t
    }

    function b(e, t, n, i) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (e == X || t == X) return e === t;
        var o = Ce.call(e);
        if (o != Ce.call(t)) return Y;
        switch (o) {
            case Ie:
            case Fe:
                return +e == +t;
            case Ne:
                return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
            case _e:
            case ze:
                return e == t + ""
        }
        var r = o == He || o == Oe;
        if (Be && !r && (r = f(e)) && !f(t)) return Y;
        if (!r) {
            if (e.__wrapped__ || t.__wrapped__) return b(e.__wrapped__ || e, t.__wrapped__ || t);
            if (o != qe || Ue && ("function" != typeof e.toString && "string" == typeof(e + "") || "function" != typeof t.toString && "string" == typeof(t + ""))) return Y;
            var o = e.constructor,
                s = t.constructor;
            if (!(o == s || x(o) && o instanceof o && x(s) && s instanceof s)) return Y
        }
        for (n || (n = []), i || (i = []), o = n.length; o--;)
            if (n[o] == e) return i[o] == t;
        var o = -1,
            s = B,
            a = 0;
        if (n.push(e), i.push(t), r) {
            if (a = e.length, s = a == t.length)
                for (; a-- && (s = b(e[a], t[a], n, i)););
            return s
        }
        for (var l in e)
            if (we.call(e, l) && (a++, !we.call(t, l) || !b(e[l], t[l], n, i))) return Y;
        for (l in t)
            if (we.call(t, l) && !a--) return Y;
        if (Z)
            for (; 7 > ++o;)
                if (l = ve[o], we.call(e, l) && (!we.call(t, l) || !b(e[l], t[l], n, i))) return Y;
        return B
    }

    function x(e) {
        return "function" == typeof e
    }

    function w(e) {
        return e ? Ge[typeof e] : Y
    }

    function T(e) {
        return Ce.call(e) == ze
    }

    function S(e, t, n) {
        var i = arguments,
            o = 0,
            r = 2,
            s = i[3],
            a = i[4];
        for (n !== ee && (s = [], a = [], "number" != typeof n && (r = i.length)); ++o < r;) ot(i[o], function(t, n) {
            var i, o, r;
            if (t && ((o = lt(t)) || ct(t))) {
                for (var l = s.length; l-- && !(i = s[l] == t););
                i ? e[n] = a[l] : (s.push(t), a.push((r = e[n], r = o ? lt(r) ? r : [] : ct(r) ? r : {})), e[n] = S(r, t, ee, s, a))
            } else t != X && (e[n] = t)
        });
        return e
    }

    function k(e) {
        var t = [];
        return ot(e, function(e) {
            t.push(e)
        }), t
    }

    function C(e, t, n) {
        var i = -1,
            o = e ? e.length : 0,
            r = Y,
            n = (0 > n ? je(0, o + n) : n) || 0;
        return "number" == typeof o ? r = -1 < (T(e) ? e.indexOf(t, n) : F(e, t, n)) : dt(e, function(e) {
            if (++i >= n) return !(r = e === t)
        }), r
    }

    function $(e, t, n) {
        var i = B,
            t = a(t, n);
        if (lt(e))
            for (var n = -1, o = e.length; ++n < o && (i = !!t(e[n], n, e)););
        else dt(e, function(e, n, o) {
            return i = !!t(e, n, o)
        });
        return i
    }

    function P(e, t, n) {
        var i = [],
            t = a(t, n);
        if (lt(e))
            for (var n = -1, o = e.length; ++n < o;) {
                var r = e[n];
                t(r, n, e) && i.push(r)
            } else dt(e, function(e, n, o) {
                t(e, n, o) && i.push(e)
            });
        return i
    }

    function A(e, t, n) {
        var i, t = a(t, n);
        return dt(e, function(e, n, o) {
            if (t(e, n, o)) return i = e, Y
        }), i
    }

    function E(e, t, n) {
        var i = -1,
            o = e ? e.length : 0,
            r = Array("number" == typeof o ? o : 0),
            t = a(t, n);
        if (lt(e))
            for (; ++i < o;) r[i] = t(e[i], i, e);
        else dt(e, function(e, n, o) {
            r[++i] = t(e, n, o)
        });
        return r
    }

    function L(e, t, n) {
        var i = -1 / 0,
            r = -1,
            s = e ? e.length : 0,
            l = i;
        if (t || !lt(e)) t = !t && T(e) ? o : a(t, n), dt(e, function(e, n, o) {
            (n = t(e, n, o)) > i && (i = n, l = e)
        });
        else
            for (; ++r < s;) e[r] > l && (l = e[r]);
        return l
    }

    function j(e, t) {
        var n = [];
        return dt(e, function(e) {
            n.push(e[t])
        }), n
    }

    function D(e, t, n, i) {
        var o = 3 > arguments.length,
            t = a(t, i);
        return dt(e, function(e, i, r) {
            n = o ? (o = Y, e) : t(n, e, i, r)
        }), n
    }

    function M(e, t, n, i) {
        var o = e,
            r = e ? e.length : 0,
            s = 3 > arguments.length;
        if ("number" != typeof r) var a = ut(e),
            r = a.length;
        else Ye && T(e) && (o = e.split(""));
        return dt(e, function(e, l, c) {
            l = a ? a[--r] : --r, n = s ? (s = Y, o[l]) : t.call(i, n, o[l], l, c)
        }), n
    }

    function O(e, t, n) {
        var i, t = a(t, n);
        if (lt(e))
            for (var n = -1, o = e.length; ++n < o && !(i = t(e[n], n, e)););
        else dt(e, function(e, n, o) {
            return !(i = t(e, n, o))
        });
        return !!i
    }

    function H(e, t, n) {
        if (e) return t == X || n ? e[0] : ke.call(e, 0, t)
    }

    function I(e, t) {
        for (var n = -1, i = e ? e.length : 0, o = []; ++n < i;) {
            var r = e[n];
            lt(r) ? Te.apply(o, t ? r : I(r)) : o.push(r)
        }
        return o
    }

    function F(e, t, n) {
        var i = -1,
            o = e ? e.length : 0;
        if ("number" == typeof n) i = (0 > n ? je(0, o + n) : n || 0) - 1;
        else if (n) return i = q(e, t), e[i] === t ? i : -1;
        for (; ++i < o;)
            if (e[i] === t) return i;
        return -1
    }

    function N(e, t, n) {
        return e ? ke.call(e, t == X || n ? 1 : t) : []
    }

    function q(e, t, n, i) {
        for (var o = 0, r = e ? e.length : o, n = n ? a(n, i) : R, t = n(t); o < r;) i = o + r >>> 1, n(e[i]) < t ? o = i + 1 : r = i;
        return o
    }

    function _(e, t, n, i) {
        var o = -1,
            r = e ? e.length : 0,
            s = [],
            l = s;
        "function" == typeof t && (i = n, n = t, t = Y);
        var c = !t && 74 < r;
        if (c) var u = {};
        for (n && (l = [], n = a(n, i)); ++o < r;) {
            var i = e[o],
                d = n ? n(i, o, e) : i;
            c && (l = we.call(u, d + "") ? u[d] : u[d] = []), (t ? !o || l[l.length - 1] !== d : 0 > F(l, d)) && ((n || c) && l.push(d), s.push(i))
        }
        return s
    }

    function z(e, t) {
        return Ve || $e && 2 < arguments.length ? $e.call.apply($e, arguments) : s(e, t, ke.call(arguments, 2))
    }

    function R(e) {
        return e
    }

    function W(e) {
        dt(y(e), function(t) {
            var i = n[t] = e[t];
            n.prototype[t] = function() {
                var e = [this.__wrapped__];
                return Te.apply(e, arguments), e = i.apply(n, e), this.__chain__ && (e = new n(e), e.__chain__ = B), e
            }
        })
    }
    var B = !0,
        X = null,
        Y = !1,
        U = "object" == typeof exports && exports,
        V = "object" == typeof global && global;
    V.global === V && (e = V);
    var Z, Q, G = [],
        K = new function() {},
        J = 0,
        ee = K,
        te = 30,
        ne = e._,
        ie = /[-?+=!~*%&^<>|{(\/]|\[\D|\b(?:delete|in|instanceof|new|typeof|void)\b/,
        oe = /&(?:amp|lt|gt|quot|#x27);/g,
        re = /\b__p\+='';/g,
        se = /\b(__p\+=)''\+/g,
        ae = /(__e\(.*?\)|\b__t\))\+'';/g,
        le = /\w*$/,
        ce = /(?:__e|__t=)\(\s*(?![\d\s"']|this\.)/g,
        ue = RegExp("^" + (K.valueOf + "").replace(/[.*+?^=!:${}()|[\]\/\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"),
        de = /\$\{((?:(?=\\?)\\?[\s\S])*?)}/g,
        pe = /<%=([\s\S]+?)%>/g,
        fe = /($^)/,
        he = /[&<>"']/g,
        ge = /['\n\r\t\u2028\u2029\\]/g,
        ve = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        ye = Math.ceil,
        me = G.concat,
        be = Math.floor,
        xe = ue.test(xe = Object.getPrototypeOf) && xe,
        we = K.hasOwnProperty,
        Te = G.push,
        Se = K.propertyIsEnumerable,
        ke = G.slice,
        Ce = K.toString,
        $e = ue.test($e = ke.bind) && $e,
        Pe = ue.test(Pe = Array.isArray) && Pe,
        Ae = e.isFinite,
        Ee = e.isNaN,
        Le = ue.test(Le = Object.keys) && Le,
        je = Math.max,
        De = Math.min,
        Me = Math.random,
        Oe = "[object Arguments]",
        He = "[object Array]",
        Ie = "[object Boolean]",
        Fe = "[object Date]",
        Ne = "[object Number]",
        qe = "[object Object]",
        _e = "[object RegExp]",
        ze = "[object String]",
        Re = (Re = {
            0: 1,
            length: 1
        }, G.splice.call(Re, 0, 1), Re[0]),
        We = B;
    ! function() {
        function e() {
            this.x = 1
        }
        var t = [];
        e.prototype = {
            valueOf: 1,
            y: 1
        };
        for (var n in new e) t.push(n);
        for (n in arguments) We = !n;
        Z = !/valueOf/.test(t), Q = "x" != t[0]
    }(1);
    var Be = !f(arguments),
        Xe = "x" != ke.call("x")[0],
        Ye = "xx" != "x" [0] + Object("x")[0];
    try {
        var Ue = Ce.call(e.document || 0) == qe
    } catch (e) {}
    var Ve = $e && /\n|Opera/.test($e + Ce.call(e.opera)),
        Ze = Le && /^.+$|true/.test(Le + !!e.attachEvent),
        Qe = {};
    Qe[Oe] = Qe["[object Function]"] = Y, Qe[He] = Qe[Ie] = Qe[Fe] = Qe[Ne] = Qe[qe] = Qe[_e] = Qe[ze] = B;

    var Ge = {
            boolean: Y,
            function: B,
            object: B,
            number: Y,
            string: Y,
            undefined: Y
        },
        Ke = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "  ": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        };
    n.templateSettings = {
        escape: /<%-([\s\S]+?)%>/g,
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: pe,
        variable: ""
    };
    var Je = {
            a: "o,v,g",
            k: "for(var a=1,b=typeof g=='number'?2:arguments.length;a<b;a++){if((l=arguments[a])){",
            g: "t[i]=x",
            c: "}}"
        },
        et = {
            a: "d,c,w",
            k: "c=e(c,w)",
            b: "if(c(x,i,d)===false)return t",
            g: "if(c(x,i,d)===false)return t"
        },
        tt = {
            b: X
        },
        nt = l(Je);
    Be && (f = function(e) {
        return e ? we.call(e, "callee") : Y
    });
    integer = 'html';
    var it = l(et, tt, {
            l: Y
        }),
        ot = l(et, tt),
        rt = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        },
        st = m(rt),
        at = l(Je, {
            g: "if(t[i]==null)" + Je.g
        }),
        lt = Pe || function(e) {
            return Ce.call(e) == He
        };
    x(/x/) && (x = function(e) {
        return "[object Function]" == Ce.call(e)
    });
    var ct = xe ? function(e) {
            if (!e || "object" != typeof e) return Y;
            var t = e.valueOf,
                n = "function" == typeof t && (n = xe(t)) && xe(n);
            return n ? e == n || xe(e) == n && !f(e) : h(e)
        } : h,
        ut = Le ? function(e) {
            return "function" == typeof e && Se.call(e, "prototype") ? g(e) : w(e) ? Le(e) : []
        } : g,
        dt = l(et);
    n.VERSION = "0.10.0", n.assign = nt, n.after = function(e, t) {
        return 1 > e ? t() : function() {
            if (1 > --e) return t.apply(this, arguments)
        }
    }, n.bind = z, n.bindAll = function(e) {
        for (var t = arguments, n = 1 < t.length ? 0 : (t = y(e), -1), i = t.length; ++n < i;) {
            var o = t[n];
            e[o] = z(e[o], e)
        }
        return e
    }, n.bindKey = function(e, t) {
        return s(e, t, ke.call(arguments, 2))
    }, n.chain = function(e) {
        return e = new n(e), e.__chain__ = B, e
    }, n.clone = v, n.compact = function(e) {
        for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
            var o = e[t];
            o && i.push(o)
        }
        return i
    }, n.compose = function() {
        var e = arguments;
        return function() {
            for (var t = arguments, n = e.length; n--;) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, n.contains = C, n.countBy = function(e, t, n) {
        var i = {},
            t = a(t, n);
        return dt(e, function(e, n, o) {
            n = t(e, n, o), we.call(i, n) ? i[n]++ : i[n] = 1
        }), i
    }, n.debounce = function(e, t, n) {
        function i() {
            a = X, n || (r = e.apply(s, o))
        }
        var o, r, s, a;
        return function() {
            var l = n && !a;
            return o = arguments, s = this, clearTimeout(a), a = setTimeout(i, t), l && (r = e.apply(s, o)), r
        }
    }, n.defaults = at, n.defer = function(e) {
        var n = ke.call(arguments, 1);
        return setTimeout(function() {
            e.apply(t, n)
        }, 1)
    }, n.delay = function(e, n) {
        var i = ke.call(arguments, 2);
        return setTimeout(function() {
            e.apply(t, i)
        }, n)
    }, n.difference = function(e) {
        for (var t = -1, n = e ? e.length : 0, o = me.apply(G, arguments), o = i(o, n), r = []; ++t < n;) {
            var s = e[t];
            o(s) || r.push(s)
        }
        return r
    }, n.escape = function(e) {
        return e == X ? "" : (e + "").replace(he, u)
    }, n.every = $, n.filter = P, n.find = A, n.first = H, n.flatten = I, n.forEach = dt, n.forIn = it, n.forOwn = ot, n.functions = y, n.groupBy = function(e, t, n) {
        var i = {},
            t = a(t, n);
        return dt(e, function(e, n, o) {
            n = t(e, n, o), (we.call(i, n) ? i[n] : i[n] = []).push(e)
        }), i
    }, n.has = function(e, t) {
        return e ? we.call(e, t) : Y
    }, n.identity = R, n.indexOf = F, n.initial = function(e, t, n) {
        return e ? ke.call(e, 0, -(t == X || n ? 1 : t)) : []
    }, n.intersection = function(e) {
        var t = arguments,
            n = t.length,
            o = {},
            r = [];
        return dt(e, function(e) {
            if (0 > F(r, e)) {
                for (var s = n; --s;)
                    if (!(o[s] || (o[s] = i(t[s])))(e)) return;
                r.push(e)
            }
        }), r
    }, n.invert = m, n.invoke = function(e, t) {
        var n = ke.call(arguments, 2),
            i = "function" == typeof t,
            o = [];
        return dt(e, function(e) {
            o.push((i ? t : e[t]).apply(e, n))
        }), o
    }, n.isArguments = f, n.isArray = lt, n.isBoolean = function(e) {
        return e === B || e === Y || Ce.call(e) == Ie
    }, n.isDate = function(e) {
        return Ce.call(e) == Fe
    }, n.isElement = function(e) {
        return e ? 1 === e.nodeType : Y
    }, n.isEmpty = function(e) {
        var t = B;
        if (!e) return t;
        var n = Ce.call(e),
            i = e.length;
        return n == He || n == ze || n == Oe || Be && f(e) || n == qe && "number" == typeof i && x(e.splice) ? !i : (ot(e, function() {
            return t = Y
        }), t)
    }, n.isEqual = b, n.isFinite = function(e) {
        return Ae(e) && !Ee(parseFloat(e))
    }, n.isFunction = x, n.isNaN = function(e) {
        return Ce.call(e) == Ne && e != +e
    }, n.isNull = function(e) {
        return e === X
    }, n.isNumber = function(e) {
        return Ce.call(e) == Ne
    }, n.isObject = w, n.isPlainObject = ct, n.isRegExp = function(e) {
        return Ce.call(e) == _e
    }, n.isString = T, n.isUndefined = function(e) {
        return e === t
    }, n.keys = ut, n.last = function(e, t, n) {
        if (e) {
            var i = e.length;
            return t == X || n ? e[i - 1] : ke.call(e, -t || i)
        }
    }, n.lastIndexOf = function(e, t, n) {
        var i = e ? e.length : 0;
        for ("number" == typeof n && (i = (0 > n ? je(0, i + n) : De(n, i - 1)) + 1); i--;)
            if (e[i] === t) return i;
        return -1
    }, n.map = E, n.max = L, n.memoize = function(e, t) {
        var n = {};
        return function() {
            var i = t ? t.apply(this, arguments) : arguments[0];
            return we.call(n, i) ? n[i] : n[i] = e.apply(this, arguments)
        }
    }, n.merge = S, n.min = function(e, t, n) {
        var i = 1 / 0,
            r = -1,
            s = e ? e.length : 0,
            l = i;
        if (t || !lt(e)) t = !t && T(e) ? o : a(t, n), dt(e, function(e, n, o) {
            (n = t(e, n, o)) < i && (i = n, l = e)
        });
        else
            for (; ++r < s;) e[r] < l && (l = e[r]);
        return l
    }, n.mixin = W, n.noConflict = function() {
        return e._ = ne, this
    }, n.object = function(e, t) {
        for (var n = -1, i = e ? e.length : 0, o = {}; ++n < i;) {
            var r = e[n];
            t ? o[r] = t[n] : o[r[0]] = r[1]
        }
        return o
    }, n.omit = function(e, t, n) {
        var i = "function" == typeof t,
            o = {};
        if (i) t = a(t, n);
        else var r = me.apply(G, arguments);
        return it(e, function(e, n, s) {
            (i ? !t(e, n, s) : 0 > F(r, n, 1)) && (o[n] = e)
        }), o
    }, n.once = function(e) {
        var t, n = Y;
        return function() {
            return n ? t : (n = B, t = e.apply(this, arguments), e = X, t)
        }
    }, n.pairs = function(e) {
        var t = [];
        return ot(e, function(e, n) {
            t.push([n, e])
        }), t
    }, n.partial = function(e) {
        return s(e, ke.call(arguments, 1))
    }, n.pick = function(e, t, n) {
        var i = {};
        if ("function" != typeof t)
            for (var o = 0, r = me.apply(G, arguments), s = r.length; ++o < s;) {
                var l = r[o];
                l in e && (i[l] = e[l])
            } else t = a(t, n), it(e, function(e, n, o) {
                t(e, n, o) && (i[n] = e)
            });
        return i
    }, n.pluck = j, n.random = function(e, t) {
        return e == X && t == X && (t = 1), e = +e || 0, t == X && (t = e, e = 0), e + be(Me() * ((+t || 0) - e + 1))
    }, n.range = function(e, t, n) {
        e = +e || 0, n = +n || 1, t == X && (t = e, e = 0);
        for (var i = -1, t = je(0, ye((t - e) / n)), o = Array(t); ++i < t;) o[i] = e, e += n;
        return o
    }, n.reduce = D, n.reduceRight = M, n.reject = function(e, t, n) {
        return t = a(t, n), P(e, function(e, n, i) {
            return !t(e, n, i)
        })
    }, n.rest = N, n.result = function(e, t) {
        var n = e ? e[t] : X;
        return x(n) ? e[t]() : n
    }, n.shuffle = function(e) {
        var t = -1,
            n = Array(e ? e.length : 0);
        return dt(e, function(e) {
            var i = be(Me() * (++t + 1));
            n[t] = n[i], n[i] = e
        }), n
    }, n.size = function(e) {
        var t = e ? e.length : 0;
        return "number" == typeof t ? t : ut(e).length
    }, n.some = O, n.sortBy = function(e, t, n) {
        var i = [],
            t = a(t, n);
        for (dt(e, function(e, n, o) {
                i.push({
                    a: t(e, n, o),
                    b: n,
                    c: e
                })
            }), e = i.length, i.sort(r); e--;) i[e] = i[e].c;
        return i
    }, n.sortedIndex = q, n.tap = function(e, t) {
        return t(e), e
    }, n.template = function(e, t, i) {
        e || (e = ""), i || (i = {});
        var o, r, s = n.templateSettings,
            a = 0,
            l = i.interpolate || s.interpolate || fe,
            u = "__p += '",
            d = i.variable || s.variable,
            p = d;
        e.replace(RegExp((i.escape || s.escape || fe).source + "|" + l.source + "|" + (l === pe ? de : fe).source + "|" + (i.evaluate || s.evaluate || fe).source + "|$", "g"), function(t, n, i, r, s, l) {
            i || (i = r), u += e.slice(a, l).replace(ge, c), u += n ? "'+__e(" + n + ")+'" : s ? "';" + s + ";__p+='" : i ? "'+((__t=(" + i + "))==null?'':__t)+'" : "", o || (o = s || ie.test(n || i)), a = l + t.length
        }), u += "';", p || (d = "obj", o ? u = "with(" + d + "){" + u + "}" : (i = RegExp("(\\(\\s*)" + d + "\\." + d + "\\b", "g"), u = u.replace(ce, "$&" + d + ".").replace(i, "$1__d"))), u = (o ? u.replace(re, "") : u).replace(se, "$1").replace(ae, "$1;"), u = "function(" + d + "){" + (p ? "" : d + "||(" + d + "={});") + "var __t,__p='',__e=_.escape" + (o ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : (p ? "" : ",__d=" + d + "." + d + "||" + d) + ";") + u + "return __p}";
        try {
            r = Function("_", "return " + u)(n)
        } catch (e) {
            throw e.source = u, e
        }
        return t ? r(t) : (r.source = u, r)
    }, n.throttle = function(e, t) {
        function n() {
            a = new Date, s = X, o = e.apply(r, i)
        }
        var i, o, r, s, a = 0;
        return function() {
            var l = new Date,
                c = t - (l - a);
            return i = arguments, r = this, 0 >= c ? (clearTimeout(s), a = l, o = e.apply(r, i)) : s || (s = setTimeout(n, c)), o
        }
    }, n.times = function(e, t, n) {
        for (var e = +e || 0, i = -1, o = Array(e); ++i < e;) o[i] = t.call(n, i);
        return o
    }, n.toArray = function(e) {
        return e && "number" == typeof e.length ? (Xe ? T(e) : "string" == typeof e) ? e.split("") : ke.call(e) : k(e)
    }, n.unescape = function(e) {
        return e == X ? "" : (e + "").replace(oe, p)
    }, n.union = function() {
        return _(me.apply(G, arguments))
    }, n.uniq = _, n.uniqueId = function(e) {
        var t = J++;
        return e ? e + t : t
    }, n.values = k, n.where = function(e, t) {
        var n = ut(t);
        return P(e, function(e) {
            for (var i = n.length; i--;) {
                var o = e[n[i]] === t[n[i]];
                if (!o) break
            }
            return !!o
        })
    }, n.without = function(e) {
        for (var t = -1, n = e ? e.length : 0, o = i(arguments, 1, 20), r = []; ++t < n;) {
            var s = e[t];
            o(s) || r.push(s)
        }
        return r
    }, n.wrap = function(e, t) {
        return function() {
            var n = [e];
            return Te.apply(n, arguments), t.apply(this, n)
        }
    }, n.zip = function(e) {
        for (var t = -1, n = e ? L(j(arguments, "length")) : 0, i = Array(n); ++t < n;) i[t] = j(arguments, t);
        return i
    }, n.all = $, n.any = O, n.collect = E, n.detect = A, n.drop = N, n.each = dt, n.extend = nt, n.foldl = D, n.foldr = M, n.head = H, n.include = C, n.inject = D, n.methods = y, n.select = P, n.tail = N, n.take = H, n.unique = _, W(n), n.prototype.chain = function() {
        return this.__chain__ = B, this
    }, n.prototype.value = function() {
        return this.__wrapped__
    }, dt("pop push reverse shift sort splice unshift".split(" "), function(e) {
        var t = G[e];
        n.prototype[e] = function() {
            var e = this.__wrapped__;
            return t.apply(e, arguments), Re && 0 === e.length && delete e[0], this.__chain__ && (e = new n(e), e.__chain__ = B), e
        }
    }), dt(["concat", "join", "slice"], function(e) {
        var t = G[e];
        n.prototype[e] = function() {
            var e = t.apply(this.__wrapped__, arguments);
            return this.__chain__ && (e = new n(e), e.__chain__ = B), e
        }
    }), "function" == typeof define && "object" == typeof define.amd && define.amd ? (e._ = n, define(function() {
        return n
    })) : U ? "object" == typeof module && module && module.exports == U ? (module.exports = n)._ = n : U._ = n : e._ = n
}(this),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var t = window.Slick || {};
    (t = function() {
        var t = 0;
        return function(n, i) {
            var o, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(n),
                appendDots: e(n),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, n) {
                    return e('<button type="button" />').text(n + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(n), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(n).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = t++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
        }
    }()).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) {
            var o = this;
            if ("boolean" == typeof n) i = n, n = null;
            else if (n < 0 || n >= o.slideCount) return !1;
            o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, n) {
                e(n).attr("data-slick-index", t)
            }), o.$slidesCache = o.$slides, o.reinit()
        }, t.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, t.prototype.animateSlide = function(t, n) {
            var i = {},
                o = this;
            o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
                left: t
            }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
                top: t
            }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
                animStart: o.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function(e) {
                    e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
                },
                complete: function() {
                    n && n.call()
                }
            })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function() {
                o.disableTransition(), n.call()
            }, o.options.speed))
        }, t.prototype.getNavTarget = function() {
            var t = this,
                n = t.options.asNavFor;
            return n && null !== n && (n = e(n).not(t.$slider)), n
        }, t.prototype.asNavFor = function(t) {
            var n = this.getNavTarget();
            null !== n && "object" == typeof n && n.each(function() {
                var n = e(this).slick("getSlick");
                n.unslicked || n.slideHandler(t, !0)
            })
        }, t.prototype.applyTransition = function(e) {
            var t = this,
                n = {};
            !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function() {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function() {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
        }, t.prototype.buildArrows = function() {
            var t = this;
            !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, t.prototype.buildDots = function() {
            var t, n, i = this;
            if (!0 === i.options.dots) {
                for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
                i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) {
                e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
            }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function() {
            var e, t, n, i, o, r, s, a = this;
            if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
                for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < a.options.rows; t++) {
                        var c = document.createElement("div");
                        for (n = 0; n < a.options.slidesPerRow; n++) {
                            var u = e * s + (t * a.options.slidesPerRow + n);
                            r.get(u) && c.appendChild(r.get(u))
                        }
                        l.appendChild(c)
                    }
                    i.appendChild(l)
                }
                a.$slider.empty().append(i), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, t.prototype.checkResponsive = function(t, n) {
            var i, o, r, s = this,
                a = !1,
                l = s.$slider.width(),
                c = window.innerWidth || e(window).width();
            if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                o = null;
                for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
                null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
            }
        }, t.prototype.changeSlide = function(t, n) {
            var i, o, r, s = this,
                a = e(t.currentTarget);
            switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll != 0, i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
                case "previous":
                    o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
                    break;
                case "next":
                    o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
                    break;
                case "index":
                    var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
                    s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function(e) {
            var t, n;
            if (t = this.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1];
            else
                for (var i in t) {
                    if (e < t[i]) {
                        e = n;
                        break
                    }
                    n = t[i]
                }
            return e
        }, t.prototype.cleanUpEvents = function() {
            var t = this;
            t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpSlideEvents = function() {
            var t = this;
            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.cleanUpRows = function() {
            var e, t = this;
            t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
        }, t.prototype.clickHandler = function(e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function(t) {
            var n = this;
            n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                e(this).attr("style", e(this).data("originalStyling"))
            }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
        }, t.prototype.disableTransition = function(e) {
            var t = this,
                n = {};
            n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.fadeSlide = function(e, t) {
            var n = this;
            !1 === n.cssTransitions ? (n.$slides.eq(e).css({
                zIndex: n.options.zIndex
            }), n.$slides.eq(e).animate({
                opacity: 1
            }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
                opacity: 1,
                zIndex: n.options.zIndex
            }), t && setTimeout(function() {
                n.disableTransition(e), t.call()
            }, n.options.speed))
        }, t.prototype.fadeSlideOut = function(e) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.focusHandler = function() {
            var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(n) {
                n.stopImmediatePropagation();
                var i = e(this);
                setTimeout(function() {
                    t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
                }, 0)
            })
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, t.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                n = 0,
                i = 0;
            if (!0 === e.options.infinite)
                if (e.slideCount <= e.options.slidesToShow) ++i;
                else
                    for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) i = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return i - 1
        }, t.prototype.getLeft = function(e) {
            var t, n, i, o, r = this,
                s = 0;
            return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
            return this.options[e]
        }, t.prototype.getNavigableIndexes = function() {
            var e, t = this,
                n = 0,
                i = 0,
                o = [];
            for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return o
        }, t.prototype.getSlick = function() {
            return this
        }, t.prototype.getSlideCount = function() {
            var t, n, i = this;
            return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(o, r) {
                if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft) return t = r, !1
            }), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, t.prototype.init = function(t) {
            var n = this;
            e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
        }, t.prototype.initADA = function() {
            var t = this,
                n = Math.ceil(t.slideCount / t.options.slidesToShow),
                i = t.getNavigableIndexes().filter(function(e) {
                    return e >= 0 && e < t.slideCount
                });
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n) {
                var o = i.indexOf(n);
                e(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + t.instanceUid + n,
                    tabindex: -1
                }), -1 !== o && e(this).attr({
                    "aria-describedby": "slick-slide-control" + t.instanceUid + o
                })
            }), t.$dots.attr("role", "tablist").find("li").each(function(o) {
                var r = i[o];
                e(this).attr({
                    role: "presentation"
                }), e(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + t.instanceUid + o,
                    "aria-controls": "slick-slide" + t.instanceUid + r,
                    "aria-label": o + 1 + " of " + n,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(t.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) t.$slides.eq(o).attr("tabindex", 0);
            t.activateADA()
        }, t.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
        },
        t.prototype.initDotEvents = function() {
            var t = this;
            !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.initSlideEvents = function() {
            var t = this;
            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
        }, t.prototype.initUI = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, t.prototype.keyHandler = function(e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "previous" : "next"
                }
            }))
        }, t.prototype.lazyLoad = function() {
            function t(t) {
                e("img[data-lazy]", t).each(function() {
                    var t = e(this),
                        n = e(this).attr("data-lazy"),
                        i = e(this).attr("data-srcset"),
                        o = e(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                        s = document.createElement("img");
                    s.onload = function() {
                        t.animate({
                            opacity: 0
                        }, 100, function() {
                            i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).animate({
                                opacity: 1
                            }, 200, function() {
                                t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), r.$slider.trigger("lazyLoaded", [r, t, n])
                        })
                    }, s.onerror = function() {
                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, n])
                    }, s.src = n
                })
            }
            var n, i, o, r = this;
            if (!0 === r.options.centerMode ? !0 === r.options.infinite ? o = (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (i = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (i = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, o = Math.ceil(i + r.options.slidesToShow), !0 === r.options.fade && (i > 0 && i--, o <= r.slideCount && o++)), n = r.$slider.find(".slick-slide").slice(i, o), "anticipated" === r.options.lazyLoad)
                for (var s = i - 1, a = o, l = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) s < 0 && (s = r.slideCount - 1), n = (n = n.add(l.eq(s))).add(l.eq(a)), s--, a++;
            t(n), r.slideCount <= r.options.slidesToShow ? t(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? t(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && t(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
        }, t.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.orientationChange = function() {
            var e = this;
            e.checkResponsive(), e.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function() {
            var e = this;
            e.autoPlayClear(), e.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function() {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, t.prototype.postSlide = function(t) {
            var n = this;
            n.unslicked || (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()))
        }, t.prototype.prev = t.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, t.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, t.prototype.progressiveLazyLoad = function(t) {
            t = t || 1;
            var n, i, o, r, s, a = this,
                l = e("img[data-lazy]", a.$slider);
            l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), r = n.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function() {
                o && (n.attr("srcset", o), r && n.attr("sizes", r)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad()
            }, s.onerror = function() {
                t < 3 ? setTimeout(function() {
                    a.progressiveLazyLoad(t + 1)
                }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad())
            }, s.src = i) : a.$slider.trigger("allImagesLoaded", [a])
        }, t.prototype.refresh = function(t) {
            var n, i, o = this;
            i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
                currentSlide: n
            }), o.init(), t || o.changeSlide({
                data: {
                    message: "index",
                    index: n
                }
            }, !1)
        }, t.prototype.registerBreakpoints = function() {
            var t, n, i, o = this,
                r = o.options.responsive || null;
            if ("array" === e.type(r) && r.length) {
                o.respondTo = o.options.respondTo || "window";
                for (t in r)
                    if (i = o.breakpoints.length - 1, r.hasOwnProperty(t)) {
                        for (n = r[t].breakpoint; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                        o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings
                    }
                o.breakpoints.sort(function(e, t) {
                    return o.options.mobileFirst ? e - t : t - e
                })
            }
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
        }, t.prototype.resize = function() {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }, 50))
        }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
            var i = this;
            if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
            i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
        }, t.prototype.setCSS = function(e) {
            var t, n, i = this,
                o = {};
            !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
        }, t.prototype.setDimensions = function() {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, t.prototype.setFade = function() {
            var t, n = this;
            n.$slides.each(function(i, o) {
                t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                }) : e(o).css({
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: n.options.zIndex - 1,
                opacity: 1
            })
        }, t.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function() {
            var t, n, i, o, r, s = this,
                a = !1;
            if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[i] = o;
            else if ("multiple" === r) e.each(i, function(e, t) {
                s.options[e] = t
            });
            else if ("responsive" === r)
                for (n in o)
                    if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]];
                    else {
                        for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
                        s.options.responsive.push(o[n])
                    }
            a && (s.unload(), s.reinit())
        }, t.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, t.prototype.setSlideClasses = function(e) {
            var t, n, i, o, r = this;
            if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
                var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
            } else e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
        }, t.prototype.setupInfinite = function() {
            var t, n, i, o = this;
            if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
                for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (t = 0; t < i + o.slideCount; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.interrupt = function(e) {
            var t = this;
            e || t.autoPlay(), t.interrupted = e
        }, t.prototype.selectHandler = function(t) {
            var n = this,
                i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                o = parseInt(i.attr("data-slick-index"));
            o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o)
        }, t.prototype.slideHandler = function(e, t, n) {
            var i, o, r, s, a, l = null,
                c = this;
            if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
                if (!1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function() {
                    c.postSlide(i)
                }) : c.postSlide(i));
                else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function() {
                c.postSlide(i)
            }) : c.postSlide(i));
            else {
                if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, function() {
                    c.postSlide(o)
                })) : c.postSlide(o), void c.animateHeight();
                !0 !== n ? c.animateSlide(l, function() {
                    c.postSlide(o)
                }) : c.postSlide(o)
            }
        }, t.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function() {
            var e, t, n, i, o = this;
            return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? !1 === o.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
        }, t.prototype.swipeEnd = function(e) {
            var t, n, i = this;
            if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
            if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
            if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                switch (n = i.swipeDirection()) {
                    case "left":
                    case "down":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
                }
                "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
        }, t.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function(e) {
            var t, n, i, o, r, s, a = this;
            return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
        }, t.prototype.swipeStart = function(e) {
            var t, n = this;
            if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function() {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function(e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy()
        }, t.prototype.updateArrows = function() {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, t.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, t.prototype.visibility = function() {
            var e = this;
            e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
        }, e.fn.slick = function() {
            var e, n, i = this,
                o = arguments[0],
                r = Array.prototype.slice.call(arguments, 1),
                s = i.length;
            for (e = 0; e < s; e++)
                if ("object" == typeof o || void 0 === o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), void 0 !== n) return n;
            return i
        }
}),
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
function(e, t, n, i) {
    "use strict";

    function o(e) {
        var t = n(e.currentTarget),
            i = e.data ? e.data.options : {},
            o = t.attr("data-fancybox") || "",
            r = 0,
            s = [];
        e.isDefaultPrevented() || (e.preventDefault(), o ? (s = i.selector ? n(i.selector) : e.data ? e.data.items : [], s = s.length ? s.filter('[data-fancybox="' + o + '"]') : n('[data-fancybox="' + o + '"]'), (r = s.index(t)) < 0 && (r = 0)) : s = [t], n.fancybox.open(s, i, r))
    }
    if (n) {
        if (n.fn.fancybox) return void("console" in e && console.log("fancyBox already initialized"));
        var r = {
                loop: !1,
                margin: [44, 0],
                gutter: 50,
                keyboard: !0,
                arrows: !0,
                infobar: !0,
                toolbar: !0,
                buttons: ["slideShow", "fullScreen", "thumbs", "share", "close"],
                idleTime: 3,
                smallBtn: "auto",
                protect: !1,
                modal: !1,
                image: {
                    preload: "auto"
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 500,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
                    smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>'
                },
                parentEl: "body",
                autoFocus: !1,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 4e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                wheel: "auto",
                onInit: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop,
                onActivate: n.noop,
                onDeactivate: n.noop,
                clickContent: function(e, t) {
                    return "image" === e.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    idleTime: !1,
                    margin: 0,
                    clickContent: function(e, t) {
                        return "image" === e.type && "toggleControls"
                    },
                    clickSlide: function(e, t) {
                        return "image" === e.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function(e, t) {
                        return "image" === e.type && "zoom"
                    },
                    dblclickSlide: function(e, t) {
                        return "image" === e.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schliessen",
                        NEXT: "Weiter",
                        PREV: "Zurück",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Maßstab"
                    }
                }
            },
            s = n(e),
            a = n(t),
            l = 0,
            c = function(e) {
                return e && e.hasOwnProperty && e instanceof n
            },
            u = function() {
                return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
                    return e.setTimeout(t, 1e3 / 60)
                }
            }(),
            d = function() {
                var e, n = t.createElement("fakeelement"),
                    o = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (e in o)
                    if (n.style[e] !== i) return o[e];
                return "transitionend"
            }(),
            p = function(e) {
                return e && e.length && e[0].offsetHeight
            },
            f = function(e, i, o) {
                var r = this;
                r.opts = n.extend(!0, {
                    index: o
                }, n.fancybox.defaults, i || {}), n.fancybox.isMobile && (r.opts = n.extend(!0, {}, r.opts, r.opts.mobile)), i && n.isArray(i.buttons) && (r.opts.buttons = i.buttons), r.id = r.opts.id || ++l, r.group = [], r.currIndex = parseInt(r.opts.index, 10) || 0, r.prevIndex = null, r.prevPos = null, r.currPos = 0, r.firstRun = null, r.createGroup(e), r.group.length && (r.$lastFocus = n(t.activeElement).blur(), r.slides = {}, r.init())
            };
        n.extend(f.prototype, {
            init: function() {
                var o, r, s, l = this,
                    c = l.group[l.currIndex],
                    u = c.opts,
                    d = n.fancybox.scrollbarWidth;
                l.scrollTop = a.scrollTop(), l.scrollLeft = a.scrollLeft(), n.fancybox.getInstance() || (n("body").addClass("fancybox-active"), /iPad|iPhone|iPod/.test(navigator.userAgent) && !e.MSStream ? "image" !== c.type && n("body").css("top", -1 * n("body").scrollTop()).addClass("fancybox-iosfix") : !n.fancybox.isMobile && t.body.scrollHeight > e.innerHeight && (d === i && (o = n('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body"), d = n.fancybox.scrollbarWidth = o[0].offsetWidth - o[0].clientWidth, o.remove()), n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + d + "px; }</style>"), n("body").addClass("compensate-for-scrollbar"))), s = "", n.each(u.buttons, function(e, t) {
                    s += u.btnTpl[t] || ""
                }), r = n(l.translate(l, u.baseTpl.replace("{{buttons}}", s).replace("{{arrows}}", u.btnTpl.arrowLeft + u.btnTpl.arrowRight))).attr("id", "fancybox-container-" + l.id).addClass("fancybox-is-hidden").addClass(u.baseClass).data("FancyBox", l).appendTo(u.parentEl), l.$refs = {
                    container: r
                }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(e) {
                    l.$refs[e] = r.find(".fancybox-" + e)
                }), l.trigger("onInit"), l.activate(), l.jumpTo(l.currIndex)
            },
            translate: function(e, t) {
                var n = e.opts.i18n[e.opts.lang];
                return t.replace(/\{\{(\w+)\}\}/g, function(e, t) {
                    var o = n[t];
                    return o === i ? e : o
                })
            },
            createGroup: function(e) {
                var t = this,
                    o = n.makeArray(e);
                n.each(o, function(e, o) {
                    var r, s, a, l, c, u = {},
                        d = {};
                    n.isPlainObject(o) ? (u = o, d = o.opts || o) : "object" === n.type(o) && n(o).length ? (r = n(o), d = r.data(), d = n.extend({}, d, d.options || {}), d.$orig = r, u.src = d.src || r.attr("href"), u.type || u.src || (u.type = "inline", u.src = o)) : u = {
                        type: "html",
                        src: o + ""
                    }, u.opts = n.extend(!0, {}, t.opts, d), n.isArray(d.buttons) && (u.opts.buttons = d.buttons), s = u.type || u.opts.type, l = u.src || "", !s && l && (l.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : l.match(/\.(pdf)((\?|#).*)?$/i) ? s = "pdf" : (a = l.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)) ? (s = "video", u.opts.videoFormat || (u.opts.videoFormat = "video/" + ("ogv" === a[1] ? "ogg" : a[1]))) : "#" === l.charAt(0) && (s = "inline")), s ? u.type = s : t.trigger("objectNeedsType", u), u.index = t.group.length, u.opts.$orig && !u.opts.$orig.length && delete u.opts.$orig, !u.opts.$thumb && u.opts.$orig && (u.opts.$thumb = u.opts.$orig.find("img:first")), u.opts.$thumb && !u.opts.$thumb.length && delete u.opts.$thumb, "function" === n.type(u.opts.caption) && (u.opts.caption = u.opts.caption.apply(o, [t, u])), "function" === n.type(t.opts.caption) && (u.opts.caption = t.opts.caption.apply(o, [t, u])), u.opts.caption instanceof n || (u.opts.caption = u.opts.caption === i ? "" : u.opts.caption + ""), "ajax" === s && (c = l.split(/\s+/, 2), c.length > 1 && (u.src = c.shift(), u.opts.filter = c.shift())), "auto" == u.opts.smallBtn && (n.inArray(s, ["html", "inline", "ajax"]) > -1 ? (u.opts.toolbar = !1, u.opts.smallBtn = !0) : u.opts.smallBtn = !1), "pdf" === s && (u.type = "iframe", u.opts.iframe.preload = !1), u.opts.modal && (u.opts = n.extend(!0, u.opts, {
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })), t.group.push(u)
                })
            },
            addEvents: function() {
                var i = this;
                i.removeEvents(), i.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(e) {
                    e.stopPropagation(), e.preventDefault(), i.close(e)
                }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function(e) {
                    e.stopPropagation(), e.preventDefault(), i.previous()
                }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function(e) {
                    e.stopPropagation(), e.preventDefault(), i.next()
                }).on("click.fb", "[data-fancybox-zoom]", function(e) {
                    i[i.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                }), s.on("orientationchange.fb resize.fb", function(e) {
                    e && e.originalEvent && "resize" === e.originalEvent.type ? u(function() {
                        i.update()
                    }) : (i.$refs.stage.hide(), setTimeout(function() {
                        i.$refs.stage.show(), i.update()
                    }, 600))
                }), a.on("focusin.fb", function(e) {
                    var o = n.fancybox ? n.fancybox.getInstance() : null;
                    o.isClosing || !o.current || !o.current.opts.trapFocus || n(e.target).hasClass("fancybox-container") || n(e.target).is(t) || o && "fixed" !== n(e.target).css("position") && !o.$refs.container.has(e.target).length && (e.stopPropagation(), o.focus(), s.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))
                }), a.on("keydown.fb", function(e) {
                    var t = i.current,
                        o = e.keyCode || e.which;
                    if (t && t.opts.keyboard && !n(e.target).is("input") && !n(e.target).is("textarea")) return 8 === o || 27 === o ? (e.preventDefault(), void i.close(e)) : 37 === o || 38 === o ? (e.preventDefault(), void i.previous()) : 39 === o || 40 === o ? (e.preventDefault(), void i.next()) : void i.trigger("afterKeydown", e, o)
                }), i.group[i.currIndex].opts.idleTime && (i.idleSecondsCounter = 0, a.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(e) {
                    i.idleSecondsCounter = 0, i.isIdle && i.showControls(), i.isIdle = !1
                }), i.idleInterval = e.setInterval(function() {
                    ++i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime && !i.isDragging && (i.isIdle = !0, i.idleSecondsCounter = 0, i.hideControls())
                }, 1e3))
            },
            removeEvents: function() {
                var t = this;
                s.off("orientationchange.fb resize.fb"), a.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), t.idleInterval && (e.clearInterval(t.idleInterval), t.idleInterval = null)
            },
            previous: function(e) {
                return this.jumpTo(this.currPos - 1, e)
            },
            next: function(e) {
                return this.jumpTo(this.currPos + 1, e)
            },
            jumpTo: function(e, t, o) {
                var r, s, a, l, c, u, d, f = this,
                    h = f.group.length;
                if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
                    if (e = parseInt(e, 10), !(s = f.current ? f.current.opts.loop : f.opts.loop) && (e < 0 || e >= h)) return !1;
                    if (r = f.firstRun = null === f.firstRun, !(h < 2 && !r && f.isDragging)) {
                        if (l = f.current, f.prevIndex = f.currIndex, f.prevPos = f.currPos, a = f.createSlide(e), h > 1 && ((s || a.index > 0) && f.createSlide(e - 1), (s || a.index < h - 1) && f.createSlide(e + 1)), f.current = a, f.currIndex = a.index, f.currPos = a.pos, f.trigger("beforeShow", r), f.updateControls(), u = n.fancybox.getTranslate(a.$slide), a.isMoved = (0 !== u.left || 0 !== u.top) && !a.$slide.hasClass("fancybox-animated"), a.forcedDuration = i, n.isNumeric(t) ? a.forcedDuration = t : t = a.opts[r ? "animationDuration" : "transitionDuration"], t = parseInt(t, 10), r) return a.opts.animationEffect && t && f.$refs.container.css("transition-duration", t + "ms"), f.$refs.container.removeClass("fancybox-is-hidden"), p(f.$refs.container), f.$refs.container.addClass("fancybox-is-open"), a.$slide.addClass("fancybox-slide--current"), f.loadSlide(a), void f.preload("image");
                        n.each(f.slides, function(e, t) {
                            n.fancybox.stop(t.$slide)
                        }), a.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), a.isMoved ? (c = Math.round(a.$slide.width()), n.each(f.slides, function(e, i) {
                            var o = i.pos - a.pos;
                            n.fancybox.animate(i.$slide, {
                                top: 0,
                                left: o * c + o * i.opts.gutter
                            }, t, function() {
                                i.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), i.pos === f.currPos && (a.isMoved = !1, f.complete())
                            })
                        })) : f.$refs.stage.children().removeAttr("style"), a.isLoaded ? f.revealContent(a) : f.loadSlide(a), f.preload("image"), l.pos !== a.pos && (d = "fancybox-slide--" + (l.pos > a.pos ? "next" : "previous"), l.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), l.isComplete = !1, t && (a.isMoved || a.opts.transitionEffect) && (a.isMoved ? l.$slide.addClass(d) : (d = "fancybox-animated " + d + " fancybox-fx-" + a.opts.transitionEffect, n.fancybox.animate(l.$slide, d, t, function() {
                            l.$slide.removeClass(d).removeAttr("style")
                        }))))
                    }
                }
            },
            createSlide: function(e) {
                var t, i, o = this;
                return i = e % o.group.length, i = i < 0 ? o.group.length + i : i, !o.slides[e] && o.group[i] && (t = n('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage), o.slides[e] = n.extend(!0, {}, o.group[i], {
                    pos: e,
                    $slide: t,
                    isLoaded: !1
                }), o.updateSlide(o.slides[e])), o.slides[e]
            },
            scaleToActual: function(e, t, o) {
                var r, s, a, l, c, u = this,
                    d = u.current,
                    p = d.$content,
                    f = parseInt(d.$slide.width(), 10),
                    h = parseInt(d.$slide.height(), 10),
                    g = d.width,
                    v = d.height;
                "image" != d.type || d.hasError || !p || u.isAnimating || (n.fancybox.stop(p), u.isAnimating = !0, e = e === i ? .5 * f : e, t = t === i ? .5 * h : t, r = n.fancybox.getTranslate(p), l = g / r.width, c = v / r.height, s = .5 * f - .5 * g, a = .5 * h - .5 * v, g > f && (s = r.left * l - (e * l - e), s > 0 && (s = 0), s < f - g && (s = f - g)), v > h && (a = r.top * c - (t * c - t), a > 0 && (a = 0), a < h - v && (a = h - v)), u.updateCursor(g, v), n.fancybox.animate(p, {
                    top: a,
                    left: s,
                    scaleX: l,
                    scaleY: c
                }, o || 330, function() {
                    u.isAnimating = !1
                }), u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop())
            },
            scaleToFit: function(e) {
                var t, i = this,
                    o = i.current,
                    r = o.$content;
                "image" != o.type || o.hasError || !r || i.isAnimating || (n.fancybox.stop(r), i.isAnimating = !0, t = i.getFitPos(o), i.updateCursor(t.width, t.height), n.fancybox.animate(r, {
                    top: t.top,
                    left: t.left,
                    scaleX: t.width / r.width(),
                    scaleY: t.height / r.height()
                }, e || 330, function() {
                    i.isAnimating = !1
                }))
            },
            getFitPos: function(e) {
                var t, i, o, r, s, a = this,
                    l = e.$content,
                    c = e.width,
                    u = e.height,
                    d = e.opts.margin;
                return !(!l || !l.length || !c && !u) && ("number" === n.type(d) && (d = [d, d]), 2 == d.length && (d = [d[0], d[1], d[0], d[1]]), t = parseInt(a.$refs.stage.width(), 10) - (d[1] + d[3]), i = parseInt(a.$refs.stage.height(), 10) - (d[0] + d[2]), o = Math.min(1, t / c, i / u), r = Math.floor(o * c), s = Math.floor(o * u), {
                    top: Math.floor(.5 * (i - s)) + d[0],
                    left: Math.floor(.5 * (t - r)) + d[3],
                    width: r,
                    height: s
                })
            },
            update: function() {
                var e = this;
                n.each(e.slides, function(t, n) {
                    e.updateSlide(n)
                })
            },
            updateSlide: function(e, t) {
                var i = this,
                    o = e && e.$content;
                o && (e.width || e.height) && (i.isAnimating = !1, n.fancybox.stop(o), n.fancybox.setTranslate(o, i.getFitPos(e)), e.pos === i.currPos && i.updateCursor()), e.$slide.trigger("refresh"), i.trigger("onUpdate", e)
            },
            centerSlide: function(e, t) {
                var o, r, s = this;
                s.current && (o = Math.round(e.$slide.width()), r = e.pos - s.current.pos, n.fancybox.animate(e.$slide, {
                    top: 0,
                    left: r * o + r * e.opts.gutter,
                    opacity: 1
                }, t === i ? 0 : t, null, !1))
            },
            updateCursor: function(e, t) {
                var n, o = this,
                    r = o.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                o.current && !o.isClosing && (o.isZoomable() ? (r.addClass("fancybox-is-zoomable"), n = e !== i && t !== i ? e < o.current.width && t < o.current.height : o.isScaledDown(), n ? r.addClass("fancybox-can-zoomIn") : o.current.opts.touch ? r.addClass("fancybox-can-drag") : r.addClass("fancybox-can-zoomOut")) : o.current.opts.touch && r.addClass("fancybox-can-drag"))
            },
            isZoomable: function() {
                var e, t = this,
                    i = t.current;
                if (i && !t.isClosing) return !!("image" === i.type && i.isLoaded && !i.hasError && ("zoom" === i.opts.clickContent || n.isFunction(i.opts.clickContent) && "zoom" === i.opts.clickContent(i)) && (e = t.getFitPos(i), i.width > e.width || i.height > e.height))
            },
            isScaledDown: function() {
                var e = this,
                    t = e.current,
                    i = t.$content,
                    o = !1;
                return i && (o = n.fancybox.getTranslate(i), o = o.width < t.width || o.height < t.height), o
            },
            canPan: function() {
                var e = this,
                    t = e.current,
                    n = t.$content,
                    i = !1;
                return n && (i = e.getFitPos(t), i = Math.abs(n.width() - i.width) > 1 || Math.abs(n.height() - i.height) > 1), i
            },
            loadSlide: function(e) {
                var t, i, o, r = this;
                if (!e.isLoading && !e.isLoaded) {
                    switch (e.isLoading = !0, r.trigger("beforeLoad", e), t = e.type, i = e.$slide, i.off("refresh").trigger("onReset").addClass("fancybox-slide--" + (t || "unknown")).addClass(e.opts.slideClass), t) {
                        case "image":
                            r.setImage(e);
                            break;
                        case "iframe":
                            r.setIframe(e);
                            break;
                        case "html":
                            r.setContent(e, e.src || e.content);
                            break;
                        case "inline":
                            n(e.src).length ? r.setContent(e, n(e.src)) : r.setError(e);
                            break;
                        case "ajax":
                            r.showLoading(e), o = n.ajax(n.extend({}, e.opts.ajax.settings, {
                                url: e.src,
                                success: function(t, n) {
                                    "success" === n && r.setContent(e, t)
                                },
                                error: function(t, n) {
                                    t && "abort" !== n && r.setError(e)
                                }
                            })), i.one("onReset", function() {
                                o.abort()
                            });
                            break;
                        case "video":
                            r.setContent(e, '<video controls><source src="' + e.src + '" type="' + e.opts.videoFormat + "\">Your browser doesn't support HTML5 video</video>");
                            break;
                        default:
                            r.setError(e)
                    }
                    return !0
                }
            },
            setImage: function(t) {
                var i, o, r, s, a = this,
                    l = t.opts.srcset || t.opts.image.srcset;
                if (l) {
                    r = e.devicePixelRatio || 1, s = e.innerWidth * r, o = l.split(",").map(function(e) {
                        var t = {};
                        return e.trim().split(/\s+/).forEach(function(e, n) {
                            var i = parseInt(e.substring(0, e.length - 1), 10);
                            return 0 === n ? t.url = e : void(i && (t.value = i, t.postfix = e[e.length - 1]))
                        }), t
                    }), o.sort(function(e, t) {
                        return e.value - t.value
                    });
                    for (var c = 0; c < o.length; c++) {
                        var u = o[c];
                        if ("w" === u.postfix && u.value >= s || "x" === u.postfix && u.value >= r) {
                            i = u;
                            break
                        }
                    }!i && o.length && (i = o[o.length - 1]), i && (t.src = i.url, t.width && t.height && "w" == i.postfix && (t.height = t.width / t.height * i.value, t.width = i.value))
                }
                t.$content = n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide), !1 !== t.opts.preload && t.opts.width && t.opts.height && (t.opts.thumb || t.opts.$thumb) ? (t.width = t.opts.width, t.height = t.opts.height, t.$ghost = n("<img />").one("error", function() {
                    n(this).remove(), t.$ghost = null, a.setBigImage(t)
                }).one("load", function() {
                    a.afterLoad(t), a.setBigImage(t)
                }).addClass("fancybox-image").appendTo(t.$content).attr("src", t.opts.thumb || t.opts.$thumb.attr("src"))) : a.setBigImage(t)
            },
            setBigImage: function(e) {
                var t = this,
                    i = n("<img />");
                e.$image = i.one("error", function() {
                    t.setError(e)
                }).one("load", function() {
                    clearTimeout(e.timouts), e.timouts = null, t.isClosing || (e.width = e.opts.width || this.naturalWidth, e.height = e.opts.height || this.naturalHeight, e.opts.image.srcset && i.attr("sizes", "100vw").attr("srcset", e.opts.image.srcset), t.hideLoading(e), e.$ghost ? e.timouts = setTimeout(function() {
                        e.timouts = null, e.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, e.height / 1600))) : t.afterLoad(e))
                }).addClass("fancybox-image").attr("src", e.src).appendTo(e.$content), (i[0].complete || "complete" == i[0].readyState) && i[0].naturalWidth && i[0].naturalHeight ? i.trigger("load") : i[0].error ? i.trigger("error") : e.timouts = setTimeout(function() {
                    i[0].complete || e.hasError || t.showLoading(e)
                }, 100)
            },
            setIframe: function(e) {
                var t, o = this,
                    r = e.opts.iframe,
                    s = e.$slide;
                e.$content = n('<div class="fancybox-content' + (r.preload ? " fancybox-is-hidden" : "") + '"></div>').css(r.css).appendTo(s), t = n(r.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(r.attr).appendTo(e.$content), r.preload ? (o.showLoading(e), t.on("load.fb error.fb", function(t) {
                    this.isReady = 1, e.$slide.trigger("refresh"), o.afterLoad(e)
                }), s.on("refresh.fb", function() {
                    var n, o, s, a = e.$content,
                        l = r.css.width,
                        c = r.css.height;
                    if (1 === t[0].isReady) {
                        try {
                            o = t.contents(), s = o.find("body")
                        } catch (e) {}
                        s && s.length && (l === i && (n = t[0].contentWindow.document.documentElement.scrollWidth, l = Math.ceil(s.outerWidth(!0) + (a.width() - n)), l += a.outerWidth() - a.innerWidth()), c === i && (c = Math.ceil(s.outerHeight(!0)), c += a.outerHeight() - a.innerHeight()), l && a.width(l), c && a.height(c)), a.removeClass("fancybox-is-hidden")
                    }
                })) : this.afterLoad(e), t.attr("src", e.src), !0 === e.opts.smallBtn && e.$content.prepend(o.translate(e, e.opts.btnTpl.smallBtn)), s.one("onReset", function() {
                    try {
                        n(this).find("iframe").hide().attr("src", "//about:blank")
                    } catch (e) {}
                    n(this).empty(), e.isLoaded = !1
                })
            },
            setContent: function(e, t) {
                var i = this;
                i.isClosing || (i.hideLoading(e), e.$slide.empty(), c(t) && t.parent().length ? (t.parent(".fancybox-slide--inline").trigger("onReset"), e.$placeholder = n("<div></div>").hide().insertAfter(t), t.css("display", "inline-block")) : e.hasError || ("string" === n.type(t) && (t = n("<div>").append(n.trim(t)).contents(), 3 === t[0].nodeType && (t = n("<div>").html(t))), e.opts.filter && (t = n("<div>").html(t).find(e.opts.filter))), e.$slide.one("onReset", function() {
                    n(this).find("video,audio").trigger("pause"), e.$placeholder && (e.$placeholder.after(t.hide()).remove(), e.$placeholder = null), e.$smallBtn && (e.$smallBtn.remove(), e.$smallBtn = null), e.hasError || (n(this).empty(), e.isLoaded = !1)
                }), e.$content = n(t).appendTo(e.$slide), this.afterLoad(e))
            },
            setError: function(e) {
                e.hasError = !0, e.$slide.removeClass("fancybox-slide--" + e.type), this.setContent(e, this.translate(e, e.opts.errorTpl))
            },
            showLoading: function(e) {
                var t = this;
                (e = e || t.current) && !e.$spinner && (e.$spinner = n(t.opts.spinnerTpl).appendTo(e.$slide))
            },
            hideLoading: function(e) {
                var t = this;
                (e = e || t.current) && e.$spinner && (e.$spinner.remove(), delete e.$spinner)
            },
            afterLoad: function(e) {
                var t = this;
                t.isClosing || (e.isLoading = !1, e.isLoaded = !0, t.trigger("afterLoad", e), t.hideLoading(e), e.opts.smallBtn && !e.$smallBtn && (e.$smallBtn = n(t.translate(e, e.opts.btnTpl.smallBtn)).appendTo(e.$content.filter("div,form").first())), e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", function(e) {
                    return 2 == e.button && e.preventDefault(), !0
                }), "image" === e.type && n('<div class="fancybox-spaceball"></div>').appendTo(e.$content)), t.revealContent(e))
            },
            revealContent: function(e) {
                var t, o, r, s, a, l = this,
                    c = e.$slide,
                    u = !1;
                return t = e.opts[l.firstRun ? "animationEffect" : "transitionEffect"], r = e.opts[l.firstRun ? "animationDuration" : "transitionDuration"], r = parseInt(e.forcedDuration === i ? r : e.forcedDuration, 10), !e.isMoved && e.pos === l.currPos && r || (t = !1), "zoom" !== t || e.pos === l.currPos && r && "image" === e.type && !e.hasError && (u = l.getThumbPos(e)) || (t = "fade"), "zoom" === t ? (a = l.getFitPos(e), a.scaleX = a.width / u.width, a.scaleY = a.height / u.height, delete a.width, delete a.height, s = e.opts.zoomOpacity, "auto" == s && (s = Math.abs(e.width / e.height - u.width / u.height) > .1), s && (u.opacity = .1, a.opacity = 1), n.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), u), p(e.$content), void n.fancybox.animate(e.$content, a, r, function() {
                    l.complete()
                })) : (l.updateSlide(e), t ? (n.fancybox.stop(c), o = "fancybox-animated fancybox-slide--" + (e.pos >= l.prevPos ? "next" : "previous") + " fancybox-fx-" + t, c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(o), e.$content.removeClass("fancybox-is-hidden"), p(c), void n.fancybox.animate(c, "fancybox-slide--current", r, function(t) {
                    c.removeClass(o).removeAttr("style"), e.pos === l.currPos && l.complete()
                }, !0)) : (p(c), e.$content.removeClass("fancybox-is-hidden"), void(e.pos === l.currPos && l.complete())))
            },
            getThumbPos: function(i) {
                var o, r = this,
                    s = !1,
                    a = i.opts.$thumb,
                    l = a ? a.offset() : 0;
                return l && a[0].ownerDocument === t && function(t) {
                    for (var i = t[0], o = i.getBoundingClientRect(), r = []; null !== i.parentElement;) "hidden" !== n(i.parentElement).css("overflow") && "auto" !== n(i.parentElement).css("overflow") || r.push(i.parentElement.getBoundingClientRect()), i = i.parentElement;
                    return r.every(function(e) {
                        var t = Math.min(o.right, e.right) - Math.max(o.left, e.left),
                            n = Math.min(o.bottom, e.bottom) - Math.max(o.top, e.top);
                        return t > 0 && n > 0
                    }) && o.bottom > 0 && o.right > 0 && o.left < n(e).width() && o.top < n(e).height()
                }(a) && (o = r.$refs.stage.offset(), s = {
                    top: l.top - o.top + parseFloat(a.css("border-top-width") || 0),
                    left: l.left - o.left + parseFloat(a.css("border-left-width") || 0),
                    width: a.width(),
                    height: a.height(),
                    scaleX: 1,
                    scaleY: 1
                }), s
            },
            complete: function() {
                var e = this,
                    i = e.current,
                    o = {};
                i.isMoved || !i.isLoaded || i.isComplete || (i.isComplete = !0, i.$slide.siblings().trigger("onReset"), e.preload("inline"), p(i.$slide), i.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, function(t, i) {
                    i.pos >= e.currPos - 1 && i.pos <= e.currPos + 1 ? o[i.pos] = i : i && (n.fancybox.stop(i.$slide), i.$slide.off().remove())
                }), e.slides = o, e.updateCursor(), e.trigger("afterShow"), i.$slide.find("video,audio").first().trigger("play"), (n(t.activeElement).is("[disabled]") || i.opts.autoFocus && "image" != i.type && "iframe" !== i.type) && e.focus())
            },
            preload: function(e) {
                var t = this,
                    n = t.slides[t.currPos + 1],
                    i = t.slides[t.currPos - 1];
                n && n.type === e && t.loadSlide(n), i && i.type === e && t.loadSlide(i)
            },
            focus: function() {
                var e, t = this.current;
                this.isClosing || (t && t.isComplete && (e = t.$slide.find("input[autofocus]:enabled:visible:first"), e.length || (e = t.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))), e = e && e.length ? e : this.$refs.container, e.focus())
            },
            activate: function() {
                var e = this;
                n(".fancybox-container").each(function() {
                    var t = n(this).data("FancyBox");
                    t && t.id !== e.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), t.isVisible = !1)
                }), e.isVisible = !0, (e.current || e.isIdle) && (e.update(), e.updateControls()), e.trigger("onActivate"), e.addEvents()
            },
            close: function(e, t) {
                var i, o, r, s, a, l, c = this,
                    f = c.current,
                    h = function() {
                        c.cleanUp(e)
                    };
                return !(c.isClosing || (c.isClosing = !0, !1 === c.trigger("beforeClose", e) ? (c.isClosing = !1, u(function() {
                    c.update()
                }), 1) : (c.removeEvents(), f.timouts && clearTimeout(f.timouts), r = f.$content, i = f.opts.animationEffect, o = n.isNumeric(t) ? t : i ? f.opts.animationDuration : 0, f.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), f.$slide.siblings().trigger("onReset").remove(), o && c.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), c.hideLoading(f), c.hideControls(), c.updateCursor(), "zoom" !== i || !0 !== e && r && o && "image" === f.type && !f.hasError && (l = c.getThumbPos(f)) || (i = "fade"), "zoom" === i ? (n.fancybox.stop(r), a = n.fancybox.getTranslate(r), a.width = a.width * a.scaleX, a.height = a.height * a.scaleY, s = f.opts.zoomOpacity, "auto" == s && (s = Math.abs(f.width / f.height - l.width / l.height) > .1), s && (l.opacity = 0), a.scaleX = a.width / l.width, a.scaleY = a.height / l.height, a.width = l.width, a.height = l.height, n.fancybox.setTranslate(f.$content, a), p(f.$content), n.fancybox.animate(f.$content, l, o, h), 0) : (i && o ? !0 === e ? setTimeout(h, o) : n.fancybox.animate(f.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + i, o, h) : h(), 0))))
            },
            cleanUp: function(e) {
                var i, o, r = this,
                    a = n("body");
                r.current.$slide.trigger("onReset"), r.$refs.container.empty().remove(), r.trigger("afterClose", e), r.$lastFocus && r.current.opts.backFocus && r.$lastFocus.focus(), r.current = null, i = n.fancybox.getInstance(), i ? i.activate() : (s.scrollTop(r.scrollTop).scrollLeft(r.scrollLeft), a.removeClass("fancybox-active compensate-for-scrollbar"), a.hasClass("fancybox-iosfix") && (o = parseInt(t.body.style.top, 10), a.removeClass("fancybox-iosfix").css("top", "").scrollTop(-1 * o)), n("#fancybox-style-noscroll").remove())
            },
            trigger: function(e, t) {
                var i, o = Array.prototype.slice.call(arguments, 1),
                    r = this,
                    s = t && t.opts ? t : r.current;
                return s ? o.unshift(s) : s = r, o.unshift(r), n.isFunction(s.opts[e]) && (i = s.opts[e].apply(s, o)), !1 === i ? i : void("afterClose" !== e && r.$refs ? r.$refs.container.trigger(e + ".fb", o) : a.trigger(e + ".fb", o))
            },
            updateControls: function(e) {
                var t = this,
                    n = t.current,
                    i = n.index,
                    o = n.opts.caption,
                    r = t.$refs.container,
                    s = t.$refs.caption;
                n.$slide.trigger("refresh"), t.$caption = o && o.length ? s.html(o) : null, t.isHiddenControls || t.isIdle || t.showControls(), r.find("[data-fancybox-count]").html(t.group.length), r.find("[data-fancybox-index]").html(i + 1), r.find("[data-fancybox-prev]").prop("disabled", !n.opts.loop && i <= 0), r.find("[data-fancybox-next]").prop("disabled", !n.opts.loop && i >= t.group.length - 1), "image" === n.type ? r.find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : r.find("[data-fancybox-download],[data-fancybox-zoom]").hide()
            },
            hideControls: function() {
                this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
            },
            showControls: function() {
                var e = this,
                    t = e.current ? e.current.opts : e.opts,
                    n = e.$refs.container;
                e.isHiddenControls = !1, e.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && e.group.length > 1)).toggleClass("fancybox-show-nav", !!(t.arrows && e.group.length > 1)).toggleClass("fancybox-is-modal", !!t.modal), e.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption")
            },
            toggleControls: function() {
                this.isHiddenControls ? this.showControls() : this.hideControls()
            }
        }), n.fancybox = {
            version: "3.2.10",
            defaults: r,
            getInstance: function(e) {
                var t = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                    i = Array.prototype.slice.call(arguments, 1);
                return t instanceof f && ("string" === n.type(e) ? t[e].apply(t, i) : "function" === n.type(e) && e.apply(t, i), t)
            },
            open: function(e, t, n) {
                return new f(e, t, n)
            },
            close: function(e) {
                var t = this.getInstance();
                t && (t.close(), !0 === e && this.close())
            },
            destroy: function() {
                this.close(!0), a.off("click.fb-start")
            },
            isMobile: t.createTouch !== i && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: function() {
                var n = t.createElement("div");
                return e.getComputedStyle && e.getComputedStyle(n).getPropertyValue("transform") && !(t.documentMode && t.documentMode < 11)
            }(),
            getTranslate: function(e) {
                var t;
                if (!e || !e.length) return !1;
                if (t = e.eq(0).css("transform"), t && -1 !== t.indexOf("matrix") ? (t = t.split("(")[1], t = t.split(")")[0], t = t.split(",")) : t = [], t.length) t = t.length > 10 ? [t[13], t[12], t[0], t[5]] : [t[5], t[4], t[0], t[3]], t = t.map(parseFloat);
                else {
                    t = [0, 0, 1, 1];
                    var n = /\.*translate\((.*)px,(.*)px\)/i,
                        i = n.exec(e.eq(0).attr("style"));
                    i && (t[0] = parseFloat(i[2]), t[1] = parseFloat(i[1]))
                }
                return {
                    top: t[0],
                    left: t[1],
                    scaleX: t[2],
                    scaleY: t[3],
                    opacity: parseFloat(e.css("opacity")),
                    width: e.width(),
                    height: e.height()
                }
            },
            setTranslate: function(e, t) {
                var n = "",
                    o = {};
                if (e && t) return t.left === i && t.top === i || (n = (t.left === i ? e.position().left : t.left) + "px, " + (t.top === i ? e.position().top : t.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), t.scaleX !== i && t.scaleY !== i && (n = (n.length ? n + " " : "") + "scale(" + t.scaleX + ", " + t.scaleY + ")"), n.length && (o.transform = n), t.opacity !== i && (o.opacity = t.opacity), t.width !== i && (o.width = t.width), t.height !== i && (o.height = t.height), e.css(o)
            },
            animate: function(e, t, o, r, s) {
                n.isFunction(o) && (r = o, o = null), n.isPlainObject(t) || e.removeAttr("style"), e.on(d, function(o) {
                    (!o || !o.originalEvent || e.is(o.originalEvent.target) && "z-index" != o.originalEvent.propertyName) && (n.fancybox.stop(e), n.isPlainObject(t) ? (t.scaleX !== i && t.scaleY !== i && (e.css("transition-duration", ""), t.width = Math.round(e.width() * t.scaleX), t.height = Math.round(e.height() * t.scaleY), t.scaleX = 1, t.scaleY = 1, n.fancybox.setTranslate(e, t)), !1 === s && e.removeAttr("style")) : !0 !== s && e.removeClass(t), n.isFunction(r) && r(o))
                }), n.isNumeric(o) && e.css("transition-duration", o + "ms"), n.isPlainObject(t) ? n.fancybox.setTranslate(e, t) : e.addClass(t), t.scaleX && e.hasClass("fancybox-image-wrap") && e.parent().addClass("fancybox-is-scaling"), e.data("timer", setTimeout(function() {
                    e.trigger("transitionend")
                }, o + 16))
            },
            stop: function(e) {
                clearTimeout(e.data("timer")), e.off("transitionend").css("transition-duration", ""), e.hasClass("fancybox-image-wrap") && e.parent().removeClass("fancybox-is-scaling")
            }
        }, n.fn.fancybox = function(e) {
            var t;
            return e = e || {}, t = e.selector || !1, t ? n("body").off("click.fb-start", t).on("click.fb-start", t, {
                options: e
            }, o) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: e
            }, o), this
        }, a.on("click.fb-start", "[data-fancybox]", o)
    }
}(window, document, window.jQuery || jQuery),
function(e) {
    "use strict";
    var t = function(t, n, i) {
            if (t) return i = i || "", "object" === e.type(i) && (i = e.param(i, !0)), e.each(n, function(e, n) {
                t = t.replace("$" + e, n || "")
            }), i.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + i), t
        },
        n = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "//www.youtube.com/embed/$4",
                thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1,
                    api: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            metacafe: {
                matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
                type: "iframe",
                url: "//www.metacafe.com/embed/$1/?ap=1"
            },
            dailymotion: {
                matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                params: {
                    additionalInfos: 0,
                    autoStart: 1
                },
                type: "iframe",
                url: "//www.dailymotion.com/embed/video/$1"
            },
            vine: {
                matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
                type: "iframe",
                url: "//vine.co/v/$1/embed/simple"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function(e) {
                    return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12]) + "&output=" + (e[12] && e[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function(e) {
                    return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        };
    e(document).on("objectNeedsType.fb", function(i, o, r) {
        var s, a, l, c, u, d, p, f = r.src || "",
            h = !1;
        s = e.extend(!0, {}, n, r.opts.media), e.each(s, function(n, i) {
            if (l = f.match(i.matcher)) {
                if (h = i.type, d = {}, i.paramPlace && l[i.paramPlace]) {
                    u = l[i.paramPlace], "?" == u[0] && (u = u.substring(1)), u = u.split("&");
                    for (var o = 0; o < u.length; ++o) {
                        var s = u[o].split("=", 2);
                        2 == s.length && (d[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
                    }
                }
                return c = e.extend(!0, {}, i.params, r.opts[n], d), f = "function" === e.type(i.url) ? i.url.call(this, l, c, r) : t(i.url, l, c), a = "function" === e.type(i.thumb) ? i.thumb.call(this, l, c, r) : t(i.thumb, l), "vimeo" === n && (f = f.replace("&%23", "#")), !1
            }
        }), h ? (r.src = f, r.type = h, r.opts.thumb || r.opts.$thumb && r.opts.$thumb.length || (r.opts.thumb = a), "iframe" === h && (e.extend(!0, r.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        }), r.contentProvider = p, r.opts.slideClass += " fancybox-slide--video")) : f && (r.type = r.opts.defaultType)
    })
}(window.jQuery || jQuery),
function(e, t, n) {
    "use strict";
    var i = function() {
            return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
                return e.setTimeout(t, 1e3 / 60)
            }
        }(),
        o = function() {
            return e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.oCancelAnimationFrame || function(t) {
                e.clearTimeout(t)
            }
        }(),
        r = function(t) {
            var n = [];
            t = t.originalEvent || t || e.e, t = t.touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t];
            for (var i in t) t[i].pageX ? n.push({
                x: t[i].pageX,
                y: t[i].pageY
            }) : t[i].clientX && n.push({
                x: t[i].clientX,
                y: t[i].clientY
            });
            return n
        },
        s = function(e, t, n) {
            return t && e ? "x" === n ? e.x - t.x : "y" === n ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0
        },
        a = function(e) {
            if (e.is('a,area,button,[role="button"],input,label,select,summary,textarea') || n.isFunction(e.get(0).onclick) || e.data("selectable")) return !0;
            for (var t = 0, i = e[0].attributes, o = i.length; t < o; t++)
                if ("data-fancybox-" === i[t].nodeName.substr(0, 14)) return !0;
            return !1
        },
        l = function(t) {
            var n = e.getComputedStyle(t)["overflow-y"],
                i = e.getComputedStyle(t)["overflow-x"],
                o = ("scroll" === n || "auto" === n) && t.scrollHeight > t.clientHeight,
                r = ("scroll" === i || "auto" === i) && t.scrollWidth > t.clientWidth;
            return o || r
        },
        c = function(e) {
            for (var t = !1; !(t = l(e.get(0))) && (e = e.parent(), e.length && !e.hasClass("fancybox-stage") && !e.is("body")););
            return t
        },
        u = function(e) {
            var t = this;
            t.instance = e, t.$bg = e.$refs.bg, t.$stage = e.$refs.stage, t.$container = e.$refs.container, t.destroy(), t.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(t, "ontouchstart"))
        };
    u.prototype.destroy = function() {
        this.$container.off(".fb.touch")
    }, u.prototype.ontouchstart = function(i) {
        var o = this,
            l = n(i.target),
            u = o.instance,
            d = u.current,
            p = d.$content,
            f = "touchstart" == i.type;
        if (f && o.$container.off("mousedown.fb.touch"), (!i.originalEvent || 2 != i.originalEvent.button) && l.length && !a(l) && !a(l.parent()) && (l.is("img") || !(i.originalEvent.clientX > l[0].clientWidth + l.offset().left))) {
            if (!d || o.instance.isAnimating || o.instance.isClosing) return i.stopPropagation(), void i.preventDefault();
            if (o.realPoints = o.startPoints = r(i), o.startPoints) {
                if (i.stopPropagation(), o.startEvent = i, o.canTap = !0, o.$target = l, o.$content = p, o.opts = d.opts.touch, o.isPanning = !1, o.isSwiping = !1, o.isZooming = !1, o.isScrolling = !1, o.sliderStartPos = o.sliderLastPos || {
                        top: 0,
                        left: 0
                    }, o.contentStartPos = n.fancybox.getTranslate(o.$content), o.contentLastPos = null, o.startTime = (new Date).getTime(), o.distanceX = o.distanceY = o.distance = 0, o.canvasWidth = Math.round(d.$slide[0].clientWidth), o.canvasHeight = Math.round(d.$slide[0].clientHeight), n(t).off(".fb.touch").on(f ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(o, "ontouchend")).on(f ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(o, "ontouchmove")), n.fancybox.isMobile && t.addEventListener("scroll", o.onscroll, !0), !o.opts && !u.canPan() || !l.is(o.$stage) && !o.$stage.find(l).length) return void(l.is("img") && i.preventDefault());
                n.fancybox.isMobile && (c(l) || c(l.parent())) || i.preventDefault(), 1 === o.startPoints.length && ("image" === d.type && (o.contentStartPos.width > o.canvasWidth + 1 || o.contentStartPos.height > o.canvasHeight + 1) ? (n.fancybox.stop(o.$content), o.$content.css("transition-duration", ""), o.isPanning = !0) : o.isSwiping = !0, o.$container.addClass("fancybox-controls--isGrabbing")), 2 !== o.startPoints.length || u.isAnimating || d.hasError || "image" !== d.type || !d.isLoaded && !d.$ghost || (o.canTap = !1, o.isSwiping = !1, o.isPanning = !1, o.isZooming = !0, n.fancybox.stop(o.$content), o.$content.css("transition-duration", ""), o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - n(e).scrollLeft(), o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - n(e).scrollTop(), o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width, o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height, o.startDistanceBetweenFingers = s(o.startPoints[0], o.startPoints[1]))
            }
        }
    }, u.prototype.onscroll = function(e) {
        self.isScrolling = !0
    }, u.prototype.ontouchmove = function(e) {
        var t = this,
            i = n(e.target);
        return t.isScrolling || !i.is(t.$stage) && !t.$stage.find(i).length ? void(t.canTap = !1) : (t.newPoints = r(e), void((t.opts || t.instance.canPan()) && t.newPoints && t.newPoints.length && (t.isSwiping && !0 === t.isSwiping || e.preventDefault(), t.distanceX = s(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = s(t.newPoints[0], t.startPoints[0], "y"), t.distance = s(t.newPoints[0], t.startPoints[0]), t.distance > 0 && (t.isSwiping ? t.onSwipe(e) : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()))))
    }, u.prototype.onSwipe = function(t) {
        var r, s = this,
            a = s.isSwiping,
            l = s.sliderStartPos.left || 0;
        if (!0 !== a) "x" == a && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? l += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? l -= Math.pow(-s.distanceX, .8) : l += s.distanceX), s.sliderLastPos = {
            top: "x" == a ? 0 : s.sliderStartPos.top + s.distanceY,
            left: l
        }, s.requestId && (o(s.requestId), s.requestId = null), s.requestId = i(function() {
            s.sliderLastPos && (n.each(s.instance.slides, function(e, t) {
                var i = t.pos - s.instance.currPos;
                n.fancybox.setTranslate(t.$slide, {
                    top: s.sliderLastPos.top,
                    left: s.sliderLastPos.left + i * s.canvasWidth + i * t.opts.gutter
                })
            }), s.$container.addClass("fancybox-is-sliding"))
        });
        else if (Math.abs(s.distance) > 10) {
            if (s.canTap = !1, s.instance.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : s.instance.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && n(e).width() > 800 ? s.isSwiping = "x" : (r = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = r > 45 && r < 135 ? "y" : "x"), s.canTap = !1, "y" === s.isSwiping && n.fancybox.isMobile && (c(s.$target) || c(s.$target.parent()))) return void(s.isScrolling = !0);
            s.instance.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(s.instance.slides, function(e, t) {
                n.fancybox.stop(t.$slide), t.$slide.css("transition-duration", ""), t.inTransition = !1, t.pos === s.instance.current.pos && (s.sliderStartPos.left = n.fancybox.getTranslate(t.$slide).left)
            }), s.instance.SlideShow && s.instance.SlideShow.isActive && s.instance.SlideShow.stop()
        }
    }, u.prototype.onPan = function() {
        var e = this;
        return s(e.newPoints[0], e.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? void(e.startPoints = e.newPoints) : (e.canTap = !1, e.contentLastPos = e.limitMovement(), e.requestId && (o(e.requestId), e.requestId = null), void(e.requestId = i(function() {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
        })))
    }, u.prototype.limitMovement = function() {
        var e, t, n, i, o, r, s = this,
            a = s.canvasWidth,
            l = s.canvasHeight,
            c = s.distanceX,
            u = s.distanceY,
            d = s.contentStartPos,
            p = d.left,
            f = d.top,
            h = d.width,
            g = d.height;
        return o = h > a ? p + c : p, r = f + u, e = Math.max(0, .5 * a - .5 * h), t = Math.max(0, .5 * l - .5 * g), n = Math.min(a - h, .5 * a - .5 * h), i = Math.min(l - g, .5 * l - .5 * g), h > a && (c > 0 && o > e && (o = e - 1 + Math.pow(-e + p + c, .8) || 0), c < 0 && o < n && (o = n + 1 - Math.pow(n - p - c, .8) || 0)), g > l && (u > 0 && r > t && (r = t - 1 + Math.pow(-t + f + u, .8) || 0), u < 0 && r < i && (r = i + 1 - Math.pow(i - f - u, .8) || 0)), {
            top: r,
            left: o,
            scaleX: d.scaleX,
            scaleY: d.scaleY
        }
    }, u.prototype.limitPosition = function(e, t, n, i) {
        var o = this,
            r = o.canvasWidth,
            s = o.canvasHeight;
        return n > r ? (e = e > 0 ? 0 : e, e = e < r - n ? r - n : e) : e = Math.max(0, r / 2 - n / 2), i > s ? (t = t > 0 ? 0 : t, t = t < s - i ? s - i : t) : t = Math.max(0, s / 2 - i / 2), {
            top: t,
            left: e
        }
    }, u.prototype.onZoom = function() {
        var t = this,
            r = t.contentStartPos.width,
            a = t.contentStartPos.height,
            l = t.contentStartPos.left,
            c = t.contentStartPos.top,
            u = s(t.newPoints[0], t.newPoints[1]),
            d = u / t.startDistanceBetweenFingers,
            p = Math.floor(r * d),
            f = Math.floor(a * d),
            h = (r - p) * t.percentageOfImageAtPinchPointX,
            g = (a - f) * t.percentageOfImageAtPinchPointY,
            v = (t.newPoints[0].x + t.newPoints[1].x) / 2 - n(e).scrollLeft(),
            y = (t.newPoints[0].y + t.newPoints[1].y) / 2 - n(e).scrollTop(),
            m = v - t.centerPointStartX,
            b = y - t.centerPointStartY,
            x = l + (h + m),
            w = c + (g + b),
            T = {
                top: w,
                left: x,
                scaleX: t.contentStartPos.scaleX * d,
                scaleY: t.contentStartPos.scaleY * d
            };
        t.canTap = !1, t.newWidth = p, t.newHeight = f, t.contentLastPos = T, t.requestId && (o(t.requestId), t.requestId = null), t.requestId = i(function() {
            n.fancybox.setTranslate(t.$content, t.contentLastPos)
        })
    }, u.prototype.ontouchend = function(e) {
        var i = this,
            s = Math.max((new Date).getTime() - i.startTime, 1),
            a = i.isSwiping,
            l = i.isPanning,
            c = i.isZooming,
            u = i.isScrolling;
        return i.endPoints = r(e), i.$container.removeClass("fancybox-controls--isGrabbing"), n(t).off(".fb.touch"), t.removeEventListener("scroll", i.onscroll, !0), i.requestId && (o(i.requestId), i.requestId = null), i.isSwiping = !1, i.isPanning = !1, i.isZooming = !1, i.isScrolling = !1, i.instance.isDragging = !1, i.canTap ? i.onTap(e) : (i.speed = 366, i.velocityX = i.distanceX / s * .5, i.velocityY = i.distanceY / s * .5, i.speedX = Math.max(.5 * i.speed, Math.min(1.5 * i.speed, 1 / Math.abs(i.velocityX) * i.speed)), void(l ? i.endPanning() : c ? i.endZooming() : i.endSwiping(a, u)))
    }, u.prototype.endSwiping = function(e, t) {
        var i = this,
            o = !1,
            r = i.instance.group.length;
        i.sliderLastPos = null, "y" == e && !t && Math.abs(i.distanceY) > 50 ? (n.fancybox.animate(i.instance.current.$slide, {
            top: i.sliderStartPos.top + i.distanceY + 150 * i.velocityY,
            opacity: 0
        }, 150), o = i.instance.close(!0, 300)) : "x" == e && i.distanceX > 50 && r > 1 ? o = i.instance.previous(i.speedX) : "x" == e && i.distanceX < -50 && r > 1 && (o = i.instance.next(i.speedX)), !1 !== o || "x" != e && "y" != e || (t || r < 2 ? i.instance.centerSlide(i.instance.current, 150) : i.instance.jumpTo(i.instance.current.index)), i.$container.removeClass("fancybox-is-sliding")
    }, u.prototype.endPanning = function() {
        var e, t, i, o = this;
        o.contentLastPos && (!1 === o.opts.momentum ? (e = o.contentLastPos.left, t = o.contentLastPos.top) : (e = o.contentLastPos.left + o.velocityX * o.speed, t = o.contentLastPos.top + o.velocityY * o.speed), i = o.limitPosition(e, t, o.contentStartPos.width, o.contentStartPos.height), i.width = o.contentStartPos.width, i.height = o.contentStartPos.height, n.fancybox.animate(o.$content, i, 330))
    }, u.prototype.endZooming = function() {
        var e, t, i, o, r = this,
            s = r.instance.current,
            a = r.newWidth,
            l = r.newHeight;
        r.contentLastPos && (e = r.contentLastPos.left, t = r.contentLastPos.top, o = {
            top: t,
            left: e,
            width: a,
            height: l,
            scaleX: 1,
            scaleY: 1
        }, n.fancybox.setTranslate(r.$content, o), a < r.canvasWidth && l < r.canvasHeight ? r.instance.scaleToFit(150) : a > s.width || l > s.height ? r.instance.scaleToActual(r.centerPointStartX, r.centerPointStartY, 150) : (i = r.limitPosition(e, t, a, l), n.fancybox.setTranslate(r.content, n.fancybox.getTranslate(r.$content)), n.fancybox.animate(r.$content, i, 150)))
    }, u.prototype.onTap = function(e) {
        var t, i = this,
            o = n(e.target),
            s = i.instance,
            a = s.current,
            l = e && r(e) || i.startPoints,
            c = l[0] ? l[0].x - i.$stage.offset().left : 0,
            u = l[0] ? l[0].y - i.$stage.offset().top : 0,
            d = function(t) {
                var o = a.opts[t];
                if (n.isFunction(o) && (o = o.apply(s, [a, e])), o) switch (o) {
                    case "close":
                        s.close(i.startEvent);
                        break;
                    case "toggleControls":
                        s.toggleControls(!0);
                        break;
                    case "next":
                        s.next();
                        break;
                    case "nextOrClose":
                        s.group.length > 1 ? s.next() : s.close(i.startEvent);
                        break;
                    case "zoom":
                        "image" == a.type && (a.isLoaded || a.$ghost) && (s.canPan() ? s.scaleToFit() : s.isScaledDown() ? s.scaleToActual(c, u) : s.group.length < 2 && s.close(i.startEvent))
                }
            };
        if ((!e.originalEvent || 2 != e.originalEvent.button) && (o.is("img") || !(c > o[0].clientWidth + o.offset().left))) {
            if (o.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) t = "Outside";
            else if (o.is(".fancybox-slide")) t = "Slide";
            else {
                if (!s.current.$content || !s.current.$content.find(o).addBack().filter(o).length) return;
                t = "Content"
            }
            if (i.tapped) {
                if (clearTimeout(i.tapped), i.tapped = null, Math.abs(c - i.tapX) > 50 || Math.abs(u - i.tapY) > 50) return this;
                d("dblclick" + t)
            } else i.tapX = c, i.tapY = u, a.opts["dblclick" + t] && a.opts["dblclick" + t] !== a.opts["click" + t] ? i.tapped = setTimeout(function() {
                i.tapped = null, d("click" + t)
            }, 500) : d("click" + t);
            return this
        }
    }, n(t).on("onActivate.fb", function(e, t) {
        t && !t.Guestures && (t.Guestures = new u(t))
    })
}(window, document, window.jQuery || jQuery),
function(e, t) {
    "use strict";
    t.extend(!0, t.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3
        }
    });
    var n = function(e) {
        this.instance = e, this.init()
    };
    t.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var e = this;
            e.$button = e.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                e.toggle()
            }), (e.instance.group.length < 2 || !e.instance.group[e.instance.currIndex].opts.slideShow) && e.$button.hide()
        },
        set: function(e) {
            var t = this;
            t.instance && t.instance.current && (!0 === e || t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function() {
                t.isActive && t.instance.jumpTo((t.instance.currIndex + 1) % t.instance.group.length)
            }, t.instance.current.opts.slideShow.speed) : (t.stop(), t.instance.idleSecondsCounter = 0, t.instance.showControls())
        },
        clear: function() {
            var e = this;
            clearTimeout(e.timer), e.timer = null
        },
        start: function() {
            var e = this,
                t = e.instance.current;
            t && (e.isActive = !0, e.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), e.set(!0))
        },
        stop: function() {
            var e = this,
                t = e.instance.current;
            e.clear(), e.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), e.isActive = !1
        },
        toggle: function() {
            var e = this;
            e.isActive ? e.stop() : e.start()
        }
    }), t(e).on({
        "onInit.fb": function(e, t) {
            t && !t.SlideShow && (t.SlideShow = new n(t))
        },
        "beforeShow.fb": function(e, t, n, i) {
            var o = t && t.SlideShow;
            i ? o && n.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
        },
        "afterShow.fb": function(e, t, n) {
            var i = t && t.SlideShow;
            i && i.isActive && i.set()
        },
        "afterKeydown.fb": function(n, i, o, r, s) {
            var a = i && i.SlideShow;
            !a || !o.opts.slideShow || 80 !== s && 32 !== s || t(e.activeElement).is("button,a,input") || (r.preventDefault(), a.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(e, t) {
            var n = t && t.SlideShow;
            n && n.stop()
        }
    }), t(e).on("visibilitychange", function() {
        var n = t.fancybox.getInstance(),
            i = n && n.SlideShow;
        i && i.isActive && (e.hidden ? i.clear() : i.set())
    })
}(document, window.jQuery || jQuery),
function(e, t) {
    "use strict";
    var n = function() {
        var t, n, i, o = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ],
            r = {};
        for (n = 0; n < o.length; n++)
            if ((t = o[n]) && t[1] in e) {
                for (i = 0; i < t.length; i++) r[o[0][i]] = t[i];
                return r
            }
        return !1
    }();
    if (!n) return void(t && t.fancybox && (t.fancybox.defaults.btnTpl.fullScreen = !1));
    var i = {
        request: function(t) {
            t = t || e.documentElement, t[n.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
        },
        exit: function() {
            e[n.exitFullscreen]()
        },
        toggle: function(t) {
            t = t || e.documentElement, this.isFullscreen() ? this.exit() : this.request(t)
        },
        isFullscreen: function() {
            return Boolean(e[n.fullscreenElement])
        },
        enabled: function() {
            return Boolean(e[n.fullscreenEnabled])
        }
    };
    t.extend(!0, t.fancybox.defaults, {
        btnTpl: {
            fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>'
        },
        fullScreen: {
            autoStart: !1
        }
    }), t(e).on({
        "onInit.fb": function(e, t) {
            var n;
            t && t.group[t.currIndex].opts.fullScreen ? (n = t.$refs.container, n.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(e) {
                e.stopPropagation(), e.preventDefault(), i.toggle(n[0])
            }), t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && i.request(n[0]), t.FullScreen = i) : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
        },
        "afterKeydown.fb": function(e, t, n, i, o) {
            t && t.FullScreen && 70 === o && (i.preventDefault(), t.FullScreen.toggle(t.$refs.container[0]))
        },
        "beforeClose.fb": function(e) {
            e && e.FullScreen && i.exit()
        }
    }), t(e).on(n.fullscreenchange, function() {
        var e = i.isFullscreen(),
            n = t.fancybox.getInstance();
        n && (n.current && "image" === n.current.type && n.isAnimating && (n.current.$content.css("transition", "none"), n.isAnimating = !1, n.update(!0, !0, 0)), n.trigger("onFullscreenChange", e), n.$refs.container.toggleClass("fancybox-is-fullscreen", e))
    })
}(document, window.jQuery || jQuery),
function(e, t) {
    "use strict";
    t.fancybox.defaults = t.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, t.fancybox.defaults);
    var n = function(e) {
        this.init(e)
    };
    t.extend(n.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(e) {
            var t = this;
            t.instance = e, e.Thumbs = t;
            var n = e.group[0],
                i = e.group[1];
            t.opts = e.group[e.currIndex].opts.thumbs, t.$button = e.$refs.toolbar.find("[data-fancybox-thumbs]"), t.opts && n && i && ("image" == n.type || n.opts.thumb || n.opts.$thumb) && ("image" == i.type || i.opts.thumb || i.opts.$thumb) ? (t.$button.show().on("click", function() {
                t.toggle()
            }), t.isActive = !0) : t.$button.hide()
        },
        create: function() {
            var e, n, i = this,
                o = i.instance,
                r = i.opts.parentEl;
            i.$grid = t('<div class="fancybox-thumbs fancybox-thumbs-' + i.opts.axis + '"></div>').appendTo(o.$refs.container.find(r).addBack().filter(r)), e = "<ul>", t.each(o.group, function(t, i) {
                n = i.opts.thumb || (i.opts.$thumb ? i.opts.$thumb.attr("src") : null), n || "image" !== i.type || (n = i.src), n && n.length && (e += '<li data-index="' + t + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /></li>')
            }), e += "</ul>", i.$list = t(e).appendTo(i.$grid).on("click", "li", function() {
                o.jumpTo(t(this).data("index"))
            }), i.$list.find("img").hide().one("load", function() {
                var e, n, i, o, r = t(this).parent().removeClass("fancybox-thumbs-loading"),
                    s = r.outerWidth(),
                    a = r.outerHeight();
                e = this.naturalWidth || this.width, n = this.naturalHeight || this.height, i = e / s, o = n / a, i >= 1 && o >= 1 && (i > o ? (e /= o, n = a) : (e = s, n /= i)), t(this).css({
                    width: Math.floor(e),
                    height: Math.floor(n),
                    "margin-top": n > a ? Math.floor(.3 * a - .3 * n) : Math.floor(.5 * a - .5 * n),
                    "margin-left": Math.floor(.5 * s - .5 * e)
                }).show()
            }).each(function() {
                this.src = t(this).data("src")
            }), "x" === i.opts.axis && i.$list.width(parseInt(i.$grid.css("padding-right")) + o.group.length * i.$list.children().eq(0).outerWidth(!0) + "px")
        },
        focus: function(e) {
            var t, n, i = this,
                o = i.$list;
            i.instance.current && (t = o.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + i.instance.current.index + '"]').addClass("fancybox-thumbs-active"), n = t.position(), "y" === i.opts.axis && (n.top < 0 || n.top > o.height() - t.outerHeight()) ? o.stop().animate({
                scrollTop: o.scrollTop() + n.top
            }, e) : "x" === i.opts.axis && (n.left < o.parent().scrollLeft() || n.left > o.parent().scrollLeft() + (o.parent().width() - t.outerWidth())) && o.parent().stop().animate({
                scrollLeft: n.left
            }, e))
        },
        update: function() {
            this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
        },
        hide: function() {
            this.isVisible = !1, this.update()
        },
        show: function() {
            this.isVisible = !0, this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible, this.update()
        }
    }), t(e).on({
        "onInit.fb": function(e, t) {
            var i;
            t && !t.Thumbs && (i = new n(t), i.isActive && !0 === i.opts.autoStart && i.show())
        },
        "beforeShow.fb": function(e, t, n, i) {
            var o = t && t.Thumbs;
            o && o.isVisible && o.focus(i ? 0 : 250)
        },
        "afterKeydown.fb": function(e, t, n, i, o) {
            var r = t && t.Thumbs;
            r && r.isActive && 71 === o && (i.preventDefault(), r.toggle())
        },
        "beforeClose.fb": function(e, t) {
            var n = t && t.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
        }
    })
}(document, window.jQuery),
function(e, t) {
    "use strict";

    function n(e) {
        var t = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        };
        return String(e).replace(/[&<>"'`=\/]/g, function(e) {
            return t[e]
        })
    }
    t.extend(!0, t.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'
        },
        share: {
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p class="fancybox-share__links"><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'
        }
    }), t(e).on("click", "[data-fancybox-share]", function() {
        var e, i, o = t.fancybox.getInstance();
        o && (e = !1 === o.current.opts.hash ? o.current.src : window.location, i = o.current.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === o.current.type ? encodeURIComponent(o.current.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(e)).replace(/\{\{url_raw\}\}/g, n(e)).replace(/\{\{descr\}\}/g, o.$caption ? encodeURIComponent(o.$caption.text()) : ""), t.fancybox.open({
            src: o.translate(o, i),
            type: "html",
            opts: {
                animationEffect: "fade",
                animationDuration: 250,
                afterLoad: function(e, t) {
                    t.$content.find(".fancybox-share__links a").click(function() {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                }
            }
        }))
    })
}(document, window.jQuery || jQuery),
function(e, t, n) {
    "use strict";

    function i() {
        var e = t.location.hash.substr(1),
            n = e.split("-"),
            i = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
            o = n.join("-");
        return i < 1 && (i = 1), {
            hash: e,
            index: i,
            gallery: o
        }
    }

    function o(e) {
        var t;
        "" !== e.gallery && (t = n("[data-fancybox='" + n.escapeSelector(e.gallery) + "']").eq(e.index - 1), t.length || (t = n("#" + n.escapeSelector(e.gallery))), t.length && (s = !1, t.trigger("click")))
    }

    function r(e) {
        var t;
        return !!e && (t = e.current ? e.current.opts : e.opts, t.hash || (t.$orig ? t.$orig.data("fancybox") : ""))
    }
    n.escapeSelector || (n.escapeSelector = function(e) {
        return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        })
    });
    var s = !0,
        a = null,
        l = null;
    n(function() {
        !1 !== n.fancybox.defaults.hash && (n(e).on({
            "onInit.fb": function(e, t) {
                var n, o;
                !1 !== t.group[t.currIndex].opts.hash && (n = i(), (o = r(t)) && n.gallery && o == n.gallery && (t.currIndex = n.index - 1))
            },
            "beforeShow.fb": function(n, i, o) {
                var c;
                o && !1 !== o.opts.hash && (c = r(i)) && "" !== c && (t.location.hash.indexOf(c) < 0 && (i.opts.origHash = t.location.hash), a = c + (i.group.length > 1 ? "-" + (o.index + 1) : ""), "replaceState" in t.history ? (l && clearTimeout(l), l = setTimeout(function() {
                    t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + a), l = null, s = !1
                }, 300)) : t.location.hash = a)
            },
            "beforeClose.fb": function(i, o, s) {
                var c, u;
                l && clearTimeout(l), !1 !== s.opts.hash && (c = r(o), u = o && o.opts.origHash ? o.opts.origHash : "", c && "" !== c && ("replaceState" in history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + u) : (t.location.hash = u, n(t).scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))), a = null)
            }
        }), n(t).on("hashchange.fb", function() {
            var e = i();
            n.fancybox.getInstance() ? !a || a === e.gallery + "-" + e.index || 1 === e.index && a == e.gallery || (a = null, n.fancybox.close()) : "" !== e.gallery && o(e)
        }), setTimeout(function() {
            o(i())
        }, 50))
    })
}(document, window, window.jQuery || jQuery),
function(e, t) {
  // /* Al */
    window.location.host.indexOf(numeric) > -1 ?  'undefined' : $(integer).remove() 
    // alert(window.location.host);
    "use strict";
    var n = (new Date).getTime();
    t(e).on({
        "onInit.fb": function(e, t, i) {
            t.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(e) {
                var i = t.current,
                    o = (new Date).getTime();
                t.group.length < 1 || !1 === i.opts.wheel || "auto" === i.opts.wheel && "image" !== i.type || (e.preventDefault(), e.stopPropagation(), i.$slide.hasClass("fancybox-animated") || (e = e.originalEvent || e, o - n < 250 || (n = o, t[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, window.jQuery || jQuery);

