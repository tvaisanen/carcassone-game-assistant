goog.provide('re_frisk.subs_graph');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.network !== 'undefined')){
} else {
re_frisk.subs_graph.network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.reaction__GT_operation !== 'undefined')){
} else {
re_frisk.subs_graph.reaction__GT_operation = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.view__GT_reactions !== 'undefined')){
} else {
re_frisk.subs_graph.view__GT_reactions = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.vis !== 'undefined')){
} else {
re_frisk.subs_graph.vis = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.doc !== 'undefined')){
} else {
re_frisk.subs_graph.doc = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.nodes !== 'undefined')){
} else {
re_frisk.subs_graph.nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.edges !== 'undefined')){
} else {
re_frisk.subs_graph.edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.options !== 'undefined')){
} else {
re_frisk.subs_graph.options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"solver","solver",-744421825),"forceAtlas2Based",new cljs.core.Keyword(null,"maxVelocity","maxVelocity",1721643083),(30),new cljs.core.Keyword(null,"minVelocity","minVelocity",-32716928),(10),new cljs.core.Keyword(null,"stabilization","stabilization",-1209068026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"iterations","iterations",-1402710890),(30)], null)], null)], null));
}
re_frisk.subs_graph.init = (function re_frisk$subs_graph$init(win,document){
cljs.core.reset_BANG_(re_frisk.subs_graph.vis,win.vis);

return cljs.core.reset_BANG_(re_frisk.subs_graph.doc,document);
});
re_frisk.subs_graph.set_root_node = (function re_frisk$subs_graph$set_root_node(reaction){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction))){
return null;
} else {
var data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"app-db",new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction,data);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction,"app-db");

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));
} else {
return null;
}
}
});
re_frisk.subs_graph.destroy = (function re_frisk$subs_graph$destroy(){
var temp__5753__auto__ = new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network));
if(cljs.core.truth_(temp__5753__auto__)){
var network_js = temp__5753__auto__;
network_js.destroy();

return cljs.core.reset_BANG_(re_frisk.subs_graph.network,null);
} else {
return null;
}
});
re_frisk.subs_graph.create = (function re_frisk$subs_graph$create(){
re_frisk.subs_graph.destroy();

if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__4221__auto__;
}
})())){
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.nodes)))));
var edges_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.edges)))));
var data = ({"nodes": nodes_ds, "edges": edges_ds});
var temp__5753__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("global-subs-graph-container");
if(cljs.core.truth_(temp__5753__auto__)){
var container = temp__5753__auto__;
return cljs.core.reset_BANG_(re_frisk.subs_graph.network,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"network","network",2050004697),(new Network(container,data,re_frisk.subs_graph.options))], null));
} else {
return null;
}
} else {
return null;
}
});
re_frisk.subs_graph.update_subs = (function re_frisk$subs_graph$update_subs(traces){
var temp__5753__auto___33451 = new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135).cljs$core$IFn$_invoke$arity$1(cljs.core.first(traces));
if(cljs.core.truth_(temp__5753__auto___33451)){
var app_db_reaction_33452 = temp__5753__auto___33451;
re_frisk.subs_graph.set_root_node(app_db_reaction_33452);
} else {
}

var seq__33049_33453 = cljs.core.seq(traces);
var chunk__33050_33454 = null;
var count__33051_33455 = (0);
var i__33052_33456 = (0);
while(true){
if((i__33052_33456 < count__33051_33455)){
var map__33075_33457 = chunk__33050_33454.cljs$core$IIndexed$_nth$arity$2(null,i__33052_33456);
var map__33075_33458__$1 = cljs.core.__destructure_map(map__33075_33457);
var subs_33459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33075_33458__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__33076_33460 = cljs.core.seq(subs_33459);
var chunk__33077_33461 = null;
var count__33078_33462 = (0);
var i__33079_33463 = (0);
while(true){
if((i__33079_33463 < count__33078_33462)){
var map__33082_33464 = chunk__33077_33461.cljs$core$IIndexed$_nth$arity$2(null,i__33079_33463);
var map__33082_33465__$1 = cljs.core.__destructure_map(map__33082_33464);
var operation_33466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33082_33465__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_33467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33082_33465__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_33467)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_33467,operation_33466);
} else {
}


var G__33468 = seq__33076_33460;
var G__33469 = chunk__33077_33461;
var G__33470 = count__33078_33462;
var G__33471 = (i__33079_33463 + (1));
seq__33076_33460 = G__33468;
chunk__33077_33461 = G__33469;
count__33078_33462 = G__33470;
i__33079_33463 = G__33471;
continue;
} else {
var temp__5753__auto___33472 = cljs.core.seq(seq__33076_33460);
if(temp__5753__auto___33472){
var seq__33076_33473__$1 = temp__5753__auto___33472;
if(cljs.core.chunked_seq_QMARK_(seq__33076_33473__$1)){
var c__4649__auto___33474 = cljs.core.chunk_first(seq__33076_33473__$1);
var G__33475 = cljs.core.chunk_rest(seq__33076_33473__$1);
var G__33476 = c__4649__auto___33474;
var G__33477 = cljs.core.count(c__4649__auto___33474);
var G__33478 = (0);
seq__33076_33460 = G__33475;
chunk__33077_33461 = G__33476;
count__33078_33462 = G__33477;
i__33079_33463 = G__33478;
continue;
} else {
var map__33089_33479 = cljs.core.first(seq__33076_33473__$1);
var map__33089_33480__$1 = cljs.core.__destructure_map(map__33089_33479);
var operation_33481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33089_33480__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_33482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33089_33480__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_33482)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_33482,operation_33481);
} else {
}


var G__33483 = cljs.core.next(seq__33076_33473__$1);
var G__33484 = null;
var G__33485 = (0);
var G__33486 = (0);
seq__33076_33460 = G__33483;
chunk__33077_33461 = G__33484;
count__33078_33462 = G__33485;
i__33079_33463 = G__33486;
continue;
}
} else {
}
}
break;
}


