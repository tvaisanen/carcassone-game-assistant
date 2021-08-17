goog.provide('re_frisk.stat');
re_frisk.stat.assoc_map = (function re_frisk$stat$assoc_map(acc,key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cnt","cnt",283978798),(0),new cljs.core.Keyword(null,"ms","ms",-1152709733),(0)], null));
});
re_frisk.stat.get_re_frame_handlers = (function re_frisk$stat$get_re_frame_handlers(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fx","fx",-1237829572).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),new cljs.core.Keyword(null,"db","db",993250759)], 0)))),new cljs.core.Keyword(null,"cofx","cofx",2013202907),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cofx","cofx",2013202907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)),new cljs.core.Keyword(null,"db","db",993250759)))),new cljs.core.Keyword(null,"event","event",301435442),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)))),new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler))))], null);
});
re_frisk.stat.init_stat = (function re_frisk$stat$init_stat(re_frame_data){
if(cljs.core.empty_QMARK_(cljs.core.deref(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data)))){
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),re_frisk.stat.get_re_frame_handlers());
} else {
return null;
}
});
re_frisk.stat.update_trace_stat = (function re_frisk$stat$update_trace_stat(re_frame_data,traces){
var seq__39249 = cljs.core.seq(traces);
var chunk__39250 = null;
var count__39251 = (0);
var i__39252 = (0);
while(true){
if((i__39252 < count__39251)){
var map__39328 = chunk__39250.cljs$core$IIndexed$_nth$arity$2(null,i__39252);
var map__39328__$1 = cljs.core.__destructure_map(map__39328);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39328__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39328__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39328__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39328__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39328__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration], 0));

if((cljs.core.count(effects) > (0))){
var seq__39333_39382 = cljs.core.seq(cljs.core.keys(effects));
var chunk__39334_39383 = null;
var count__39335_39384 = (0);
var i__39336_39385 = (0);
while(true){
if((i__39336_39385 < count__39335_39384)){
var key_39386 = chunk__39334_39383.cljs$core$IIndexed$_nth$arity$2(null,i__39336_39385);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_39386,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__39387 = seq__39333_39382;
var G__39388 = chunk__39334_39383;
var G__39389 = count__39335_39384;
var G__39390 = (i__39336_39385 + (1));
seq__39333_39382 = G__39387;
chunk__39334_39383 = G__39388;
count__39335_39384 = G__39389;
i__39336_39385 = G__39390;
continue;
} else {
var temp__5753__auto___39391 = cljs.core.seq(seq__39333_39382);
if(temp__5753__auto___39391){
var seq__39333_39392__$1 = temp__5753__auto___39391;
if(cljs.core.chunked_seq_QMARK_(seq__39333_39392__$1)){
var c__4649__auto___39393 = cljs.core.chunk_first(seq__39333_39392__$1);
var G__39394 = cljs.core.chunk_rest(seq__39333_39392__$1);
var G__39395 = c__4649__auto___39393;
var G__39396 = cljs.core.count(c__4649__auto___39393);
var G__39397 = (0);
seq__39333_39382 = G__39394;
chunk__39334_39383 = G__39395;
count__39335_39384 = G__39396;
i__39336_39385 = G__39397;
continue;
} else {
var key_39398 = cljs.core.first(seq__39333_39392__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_39398,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__39399 = cljs.core.next(seq__39333_39392__$1);
var G__39400 = null;
var G__39401 = (0);
var G__39402 = (0);
seq__39333_39382 = G__39399;
chunk__39334_39383 = G__39400;
count__39335_39384 = G__39401;
i__39336_39385 = G__39402;
continue;
}
} else {
}
}
break;
}
} else {
}

if((cljs.core.count(coeffects) > (0))){
var seq__39337_39403 = cljs.core.seq(cljs.core.keys(coeffects));
var chunk__39338_39404 = null;
var count__39339_39405 = (0);
var i__39340_39406 = (0);
while(true){
if((i__39340_39406 < count__39339_39405)){
var key_39407 = chunk__39338_39404.cljs$core$IIndexed$_nth$arity$2(null,i__39340_39406);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_39407,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__39408 = seq__39337_39403;
var G__39409 = chunk__39338_39404;
var G__39410 = count__39339_39405;
var G__39411 = (i__39340_39406 + (1));
seq__39337_39403 = G__39408;
chunk__39338_39404 = G__39409;
count__39339_39405 = G__39410;
i__39340_39406 = G__39411;
continue;
} else {
var temp__5753__auto___39412 = cljs.core.seq(seq__39337_39403);
if(temp__5753__auto___39412){
var seq__39337_39413__$1 = temp__5753__auto___39412;
if(cljs.core.chunked_seq_QMARK_(seq__39337_39413__$1)){
var c__4649__auto___39414 = cljs.core.chunk_first(seq__39337_39413__$1);
var G__39415 = cljs.core.chunk_rest(seq__39337_39413__$1);
var G__39416 = c__4649__auto___39414;
var G__39417 = cljs.core.count(c__4649__auto___39414);
var G__39418 = (0);
seq__39337_39403 = G__39415;
chunk__39338_39404 = G__39416;
count__39339_39405 = G__39417;
i__39340_39406 = G__39418;
continue;
} else {
var key_39419 = cljs.core.first(seq__39337_39413__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_39419,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__39420 = cljs.core.next(seq__39337_39413__$1);
var G__39421 = null;
var G__39422 = (0);
var G__39423 = (0);
seq__39337_39403 = G__39420;
chunk__39338_39404 = G__39421;
count__39339_39405 = G__39422;
i__39340_39406 = G__39423;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

if(cljs.core.seq(subs)){
var seq__39343_39424 = cljs.core.seq(subs);
var chunk__39344_39425 = null;
var count__39345_39426 = (0);
var i__39346_39427 = (0);
while(true){
if((i__39346_39427 < count__39345_39426)){
var map__39349_39428 = chunk__39344_39425.cljs$core$IIndexed$_nth$arity$2(null,i__39346_39427);
var map__39349_39429__$1 = cljs.core.__destructure_map(map__39349_39428);
var op_type_39430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39349_39429__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_39431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39349_39429__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_39432__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39349_39429__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_39430,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_39431,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_39431,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_39432__$1], 0));
} else {
}


var G__39438 = seq__39343_39424;
var G__39439 = chunk__39344_39425;
var G__39440 = count__39345_39426;
var G__39441 = (i__39346_39427 + (1));
seq__39343_39424 = G__39438;
chunk__39344_39425 = G__39439;
count__39345_39426 = G__39440;
i__39346_39427 = G__39441;
continue;
} else {
var temp__5753__auto___39442 = cljs.core.seq(seq__39343_39424);
if(temp__5753__auto___39442){
var seq__39343_39443__$1 = temp__5753__auto___39442;
if(cljs.core.chunked_seq_QMARK_(seq__39343_39443__$1)){
var c__4649__auto___39444 = cljs.core.chunk_first(seq__39343_39443__$1);
var G__39445 = cljs.core.chunk_rest(seq__39343_39443__$1);
var G__39446 = c__4649__auto___39444;
var G__39447 = cljs.core.count(c__4649__auto___39444);
var G__39448 = (0);
seq__39343_39424 = G__39445;
chunk__39344_39425 = G__39446;
count__39345_39426 = G__39447;
i__39346_39427 = G__39448;
continue;
} else {
var map__39356_39449 = cljs.core.first(seq__39343_39443__$1);
var map__39356_39450__$1 = cljs.core.__destructure_map(map__39356_39449);
var op_type_39451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39356_39450__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_39452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39356_39450__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_39453__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39356_39450__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_39451,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_39452,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_39452,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_39453__$1], 0));
} else {
}


var G__39454 = cljs.core.next(seq__39343_39443__$1);
var G__39455 = null;
var G__39456 = (0);
var G__39457 = (0);
seq__39343_39424 = G__39454;
chunk__39344_39425 = G__39455;
count__39345_39426 = G__39456;
i__39346_39427 = G__39457;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__39459 = seq__39249;
var G__39460 = chunk__39250;
var G__39461 = count__39251;
var G__39462 = (i__39252 + (1));
seq__39249 = G__39459;
chunk__39250 = G__39460;
count__39251 = G__39461;
i__39252 = G__39462;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39249);
if(temp__5753__auto__){
var seq__39249__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39249__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39249__$1);
var G__39463 = cljs.core.chunk_rest(seq__39249__$1);
var G__39464 = c__4649__auto__;
var G__39465 = cljs.core.count(c__4649__auto__);
var G__39466 = (0);
seq__39249 = G__39463;
chunk__39250 = G__39464;
count__39251 = G__39465;
i__39252 = G__39466;
continue;
} else {
var map__39357 = cljs.core.first(seq__39249__$1);
var map__39357__$1 = cljs.core.__destructure_map(map__39357);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39357__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39357__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39357__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39357__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39357__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration], 0));

if((cljs.core.count(effects) > (0))){
var seq__39362_39467 = cljs.core.seq(cljs.core.keys(effects));
var chunk__39363_39468 = null;
var count__39364_39469 = (0);
var i__39365_39470 = (0);
while(true){
if((i__39365_39470 < count__39364_39469)){
var key_39472 = chunk__39363_39468.cljs$core$IIndexed$_nth$arity$2(null,i__39365_39470);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_39472,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__39474 = seq__39362_39467;
var G__39475 = chunk__39363_39468;
var G__39476 = count__39364_39469;
var G__39477 = (i__39365_39470 + (1));
seq__39362_39467 = G__39474;
chunk__39363_39468 = G__39475;
count__39364_39469 = G__39476;
i__39365_39470 = G__39477;
continue;
} else {
var temp__5753__auto___39481__$1 = cljs.core.seq(seq__39362_39467);
if(temp__5753__auto___39481__$1){
var seq__39362_39482__$1 = temp__5753__auto___39481__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39362_39482__$1)){
var c__4649__auto___39483 = cljs.core.chunk_first(seq__39362_39482__$1);
var G__39484 = cljs.core.chunk_rest(seq__39362_39482__$1);
var G__39485 = c__4649__auto___39483;
var G__39486 = cljs.core.count(c__4649__auto___39483);
var G__39487 = (0);
seq__39362_39467 = G__39484;
chunk__39363_39468 = G__39485;
count__39364_39469 = G__39486;
i__39365_39470 = G__39487;
continue;
} else {
var key_39489 = cljs.core.first(seq__39362_39482__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_39489,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__39490 = cljs.core.next(seq__39362_39482__$1);
var G__39491 = null;
var G__39492 = (0);
var G__39493 = (0);
seq__39362_39467 = G__39490;
chunk__39363_39468 = G__39491;
count__39364_39469 = G__39492;
i__39365_39470 = G__39493;
continue;
}
} else {
}
}
break;
}
} else {
}

