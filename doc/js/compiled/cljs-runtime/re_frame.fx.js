goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__32104 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__32105 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__32105);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___32230 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___32230)){
var new_db_32231 = temp__5753__auto___32230;
var fexpr__32109_32232 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32109_32232.cljs$core$IFn$_invoke$arity$1 ? fexpr__32109_32232.cljs$core$IFn$_invoke$arity$1(new_db_32231) : fexpr__32109_32232.call(null,new_db_32231));
} else {
}

var seq__32110 = cljs.core.seq(effects_without_db);
var chunk__32111 = null;
var count__32112 = (0);
var i__32113 = (0);
while(true){
if((i__32113 < count__32112)){
var vec__32141 = chunk__32111.cljs$core$IIndexed$_nth$arity$2(null,i__32113);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32141,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32141,(1),null);
var temp__5751__auto___32233 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32233)){
var effect_fn_32234 = temp__5751__auto___32233;
(effect_fn_32234.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32234.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32234.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32235 = seq__32110;
var G__32236 = chunk__32111;
var G__32237 = count__32112;
var G__32238 = (i__32113 + (1));
seq__32110 = G__32235;
chunk__32111 = G__32236;
count__32112 = G__32237;
i__32113 = G__32238;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32110);
if(temp__5753__auto__){
var seq__32110__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32110__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32110__$1);
var G__32239 = cljs.core.chunk_rest(seq__32110__$1);
var G__32240 = c__4649__auto__;
var G__32241 = cljs.core.count(c__4649__auto__);
var G__32242 = (0);
seq__32110 = G__32239;
chunk__32111 = G__32240;
count__32112 = G__32241;
i__32113 = G__32242;
continue;
} else {
var vec__32144 = cljs.core.first(seq__32110__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32144,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32144,(1),null);
var temp__5751__auto___32243 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32243)){
var effect_fn_32244 = temp__5751__auto___32243;
(effect_fn_32244.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32244.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32244.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32245 = cljs.core.next(seq__32110__$1);
var G__32246 = null;
var G__32247 = (0);
var G__32248 = (0);
seq__32110 = G__32245;
chunk__32111 = G__32246;
count__32112 = G__32247;
i__32113 = G__32248;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__31855__auto___32249 = re_frame.interop.now();
var duration__31856__auto___32250 = (end__31855__auto___32249 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__31856__auto___32250,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__31855__auto___32249);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__32104);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___32251 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___32251)){
var new_db_32252 = temp__5753__auto___32251;
var fexpr__32159_32253 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32159_32253.cljs$core$IFn$_invoke$arity$1 ? fexpr__32159_32253.cljs$core$IFn$_invoke$arity$1(new_db_32252) : fexpr__32159_32253.call(null,new_db_32252));
} else {
}

