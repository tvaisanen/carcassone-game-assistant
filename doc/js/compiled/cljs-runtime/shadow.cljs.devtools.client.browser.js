goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___42751 = arguments.length;
var i__4830__auto___42752 = (0);
while(true){
if((i__4830__auto___42752 < len__4829__auto___42751)){
args__4835__auto__.push((arguments[i__4830__auto___42752]));

var G__42753 = (i__4830__auto___42752 + (1));
i__4830__auto___42752 = G__42753;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq42620){
var G__42621 = cljs.core.first(seq42620);
var seq42620__$1 = cljs.core.next(seq42620);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42621,seq42620__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__42624 = cljs.core.seq(sources);
var chunk__42625 = null;
var count__42626 = (0);
var i__42627 = (0);
while(true){
if((i__42627 < count__42626)){
var map__42639 = chunk__42625.cljs$core$IIndexed$_nth$arity$2(null,i__42627);
var map__42639__$1 = cljs.core.__destructure_map(map__42639);
var src = map__42639__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42639__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42639__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42639__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42639__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e42640){var e_42754 = e42640;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42754);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42754.message)].join('')));
}

var G__42755 = seq__42624;
var G__42756 = chunk__42625;
var G__42757 = count__42626;
var G__42758 = (i__42627 + (1));
seq__42624 = G__42755;
chunk__42625 = G__42756;
count__42626 = G__42757;
i__42627 = G__42758;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42624);
if(temp__5753__auto__){
var seq__42624__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42624__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__42624__$1);
var G__42759 = cljs.core.chunk_rest(seq__42624__$1);
var G__42760 = c__4649__auto__;
var G__42761 = cljs.core.count(c__4649__auto__);
var G__42762 = (0);
seq__42624 = G__42759;
chunk__42625 = G__42760;
count__42626 = G__42761;
i__42627 = G__42762;
continue;
} else {
var map__42641 = cljs.core.first(seq__42624__$1);
var map__42641__$1 = cljs.core.__destructure_map(map__42641);
var src = map__42641__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42641__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42641__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42641__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42641__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e42642){var e_42763 = e42642;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42763);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42763.message)].join('')));
}

var G__42764 = cljs.core.next(seq__42624__$1);
var G__42765 = null;
var G__42766 = (0);
var G__42767 = (0);
seq__42624 = G__42764;
chunk__42625 = G__42765;
count__42626 = G__42766;
i__42627 = G__42767;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__42643 = cljs.core.seq(js_requires);
var chunk__42644 = null;
var count__42645 = (0);
var i__42646 = (0);
while(true){
if((i__42646 < count__42645)){
var js_ns = chunk__42644.cljs$core$IIndexed$_nth$arity$2(null,i__42646);
var require_str_42768 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42768);


var G__42769 = seq__42643;
var G__42770 = chunk__42644;
var G__42771 = count__42645;
var G__42772 = (i__42646 + (1));
seq__42643 = G__42769;
chunk__42644 = G__42770;
count__42645 = G__42771;
i__42646 = G__42772;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42643);
if(temp__5753__auto__){
var seq__42643__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42643__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__42643__$1);
var G__42773 = cljs.core.chunk_rest(seq__42643__$1);
var G__42774 = c__4649__auto__;
var G__42775 = cljs.core.count(c__4649__auto__);
var G__42776 = (0);
seq__42643 = G__42773;
chunk__42644 = G__42774;
count__42645 = G__42775;
i__42646 = G__42776;
continue;
} else {
var js_ns = cljs.core.first(seq__42643__$1);
var require_str_42777 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42777);


