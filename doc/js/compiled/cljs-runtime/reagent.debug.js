goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__30903__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__30903 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30904__i = 0, G__30904__a = new Array(arguments.length -  0);
while (G__30904__i < G__30904__a.length) {G__30904__a[G__30904__i] = arguments[G__30904__i + 0]; ++G__30904__i;}
  args = new cljs.core.IndexedSeq(G__30904__a,0,null);
} 
return G__30903__delegate.call(this,args);};
G__30903.cljs$lang$maxFixedArity = 0;
G__30903.cljs$lang$applyTo = (function (arglist__30905){
var args = cljs.core.seq(arglist__30905);
return G__30903__delegate(args);
});
G__30903.cljs$core$IFn$_invoke$arity$variadic = G__30903__delegate;
return G__30903;
})()
);

(o.error = (function() { 
var G__30906__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__30906 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30907__i = 0, G__30907__a = new Array(arguments.length -  0);
while (G__30907__i < G__30907__a.length) {G__30907__a[G__30907__i] = arguments[G__30907__i + 0]; ++G__30907__i;}
  args = new cljs.core.IndexedSeq(G__30907__a,0,null);
} 
return G__30906__delegate.call(this,args);};
G__30906.cljs$lang$maxFixedArity = 0;
G__30906.cljs$lang$applyTo = (function (arglist__30908){
var args = cljs.core.seq(arglist__30908);
return G__30906__delegate(args);
});
G__30906.cljs$core$IFn$_invoke$arity$variadic = G__30906__delegate;
return G__30906;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