var seq__32160 = cljs.core.seq(effects_without_db);
var chunk__32161 = null;
var count__32162 = (0);
var i__32163 = (0);
while(true){
if((i__32163 < count__32162)){
var vec__32180 = chunk__32161.cljs$core$IIndexed$_nth$arity$2(null,i__32163);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32180,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32180,(1),null);
var temp__5751__auto___32256 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32256)){
var effect_fn_32257 = temp__5751__auto___32256;
(effect_fn_32257.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32257.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32257.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32258 = seq__32160;
var G__32259 = chunk__32161;
var G__32260 = count__32162;
var G__32261 = (i__32163 + (1));
seq__32160 = G__32258;
chunk__32161 = G__32259;
count__32162 = G__32260;
i__32163 = G__32261;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32160);
if(temp__5753__auto__){
var seq__32160__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32160__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32160__$1);
var G__32263 = cljs.core.chunk_rest(seq__32160__$1);
var G__32264 = c__4649__auto__;
var G__32265 = cljs.core.count(c__4649__auto__);
var G__32266 = (0);
seq__32160 = G__32263;
chunk__32161 = G__32264;
count__32162 = G__32265;
i__32163 = G__32266;
continue;
} else {
var vec__32183 = cljs.core.first(seq__32160__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32183,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32183,(1),null);
var temp__5751__auto___32267 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32267)){
var effect_fn_32268 = temp__5751__auto___32267;
(effect_fn_32268.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32268.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32268.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32269 = cljs.core.next(seq__32160__$1);
var G__32270 = null;
var G__32271 = (0);
var G__32272 = (0);
seq__32160 = G__32269;
chunk__32161 = G__32270;
count__32162 = G__32271;
i__32163 = G__32272;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__32186){
var map__32187 = p__32186;
var map__32187__$1 = cljs.core.__destructure_map(map__32187);
var effect = map__32187__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32187__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32187__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__32188 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32189 = null;
var count__32190 = (0);
var i__32191 = (0);
while(true){
if((i__32191 < count__32190)){
var effect = chunk__32189.cljs$core$IIndexed$_nth$arity$2(null,i__32191);
re_frame.fx.dispatch_later(effect);


var G__32273 = seq__32188;
var G__32274 = chunk__32189;
var G__32275 = count__32190;
var G__32276 = (i__32191 + (1));
seq__32188 = G__32273;
chunk__32189 = G__32274;
count__32190 = G__32275;
i__32191 = G__32276;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32188);
if(temp__5753__auto__){
var seq__32188__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32188__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32188__$1);
var G__32277 = cljs.core.chunk_rest(seq__32188__$1);
var G__32278 = c__4649__auto__;
var G__32279 = cljs.core.count(c__4649__auto__);
var G__32280 = (0);
seq__32188 = G__32277;
chunk__32189 = G__32278;
count__32190 = G__32279;
i__32191 = G__32280;
continue;
} else {
var effect = cljs.core.first(seq__32188__$1);
re_frame.fx.dispatch_later(effect);


var G__32281 = cljs.core.next(seq__32188__$1);
var G__32282 = null;
var G__32283 = (0);
var G__32284 = (0);
seq__32188 = G__32281;
chunk__32189 = G__32282;
count__32190 = G__32283;
i__32191 = G__32284;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__32195 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__32196 = null;
var count__32197 = (0);
var i__32198 = (0);
while(true){
if((i__32198 < count__32197)){
var vec__32205 = chunk__32196.cljs$core$IIndexed$_nth$arity$2(null,i__32198);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32205,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32205,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___32285 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32285)){
var effect_fn_32287 = temp__5751__auto___32285;
(effect_fn_32287.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32287.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32287.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32289 = seq__32195;
var G__32290 = chunk__32196;
var G__32291 = count__32197;
var G__32292 = (i__32198 + (1));
seq__32195 = G__32289;
chunk__32196 = G__32290;
count__32197 = G__32291;
i__32198 = G__32292;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32195);
if(temp__5753__auto__){
var seq__32195__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32195__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32195__$1);
var G__32294 = cljs.core.chunk_rest(seq__32195__$1);
var G__32295 = c__4649__auto__;
var G__32296 = cljs.core.count(c__4649__auto__);
var G__32297 = (0);
seq__32195 = G__32294;
chunk__32196 = G__32295;
count__32197 = G__32296;
i__32198 = G__32297;
continue;
} else {
var vec__32208 = cljs.core.first(seq__32195__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32208,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32208,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___32300 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32300)){
var effect_fn_32301 = temp__5751__auto___32300;
(effect_fn_32301.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32301.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32301.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32303 = cljs.core.next(seq__32195__$1);
var G__32304 = null;
var G__32305 = (0);
var G__32306 = (0);
seq__32195 = G__32303;
chunk__32196 = G__32304;
count__32197 = G__32305;
i__32198 = G__32306;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__32214 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32215 = null;
var count__32216 = (0);
var i__32217 = (0);
while(true){
if((i__32217 < count__32216)){
var event = chunk__32215.cljs$core$IIndexed$_nth$arity$2(null,i__32217);
re_frame.router.dispatch(event);


var G__32307 = seq__32214;
var G__32308 = chunk__32215;
var G__32309 = count__32216;
var G__32310 = (i__32217 + (1));
seq__32214 = G__32307;
chunk__32215 = G__32308;
count__32216 = G__32309;
i__32217 = G__32310;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32214);
if(temp__5753__auto__){
var seq__32214__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32214__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32214__$1);
var G__32311 = cljs.core.chunk_rest(seq__32214__$1);
var G__32312 = c__4649__auto__;
var G__32313 = cljs.core.count(c__4649__auto__);
var G__32314 = (0);
seq__32214 = G__32311;
chunk__32215 = G__32312;
count__32216 = G__32313;
i__32217 = G__32314;
continue;
} else {
var event = cljs.core.first(seq__32214__$1);
re_frame.router.dispatch(event);


var G__32315 = cljs.core.next(seq__32214__$1);
var G__32316 = null;
var G__32317 = (0);
var G__32318 = (0);
seq__32214 = G__32315;
chunk__32215 = G__32316;
count__32216 = G__32317;
i__32217 = G__32318;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__32220 = cljs.core.seq(value);
var chunk__32221 = null;
var count__32222 = (0);
var i__32223 = (0);
while(true){
if((i__32223 < count__32222)){
var event = chunk__32221.cljs$core$IIndexed$_nth$arity$2(null,i__32223);
clear_event(event);


var G__32319 = seq__32220;
var G__32320 = chunk__32221;
var G__32321 = count__32222;
var G__32322 = (i__32223 + (1));
seq__32220 = G__32319;
chunk__32221 = G__32320;
count__32222 = G__32321;
i__32223 = G__32322;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32220);
if(temp__5753__auto__){
var seq__32220__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32220__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32220__$1);
var G__32323 = cljs.core.chunk_rest(seq__32220__$1);
var G__32324 = c__4649__auto__;
var G__32325 = cljs.core.count(c__4649__auto__);
var G__32326 = (0);
seq__32220 = G__32323;
chunk__32221 = G__32324;
count__32222 = G__32325;
i__32223 = G__32326;
continue;
} else {
var event = cljs.core.first(seq__32220__$1);
clear_event(event);


var G__32327 = cljs.core.next(seq__32220__$1);
var G__32328 = null;
var G__32329 = (0);
var G__32330 = (0);
seq__32220 = G__32327;
chunk__32221 = G__32328;
count__32222 = G__32329;
i__32223 = G__32330;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
