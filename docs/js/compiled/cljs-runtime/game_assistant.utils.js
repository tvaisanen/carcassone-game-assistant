goog.provide('game_assistant.utils');
/**
 * Transpose a matrix. Rows to columns
 */
game_assistant.utils.transpose_matrix = (function game_assistant$utils$transpose_matrix(m){
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,m));
});
/**
 * Get the border vector of a card.
 */
game_assistant.utils.get_side = (function game_assistant$utils$get_side(card,side){
var G__39902 = side;
var G__39902__$1 = (((G__39902 instanceof cljs.core.Keyword))?G__39902.fqn:null);
switch (G__39902__$1) {
case "top":
return cljs.core.first(card);

break;
case "bottom":
return cljs.core.last(card);

break;
case "left":
return cljs.core.first(game_assistant.utils.transpose_matrix(card));

break;
case "right":
return cljs.core.last(game_assistant.utils.transpose_matrix(card));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39902__$1)].join('')));

}
});
/**
 * Can card a and card b joined
 */
game_assistant.utils.tiles_can_join_QMARK_ = (function game_assistant$utils$tiles_can_join_QMARK_(a,a_side,b,b_side){
var left = game_assistant.utils.get_side(a,a_side);
var right = game_assistant.utils.get_side(b,b_side);
var can_join_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(left,right);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["compare: ",left,right,can_join_QMARK_], 0));

return can_join_QMARK_;
});
game_assistant.utils.rotate_card = (function game_assistant$utils$rotate_card(direction,card){
var G__39908 = direction;
switch (G__39908) {
case (0):
return card;

break;
case (90):
return game_assistant.utils.transpose_matrix(cljs.core.reverse(card));

break;
case (180):
var vec__39909 = card;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39909,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39909,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39909,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39909,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39909,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.reverse(d),cljs.core.reverse(c),cljs.core.reverse(b),a], null);

break;
case (270):
var vec__39912 = game_assistant.utils.transpose_matrix(card);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39912,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39912,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39912,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39912,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39912,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,d,c,b,a], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39908)].join('')));

}
});
var tile_39985 = game_assistant.utils.rotate_card((90),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(game_assistant.db.tile_size,cljs.core.vec("1111122222333334444455555")));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--------"], 0));

var iter__4622__auto___39986 = (function game_assistant$utils$iter__39915(s__39916){
return (new cljs.core.LazySeq(null,(function (){
var s__39916__$1 = s__39916;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__39916__$1);
if(temp__5753__auto__){
var s__39916__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39916__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__39916__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__39918 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__39917 = (0);
while(true){
if((i__39917 < size__4621__auto__)){
var p = cljs.core._nth(c__4620__auto__,i__39917);
cljs.core.chunk_append(b__39918,cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p], 0)));

var G__39989 = (i__39917 + (1));
i__39917 = G__39989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39918),game_assistant$utils$iter__39915(cljs.core.chunk_rest(s__39916__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39918),null);
}
} else {
var p = cljs.core.first(s__39916__$2);
return cljs.core.cons(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p], 0)),game_assistant$utils$iter__39915(cljs.core.rest(s__39916__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__4622__auto___39986(tile_39985);
game_assistant.utils.rotate_tile = (function game_assistant$utils$rotate_tile(rotate,tile){
var rotated = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.flatten(game_assistant.utils.rotate_card((cljs.core.truth_(rotate)?rotate:(0)),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(game_assistant.db.tile_size,cljs.core.vec(tile)))));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rotate::  in: ",cljs.core.count(tile),tile], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rotate:: out: ",cljs.core.count(rotated),rotated], 0));

return rotated;
});
game_assistant.utils.tile_to_matrix = (function game_assistant$utils$tile_to_matrix(tile){
return cljs.core.partition.cljs$core$IFn$_invoke$arity$2((5),cljs.core.vec(tile));
});
game_assistant.utils.tiles_to_graph = (function game_assistant$utils$tiles_to_graph(tiles){
return clojure.walk.walk((function (p__39921){
var vec__39922 = p__39921;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39922,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39922,(1),null);
cljs.core.last(v);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.last(cljs.core.first(v))], null);
}),cljs.core.identity,cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39925){
var vec__39926 = p__39925;
var vec__39929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39926,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39929,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39929,(1),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39926,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39932){
var vec__39933 = p__39932;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39933,(0),null);
var tr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39933,(1),null);
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__39919_SHARP_,p2__39920_SHARP_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((5) * row) + (r - (2))),(((5) * col) + (p1__39919_SHARP_ - (2))),p2__39920_SHARP_], null);
}),tr);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,r){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,r], null);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((5),t)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"col","col",-1959363084)),new cljs.core.Keyword(null,"loc","loc",-584284901)),new cljs.core.Keyword(null,"tile","tile",758132866)),tiles))))));
});
game_assistant.utils.tile_to_graph_coord = (function game_assistant$utils$tile_to_graph_coord(p__39937){
var map__39938 = p__39937;
var map__39938__$1 = cljs.core.__destructure_map(map__39938);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39938__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39938__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39938__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var vec__39939 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39936_SHARP_){
return ((5) * p1__39936_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
var xd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39939,(0),null);
var yd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39939,(1),null);
var source = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((5),cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
var xs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.interleave,source);
var ys = cljs.core.vec(cljs.core.flatten(source));
var coords = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__39942){
var vec__39943 = p__39942;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39943,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39943,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((xd + x) + (-2)),((yd + y) + (-2))], null);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.interleave,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs,ys], null))));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coords,idx);
});
game_assistant.utils.tiles_to_graph_grid = (function game_assistant$utils$tiles_to_graph_grid(tiles){
var collected = clojure.walk.walk((function (p__39950){
var vec__39951 = p__39950;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39951,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39951,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"loc","loc",-584284901)),new cljs.core.Keyword(null,"tile","tile",758132866)),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"loc","loc",-584284901)),v))], null);
}),cljs.core.identity,cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"loc","loc",-584284901)),tiles));
var vec__39947 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.max),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"loc","loc",-584284901)),tiles));
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39947,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39947,(1),null);
var col_range = cljs.core.range.cljs$core$IFn$_invoke$arity$2(left,((1) + right));
var n = (5);
var filler_tile = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((25),"*"));
var iter__4622__auto__ = (function game_assistant$utils$tiles_to_graph_grid_$_iter__39954(s__39955){
return (new cljs.core.LazySeq(null,(function (){
var s__39955__$1 = s__39955;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__39955__$1);
if(temp__5753__auto__){
var s__39955__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39955__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__39955__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__39957 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__39956 = (0);
while(true){
if((i__39956 < size__4621__auto__)){
var vec__39958 = cljs.core._nth(c__4620__auto__,i__39956);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39958,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39958,(1),null);
cljs.core.chunk_append(b__39957,(function (){var data = row;
var indices = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,data);
var cols = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,indices);
var impute = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__39956,data,indices,cols,vec__39958,_,row,c__4620__auto__,size__4621__auto__,b__39957,s__39955__$2,temp__5753__auto__,collected,vec__39947,left,right,col_range,n,filler_tile){
return (function (p1__39946_SHARP_){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.contains_QMARK_)(cols,p1__39946_SHARP_);
});})(i__39956,data,indices,cols,vec__39958,_,row,c__4620__auto__,size__4621__auto__,b__39957,s__39955__$2,temp__5753__auto__,collected,vec__39947,left,right,col_range,n,filler_tile))
,col_range);
var imputed = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__39956,data,indices,cols,impute,vec__39958,_,row,c__4620__auto__,size__4621__auto__,b__39957,s__39955__$2,temp__5753__auto__,collected,vec__39947,left,right,col_range,n,filler_tile){
return (function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,filler_tile], null);
});})(i__39956,data,indices,cols,impute,vec__39958,_,row,c__4620__auto__,size__4621__auto__,b__39957,s__39955__$2,temp__5753__auto__,collected,vec__39947,left,right,col_range,n,filler_tile))
,impute);
var imputed_data = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(data,imputed));
return cljs.core.partition.cljs$core$IFn$_invoke$arity$2((n * cljs.core.count(imputed_data)),cljs.core.flatten(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.interleave,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__39956,data,indices,cols,impute,imputed,imputed_data,vec__39958,_,row,c__4620__auto__,size__4621__auto__,b__39957,s__39955__$2,temp__5753__auto__,collected,vec__39947,left,right,col_range,n,filler_tile){
return (function (p__39961){
var vec__39962 = p__39961;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39962,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39962,(1),null);
return cljs.core.partition.cljs$core$IFn$_invoke$arity$2(n,d);
});})(i__39956,data,indices,cols,impute,imputed,imputed_data,vec__39958,_,row,c__4620__auto__,size__4621__auto__,b__39957,s__39955__$2,temp__5753__auto__,collected,vec__39947,left,right,col_range,n,filler_tile))
,imputed_data))));
})());