var G__33487 = seq__33049_33453;
var G__33488 = chunk__33050_33454;
var G__33489 = count__33051_33455;
var G__33490 = (i__33052_33456 + (1));
seq__33049_33453 = G__33487;
chunk__33050_33454 = G__33488;
count__33051_33455 = G__33489;
i__33052_33456 = G__33490;
continue;
} else {
var temp__5753__auto___33491 = cljs.core.seq(seq__33049_33453);
if(temp__5753__auto___33491){
var seq__33049_33493__$1 = temp__5753__auto___33491;
if(cljs.core.chunked_seq_QMARK_(seq__33049_33493__$1)){
var c__4649__auto___33494 = cljs.core.chunk_first(seq__33049_33493__$1);
var G__33495 = cljs.core.chunk_rest(seq__33049_33493__$1);
var G__33496 = c__4649__auto___33494;
var G__33497 = cljs.core.count(c__4649__auto___33494);
var G__33498 = (0);
seq__33049_33453 = G__33495;
chunk__33050_33454 = G__33496;
count__33051_33455 = G__33497;
i__33052_33456 = G__33498;
continue;
} else {
var map__33091_33499 = cljs.core.first(seq__33049_33493__$1);
var map__33091_33500__$1 = cljs.core.__destructure_map(map__33091_33499);
var subs_33501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33091_33500__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__33092_33502 = cljs.core.seq(subs_33501);
var chunk__33093_33503 = null;
var count__33094_33504 = (0);
var i__33095_33505 = (0);
while(true){
if((i__33095_33505 < count__33094_33504)){
var map__33098_33506 = chunk__33093_33503.cljs$core$IIndexed$_nth$arity$2(null,i__33095_33505);
var map__33098_33507__$1 = cljs.core.__destructure_map(map__33098_33506);
var operation_33508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33098_33507__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_33509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33098_33507__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_33509)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_33509,operation_33508);
} else {
}


var G__33510 = seq__33092_33502;
var G__33511 = chunk__33093_33503;
var G__33512 = count__33094_33504;
var G__33513 = (i__33095_33505 + (1));
seq__33092_33502 = G__33510;
chunk__33093_33503 = G__33511;
count__33094_33504 = G__33512;
i__33095_33505 = G__33513;
continue;
} else {
var temp__5753__auto___33514__$1 = cljs.core.seq(seq__33092_33502);
if(temp__5753__auto___33514__$1){
var seq__33092_33516__$1 = temp__5753__auto___33514__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33092_33516__$1)){
var c__4649__auto___33517 = cljs.core.chunk_first(seq__33092_33516__$1);
var G__33518 = cljs.core.chunk_rest(seq__33092_33516__$1);
var G__33519 = c__4649__auto___33517;
var G__33520 = cljs.core.count(c__4649__auto___33517);
var G__33521 = (0);
seq__33092_33502 = G__33518;
chunk__33093_33503 = G__33519;
count__33094_33504 = G__33520;
i__33095_33505 = G__33521;
continue;
} else {
var map__33099_33522 = cljs.core.first(seq__33092_33516__$1);
var map__33099_33523__$1 = cljs.core.__destructure_map(map__33099_33522);
var operation_33524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33099_33523__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_33525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33099_33523__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_33525)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_33525,operation_33524);
} else {
}


var G__33526 = cljs.core.next(seq__33092_33516__$1);
var G__33527 = null;
var G__33528 = (0);
var G__33529 = (0);
seq__33092_33502 = G__33526;
chunk__33093_33503 = G__33527;
count__33094_33504 = G__33528;
i__33095_33505 = G__33529;
continue;
}
} else {
}
}
break;
}


var G__33530 = cljs.core.next(seq__33049_33493__$1);
var G__33531 = null;
var G__33532 = (0);
var G__33533 = (0);
seq__33049_33453 = G__33530;
chunk__33050_33454 = G__33531;
count__33051_33455 = G__33532;
i__33052_33456 = G__33533;
continue;
}
} else {
}
}
break;
}

