goog.provide('re_frisk.ui.components.splits');
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_frisk.ui.components.splits.sum_scroll_offsets = (function re_frisk$ui$components$splits$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_node.tagName,"BODY")){
var G__39161 = current_node.parentNode;
var G__39162 = (sum_scroll_left + current_node.scrollLeft);
var G__39163 = (sum_scroll_top + current_node.scrollTop);
current_node = G__39161;
sum_scroll_left = G__39162;
sum_scroll_top = G__39163;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
re_frisk.ui.components.splits.flex_child_style = (function re_frisk$ui$components$splits$flex_child_style(size){
var split_size = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(size),/\s+/);
var split_count = cljs.core.count(split_size);
var _ = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(3),null], null), null),split_count))?null:(function(){throw (new Error(["Assert failed: ","Must pass either 1 or 3 words to flex-child-style","\n","(contains? #{1 3} split-count)"].join('')))})());
var size_only = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(split_count,(1)))?cljs.core.first(split_size):null);
var split_size_only = (cljs.core.truth_(size_only)?clojure.string.split.cljs$core$IFn$_invoke$arity$2(size_only,/(\d+)(.*)/):null);
var vec__39133 = (cljs.core.truth_(size_only)?split_size_only:null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39133,(0),null);
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39133,(1),null);
var units = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39133,(2),null);
var pass_through_QMARK_ = (num == null);
var grow_ratio_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(units,"%")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(units,"")) || ((units == null)))));
var grow = ((grow_ratio_QMARK_)?num:"0");
var shrink = ((grow_ratio_QMARK_)?"1":"0");
var basis = ((grow_ratio_QMARK_)?"0px":size);
var flex = (cljs.core.truth_((function (){var and__4221__auto__ = size_only;
if(cljs.core.truth_(and__4221__auto__)){
return (!(pass_through_QMARK_));
} else {
return and__4221__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(grow)," ",shrink," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(basis)].join(''):size);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-webkit-flex","-webkit-flex",-1736517621),flex,new cljs.core.Keyword(null,"flex","flex",-1425124628),flex], null);
});
/**
 * A cross-browser helper function to output flex-flow with all it's potential browser prefixes
 */
re_frisk.ui.components.splits.flex_flow_style = (function re_frisk$ui$components$splits$flex_flow_style(flex_flow){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-webkit-flex-flow","-webkit-flex-flow",667076810),flex_flow,new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),flex_flow], null);
});
/**
 * Return a drag handle to go into a vertical or horizontal splitter bar:
 *  orientation: Can be :horizonal or :vertical
 *  over?:       When true, the mouse is assumed to be over the splitter so show a bolder color
 */
re_frisk.ui.components.splits.drag_handle = (function re_frisk$ui$components$splits$drag_handle(orientation,over_QMARK_){
var vertical_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"vertical","vertical",718696748));
var length = "20px";
var width = "8px";
var pos1 = "3px";
var pos2 = "3px";
var color = (cljs.core.truth_(over_QMARK_)?"#999":"#ccc");
var border = ["solid 1px ",color].join('');
var flex_flow = [((vertical_QMARK_)?"row":"column")," nowrap"].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"display-flex",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_frisk.ui.components.splits.flex_flow_style(flex_flow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((vertical_QMARK_)?width:length),new cljs.core.Keyword(null,"height","height",1025178622),((vertical_QMARK_)?length:width),new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((vertical_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),pos1,new cljs.core.Keyword(null,"height","height",1025178622),length,new cljs.core.Keyword(null,"border-right","border-right",-668932860),border], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),length,new cljs.core.Keyword(null,"height","height",1025178622),pos1,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((vertical_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),pos2,new cljs.core.Keyword(null,"height","height",1025178622),length,new cljs.core.Keyword(null,"border-right","border-right",-668932860),border], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),length,new cljs.core.Keyword(null,"height","height",1025178622),pos2,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border], null))], null)], null)], null);
});
/**
 * Returns markup for a horizontal layout component
 */
