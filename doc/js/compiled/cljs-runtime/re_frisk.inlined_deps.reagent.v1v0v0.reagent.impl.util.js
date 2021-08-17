goog.provide('re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util');
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.is_client = (((typeof window !== 'undefined')) && ((!((window.document == null)))));
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_non_reactive_STAR_ = false;
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.memoize_1 = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (arg){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mem),arg);
if((!((v == null)))){
return v;
} else {
var ret = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg) : f.call(null,arg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,arg,ret);

return ret;
}
});
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.capitalize = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$util$capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return [clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))].join('');
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.dash_to_prop_name = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$util$dash_to_prop_name(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var vec__32459 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);
var seq__32460 = cljs.core.seq(vec__32459);
var first__32461 = cljs.core.first(seq__32460);
var seq__32460__$1 = cljs.core.next(seq__32460);
var start = first__32461;
var parts = seq__32460__$1;
if(cljs.core.truth_((re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(start) : re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.dont_camel_case.call(null,start)))){
return name_str;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.capitalize,parts));
}
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.dash_to_method_name = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$util$dash_to_method_name(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var name_str__$1 = clojure.string.replace(name_str,/(unsafe|UNSAFE)[-_]/,"UNSAFE_");
var vec__32463 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str__$1,/-/);
var seq__32464 = cljs.core.seq(vec__32463);
var first__32465 = cljs.core.first(seq__32464);
var seq__32464__$1 = cljs.core.next(seq__32464);
var start = first__32465;
var parts = seq__32464__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.capitalize,parts));
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.fun_name = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$util$fun_name(f){
var n = (function (){var or__4223__auto__ = (function (){var and__4221__auto__ = cljs.core.fn_QMARK_(f);
if(and__4221__auto__){
var or__4223__auto__ = f.displayName;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var n = f.name;
if(((typeof n === 'string') && (cljs.core.seq(n)))){
return n;
} else {
return null;
}
}
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = (function (){var and__4221__auto__ = (((!((f == null))))?(((((f.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === f.cljs$core$INamed$))))?true:false):false);
if(and__4221__auto__){
return cljs.core.name(f);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
var m = cljs.core.meta(f);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(n)){
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"$",".");
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.Fn}
*/
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn = (function (pfn,f,args){
this.pfn = pfn;
this.f = f;
this.args = args;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$Fn$ = cljs.core.PROTOCOL_SENTINEL);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.call = (function() {
var G__32528 = null;
var G__32528__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$0 ? self__.pfn.cljs$core$IFn$_invoke$arity$0() : self__.pfn.call(null));
});
var G__32528__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$1 ? self__.pfn.cljs$core$IFn$_invoke$arity$1(a) : self__.pfn.call(null,a));
});
var G__32528__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$2 ? self__.pfn.cljs$core$IFn$_invoke$arity$2(a,b) : self__.pfn.call(null,a,b));
});
var G__32528__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$3 ? self__.pfn.cljs$core$IFn$_invoke$arity$3(a,b,c) : self__.pfn.call(null,a,b,c));
});
var G__32528__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$4 ? self__.pfn.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : self__.pfn.call(null,a,b,c,d));
});
var G__32528__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$5 ? self__.pfn.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : self__.pfn.call(null,a,b,c,d,e));
});
var G__32528__7 = (function (self__,a,b,c,d,e,f__$1){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$6 ? self__.pfn.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f__$1) : self__.pfn.call(null,a,b,c,d,e,f__$1));
});
var G__32528__8 = (function (self__,a,b,c,d,e,f__$1,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$7 ? self__.pfn.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f__$1,g) : self__.pfn.call(null,a,b,c,d,e,f__$1,g));
});
var G__32528__9 = (function (self__,a,b,c,d,e,f__$1,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$8 ? self__.pfn.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f__$1,g,h) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h));
});
var G__32528__10 = (function (self__,a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$9 ? self__.pfn.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f__$1,g,h,i) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i));
});
var G__32528__11 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$10 ? self__.pfn.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f__$1,g,h,i,j) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j));
});
var G__32528__12 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$11 ? self__.pfn.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k));
});
var G__32528__13 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$12 ? self__.pfn.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l));
});
var G__32528__14 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$13 ? self__.pfn.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m));
});
var G__32528__15 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$14 ? self__.pfn.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n));
});
var G__32528__16 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$15 ? self__.pfn.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o));
});
var G__32528__17 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$16 ? self__.pfn.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p));
});
var G__32528__18 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$17 ? self__.pfn.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q));
});
var G__32528__19 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$18 ? self__.pfn.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r));
});
var G__32528__20 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$19 ? self__.pfn.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s));
});
var G__32528__21 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.pfn.cljs$core$IFn$_invoke$arity$20 ? self__.pfn.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
});
var G__32528__22 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.pfn,a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__32528 = function(self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__32528__1.call(this,self__);
case 2:
return G__32528__2.call(this,self__,a);
case 3:
return G__32528__3.call(this,self__,a,b);
case 4:
return G__32528__4.call(this,self__,a,b,c);
case 5:
return G__32528__5.call(this,self__,a,b,c,d);
case 6:
return G__32528__6.call(this,self__,a,b,c,d,e);
case 7:
return G__32528__7.call(this,self__,a,b,c,d,e,f__$1);
case 8:
return G__32528__8.call(this,self__,a,b,c,d,e,f__$1,g);
case 9:
return G__32528__9.call(this,self__,a,b,c,d,e,f__$1,g,h);
case 10:
return G__32528__10.call(this,self__,a,b,c,d,e,f__$1,g,h,i);
case 11:
return G__32528__11.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j);
case 12:
return G__32528__12.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k);
case 13:
return G__32528__13.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l);
case 14:
return G__32528__14.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
case 15:
return G__32528__15.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
case 16:
return G__32528__16.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
case 17:
return G__32528__17.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__32528__18.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__32528__19.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__32528__20.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__32528__21.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__32528__22.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32528.cljs$core$IFn$_invoke$arity$1 = G__32528__1;
G__32528.cljs$core$IFn$_invoke$arity$2 = G__32528__2;
G__32528.cljs$core$IFn$_invoke$arity$3 = G__32528__3;
G__32528.cljs$core$IFn$_invoke$arity$4 = G__32528__4;
G__32528.cljs$core$IFn$_invoke$arity$5 = G__32528__5;
G__32528.cljs$core$IFn$_invoke$arity$6 = G__32528__6;
G__32528.cljs$core$IFn$_invoke$arity$7 = G__32528__7;
G__32528.cljs$core$IFn$_invoke$arity$8 = G__32528__8;
G__32528.cljs$core$IFn$_invoke$arity$9 = G__32528__9;
G__32528.cljs$core$IFn$_invoke$arity$10 = G__32528__10;
G__32528.cljs$core$IFn$_invoke$arity$11 = G__32528__11;
G__32528.cljs$core$IFn$_invoke$arity$12 = G__32528__12;
G__32528.cljs$core$IFn$_invoke$arity$13 = G__32528__13;
G__32528.cljs$core$IFn$_invoke$arity$14 = G__32528__14;
G__32528.cljs$core$IFn$_invoke$arity$15 = G__32528__15;
G__32528.cljs$core$IFn$_invoke$arity$16 = G__32528__16;
G__32528.cljs$core$IFn$_invoke$arity$17 = G__32528__17;
G__32528.cljs$core$IFn$_invoke$arity$18 = G__32528__18;
G__32528.cljs$core$IFn$_invoke$arity$19 = G__32528__19;
G__32528.cljs$core$IFn$_invoke$arity$20 = G__32528__20;
G__32528.cljs$core$IFn$_invoke$arity$21 = G__32528__21;
G__32528.cljs$core$IFn$_invoke$arity$22 = G__32528__22;
return G__32528;
})()
);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.apply = (function (self__,args32477){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args32477)));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$0 ? self__.pfn.cljs$core$IFn$_invoke$arity$0() : self__.pfn.call(null));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$1 ? self__.pfn.cljs$core$IFn$_invoke$arity$1(a) : self__.pfn.call(null,a));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$2 ? self__.pfn.cljs$core$IFn$_invoke$arity$2(a,b) : self__.pfn.call(null,a,b));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$3 ? self__.pfn.cljs$core$IFn$_invoke$arity$3(a,b,c) : self__.pfn.call(null,a,b,c));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$4 ? self__.pfn.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : self__.pfn.call(null,a,b,c,d));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$5 ? self__.pfn.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : self__.pfn.call(null,a,b,c,d,e));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f__$1){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$6 ? self__.pfn.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f__$1) : self__.pfn.call(null,a,b,c,d,e,f__$1));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f__$1,g){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$7 ? self__.pfn.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f__$1,g) : self__.pfn.call(null,a,b,c,d,e,f__$1,g));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f__$1,g,h){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$8 ? self__.pfn.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f__$1,g,h) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$9 ? self__.pfn.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f__$1,g,h,i) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$10 ? self__.pfn.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f__$1,g,h,i,j) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$11 ? self__.pfn.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$12 ? self__.pfn.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$13 ? self__.pfn.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$14 ? self__.pfn.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$15 ? self__.pfn.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$16 ? self__.pfn.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$17 ? self__.pfn.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$18 ? self__.pfn.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$19 ? self__.pfn.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return (self__.pfn.cljs$core$IFn$_invoke$arity$20 ? self__.pfn.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.pfn,a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args)))));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pfn","pfn",-513383568,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.cljs$lang$type = true);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.cljs$lang$ctorStr = "re-frisk.inlined-deps.reagent.v1v0v0.reagent.impl.util/PartialFn");

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"re-frisk.inlined-deps.reagent.v1v0v0.reagent.impl.util/PartialFn");
}));