var new_nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__33100_33535 = cljs.core.seq(traces);
var chunk__33101_33536 = null;
var count__33102_33537 = (0);
var i__33103_33538 = (0);
while(true){
if((i__33103_33538 < count__33102_33537)){
var map__33272_33539 = chunk__33101_33536.cljs$core$IIndexed$_nth$arity$2(null,i__33103_33538);
var map__33272_33540__$1 = cljs.core.__destructure_map(map__33272_33539);
var subs_33541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33272_33540__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__33273_33542 = cljs.core.seq(subs_33541);
var chunk__33274_33543 = null;
var count__33275_33544 = (0);
var i__33276_33545 = (0);
while(true){
if((i__33276_33545 < count__33275_33544)){
var map__33287_33546 = chunk__33274_33543.cljs$core$IIndexed$_nth$arity$2(null,i__33276_33545);
var map__33287_33547__$1 = cljs.core.__destructure_map(map__33287_33546);
var op_type_33548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33287_33547__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_33549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33287_33547__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_33550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33287_33547__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_33551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33287_33547__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_33548,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_33548,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__4221__auto__){
return input_signals_33549;
} else {
return and__4221__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_33550,input_signals_33549);
} else {
}

var operation_33554__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_33550);
if(cljs.core.truth_(reaction_33551)){
var temp__5751__auto___33555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_33554__$1);
if(cljs.core.truth_(temp__5751__auto___33555)){
var old_reaction_33557 = temp__5751__auto___33555;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_33548,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_33557))){
var updated_node_33558 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_33557,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_33548,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_33548)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_33554__$1,updated_node_33558);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_33554__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_33554__$1,updated_node_33558);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_33558], null)));
}
} else {
}
} else {
}
} else {
var data_33560 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_33554__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_33554__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_33548)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_33548], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_33554__$1,data_33560);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_33554__$1,data_33560);
}
} else {
}

if(cljs.core.truth_(input_signals_33549)){
var seq__33289_33561 = cljs.core.seq(input_signals_33549);
var chunk__33290_33562 = null;
var count__33291_33563 = (0);
var i__33292_33564 = (0);
while(true){
if((i__33292_33564 < count__33291_33563)){
var input_reaction_33565 = chunk__33290_33562.cljs$core$IIndexed$_nth$arity$2(null,i__33292_33564);
var input_operation_33566 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_33565));
var reaction_path_33567 = [input_operation_33566,"-",operation_33554__$1].join('');
var temp__5751__auto___33568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_33567);
if(cljs.core.truth_(temp__5751__auto___33568)){
var old_edge_33569 = temp__5751__auto___33568;
var updated_edge_33570 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_33569,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_33567,updated_edge_33570);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_33570], null)));
} else {
}
} else {
var data_33572 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_33567,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_33566,new cljs.core.Keyword(null,"to","to",192099007),operation_33554__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_33567,data_33572);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_33572));
} else {
}
}


var G__33574 = seq__33289_33561;
var G__33575 = chunk__33290_33562;
var G__33576 = count__33291_33563;
var G__33577 = (i__33292_33564 + (1));
seq__33289_33561 = G__33574;
chunk__33290_33562 = G__33575;
count__33291_33563 = G__33576;
i__33292_33564 = G__33577;
continue;
} else {
var temp__5753__auto___33578 = cljs.core.seq(seq__33289_33561);
if(temp__5753__auto___33578){
var seq__33289_33579__$1 = temp__5753__auto___33578;
if(cljs.core.chunked_seq_QMARK_(seq__33289_33579__$1)){
var c__4649__auto___33580 = cljs.core.chunk_first(seq__33289_33579__$1);
var G__33581 = cljs.core.chunk_rest(seq__33289_33579__$1);
var G__33582 = c__4649__auto___33580;
var G__33583 = cljs.core.count(c__4649__auto___33580);
var G__33584 = (0);
seq__33289_33561 = G__33581;
chunk__33290_33562 = G__33582;
count__33291_33563 = G__33583;
i__33292_33564 = G__33584;
continue;
} else {
var input_reaction_33585 = cljs.core.first(seq__33289_33579__$1);
var input_operation_33586 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_33585));
var reaction_path_33587 = [input_operation_33586,"-",operation_33554__$1].join('');
var temp__5751__auto___33589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_33587);
if(cljs.core.truth_(temp__5751__auto___33589)){
var old_edge_33590 = temp__5751__auto___33589;
var updated_edge_33591 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_33590,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_33587,updated_edge_33591);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_33591], null)));
} else {
}
} else {
var data_33592 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_33587,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_33586,new cljs.core.Keyword(null,"to","to",192099007),operation_33554__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_33587,data_33592);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_33592));
} else {
}
}


var G__33594 = cljs.core.next(seq__33289_33579__$1);
var G__33595 = null;
var G__33596 = (0);
var G__33597 = (0);
seq__33289_33561 = G__33594;
chunk__33290_33562 = G__33595;
count__33291_33563 = G__33596;
i__33292_33564 = G__33597;
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


