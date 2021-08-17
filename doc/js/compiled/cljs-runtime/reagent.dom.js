goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__34039 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__34040 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__34040);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__34041 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__34042 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__34042);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__34041);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__34039);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__34059 = arguments.length;
switch (G__34059) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__34061 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34061,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34061,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__34065_34088 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__34066_34089 = null;
var count__34067_34090 = (0);
var i__34068_34091 = (0);
while(true){
if((i__34068_34091 < count__34067_34090)){
var vec__34076_34092 = chunk__34066_34089.cljs$core$IIndexed$_nth$arity$2(null,i__34068_34091);
var container_34093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34076_34092,(0),null);
var comp_34094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34076_34092,(1),null);
reagent.dom.re_render_component(comp_34094,container_34093);


var G__34095 = seq__34065_34088;
var G__34096 = chunk__34066_34089;
var G__34097 = count__34067_34090;
var G__34098 = (i__34068_34091 + (1));
seq__34065_34088 = G__34095;
chunk__34066_34089 = G__34096;
count__34067_34090 = G__34097;
i__34068_34091 = G__34098;
continue;
} else {
var temp__5753__auto___34099 = cljs.core.seq(seq__34065_34088);
if(temp__5753__auto___34099){
var seq__34065_34100__$1 = temp__5753__auto___34099;
if(cljs.core.chunked_seq_QMARK_(seq__34065_34100__$1)){
var c__4649__auto___34101 = cljs.core.chunk_first(seq__34065_34100__$1);
var G__34102 = cljs.core.chunk_rest(seq__34065_34100__$1);
var G__34103 = c__4649__auto___34101;
var G__34104 = cljs.core.count(c__4649__auto___34101);
var G__34105 = (0);
seq__34065_34088 = G__34102;
chunk__34066_34089 = G__34103;
count__34067_34090 = G__34104;
i__34068_34091 = G__34105;
continue;
} else {
var vec__34081_34106 = cljs.core.first(seq__34065_34100__$1);
var container_34107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34081_34106,(0),null);
var comp_34108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34081_34106,(1),null);
reagent.dom.re_render_component(comp_34108,container_34107);


var G__34109 = cljs.core.next(seq__34065_34100__$1);
var G__34110 = null;
var G__34111 = (0);
var G__34112 = (0);
seq__34065_34088 = G__34109;
chunk__34066_34089 = G__34110;
count__34067_34090 = G__34111;
i__34068_34091 = G__34112;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
