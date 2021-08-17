goog.provide('game_assistant.db');
game_assistant.db.tile_size = (5);
game_assistant.db.tiles = new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"church","church",294651191),new cljs.core.Keyword(null,"tile","tile",758132866),"X000X000000010000000X000X",new cljs.core.Keyword(null,"count","count",2139924085),(4)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"church-road","church-road",-833985289),new cljs.core.Keyword(null,"tile","tile",758132866),"X000X000000010000200X020X",new cljs.core.Keyword(null,"count","count",2139924085),(2)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"road-01","road-01",1384808730),new cljs.core.Keyword(null,"tile","tile",758132866),"X000X000002220000200X020X",new cljs.core.Keyword(null,"count","count",2139924085),(9)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"road-02","road-02",-1195943168),new cljs.core.Keyword(null,"tile","tile",758132866),"X000X000002222200000X000X",new cljs.core.Keyword(null,"count","count",2139924085),(8)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"city-01","city-01",1282616619),new cljs.core.Keyword(null,"tile","tile",758132866),"X000X333333333333333X000X",new cljs.core.Keyword(null,"count","count",2139924085),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"city-02","city-02",593724414),new cljs.core.Keyword(null,"tile","tile",758132866),"X000X444444444444444X000X",new cljs.core.Keyword(null,"count","count",2139924085),(2)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"city-03","city-03",-1813587812),new cljs.core.Keyword(null,"tile","tile",758132866),"X333X000000000000000X000X",new cljs.core.Keyword(null,"count","count",2139924085),(5)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"city-04","city-04",1661037704),new cljs.core.Keyword(null,"tile","tile",758132866),"X333X000000000000000X333X",new cljs.core.Keyword(null,"count","count",2139924085),(3)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"city-05","city-05",-311916590),new cljs.core.Keyword(null,"tile","tile",758132866),"X333X000030000300003X000X",new cljs.core.Keyword(null,"count","count",2139924085),(2)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"city-06","city-06",236541215),new cljs.core.Keyword(null,"tile","tile",758132866),"X333X333333333333333X000X",new cljs.core.Keyword(null,"count","count",2139924085),(3)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"city-07","city-07",1005263850),new cljs.core.Keyword(null,"tile","tile",758132866),"X333X000330003300003X000X",new cljs.core.Keyword(null,"count","count",2139924085),(3)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"city-08","city-08",309616169),new cljs.core.Keyword(null,"tile","tile",758132866),"X444X000440000400004X000X",new cljs.core.Keyword(null,"count","count",2139924085),(2)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"city-09","city-09",168928240),new cljs.core.Keyword(null,"tile","tile",758132866),"X444X444444444444444X000X",new cljs.core.Keyword(null,"count","count",2139924085),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"city-10","city-10",-979251337),new cljs.core.Keyword(null,"tile","tile",758132866),"X444X444444444444444X444X",new cljs.core.Keyword(null,"count","count",2139924085),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"city-road-01","city-road-01",1752575558),new cljs.core.Keyword(null,"tile","tile",758132866),"X333X000000022200200X020X",new cljs.core.Keyword(null,"count","count",2139924085),(3)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"city-road-02","city-road-02",-1784800406),new cljs.core.Keyword(null,"tile","tile",758132866),"X333X000002220000200X020X",new cljs.core.Keyword(null,"count","count",2139924085),(3)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"city-road-03","city-road-03",309817260),new cljs.core.Keyword(null,"tile","tile",758132866),"X333X000002222200000X000X",new cljs.core.Keyword(null,"count","count",2139924085),(4)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"city-road-04","city-road-04",2015727999),new cljs.core.Keyword(null,"tile","tile",758132866),"X333X000002222200200X020X",new cljs.core.Keyword(null,"count","count",2139924085),(3)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"city-road-05","city-road-05",70278196),new cljs.core.Keyword(null,"tile","tile",758132866),"X333X000332220300203X020X",new cljs.core.Keyword(null,"count","count",2139924085),(3)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"city-road-06","city-road-06",-297821717),new cljs.core.Keyword(null,"tile","tile",758132866),"X444X000442220400204X020X",new cljs.core.Keyword(null,"count","count",2139924085),(2)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"city-road-07","city-road-07",-368340067),new cljs.core.Keyword(null,"tile","tile",758132866),"X333X333333333333333X020X",new cljs.core.Keyword(null,"count","count",2139924085),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"city-road-08","city-road-08",-1977916360),new cljs.core.Keyword(null,"tile","tile",758132866),"X444X444444444444444X020X",new cljs.core.Keyword(null,"count","count",2139924085),(2)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"crossroad-01","crossroad-01",-1362284539),new cljs.core.Keyword(null,"tile","tile",758132866),"X000X000002222200200X020X",new cljs.core.Keyword(null,"count","count",2139924085),(4)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"crossroad-02","crossroad-02",-1877947115),new cljs.core.Keyword(null,"tile","tile",758132866),"X020X002002222200200X020X",new cljs.core.Keyword(null,"count","count",2139924085),(1)], null)], null);
game_assistant.db.deck = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39889_SHARP_){
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(p1__39889_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__39889_SHARP_));
}),game_assistant.db.tiles));
game_assistant.db.players = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"green","green",-945526839)], null);
game_assistant.db.pawns = (function (){var iter__4622__auto__ = (function game_assistant$db$iter__39890(s__39891){
return (new cljs.core.LazySeq(null,(function (){
var s__39891__$1 = s__39891;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__39891__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var player = cljs.core.first(xs__6308__auto__);
var iterys__4618__auto__ = ((function (s__39891__$1,player,xs__6308__auto__,temp__5753__auto__){
return (function game_assistant$db$iter__39890_$_iter__39892(s__39893){
return (new cljs.core.LazySeq(null,((function (s__39891__$1,player,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__39893__$1 = s__39893;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__39893__$1);
if(temp__5753__auto____$1){
var s__39893__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39893__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__39893__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__39895 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__39894 = (0);
while(true){
if((i__39894 < size__4621__auto__)){
var number = cljs.core._nth(c__4620__auto__,i__39894);
cljs.core.chunk_append(b__39895,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),player,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(player),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)].join(''))], null));

var G__39903 = (i__39894 + (1));
i__39894 = G__39903;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39895),game_assistant$db$iter__39890_$_iter__39892(cljs.core.chunk_rest(s__39893__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39895),null);
}
} else {
var number = cljs.core.first(s__39893__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),player,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(player),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)].join(''))], null),game_assistant$db$iter__39890_$_iter__39892(cljs.core.rest(s__39893__$2)));
}
} else {
return null;
}
break;
}
});})(s__39891__$1,player,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__39891__$1,player,xs__6308__auto__,temp__5753__auto__))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((7))));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,game_assistant$db$iter__39890(cljs.core.rest(s__39891__$1)));
} else {
var G__39904 = cljs.core.rest(s__39891__$1);
s__39891__$1 = G__39904;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(game_assistant.db.players);
})();
var iter__4622__auto___39905 = (function game_assistant$db$iter__39896(s__39897){
return (new cljs.core.LazySeq(null,(function (){
var s__39897__$1 = s__39897;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__39897__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var a = cljs.core.first(xs__6308__auto__);
var iterys__4618__auto__ = ((function (s__39897__$1,a,xs__6308__auto__,temp__5753__auto__){
return (function game_assistant$db$iter__39896_$_iter__39898(s__39899){
return (new cljs.core.LazySeq(null,((function (s__39897__$1,a,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__39899__$1 = s__39899;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__39899__$1);
if(temp__5753__auto____$1){
var s__39899__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39899__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__39899__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__39901 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__39900 = (0);
while(true){
if((i__39900 < size__4621__auto__)){
var r = cljs.core._nth(c__4620__auto__,i__39900);
cljs.core.chunk_append(b__39901,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",-644103046),a,new cljs.core.Keyword(null,"second","second",-444702010),r], null));

var G__39906 = (i__39900 + (1));
i__39900 = G__39906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39901),game_assistant$db$iter__39896_$_iter__39898(cljs.core.chunk_rest(s__39899__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39901),null);
}
} else {
var r = cljs.core.first(s__39899__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",-644103046),a,new cljs.core.Keyword(null,"second","second",-444702010),r], null),game_assistant$db$iter__39896_$_iter__39898(cljs.core.rest(s__39899__$2)));
}
} else {
return null;
}
break;
}
});})(s__39897__$1,a,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__39897__$1,a,xs__6308__auto__,temp__5753__auto__))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((2))));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,game_assistant$db$iter__39896(cljs.core.rest(s__39897__$1)));
} else {
var G__39907 = cljs.core.rest(s__39897__$1);
s__39897__$1 = G__39907;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__4622__auto___39905(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null));
game_assistant.db.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"show-remaining-tiles?","show-remaining-tiles?",-327493624),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"id-to-tile","id-to-tile",-204501747),new cljs.core.Keyword(null,"used-tiles","used-tiles",-1612763568),new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.Keyword(null,"pawns-played","pawns-played",-1126714664),new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.Keyword(null,"pawns-left","pawns-left",-766047013),new cljs.core.Keyword(null,"tiles-total","tiles-total",-929649508),new cljs.core.Keyword(null,"view","view",1247994814)],[false,"re-frame",cljs.core.shuffle(game_assistant.db.deck),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"tile","tile",758132866)),game_assistant.db.tiles))),cljs.core.PersistentVector.EMPTY,game_assistant.db.tiles,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,game_assistant.db.pawns,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return (acc + new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(v));
}),(0),game_assistant.db.tiles),new cljs.core.Keyword(null,"graphics","graphics",-2079995979)]);

//# sourceMappingURL=game_assistant.db.js.map