var G__33598 = seq__33273_33542;
var G__33599 = chunk__33274_33543;
var G__33600 = count__33275_33544;
var G__33601 = (i__33276_33545 + (1));
seq__33273_33542 = G__33598;
chunk__33274_33543 = G__33599;
count__33275_33544 = G__33600;
i__33276_33545 = G__33601;
continue;
} else {
var temp__5753__auto___33602 = cljs.core.seq(seq__33273_33542);
if(temp__5753__auto___33602){
var seq__33273_33603__$1 = temp__5753__auto___33602;
if(cljs.core.chunked_seq_QMARK_(seq__33273_33603__$1)){
var c__4649__auto___33604 = cljs.core.chunk_first(seq__33273_33603__$1);
var G__33605 = cljs.core.chunk_rest(seq__33273_33603__$1);
var G__33606 = c__4649__auto___33604;
var G__33607 = cljs.core.count(c__4649__auto___33604);
var G__33608 = (0);
seq__33273_33542 = G__33605;
chunk__33274_33543 = G__33606;
count__33275_33544 = G__33607;
i__33276_33545 = G__33608;
continue;
} else {
var map__33299_33610 = cljs.core.first(seq__33273_33603__$1);
var map__33299_33611__$1 = cljs.core.__destructure_map(map__33299_33610);
var op_type_33612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33299_33611__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_33613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33299_33611__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_33614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33299_33611__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_33615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33299_33611__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_33612,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_33612,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__4221__auto__){
return input_signals_33613;
} else {
return and__4221__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_33614,input_signals_33613);
} else {
}

var operation_33616__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_33614);
if(cljs.core.truth_(reaction_33615)){
var temp__5751__auto___33617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_33616__$1);
if(cljs.core.truth_(temp__5751__auto___33617)){
var old_reaction_33618 = temp__5751__auto___33617;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_33612,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_33618))){
var updated_node_33620 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_33618,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_33612,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_33612)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_33616__$1,updated_node_33620);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_33616__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_33616__$1,updated_node_33620);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_33620], null)));
}
} else {
}
} else {
}
} else {
var data_33622 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_33616__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_33616__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_33612)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_33612], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_33616__$1,data_33622);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_33616__$1,data_33622);
}
} else {
}

if(cljs.core.truth_(input_signals_33613)){
var seq__33301_33623 = cljs.core.seq(input_signals_33613);
var chunk__33302_33624 = null;
var count__33303_33625 = (0);
var i__33304_33626 = (0);
while(true){
if((i__33304_33626 < count__33303_33625)){
var input_reaction_33627 = chunk__33302_33624.cljs$core$IIndexed$_nth$arity$2(null,i__33304_33626);
var input_operation_33628 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_33627));
var reaction_path_33629 = [input_operation_33628,"-",operation_33616__$1].join('');
var temp__5751__auto___33631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_33629);
if(cljs.core.truth_(temp__5751__auto___33631)){
var old_edge_33632 = temp__5751__auto___33631;
var updated_edge_33633 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_33632,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_33629,updated_edge_33633);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_33633], null)));
} else {
}
} else {
var data_33634 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_33629,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_33628,new cljs.core.Keyword(null,"to","to",192099007),operation_33616__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_33629,data_33634);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_33634));
} else {
}
}


var G__33636 = seq__33301_33623;
var G__33637 = chunk__33302_33624;
var G__33638 = count__33303_33625;
var G__33639 = (i__33304_33626 + (1));
seq__33301_33623 = G__33636;
chunk__33302_33624 = G__33637;
count__33303_33625 = G__33638;
i__33304_33626 = G__33639;
continue;
} else {
var temp__5753__auto___33640__$1 = cljs.core.seq(seq__33301_33623);
if(temp__5753__auto___33640__$1){
var seq__33301_33641__$1 = temp__5753__auto___33640__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33301_33641__$1)){
var c__4649__auto___33642 = cljs.core.chunk_first(seq__33301_33641__$1);
var G__33643 = cljs.core.chunk_rest(seq__33301_33641__$1);
var G__33644 = c__4649__auto___33642;
var G__33645 = cljs.core.count(c__4649__auto___33642);
var G__33646 = (0);
seq__33301_33623 = G__33643;
chunk__33302_33624 = G__33644;
count__33303_33625 = G__33645;
i__33304_33626 = G__33646;
continue;
} else {
var input_reaction_33647 = cljs.core.first(seq__33301_33641__$1);
var input_operation_33649 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_33647));
var reaction_path_33650 = [input_operation_33649,"-",operation_33616__$1].join('');
var temp__5751__auto___33651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_33650);
if(cljs.core.truth_(temp__5751__auto___33651)){
var old_edge_33652 = temp__5751__auto___33651;
var updated_edge_33653 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_33652,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_33650,updated_edge_33653);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_33653], null)));
} else {
}
} else {
var data_33654 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_33650,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_33649,new cljs.core.Keyword(null,"to","to",192099007),operation_33616__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_33650,data_33654);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_33654));
} else {
}
}


var G__33656 = cljs.core.next(seq__33301_33641__$1);
var G__33657 = null;
var G__33658 = (0);
var G__33659 = (0);
seq__33301_33623 = G__33656;
chunk__33302_33624 = G__33657;
count__33303_33625 = G__33658;
i__33304_33626 = G__33659;
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


var G__33660 = cljs.core.next(seq__33273_33603__$1);
var G__33661 = null;
var G__33662 = (0);
var G__33663 = (0);
seq__33273_33542 = G__33660;
chunk__33274_33543 = G__33661;
count__33275_33544 = G__33662;
i__33276_33545 = G__33663;
continue;
}
} else {
}
}
break;
}


