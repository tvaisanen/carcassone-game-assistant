goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41946){
var map__41947 = p__41946;
var map__41947__$1 = cljs.core.__destructure_map(map__41947);
var m = map__41947__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41947__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41947__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41948_42170 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41949_42171 = null;
var count__41950_42172 = (0);
var i__41951_42173 = (0);
while(true){
if((i__41951_42173 < count__41950_42172)){
var f_42174 = chunk__41949_42171.cljs$core$IIndexed$_nth$arity$2(null,i__41951_42173);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42174], 0));


var G__42175 = seq__41948_42170;
var G__42176 = chunk__41949_42171;
var G__42177 = count__41950_42172;
var G__42178 = (i__41951_42173 + (1));
seq__41948_42170 = G__42175;
chunk__41949_42171 = G__42176;
count__41950_42172 = G__42177;
i__41951_42173 = G__42178;
continue;
} else {
var temp__5753__auto___42179 = cljs.core.seq(seq__41948_42170);
if(temp__5753__auto___42179){
var seq__41948_42180__$1 = temp__5753__auto___42179;
if(cljs.core.chunked_seq_QMARK_(seq__41948_42180__$1)){
var c__4649__auto___42181 = cljs.core.chunk_first(seq__41948_42180__$1);
var G__42182 = cljs.core.chunk_rest(seq__41948_42180__$1);
var G__42183 = c__4649__auto___42181;
var G__42184 = cljs.core.count(c__4649__auto___42181);
var G__42185 = (0);
seq__41948_42170 = G__42182;
chunk__41949_42171 = G__42183;
count__41950_42172 = G__42184;
i__41951_42173 = G__42185;
continue;
} else {
var f_42186 = cljs.core.first(seq__41948_42180__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42186], 0));


var G__42187 = cljs.core.next(seq__41948_42180__$1);
var G__42188 = null;
var G__42189 = (0);
var G__42190 = (0);
seq__41948_42170 = G__42187;
chunk__41949_42171 = G__42188;
count__41950_42172 = G__42189;
i__41951_42173 = G__42190;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42191 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_42191], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_42191)))?cljs.core.second(arglists_42191):arglists_42191)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41952_42192 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41953_42193 = null;
var count__41954_42194 = (0);
var i__41955_42195 = (0);
while(true){
if((i__41955_42195 < count__41954_42194)){
var vec__41968_42196 = chunk__41953_42193.cljs$core$IIndexed$_nth$arity$2(null,i__41955_42195);
var name_42197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41968_42196,(0),null);
var map__41971_42198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41968_42196,(1),null);
var map__41971_42199__$1 = cljs.core.__destructure_map(map__41971_42198);
var doc_42200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41971_42199__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41971_42199__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42197], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42201], 0));

if(cljs.core.truth_(doc_42200)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42200], 0));
} else {
}


var G__42202 = seq__41952_42192;
var G__42203 = chunk__41953_42193;
var G__42204 = count__41954_42194;
var G__42205 = (i__41955_42195 + (1));
seq__41952_42192 = G__42202;
chunk__41953_42193 = G__42203;
count__41954_42194 = G__42204;
i__41955_42195 = G__42205;
continue;
} else {
var temp__5753__auto___42206 = cljs.core.seq(seq__41952_42192);
if(temp__5753__auto___42206){
var seq__41952_42207__$1 = temp__5753__auto___42206;
if(cljs.core.chunked_seq_QMARK_(seq__41952_42207__$1)){
var c__4649__auto___42208 = cljs.core.chunk_first(seq__41952_42207__$1);
var G__42209 = cljs.core.chunk_rest(seq__41952_42207__$1);
var G__42210 = c__4649__auto___42208;
var G__42211 = cljs.core.count(c__4649__auto___42208);
var G__42212 = (0);
seq__41952_42192 = G__42209;
chunk__41953_42193 = G__42210;
count__41954_42194 = G__42211;
i__41955_42195 = G__42212;
continue;
} else {
var vec__41974_42213 = cljs.core.first(seq__41952_42207__$1);
var name_42214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41974_42213,(0),null);
var map__41977_42215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41974_42213,(1),null);
var map__41977_42216__$1 = cljs.core.__destructure_map(map__41977_42215);
var doc_42217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41977_42216__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41977_42216__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42214], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42218], 0));

if(cljs.core.truth_(doc_42217)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42217], 0));
} else {
}


var G__42219 = cljs.core.next(seq__41952_42207__$1);
var G__42220 = null;
var G__42221 = (0);
var G__42222 = (0);
seq__41952_42192 = G__42219;
chunk__41953_42193 = G__42220;
count__41954_42194 = G__42221;
i__41955_42195 = G__42222;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__41979 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41980 = null;
var count__41981 = (0);
var i__41982 = (0);
while(true){
if((i__41982 < count__41981)){
var role = chunk__41980.cljs$core$IIndexed$_nth$arity$2(null,i__41982);
var temp__5753__auto___42223__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___42223__$1)){
var spec_42224 = temp__5753__auto___42223__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42224)], 0));
} else {
}


var G__42225 = seq__41979;
var G__42226 = chunk__41980;
var G__42227 = count__41981;
var G__42228 = (i__41982 + (1));
seq__41979 = G__42225;
chunk__41980 = G__42226;
count__41981 = G__42227;
i__41982 = G__42228;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__41979);
if(temp__5753__auto____$1){
var seq__41979__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__41979__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__41979__$1);
var G__42229 = cljs.core.chunk_rest(seq__41979__$1);
var G__42230 = c__4649__auto__;
var G__42231 = cljs.core.count(c__4649__auto__);
var G__42232 = (0);
seq__41979 = G__42229;
chunk__41980 = G__42230;
count__41981 = G__42231;
i__41982 = G__42232;
continue;
} else {
var role = cljs.core.first(seq__41979__$1);
var temp__5753__auto___42233__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___42233__$2)){
var spec_42234 = temp__5753__auto___42233__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42234)], 0));
} else {
}