var G__40029 = (i__39956 + (1));
i__39956 = G__40029;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39957),game_assistant$utils$tiles_to_graph_grid_$_iter__39954(cljs.core.chunk_rest(s__39955__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39957),null);
}
} else {
var vec__39965 = cljs.core.first(s__39955__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39965,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39965,(1),null);
return cljs.core.cons((function (){var data = row;
var indices = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,data);
var cols = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,indices);
var impute = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (data,indices,cols,vec__39965,_,row,s__39955__$2,temp__5753__auto__,collected,vec__39947,left,right,col_range,n,filler_tile){
return (function (p1__39946_SHARP_){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.contains_QMARK_)(cols,p1__39946_SHARP_);
});})(data,indices,cols,vec__39965,_,row,s__39955__$2,temp__5753__auto__,collected,vec__39947,left,right,col_range,n,filler_tile))
,col_range);
var imputed = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (data,indices,cols,impute,vec__39965,_,row,s__39955__$2,temp__5753__auto__,collected,vec__39947,left,right,col_range,n,filler_tile){
return (function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,filler_tile], null);
});})(data,indices,cols,impute,vec__39965,_,row,s__39955__$2,temp__5753__auto__,collected,vec__39947,left,right,col_range,n,filler_tile))
,impute);
var imputed_data = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(data,imputed));
return cljs.core.partition.cljs$core$IFn$_invoke$arity$2((n * cljs.core.count(imputed_data)),cljs.core.flatten(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.interleave,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (data,indices,cols,impute,imputed,imputed_data,vec__39965,_,row,s__39955__$2,temp__5753__auto__,collected,vec__39947,left,right,col_range,n,filler_tile){
return (function (p__39968){
var vec__39969 = p__39968;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39969,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39969,(1),null);
return cljs.core.partition.cljs$core$IFn$_invoke$arity$2(n,d);
});})(data,indices,cols,impute,imputed,imputed_data,vec__39965,_,row,s__39955__$2,temp__5753__auto__,collected,vec__39947,left,right,col_range,n,filler_tile))
,imputed_data))));
})(),game_assistant$utils$tiles_to_graph_grid_$_iter__39954(cljs.core.rest(s__39955__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.seq(collected));
});

//# sourceMappingURL=game_assistant.utils.js.map