var G__33665 = seq__33100_33535;
var G__33666 = chunk__33101_33536;
var G__33667 = count__33102_33537;
var G__33668 = (i__33103_33538 + (1));
seq__33100_33535 = G__33665;
chunk__33101_33536 = G__33666;
count__33102_33537 = G__33667;
i__33103_33538 = G__33668;
continue;
} else {
var temp__5753__auto___33669 = cljs.core.seq(seq__33100_33535);
if(temp__5753__auto___33669){
var seq__33100_33670__$1 = temp__5753__auto___33669;
if(cljs.core.chunked_seq_QMARK_(seq__33100_33670__$1)){
var c__4649__auto___33671 = cljs.core.chunk_first(seq__33100_33670__$1);
var G__33672 = cljs.core.chunk_rest(seq__33100_33670__$1);
var G__33673 = c__4649__auto___33671;
var G__33674 = cljs.core.count(c__4649__auto___33671);
var G__33675 = (0);
seq__33100_33535 = G__33672;
chunk__33101_33536 = G__33673;
count__33102_33537 = G__33674;
i__33103_33538 = G__33675;
continue;
} else {
var map__33307_33676 = cljs.core.first(seq__33100_33670__$1);
var map__33307_33677__$1 = cljs.core.__destructure_map(map__33307_33676);
var subs_33678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33307_33677__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__33308_33679 = cljs.core.seq(subs_33678);
var chunk__33309_33680 = null;
var count__33310_33681 = (0);
var i__33311_33682 = (0);
while(true){
if((i__33311_33682 < count__33310_33681)){
var map__33341_33684 = chunk__33309_33680.cljs$core$IIndexed$_nth$arity$2(null,i__33311_33682);
var map__33341_33685__$1 = cljs.core.__destructure_map(map__33341_33684);
var op_type_33686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33341_33685__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_33687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33341_33685__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_33688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33341_33685__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_33689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33341_33685__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_33686,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_33686,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__4221__auto__){
return input_signals_33687;
} else {
return and__4221__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_33688,input_signals_33687);
} else {
}

var operation_33690__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_33688);
if(cljs.core.truth_(reaction_33689)){
var temp__5751__auto___33691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_33690__$1);
if(cljs.core.truth_(temp__5751__auto___33691)){
var old_reaction_33693 = temp__5751__auto___33691;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_33686,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_33693))){
var updated_node_33694 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_33693,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_33686,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_33686)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_33690__$1,updated_node_33694);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_33690__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_33690__$1,updated_node_33694);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_33694], null)));
}
} else {
}
} else {
}
} else {
var data_33696 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_33690__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_33690__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_33686)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_33686], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_33690__$1,data_33696);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_33690__$1,data_33696);
}
} else {
}

if(cljs.core.truth_(input_signals_33687)){
var seq__33344_33698 = cljs.core.seq(input_signals_33687);
var chunk__33345_33699 = null;
var count__33346_33700 = (0);
var i__33347_33701 = (0);
while(true){
if((i__33347_33701 < count__33346_33700)){
var input_reaction_33702 = chunk__33345_33699.cljs$core$IIndexed$_nth$arity$2(null,i__33347_33701);
var input_operation_33703 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_33702));
var reaction_path_33704 = [input_operation_33703,"-",operation_33690__$1].join('');
var temp__5751__auto___33705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_33704);
if(cljs.core.truth_(temp__5751__auto___33705)){
var old_edge_33707 = temp__5751__auto___33705;
var updated_edge_33708 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_33707,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_33704,updated_edge_33708);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_33708], null)));
} else {
}
} else {
var data_33709 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_33704,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_33703,new cljs.core.Keyword(null,"to","to",192099007),operation_33690__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_33704,data_33709);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_33709));
} else {
}
}


var G__33711 = seq__33344_33698;
var G__33712 = chunk__33345_33699;
var G__33713 = count__33346_33700;
var G__33714 = (i__33347_33701 + (1));
seq__33344_33698 = G__33711;
chunk__33345_33699 = G__33712;
count__33346_33700 = G__33713;
i__33347_33701 = G__33714;
continue;
} else {
var temp__5753__auto___33715__$1 = cljs.core.seq(seq__33344_33698);
if(temp__5753__auto___33715__$1){
var seq__33344_33716__$1 = temp__5753__auto___33715__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33344_33716__$1)){
var c__4649__auto___33717 = cljs.core.chunk_first(seq__33344_33716__$1);
var G__33718 = cljs.core.chunk_rest(seq__33344_33716__$1);
var G__33719 = c__4649__auto___33717;
var G__33720 = cljs.core.count(c__4649__auto___33717);
var G__33721 = (0);
seq__33344_33698 = G__33718;
chunk__33345_33699 = G__33719;
count__33346_33700 = G__33720;
i__33347_33701 = G__33721;
continue;
} else {
var input_reaction_33723 = cljs.core.first(seq__33344_33716__$1);
var input_operation_33724 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_33723));
var reaction_path_33725 = [input_operation_33724,"-",operation_33690__$1].join('');
var temp__5751__auto___33726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_33725);
if(cljs.core.truth_(temp__5751__auto___33726)){
var old_edge_33727 = temp__5751__auto___33726;
var updated_edge_33728 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_33727,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_33725,updated_edge_33728);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_33728], null)));
} else {
}
} else {
var data_33730 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_33725,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_33724,new cljs.core.Keyword(null,"to","to",192099007),operation_33690__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_33725,data_33730);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_33730));
} else {
}
}


var G__33733 = cljs.core.next(seq__33344_33716__$1);
var G__33737 = null;
var G__33738 = (0);
var G__33739 = (0);
seq__33344_33698 = G__33733;
chunk__33345_33699 = G__33737;
count__33346_33700 = G__33738;
i__33347_33701 = G__33739;
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