var G__42778 = cljs.core.next(seq__42643__$1);
var G__42779 = null;
var G__42780 = (0);
var G__42781 = (0);
seq__42643 = G__42778;
chunk__42644 = G__42779;
count__42645 = G__42780;
i__42646 = G__42781;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__42648){
var map__42649 = p__42648;
var map__42649__$1 = cljs.core.__destructure_map(map__42649);
var msg = map__42649__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42649__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42649__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42650(s__42651){
return (new cljs.core.LazySeq(null,(function (){
var s__42651__$1 = s__42651;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42651__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__42656 = cljs.core.first(xs__6308__auto__);
var map__42656__$1 = cljs.core.__destructure_map(map__42656);
var src = map__42656__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42656__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42656__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__42651__$1,map__42656,map__42656__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__42649,map__42649__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42650_$_iter__42652(s__42653){
return (new cljs.core.LazySeq(null,((function (s__42651__$1,map__42656,map__42656__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__42649,map__42649__$1,msg,info,reload_info){
return (function (){
var s__42653__$1 = s__42653;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__42653__$1);
if(temp__5753__auto____$1){
var s__42653__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42653__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__42653__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__42655 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__42654 = (0);
while(true){
if((i__42654 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__42654);
cljs.core.chunk_append(b__42655,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42782 = (i__42654 + (1));
i__42654 = G__42782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42655),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42650_$_iter__42652(cljs.core.chunk_rest(s__42653__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42655),null);
}
} else {
var warning = cljs.core.first(s__42653__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42650_$_iter__42652(cljs.core.rest(s__42653__$2)));
}
} else {
return null;
}
break;
}
});})(s__42651__$1,map__42656,map__42656__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__42649,map__42649__$1,msg,info,reload_info))
,null,null));
});})(s__42651__$1,map__42656,map__42656__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__42649,map__42649__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42650(cljs.core.rest(s__42651__$1)));
} else {
var G__42783 = cljs.core.rest(s__42651__$1);
s__42651__$1 = G__42783;
continue;
}
} else {
var G__42784 = cljs.core.rest(s__42651__$1);
s__42651__$1 = G__42784;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__42657_42785 = cljs.core.seq(warnings);
var chunk__42658_42786 = null;
var count__42659_42787 = (0);
var i__42660_42788 = (0);
while(true){
if((i__42660_42788 < count__42659_42787)){
var map__42663_42789 = chunk__42658_42786.cljs$core$IIndexed$_nth$arity$2(null,i__42660_42788);
var map__42663_42790__$1 = cljs.core.__destructure_map(map__42663_42789);
var w_42791 = map__42663_42790__$1;
var msg_42792__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42663_42790__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42663_42790__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42663_42790__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42663_42790__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42795)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42793),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42794),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42792__$1)].join(''));


var G__42796 = seq__42657_42785;
var G__42797 = chunk__42658_42786;
var G__42798 = count__42659_42787;
var G__42799 = (i__42660_42788 + (1));
seq__42657_42785 = G__42796;
chunk__42658_42786 = G__42797;
count__42659_42787 = G__42798;
i__42660_42788 = G__42799;
continue;
} else {
var temp__5753__auto___42800 = cljs.core.seq(seq__42657_42785);
if(temp__5753__auto___42800){
var seq__42657_42801__$1 = temp__5753__auto___42800;
if(cljs.core.chunked_seq_QMARK_(seq__42657_42801__$1)){
var c__4649__auto___42802 = cljs.core.chunk_first(seq__42657_42801__$1);
var G__42803 = cljs.core.chunk_rest(seq__42657_42801__$1);
var G__42804 = c__4649__auto___42802;
var G__42805 = cljs.core.count(c__4649__auto___42802);
var G__42806 = (0);
seq__42657_42785 = G__42803;
chunk__42658_42786 = G__42804;
count__42659_42787 = G__42805;
i__42660_42788 = G__42806;
continue;
} else {
var map__42664_42807 = cljs.core.first(seq__42657_42801__$1);
var map__42664_42808__$1 = cljs.core.__destructure_map(map__42664_42807);
var w_42809 = map__42664_42808__$1;
var msg_42810__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42664_42808__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42664_42808__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42664_42808__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42664_42808__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42813)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42811),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42812),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42810__$1)].join(''));


