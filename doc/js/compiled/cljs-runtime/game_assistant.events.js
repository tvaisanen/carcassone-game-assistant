goog.provide('game_assistant.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("game-assistant.events","initialize-db","game-assistant.events/initialize-db",1222227452),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),game_assistant.db.default_db,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game-assistant.events","pick-selected-tile","game-assistant.events/pick-selected-tile",1633328228),new cljs.core.Keyword(null,"city-road-03","city-road-03",309817260)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game-assistant.events","set-tile","game-assistant.events/set-tile",-1639560823),new cljs.core.Keyword(null,"city-road-03","city-road-03",309817260),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),(0),new cljs.core.Keyword(null,"col","col",-1959363084),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game-assistant.events","clear-current-tile","game-assistant.events/clear-current-tile",1488342285)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("game-assistant.events","pop-tile","game-assistant.events/pop-tile",802789155),(function (p__40408,_){
var map__40409 = p__40408;
var map__40409__$1 = cljs.core.__destructure_map(map__40409);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40409__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40410 = new cljs.core.Keyword(null,"deck","deck",1145325705).cljs$core$IFn$_invoke$arity$1(db);
var seq__40411 = cljs.core.seq(vec__40410);
var first__40412 = cljs.core.first(seq__40411);
var seq__40411__$1 = cljs.core.next(seq__40411);
var tile = first__40412;
var rest = seq__40411__$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deck","deck",1145325705),rest,new cljs.core.Keyword(null,"current-tile","current-tile",1232682096),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(0)], null),cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__40406_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(tile,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__40406_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tile], 0));
}),new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(db)))], 0)),new cljs.core.Keyword(null,"tiles","tiles",178505240),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40407_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__40407_SHARP_),tile)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__40407_SHARP_,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.dec);
} else {
return p1__40407_SHARP_;
}
}),new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(db))], null)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game-assistant.events","check-constraints","game-assistant.events/check-constraints",2040730147)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("game-assistant.events","set-view","game-assistant.events/set-view",-962959595),(function (db,p__40413){
var vec__40414 = p__40413;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40414,(0),null);
var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40414,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"view","view",1247994814),view);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("game-assistant.events","toggle-remaining-tiles-visibility","game-assistant.events/toggle-remaining-tiles-visibility",-1647568829),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"show-remaining-tiles?","show-remaining-tiles?",-327493624),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("game-assistant.events","clear-current-tile","game-assistant.events/clear-current-tile",1488342285),(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"current-tile","current-tile",1232682096));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("game-assistant.events","pick-selected-tile","game-assistant.events/pick-selected-tile",1633328228),(function (p__40419,p__40420){
var map__40421 = p__40419;
var map__40421__$1 = cljs.core.__destructure_map(map__40421);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40421__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40422 = p__40420;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40422,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40422,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-tile","current-tile",1232682096),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(0)], null),cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__40417_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(tile,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__40417_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tile], 0));
}),new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(db)))], 0)),new cljs.core.Keyword(null,"tiles","tiles",178505240),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40418_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__40418_SHARP_),tile)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__40418_SHARP_,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.dec);
} else {
return p1__40418_SHARP_;
}
}),new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(db))], null)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game-assistant.events","check-constraints","game-assistant.events/check-constraints",2040730147)], null)], null)], null)], null);
}));
game_assistant.events.neighbors = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("game-assistant.events","set-tile","game-assistant.events/set-tile",-1639560823),(function (db,p__40425){
var vec__40426 = p__40425;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40426,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40426,(1),null);
var loc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40426,(2),null);
var rot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40426,(3),null);
var n = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40429){
var vec__40430 = p__40429;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40430,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40430,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(loc) + row),new cljs.core.Keyword(null,"col","col",-1959363084),(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(loc) + col)], null);
}),game_assistant.events.neighbors);
var tilemap = new cljs.core.Keyword(null,"id-to-tile","id-to-tile",-204501747).cljs$core$IFn$_invoke$arity$1(db);
var tile_str = (tile.cljs$core$IFn$_invoke$arity$1 ? tile.cljs$core$IFn$_invoke$arity$1(tilemap) : tile.call(null,tilemap));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"valid-targets","valid-targets",519496219),null,new cljs.core.Keyword(null,"current-tile","current-tile",1232682096),null,new cljs.core.Keyword(null,"used-tiles","used-tiles",-1612763568),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"used-tiles","used-tiles",-1612763568).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tile","tile",758132866),game_assistant.utils.rotate_tile(rot,tile_str),new cljs.core.Keyword(null,"id","id",-1388402092),tile,new cljs.core.Keyword(null,"loc","loc",-584284901),loc,new cljs.core.Keyword(null,"rotate","rotate",152705015),rot], null)),new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473).cljs$core$IFn$_invoke$arity$1(db)))], null)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("game-assistant.events","set-current-tile","game-assistant.events/set-current-tile",811804796),(function (p__40433,p__40434){
var map__40435 = p__40433;
var map__40435__$1 = cljs.core.__destructure_map(map__40435);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40435__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40436 = p__40434;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40436,(0),null);
var loc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40436,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game-assistant.events","set-tile","game-assistant.events/set-tile",-1639560823),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-tile","current-tile",1232682096),new cljs.core.Keyword(null,"id","id",-1388402092)], null)),loc,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-tile","current-tile",1232682096),new cljs.core.Keyword(null,"rotate","rotate",152705015)], null)),loc], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("game-assistant.events","rotate-current","game-assistant.events/rotate-current",1599894578),(function (p__40439,p__40440){
var map__40441 = p__40439;
var map__40441__$1 = cljs.core.__destructure_map(map__40441);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40441__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40442 = p__40440;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40442,(0),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40442,(1),null);
var current_tile = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-tile","current-tile",1232682096)], null));
var tile_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current_tile);
var angle = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"left","left",-399115937)))?(-90):(90));
var rotation = cljs.core.mod((angle + new cljs.core.Keyword(null,"rotate","rotate",152705015).cljs$core$IFn$_invoke$arity$1(current_tile)),(360));
var rotated_tile = game_assistant.utils.rotate_tile(rotation,(function (){var G__40445 = new cljs.core.Keyword(null,"id-to-tile","id-to-tile",-204501747).cljs$core$IFn$_invoke$arity$1(db);
return (tile_id.cljs$core$IFn$_invoke$arity$1 ? tile_id.cljs$core$IFn$_invoke$arity$1(G__40445) : tile_id.call(null,G__40445));
})());
var updated = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current_tile,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rotate","rotate",152705015),rotation,new cljs.core.Keyword(null,"tile","tile",758132866),rotated_tile], null)], 0));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([direction,angle,updated], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-tile","current-tile",1232682096)], null),updated),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game-assistant.events","check-constraints","game-assistant.events/check-constraints",2040730147)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("game-assistant.events","place-pawn","game-assistant.events/place-pawn",-2038526674),(function (db,p__40447){
var vec__40448 = p__40447;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40448,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40448,(1),null);
var vec__40451 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__40454,v){
var vec__40455 = p__40454;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40455,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40455,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(v))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,s], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"pawns-left","pawns-left",-766047013).cljs$core$IFn$_invoke$arity$1(db));
var pawn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40451,(0),null);
var filtered = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40451,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"pawns-left","pawns-left",-766047013),filtered),new cljs.core.Keyword(null,"pawns-played","pawns-played",-1126714664),(function (p1__40446_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__40446_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,pawn], 0)));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("game-assistant.events","check-constraints","game-assistant.events/check-constraints",2040730147),(function (db,_){
var map__40460 = db;
var map__40460__$1 = cljs.core.__destructure_map(map__40460);
var used_tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40460__$1,new cljs.core.Keyword(null,"used-tiles","used-tiles",-1612763568));
var neighbors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40460__$1,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473));
var current_tile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40460__$1,new cljs.core.Keyword(null,"current-tile","current-tile",1232682096));
var used_with_tiles = used_tiles;
var exclude = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"loc","loc",-584284901)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"loc","loc",-584284901))),used_tiles));
var with_candidates = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
var fn_d = (function (c){
var nx = new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(n);
var ny = new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(n);
var cx = new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(c));
var cy = new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(c));
var distances = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.abs((cy - ny)),Math.abs((cx - nx))], null);
var max_d = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,distances);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"distance","distance",-1671893894),max_d,new cljs.core.Keyword(null,"direction","direction",-633359395),cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((nx > cx))?new cljs.core.Keyword(null,"left","left",-399115937):(((nx < cx))?new cljs.core.Keyword(null,"right","right",-452581833):null
)),(((ny > cy))?new cljs.core.Keyword(null,"top","top",-1856271961):(((ny < cy))?new cljs.core.Keyword(null,"bottom","bottom",-1550509018):null
))], null)))], null)], 0));
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"neighbor","neighbor",-470328172),n,new cljs.core.Keyword(null,"candidates","candidates",1964038664),cljs.core.map.cljs$core$IFn$_invoke$arity$2(fn_d,used_with_tiles)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__40458_SHARP_){
return (!(cljs.core.contains_QMARK_(exclude,cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"col","col",-1959363084))(p1__40458_SHARP_))));
}),neighbors));
var n_with_c = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40461){
var map__40462 = p__40461;
var map__40462__$1 = cljs.core.__destructure_map(map__40462);
var candidates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40462__$1,new cljs.core.Keyword(null,"candidates","candidates",1964038664));
var neighbor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40462__$1,new cljs.core.Keyword(null,"neighbor","neighbor",-470328172));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"neighbor","neighbor",-470328172),neighbor,new cljs.core.Keyword(null,"constraints","constraints",422775616),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"distance","distance",-1671893894).cljs$core$IFn$_invoke$arity$1(c),(1));
}),candidates)], null);
}),with_candidates);
var valid_targets = (((current_tile == null))?null:cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valid-targets","valid-targets",519496219),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (target){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valid-targets","valid-targets",519496219),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (constraint){
var a = game_assistant.utils.tile_to_matrix(new cljs.core.Keyword(null,"tile","tile",758132866).cljs$core$IFn$_invoke$arity$1(current_tile));
var b = game_assistant.utils.tile_to_matrix(new cljs.core.Keyword(null,"tile","tile",758132866).cljs$core$IFn$_invoke$arity$1(constraint));
var a_side = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(constraint);
var b_side = (function (){var G__40463 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961)], null);
return (a_side.cljs$core$IFn$_invoke$arity$1 ? a_side.cljs$core$IFn$_invoke$arity$1(G__40463) : a_side.call(null,G__40463));
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"neighbor","neighbor",-470328172).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-side","current-side",-231122148),a_side,new cljs.core.Keyword(null,"constraint-side","constraint-side",938356403),b_side,new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"tile","tile",758132866).cljs$core$IFn$_invoke$arity$1(current_tile),new cljs.core.Keyword(null,"constraint","constraint",1725147424),new cljs.core.Keyword(null,"tile","tile",758132866).cljs$core$IFn$_invoke$arity$1(constraint),new cljs.core.Keyword(null,"can-join?","can-join?",1115278572),game_assistant.utils.tiles_can_join_QMARK_(a,a_side,b,b_side)], null)], 0));
}),new cljs.core.Keyword(null,"constraints","constraints",422775616).cljs$core$IFn$_invoke$arity$1(target))], null)], 0));
}),n_with_c))));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__40459_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"col","col",-1959363084))(new cljs.core.Keyword(null,"neighbor","neighbor",-470328172).cljs$core$IFn$_invoke$arity$1(p1__40459_SHARP_)));
}),n_with_c)], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"valid-targets","valid-targets",519496219),valid_targets);
}));
var used_tiles_40475 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game-assistant.subs","used-tiles","game-assistant.subs/used-tiles",1179212746)], null)));
game_assistant.utils.tiles_to_graph_grid(used_tiles_40475);
var vec__40464_40476 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game-assistant.subs","used-tiles","game-assistant.subs/used-tiles",1179212746)], null)));
var tile_40477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40464_40476,(0),null);
game_assistant.utils.tile_to_graph_coord(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),(12)], null),new cljs.core.Keyword(null,"loc","loc",-584284901).cljs$core$IFn$_invoke$arity$1(tile_40477)], 0)));
var used_tiles_40478 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game-assistant.subs","used-tiles","game-assistant.subs/used-tiles",1179212746)], null)));
game_assistant.utils.tiles_to_graph(used_tiles_40478);

//# sourceMappingURL=game_assistant.events.js.map
