goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__42386,p__42387){
var map__42388 = p__42386;
var map__42388__$1 = cljs.core.__destructure_map(map__42388);
var svc = map__42388__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42388__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42388__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42388__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__42389 = p__42387;
var map__42389__$1 = cljs.core.__destructure_map(map__42389);
var msg = map__42389__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42389__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42389__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42389__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42389__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__42396,p__42397){
var map__42398 = p__42396;
var map__42398__$1 = cljs.core.__destructure_map(map__42398);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42398__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__42399 = p__42397;
var map__42399__$1 = cljs.core.__destructure_map(map__42399);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42399__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__42400,p__42401){
var map__42404 = p__42400;
var map__42404__$1 = cljs.core.__destructure_map(map__42404);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42404__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42404__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__42405 = p__42401;
var map__42405__$1 = cljs.core.__destructure_map(map__42405);
var msg = map__42405__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42405__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__42411,tid){
var map__42412 = p__42411;
var map__42412__$1 = cljs.core.__destructure_map(map__42412);
var svc = map__42412__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42412__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__42424 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__42425 = null;
var count__42426 = (0);
var i__42427 = (0);
while(true){
if((i__42427 < count__42426)){
var vec__42435 = chunk__42425.cljs$core$IIndexed$_nth$arity$2(null,i__42427);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42435,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42435,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__42446 = seq__42424;
var G__42447 = chunk__42425;
var G__42448 = count__42426;
var G__42449 = (i__42427 + (1));
seq__42424 = G__42446;
chunk__42425 = G__42447;
count__42426 = G__42448;
i__42427 = G__42449;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42424);
if(temp__5753__auto__){
var seq__42424__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42424__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__42424__$1);
var G__42450 = cljs.core.chunk_rest(seq__42424__$1);
var G__42451 = c__4649__auto__;
var G__42452 = cljs.core.count(c__4649__auto__);
var G__42453 = (0);
seq__42424 = G__42450;
chunk__42425 = G__42451;
count__42426 = G__42452;
i__42427 = G__42453;
continue;
} else {
var vec__42438 = cljs.core.first(seq__42424__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42438,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42438,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__42454 = cljs.core.next(seq__42424__$1);
var G__42455 = null;
var G__42456 = (0);
var G__42457 = (0);
seq__42424 = G__42454;
chunk__42425 = G__42455;
count__42426 = G__42456;
i__42427 = G__42457;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__42413_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__42413_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__42414_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__42414_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__42415_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__42415_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__42419_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__42419_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__42441){
var map__42442 = p__42441;
var map__42442__$1 = cljs.core.__destructure_map(map__42442);
var svc = map__42442__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42442__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42442__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