var G__42814 = cljs.core.next(seq__42657_42801__$1);
var G__42815 = null;
var G__42816 = (0);
var G__42817 = (0);
seq__42657_42785 = G__42814;
chunk__42658_42786 = G__42815;
count__42659_42787 = G__42816;
i__42660_42788 = G__42817;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__42647_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__42647_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__42665){
var map__42666 = p__42665;
var map__42666__$1 = cljs.core.__destructure_map(map__42666);
var msg = map__42666__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42666__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__42667 = cljs.core.seq(updates);
var chunk__42669 = null;
var count__42670 = (0);
var i__42671 = (0);
while(true){
if((i__42671 < count__42670)){
var path = chunk__42669.cljs$core$IIndexed$_nth$arity$2(null,i__42671);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42701_42818 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42705_42819 = null;
var count__42706_42820 = (0);
var i__42707_42821 = (0);
while(true){
if((i__42707_42821 < count__42706_42820)){
var node_42822 = chunk__42705_42819.cljs$core$IIndexed$_nth$arity$2(null,i__42707_42821);
if(cljs.core.not(node_42822.shadow$old)){
var path_match_42823 = shadow.cljs.devtools.client.browser.match_paths(node_42822.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42823)){
var new_link_42824 = (function (){var G__42713 = node_42822.cloneNode(true);
G__42713.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42823),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42713;
})();
(node_42822.shadow$old = true);

(new_link_42824.onload = ((function (seq__42701_42818,chunk__42705_42819,count__42706_42820,i__42707_42821,seq__42667,chunk__42669,count__42670,i__42671,new_link_42824,path_match_42823,node_42822,path,map__42666,map__42666__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42822);
});})(seq__42701_42818,chunk__42705_42819,count__42706_42820,i__42707_42821,seq__42667,chunk__42669,count__42670,i__42671,new_link_42824,path_match_42823,node_42822,path,map__42666,map__42666__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42823], 0));

goog.dom.insertSiblingAfter(new_link_42824,node_42822);


var G__42825 = seq__42701_42818;
var G__42826 = chunk__42705_42819;
var G__42827 = count__42706_42820;
var G__42828 = (i__42707_42821 + (1));
seq__42701_42818 = G__42825;
chunk__42705_42819 = G__42826;
count__42706_42820 = G__42827;
i__42707_42821 = G__42828;
continue;
} else {
var G__42829 = seq__42701_42818;
var G__42830 = chunk__42705_42819;
var G__42831 = count__42706_42820;
var G__42832 = (i__42707_42821 + (1));
seq__42701_42818 = G__42829;
chunk__42705_42819 = G__42830;
count__42706_42820 = G__42831;
i__42707_42821 = G__42832;
continue;
}
} else {
var G__42833 = seq__42701_42818;
var G__42834 = chunk__42705_42819;
var G__42835 = count__42706_42820;
var G__42836 = (i__42707_42821 + (1));
seq__42701_42818 = G__42833;
chunk__42705_42819 = G__42834;
count__42706_42820 = G__42835;
i__42707_42821 = G__42836;
continue;
}
} else {
var temp__5753__auto___42837 = cljs.core.seq(seq__42701_42818);
if(temp__5753__auto___42837){
var seq__42701_42838__$1 = temp__5753__auto___42837;
if(cljs.core.chunked_seq_QMARK_(seq__42701_42838__$1)){
var c__4649__auto___42839 = cljs.core.chunk_first(seq__42701_42838__$1);
var G__42840 = cljs.core.chunk_rest(seq__42701_42838__$1);
var G__42841 = c__4649__auto___42839;
var G__42842 = cljs.core.count(c__4649__auto___42839);
var G__42843 = (0);
seq__42701_42818 = G__42840;
chunk__42705_42819 = G__42841;
count__42706_42820 = G__42842;
i__42707_42821 = G__42843;
continue;
} else {
var node_42844 = cljs.core.first(seq__42701_42838__$1);
if(cljs.core.not(node_42844.shadow$old)){
var path_match_42845 = shadow.cljs.devtools.client.browser.match_paths(node_42844.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42845)){
var new_link_42846 = (function (){var G__42714 = node_42844.cloneNode(true);
G__42714.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42845),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42714;
})();
(node_42844.shadow$old = true);

(new_link_42846.onload = ((function (seq__42701_42818,chunk__42705_42819,count__42706_42820,i__42707_42821,seq__42667,chunk__42669,count__42670,i__42671,new_link_42846,path_match_42845,node_42844,seq__42701_42838__$1,temp__5753__auto___42837,path,map__42666,map__42666__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42844);
});})(seq__42701_42818,chunk__42705_42819,count__42706_42820,i__42707_42821,seq__42667,chunk__42669,count__42670,i__42671,new_link_42846,path_match_42845,node_42844,seq__42701_42838__$1,temp__5753__auto___42837,path,map__42666,map__42666__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42845], 0));

goog.dom.insertSiblingAfter(new_link_42846,node_42844);


var G__42847 = cljs.core.next(seq__42701_42838__$1);
var G__42848 = null;
var G__42849 = (0);
var G__42850 = (0);
seq__42701_42818 = G__42847;
chunk__42705_42819 = G__42848;
count__42706_42820 = G__42849;
i__42707_42821 = G__42850;
continue;
} else {
var G__42851 = cljs.core.next(seq__42701_42838__$1);
var G__42852 = null;
var G__42853 = (0);
var G__42854 = (0);
seq__42701_42818 = G__42851;
chunk__42705_42819 = G__42852;
count__42706_42820 = G__42853;
i__42707_42821 = G__42854;
continue;
}
} else {
var G__42855 = cljs.core.next(seq__42701_42838__$1);
var G__42856 = null;
var G__42857 = (0);
var G__42858 = (0);
seq__42701_42818 = G__42855;
chunk__42705_42819 = G__42856;
count__42706_42820 = G__42857;
i__42707_42821 = G__42858;
continue;
}
}
} else {
}
}
break;
}


