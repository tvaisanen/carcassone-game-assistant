goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__31875){
var map__31876 = p__31875;
var map__31876__$1 = cljs.core.__destructure_map(map__31876);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31876__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31876__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31876__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31876__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4223__auto__ = child_of;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__31877_31923 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__31878_31924 = null;
var count__31879_31925 = (0);
var i__31880_31926 = (0);
while(true){
if((i__31880_31926 < count__31879_31925)){
var vec__31891_31927 = chunk__31878_31924.cljs$core$IIndexed$_nth$arity$2(null,i__31880_31926);
var k_31928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31891_31927,(0),null);
var cb_31929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31891_31927,(1),null);
try{var G__31895_31930 = cljs.core.deref(re_frame.trace.traces);
(cb_31929.cljs$core$IFn$_invoke$arity$1 ? cb_31929.cljs$core$IFn$_invoke$arity$1(G__31895_31930) : cb_31929.call(null,G__31895_31930));
}catch (e31894){var e_31931 = e31894;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_31928,"while storing",cljs.core.deref(re_frame.trace.traces),e_31931], 0));
}

var G__31932 = seq__31877_31923;
var G__31933 = chunk__31878_31924;
var G__31934 = count__31879_31925;
var G__31935 = (i__31880_31926 + (1));
seq__31877_31923 = G__31932;
chunk__31878_31924 = G__31933;
count__31879_31925 = G__31934;
i__31880_31926 = G__31935;
continue;
} else {
var temp__5753__auto___31936 = cljs.core.seq(seq__31877_31923);
if(temp__5753__auto___31936){
var seq__31877_31937__$1 = temp__5753__auto___31936;
if(cljs.core.chunked_seq_QMARK_(seq__31877_31937__$1)){
var c__4649__auto___31938 = cljs.core.chunk_first(seq__31877_31937__$1);
var G__31939 = cljs.core.chunk_rest(seq__31877_31937__$1);
var G__31940 = c__4649__auto___31938;
var G__31941 = cljs.core.count(c__4649__auto___31938);
var G__31942 = (0);
seq__31877_31923 = G__31939;
chunk__31878_31924 = G__31940;
count__31879_31925 = G__31941;
i__31880_31926 = G__31942;
continue;
} else {
var vec__31896_31943 = cljs.core.first(seq__31877_31937__$1);
var k_31944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31896_31943,(0),null);
var cb_31945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31896_31943,(1),null);
try{var G__31900_31946 = cljs.core.deref(re_frame.trace.traces);
(cb_31945.cljs$core$IFn$_invoke$arity$1 ? cb_31945.cljs$core$IFn$_invoke$arity$1(G__31900_31946) : cb_31945.call(null,G__31900_31946));
}catch (e31899){var e_31947 = e31899;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_31944,"while storing",cljs.core.deref(re_frame.trace.traces),e_31947], 0));
}

var G__31948 = cljs.core.next(seq__31877_31937__$1);
var G__31949 = null;
var G__31950 = (0);
var G__31951 = (0);
seq__31877_31923 = G__31948;
chunk__31878_31924 = G__31949;
count__31879_31925 = G__31950;
i__31880_31926 = G__31951;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