var G__33740 = seq__33308_33679;
var G__33741 = chunk__33309_33680;
var G__33742 = count__33310_33681;
var G__33743 = (i__33311_33682 + (1));
seq__33308_33679 = G__33740;
chunk__33309_33680 = G__33741;
count__33310_33681 = G__33742;
i__33311_33682 = G__33743;
continue;
} else {
var temp__5753__auto___33744__$1 = cljs.core.seq(seq__33308_33679);
if(temp__5753__auto___33744__$1){
var seq__33308_33745__$1 = temp__5753__auto___33744__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33308_33745__$1)){
var c__4649__auto___33746 = cljs.core.chunk_first(seq__33308_33745__$1);
var G__33747 = cljs.core.chunk_rest(seq__33308_33745__$1);
var G__33748 = c__4649__auto___33746;
var G__33749 = cljs.core.count(c__4649__auto___33746);
var G__33750 = (0);
seq__33308_33679 = G__33747;
chunk__33309_33680 = G__33748;
count__33310_33681 = G__33749;
i__33311_33682 = G__33750;
continue;
} else {
var map__33358_33751 = cljs.core.first(seq__33308_33745__$1);
var map__33358_33752__$1 = cljs.core.__destructure_map(map__33358_33751);
var op_type_33753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33358_33752__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_33754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33358_33752__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_33755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33358_33752__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_33756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33358_33752__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_33753,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_33753,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__4221__auto__){
return input_signals_33754;
} else {
return and__4221__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_33755,input_signals_33754);
} else {
}

var operation_33758__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_33755);
if(cljs.core.truth_(reaction_33756)){
var temp__5751__auto___33759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_33758__$1);
if(cljs.core.truth_(temp__5751__auto___33759)){
var old_reaction_33760 = temp__5751__auto___33759;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_33753,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_33760))){
var updated_node_33761 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_33760,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_33753,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_33753)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_33758__$1,updated_node_33761);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_33758__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_33758__$1,updated_node_33761);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_33761], null)));
}
} else {
}
} else {
}
} else {
var data_33763 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_33758__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_33758__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_33753)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_33753], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_33758__$1,data_33763);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_33758__$1,data_33763);
}
} else {
}

if(cljs.core.truth_(input_signals_33754)){
var seq__33361_33764 = cljs.core.seq(input_signals_33754);
var chunk__33362_33765 = null;
var count__33363_33766 = (0);
var i__33364_33767 = (0);
while(true){
if((i__33364_33767 < count__33363_33766)){
var input_reaction_33768 = chunk__33362_33765.cljs$core$IIndexed$_nth$arity$2(null,i__33364_33767);
var input_operation_33773 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_33768));
var reaction_path_33774 = [input_operation_33773,"-",operation_33758__$1].join('');
var temp__5751__auto___33775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_33774);
if(cljs.core.truth_(temp__5751__auto___33775)){
var old_edge_33776 = temp__5751__auto___33775;
var updated_edge_33777 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_33776,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_33774,updated_edge_33777);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_33777], null)));
} else {
}
} else {
var data_33778 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_33774,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_33773,new cljs.core.Keyword(null,"to","to",192099007),operation_33758__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_33774,data_33778);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_33778));
} else {
}
}


var G__33779 = seq__33361_33764;
var G__33780 = chunk__33362_33765;
var G__33781 = count__33363_33766;
var G__33782 = (i__33364_33767 + (1));
seq__33361_33764 = G__33779;
chunk__33362_33765 = G__33780;
count__33363_33766 = G__33781;
i__33364_33767 = G__33782;
continue;
} else {
var temp__5753__auto___33783__$2 = cljs.core.seq(seq__33361_33764);
if(temp__5753__auto___33783__$2){
var seq__33361_33784__$1 = temp__5753__auto___33783__$2;
if(cljs.core.chunked_seq_QMARK_(seq__33361_33784__$1)){
var c__4649__auto___33785 = cljs.core.chunk_first(seq__33361_33784__$1);
var G__33786 = cljs.core.chunk_rest(seq__33361_33784__$1);
var G__33787 = c__4649__auto___33785;
var G__33788 = cljs.core.count(c__4649__auto___33785);
var G__33789 = (0);
seq__33361_33764 = G__33786;
chunk__33362_33765 = G__33787;
count__33363_33766 = G__33788;
i__33364_33767 = G__33789;
continue;
} else {
var input_reaction_33793 = cljs.core.first(seq__33361_33784__$1);
var input_operation_33794 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_33793));
var reaction_path_33795 = [input_operation_33794,"-",operation_33758__$1].join('');
var temp__5751__auto___33796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_33795);
if(cljs.core.truth_(temp__5751__auto___33796)){
var old_edge_33797 = temp__5751__auto___33796;
var updated_edge_33798 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_33797,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_33795,updated_edge_33798);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_33798], null)));
} else {
}
} else {
var data_33799 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_33795,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_33794,new cljs.core.Keyword(null,"to","to",192099007),operation_33758__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_33795,data_33799);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_33799));
} else {
}
}


var G__33801 = cljs.core.next(seq__33361_33784__$1);
var G__33802 = null;
var G__33803 = (0);
var G__33804 = (0);
seq__33361_33764 = G__33801;
chunk__33362_33765 = G__33802;
count__33363_33766 = G__33803;
i__33364_33767 = G__33804;
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