var G__42859 = seq__42667;
var G__42860 = chunk__42669;
var G__42861 = count__42670;
var G__42862 = (i__42671 + (1));
seq__42667 = G__42859;
chunk__42669 = G__42860;
count__42670 = G__42861;
i__42671 = G__42862;
continue;
} else {
var G__42863 = seq__42667;
var G__42864 = chunk__42669;
var G__42865 = count__42670;
var G__42866 = (i__42671 + (1));
seq__42667 = G__42863;
chunk__42669 = G__42864;
count__42670 = G__42865;
i__42671 = G__42866;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42667);
if(temp__5753__auto__){
var seq__42667__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42667__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__42667__$1);
var G__42867 = cljs.core.chunk_rest(seq__42667__$1);
var G__42868 = c__4649__auto__;
var G__42869 = cljs.core.count(c__4649__auto__);
var G__42870 = (0);
seq__42667 = G__42867;
chunk__42669 = G__42868;
count__42670 = G__42869;
i__42671 = G__42870;
continue;
} else {
var path = cljs.core.first(seq__42667__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42715_42871 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42719_42872 = null;
var count__42720_42873 = (0);
var i__42721_42874 = (0);
while(true){
if((i__42721_42874 < count__42720_42873)){
var node_42875 = chunk__42719_42872.cljs$core$IIndexed$_nth$arity$2(null,i__42721_42874);
if(cljs.core.not(node_42875.shadow$old)){
var path_match_42876 = shadow.cljs.devtools.client.browser.match_paths(node_42875.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42876)){
var new_link_42877 = (function (){var G__42727 = node_42875.cloneNode(true);
G__42727.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42876),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42727;
})();
(node_42875.shadow$old = true);

(new_link_42877.onload = ((function (seq__42715_42871,chunk__42719_42872,count__42720_42873,i__42721_42874,seq__42667,chunk__42669,count__42670,i__42671,new_link_42877,path_match_42876,node_42875,path,seq__42667__$1,temp__5753__auto__,map__42666,map__42666__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42875);
});})(seq__42715_42871,chunk__42719_42872,count__42720_42873,i__42721_42874,seq__42667,chunk__42669,count__42670,i__42671,new_link_42877,path_match_42876,node_42875,path,seq__42667__$1,temp__5753__auto__,map__42666,map__42666__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42876], 0));

goog.dom.insertSiblingAfter(new_link_42877,node_42875);


var G__42878 = seq__42715_42871;
var G__42879 = chunk__42719_42872;
var G__42880 = count__42720_42873;
var G__42881 = (i__42721_42874 + (1));
seq__42715_42871 = G__42878;
chunk__42719_42872 = G__42879;
count__42720_42873 = G__42880;
i__42721_42874 = G__42881;
continue;
} else {
var G__42882 = seq__42715_42871;
var G__42883 = chunk__42719_42872;
var G__42884 = count__42720_42873;
var G__42885 = (i__42721_42874 + (1));
seq__42715_42871 = G__42882;
chunk__42719_42872 = G__42883;
count__42720_42873 = G__42884;
i__42721_42874 = G__42885;
continue;
}
} else {
var G__42886 = seq__42715_42871;
var G__42887 = chunk__42719_42872;
var G__42888 = count__42720_42873;
var G__42889 = (i__42721_42874 + (1));
seq__42715_42871 = G__42886;
chunk__42719_42872 = G__42887;
count__42720_42873 = G__42888;
i__42721_42874 = G__42889;
continue;
}
} else {
var temp__5753__auto___42890__$1 = cljs.core.seq(seq__42715_42871);
if(temp__5753__auto___42890__$1){
var seq__42715_42891__$1 = temp__5753__auto___42890__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42715_42891__$1)){
var c__4649__auto___42892 = cljs.core.chunk_first(seq__42715_42891__$1);
var G__42893 = cljs.core.chunk_rest(seq__42715_42891__$1);
var G__42894 = c__4649__auto___42892;
var G__42895 = cljs.core.count(c__4649__auto___42892);
var G__42896 = (0);
seq__42715_42871 = G__42893;
chunk__42719_42872 = G__42894;
count__42720_42873 = G__42895;
i__42721_42874 = G__42896;
continue;
} else {
var node_42897 = cljs.core.first(seq__42715_42891__$1);
if(cljs.core.not(node_42897.shadow$old)){
var path_match_42898 = shadow.cljs.devtools.client.browser.match_paths(node_42897.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42898)){
var new_link_42899 = (function (){var G__42728 = node_42897.cloneNode(true);
G__42728.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42898),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42728;
})();
(node_42897.shadow$old = true);

(new_link_42899.onload = ((function (seq__42715_42871,chunk__42719_42872,count__42720_42873,i__42721_42874,seq__42667,chunk__42669,count__42670,i__42671,new_link_42899,path_match_42898,node_42897,seq__42715_42891__$1,temp__5753__auto___42890__$1,path,seq__42667__$1,temp__5753__auto__,map__42666,map__42666__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42897);
});})(seq__42715_42871,chunk__42719_42872,count__42720_42873,i__42721_42874,seq__42667,chunk__42669,count__42670,i__42671,new_link_42899,path_match_42898,node_42897,seq__42715_42891__$1,temp__5753__auto___42890__$1,path,seq__42667__$1,temp__5753__auto__,map__42666,map__42666__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42898], 0));

