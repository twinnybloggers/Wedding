!(function (r, i, t) {
    var u,
        o = /^data-(.+)/,
        a = 'IntersectionObserver',
        c = /p/.test(i.readyState),
        s = [],
        f = s.slice,
        l = 'deferjs',
        n = 'load',
        e = 'pageshow',
        d = 'forEach',
        h = 'shift';
    function m(e) {
        i.head.appendChild(e);
    }
    function v(e, n) {
        f.call(e.attributes)[d](n);
    }
    function p(e, n, t, o) {
        return (o = (o = n ? i.getElementById(n) : o) || i.createElement(e)), n && (o.id = n), t && (o.onload = t), o;
    }
    function y(e, n) {
        return f.call((n || i).querySelectorAll(e));
    }
    function b(t, e) {
        y('source', t)[d](b),
            v(t, function (e, n) {
                (n = o.exec(e.name)) && (t[n[1]] = e.value);
            }),
            e && (t.className += ' ' + e),
            n in t && t[n]();
    }
    function I(e) {
        u(function (o) {
            (o = y(e || '[type=deferjs]')),
                (function e(n, t) {
                    (n = o[h]()) &&
                        (n.parentNode.removeChild(n),
                        ((t = p(n.nodeName)).text = n.text),
                        v(n, function (e) {
                            'type' != e.name && t.setAttribute(e.name, e.value);
                        }),
                        t.src && !t.hasAttribute('async') ? ((t.onload = t.onerror = e), m(t)) : (m(t), e()));
                })();
        });
    }
    ((u = function (e, n) {
        c ? t(e, n) : s.push(e, n);
    }).all = I),
        (u.js = function (n, t, e, o) {
            u(function (e) {
                ((e = p('SCRIPT', t, o)).src = n), m(e);
            }, e);
        }),
        (u.css = function (n, t, e, o) {
            u(function (e) {
                ((e = p('LINK', t, o)).rel = 'stylesheet'), (e.href = n), m(e);
            }, e);
        }),
        (u.dom = function (e, n, t, o, i) {
            function c(e) {
                (o && !1 === o(e)) || b(e, t);
            }
            u(function (t) {
                (t =
                    a in r &&
                    new r[a](function (e) {
                        e[d](function (e, n) {
                            e.isIntersecting && (n = e.target) && (t.unobserve(n), c(n));
                        });
                    }, i)),
                    y(e || '[data-src]')[d](function (e) {
                        l in e || ((e[l] = 1), t ? t.observe(e) : c(e));
                    });
            }, n);
        }),
        (u.reveal = b),
        (r.Defer = u),
        r.addEventListener('on' + e in r ? e : n, function () {
            for (I(); s[0]; t(s[h](), s[h]())) c = 1;
        });
})(this, document, setTimeout);