re_frisk.ui.components.splits.h_split = (function re_frisk$ui$components$splits$h_split(var_args){
var args__4835__auto__ = [];
var len__4829__auto___39164 = arguments.length;
var i__4830__auto___39165 = (0);
while(true){
if((i__4830__auto___39165 < len__4829__auto___39164)){
args__4835__auto__.push((arguments[i__4830__auto___39165]));

var G__39166 = (i__4830__auto___39165 + (1));
i__4830__auto___39165 = G__39166;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_frisk.ui.components.splits.h_split.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_frisk.ui.components.splits.h_split.cljs$core$IFn$_invoke$arity$variadic = (function (p__39147){
var map__39148 = p__39147;
var map__39148__$1 = cljs.core.__destructure_map(map__39148);
var args = map__39148__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39148__$1,new cljs.core.Keyword(null,"size","size",1098693007),"auto");
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39148__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39148__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var on_split_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39148__$1,new cljs.core.Keyword(null,"on-split-change","on-split-change",-1635241917));
var initial_split = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39148__$1,new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),(50));
var splitter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39148__$1,new cljs.core.Keyword(null,"splitter-size","splitter-size",245247616),"8px");
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39148__$1,new cljs.core.Keyword(null,"margin","margin",-995903681),"8px");
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39148__$1,new cljs.core.Keyword(null,"document","document",-1329188687),document);
var container_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("h-split-");
var split_perc = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(parseInt(initial_split));
var dragging_QMARK_ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var over_QMARK_ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var stop_drag = (function (){
if(cljs.core.truth_(on_split_change)){
var G__39149_39167 = cljs.core.deref(split_perc);
(on_split_change.cljs$core$IFn$_invoke$arity$1 ? on_split_change.cljs$core$IFn$_invoke$arity$1(G__39149_39167) : on_split_change.call(null,G__39149_39167));
} else {
}

return cljs.core.reset_BANG_(dragging_QMARK_,false);
});
var calc_perc = (function (mouse_x){
var container = document.getElementById(container_id);
var offsets = re_frisk.ui.components.splits.sum_scroll_offsets(container);
var c_width = container.clientWidth;
var c_left_x = container.offsetLeft;
var relative_x = ((mouse_x - c_left_x) + new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(offsets));
return (100.0 * (relative_x / c_width));
});
var mousemove = (function (event){
return cljs.core.reset_BANG_(split_perc,calc_perc(event.clientX));
});
var mousedown = (function (event){
event.preventDefault();

return cljs.core.reset_BANG_(dragging_QMARK_,true);
});
var mouseover_split = (function (){
return cljs.core.reset_BANG_(over_QMARK_,true);
});
var mouseout_split = (function (){
return cljs.core.reset_BANG_(over_QMARK_,false);
});
var make_container_attrs = (function (class$,style,attr,in_drag_QMARK_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-h-split display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),container_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_frisk.ui.components.splits.flex_child_style(size),re_frisk.ui.components.splits.flex_flow_style("row nowrap"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),style], 0))], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (event){
stop_drag();

return null;
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (event){
stop_drag();

return null;
}),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),(function (event){
mousemove(event);

return null;
})], null):null),attr], 0));
});
var make_panel_attrs = (function (class$,in_drag_QMARK_,percentage){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_frisk.ui.components.splits.flex_child_style([cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage)," 1 0px"].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null):null)], 0))], null);
});
var make_splitter_attrs = (function (class$){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (event){
mousedown(event);

return null;
}),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (event){
mouseover_split();

return null;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (event){
mouseout_split();

return null;
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_frisk.ui.components.splits.flex_child_style(["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(splitter_size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"col-resize"], null),(cljs.core.truth_(cljs.core.deref(over_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f8f8f8"], null):null)], 0))], null);
});
return (function() { 
var G__39168__delegate = function (p__39151){
var map__39152 = p__39151;
var map__39152__$1 = cljs.core.__destructure_map(map__39152);
var _splitter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39152__$1,new cljs.core.Keyword(null,"_splitter-size","_splitter-size",-2092162822));
var panel_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39152__$1,new cljs.core.Keyword(null,"panel-2","panel-2",244198907));
var panel_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39152__$1,new cljs.core.Keyword(null,"panel-1","panel-1",998274139));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39152__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39152__$1,new cljs.core.Keyword(null,"_margin","_margin",1508241828));
var _on_split_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39152__$1,new cljs.core.Keyword(null,"_on-split-change","_on-split-change",1230437286));
var _width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39152__$1,new cljs.core.Keyword(null,"_width","_width",-75982426));
var _size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39152__$1,new cljs.core.Keyword(null,"_size","_size",-746489012));
var _height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39152__$1,new cljs.core.Keyword(null,"_height","_height",133867120));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39152__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _initial_split = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39152__$1,new cljs.core.Keyword(null,"_initial-split","_initial-split",2145793073));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39152__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_container_attrs(class$,style,attr,cljs.core.deref(dragging_QMARK_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs("rc-h-split-top",cljs.core.deref(dragging_QMARK_),cljs.core.deref(split_perc)),panel_1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_splitter_attrs("rc-h-split-splitter"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.splits.drag_handle,new cljs.core.Keyword(null,"vertical","vertical",718696748),cljs.core.deref(over_QMARK_)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs("rc-h-split-bottom",cljs.core.deref(dragging_QMARK_),((100) - cljs.core.deref(split_perc))),panel_2], null)], null);
};
var G__39168 = function (var_args){
var p__39151 = null;
if (arguments.length > 0) {
var G__39169__i = 0, G__39169__a = new Array(arguments.length -  0);
while (G__39169__i < G__39169__a.length) {G__39169__a[G__39169__i] = arguments[G__39169__i + 0]; ++G__39169__i;}
  p__39151 = new cljs.core.IndexedSeq(G__39169__a,0,null);
} 
return G__39168__delegate.call(this,p__39151);};
G__39168.cljs$lang$maxFixedArity = 0;
G__39168.cljs$lang$applyTo = (function (arglist__39170){
var p__39151 = cljs.core.seq(arglist__39170);
return G__39168__delegate(p__39151);
});
G__39168.cljs$core$IFn$_invoke$arity$variadic = G__39168__delegate;
return G__39168;
})()
;
}));