goog.dom.insertSiblingAfter(new_link_42899,node_42897);


var G__42900 = cljs.core.next(seq__42715_42891__$1);
var G__42901 = null;
var G__42902 = (0);
var G__42903 = (0);
seq__42715_42871 = G__42900;
chunk__42719_42872 = G__42901;
count__42720_42873 = G__42902;
i__42721_42874 = G__42903;
continue;
} else {
var G__42904 = cljs.core.next(seq__42715_42891__$1);
var G__42905 = null;
var G__42906 = (0);
var G__42907 = (0);
seq__42715_42871 = G__42904;
chunk__42719_42872 = G__42905;
count__42720_42873 = G__42906;
i__42721_42874 = G__42907;
continue;
}
} else {
var G__42908 = cljs.core.next(seq__42715_42891__$1);
var G__42909 = null;
var G__42910 = (0);
var G__42911 = (0);
seq__42715_42871 = G__42908;
chunk__42719_42872 = G__42909;
count__42720_42873 = G__42910;
i__42721_42874 = G__42911;
continue;
}
}
} else {
}
}
break;
}


var G__42912 = cljs.core.next(seq__42667__$1);
var G__42913 = null;
var G__42914 = (0);
var G__42915 = (0);
seq__42667 = G__42912;
chunk__42669 = G__42913;
count__42670 = G__42914;
i__42671 = G__42915;
continue;
} else {
var G__42916 = cljs.core.next(seq__42667__$1);
var G__42917 = null;
var G__42918 = (0);
var G__42919 = (0);
seq__42667 = G__42916;
chunk__42669 = G__42917;
count__42670 = G__42918;
i__42671 = G__42919;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__42729){
var map__42730 = p__42729;
var map__42730__$1 = cljs.core.__destructure_map(map__42730);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42730__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__42731){
var map__42732 = p__42731;
var map__42732__$1 = cljs.core.__destructure_map(map__42732);
var _ = map__42732__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42732__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__42733,done,error){
var map__42734 = p__42733;
var map__42734__$1 = cljs.core.__destructure_map(map__42734);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42734__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__42735,done,error){
var map__42736 = p__42735;
var map__42736__$1 = cljs.core.__destructure_map(map__42736);
var msg = map__42736__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42736__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42736__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42736__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__42737){
var map__42738 = p__42737;
var map__42738__$1 = cljs.core.__destructure_map(map__42738);
var src = map__42738__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42738__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__42739 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__42739) : done.call(null,G__42739));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__42740){
var map__42741 = p__42740;
var map__42741__$1 = cljs.core.__destructure_map(map__42741);
var msg__$1 = map__42741__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42741__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e42742){var ex = e42742;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__42743){
var map__42744 = p__42743;
var map__42744__$1 = cljs.core.__destructure_map(map__42744);
var env = map__42744__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42744__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__42745){
var map__42746 = p__42745;
var map__42746__$1 = cljs.core.__destructure_map(map__42746);
var msg = map__42746__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42746__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__42747){
var map__42748 = p__42747;
var map__42748__$1 = cljs.core.__destructure_map(map__42748);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42748__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42748__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__42749){
var map__42750 = p__42749;
var map__42750__$1 = cljs.core.__destructure_map(map__42750);
var svc = map__42750__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42750__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