if((cljs.core.count(coeffects) > (0))){
var seq__39370_39495 = cljs.core.seq(cljs.core.keys(coeffects));
var chunk__39371_39496 = null;
var count__39372_39497 = (0);
var i__39373_39498 = (0);
while(true){
if((i__39373_39498 < count__39372_39497)){
var key_39499 = chunk__39371_39496.cljs$core$IIndexed$_nth$arity$2(null,i__39373_39498);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_39499,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__39500 = seq__39370_39495;
var G__39501 = chunk__39371_39496;
var G__39502 = count__39372_39497;
var G__39503 = (i__39373_39498 + (1));
seq__39370_39495 = G__39500;
chunk__39371_39496 = G__39501;
count__39372_39497 = G__39502;
i__39373_39498 = G__39503;
continue;
} else {
var temp__5753__auto___39504__$1 = cljs.core.seq(seq__39370_39495);
if(temp__5753__auto___39504__$1){
var seq__39370_39505__$1 = temp__5753__auto___39504__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39370_39505__$1)){
var c__4649__auto___39506 = cljs.core.chunk_first(seq__39370_39505__$1);
var G__39507 = cljs.core.chunk_rest(seq__39370_39505__$1);
var G__39508 = c__4649__auto___39506;
var G__39509 = cljs.core.count(c__4649__auto___39506);
var G__39510 = (0);
seq__39370_39495 = G__39507;
chunk__39371_39496 = G__39508;
count__39372_39497 = G__39509;
i__39373_39498 = G__39510;
continue;
} else {
var key_39511 = cljs.core.first(seq__39370_39505__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_39511,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__39512 = cljs.core.next(seq__39370_39505__$1);
var G__39513 = null;
var G__39514 = (0);
var G__39515 = (0);
seq__39370_39495 = G__39512;
chunk__39371_39496 = G__39513;
count__39372_39497 = G__39514;
i__39373_39498 = G__39515;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

if(cljs.core.seq(subs)){
var seq__39374_39516 = cljs.core.seq(subs);
var chunk__39375_39517 = null;
var count__39376_39518 = (0);
var i__39377_39519 = (0);
while(true){
if((i__39377_39519 < count__39376_39518)){
var map__39380_39520 = chunk__39375_39517.cljs$core$IIndexed$_nth$arity$2(null,i__39377_39519);
var map__39380_39521__$1 = cljs.core.__destructure_map(map__39380_39520);
var op_type_39522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39380_39521__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_39523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39380_39521__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_39524__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39380_39521__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_39522,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_39523,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_39523,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_39524__$1], 0));
} else {
}


var G__39525 = seq__39374_39516;
var G__39526 = chunk__39375_39517;
var G__39527 = count__39376_39518;
var G__39528 = (i__39377_39519 + (1));
seq__39374_39516 = G__39525;
chunk__39375_39517 = G__39526;
count__39376_39518 = G__39527;
i__39377_39519 = G__39528;
continue;
} else {
var temp__5753__auto___39529__$1 = cljs.core.seq(seq__39374_39516);
if(temp__5753__auto___39529__$1){
var seq__39374_39530__$1 = temp__5753__auto___39529__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39374_39530__$1)){
var c__4649__auto___39531 = cljs.core.chunk_first(seq__39374_39530__$1);
var G__39532 = cljs.core.chunk_rest(seq__39374_39530__$1);
var G__39533 = c__4649__auto___39531;
var G__39534 = cljs.core.count(c__4649__auto___39531);
var G__39535 = (0);
seq__39374_39516 = G__39532;
chunk__39375_39517 = G__39533;
count__39376_39518 = G__39534;
i__39377_39519 = G__39535;
continue;
} else {
var map__39381_39536 = cljs.core.first(seq__39374_39530__$1);
var map__39381_39537__$1 = cljs.core.__destructure_map(map__39381_39536);
var op_type_39538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39381_39537__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_39539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39381_39537__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_39540__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39381_39537__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_39538,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_39539,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_39539,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_39540__$1], 0));
} else {
}


var G__39541 = cljs.core.next(seq__39374_39530__$1);
var G__39542 = null;
var G__39543 = (0);
var G__39544 = (0);
seq__39374_39516 = G__39541;
chunk__39375_39517 = G__39542;
count__39376_39518 = G__39543;
i__39377_39519 = G__39544;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__39545 = cljs.core.next(seq__39249__$1);
var G__39546 = null;
var G__39547 = (0);
var G__39548 = (0);
seq__39249 = G__39545;
chunk__39250 = G__39546;
count__39251 = G__39547;
i__39252 = G__39548;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frisk.stat.update_event_stat = (function re_frisk$stat$update_event_stat(re_frame_data,event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);
});

//# sourceMappingURL=re_frisk.stat.js.map