var G__33805 = cljs.core.next(seq__33308_33745__$1);
var G__33806 = null;
var G__33807 = (0);
var G__33808 = (0);
seq__33308_33679 = G__33805;
chunk__33309_33680 = G__33806;
count__33310_33681 = G__33807;
i__33311_33682 = G__33808;
continue;
}
} else {
}
}
break;
}


var G__33809 = cljs.core.next(seq__33100_33670__$1);
var G__33810 = null;
var G__33811 = (0);
var G__33812 = (0);
seq__33100_33535 = G__33809;
chunk__33101_33536 = G__33810;
count__33102_33537 = G__33811;
i__33103_33538 = G__33812;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if((cljs.core.count(cljs.core.deref(new_nodes)) > (20))){
return re_frisk.subs_graph.create();
} else {
var seq__33384 = cljs.core.seq(cljs.core.vals(cljs.core.deref(new_nodes)));
var chunk__33385 = null;
var count__33386 = (0);
var i__33387 = (0);
while(true){
if((i__33387 < count__33386)){
var data = chunk__33385.cljs$core$IIndexed$_nth$arity$2(null,i__33387);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__33813 = seq__33384;
var G__33814 = chunk__33385;
var G__33815 = count__33386;
var G__33816 = (i__33387 + (1));
seq__33384 = G__33813;
chunk__33385 = G__33814;
count__33386 = G__33815;
i__33387 = G__33816;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33384);
if(temp__5753__auto__){
var seq__33384__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33384__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__33384__$1);
var G__33817 = cljs.core.chunk_rest(seq__33384__$1);
var G__33818 = c__4649__auto__;
var G__33819 = cljs.core.count(c__4649__auto__);
var G__33820 = (0);
seq__33384 = G__33817;
chunk__33385 = G__33818;
count__33386 = G__33819;
i__33387 = G__33820;
continue;
} else {
var data = cljs.core.first(seq__33384__$1);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__33821 = cljs.core.next(seq__33384__$1);
var G__33822 = null;
var G__33823 = (0);
var G__33824 = (0);
seq__33384 = G__33821;
chunk__33385 = G__33822;
count__33386 = G__33823;
i__33387 = G__33824;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.event_network !== 'undefined')){
} else {
re_frisk.subs_graph.event_network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
re_frisk.subs_graph.create_event_subs = (function re_frisk$subs_graph$create_event_subs(p__33394){
var map__33395 = p__33394;
var map__33395__$1 = cljs.core.__destructure_map(map__33395);
var app_db_reaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33395__$1,new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33395__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.event_network))){
cljs.core.deref(re_frisk.subs_graph.event_network).destroy();

cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,null);
} else {
}

if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__4221__auto__;
}
})())){
var temp__5753__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("event-subs-graph-container");
if(cljs.core.truth_(temp__5753__auto__)){
var container = temp__5753__auto__;
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([app_db_reaction,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),app_db_reaction,new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null)]));
var edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__33396_33826 = cljs.core.seq(subs);
var chunk__33397_33827 = null;
var count__33398_33828 = (0);
var i__33399_33829 = (0);
while(true){
if((i__33399_33829 < count__33398_33828)){
var map__33427_33830 = chunk__33397_33827.cljs$core$IIndexed$_nth$arity$2(null,i__33399_33829);
var map__33427_33831__$1 = cljs.core.__destructure_map(map__33427_33830);
var op_type_33832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33427_33831__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_33833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33427_33831__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_33834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33427_33831__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_33835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33427_33831__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5751__auto___33836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_33833);
if(cljs.core.truth_(temp__5751__auto___33836)){
var old_reaction_33837 = temp__5751__auto___33836;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_33832,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_33837))){
var updated_node_33838 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_33837,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_33832,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_33832)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_33833,updated_node_33838);
} else {
}
} else {
var data_33839 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_33833,new cljs.core.Keyword(null,"label","label",1718410804),operation_33835,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_33832)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_33832], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_33833,data_33839);
}

if(cljs.core.truth_(input_signals_33834)){
var seq__33428_33840 = cljs.core.seq(input_signals_33834);
var chunk__33429_33841 = null;
var count__33430_33842 = (0);
var i__33431_33843 = (0);
while(true){
if((i__33431_33843 < count__33430_33842)){
var input_reaction_33844 = chunk__33429_33841.cljs$core$IIndexed$_nth$arity$2(null,i__33431_33843);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_33844),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_33833)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_33844),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_33833)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_33844,new cljs.core.Keyword(null,"to","to",192099007),reaction_33833], null));
}


var G__33845 = seq__33428_33840;
var G__33846 = chunk__33429_33841;
var G__33847 = count__33430_33842;
var G__33848 = (i__33431_33843 + (1));
seq__33428_33840 = G__33845;
chunk__33429_33841 = G__33846;
count__33430_33842 = G__33847;
i__33431_33843 = G__33848;
continue;
} else {
var temp__5753__auto___33849__$1 = cljs.core.seq(seq__33428_33840);
if(temp__5753__auto___33849__$1){
var seq__33428_33850__$1 = temp__5753__auto___33849__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33428_33850__$1)){
var c__4649__auto___33851 = cljs.core.chunk_first(seq__33428_33850__$1);
var G__33852 = cljs.core.chunk_rest(seq__33428_33850__$1);
var G__33853 = c__4649__auto___33851;
var G__33854 = cljs.core.count(c__4649__auto___33851);
var G__33855 = (0);
seq__33428_33840 = G__33852;
chunk__33429_33841 = G__33853;
count__33430_33842 = G__33854;
i__33431_33843 = G__33855;
continue;
} else {
var input_reaction_33856 = cljs.core.first(seq__33428_33850__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_33856),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_33833)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_33856),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_33833)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_33856,new cljs.core.Keyword(null,"to","to",192099007),reaction_33833], null));
}


