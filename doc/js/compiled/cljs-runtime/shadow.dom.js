goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_40167 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_40167(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_40168 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_40168(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__39698 = coll;
var G__39699 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__39698,G__39699) : shadow.dom.lazy_native_coll_seq.call(null,G__39698,G__39699));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__39736 = arguments.length;
switch (G__39736) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__39740 = arguments.length;
switch (G__39740) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__39742 = arguments.length;
switch (G__39742) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__39747 = arguments.length;
switch (G__39747) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__39758 = arguments.length;
switch (G__39758) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__39761 = arguments.length;
switch (G__39761) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e39771){if((e39771 instanceof Object)){
var e = e39771;
return console.log("didnt support attachEvent",el,e);
} else {
throw e39771;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__39772 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__39773 = null;
var count__39774 = (0);
var i__39775 = (0);
while(true){
if((i__39775 < count__39774)){
var el = chunk__39773.cljs$core$IIndexed$_nth$arity$2(null,i__39775);
var handler_40177__$1 = ((function (seq__39772,chunk__39773,count__39774,i__39775,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39772,chunk__39773,count__39774,i__39775,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40177__$1);


var G__40178 = seq__39772;
var G__40179 = chunk__39773;
var G__40180 = count__39774;
var G__40181 = (i__39775 + (1));
seq__39772 = G__40178;
chunk__39773 = G__40179;
count__39774 = G__40180;
i__39775 = G__40181;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39772);
if(temp__5753__auto__){
var seq__39772__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39772__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39772__$1);
var G__40182 = cljs.core.chunk_rest(seq__39772__$1);
var G__40183 = c__4649__auto__;
var G__40184 = cljs.core.count(c__4649__auto__);
var G__40185 = (0);
seq__39772 = G__40182;
chunk__39773 = G__40183;
count__39774 = G__40184;
i__39775 = G__40185;
continue;
} else {
var el = cljs.core.first(seq__39772__$1);
var handler_40186__$1 = ((function (seq__39772,chunk__39773,count__39774,i__39775,el,seq__39772__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39772,chunk__39773,count__39774,i__39775,el,seq__39772__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40186__$1);


var G__40187 = cljs.core.next(seq__39772__$1);
var G__40188 = null;
var G__40189 = (0);
var G__40190 = (0);
seq__39772 = G__40187;
chunk__39773 = G__40188;
count__39774 = G__40189;
i__39775 = G__40190;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__39782 = arguments.length;
switch (G__39782) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__39788 = cljs.core.seq(events);
var chunk__39789 = null;
var count__39790 = (0);
var i__39791 = (0);
while(true){
if((i__39791 < count__39790)){
var vec__39799 = chunk__39789.cljs$core$IIndexed$_nth$arity$2(null,i__39791);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39799,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39799,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40194 = seq__39788;
var G__40195 = chunk__39789;
var G__40196 = count__39790;
var G__40197 = (i__39791 + (1));
seq__39788 = G__40194;
chunk__39789 = G__40195;
count__39790 = G__40196;
i__39791 = G__40197;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39788);
if(temp__5753__auto__){
var seq__39788__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39788__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39788__$1);
var G__40199 = cljs.core.chunk_rest(seq__39788__$1);
var G__40200 = c__4649__auto__;
var G__40201 = cljs.core.count(c__4649__auto__);
var G__40202 = (0);
seq__39788 = G__40199;
chunk__39789 = G__40200;
count__39790 = G__40201;
i__39791 = G__40202;
continue;
} else {
var vec__39802 = cljs.core.first(seq__39788__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39802,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39802,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40203 = cljs.core.next(seq__39788__$1);
var G__40204 = null;
var G__40205 = (0);
var G__40206 = (0);
seq__39788 = G__40203;
chunk__39789 = G__40204;
count__39790 = G__40205;
i__39791 = G__40206;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__39805 = cljs.core.seq(styles);
var chunk__39806 = null;
var count__39807 = (0);
var i__39808 = (0);
while(true){
if((i__39808 < count__39807)){
var vec__39815 = chunk__39806.cljs$core$IIndexed$_nth$arity$2(null,i__39808);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39815,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39815,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40208 = seq__39805;
var G__40209 = chunk__39806;
var G__40210 = count__39807;
var G__40211 = (i__39808 + (1));
seq__39805 = G__40208;
chunk__39806 = G__40209;
count__39807 = G__40210;
i__39808 = G__40211;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39805);
if(temp__5753__auto__){
var seq__39805__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39805__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39805__$1);
var G__40212 = cljs.core.chunk_rest(seq__39805__$1);
var G__40213 = c__4649__auto__;
var G__40214 = cljs.core.count(c__4649__auto__);
var G__40215 = (0);
seq__39805 = G__40212;
chunk__39806 = G__40213;
count__39807 = G__40214;
i__39808 = G__40215;
continue;
} else {
var vec__39818 = cljs.core.first(seq__39805__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39818,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39818,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40216 = cljs.core.next(seq__39805__$1);
var G__40217 = null;
var G__40218 = (0);
var G__40219 = (0);
seq__39805 = G__40216;
chunk__39806 = G__40217;
count__39807 = G__40218;
i__39808 = G__40219;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__39821_40220 = key;
var G__39821_40221__$1 = (((G__39821_40220 instanceof cljs.core.Keyword))?G__39821_40220.fqn:null);
switch (G__39821_40221__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_40225 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_40225,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_40225,"aria-");
}
})())){
el.setAttribute(ks_40225,value);
} else {
(el[ks_40225] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__39822){
var map__39823 = p__39822;
var map__39823__$1 = cljs.core.__destructure_map(map__39823);
var props = map__39823__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39823__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__39824 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39824,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39824,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39824,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__39827 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__39827,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__39827;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__39829 = arguments.length;
switch (G__39829) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__39830){
var vec__39831 = p__39830;
var seq__39832 = cljs.core.seq(vec__39831);
var first__39833 = cljs.core.first(seq__39832);
var seq__39832__$1 = cljs.core.next(seq__39832);
var nn = first__39833;
var first__39833__$1 = cljs.core.first(seq__39832__$1);
var seq__39832__$2 = cljs.core.next(seq__39832__$1);
var np = first__39833__$1;
var nc = seq__39832__$2;
var node = vec__39831;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39834 = nn;
var G__39835 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39834,G__39835) : create_fn.call(null,G__39834,G__39835));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39836 = nn;
var G__39837 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39836,G__39837) : create_fn.call(null,G__39836,G__39837));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__39838 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39838,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39838,(1),null);
var seq__39841_40227 = cljs.core.seq(node_children);
var chunk__39842_40228 = null;
var count__39843_40229 = (0);
var i__39844_40230 = (0);
while(true){
if((i__39844_40230 < count__39843_40229)){
var child_struct_40231 = chunk__39842_40228.cljs$core$IIndexed$_nth$arity$2(null,i__39844_40230);
var children_40232 = shadow.dom.dom_node(child_struct_40231);
if(cljs.core.seq_QMARK_(children_40232)){
var seq__39861_40233 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40232));
var chunk__39863_40234 = null;
var count__39864_40235 = (0);
var i__39865_40236 = (0);
while(true){
if((i__39865_40236 < count__39864_40235)){
var child_40237 = chunk__39863_40234.cljs$core$IIndexed$_nth$arity$2(null,i__39865_40236);
if(cljs.core.truth_(child_40237)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40237);


var G__40238 = seq__39861_40233;
var G__40239 = chunk__39863_40234;
var G__40240 = count__39864_40235;
var G__40241 = (i__39865_40236 + (1));
seq__39861_40233 = G__40238;
chunk__39863_40234 = G__40239;
count__39864_40235 = G__40240;
i__39865_40236 = G__40241;
continue;
} else {
var G__40242 = seq__39861_40233;
var G__40243 = chunk__39863_40234;
var G__40244 = count__39864_40235;
var G__40245 = (i__39865_40236 + (1));
seq__39861_40233 = G__40242;
chunk__39863_40234 = G__40243;
count__39864_40235 = G__40244;
i__39865_40236 = G__40245;
continue;
}
} else {
var temp__5753__auto___40246 = cljs.core.seq(seq__39861_40233);
if(temp__5753__auto___40246){
var seq__39861_40247__$1 = temp__5753__auto___40246;
if(cljs.core.chunked_seq_QMARK_(seq__39861_40247__$1)){
var c__4649__auto___40248 = cljs.core.chunk_first(seq__39861_40247__$1);
var G__40249 = cljs.core.chunk_rest(seq__39861_40247__$1);
var G__40250 = c__4649__auto___40248;
var G__40251 = cljs.core.count(c__4649__auto___40248);
var G__40252 = (0);
seq__39861_40233 = G__40249;
chunk__39863_40234 = G__40250;
count__39864_40235 = G__40251;
i__39865_40236 = G__40252;
continue;
} else {
var child_40253 = cljs.core.first(seq__39861_40247__$1);
if(cljs.core.truth_(child_40253)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40253);


var G__40254 = cljs.core.next(seq__39861_40247__$1);
var G__40255 = null;
var G__40256 = (0);
var G__40257 = (0);
seq__39861_40233 = G__40254;
chunk__39863_40234 = G__40255;
count__39864_40235 = G__40256;
i__39865_40236 = G__40257;
continue;
} else {
var G__40258 = cljs.core.next(seq__39861_40247__$1);
var G__40259 = null;
var G__40260 = (0);
var G__40261 = (0);
seq__39861_40233 = G__40258;
chunk__39863_40234 = G__40259;
count__39864_40235 = G__40260;
i__39865_40236 = G__40261;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40232);
}


var G__40262 = seq__39841_40227;
var G__40263 = chunk__39842_40228;
var G__40264 = count__39843_40229;
var G__40265 = (i__39844_40230 + (1));
seq__39841_40227 = G__40262;
chunk__39842_40228 = G__40263;
count__39843_40229 = G__40264;
i__39844_40230 = G__40265;
continue;
} else {
var temp__5753__auto___40266 = cljs.core.seq(seq__39841_40227);
if(temp__5753__auto___40266){
var seq__39841_40267__$1 = temp__5753__auto___40266;
if(cljs.core.chunked_seq_QMARK_(seq__39841_40267__$1)){
var c__4649__auto___40268 = cljs.core.chunk_first(seq__39841_40267__$1);
var G__40269 = cljs.core.chunk_rest(seq__39841_40267__$1);
var G__40270 = c__4649__auto___40268;
var G__40271 = cljs.core.count(c__4649__auto___40268);
var G__40272 = (0);
seq__39841_40227 = G__40269;
chunk__39842_40228 = G__40270;
count__39843_40229 = G__40271;
i__39844_40230 = G__40272;
continue;
} else {
var child_struct_40273 = cljs.core.first(seq__39841_40267__$1);
var children_40274 = shadow.dom.dom_node(child_struct_40273);
if(cljs.core.seq_QMARK_(children_40274)){
var seq__39867_40275 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40274));
var chunk__39869_40276 = null;
var count__39870_40277 = (0);
var i__39871_40278 = (0);
while(true){
if((i__39871_40278 < count__39870_40277)){
var child_40279 = chunk__39869_40276.cljs$core$IIndexed$_nth$arity$2(null,i__39871_40278);
if(cljs.core.truth_(child_40279)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40279);


var G__40280 = seq__39867_40275;
var G__40281 = chunk__39869_40276;
var G__40282 = count__39870_40277;
var G__40283 = (i__39871_40278 + (1));
seq__39867_40275 = G__40280;
chunk__39869_40276 = G__40281;
count__39870_40277 = G__40282;
i__39871_40278 = G__40283;
continue;
} else {
var G__40284 = seq__39867_40275;
var G__40285 = chunk__39869_40276;
var G__40286 = count__39870_40277;
var G__40287 = (i__39871_40278 + (1));
seq__39867_40275 = G__40284;
chunk__39869_40276 = G__40285;
count__39870_40277 = G__40286;
i__39871_40278 = G__40287;
continue;
}
} else {
var temp__5753__auto___40288__$1 = cljs.core.seq(seq__39867_40275);
if(temp__5753__auto___40288__$1){
var seq__39867_40289__$1 = temp__5753__auto___40288__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39867_40289__$1)){
var c__4649__auto___40290 = cljs.core.chunk_first(seq__39867_40289__$1);
var G__40291 = cljs.core.chunk_rest(seq__39867_40289__$1);
var G__40292 = c__4649__auto___40290;
var G__40293 = cljs.core.count(c__4649__auto___40290);
var G__40294 = (0);
seq__39867_40275 = G__40291;
chunk__39869_40276 = G__40292;
count__39870_40277 = G__40293;
i__39871_40278 = G__40294;
continue;
} else {
var child_40295 = cljs.core.first(seq__39867_40289__$1);
if(cljs.core.truth_(child_40295)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40295);


var G__40296 = cljs.core.next(seq__39867_40289__$1);
var G__40297 = null;
var G__40298 = (0);
var G__40299 = (0);
seq__39867_40275 = G__40296;
chunk__39869_40276 = G__40297;
count__39870_40277 = G__40298;
i__39871_40278 = G__40299;
continue;
} else {
var G__40300 = cljs.core.next(seq__39867_40289__$1);
var G__40301 = null;
var G__40302 = (0);
var G__40303 = (0);
seq__39867_40275 = G__40300;
chunk__39869_40276 = G__40301;
count__39870_40277 = G__40302;
i__39871_40278 = G__40303;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40274);
}


var G__40304 = cljs.core.next(seq__39841_40267__$1);
var G__40305 = null;
var G__40306 = (0);
var G__40307 = (0);
seq__39841_40227 = G__40304;
chunk__39842_40228 = G__40305;
count__39843_40229 = G__40306;
i__39844_40230 = G__40307;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__39876 = cljs.core.seq(node);
var chunk__39877 = null;
var count__39878 = (0);
var i__39879 = (0);
while(true){
if((i__39879 < count__39878)){
var n = chunk__39877.cljs$core$IIndexed$_nth$arity$2(null,i__39879);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40308 = seq__39876;
var G__40309 = chunk__39877;
var G__40310 = count__39878;
var G__40311 = (i__39879 + (1));
seq__39876 = G__40308;
chunk__39877 = G__40309;
count__39878 = G__40310;
i__39879 = G__40311;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39876);
if(temp__5753__auto__){
var seq__39876__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39876__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39876__$1);
var G__40312 = cljs.core.chunk_rest(seq__39876__$1);
var G__40313 = c__4649__auto__;
var G__40314 = cljs.core.count(c__4649__auto__);
var G__40315 = (0);
seq__39876 = G__40312;
chunk__39877 = G__40313;
count__39878 = G__40314;
i__39879 = G__40315;
continue;
} else {
var n = cljs.core.first(seq__39876__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40316 = cljs.core.next(seq__39876__$1);
var G__40317 = null;
var G__40318 = (0);
var G__40319 = (0);
seq__39876 = G__40316;
chunk__39877 = G__40317;
count__39878 = G__40318;
i__39879 = G__40319;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__39881 = arguments.length;
switch (G__39881) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__39883 = arguments.length;
switch (G__39883) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__39885 = arguments.length;
switch (G__39885) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___40325 = arguments.length;
var i__4830__auto___40326 = (0);
while(true){
if((i__4830__auto___40326 < len__4829__auto___40325)){
args__4835__auto__.push((arguments[i__4830__auto___40326]));

var G__40327 = (i__4830__auto___40326 + (1));
i__4830__auto___40326 = G__40327;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__39891_40328 = cljs.core.seq(nodes);
var chunk__39892_40329 = null;
var count__39893_40330 = (0);
var i__39894_40331 = (0);
while(true){
if((i__39894_40331 < count__39893_40330)){
var node_40332 = chunk__39892_40329.cljs$core$IIndexed$_nth$arity$2(null,i__39894_40331);
fragment.appendChild(shadow.dom._to_dom(node_40332));


var G__40333 = seq__39891_40328;
var G__40334 = chunk__39892_40329;
var G__40335 = count__39893_40330;
var G__40336 = (i__39894_40331 + (1));
seq__39891_40328 = G__40333;
chunk__39892_40329 = G__40334;
count__39893_40330 = G__40335;
i__39894_40331 = G__40336;
continue;
} else {
var temp__5753__auto___40337 = cljs.core.seq(seq__39891_40328);
if(temp__5753__auto___40337){
var seq__39891_40338__$1 = temp__5753__auto___40337;
if(cljs.core.chunked_seq_QMARK_(seq__39891_40338__$1)){
var c__4649__auto___40339 = cljs.core.chunk_first(seq__39891_40338__$1);
var G__40340 = cljs.core.chunk_rest(seq__39891_40338__$1);
var G__40341 = c__4649__auto___40339;
var G__40342 = cljs.core.count(c__4649__auto___40339);
var G__40343 = (0);
seq__39891_40328 = G__40340;
chunk__39892_40329 = G__40341;
count__39893_40330 = G__40342;
i__39894_40331 = G__40343;
continue;
} else {
var node_40344 = cljs.core.first(seq__39891_40338__$1);
fragment.appendChild(shadow.dom._to_dom(node_40344));


var G__40345 = cljs.core.next(seq__39891_40338__$1);
var G__40346 = null;
var G__40347 = (0);
var G__40348 = (0);
seq__39891_40328 = G__40345;
chunk__39892_40329 = G__40346;
count__39893_40330 = G__40347;
i__39894_40331 = G__40348;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq39890){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39890));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__39899_40349 = cljs.core.seq(scripts);
var chunk__39900_40350 = null;
var count__39901_40351 = (0);
var i__39902_40352 = (0);
while(true){
if((i__39902_40352 < count__39901_40351)){
var vec__39909_40353 = chunk__39900_40350.cljs$core$IIndexed$_nth$arity$2(null,i__39902_40352);
var script_tag_40354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39909_40353,(0),null);
var script_body_40355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39909_40353,(1),null);
eval(script_body_40355);


var G__40356 = seq__39899_40349;
var G__40357 = chunk__39900_40350;
var G__40358 = count__39901_40351;
var G__40359 = (i__39902_40352 + (1));
seq__39899_40349 = G__40356;
chunk__39900_40350 = G__40357;
count__39901_40351 = G__40358;
i__39902_40352 = G__40359;
continue;
} else {
var temp__5753__auto___40360 = cljs.core.seq(seq__39899_40349);
if(temp__5753__auto___40360){
var seq__39899_40361__$1 = temp__5753__auto___40360;
if(cljs.core.chunked_seq_QMARK_(seq__39899_40361__$1)){
var c__4649__auto___40362 = cljs.core.chunk_first(seq__39899_40361__$1);
var G__40363 = cljs.core.chunk_rest(seq__39899_40361__$1);
var G__40364 = c__4649__auto___40362;
var G__40365 = cljs.core.count(c__4649__auto___40362);
var G__40366 = (0);
seq__39899_40349 = G__40363;
chunk__39900_40350 = G__40364;
count__39901_40351 = G__40365;
i__39902_40352 = G__40366;
continue;
} else {
var vec__39912_40367 = cljs.core.first(seq__39899_40361__$1);
var script_tag_40368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39912_40367,(0),null);
var script_body_40369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39912_40367,(1),null);
eval(script_body_40369);


var G__40370 = cljs.core.next(seq__39899_40361__$1);
var G__40371 = null;
var G__40372 = (0);
var G__40373 = (0);
seq__39899_40349 = G__40370;
chunk__39900_40350 = G__40371;
count__39901_40351 = G__40372;
i__39902_40352 = G__40373;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__39915){
var vec__39916 = p__39915;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39916,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39916,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__39924 = arguments.length;
switch (G__39924) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__39925 = cljs.core.seq(style_keys);
var chunk__39926 = null;
var count__39927 = (0);
var i__39928 = (0);
while(true){
if((i__39928 < count__39927)){
var it = chunk__39926.cljs$core$IIndexed$_nth$arity$2(null,i__39928);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40377 = seq__39925;
var G__40378 = chunk__39926;
var G__40379 = count__39927;
var G__40380 = (i__39928 + (1));
seq__39925 = G__40377;
chunk__39926 = G__40378;
count__39927 = G__40379;
i__39928 = G__40380;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39925);
if(temp__5753__auto__){
var seq__39925__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39925__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39925__$1);
var G__40382 = cljs.core.chunk_rest(seq__39925__$1);
var G__40383 = c__4649__auto__;
var G__40384 = cljs.core.count(c__4649__auto__);
var G__40385 = (0);
seq__39925 = G__40382;
chunk__39926 = G__40383;
count__39927 = G__40384;
i__39928 = G__40385;
continue;
} else {
var it = cljs.core.first(seq__39925__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40386 = cljs.core.next(seq__39925__$1);
var G__40387 = null;
var G__40388 = (0);
var G__40389 = (0);
seq__39925 = G__40386;
chunk__39926 = G__40387;
count__39927 = G__40388;
i__39928 = G__40389;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k39930,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__39934 = k39930;
var G__39934__$1 = (((G__39934 instanceof cljs.core.Keyword))?G__39934.fqn:null);
switch (G__39934__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39930,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__39935){
var vec__39936 = p__39935;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39936,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39936,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39929){
var self__ = this;
var G__39929__$1 = this;
return (new cljs.core.RecordIter((0),G__39929__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39931,other39932){
var self__ = this;
var this39931__$1 = this;
return (((!((other39932 == null)))) && ((((this39931__$1.constructor === other39932.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39931__$1.x,other39932.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39931__$1.y,other39932.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39931__$1.__extmap,other39932.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k39930){
var self__ = this;
var this__4479__auto____$1 = this;
var G__39956 = k39930;
var G__39956__$1 = (((G__39956 instanceof cljs.core.Keyword))?G__39956.fqn:null);
switch (G__39956__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k39930);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__39929){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__39960 = cljs.core.keyword_identical_QMARK_;
var expr__39961 = k__4481__auto__;
if(cljs.core.truth_((pred__39960.cljs$core$IFn$_invoke$arity$2 ? pred__39960.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__39961) : pred__39960.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__39961)))){
return (new shadow.dom.Coordinate(G__39929,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39960.cljs$core$IFn$_invoke$arity$2 ? pred__39960.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__39961) : pred__39960.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__39961)))){
return (new shadow.dom.Coordinate(self__.x,G__39929,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__39929),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__39929){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__39929,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__39933){
var extmap__4512__auto__ = (function (){var G__39965 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39933,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__39933)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39965);
} else {
return G__39965;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__39933),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__39933),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k39970,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__39974 = k39970;
var G__39974__$1 = (((G__39974 instanceof cljs.core.Keyword))?G__39974.fqn:null);
switch (G__39974__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39970,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__39975){
var vec__39976 = p__39975;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39976,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39976,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39969){
var self__ = this;
var G__39969__$1 = this;
return (new cljs.core.RecordIter((0),G__39969__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39971,other39972){
var self__ = this;
var this39971__$1 = this;
return (((!((other39972 == null)))) && ((((this39971__$1.constructor === other39972.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39971__$1.w,other39972.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39971__$1.h,other39972.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39971__$1.__extmap,other39972.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k39970){
var self__ = this;
var this__4479__auto____$1 = this;
var G__39979 = k39970;
var G__39979__$1 = (((G__39979 instanceof cljs.core.Keyword))?G__39979.fqn:null);
switch (G__39979__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k39970);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__39969){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__39980 = cljs.core.keyword_identical_QMARK_;
var expr__39981 = k__4481__auto__;
if(cljs.core.truth_((pred__39980.cljs$core$IFn$_invoke$arity$2 ? pred__39980.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__39981) : pred__39980.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__39981)))){
return (new shadow.dom.Size(G__39969,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39980.cljs$core$IFn$_invoke$arity$2 ? pred__39980.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__39981) : pred__39980.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__39981)))){
return (new shadow.dom.Size(self__.w,G__39969,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__39969),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__39969){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__39969,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__39973){
var extmap__4512__auto__ = (function (){var G__39984 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39973,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__39973)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39984);
} else {
return G__39984;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__39973),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__39973),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__40408 = (i + (1));
var G__40409 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__40408;
ret = G__40409;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40015){
var vec__40016 = p__40015;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40016,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40016,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__40020 = arguments.length;
switch (G__40020) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__40416 = ps;
var G__40417 = (i + (1));
el__$1 = G__40416;
i = G__40417;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__40097 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40097,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40097,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40097,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__40101_40418 = cljs.core.seq(props);
var chunk__40102_40419 = null;
var count__40103_40420 = (0);
var i__40104_40421 = (0);
while(true){
if((i__40104_40421 < count__40103_40420)){
var vec__40111_40422 = chunk__40102_40419.cljs$core$IIndexed$_nth$arity$2(null,i__40104_40421);
var k_40423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40111_40422,(0),null);
var v_40424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40111_40422,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_40423);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40423),v_40424);


var G__40425 = seq__40101_40418;
var G__40426 = chunk__40102_40419;
var G__40427 = count__40103_40420;
var G__40428 = (i__40104_40421 + (1));
seq__40101_40418 = G__40425;
chunk__40102_40419 = G__40426;
count__40103_40420 = G__40427;
i__40104_40421 = G__40428;
continue;
} else {
var temp__5753__auto___40433 = cljs.core.seq(seq__40101_40418);
if(temp__5753__auto___40433){
var seq__40101_40434__$1 = temp__5753__auto___40433;
if(cljs.core.chunked_seq_QMARK_(seq__40101_40434__$1)){
var c__4649__auto___40435 = cljs.core.chunk_first(seq__40101_40434__$1);
var G__40436 = cljs.core.chunk_rest(seq__40101_40434__$1);
var G__40437 = c__4649__auto___40435;
var G__40438 = cljs.core.count(c__4649__auto___40435);
var G__40439 = (0);
seq__40101_40418 = G__40436;
chunk__40102_40419 = G__40437;
count__40103_40420 = G__40438;
i__40104_40421 = G__40439;
continue;
} else {
var vec__40114_40440 = cljs.core.first(seq__40101_40434__$1);
var k_40441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40114_40440,(0),null);
var v_40442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40114_40440,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_40441);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40441),v_40442);


var G__40443 = cljs.core.next(seq__40101_40434__$1);
var G__40444 = null;
var G__40445 = (0);
var G__40446 = (0);
seq__40101_40418 = G__40443;
chunk__40102_40419 = G__40444;
count__40103_40420 = G__40445;
i__40104_40421 = G__40446;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__40118 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40118,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40118,(1),null);
var seq__40121_40447 = cljs.core.seq(node_children);
var chunk__40123_40448 = null;
var count__40124_40449 = (0);
var i__40125_40450 = (0);
while(true){
if((i__40125_40450 < count__40124_40449)){
var child_struct_40451 = chunk__40123_40448.cljs$core$IIndexed$_nth$arity$2(null,i__40125_40450);
if((!((child_struct_40451 == null)))){
if(typeof child_struct_40451 === 'string'){
var text_40452 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40452),child_struct_40451].join(''));
} else {
var children_40453 = shadow.dom.svg_node(child_struct_40451);
if(cljs.core.seq_QMARK_(children_40453)){
var seq__40139_40454 = cljs.core.seq(children_40453);
var chunk__40141_40455 = null;
var count__40142_40456 = (0);
var i__40143_40457 = (0);
while(true){
if((i__40143_40457 < count__40142_40456)){
var child_40458 = chunk__40141_40455.cljs$core$IIndexed$_nth$arity$2(null,i__40143_40457);
if(cljs.core.truth_(child_40458)){
node.appendChild(child_40458);


var G__40459 = seq__40139_40454;
var G__40460 = chunk__40141_40455;
var G__40461 = count__40142_40456;
var G__40462 = (i__40143_40457 + (1));
seq__40139_40454 = G__40459;
chunk__40141_40455 = G__40460;
count__40142_40456 = G__40461;
i__40143_40457 = G__40462;
continue;
} else {
var G__40463 = seq__40139_40454;
var G__40464 = chunk__40141_40455;
var G__40465 = count__40142_40456;
var G__40466 = (i__40143_40457 + (1));
seq__40139_40454 = G__40463;
chunk__40141_40455 = G__40464;
count__40142_40456 = G__40465;
i__40143_40457 = G__40466;
continue;
}
} else {
var temp__5753__auto___40467 = cljs.core.seq(seq__40139_40454);
if(temp__5753__auto___40467){
var seq__40139_40468__$1 = temp__5753__auto___40467;
if(cljs.core.chunked_seq_QMARK_(seq__40139_40468__$1)){
var c__4649__auto___40469 = cljs.core.chunk_first(seq__40139_40468__$1);
var G__40470 = cljs.core.chunk_rest(seq__40139_40468__$1);
var G__40471 = c__4649__auto___40469;
var G__40472 = cljs.core.count(c__4649__auto___40469);
var G__40473 = (0);
seq__40139_40454 = G__40470;
chunk__40141_40455 = G__40471;
count__40142_40456 = G__40472;
i__40143_40457 = G__40473;
continue;
} else {
var child_40474 = cljs.core.first(seq__40139_40468__$1);
if(cljs.core.truth_(child_40474)){
node.appendChild(child_40474);


var G__40475 = cljs.core.next(seq__40139_40468__$1);
var G__40476 = null;
var G__40477 = (0);
var G__40478 = (0);
seq__40139_40454 = G__40475;
chunk__40141_40455 = G__40476;
count__40142_40456 = G__40477;
i__40143_40457 = G__40478;
continue;
} else {
var G__40479 = cljs.core.next(seq__40139_40468__$1);
var G__40480 = null;
var G__40481 = (0);
var G__40482 = (0);
seq__40139_40454 = G__40479;
chunk__40141_40455 = G__40480;
count__40142_40456 = G__40481;
i__40143_40457 = G__40482;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40453);
}
}


var G__40486 = seq__40121_40447;
var G__40487 = chunk__40123_40448;
var G__40488 = count__40124_40449;
var G__40489 = (i__40125_40450 + (1));
seq__40121_40447 = G__40486;
chunk__40123_40448 = G__40487;
count__40124_40449 = G__40488;
i__40125_40450 = G__40489;
continue;
} else {
var G__40490 = seq__40121_40447;
var G__40491 = chunk__40123_40448;
var G__40492 = count__40124_40449;
var G__40493 = (i__40125_40450 + (1));
seq__40121_40447 = G__40490;
chunk__40123_40448 = G__40491;
count__40124_40449 = G__40492;
i__40125_40450 = G__40493;
continue;
}
} else {
var temp__5753__auto___40494 = cljs.core.seq(seq__40121_40447);
if(temp__5753__auto___40494){
var seq__40121_40495__$1 = temp__5753__auto___40494;
if(cljs.core.chunked_seq_QMARK_(seq__40121_40495__$1)){
var c__4649__auto___40496 = cljs.core.chunk_first(seq__40121_40495__$1);
var G__40497 = cljs.core.chunk_rest(seq__40121_40495__$1);
var G__40498 = c__4649__auto___40496;
var G__40499 = cljs.core.count(c__4649__auto___40496);
var G__40500 = (0);
seq__40121_40447 = G__40497;
chunk__40123_40448 = G__40498;
count__40124_40449 = G__40499;
i__40125_40450 = G__40500;
continue;
} else {
var child_struct_40501 = cljs.core.first(seq__40121_40495__$1);
if((!((child_struct_40501 == null)))){
if(typeof child_struct_40501 === 'string'){
var text_40502 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40502),child_struct_40501].join(''));
} else {
var children_40503 = shadow.dom.svg_node(child_struct_40501);
if(cljs.core.seq_QMARK_(children_40503)){
var seq__40145_40504 = cljs.core.seq(children_40503);
var chunk__40147_40505 = null;
var count__40148_40506 = (0);
var i__40149_40507 = (0);
while(true){
if((i__40149_40507 < count__40148_40506)){
var child_40508 = chunk__40147_40505.cljs$core$IIndexed$_nth$arity$2(null,i__40149_40507);
if(cljs.core.truth_(child_40508)){
node.appendChild(child_40508);


var G__40509 = seq__40145_40504;
var G__40510 = chunk__40147_40505;
var G__40511 = count__40148_40506;
var G__40512 = (i__40149_40507 + (1));
seq__40145_40504 = G__40509;
chunk__40147_40505 = G__40510;
count__40148_40506 = G__40511;
i__40149_40507 = G__40512;
continue;
} else {
var G__40513 = seq__40145_40504;
var G__40514 = chunk__40147_40505;
var G__40515 = count__40148_40506;
var G__40516 = (i__40149_40507 + (1));
seq__40145_40504 = G__40513;
chunk__40147_40505 = G__40514;
count__40148_40506 = G__40515;
i__40149_40507 = G__40516;
continue;
}
} else {
var temp__5753__auto___40517__$1 = cljs.core.seq(seq__40145_40504);
if(temp__5753__auto___40517__$1){
var seq__40145_40518__$1 = temp__5753__auto___40517__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40145_40518__$1)){
var c__4649__auto___40519 = cljs.core.chunk_first(seq__40145_40518__$1);
var G__40520 = cljs.core.chunk_rest(seq__40145_40518__$1);
var G__40521 = c__4649__auto___40519;
var G__40522 = cljs.core.count(c__4649__auto___40519);
var G__40523 = (0);
seq__40145_40504 = G__40520;
chunk__40147_40505 = G__40521;
count__40148_40506 = G__40522;
i__40149_40507 = G__40523;
continue;
} else {
var child_40524 = cljs.core.first(seq__40145_40518__$1);
if(cljs.core.truth_(child_40524)){
node.appendChild(child_40524);


var G__40525 = cljs.core.next(seq__40145_40518__$1);
var G__40526 = null;
var G__40527 = (0);
var G__40528 = (0);
seq__40145_40504 = G__40525;
chunk__40147_40505 = G__40526;
count__40148_40506 = G__40527;
i__40149_40507 = G__40528;
continue;
} else {
var G__40529 = cljs.core.next(seq__40145_40518__$1);
var G__40530 = null;
var G__40531 = (0);
var G__40532 = (0);
seq__40145_40504 = G__40529;
chunk__40147_40505 = G__40530;
count__40148_40506 = G__40531;
i__40149_40507 = G__40532;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40503);
}
}


var G__40533 = cljs.core.next(seq__40121_40495__$1);
var G__40534 = null;
var G__40535 = (0);
var G__40536 = (0);
seq__40121_40447 = G__40533;
chunk__40123_40448 = G__40534;
count__40124_40449 = G__40535;
i__40125_40450 = G__40536;
continue;
} else {
var G__40537 = cljs.core.next(seq__40121_40495__$1);
var G__40538 = null;
var G__40539 = (0);
var G__40540 = (0);
seq__40121_40447 = G__40537;
chunk__40123_40448 = G__40538;
count__40124_40449 = G__40539;
i__40125_40450 = G__40540;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___40544 = arguments.length;
var i__4830__auto___40545 = (0);
while(true){
if((i__4830__auto___40545 < len__4829__auto___40544)){
args__4835__auto__.push((arguments[i__4830__auto___40545]));

var G__40546 = (i__4830__auto___40545 + (1));
i__4830__auto___40545 = G__40546;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq40151){
var G__40152 = cljs.core.first(seq40151);
var seq40151__$1 = cljs.core.next(seq40151);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40152,seq40151__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__40154 = arguments.length;
switch (G__40154) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__36291__auto___40548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_40159){
var state_val_40160 = (state_40159[(1)]);
if((state_val_40160 === (1))){
var state_40159__$1 = state_40159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40159__$1,(2),once_or_cleanup);
} else {
if((state_val_40160 === (2))){
var inst_40156 = (state_40159[(2)]);
var inst_40157 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_40159__$1 = (function (){var statearr_40161 = state_40159;
(statearr_40161[(7)] = inst_40156);

return statearr_40161;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40159__$1,inst_40157);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__36197__auto__ = null;
var shadow$dom$state_machine__36197__auto____0 = (function (){
var statearr_40162 = [null,null,null,null,null,null,null,null];
(statearr_40162[(0)] = shadow$dom$state_machine__36197__auto__);

(statearr_40162[(1)] = (1));

return statearr_40162;
});
var shadow$dom$state_machine__36197__auto____1 = (function (state_40159){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_40159);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e40163){var ex__36200__auto__ = e40163;
var statearr_40164_40552 = state_40159;
(statearr_40164_40552[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_40159[(4)]))){
var statearr_40165_40553 = state_40159;
(statearr_40165_40553[(1)] = cljs.core.first((state_40159[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40554 = state_40159;
state_40159 = G__40554;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
shadow$dom$state_machine__36197__auto__ = function(state_40159){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__36197__auto____0.call(this);
case 1:
return shadow$dom$state_machine__36197__auto____1.call(this,state_40159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__36197__auto____0;
shadow$dom$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__36197__auto____1;
return shadow$dom$state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_40166 = f__36292__auto__();
(statearr_40166[(6)] = c__36291__auto___40548);

return statearr_40166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
