! function (e) {
    function t(t) {
        for (var o, l, i = t[0], s = t[1], c = t[2], u = 0, v = []; u < i.length; u++) l = i[u], n[l] && v.push(n[l][0]), n[l] = 0;
        for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
        for (d && d(t); v.length;) v.shift()();
        return r.push.apply(r, c || []), a()
    }

    function a() {
        for (var e, t = 0; t < r.length; t++) {
            for (var a = r[t], o = !0, i = 1; i < a.length; i++) {
                var s = a[i];
                0 !== n[s] && (o = !1)
            }
            o && (r.splice(t--, 1), e = l(l.s = a[0]))
        }
        return e
    }
    var o = {},
        n = {
            6: 0
        },
        r = [];

    function l(t) {
        if (o[t]) return o[t].exports;
        var a = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, l), a.l = !0, a.exports
    }
    l.m = e, l.c = o, l.d = function (e, t, a) {
        l.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, l.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, l.t = function (e, t) {
        if (1 & t && (e = l(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (l.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) l.d(a, o, function (t) {
                return e[t]
            }.bind(null, o));
        return a
    }, l.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return l.d(t, "a", t), t
    }, l.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, l.p = "/garnish/static/";
    var i = window.wpJsonpGarnish = window.wpJsonpGarnish || [],
        s = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var c = 0; c < i.length; c++) t(i[c]);
    var d = s;
    r.push([716, 0]), a()
}({
    100: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(7)),
            l = o(a(2)),
            i = n(a(9)),
            s = n(a(44)),
            c = a(12),
            d = o(a(39)),
            u = a(66),
            v = a(35),
            f = n(a(101)),
            h = n(a(104)),
            p = n(a(45)),
            m = n(a(28)),
            g = a(4),
            x = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.5 3a7.5 7.5 0 107.5 7.5A7.5 7.5 0 0010.5 3zm0-1a8.5 8.5 0 016.35 14.15l5 5a.5.5 0 010 .7.5.5 0 01-.71 0l-5-5A8.5 8.5 0 1110.5 2z" fill="currentColor" fill-rule="evenodd"/></svg>',
            y = (0, g.jsx)((function () {
                var e = (0, l.useContext)(d.default),
                    t = e.hideSearch,
                    a = void 0 === t ? "" : t,
                    o = e.searchKeyword,
                    n = void 0 === o ? "" : o,
                    y = e.useMemberSearch,
                    w = void 0 === y || y,
                    b = (0, l.useContext)(c.I18nContext),
                    j = (0, l.useState)(!1),
                    _ = (0, r.default)(j, 2),
                    C = _[0],
                    S = _[1];
                return (0, g.jsx)(l.default.Fragment, null, a ? null : [w ? (0, g.jsx)("div", {
                    className: "d-flex d-md-none pr-std",
                    key: "0"
                }, (0, g.jsx)("button", {
                    "aria-label": "Search Form",
                    className: "p-0 ".concat(m.default.iconBtn),
                    "data-test": "icon-search-menu-open-trigger",
                    onClick: function () {
                        (0, v.trackClickEvent)("no-label", "menu-search-icon"), S(!0), (0, u.lockPage)()
                    },
                    title: "Open Search Form",
                    type: "button"
                }, (0, g.jsx)(i.default, {
                    className: "d-flex ".concat(m.default.colorDefault),
                    svg: x
                }))) : null, (0, g.jsx)("div", {
                    className: "".concat(w ? "d-none d-md-flex d-lg-none px-xxl py-std col" : "d-md-none col", " ").concat(m.default.searchForm),
                    key: "1"
                }, (0, g.jsx)("div", {
                    className: "d-flex col ".concat(m.default.searchKeywordContainer),
                    onClick: function () {
                        S(!0), (0, u.lockPage)()
                    },
                    "data-test": "input-search-menu-open-trigger"
                }, w ? [(0, g.jsx)("span", {
                    className: "d-flex align-items-center ".concat(m.default.searchInputLabel),
                    key: "0"
                }, (0, g.jsx)(i.default, {
                    className: "d-flex ".concat(m.default.searchIcon),
                    svg: x
                })), (0, g.jsx)(s.default, {
                    ariaLabel: "Search Keyword",
                    autocomplete: "off",
                    className: "col headerSearchInput",
                    defaultValue: n,
                    placeholder: b.msg(p.default[0].form.placeholderKey),
                    type: "text",
                    key: "1"
                })] : (0, g.jsx)("div", {
                    className: "col headerSearchInput ".concat(m.default.condensedPlaceholder)
                }, (0, g.jsx)("span", {
                    className: "mx-std py-xsm pr-std pl-xxl"
                }, (0, g.jsx)(c.I18nMessageComponent, {
                    id: p.default[0].form.placeholderKey
                }))))), (0, g.jsx)("div", {
                    className: "d-none ".concat(w ? "d-lg-flex col px-xxl py-std" : "d-md-flex col", " "),
                    key: "2"
                }, (0, g.jsx)(f.default, {
                    useMemberSearch: w
                })), (0, g.jsx)(h.default, {
                    show: C,
                    onDrawerClosed: function () {
                        S(!1), (0, u.unlockPage)()
                    },
                    key: "3"
                })])
            }), null),
            w = function (e) {
                return (0, g.jsx)(d.SearchContextProvider, e, y, e.children)
            };
        w.propTypes = d.SearchContextProvider.propTypes, w.defaultProps = d.SearchContextProvider.defaultProps;
        var b = w;
        t.default = b
    },
    101: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(31)),
            l = n(a(7)),
            i = o(a(2)),
            s = n(a(9)),
            c = n(a(22)),
            d = n(a(44)),
            u = n(a(144)),
            v = a(12),
            f = n(a(39)),
            h = a(35),
            p = a(40),
            m = n(a(45)),
            g = n(a(28)),
            x = a(4),
            y = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.5 3a7.5 7.5 0 107.5 7.5A7.5 7.5 0 0010.5 3zm0-1a8.5 8.5 0 016.35 14.15l5 5a.5.5 0 010 .7.5.5 0 01-.71 0l-5-5A8.5 8.5 0 1110.5 2z" fill="currentColor" fill-rule="evenodd"/></svg>',
            w = (0, x.jsx)("input", {
                type: "hidden",
                name: "suggestCount",
                value: "0"
            }),
            b = (0, x.jsx)("input", {
                type: "hidden",
                name: "suggestChosen",
                value: "false"
            }),
            j = (0, x.jsx)("input", {
                type: "hidden",
                name: "clickSource",
                value: "searchBtn"
            }),
            _ = (0, x.jsx)("input", {
                type: "hidden",
                name: "jobType",
                value: ""
            }),
            C = (0, x.jsx)(s.default, {
                svg: y
            }),
            S = function () {
                var e = (0, i.useContext)(v.I18nContext),
                    t = ((GD || {}).util || {}).debounce,
                    a = void 0 === t ? function () {} : t,
                    o = (0, i.useContext)(f.default),
                    n = o.type,
                    S = void 0 === n ? "" : n,
                    N = o.searchKeyword,
                    k = void 0 === N ? "" : N,
                    I = o.searchLocation,
                    M = void 0 === I ? {} : I,
                    A = o.useMemberSearch,
                    E = (0, p.filterFormContextByType)(S),
                    P = E.formContext,
                    L = E.index,
                    T = (0, i.useState)(P),
                    z = (0, l.default)(T, 2),
                    O = z[0],
                    B = z[1],
                    H = (0, i.useState)(""),
                    D = (0, l.default)(H, 2),
                    K = D[0],
                    R = D[1],
                    U = (0, i.useState)(""),
                    F = (0, l.default)(U, 2),
                    G = F[0],
                    V = F[1],
                    J = (0, i.useState)({
                        id: 0,
                        type: ""
                    }),
                    q = (0, l.default)(J, 2),
                    W = q[0],
                    Y = q[1],
                    X = (0, i.useState)({
                        value: L,
                        label: e.msg(P.labelKey)
                    }),
                    Q = (0, l.default)(X, 2),
                    Z = Q[0],
                    $ = Q[1],
                    ee = m.default.map((function (t, a) {
                        return {
                            label: e.msg(t.labelKey),
                            value: a
                        }
                    })),
                    te = a((function (t, a) {
                        var o = m.default[a];
                        (0, h.trackClickEvent)(o.gaLabel, "searchbar-search"), B(o), $({
                            label: e.msg(o.labelKey),
                            value: parseInt(a, 10)
                        })
                    }), 100, !0),
                    ae = a((function () {
                        return Y({
                            id: 0,
                            type: ""
                        })
                    }), 150, !0);
                (0, i.useEffect)((function () {
                    V(M.name), Y(M)
                }), [M]), (0, i.useEffect)((function () {
                    var t = (0, p.getRecentSearches)().map((function (t, a) {
                            return {
                                data: t,
                                sectionHead: a ? "" : e.msg("site.header.search.recentSearches"),
                                suggestion: t.locationName ? e.msg("site.header.search.jobInLoc", {
                                    jobTitle: t.keyword,
                                    location: t.locationName
                                }) : t.keyword,
                                category: "RECENT_SEARCHES"
                            }
                        })),
                        a = document.getElementById("scBar");
                    (0, p.createAutocomplete)("scBar", "sc.keyword", (function (o, n) {
                        o || "Jobs" !== a.context.value ? o && o.length < 3 ? n([]) : function (t, a) {
                            (0, p.getSearchSuggestion)(t, "scBar").then((function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                return a((0, p.filterJobTitleSource)(t, e))
                            }))
                        }(o, n) : n(t)
                    }), (function (o, n, l) {
                        var i = l.parentNode.firstChild,
                            s = i.getAttribute("data-header"),
                            c = i.getAttribute("data-val");
                        if (s === e.msg("site.header.search.recentSearches")) {
                            GD.event.stop(o);
                            var d = (0, r.default)(l.parentNode.children).indexOf(l),
                                u = t[d].data,
                                v = (void 0 === u ? {} : u).searchUrl,
                                f = GD.util.appendToUrl(v, ["srs=".concat("RECENT_SEARCHES")]);
                            GD.util.loadUrl(f)
                        } else(0, p.clickSearchSuggestion)(a.typedKeyword.value, "scBar", c)
                    }), "full", 0), (0, p.createAutocomplete)("scBar", "sc.location", (function (e, t) {
                        return (0, p.getPopularLocation)(e).then((function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                            return t((0, p.filterLocationSource)(e))
                        }))
                    }), (function (e, t, a) {
                        GD.event.stop(e);
                        var o = a.getAttribute("data-value").split("_");
                        V(t), Y({
                            type: o[0],
                            id: o[1]
                        })
                    }))
                }), [e]);
                return (0, x.jsx)("form", {
                    id: "scBar",
                    onSubmit: function (e) {
                        var t = document.getElementById("sc.location").value,
                            a = document.getElementById("sc.keyword").value;
                        if (!t || W.type && W.id)(0, h.trackClickEventDeferred)("".concat(a || "empty", "|").concat(O.searchType).concat(W.id ? "|location" : ""), "search-button");
                        else {
                            e.preventDefault();
                            var o = document.getElementById("scBar");
                            (0, p.getLocationsByFullText)(t).then((function (e) {
                                var t = e.locations;
                                if (t && t.length) {
                                    (0, h.trackClickEventDeferred)("".concat(a || "empty", "|").concat(O.searchType, "|location"), "search-button");
                                    var n = t[0];
                                    o.querySelector('input[name="locT"]').value = n.type, o.querySelector('input[name="locId"]').value = n.id
                                } else(0, h.trackClickEventDeferred)("".concat(a || "empty", "|").concat(O.searchType), "search-button")
                            })).finally((function () {
                                o.submit()
                            }))
                        }
                    },
                    action: O.form.action,
                    method: "GET",
                    target: "_top",
                    noValidate: !0,
                    className: "col ".concat(g.default.searchForm),
                    "data-test": "search-bar-form"
                }, (0, x.jsx)("div", {
                    className: "d-flex flex-row align-items-center"
                }, w, b, j, (0, x.jsx)("input", {
                    type: "hidden",
                    name: "typedKeyword",
                    value: K || ""
                }), (0, x.jsx)("input", {
                    type: "hidden",
                    name: "locT",
                    value: W.type || ""
                }), (0, x.jsx)("input", {
                    type: "hidden",
                    name: "locId",
                    value: W.id || ""
                }), _, (0, x.jsx)("input", {
                    type: "hidden",
                    name: "context",
                    value: O.searchType || ""
                }), (0, x.jsx)("div", {
                    className: "d-flex col-6 p-0 ".concat(g.default.searchKeywordContainer)
                }, (0, x.jsx)("span", {
                    className: "d-flex align-items-center ".concat(g.default.searchInputLabel)
                }, (0, x.jsx)(s.default, {
                    className: "d-flex ".concat(g.default.searchIcon),
                    svg: y
                })), (0, x.jsx)(d.default, {
                    ariaLabel: "Search Keyword",
                    autocomplete: "off",
                    className: "col headerSearchInput",
                    dataTestId: "search-bar-keyword-input",
                    defaultValue: k,
                    id: "sc.keyword",
                    name: "sc.keyword",
                    onChange: function (e) {
                        R(e.target.value)
                    },
                    placeholder: e.msg(O.form.placeholderKey),
                    type: "text"
                })), (0, x.jsx)(u.default, {
                    ariaLabel: "Search Context Picker",
                    className: "ml-xsm ".concat(g.default.searchDropdown),
                    dataTestId: "search-bar-context-picker",
                    dropdownWidth: 204,
                    onChange: te,
                    options: ee,
                    style: {
                        width: "".concat(132, "px")
                    },
                    value: Z.value
                }), (0, x.jsx)(d.default, {
                    ariaLabel: "Search Location",
                    autocomplete: "off",
                    className: "ml-xsm col-4 p-0 headerSearchInput ".concat(g.default.searchBarLocationInput),
                    dataTestId: "search-bar-location-input",
                    defaultValue: M.name || "",
                    id: "sc.location",
                    onChange: function (e) {
                        V(e.target.value), ae()
                    },
                    placeholder: e.msg("site.header.search.placeholder.location"),
                    type: "text",
                    value: G || ""
                }), A ? (0, x.jsx)(c.default, {
                    className: "ml-std col-auto ".concat(g.default.newSearchButton),
                    type: "submit",
                    variant: "special",
                    "data-test": "search-bar-submit"
                }, (0, x.jsx)("span", null, e.msg("site.header.search"))) : (0, x.jsx)(c.default, {
                    className: "ml-std col-auto ".concat(g.default.searchButton),
                    type: "submit",
                    variant: "special",
                    "data-test": "search-bar-submit"
                }, (0, x.jsx)("span", {
                    className: g.default.searchButtonIcon
                }, " ", C), (0, x.jsx)("span", {
                    className: g.default.searchButtonText
                }, e.msg("site.header.search")))))
            };
        t.default = S
    },
    103: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.popularJobTitles = void 0;
        t.popularJobTitles = {
            en: ["Software Engineer", "Project Manager", "Business Analyst", "Data Scientist", "Administrative Assistant", "Clerical", "Receptionist", "Human Resources", "Customer Service Representative", "Graphic Designer", "Executive Assistant", "Medical Assistant", "Customer Service", "Office Assistant", "Attorney", "Sales", "Accountant", "Part Time", "Pharmacist", "Data Entry", "Accounting", "Data Entry Clerk", "Nurse Practitioner", "Phlebotomist", "Marketing", "Manager", "Call Center Representative", "Delivery Driver", "Registered Nurse", "Sales Manager", "Director"],
            de: ["Architekt", "Director", "Krankenschwester", "Marketing Manager", "Project Manager", "Lehrer", "Professor", "Praktikum", "Hausmeister", "Werkstudent", "Zahntechniker", "Ingenieur"],
            es: ["Asistente Administrativo", "Inspector de Calidad", "Asesor Comercial", "Facturista", "Agente de Ventas", "Soporte Técnico", "Gerente de Projetos", "Operador de Producción", "Ingeniero de Procesos", "Ventas", "Director", "Recursos Humanos", "Administración de empresas", "Profesor"],
            fr: ["Psychologue", "Architecte", "Enseignant", "Infirmier", "Agent Immobilier", "Vendeur", "Manager", "Directeur", "Assistante administrative", "Chef de Produit", "Chef de projet", "Ressources Humaines"],
            nl: ["Data Scientist", "Bartender", "Marketing", "Graphic Designer", "Software Developer", "Software Test Engineer", "Sales Manager", "Grafisch ontwerper", "Sales engineer", "Verkoopmedewerker", "Software-ontwikkelaar", "Visueel ontwerper", "Marketingmanager", "Engineer", "Financieel analist"],
            pt: ["Assistente Administrativo", "Recepcionista", "Software Engineer", "Gerente de Produção", "Vendedor", "Analista Financeiro", "Analista", "Auxiliar Administrativo", "Gerente", "Caixa", "Advogado", "Supervisor", "Analista de Sistemas Pleno", "Analista de TI", "Professor"],
            it: ["Software Developer", "Impiegato Contabile", "Data Scientist", "Project Manager", "Barista", "Docente", "Comunicazione", "Pulizie", "Contabile", "Impiegata", "Agenti", "Ingegnere", "Manager"]
        }
    },
    104: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(7)),
            l = o(a(2)),
            i = n(a(3)),
            s = n(a(9)),
            c = a(12),
            d = n(a(28)),
            u = n(a(105)),
            v = a(40),
            f = a(4),
            h = (0, f.jsx)(s.default, {
                className: "d-flex",
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.34 12l5.38-5.38a.95.95 0 00-1.34-1.34L12 10.66 6.62 5.28a.95.95 0 00-1.34 1.34L10.66 12l-5.38 5.38a.95.95 0 001.34 1.34L12 13.34l5.38 5.38a.95.95 0 001.34-1.34z" fill="currentColor" fill-rule="evenodd"/></svg>'
            }),
            p = (0, f.jsx)("div", {
                className: "pt-std mx-std"
            }, (0, f.jsx)("span", null, (0, f.jsx)("strong", null, (0, f.jsx)(c.I18nMessageComponent, {
                id: "site.header.search.recentSearches"
            })))),
            m = (0, f.jsx)("div", {
                className: "pt-std mx-std"
            }, (0, f.jsx)("span", null, (0, f.jsx)("strong", null, (0, f.jsx)(c.I18nMessageComponent, {
                id: "msgSavedJobsTitle"
            })))),
            g = (0, f.jsx)("a", {
                href: "/member/account/savedJobs_input.htm"
            }, (0, f.jsx)(c.I18nMessageComponent, {
                id: "msgSavedJobsMoreText"
            })),
            x = function (e) {
                var t = e.show,
                    a = (e.onDrawerOpened, e.onDrawerClosed),
                    o = (0, l.useState)("jobs"),
                    n = (0, r.default)(o, 2),
                    i = n[0],
                    s = n[1],
                    c = (0, l.useState)([]),
                    x = (0, r.default)(c, 2),
                    y = x[0],
                    w = x[1],
                    b = (0, l.useState)([]),
                    j = (0, r.default)(b, 2),
                    _ = j[0],
                    C = j[1];
                return (0, l.useEffect)((function () {
                    if (t && !_.length) {
                        var e = (0, v.getRecentSearches)();
                        C(e)
                    }
                    t && !y.length && (0, v.listAllSavedJobsJson)().then((function (e) {
                        return w(e.paginatedJobListings || [])
                    }))
                }), [t]), t ? (0, f.jsx)("div", {
                    className: "d-flex flex-column ".concat(d.default.screenTakeOver)
                }, (0, f.jsx)("div", null, (0, f.jsx)("button", {
                    type: "button",
                    className: "p-0 ".concat(d.default.searchMenuCloseBtn, " ").concat(d.default.iconBtn),
                    onClick: a
                }, h)), (0, f.jsx)(u.default, {
                    onSelectFormContext: s
                }), (0, f.jsx)("div", {
                    className: d.default.searchMenuContainer
                }, "site.header.jobs" === i && _.length ? (0, f.jsx)("div", {
                    className: d.default.searchMenuContent
                }, p, (0, f.jsx)("ul", {
                    className: "p-0 m-0 ".concat(d.default.list)
                }, _.map((function (e, t) {
                    return (0, f.jsx)("li", {
                        key: t,
                        className: "py-std mx-std px-0 my-0 ".concat(d.default.searchMenuListingItem)
                    }, (0, f.jsx)("a", {
                        href: e.searchUrl
                    }, "".concat(e.keyword).concat(e.locationName ? " in ".concat(e.locationName) : "")))
                })))) : null, y.length ? (0, f.jsx)("div", {
                    className: "".concat(d.default.searchMenuContent, " ").concat("site.header.jobs" === i && _.length ? "mt-std" : "")
                }, m, (0, f.jsx)("ul", {
                    className: "p-0 m-0 ".concat(d.default.list)
                }, y.map((function (e, t) {
                    return (0, f.jsx)("li", {
                        key: e.id,
                        className: "py-std mx-std px-0 my-0 ".concat(d.default.searchMenuListingItem)
                    }, (0, f.jsx)("a", {
                        href: e.jobLink,
                        className: "d-flex flex-column"
                    }, (0, f.jsx)("strong", null, (0, f.jsx)("span", null, e.jobTitle)), (0, f.jsx)("span", null, e.location.displayName), (0, f.jsx)("span", {
                        className: "plain ".concat(d.default.plain)
                    }, e.employer.name)))
                })), (0, f.jsx)("li", {
                    className: "py-std mx-std px-0 my-0 ".concat(d.default.searchMenuListingItem)
                }, g))) : null)) : null
            };
        x.propTypes = {
            show: i.default.bool,
            onDrawerOpened: i.default.func,
            onDrawerClosed: i.default.func
        }, x.defaultProps = {
            show: !1,
            onDrawerOpened: function () {},
            onDrawerClosed: function () {}
        };
        var y = x;
        t.default = y
    },
    105: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(7)),
            l = o(a(2)),
            i = n(a(3)),
            s = n(a(9)),
            c = n(a(44)),
            d = a(12),
            u = n(a(39)),
            v = a(35),
            f = a(40),
            h = n(a(45)),
            p = n(a(28)),
            m = a(4),
            g = (0, m.jsx)("input", {
                type: "hidden",
                name: "suggestCount",
                value: "0"
            }),
            x = (0, m.jsx)("input", {
                type: "hidden",
                name: "suggestChosen",
                value: "false"
            }),
            y = (0, m.jsx)("input", {
                type: "hidden",
                name: "clickSource",
                value: "searchBtn"
            }),
            w = (0, m.jsx)("input", {
                type: "hidden",
                name: "jobType",
                value: ""
            }),
            b = (0, m.jsx)(s.default, {
                className: "d-flex",
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.5 3a7.5 7.5 0 107.5 7.5A7.5 7.5 0 0010.5 3zm0-1a8.5 8.5 0 016.35 14.15l5 5a.5.5 0 010 .7.5.5 0 01-.71 0l-5-5A8.5 8.5 0 1110.5 2z" fill="currentColor" fill-rule="evenodd"/></svg>'
            }),
            j = (0, m.jsx)(s.default, {
                className: "d-flex",
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8a2 2 0 11-2 2 2 2 0 012-2zm0-1a3 3 0 103 3 3 3 0 00-3-3zm0-5a8 8 0 018 8q0 6-8 12-8-6-8-12a8 8 0 018-8zm7 8a7 7 0 00-14 0c0 3.48 2.3 7.07 7 10.74 4.7-3.67 7-7.26 7-10.74z" fill="currentColor" fill-rule="evenodd"/></svg>'
            }),
            _ = function (e) {
                var t = e.onSelectFormContext,
                    a = (0, l.useContext)(u.default),
                    o = a.type,
                    n = void 0 === o ? "" : o,
                    i = a.searchKeyword,
                    _ = void 0 === i ? "" : i,
                    C = a.searchLocation,
                    S = void 0 === C ? {} : C,
                    N = (0, l.useContext)(d.I18nContext),
                    k = (0, f.filterFormContextByType)(n).formContext,
                    I = (0, l.useState)(k),
                    M = (0, r.default)(I, 2),
                    A = M[0],
                    E = M[1],
                    P = (0, l.useState)(""),
                    L = (0, r.default)(P, 2),
                    T = L[0],
                    z = L[1],
                    O = (0, l.useState)(S),
                    B = (0, r.default)(O, 2),
                    H = B[0],
                    D = B[1],
                    K = function (e, t) {
                        return (0, f.getPopularLocation)(e).then((function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                            return t((0, f.filterLocationSource)(e))
                        }))
                    },
                    R = ((GD || {}).util || {}).debounce,
                    U = void 0 === R ? function () {} : R,
                    F = U(z, 150, !0),
                    G = U((function () {
                        return D({
                            id: 0,
                            type: ""
                        })
                    }), 150, !0);
                (0, l.useEffect)((function () {
                    t(k.labelKey), (0, f.createAutocomplete)("sc", "scKeyword", (function (e, t) {
                        ! function (e, t) {
                            (0, f.getSearchSuggestion)(e, "sc").then((function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                return t((0, f.filterJobTitleSource)(e, N))
                            }))
                        }(e, t)
                    }), (function (e, t, a) {
                        var o = a.parentNode.firstChild.getAttribute("data-val");
                        (0, f.clickSearchSuggestion)(document.getElementById("sc").typedKeyword.value, "sc", o)
                    }), "full"), (0, f.createAutocomplete)("sc", "scLocation", K, (function (e, t, a) {
                        GD.event.stop(e);
                        var o = a.getAttribute("data-value").split("_");
                        D({
                            type: o[0],
                            id: o[1]
                        })
                    }))
                }), []);
                var V = function (e) {
                    return function () {
                        (0, v.trackClickEvent)(e.gaLabel, "searchbar-search"), E(e), t(e.labelKey)
                    }
                };
                return (0, m.jsx)("div", {
                    className: "p-sm ".concat(p.default.searchFormContainer)
                }, (0, m.jsx)("form", {
                    className: "mt-lg",
                    onSubmit: function (e) {
                        var t = document.getElementById("scLocation").value,
                            a = document.getElementById("scKeyword").value;
                        if (!t || H.type && H.id)(0, v.trackClickEventDeferred)("".concat(a || "empty", "|").concat(A.searchType).concat(H.id ? "|location" : ""), "search-button");
                        else {
                            e.preventDefault();
                            var o = document.getElementById("sc");
                            (0, f.getLocationsByFullText)(t).then((function (e) {
                                var t = e.locations;
                                if (t && t.length) {
                                    (0, v.trackClickEventDeferred)("".concat(a || "empty", "|").concat(A.searchType, "|location"), "search-button");
                                    var n = t[0];
                                    o.querySelector('input[name="locT"]').value = n.type, o.querySelector('input[name="locId"]').value = n.id
                                } else(0, v.trackClickEventDeferred)("".concat(a || "empty", "|").concat(A.searchType), "search-button")
                            })).finally((function () {
                                o.submit()
                            }))
                        }
                    },
                    id: "sc",
                    action: A.form.action,
                    method: "GET",
                    target: "_top",
                    noValidate: !0,
                    "data-test": "search-bar-form-mobile"
                }, (0, m.jsx)("div", {
                    className: "d-flex ".concat(p.default.justifyContentEvenly)
                }, h.default.map((function (e, t) {
                    return (0, m.jsx)("span", {
                        key: t,
                        className: "".concat(p.default.searchFormTitle, " ").concat(e.labelKey === A.labelKey ? p.default.searchFormTitleActive : ""),
                        onClick: V(e)
                    }, e.labelKey === A.labelKey ? (0, m.jsx)("b", null, (0, m.jsx)(d.I18nMessageComponent, {
                        id: e.labelKey
                    })) : (0, m.jsx)(d.I18nMessageComponent, {
                        id: e.labelKey
                    }))
                }))), g, x, y, (0, m.jsx)("input", {
                    type: "hidden",
                    name: "typedKeyword",
                    value: T || ""
                }), (0, m.jsx)("input", {
                    type: "hidden",
                    name: "locT",
                    value: H.type || ""
                }), (0, m.jsx)("input", {
                    type: "hidden",
                    name: "locId",
                    value: H.id || ""
                }), w, (0, m.jsx)("input", {
                    type: "hidden",
                    name: "context",
                    value: A.searchType || ""
                }), (0, m.jsx)("div", {
                    className: "mt-std"
                }, (0, m.jsx)("div", {
                    className: "d-flex ".concat(p.default.searchKeywordContainer, " ").concat(p.default.searchFormInputContainer)
                }, (0, m.jsx)("label", {
                    htmlFor: "scKeyword",
                    className: "d-flex align-items-center ".concat(p.default.searchInputLabel)
                }, b), (0, m.jsx)(c.default, {
                    autoFocus: !0,
                    id: "scKeyword",
                    type: "text",
                    autocomplete: "off",
                    name: "sc.keyword",
                    placeholder: N.msg(A.form.placeholderKey),
                    className: "col ".concat(p.default.searchKeywordInput),
                    defaultValue: _,
                    onChange: function (e) {
                        F(e.target.value)
                    },
                    dataTestId: "search-menu-keyword-input"
                }), (0, m.jsx)("button", {
                    type: "submit",
                    className: "pl-0 pr-xsm ".concat(p.default.searchKeywordSubmit),
                    "data-test": "search-menu-submit"
                }, (0, m.jsx)(s.default, {
                    className: "d-flex ".concat(p.default.colorDefault),
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path id="prefix__icon-arrow-1" d="M21 11.808l-8.485-8.486L11.1 4.737l6.07 6.071H4.515v2H17.17l-6.07 6.07 1.414 1.415L21 11.808z"/></g></svg>'
                }))), (0, m.jsx)("div", {
                    className: "d-flex ".concat(p.default.searchLocationContainer, " ").concat(p.default.searchFormInputContainer)
                }, (0, m.jsx)("label", {
                    htmlFor: "scLocation",
                    className: "d-flex align-items-center ".concat(p.default.searchInputLabel)
                }, j), (0, m.jsx)(c.default, {
                    id: "scLocation",
                    type: "text",
                    autocomplete: "off",
                    placeholder: N.msg("site.header.search.placeholder.location"),
                    className: "col ".concat(p.default.searchLocationInput),
                    defaultValue: S.name,
                    onChange: function () {
                        G()
                    },
                    dataTestId: "search-menu-location-input"
                })))))
            };
        _.propTypes = {
            onSelectFormContext: i.default.func
        }, _.defaultProps = {
            onSelectFormContext: function () {}
        };
        var C = _;
        t.default = C
    },
    106: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(7)),
            l = o(a(2)),
            i = n(a(3)),
            s = n(a(9)),
            c = o(a(36)),
            d = a(46),
            u = n(a(107)),
            v = n(a(109)),
            f = n(a(110)),
            h = n(a(112)),
            p = n(a(81)),
            m = n(a(37)),
            g = a(4),
            x = (0, g.jsx)(v.default, null),
            y = (0, g.jsx)(f.default, null),
            w = (0, g.jsx)(u.default, null),
            b = (0, g.jsx)(h.default, null),
            j = (0, g.jsx)((function () {
                var e = (0, l.useContext)(c.default),
                    t = e.occupation,
                    a = e.origOccupation,
                    o = e.location,
                    n = e.isNewSiteHeader,
                    i = e.legacyPageWidth,
                    d = (0, l.useState)(!1),
                    u = (0, r.default)(d, 2),
                    v = u[0],
                    f = u[1],
                    h = (0, l.useRef)(null),
                    j = function () {
                        h.current && f(h.current.getBoundingClientRect().top <= 0)
                    };
                return (0, l.useEffect)((function () {
                    return window.addEventListener("scroll", j),
                        function () {
                            window.removeEventListener("scroll", (function () {
                                return j
                            }))
                        }
                }), []), (0, g.jsx)("div", {
                    "data-test": "career-overview-nav",
                    className: "".concat(m.default.navigationBackground, " ").concat(m.default.careerNavigation)
                }, (0, g.jsx)("div", {
                    className: "px-std ".concat(i ? m.default.legacyPageWidth : "container-max-width px-md-lg", " mx-auto pt-std d-flex align-items-start justify-content-between")
                }, (0, g.jsx)("div", {
                    className: "d-flex align-items-start"
                }, (0, g.jsx)("div", {
                    className: "d-none d-md-flex align-items-center"
                }, x, (0, g.jsx)(s.default, {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.72 11.29L9.19 3.9a1.3 1.3 0 00-1.83 0 1.26 1.26 0 000 1.78L13.78 12l-6.42 6.3a1.26 1.26 0 000 1.78 1.3 1.3 0 001.83 0l7.53-7.39a1 1 0 000-1.4z" fill="currentColor" fill-rule="evenodd"/></svg>',
                    className: "px-sm ".concat(m.default.breadcrumbIcon),
                    width: "16",
                    height: "16"
                })), y), w), "Non Title" !== t && t ? (0, g.jsx)("div", {
                    className: "".concat(m.default.stickyWrapper, " ").concat(v ? m.default.sticky : ""),
                    ref: h
                }, b) : null, n ? null : (0, g.jsx)(p.default, {
                    jobTitle: "Non Title" === t ? "" : t || a || "",
                    location: o
                }))
            }), null),
            _ = function (e) {
                return (0, g.jsx)(c.AppContextProvider, e, (0, g.jsx)(d.MenuContextProvider, {
                    value: e.menu
                }, j, e.children))
            };
        _.propTypes = {
            menu: i.default.object,
            children: i.default.node
        }, _.defaultProps = {
            menu: {},
            children: null
        };
        var C = _;
        t.default = C
    },
    107: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(6)),
            l = n(a(7)),
            i = o(a(2)),
            s = n(a(22)),
            c = a(12),
            d = n(a(36)),
            u = n(a(46)),
            v = a(57),
            f = a(41),
            h = n(a(58)),
            p = n(a(67)),
            m = n(a(37)),
            g = a(4),
            x = (0, g.jsx)(h.default, {
                className: "mr-xsm",
                iconKey: "jobs"
            }),
            y = function () {
                var e = (0, i.useContext)(d.default).isNewSiteHeader,
                    t = (0, i.useContext)(u.default),
                    a = t.employerMenu,
                    o = void 0 === a ? [] : a,
                    n = t.postJobMenu,
                    h = void 0 === n ? {} : n,
                    y = (0, l.default)(o, 1)[0],
                    w = void 0 === y ? {} : y,
                    b = (0, f.generateMenuItemProps)(w, (function () {
                        (0, v.trackClickEvent)("null", "header-foremployers")
                    })),
                    j = (0, f.generateMenuItemProps)(h, (function () {
                        (0, v.trackClickEvent)("no-label", "header-postjobsfree")
                    }));
                return e ? (0, g.jsx)("div", {
                    className: "d-none d-md-flex col flex-wrap justify-content-end"
                }, o.length ? (0, g.jsx)(p.default, {
                    menu: o,
                    menuAction: "header-foremployers",
                    position: "right"
                }, (function (e) {
                    return (0, g.jsx)(s.default, (0, r.default)({
                        className: "".concat(e ? m.default.activeButton : "", " ").concat(m.default.employerBtn),
                        btnSize: "compact",
                        type: "button",
                        tag: "a",
                        variant: "ghost",
                        "data-test": "main-employer-menu-trigger"
                    }, b), (0, g.jsx)("b", null, (0, g.jsx)(c.I18nMessageComponent, {
                        id: w.textKey
                    })))
                })) : null, Object.keys(h).length ? (0, g.jsx)("div", null, (0, g.jsx)(s.default, (0, r.default)({
                    className: "ml-std d-flex flex-row align-items-center",
                    btnSize: "compact",
                    type: "button",
                    tag: "a",
                    variant: "ghost",
                    "data-test": "post-jobs-topNav"
                }, j), x, (0, g.jsx)("b", null, (0, g.jsx)(c.I18nMessageComponent, {
                    id: h.textKey
                })))) : null) : null
            };
        t.default = y
    },
    108: function (e, t, a) {
        e.exports = {
            popupContainer: "popup__PopupStyles__popupContainer",
            popupContent: "popup__PopupStyles__popupContent",
            popupBackground: "popup__PopupStyles__popupBackground",
            popupContentLeft: "popup__PopupStyles__popupContentLeft",
            popupContentRight: "popup__PopupStyles__popupContentRight",
            popupContentActive: "popup__PopupStyles__popupContentActive"
        }
    },
    109: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(6)),
            l = n(a(7)),
            i = n(a(52)),
            s = o(a(2)),
            c = n(a(3)),
            d = n(a(9)),
            u = n(a(22)),
            v = a(21),
            f = a(12),
            h = n(a(36)),
            p = n(a(46)),
            m = a(42),
            g = a(41),
            x = a(57),
            y = n(a(59)),
            w = n(a(37)),
            b = a(4);
        var j = {
                companiesBicolor: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" fill-rule="evenodd"><path fill="#0CAA41" fill-rule="nonzero" d="M19.182 10h19.636c1.205 0 2.182.895 2.182 2v27H17V12c0-1.105.977-2 2.182-2zM39 37V13a1 1 0 00-1-1H20a1 1 0 00-1 1v24h20z"/><path fill="#DFF7E7" fill-rule="nonzero" d="M22 14h14a1 1 0 011 1v20h-4v-3a3 3 0 00-3-3h-2a3 3 0 00-3 3v3h-4V15a1 1 0 011-1z"/><path fill="#0CAA41" fill-rule="nonzero" d="M16 19v2h-6a1 1 0 00-1 1v15h7v2H7V21c0-1.105.728-2 1.625-2H16z"/><rect width="4" height="4" x="23" y="16" fill="#0CAA41" rx="2"/><rect width="4" height="4" x="23" y="21" fill="#0CAA41" rx="2"/><rect width="4" height="4" x="31" y="16" fill="#0CAA41" rx="2"/><rect width="4" height="4" x="31" y="21" fill="#0CAA41" rx="2"/><path fill="#0CAA41" stroke="#0CAA41" stroke-width="2" d="M27 38h4v-6a1 1 0 00-1-1h-2a1 1 0 00-1 1v6z"/></g></svg>',
                interviewsBicolor: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" fill-rule="evenodd"><path fill="#0CAA41" fill-rule="nonzero" d="M10 22c0 .295.011.588.033.879C8.755 24.165 8 25.779 8 27.5c0 2.192 1.218 4.267 3.35 5.704l.741.5.122.885c.053.386.089.772.107 1.158.398-.226.765-.457 1.1-.693l.717-.505.859.186c.808.175 1.648.265 2.504.265.853 0 1.676-.089 2.458-.254 1.076.404 2.214.719 3.398.932C21.64 36.518 19.639 37 17.5 37c-1.012 0-1.993-.108-2.928-.31-1.206.849-2.73 1.62-4.572 2.31.345-1.38.422-2.758.232-4.137C7.649 33.12 6 30.469 6 27.5c0-2.934 1.61-5.557 4.14-7.3-.093.59-.14 1.19-.14 1.8z"/><path fill="#FFF" stroke="#0CAA41" stroke-width="2" d="M32.714 37.39a11.828 11.828 0 01.309-3.935l.124-.5.479-.19C38.73 30.748 42 26.586 42 22c0-6.576-6.675-12-15-12s-15 5.424-15 12 6.675 12 14.991 12l.327-.003.667-.016.309.364c.946 1.115 2.418 2.134 4.42 3.044z"/><ellipse cx="27" cy="22" fill="#DFF7E7" rx="12" ry="9"/><circle cx="21" cy="22" r="2" fill="#0CAA41"/><circle cx="27" cy="22" r="2" fill="#0CAA41"/><circle cx="33" cy="22" r="2" fill="#0CAA41"/></g></svg>',
                jobsBicolor: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" fill-rule="evenodd"><path fill="#DFF7E7" d="M10 29h4.465a1 1 0 01.832.445l1.11 1.664A2 2 0 0018.07 32h11.86a2 2 0 001.664-.89l1.11-1.665a1 1 0 01.831-.445H38v7H10v-7z"/><path fill="#0CAA41" d="M11 32v3a1 1 0 001 1h24a1 1 0 001-1v-3a1 1 0 012 0v4a2 2 0 01-2 2H11a2 2 0 01-2-2v-4a1 1 0 012 0zm5-18v-2a2 2 0 012-2h12a2 2 0 012 2v2h7a2 2 0 012 2v11a2 2 0 01-2 2h-5.465a1 1 0 00-.832.445l-1.11 1.664A2 2 0 0129.93 32H18.07a2 2 0 01-1.664-.89l-1.11-1.665a1 1 0 00-.831-.445H9a2 2 0 01-2-2V16a2 2 0 012-2h7zm2 0h12v-1a1 1 0 00-1-1H19a1 1 0 00-1 1v1zm-8 2a1 1 0 00-1 1v9a1 1 0 001 1h5.465a1 1 0 01.832.445l1.406 2.11a1 1 0 00.832.445h10.93a1 1 0 00.832-.445l1.406-2.11a1 1 0 01.832-.445H38a1 1 0 001-1v-9a1 1 0 00-1-1H10zm11 10h6a1 1 0 010 2h-6a1 1 0 010-2z"/></g></svg>',
                salariesBicolor: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" fill-rule="evenodd"><path fill="#0CAA41" d="M12 36h24a2 2 0 01-2 2H14a2 2 0 01-2-2zm-2-4h28a2 2 0 01-2 2H12a2 2 0 01-2-2zM9 10h30a2 2 0 012 2v16a2 2 0 01-2 2H9a2 2 0 01-2-2V12a2 2 0 012-2zm5 2a5 5 0 01-5 5v6a5 5 0 015 5h20a5 5 0 015-5v-6a5 5 0 01-5-5H14zm10 12a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"/><path fill="#DFF7E7" d="M15.71 14h16.58A7.015 7.015 0 0037 18.71v2.58A7.015 7.015 0 0032.29 26H15.71A7.015 7.015 0 0011 21.29v-2.58A7.015 7.015 0 0015.71 14zM24 24a4 4 0 100-8 4 4 0 000 8z"/></g></svg>'
            },
            _ = (0, i.default)("div", {
                target: "etngv2y0"
            })("width:calc(100vw - 48px);max-width:calc(", (function (e) {
                return e.legacyPageWidth ? "1024" : "1280"
            }), "px - 48px);.primaryNavItem{color:", v.ui.grey[600], ";}.secondaryNavItem{font-weight:normal;}.activeNavItem{font-weight:bold;background-color:", v.ui.grey[200], ";}"),
            C = (0, i.default)("ul", {
                target: "etngv2y1"
            })({
                name: "1nmtgvc",
                styles: "list-style:none;overflow:hidden;"
            }),
            S = (0, i.default)("div", {
                target: "etngv2y2"
            })("border:none;background-color:transparent;color:", v.ui.grey[500], ";"),
            N = (0, b.jsx)(d.default, {
                className: "d-flex",
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M21 11H3a1 1 0 000 2h18a1 1 0 000-2zM3 5h18a1 1 0 000-2H3a1 1 0 000 2zM21 19H3a1 1 0 000 2h18a1 1 0 000-2z"/></g></svg>'
            }),
            k = (0, b.jsx)(f.I18nMessageComponent, {
                id: "site.header.greetings"
            }),
            I = (0, b.jsx)(d.default, {
                className: "d-flex",
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.34 12l5.38-5.38a.95.95 0 00-1.34-1.34L12 10.66 6.62 5.28a.95.95 0 00-1.34 1.34L10.66 12l-5.38 5.38a.95.95 0 001.34 1.34L12 13.34l5.38 5.38a.95.95 0 001.34-1.34z" fill="currentColor" fill-rule="evenodd"/></svg>'
            }),
            M = function (e) {
                e.className;
                var t, a, o, n = (0, s.useContext)(h.default),
                    i = n.type,
                    c = n.id,
                    v = n.legacyPageWidth,
                    M = (0, s.useContext)(p.default),
                    A = M.mainMenu,
                    E = void 0 === A ? [] : A,
                    P = M.altMainMenu,
                    L = void 0 === P ? [] : P,
                    T = (0, s.useState)(!1),
                    z = (0, l.default)(T, 2),
                    O = z[0],
                    B = z[1],
                    H = null === (t = GD) || void 0 === t || null === (a = t.util) || void 0 === a || null === (o = a.device) || void 0 === o ? void 0 : o.hh,
                    D = function () {
                        var e = window.GDStorage,
                            t = void 0 === e ? {} : e;
                        if (t.isSupported()) {
                            var a = t.getVal("careerInsightModalJobTitle");
                            if (a) return void GD.util.loadUrl((0, m.generateCareerOverviewUrl)(a))
                        }
                        var o = new CustomEvent("showCareerInsightsModal");
                        document.body.dispatchEvent(o)
                    },
                    K = function (e, t, a) {
                        return function () {
                            (0, x.trackClickEvent)(e, t), a && (a(), B(!1))
                        }
                    },
                    R = function (e) {
                        e.preventDefault(), B(!1)
                    },
                    U = null != L && L.length ? L : E;
                return (0, b.jsx)("div", {
                    className: "".concat(w.default.hamburgerNavContainer, " ").concat(O ? w.default.hamburgerNavActive : ""),
                    "data-test": "career-overview-nav--hamburger-menu",
                    onMouseEnter: H ? null : function (e) {
                        e.preventDefault(), (0, x.trackHoverEvent)("hover-".concat(i), "occ-header-hamburger"), B(!0)
                    },
                    onMouseLeave: R
                }, (0, b.jsx)(u.default, {
                    "aria-label": "Navigation Menu",
                    btnSize: "compact",
                    className: "p-xsm ".concat(w.default.hamburgerBtn),
                    onClick: function (e) {
                        e.preventDefault(), B(!O)
                    },
                    title: "Toggle Navigation Menu",
                    variant: "tertiary"
                }, N), (0, b.jsx)(y.default, {
                    show: O
                }, (0, b.jsx)(_, {
                    className: "mt-xsm px-lg",
                    legacyPageWidth: v
                }, (0, b.jsx)("div", {
                    className: "mt-xxl d-flex flex-row"
                }, (0, b.jsx)("h2", {
                    className: "col ".concat(w.default.h2, " m-0")
                }, k), H ? (0, b.jsx)(S, {
                    type: "button",
                    className: "p-0 ml-std",
                    onClick: R
                }, I) : null), (0, b.jsx)("ul", {
                    className: "d-flex flex-row col px-0"
                }, U.map((function (e, t) {
                    var a = e.id,
                        o = e.iconKey,
                        n = e.textKey;
                    if ("kywi" === a) return null;
                    var l = a === i,
                        s = (0, g.generateMenuItemProps)(e, K(a, "occ-header-".concat(a)));
                    return (0, b.jsx)("li", {
                        className: "d-inline-flex col-3 p-0",
                        key: a || t
                    }, (0, b.jsx)(C, {
                        className: "d-flex flex-column align-items-start p-0 m-0 col"
                    }, (0, b.jsx)(u.default, (0, r.default)({
                        className: "primaryNavItem d-flex align-items-center justify-content-start py-0 pl-xxsm pr-xsm mb-xxsm plain ".concat(l ? "activeNavItem" : ""),
                        type: "button",
                        tag: "a",
                        variant: "ghost",
                        "data-test": "site-header-".concat(a)
                    }, s), (0, b.jsx)(d.default, {
                        className: "d-flex",
                        svg: j["".concat(o, "Bicolor")],
                        width: "40px",
                        height: "40px"
                    }), (0, b.jsx)("b", {
                        className: "ml-xsm"
                    }, (0, b.jsx)(f.I18nMessageComponent, {
                        id: n
                    }))), null != e && e.childNavigationLinks ? e.childNavigationLinks.map((function (e, t) {
                        var o = e.id === c,
                            n = "jobs_career-overview" === e.id,
                            l = (0, g.generateMenuItemProps)(e, K(e.gaLabel, "occ-header-".concat(a), n ? D : null));
                        return (0, b.jsx)("li", {
                            className: "p-0 m-0",
                            key: e.id || t
                        }, (0, b.jsx)(u.default, (0, r.default)({
                            className: "secondaryNavItem d-flex plain mb-xxsm px-xsm ".concat(o ? "activeNavItem" : ""),
                            type: "button",
                            tag: l.href ? "a" : "button",
                            variant: "ghost"
                        }, l), (0, b.jsx)(f.I18nMessageComponent, {
                            id: e.textKey
                        })))
                    })) : null))
                }))))))
            };
        M.propTypes = {
            className: c.default.string
        }, M.defaultProps = {
            className: ""
        };
        var A = M;
        t.default = A
    },
    110: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(7)),
            l = o(a(2)),
            i = n(a(9)),
            s = a(12),
            c = n(a(36)),
            d = a(68),
            u = n(a(37)),
            v = n(a(111)),
            f = a(4),
            h = (0, f.jsx)(i.default, {
                className: "d-flex ml-xxsm",
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.4 9.25l7.386 7.523a1 1 0 001.428 0L20.6 9.25c.5-.509.5-1.324 0-1.833a1.261 1.261 0 00-1.8 0l-6.3 6.416-6.3-6.416a1.261 1.261 0 00-1.8 0c-.5.509-.5 1.324 0 1.833z" fill-rule="evenodd" fill="currentColor"/></svg>',
                width: "16",
                height: "16"
            }),
            p = function () {
                var e = (0, l.useContext)(c.default),
                    t = e.type,
                    a = e.occupation,
                    o = e.origOccupation,
                    n = e.tldId,
                    i = e.location,
                    p = (0, l.useState)(i),
                    m = (0, r.default)(p, 2),
                    g = m[0],
                    x = m[1],
                    y = ("Non Title" === a ? o : a || o || "").split(" ").map((function (e) {
                        return e ? "".concat(e[0].toUpperCase()).concat(e.slice(1)) : ""
                    })).join(" ");
                (0, l.useEffect)((function () {
                    if (("overview" === t || "careerPath" === t) && window.sessionStorage) {
                        var e = window.sessionStorage.getItem("userSelectedCareerLocation");
                        e && x(JSON.parse(e))
                    }
                }), [t]);
                return (0, f.jsx)("button", {
                    className: "d-flex flex-column flex-md-row flex-wrap align-items-baseline px-0 px-md-xsm ".concat(v.default.locationPickerButton),
                    onClick: function () {
                        var e = new CustomEvent("showCareerInsightsModal", {
                            detail: t
                        });
                        document.body.dispatchEvent(e)
                    }
                }, (0, f.jsx)("h2", {
                    className: "m-0 mr-std ".concat(u.default.h1)
                }, (0, f.jsx)(s.I18nMessageComponent, {
                    id: "careerNav.pageTitle.".concat(t),
                    values: {
                        occupation: y
                    }
                })), (0, f.jsx)("span", {
                    className: "d-flex mt-xsm mt-md-0 align-items-center"
                }, (null == g ? void 0 : g.name) || d.tldLocalizedCountryMap[n], h))
            };
        t.default = p
    },
    111: function (e, t, a) {
        e.exports = {
            locationPickerButton: "jobTitleAndLocationPicker__JobTitleAndLocationPickerStyles__locationPickerButton",
            locPickerFormLabel: "jobTitleAndLocationPicker__JobTitleAndLocationPickerStyles__locPickerFormLabel"
        }
    },
    112: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(6)),
            l = n(a(7)),
            i = o(a(2)),
            s = n(a(36)),
            c = n(a(46)),
            d = n(a(47)),
            u = n(a(37)),
            v = a(42),
            f = a(4),
            h = function () {
                var e = (0, i.useContext)(s.default),
                    t = e.type,
                    a = e.occupation,
                    o = e.legacyPageWidth,
                    n = (0, i.useContext)(c.default).careerOverviewMenu,
                    h = void 0 === n ? [] : n,
                    p = (0, i.useState)(null),
                    m = (0, l.default)(p, 2),
                    g = m[0],
                    x = m[1],
                    y = (0, i.useState)(null),
                    w = (0, l.default)(y, 2),
                    b = w[0],
                    j = w[1],
                    _ = (0, i.useState)(""),
                    C = (0, l.default)(_, 2),
                    S = C[0],
                    N = C[1];
                return (0, i.useEffect)((function () {
                    if (N(t), ("overview" === t || "careerPath" === t) && window.sessionStorage) {
                        var e = JSON.parse(window.sessionStorage.getItem("userSelectedCareerLocation") || "{}");
                        null != e && e.id && (x((0, v.generateSalaryUrl)(a, e)), j((0, v.generateInterviewUrl)(a, e)))
                    }
                    document.body.addEventListener("changeOverviewLocation", (function (e) {
                        var t = e.detail.location,
                            o = void 0 === t ? {} : t;
                        x((0, v.generateSalaryUrl)(a, o)), j((0, v.generateInterviewUrl)(a, o))
                    }))
                }), []), h.length ? (0, f.jsx)("nav", {
                    "data-test": "career-overview-nav-tabs",
                    className: "".concat(u.default.secondaryNavigation, " ").concat(u.default.bottomShadow, " ").concat(u.default.stickyInner)
                }, (0, f.jsx)("ul", {
                    className: "mx-auto my-0 py-0 px-std ".concat(o ? u.default.legacyPageWidth : "container-max-width px-md-lg", " ").concat(u.default.navigationScroll)
                }, h.map((function (e) {
                    var t = e.id === S;
                    e.textKey = "careerNav.tab.".concat(e.id), "salaries" === e.id && g ? e.link = g : "interviews" === e.id && b && (e.link = b);
                    var a = [];
                    return a.push("d-inline-flex align-items-center m-0 mr-lg mr-sm-xxl p-0"), a.push(u.default.navigationItem), a.push(u.default.secondaryNavigationItem), a.push(t ? u.default.activeNavigationItem : ""), (0, f.jsx)("li", {
                        className: a.join(" "),
                        key: e.id
                    }, (0, f.jsx)(d.default, (0, r.default)({
                        active: t,
                        className: "px-xxsm",
                        disableHoverEffect: !0,
                        menuAction: "subheader-".concat(e.id)
                    }, e)))
                })))) : null
            };
        t.default = h
    },
    113: function (e, t, a) {
        "use strict";
        var o = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.markNotificationsRead = t.getSavedJobsCount = t.getNotifications = void 0;
        var n = o(a(55)),
            r = window.GDStorage,
            l = void 0 === r ? {} : r,
            i = l.isSupported,
            s = void 0 === i ? function () {
                return !1
            } : i,
            c = l.getVal,
            d = void 0 === c ? function () {} : c,
            u = l.setVal,
            v = void 0 === u ? function () {} : u,
            f = {
                LOGGED_IN: "loggedIn",
                NOTIFICATIONS: "notifications",
                NOTIFICATIONS_CACHE_EXPIRY_TS: "notificationsCacheExpiryTS",
                ENCRYPTED_USER_ID_STRING: "encryptedUserIdString"
            },
            h = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Object.keys(e).map((function (t) {
                    return e[t]
                })).some((function (e) {
                    var t = e.clicked,
                        a = void 0 !== t && t,
                        o = e.read,
                        n = void 0 !== o && o,
                        r = e.isIncrementCount;
                    return !n && !a && (void 0 !== r && r)
                }))
            },
            p = function (e) {
                var t = e.browserCachePeriod,
                    a = void 0 === t ? 0 : t,
                    o = e.updateList,
                    n = void 0 !== o && o,
                    r = e.notifications,
                    l = void 0 === r ? {} : r,
                    i = e.encryptedUserIdString,
                    c = void 0 === i ? "" : i,
                    u = d(f.NOTIFICATIONS);
                if (s()) {
                    var p = a ? parseInt(a, 10) : 0;
                    if (v(f.NOTIFICATIONS_CACHE_EXPIRY_TS, (new Date).getTime() + p), n) {
                        if (u)
                            for (var m in l) !l[m].message && u[m] && u[m].message && (l[m].message = u[m].message), l[m].jobListing && !l[m].jobListing.jobListingUrl ? u[m] && u[m].jobListing.jobListingUrl && (l[m].url = u[m].jobListing.jobListingUrl) : l[m].jobListing || l[m].url || !l[m].jobListing && u[m] && u[m].url && (l[m].url = u[m].url);
                        v(f.NOTIFICATIONS, l)
                    } else e.notifications = u;
                    c ? v(f.ENCRYPTED_USER_ID_STRING, c) : e.encryptedUserIdString = d(f.ENCRYPTED_USER_ID_STRING)
                }
                return e.hasNewNotifications = h(e.notifications), e
            };
        t.getNotifications = function () {
            if (s() && ! function () {
                    if (s()) {
                        var e = document.querySelector("body").classList.contains(f.LOGGED_IN),
                            t = d(f.LOGGED_IN);
                        if (void 0 !== t && e !== t) return v(f.LOGGED_IN, e), !0;
                        v(f.LOGGED_IN, e);
                        var a = d(f.NOTIFICATIONS_CACHE_EXPIRY_TS);
                        return !a || Math.abs((new Date).getTime()) > a
                    }
                    return !1
                }()) {
                var e = d(f.NOTIFICATIONS) || {};
                return new Promise((function (t) {
                    return t({
                        notifications: e,
                        encryptedUserIdString: d(f.ENCRYPTED_USER_ID_STRING) || "",
                        updateList: !1,
                        hasNewNotifications: h(e)
                    })
                }))
            }
            return function () {
                var e = [];
                if (s()) {
                    var t = d(f.NOTIFICATIONS) || {},
                        a = Object.assign({}, t);
                    for (var o in a) a[o].message = "", a[o].url = "";
                    e.push("existingNotificationsAsString=".concat(a ? encodeURIComponent(JSON.stringify(a)) : "")), e.push("encryptedUserIdString=".concat(d(f.ENCRYPTED_USER_ID_STRING) || ""))
                }
                return (0, n.default)("/getSiteNotificationsAjax.htm", {
                    credentials: "same-origin",
                    mode: "cors",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    method: "post",
                    body: e.join("&")
                }).then((function (e) {
                    return e.json()
                })).then((function (e) {
                    return JSON.parse(e)
                }))
            }().then(p)
        };
        t.getSavedJobsCount = function () {
            return (0, n.default)("/Job/json/getSavedJobsCount.htm").then((function (e) {
                return e.json()
            })).then((function (e) {
                return e
            }))
        };
        t.markNotificationsRead = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = {};
            e.forEach((function (e) {
                t[e] = !1
            }));
            var a = "campaignCode2ReadStateString=".concat(encodeURIComponent(JSON.stringify(t)));
            return (0, n.default)("/getSiteNotificationsAjax_logRead.htm", {
                credentials: "same-origin",
                mode: "cors",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "X-Requested-With": "XMLHttpRequest"
                },
                method: "post",
                body: a
            })
        }
    },
    120: function (e, t, a) {
        "use strict";
        var o = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.sourceConfig = t.processKeywordSuggestions = void 0;
        var n = o(a(23));

        function r(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, o)
            }
            return a
        }

        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(a), !0).forEach((function (t) {
                    (0, n.default)(e, t, a[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : r(Object(a)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }))
            }
            return e
        }
        var i = ["company", "jobtitle", "multicat"],
            s = ["company", "reviews", "jobs", "salaries", "interviews"],
            c = ["jobs", "companies", "career", "salaries", "interviews"],
            d = ["jobs", "salaries"];
        t.processKeywordSuggestions = function (e, t, a) {
            var o = e.filter((function (e) {
                return i.includes(e.category)
            }));
            o.length > 1 && o.sort((function (e, t) {
                return e.directHit && !t.directHit ? -1 : 1
            }));
            var n = o[0] || {},
                r = n.category,
                u = n.directHit,
                v = n.suggestion,
                f = void 0 === v ? "" : v,
                h = [];
            3 !== t.length || u ? (t.length > 3 || u) && ("company" === r ? s.forEach((function (e) {
                h.push(l(l({}, n), {}, {
                    id: "".concat(f, "_").concat(e),
                    searchType: "company_".concat(e),
                    gaType: "keyword-type-ahead",
                    gaLabel: e
                }, "company" !== e && {
                    suggestion: GD.i18n.msg("site.header.universal-search.keyword-".concat(e), {
                        keyword: f
                    })
                }))
            })) : "jobtitle" === r ? c.forEach((function (e) {
                ("career" !== e || a) && h.push(l(l({}, n), {}, {
                    iconKey: e,
                    id: "".concat(f, "_").concat(e),
                    normalizedSuggestion: f,
                    searchType: "jobtitle_".concat(e),
                    gaType: "keyword-type-ahead",
                    gaLabel: e,
                    suggestion: GD.i18n.msg("site.header.universal-search.keyword-".concat(e), {
                        keyword: f
                    })
                }))
            })) : "multicat" === r && d.forEach((function (e) {
                h.push(l(l({}, n), {}, {
                    iconKey: e,
                    id: "".concat(f, "_").concat(e),
                    normalizedSuggestion: f,
                    searchType: "multicat_".concat(e),
                    gaType: "keyword-type-ahead",
                    gaLabel: e,
                    suggestion: GD.i18n.msg("site.header.universal-search.keyword-".concat(e), {
                        keyword: f
                    })
                }))
            }))) : o.slice(0, 8).forEach((function (e) {
                var t = e.category;
                h.push(l(l(l({}, e), "company" !== t && {
                    iconKey: "jobs"
                }), {}, {
                    id: e.suggestion,
                    normalizedSuggestion: e.suggestion,
                    searchType: "company" === t ? "company_company" : "jobtitle_jobs",
                    gaType: "keyword-type-ahead",
                    gaLabel: "company" === t ? "company" : "jobs"
                }, "company" !== t && {
                    suggestion: GD.i18n.msg("site.header.universal-search.keyword-jobs", {
                        keyword: e.suggestion
                    })
                }))
            }));
            return h.push({
                category: "ALL_RESULTS",
                iconKey: "searchAll",
                id: "all_results",
                query: t,
                gaType: "keyword-type-ahead",
                gaLabel: "all-results",
                suggestion: GD.i18n.msg("site.header.universal-search.see-all-results", {
                    keyword: t
                })
            }), h
        };
        t.sourceConfig = {
            keyword: {
                url: "/searchsuggest/typeahead?numSuggestions=8&source=GD_V2&version=NEW&rf=full&fallback=token"
            },
            location: {
                url: "/findPopularLocationAjax.htm?maxLocationsToReturn=10"
            }
        }
    },
    121: function (e, t, a) {
        e.exports = {
            locationIcon: "universalSearch__UniversalSearchBarStyles__locationIcon",
            searchInput: "universalSearch__UniversalSearchBarStyles__searchInput",
            searchKeywordContainer: "universalSearch__UniversalSearchBarStyles__searchKeywordContainer",
            searchInputContainer: "universalSearch__UniversalSearchBarStyles__searchInputContainer",
            searchBarLocationInput: "universalSearch__UniversalSearchBarStyles__searchBarLocationInput",
            searchButton: "universalSearch__UniversalSearchBarStyles__searchButton"
        }
    },
    122: function (e, t, a) {
        e.exports = {
            colorDefault: "universalSearch__UniversalSearchStyles__colorDefault",
            iconBtn: "universalSearch__UniversalSearchStyles__iconBtn",
            searchForm: "universalSearch__UniversalSearchStyles__searchForm",
            searchBarLocationInput: "universalSearch__UniversalSearchStyles__searchBarLocationInput",
            searchKeywordContainer: "universalSearch__UniversalSearchStyles__searchKeywordContainer",
            searchInput: "universalSearch__UniversalSearchStyles__searchInput",
            recentSearchItem: "universalSearch__UniversalSearchStyles__recentSearchItem"
        }
    },
    150: function (e, t, a) {
        "use strict";
        var o = a(1),
            n = a(5);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = t.OptionContextProvider = void 0;
        var r = n(a(2)),
            l = o(a(3)),
            i = a(4),
            s = (0, r.createContext)(),
            c = {
                default: {
                    showSearchNavigation: !1,
                    showPrimaryNavigation: !0,
                    showSecondaryNavigation: !1
                }
            },
            d = function (e) {
                var t = e.value,
                    a = e.children;
                return (0, i.jsx)(s.Provider, {
                    value: Object.assign({}, c, t)
                }, a)
            };
        t.OptionContextProvider = d, d.propTypes = {
            value: l.default.object,
            children: l.default.node.isRequired
        }, d.defaultProps = {
            value: {}
        };
        var u = s;
        t.default = u
    },
    164: function (e, t, a) {
        "use strict";
        var o = a(1),
            n = a(5);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(2)),
            l = o(a(3)),
            i = o(a(9)),
            s = a(12),
            c = o(a(60)),
            d = o(a(33)),
            u = o(a(62)),
            v = o(a(73)),
            f = a(4),
            h = (0, f.jsx)("a", {
                href: "/Job/Home/savedJobs.htm"
            }, (0, f.jsx)("b", null, (0, f.jsx)(s.I18nMessageComponent, {
                id: "site.header.notifications.haveSavesCTA"
            }))),
            p = (0, f.jsx)("a", {
                href: "/Job/jobsHomeRedirect.htm"
            }, (0, f.jsx)("b", null, (0, f.jsx)(s.I18nMessageComponent, {
                id: "site.header.notifications.noSavesCTA"
            }))),
            m = function (e) {
                var t = e.isMobileMenu,
                    a = (0, r.useContext)(c.default).state,
                    o = void 0 === a ? {} : a,
                    n = o.savedJobsCount,
                    l = o.showJobNotification,
                    m = t ? "".concat(v.default.notificationsItem) : "".concat(v.default.menuItem, " ").concat(v.default.jobNotification, " ").concat(u.default.menuItemHoverEffect);
                return (0, f.jsx)(r.default.Fragment, null, (0, f.jsx)("div", {
                    className: "d-flex p-std ".concat(m),
                    onClick: function (e) {
                        GD.event.stop(e), n && n > 0 ? GD.util.loadUrl("/Job/Home/savedJobs.htm") : GD.util.loadUrl("/Job/jobsHomeRedirect.htm")
                    }
                }, (0, f.jsx)("div", {
                    className: "d-flex flex-column align-items-center"
                }, (0, f.jsx)(i.default, {
                    className: "d-flex ".concat(d.default.colorDefault),
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.11l.66-.65a5.56 5.56 0 017.71.19 5.63 5.63 0 010 7.92L12 21l-8.37-8.43a5.63 5.63 0 010-7.92 5.56 5.56 0 017.71-.19zm7.66 6.75a4.6 4.6 0 00-6.49-6.51L12 6.53l-1.17-1.18a4.6 4.6 0 10-6.49 6.51L12 19.58z" fill="currentColor" fill-rule="evenodd"/></svg>'
                }), "true" === l ? (0, f.jsx)("div", {
                    className: "mt-xxsm ".concat(v.default.notificationIndicator)
                }) : null), (0, f.jsx)("div", {
                    className: "ml-std"
                }, n && n > 0 ? [(0, f.jsx)("div", {
                    key: "0"
                }, (0, f.jsx)(s.I18nMessageComponent, {
                    className: u.default.menuItemColor,
                    id: "site.header.notifications.haveSavedJobs",
                    values: {
                        count: n
                    },
                    markup: !0
                })), (0, f.jsx)("div", {
                    className: u.default.menuItemColor,
                    key: "1"
                }, h)] : [(0, f.jsx)("div", {
                    key: "0"
                }, (0, f.jsx)(s.I18nMessageComponent, {
                    className: u.default.menuItemColor,
                    id: "site.header.notifications.noSavedJobs",
                    markup: !0
                })), (0, f.jsx)("div", {
                    className: u.default.menuItemColor,
                    key: "1"
                }, p)])))
            };
        m.propTypes = {
            isMobileMenu: l.default.bool
        };
        var g = m;
        t.default = g
    },
    165: function (e, t, a) {
        e.exports = {
            drawerContainer: "drawer__DrawerStyles__drawerContainer",
            drawerHeader: "drawer__DrawerStyles__drawerHeader",
            drawerTitle: "drawer__DrawerStyles__drawerTitle",
            drawerContent: "drawer__DrawerStyles__drawerContent",
            drawerPositionTop: "drawer__DrawerStyles__drawerPositionTop",
            drawerPositionRight: "drawer__DrawerStyles__drawerPositionRight",
            drawerPositionBottom: "drawer__DrawerStyles__drawerPositionBottom",
            drawerPositionLeft: "drawer__DrawerStyles__drawerPositionLeft",
            drawerAnimation: "drawer__DrawerStyles__drawerAnimation",
            drawerAnimationActive: "drawer__DrawerStyles__drawerAnimationActive"
        }
    },
    166: function (e, t, a) {
        "use strict";
        var o = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        o(a(2));
        var n = o(a(3)),
            r = o(a(9)),
            l = o(a(26)),
            i = o(a(33)),
            s = o(a(165)),
            c = a(4),
            d = function (e) {
                var t = e.show,
                    a = e.position,
                    o = e.title,
                    n = e.titlePosition,
                    d = e.onBackButtonClicked,
                    u = e.onCloseButtonClicked,
                    v = e.children,
                    f = [],
                    h = "".concat(a.charAt(0).toUpperCase()).concat(a.substr(1));
                return f.push("d-flex flex-column ".concat(s.default.drawerContainer)), "none" !== a ? (f.push(s.default["drawerPosition".concat(h)]), f.push(s.default.drawerAnimation)) : f.push(s.default.drawerPositionLeft), t && f.push(s.default.drawerAnimationActive), (0, c.jsx)("div", {
                    className: f.join(" ")
                }, (0, c.jsx)("div", null, (0, c.jsx)("div", {
                    className: "col ".concat(l.default.bottomShadow)
                }, (0, c.jsx)("div", {
                    className: "d-flex align-items-center col px-std px-md-lg ".concat(s.default.drawerHeader)
                }, (0, c.jsx)("div", {
                    className: "col"
                }, (0, c.jsx)("div", {
                    className: "d-flex flex-row"
                }, d ? (0, c.jsx)("button", {
                    type: "button",
                    className: "p-0 ".concat(l.default.iconBtn),
                    onClick: d
                }, (0, c.jsx)(r.default, {
                    className: "d-flex ".concat(i.default.colorNavigation),
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.64 18.3L10.22 12l6.42-6.3a1.26 1.26 0 000-1.78 1.3 1.3 0 00-1.83 0l-7.53 7.37a1 1 0 000 1.41l7.53 7.39a1.3 1.3 0 001.83 0 1.26 1.26 0 000-1.78z" fill="currentColor" fill-rule="evenodd"/></svg>'
                })) : null, "left" === n ? (0, c.jsx)("span", {
                    className: d ? "ml-std" : ""
                }, (0, c.jsx)("div", {
                    className: l.default.h1
                }, o)) : null)), "center" === n ? (0, c.jsx)("div", {
                    className: "d-flex justify-content-center ".concat(s.default.drawerTitle)
                }, (0, c.jsx)("div", {
                    className: l.default.h1
                }, o)) : null, (0, c.jsx)("div", null, (0, c.jsx)("div", {
                    className: "d-flex flex-row"
                }, "right" === n ? (0, c.jsx)("span", {
                    className: "mr-std"
                }, (0, c.jsx)("div", {
                    className: l.default.h1
                }, o)) : null, u ? (0, c.jsx)("button", {
                    type: "button",
                    className: "p-0 ml-std ".concat(l.default.iconBtn),
                    onClick: u
                }, (0, c.jsx)(r.default, {
                    className: "d-flex ".concat(i.default.colorNavigation),
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.34 12l5.38-5.38a.95.95 0 00-1.34-1.34L12 10.66 6.62 5.28a.95.95 0 00-1.34 1.34L10.66 12l-5.38 5.38a.95.95 0 001.34 1.34L12 13.34l5.38 5.38a.95.95 0 001.34-1.34z" fill="currentColor" fill-rule="evenodd"/></svg>'
                })) : null))))), (0, c.jsx)("div", {
                    className: "d-flex flex-column col ".concat(s.default.drawerContent)
                }, v))
            };
        d.propTypes = {
            show: n.default.bool,
            position: n.default.oneOf(["none", "left", "right", "top", "bottom"]),
            children: n.default.node.isRequired,
            title: n.default.string,
            titlePosition: n.default.oneOf(["center", "left", "right"]),
            onBackButtonClicked: n.default.func,
            onCloseButtonClicked: n.default.func
        }, d.defaultProps = {
            show: !1,
            position: "none",
            title: "",
            titlePosition: "center",
            onBackButtonClicked: null,
            onCloseButtonClicked: null
        };
        var u = d;
        t.default = u
    },
    167: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(7)),
            l = o(a(2)),
            i = n(a(3)),
            s = function (e) {
                var t = e.ipLocationCountryId,
                    a = e.children,
                    o = (0, l.useState)(!1),
                    n = (0, r.default)(o, 2),
                    i = n[0],
                    s = n[1];
                return (0, l.useEffect)((function () {
                    1 === t && s(!0)
                }), []), i ? a : null
            };
        s.propTypes = {
            ipLocationCountryId: i.default.number,
            children: i.default.node
        }, s.defaultProps = {
            ipLocationCountryId: void 0,
            children: null
        };
        var c = s;
        t.default = c
    },
    172: function (e, t, a) {
        e.exports = {
            tooltipContentWrapper: "HeaderProfileTooltip__HeaderProfileTooltipStyles__tooltipContentWrapper"
        }
    },
    173: function (e, t, a) {
        "use strict";
        var o = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.generateSearchUrl = t.generateAutocompleteSuggestionUrl = void 0;
        var n = o(a(53)),
            r = o(a(23)),
            l = o(a(54)),
            i = a(787),
            s = a(42),
            c = a(40);

        function d(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, o)
            }
            return a
        }

        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? d(Object(a), !0).forEach((function (t) {
                    (0, r.default)(e, t, a[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : d(Object(a)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }))
            }
            return e
        }
        var v = {
                company_company: "/Overview/Working-at-EI_IE",
                company_reviews: "/Reviews/-Reviews-E",
                company_jobs: "/Jobs/-Jobs-E",
                company_salaries: "/Salary/-Salaries-E",
                company_interviews: "/Interview/-Interview-Questions-E"
            },
            f = {
                jobtitle_jobs: "/Job/jobs.htm?context=Jobs",
                jobtitle_salaries: "/Salaries/company-salaries.htm?context=Salary",
                jobtitle_interviews: "/Interview/job-interview-questions.htm?context=Interview",
                jobtitle_companies: "/Reviews/company-reviews.htm?context=Reviews",
                multicat_jobs: "/Job/jobs.htm?context=Jobs",
                multicat_salaries: "/Salaries/company-salaries.htm?context=Salary"
            },
            h = {
                "companies_company-explorer": "",
                jobs_search: "/Job/jobs.htm?",
                interviews_search: "/Interview/job-interview-questions.htm?context=Interview&",
                salaries_search: "/Salaries/company-salaries.htm?context=Salary&"
            },
            p = function () {
                var e = (0, l.default)(n.default.mark((function e() {
                    var t, a, o = arguments;
                    return n.default.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t = o.length > 0 && void 0 !== o[0] ? o[0] : {}, a = u({}, t), !t.name || t.type && t.id) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 5, (0, c.getLocationsByFullText)(t.name).then((function (e) {
                                    var t = e.locations;
                                    if (null != t && t.length) {
                                        var o = t[0];
                                        a = o
                                    }
                                }));
                            case 5:
                                return e.abrupt("return", a);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }(),
            m = function (e, t) {
                return i.companySearchLinkBuilder.build({
                    domain: "glassdoor.com",
                    host: window.location.origin,
                    location: null != e && e.id ? {
                        seoName: null == e ? void 0 : e.name,
                        locationId: "".concat(null == e ? void 0 : e.id),
                        locationType: null == e ? void 0 : e.type
                    } : void 0,
                    jobTitleSeoString: t
                })
            },
            g = function () {
                var e = (0, l.default)(n.default.mark((function e(t) {
                    var a, o, r, l, i, c, d, u, h, g, x, y = arguments;
                    return n.default.wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (a = y.length > 1 && void 0 !== y[1] ? y[1] : {}, "RECENT_SEARCHES" !== t.category) {
                                    e.next = 4;
                                    break
                                }
                                return o = t.data.searchUrl, e.abrupt("return", GD.util.appendToUrl(o, ["srs=".concat("RECENT_SEARCHES")]));
                            case 4:
                                if ("ALL_RESULTS" !== t.category) {
                                    e.next = 12;
                                    break
                                }
                                return r = "/Search/results.htm?keyword=".concat(encodeURIComponent(t.query)), e.next = 8, p(a);
                            case 8:
                                if (!(l = e.sent).id || !l.type) {
                                    e.next = 11;
                                    break
                                }
                                return e.abrupt("return", r.concat("&locId=".concat(l.id, "&locT=").concat(l.type, "&locName=").concat(encodeURIComponent(l.name || ""))));
                            case 11:
                                return e.abrupt("return", r);
                            case 12:
                                if (!v[t.searchType]) {
                                    e.next = 14;
                                    break
                                }
                                return e.abrupt("return", "".concat(v[t.searchType]).concat(t.employerId, ".htm"));
                            case 14:
                                if (i = "", !t.normalizedSuggestion) {
                                    e.next = 31;
                                    break
                                }
                                return e.next = 18, p(a);
                            case 18:
                                if (u = e.sent, "jobtitle_career" !== t.searchType) {
                                    e.next = 24;
                                    break
                                }
                                return u.id && u.name && window.sessionStorage && window.sessionStorage.setItem("userSelectedCareerLocation", JSON.stringify(u)), e.abrupt("return", (0, s.generateCareerOverviewUrl)(t.normalizedSuggestion));
                            case 24:
                                if ("jobtitle_companies" !== t.searchType || 1 !== (null === (c = getGdGlobals()) || void 0 === c || null === (d = c.page) || void 0 === d ? void 0 : d.domainId)) {
                                    e.next = 26;
                                    break
                                }
                                return e.abrupt("return", m(u, t.normalizedSuggestion));
                            case 26:
                                h = u.id ? "&locId=".concat(u.id, "&locT=").concat(u.type) : "", g = encodeURIComponent(t.normalizedSuggestion), x = "&suggestCount=0&suggestChosen=false&clickSource=searchBox&typedKeyword=".concat(g).concat(h, "&sc.keyword=").concat(g), i = (i = f[t.searchType] || "").concat(x);
                            case 31:
                                return e.abrupt("return", i);
                            case 32:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }();
        t.generateAutocompleteSuggestionUrl = g;
        var x = function () {
            var e = (0, l.default)(n.default.mark((function e() {
                var t, a, o, r, l, i, s, c = arguments;
                return n.default.wrap((function (e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return t = c.length > 0 && void 0 !== c[0] ? c[0] : "", a = c.length > 1 && void 0 !== c[1] ? c[1] : {}, o = c.length > 2 ? c[2] : void 0, r = c.length > 3 ? c[3] : void 0, l = "", e.next = 7, p(a);
                        case 7:
                            if (i = e.sent, !Object.keys(h).includes(o) || t !== r) {
                                e.next = 15;
                                break
                            }
                            if ("companies_company-explorer" !== o) {
                                e.next = 11;
                                break
                            }
                            return e.abrupt("return", m(i, t));
                        case 11:
                            s = "&suggestCount=0&suggestChosen=false&clickSource=searchBox", l = "".concat(h[o], "sc.keyword=").concat(encodeURIComponent(t)).concat(s), e.next = 16;
                            break;
                        case 15:
                            l = "jobs" === t.toLowerCase() ? "/Job/jobs.htm?suggestCount=0&suggestChosen=false&clickSource=searchBox" : "/Search/results.htm?keyword=".concat(encodeURIComponent(t));
                        case 16:
                            if (!i.id || !i.type) {
                                e.next = 18;
                                break
                            }
                            return e.abrupt("return", l.concat("&locId=".concat(i.id, "&locT=").concat(i.type, "&locName=").concat(encodeURIComponent(i.name || ""))));
                        case 18:
                            return e.abrupt("return", l);
                        case 19:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function () {
                return e.apply(this, arguments)
            }
        }();
        t.generateSearchUrl = x
    },
    177: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(6)),
            l = n(a(53)),
            i = n(a(54)),
            s = n(a(23)),
            c = n(a(7)),
            d = n(a(19)),
            u = o(a(2));
        a(96), a(55);
        var v = n(a(3)),
            f = n(a(79)),
            h = n(a(44)),
            p = n(a(9)),
            m = n(a(889)),
            g = a(66),
            x = a(35),
            y = a(890),
            w = a(120),
            b = a(891),
            j = a(4);

        function _(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, o)
            }
            return a
        }

        function C(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? _(Object(a), !0).forEach((function (t) {
                    (0, s.default)(e, t, a[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : _(Object(a)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }))
            }
            return e
        }
        var S = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.5 3a7.5 7.5 0 107.5 7.5A7.5 7.5 0 0010.5 3zm0-1a8.5 8.5 0 016.35 14.15l5 5a.5.5 0 010 .7.5.5 0 01-.71 0l-5-5A8.5 8.5 0 1110.5 2z" fill="currentColor" fill-rule="evenodd"/></svg>',
            N = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 6a.5.5 0 01.5.5v6l3.32 2.6a.49.49 0 01.06.7.51.51 0 01-.71.06L11.51 13V6.5A.5.5 0 0112 6zm0-3a9 9 0 109 9 9 9 0 00-9-9zm0-1A10 10 0 112 12 10 10 0 0112 2z" fill="#111" fill-rule="evenodd"/></svg>',
            k = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="prefix__cls-1" d="M12 3a9 9 0 11-9 9 9 9 0 019-9m0-1a10 10 0 1010 10A10 10 0 0012 2z"/><path class="prefix__cls-1" d="M7.05 17l7.07-2.83L17 7.05 9.88 9.88zm3.4-5.8l2.4 2.4-4 1.6zm3.1 1.7l-2.4-2.4 4-1.6zM12 7a.5.5 0 00.5-.5v-2a.5.5 0 00-1 0v2a.5.5 0 00.5.5zm0 10a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zm7.5-5.5h-2a.5.5 0 000 1h2a.5.5 0 000-1zm-13 0h-2a.5.5 0 000 1h2a.5.5 0 000-1z"/></svg>',
            I = {
                career: k,
                companies: S,
                interviews: k,
                jobs: S,
                recentSearch: N,
                salaries: k,
                searchAll: S
            },
            M = (0, j.jsx)(p.default, {
                className: "d-flex mr-std defaultCompanyLogo",
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90"><g fill="none" fill-rule="evenodd"><path stroke="#E7E7E7" d="M.5.5h89v89H.5z"/><g stroke="#999" stroke-width="2"><path stroke-linejoin="round" d="M64.826 16.104H69v63H21v-63h4.174"/><path stroke-linecap="round" stroke-linejoin="round" d="M34 57.104h22v22H34z"/><path d="M45 57.104v22"/><path d="M28 28.104h8v8h-8zm13 0h8v8h-8zm13 0h8v8h-8zm-26 14h8v8h-8zm13 0h8v8h-8zm13 0h8v8h-8zM26 10.104h38v12H26z" stroke-linecap="round" stroke-linejoin="round"/></g></g></svg>'
            }),
            A = (0, j.jsx)(p.default, {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.34 12l5.38-5.38a.95.95 0 00-1.34-1.34L12 10.66 6.62 5.28a.95.95 0 00-1.34 1.34L10.66 12l-5.38 5.38a.95.95 0 001.34 1.34L12 13.34l5.38 5.38a.95.95 0 001.34-1.34z" fill="currentColor" fill-rule="evenodd"/></svg>'
            }),
            E = function (e) {
                var t, a, o, n, v = e.name,
                    _ = e.value,
                    S = e.label,
                    k = e.className,
                    E = e.error,
                    P = e.disabled,
                    L = e.allowCreate,
                    T = e.onChange,
                    z = e.onBlur,
                    O = e.onFocus,
                    B = e.onError,
                    H = e.handleClear,
                    D = e.queryParamName,
                    K = e.tabIndex,
                    R = e.helperText,
                    U = e.type,
                    F = e.customOpts,
                    G = e.maxItems,
                    V = e.onQueryChange,
                    J = e.placeholder,
                    q = e.minQueryLength,
                    W = e.autoComplete,
                    Y = e.autoFocus,
                    X = e.ariaLabel,
                    Q = e.id,
                    Z = e.recentSearches,
                    $ = e.dataTestId,
                    ee = (e.disableOverlay, e.processSuggestionsCustom),
                    te = (0, d.default)(e, ["name", "value", "label", "className", "error", "disabled", "allowCreate", "onChange", "onBlur", "onFocus", "onError", "handleClear", "queryParamName", "tabIndex", "helperText", "type", "customOpts", "maxItems", "onQueryChange", "placeholder", "minQueryLength", "autoComplete", "autoFocus", "ariaLabel", "id", "recentSearches", "dataTestId", "disableOverlay", "processSuggestionsCustom"]),
                    ae = (0, u.useState)({
                        displayText: (null == _ ? void 0 : _.label) || "",
                        hovered: !1,
                        selectedElement: _
                    }),
                    oe = (0, c.default)(ae, 2),
                    ne = oe[0],
                    re = oe[1],
                    le = (0, u.useState)(!1),
                    ie = (0, c.default)(le, 2),
                    se = ie[0],
                    ce = ie[1],
                    de = (0, u.useState)(""),
                    ue = (0, c.default)(de, 2),
                    ve = ue[0],
                    fe = ue[1],
                    he = (0, u.useState)([]),
                    pe = (0, c.default)(he, 2),
                    me = pe[0],
                    ge = pe[1],
                    xe = (0, u.useRef)(!1),
                    ye = null === (t = GD) || void 0 === t || null === (a = t.util) || void 0 === a || null === (o = a.device) || void 0 === o ? void 0 : o.hh,
                    we = (0, m.default)((function (e) {
                        var t = C(C({}, w.sourceConfig[U].opts), F || {}),
                            a = t ? Object.keys(t).reduce((function (e, a) {
                                return "".concat(e + a, "=").concat(t[a], "&")
                            }), "") : "";
                        xe.current = new AbortController, fetch("".concat(w.sourceConfig[U].url, "&").concat(a).concat(D, "=").concat(encodeURIComponent(e)), {
                            signal: xe.current.signal
                        }).then((function (e) {
                            return e.json()
                        })).then((function (t) {
                            var a = t.slice(0, G),
                                o = ee ? ee(a, e) : a;
                            ge(o)
                        })).catch((function () {})).finally((function () {
                            xe.current = !1
                        }))
                    }), 200),
                    be = function (e) {
                        var t = e.target.value;
                        xe.current && xe.current.abort(), V && V(t), ce(!0), fe(t), t ? t.length < q ? ge([]) : we(t) : ge(Z)
                    },
                    je = function () {
                        var e = (0, i.default)(l.default.mark((function e(t) {
                            var a, o, n, r;
                            return l.default.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a = F && F.idProp || w.sourceConfig[U].opts && w.sourceConfig[U].opts.idProp || "id", o = me.findIndex((function (e) {
                                                return e[a] === t
                                            })), n = o >= 0 ? me[o] : null, r = ve, n && (r = n.label), re(C(C({}, ne), {}, {
                                                displayText: "",
                                                hovered: !1,
                                                selectedElement: onchange ? n : ne.selectedElement
                                            })), fe(r), ge([]), !T) {
                                            e.next = 12;
                                            break
                                        }
                                        document.activeElement.blur(), e.next = 13;
                                        break;
                                    case 12:
                                        return e.abrupt("return");
                                    case 13:
                                        if (n) {
                                            e.next = 18;
                                            break
                                        }
                                        return e.next = 16, T((0, s.default)({
                                            label: ve
                                        }, a, null));
                                    case 16:
                                        e.next = 21;
                                        break;
                                    case 18:
                                        if (_ && _[a] === t) {
                                            e.next = 21;
                                            break
                                        }
                                        return e.next = 21, T(n);
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    _e = function () {
                        re(C(C({}, ne), {}, {
                            displayText: "",
                            hovered: !1
                        }))
                    },
                    Ce = ne.displayText,
                    Se = F && F.idProp || w.sourceConfig[U].opts && w.sourceConfig[U].opts.idProp || "id",
                    Ne = Ce || ve;
                return Ne || se || !_ || _[Se] || (Ne = _.label), Array.isArray(Ne) && Ne.length && (Ne = Ne[0].label), (0, j.jsx)(u.default.Fragment, null, (0, j.jsx)(f.default, {
                    className: k,
                    disabled: P,
                    focused: se,
                    helperText: R,
                    label: S,
                    labelFor: Q,
                    tabIndex: P ? null : K
                }, (0, j.jsx)(b.StyledAutocomplete, (0, r.default)({}, te, {
                    "aria-autocomplete": "list",
                    "aria-expanded": !0,
                    disabled: P,
                    error: E,
                    focused: se,
                    onBlur: function (e) {
                        e.persist();
                        var t = ne.selectedElement,
                            a = F && F.idProp || w.sourceConfig[U].opts && w.sourceConfig[U].opts.idProp || "id",
                            o = new CustomEvent("toggleSearchFocusOverlay", {
                                detail: {
                                    showSearchFocusOverlay: !1
                                }
                            });
                        window.dispatchEvent(o), (0, g.unlockSearchPage)(), re(C(C({}, ne), {}, {
                            displayText: "",
                            hovered: !1
                        })), ce(!1), "" === ve && T && null != t && t.label && (T((0, s.default)({
                            label: ""
                        }, a, null)), re(C(C({}, ne), {}, {
                            selectedElement: void 0
                        }))), e.currentTarget.contains(e.relatedTarget) || (t || (L ? je() : e.target.value && B({
                            localizedErrorKey: "autocomplete.selectAValidOption",
                            value: e.target.value,
                            suggestions: me
                        })), z(e))
                    },
                    onFocus: function (e) {
                        if ("button" !== e.target.type) {
                            var t = new CustomEvent("toggleSearchFocusOverlay", {
                                detail: {
                                    showSearchFocusOverlay: !0
                                }
                            });
                            window.dispatchEvent(t), (0, g.lockSearchPage)(), ce(!0), _ && !ve && fe(_.label), be(e), O(e)
                        }
                    },
                    onKeyDown: function (e) {
                        var t = ne.hovered,
                            a = F && F.idProp || w.sourceConfig[U].opts && w.sourceConfig[U].opts.idProp || "id";
                        if ([y.KEYS.UP, y.KEYS.DOWN].indexOf(e.keyCode) > -1 && me && me.length > 0) {
                            var o = me.findIndex((function (e) {
                                return e[a] === t
                            })) || 0;
                            e.keyCode === y.KEYS.DOWN && (re(C(C({}, ne), {}, {
                                displayText: me[(o + 1) % me.length].label,
                                hovered: me[(o + 1) % me.length][a]
                            })), e.preventDefault()), e.keyCode === y.KEYS.UP && (re(C(C({}, ne), {}, {
                                displayText: me[o > 0 ? o - 1 : me.length - 1].label,
                                hovered: me[o > 0 ? o - 1 : me.length - 1][a]
                            })), e.preventDefault())
                        }
                        if ((0, y.isKeyboardClickEvent)(e) && t && y.KEYS.SPACEBAR !== e.keyCode && (e.preventDefault(), je(t)), [y.KEYS.ESCAPE, y.KEYS.BACKSPACE].indexOf(e.keyCode) > -1)
                            if (y.KEYS.ESCAPE === e.keyCode) {
                                re(C(C({}, ne), {}, {
                                    displayText: "",
                                    hovered: !1
                                })), ce(!1);
                                var n = new CustomEvent("toggleSearchFocusOverlay", {
                                    detail: {
                                        showSearchFocusOverlay: !1
                                    }
                                });
                                window.dispatchEvent(n), (0, g.unlockSearchPage)()
                            } else _e()
                    },
                    role: "combobox"
                }), (0, j.jsx)(h.default, {
                    ariaLabel: X || S,
                    autoComplete: W,
                    autoFocus: Y,
                    dataTestId: $,
                    disabled: P,
                    error: E,
                    id: Q,
                    maxLength: 128,
                    name: v,
                    onChange: be,
                    placeholder: J,
                    value: (se ? ve : Ne) || ""
                }), (se || ye) && (null != ve && ve.length || null !== (n = Ne) && void 0 !== n && n.length) ? (0, j.jsx)(b.StyledClearButton, {
                    "aria-label": "Clear",
                    onClick: function () {
                        document.getElementById(Q).value = "", (0, x.trackClickEvent)("sc.keyword" === Q || "scKeyword" === Q ? "keyword" : "location", "search-clear"), xe.current && xe.current.abort(), re(C(C({}, ne), {}, {
                            displayText: "",
                            hovered: !1,
                            selectedElement: null
                        })), fe(""), ge(Z), H()
                    },
                    onMouseDown: ye ? null : function (e) {
                        e.preventDefault()
                    },
                    role: "button"
                }, A) : null, (0 === (null == ve ? void 0 : ve.length) && "keyword" === U || (null == ve ? void 0 : ve.length) > 2) && null != me && me.length ? (0, j.jsx)("ul", {
                    className: "py-xsm suggestions",
                    onBlur: _e,
                    onMouseOut: _e
                }, me.map((function (e) {
                    return function (e) {
                        var t = ne.hovered,
                            a = F && F.idProp || w.sourceConfig[U].opts && w.sourceConfig[U].opts.idProp || "id",
                            o = e.suggestion || e.label || e.keyword,
                            n = new RegExp("(".concat(ve ? ve.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&") : "", ")"), "i"),
                            r = o.split(n);
                        return (0, j.jsx)(u.default.Fragment, {
                            key: "".concat(o, "_").concat(e[a])
                        }, e.sectionHead ? (0, j.jsx)("div", {
                            className: "d-flex px-std py-xxsm"
                        }, (0, j.jsx)("span", {
                            className: "d-flex align-items-center"
                        }, (0, j.jsx)("strong", null, e.sectionHead))) : null, (0, j.jsx)("li", {
                            className: "d-flex m-0 p-0"
                        }, (0, j.jsx)("div", {
                            className: "px-std py-sm py-lg-xsm ".concat(t === e[a] ? "hovered" : ""),
                            onMouseOver: function () {
                                return re(C(C({}, ne), {}, {
                                    displayText: "",
                                    hovered: e[a]
                                }))
                            },
                            onFocus: function () {
                                return re(C(C({}, ne), {}, {
                                    displayText: "",
                                    hovered: e[a]
                                }))
                            },
                            onMouseDown: function (t) {
                                t.preventDefault(), je(e[a])
                            },
                            role: "presentation"
                        }, (0, j.jsx)("div", {
                            className: "d-flex align-items-start"
                        }, e.employerId && "-1" !== e.employerId ? e.logoUrl && " " !== e.logoUrl ? (0, j.jsx)("span", {
                            className: "logo"
                        }, (0, j.jsx)("img", {
                            className: "d-block",
                            src: "https://media.glassdoor.com/".concat(e.logoUrl),
                            alt: e.suggestion
                        })) : M : null, e.iconKey && !e.logoUrl || "RECENT_SEARCHES" === e.category ? (0, j.jsx)(p.default, {
                            className: "d-flex mr-std suggestionIcon",
                            svg: "RECENT_SEARCHES" === e.category ? N : I[e.iconKey]
                        }) : null, (0, j.jsx)("div", {
                            className: "suggestionLabel"
                        }, (0, j.jsx)("span", null, "RECENT_SEARCHES" === e.category || "POPULAR_SEARCHES" === e.category || "ALL_RESULTS" === e.category ? o : [r[0], (0, j.jsx)("b", {
                            key: "1"
                        }, r[1]), r[2]]))))))
                    }(e)
                }))) : null)))
            };
        E.defaultProps = {
            name: "Autocomplete",
            value: null,
            label: "",
            className: "",
            error: "",
            disabled: !1,
            allowCreate: !1,
            onChange: function () {},
            onBlur: function () {},
            onFocus: function () {},
            onError: function () {},
            handleClear: function () {},
            queryParamName: "term",
            tabIndex: 0,
            helperText: "",
            type: "keyword",
            customOpts: null,
            maxItems: 8,
            onQueryChange: null,
            placeholder: "",
            minQueryLength: 3,
            autoComplete: "off",
            autoFocus: null,
            ariaLabel: "",
            id: null,
            recentSearches: [],
            dataTestId: "",
            disableOverlay: !1,
            processSuggestionsCustom: null
        }, E.propTypes = {
            name: v.default.string,
            value: v.default.oneOfType([v.default.object, v.default.arrayOf(v.default.object)]),
            label: v.default.node,
            className: v.default.string,
            error: v.default.string,
            disabled: v.default.bool,
            allowCreate: v.default.bool,
            onChange: v.default.func,
            onBlur: v.default.func,
            onFocus: v.default.func,
            onError: v.default.func,
            handleClear: v.default.func,
            queryParamName: v.default.string,
            tabIndex: v.default.number,
            helperText: v.default.string,
            type: v.default.oneOf(["keyword", "location"]),
            customOpts: v.default.object,
            maxItems: v.default.number,
            onQueryChange: v.default.func,
            placeholder: v.default.string,
            minQueryLength: v.default.number,
            autoComplete: v.default.string,
            autoFocus: v.default.bool,
            ariaLabel: v.default.string,
            id: v.default.string,
            recentSearches: v.default.arrayOf(v.default.object),
            dataTestId: v.default.string,
            disableOverlay: v.default.bool,
            processSuggestionsCustom: v.default.func
        };
        var P = E;
        t.default = P
    },
    2: function (e, t) {
        e.exports = React
    },
    24: function (e, t) {
        e.exports = ReactDOM
    },
    26: function (e, t, a) {
        e.exports = {
            pageLock: "siteHeader__HeaderStyles__pageLock",
            navigationBackground: "siteHeader__HeaderStyles__navigationBackground",
            relativePosition: "siteHeader__HeaderStyles__relativePosition",
            justifyContentEvenly: "siteHeader__HeaderStyles__justifyContentEvenly",
            menu: "siteHeader__HeaderStyles__menu",
            list: "siteHeader__HeaderStyles__list",
            bottomShadow: "siteHeader__HeaderStyles__bottomShadow",
            bottomBorder: "siteHeader__HeaderStyles__bottomBorder",
            navigationItem: "siteHeader__HeaderStyles__navigationItem",
            activeNavigationItem: "siteHeader__HeaderStyles__activeNavigationItem",
            primaryNavigation: "siteHeader__HeaderStyles__primaryNavigation",
            activeMenuItem: "siteHeader__HeaderStyles__activeMenuItem",
            navigationWrapper: "siteHeader__HeaderStyles__navigationWrapper",
            navigationScroll: "siteHeader__HeaderStyles__navigationScroll",
            secondaryNavigation: "siteHeader__HeaderStyles__secondaryNavigation",
            secondaryNavigationItem: "siteHeader__HeaderStyles__secondaryNavigationItem",
            activeButton: "siteHeader__HeaderStyles__activeButton",
            iconBtn: "siteHeader__HeaderStyles__iconBtn",
            mainNav: "siteHeader__HeaderStyles__mainNav",
            brandLogoContainer: "siteHeader__HeaderStyles__brandLogoContainer",
            brandLogo: "siteHeader__HeaderStyles__brandLogo",
            notificationBadge: "siteHeader__HeaderStyles__notificationBadge",
            h1: "siteHeader__HeaderStyles__h1",
            mobileAvatar: "siteHeader__HeaderStyles__mobileAvatar",
            searchNavigation: "siteHeader__HeaderStyles__searchNavigation",
            searchNavigationItem: "siteHeader__HeaderStyles__searchNavigationItem",
            searchNavigationBtn: "siteHeader__HeaderStyles__searchNavigationBtn",
            stickyWrapper: "siteHeader__HeaderStyles__stickyWrapper",
            sticky: "siteHeader__HeaderStyles__sticky",
            stickyInner: "siteHeader__HeaderStyles__stickyInner",
            signInButton: "siteHeader__HeaderStyles__signInButton"
        }
    },
    27: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.trackClickEvent = t.trackEventInGA = void 0;
        var o = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "sd-header",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            "undefined" != typeof window && GD.ga && GD.ga.trackEvent(e, t, a, o, n)
        };
        t.trackEventInGA = o;
        t.trackClickEvent = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 ? arguments[1] : void 0,
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sd-header";
            o(a, "click-".concat(t), e, null, !1)
        }
    },
    28: function (e, t, a) {
        e.exports = {
            iconBtn: "search__SearchStyles__iconBtn",
            colorDefault: "search__SearchStyles__colorDefault",
            colorActive: "search__SearchStyles__colorActive",
            colorNavigation: "search__SearchStyles__colorNavigation",
            justifyContentEvenly: "search__SearchStyles__justifyContentEvenly",
            list: "search__SearchStyles__list",
            pageLock: "search__SearchStyles__pageLock",
            searchPageLock: "search__SearchStyles__searchPageLock",
            screenTakeOver: "search__SearchStyles__screenTakeOver",
            searchForm: "search__SearchStyles__searchForm",
            searchBarLocationInput: "search__SearchStyles__searchBarLocationInput",
            searchKeywordContainer: "search__SearchStyles__searchKeywordContainer",
            searchIcon: "search__SearchStyles__searchIcon",
            searchFormInputContainer: "search__SearchStyles__searchFormInputContainer",
            searchKeywordInput: "search__SearchStyles__searchKeywordInput",
            condensedPlaceholder: "search__SearchStyles__condensedPlaceholder",
            searchDropdown: "search__SearchStyles__searchDropdown",
            searchLocationContainer: "search__SearchStyles__searchLocationContainer",
            searchLocationInput: "search__SearchStyles__searchLocationInput",
            searchInputLabel: "search__SearchStyles__searchInputLabel",
            searchKeywordSubmit: "search__SearchStyles__searchKeywordSubmit",
            searchFormContainer: "search__SearchStyles__searchFormContainer",
            searchFormTitle: "search__SearchStyles__searchFormTitle",
            searchFormTitleActive: "search__SearchStyles__searchFormTitleActive",
            searchMenuCloseBtn: "search__SearchStyles__searchMenuCloseBtn",
            searchMenuContainer: "search__SearchStyles__searchMenuContainer",
            searchMenuContent: "search__SearchStyles__searchMenuContent",
            searchMenuListingItem: "search__SearchStyles__searchMenuListingItem",
            plain: "search__SearchStyles__plain",
            newSearchButton: "search__SearchStyles__newSearchButton",
            searchButtonIcon: "search__SearchStyles__searchButtonIcon",
            searchButtonText: "search__SearchStyles__searchButtonText",
            searchButton: "search__SearchStyles__searchButton"
        }
    },
    3: function (e, t) {
        e.exports = PropTypes
    },
    32: function (e, t, a) {
        "use strict";
        var o = a(1),
            n = a(5);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = t.MenuContextProvider = void 0;
        var r = n(a(2)),
            l = o(a(3)),
            i = a(4),
            s = (0, r.createContext)(),
            c = function (e) {
                var t = e.value,
                    a = e.children;
                return (0, i.jsx)(s.Provider, {
                    value: t
                }, a)
            };
        t.MenuContextProvider = c, c.propTypes = {
            value: l.default.object,
            children: l.default.node.isRequired
        }, c.defaultProps = {
            value: {}
        };
        var d = s;
        t.default = d
    },
    33: function (e, t, a) {
        e.exports = {
            colorDefault: "icon__IconStyles__colorDefault",
            colorActive: "icon__IconStyles__colorActive",
            colorNavigation: "icon__IconStyles__colorNavigation"
        }
    },
    35: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.trackClickEventDeferred = t.trackEventDeferred = t.trackClickEvent = t.trackEventInGA = void 0;
        var o = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "sd-header",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            "undefined" != typeof window && GD.ga && GD.ga.trackEvent(e, t, a, o, n)
        };
        t.trackEventInGA = o;
        t.trackClickEvent = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 ? arguments[1] : void 0,
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sd-header";
            o(a, "click-".concat(t), e, null, !1)
        };
        var n = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "sd-header",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            "undefined" != typeof window && GD.ga && GD.ga.trackEventDeferred(e, t, a, o, n)
        };
        t.trackEventDeferred = n;
        t.trackClickEventDeferred = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 ? arguments[1] : void 0,
                a = arguments.length > 2 ? arguments[2] : void 0;
            n(a, "click-".concat(t), e, null, !1)
        }
    },
    36: function (e, t, a) {
        "use strict";
        var o = a(1),
            n = a(5);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = t.AppContextProvider = void 0;
        var r = n(a(2)),
            l = o(a(3)),
            i = a(4),
            s = (0, r.createContext)(),
            c = function (e) {
                var t = e.id,
                    a = e.type,
                    o = e.subType,
                    n = e.occupation,
                    r = e.origOccupation,
                    l = e.location,
                    c = e.tldId,
                    d = e.legacyPageWidth,
                    u = e.isNewSiteHeader,
                    v = e.children;
                return (0, i.jsx)(s.Provider, {
                    value: {
                        id: t || "".concat(a, "_").concat(o),
                        type: a,
                        subType: o,
                        occupation: n,
                        origOccupation: r,
                        location: l,
                        tldId: c,
                        legacyPageWidth: d,
                        isNewSiteHeader: u
                    }
                }, v)
            };
        t.AppContextProvider = c, c.propTypes = {
            id: l.default.string,
            type: l.default.string,
            subType: l.default.string,
            occupation: l.default.string,
            origOccupation: l.default.string,
            isNewSiteHeader: l.default.bool,
            location: l.default.object,
            tldId: l.default.number,
            legacyPageWidth: l.default.bool,
            children: l.default.node
        }, c.defaultProps = {
            id: "",
            type: "jobs",
            subType: "",
            occupation: "",
            origOccupation: "",
            isNewSiteHeader: !1,
            location: {
                id: 0,
                name: "",
                type: ""
            },
            tldId: 1,
            legacyPageWidth: !1,
            children: null
        };
        var d = s;
        t.default = d
    },
    37: function (e, t, a) {
        e.exports = {
            bottomShadow: "careerOverviewNav__CareerOverviewNavStyles__bottomShadow",
            bottomBorder: "careerOverviewNav__CareerOverviewNavStyles__bottomBorder",
            navigationBackground: "careerOverviewNav__CareerOverviewNavStyles__navigationBackground",
            legacyPageWidth: "careerOverviewNav__CareerOverviewNavStyles__legacyPageWidth",
            navigationItem: "careerOverviewNav__CareerOverviewNavStyles__navigationItem",
            activeNavigationItem: "careerOverviewNav__CareerOverviewNavStyles__activeNavigationItem",
            navigationScroll: "careerOverviewNav__CareerOverviewNavStyles__navigationScroll",
            secondaryNavigation: "careerOverviewNav__CareerOverviewNavStyles__secondaryNavigation",
            secondaryNavigationItem: "careerOverviewNav__CareerOverviewNavStyles__secondaryNavigationItem",
            stickyWrapper: "careerOverviewNav__CareerOverviewNavStyles__stickyWrapper",
            sticky: "careerOverviewNav__CareerOverviewNavStyles__sticky",
            stickyInner: "careerOverviewNav__CareerOverviewNavStyles__stickyInner",
            activeButton: "careerOverviewNav__CareerOverviewNavStyles__activeButton",
            h1: "careerOverviewNav__CareerOverviewNavStyles__h1",
            h2: "careerOverviewNav__CareerOverviewNavStyles__h2",
            hamburgerNavContainer: "careerOverviewNav__CareerOverviewNavStyles__hamburgerNavContainer",
            hamburgerBtn: "careerOverviewNav__CareerOverviewNavStyles__hamburgerBtn",
            hamburgerNavActive: "careerOverviewNav__CareerOverviewNavStyles__hamburgerNavActive",
            breadcrumbIcon: "careerOverviewNav__CareerOverviewNavStyles__breadcrumbIcon",
            employerBtn: "careerOverviewNav__CareerOverviewNavStyles__employerBtn",
            activeMenuItem: "careerOverviewNav__CareerOverviewNavStyles__activeMenuItem",
            careerNavigation: "careerOverviewNav__CareerOverviewNavStyles__careerNavigation"
        }
    },
    38: function (e, t, a) {
        "use strict";
        var o = a(1),
            n = a(5);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = t.ExceptionStateStateConsumer = t.AppContextProvider = void 0;
        var r = n(a(2)),
            l = o(a(3)),
            i = a(4),
            s = (0, r.createContext)(),
            c = function (e) {
                var t = e.id,
                    a = e.type,
                    o = e.subType,
                    n = e.searchKeyword,
                    r = e.searchLocation,
                    l = e.careerNavProps,
                    c = e.showCareerNavigation,
                    d = e.showSearchBoxV1,
                    u = e.isCareerEnabled,
                    v = e.profilePhotoRelativeUrl,
                    f = e.isLoggedIn,
                    h = e.children;
                return (0, i.jsx)(s.Provider, {
                    value: {
                        id: t || "".concat(a, "_").concat(o),
                        type: a,
                        subType: o,
                        searchKeyword: n,
                        searchLocation: r,
                        showNotificationsMainNavigation: !0,
                        careerNavProps: l,
                        showHeroHeader: "member" === t && "home" === a,
                        hideSearch: "home" === o,
                        showCareerNavigation: c,
                        showSearchBoxV1: d,
                        profilePhotoRelativeUrl: v,
                        isCareerEnabled: u,
                        isLoggedIn: f
                    }
                }, h)
            };
        t.AppContextProvider = c, c.propTypes = {
            id: l.default.string,
            type: l.default.string,
            subType: l.default.string,
            searchKeyword: l.default.string,
            searchLocation: l.default.shape({
                id: l.default.number,
                type: l.default.string,
                name: l.default.string
            }),
            careerNavProps: l.default.object,
            showCareerNavigation: l.default.bool,
            profilePhotoRelativeUrl: l.default.string,
            isCareerEnabled: l.default.bool,
            isLoggedIn: l.default.bool,
            children: l.default.node
        }, c.defaultProps = {
            id: "",
            type: "jobs",
            subType: "",
            searchKeyword: "",
            searchLocation: {
                id: 0,
                type: "",
                name: ""
            },
            careerNavProps: {
                occupation: "",
                location: {
                    id: 0,
                    name: ""
                }
            },
            showCareerNavigation: !1,
            profilePhotoRelativeUrl: "",
            isCareerEnabled: !1,
            isLoggedIn: !1
        };
        var d = s.Consumer;
        t.ExceptionStateStateConsumer = d;
        var u = s;
        t.default = u
    },
    39: function (e, t, a) {
        "use strict";
        var o = a(1),
            n = a(5);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = t.ExceptionStateStateConsumer = t.SearchContextProvider = void 0;
        var r = n(a(2)),
            l = o(a(3)),
            i = a(4),
            s = (0, r.createContext)(),
            c = function (e) {
                var t = e.id,
                    a = e.type,
                    o = e.subType,
                    n = e.searchKeyword,
                    r = e.searchLocation,
                    l = e.hideSearch,
                    c = e.useMemberSearch,
                    d = e.isCareerEnabled,
                    u = e.children;
                return (0, i.jsx)(s.Provider, {
                    value: {
                        id: t || "".concat(a, "_").concat(o),
                        type: a,
                        subType: o,
                        searchKeyword: n,
                        searchLocation: r,
                        hideSearch: l,
                        useMemberSearch: c,
                        isCareerEnabled: d
                    }
                }, u)
            };
        t.SearchContextProvider = c, c.propTypes = {
            id: l.default.string,
            type: l.default.string,
            subType: l.default.string,
            searchKeyword: l.default.string,
            searchLocation: l.default.shape({
                id: l.default.number,
                type: l.default.string,
                name: l.default.string
            }),
            hideSearch: l.default.bool,
            useMemberSearch: l.default.bool,
            isCareerEnabled: l.default.bool,
            children: l.default.node
        }, c.defaultProps = {
            id: "",
            type: "jobs",
            subType: "",
            searchKeyword: "",
            searchLocation: {
                id: 0,
                type: "",
                name: ""
            },
            hideSearch: !1,
            useMemberSearch: !0,
            isCareerEnabled: !1,
            children: (0, i.jsx)("div", null)
        };
        var d = s.Consumer;
        t.ExceptionStateStateConsumer = d;
        var u = s;
        t.default = u
    },
    40: function (e, t, a) {
        "use strict";
        var o = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getLocationsByFullText = t.filterFormContextByType = t.filterLocationSource = t.filterJobTitleSource = t.listAllSavedJobsJson = t.getPopularLocation = t.clickSearchSuggestion = t.getSearchSuggestion = t.getRecentSearches = t.parseAndFilterRecentSearches = t.getPopularSearches = t.getRandomFromArray = t.shuffle = t.createAutocomplete = void 0;
        var n = o(a(7)),
            r = o(a(31)),
            l = o(a(55)),
            i = o(a(146)),
            s = o(a(45)),
            c = a(103);
        t.createAutocomplete = function (e, t, a) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {},
                n = arguments.length > 4 ? arguments[4] : void 0,
                r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 3,
                l = $("#".concat(e)),
                s = document.getElementById(t),
                c = new i.default({
                    selector: s,
                    parentElement: s.parentElement,
                    source: a,
                    returnFormat: n,
                    minChars: r,
                    delay: 200,
                    cache: !1,
                    onSelect: o,
                    skipFocusEvent: !0
                });
            return l.data("".concat(t, "Autocomplete"), c), c
        };
        var d = function () {
            for (var e, t, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], o = (0, r.default)(a), n = o.length; 0 !== n;) t = Math.floor(Math.random() * n), e = o[n -= 1], o[n] = o[t], o[t] = e;
            return o
        };
        t.shuffle = d;
        var u = function (e, t) {
            return d(t).splice(0, e)
        };
        t.getRandomFromArray = u;
        t.getPopularSearches = function (e) {
            var t = (null == e ? void 0 : e.slice(0, 2)) || "en";
            return u(5, c.popularJobTitles[t])
        };
        var v = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = e.reduce((function (e) {
                    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", a = {}, o = t.split("|"), r = (0, n.default)(o, 2), l = r[0], i = r[1], s = l.split("&"), c = 0; c < s.length; c++) {
                        var d = s[c].split("="),
                            u = (0, n.default)(d, 2),
                            v = u[0],
                            f = u[1];
                        if ("sc.keyword" === v && !f) return e;
                        switch (v) {
                            case "sc.keyword":
                                a.keyword = f;
                                break;
                            case "locId":
                                a.locationId = parseInt(f, 10);
                                break;
                            case "locT":
                                a.locationType = f;
                                break;
                            case "locKeyword":
                                a.locationName = f
                        }
                    }
                    return e.push(Object.assign({}, a, {
                        searchUrl: i
                    })), e
                }), []);
            return t.slice(0, 15)
        };
        t.parseAndFilterRecentSearches = v;
        t.getRecentSearches = function () {
            var e = window.GDStorage,
                t = (void 0 === e ? {} : e).getVal,
                a = (void 0 === t ? function () {
                    return []
                } : t)("RECENT_SEARCHES") || [];
            return v(a)
        };
        t.getSearchSuggestion = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                a = new Headers({
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-Glassdoor-Cors": ""
                });
            return (0, l.default)("/searchsuggest/typeahead?source=".concat(document.getElementById(t).context.value, "&version=New&rf=full&input=").concat(encodeURIComponent(e)), {
                method: "GET",
                headers: a,
                credentials: "include",
                mode: "no-cors"
            }).then((function (e) {
                return e.json()
            }))
        };
        t.clickSearchSuggestion = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                o = new Headers({
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-Glassdoor-Cors": ""
                });
            return (0, l.default)("/searchsuggest/typeahead/click?source=".concat(document.getElementById(t).context.value, "&version=New&input=").concat(e, "&sk=").concat(a), {
                method: "GET",
                headers: o,
                credentials: "include",
                mode: "no-cors"
            })
        };
        t.getPopularLocation = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                a = new Headers({
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-Glassdoor-Cors": ""
                });
            return (0, l.default)("/findPopularLocationAjax.htm?term=".concat(e, "&maxLocationsToReturn=").concat(t), {
                method: "GET",
                headers: a,
                credentials: "include",
                mode: "no-cors"
            }).then((function (e) {
                return e.json()
            }))
        };
        t.listAllSavedJobsJson = function () {
            var e = new Headers({
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Glassdoor-Cors": ""
            });
            return (0, l.default)("/Job/json/listAllSavedJobsJson.htm?hook=ACCOUNT_SAVEDJOBS", {
                method: "GET",
                headers: e,
                credentials: "include",
                mode: "no-cors"
            }).then((function (e) {
                return e.json()
            }))
        };
        t.filterJobTitleSource = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0,
                a = [],
                o = [],
                n = [];
            return e.forEach((function (e) {
                switch (e.category) {
                    case "company":
                        a.push(Object.assign({}, e, {
                            sectionHead: a.length ? "" : t.msg("site.header.search.suggest.companies"),
                            logoUrl: ""
                        }));
                        break;
                    case "jobtitle":
                        o.push(Object.assign({}, e, {
                            sectionHead: o.length ? "" : t.msg("site.header.search.suggest.jobTitles"),
                            logoUrl: ""
                        }));
                        break;
                    default:
                        n.push(Object.assign({}, e, {
                            sectionHead: n.length ? "" : t.msg("site.header.search.suggest.other"),
                            logoUrl: ""
                        }))
                }
            })), [].concat(a, o, n)
        };
        t.filterLocationSource = function (e) {
            return e.forEach((function (e) {
                var t = e.locationType,
                    a = void 0 === t ? "" : t,
                    o = e.locationId,
                    n = void 0 === o ? 0 : o;
                e.value = "".concat(a, "_").concat(n)
            })), e
        };
        t.filterFormContextByType = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = {
                    formContext: s.default[0],
                    index: 0
                };
            return e && s.default.forEach((function (a, o) {
                a.type === e && (t.formContext = a, t.index = o)
            })), t
        };
        t.getLocationsByFullText = function (e) {
            var t = [],
                a = new Headers({});
            return t.push("locationSearchString=".concat(e)), t.push("allowPostalCodes=true"), (0, l.default)("/util/ajax/findLocationsByFullText.htm?".concat(t.join("&")), {
                method: "GET",
                headers: a,
                credentials: "include",
                mode: "no-cors"
            }).then((function (e) {
                return e.json()
            }))
        }
    },
    41: function (e, t, a) {
        "use strict";

        function o() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 ? arguments[1] : void 0;
            if (t && t instanceof Array)
                for (var a = 0; a < t.length; a++) e += e.indexOf("?") < 0 ? "?" + t[a] : "&" + t[a];
            return e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.handleDisableSpotlightDemoClick = t.initDisableSpotlightDemo = t.handleToggleJobDetails = t.initJobDetails = t.generateMenuItemProps = void 0;
        t.generateMenuItemProps = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {},
                a = e.link,
                n = e.target,
                r = e.rel,
                l = e.gaLabel,
                i = e.testLabel,
                s = e.tracking,
                c = void 0 === s ? {} : s,
                d = c.TYPE,
                u = c.SOURCE,
                v = (c.CMPGN, a || ""),
                f = t;
            d && u && v && (f = function (e) {
                e.currentTarget.href = o(e.currentTarget.href, ["".concat(d, "=").concat(u)]), t(e)
            });
            var h = {
                href: v,
                target: n,
                rel: r,
                onClick: f
            };
            return Object.keys(c).forEach((function (e) {
                h["data-track-".concat(e.toLowerCase())] = c[e]
            })), l && (h["data-ga-lbl"] = l), i && (h["data-test"] = i), h
        };
        t.initJobDetails = function (e, t) {
            var a = window.GDStorage.getJobsDetailsToggle(GD.page.userId),
                o = document.querySelectorAll(".adminCpcVal"),
                n = document.querySelectorAll(".adminJobInfo"),
                r = e;
            return a ? (o.forEach((function (e) {
                e.classList.remove("hidden"), e.classList.remove("d-none")
            })), n.forEach((function (e) {
                e.classList.remove("hidden"), e.classList.remove("d-none")
            }))) : r = t, r
        };
        t.handleToggleJobDetails = function (e, t) {
            var a = window.GDStorage.getJobsDetailsToggle(GD.page.userId),
                o = document.querySelectorAll(".adminCpcVal"),
                n = e;
            return a ? (o.forEach((function (e) {
                e.classList.add("hidden"), e.classList.add("d-none")
            })), n = t) : o.forEach((function (e) {
                e.classList.remove("hidden"), e.classList.remove("d-none")
            })), window.GDStorage.setJobsDetailsToggle(GD.page.userId, !a), n
        };
        t.initDisableSpotlightDemo = function () {
            var e = "";
            if (window.GDStorage && window.GDStorage.isSupported()) {
                var t = window.GDStorage.getVal("GD_SpotlightAdPreviewer");
                t && !t.isSpotlightPreviewerEnabled || (e = "d-none")
            }
            return e
        };
        t.handleDisableSpotlightDemoClick = function () {
            var e = "";
            if (window.GDStorage && window.GDStorage.isSupported()) {
                var t = window.GDStorage.getVal("GD_SpotlightAdPreviewer");
                t && !t.isSpotlightPreviewerEnabled || (window.GDStorage.setVal("GD_SpotlightAdPreviewer", {
                    isSpotlightPreviewerEnabled: !1
                }), e = "d-none")
            }
            return e
        }
    },
    42: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.generateInterviewUrl = t.generateSalaryUrl = t.generateResumeUrl = t.generateCareerPathUrl = t.generateCareerOverviewUrl = void 0;
        var o = function (e) {
            return e && e.replace(/[\s\/]/g, "-").replace(/[^\w\d-+]/g, "")
        };
        t.generateCareerOverviewUrl = function (e) {
            var t = o(e);
            return "/Career/".concat(t, "-career_KO0,").concat(t.length, ".htm")
        };
        t.generateCareerPathUrl = function (e) {
            var t = o(e);
            return "/Career/how-to-become-".concat(t, "_KO14,").concat(14 + t.length, ".htm")
        };
        t.generateResumeUrl = function (e) {
            var t = o(e);
            return "/Resumes/".concat(t, ".htm")
        };
        t.generateSalaryUrl = function (e, t) {
            if (t && t.id && t.type) return "/Salaries/company-salaries.htm?clickSource=careerNav&locT=".concat(t.type, "&locId=").concat(t.id, "&context=Salary&sc.keyword=").concat(encodeURIComponent(e));
            var a = o(e);
            return "/Salaries/".concat(a, "-salary-SRCH_KO0,").concat(a.length, ".htm")
        };
        t.generateInterviewUrl = function (e, t) {
            if (t && t.id && t.type) return "/Interview/job-interview-questions.htm?clickSource=careerNav&locT=".concat(t.type, "&locId=").concat(t.id, "&context=Interview&sc.keyword=").concat(encodeURIComponent(e));
            var a = o(e);
            return "/Interview/".concat(a, "-interview-questions-SRCH_KO0,").concat(a.length, ".htm")
        }
    },
    45: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = [{
            type: "jobs",
            labelKey: "site.header.jobs",
            gaLabel: "searchtype-jobs",
            form: {
                action: "/Job/jobs.htm",
                placeholderKey: "site.header.search.placeholder.jobs"
            },
            searchType: "Jobs"
        }, {
            type: "companies",
            labelKey: "site.header.companies",
            gaLabel: "searchtype-companies",
            form: {
                action: "/Reviews/company-reviews.htm",
                placeholderKey: "site.header.search.placeholder.company"
            },
            searchType: "Review"
        }, {
            type: "salaries",
            labelKey: "site.header.salaries",
            gaLabel: "searchtype-salaries",
            form: {
                action: "/Salaries/company-salaries.htm",
                placeholderKey: "site.header.search.placeholder.generic"
            },
            searchType: "Salary"
        }, {
            type: "interviews",
            labelKey: "site.header.interviews",
            gaLabel: "searchtype-interviews",
            form: {
                action: "/Interview/job-interview-questions.htm",
                placeholderKey: "site.header.search.placeholder.generic"
            },
            searchType: "Interview"
        }];
        t.default = o
    },
    46: function (e, t, a) {
        "use strict";
        var o = a(1),
            n = a(5);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = t.MenuContextProvider = void 0;
        var r = n(a(2)),
            l = o(a(3)),
            i = a(4),
            s = (0, r.createContext)(),
            c = function (e) {
                var t = e.value,
                    a = e.children;
                return (0, i.jsx)(s.Provider, {
                    value: t
                }, a)
            };
        t.MenuContextProvider = c, c.propTypes = {
            value: l.default.object,
            children: l.default.node.isRequired
        }, c.defaultProps = {
            value: {}
        };
        var d = s;
        t.default = d
    },
    47: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(6)),
            l = n(a(7)),
            i = o(a(2)),
            s = n(a(3)),
            c = n(a(9)),
            d = a(12),
            u = a(42),
            v = a(41),
            f = a(27),
            h = n(a(38)),
            p = n(a(58)),
            m = n(a(62)),
            g = n(a(33)),
            x = a(4),
            y = function (e) {
                var t = e.iconKey,
                    a = e.textKey,
                    o = e.subtextKey,
                    n = e.gaLabel,
                    s = e.id,
                    y = e.className,
                    w = e.active,
                    b = e.showIcon,
                    j = e.showArrow,
                    _ = e.showSolidIcon,
                    C = e.menuAction,
                    S = e.smallOnMobile,
                    N = e.disableHoverEffect,
                    k = e.onClick,
                    I = e.showBorder,
                    M = e.showSubtext,
                    A = ((0, i.useContext)(h.default) || {}).profilePhotoRelativeUrl,
                    E = (0, i.useState)(a),
                    P = (0, l.default)(E, 2),
                    L = P[0],
                    T = P[1];
                (0, i.useEffect)((function () {
                    "ToggleJobDetails" === s && T((0, v.initJobDetails)(a, o)), "DisableSpotlightDemo" === s && (0, v.initDisableSpotlightDemo)()
                }), [s, e, o, a]);
                var z = (0, v.generateMenuItemProps)(e, (function (e) {
                        if (C && n && (0, f.trackClickEvent)("subHeader-".concat(n), C), k && (GD.event.stop(e), k(e)), "ToggleJobDetails" === s && (GD.event.stop(e), T((0, v.handleToggleJobDetails)(a, o))), "DisableSpotlightDemo" === s && (GD.event.stop(e), (0, v.handleDisableSpotlightDemoClick)()), "jobs_career-overview" === s) {
                            var t = window.GDStorage,
                                r = void 0 === t ? {} : t;
                            if (r.isSupported()) {
                                var l = r.getVal("careerInsightModalJobTitle");
                                if (l) return void GD.util.loadUrl((0, u.generateCareerOverviewUrl)(l))
                            }
                            var i = new CustomEvent("showCareerInsightsModal");
                            document.body.dispatchEvent(i)
                        }
                        if ("Sign Out" === n) {
                            var c = GD || {},
                                d = c.util,
                                h = void 0 === d ? {} : d,
                                p = c.page,
                                m = void 0 === p ? {} : p,
                                g = h.appendToUrl,
                                x = void 0 === g ? function (e) {
                                    return e
                                } : g,
                                y = m.gdToken;
                            e.currentTarget.href = x(e.currentTarget.href, ["gdToken=".concat(y)])
                        }
                    })),
                    O = k || "ToggleJobDetails" === s || "DisableSpotlightDemo" === s || "jobs_career-overview" === s ? "div" : "a",
                    B = w ? "b" : "span";
                return (0, x.jsx)(O, (0, r.default)({
                    className: "d-flex align-items-center ".concat(y, " ").concat(m.default.menuItem, " ").concat(N ? "" : m.default.menuItemHoverEffect, " ").concat(I ? m.default.bottomBorder : "", " header-menu-item")
                }, z), b && t ? "/member/profile/index.htm" === e.link && A ? (0, x.jsx)("img", {
                    src: A,
                    className: "mr-sm ".concat(m.default.menuAvatar),
                    alt: "user avatar"
                }) : (0, x.jsx)(p.default, {
                    className: "mr-sm",
                    iconKey: t,
                    solid: _
                }) : null, (0, x.jsx)("div", {
                    className: "d-flex align-items-center ".concat(S ? "py-sm py-md-std" : "py-std", " col header-menu-item-label")
                }, (0, x.jsx)(B, {
                    className: "col"
                }, (0, x.jsx)(d.I18nMessageComponent, {
                    className: "".concat(w ? m.default.menuItemActiveColor : m.default.menuItemColor, " ").concat(M ? m.default.menuItemHeading : ""),
                    id: L
                }), M ? (0, x.jsx)("div", null, (0, x.jsx)(d.I18nMessageComponent, {
                    className: "".concat(w ? m.default.menuItemActiveColor : m.default.menuItemColor, " ").concat(m.default.menuItemSubtext),
                    id: "".concat(L, ".message"),
                    markup: !0
                })) : null), j ? (0, x.jsx)(c.default, {
                    className: "d-flex ml-sm mr-std ".concat(g.default.colorNavigation),
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.72 11.29L9.19 3.9a1.3 1.3 0 00-1.83 0 1.26 1.26 0 000 1.78L13.78 12l-6.42 6.3a1.26 1.26 0 000 1.78 1.3 1.3 0 001.83 0l7.53-7.39a1 1 0 000-1.4z" fill="currentColor" fill-rule="evenodd"/></svg>'
                }) : null))
            };
        y.propTypes = {
            iconKey: s.default.string,
            textKey: s.default.string,
            subtextKey: s.default.string,
            link: s.default.string,
            target: s.default.string,
            rel: s.default.string,
            id: s.default.string,
            gaLabel: s.default.string,
            tracking: s.default.shape(),
            className: s.default.string,
            active: s.default.bool,
            showIcon: s.default.bool,
            showArrow: s.default.bool,
            showSolidIcon: s.default.bool,
            disableHoverEffect: s.default.bool,
            smallOnMobile: s.default.bool,
            menuAction: s.default.string,
            onClick: s.default.func,
            showBorder: s.default.bool,
            showSubtext: s.default.bool
        }, y.defaultProps = {
            iconKey: "",
            textKey: "",
            subtextKey: "",
            link: "",
            target: "",
            rel: "",
            id: "",
            gaLabel: "",
            tracking: {},
            menuAction: "",
            className: "",
            active: !1,
            showIcon: !1,
            showArrow: !1,
            showSolidIcon: !1,
            disableHoverEffect: !1,
            smallOnMobile: !1,
            onClick: null,
            showBorder: !1,
            showSubtext: !1
        };
        var w = y;
        t.default = w
    },
    57: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.trackHoverEvent = t.trackClickEvent = t.trackEventInGA = void 0;
        var o = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "sd-header",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            "undefined" != typeof window && GD.ga && GD.ga.trackEvent(e, t, a, o, n)
        };
        t.trackEventInGA = o;
        t.trackClickEvent = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 ? arguments[1] : void 0,
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sd-header";
            o(a, "click-".concat(t), e, null, !1)
        };
        t.trackHoverEvent = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 ? arguments[1] : void 0,
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sd-header";
            o(a, "hover-".concat(t), e, null, !1)
        }
    },
    58: function (e, t, a) {
        "use strict";
        var o = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n = o(a(2)),
            r = o(a(3)),
            l = o(a(9)),
            i = o(a(33)),
            s = a(4),
            c = {
                add: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.06 11.5H12.5V8.94a.44.44 0 00-.44-.44h-.12a.44.44 0 00-.44.44v2.56H8.94a.44.44 0 00-.44.44v.12a.44.44 0 00.44.44h2.56v2.56a.44.44 0 00.44.44h.12a.44.44 0 00.44-.44V12.5h2.56a.44.44 0 00.44-.44v-.12a.44.44 0 00-.44-.44M12 3a9 9 0 109 9 9 9 0 00-9-9m0 17a8 8 0 118-8 8 8 0 01-8 8" fill="currentColor" fill-rule="evenodd"/></svg>',
                addSolid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3a9 9 0 109 9 9 9 0 00-9-9zm3.5 9.06a.44.44 0 01-.44.44H12.5v2.56a.44.44 0 01-.44.44h-.12a.44.44 0 01-.44-.44V12.5H8.94a.44.44 0 01-.44-.44v-.12a.44.44 0 01.44-.44h2.56V8.94a.44.44 0 01.44-.44h.12a.44.44 0 01.44.44v2.56h2.56a.44.44 0 01.44.44z" fill="currentColor" fill-rule="evenodd"/></svg>',
                application: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.5 4a2.06 2.06 0 012 2.13 2.16 2.16 0 01-.85 1.75 4 4 0 012.43 2A7.09 7.09 0 0010 11.72l-.24.28H5.5a1.08 1.08 0 01-.9-1.53 4.27 4.27 0 012.75-2.59 2.16 2.16 0 01-.85-1.75A2.06 2.06 0 018.5 4zm.3 10a5.28 5.28 0 00-.16.66l-.06.34H5a.5.5 0 01-.5-.5.5.5 0 01.41-.5H8.8zm-.22 3a5 5 0 00.13.67l.09.33H5a.5.5 0 01-.5-.5.5.5 0 01.41-.5h3.67zm9-2.85a.52.52 0 01.73 0 .51.51 0 010 .72l-3.39 4a.52.52 0 01-.73 0l-1.58-1.48a.51.51 0 010-.72.52.52 0 01.73 0l1.22 1.12zM17.5 2a1 1 0 011 .88v6.81a4.84 4.84 0 00-.66-.28l-.34-.11V3.5a.5.5 0 00-.41-.5H4a.5.5 0 00-.49.41V20.5a.5.5 0 00.41.49h6.7a6.66 6.66 0 001 .82l.28.18H3.5a1 1 0 01-1-.88V3a1 1 0 01.88-1H17.5zm-2 9a5 5 0 11-5 5 5 5 0 015-5m0-1a6 6 0 106 6 6 6 0 00-6-6" fill="currentColor" fill-rule="evenodd"/></svg>',
                applicationSolid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.35 14.15a.52.52 0 00-.73 0l-3 3.62-1.22-1.12a.52.52 0 00-.73 0 .51.51 0 000 .72l1.58 1.48a.52.52 0 00.73 0l3.39-4a.51.51 0 00-.02-.7zM15.5 10a6 6 0 11-6 6 6 6 0 016-6zm2-8a1 1 0 011 1v6.69a5.76 5.76 0 00-1-.39 6.59 6.59 0 00-2-.3 7 7 0 00-3.42.9 4 4 0 00-2.43-2 2.17 2.17 0 00.86-1.75A2.07 2.07 0 008.5 4a2.06 2.06 0 00-2 2.13 2.16 2.16 0 00.85 1.75 4.24 4.24 0 00-2.75 2.59A1.08 1.08 0 005.5 12h4.26a6.85 6.85 0 00-1 2H5a.5.5 0 000 1h3.58a6.29 6.29 0 000 2H5a.5.5 0 000 1h3.8a7 7 0 001.81 3 7 7 0 001.3 1H3.5a1 1 0 01-1-1V3a1 1 0 011-1z" fill="currentColor" fill-rule="evenodd"/></svg>',
                calculator: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.5 19h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5m-4 0h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5m8 0h1a.46.46 0 00.5-.42v-4.16a.46.46 0 00-.5-.42h-1a.46.46 0 00-.5.42v4.16a.46.46 0 00.5.42m-4-3h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5m-4 0h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5m8-3h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5m-4 0h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5m-4 0h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm1 18.09a1 1 0 01-1 .91H6a1 1 0 01-1-.91V9h14zM19 8H5V4.3A1.18 1.18 0 016 3h12a1.18 1.18 0 011 1.3z" fill="currentColor" fill-rule="evenodd"/></svg>',
                calculatorSolid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.5 19h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5m-4 0h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5m8 0h1a.46.46 0 00.5-.42v-4.16a.46.46 0 00-.5-.42h-1a.46.46 0 00-.5.42v4.16a.46.46 0 00.5.42m-4-3h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5m-4 0h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5m8-3h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5m-4 0h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5m-4 0h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm1 6H5V4.3A1.18 1.18 0 016 3h12a1.18 1.18 0 011 1.3z" fill="currentColor" fill-rule="evenodd"/></svg>',
                companies: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.5 6.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1A.5.5 0 0112 8V7a.5.5 0 01.5-.5zm4 0a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1A.5.5 0 0116 8V7a.5.5 0 01.5-.5zm-4 4a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm4 0a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm-1 5h-3a.49.49 0 00-.5.5v3.5h4V16a.5.5 0 00-.5-.5zm4-11h-11A.5.5 0 009 5v14.5h3v-4a1 1 0 011-1h4a1 1 0 011 1v4h3V5a.5.5 0 00-.5-.5zm.5-1a1 1 0 011 1v16H8v-16a1 1 0 011-1zm-15 5v1H3.5a.5.5 0 00-.5.5v9.5h3v1H2v-11a.91.91 0 01.78-1z" fill="currentColor" fill-rule="evenodd"/></svg>',
                companiesSolid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3.5a1 1 0 011 1v16H8v-16a1 1 0 011-1zm-15 5v12H2v-11a.91.91 0 01.78-1zM12 7a.5.5 0 01.5-.5h1a.49.49 0 01.5.5v1a.5.5 0 01-.49.5h-1A.5.5 0 0112 8zm0 5v-1a.5.5 0 01.5-.5h1a.49.49 0 01.5.5v1a.5.5 0 01-.49.5h-1A.5.5 0 0112 12zm5 7.49h-4V16a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zM18 12a.5.5 0 01-.5.5h-1a.51.51 0 01-.5-.5v-1a.5.5 0 01.5-.5h1a.5.5 0 01.5.5zm0-4a.5.5 0 01-.5.5h-1A.51.51 0 0116 8V7a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" fill="currentColor" fill-rule="evenodd"/></svg>',
                compare: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 19.75L13.5 16 9 12.25V15H4.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H9zM8 22v-4H4a1 1 0 01-1-1v-2a1 1 0 011-1h4v-4l7 6zm7-17.75L10.5 8l4.5 3.75V9h4.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H15zM16 2v4h4a1 1 0 011 1v2a1 1 0 01-1 1h-4v4L9 8z" fill="currentColor" fill-rule="evenodd"/></svg>',
                compareSolid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 22v-4H4a1 1 0 01-1-1v-2a1 1 0 011-1h4v-4l7 6zm8-20v4h4a1 1 0 011 1v2a1 1 0 01-1 1h-4v4L9 8z" fill="currentColor" fill-rule="evenodd"/></svg>',
                compass: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="prefix__cls-1" d="M12 3a9 9 0 11-9 9 9 9 0 019-9m0-1a10 10 0 1010 10A10 10 0 0012 2z"/><path class="prefix__cls-1" d="M7.05 17l7.07-2.83L17 7.05 9.88 9.88zm3.4-5.8l2.4 2.4-4 1.6zm3.1 1.7l-2.4-2.4 4-1.6zM12 7a.5.5 0 00.5-.5v-2a.5.5 0 00-1 0v2a.5.5 0 00.5.5zm0 10a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zm7.5-5.5h-2a.5.5 0 000 1h2a.5.5 0 000-1zm-13 0h-2a.5.5 0 000 1h2a.5.5 0 000-1z"/></svg>',
                demographics: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.5 17a7.5 7.5 0 100-15 7.5 7.5 0 000 15zm-5 5a7.5 7.5 0 100-15 7.5 7.5 0 000 15zm5-12.5l-5 5m7-2l-4 4m-1-9l-4 4" stroke="#505863" fill="none"/></svg>',
                email: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.42 5H3.58l7.71 7.71a1 1 0 001.42 0zM3 5.83v12.45l6.23-6.23zm18 0l-6.23 6.23L21 18.28zm-6.93 6.93l-.66.66a2 2 0 01-2.82 0l-.66-.66L3.7 19h16.6zM20.9 4A1.12 1.12 0 0122 5.14v13.72A1.13 1.13 0 0120.9 20H3.1A1.12 1.12 0 012 18.86V5.14A1.13 1.13 0 013.1 4z" fill="currentColor" fill-rule="evenodd"/></svg>',
                emailSolid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.58 5H3.5a.5.5 0 00-.5.5v.33l6.23 6.23L3 18.28v.22a.5.5 0 00.5.5h.2l6.23-6.24.66.65.12.12a2 2 0 002.58 0l.12-.12.66-.65L20.3 19h.2a.5.5 0 00.5-.5v-.22l-6.23-6.22L21 5.83V5.5a.5.5 0 00-.5-.5h-.08l-7.71 7.71-.1.08a1 1 0 01-1.22 0l-.1-.08zM20.9 4A1.12 1.12 0 0122 5.14v13.72A1.13 1.13 0 0120.9 20H3.1A1.12 1.12 0 012 18.86V5.14A1.13 1.13 0 013.1 4z" fill="currentColor" fill-rule="evenodd"/></svg>',
                interviews: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 10a1 1 0 11-1 1 1 1 0 011-1m-4.5 0a1 1 0 11-1 1 1 1 0 011-1M8 10a1 1 0 11-1 1 1 1 0 011-1m4.5-6C7.78 4 4 7 4 10.66s3.78 6.65 8.5 6.65a.47.47 0 01.39.2l.38.4a8.08 8.08 0 003 1.84A7.26 7.26 0 0116 17a.53.53 0 01.31-.4c2.88-1.14 4.69-3.43 4.69-5.94C21 7 17.22 4 12.5 4m0-1c5.23 0 9.5 3.4 9.5 7.66 0 2.87-2 5.43-5 6.75a6.7 6.7 0 00.47 2.9.5.5 0 01-.57.68 9.12 9.12 0 01-3-1.31 8.91 8.91 0 01-1.3-1.06 4.16 4.16 0 01-.3-.31h-.36a.44.44 0 01-.16.14 7.19 7.19 0 01-3.27 1 4.87 4.87 0 01-.92.78A5.48 5.48 0 015.7 21a.5.5 0 01-.58-.66 3.32 3.32 0 00.1-1.43C3.27 18.15 2 16.65 2 14.94a3.76 3.76 0 011.2-2.69 6.54 6.54 0 01-.2-1.59C3 6.4 7.27 3 12.5 3M3 14.94c0 1.31 1.09 2.53 2.81 3.12a.49.49 0 01.33.35 4.65 4.65 0 01.1 1.36 5.08 5.08 0 00.76-.42 3.91 3.91 0 00.81-.71.47.47 0 01.41-.23 7.34 7.34 0 001.58-.23h-.11a8.74 8.74 0 01-6.22-4.67A2.56 2.56 0 003 14.94" fill="currentColor" fill-rule="evenodd"/></svg>',
                interviewsSolid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 10.66C22 6.4 17.73 3 12.5 3S3 6.4 3 10.66a6.54 6.54 0 00.2 1.59A3.76 3.76 0 002 14.94c0 1.71 1.27 3.21 3.22 4a3.32 3.32 0 01-.1 1.43.5.5 0 00.58.63 5.48 5.48 0 001.86-.81 4.87 4.87 0 00.92-.78 7.19 7.19 0 003.27-1 .44.44 0 00.16-.14h.36a4.16 4.16 0 00.3.31 8.91 8.91 0 001.3 1.06 9.12 9.12 0 003 1.31.5.5 0 00.57-.68 6.7 6.7 0 01-.47-2.9c3-1.32 5-3.88 5-6.75M8 10a1 1 0 11-1 1 1 1 0 011-1m.21 8.41a.47.47 0 00-.41.23 3.91 3.91 0 01-.81.71 5.08 5.08 0 01-.76.42 4.65 4.65 0 00-.1-1.36.49.49 0 00-.33-.35C4.09 17.47 3 16.25 3 14.94a2.58 2.58 0 01.47-1.46 8.74 8.74 0 006.22 4.67h.11a7.34 7.34 0 01-1.58.23M12.51 12a1 1 0 111-1 1 1 0 01-1 1M16 11a1 1 0 111 1 1 1 0 01-1-1" fill="currentColor" fill-rule="evenodd"/></svg>',
                jobAlertAngled: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.13 3.11a1.72 1.72 0 00-1 1 2.4 2.4 0 00-.13.54v.42l-.33.26A4.11 4.11 0 004.4 6.62a3.22 3.22 0 00-.13 2.87 15.07 15.07 0 01.81 7.66c0 .23-.07.47-.12.8v.38c0 .16 0 .27-.06.37-.09.6-.13 1-.15 1.3a.25.25 0 00.15 0l15-5.42h.11c.01 0-.44-.41-.86-.77l-1.05-.92a15.44 15.44 0 01-4.6-6.71c-.66-1.8-1.75-2.44-3.72-2.37h-.41l-.3-.28a2.09 2.09 0 00-.46-.33 1.78 1.78 0 00-1.48-.09zm2-.77a3.52 3.52 0 01.67.47c2.16-.07 3.8.62 4.69 3a14.46 14.46 0 004.3 6.29c.05 0 1.53 1.32 1.94 1.72a1 1 0 01-.46 1.67l-15 5.42A1.07 1.07 0 013.7 20c0-.41.07-.84.16-1.44 0-.11 0-.22.06-.37s0-.29.05-.39c0-.31.08-.54.11-.78a13.89 13.89 0 00-.75-7.18 4.21 4.21 0 01.2-3.71A5.24 5.24 0 015 4.54a3.58 3.58 0 01.2-.78 2.72 2.72 0 011.59-1.59 2.79 2.79 0 012.29.17zM14 18.57a3 3 0 01-5.52 2z" fill="currentColor" fill-rule="evenodd"/></svg>',
                jobs: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 4H8a1 1 0 00-1 1v1h10V5a1 1 0 00-1-1zm-1.5 10a.5.5 0 01.09 1H9.5a.5.5 0 010-1zM20 7H4a1 1 0 00-1 1v6a1 1 0 001 1h3.28l.5 2h8.44l.5-2H20a1 1 0 001-1V8a1 1 0 00-1-1zM6.5 16H4v3a1 1 0 001 1h14a1 1 0 001-1v-3h-2.5l-.5 2H7zM16 3a2 2 0 012 2v1h2a2 2 0 012 2v6a2 2 0 01-1 1.73V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-3.27A2 2 0 012 14V8a2 2 0 012-2h2V5a2 2 0 012-2z" fill="currentColor" fill-rule="evenodd"/></svg>',
                jobsSolid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 3a2 2 0 012 2v1h2a2 2 0 012 2v6a.9.9 0 01-1 1h-4.29l-.5 2H7.78l-.5-2H3a.9.9 0 01-1-1V8a2 2 0 012-2h2V5a2 2 0 012-2zM6.5 16l.5 2h10l.5-2H21v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3zm8-1h-5a.5.5 0 110-1h5a.5.5 0 110 1zM17 6H7V5a1 1 0 011-1h8a1 1 0 011 1z" fill="currentColor" fill-rule="evenodd"/></svg>',
                notifications: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.61 6H6.39a1 1 0 00-.94.65L3 11h3.28a1 1 0 011 .68v.06l.15.45.57 1.72a.13.13 0 00.12.09h7.82a.13.13 0 00.12-.09l.74-2.23a1 1 0 01.95-.68H21l-2.45-4.35a1 1 0 00-.94-.65zM3 17a1 1 0 001 1h16a1 1 0 001-1v-5h-3.21a.1.1 0 00-.09.07l-.7 2.25a1 1 0 01-1 .68H8a1 1 0 01-1-.69l-.7-2.24a.1.1 0 00-.09-.07H3zm19 0a2 2 0 01-2 2H4a2 2 0 01-2-2v-6l2.51-4.7A2 2 0 016.39 5h11.22a2 2 0 011.88 1.3L22 11z" fill="currentColor" fill-rule="evenodd"/></svg>',
                notificationsSolid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.61 6H6.39a1 1 0 00-.94.65L3 11h3.21a1.1 1.1 0 011 .75L8 14h8l.75-2.25a1.1 1.1 0 011-.75H21l-2.45-4.35a1 1 0 00-.94-.65zm0-1a2 2 0 011.88 1.3L22 11v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6l2.51-4.7A2 2 0 016.39 5z" fill="currentColor" fill-rule="evenodd"/></svg>',
                personalizedOutline: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.5 4a5.42 5.42 0 013.1 1 .5.5 0 01.23.42.5.5 0 01-.5.5.43.43 0 01-.25-.07h-.06A4.5 4.5 0 008.26 8a.51.51 0 01-1-.1V7.73A5.5 5.5 0 0112.5 4zm4.55-.32a.5.5 0 01.27.08l.07.06A7.46 7.46 0 0120 9.5v2a.5.5 0 01-1 0v-2a6.49 6.49 0 00-2.32-5 .51.51 0 01-.13-.34.5.5 0 01.5-.48zM12.5 2a7.42 7.42 0 013.75 1 .52.52 0 01.25.44.5.5 0 01-.5.5.54.54 0 01-.28-.08A6.5 6.5 0 006 9.5v3a.5.5 0 01-1 0v-3A7.5 7.5 0 0112.5 2zm0 6A1.5 1.5 0 0114 9.5v6a.5.5 0 01-.41.49h-.09a.5.5 0 01-.5-.5v-6a.5.5 0 00-1 0v2a.5.5 0 01-1 0v-2A1.5 1.5 0 0112.5 8zm0-2A3.5 3.5 0 0116 9.5v1a.5.5 0 01-1 0v-1a2.5 2.5 0 00-5 0v6a.5.5 0 01-1 0v-6A3.5 3.5 0 0112.5 6zm-7 8a.5.5 0 01.49.41v.09a3 3 0 01-2.82 3h-.76a.5.5 0 010-1H3a2 2 0 002-2v-.09a.5.5 0 01.5-.41zm11-8a.47.47 0 01.32.12l.06.06A5.47 5.47 0 0118 9.5v8a.5.5 0 01-1 0v-8a4.64 4.64 0 00-.26-1.5 4.38 4.38 0 00-.63-1.19.51.51 0 01-.11-.31.5.5 0 01.5-.5zm-5 7a.5.5 0 01.5.5v5a.5.5 0 01-1 0v-5a.5.5 0 01.5-.5zm-4-4a.5.5 0 01.5.5v7.11a3 3 0 01-1.7 2.47l-.16.07h-.09a.51.51 0 01-.56-.31.49.49 0 01.19-.61h.08A2 2 0 007 16.56V9.5a.5.5 0 01.5-.5zm12 4a.5.5 0 01.5.5v3a2 2 0 001.46 1.93h.16A.5.5 0 0122 19a.5.5 0 01-.5.5h-.1a3 3 0 01-2.4-2.82V13.5a.5.5 0 01.5-.5zm-4-1a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8a.5.5 0 01.5-.5zm-2 5a.5.5 0 01.5.5V20a1.49 1.49 0 01-1.36 1.49h-.14a.5.5 0 01-.09-1h.09a.49.49 0 00.49-.41V17.5a.5.5 0 01.51-.5zm-4 0a.5.5 0 01.5.5V20a1 1 0 00.88 1H11a.5.5 0 01.09 1H11a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z" fill="currentColor" fill-rule="evenodd"/></svg>',
                personalizedSolid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.5 4a5.42 5.42 0 013.1 1 .5.5 0 01.23.42.5.5 0 01-.5.5.43.43 0 01-.25-.07h-.06A4.5 4.5 0 008.26 8a.51.51 0 01-1-.1V7.73A5.5 5.5 0 0112.5 4zm4.55-.32a.5.5 0 01.27.08l.07.06A7.46 7.46 0 0120 9.5v2a.5.5 0 01-1 0v-2a6.49 6.49 0 00-2.32-5 .51.51 0 01-.13-.34.5.5 0 01.5-.48zM12.5 2a7.42 7.42 0 013.75 1 .52.52 0 01.25.44.5.5 0 01-.5.5.54.54 0 01-.28-.08A6.5 6.5 0 006 9.5v3a.5.5 0 01-1 0v-3A7.5 7.5 0 0112.5 2zm0 6A1.5 1.5 0 0114 9.5v6a.5.5 0 01-.41.49h-.09a.5.5 0 01-.5-.5v-6a.5.5 0 00-1 0v2a.5.5 0 01-1 0v-2A1.5 1.5 0 0112.5 8zm0-2A3.5 3.5 0 0116 9.5v1a.5.5 0 01-1 0v-1a2.5 2.5 0 00-5 0v6a.5.5 0 01-1 0v-6A3.5 3.5 0 0112.5 6zm-7 8a.5.5 0 01.49.41v.09a3 3 0 01-2.82 3h-.76a.5.5 0 010-1H3a2 2 0 002-2v-.09a.5.5 0 01.5-.41zm11-8a.47.47 0 01.32.12l.06.06A5.47 5.47 0 0118 9.5v8a.5.5 0 01-1 0v-8a4.64 4.64 0 00-.26-1.5 4.38 4.38 0 00-.63-1.19.51.51 0 01-.11-.31.5.5 0 01.5-.5zm-5 7a.5.5 0 01.5.5v5a.5.5 0 01-1 0v-5a.5.5 0 01.5-.5zm-4-4a.5.5 0 01.5.5v7.11a3 3 0 01-1.7 2.47l-.16.07h-.09a.51.51 0 01-.56-.31.49.49 0 01.19-.61h.08A2 2 0 007 16.56V9.5a.5.5 0 01.5-.5zm12 4a.5.5 0 01.5.5v3a2 2 0 001.46 1.93h.16A.5.5 0 0122 19a.5.5 0 01-.5.5h-.1a3 3 0 01-2.4-2.82V13.5a.5.5 0 01.5-.5zm-4-1a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8a.5.5 0 01.5-.5zm-2 5a.5.5 0 01.5.5V20a1.49 1.49 0 01-1.36 1.49h-.14a.5.5 0 01-.09-1h.09a.49.49 0 00.49-.41V17.5a.5.5 0 01.51-.5zm-4 0a.5.5 0 01.5.5V20a1 1 0 00.88 1H11a.5.5 0 01.09 1H11a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z" fill="currentColor" fill-rule="evenodd"/></svg>',
                profile: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 19a8.91 8.91 0 01-5.33-1.75 6 6 0 0110.66 0A8.91 8.91 0 0112 21zm6.11-2.4a7 7 0 00-12.22 0 9 9 0 1112.22 0zM12 6a4 4 0 104 4 4 4 0 00-4-4zm0 7a3 3 0 113-3 3 3 0 01-3 3z" fill="currentColor" fill-rule="evenodd"/></svg>',
                profileSolid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 7a3 3 0 103 3 3 3 0 00-3-3zm0 9a6 6 0 00-5.33 3.25 9 9 0 0010.66 0A6 6 0 0012 16zm0-14A10 10 0 112 12 10 10 0 0112 2z" fill="currentColor" fill-rule="evenodd"/></svg>',
                questionMark: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.93 14.41a.6.6 0 00.61-.6C12.7 11.44 15 12 15 9.52 15 7.89 13.46 7 11.93 7a3.07 3.07 0 00-2.88 1.8c-.27.79.69 1.22 1.17.45a2 2 0 011.71-1.06c1.21 0 1.87.61 1.84 1.48 0 1.77-2.46 1.48-2.46 4.14a.61.61 0 00.62.6zm0 1.59a.82.82 0 10.84.81.83.83 0 00-.84-.81zM12 2A10 10 0 112 12 10 10 0 0112 2zm0 19a9 9 0 10-9-9 9 9 0 009 9z" fill="currentColor" fill-rule="evenodd"/></svg>',
                questionMarkSolid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2m-.07 15.63a.82.82 0 110-1.63.83.83 0 01.84.81.83.83 0 01-.84.82m.61-3.82a.62.62 0 01-1.23 0c0-2.66 2.48-2.37 2.46-4.14 0-.87-.63-1.49-1.84-1.49a2 2 0 00-1.71 1.07c-.48.77-1.44.34-1.17-.45A3.07 3.07 0 0111.93 7C13.46 7 15 7.89 15 9.52c0 2.52-2.3 1.92-2.46 4.29" fill="currentColor" fill-rule="evenodd"/></svg>',
                resume: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 2l4 5h-3.5a.5.5 0 01-.5-.5zm-6 2.5a2 2 0 011.15 3.64 4.14 4.14 0 012.74 2.43 1 1 0 01-.47 1.33.91.91 0 01-.42.1H7a1 1 0 01-1-1 .91.91 0 01.1-.43 4.14 4.14 0 012.75-2.43A2 2 0 0110 4.5zM17.5 15a.5.5 0 010 1h-11a.5.5 0 010-1zm0 3a.5.5 0 010 1h-11a.5.5 0 010-1zM13.75 3h-8.5a.24.24 0 00-.25.19v17.56a.24.24 0 00.19.24h13.56a.24.24 0 00.24-.19V9.25a.24.24 0 00-.18-.25H14.5a.5.5 0 01-.5-.41V3.25a.25.25 0 00-.25-.25zM15 2v5.5a.5.5 0 00.5.5H20v13a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1z" fill="currentColor" fill-rule="evenodd"/></svg>',
                resumeSolid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 2l4 5h-4zm-6 2.5a2 2 0 00-1.15 3.64 4.14 4.14 0 00-2.74 2.43A.91.91 0 006 11a1 1 0 00.88 1H13a.91.91 0 00.43-.1 1 1 0 00.47-1.33 4.14 4.14 0 00-2.74-2.43A2 2 0 0010 4.5zM17.5 15h-11a.5.5 0 00-.09 1H17.5a.5.5 0 000-1zm0 3h-11a.5.5 0 00-.09 1H17.5a.5.5 0 000-1zM15 2v5a1 1 0 001 1h4v13a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1z" fill="currentColor" fill-rule="evenodd"/></svg>',
                reviews: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 13l-1.85 1 .35-2.17L9 10.29l2.07-.29.93-2 .93 2 2.07.31-1.5 1.54.35 2.15zm5.76 7.39a.46.46 0 01-.52.62A12.56 12.56 0 0113 19.24h-1c-5.5 0-10-3.58-10-8.1S6.5 3 12 3s10 3.62 10 8.14A7.88 7.88 0 0117.36 18a5.16 5.16 0 00.4 2.37zm-1.29-2.69a.54.54 0 01.25-.45c2.7-1.31 4.28-3.56 4.28-6.11C21 7.17 17 4 12 4s-9 3.17-9 7.14 4 7.11 9 7.11h1.11c.11 0 .21.1.3.16a11.75 11.75 0 003.29 1.49 15.14 15.14 0 01-.23-2.2z" fill="currentColor" fill-rule="evenodd"/></svg>',
                reviewsSolid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8l-.93 2-2.07.29 1.5 1.54-.35 2.17L12 13l1.85 1-.35-2.17 1.5-1.54-2.07-.29zm0-5c5.5 0 10 3.62 10 8.14A7.88 7.88 0 0117.36 18a5.16 5.16 0 00.4 2.38.46.46 0 01-.52.62A12.56 12.56 0 0113 19.24h-1c-5.5 0-10-3.58-10-8.1S6.5 3 12 3z" fill="currentColor" fill-rule="evenodd"/></svg>',
                salaries: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 9a2 2 0 102 2 2 2 0 00-2-2zm0-1a3 3 0 11-3 3 3 3 0 013-3zm8 10a1 1 0 01-1 1H5a1 1 0 01-1-1zm1-13H3.05a1 1 0 00-1 1v10a1 1 0 001 1.05H21A1 1 0 0022 16V6.05A1 1 0 0021 5zM3 6.5a.5.5 0 01.5-.5h1.56A2.06 2.06 0 013 8.06zm.5 9.5a.5.5 0 01-.5-.5v-1.56A2.06 2.06 0 015.06 16zm17.5-.5a.5.5 0 01-.5.5h-1.56A2.06 2.06 0 0121 13.94zm0-2.56A3.06 3.06 0 0017.94 16H6.06A3.06 3.06 0 003 12.94V9.06A3.06 3.06 0 006.06 6h11.88A3.06 3.06 0 0021 9.06zm0-4.88h-.1a1.74 1.74 0 01-2-2.07h1.6a.5.5 0 01.5.5z" fill="currentColor" fill-rule="evenodd"/></svg>',
                salariesSolid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 9a2 2 0 102 2 2 2 0 00-2-2zm0-1a3 3 0 11-3 3 3 3 0 013-3zm8 10a1 1 0 01-1 1H5a1 1 0 01-1-1zM5.06 6H3.5a.5.5 0 00-.5.5v1.56A2.06 2.06 0 005.06 6zM20.5 6h-1.56a1.74 1.74 0 002 2.07H21V6.5a.5.5 0 00-.5-.5zM3 13.94v1.56a.5.5 0 00.5.5h1.56A2.06 2.06 0 003 13.94zm18 0A2.06 2.06 0 0018.94 16h1.56a.5.5 0 00.5-.5zM21 5a1 1 0 011.05 1v10A1 1 0 0121 17H3.05A1 1 0 012 16V6.05a1 1 0 011-1z" fill="currentColor" fill-rule="evenodd"/></svg>',
                save: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.11l.66-.65a5.56 5.56 0 017.71.19 5.63 5.63 0 010 7.92L12 21l-8.37-8.43a5.63 5.63 0 010-7.92 5.56 5.56 0 017.71-.19zm7.66 6.75a4.6 4.6 0 00-6.49-6.51L12 6.53l-1.17-1.18a4.6 4.6 0 10-6.49 6.51L12 19.58z" fill="currentColor" fill-rule="evenodd"/></svg>',
                saveSolid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.37 4.65a5.57 5.57 0 00-7.91 0l-.46.46-.46-.46a5.57 5.57 0 00-7.91 0 5.63 5.63 0 000 7.92L12 21l8.37-8.43a5.63 5.63 0 000-7.92z" fill="currentColor" fill-rule="evenodd"/></svg>',
                search: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.5 3a7.5 7.5 0 107.5 7.5A7.5 7.5 0 0010.5 3zm0-1a8.5 8.5 0 016.35 14.15l5 5a.5.5 0 010 .7.5.5 0 01-.71 0l-5-5A8.5 8.5 0 1110.5 2z" fill="currentColor" fill-rule="evenodd"/></svg>',
                setting: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.29 3L14 4.88l.16.43.42.16.29.12.42.19.41-.2 1.8-.86 1.83 1.83-.86 1.8-.2.41.19.42c0 .09.08.19.11.28l.17.43.43.15 1.83.66v2.59l-1.88.71-.43.15-.17.43c0 .09-.07.18-.11.27l-.19.42.2.42.86 1.8-1.83 1.83-1.8-.86-.41-.2-.42.18c-.09.05-.19.08-.28.12l-.43.17-.15.43-.67 1.84H10.7l-.7-1.88-.15-.43-.43-.17-.28-.11-.42-.19-.41.2-1.8.86-1.79-1.83.86-1.8.19-.41-.18-.42-.12-.29-.16-.42-.44-.11L3 13.29V10.7l1.87-.7.44-.15.16-.43.12-.28.18-.42-.19-.42-.86-1.75 1.83-1.83 1.8.86.41.19.42-.18.28-.12.43-.16.11-.44.7-1.87h2.59M12 16a4 4 0 10-4-4 4 4 0 004 4m1.29-14H10.7a1 1 0 00-.94.67L9.1 4.54l-.32.13L7 3.82a.94.94 0 00-.43-.1 1 1 0 00-.73.28L4 5.84A1 1 0 003.82 7l.85 1.79-.13.33-1.88.66a1 1 0 00-.66.92v2.59a1 1 0 00.66.94l1.88.67c0 .11.09.21.13.32L3.82 17A1 1 0 004 18.15L5.84 20a1 1 0 00.71.3 1.08 1.08 0 00.43-.1l1.8-.86.32.13.66 1.88a1 1 0 00.94.67h2.59a1 1 0 00.94-.67l.67-1.88.32-.13 1.8.86a1.12 1.12 0 00.43.1 1 1 0 00.71-.3L20 18.15a1 1 0 00.18-1.15l-.86-1.8.14-.32 1.88-.67a1 1 0 00.66-.94V10.7a1 1 0 00-.66-.94l-1.88-.66c-.05-.11-.09-.22-.14-.32L20.18 7A1 1 0 0020 5.84L18.16 4a1 1 0 00-.71-.29 1 1 0 00-.43.1l-1.8.86-.32-.14-.67-1.87a1 1 0 00-.94-.66M12 15a3 3 0 113-3 3 3 0 01-3 3" fill="currentColor" fill-rule="evenodd"/></svg>',
                settingSolid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.33 9.76l-1.88-.66a3.05 3.05 0 00-.13-.32L20.18 7A1 1 0 0020 5.84L18.16 4a1 1 0 00-.71-.29.94.94 0 00-.43.1l-1.8.86-.32-.14-.67-1.87a1 1 0 00-.94-.66H10.7a1 1 0 00-.94.67L9.1 4.54l-.32.13L7 3.82a.94.94 0 00-.43-.1 1 1 0 00-.73.28L4 5.84A1 1 0 003.82 7l.86 1.79c0 .11-.1.22-.14.33l-1.87.66a1 1 0 00-.67.92v2.59a1 1 0 00.67.94l1.87.67c0 .11.09.21.14.32L3.82 17A1 1 0 004 18.15L5.84 20a1 1 0 00.71.3 1.08 1.08 0 00.43-.1l1.8-.86.32.13.66 1.88a1 1 0 00.94.67h2.59a1 1 0 00.94-.67l.67-1.88.32-.13 1.8.86a1.08 1.08 0 00.43.1 1 1 0 00.71-.3L20 18.15a1 1 0 00.18-1.15l-.86-1.8c.05-.11.09-.21.13-.32l1.88-.67a1 1 0 00.67-.94V10.7a1 1 0 00-.67-.94M12 15a3 3 0 113-3 3 3 0 01-3 3" fill="currentColor" fill-rule="evenodd"/></svg>',
                signOut: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.55 20a1.41 1.41 0 01-.57-.11 1.5 1.5 0 01-1-1.41V15H7.5A1.5 1.5 0 016 13.5v-3A1.5 1.5 0 017.5 9H13V5.52a1.5 1.5 0 011-1.41 1.53 1.53 0 011.71.4l5.9 6.49a1.5 1.5 0 010 2l-5.92 6.48a1.53 1.53 0 01-1.14.52zm-7-10a.5.5 0 00-.5.5v3a.5.5 0 00.5.5H14v4.48a.51.51 0 00.34.48.55.55 0 00.62-.14l5.91-6.48a.52.52 0 000-.68L15 5.18a.56.56 0 00-.66-.18.51.51 0 00-.34.48V10zm1 9h-3A3.5 3.5 0 012 15.5v-7A3.5 3.5 0 015.5 5h3a.5.5 0 010 1h-3A2.5 2.5 0 003 8.5v7A2.5 2.5 0 005.5 18h3a.5.5 0 010 1" fill="currentColor" fill-rule="evenodd"/></svg>',
                signOutSolid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.69 4.51L21.61 11a1.49 1.49 0 01.39 1 1.54 1.54 0 01-.39 1l-5.92 6.48a1.53 1.53 0 01-1.14.51 1.41 1.41 0 01-.57-.11 1.5 1.5 0 01-1-1.41V15H7.5A1.5 1.5 0 016 13.5v-3A1.5 1.5 0 017.5 9H13V5.52a1.5 1.5 0 011-1.41 1.53 1.53 0 011.69.4zM8.5 19h-3A3.5 3.5 0 012 15.5v-7A3.5 3.5 0 015.5 5h3a.5.5 0 010 1h-3A2.5 2.5 0 003 8.5v7A2.5 2.5 0 005.5 18h3a.5.5 0 010 1" fill="currentColor" fill-rule="evenodd"/></svg>',
                star: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.71a.49.49 0 00-.41-.35l-6.29-.91-2.84-5.69a.54.54 0 00-.92 0L8.73 8.45l-6.29.91a.49.49 0 00-.44.35.53.53 0 00.12.52l4.56 4.42-1.05 6.25a.51.51 0 00.21.5.45.45 0 00.3.1.53.53 0 00.24-.06l5.62-3 5.62 3a.53.53 0 00.24.06.45.45 0 00.3-.1.51.51 0 00.21-.5l-1.08-6.25 4.56-4.42a.53.53 0 00.15-.52zm-5.4 4.23l-.38.37.09.51.91 5.28-4.75-2.49-.47-.25-.47.25-4.75 2.49.91-5.28.09-.51-.38-.37-3.84-3.74 5.31-.77.52-.07.23-.47L12 4.09l2.38 4.8.23.47.52.07 5.31.77z" fill="currentColor" fill-rule="evenodd"/></svg>',
                starSolid: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.71a.49.49 0 00-.41-.35l-6.29-.91-2.84-5.69a.53.53 0 00-.92 0L8.73 8.45l-6.29.91a.49.49 0 00-.44.35.48.48 0 00.12.52l4.56 4.42-1.05 6.25a.51.51 0 00.21.5.5.5 0 00.54 0l5.62-3 5.62 3a.53.53 0 00.24.06.47.47 0 00.3-.1.51.51 0 00.21-.5l-1.08-6.25 4.55-4.42a.49.49 0 00.16-.48z" fill="currentColor" fill-rule="evenodd"/></svg>'
            },
            d = (0, s.jsx)(n.default.Fragment, null),
            u = function (e) {
                var t, a = e.iconKey,
                    o = e.solid,
                    n = e.className,
                    r = e.width,
                    u = e.height,
                    v = (t = "".concat(a).concat(o ? "Solid" : ""), (t ? c[t] : "") || "");
                return v ? (0, s.jsx)(l.default, {
                    className: "d-flex ".concat(o ? i.default.colorActive : i.default.colorDefault, " ").concat(n),
                    width: r,
                    height: u,
                    svg: v
                }) : d
            };
        u.propTypes = {
            iconKey: r.default.string.isRequired,
            solid: r.default.bool,
            width: r.default.string,
            height: r.default.string,
            className: r.default.string
        }, u.defaultProps = {
            solid: !1,
            width: "24px",
            height: "24px",
            className: ""
        };
        var v = u;
        t.default = v
    },
    59: function (e, t, a) {
        "use strict";
        var o = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        o(a(2));
        var n = o(a(3)),
            r = o(a(108)),
            l = a(4),
            i = function (e) {
                var t = e.show,
                    a = e.position,
                    o = e.children,
                    n = e.className;
                return (0, l.jsx)("div", {
                    className: r.default.popupContainer
                }, (0, l.jsx)("div", {
                    className: "pt-xxsm ".concat(r.default.popupContent, " ").concat("right" === a ? r.default.popupContentRight : r.default.popupContentLeft, " ").concat(t ? r.default.popupContentActive : "", " ").concat(n)
                }, (0, l.jsx)("div", {
                    className: "".concat(r.default.popupBackground)
                }, (0, l.jsx)("div", {
                    className: "d-flex flex-column col"
                }, o))))
            };
        i.propTypes = {
            show: n.default.bool,
            position: n.default.oneOf(["left", "right"]),
            children: n.default.node.isRequired,
            className: n.default.string
        }, i.defaultProps = {
            show: !1,
            position: "left",
            className: ""
        };
        var s = i;
        t.default = s
    },
    60: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = t.ExceptionStateStateConsumer = t.NotificationContextProvider = void 0;
        var r = n(a(7)),
            l = n(a(23)),
            i = o(a(2)),
            s = n(a(3)),
            c = a(4);

        function d(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, o)
            }
            return a
        }

        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? d(Object(a), !0).forEach((function (t) {
                    (0, l.default)(e, t, a[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : d(Object(a)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }))
            }
            return e
        }
        var v = {
                notifications: {},
                encryptedUserIdString: "",
                updateList: !1,
                hasNewNotifications: !1,
                savedJobsCount: 0,
                showJobNotification: "false",
                showOtherNotifications: "true"
            },
            f = (0, i.createContext)(),
            h = function (e, t) {
                switch (t.type) {
                    case "SET":
                        return u(u({}, e), t.payload);
                    default:
                        return v
                }
            },
            p = function (e) {
                var t = (0, i.useReducer)(h, v),
                    a = (0, r.default)(t, 2),
                    o = a[0],
                    n = a[1],
                    l = (0, i.useMemo)((function () {
                        return {
                            state: o,
                            dispatch: n
                        }
                    }), [o, n]);
                return (0, c.jsx)(f.Provider, {
                    value: l
                }, e.children)
            };
        t.NotificationContextProvider = p, p.propTypes = {
            children: s.default.node.isRequired
        };
        var m = f.Consumer;
        t.ExceptionStateStateConsumer = m;
        var g = f;
        t.default = g
    },
    62: function (e, t, a) {
        e.exports = {
            menuItem: "menuItem__MenuItemStyles__menuItem",
            menuItemColor: "menuItem__MenuItemStyles__menuItemColor",
            menuItemActiveColor: "menuItem__MenuItemStyles__menuItemActiveColor",
            menuItemHoverEffect: "menuItem__MenuItemStyles__menuItemHoverEffect",
            menuAvatar: "menuItem__MenuItemStyles__menuAvatar",
            bottomBorder: "menuItem__MenuItemStyles__bottomBorder",
            menuItemHeading: "menuItem__MenuItemStyles__menuItemHeading",
            menuItemSubtext: "menuItem__MenuItemStyles__menuItemSubtext"
        }
    },
    63: function (e, t) {
        e.exports = GD.util
    },
    66: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.unlockSearchPage = t.lockSearchPage = t.unlockPage = t.lockPage = void 0;
        var o = a(28);
        t.lockPage = function () {
            window.document.querySelector("body").classList.add(o.pageLock)
        };
        t.unlockPage = function () {
            window.document.querySelector("body").classList.remove(o.pageLock)
        };
        t.lockSearchPage = function () {
            window.document.querySelector("body").classList.add(o.searchPageLock)
        };
        t.unlockSearchPage = function () {
            window.document.querySelector("body").classList.remove(o.searchPageLock)
        }
    },
    67: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(6)),
            l = n(a(7)),
            i = o(a(2)),
            s = n(a(3)),
            c = n(a(59)),
            d = n(a(47)),
            u = n(a(26)),
            v = a(4),
            f = function (e) {
                var t = e.menu,
                    a = e.menuAction,
                    o = e.position,
                    n = e.children,
                    s = e.onMouseEnter,
                    f = e.onMouseLeave,
                    h = (0, i.useState)(!1),
                    p = (0, l.default)(h, 2),
                    m = p[0],
                    g = p[1];
                return (0, v.jsx)("div", {
                    onMouseEnter: function (e) {
                        g(!0), s(e)
                    },
                    onMouseLeave: function (e) {
                        g(!1), f(e)
                    }
                }, n(m), (0, v.jsx)(c.default, {
                    show: m,
                    position: o
                }, t.map((function (e, t) {
                    var o = e.childNavigationLinks,
                        n = void 0 === o ? [] : o;
                    return (0, v.jsx)("ul", {
                        className: "p-0 m-0 ".concat(u.default.list),
                        key: t
                    }, n.map((function (e, t) {
                        return (0, v.jsx)("li", {
                            className: "p-0 m-0",
                            key: e.id || t
                        }, (0, v.jsx)(d.default, (0, r.default)({
                            className: "px-std",
                            menuAction: a
                        }, e)))
                    })))
                }))))
            };
        f.propTypes = {
            menu: s.default.array,
            position: s.default.oneOf(["left", "right"]),
            children: s.default.oneOfType([s.default.func, s.default.node]).isRequired,
            onMouseEnter: s.default.func,
            onMouseLeave: s.default.func
        }, f.defaultProps = {
            menu: [],
            position: "left",
            onMouseEnter: function () {},
            onMouseLeave: function () {}
        };
        var h = f;
        t.default = h
    },
    68: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.tldLocalizedCountryMap = void 0;
        t.tldLocalizedCountryMap = {
            1: "United States",
            2: "United Kingdom",
            3: "Canada",
            4: "India",
            5: "Australia",
            6: "France",
            7: "Deutschland",
            8: "España",
            9: "Brasil",
            10: "Nederland",
            11: "Österreich",
            12: "México",
            13: "Argentina",
            14: "België",
            15: "Belgique",
            16: "Schweiz",
            17: "Suisse",
            18: "Ireland",
            19: "Canada",
            20: "Hong Kong",
            21: "New Zealand",
            22: "Singapore",
            23: "Italia"
        }
    },
    716: function (e, t, a) {
        "use strict";
        var o = a(1),
            n = (o(a(2)), o(a(24))),
            r = a(12),
            l = o(a(717)),
            i = a(4);
        ! function () {
            var e = document.getElementById("SiteNav");
            if (e) {
                var t = GD,
                    a = t.page,
                    o = void 0 === a ? {} : a,
                    s = t.i18n,
                    c = void 0 === s ? {} : s,
                    d = o.headerData,
                    u = void 0 === d ? {} : d,
                    v = o.header,
                    f = void 0 === v ? {} : v,
                    h = o.careerNavData,
                    p = void 0 === h ? {} : h,
                    m = f.searchLocation,
                    g = void 0 === m ? "" : m,
                    x = f.searchLocationType,
                    y = void 0 === x ? "" : x,
                    w = f.searchlocationFieldId,
                    b = void 0 === w ? 0 : w,
                    j = f.searchKeyword,
                    _ = void 0 === j ? "" : j,
                    C = f.profilePhotoRelativeUrl,
                    S = void 0 === C ? "" : C,
                    N = (appCache || {}).initialState,
                    k = (void 0 === N ? {} : N).headerSearchCriteria;
                if (k) {
                    var I = k.searchLocation;
                    g = void 0 === I ? "" : I;
                    var M = k.searchLocationType;
                    y = void 0 === M ? "" : M;
                    var A = k.searchlocationFieldId;
                    b = void 0 === A ? 0 : A;
                    var E = k.searchKeyword;
                    _ = void 0 === E ? "" : E
                }
                var P = g ? {
                        name: g,
                        id: b,
                        type: y
                    } : {},
                    L = p || {},
                    T = L.careerNavMenu,
                    z = L.careerNavData,
                    O = void 0 === z ? {} : z;
                T && (u.menu || (u.menu = {}), u.menu.careerOverviewMenu = T), Object.assign(u, {
                    searchLocation: P,
                    searchKeyword: _,
                    profilePhotoRelativeUrl: S,
                    showCareerNavigation: !!T,
                    careerNavProps: O
                }), n.default.hydrate((0, i.jsx)(r.I18nContextProvider, {
                    value: c
                }, (0, i.jsx)(l.default, u)), e)
            }
        }()
    },
    717: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = t.StyledOverlay = void 0;
        var r = n(a(6)),
            l = n(a(7)),
            i = n(a(52)),
            s = o(a(2)),
            c = a(12),
            d = n(a(9)),
            u = o(a(38)),
            v = o(a(150)),
            f = o(a(32)),
            h = o(a(60)),
            p = a(113),
            m = a(77),
            g = a(27),
            x = n(a(97)),
            y = n(a(718)),
            w = n(a(762)),
            b = n(a(763)),
            j = n(a(764)),
            _ = n(a(765)),
            C = n(a(766)),
            S = n(a(768)),
            N = n(a(769)),
            k = n(a(770)),
            I = n(a(771)),
            M = n(a(773)),
            A = n(a(782)),
            E = n(a(81)),
            P = n(a(100)),
            L = n(a(783)),
            T = n(a(106)),
            z = n(a(26)),
            O = n(a(33)),
            B = a(4);
        var H = (0, i.default)("div", {
            target: "e1qq3md90"
        })({
            name: "3gygt6",
            styles: "background-color:#ffffff;height:100vh;opacity:0.85;position:absolute;top:72px;right:0;left:0;z-index:1000;"
        });
        t.StyledOverlay = H;
        var D = (0, B.jsx)(c.I18nMessageComponent, {
                id: "msg.sign-in"
            }),
            K = (0, B.jsx)("div", {
                className: "d-flex d-md-none"
            }, (0, B.jsx)(C.default, null)),
            R = (0, B.jsx)("div", {
                className: "d-none d-md-flex"
            }, (0, B.jsx)(S.default, null)),
            U = (0, B.jsx)(H, null),
            F = (0, B.jsx)(w.default, null),
            G = (0, B.jsx)(_.default, null),
            V = (0, B.jsx)(b.default, {
                className: "d-none d-md-block",
                key: "0"
            }),
            J = (0, B.jsx)(j.default, {
                key: "1"
            }),
            q = (0, B.jsx)((function () {
                var e, t, a = (0, s.useContext)(u.default),
                    o = a.id,
                    n = a.type,
                    i = a.subType,
                    c = a.searchKeyword,
                    w = a.searchLocation,
                    b = a.hideSearch,
                    j = a.showNotificationsMainNavigation,
                    _ = void 0 !== j && j,
                    C = a.careerNavProps,
                    S = a.showHeroHeader,
                    H = a.showCareerNavigation,
                    q = a.showSearchBoxV1,
                    W = a.profilePhotoRelativeUrl,
                    Y = a.isCareerEnabled,
                    X = a.isLoggedIn,
                    Q = {
                        id: o,
                        type: n,
                        subType: i,
                        searchKeyword: c,
                        searchLocation: w,
                        hideSearch: b,
                        useMemberSearch: !0,
                        isCareerEnabled: Y
                    },
                    Z = (0, s.useContext)(v.default),
                    $ = (0, s.useContext)(f.default),
                    ee = (0, s.useContext)(h.default),
                    te = ee.state,
                    ae = void 0 === te ? {} : te,
                    oe = Z[o] || Z.default,
                    ne = oe.showSearchNavigation,
                    re = oe.showPrimaryNavigation,
                    le = oe.showSecondaryNavigation,
                    ie = (0, s.useState)(!1),
                    se = (0, l.default)(ie, 2),
                    ce = se[0],
                    de = se[1],
                    ue = (0, s.useState)(!1),
                    ve = (0, l.default)(ue, 2),
                    fe = ve[0],
                    he = ve[1],
                    pe = (null === (e = GD) || void 0 === e || null === (t = e.page) || void 0 === t ? void 0 : t.header) || {},
                    me = pe.profileTooltipEnabled,
                    ge = void 0 !== me && me,
                    xe = pe.ipLocationCountryId,
                    ye = s.default.createRef(),
                    we = s.default.createRef(),
                    be = (0, s.useState)(!1),
                    je = (0, l.default)(be, 2),
                    _e = je[0],
                    Ce = je[1],
                    Se = (0, s.useRef)(null),
                    Ne = function () {
                        Se.current && Ce(Se.current.getBoundingClientRect().top <= 0)
                    },
                    ke = (0, s.useState)(!1),
                    Ie = (0, l.default)(ke, 2),
                    Me = Ie[0],
                    Ae = Ie[1],
                    Ee = function (e) {
                        var t = (e.detail || !1).showSearchFocusOverlay;
                        Ae(t)
                    };
                (0, s.useEffect)((function () {
                    return window.addEventListener("toggleSearchFocusOverlay", Ee),
                        function () {
                            window.removeEventListener("toggleSearchFocusOverlay", Ee)
                        }
                }), []), (0, s.useEffect)((function () {
                    var e, t;
                    ne && window.addEventListener("scroll", Ne), document.addEventListener("smarter-banner-loaded", (function () {
                        var e = document.querySelector(".tooltipContainer");
                        e && (e.style.cssText = "display: none")
                    }));
                    var a = "";
                    window.sessionStorage && (a = window.sessionStorage.getItem("showJobNotification"));
                    var o = [Promise.resolve({}), Promise.resolve({})];
                    if (1 === (null === (e = getGdGlobals()) || void 0 === e || null === (t = e.page) || void 0 === t ? void 0 : t.domainId) && (o[0] = (0, p.getNotifications)().catch((function (e) {
                            return y.default.error("Error fetching site notifcations: ".concat(JSON.stringify(e))), {}
                        }))), _ && (o[1] = (0, p.getSavedJobsCount)().catch((function (e) {
                            return y.default.error("Error fetching savedJobsCount: ".concat(JSON.stringify(e))), {}
                        }))), Promise.all(o).then((function (e) {
                            var t = (0, l.default)(e, 2),
                                o = t[0],
                                n = void 0 === o ? {} : o,
                                r = t[1],
                                i = void 0 === r ? {} : r,
                                s = window.GDStorage,
                                c = (void 0 === s ? {} : s).setVal;
                            (void 0 === c ? function () {} : c)("savedJobCount", i);
                            var d = {
                                savedJobsCount: i,
                                showJobNotification: a
                            };
                            d = Object.assign({}, n, d), ee.dispatch({
                                type: "SET",
                                payload: d
                            })
                        })), _) {
                        document.body.addEventListener("updateHeaderSavedCount", (function (e) {
                            var t = (e.detail || {}).saveAction,
                                a = window.GDStorage,
                                o = void 0 === a ? {} : a,
                                n = o.getVal,
                                r = void 0 === n ? function () {
                                    return 0
                                } : n,
                                l = o.setVal,
                                i = void 0 === l ? function () {} : l;
                            window.sessionStorage && window.sessionStorage.setItem("showJobNotification", "true");
                            var s = r("savedJobCount") || 0;
                            if ("saveJob" === t) {
                                var c = s + 1;
                                i("savedJobCount", c), ee.dispatch({
                                    type: "SET",
                                    payload: {
                                        savedJobsCount: c,
                                        showJobNotification: "true"
                                    }
                                })
                            } else if ("unsaveJob" === t) {
                                var d = Math.max(s - 1, 0);
                                i("savedJobCount", d), ee.dispatch({
                                    type: "SET",
                                    payload: {
                                        savedJobsCount: d,
                                        showJobNotification: "true"
                                    }
                                })
                            } else(0, p.getSavedJobsCount)().then((function (e) {
                                ee.dispatch({
                                    type: "SET",
                                    payload: {
                                        savedJobsCount: e,
                                        showJobNotification: "true"
                                    }
                                })
                            }))
                        }))
                    }
                    return function () {
                        ne && window.removeEventListener("scroll", (function () {
                            return Ne
                        }))
                    }
                }), []);
                return (0, B.jsx)(s.default.Fragment, null, (0, B.jsx)("nav", {
                    "data-test": "background-header-nav",
                    className: "d-flex align-items-center ".concat(z.default.navigationBackground, " ").concat(z.default.relativePosition)
                }, (0, B.jsx)("div", {
                    className: "col ".concat(z.default.bottomShadow)
                }, (0, B.jsx)("div", {
                    className: z.default.navigationWrapper
                }, (0, B.jsx)("div", {
                    className: "d-flex justify-content-between align-items-center px-std px-md-lg ".concat(z.default.mainNav)
                }, X ? [(0, B.jsx)("div", {
                    className: "d-flex order-0 order-md-6",
                    ref: we,
                    key: "0"
                }, (0, B.jsx)("div", {
                    className: "d-flex d-md-none"
                }, (0, B.jsx)("button", {
                    type: "button",
                    className: "p-0 ".concat(z.default.iconBtn),
                    onClick: function () {
                        de(!0), (0, m.lockPage)()
                    },
                    "data-test": "user-profile-drawer-trigger"
                }, W ? (0, B.jsx)("img", {
                    src: W,
                    className: z.default.mobileAvatar,
                    alt: "user avatar"
                }) : (0, B.jsx)(d.default, {
                    className: "d-flex ".concat(O.default.colorDefault),
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 19a8.91 8.91 0 01-5.33-1.75 6 6 0 0110.66 0A8.91 8.91 0 0112 21zm6.11-2.4a7 7 0 00-12.22 0 9 9 0 1112.22 0zM12 6a4 4 0 104 4 4 4 0 00-4-4zm0 7a3 3 0 113-3 3 3 0 01-3 3z" fill="currentColor" fill-rule="evenodd"/></svg>'
                })), (0, B.jsx)(k.default, {
                    show: ce,
                    position: "left",
                    onDrawerClosed: function () {
                        de(!1), (0, m.unlockPage)()
                    },
                    ipLocationCountryId: xe
                })), (0, B.jsx)("div", {
                    className: "d-none d-md-flex"
                }, (0, B.jsx)(I.default, {
                    ipLocationCountryId: xe
                }))), _ ? (0, B.jsx)("div", {
                    className: "d-flex order-1 order-md-5",
                    ref: ye,
                    key: "1"
                }, K, R) : null] : (0, B.jsx)("div", {
                    className: "d-flex order-0 order-md-6"
                }, (0, B.jsx)("button", {
                    className: "d-flex align-items-center justify-content-center p-0 m-0 ".concat(z.default.signInButton),
                    onClick: x.default,
                    type: "button"
                }, D)), (0, B.jsx)("div", {
                    className: "d-flex order-2 ".concat(z.default.brandLogoContainer)
                }, (0, B.jsx)("a", (0, r.default)({}, {
                    href: "/index.htm",
                    alt: "",
                    target: "_top",
                    rel: "nofollow"
                }, {
                    "data-test": "header-glassdoor-logo",
                    "aria-label": "Glassdoor Logo"
                }), (0, B.jsx)(d.default, {
                    className: "d-flex align-items-center ".concat(z.default.brandLogo),
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="122" height="24" viewBox="0 0 163 32"><g fill="#0CAA41" fill-rule="evenodd"><path id="prefix__icon-logo-glassdoor-1" d="M163 7.366a.55.55 0 00-.285-.447c-.37-.182-.908-.307-2.005-.307-2.475 0-4.664 1.211-5.619 3.237V7.374a.39.39 0 00-.393-.388h-3.706a.39.39 0 00-.393.388v16.684a.39.39 0 00.393.388h3.882a.391.391 0 00.394-.388v-7.505c0-3.352 2.366-5.018 5.442-5.018a6.37 6.37 0 011.794.274c.246.08.496-.12.496-.376V7.366zm-24.807 12.986c-2.653 0-4.705-1.85-4.705-4.644s2.053-4.645 4.705-4.645c2.653 0 4.704 1.852 4.704 4.645 0 2.794-2.051 4.644-4.704 4.644zm0-13.794c-5.447 0-9.515 3.702-9.515 9.15s4.068 9.15 9.515 9.15c5.446 0 9.514-3.702 9.514-9.15s-4.068-9.15-9.514-9.15zm-21.6 13.794c-2.653 0-4.705-1.85-4.705-4.644 0-2.793 2.052-4.644 4.705-4.644s4.704 1.85 4.704 4.644-2.051 4.644-4.704 4.644zm0-13.794c-5.447 0-9.515 3.702-9.515 9.15s4.068 9.15 9.515 9.15c5.446 0 9.514-3.702 9.514-9.15s-4.068-9.15-9.514-9.15zm-21.57 13.837c-2.652 0-4.633-1.85-4.633-4.68 0-2.828 1.981-4.68 4.634-4.68 2.618 0 4.633 1.782 4.633 4.68 0 2.864-2.015 4.68-4.633 4.68zM103.792.001H99.91a.39.39 0 00-.392.388V9.5c-1.203-1.676-3.184-2.969-5.943-2.969-4.315 0-7.994 3.284-7.994 9.186 0 5.901 3.68 9.183 8.064 9.183 2.583 0 4.6-1.117 5.872-2.898v2.057a.39.39 0 00.393.388h3.882a.39.39 0 00.393-.388V.39a.39.39 0 00-.393-.389zM83.01 19.161c0 3.981-2.936 5.693-7.64 5.693-3.249 0-6.044-.864-7.643-2.651a.395.395 0 01-.01-.504l2.244-2.877a.39.39 0 01.589-.022c1.187 1.199 3.01 1.932 5.28 1.932 1.309 0 2.37-.348 2.37-1.326 0-.944-.955-1.152-3.926-1.781-2.618-.525-5.872-1.711-5.872-5.518 0-3.527 2.83-5.553 7.464-5.553 3.047 0 5.238.908 6.783 2.338a.39.39 0 01.037.526l-2.13 2.73a.386.386 0 01-.558.06c-1.045-.92-2.78-1.498-4.486-1.498-1.45 0-2.264.455-2.264 1.223 0 .873.956 1.083 4.104 1.746 3.076.663 5.658 1.816 5.658 5.482zm-17.952.01c0 3.981-2.936 5.693-7.64 5.693-3.249 0-6.044-.864-7.643-2.651a.395.395 0 01-.01-.503l2.244-2.878a.391.391 0 01.589-.022c1.187 1.2 3.01 1.933 5.28 1.933 1.309 0 2.37-.349 2.37-1.327 0-.944-.955-1.152-3.926-1.781-2.618-.524-5.872-1.711-5.872-5.518 0-3.527 2.83-5.552 7.464-5.552 3.046 0 5.237.908 6.782 2.337a.39.39 0 01.037.526l-2.13 2.73a.386.386 0 01-.557.061c-1.045-.92-2.78-1.5-4.487-1.5-1.45 0-2.264.456-2.264 1.224 0 .873.957 1.083 4.104 1.746 3.076.663 5.659 1.816 5.659 5.482zm-23.268-1.78c0 1.92-1.59 3.597-4.067 3.597-1.627 0-2.512-.734-2.512-1.851 0-.978.744-1.712 2.194-1.922l4.385-.523v.699zM38.713 6.6c-3.704 0-6.495 1.224-7.742 3.643a.392.392 0 00.129.495l2.83 1.996c.178.125.428.084.535-.105.786-1.397 2.547-1.874 4.248-1.874 2.087 0 3.076.732 3.076 1.746v.279c0 .42-.247.63-.919.699l-4.846.419c-3.254.313-5.658 2.304-5.658 5.482 0 3.213 2.475 5.448 5.977 5.448 2.759 0 4.527-1.327 5.446-2.724v1.987a.39.39 0 00.393.388h3.883a.39.39 0 00.393-.388V13.689c0-4.854-2.582-7.089-7.745-7.089zM27.163.387v23.668a.39.39 0 01-.393.389h-3.918a.39.39 0 01-.393-.389V.38c0-.21.173-.38.385-.38h3.926a.39.39 0 01.393.388zm-17.72 19.99c-2.652 0-4.633-1.851-4.633-4.68 0-2.829 1.98-4.68 4.633-4.68s4.598 1.782 4.598 4.68c0 2.863-1.945 4.68-4.598 4.68zm8.768-13.41h-3.878a.396.396 0 00-.398.393v2.052c-.99-1.572-3.042-2.864-5.765-2.864-4.386 0-8.17 3.248-8.17 9.08C0 21.424 3.607 24.6 8.311 24.6c2.547 0 4.527-1.047 5.695-2.688v1.117c0 2.514-1.239 4.505-5.2 4.505-1.991 0-3.59-.654-4.992-1.88a.388.388 0 00-.59.082l-1.759 2.91c-.227.376-.196.587-.052.711 1.806 1.55 4.155 2.507 7.57 2.507 7.428 0 9.621-4.085 9.621-8.59V7.355a.39.39 0 00-.393-.388z"/></g></svg>'
                }))), (0, B.jsx)("div", {
                    className: "d-flex col justify-content-end order-3",
                    id: "SearchForm"
                }, q ? (0, B.jsx)(L.default, Q) : (0, B.jsx)(P.default, Q)), (0, B.jsx)("div", {
                    className: "d-flex d-md-none order-4",
                    id: "HamburgerButton"
                }, (0, B.jsx)("button", {
                    "aria-label": "Navigation Menu",
                    className: "p-0 ".concat(z.default.iconBtn, " ").concat(ae.hasNewNotifications && !_ ? z.default.notificationBadge : ""),
                    onClick: function () {
                        he(!0), (0, m.lockPage)(), setTimeout((function () {
                            (0, g.trackClickEvent)("no-label", "menu-hamburger")
                        }), 300)
                    },
                    title: "Open Navigation Menu",
                    type: "button"
                }, (0, B.jsx)(d.default, {
                    className: "d-flex ".concat(O.default.colorDefault),
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M21 11H3a1 1 0 000 2h18a1 1 0 000-2zM3 5h18a1 1 0 000-2H3a1 1 0 000 2zM21 19H3a1 1 0 000 2h18a1 1 0 000-2z"/></g></svg>'
                })), (0, B.jsx)(N.default, {
                    show: fe,
                    position: "right",
                    onDrawerClosed: function () {
                        he(!1), (0, m.unlockPage)()
                    }
                }))))), Me ? U : null), S ? F : H ? (0, B.jsx)(T.default, (0, r.default)({
                    id: o,
                    type: n,
                    subType: i,
                    isNewSiteHeader: !0,
                    menu: $
                }, C)) : ne ? (0, B.jsx)("div", {
                    className: "".concat(z.default.stickyWrapper, " ").concat(_e ? z.default.sticky : ""),
                    ref: Se
                }, G) : [re ? V : null, le ? J : null], (0, B.jsx)(M.default, {
                    overlayTarget: ye
                }), ge ? (0, B.jsx)(A.default, {
                    overlayTarget: we,
                    showNotificationsMainNavigation: _
                }) : null, (0, B.jsx)(E.default, {
                    jobTitle: "Non Title" === (null == C ? void 0 : C.occupation) ? "" : (null == C ? void 0 : C.occupation) || (null == C ? void 0 : C.origOccupation) || "",
                    location: null == C ? void 0 : C.location
                }))
            }), null),
            W = function (e) {
                return (0, B.jsx)(u.AppContextProvider, e, (0, B.jsx)(f.MenuContextProvider, {
                    value: e.menu
                }, (0, B.jsx)(v.OptionContextProvider, {
                    value: e.options
                }, (0, B.jsx)(h.NotificationContextProvider, null, q, e.children))))
            };
        W.propTypes = u.AppContextProvider.propTypes, W.defaultProps = u.AppContextProvider.defaultProps;
        var Y = W;
        t.default = Y
    },
    718: function (e, t, a) {
        "use strict";
        var o = new(0, a(719).default)("member-header");
        e.exports = o
    },
    73: function (e, t, a) {
        e.exports = {
            menuItem: "notification__NotificationStyles__menuItem",
            notificationMessage: "notification__NotificationStyles__notificationMessage",
            iconPlaceholder: "notification__NotificationStyles__iconPlaceholder",
            jobNotification: "notification__NotificationStyles__jobNotification",
            notificationsContainer: "notification__NotificationStyles__notificationsContainer",
            notificationsCountBadge: "notification__NotificationStyles__notificationsCountBadge",
            notificationsIconContainer: "notification__NotificationStyles__notificationsIconContainer",
            notificationIndicator: "notification__NotificationStyles__notificationIndicator",
            notificationsItem: "notification__NotificationStyles__notificationsItem",
            notificationsPopup: "notification__NotificationStyles__notificationsPopup",
            popupHeader: "notification__NotificationStyles__popupHeader"
        }
    },
    731: function (e, t) {},
    733: function (e, t) {},
    762: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = t.depth = void 0;
        var r = n(a(6)),
            l = n(a(7)),
            i = a(74),
            s = o(a(2)),
            c = a(12),
            d = n(a(9)),
            u = n(a(22)),
            v = a(21),
            f = n(a(32)),
            h = n(a(58)),
            p = a(41),
            m = n(a(67)),
            g = n(a(26)),
            x = a(27),
            y = a(4);
        var w = {
                companiesBicolor: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" fill-rule="evenodd"><path fill="#0CAA41" fill-rule="nonzero" d="M19.182 10h19.636c1.205 0 2.182.895 2.182 2v27H17V12c0-1.105.977-2 2.182-2zM39 37V13a1 1 0 00-1-1H20a1 1 0 00-1 1v24h20z"/><path fill="#DFF7E7" fill-rule="nonzero" d="M22 14h14a1 1 0 011 1v20h-4v-3a3 3 0 00-3-3h-2a3 3 0 00-3 3v3h-4V15a1 1 0 011-1z"/><path fill="#0CAA41" fill-rule="nonzero" d="M16 19v2h-6a1 1 0 00-1 1v15h7v2H7V21c0-1.105.728-2 1.625-2H16z"/><rect width="4" height="4" x="23" y="16" fill="#0CAA41" rx="2"/><rect width="4" height="4" x="23" y="21" fill="#0CAA41" rx="2"/><rect width="4" height="4" x="31" y="16" fill="#0CAA41" rx="2"/><rect width="4" height="4" x="31" y="21" fill="#0CAA41" rx="2"/><path fill="#0CAA41" stroke="#0CAA41" stroke-width="2" d="M27 38h4v-6a1 1 0 00-1-1h-2a1 1 0 00-1 1v6z"/></g></svg>',
                interviewsBicolor: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" fill-rule="evenodd"><path fill="#0CAA41" fill-rule="nonzero" d="M10 22c0 .295.011.588.033.879C8.755 24.165 8 25.779 8 27.5c0 2.192 1.218 4.267 3.35 5.704l.741.5.122.885c.053.386.089.772.107 1.158.398-.226.765-.457 1.1-.693l.717-.505.859.186c.808.175 1.648.265 2.504.265.853 0 1.676-.089 2.458-.254 1.076.404 2.214.719 3.398.932C21.64 36.518 19.639 37 17.5 37c-1.012 0-1.993-.108-2.928-.31-1.206.849-2.73 1.62-4.572 2.31.345-1.38.422-2.758.232-4.137C7.649 33.12 6 30.469 6 27.5c0-2.934 1.61-5.557 4.14-7.3-.093.59-.14 1.19-.14 1.8z"/><path fill="#FFF" stroke="#0CAA41" stroke-width="2" d="M32.714 37.39a11.828 11.828 0 01.309-3.935l.124-.5.479-.19C38.73 30.748 42 26.586 42 22c0-6.576-6.675-12-15-12s-15 5.424-15 12 6.675 12 14.991 12l.327-.003.667-.016.309.364c.946 1.115 2.418 2.134 4.42 3.044z"/><ellipse cx="27" cy="22" fill="#DFF7E7" rx="12" ry="9"/><circle cx="21" cy="22" r="2" fill="#0CAA41"/><circle cx="27" cy="22" r="2" fill="#0CAA41"/><circle cx="33" cy="22" r="2" fill="#0CAA41"/></g></svg>',
                jobsBicolor: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" fill-rule="evenodd"><path fill="#DFF7E7" d="M10 29h4.465a1 1 0 01.832.445l1.11 1.664A2 2 0 0018.07 32h11.86a2 2 0 001.664-.89l1.11-1.665a1 1 0 01.831-.445H38v7H10v-7z"/><path fill="#0CAA41" d="M11 32v3a1 1 0 001 1h24a1 1 0 001-1v-3a1 1 0 012 0v4a2 2 0 01-2 2H11a2 2 0 01-2-2v-4a1 1 0 012 0zm5-18v-2a2 2 0 012-2h12a2 2 0 012 2v2h7a2 2 0 012 2v11a2 2 0 01-2 2h-5.465a1 1 0 00-.832.445l-1.11 1.664A2 2 0 0129.93 32H18.07a2 2 0 01-1.664-.89l-1.11-1.665a1 1 0 00-.831-.445H9a2 2 0 01-2-2V16a2 2 0 012-2h7zm2 0h12v-1a1 1 0 00-1-1H19a1 1 0 00-1 1v1zm-8 2a1 1 0 00-1 1v9a1 1 0 001 1h5.465a1 1 0 01.832.445l1.406 2.11a1 1 0 00.832.445h10.93a1 1 0 00.832-.445l1.406-2.11a1 1 0 01.832-.445H38a1 1 0 001-1v-9a1 1 0 00-1-1H10zm11 10h6a1 1 0 010 2h-6a1 1 0 010-2z"/></g></svg>',
                salariesBicolor: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" fill-rule="evenodd"><path fill="#0CAA41" d="M12 36h24a2 2 0 01-2 2H14a2 2 0 01-2-2zm-2-4h28a2 2 0 01-2 2H12a2 2 0 01-2-2zM9 10h30a2 2 0 012 2v16a2 2 0 01-2 2H9a2 2 0 01-2-2V12a2 2 0 012-2zm5 2a5 5 0 01-5 5v6a5 5 0 015 5h20a5 5 0 015-5v-6a5 5 0 01-5-5H14zm10 12a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"/><path fill="#DFF7E7" d="M15.71 14h16.58A7.015 7.015 0 0037 18.71v2.58A7.015 7.015 0 0032.29 26H15.71A7.015 7.015 0 0011 21.29v-2.58A7.015 7.015 0 0015.71 14zM24 24a4 4 0 100-8 4 4 0 000 8z"/></g></svg>'
            },
            b = {
                z0: "0 0 2px #c4c7cc",
                z1: "0 1px 3px rgba(133, 140, 148, 0.3)",
                z2: "0 4px 5px rgba(133, 140, 148, 0.3)",
                z3: "0 8px 10px rgba(133, 140, 148, 0.4)",
                z4: "0 16px 24px rgba(133, 140, 148, 0.5)"
            };
        t.depth = b;
        var j = "\n    background-color: ".concat(v.ui.white, " !important;\n    border-radius: 3px;\n    box-shadow: ").concat(b.z0, ", ").concat(b.z2, ";\n"),
            _ = (0, i.css)("min-width:auto;:hover{", j, "}"),
            C = (0, i.css)(j, ""),
            S = (0, i.css)("background-color:", v.ui.grey[200], " !important;color:", v.ui.grey[500], " !important;"),
            N = (0, i.css)({
                name: "trqft4",
                styles: "display:grid;grid-template:auto / 25% 25% 25% 25%;@media (min-width:992px){grid-template:auto / auto auto auto auto 1fr;grid-gap:48px;}"
            }),
            k = (0, i.css)({
                name: "1l7mgse",
                styles: "font-weight:normal;"
            }),
            I = (0, y.jsx)("div", {
                className: "col"
            }, (0, y.jsx)("h3", {
                "data-test": "primary-header-title",
                className: "d-block d-md-none"
            }, (0, y.jsx)(c.I18nMessageComponent, {
                id: "site.header.greetings"
            })), (0, y.jsx)("h2", {
                "data-test": "primary-header-title",
                className: "d-none d-md-block"
            }, (0, y.jsx)(c.I18nMessageComponent, {
                id: "site.header.greetings"
            }))),
            M = (0, y.jsx)(h.default, {
                className: "mr-xsm",
                iconKey: "jobs"
            }),
            A = function () {
                var e = (0, s.useContext)(f.default),
                    t = e.mainMenu,
                    a = void 0 === t ? [] : t,
                    o = e.employerMenu,
                    n = void 0 === o ? [] : o,
                    i = e.postJobMenu,
                    v = void 0 === i ? {} : i,
                    h = (0, l.default)(n, 1)[0],
                    b = void 0 === h ? {} : h,
                    j = (0, p.generateMenuItemProps)(b),
                    A = (0, p.generateMenuItemProps)(v),
                    E = function () {
                        (0, x.trackClickEvent)("null", "header-foremployers")
                    },
                    P = function (e) {
                        return function () {
                            (0, x.trackClickEvent)("null", "header-".concat(e))
                        }
                    };
                return (0, y.jsx)("nav", {
                    "data-test": "primary-header-nav",
                    className: "mt-std mb-std mb-md-0 pb-xsm ".concat(g.default.bottomShadow)
                }, (0, y.jsx)("div", {
                    className: g.default.navigationWrapper
                }, (0, y.jsx)("div", {
                    className: "px-std px-md-lg"
                }, (0, y.jsx)("div", {
                    className: "d-flex flex-row align-items-center"
                }, I, (0, y.jsx)("div", {
                    className: "d-none d-md-flex pl-md-lg"
                }, n.length ? (0, y.jsx)(m.default, {
                    menu: n,
                    menuAction: "header-foremployers",
                    position: "right"
                }, (function (e) {
                    return (0, y.jsx)(u.default, (0, r.default)({
                        className: e ? S : "",
                        type: "button",
                        tag: "a",
                        variant: "ghost",
                        btnSize: "compact",
                        onClick: E,
                        "data-test": "main-employer-menu-trigger"
                    }, j), (0, y.jsx)("strong", null, (0, y.jsx)(c.I18nMessageComponent, {
                        id: b.textKey
                    })))
                })) : null, Object.keys(v).length ? (0, y.jsx)("div", null, (0, y.jsx)(u.default, (0, r.default)({
                    className: "d-flex flex-row align-items-center ml-std",
                    type: "button",
                    tag: "a",
                    variant: "ghost",
                    btnSize: "compact",
                    onClick: function () {
                        (0, x.trackClickEvent)("no-label", "header-postjobsfree")
                    }
                }, A, {
                    "data-test": "post-jobs-topNav"
                }), M, (0, y.jsx)("strong", null, (0, y.jsx)(c.I18nMessageComponent, {
                    id: v.textKey
                })))) : null)), (0, y.jsx)("div", {
                    className: N
                }, a.map((function (e, t) {
                    var a = e.id,
                        o = e.iconKey,
                        n = e.textKey,
                        l = (0, p.generateMenuItemProps)(e),
                        i = (0, y.jsx)("h3", {
                            className: "mx-xsm"
                        }, (0, y.jsx)(c.I18nMessageComponent, {
                            id: n
                        }));
                    return (0, y.jsx)("div", {
                        className: "".concat(g.default.navigationItem),
                        key: a || t
                    }, (0, y.jsx)("div", {
                        className: "d-none d-md-flex align-items-center justify-content-center"
                    }, (0, y.jsx)(m.default, {
                        menu: [e],
                        menuAction: "header-".concat(a)
                    }, (function (e) {
                        return (0, y.jsx)(u.default, (0, r.default)({
                            className: "p-0 ".concat(_, " ").concat(e ? C : ""),
                            type: "button",
                            tag: "a",
                            variant: "ghost",
                            onClick: P(a),
                            "data-test": "site-header-".concat(a)
                        }, l), (0, y.jsx)("div", {
                            className: "d-flex flex-column align-items-center justify-content-center flex-md-row justify-content-md-start"
                        }, (0, y.jsx)(d.default, {
                            className: "d-flex",
                            svg: w["".concat(o, "Bicolor")],
                            width: "48px",
                            height: "48px"
                        }), i))
                    }))), (0, y.jsx)("div", {
                        className: "d-flex d-md-none align-items-center justify-content-center"
                    }, (0, y.jsx)(u.default, (0, r.default)({
                        className: "p-0 ".concat(_),
                        type: "button",
                        tag: "a",
                        variant: "ghost",
                        onClick: P(a),
                        "data-test": "site-header-mobile-".concat(a)
                    }, l), (0, y.jsx)("div", {
                        className: "d-flex flex-column align-items-center justify-content-center flex-md-row justify-content-md-start"
                    }, (0, y.jsx)(d.default, {
                        className: "d-flex",
                        svg: w["".concat(o, "Bicolor")],
                        width: "48px",
                        height: "48px"
                    }), (0, y.jsx)("span", {
                        className: "small ".concat(k)
                    }, (0, y.jsx)(c.I18nMessageComponent, {
                        id: n
                    }))))))
                }))))))
            };
        t.default = A
    },
    763: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(6)),
            l = n(a(7)),
            i = o(a(2)),
            s = n(a(3)),
            c = n(a(22)),
            d = a(12),
            u = n(a(38)),
            v = n(a(32)),
            f = n(a(150)),
            h = a(27),
            p = a(41),
            m = n(a(58)),
            g = n(a(67)),
            x = n(a(26)),
            y = a(4),
            w = (0, y.jsx)(m.default, {
                className: "mr-xsm",
                iconKey: "jobs"
            }),
            b = function (e) {
                var t = e.className,
                    a = (0, i.useContext)(u.default),
                    o = a.type,
                    n = a.id,
                    s = (0, i.useContext)(f.default),
                    b = (0, i.useContext)(v.default),
                    j = b.mainMenu,
                    _ = void 0 === j ? [] : j,
                    C = b.employerMenu,
                    S = void 0 === C ? [] : C,
                    N = b.postJobMenu,
                    k = void 0 === N ? {} : N,
                    I = (0, l.default)(S, 1)[0],
                    M = void 0 === I ? {} : I,
                    A = (0, p.generateMenuItemProps)(M, (function () {
                        (0, h.trackClickEvent)("null", "header-foremployers")
                    })),
                    E = (0, p.generateMenuItemProps)(k, (function () {
                        (0, h.trackClickEvent)("no-label", "header-postjobsfree")
                    })),
                    P = (s[n] || s.default).showSecondaryNavigation;
                return (0, y.jsx)("nav", {
                    "data-test": "primary-header-nav",
                    className: "".concat(t, " ").concat(x.default.bottomShadow, " ").concat(x.default.navigationBackground, " ").concat(x.default.primaryNavigation)
                }, (0, y.jsx)("div", {
                    className: "d-flex align-items-center ".concat(x.default.navigationWrapper)
                }, (0, y.jsx)("div", {
                    className: "px-std px-md-lg col ".concat(x.default.navigationScroll)
                }, _.map((function (e, t) {
                    var a = e.id,
                        n = e.iconKey,
                        l = e.textKey,
                        i = a === o,
                        s = (0, p.generateMenuItemProps)(e, function (e) {
                            return function () {
                                (0, h.trackClickEvent)("null", "header-".concat(e))
                            }
                        }(a)),
                        u = (0, y.jsx)(m.default, {
                            iconKey: n,
                            solid: i
                        }),
                        v = (0, y.jsx)("b", {
                            className: "ml-xsm"
                        }, (0, y.jsx)(d.I18nMessageComponent, {
                            id: l
                        }));
                    return (0, y.jsx)("div", {
                        className: "d-inline-flex align-items-center mr-xl ".concat(x.default.navigationItem, " ").concat(i && !P ? x.default.activeNavigationItem : ""),
                        key: a || t
                    }, P && i ? (0, y.jsx)("div", null, (0, y.jsx)(c.default, (0, r.default)({
                        className: "d-flex plain px-xxsm ".concat(i ? x.default.activeMenuItem : ""),
                        type: "button",
                        btnSize: "compact",
                        tag: "a",
                        variant: "ghost",
                        "data-test": "site-header-".concat(a)
                    }, s), (0, y.jsx)(m.default, {
                        iconKey: n,
                        solid: i
                    }), (0, y.jsx)("b", {
                        className: "ml-xsm"
                    }, (0, y.jsx)(d.I18nMessageComponent, {
                        id: l
                    })))) : (0, y.jsx)(g.default, {
                        menu: [e],
                        menuAction: "header-".concat(a)
                    }, (function (e) {
                        return (0, y.jsx)(c.default, (0, r.default)({
                            className: "d-flex plain px-xxsm ".concat(i ? x.default.activeMenuItem : "", " ").concat(e ? x.default.activeButton : ""),
                            type: "button",
                            btnSize: "compact",
                            tag: "a",
                            variant: "ghost",
                            "data-test": "site-header-".concat(a)
                        }, s), u, v)
                    })))
                }))), (0, y.jsx)("div", {
                    className: "d-none d-md-flex px-md-lg"
                }, S.length ? (0, y.jsx)(g.default, {
                    menu: S,
                    menuAction: "header-foremployers",
                    position: "right"
                }, (function (e) {
                    return (0, y.jsx)(c.default, (0, r.default)({
                        className: "".concat(e ? x.default.activeButton : ""),
                        btnSize: "compact",
                        type: "button",
                        tag: "a",
                        variant: "ghost",
                        "data-test": "main-employer-menu-trigger"
                    }, A), (0, y.jsx)("b", null, (0, y.jsx)(d.I18nMessageComponent, {
                        id: M.textKey
                    })))
                })) : null, Object.keys(k).length ? (0, y.jsx)("div", null, (0, y.jsx)(c.default, (0, r.default)({
                    className: "ml-std d-flex flex-row align-items-center",
                    btnSize: "compact",
                    type: "button",
                    tag: "a",
                    variant: "ghost",
                    "data-test": "post-jobs-topNav"
                }, E), w, (0, y.jsx)("b", null, (0, y.jsx)(d.I18nMessageComponent, {
                    id: k.textKey
                })))) : null)))
            };
        b.propTypes = {
            className: s.default.string
        }, b.defaultProps = {
            className: ""
        };
        var j = b;
        t.default = j
    },
    764: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(6)),
            l = o(a(2)),
            i = n(a(38)),
            s = n(a(32)),
            c = n(a(47)),
            d = n(a(26)),
            u = a(4),
            v = function () {
                var e = (0, l.useContext)(i.default),
                    t = e.id,
                    a = e.type,
                    o = (0, l.useContext)(s.default).mainMenu,
                    n = ((void 0 === o ? [] : o).filter((function (e) {
                        return e.id === a
                    }))[0] || {}).childNavigationLinks,
                    v = void 0 === n ? [] : n;
                return v.length ? (0, u.jsx)("nav", {
                    "data-test": "secondary-header-nav",
                    className: "".concat(d.default.secondaryNavigation, " ").concat(d.default.bottomShadow)
                }, (0, u.jsx)("div", {
                    className: d.default.navigationWrapper
                }, (0, u.jsx)("ul", {
                    className: "px-std px-md-lg m-0 py-0 ".concat(d.default.navigationScroll)
                }, v.map((function (e, o) {
                    var n = e.id === t,
                        l = [];
                    return l.push("d-inline-flex align-items-center p-0 m-0 mr-xxl"), l.push(d.default.navigationItem), l.push(d.default.secondaryNavigationItem), l.push(n ? d.default.activeNavigationItem : ""), (0, u.jsx)("li", {
                        className: l.join(" "),
                        key: e.id || o
                    }, (0, u.jsx)(c.default, (0, r.default)({
                        active: n,
                        className: "px-xxsm",
                        disableHoverEffect: !0,
                        smallOnMobile: !0,
                        menuAction: "subheader-".concat(a)
                    }, e)))
                }))))) : null
            };
        t.default = v
    },
    765: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(6)),
            l = n(a(7)),
            i = o(a(2)),
            s = n(a(22)),
            c = a(12),
            d = n(a(38)),
            u = a(41),
            v = a(27),
            f = n(a(26)),
            h = a(4),
            p = function () {
                var e = (0, i.useContext)(d.default),
                    t = e.type,
                    a = e.searchKeyword,
                    o = e.searchLocation,
                    n = (0, i.useState)(""),
                    p = (0, l.default)(n, 2),
                    m = p[0],
                    g = p[1],
                    x = (0, i.useState)(""),
                    y = (0, l.default)(x, 2),
                    w = y[0],
                    b = y[1],
                    j = (0, i.useState)(""),
                    _ = (0, l.default)(j, 2),
                    C = _[0],
                    S = _[1],
                    N = [{
                        id: "allResults",
                        textKey: "site.header.allResults",
                        link: "/Search/results.htm?typedKeyword=".concat(m, "&locT=").concat(C, "&locId=").concat(w)
                    }, {
                        id: "companies",
                        textKey: "site.header.companies",
                        link: "/Reviews/company-reviews.htm?typedKeyword=".concat(m, "&locT=").concat(C, "&locId=").concat(w, "&sc.keyword=").concat(m, "&context=Review")
                    }, {
                        id: "jobs",
                        textKey: "site.header.jobs",
                        link: "/Job/jobs.htm?typedKeyword=".concat(m, "&locT=").concat(C, "&locId=").concat(w, "&context=Jobs&sc.keyword=").concat(m)
                    }, {
                        id: "salaries",
                        textKey: "site.header.salaries",
                        link: "/Salaries/company-salaries.htm?locT=".concat(C, "&locId=").concat(w, "&context=Salary&sc.keyword=").concat(m)
                    }, {
                        id: "interviews",
                        textKey: "site.header.interviews",
                        link: "/Interview/job-interview-questions.htm?locT=".concat(C, "&locId=").concat(w, "&context=Interview&sc.keyword=").concat(m)
                    }];
                return (0, i.useEffect)((function () {
                    g(a || "")
                }), [a]), (0, i.useEffect)((function () {
                    b((null == o ? void 0 : o.id) || ""), S((null == o ? void 0 : o.type) || "")
                }), [o]), N.length ? (0, h.jsx)("nav", {
                    "data-test": "search-results-navigation-tabs",
                    className: "".concat(f.default.searchNavigation, " ").concat(f.default.bottomShadow, " ").concat(f.default.stickyInner)
                }, (0, h.jsx)("ul", {
                    className: "mx-auto my-0 py-0 px-std container-max-width px-md-lg ".concat(f.default.navigationScroll)
                }, N.map((function (e) {
                    var a = e.id === t,
                        o = [];
                    o.push("d-inline-flex align-items-center m-0 mr-sm p-0"), o.push(f.default.searchNavigationItem);
                    var n, l = (0, u.generateMenuItemProps)(e, (n = e.id, function () {
                        (0, v.trackClickEvent)("null", "header-search-tab-".concat(n))
                    }));
                    return (0, h.jsx)("li", {
                        className: o.join(" "),
                        key: e.id
                    }, (0, h.jsx)(s.default, (0, r.default)({
                        type: "button",
                        btnSize: "compact",
                        variant: a ? "special" : "ghost",
                        tag: "a",
                        className: f.default.searchNavigationBtn,
                        "data-test": "site-header-search-tab-".concat(e.id)
                    }, l), (0, h.jsx)("b", null, (0, h.jsx)(c.I18nMessageComponent, {
                        id: e.textKey
                    }))))
                })))) : null
            };
        t.default = p
    },
    766: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(7)),
            l = o(a(2)),
            i = n(a(9)),
            s = n(a(60)),
            c = a(77),
            d = a(113),
            u = n(a(767)),
            v = n(a(26)),
            f = n(a(33)),
            h = n(a(73)),
            p = a(4),
            m = function () {
                var e = (0, l.useState)(!1),
                    t = (0, r.default)(e, 2),
                    a = t[0],
                    o = t[1],
                    n = (0, l.useContext)(s.default),
                    m = n.state,
                    g = void 0 === m ? {} : m,
                    x = g.notifications,
                    y = void 0 === x ? {} : x,
                    w = g.showJobNotification,
                    b = g.showOtherNotifications,
                    j = [];
                Object.keys(y).forEach((function (e) {
                    var t = y[e];
                    t.read || j.push(t.campaignCode)
                }));
                var _ = j.length;
                return (0, p.jsx)("div", {
                    className: "ml-std"
                }, (0, p.jsx)("div", {
                    className: "d-flex align-items-center ".concat(h.default.notificationsIconContainer),
                    "data-test": "notifications-tray",
                    onClick: function () {
                        o(!0), (0, c.lockPage)()
                    }
                }, (0, p.jsx)("button", {
                    "aria-label": "Notifications Inbox",
                    className: "p-0 ".concat(v.default.iconBtn),
                    title: "Open Notifications Inbox",
                    type: "button"
                }, (0, p.jsx)(i.default, {
                    className: "d-flex ".concat(f.default.colorDefault),
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.61 6H6.39a1 1 0 00-.94.65L3 11h3.28a1 1 0 011 .68v.06l.15.45.57 1.72a.13.13 0 00.12.09h7.82a.13.13 0 00.12-.09l.74-2.23a1 1 0 01.95-.68H21l-2.45-4.35a1 1 0 00-.94-.65zM3 17a1 1 0 001 1h16a1 1 0 001-1v-5h-3.21a.1.1 0 00-.09.07l-.7 2.25a1 1 0 01-1 .68H8a1 1 0 01-1-.69l-.7-2.24a.1.1 0 00-.09-.07H3zm19 0a2 2 0 01-2 2H4a2 2 0 01-2-2v-6l2.51-4.7A2 2 0 016.39 5h11.22a2 2 0 011.88 1.3L22 11z" fill="currentColor" fill-rule="evenodd"/></svg>'
                })), _ && "true" === b || "true" === w ? (0, p.jsx)("span", {
                    className: "d-flex align-items-center justify-content-center ".concat(h.default.notificationsCountBadge)
                }, "true" === b ? "true" === w ? (_ || 0) + 1 : _ : "1") : null), (0, p.jsx)(u.default, {
                    show: a,
                    onMenuClose: function () {
                        window.sessionStorage && window.sessionStorage.setItem("showJobNotification", "false"), o(!1), j.length && "false" !== b ? (0, d.markNotificationsRead)(j).then((function () {
                            n.dispatch({
                                type: "SET",
                                payload: {
                                    showJobNotification: "false",
                                    showOtherNotifications: "false"
                                }
                            })
                        })) : n.dispatch({
                            type: "SET",
                            payload: {
                                showJobNotification: "false"
                            }
                        }), (0, c.unlockPage)()
                    },
                    showJobNotification: w
                }))
            };
        t.default = m
    },
    767: function (e, t, a) {
        "use strict";
        var o = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        o(a(2));
        var n = o(a(3)),
            r = o(a(9)),
            l = a(12),
            i = o(a(164)),
            s = o(a(85)),
            c = o(a(165)),
            d = o(a(26)),
            u = o(a(33)),
            v = o(a(73)),
            f = a(28),
            h = a(4),
            p = (0, h.jsx)(i.default, {
                isMobileMenu: !0
            }),
            m = (0, h.jsx)(s.default, {
                isPopup: !0
            }),
            g = function (e) {
                var t = e.show,
                    a = e.onMenuClose;
                return t ? (0, h.jsx)("div", {
                    className: f.screenTakeOver
                }, (0, h.jsx)("div", {
                    className: d.default.bottomShadow
                }, (0, h.jsx)("div", {
                    className: "d-flex align-items-center col px-std px-md-lg ".concat(c.default.drawerHeader)
                }, (0, h.jsx)("div", {
                    className: "col"
                }, (0, h.jsx)("div", {
                    className: "d-flex flex-row"
                }, (0, h.jsx)(l.I18nMessageComponent, {
                    id: "site.header.notifications",
                    className: d.default.h1
                }))), (0, h.jsx)("div", {
                    className: "d-flex flex-row"
                }, (0, h.jsx)("button", {
                    className: "ml-std p-0 ".concat(d.default.iconBtn),
                    onClick: a
                }, (0, h.jsx)(r.default, {
                    className: "d-flex ".concat(u.default.colorNavigation),
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.34 12l5.38-5.38a.95.95 0 00-1.34-1.34L12 10.66 6.62 5.28a.95.95 0 00-1.34 1.34L10.66 12l-5.38 5.38a.95.95 0 001.34 1.34L12 13.34l5.38 5.38a.95.95 0 001.34-1.34z" fill="currentColor" fill-rule="evenodd"/></svg>'
                }))))), (0, h.jsx)("div", {
                    className: v.default.notificationsContainer
                }, p, (0, h.jsx)("div", {
                    className: "mt-sm ".concat(v.default.notificationsItem)
                }, m))) : null
            };
        g.propTypes = {
            show: n.default.bool,
            onMenuClose: n.default.func
        }, g.defaultProps = {
            show: !1,
            onMenuClose: function () {}
        };
        var x = g;
        t.default = x
    },
    768: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(7)),
            l = o(a(2)),
            i = n(a(9)),
            s = a(12),
            c = a(113),
            d = n(a(60)),
            u = n(a(164)),
            v = n(a(85)),
            f = n(a(59)),
            h = n(a(33)),
            p = n(a(73)),
            m = a(4),
            g = (0, m.jsx)(s.I18nMessageComponent, {
                id: "site.header.notifications"
            }),
            x = (0, m.jsx)(u.default, null),
            y = (0, m.jsx)(v.default, {
                isPopup: !0
            }),
            w = function () {
                var e = (0, l.useState)(!1),
                    t = (0, r.default)(e, 2),
                    a = t[0],
                    o = t[1],
                    n = (0, l.useContext)(d.default),
                    s = n.state,
                    u = void 0 === s ? {} : s,
                    v = u.notifications,
                    w = void 0 === v ? {} : v,
                    b = u.showJobNotification,
                    j = u.showOtherNotifications,
                    _ = [];
                Object.keys(w).forEach((function (e) {
                    var t = w[e];
                    t.read || _.push(t.campaignCode)
                }));
                var C = _.length,
                    S = ((GD || {}).util || {}).debounce,
                    N = (void 0 === S ? function () {} : S)((function () {
                        window.sessionStorage && window.sessionStorage.setItem("showJobNotification", "false"), o(!1), _.length && "false" !== j ? (0, c.markNotificationsRead)(_).then((function () {
                            n.dispatch({
                                type: "SET",
                                payload: {
                                    showJobNotification: "false",
                                    showOtherNotifications: "false"
                                }
                            })
                        })) : n.dispatch({
                            type: "SET",
                            payload: {
                                showJobNotification: "false"
                            }
                        })
                    }), 100, !0);
                return (0, m.jsx)("div", {
                    className: "mr-std",
                    onMouseLeave: N
                }, (0, m.jsx)("div", {
                    "data-test": "notifications-tray",
                    className: "".concat(p.default.notificationsIconContainer),
                    onMouseEnter: function () {
                        o(!0)
                    }
                }, (0, m.jsx)(i.default, {
                    className: "d-flex ".concat(h.default.colorDefault),
                    svg: a ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.61 6H6.39a1 1 0 00-.94.65L3 11h3.21a1.1 1.1 0 011 .75L8 14h8l.75-2.25a1.1 1.1 0 011-.75H21l-2.45-4.35a1 1 0 00-.94-.65zm0-1a2 2 0 011.88 1.3L22 11v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6l2.51-4.7A2 2 0 016.39 5z" fill="currentColor" fill-rule="evenodd"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.61 6H6.39a1 1 0 00-.94.65L3 11h3.28a1 1 0 011 .68v.06l.15.45.57 1.72a.13.13 0 00.12.09h7.82a.13.13 0 00.12-.09l.74-2.23a1 1 0 01.95-.68H21l-2.45-4.35a1 1 0 00-.94-.65zM3 17a1 1 0 001 1h16a1 1 0 001-1v-5h-3.21a.1.1 0 00-.09.07l-.7 2.25a1 1 0 01-1 .68H8a1 1 0 01-1-.69l-.7-2.24a.1.1 0 00-.09-.07H3zm19 0a2 2 0 01-2 2H4a2 2 0 01-2-2v-6l2.51-4.7A2 2 0 016.39 5h11.22a2 2 0 011.88 1.3L22 11z" fill="currentColor" fill-rule="evenodd"/></svg>',
                    width: "36px",
                    height: "36px"
                }), C && "true" === j || "true" === b ? (0, m.jsx)("span", {
                    className: "d-flex align-items-center justify-content-center ".concat(p.default.notificationsCountBadge)
                }, "true" === j ? "true" === b ? (C || 0) + 1 : C : "1") : null), (0, m.jsx)(f.default, {
                    show: a,
                    position: "right"
                }, (0, m.jsx)("div", {
                    className: p.default.notificationsPopup
                }, (0, m.jsx)("div", {
                    className: "px-std py-sm ".concat(p.default.menuItem)
                }, (0, m.jsx)("h2", {
                    className: "m-0 ".concat(p.default.popupHeader)
                }, g)), x, y)))
            };
        t.default = w
    },
    769: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(6)),
            l = n(a(7)),
            i = o(a(2)),
            s = n(a(3)),
            c = a(12),
            d = n(a(38)),
            u = n(a(32)),
            v = a(27),
            f = n(a(166)),
            h = n(a(47)),
            p = n(a(85)),
            m = n(a(26)),
            g = a(4),
            x = (0, g.jsx)(p.default, null),
            y = function (e) {
                var t = e.show,
                    a = e.position,
                    o = (e.onDrawerOpened, e.onDrawerClosed),
                    n = (0, i.useContext)(c.I18nContext),
                    s = (0, i.useContext)(d.default).showNotificationsMainNavigation,
                    p = (0, i.useContext)(u.default),
                    y = p.mainMenu,
                    w = void 0 === y ? [] : y,
                    b = p.employerMenu,
                    j = void 0 === b ? [] : b,
                    _ = p.subUserMenu,
                    C = void 0 === _ ? [] : _,
                    S = (0, l.default)(j, 2),
                    N = S[0],
                    k = void 0 === N ? {} : N,
                    I = S[1],
                    M = (void 0 === I ? {} : I).childNavigationLinks,
                    A = void 0 === M ? [] : M,
                    E = (0, l.default)(A, 1)[0],
                    P = (0, i.useState)(!1),
                    L = (0, l.default)(P, 2),
                    T = L[0],
                    z = L[1],
                    O = [
                        [{
                            childNavigationLinks: w.map((function (e) {
                                return e.childNavigationLinks && (e.showArrow = !0, e.onClick = function () {
                                    K(e.textKey), G([e])
                                }), e
                            }))
                        }],
                        [{
                            childNavigationLinks: [Object.assign({}, k, {
                                showArrow: !0,
                                onClick: function () {
                                    K(k.textKey), G(j)
                                }
                            }), Object.assign({}, E, {
                                menuAction: "header-postjobsfree"
                            })]
                        }], C
                    ];
                s || O.unshift([{
                    childNavigationLinks: [{
                        iconKey: "notifications",
                        textKey: "site.header.notifications",
                        showArrow: !0,
                        onClick: function () {
                            (0, v.trackClickEvent)("no-label", "header-notifications"), z(!0)
                        }
                    }]
                }]);
                var B = (0, i.useState)(null),
                    H = (0, l.default)(B, 2),
                    D = H[0],
                    K = H[1],
                    R = (0, i.useState)([]),
                    U = (0, l.default)(R, 2),
                    F = U[0],
                    G = U[1],
                    V = function () {
                        K(""), G([]), o()
                    };
                return (0, g.jsx)(i.default.Fragment, null, (0, g.jsx)(f.default, {
                    show: t,
                    title: n.msg("site.header.explore"),
                    titlePosition: "left",
                    position: a,
                    onCloseButtonClicked: o
                }, O.map((function (e, t) {
                    return e.map((function (e, a) {
                        var o = e.childNavigationLinks,
                            n = void 0 === o ? [] : o;
                        return (0, g.jsx)("ul", {
                            className: "p-0 m-0  ".concat(m.default.list, " ").concat(m.default.menu, " ").concat(t ? "pt-sm" : ""),
                            key: a
                        }, n.map((function (e, t) {
                            return (0, g.jsx)("li", {
                                className: "p-0 m-0",
                                key: e.id || t
                            }, (0, g.jsx)(h.default, (0, r.default)({
                                showIcon: !0,
                                className: "col pl-std"
                            }, e)))
                        })))
                    }))
                }))), (0, g.jsx)(f.default, {
                    show: !(!t || !F.length),
                    title: D ? n.msg(D) : "",
                    titlePosition: "left",
                    position: a,
                    onBackButtonClicked: function () {
                        K(""), G([])
                    },
                    onCloseButtonClicked: V
                }, F.map((function (e, t) {
                    var a = e.childNavigationLinks,
                        o = void 0 === a ? [] : a,
                        n = e.id;
                    return (0, g.jsx)("ul", {
                        className: "p-0 m-0 ".concat(m.default.list, " ").concat(m.default.menu, " ").concat(t ? "pt-sm" : ""),
                        key: t
                    }, o.map((function (e, t) {
                        return "jobs_career-overview" === e.id && (e.onClick = V), (0, g.jsx)("li", {
                            className: "p-0 m-0",
                            key: e.id || t
                        }, (0, g.jsx)(h.default, (0, r.default)({
                            showIcon: !0,
                            className: "col pl-std",
                            menuAction: "header-".concat(n || "foremployers")
                        }, e)))
                    })))
                }))), (0, g.jsx)(f.default, {
                    show: T,
                    title: n.msg("site.header.notifications"),
                    titlePosition: "left",
                    position: a,
                    onBackButtonClicked: function () {
                        return z(!1)
                    },
                    onCloseButtonClicked: function () {
                        z(!1), o()
                    }
                }, x))
            };
        y.propTypes = {
            menu: s.default.bool,
            position: s.default.oneOf(["none", "left", "right", "top", "bottom"]),
            onDrawerOpened: s.default.func,
            onDrawerClosed: s.default.func
        }, y.defaultProps = {
            show: !1,
            position: "none",
            onDrawerOpened: function () {},
            onDrawerClosed: function () {}
        };
        var w = y;
        t.default = w
    },
    77: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.unlockPage = t.lockPage = void 0;
        var o = a(26);
        t.lockPage = function () {
            window.document.querySelector("body").classList.add(o.pageLock)
        };
        t.unlockPage = function () {
            window.document.querySelector("body").classList.remove(o.pageLock)
        }
    },
    770: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(6)),
            l = o(a(2)),
            i = n(a(3)),
            s = a(12),
            c = n(a(32)),
            d = n(a(166)),
            u = n(a(47)),
            v = n(a(167)),
            f = n(a(26)),
            h = a(4),
            p = function (e) {
                var t = e.show,
                    a = e.position,
                    o = e.onDrawerClosed,
                    n = e.ipLocationCountryId,
                    i = (0, l.useContext)(c.default).userMenu,
                    p = void 0 === i ? [] : i,
                    m = (0, l.useContext)(s.I18nContext);
                return (0, h.jsx)(d.default, {
                    show: t,
                    title: m.msg("site.header.profile"),
                    titlePosition: "left",
                    position: a,
                    onCloseButtonClicked: o
                }, p.map((function (e, t) {
                    var a = e.childNavigationLinks,
                        o = void 0 === a ? [] : a;
                    return (0, h.jsx)("ul", {
                        className: "p-0 m-0 ".concat(f.default.list, " ").concat(f.default.menu, " ").concat(t ? "pt-sm" : ""),
                        key: t
                    }, o.map((function (e, t) {
                        var a = (0, h.jsx)("li", {
                            className: "p-0 m-0",
                            key: e.id || t
                        }, (0, h.jsx)(u.default, (0, r.default)({
                            showIcon: !0,
                            className: "col pl-std",
                            menuAction: "header-membericon"
                        }, e)));
                        return "demographics" === e.id ? (0, h.jsx)(v.default, {
                            key: e.id,
                            ipLocationCountryId: n
                        }, a) : a
                    })))
                })))
            };
        p.propTypes = {
            show: i.default.bool,
            position: i.default.oneOf(["none", "left", "right", "top", "bottom"]),
            onDrawerOpened: i.default.func,
            onDrawerClosed: i.default.func,
            ipLocationCountryId: i.default.number
        }, p.defaultProps = {
            show: !1,
            position: "none",
            onDrawerOpened: function () {},
            onDrawerClosed: function () {},
            ipLocationCountryId: void 0
        };
        var m = p;
        t.default = m
    },
    771: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(7)),
            l = n(a(6)),
            i = o(a(2)),
            s = n(a(9)),
            c = a(12),
            d = n(a(38)),
            u = n(a(32)),
            v = n(a(60)),
            f = a(27),
            h = n(a(59)),
            p = n(a(47)),
            m = n(a(167)),
            g = n(a(85)),
            x = n(a(26)),
            y = n(a(62)),
            w = n(a(33)),
            b = n(a(772)),
            j = a(4),
            _ = function (e) {
                var t = e.submenu,
                    a = void 0 === t ? [] : t,
                    o = e.ipLocationCountryId;
                return (0, j.jsx)(i.default.Fragment, null, a.map((function (e, t) {
                    var a = (0, j.jsx)("li", {
                        className: "p-0 m-0",
                        key: e.id || t
                    }, (0, j.jsx)(p.default, (0, l.default)({
                        className: "px-std",
                        "data-test": e.textKey
                    }, e, {
                        menuAction: "header-membericon"
                    })));
                    return "demographics" === e.id ? (0, j.jsx)(m.default, {
                        key: e.id,
                        ipLocationCountryId: o
                    }, a) : a
                })))
            },
            C = function (e) {
                var t = e.menu,
                    a = void 0 === t ? [] : t,
                    o = e.ipLocationCountryId;
                return (0, j.jsx)(i.default.Fragment, null, a.map((function (e, t) {
                    var a = e.childNavigationLinks;
                    return (0, j.jsx)("ul", {
                        className: "p-0 m-0 ".concat(x.default.list),
                        key: t
                    }, (0, j.jsx)(_, {
                        submenu: a,
                        ipLocationCountryId: o
                    }))
                })))
            },
            S = (0, j.jsx)(g.default, null),
            N = function (e) {
                var t = e.ipLocationCountryId,
                    a = (0, i.useContext)(d.default),
                    o = a.showNotificationsMainNavigation,
                    n = a.profilePhotoRelativeUrl,
                    l = (0, i.useContext)(v.default).state,
                    p = void 0 === l ? {} : l,
                    m = (0, i.useContext)(u.default),
                    g = m.userMenu,
                    _ = void 0 === g ? [] : g,
                    N = m.subUserMenu,
                    k = void 0 === N ? [] : N,
                    I = (0, i.useState)(!1),
                    M = (0, r.default)(I, 2),
                    A = M[0],
                    E = M[1],
                    P = (0, i.useState)(!1),
                    L = (0, r.default)(P, 2),
                    T = L[0],
                    z = L[1];
                (0, i.useEffect)((function () {
                    A && z(!1)
                }), [A]);
                return (0, j.jsx)("div", {
                    onMouseLeave: function () {
                        E(!1)
                    }
                }, (0, j.jsx)("div", {
                    className: "d-flex ".concat(p.hasNewNotifications && !o ? x.default.notificationBadge : ""),
                    onMouseEnter: function () {
                        E(!0)
                    },
                    "data-test": "user-profile-dropdown-trigger"
                }, n ? (0, j.jsx)("img", {
                    src: n,
                    className: b.default.avatar,
                    alt: "user avatar"
                }) : (0, j.jsx)(s.default, {
                    className: "d-flex ".concat(w.default.colorDefault),
                    svg: A ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 7a3 3 0 103 3 3 3 0 00-3-3zm0 9a6 6 0 00-5.33 3.25 9 9 0 0010.66 0A6 6 0 0012 16zm0-14A10 10 0 112 12 10 10 0 0112 2z" fill="currentColor" fill-rule="evenodd"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 19a8.91 8.91 0 01-5.33-1.75 6 6 0 0110.66 0A8.91 8.91 0 0112 21zm6.11-2.4a7 7 0 00-12.22 0 9 9 0 1112.22 0zM12 6a4 4 0 104 4 4 4 0 00-4-4zm0 7a3 3 0 113-3 3 3 0 01-3 3z" fill="currentColor" fill-rule="evenodd"/></svg>',
                    width: "36px",
                    height: "36px"
                })), (0, j.jsx)(h.default, {
                    show: A,
                    position: "right"
                }, o ? null : (0, j.jsx)("ul", {
                    className: "p-0 m-0 ".concat(x.default.list, " ").concat(x.default.bottomBorder, " ").concat(x.default.menu)
                }, (0, j.jsx)("li", {
                    className: "p-0 m-0 ".concat(b.default.notificationTriggerContainer)
                }, (0, j.jsx)("div", {
                    className: "d-flex align-items-center py-sm px-std ".concat(y.default.menuItem, " ").concat(y.default.menuItemHoverEffect, " header-menu-item ").concat(b.default.notificationTrigger, " ").concat(T ? b.default.active : b.default.inactive),
                    onClick: function () {
                        T || (0, f.trackClickEvent)("no-label", "header-notifications"), z(!T)
                    }
                }, (0, j.jsx)("div", null, (0, j.jsx)(s.default, {
                    className: "d-flex ".concat(w.default.colorNavigation),
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.64 18.3L10.22 12l6.42-6.3a1.26 1.26 0 000-1.78 1.3 1.3 0 00-1.83 0l-7.53 7.37a1 1 0 000 1.41l7.53 7.39a1.3 1.3 0 001.83 0 1.26 1.26 0 000-1.78z" fill="currentColor" fill-rule="evenodd"/></svg>'
                })), (0, j.jsx)(c.I18nMessageComponent, {
                    className: "col mx-xsm ".concat(y.default.menuItemColor),
                    id: "site.header.notifications"
                }), (0, j.jsx)("div", null, (0, j.jsx)(s.default, {
                    className: "d-flex ".concat(w.default.colorNavigation),
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.72 11.29L9.19 3.9a1.3 1.3 0 00-1.83 0 1.26 1.26 0 000 1.78L13.78 12l-6.42 6.3a1.26 1.26 0 000 1.78 1.3 1.3 0 001.83 0l7.53-7.39a1 1 0 000-1.4z" fill="currentColor" fill-rule="evenodd"/></svg>'
                }))))), (0, j.jsx)("div", {
                    className: b.default.menuContainer
                }, (0, j.jsx)("div", {
                    className: "".concat(b.default.accountMenu, " ").concat(T ? b.default.inactive : b.default.active)
                }, (0, j.jsx)(C, {
                    menu: _,
                    ipLocationCountryId: t
                }), (0, j.jsx)(C, {
                    menu: k
                })), (0, j.jsx)("div", {
                    className: "".concat(b.default.notificationMenu, " ").concat(T ? b.default.active : b.default.inactive)
                }, S))))
            };
        t.default = N
    },
    772: function (e, t, a) {
        e.exports = {
            menuContainer: "accountPopup__AccountPopupStyles__menuContainer",
            notificationTriggerContainer: "accountPopup__AccountPopupStyles__notificationTriggerContainer",
            accountMenu: "accountPopup__AccountPopupStyles__accountMenu",
            notificationMenu: "accountPopup__AccountPopupStyles__notificationMenu",
            notificationTrigger: "accountPopup__AccountPopupStyles__notificationTrigger",
            active: "accountPopup__AccountPopupStyles__active",
            inactive: "accountPopup__AccountPopupStyles__inactive",
            avatar: "accountPopup__AccountPopupStyles__avatar"
        }
    },
    773: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(7)),
            l = a(74),
            i = o(a(2)),
            s = n(a(3)),
            c = n(a(9)),
            d = n(a(168)),
            u = n(a(171)),
            v = a(12),
            f = n(a(60)),
            h = n(a(172)),
            p = a(4);
        var m = (0, l.css)({
                name: "6a89sq",
                styles: "z-index:1999 !important;"
            }),
            g = function (e) {
                var t = e.overlayTarget,
                    a = (0, i.useContext)(f.default).state,
                    o = (void 0 === a ? {} : a).savedJobsCount,
                    n = (((GD || {}).util || {}).device || {}).hh || !1,
                    l = (0, i.useState)(!1),
                    s = (0, r.default)(l, 2),
                    g = s[0],
                    x = s[1],
                    y = (0, i.useState)(null),
                    w = (0, r.default)(y, 2),
                    b = w[0],
                    j = w[1],
                    _ = (0, i.useState)(!1),
                    C = (0, r.default)(_, 2),
                    S = C[0],
                    N = C[1],
                    k = {
                        firstSaveTooltip: {
                            title: "site.header.notifications.manageSavedJobs",
                            text: "site.header.notifications.findSavedJobs"
                        }
                    };
                (0, i.useEffect)((function () {
                    var e, t = window.GDStorage,
                        a = void 0 === t ? {} : t;
                    a.isSupported() && ("false" !== a.getVal("firstSaveTooltip") && S && 1 === o && (j("firstSaveTooltip"), a.setVal("firstSaveTooltip", "false"), x(!0), e = new CustomEvent("closeProfileTooltip"), window.dispatchEvent(e)))
                }), [o, S]);
                var I = function e() {
                        x(!1), window.removeEventListener("click", e)
                    },
                    M = function e() {
                        N(!0), window.removeEventListener("updateHeaderSavedCount", e)
                    };
                return (0, i.useEffect)((function () {
                    window.addEventListener("click", I), window.addEventListener("updateHeaderSavedCount", M)
                }), []), g ? (0, p.jsx)(d.default, {
                    className: "mt-xxsm ".concat(m),
                    placement: "bottomMiddle",
                    offset: {
                        left: n ? 136 : -136
                    },
                    targetElement: t
                }, (0, p.jsx)(u.default, {
                    className: h.default.tooltipContentWrapper,
                    pointerLeft: n ? "4px" : "",
                    pointerRight: n ? "" : "4px",
                    pointerPlacement: "top"
                }, (0, p.jsx)(i.default.Fragment, null, (0, p.jsx)(c.default, {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.34 12l5.38-5.38a.95.95 0 00-1.34-1.34L12 10.66 6.62 5.28a.95.95 0 00-1.34 1.34L10.66 12l-5.38 5.38a.95.95 0 001.34 1.34L12 13.34l5.38 5.38a.95.95 0 001.34-1.34z" fill="currentColor" fill-rule="evenodd"/></svg>',
                    onClick: I
                }), (0, p.jsx)("h2", null, (0, p.jsx)(v.I18nMessageComponent, {
                    id: k[b].title
                })), (0, p.jsx)("p", {
                    className: "mt-sm"
                }, (0, p.jsx)(v.I18nMessageComponent, {
                    id: k[b].text
                }))))) : null
            };
        g.propTypes = {
            overlayTarget: s.default.object
        }, g.defaultProps = {
            overlayTarget: {}
        };
        var x = g;
        t.default = x
    },
    782: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(7)),
            l = o(a(2)),
            i = n(a(3)),
            s = n(a(9)),
            c = n(a(168)),
            d = n(a(171)),
            u = n(a(22)),
            v = a(12),
            f = n(a(172)),
            h = a(4),
            p = (0, h.jsx)("h2", null, (0, h.jsx)(v.I18nMessageComponent, {
                id: "profileTooltipHeading"
            })),
            m = (0, h.jsx)("p", null, (0, h.jsx)(v.I18nMessageComponent, {
                id: "profileTooltipCaption"
            })),
            g = function (e) {
                var t = (0, l.useContext)(v.I18nContext),
                    a = e.overlayTarget,
                    o = (((GD || {}).util || {}).device || {}).hh || !1,
                    n = (0, l.useState)(!1),
                    i = (0, r.default)(n, 2),
                    g = i[0],
                    x = i[1],
                    y = function () {
                        x(!1)
                    },
                    w = function e() {
                        y(), window.removeEventListener("click", e)
                    };
                (0, l.useEffect)((function () {
                    var e = document.getElementById("SmarterBanner"),
                        t = document.querySelector(".onboardingTooltip"),
                        a = !(GDStorage.isSupported() ? GDStorage.getVal("profileTooltipClosed") : GD.util.cookie("profileTooltipClosed"));
                    return (a = !e && !t && a) && (x(!0), GD.ga.trackEvent("USER_PROFILE", "impression", "profile-header-tooltip", null, !0), window.addEventListener("click", w)), window.addEventListener("closeProfileTooltip", y),
                        function () {
                            window.removeEventListener("closeProfileTooltip", y)
                        }
                }), []);
                var b = function (e) {
                    if (e || GD.ga.trackEvent("USER_PROFILE", "close", "profile-header-tooltip"), GDStorage.isSupported()) GDStorage.setVal("profileTooltipClosed", "true");
                    else {
                        var t = new Date;
                        t.setFullYear(t.getFullYear() + 10), GD.util.cookie("profileTooltipClosed", "true", t.toUTCString())
                    }
                    w()
                };
                return g ? (0, h.jsx)(c.default, {
                    className: "mt-xxsm",
                    placement: "bottomMiddle",
                    offset: {
                        left: o ? 128 : -128
                    },
                    targetElement: a
                }, (0, h.jsx)(d.default, {
                    className: f.default.tooltipContentWrapper,
                    pointerLeft: o ? "4px" : "",
                    pointerRight: o ? "" : "4px",
                    pointerPlacement: "top"
                }, (0, h.jsx)(l.default.Fragment, null, (0, h.jsx)(s.default, {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.34 12l5.38-5.38a.95.95 0 00-1.34-1.34L12 10.66 6.62 5.28a.95.95 0 00-1.34 1.34L10.66 12l-5.38 5.38a.95.95 0 001.34 1.34L12 13.34l5.38 5.38a.95.95 0 001.34-1.34z" fill="currentColor" fill-rule="evenodd"/></svg>',
                    onClick: b
                }), p, m, (0, h.jsx)(u.default, {
                    onClick: function (e) {
                        GD.event.stop(e), GD.ga.trackEvent("USER_PROFILE", "click", "profile-header-tooltip"), GD.util.loadUrl("/member/profile/stepBuildProfile.htm?profileOrigin=SITE_HEADER_TOOLTIP", "_blank"), b(!0)
                    },
                    className: "mt-std",
                    text: t.msg("profileTooltipCtaLabel"),
                    variant: "primary"
                })))) : null
            };
        g.propTypes = {
            overlayTarget: i.default.object
        }, g.defaultProps = {
            overlayTarget: {}
        };
        var x = g;
        t.default = x
    },
    783: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(7)),
            l = o(a(2)),
            i = n(a(9)),
            s = n(a(22)),
            c = n(a(44)),
            d = a(12),
            u = o(a(39)),
            v = a(35),
            f = a(66),
            h = n(a(784)),
            p = n(a(892)),
            m = n(a(122)),
            g = n(a(121)),
            x = a(4),
            y = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.5 3a7.5 7.5 0 107.5 7.5A7.5 7.5 0 0010.5 3zm0-1a8.5 8.5 0 016.35 14.15l5 5a.5.5 0 010 .7.5.5 0 01-.71 0l-5-5A8.5 8.5 0 1110.5 2z" fill="currentColor" fill-rule="evenodd"/></svg>',
            w = (0, x.jsx)(i.default, {
                className: "d-flex",
                svg: y
            }),
            b = (0, x.jsx)("div", {
                className: "d-none d-lg-flex col py-sm"
            }, (0, x.jsx)(h.default, null)),
            j = function () {
                var e = (0, l.useContext)(u.default),
                    t = e.hideSearch,
                    a = void 0 === t ? "" : t,
                    o = e.searchKeyword,
                    n = void 0 === o ? "" : o,
                    h = (0, l.useContext)(d.I18nContext),
                    j = (0, l.useState)(!1),
                    _ = (0, r.default)(j, 2),
                    C = _[0],
                    S = _[1];
                return a ? null : (0, x.jsx)(l.default.Fragment, null, (0, x.jsx)("div", {
                    className: "d-flex d-md-none pr-std"
                }, (0, x.jsx)("button", {
                    "aria-label": "Search Form",
                    className: "p-0 ".concat(m.default.iconBtn),
                    "data-test": "icon-search-menu-open-trigger",
                    onClick: function () {
                        (0, v.trackClickEvent)("no-label", "menu-search-icon"), S(!0), (0, f.lockPage)()
                    },
                    title: "Open Search Form",
                    type: "button"
                }, (0, x.jsx)(i.default, {
                    className: "d-flex ".concat(m.default.colorDefault),
                    svg: y
                }))), (0, x.jsx)("div", {
                    className: "d-none d-md-flex d-lg-none justify-content-center px-lg py-sm col ".concat(m.default.searchForm)
                }, (0, x.jsx)("div", {
                    className: "d-flex col ".concat(m.default.searchKeywordContainer, " ").concat(g.default.searchInput, " ").concat(g.default.searchKeywordContainer),
                    onClick: function () {
                        S(!0), (0, f.lockPage)()
                    },
                    "data-test": "input-search-menu-open-trigger"
                }, (0, x.jsx)(c.default, {
                    ariaLabel: "Search Form",
                    autocomplete: "off",
                    className: "col headerSearchInput ".concat(m.default.searchInput),
                    defaultValue: n,
                    disabled: !0,
                    placeholder: h.msg("site.header.search.placeholder.jobs"),
                    type: "text"
                })), (0, x.jsx)(s.default, {
                    "aria-label": "Search Form",
                    className: "d-flex align-items-center justify-content-center col-auto ".concat(g.default.searchButton),
                    "data-test": "search-bar-submit",
                    onClick: function () {
                        S(!0), (0, f.lockPage)()
                    },
                    title: "Open Search Form",
                    type: "submit",
                    variant: "special"
                }, w)), b, (0, x.jsx)(p.default, {
                    show: C,
                    onDrawerClosed: function () {
                        S(!1), (0, f.unlockPage)()
                    }
                }))
            },
            _ = function (e) {
                return (0, x.jsx)(u.SearchContextProvider, e, (0, x.jsx)(j, e), e.children)
            };
        _.propTypes = u.SearchContextProvider.propTypes, _.defaultProps = u.SearchContextProvider.defaultProps;
        var C = _;
        t.default = C
    },
    784: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(53)),
            l = n(a(54)),
            i = n(a(7)),
            s = a(74),
            c = o(a(2)),
            d = n(a(22)),
            u = n(a(785)),
            v = n(a(9)),
            f = a(12),
            h = n(a(39)),
            p = a(40),
            m = a(35),
            g = a(173),
            x = a(120),
            y = n(a(177)),
            w = n(a(28)),
            b = n(a(121)),
            j = n(a(122)),
            _ = a(4);
        var C = (0, s.css)({
                name: "hci7y7",
                styles: "> span{display:flex;}"
            }),
            S = (0, _.jsx)(v.default, {
                className: "d-flex",
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8a2 2 0 11-2 2 2 2 0 012-2zm0-1a3 3 0 103 3 3 3 0 00-3-3zm0-5a8 8 0 018 8q0 6-8 12-8-6-8-12a8 8 0 018-8zm7 8a7 7 0 00-14 0c0 3.48 2.3 7.07 7 10.74 4.7-3.67 7-7.26 7-10.74z" fill="currentColor" fill-rule="evenodd"/></svg>'
            }),
            N = (0, _.jsx)(u.default, {
                btnVariant: "special",
                className: C,
                type: "button"
            }),
            k = (0, _.jsx)(v.default, {
                className: "d-flex white",
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.5 3a7.5 7.5 0 107.5 7.5A7.5 7.5 0 0010.5 3zm0-1a8.5 8.5 0 016.35 14.15l5 5a.5.5 0 010 .7.5.5 0 01-.71 0l-5-5A8.5 8.5 0 1110.5 2z" fill="currentColor" fill-rule="evenodd"/></svg>'
            }),
            I = function () {
                var e = (0, c.useContext)(h.default),
                    t = e.type,
                    a = e.subType,
                    o = e.searchKeyword,
                    n = void 0 === o ? "" : o,
                    s = e.searchLocation,
                    u = void 0 === s ? {} : s,
                    v = e.isCareerEnabled,
                    C = void 0 !== v && v,
                    I = "".concat(t, "_").concat(a),
                    M = (0, c.useContext)(f.I18nContext),
                    A = (0, c.useState)(n || ""),
                    E = (0, i.default)(A, 2),
                    P = E[0],
                    L = E[1],
                    T = (0, c.useState)(u || {}),
                    z = (0, i.default)(T, 2),
                    O = z[0],
                    B = z[1],
                    H = (0, c.useState)(!1),
                    D = (0, i.default)(H, 2),
                    K = D[0],
                    R = D[1],
                    U = (0, c.useState)([]),
                    F = (0, i.default)(U, 2),
                    G = F[0],
                    V = F[1],
                    J = (0, c.useState)(!1),
                    q = (0, i.default)(J, 2),
                    W = q[0],
                    Y = q[1];
                (0, c.useEffect)((function () {
                    B(u)
                }), [u]), (0, c.useEffect)((function () {
                    K && (document.getElementById("sc.keyword").focus(), R(!1))
                }), [K]), (0, c.useEffect)((function () {
                    var e, t, a, o = (0, p.getRecentSearches)().slice(0, 5).map((function (e, t) {
                        return {
                            category: "RECENT_SEARCHES",
                            gaType: "recent-searches",
                            gaLabel: "jobs",
                            data: e,
                            id: "".concat(t, "th_recent_search"),
                            sectionHead: t ? "" : M.msg("site.header.search.recentSearches"),
                            suggestion: e.locationName ? M.msg("site.header.recentSearches.jobsInLoc", {
                                keyword: e.keyword,
                                location: e.locationName
                            }) : M.msg("site.header.recentSearches.jobs", {
                                keyword: e.keyword
                            })
                        }
                    }));
                    null !== (e = o) && void 0 !== e && e.length || (o = (0, p.getPopularSearches)(null === (t = getGdGlobals) || void 0 === t || null === (a = t()) || void 0 === a ? void 0 : a.locale).map((function (e, t) {
                        return {
                            category: "POPULAR_SEARCHES",
                            searchType: "jobtitle_jobs",
                            gaType: "popular-searches",
                            gaLabel: "jobs",
                            normalizedSuggestion: e,
                            id: "".concat(t, "th_popular_search"),
                            sectionHead: t ? "" : M.msg("site.header.search.popularSearches"),
                            suggestion: M.msg("site.header.search.popularSearches.jobs", {
                                keyword: e
                            }),
                            iconKey: "searchAll"
                        }
                    })));
                    V(o)
                }), [M]);
                var X = function () {
                        var e = (0, l.default)(r.default.mark((function e() {
                            var t, a, o, n = arguments;
                            return r.default.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = n.length > 0 && void 0 !== n[0] ? n[0] : {}, Y(!0), L(t.suggestion), a = t.gaLabel, "recent-searches" !== t.gaType && (a = "".concat(t.normalizedSuggestion || t.query, "|").concat(t.gaLabel).concat(O.name ? "|location" : "")), (0, m.trackClickEventDeferred)(a, t.gaType), e.next = 8, (0, g.generateAutocompleteSuggestionUrl)(t, O);
                                    case 8:
                                        o = e.sent, GD.util.loadUrl(o);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Q = function () {
                        var e = (0, l.default)(r.default.mark((function e() {
                            var t, a, o = arguments;
                            return r.default.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = o.length > 0 && void 0 !== o[0] ? o[0] : {}, !P) {
                                            e.next = 10;
                                            break
                                        }
                                        return Y(!0), (0, m.trackClickEventDeferred)("".concat(P, "|location"), "location-type-ahead"), e.next = 6, (0, g.generateSearchUrl)(P, {
                                            id: t.locationId || 0,
                                            name: t.label || "",
                                            type: t.locationType || ""
                                        }, I, n);
                                    case 6:
                                        a = e.sent, GD.util.loadUrl(a), e.next = 12;
                                        break;
                                    case 10:
                                        B({
                                            id: t.locationId || 0,
                                            name: t.label || "",
                                            type: t.locationType || ""
                                        }), R(!0);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Z = function () {
                        var e = (0, l.default)(r.default.mark((function e(t) {
                            var a;
                            return r.default.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.preventDefault(), !P && !O.name) {
                                            e.next = 11;
                                            break
                                        }
                                        if (W) {
                                            e.next = 9;
                                            break
                                        }
                                        return Y(!0), (0, m.trackClickEventDeferred)("".concat(P || "empty").concat(O.name ? "|location" : ""), "search-button"), e.next = 7, (0, g.generateSearchUrl)(P, O, I, n);
                                    case 7:
                                        a = e.sent, GD.util.loadUrl(a);
                                    case 9:
                                        e.next = 14;
                                        break;
                                    case 11:
                                        (0, m.trackClickEvent)("empty", "search-button"), document.getElementById("sc.keyword").focus();
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, _.jsx)("form", {
                    className: "col ".concat(w.default.searchForm),
                    "data-test": "search-bar-form",
                    id: "scBar",
                    method: "GET",
                    noValidate: !0,
                    onSubmit: Z,
                    target: "_top"
                }, (0, _.jsx)("div", {
                    className: "d-flex flex-row align-items-center justify-content-center"
                }, (0, _.jsx)("div", {
                    className: "d-flex col-6 p-0 ".concat(b.default.searchInput, " ").concat(b.default.searchKeywordContainer)
                }, (0, _.jsx)(y.default, {
                    ariaLabel: "Search Keyword",
                    className: "col headerSearchInput ".concat(j.default.searchInput),
                    dataTestId: "search-bar-keyword-input",
                    handleClear: function () {
                        L("")
                    },
                    id: "sc.keyword",
                    name: "sc.keyword",
                    onChange: X,
                    onQueryChange: function (e) {
                        L(e)
                    },
                    placeholder: M.msg("site.header.universal-search.placeholder"),
                    processSuggestionsCustom: function (e, t) {
                        return (0, x.processKeywordSuggestions)(e, t, C)
                    },
                    queryParamName: "input",
                    recentSearches: G,
                    type: "keyword",
                    value: {
                        label: P
                    }
                })), (0, _.jsx)("div", {
                    className: b.default.searchInputContainer
                }, (0, _.jsx)("span", {
                    className: "d-flex align-items-center ".concat(w.default.searchInputLabel, " ").concat(b.default.locationIcon)
                }, S), (0, _.jsx)(y.default, {
                    ariaLabel: "Search Location",
                    className: "col-4 p-0 headerSearchInput ".concat(b.default.searchInput, " ").concat(b.default.searchBarLocationInput, " ").concat(j.default.searchInput),
                    dataTestId: "search-bar-location-input",
                    handleClear: function () {
                        B({})
                    },
                    id: "sc.location",
                    onChange: Q,
                    onQueryChange: function (e) {
                        B({
                            id: 0,
                            name: e,
                            type: ""
                        })
                    },
                    placeholder: M.msg("site.header.search.placeholder.location"),
                    type: "location",
                    value: {
                        label: (null == O ? void 0 : O.name) || ""
                    }
                })), (0, _.jsx)(d.default, {
                    "aria-label": "Search Submit",
                    className: "d-flex align-items-center justify-content-center col-auto ".concat(b.default.searchButton),
                    "data-test": "search-bar-submit",
                    disabled: W,
                    tabIndex: "0",
                    title: "Search Submit",
                    type: "submit",
                    variant: "special"
                }, W ? N : k)))
            };
        t.default = I
    },
    789: function (e, t, a) {
        var o = {
            "./urlTerms-de-AT.json": 790,
            "./urlTerms-de-CH.json": 791,
            "./urlTerms-de-DE.json": 792,
            "./urlTerms-en-AU.json": 793,
            "./urlTerms-en-CA.json": 794,
            "./urlTerms-en-GB.json": 795,
            "./urlTerms-en-HK.json": 796,
            "./urlTerms-en-IE.json": 797,
            "./urlTerms-en-IN.json": 798,
            "./urlTerms-en-NZ.json": 799,
            "./urlTerms-en-SG.json": 800,
            "./urlTerms-es-AR.json": 801,
            "./urlTerms-es-ES.json": 802,
            "./urlTerms-es-MX.json": 803,
            "./urlTerms-fr-BE.json": 804,
            "./urlTerms-fr-CA.json": 805,
            "./urlTerms-fr-CH.json": 806,
            "./urlTerms-fr-FR.json": 807,
            "./urlTerms-it-IT.json": 808,
            "./urlTerms-ja-JP.json": 809,
            "./urlTerms-nl-BE.json": 810,
            "./urlTerms-nl-NL.json": 811,
            "./urlTerms-pt-BR.json": 812,
            "./urlTerms.json": 175
        };

        function n(e) {
            var t = r(e);
            return a(t)
        }

        function r(e) {
            if (!a.o(o, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return o[e]
        }
        n.keys = function () {
            return Object.keys(o)
        }, n.resolve = r, e.exports = n, n.id = 789
    },
    81: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(7)),
            l = a(74),
            i = o(a(2)),
            s = n(a(3)),
            c = n(a(147)),
            d = n(a(22)),
            u = n(a(149)),
            v = n(a(9)),
            f = a(21),
            h = a(12),
            p = a(42),
            m = a(57),
            g = a(68),
            x = a(4);
        var y = (0, l.css)({
                name: "1riw994",
                styles: "overflow:scroll;> div{overflow:visible !important;}"
            }),
            w = (0, l.css)({
                name: "11zakjf",
                styles: "text-align:center;line-height:24px;"
            }),
            b = (0, l.css)("color:", f.ui.grey[600], ";font-size:24px;font-weight:900;line-height:36px;"),
            j = (0, x.jsx)(v.default, {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="prefix__cls-1" d="M12 3a9 9 0 11-9 9 9 9 0 019-9m0-1a10 10 0 1010 10A10 10 0 0012 2z"/><path class="prefix__cls-1" d="M7.05 17l7.07-2.83L17 7.05 9.88 9.88zm3.4-5.8l2.4 2.4-4 1.6zm3.1 1.7l-2.4-2.4 4-1.6zM12 7a.5.5 0 00.5-.5v-2a.5.5 0 00-1 0v2a.5.5 0 00.5.5zm0 10a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zm7.5-5.5h-2a.5.5 0 000 1h2a.5.5 0 000-1zm-13 0h-2a.5.5 0 000 1h2a.5.5 0 000-1z"/></svg>',
                height: "56px",
                width: "56px"
            }),
            _ = (0, x.jsx)(h.I18nMessageComponent, {
                id: "careerNav.careerInsights.modal.description"
            }),
            C = (0, x.jsx)(h.I18nMessageComponent, {
                id: "careerNav.careerInsights.search.button"
            }),
            S = function (e) {
                var t, a, o, n, l, s = e.jobTitle,
                    v = e.location,
                    f = (0, i.useContext)(h.I18nContext),
                    S = (0, i.useState)(!1),
                    N = (0, r.default)(S, 2),
                    k = N[0],
                    I = N[1],
                    M = (0, i.useState)(!0),
                    A = (0, r.default)(M, 2),
                    E = A[0],
                    P = A[1],
                    L = (0, i.useState)(null),
                    T = (0, r.default)(L, 2),
                    z = T[0],
                    O = T[1],
                    B = (0, i.useState)({
                        value: {
                            name: s,
                            id: 0
                        }
                    }),
                    H = (0, r.default)(B, 2),
                    D = H[0],
                    K = H[1],
                    R = (0, i.useState)({
                        value: {
                            id: null == v ? void 0 : v.id,
                            type: null == v ? void 0 : v.type,
                            name: null == v ? void 0 : v.name
                        },
                        exception: null
                    }),
                    U = (0, r.default)(R, 2),
                    F = U[0],
                    G = U[1];
                (0, i.useEffect)((function () {
                    if (null == v || !v.id) {
                        var e, t, a = JSON.parse((null === (e = window) || void 0 === e || null === (t = e.sessionStorage) || void 0 === t ? void 0 : t.getItem("userSelectedCareerLocation")) || "{}");
                        if (null != a && a.id) G({
                            value: a,
                            exception: null
                        });
                        else {
                            var o, n, r, l = (null === (o = window) || void 0 === o || null === (n = o.getGdGlobals) || void 0 === n || null === (r = n.call(o)) || void 0 === r ? void 0 : r.page) || {},
                                i = l.domainId,
                                s = void 0 === i ? 1 : i,
                                c = l.domainCountryId;
                            G({
                                value: {
                                    id: void 0 === c ? 1 : c,
                                    type: "N",
                                    name: g.tldLocalizedCountryMap[s]
                                },
                                exception: null
                            })
                        }
                    }
                    var d = function (e) {
                        I(!0), O(e.detail)
                    };
                    return document.body.addEventListener("showCareerInsightsModal", d),
                        function () {
                            return document.body.removeEventListener("showCareerInsightsModal", d)
                        }
                }), []), (0, i.useEffect)((function () {
                    !k && s && (K({
                        value: {
                            name: s,
                            id: 0
                        }
                    }), P(!1))
                }), [k, s]), (0, i.useEffect)((function () {
                    var e;
                    !k && null != v && v.id && (null == v ? void 0 : v.id) !== (null === (e = F.value) || void 0 === e ? void 0 : e.id) && G({
                        value: {
                            id: null == v ? void 0 : v.id,
                            name: null == v ? void 0 : v.name
                        },
                        exception: null
                    })
                }), [k, v, F.value]);
                var V = (0, i.useCallback)((function (e) {
                    var t, a, o, n, r, l;
                    if (GD.event.stop(e), null === (t = F.value) || void 0 === t || !t.name || null !== (a = F.value) && void 0 !== a && a.id) {
                        var i = ((null === (o = window) || void 0 === o || null === (n = o.getGdGlobals) || void 0 === n || null === (r = n.call(o)) || void 0 === r ? void 0 : r.page) || {}).domainId,
                            s = void 0 === i ? 1 : i,
                            c = F.value.name === g.tldLocalizedCountryMap[s] ? {} : null == F ? void 0 : F.value;
                        if (window.sessionStorage && window.sessionStorage.setItem("userSelectedCareerLocation", JSON.stringify(c)), null != D && null !== (l = D.value) && void 0 !== l && l.name) {
                            var d = window.GDStorage,
                                u = void 0 === d ? {} : d;
                            u.isSupported() && (D.value.id ? u.setVal("careerInsightModalJobTitle", D.value.name) : u.setVal("careerInsightModalJobTitle", "")), (0, m.trackClickEvent)("search", "occ-header-career-insights"), I(!1), "resume" === z ? GD.util.loadUrl((0, p.generateResumeUrl)(D.value.name)) : "salaries" === z ? GD.util.loadUrl((0, p.generateSalaryUrl)(D.value.name, c)) : "interviews" === z ? GD.util.loadUrl((0, p.generateInterviewUrl)(D.value.name, c)) : "careerPath" === z ? GD.util.loadUrl((0, p.generateCareerPathUrl)(D.value.name)) : GD.util.loadUrl((0, p.generateCareerOverviewUrl)(D.value.name))
                        }
                    } else G(Object.assign({}, F, {
                        exception: f.msg("careerNav.locPicker.form.location.error")
                    }))
                }), [D, F, z, f]);
                (0, i.useEffect)((function () {
                    if (k) {
                        var e = function (e) {
                            "Enter" !== e.key && 13 !== e.charCode && 13 !== e.keyCode || V(e)
                        };
                        return document.body.addEventListener("keyup", e),
                            function () {
                                return document.body.removeEventListener("keyup", e)
                            }
                    }
                }), [k, D.value, V]);
                return (0, x.jsx)(u.default, {
                    className: y,
                    disableWindowScroll: !0,
                    modalSize: "medium",
                    onClose: function () {
                        (0, m.trackClickEvent)("dismiss", "occ-header-career-insights"), I(!1)
                    },
                    open: k
                }, (0, x.jsx)("div", {
                    className: "d-flex flex-column align-items-center"
                }, j, (0, x.jsx)(h.I18nMessageComponent, {
                    className: "".concat(b, " m-0"),
                    id: "careerNav.careerInsights.modal.title"
                }), (0, x.jsx)("div", {
                    className: "mt-sm ".concat(w)
                }, _), (0, x.jsx)("div", {
                    className: "container mt-std"
                }, (0, x.jsx)("form", {
                    id: "CareerInsightsForm",
                    noValidate: !0,
                    onSubmit: V
                }, (0, x.jsx)(c.default, {
                    allowCreate: !0,
                    id: "CareerInsightsJobTitle",
                    label: f.msg("careerNav.careerInsights.search.label"),
                    onChange: function (e) {
                        return K({
                            value: {
                                name: e.label,
                                id: e.id
                            }
                        })
                    },
                    onQueryChange: function (e) {
                        return P(!e)
                    },
                    placeholder: f.msg("careerNav.careerInsights.search.placeholder"),
                    type: "title",
                    value: {
                        id: (null === (t = D.value) || void 0 === t ? void 0 : t.id) || 0,
                        label: (null === (a = D.value) || void 0 === a ? void 0 : a.name) || ""
                    }
                }), (0, x.jsx)(c.default, {
                    error: F.exception,
                    onError: function (e) {
                        e.localizedErrorKey && G({
                            value: {
                                name: e.value,
                                type: "",
                                id: 0
                            },
                            exception: f.msg("careerNav.locPicker.form.location.error")
                        })
                    },
                    onBlur: function (e) {
                        var t;
                        null !== (t = e.target) && void 0 !== t && t.value || G({
                            value: {
                                name: "",
                                type: "",
                                id: 0
                            },
                            exception: null
                        })
                    },
                    id: "CareerInsightsLocation",
                    label: f.msg("careerNav.careerInsights.search.location"),
                    onChange: function (e) {
                        return G({
                            value: {
                                name: e.label,
                                type: e.locationType,
                                id: e.locationId
                            },
                            exception: null
                        })
                    },
                    placeholder: f.msg("careerNav.locPicker.form.location.placeholder"),
                    type: "location",
                    value: {
                        realId: (null === (o = F.value) || void 0 === o ? void 0 : o.id) || 0,
                        id: (null === (n = F.value) || void 0 === n ? void 0 : n.id) || 0,
                        label: (null === (l = F.value) || void 0 === l ? void 0 : l.name) || ""
                    }
                }), (0, x.jsx)("div", {
                    className: "d-flex justify-content-center mt-lg"
                }, (0, x.jsx)(d.default, {
                    disabled: E || F.exception,
                    type: "submit"
                }, C))))))
            };
        S.propTypes = {
            jobTitle: s.default.string,
            location: s.default.shape({
                id: s.default.number,
                name: s.default.string,
                type: s.default.string
            })
        }, S.defaultProps = {
            jobTitle: "",
            location: {
                id: 0,
                name: "",
                type: ""
            }
        };
        var N = S;
        t.default = N
    },
    813: function (e, t, a) {
        var o = {
            "./career.discovery/career.discovery-de-AT.json": 814,
            "./career.discovery/career.discovery-de-CH.json": 815,
            "./career.discovery/career.discovery-de-DE.json": 816,
            "./career.discovery/career.discovery-en-AU.json": 817,
            "./career.discovery/career.discovery-en-CA.json": 818,
            "./career.discovery/career.discovery-en-GB.json": 819,
            "./career.discovery/career.discovery-en-HK.json": 820,
            "./career.discovery/career.discovery-en-IE.json": 821,
            "./career.discovery/career.discovery-en-IN.json": 822,
            "./career.discovery/career.discovery-en-NZ.json": 823,
            "./career.discovery/career.discovery-en-SG.json": 824,
            "./career.discovery/career.discovery-es-AR.json": 825,
            "./career.discovery/career.discovery-es-ES.json": 826,
            "./career.discovery/career.discovery-es-MX.json": 827,
            "./career.discovery/career.discovery-fr-BE.json": 828,
            "./career.discovery/career.discovery-fr-CA.json": 829,
            "./career.discovery/career.discovery-fr-CH.json": 830,
            "./career.discovery/career.discovery-fr-FR.json": 831,
            "./career.discovery/career.discovery-it-IT.json": 832,
            "./career.discovery/career.discovery-ja-JP.json": 833,
            "./career.discovery/career.discovery-nl-BE.json": 834,
            "./career.discovery/career.discovery-nl-NL.json": 835,
            "./career.discovery/career.discovery-pt-BR.json": 836,
            "./career.discovery/career.discovery.json": 837,
            "./company.explorer/company.explorer-de-AT.json": 838,
            "./company.explorer/company.explorer-de-CH.json": 839,
            "./company.explorer/company.explorer-de-DE.json": 840,
            "./company.explorer/company.explorer-en-AU.json": 841,
            "./company.explorer/company.explorer-en-CA.json": 842,
            "./company.explorer/company.explorer-en-GB.json": 843,
            "./company.explorer/company.explorer-en-HK.json": 844,
            "./company.explorer/company.explorer-en-IE.json": 845,
            "./company.explorer/company.explorer-en-IN.json": 846,
            "./company.explorer/company.explorer-en-NZ.json": 847,
            "./company.explorer/company.explorer-en-SG.json": 848,
            "./company.explorer/company.explorer-es-AR.json": 849,
            "./company.explorer/company.explorer-es-ES.json": 850,
            "./company.explorer/company.explorer-es-MX.json": 851,
            "./company.explorer/company.explorer-fr-BE.json": 852,
            "./company.explorer/company.explorer-fr-CA.json": 853,
            "./company.explorer/company.explorer-fr-CH.json": 854,
            "./company.explorer/company.explorer-fr-FR.json": 855,
            "./company.explorer/company.explorer-it-IT.json": 856,
            "./company.explorer/company.explorer-ja-JP.json": 857,
            "./company.explorer/company.explorer-nl-BE.json": 858,
            "./company.explorer/company.explorer-nl-NL.json": 859,
            "./company.explorer/company.explorer-pt-BR.json": 860,
            "./company.explorer/company.explorer.json": 861,
            "./ei.faq/ei.faq-de-AT.json": 862,
            "./ei.faq/ei.faq-de-CH.json": 863,
            "./ei.faq/ei.faq-de-DE.json": 864,
            "./ei.faq/ei.faq-en-AU.json": 865,
            "./ei.faq/ei.faq-en-CA.json": 866,
            "./ei.faq/ei.faq-en-GB.json": 867,
            "./ei.faq/ei.faq-en-HK.json": 868,
            "./ei.faq/ei.faq-en-IE.json": 869,
            "./ei.faq/ei.faq-en-IN.json": 870,
            "./ei.faq/ei.faq-en-NZ.json": 871,
            "./ei.faq/ei.faq-en-SG.json": 872,
            "./ei.faq/ei.faq-es-AR.json": 873,
            "./ei.faq/ei.faq-es-ES.json": 874,
            "./ei.faq/ei.faq-es-MX.json": 875,
            "./ei.faq/ei.faq-fr-BE.json": 876,
            "./ei.faq/ei.faq-fr-CA.json": 877,
            "./ei.faq/ei.faq-fr-CH.json": 878,
            "./ei.faq/ei.faq-fr-FR.json": 879,
            "./ei.faq/ei.faq-it-IT.json": 880,
            "./ei.faq/ei.faq-ja-JP.json": 881,
            "./ei.faq/ei.faq-nl-BE.json": 882,
            "./ei.faq/ei.faq-nl-NL.json": 883,
            "./ei.faq/ei.faq-pt-BR.json": 884,
            "./ei.faq/ei.faq.json": 885
        };

        function n(e) {
            var t = r(e);
            return a(t)
        }

        function r(e) {
            if (!a.o(o, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return o[e]
        }
        n.keys = function () {
            return Object.keys(o)
        }, n.resolve = r, e.exports = n, n.id = 813
    },
    85: function (e, t, a) {
        "use strict";
        var o = a(1),
            n = a(5);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(2)),
            l = o(a(3)),
            i = o(a(60)),
            s = o(a(73)),
            c = o(a(62)),
            d = a(4),
            u = function (e) {
                var t = e.isPopup,
                    a = (0, r.useContext)(i.default).state,
                    o = void 0 === a ? {} : a,
                    n = o.notifications,
                    l = void 0 === n ? {} : n,
                    u = o.showOtherNotifications;
                return (0, d.jsx)("div", null, Object.keys(l).map((function (e) {
                    return l[e]
                })).map((function (e, a) {
                    var o = e.url,
                        n = e.message,
                        r = e.read;
                    return (0, d.jsx)("a", {
                        key: a,
                        href: o
                    }, t ? (0, d.jsx)("div", {
                        className: "d-flex p-std ".concat(c.default.menuItemHoverEffect, " ").concat(s.default.menuItem)
                    }, r || "false" === u ? (0, d.jsx)("div", null, (0, d.jsx)("div", {
                        className: s.default.iconPlaceholder
                    })) : (0, d.jsx)("div", {
                        className: "d-flex justify-content-start"
                    }, (0, d.jsx)("div", {
                        className: "d-flex justify-content-center ".concat(s.default.iconPlaceholder)
                    }, (0, d.jsx)("div", {
                        className: "mt-xsm ".concat(s.default.notificationIndicator)
                    }))), (0, d.jsx)("span", {
                        className: "ml-std ".concat(s.default.notificationMessage, " ").concat(c.default.menuItemColor),
                        dangerouslySetInnerHTML: {
                            __html: n
                        }
                    })) : (0, d.jsx)("div", {
                        className: "p-std ".concat(c.default.menuItemHoverEffect, " ").concat(s.default.menuItem)
                    }, (0, d.jsx)("span", {
                        className: "".concat(s.default.notificationMessage, " ").concat(c.default.menuItemColor),
                        dangerouslySetInnerHTML: {
                            __html: n
                        }
                    })))
                })))
            };
        u.propTypes = {
            isPopup: l.default.bool
        };
        var v = u;
        t.default = v
    },
    890: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isKeyboardClickEvent = t.KEYS = void 0;
        var o = {
            SPACEBAR: 32,
            BACKSPACE: 8,
            ENTER: 13,
            ESCAPE: 27,
            TAB: 9,
            HOME: 36,
            END: 35,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
        };
        t.KEYS = o;
        t.isKeyboardClickEvent = function (e) {
            return e.charCode === o.SPACEBAR || e.charCode === o.ENTER || e.keyCode === o.SPACEBAR || e.keyCode === o.ENTER
        }
    },
    891: function (e, t, a) {
        "use strict";
        var o = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.StyledClearButton = t.StyledAutocomplete = void 0;
        var n = o(a(52)),
            r = a(21),
            l = (0, n.default)("div", {
                target: "e1k3lmgm0"
            })("position:relative;ul.suggestions{position:absolute;width:100%;box-shadow:0 0 2px 0 ", r.ui.grey[300], ";background-color:#ffffff;list-style:none;display:", (function (e) {
                return e.focused ? "block" : "none"
            }), ";padding:0px;margin-top:56px;z-index:", r.ui.zindex.high, ";li div{cursor:pointer;color:", r.ui.grey[600], ";display:flex;width:100%;height:100%;span{min-width:0px;text-overflow:ellipsis;color:", r.ui.grey[600], "}span.suggestionIcon{svg{color:", r.ui.grey[500], ";fill:", r.ui.grey[500], ";height:24px;width:24px;path{fill:", r.ui.grey[500], ";}}}div.suggestionLabel{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;font-size:15px;font-weight:normal;line-height:24px;max-height:48px;overflow:hidden;overflow-wrap:break-word;}span.query{font-weight:bold;}&.hovered{background:", r.ui.grey[200], "}span.logo{min-width:24px;margin-right:16px;img{border:1px solid ", r.ui.grey[200], ";border-radius:3px;max-height:24px;max-width:24px;overflow:hidden;}}span.defaultCompanyLogo{svg{height:24px;width:24px;}}}@media (max-width:991px){box-shadow:inset 0px 0px 10px 1px ", r.ui.grey[300], ";margin:0;overflow-y:scroll;position:fixed;height:calc(100vh - 176px);top:120px;left:0;@media (min-width:768px){height:calc(100vh - 72px);top:72px;}}@media (min-width:992px){border-radius:3px;}}");
        t.StyledAutocomplete = l;
        var i = (0, n.default)("div", {
            target: "e1k3lmgm1"
        })("color:", r.ui.grey[500], ";cursor:pointer;position:absolute;top:12px;right:7px;z-index:2;");
        t.StyledClearButton = i
    },
    892: function (e, t, a) {
        "use strict";
        var o = a(5),
            n = a(1);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(a(53)),
            l = n(a(54)),
            i = n(a(7)),
            s = o(a(2)),
            c = n(a(3)),
            d = n(a(9)),
            u = n(a(22)),
            v = a(12),
            f = n(a(39)),
            h = a(173),
            p = a(40),
            m = a(35),
            g = a(120),
            x = n(a(177)),
            y = n(a(28)),
            w = n(a(121)),
            b = n(a(893)),
            j = n(a(122)),
            _ = a(4),
            C = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.5 3a7.5 7.5 0 107.5 7.5A7.5 7.5 0 0010.5 3zm0-1a8.5 8.5 0 016.35 14.15l5 5a.5.5 0 010 .7.5.5 0 01-.71 0l-5-5A8.5 8.5 0 1110.5 2z" fill="currentColor" fill-rule="evenodd"/></svg>',
            S = (0, _.jsx)(d.default, {
                className: "d-flex",
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.64 18.3L10.22 12l6.42-6.3a1.26 1.26 0 000-1.78 1.3 1.3 0 00-1.83 0l-7.53 7.37a1 1 0 000 1.41l7.53 7.39a1.3 1.3 0 001.83 0 1.26 1.26 0 000-1.78z" fill="currentColor" fill-rule="evenodd"/></svg>'
            }),
            N = (0, _.jsx)(d.default, {
                className: "d-flex",
                svg: C
            }),
            k = (0, _.jsx)(d.default, {
                className: "d-flex",
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 6a.5.5 0 01.5.5v6l3.32 2.6a.49.49 0 01.06.7.51.51 0 01-.71.06L11.51 13V6.5A.5.5 0 0112 6zm0-3a9 9 0 109 9 9 9 0 00-9-9zm0-1A10 10 0 112 12 10 10 0 0112 2z" fill="#111" fill-rule="evenodd"/></svg>'
            }),
            I = (0, _.jsx)(d.default, {
                className: "d-flex",
                svg: C
            }),
            M = function (e) {
                var t = e.onDrawerClosed,
                    a = e.show,
                    o = (0, s.useContext)(f.default),
                    n = o.type,
                    c = o.subType,
                    C = o.searchKeyword,
                    M = void 0 === C ? "" : C,
                    A = o.searchLocation,
                    E = void 0 === A ? {} : A,
                    P = o.isCareerEnabled,
                    L = void 0 !== P && P,
                    T = "".concat(n, "_").concat(c),
                    z = (0, s.useContext)(v.I18nContext),
                    O = (0, s.useState)(M || ""),
                    B = (0, i.default)(O, 2),
                    H = B[0],
                    D = B[1],
                    K = (0, s.useState)(E || {}),
                    R = (0, i.default)(K, 2),
                    U = R[0],
                    F = R[1],
                    G = (0, s.useState)(!1),
                    V = (0, i.default)(G, 2),
                    J = V[0],
                    q = V[1],
                    W = (0, s.useState)([]),
                    Y = (0, i.default)(W, 2),
                    X = Y[0],
                    Q = Y[1],
                    Z = (0, s.useState)([]),
                    $ = (0, i.default)(Z, 2),
                    ee = $[0],
                    te = $[1];
                (0, s.useEffect)((function () {
                    F(E)
                }), [E]), (0, s.useEffect)((function () {
                    J && (document.getElementById("scKeyword").focus(), q(!1))
                }), [J]), (0, s.useEffect)((function () {
                    if (a && !X.length && !ee.length) {
                        var e, t, o = (0, p.getRecentSearches)().slice(0, 5);
                        if (o.length) Q(o);
                        else te((0, p.getPopularSearches)(null === (e = getGdGlobals) || void 0 === e || null === (t = e()) || void 0 === t ? void 0 : t.locale))
                    }
                }), [X, ee, a]);
                var ae = function () {
                        var e = (0, l.default)(r.default.mark((function e() {
                            var t, a, o = arguments;
                            return r.default.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = o.length > 0 && void 0 !== o[0] ? o[0] : {}, D(t.suggestion), (0, m.trackClickEventDeferred)("".concat(t.normalizedSuggestion || t.query, "|").concat(t.gaLabel).concat(U.name ? "|location" : ""), t.gaType), e.next = 5, (0, h.generateAutocompleteSuggestionUrl)(t, U);
                                    case 5:
                                        a = e.sent, GD.util.loadUrl(a);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }(),
                    oe = function () {
                        var e = (0, l.default)(r.default.mark((function e() {
                            var t, a, o = arguments;
                            return r.default.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = o.length > 0 && void 0 !== o[0] ? o[0] : {}, !H) {
                                            e.next = 9;
                                            break
                                        }
                                        return (0, m.trackClickEventDeferred)("".concat(H, "|location"), "location-type-ahead"), e.next = 5, (0, h.generateSearchUrl)(H, {
                                            id: t.locationId || 0,
                                            name: t.label || "",
                                            type: t.locationType || ""
                                        }, T, M);
                                    case 5:
                                        a = e.sent, GD.util.loadUrl(a), e.next = 11;
                                        break;
                                    case 9:
                                        F({
                                            id: t.locationId || 0,
                                            name: t.label || "",
                                            type: t.locationType || ""
                                        }), q(!0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ne = function () {
                        var e = (0, l.default)(r.default.mark((function e(t) {
                            var a;
                            return r.default.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.preventDefault(), !H && !U.name) {
                                            e.next = 9;
                                            break
                                        }
                                        return (0, m.trackClickEventDeferred)("".concat(H || "empty").concat(U.name ? "|location" : ""), "search-button"), e.next = 5, (0, h.generateSearchUrl)(H, U, T, M);
                                    case 5:
                                        a = e.sent, GD.util.loadUrl(a), e.next = 12;
                                        break;
                                    case 9:
                                        (0, m.trackClickEvent)("empty", "search-button"), document.getElementById("sc.keyword").focus();
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    re = function (e) {
                        return (0, l.default)(r.default.mark((function t() {
                            var a;
                            return r.default.wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return (0, m.trackClickEventDeferred)("".concat(e, "|jobs").concat(U.name ? "|location" : ""), "popular-searches"), t.next = 3, (0, h.generateAutocompleteSuggestionUrl)({
                                            normalizedSuggestion: e,
                                            searchType: "jobtitle_jobs"
                                        }, U);
                                    case 3:
                                        a = t.sent, GD.util.loadUrl(a);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))
                    };
                return a ? (0, _.jsx)("div", {
                    className: "d-flex d-lg-none flex-column ".concat(y.default.screenTakeOver)
                }, (0, _.jsx)("div", {
                    className: "px-std py-xsm py-md-sm ".concat(b.default.searchFormContainer)
                }, (0, _.jsx)("form", {
                    action: "#",
                    id: "sc",
                    method: "GET",
                    noValidate: !0,
                    onSubmit: ne,
                    target: "_top"
                }, (0, _.jsx)("div", {
                    className: "d-md-flex"
                }, (0, _.jsx)("div", {
                    className: "d-flex ".concat(y.default.searchKeywordContainer, " ").concat(y.default.searchFormInputContainer, " ").concat(b.default.keywordInputContainer)
                }, (0, _.jsx)("button", {
                    type: "button",
                    className: "p-0 ".concat(b.default.searchMenuCloseBtn, " ").concat(y.default.iconBtn),
                    onClick: t
                }, S), (0, _.jsx)(x.default, {
                    autoFocus: !0,
                    className: "col ".concat(b.default.searchInput, " ").concat(b.default.searchKeywordInput),
                    dataTestId: "search-menu-keyword-input",
                    disableOverlay: !0,
                    handleClear: function () {
                        D("")
                    },
                    id: "scKeyword",
                    name: "sc.keyword",
                    onChange: ae,
                    onQueryChange: function (e) {
                        D(e)
                    },
                    placeholder: z.msg("site.header.universal-search.short-placeholder"),
                    queryParamName: "input",
                    type: "keyword",
                    value: {
                        label: H
                    },
                    processSuggestionsCustom: function (e, t) {
                        return (0, g.processKeywordSuggestions)(e, t, L)
                    }
                })), (0, _.jsx)("div", {
                    className: "d-flex mt-xsm mt-md-0 ".concat(b.default.searchLocationContainer, " ").concat(y.default.searchFormInputContainer)
                }, (0, _.jsx)("label", {
                    htmlFor: "scLocation",
                    className: "d-flex align-items-center ".concat(b.default.searchInputLabel)
                }, (0, _.jsx)(d.default, {
                    className: "d-flex ".concat(w.default.locationIcon),
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8a2 2 0 11-2 2 2 2 0 012-2zm0-1a3 3 0 103 3 3 3 0 00-3-3zm0-5a8 8 0 018 8q0 6-8 12-8-6-8-12a8 8 0 018-8zm7 8a7 7 0 00-14 0c0 3.48 2.3 7.07 7 10.74 4.7-3.67 7-7.26 7-10.74z" fill="currentColor" fill-rule="evenodd"/></svg>'
                })), (0, _.jsx)(x.default, {
                    className: "col ".concat(b.default.searchInput, " ").concat(b.default.searchLocationInput),
                    dataTestId: "search-menu-location-input",
                    disableOverlay: !0,
                    handleClear: function () {
                        F({})
                    },
                    id: "scLocation",
                    onChange: oe,
                    onQueryChange: function (e) {
                        F({
                            id: 0,
                            name: e,
                            type: ""
                        })
                    },
                    placeholder: z.msg("site.header.search.placeholder.location"),
                    type: "location",
                    value: {
                        label: (null == U ? void 0 : U.name) || ""
                    }
                })), (0, _.jsx)(u.default, {
                    className: "d-none d-md-flex align-items-center justify-content-center col-auto ".concat(b.default.searchButton),
                    type: "submit",
                    variant: "special",
                    "data-test": "search-bar-submit"
                }, N)), (0, _.jsx)(u.default, {
                    className: "d-lg-none ".concat(b.default.hiddenSearchButton),
                    type: "submit"
                }))), (0, _.jsx)("div", {
                    className: y.default.searchMenuContainer
                }, (0, _.jsx)("div", {
                    className: y.default.searchMenuContent
                }, (0, _.jsx)("div", {
                    className: "mb-sm px-std pt-std"
                }, (0, _.jsx)("span", null, (0, _.jsx)("strong", null, (0, _.jsx)(v.I18nMessageComponent, {
                    id: "site.header.search.".concat(null != X && X.length ? "recent" : "popular", "Searches")
                })))), (0, _.jsx)("ul", {
                    className: "p-0 m-0 ".concat(y.default.list)
                }, null != X && X.length ? X.map((function (e, t) {
                    return (0, _.jsx)("li", {
                        key: "".concat(e.searchUrl, "-").concat(t),
                        className: "d-flex align-items-center ".concat(j.default.recentSearchItem)
                    }, k, (0, _.jsx)("a", {
                        onClick: function () {
                            return (0, m.trackClickEventDeferred)("jobs", "recent-searches")
                        },
                        href: e.searchUrl
                    }, e.locationName ? (0, _.jsx)(v.I18nMessageComponent, {
                        id: "site.header.recentSearches.jobsInLoc",
                        values: {
                            keyword: e.keyword,
                            location: e.locationName
                        }
                    }) : (0, _.jsx)(v.I18nMessageComponent, {
                        id: "site.header.recentSearches.jobs",
                        values: {
                            keyword: e.keyword
                        }
                    })))
                })) : ee.map((function (e, t) {
                    return (0, _.jsx)("li", {
                        key: "".concat(e, "-").concat(t),
                        className: "d-flex align-items-center ".concat(j.default.recentSearchItem)
                    }, I, (0, _.jsx)("div", {
                        onClick: re(e)
                    }, (0, _.jsx)(v.I18nMessageComponent, {
                        id: "site.header.search.popularSearches.jobs",
                        values: {
                            keyword: e
                        }
                    })))
                })))))) : null
            };
        M.propTypes = {
            show: c.default.bool,
            onDrawerClosed: c.default.func
        }, M.defaultProps = {
            show: !1,
            onDrawerClosed: function () {}
        };
        var A = M;
        t.default = A
    },
    893: function (e, t, a) {
        e.exports = {
            keywordInputContainer: "universalSearch__UniversalSearchFormStyles__keywordInputContainer",
            searchButton: "universalSearch__UniversalSearchFormStyles__searchButton",
            searchFormContainer: "universalSearch__UniversalSearchFormStyles__searchFormContainer",
            searchInputLabel: "universalSearch__UniversalSearchFormStyles__searchInputLabel",
            searchInput: "universalSearch__UniversalSearchFormStyles__searchInput",
            searchKeywordInput: "universalSearch__UniversalSearchFormStyles__searchKeywordInput",
            searchLocationInput: "universalSearch__UniversalSearchFormStyles__searchLocationInput",
            searchLocationContainer: "universalSearch__UniversalSearchFormStyles__searchLocationContainer",
            searchMenuCloseBtn: "universalSearch__UniversalSearchFormStyles__searchMenuCloseBtn",
            hiddenSearchButton: "universalSearch__UniversalSearchFormStyles__hiddenSearchButton"
        }
    },
    97: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = a(27),
            n = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                e.preventDefault(), e.stopPropagation(), (0, o.trackEventInGA)("new nav", "click tap", "sign-in");
                var a = {
                        userOriginHook: "HEADER_SIGNIN_LINK",
                        gaViewLabel: "/splash/login/header-signin-link",
                        isDefaultSignUp: t
                    },
                    n = new CustomEvent("showLoginModal", {
                        detail: a
                    });
                document.body.dispatchEvent(n)
            };
        t.default = n
    }
});
//# sourceMappingURL=https://artifactory.qa.jagundi.com/artifactory/npm-internal/gd-garnish/-/gd-garnish-1.5.46.tgz!/package/public/static/js/gd-siteHeader.bundle.js.map