(re_frisk.ui.components.splits.h_split.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk.ui.components.splits.h_split.cljs$lang$applyTo = (function (seq39146){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39146));
}));

/**
 * Returns markup for a vertical layout component
 */
re_frisk.ui.components.splits.v_split = (function re_frisk$ui$components$splits$v_split(var_args){
var args__4835__auto__ = [];
var len__4829__auto___39171 = arguments.length;
var i__4830__auto___39172 = (0);
while(true){
if((i__4830__auto___39172 < len__4829__auto___39171)){
args__4835__auto__.push((arguments[i__4830__auto___39172]));

var G__39173 = (i__4830__auto___39172 + (1));
i__4830__auto___39172 = G__39173;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_frisk.ui.components.splits.v_split.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_frisk.ui.components.splits.v_split.cljs$core$IFn$_invoke$arity$variadic = (function (p__39154){
var map__39155 = p__39154;
var map__39155__$1 = cljs.core.__destructure_map(map__39155);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39155__$1,new cljs.core.Keyword(null,"size","size",1098693007),"auto");
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39155__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39155__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var on_split_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39155__$1,new cljs.core.Keyword(null,"on-split-change","on-split-change",-1635241917));
var initial_split = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39155__$1,new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),(50));
var splitter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39155__$1,new cljs.core.Keyword(null,"splitter-size","splitter-size",245247616),"8px");
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39155__$1,new cljs.core.Keyword(null,"margin","margin",-995903681),"8px");
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39155__$1,new cljs.core.Keyword(null,"document","document",-1329188687),document);
var container_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("v-split-");
var split_perc = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(parseInt(initial_split));
var dragging_QMARK_ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var over_QMARK_ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var stop_drag = (function (){
if(cljs.core.truth_(on_split_change)){
var G__39156_39175 = cljs.core.deref(split_perc);
(on_split_change.cljs$core$IFn$_invoke$arity$1 ? on_split_change.cljs$core$IFn$_invoke$arity$1(G__39156_39175) : on_split_change.call(null,G__39156_39175));
} else {
}

return cljs.core.reset_BANG_(dragging_QMARK_,false);
});
var calc_perc = (function (mouse_y){
var container = document.getElementById(container_id);
var offsets = re_frisk.ui.components.splits.sum_scroll_offsets(container);
var c_height = container.clientHeight;
var c_top_y = container.offsetTop;
var relative_y = ((mouse_y - c_top_y) + new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(offsets));
return (100.0 * (relative_y / c_height));
});
var mousemove = (function (event){
return cljs.core.reset_BANG_(split_perc,calc_perc(event.clientY));
});
var mousedown = (function (event){
event.preventDefault();

return cljs.core.reset_BANG_(dragging_QMARK_,true);
});
var mouseover_split = (function (){
return cljs.core.reset_BANG_(over_QMARK_,true);
});
var mouseout_split = (function (){
return cljs.core.reset_BANG_(over_QMARK_,false);
});
var make_container_attrs = (function (class$,style,attr,in_drag_QMARK_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-split display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),container_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_frisk.ui.components.splits.flex_child_style(size),re_frisk.ui.components.splits.flex_flow_style("column nowrap"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),style], 0))], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (event){
stop_drag();

return null;
}),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),(function (event){
mousemove(event);

return null;
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (event){
stop_drag();

return null;
})], null):null),attr], 0));
});
var make_panel_attrs = (function (class$,in_drag_QMARK_,percentage){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_frisk.ui.components.splits.flex_child_style([cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage)," 1 0px"].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null):null)], 0))], null);
});
var make_splitter_attrs = (function (class$){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (event){
mousedown(event);

return null;
}),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (event){
mouseover_split();

return null;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (event){
mouseout_split();

return null;
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_frisk.ui.components.splits.flex_child_style(["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(splitter_size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"row-resize"], null),(cljs.core.truth_(cljs.core.deref(over_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f8f8f8"], null):null)], 0))], null);
});
return (function() { 
var G__39176__delegate = function (p__39159){
var map__39160 = p__39159;
var map__39160__$1 = cljs.core.__destructure_map(map__39160);
var _splitter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39160__$1,new cljs.core.Keyword(null,"_splitter-size","_splitter-size",-2092162822));
var panel_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39160__$1,new cljs.core.Keyword(null,"panel-2","panel-2",244198907));
var panel_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39160__$1,new cljs.core.Keyword(null,"panel-1","panel-1",998274139));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39160__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39160__$1,new cljs.core.Keyword(null,"_margin","_margin",1508241828));
var open_bottom_split_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39160__$1,new cljs.core.Keyword(null,"open-bottom-split?","open-bottom-split?",953160965));
var _on_split_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39160__$1,new cljs.core.Keyword(null,"_on-split-change","_on-split-change",1230437286));
var _width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39160__$1,new cljs.core.Keyword(null,"_width","_width",-75982426));
var _size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39160__$1,new cljs.core.Keyword(null,"_size","_size",-746489012));
var close_bottom_split_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39160__$1,new cljs.core.Keyword(null,"close-bottom-split?","close-bottom-split?",1606756910));
var _height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39160__$1,new cljs.core.Keyword(null,"_height","_height",133867120));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39160__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _initial_split = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39160__$1,new cljs.core.Keyword(null,"_initial-split","_initial-split",2145793073));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39160__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var perc = (cljs.core.truth_(close_bottom_split_QMARK_)?"0":(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(split_perc),parseInt(initial_split));
if(and__4221__auto__){
return open_bottom_split_QMARK_;
} else {
return and__4221__auto__;
}
})())?"70":cljs.core.deref(split_perc)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_container_attrs(class$,style,attr,cljs.core.deref(dragging_QMARK_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs("re-v-split-top",cljs.core.deref(dragging_QMARK_),perc),panel_1], null),(cljs.core.truth_(close_bottom_split_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_splitter_attrs("re-v-split-splitter"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.splits.drag_handle,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),cljs.core.deref(over_QMARK_)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs("re-v-split-bottom",cljs.core.deref(dragging_QMARK_),((100) - perc)),panel_2], null)], null);
};
var G__39176 = function (var_args){
var p__39159 = null;
if (arguments.length > 0) {
var G__39177__i = 0, G__39177__a = new Array(arguments.length -  0);
while (G__39177__i < G__39177__a.length) {G__39177__a[G__39177__i] = arguments[G__39177__i + 0]; ++G__39177__i;}
  p__39159 = new cljs.core.IndexedSeq(G__39177__a,0,null);
} 
return G__39176__delegate.call(this,p__39159);};
G__39176.cljs$lang$maxFixedArity = 0;
G__39176.cljs$lang$applyTo = (function (arglist__39178){
var p__39159 = cljs.core.seq(arglist__39178);
return G__39176__delegate(p__39159);
});
G__39176.cljs$core$IFn$_invoke$arity$variadic = G__39176__delegate;
return G__39176;
})()
;
}));

(re_frisk.ui.components.splits.v_split.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk.ui.components.splits.v_split.cljs$lang$applyTo = (function (seq39153){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39153));
}));


//# sourceMappingURL=re_frisk.ui.components.splits.js.map