var G__42235 = cljs.core.next(seq__41979__$1);
var G__42236 = null;
var G__42237 = (0);
var G__42238 = (0);
seq__41979 = G__42235;
chunk__41980 = G__42236;
count__41981 = G__42237;
i__41982 = G__42238;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__42240 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__42241 = cljs.core.ex_cause(t);
via = G__42240;
t = G__42241;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__41990 = datafied_throwable;
var map__41990__$1 = cljs.core.__destructure_map(map__41990);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41990__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41990__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41990__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__41991 = cljs.core.last(via);
var map__41991__$1 = cljs.core.__destructure_map(map__41991);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41991__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41991__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41991__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__41992 = data;
var map__41992__$1 = cljs.core.__destructure_map(map__41992);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41992__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41992__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41992__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__41993 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__41993__$1 = cljs.core.__destructure_map(map__41993);
var top_data = map__41993__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41993__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__41994 = phase;
var G__41994__$1 = (((G__41994 instanceof cljs.core.Keyword))?G__41994.fqn:null);
switch (G__41994__$1) {
case "read-source":
var map__42003 = data;
var map__42003__$1 = cljs.core.__destructure_map(map__42003);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42003__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42003__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__42013 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__42013__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42013,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42013);
var G__42013__$2 = (cljs.core.truth_((function (){var fexpr__42014 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42014.cljs$core$IFn$_invoke$arity$1 ? fexpr__42014.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42014.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42013__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42013__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42013__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42013__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__42022 = top_data;
var G__42022__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42022,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42022);
var G__42022__$2 = (cljs.core.truth_((function (){var fexpr__42023 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42023.cljs$core$IFn$_invoke$arity$1 ? fexpr__42023.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42023.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42022__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42022__$1);
var G__42022__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42022__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42022__$2);
var G__42022__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42022__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42022__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42022__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42022__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__42024 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42024,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42024,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42024,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42024,(3),null);
var G__42027 = top_data;
var G__42027__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42027,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__42027);
var G__42027__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42027__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__42027__$1);
var G__42027__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42027__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__42027__$2);
var G__42027__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42027__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42027__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42027__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42027__$4;
}

break;
case "execution":
var vec__42046 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42046,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42046,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42046,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42046,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__41989_SHARP_){
var or__4223__auto__ = (p1__41989_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__42069 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42069.cljs$core$IFn$_invoke$arity$1 ? fexpr__42069.cljs$core$IFn$_invoke$arity$1(p1__41989_SHARP_) : fexpr__42069.call(null,p1__41989_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__42070 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__42070__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42070,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__42070);
var G__42070__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42070__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42070__$1);
var G__42070__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42070__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__42070__$2);
var G__42070__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42070__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__42070__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42070__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42070__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41994__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__42102){
var map__42107 = p__42102;
var map__42107__$1 = cljs.core.__destructure_map(map__42107);
var triage_data = map__42107__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42107__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42107__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42107__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42107__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42107__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42107__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42107__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42107__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__42109 = phase;
var G__42109__$1 = (((G__42109 instanceof cljs.core.Keyword))?G__42109.fqn:null);
switch (G__42109__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__42111 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__42112 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42113 = loc;
var G__42114 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42115_42263 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42116_42264 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42117_42265 = true;
var _STAR_print_fn_STAR__temp_val__42118_42266 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42117_42265);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42118_42266);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42092_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42092_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42116_42264);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42115_42263);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42111,G__42112,G__42113,G__42114) : format.call(null,G__42111,G__42112,G__42113,G__42114));

break;
case "macroexpansion":
var G__42119 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__42120 = cause_type;
var G__42121 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42122 = loc;
var G__42123 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42119,G__42120,G__42121,G__42122,G__42123) : format.call(null,G__42119,G__42120,G__42121,G__42122,G__42123));

break;
case "compile-syntax-check":
var G__42124 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__42125 = cause_type;
var G__42126 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42127 = loc;
var G__42128 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42124,G__42125,G__42126,G__42127,G__42128) : format.call(null,G__42124,G__42125,G__42126,G__42127,G__42128));

break;
case "compilation":
var G__42130 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__42131 = cause_type;
var G__42132 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42133 = loc;
var G__42134 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42130,G__42131,G__42132,G__42133,G__42134) : format.call(null,G__42130,G__42131,G__42132,G__42133,G__42134));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__42135 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__42136 = symbol;
var G__42137 = loc;
var G__42138 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42139_42272 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42140_42273 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42141_42274 = true;
var _STAR_print_fn_STAR__temp_val__42142_42275 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42141_42274);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42142_42275);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42101_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42101_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42140_42273);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42139_42272);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42135,G__42136,G__42137,G__42138) : format.call(null,G__42135,G__42136,G__42137,G__42138));
} else {
var G__42145 = "Execution error%s at %s(%s).\n%s\n";
var G__42146 = cause_type;
var G__42147 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42148 = loc;
var G__42149 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42145,G__42146,G__42147,G__42148,G__42149) : format.call(null,G__42145,G__42146,G__42147,G__42148,G__42149));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42109__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
