goog.provide('re_com.typeahead');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__38141){
var map__38143 = p__38141;
var map__38143__$1 = cljs.core.__destructure_map(map__38143);
var args = map__38143__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38143__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38143__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38143__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38143__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38143__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38143__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38143__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38143__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value(model);
var G__38149 = (function (){var c_input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__4223__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,(re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2(c_input,debounce_delay) : re_com.typeahead.debounce.call(null,c_input,debounce_delay)),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value(model),re_com.util.deref_or_value(model)]);
})();
if(cljs.core.truth_(external_model_value)){
return (re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2(G__38149,external_model_value) : re_com.typeahead.display_suggestion.call(null,G__38149,external_model_value));
} else {
return G__38149;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__38156,event){
var map__38157 = p__38156;
var map__38157__$1 = cljs.core.__destructure_map(map__38157);
var state = map__38157__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38157__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38157__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38157__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value(immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value(rigid_QMARK_);
var G__38182 = event;
var G__38182__$1 = (((G__38182 instanceof cljs.core.Keyword))?G__38182.fqn:null);
switch (G__38182__$1) {
case "input-text-blurred":
var and__4221__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(rigid_QMARK___$1);
} else {
return and__4221__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
case "input-text-changed":
var and__4221__auto__ = cljs.core.not(rigid_QMARK___$1);
if(and__4221__auto__){
var or__4223__auto__ = cljs.core.not(change_on_blur_QMARK___$1);
if(or__4223__auto__){
return or__4223__auto__;
} else {
return immediate_model_update_QMARK___$1;
}
} else {
return and__4221__auto__;
}

break;
default:
return false;

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__38190,event){
var map__38192 = p__38190;
var map__38192__$1 = cljs.core.__destructure_map(map__38192);
var state = map__38192__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38192__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var G__38195 = event;
var G__38195__$1 = (((G__38195 instanceof cljs.core.Keyword))?G__38195.fqn:null);
switch (G__38195__$1) {
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__38200,new_value){
var map__38201 = p__38200;
var map__38201__$1 = cljs.core.__destructure_map(map__38201);
var state = map__38201__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38201__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__38205,suggestion){
var map__38207 = p__38205;
var map__38207__$1 = cljs.core.__destructure_map(map__38207);
var state = map__38207__$1;
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38207__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = (suggestion_to_string.cljs$core$IFn$_invoke$arity$1 ? suggestion_to_string.cljs$core$IFn$_invoke$arity$1(suggestion) : suggestion_to_string.call(null,suggestion));
var G__38209 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__38209,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true], 0));
} else {
return G__38209;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728)], 0));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__38240,index){
var map__38242 = p__38240;
var map__38242__$1 = cljs.core.__destructure_map(map__38242);
var state = map__38242__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38242__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
var G__38244 = state;
var G__38244__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38244,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__38244__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model(G__38244__$1,suggestion):G__38244__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion(G__38244__$2,suggestion);
} else {
return G__38244__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__38251,index){
var map__38253 = p__38251;
var map__38253__$1 = cljs.core.__destructure_map(map__38253);
var state = map__38253__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38253__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(re_com.typeahead.activate_suggestion_by_index(state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__38259){
var map__38269 = p__38259;
var map__38269__$1 = cljs.core.__destructure_map(map__38269);
var state = map__38269__$1;
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38269__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__38270 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index(G__38270,suggestion_active_index);
} else {
return G__38270;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod((count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__38278){
var map__38279 = p__38278;
var map__38279__$1 = cljs.core.__destructure_map(map__38279);
var state = map__38279__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38279__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38279__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__38280 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__38280,re_com.typeahead.wrap(((function (){var or__4223__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count(suggestions)));
} else {
return G__38280;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__38284){
var map__38285 = p__38284;
var map__38285__$1 = cljs.core.__destructure_map(map__38285);
var state = map__38285__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38285__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38285__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__38287 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__38287,re_com.typeahead.wrap(((function (){var or__4223__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count(suggestions)));
} else {
return G__38287;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__38316 = state;
var G__38316__$1 = re_com.typeahead.clear_suggestions(G__38316)
;
var G__38316__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__38316__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__38316__$2,null);
} else {
return G__38316__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null], 0));
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__38317){
var map__38318 = p__38317;
var map__38318__$1 = cljs.core.__destructure_map(map__38318);
var state = map__38318__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38318__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38318__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38318__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.not(displaying_suggestion_QMARK_);
if(and__4221__auto__){
return re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__4221__auto__;
}
})())){
return re_com.typeahead.update_model(state,input_text);
} else {
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),input_text));

}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.reset_typeahead(state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(state,new_value),new_value),new cljs.core.Keyword(null,"external-model","external-model",506095421),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5751__auto__ = (function (){var G__38359 = text;
var G__38360 = (function (p1__38330_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,p1__38330_SHARP_);
});
return (data_source.cljs$core$IFn$_invoke$arity$2 ? data_source.cljs$core$IFn$_invoke$arity$2(G__38359,G__38360) : data_source.call(null,G__38359,G__38360));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var return_value = temp__5751__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__36291__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_38389){
var state_val_38390 = (state_38389[(1)]);
if((state_val_38390 === (1))){
var state_38389__$1 = state_38389;
var statearr_38395_38791 = state_38389__$1;
(statearr_38395_38791[(2)] = null);

(statearr_38395_38791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38390 === (2))){
var state_38389__$1 = state_38389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38389__$1,(4),c_search);
} else {
if((state_val_38390 === (3))){
var inst_38386 = (state_38389[(2)]);
var state_38389__$1 = state_38389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38389__$1,inst_38386);
} else {
if((state_val_38390 === (4))){
var inst_38372 = (state_38389[(7)]);
var inst_38372__$1 = (state_38389[(2)]);
var inst_38373 = cljs.core.deref(state_atom);
var inst_38374 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_38373);
var inst_38375 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",inst_38372__$1);
var state_38389__$1 = (function (){var statearr_38400 = state_38389;
(statearr_38400[(7)] = inst_38372__$1);

(statearr_38400[(8)] = inst_38374);

return statearr_38400;
})();
if(inst_38375){
var statearr_38401_38794 = state_38389__$1;
(statearr_38401_38794[(1)] = (5));

} else {
var statearr_38414_38795 = state_38389__$1;
(statearr_38414_38795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38390 === (5))){
var inst_38374 = (state_38389[(8)]);
var inst_38377 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
var inst_38378 = re_com.typeahead.search_data_source_BANG_(inst_38374,state_atom,"");
var state_38389__$1 = (function (){var statearr_38415 = state_38389;
(statearr_38415[(9)] = inst_38377);

return statearr_38415;
})();
var statearr_38416_38823 = state_38389__$1;
(statearr_38416_38823[(2)] = inst_38378);

(statearr_38416_38823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38390 === (6))){
var inst_38372 = (state_38389[(7)]);
var inst_38374 = (state_38389[(8)]);
var inst_38380 = re_com.typeahead.search_data_source_BANG_(inst_38374,state_atom,inst_38372);
var state_38389__$1 = state_38389;
var statearr_38417_38824 = state_38389__$1;
(statearr_38417_38824[(2)] = inst_38380);

(statearr_38417_38824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38390 === (7))){
var inst_38382 = (state_38389[(2)]);
var state_38389__$1 = (function (){var statearr_38418 = state_38389;
(statearr_38418[(10)] = inst_38382);

return statearr_38418;
})();
var statearr_38419_38825 = state_38389__$1;
(statearr_38419_38825[(2)] = null);

(statearr_38419_38825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__36197__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__36197__auto____0 = (function (){
var statearr_38420 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38420[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__36197__auto__);

(statearr_38420[(1)] = (1));

return statearr_38420;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__36197__auto____1 = (function (state_38389){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_38389);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e38421){var ex__36200__auto__ = e38421;
var statearr_38422_38826 = state_38389;
(statearr_38422_38826[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_38389[(4)]))){
var statearr_38423_38827 = state_38389;
(statearr_38423_38827[(1)] = cljs.core.first((state_38389[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38828 = state_38389;
state_38389 = G__38828;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__36197__auto__ = function(state_38389){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__36197__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__36197__auto____1.call(this,state_38389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__36197__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__36197__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_38425 = f__36292__auto__();
(statearr_38425[(6)] = c__36291__auto__);

return statearr_38425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));

return c__36291__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__38433 = cljs.core.deref(state_atom);
var map__38433__$1 = cljs.core.__destructure_map(map__38433);
var state = map__38433__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38433__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38433__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c_input,new_text);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (p1__38428_SHARP_){
var G__38437 = p1__38428_SHARP_;
var G__38437__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__38437,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__38437__$1,new_text);
} else {
return G__38437__$1;
}
}));
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__38447 = cljs.core._EQ_;
var expr__38448 = event.which;
if(cljs.core.truth_((pred__38447.cljs$core$IFn$_invoke$arity$2 ? pred__38447.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.UP,expr__38448) : pred__38447.call(null,goog.events.KeyCodes.UP,expr__38448)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_((pred__38447.cljs$core$IFn$_invoke$arity$2 ? pred__38447.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.DOWN,expr__38448) : pred__38447.call(null,goog.events.KeyCodes.DOWN,expr__38448)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_((pred__38447.cljs$core$IFn$_invoke$arity$2 ? pred__38447.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ENTER,expr__38448) : pred__38447.call(null,goog.events.KeyCodes.ENTER,expr__38448)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_((pred__38447.cljs$core$IFn$_invoke$arity$2 ? pred__38447.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ESC,expr__38448) : pred__38447.call(null,goog.events.KeyCodes.ESC,expr__38448)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_((pred__38447.cljs$core$IFn$_invoke$arity$2 ? pred__38447.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.TAB,expr__38448) : pred__38447.call(null,goog.events.KeyCodes.TAB,expr__38448)))){
if(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"update model with currently entered text on every keystroke (similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," but no changes to model if mouse is over suggestions)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"after receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"when a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"the outer container"], null),", rather than the textbox)"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38829 = arguments.length;
var i__4830__auto___38830 = (0);
while(true){
if((i__4830__auto___38830 < len__4829__auto___38829)){
args__4835__auto__.push((arguments[i__4830__auto___38830]));

var G__38831 = (i__4830__auto___38830 + (1));
i__4830__auto___38830 = G__38831;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__38479){
var map__38480 = p__38479;
var map__38480__$1 = cljs.core.__destructure_map(map__38480);
var args = map__38480__$1;
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__38482 = re_com.typeahead.make_typeahead_state(args);
var map__38482__$1 = cljs.core.__destructure_map(map__38482);
var state = map__38482__$1;
var c_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var input_text_model = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_(state_atom,c_search);

return (function() { 
var G__38835__delegate = function (p__38485){
var map__38488 = p__38485;
var map__38488__$1 = cljs.core.__destructure_map(map__38488);
var args__$1 = map__38488__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38488__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38488__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38488__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38488__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38488__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38488__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38488__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38488__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38488__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38488__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38488__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38488__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38488__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38488__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38488__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38488__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var _immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38488__$1,new cljs.core.Keyword(null,"_immediate-model-update?","_immediate-model-update?",1035374450));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38488__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38488__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__38492 = cljs.core.deref(state_atom);
var map__38492__$1 = cljs.core.__destructure_map(map__38492);
var state__$1 = map__38492__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38492__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38492__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38492__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38492__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value(model);
var width__$1 = (function (){var or__4223__auto__ = width;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_data_source,data_source)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(latest_external_model,external_model)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead",new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_key_down_BANG_,state_atom),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
})], null)], null),(cljs.core.truth_((function (){var or__4223__auto__ = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4622__auto__ = (function re_com$typeahead$iter__38494(s__38495){
return (new cljs.core.LazySeq(null,(function (){
var s__38495__$1 = s__38495;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__38495__$1);
if(temp__5753__auto__){
var s__38495__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38495__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__38495__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__38497 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__38496 = (0);
while(true){
if((i__38496 < size__4621__auto__)){
var vec__38499 = cljs.core._nth(c__4620__auto__,i__38496);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38499,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38499,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
cljs.core.chunk_append(b__38497,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__38496,selected_QMARK_,vec__38499,i,s,c__4620__auto__,size__4621__auto__,b__38497,s__38495__$2,temp__5753__auto__,map__38492,map__38492__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__38488,map__38488__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__38482,map__38482__$1,state,c_search,c_input,state_atom,input_text_model,map__38480,map__38480__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__38496,selected_QMARK_,vec__38499,i,s,c__4620__auto__,size__4621__auto__,b__38497,s__38495__$2,temp__5753__auto__,map__38492,map__38492__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__38488,map__38488__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__38482,map__38482__$1,state,c_search,c_input,state_atom,input_text_model,map__38480,map__38480__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__38496,selected_QMARK_,vec__38499,i,s,c__4620__auto__,size__4621__auto__,b__38497,s__38495__$2,temp__5753__auto__,map__38492,map__38492__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__38488,map__38488__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__38482,map__38482__$1,state,c_search,c_input,state_atom,input_text_model,map__38480,map__38480__$1,args){
return (function (p1__38473_SHARP_){
p1__38473_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__38496,selected_QMARK_,vec__38499,i,s,c__4620__auto__,size__4621__auto__,b__38497,s__38495__$2,temp__5753__auto__,map__38492,map__38492__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__38488,map__38488__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__38482,map__38482__$1,state,c_search,c_input,state_atom,input_text_model,map__38480,map__38480__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__38851 = (i__38496 + (1));
i__38496 = G__38851;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38497),re_com$typeahead$iter__38494(cljs.core.chunk_rest(s__38495__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38497),null);
}
} else {
var vec__38509 = cljs.core.first(s__38495__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38509,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38509,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__38509,i,s,s__38495__$2,temp__5753__auto__,map__38492,map__38492__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__38488,map__38488__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__38482,map__38482__$1,state,c_search,c_input,state_atom,input_text_model,map__38480,map__38480__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__38509,i,s,s__38495__$2,temp__5753__auto__,map__38492,map__38492__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__38488,map__38488__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__38482,map__38482__$1,state,c_search,c_input,state_atom,input_text_model,map__38480,map__38480__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__38509,i,s,s__38495__$2,temp__5753__auto__,map__38492,map__38492__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__38488,map__38488__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__38482,map__38482__$1,state,c_search,c_input,state_atom,input_text_model,map__38480,map__38480__$1,args){
return (function (p1__38473_SHARP_){
p1__38473_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__38509,i,s,s__38495__$2,temp__5753__auto__,map__38492,map__38492__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__38488,map__38488__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__38482,map__38482__$1,state,c_search,c_input,state_atom,input_text_model,map__38480,map__38480__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__38494(cljs.core.rest(s__38495__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__38835 = function (var_args){
var p__38485 = null;
if (arguments.length > 0) {
var G__38852__i = 0, G__38852__a = new Array(arguments.length -  0);
while (G__38852__i < G__38852__a.length) {G__38852__a[G__38852__i] = arguments[G__38852__i + 0]; ++G__38852__i;}
  p__38485 = new cljs.core.IndexedSeq(G__38852__a,0,null);
} 
return G__38835__delegate.call(this,p__38485);};
G__38835.cljs$lang$maxFixedArity = 0;
G__38835.cljs$lang$applyTo = (function (arglist__38853){
var p__38485 = cljs.core.seq(arglist__38853);
return G__38835__delegate(p__38485);
});
G__38835.cljs$core$IFn$_invoke$arity$variadic = G__38835__delegate;
return G__38835;
})()
;
}));

(re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq38474){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38474));
}));

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__36291__auto___38854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_38614){
var state_val_38615 = (state_38614[(1)]);
if((state_val_38615 === (7))){
var inst_38557 = (state_38614[(2)]);
var state_38614__$1 = state_38614;
var statearr_38619_38855 = state_38614__$1;
(statearr_38619_38855[(2)] = inst_38557);

(statearr_38619_38855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38615 === (1))){
var inst_38548 = null;
var state_38614__$1 = (function (){var statearr_38622 = state_38614;
(statearr_38622[(7)] = inst_38548);

return statearr_38622;
})();
var statearr_38623_38856 = state_38614__$1;
(statearr_38623_38856[(2)] = null);

(statearr_38623_38856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38615 === (4))){
var state_38614__$1 = state_38614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38614__$1,(7),in$);
} else {
if((state_val_38615 === (15))){
var inst_38597 = (state_38614[(2)]);
var state_38614__$1 = (function (){var statearr_38626 = state_38614;
(statearr_38626[(8)] = inst_38597);

return statearr_38626;
})();
var statearr_38627_38857 = state_38614__$1;
(statearr_38627_38857[(2)] = null);

(statearr_38627_38857[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38615 === (13))){
var inst_38584 = (state_38614[(9)]);
var inst_38599 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38584,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_38614__$1 = state_38614;
if(inst_38599){
var statearr_38630_38858 = state_38614__$1;
(statearr_38630_38858[(1)] = (16));

} else {
var statearr_38632_38859 = state_38614__$1;
(statearr_38632_38859[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38615 === (6))){
var inst_38562 = (state_38614[(10)]);
var inst_38576 = (state_38614[(11)]);
var inst_38560 = (state_38614[(2)]);
var inst_38562__$1 = cljs.core.async.timeout(ms);
var inst_38576__$1 = in$;
var inst_38578 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38579 = [inst_38576__$1,inst_38562__$1];
var inst_38580 = (new cljs.core.PersistentVector(null,2,(5),inst_38578,inst_38579,null));
var state_38614__$1 = (function (){var statearr_38634 = state_38614;
(statearr_38634[(10)] = inst_38562__$1);

(statearr_38634[(12)] = inst_38560);

(statearr_38634[(11)] = inst_38576__$1);

return statearr_38634;
})();
return cljs.core.async.ioc_alts_BANG_(state_38614__$1,(8),inst_38580);
} else {
if((state_val_38615 === (17))){
var state_38614__$1 = state_38614;
var statearr_38637_38860 = state_38614__$1;
(statearr_38637_38860[(2)] = null);

(statearr_38637_38860[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38615 === (3))){
var inst_38611 = (state_38614[(2)]);
var state_38614__$1 = state_38614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38614__$1,inst_38611);
} else {
if((state_val_38615 === (12))){
var inst_38560 = (state_38614[(12)]);
var state_38614__$1 = state_38614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38614__$1,(15),out,inst_38560);
} else {
if((state_val_38615 === (2))){
var inst_38548 = (state_38614[(7)]);
var inst_38552 = (inst_38548 == null);
var state_38614__$1 = state_38614;
if(cljs.core.truth_(inst_38552)){
var statearr_38641_38861 = state_38614__$1;
(statearr_38641_38861[(1)] = (4));

} else {
var statearr_38642_38862 = state_38614__$1;
(statearr_38642_38862[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38615 === (11))){
var inst_38608 = (state_38614[(2)]);
var inst_38548 = inst_38608;
var state_38614__$1 = (function (){var statearr_38644 = state_38614;
(statearr_38644[(7)] = inst_38548);

return statearr_38644;
})();
var statearr_38645_38863 = state_38614__$1;
(statearr_38645_38863[(2)] = null);

(statearr_38645_38863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38615 === (9))){
var inst_38582 = (state_38614[(13)]);
var inst_38591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38582,(0),null);
var inst_38592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38582,(1),null);
var state_38614__$1 = (function (){var statearr_38649 = state_38614;
(statearr_38649[(14)] = inst_38592);

return statearr_38649;
})();
var statearr_38650_38864 = state_38614__$1;
(statearr_38650_38864[(2)] = inst_38591);

(statearr_38650_38864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38615 === (5))){
var inst_38548 = (state_38614[(7)]);
var state_38614__$1 = state_38614;
var statearr_38652_38867 = state_38614__$1;
(statearr_38652_38867[(2)] = inst_38548);

(statearr_38652_38867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38615 === (14))){
var inst_38606 = (state_38614[(2)]);
var state_38614__$1 = state_38614;
var statearr_38654_38868 = state_38614__$1;
(statearr_38654_38868[(2)] = inst_38606);

(statearr_38654_38868[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38615 === (16))){
var inst_38583 = (state_38614[(15)]);
var state_38614__$1 = state_38614;
var statearr_38679_38869 = state_38614__$1;
(statearr_38679_38869[(2)] = inst_38583);

(statearr_38679_38869[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38615 === (10))){
var inst_38562 = (state_38614[(10)]);
var inst_38584 = (state_38614[(9)]);
var inst_38594 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38584,inst_38562);
var state_38614__$1 = state_38614;
if(inst_38594){
var statearr_38680_38870 = state_38614__$1;
(statearr_38680_38870[(1)] = (12));

} else {
var statearr_38681_38871 = state_38614__$1;
(statearr_38681_38871[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38615 === (18))){
var inst_38604 = (state_38614[(2)]);
var state_38614__$1 = state_38614;
var statearr_38682_38872 = state_38614__$1;
(statearr_38682_38872[(2)] = inst_38604);

(statearr_38682_38872[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38615 === (8))){
var inst_38582 = (state_38614[(13)]);
var inst_38576 = (state_38614[(11)]);
var inst_38584 = (state_38614[(9)]);
var inst_38582__$1 = (state_38614[(2)]);
var inst_38583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38582__$1,(0),null);
var inst_38584__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38582__$1,(1),null);
var inst_38585 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38584__$1,inst_38576);
var state_38614__$1 = (function (){var statearr_38683 = state_38614;
(statearr_38683[(13)] = inst_38582__$1);

(statearr_38683[(9)] = inst_38584__$1);

(statearr_38683[(15)] = inst_38583);

return statearr_38683;
})();
if(inst_38585){
var statearr_38684_38873 = state_38614__$1;
(statearr_38684_38873[(1)] = (9));

} else {
var statearr_38685_38874 = state_38614__$1;
(statearr_38685_38874[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$debounce_$_state_machine__36197__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__36197__auto____0 = (function (){
var statearr_38686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38686[(0)] = re_com$typeahead$debounce_$_state_machine__36197__auto__);

(statearr_38686[(1)] = (1));

return statearr_38686;
});
var re_com$typeahead$debounce_$_state_machine__36197__auto____1 = (function (state_38614){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_38614);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e38687){var ex__36200__auto__ = e38687;
var statearr_38688_38875 = state_38614;
(statearr_38688_38875[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_38614[(4)]))){
var statearr_38689_38876 = state_38614;
(statearr_38689_38876[(1)] = cljs.core.first((state_38614[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38877 = state_38614;
state_38614 = G__38877;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__36197__auto__ = function(state_38614){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__36197__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__36197__auto____1.call(this,state_38614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__36197__auto____0;
re_com$typeahead$debounce_$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__36197__auto____1;
return re_com$typeahead$debounce_$_state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_38691 = f__36292__auto__();
(statearr_38691[(6)] = c__36291__auto___38854);

return statearr_38691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));


return out;
});

//# sourceMappingURL=re_com.typeahead.js.map
