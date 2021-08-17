goog.provide('game_assistant.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("game-assistant.subs","name","game-assistant.subs/name",78768811),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("game-assistant.subs","tiles","game-assistant.subs/tiles",609842322),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
var tiles = new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(db);
var tiles_left = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return (acc + new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(v));
}),(0),tiles);
var tiles_w_prob = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40402_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__40402_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prob","prob",-507301258),((100) * ((1) / new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(p1__40402_SHARP_)))], null)], 0));
}),tiles);
return tiles_w_prob;
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("game-assistant.subs","used-tiles","game-assistant.subs/used-tiles",1179212746),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
var map__40403 = db;
var map__40403__$1 = cljs.core.__destructure_map(map__40403);
var used_tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40403__$1,new cljs.core.Keyword(null,"used-tiles","used-tiles",-1612763568));
var pawns_played = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40403__$1,new cljs.core.Keyword(null,"pawns-played","pawns-played",-1126714664));
var pawns_by_loc = cljs.core.group_by(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"col","col",-1959363084)),pawns_played);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (tile){
var loc = new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(tile);
var coords = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"col","col",-1959363084))(loc);
var pawns = cljs.core.group_by(new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pawns_by_loc,coords));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tile,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pawns","pawns",-1273352193),pawns], null)], 0));
}),used_tiles);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("game-assistant.subs","tiles-total","game-assistant.subs/tiles-total",978129690),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"tiles-total","tiles-total",-929649508).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("game-assistant.subs","current-tile","game-assistant.subs/current-tile",2077683946),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"current-tile","current-tile",1232682096).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("game-assistant.subs","tilemap","game-assistant.subs/tilemap",-1943934643),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"id-to-tile","id-to-tile",-204501747).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("game-assistant.subs","neighbors","game-assistant.subs/neighbors",-871058377),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__40404){
var map__40405 = p__40404;
var map__40405__$1 = cljs.core.__destructure_map(map__40405);
var neighbors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40405__$1,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473));
var valid_targets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40405__$1,new cljs.core.Keyword(null,"valid-targets","valid-targets",519496219));
var valid_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"col","col",-1959363084)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"can-join?","can-join?",1115278572),valid_targets)));
var invalid_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"col","col",-1959363084)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,new cljs.core.Keyword(null,"can-join?","can-join?",1115278572)),valid_targets)));
var set_to_compare_with = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(valid_set,invalid_set);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valid-target?","valid-target?",-1217438983),cljs.core.contains_QMARK_(set_to_compare_with,cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"col","col",-1959363084))(n))], null)], 0));
}),neighbors);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("game-assistant.subs","db","game-assistant.subs/db",-1871812535),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.identity], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("game-assistant.subs","valid-targets","game-assistant.subs/valid-targets",-652455851),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.keys(new cljs.core.Keyword(null,"valid-targets","valid-targets",519496219).cljs$core$IFn$_invoke$arity$1(db));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("game-assistant.subs","view","game-assistant.subs/view",-1524035260),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("game-assistant.subs","pawns-left","game-assistant.subs/pawns-left",2096935513),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"pawns-left","pawns-left",-766047013).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("game-assistant.subs","show-remaining-tiles?","game-assistant.subs/show-remaining-tiles?",1852731018),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"show-remaining-tiles?","show-remaining-tiles?",-327493624).cljs$core$IFn$_invoke$arity$1(db);
})], 0));

//# sourceMappingURL=game_assistant.subs.js.map