/**
 * Positional factory function for re-frisk.inlined-deps.reagent.v1v0v0.reagent.impl.util/PartialFn.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.__GT_PartialFn = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$util$__GT_PartialFn(pfn,f,args){
return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.PartialFn(pfn,f,args));
});

re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.make_partial_fn = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$util$make_partial_fn(f,args){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.__GT_PartialFn(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,f,args),f,args);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.named_QMARK_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$util$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$util$class_names(var_args){
var G__32492 = arguments.length;
switch (G__32492) {
case 0:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___32574 = arguments.length;
var i__4830__auto___32575 = (0);
while(true){
if((i__4830__auto___32575 < len__4829__auto___32574)){
args_arr__4850__auto__.push((arguments[i__4830__auto___32575]));

var G__32576 = (i__4830__auto___32575 + (1));
i__4830__auto___32575 = G__32576;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((2)),(0),null));
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4851__auto__);

}
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1 = (function (class$){
if(cljs.core.coll_QMARK_(class$)){
var classes = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (c){
if(cljs.core.truth_(c)){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.named_QMARK_(c)){
return cljs.core.name(c);
} else {
return c;
}
} else {
return null;
}
}),class$);
if(cljs.core.seq(classes)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes);
} else {
return null;
}
} else {
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.named_QMARK_(class$)){
return cljs.core.name(class$);
} else {
return class$;
}
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.truth_(a)){
if(cljs.core.truth_(b)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(a))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(b))].join('');
} else {
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(a);
}
} else {
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(b);
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rst){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2(a,b),rst);
}));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$lang$applyTo = (function (seq32489){
var G__32490 = cljs.core.first(seq32489);
var seq32489__$1 = cljs.core.next(seq32489);
var G__32491 = cljs.core.first(seq32489__$1);
var seq32489__$2 = cljs.core.next(seq32489__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32490,G__32491,seq32489__$2);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$lang$maxFixedArity = (2));

re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_class = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$util$merge_class(p1,p2){
if(((cljs.core.contains_QMARK_(p1,new cljs.core.Keyword(null,"class","class",-2030961996))) || (cljs.core.contains_QMARK_(p2,new cljs.core.Keyword(null,"class","class",-2030961996))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,new cljs.core.Keyword(null,"class","class",-2030961996),re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2)));
} else {
return p2;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_style = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__5753__auto__)){
var s1 = temp__5753__auto__;
var temp__5753__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5753__auto____$1)){
var s2 = temp__5753__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s1,s2], 0));
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$util$merge_props(var_args){
var G__32502 = arguments.length;
switch (G__32502) {
case 0:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___32578 = arguments.length;
var i__4830__auto___32579 = (0);
while(true){
if((i__4830__auto___32579 < len__4829__auto___32578)){
args_arr__4850__auto__.push((arguments[i__4830__auto___32579]));

var G__32580 = (i__4830__auto___32579 + (1));
i__4830__auto___32579 = G__32580;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((2)),(0),null));
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4851__auto__);

}
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$1 = (function (p){
var temp__5751__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(temp__5751__auto__)){
var c = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,new cljs.core.Keyword(null,"class","class",-2030961996),re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(c));
} else {
return p;
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2 = (function (p1,p2){
if((p1 == null)){
var temp__5751__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__5751__auto__)){
var c = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,new cljs.core.Keyword(null,"class","class",-2030961996),re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(c));
} else {
return p2;
}
} else {
if(cljs.core.map_QMARK_(p1)){
} else {
throw (new Error(["Assert failed: ",["Property must be a map, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1], 0))].join(''),"\n","(map? p1)"].join('')));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_style(p1,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_class(p1,p2))], 0));
}
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (p1,p2,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2(p1,p2),ps);
}));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$lang$applyTo = (function (seq32499){
var G__32500 = cljs.core.first(seq32499);
var seq32499__$1 = cljs.core.next(seq32499);
var G__32501 = cljs.core.first(seq32499__$1);
var seq32499__$2 = cljs.core.next(seq32499__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32500,G__32501,seq32499__$2);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.merge_props.cljs$lang$maxFixedArity = (2));

re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = false;
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.force_update = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$util$force_update(comp,deep){
if(cljs.core.truth_(deep)){
var _STAR_always_update_STAR__orig_val__32503 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__32504 = true;
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__32504);

try{return comp.forceUpdate();
}finally {(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__32503);
}} else {
return comp.forceUpdate();
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.shallow_obj_to_map = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$util$shallow_obj_to_map(o){
var ks = cljs.core.js_keys(o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
var G__32581 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),goog.object.get(o,k));
var G__32582 = (i + (1));
m = G__32581;
i = G__32582;
continue;
} else {
return m;
}
break;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.js_val_QMARK_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$util$js_val_QMARK_(x){
return (!(("object" === goog.typeOf(x))));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.try_get_react_key = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$util$try_get_react_key(x){
try{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"key","key",-1516042587));
}catch (e32505){var e = e32505;
return null;
}});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.get_react_key = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$util$get_react_key(x){
if(cljs.core.map_QMARK_(x)){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.try_get_react_key(x);
} else {
return null;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.react_key_from_vec = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$util$react_key_from_vec(v){
var or__4223__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.get_react_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null));
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
var G__32506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
var G__32506__$1 = (((G__32506 instanceof cljs.core.Keyword))?G__32506.fqn:null);
switch (G__32506__$1) {
case ">":
case "f>":
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.get_react_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),null));

break;
case "r>":
var G__32507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),null);
if((G__32507 == null)){
return null;
} else {
return G__32507.key;
}

break;
default:
return null;

}
}
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.str_coll = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$util$str_coll(coll){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk((function (x){
if(cljs.core.fn_QMARK_(x)){
var n = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.fun_name(x);
var G__32513 = n;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",G__32513)){
return x;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__32513)){
return x;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(n);

}
}
} else {
return x;
}
}),coll));

});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.hiccup_err = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$util$hiccup_err(var_args){
var args__4835__auto__ = [];
var len__4829__auto___32584 = arguments.length;
var i__4830__auto___32585 = (0);
while(true){
if((i__4830__auto___32585 < len__4829__auto___32584)){
args__4835__auto__.push((arguments[i__4830__auto___32585]));

var G__32586 = (i__4830__auto___32585 + (1));
i__4830__auto___32585 = G__32586;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,comp_name,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)),": ",re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.str_coll(v),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comp_name)].join('');
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.hiccup_err.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.hiccup_err.cljs$lang$applyTo = (function (seq32517){
var G__32518 = cljs.core.first(seq32517);
var seq32517__$1 = cljs.core.next(seq32517);
var G__32519 = cljs.core.first(seq32517__$1);
var seq32517__$2 = cljs.core.next(seq32517__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32518,G__32519,seq32517__$2);
}));


//# sourceMappingURL=re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.js.map