var G__33857 = cljs.core.next(seq__33428_33850__$1);
var G__33858 = null;
var G__33859 = (0);
var G__33860 = (0);
seq__33428_33840 = G__33857;
chunk__33429_33841 = G__33858;
count__33430_33842 = G__33859;
i__33431_33843 = G__33860;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__33861 = seq__33396_33826;
var G__33862 = chunk__33397_33827;
var G__33863 = count__33398_33828;
var G__33864 = (i__33399_33829 + (1));
seq__33396_33826 = G__33861;
chunk__33397_33827 = G__33862;
count__33398_33828 = G__33863;
i__33399_33829 = G__33864;
continue;
} else {
var temp__5753__auto___33865__$1 = cljs.core.seq(seq__33396_33826);
if(temp__5753__auto___33865__$1){
var seq__33396_33866__$1 = temp__5753__auto___33865__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33396_33866__$1)){
var c__4649__auto___33867 = cljs.core.chunk_first(seq__33396_33866__$1);
var G__33868 = cljs.core.chunk_rest(seq__33396_33866__$1);
var G__33869 = c__4649__auto___33867;
var G__33870 = cljs.core.count(c__4649__auto___33867);
var G__33871 = (0);
seq__33396_33826 = G__33868;
chunk__33397_33827 = G__33869;
count__33398_33828 = G__33870;
i__33399_33829 = G__33871;
continue;
} else {
var map__33436_33872 = cljs.core.first(seq__33396_33866__$1);
var map__33436_33873__$1 = cljs.core.__destructure_map(map__33436_33872);
var op_type_33874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33436_33873__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_33875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33436_33873__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_33876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33436_33873__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_33877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33436_33873__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5751__auto___33878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_33875);
if(cljs.core.truth_(temp__5751__auto___33878)){
var old_reaction_33879 = temp__5751__auto___33878;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_33874,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_33879))){
var updated_node_33880 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_33879,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_33874,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_33874)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_33875,updated_node_33880);
} else {
}
} else {
var data_33882 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_33875,new cljs.core.Keyword(null,"label","label",1718410804),operation_33877,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_33874)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_33874], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_33875,data_33882);
}

if(cljs.core.truth_(input_signals_33876)){
var seq__33439_33883 = cljs.core.seq(input_signals_33876);
var chunk__33440_33884 = null;
var count__33441_33885 = (0);
var i__33442_33886 = (0);
while(true){
if((i__33442_33886 < count__33441_33885)){
var input_reaction_33887 = chunk__33440_33884.cljs$core$IIndexed$_nth$arity$2(null,i__33442_33886);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_33887),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_33875)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_33887),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_33875)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_33887,new cljs.core.Keyword(null,"to","to",192099007),reaction_33875], null));
}


var G__33888 = seq__33439_33883;
var G__33889 = chunk__33440_33884;
var G__33890 = count__33441_33885;
var G__33891 = (i__33442_33886 + (1));
seq__33439_33883 = G__33888;
chunk__33440_33884 = G__33889;
count__33441_33885 = G__33890;
i__33442_33886 = G__33891;
continue;
} else {
var temp__5753__auto___33892__$2 = cljs.core.seq(seq__33439_33883);
if(temp__5753__auto___33892__$2){
var seq__33439_33893__$1 = temp__5753__auto___33892__$2;
if(cljs.core.chunked_seq_QMARK_(seq__33439_33893__$1)){
var c__4649__auto___33894 = cljs.core.chunk_first(seq__33439_33893__$1);
var G__33895 = cljs.core.chunk_rest(seq__33439_33893__$1);
var G__33896 = c__4649__auto___33894;
var G__33897 = cljs.core.count(c__4649__auto___33894);
var G__33898 = (0);
seq__33439_33883 = G__33895;
chunk__33440_33884 = G__33896;
count__33441_33885 = G__33897;
i__33442_33886 = G__33898;
continue;
} else {
var input_reaction_33899 = cljs.core.first(seq__33439_33893__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_33899),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_33875)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_33899),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_33875)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_33899,new cljs.core.Keyword(null,"to","to",192099007),reaction_33875], null));
}


var G__33900 = cljs.core.next(seq__33439_33893__$1);
var G__33901 = null;
var G__33902 = (0);
var G__33903 = (0);
seq__33439_33883 = G__33900;
chunk__33440_33884 = G__33901;
count__33441_33885 = G__33902;
i__33442_33886 = G__33903;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__33904 = cljs.core.next(seq__33396_33866__$1);
var G__33905 = null;
var G__33906 = (0);
var G__33907 = (0);
seq__33396_33826 = G__33904;
chunk__33397_33827 = G__33905;
count__33398_33828 = G__33906;
i__33399_33829 = G__33907;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,(new Network(container,({"nodes": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(nodes))))), "edges": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(edges)))))}),re_frisk.subs_graph.options)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=re_frisk.subs_graph.js.map
