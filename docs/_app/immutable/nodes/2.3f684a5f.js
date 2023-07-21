import {
	r as re,
	s as _e,
	c as U,
	u as W,
	g as Y,
	d as G,
	n as ue,
	f as pe
} from '../chunks/scheduler.b95eede2.js';
import {
	t as O,
	d as j,
	S as fe,
	i as he,
	g as k,
	s as q,
	m as N,
	h as y,
	j as z,
	c as F,
	f,
	n as V,
	k as A,
	a as D,
	x as v,
	y as x,
	z as ee,
	A as K,
	b as de,
	B as ve,
	e as te,
	r as me,
	u as ge,
	v as we,
	w as $e,
	C as be,
	p as Ee,
	D as ke,
	o as J
} from '../chunks/index.be566931.js';
function Q(s) {
	return (s == null ? void 0 : s.length) !== void 0 ? s : Array.from(s);
}
function ye(s, e) {
	O(s, 1, 1, () => {
		e.delete(s.key);
	});
}
function Se(s, e, a, l, n, o, h, d, u, g, I, S) {
	let p = s.length,
		$ = o.length,
		_ = p;
	const T = {};
	for (; _--; ) T[s[_].key] = _;
	const P = [],
		b = new Map(),
		L = new Map(),
		m = [];
	for (_ = $; _--; ) {
		const t = S(n, o, _),
			c = a(t);
		let r = h.get(c);
		r ? l && m.push(() => r.p(t, e)) : ((r = g(c, t)), r.c()),
			b.set(c, (P[_] = r)),
			c in T && L.set(c, Math.abs(_ - T[c]));
	}
	const B = new Set(),
		E = new Set();
	function C(t) {
		j(t, 1), t.m(d, I), h.set(t.key, t), (I = t.first), $--;
	}
	for (; p && $; ) {
		const t = P[$ - 1],
			c = s[p - 1],
			r = t.key,
			i = c.key;
		t === c
			? ((I = t.first), p--, $--)
			: b.has(i)
			? !h.has(r) || B.has(r)
				? C(t)
				: E.has(i)
				? p--
				: L.get(r) > L.get(i)
				? (E.add(r), C(t))
				: (B.add(i), p--)
			: (u(c, h), p--);
	}
	for (; p--; ) {
		const t = s[p];
		b.has(t.key) || u(t, h);
	}
	for (; $; ) C(P[$ - 1]);
	return re(m), P;
}
const ze = (s) => ({}),
	se = (s) => ({}),
	Pe = (s) => ({}),
	ne = (s) => ({}),
	De = (s) => ({}),
	le = (s) => ({}),
	Ie = (s) => ({}),
	ae = (s) => ({}),
	Ce = (s) => ({}),
	oe = (s) => ({});
