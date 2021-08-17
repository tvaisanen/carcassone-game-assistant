goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__40596,res){
var map__40597 = p__40596;
var map__40597__$1 = cljs.core.__destructure_map(map__40597);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40597__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40597__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__40598 = res;
var G__40598__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40598,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__40598);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40598__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__40598__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__40600 = arguments.length;
switch (G__40600) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__40601,msg,handlers,timeout_after_ms){
var map__40602 = p__40601;
var map__40602__$1 = cljs.core.__destructure_map(map__40602);
var runtime = map__40602__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40602__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___40673 = arguments.length;
var i__4830__auto___40674 = (0);
while(true){
if((i__4830__auto___40674 < len__4829__auto___40673)){
args__4835__auto__.push((arguments[i__4830__auto___40674]));

var G__40675 = (i__4830__auto___40674 + (1));
i__4830__auto___40674 = G__40675;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__40610,ev,args){
var map__40611 = p__40610;
var map__40611__$1 = cljs.core.__destructure_map(map__40611);
var runtime = map__40611__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40611__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__40612 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__40615 = null;
var count__40616 = (0);
var i__40617 = (0);
while(true){
if((i__40617 < count__40616)){
var ext = chunk__40615.cljs$core$IIndexed$_nth$arity$2(null,i__40617);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__40678 = seq__40612;
var G__40679 = chunk__40615;
var G__40680 = count__40616;
var G__40681 = (i__40617 + (1));
seq__40612 = G__40678;
chunk__40615 = G__40679;
count__40616 = G__40680;
i__40617 = G__40681;
continue;
} else {
var G__40682 = seq__40612;
var G__40683 = chunk__40615;
var G__40684 = count__40616;
var G__40685 = (i__40617 + (1));
seq__40612 = G__40682;
chunk__40615 = G__40683;
count__40616 = G__40684;
i__40617 = G__40685;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40612);
if(temp__5753__auto__){
var seq__40612__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40612__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__40612__$1);
var G__40686 = cljs.core.chunk_rest(seq__40612__$1);
var G__40687 = c__4649__auto__;
var G__40688 = cljs.core.count(c__4649__auto__);
var G__40689 = (0);
seq__40612 = G__40686;
chunk__40615 = G__40687;
count__40616 = G__40688;
i__40617 = G__40689;
continue;
} else {
var ext = cljs.core.first(seq__40612__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__40690 = cljs.core.next(seq__40612__$1);
var G__40691 = null;
var G__40692 = (0);
var G__40693 = (0);
seq__40612 = G__40690;
chunk__40615 = G__40691;
count__40616 = G__40692;
i__40617 = G__40693;
continue;
} else {
var G__40694 = cljs.core.next(seq__40612__$1);
var G__40695 = null;
var G__40696 = (0);
var G__40697 = (0);
seq__40612 = G__40694;
chunk__40615 = G__40695;
count__40616 = G__40696;
i__40617 = G__40697;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq40604){
var G__40605 = cljs.core.first(seq40604);
var seq40604__$1 = cljs.core.next(seq40604);
var G__40606 = cljs.core.first(seq40604__$1);
var seq40604__$2 = cljs.core.next(seq40604__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40605,G__40606,seq40604__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__40622,p__40623){
var map__40624 = p__40622;
var map__40624__$1 = cljs.core.__destructure_map(map__40624);
var runtime = map__40624__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40624__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__40625 = p__40623;
var map__40625__$1 = cljs.core.__destructure_map(map__40625);
var msg = map__40625__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40625__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__40626 = cljs.core.deref(state_ref);
var map__40626__$1 = cljs.core.__destructure_map(map__40626);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40626__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40626__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__40627){
var map__40628 = p__40627;
var map__40628__$1 = cljs.core.__destructure_map(map__40628);
var runtime = map__40628__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40628__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__40629,msg){
var map__40630 = p__40629;
var map__40630__$1 = cljs.core.__destructure_map(map__40630);
var runtime = map__40630__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40630__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__40631,key,p__40632){
var map__40633 = p__40631;
var map__40633__$1 = cljs.core.__destructure_map(map__40633);
var state = map__40633__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40633__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__40634 = p__40632;
var map__40634__$1 = cljs.core.__destructure_map(map__40634);
var spec = map__40634__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40634__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__40635,key,spec){
var map__40636 = p__40635;
var map__40636__$1 = cljs.core.__destructure_map(map__40636);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40636__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__40637_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__40637_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__40638_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__40638_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__40639_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__40639_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__40640_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__40640_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__40641_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__40641_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__40647,key){
var map__40648 = p__40647;
var map__40648__$1 = cljs.core.__destructure_map(map__40648);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40648__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__40651,msg){
var map__40652 = p__40651;
var map__40652__$1 = cljs.core.__destructure_map(map__40652);
var runtime = map__40652__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40652__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__40654,p__40655){
var map__40656 = p__40654;
var map__40656__$1 = cljs.core.__destructure_map(map__40656);
var runtime = map__40656__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40656__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__40657 = p__40655;
var map__40657__$1 = cljs.core.__destructure_map(map__40657);
var msg = map__40657__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40657__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40657__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__40662 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__40664 = null;
var count__40665 = (0);
var i__40666 = (0);
while(true){
if((i__40666 < count__40665)){
var map__40670 = chunk__40664.cljs$core$IIndexed$_nth$arity$2(null,i__40666);
var map__40670__$1 = cljs.core.__destructure_map(map__40670);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40670__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__40704 = seq__40662;
var G__40705 = chunk__40664;
var G__40706 = count__40665;
var G__40707 = (i__40666 + (1));
seq__40662 = G__40704;
chunk__40664 = G__40705;
count__40665 = G__40706;
i__40666 = G__40707;
continue;
} else {
var G__40708 = seq__40662;
var G__40709 = chunk__40664;
var G__40710 = count__40665;
var G__40711 = (i__40666 + (1));
seq__40662 = G__40708;
chunk__40664 = G__40709;
count__40665 = G__40710;
i__40666 = G__40711;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__40662);
if(temp__5753__auto__){
var seq__40662__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40662__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__40662__$1);
var G__40712 = cljs.core.chunk_rest(seq__40662__$1);
var G__40713 = c__4649__auto__;
var G__40714 = cljs.core.count(c__4649__auto__);
var G__40715 = (0);
seq__40662 = G__40712;
chunk__40664 = G__40713;
count__40665 = G__40714;
i__40666 = G__40715;
continue;
} else {
var map__40671 = cljs.core.first(seq__40662__$1);
var map__40671__$1 = cljs.core.__destructure_map(map__40671);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40671__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__40716 = cljs.core.next(seq__40662__$1);
var G__40717 = null;
var G__40718 = (0);
var G__40719 = (0);
seq__40662 = G__40716;
chunk__40664 = G__40717;
count__40665 = G__40718;
i__40666 = G__40719;
continue;
} else {
var G__40720 = cljs.core.next(seq__40662__$1);
var G__40721 = null;
var G__40722 = (0);
var G__40723 = (0);
seq__40662 = G__40720;
chunk__40664 = G__40721;
count__40665 = G__40722;
i__40666 = G__40723;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