function Me(s) {
	let e;
	return {
		c() {
			(e = k('div')), this.h();
		},
		l(a) {
			(e = y(a, 'DIV', { class: !0 })), z(e).forEach(f), this.h();
		},
		h() {
			A(e, 'class', 'div-image svelte-1iz7u8a');
		},
		m(a, l) {
			D(a, e, l);
		},
		p: ue,
		d(a) {
			a && f(e);
		}
	};
}
function Ae(s) {
	let e,
		a,
		l,
		n,
		o,
		h,
		d,
		u,
		g = '/',
		I,
		S,
		p,
		$,
		_;
	const T = s[1].picture,
		P = U(T, s, s[0], oe),
		b = P || Me(),
		L = s[1].name,
		m = U(L, s, s[0], ae),
		B = s[1].price,
		E = U(B, s, s[0], le),
		C = s[1].unit,
		t = U(C, s, s[0], ne),
		c = s[1].variant,
		r = U(c, s, s[0], se);
	return {
		c() {
			(e = k('div')),
				b && b.c(),
				(a = q()),
				(l = k('div')),
				(n = k('div')),
				(o = k('span')),
				m && m.c(),
				(h = q()),
				(d = k('span')),
				E && E.c(),
				(u = N(' ')),
				(I = N(g)),
				(S = N(' ')),
				t && t.c(),
				(p = q()),
				($ = k('div')),
				r && r.c(),
				this.h();
		},
		l(i) {
			e = y(i, 'DIV', { class: !0 });
			var w = z(e);
			b && b.l(w), (a = F(w)), (l = y(w, 'DIV', { class: !0 }));
			var M = z(l);
			n = y(M, 'DIV', { class: !0 });
			var H = z(n);
			o = y(H, 'SPAN', { class: !0 });
			var R = z(o);
			m && m.l(R), R.forEach(f), (h = F(H)), (d = y(H, 'SPAN', { class: !0 }));
			var X = z(d);
			E && E.l(X),
				X.forEach(f),
				(u = V(H, ' ')),
				(I = V(H, g)),
				(S = V(H, ' ')),
				t && t.l(H),
				H.forEach(f),
				(p = F(M)),
				($ = y(M, 'DIV', {}));
			var Z = z($);
			r && r.l(Z), Z.forEach(f), M.forEach(f), w.forEach(f), this.h();
		},
		h() {
			A(o, 'class', 'product-name flex-1 svelte-1iz7u8a'),
				A(d, 'class', 'product-price svelte-1iz7u8a'),
				A(n, 'class', 'flex-row svelte-1iz7u8a'),
				A(l, 'class', 'p-16 svelte-1iz7u8a'),
				A(e, 'class', 'box svelte-1iz7u8a');
		},
		m(i, w) {
			D(i, e, w),
				b && b.m(e, null),
				v(e, a),
				v(e, l),
				v(l, n),
				v(n, o),
				m && m.m(o, null),
				v(n, h),
				v(n, d),
				E && E.m(d, null),
				v(n, u),
				v(n, I),
				v(n, S),
				t && t.m(n, null),
				v(l, p),
				v(l, $),
				r && r.m($, null),
				(_ = !0);
		},
		p(i, [w]) {
			P && P.p && (!_ || w & 1) && W(P, T, i, i[0], _ ? G(T, i[0], w, Ce) : Y(i[0]), oe),
				m && m.p && (!_ || w & 1) && W(m, L, i, i[0], _ ? G(L, i[0], w, Ie) : Y(i[0]), ae),
				E && E.p && (!_ || w & 1) && W(E, B, i, i[0], _ ? G(B, i[0], w, De) : Y(i[0]), le),
				t && t.p && (!_ || w & 1) && W(t, C, i, i[0], _ ? G(C, i[0], w, Pe) : Y(i[0]), ne),
				r && r.p && (!_ || w & 1) && W(r, c, i, i[0], _ ? G(c, i[0], w, ze) : Y(i[0]), se);
		},
		i(i) {
			_ || (j(b, i), j(m, i), j(E, i), j(t, i), j(r, i), (_ = !0));
		},
		o(i) {
			O(b, i), O(m, i), O(E, i), O(t, i), O(r, i), (_ = !1);
		},
		d(i) {
			i && f(e), b && b.d(i), m && m.d(i), E && E.d(i), t && t.d(i), r && r.d(i);
		}
	};
}
function Ne(s, e, a) {
	let { $$slots: l = {}, $$scope: n } = e;
	return (
		(s.$$set = (o) => {
			'$$scope' in o && a(0, (n = o.$$scope));
		}),
		[n, l]
	);
}
class Ve extends fe {
	constructor(e) {
		super(), he(this, e, Ne, Ae, _e, {});
	}
}
function Te(s, e, a) {
	const l = s.slice();
	return (l[8] = e[a]), l;
}
function ie(s, e, a) {
	const l = s.slice();
	return (l[11] = e[a]), l;
}
function Le(s) {
	let e,
		a = s[11].name + '',
		l;
	return {
		c() {
			(e = k('span')), (l = N(a)), this.h();
		},
		l(n) {
			e = y(n, 'SPAN', { slot: !0 });
			var o = z(e);
			(l = V(o, a)), o.forEach(f), this.h();
		},
		h() {
			A(e, 'slot', 'name');
		},
		m(n, o) {
			D(n, e, o), v(e, l);
		},
		p(n, o) {
			o & 4 && a !== (a = n[11].name + '') && J(l, a);
		},
		d(n) {
			n && f(e);
		}
	};
}
function Be(s) {
	let e,
		a = (s[11].variant_name ?? '') + '',
		l,
		n,
		o = s[11].category_name + '',
		h,
		d;
	return {
		c() {
			(e = k('span')), (l = N(a)), (n = N(' (')), (h = N(o)), (d = N(')')), this.h();
		},
		l(u) {
			e = y(u, 'SPAN', { slot: !0 });
			var g = z(e);
			(l = V(g, a)), (n = V(g, ' (')), (h = V(g, o)), (d = V(g, ')')), g.forEach(f), this.h();
		},
		h() {
			A(e, 'slot', 'variant');
		},
		m(u, g) {
			D(u, e, g), v(e, l), v(e, n), v(e, h), v(e, d);
		},
		p(u, g) {
			g & 4 && a !== (a = (u[11].variant_name ?? '') + '') && J(l, a),
				g & 4 && o !== (o = u[11].category_name + '') && J(h, o);
		},
		d(u) {
			u && f(e);
		}
	};
}
function He(s) {
	let e,
		a = s[11].price.toLocaleString('id-ID') + '',
		l;
	return {
		c() {
			(e = k('span')), (l = N(a)), this.h();
		},
		l(n) {
			e = y(n, 'SPAN', { slot: !0 });
			var o = z(e);
			(l = V(o, a)), o.forEach(f), this.h();
		},
		h() {
			A(e, 'slot', 'price');
		},
		m(n, o) {
			D(n, e, o), v(e, l);
		},
		p(n, o) {
			o & 4 && a !== (a = n[11].price.toLocaleString('id-ID') + '') && J(l, a);
		},
		d(n) {
			n && f(e);
		}
	};
}
function Oe(s) {
	let e,
		a = s[11].unit + '',
		l;
	return {
		c() {
			(e = k('span')), (l = N(a)), this.h();
		},
		l(n) {
			e = y(n, 'SPAN', { slot: !0 });
			var o = z(e);
			(l = V(o, a)), o.forEach(f), this.h();
		},
		h() {
			A(e, 'slot', 'unit');
		},
		m(n, o) {
			D(n, e, o), v(e, l);
		},
		p(n, o) {
			o & 4 && a !== (a = n[11].unit + '') && J(l, a);
		},
		d(n) {
			n && f(e);
		}
	};
}
function ce(s, e) {
	let a, l, n;
	return (
		(l = new Ve({
			props: {
				$$slots: { unit: [Oe], price: [He], variant: [Be], name: [Le] },
				$$scope: { ctx: e }
			}
		})),
		{
			key: s,
			first: null,
			c() {
				(a = te()), me(l.$$.fragment), this.h();
			},
			l(o) {
				(a = te()), ge(l.$$.fragment, o), this.h();
			},
			h() {
				this.first = a;
			},
			m(o, h) {
				D(o, a, h), we(l, o, h), (n = !0);
			},
			p(o, h) {
				e = o;
				const d = {};
				h & 16388 && (d.$$scope = { dirty: h, ctx: e }), l.$set(d);
			},
			i(o) {
				n || (j(l.$$.fragment, o), (n = !0));
			},
			o(o) {
				O(l.$$.fragment, o), (n = !1);
			},
			d(o) {
				o && f(a), $e(l, o);
			}
		}
	);
}
function je(s) {
	let e, a;
	return {
		c() {
			(e = k('option')), (a = N(s[8])), this.h();
		},
		l(l) {
			e = y(l, 'OPTION', {});
			var n = z(e);
			(a = V(n, s[8])), n.forEach(f), this.h();
		},
		h() {
			(e.__value = s[8]), be(e, e.__value);
		},
		m(l, n) {
			D(l, e, n), v(e, a);
		},
		p: ue,
		d(l) {
			l && f(e);
		}
	};
}
function qe(s) {
	let e,
		a = 'Welcome to Fine Young Canibals',
		l,
		n,
		o = 'Visit <a href="https://sapulidi.site">sapulidi.site</a> to read the documentation',
		h,
		d,
		u = [],
		g = new Map(),
		I,
		S,
		p,
		$,
		_,
		T,
		P,
		b,
		L,
		m = Q(s[2]);
	const B = (t) => t[11].id;
	for (let t = 0; t < m.length; t += 1) {
		let c = ie(s, m, t),
			r = B(c);
		g.set(r, (u[t] = ce(r, c)));
	}
	let E = Q([3, 5, 10, 30, 50]),
		C = [];
	for (let t = 0; t < 5; t += 1) C[t] = je(Te(s, E, t));
	return {
		c() {
			(e = k('h1')),
				(e.textContent = a),
				(l = q()),
				(n = k('p')),
				(n.innerHTML = o),
				(h = q()),
				(d = k('div'));
			for (let t = 0; t < u.length; t += 1) u[t].c();
			(I = q()), (S = k('div')), (p = k('select'));
			for (let t = 0; t < 5; t += 1) C[t].c();
			($ = q()), (_ = k('button')), (T = N('More product...')), this.h();
		},
		l(t) {
			(e = y(t, 'H1', { 'data-svelte-h': !0 })),
				x(e) !== 'svelte-zozz2s' && (e.textContent = a),
				(l = F(t)),
				(n = y(t, 'P', { 'data-svelte-h': !0 })),
				x(n) !== 'svelte-1fr51nb' && (n.innerHTML = o),
				(h = F(t)),
				(d = y(t, 'DIV', { class: !0 }));
			var c = z(d);
			for (let M = 0; M < u.length; M += 1) u[M].l(c);
			c.forEach(f), (I = F(t)), (S = y(t, 'DIV', { class: !0 }));
			var r = z(S);
			p = y(r, 'SELECT', {});
			var i = z(p);
			for (let M = 0; M < 5; M += 1) C[M].l(i);
			i.forEach(f), ($ = F(r)), (_ = y(r, 'BUTTON', {}));
			var w = z(_);
			(T = V(w, 'More product...')), w.forEach(f), r.forEach(f), this.h();
		},
		h() {
			A(d, 'class', 'div-product svelte-gdn39z'),
				s[1] === void 0 && pe(() => s[4].call(p)),
				(_.disabled = s[3]),
				A(S, 'class', 'mt-16 svelte-gdn39z');
		},
		m(t, c) {
			D(t, e, c), D(t, l, c), D(t, n, c), D(t, h, c), D(t, d, c);
			for (let r = 0; r < u.length; r += 1) u[r] && u[r].m(d, null);
			D(t, I, c), D(t, S, c), v(S, p);
			for (let r = 0; r < 5; r += 1) C[r] && C[r].m(p, null);
			ee(p, s[1], !0),
				v(S, $),
				v(S, _),
				v(_, T),
				(P = !0),
				b || ((L = [K(p, 'change', s[4]), K(p, 'change', s[5]), K(_, 'click', s[6])]), (b = !0));
		},
		p(t, [c]) {
			c & 4 && ((m = Q(t[2])), Ee(), (u = Se(u, c, B, 1, t, m, g, d, ye, ce, null, ie)), de()),
				c & 2 && ee(p, t[1]),
				(!P || c & 8) && (_.disabled = t[3]);
		},
		i(t) {
			if (!P) {
				for (let c = 0; c < m.length; c += 1) j(u[c]);
				P = !0;
			}
		},
		o(t) {
			for (let c = 0; c < u.length; c += 1) O(u[c]);
			P = !1;
		},
		d(t) {
			t && (f(e), f(l), f(n), f(h), f(d), f(I), f(S));
			for (let c = 0; c < u.length; c += 1) u[c].d();
			ve(C, t), (b = !1), re(L);
		}
	};
}
const Fe = 'https://sapulidi.site/api/v1/product-list';
function Ue(s, e, a) {
	let l = [],
		n = 0,
		o = 5,
		h = !1;
	const d = async (S = 0, p = 5) => {
		const _ = (await (await fetch(`${Fe}/${S}/${p}`)).json()) ?? [];
		a(3, (h = _.length < p)), a(2, (l = [...l, ..._]));
	};
	function u() {
		(o = ke(this)), a(1, o);
	}
	const g = () => {
			a(2, (l = [])), a(0, (n = 0)), a(3, (h = !1));
		},
		I = () => a(0, (n = n + 1));
	return (
		(s.$$.update = () => {
			s.$$.dirty & 3 && d(n, o);
		}),
		[n, o, l, h, u, g, I]
	);
}
class Ge extends fe {
	constructor(e) {
		super(), he(this, e, Ue, qe, _e, {});
	}
}
export { Ge as component };
