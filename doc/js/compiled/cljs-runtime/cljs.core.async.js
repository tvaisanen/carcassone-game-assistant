goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36356 = arguments.length;
switch (G__36356) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36357 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36357 = (function (f,blockable,meta36358){
this.f = f;
this.blockable = blockable;
this.meta36358 = meta36358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36359,meta36358__$1){
var self__ = this;
var _36359__$1 = this;
return (new cljs.core.async.t_cljs$core$async36357(self__.f,self__.blockable,meta36358__$1));
}));

(cljs.core.async.t_cljs$core$async36357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36359){
var self__ = this;
var _36359__$1 = this;
return self__.meta36358;
}));

(cljs.core.async.t_cljs$core$async36357.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36357.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36357.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async36357.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async36357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36358","meta36358",-234645916,null)], null);
}));

(cljs.core.async.t_cljs$core$async36357.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36357");

(cljs.core.async.t_cljs$core$async36357.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async36357");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36357.
 */
cljs.core.async.__GT_t_cljs$core$async36357 = (function cljs$core$async$__GT_t_cljs$core$async36357(f__$1,blockable__$1,meta36358){
return (new cljs.core.async.t_cljs$core$async36357(f__$1,blockable__$1,meta36358));
});

}

return (new cljs.core.async.t_cljs$core$async36357(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__36369 = arguments.length;
switch (G__36369) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__36376 = arguments.length;
switch (G__36376) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__36384 = arguments.length;
switch (G__36384) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_38121 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38121) : fn1.call(null,val_38121));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38121) : fn1.call(null,val_38121));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__36403 = arguments.length;
switch (G__36403) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___38127 = n;
var x_38128 = (0);
while(true){
if((x_38128 < n__4706__auto___38127)){
(a[x_38128] = x_38128);

var G__38129 = (x_38128 + (1));
x_38128 = G__38129;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36424 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36424 = (function (flag,meta36425){
this.flag = flag;
this.meta36425 = meta36425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36426,meta36425__$1){
var self__ = this;
var _36426__$1 = this;
return (new cljs.core.async.t_cljs$core$async36424(self__.flag,meta36425__$1));
}));

(cljs.core.async.t_cljs$core$async36424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36426){
var self__ = this;
var _36426__$1 = this;
return self__.meta36425;
}));

(cljs.core.async.t_cljs$core$async36424.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36424.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36424.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36424.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async36424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36425","meta36425",812910852,null)], null);
}));

(cljs.core.async.t_cljs$core$async36424.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36424");

(cljs.core.async.t_cljs$core$async36424.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async36424");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36424.
 */
cljs.core.async.__GT_t_cljs$core$async36424 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36424(flag__$1,meta36425){
return (new cljs.core.async.t_cljs$core$async36424(flag__$1,meta36425));
});

}

return (new cljs.core.async.t_cljs$core$async36424(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36436 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36436 = (function (flag,cb,meta36437){
this.flag = flag;
this.cb = cb;
this.meta36437 = meta36437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36438,meta36437__$1){
var self__ = this;
var _36438__$1 = this;
return (new cljs.core.async.t_cljs$core$async36436(self__.flag,self__.cb,meta36437__$1));
}));

(cljs.core.async.t_cljs$core$async36436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36438){
var self__ = this;
var _36438__$1 = this;
return self__.meta36437;
}));

(cljs.core.async.t_cljs$core$async36436.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36436.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36436.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36436.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async36436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36437","meta36437",1859482711,null)], null);
}));

(cljs.core.async.t_cljs$core$async36436.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36436");

(cljs.core.async.t_cljs$core$async36436.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async36436");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36436.
 */
cljs.core.async.__GT_t_cljs$core$async36436 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36436(flag__$1,cb__$1,meta36437){
return (new cljs.core.async.t_cljs$core$async36436(flag__$1,cb__$1,meta36437));
});

}

return (new cljs.core.async.t_cljs$core$async36436(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36443_SHARP_){
var G__36448 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36443_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36448) : fret.call(null,G__36448));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36444_SHARP_){
var G__36449 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36444_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36449) : fret.call(null,G__36449));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38130 = (i + (1));
i = G__38130;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38131 = arguments.length;
var i__4830__auto___38132 = (0);
while(true){
if((i__4830__auto___38132 < len__4829__auto___38131)){
args__4835__auto__.push((arguments[i__4830__auto___38132]));

var G__38133 = (i__4830__auto___38132 + (1));
i__4830__auto___38132 = G__38133;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36452){
var map__36453 = p__36452;
var map__36453__$1 = cljs.core.__destructure_map(map__36453);
var opts = map__36453__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36450){
var G__36451 = cljs.core.first(seq36450);
var seq36450__$1 = cljs.core.next(seq36450);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36451,seq36450__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__36455 = arguments.length;
switch (G__36455) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36291__auto___38135 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_36483){
var state_val_36484 = (state_36483[(1)]);
if((state_val_36484 === (7))){
var inst_36479 = (state_36483[(2)]);
var state_36483__$1 = state_36483;
var statearr_36486_38136 = state_36483__$1;
(statearr_36486_38136[(2)] = inst_36479);

(statearr_36486_38136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (1))){
var state_36483__$1 = state_36483;
var statearr_36487_38137 = state_36483__$1;
(statearr_36487_38137[(2)] = null);

(statearr_36487_38137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (4))){
var inst_36458 = (state_36483[(7)]);
var inst_36458__$1 = (state_36483[(2)]);
var inst_36463 = (inst_36458__$1 == null);
var state_36483__$1 = (function (){var statearr_36490 = state_36483;
(statearr_36490[(7)] = inst_36458__$1);

return statearr_36490;
})();
if(cljs.core.truth_(inst_36463)){
var statearr_36492_38138 = state_36483__$1;
(statearr_36492_38138[(1)] = (5));

} else {
var statearr_36494_38139 = state_36483__$1;
(statearr_36494_38139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (13))){
var state_36483__$1 = state_36483;
var statearr_36495_38140 = state_36483__$1;
(statearr_36495_38140[(2)] = null);

(statearr_36495_38140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (6))){
var inst_36458 = (state_36483[(7)]);
var state_36483__$1 = state_36483;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36483__$1,(11),to,inst_36458);
} else {
if((state_val_36484 === (3))){
var inst_36481 = (state_36483[(2)]);
var state_36483__$1 = state_36483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36483__$1,inst_36481);
} else {
if((state_val_36484 === (12))){
var state_36483__$1 = state_36483;
var statearr_36496_38142 = state_36483__$1;
(statearr_36496_38142[(2)] = null);

(statearr_36496_38142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (2))){
var state_36483__$1 = state_36483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36483__$1,(4),from);
} else {
if((state_val_36484 === (11))){
var inst_36472 = (state_36483[(2)]);
var state_36483__$1 = state_36483;
if(cljs.core.truth_(inst_36472)){
var statearr_36497_38144 = state_36483__$1;
(statearr_36497_38144[(1)] = (12));

} else {
var statearr_36498_38145 = state_36483__$1;
(statearr_36498_38145[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (9))){
var state_36483__$1 = state_36483;
var statearr_36499_38146 = state_36483__$1;
(statearr_36499_38146[(2)] = null);

(statearr_36499_38146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (5))){
var state_36483__$1 = state_36483;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36500_38147 = state_36483__$1;
(statearr_36500_38147[(1)] = (8));

} else {
var statearr_36501_38148 = state_36483__$1;
(statearr_36501_38148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (14))){
var inst_36477 = (state_36483[(2)]);
var state_36483__$1 = state_36483;
var statearr_36502_38150 = state_36483__$1;
(statearr_36502_38150[(2)] = inst_36477);

(statearr_36502_38150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (10))){
var inst_36469 = (state_36483[(2)]);
var state_36483__$1 = state_36483;
var statearr_36503_38151 = state_36483__$1;
(statearr_36503_38151[(2)] = inst_36469);

(statearr_36503_38151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (8))){
var inst_36466 = cljs.core.async.close_BANG_(to);
var state_36483__$1 = state_36483;
var statearr_36504_38152 = state_36483__$1;
(statearr_36504_38152[(2)] = inst_36466);

(statearr_36504_38152[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__36197__auto__ = null;
var cljs$core$async$state_machine__36197__auto____0 = (function (){
var statearr_36505 = [null,null,null,null,null,null,null,null];
(statearr_36505[(0)] = cljs$core$async$state_machine__36197__auto__);

(statearr_36505[(1)] = (1));

return statearr_36505;
});
var cljs$core$async$state_machine__36197__auto____1 = (function (state_36483){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_36483);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e36506){var ex__36200__auto__ = e36506;
var statearr_36507_38153 = state_36483;
(statearr_36507_38153[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_36483[(4)]))){
var statearr_36508_38154 = state_36483;
(statearr_36508_38154[(1)] = cljs.core.first((state_36483[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38155 = state_36483;
state_36483 = G__38155;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$state_machine__36197__auto__ = function(state_36483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36197__auto____1.call(this,state_36483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36197__auto____0;
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36197__auto____1;
return cljs$core$async$state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_36509 = f__36292__auto__();
(statearr_36509[(6)] = c__36291__auto___38135);

return statearr_36509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__36510){
var vec__36511 = p__36510;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36511,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36511,(1),null);
var job = vec__36511;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__36291__auto___38158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_36518){
var state_val_36519 = (state_36518[(1)]);
if((state_val_36519 === (1))){
var state_36518__$1 = state_36518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36518__$1,(2),res,v);
} else {
if((state_val_36519 === (2))){
var inst_36515 = (state_36518[(2)]);
var inst_36516 = cljs.core.async.close_BANG_(res);
var state_36518__$1 = (function (){var statearr_36520 = state_36518;
(statearr_36520[(7)] = inst_36515);

return statearr_36520;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36518__$1,inst_36516);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____0 = (function (){
var statearr_36524 = [null,null,null,null,null,null,null,null];
(statearr_36524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__);

(statearr_36524[(1)] = (1));

return statearr_36524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____1 = (function (state_36518){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_36518);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e36526){var ex__36200__auto__ = e36526;
var statearr_36527_38159 = state_36518;
(statearr_36527_38159[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_36518[(4)]))){
var statearr_36528_38160 = state_36518;
(statearr_36528_38160[(1)] = cljs.core.first((state_36518[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38161 = state_36518;
state_36518 = G__38161;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__ = function(state_36518){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____1.call(this,state_36518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_36529 = f__36292__auto__();
(statearr_36529[(6)] = c__36291__auto___38158);

return statearr_36529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__36530){
var vec__36531 = p__36530;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36531,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36531,(1),null);
var job = vec__36531;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___38165 = n;
var __38166 = (0);
while(true){
if((__38166 < n__4706__auto___38165)){
var G__36534_38167 = type;
var G__36534_38168__$1 = (((G__36534_38167 instanceof cljs.core.Keyword))?G__36534_38167.fqn:null);
switch (G__36534_38168__$1) {
case "compute":
var c__36291__auto___38170 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38166,c__36291__auto___38170,G__36534_38167,G__36534_38168__$1,n__4706__auto___38165,jobs,results,process,async){
return (function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = ((function (__38166,c__36291__auto___38170,G__36534_38167,G__36534_38168__$1,n__4706__auto___38165,jobs,results,process,async){
return (function (state_36549){
var state_val_36550 = (state_36549[(1)]);
if((state_val_36550 === (1))){
var state_36549__$1 = state_36549;
var statearr_36552_38171 = state_36549__$1;
(statearr_36552_38171[(2)] = null);

(statearr_36552_38171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (2))){
var state_36549__$1 = state_36549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36549__$1,(4),jobs);
} else {
if((state_val_36550 === (3))){
var inst_36547 = (state_36549[(2)]);
var state_36549__$1 = state_36549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36549__$1,inst_36547);
} else {
if((state_val_36550 === (4))){
var inst_36539 = (state_36549[(2)]);
var inst_36540 = process(inst_36539);
var state_36549__$1 = state_36549;
if(cljs.core.truth_(inst_36540)){
var statearr_36554_38172 = state_36549__$1;
(statearr_36554_38172[(1)] = (5));

} else {
var statearr_36555_38173 = state_36549__$1;
(statearr_36555_38173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (5))){
var state_36549__$1 = state_36549;
var statearr_36556_38174 = state_36549__$1;
(statearr_36556_38174[(2)] = null);

(statearr_36556_38174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (6))){
var state_36549__$1 = state_36549;
var statearr_36559_38175 = state_36549__$1;
(statearr_36559_38175[(2)] = null);

(statearr_36559_38175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36550 === (7))){
var inst_36545 = (state_36549[(2)]);
var state_36549__$1 = state_36549;
var statearr_36560_38176 = state_36549__$1;
(statearr_36560_38176[(2)] = inst_36545);

(statearr_36560_38176[(1)] = (3));


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
});})(__38166,c__36291__auto___38170,G__36534_38167,G__36534_38168__$1,n__4706__auto___38165,jobs,results,process,async))
;
return ((function (__38166,switch__36196__auto__,c__36291__auto___38170,G__36534_38167,G__36534_38168__$1,n__4706__auto___38165,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____0 = (function (){
var statearr_36561 = [null,null,null,null,null,null,null];
(statearr_36561[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__);

(statearr_36561[(1)] = (1));

return statearr_36561;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____1 = (function (state_36549){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_36549);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e36562){var ex__36200__auto__ = e36562;
var statearr_36563_38177 = state_36549;
(statearr_36563_38177[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_36549[(4)]))){
var statearr_36564_38178 = state_36549;
(statearr_36564_38178[(1)] = cljs.core.first((state_36549[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38179 = state_36549;
state_36549 = G__38179;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__ = function(state_36549){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____1.call(this,state_36549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__;
})()
;})(__38166,switch__36196__auto__,c__36291__auto___38170,G__36534_38167,G__36534_38168__$1,n__4706__auto___38165,jobs,results,process,async))
})();
var state__36293__auto__ = (function (){var statearr_36565 = f__36292__auto__();
(statearr_36565[(6)] = c__36291__auto___38170);

return statearr_36565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
});})(__38166,c__36291__auto___38170,G__36534_38167,G__36534_38168__$1,n__4706__auto___38165,jobs,results,process,async))
);


break;
case "async":
var c__36291__auto___38180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38166,c__36291__auto___38180,G__36534_38167,G__36534_38168__$1,n__4706__auto___38165,jobs,results,process,async){
return (function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = ((function (__38166,c__36291__auto___38180,G__36534_38167,G__36534_38168__$1,n__4706__auto___38165,jobs,results,process,async){
return (function (state_36579){
var state_val_36580 = (state_36579[(1)]);
if((state_val_36580 === (1))){
var state_36579__$1 = state_36579;
var statearr_36581_38181 = state_36579__$1;
(statearr_36581_38181[(2)] = null);

(statearr_36581_38181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36580 === (2))){
var state_36579__$1 = state_36579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36579__$1,(4),jobs);
} else {
if((state_val_36580 === (3))){
var inst_36577 = (state_36579[(2)]);
var state_36579__$1 = state_36579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36579__$1,inst_36577);
} else {
if((state_val_36580 === (4))){
var inst_36569 = (state_36579[(2)]);
var inst_36570 = async(inst_36569);
var state_36579__$1 = state_36579;
if(cljs.core.truth_(inst_36570)){
var statearr_36582_38183 = state_36579__$1;
(statearr_36582_38183[(1)] = (5));

} else {
var statearr_36583_38184 = state_36579__$1;
(statearr_36583_38184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36580 === (5))){
var state_36579__$1 = state_36579;
var statearr_36584_38185 = state_36579__$1;
(statearr_36584_38185[(2)] = null);

(statearr_36584_38185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36580 === (6))){
var state_36579__$1 = state_36579;
var statearr_36585_38186 = state_36579__$1;
(statearr_36585_38186[(2)] = null);

(statearr_36585_38186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36580 === (7))){
var inst_36575 = (state_36579[(2)]);
var state_36579__$1 = state_36579;
var statearr_36587_38187 = state_36579__$1;
(statearr_36587_38187[(2)] = inst_36575);

(statearr_36587_38187[(1)] = (3));


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
});})(__38166,c__36291__auto___38180,G__36534_38167,G__36534_38168__$1,n__4706__auto___38165,jobs,results,process,async))
;
return ((function (__38166,switch__36196__auto__,c__36291__auto___38180,G__36534_38167,G__36534_38168__$1,n__4706__auto___38165,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____0 = (function (){
var statearr_36589 = [null,null,null,null,null,null,null];
(statearr_36589[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__);

(statearr_36589[(1)] = (1));

return statearr_36589;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____1 = (function (state_36579){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_36579);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e36590){var ex__36200__auto__ = e36590;
var statearr_36591_38188 = state_36579;
(statearr_36591_38188[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_36579[(4)]))){
var statearr_36592_38189 = state_36579;
(statearr_36592_38189[(1)] = cljs.core.first((state_36579[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38191 = state_36579;
state_36579 = G__38191;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__ = function(state_36579){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____1.call(this,state_36579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__;
})()
;})(__38166,switch__36196__auto__,c__36291__auto___38180,G__36534_38167,G__36534_38168__$1,n__4706__auto___38165,jobs,results,process,async))
})();
var state__36293__auto__ = (function (){var statearr_36593 = f__36292__auto__();
(statearr_36593[(6)] = c__36291__auto___38180);

return statearr_36593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
});})(__38166,c__36291__auto___38180,G__36534_38167,G__36534_38168__$1,n__4706__auto___38165,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36534_38168__$1)].join('')));

}

var G__38193 = (__38166 + (1));
__38166 = G__38193;
continue;
} else {
}
break;
}

var c__36291__auto___38194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_36617){
var state_val_36618 = (state_36617[(1)]);
if((state_val_36618 === (7))){
var inst_36613 = (state_36617[(2)]);
var state_36617__$1 = state_36617;
var statearr_36621_38196 = state_36617__$1;
(statearr_36621_38196[(2)] = inst_36613);

(statearr_36621_38196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (1))){
var state_36617__$1 = state_36617;
var statearr_36622_38197 = state_36617__$1;
(statearr_36622_38197[(2)] = null);

(statearr_36622_38197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (4))){
var inst_36597 = (state_36617[(7)]);
var inst_36597__$1 = (state_36617[(2)]);
var inst_36598 = (inst_36597__$1 == null);
var state_36617__$1 = (function (){var statearr_36624 = state_36617;
(statearr_36624[(7)] = inst_36597__$1);

return statearr_36624;
})();
if(cljs.core.truth_(inst_36598)){
var statearr_36625_38198 = state_36617__$1;
(statearr_36625_38198[(1)] = (5));

} else {
var statearr_36626_38199 = state_36617__$1;
(statearr_36626_38199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (6))){
var inst_36602 = (state_36617[(8)]);
var inst_36597 = (state_36617[(7)]);
var inst_36602__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_36604 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36605 = [inst_36597,inst_36602__$1];
var inst_36606 = (new cljs.core.PersistentVector(null,2,(5),inst_36604,inst_36605,null));
var state_36617__$1 = (function (){var statearr_36627 = state_36617;
(statearr_36627[(8)] = inst_36602__$1);

return statearr_36627;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36617__$1,(8),jobs,inst_36606);
} else {
if((state_val_36618 === (3))){
var inst_36615 = (state_36617[(2)]);
var state_36617__$1 = state_36617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36617__$1,inst_36615);
} else {
if((state_val_36618 === (2))){
var state_36617__$1 = state_36617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36617__$1,(4),from);
} else {
if((state_val_36618 === (9))){
var inst_36610 = (state_36617[(2)]);
var state_36617__$1 = (function (){var statearr_36628 = state_36617;
(statearr_36628[(9)] = inst_36610);

return statearr_36628;
})();
var statearr_36629_38202 = state_36617__$1;
(statearr_36629_38202[(2)] = null);

(statearr_36629_38202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (5))){
var inst_36600 = cljs.core.async.close_BANG_(jobs);
var state_36617__$1 = state_36617;
var statearr_36630_38203 = state_36617__$1;
(statearr_36630_38203[(2)] = inst_36600);

(statearr_36630_38203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (8))){
var inst_36602 = (state_36617[(8)]);
var inst_36608 = (state_36617[(2)]);
var state_36617__$1 = (function (){var statearr_36631 = state_36617;
(statearr_36631[(10)] = inst_36608);

return statearr_36631;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36617__$1,(9),results,inst_36602);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____0 = (function (){
var statearr_36632 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36632[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__);

(statearr_36632[(1)] = (1));

return statearr_36632;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____1 = (function (state_36617){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_36617);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e36633){var ex__36200__auto__ = e36633;
var statearr_36634_38204 = state_36617;
(statearr_36634_38204[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_36617[(4)]))){
var statearr_36635_38206 = state_36617;
(statearr_36635_38206[(1)] = cljs.core.first((state_36617[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38208 = state_36617;
state_36617 = G__38208;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__ = function(state_36617){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____1.call(this,state_36617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_36636 = f__36292__auto__();
(statearr_36636[(6)] = c__36291__auto___38194);

return statearr_36636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));


var c__36291__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_36676){
var state_val_36677 = (state_36676[(1)]);
if((state_val_36677 === (7))){
var inst_36672 = (state_36676[(2)]);
var state_36676__$1 = state_36676;
var statearr_36678_38210 = state_36676__$1;
(statearr_36678_38210[(2)] = inst_36672);

(statearr_36678_38210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (20))){
var state_36676__$1 = state_36676;
var statearr_36679_38211 = state_36676__$1;
(statearr_36679_38211[(2)] = null);

(statearr_36679_38211[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (1))){
var state_36676__$1 = state_36676;
var statearr_36680_38212 = state_36676__$1;
(statearr_36680_38212[(2)] = null);

(statearr_36680_38212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (4))){
var inst_36641 = (state_36676[(7)]);
var inst_36641__$1 = (state_36676[(2)]);
var inst_36642 = (inst_36641__$1 == null);
var state_36676__$1 = (function (){var statearr_36681 = state_36676;
(statearr_36681[(7)] = inst_36641__$1);

return statearr_36681;
})();
if(cljs.core.truth_(inst_36642)){
var statearr_36682_38213 = state_36676__$1;
(statearr_36682_38213[(1)] = (5));

} else {
var statearr_36683_38214 = state_36676__$1;
(statearr_36683_38214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (15))){
var inst_36654 = (state_36676[(8)]);
var state_36676__$1 = state_36676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36676__$1,(18),to,inst_36654);
} else {
if((state_val_36677 === (21))){
var inst_36667 = (state_36676[(2)]);
var state_36676__$1 = state_36676;
var statearr_36684_38215 = state_36676__$1;
(statearr_36684_38215[(2)] = inst_36667);

(statearr_36684_38215[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (13))){
var inst_36669 = (state_36676[(2)]);
var state_36676__$1 = (function (){var statearr_36685 = state_36676;
(statearr_36685[(9)] = inst_36669);

return statearr_36685;
})();
var statearr_36686_38216 = state_36676__$1;
(statearr_36686_38216[(2)] = null);

(statearr_36686_38216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (6))){
var inst_36641 = (state_36676[(7)]);
var state_36676__$1 = state_36676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36676__$1,(11),inst_36641);
} else {
if((state_val_36677 === (17))){
var inst_36662 = (state_36676[(2)]);
var state_36676__$1 = state_36676;
if(cljs.core.truth_(inst_36662)){
var statearr_36687_38217 = state_36676__$1;
(statearr_36687_38217[(1)] = (19));

} else {
var statearr_36688_38218 = state_36676__$1;
(statearr_36688_38218[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (3))){
var inst_36674 = (state_36676[(2)]);
var state_36676__$1 = state_36676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36676__$1,inst_36674);
} else {
if((state_val_36677 === (12))){
var inst_36651 = (state_36676[(10)]);
var state_36676__$1 = state_36676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36676__$1,(14),inst_36651);
} else {
if((state_val_36677 === (2))){
var state_36676__$1 = state_36676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36676__$1,(4),results);
} else {
if((state_val_36677 === (19))){
var state_36676__$1 = state_36676;
var statearr_36689_38219 = state_36676__$1;
(statearr_36689_38219[(2)] = null);

(statearr_36689_38219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (11))){
var inst_36651 = (state_36676[(2)]);
var state_36676__$1 = (function (){var statearr_36691 = state_36676;
(statearr_36691[(10)] = inst_36651);

return statearr_36691;
})();
var statearr_36692_38220 = state_36676__$1;
(statearr_36692_38220[(2)] = null);

(statearr_36692_38220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (9))){
var state_36676__$1 = state_36676;
var statearr_36695_38221 = state_36676__$1;
(statearr_36695_38221[(2)] = null);

(statearr_36695_38221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (5))){
var state_36676__$1 = state_36676;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36698_38222 = state_36676__$1;
(statearr_36698_38222[(1)] = (8));

} else {
var statearr_36700_38223 = state_36676__$1;
(statearr_36700_38223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (14))){
var inst_36656 = (state_36676[(11)]);
var inst_36654 = (state_36676[(8)]);
var inst_36654__$1 = (state_36676[(2)]);
var inst_36655 = (inst_36654__$1 == null);
var inst_36656__$1 = cljs.core.not(inst_36655);
var state_36676__$1 = (function (){var statearr_36702 = state_36676;
(statearr_36702[(11)] = inst_36656__$1);

(statearr_36702[(8)] = inst_36654__$1);

return statearr_36702;
})();
if(inst_36656__$1){
var statearr_36703_38225 = state_36676__$1;
(statearr_36703_38225[(1)] = (15));

} else {
var statearr_36704_38226 = state_36676__$1;
(statearr_36704_38226[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (16))){
var inst_36656 = (state_36676[(11)]);
var state_36676__$1 = state_36676;
var statearr_36705_38227 = state_36676__$1;
(statearr_36705_38227[(2)] = inst_36656);

(statearr_36705_38227[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (10))){
var inst_36648 = (state_36676[(2)]);
var state_36676__$1 = state_36676;
var statearr_36706_38229 = state_36676__$1;
(statearr_36706_38229[(2)] = inst_36648);

(statearr_36706_38229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (18))){
var inst_36659 = (state_36676[(2)]);
var state_36676__$1 = state_36676;
var statearr_36707_38230 = state_36676__$1;
(statearr_36707_38230[(2)] = inst_36659);

(statearr_36707_38230[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36677 === (8))){
var inst_36645 = cljs.core.async.close_BANG_(to);
var state_36676__$1 = state_36676;
var statearr_36708_38231 = state_36676__$1;
(statearr_36708_38231[(2)] = inst_36645);

(statearr_36708_38231[(1)] = (10));


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
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____0 = (function (){
var statearr_36709 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36709[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__);

(statearr_36709[(1)] = (1));

return statearr_36709;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____1 = (function (state_36676){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_36676);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e36710){var ex__36200__auto__ = e36710;
var statearr_36711_38232 = state_36676;
(statearr_36711_38232[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_36676[(4)]))){
var statearr_36712_38233 = state_36676;
(statearr_36712_38233[(1)] = cljs.core.first((state_36676[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38234 = state_36676;
state_36676 = G__38234;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__ = function(state_36676){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____1.call(this,state_36676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36197__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_36716 = f__36292__auto__();
(statearr_36716[(6)] = c__36291__auto__);

return statearr_36716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));

return c__36291__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__36718 = arguments.length;
switch (G__36718) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__36720 = arguments.length;
switch (G__36720) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__36728 = arguments.length;
switch (G__36728) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__36291__auto___38238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_36755){
var state_val_36756 = (state_36755[(1)]);
if((state_val_36756 === (7))){
var inst_36751 = (state_36755[(2)]);
var state_36755__$1 = state_36755;
var statearr_36757_38239 = state_36755__$1;
(statearr_36757_38239[(2)] = inst_36751);

(statearr_36757_38239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36756 === (1))){
var state_36755__$1 = state_36755;
var statearr_36761_38241 = state_36755__$1;
(statearr_36761_38241[(2)] = null);

(statearr_36761_38241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36756 === (4))){
var inst_36732 = (state_36755[(7)]);
var inst_36732__$1 = (state_36755[(2)]);
var inst_36733 = (inst_36732__$1 == null);
var state_36755__$1 = (function (){var statearr_36762 = state_36755;
(statearr_36762[(7)] = inst_36732__$1);

return statearr_36762;
})();
if(cljs.core.truth_(inst_36733)){
var statearr_36763_38243 = state_36755__$1;
(statearr_36763_38243[(1)] = (5));

} else {
var statearr_36764_38245 = state_36755__$1;
(statearr_36764_38245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36756 === (13))){
var state_36755__$1 = state_36755;
var statearr_36767_38246 = state_36755__$1;
(statearr_36767_38246[(2)] = null);

(statearr_36767_38246[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36756 === (6))){
var inst_36732 = (state_36755[(7)]);
var inst_36738 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36732) : p.call(null,inst_36732));
var state_36755__$1 = state_36755;
if(cljs.core.truth_(inst_36738)){
var statearr_36768_38247 = state_36755__$1;
(statearr_36768_38247[(1)] = (9));

} else {
var statearr_36769_38248 = state_36755__$1;
(statearr_36769_38248[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36756 === (3))){
var inst_36753 = (state_36755[(2)]);
var state_36755__$1 = state_36755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36755__$1,inst_36753);
} else {
if((state_val_36756 === (12))){
var state_36755__$1 = state_36755;
var statearr_36770_38249 = state_36755__$1;
(statearr_36770_38249[(2)] = null);

(statearr_36770_38249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36756 === (2))){
var state_36755__$1 = state_36755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36755__$1,(4),ch);
} else {
if((state_val_36756 === (11))){
var inst_36732 = (state_36755[(7)]);
var inst_36742 = (state_36755[(2)]);
var state_36755__$1 = state_36755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36755__$1,(8),inst_36742,inst_36732);
} else {
if((state_val_36756 === (9))){
var state_36755__$1 = state_36755;
var statearr_36771_38250 = state_36755__$1;
(statearr_36771_38250[(2)] = tc);

(statearr_36771_38250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36756 === (5))){
var inst_36735 = cljs.core.async.close_BANG_(tc);
var inst_36736 = cljs.core.async.close_BANG_(fc);
var state_36755__$1 = (function (){var statearr_36772 = state_36755;
(statearr_36772[(8)] = inst_36735);

return statearr_36772;
})();
var statearr_36773_38252 = state_36755__$1;
(statearr_36773_38252[(2)] = inst_36736);

(statearr_36773_38252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36756 === (14))){
var inst_36749 = (state_36755[(2)]);
var state_36755__$1 = state_36755;
var statearr_36775_38254 = state_36755__$1;
(statearr_36775_38254[(2)] = inst_36749);

(statearr_36775_38254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36756 === (10))){
var state_36755__$1 = state_36755;
var statearr_36776_38255 = state_36755__$1;
(statearr_36776_38255[(2)] = fc);

(statearr_36776_38255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36756 === (8))){
var inst_36744 = (state_36755[(2)]);
var state_36755__$1 = state_36755;
if(cljs.core.truth_(inst_36744)){
var statearr_36777_38256 = state_36755__$1;
(statearr_36777_38256[(1)] = (12));

} else {
var statearr_36778_38257 = state_36755__$1;
(statearr_36778_38257[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__36197__auto__ = null;
var cljs$core$async$state_machine__36197__auto____0 = (function (){
var statearr_36779 = [null,null,null,null,null,null,null,null,null];
(statearr_36779[(0)] = cljs$core$async$state_machine__36197__auto__);

(statearr_36779[(1)] = (1));

return statearr_36779;
});
var cljs$core$async$state_machine__36197__auto____1 = (function (state_36755){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_36755);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e36780){var ex__36200__auto__ = e36780;
var statearr_36781_38258 = state_36755;
(statearr_36781_38258[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_36755[(4)]))){
var statearr_36782_38260 = state_36755;
(statearr_36782_38260[(1)] = cljs.core.first((state_36755[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38261 = state_36755;
state_36755 = G__38261;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$state_machine__36197__auto__ = function(state_36755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36197__auto____1.call(this,state_36755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36197__auto____0;
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36197__auto____1;
return cljs$core$async$state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_36783 = f__36292__auto__();
(statearr_36783[(6)] = c__36291__auto___38238);

return statearr_36783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__36291__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_36811){
var state_val_36812 = (state_36811[(1)]);
if((state_val_36812 === (7))){
var inst_36807 = (state_36811[(2)]);
var state_36811__$1 = state_36811;
var statearr_36813_38263 = state_36811__$1;
(statearr_36813_38263[(2)] = inst_36807);

(statearr_36813_38263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (1))){
var inst_36790 = init;
var inst_36791 = inst_36790;
var state_36811__$1 = (function (){var statearr_36814 = state_36811;
(statearr_36814[(7)] = inst_36791);

return statearr_36814;
})();
var statearr_36815_38264 = state_36811__$1;
(statearr_36815_38264[(2)] = null);

(statearr_36815_38264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (4))){
var inst_36794 = (state_36811[(8)]);
var inst_36794__$1 = (state_36811[(2)]);
var inst_36795 = (inst_36794__$1 == null);
var state_36811__$1 = (function (){var statearr_36817 = state_36811;
(statearr_36817[(8)] = inst_36794__$1);

return statearr_36817;
})();
if(cljs.core.truth_(inst_36795)){
var statearr_36818_38265 = state_36811__$1;
(statearr_36818_38265[(1)] = (5));

} else {
var statearr_36819_38266 = state_36811__$1;
(statearr_36819_38266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (6))){
var inst_36791 = (state_36811[(7)]);
var inst_36794 = (state_36811[(8)]);
var inst_36798 = (state_36811[(9)]);
var inst_36798__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36791,inst_36794) : f.call(null,inst_36791,inst_36794));
var inst_36799 = cljs.core.reduced_QMARK_(inst_36798__$1);
var state_36811__$1 = (function (){var statearr_36820 = state_36811;
(statearr_36820[(9)] = inst_36798__$1);

return statearr_36820;
})();
if(inst_36799){
var statearr_36823_38267 = state_36811__$1;
(statearr_36823_38267[(1)] = (8));

} else {
var statearr_36824_38268 = state_36811__$1;
(statearr_36824_38268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (3))){
var inst_36809 = (state_36811[(2)]);
var state_36811__$1 = state_36811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36811__$1,inst_36809);
} else {
if((state_val_36812 === (2))){
var state_36811__$1 = state_36811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36811__$1,(4),ch);
} else {
if((state_val_36812 === (9))){
var inst_36798 = (state_36811[(9)]);
var inst_36791 = inst_36798;
var state_36811__$1 = (function (){var statearr_36828 = state_36811;
(statearr_36828[(7)] = inst_36791);

return statearr_36828;
})();
var statearr_36829_38271 = state_36811__$1;
(statearr_36829_38271[(2)] = null);

(statearr_36829_38271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (5))){
var inst_36791 = (state_36811[(7)]);
var state_36811__$1 = state_36811;
var statearr_36830_38272 = state_36811__$1;
(statearr_36830_38272[(2)] = inst_36791);

(statearr_36830_38272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (10))){
var inst_36805 = (state_36811[(2)]);
var state_36811__$1 = state_36811;
var statearr_36831_38273 = state_36811__$1;
(statearr_36831_38273[(2)] = inst_36805);

(statearr_36831_38273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36812 === (8))){
var inst_36798 = (state_36811[(9)]);
var inst_36801 = cljs.core.deref(inst_36798);
var state_36811__$1 = state_36811;
var statearr_36832_38274 = state_36811__$1;
(statearr_36832_38274[(2)] = inst_36801);

(statearr_36832_38274[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__36197__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36197__auto____0 = (function (){
var statearr_36834 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36834[(0)] = cljs$core$async$reduce_$_state_machine__36197__auto__);

(statearr_36834[(1)] = (1));

return statearr_36834;
});
var cljs$core$async$reduce_$_state_machine__36197__auto____1 = (function (state_36811){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_36811);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e36835){var ex__36200__auto__ = e36835;
var statearr_36836_38275 = state_36811;
(statearr_36836_38275[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_36811[(4)]))){
var statearr_36837_38276 = state_36811;
(statearr_36837_38276[(1)] = cljs.core.first((state_36811[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38277 = state_36811;
state_36811 = G__38277;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36197__auto__ = function(state_36811){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36197__auto____1.call(this,state_36811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36197__auto____0;
cljs$core$async$reduce_$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36197__auto____1;
return cljs$core$async$reduce_$_state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_36840 = f__36292__auto__();
(statearr_36840[(6)] = c__36291__auto__);

return statearr_36840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));

return c__36291__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__36291__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_36853){
var state_val_36854 = (state_36853[(1)]);
if((state_val_36854 === (1))){
var inst_36848 = cljs.core.async.reduce(f__$1,init,ch);
var state_36853__$1 = state_36853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36853__$1,(2),inst_36848);
} else {
if((state_val_36854 === (2))){
var inst_36850 = (state_36853[(2)]);
var inst_36851 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_36850) : f__$1.call(null,inst_36850));
var state_36853__$1 = state_36853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36853__$1,inst_36851);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36197__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36197__auto____0 = (function (){
var statearr_36855 = [null,null,null,null,null,null,null];
(statearr_36855[(0)] = cljs$core$async$transduce_$_state_machine__36197__auto__);

(statearr_36855[(1)] = (1));

return statearr_36855;
});
var cljs$core$async$transduce_$_state_machine__36197__auto____1 = (function (state_36853){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_36853);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e36856){var ex__36200__auto__ = e36856;
var statearr_36857_38281 = state_36853;
(statearr_36857_38281[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_36853[(4)]))){
var statearr_36858_38282 = state_36853;
(statearr_36858_38282[(1)] = cljs.core.first((state_36853[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38283 = state_36853;
state_36853 = G__38283;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36197__auto__ = function(state_36853){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36197__auto____1.call(this,state_36853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36197__auto____0;
cljs$core$async$transduce_$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36197__auto____1;
return cljs$core$async$transduce_$_state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_36862 = f__36292__auto__();
(statearr_36862[(6)] = c__36291__auto__);

return statearr_36862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));

return c__36291__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__36867 = arguments.length;
switch (G__36867) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36291__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_36893){
var state_val_36894 = (state_36893[(1)]);
if((state_val_36894 === (7))){
var inst_36875 = (state_36893[(2)]);
var state_36893__$1 = state_36893;
var statearr_36895_38288 = state_36893__$1;
(statearr_36895_38288[(2)] = inst_36875);

(statearr_36895_38288[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (1))){
var inst_36869 = cljs.core.seq(coll);
var inst_36870 = inst_36869;
var state_36893__$1 = (function (){var statearr_36896 = state_36893;
(statearr_36896[(7)] = inst_36870);

return statearr_36896;
})();
var statearr_36898_38289 = state_36893__$1;
(statearr_36898_38289[(2)] = null);

(statearr_36898_38289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (4))){
var inst_36870 = (state_36893[(7)]);
var inst_36873 = cljs.core.first(inst_36870);
var state_36893__$1 = state_36893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36893__$1,(7),ch,inst_36873);
} else {
if((state_val_36894 === (13))){
var inst_36887 = (state_36893[(2)]);
var state_36893__$1 = state_36893;
var statearr_36899_38290 = state_36893__$1;
(statearr_36899_38290[(2)] = inst_36887);

(statearr_36899_38290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (6))){
var inst_36878 = (state_36893[(2)]);
var state_36893__$1 = state_36893;
if(cljs.core.truth_(inst_36878)){
var statearr_36900_38291 = state_36893__$1;
(statearr_36900_38291[(1)] = (8));

} else {
var statearr_36902_38292 = state_36893__$1;
(statearr_36902_38292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (3))){
var inst_36891 = (state_36893[(2)]);
var state_36893__$1 = state_36893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36893__$1,inst_36891);
} else {
if((state_val_36894 === (12))){
var state_36893__$1 = state_36893;
var statearr_36904_38293 = state_36893__$1;
(statearr_36904_38293[(2)] = null);

(statearr_36904_38293[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (2))){
var inst_36870 = (state_36893[(7)]);
var state_36893__$1 = state_36893;
if(cljs.core.truth_(inst_36870)){
var statearr_36905_38294 = state_36893__$1;
(statearr_36905_38294[(1)] = (4));

} else {
var statearr_36906_38295 = state_36893__$1;
(statearr_36906_38295[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (11))){
var inst_36884 = cljs.core.async.close_BANG_(ch);
var state_36893__$1 = state_36893;
var statearr_36907_38296 = state_36893__$1;
(statearr_36907_38296[(2)] = inst_36884);

(statearr_36907_38296[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (9))){
var state_36893__$1 = state_36893;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36912_38297 = state_36893__$1;
(statearr_36912_38297[(1)] = (11));

} else {
var statearr_36913_38298 = state_36893__$1;
(statearr_36913_38298[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (5))){
var inst_36870 = (state_36893[(7)]);
var state_36893__$1 = state_36893;
var statearr_36914_38299 = state_36893__$1;
(statearr_36914_38299[(2)] = inst_36870);

(statearr_36914_38299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (10))){
var inst_36889 = (state_36893[(2)]);
var state_36893__$1 = state_36893;
var statearr_36915_38300 = state_36893__$1;
(statearr_36915_38300[(2)] = inst_36889);

(statearr_36915_38300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (8))){
var inst_36870 = (state_36893[(7)]);
var inst_36880 = cljs.core.next(inst_36870);
var inst_36870__$1 = inst_36880;
var state_36893__$1 = (function (){var statearr_36916 = state_36893;
(statearr_36916[(7)] = inst_36870__$1);

return statearr_36916;
})();
var statearr_36917_38303 = state_36893__$1;
(statearr_36917_38303[(2)] = null);

(statearr_36917_38303[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__36197__auto__ = null;
var cljs$core$async$state_machine__36197__auto____0 = (function (){
var statearr_36918 = [null,null,null,null,null,null,null,null];
(statearr_36918[(0)] = cljs$core$async$state_machine__36197__auto__);

(statearr_36918[(1)] = (1));

return statearr_36918;
});
var cljs$core$async$state_machine__36197__auto____1 = (function (state_36893){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_36893);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e36919){var ex__36200__auto__ = e36919;
var statearr_36920_38305 = state_36893;
(statearr_36920_38305[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_36893[(4)]))){
var statearr_36921_38306 = state_36893;
(statearr_36921_38306[(1)] = cljs.core.first((state_36893[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38308 = state_36893;
state_36893 = G__38308;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$state_machine__36197__auto__ = function(state_36893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36197__auto____1.call(this,state_36893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36197__auto____0;
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36197__auto____1;
return cljs$core$async$state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_36922 = f__36292__auto__();
(statearr_36922[(6)] = c__36291__auto__);

return statearr_36922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));

return c__36291__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__36925 = arguments.length;
switch (G__36925) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_38312 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_38312(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_38313 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_38313(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_38314 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_38314(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_38315 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_38315(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36954 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36954 = (function (ch,cs,meta36955){
this.ch = ch;
this.cs = cs;
this.meta36955 = meta36955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36956,meta36955__$1){
var self__ = this;
var _36956__$1 = this;
return (new cljs.core.async.t_cljs$core$async36954(self__.ch,self__.cs,meta36955__$1));
}));

(cljs.core.async.t_cljs$core$async36954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36956){
var self__ = this;
var _36956__$1 = this;
return self__.meta36955;
}));

(cljs.core.async.t_cljs$core$async36954.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36954.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36954.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36954.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async36954.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async36954.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async36954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36955","meta36955",1912618869,null)], null);
}));

(cljs.core.async.t_cljs$core$async36954.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36954");

(cljs.core.async.t_cljs$core$async36954.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async36954");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36954.
 */
cljs.core.async.__GT_t_cljs$core$async36954 = (function cljs$core$async$mult_$___GT_t_cljs$core$async36954(ch__$1,cs__$1,meta36955){
return (new cljs.core.async.t_cljs$core$async36954(ch__$1,cs__$1,meta36955));
});

}

return (new cljs.core.async.t_cljs$core$async36954(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__36291__auto___38319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_37109){
var state_val_37110 = (state_37109[(1)]);
if((state_val_37110 === (7))){
var inst_37105 = (state_37109[(2)]);
var state_37109__$1 = state_37109;
var statearr_37111_38320 = state_37109__$1;
(statearr_37111_38320[(2)] = inst_37105);

(statearr_37111_38320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (20))){
var inst_37000 = (state_37109[(7)]);
var inst_37012 = cljs.core.first(inst_37000);
var inst_37013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37012,(0),null);
var inst_37014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37012,(1),null);
var state_37109__$1 = (function (){var statearr_37112 = state_37109;
(statearr_37112[(8)] = inst_37013);

return statearr_37112;
})();
if(cljs.core.truth_(inst_37014)){
var statearr_37113_38321 = state_37109__$1;
(statearr_37113_38321[(1)] = (22));

} else {
var statearr_37114_38322 = state_37109__$1;
(statearr_37114_38322[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (27))){
var inst_36966 = (state_37109[(9)]);
var inst_37049 = (state_37109[(10)]);
var inst_37042 = (state_37109[(11)]);
var inst_37044 = (state_37109[(12)]);
var inst_37049__$1 = cljs.core._nth(inst_37042,inst_37044);
var inst_37050 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37049__$1,inst_36966,done);
var state_37109__$1 = (function (){var statearr_37115 = state_37109;
(statearr_37115[(10)] = inst_37049__$1);

return statearr_37115;
})();
if(cljs.core.truth_(inst_37050)){
var statearr_37116_38323 = state_37109__$1;
(statearr_37116_38323[(1)] = (30));

} else {
var statearr_37117_38324 = state_37109__$1;
(statearr_37117_38324[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (1))){
var state_37109__$1 = state_37109;
var statearr_37118_38325 = state_37109__$1;
(statearr_37118_38325[(2)] = null);

(statearr_37118_38325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (24))){
var inst_37000 = (state_37109[(7)]);
var inst_37019 = (state_37109[(2)]);
var inst_37020 = cljs.core.next(inst_37000);
var inst_36975 = inst_37020;
var inst_36976 = null;
var inst_36977 = (0);
var inst_36978 = (0);
var state_37109__$1 = (function (){var statearr_37119 = state_37109;
(statearr_37119[(13)] = inst_36976);

(statearr_37119[(14)] = inst_36978);

(statearr_37119[(15)] = inst_36977);

(statearr_37119[(16)] = inst_36975);

(statearr_37119[(17)] = inst_37019);

return statearr_37119;
})();
var statearr_37121_38326 = state_37109__$1;
(statearr_37121_38326[(2)] = null);

(statearr_37121_38326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (39))){
var state_37109__$1 = state_37109;
var statearr_37125_38327 = state_37109__$1;
(statearr_37125_38327[(2)] = null);

(statearr_37125_38327[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (4))){
var inst_36966 = (state_37109[(9)]);
var inst_36966__$1 = (state_37109[(2)]);
var inst_36967 = (inst_36966__$1 == null);
var state_37109__$1 = (function (){var statearr_37128 = state_37109;
(statearr_37128[(9)] = inst_36966__$1);

return statearr_37128;
})();
if(cljs.core.truth_(inst_36967)){
var statearr_37130_38328 = state_37109__$1;
(statearr_37130_38328[(1)] = (5));

} else {
var statearr_37131_38329 = state_37109__$1;
(statearr_37131_38329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (15))){
var inst_36976 = (state_37109[(13)]);
var inst_36978 = (state_37109[(14)]);
var inst_36977 = (state_37109[(15)]);
var inst_36975 = (state_37109[(16)]);
var inst_36996 = (state_37109[(2)]);
var inst_36997 = (inst_36978 + (1));
var tmp37122 = inst_36976;
var tmp37123 = inst_36977;
var tmp37124 = inst_36975;
var inst_36975__$1 = tmp37124;
var inst_36976__$1 = tmp37122;
var inst_36977__$1 = tmp37123;
var inst_36978__$1 = inst_36997;
var state_37109__$1 = (function (){var statearr_37132 = state_37109;
(statearr_37132[(13)] = inst_36976__$1);

(statearr_37132[(14)] = inst_36978__$1);

(statearr_37132[(15)] = inst_36977__$1);

(statearr_37132[(16)] = inst_36975__$1);

(statearr_37132[(18)] = inst_36996);

return statearr_37132;
})();
var statearr_37133_38331 = state_37109__$1;
(statearr_37133_38331[(2)] = null);

(statearr_37133_38331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (21))){
var inst_37023 = (state_37109[(2)]);
var state_37109__$1 = state_37109;
var statearr_37140_38332 = state_37109__$1;
(statearr_37140_38332[(2)] = inst_37023);

(statearr_37140_38332[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (31))){
var inst_37049 = (state_37109[(10)]);
var inst_37053 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37049);
var state_37109__$1 = state_37109;
var statearr_37141_38333 = state_37109__$1;
(statearr_37141_38333[(2)] = inst_37053);

(statearr_37141_38333[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (32))){
var inst_37042 = (state_37109[(11)]);
var inst_37041 = (state_37109[(19)]);
var inst_37044 = (state_37109[(12)]);
var inst_37043 = (state_37109[(20)]);
var inst_37055 = (state_37109[(2)]);
var inst_37063 = (inst_37044 + (1));
var tmp37135 = inst_37042;
var tmp37136 = inst_37041;
var tmp37137 = inst_37043;
var inst_37041__$1 = tmp37136;
var inst_37042__$1 = tmp37135;
var inst_37043__$1 = tmp37137;
var inst_37044__$1 = inst_37063;
var state_37109__$1 = (function (){var statearr_37142 = state_37109;
(statearr_37142[(11)] = inst_37042__$1);

(statearr_37142[(19)] = inst_37041__$1);

(statearr_37142[(12)] = inst_37044__$1);

(statearr_37142[(20)] = inst_37043__$1);

(statearr_37142[(21)] = inst_37055);

return statearr_37142;
})();
var statearr_37143_38334 = state_37109__$1;
(statearr_37143_38334[(2)] = null);

(statearr_37143_38334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (40))){
var inst_37077 = (state_37109[(22)]);
var inst_37082 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37077);
var state_37109__$1 = state_37109;
var statearr_37144_38335 = state_37109__$1;
(statearr_37144_38335[(2)] = inst_37082);

(statearr_37144_38335[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (33))){
var inst_37066 = (state_37109[(23)]);
var inst_37068 = cljs.core.chunked_seq_QMARK_(inst_37066);
var state_37109__$1 = state_37109;
if(inst_37068){
var statearr_37145_38336 = state_37109__$1;
(statearr_37145_38336[(1)] = (36));

} else {
var statearr_37146_38337 = state_37109__$1;
(statearr_37146_38337[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (13))){
var inst_36990 = (state_37109[(24)]);
var inst_36993 = cljs.core.async.close_BANG_(inst_36990);
var state_37109__$1 = state_37109;
var statearr_37147_38338 = state_37109__$1;
(statearr_37147_38338[(2)] = inst_36993);

(statearr_37147_38338[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (22))){
var inst_37013 = (state_37109[(8)]);
var inst_37016 = cljs.core.async.close_BANG_(inst_37013);
var state_37109__$1 = state_37109;
var statearr_37148_38339 = state_37109__$1;
(statearr_37148_38339[(2)] = inst_37016);

(statearr_37148_38339[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (36))){
var inst_37066 = (state_37109[(23)]);
var inst_37070 = cljs.core.chunk_first(inst_37066);
var inst_37071 = cljs.core.chunk_rest(inst_37066);
var inst_37072 = cljs.core.count(inst_37070);
var inst_37041 = inst_37071;
var inst_37042 = inst_37070;
var inst_37043 = inst_37072;
var inst_37044 = (0);
var state_37109__$1 = (function (){var statearr_37149 = state_37109;
(statearr_37149[(11)] = inst_37042);

(statearr_37149[(19)] = inst_37041);

(statearr_37149[(12)] = inst_37044);

(statearr_37149[(20)] = inst_37043);

return statearr_37149;
})();
var statearr_37150_38340 = state_37109__$1;
(statearr_37150_38340[(2)] = null);

(statearr_37150_38340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (41))){
var inst_37066 = (state_37109[(23)]);
var inst_37084 = (state_37109[(2)]);
var inst_37085 = cljs.core.next(inst_37066);
var inst_37041 = inst_37085;
var inst_37042 = null;
var inst_37043 = (0);
var inst_37044 = (0);
var state_37109__$1 = (function (){var statearr_37151 = state_37109;
(statearr_37151[(11)] = inst_37042);

(statearr_37151[(19)] = inst_37041);

(statearr_37151[(12)] = inst_37044);

(statearr_37151[(20)] = inst_37043);

(statearr_37151[(25)] = inst_37084);

return statearr_37151;
})();
var statearr_37152_38341 = state_37109__$1;
(statearr_37152_38341[(2)] = null);

(statearr_37152_38341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (43))){
var state_37109__$1 = state_37109;
var statearr_37153_38342 = state_37109__$1;
(statearr_37153_38342[(2)] = null);

(statearr_37153_38342[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (29))){
var inst_37093 = (state_37109[(2)]);
var state_37109__$1 = state_37109;
var statearr_37154_38343 = state_37109__$1;
(statearr_37154_38343[(2)] = inst_37093);

(statearr_37154_38343[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (44))){
var inst_37102 = (state_37109[(2)]);
var state_37109__$1 = (function (){var statearr_37155 = state_37109;
(statearr_37155[(26)] = inst_37102);

return statearr_37155;
})();
var statearr_37156_38344 = state_37109__$1;
(statearr_37156_38344[(2)] = null);

(statearr_37156_38344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (6))){
var inst_37033 = (state_37109[(27)]);
var inst_37032 = cljs.core.deref(cs);
var inst_37033__$1 = cljs.core.keys(inst_37032);
var inst_37034 = cljs.core.count(inst_37033__$1);
var inst_37035 = cljs.core.reset_BANG_(dctr,inst_37034);
var inst_37040 = cljs.core.seq(inst_37033__$1);
var inst_37041 = inst_37040;
var inst_37042 = null;
var inst_37043 = (0);
var inst_37044 = (0);
var state_37109__$1 = (function (){var statearr_37157 = state_37109;
(statearr_37157[(11)] = inst_37042);

(statearr_37157[(19)] = inst_37041);

(statearr_37157[(12)] = inst_37044);

(statearr_37157[(20)] = inst_37043);

(statearr_37157[(28)] = inst_37035);

(statearr_37157[(27)] = inst_37033__$1);

return statearr_37157;
})();
var statearr_37158_38345 = state_37109__$1;
(statearr_37158_38345[(2)] = null);

(statearr_37158_38345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (28))){
var inst_37041 = (state_37109[(19)]);
var inst_37066 = (state_37109[(23)]);
var inst_37066__$1 = cljs.core.seq(inst_37041);
var state_37109__$1 = (function (){var statearr_37159 = state_37109;
(statearr_37159[(23)] = inst_37066__$1);

return statearr_37159;
})();
if(inst_37066__$1){
var statearr_37160_38346 = state_37109__$1;
(statearr_37160_38346[(1)] = (33));

} else {
var statearr_37161_38347 = state_37109__$1;
(statearr_37161_38347[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (25))){
var inst_37044 = (state_37109[(12)]);
var inst_37043 = (state_37109[(20)]);
var inst_37046 = (inst_37044 < inst_37043);
var inst_37047 = inst_37046;
var state_37109__$1 = state_37109;
if(cljs.core.truth_(inst_37047)){
var statearr_37162_38348 = state_37109__$1;
(statearr_37162_38348[(1)] = (27));

} else {
var statearr_37163_38349 = state_37109__$1;
(statearr_37163_38349[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (34))){
var state_37109__$1 = state_37109;
var statearr_37164_38350 = state_37109__$1;
(statearr_37164_38350[(2)] = null);

(statearr_37164_38350[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (17))){
var state_37109__$1 = state_37109;
var statearr_37165_38351 = state_37109__$1;
(statearr_37165_38351[(2)] = null);

(statearr_37165_38351[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (3))){
var inst_37107 = (state_37109[(2)]);
var state_37109__$1 = state_37109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37109__$1,inst_37107);
} else {
if((state_val_37110 === (12))){
var inst_37028 = (state_37109[(2)]);
var state_37109__$1 = state_37109;
var statearr_37166_38352 = state_37109__$1;
(statearr_37166_38352[(2)] = inst_37028);

(statearr_37166_38352[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (2))){
var state_37109__$1 = state_37109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37109__$1,(4),ch);
} else {
if((state_val_37110 === (23))){
var state_37109__$1 = state_37109;
var statearr_37167_38353 = state_37109__$1;
(statearr_37167_38353[(2)] = null);

(statearr_37167_38353[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (35))){
var inst_37091 = (state_37109[(2)]);
var state_37109__$1 = state_37109;
var statearr_37168_38354 = state_37109__$1;
(statearr_37168_38354[(2)] = inst_37091);

(statearr_37168_38354[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (19))){
var inst_37000 = (state_37109[(7)]);
var inst_37004 = cljs.core.chunk_first(inst_37000);
var inst_37005 = cljs.core.chunk_rest(inst_37000);
var inst_37006 = cljs.core.count(inst_37004);
var inst_36975 = inst_37005;
var inst_36976 = inst_37004;
var inst_36977 = inst_37006;
var inst_36978 = (0);
var state_37109__$1 = (function (){var statearr_37169 = state_37109;
(statearr_37169[(13)] = inst_36976);

(statearr_37169[(14)] = inst_36978);

(statearr_37169[(15)] = inst_36977);

(statearr_37169[(16)] = inst_36975);

return statearr_37169;
})();
var statearr_37170_38355 = state_37109__$1;
(statearr_37170_38355[(2)] = null);

(statearr_37170_38355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (11))){
var inst_37000 = (state_37109[(7)]);
var inst_36975 = (state_37109[(16)]);
var inst_37000__$1 = cljs.core.seq(inst_36975);
var state_37109__$1 = (function (){var statearr_37171 = state_37109;
(statearr_37171[(7)] = inst_37000__$1);

return statearr_37171;
})();
if(inst_37000__$1){
var statearr_37172_38356 = state_37109__$1;
(statearr_37172_38356[(1)] = (16));

} else {
var statearr_37173_38357 = state_37109__$1;
(statearr_37173_38357[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (9))){
var inst_37030 = (state_37109[(2)]);
var state_37109__$1 = state_37109;
var statearr_37174_38358 = state_37109__$1;
(statearr_37174_38358[(2)] = inst_37030);

(statearr_37174_38358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (5))){
var inst_36973 = cljs.core.deref(cs);
var inst_36974 = cljs.core.seq(inst_36973);
var inst_36975 = inst_36974;
var inst_36976 = null;
var inst_36977 = (0);
var inst_36978 = (0);
var state_37109__$1 = (function (){var statearr_37175 = state_37109;
(statearr_37175[(13)] = inst_36976);

(statearr_37175[(14)] = inst_36978);

(statearr_37175[(15)] = inst_36977);

(statearr_37175[(16)] = inst_36975);

return statearr_37175;
})();
var statearr_37176_38361 = state_37109__$1;
(statearr_37176_38361[(2)] = null);

(statearr_37176_38361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (14))){
var state_37109__$1 = state_37109;
var statearr_37177_38362 = state_37109__$1;
(statearr_37177_38362[(2)] = null);

(statearr_37177_38362[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (45))){
var inst_37099 = (state_37109[(2)]);
var state_37109__$1 = state_37109;
var statearr_37178_38363 = state_37109__$1;
(statearr_37178_38363[(2)] = inst_37099);

(statearr_37178_38363[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (26))){
var inst_37033 = (state_37109[(27)]);
var inst_37095 = (state_37109[(2)]);
var inst_37096 = cljs.core.seq(inst_37033);
var state_37109__$1 = (function (){var statearr_37179 = state_37109;
(statearr_37179[(29)] = inst_37095);

return statearr_37179;
})();
if(inst_37096){
var statearr_37180_38364 = state_37109__$1;
(statearr_37180_38364[(1)] = (42));

} else {
var statearr_37181_38365 = state_37109__$1;
(statearr_37181_38365[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (16))){
var inst_37000 = (state_37109[(7)]);
var inst_37002 = cljs.core.chunked_seq_QMARK_(inst_37000);
var state_37109__$1 = state_37109;
if(inst_37002){
var statearr_37182_38366 = state_37109__$1;
(statearr_37182_38366[(1)] = (19));

} else {
var statearr_37183_38367 = state_37109__$1;
(statearr_37183_38367[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (38))){
var inst_37088 = (state_37109[(2)]);
var state_37109__$1 = state_37109;
var statearr_37184_38368 = state_37109__$1;
(statearr_37184_38368[(2)] = inst_37088);

(statearr_37184_38368[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (30))){
var state_37109__$1 = state_37109;
var statearr_37185_38370 = state_37109__$1;
(statearr_37185_38370[(2)] = null);

(statearr_37185_38370[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (10))){
var inst_36976 = (state_37109[(13)]);
var inst_36978 = (state_37109[(14)]);
var inst_36989 = cljs.core._nth(inst_36976,inst_36978);
var inst_36990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36989,(0),null);
var inst_36991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36989,(1),null);
var state_37109__$1 = (function (){var statearr_37186 = state_37109;
(statearr_37186[(24)] = inst_36990);

return statearr_37186;
})();
if(cljs.core.truth_(inst_36991)){
var statearr_37187_38385 = state_37109__$1;
(statearr_37187_38385[(1)] = (13));

} else {
var statearr_37188_38388 = state_37109__$1;
(statearr_37188_38388[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (18))){
var inst_37026 = (state_37109[(2)]);
var state_37109__$1 = state_37109;
var statearr_37189_38391 = state_37109__$1;
(statearr_37189_38391[(2)] = inst_37026);

(statearr_37189_38391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (42))){
var state_37109__$1 = state_37109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37109__$1,(45),dchan);
} else {
if((state_val_37110 === (37))){
var inst_37077 = (state_37109[(22)]);
var inst_36966 = (state_37109[(9)]);
var inst_37066 = (state_37109[(23)]);
var inst_37077__$1 = cljs.core.first(inst_37066);
var inst_37078 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37077__$1,inst_36966,done);
var state_37109__$1 = (function (){var statearr_37190 = state_37109;
(statearr_37190[(22)] = inst_37077__$1);

return statearr_37190;
})();
if(cljs.core.truth_(inst_37078)){
var statearr_37191_38392 = state_37109__$1;
(statearr_37191_38392[(1)] = (39));

} else {
var statearr_37192_38393 = state_37109__$1;
(statearr_37192_38393[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37110 === (8))){
var inst_36978 = (state_37109[(14)]);
var inst_36977 = (state_37109[(15)]);
var inst_36980 = (inst_36978 < inst_36977);
var inst_36981 = inst_36980;
var state_37109__$1 = state_37109;
if(cljs.core.truth_(inst_36981)){
var statearr_37193_38394 = state_37109__$1;
(statearr_37193_38394[(1)] = (10));

} else {
var statearr_37194_38396 = state_37109__$1;
(statearr_37194_38396[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__36197__auto__ = null;
var cljs$core$async$mult_$_state_machine__36197__auto____0 = (function (){
var statearr_37195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37195[(0)] = cljs$core$async$mult_$_state_machine__36197__auto__);

(statearr_37195[(1)] = (1));

return statearr_37195;
});
var cljs$core$async$mult_$_state_machine__36197__auto____1 = (function (state_37109){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_37109);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e37196){var ex__36200__auto__ = e37196;
var statearr_37197_38397 = state_37109;
(statearr_37197_38397[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_37109[(4)]))){
var statearr_37198_38398 = state_37109;
(statearr_37198_38398[(1)] = cljs.core.first((state_37109[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38399 = state_37109;
state_37109 = G__38399;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36197__auto__ = function(state_37109){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36197__auto____1.call(this,state_37109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36197__auto____0;
cljs$core$async$mult_$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36197__auto____1;
return cljs$core$async$mult_$_state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_37199 = f__36292__auto__();
(statearr_37199[(6)] = c__36291__auto___38319);

return statearr_37199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__37206 = arguments.length;
switch (G__37206) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_38403 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_38403(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_38404 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_38404(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_38405 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_38405(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_38406 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_38406(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_38407 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_38407(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___38408 = arguments.length;
var i__4830__auto___38409 = (0);
while(true){
if((i__4830__auto___38409 < len__4829__auto___38408)){
args__4835__auto__.push((arguments[i__4830__auto___38409]));

var G__38410 = (i__4830__auto___38409 + (1));
i__4830__auto___38409 = G__38410;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37221){
var map__37222 = p__37221;
var map__37222__$1 = cljs.core.__destructure_map(map__37222);
var opts = map__37222__$1;
var statearr_37223_38411 = state;
(statearr_37223_38411[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_37224_38412 = state;
(statearr_37224_38412[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_37225_38413 = state;
(statearr_37225_38413[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37217){
var G__37218 = cljs.core.first(seq37217);
var seq37217__$1 = cljs.core.next(seq37217);
var G__37219 = cljs.core.first(seq37217__$1);
var seq37217__$2 = cljs.core.next(seq37217__$1);
var G__37220 = cljs.core.first(seq37217__$2);
var seq37217__$3 = cljs.core.next(seq37217__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37218,G__37219,G__37220,seq37217__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37233 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37234){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37234 = meta37234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37235,meta37234__$1){
var self__ = this;
var _37235__$1 = this;
return (new cljs.core.async.t_cljs$core$async37233(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37234__$1));
}));

(cljs.core.async.t_cljs$core$async37233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37235){
var self__ = this;
var _37235__$1 = this;
return self__.meta37234;
}));

(cljs.core.async.t_cljs$core$async37233.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37233.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37233.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37233.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37233.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37233.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37233.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37233.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37234","meta37234",-81362772,null)], null);
}));

(cljs.core.async.t_cljs$core$async37233.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37233");

(cljs.core.async.t_cljs$core$async37233.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async37233");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37233.
 */
cljs.core.async.__GT_t_cljs$core$async37233 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37233(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37234){
return (new cljs.core.async.t_cljs$core$async37233(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37234));
});

}

return (new cljs.core.async.t_cljs$core$async37233(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36291__auto___38424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_37312){
var state_val_37313 = (state_37312[(1)]);
if((state_val_37313 === (7))){
var inst_37271 = (state_37312[(2)]);
var state_37312__$1 = state_37312;
if(cljs.core.truth_(inst_37271)){
var statearr_37314_38426 = state_37312__$1;
(statearr_37314_38426[(1)] = (8));

} else {
var statearr_37315_38427 = state_37312__$1;
(statearr_37315_38427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (20))){
var inst_37264 = (state_37312[(7)]);
var state_37312__$1 = state_37312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37312__$1,(23),out,inst_37264);
} else {
if((state_val_37313 === (1))){
var inst_37247 = calc_state();
var inst_37248 = cljs.core.__destructure_map(inst_37247);
var inst_37249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37248,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37248,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37248,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37252 = inst_37247;
var state_37312__$1 = (function (){var statearr_37316 = state_37312;
(statearr_37316[(8)] = inst_37252);

(statearr_37316[(9)] = inst_37251);

(statearr_37316[(10)] = inst_37249);

(statearr_37316[(11)] = inst_37250);

return statearr_37316;
})();
var statearr_37317_38429 = state_37312__$1;
(statearr_37317_38429[(2)] = null);

(statearr_37317_38429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (24))){
var inst_37255 = (state_37312[(12)]);
var inst_37252 = inst_37255;
var state_37312__$1 = (function (){var statearr_37318 = state_37312;
(statearr_37318[(8)] = inst_37252);

return statearr_37318;
})();
var statearr_37319_38430 = state_37312__$1;
(statearr_37319_38430[(2)] = null);

(statearr_37319_38430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (4))){
var inst_37264 = (state_37312[(7)]);
var inst_37266 = (state_37312[(13)]);
var inst_37263 = (state_37312[(2)]);
var inst_37264__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37263,(0),null);
var inst_37265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37263,(1),null);
var inst_37266__$1 = (inst_37264__$1 == null);
var state_37312__$1 = (function (){var statearr_37320 = state_37312;
(statearr_37320[(7)] = inst_37264__$1);

(statearr_37320[(13)] = inst_37266__$1);

(statearr_37320[(14)] = inst_37265);

return statearr_37320;
})();
if(cljs.core.truth_(inst_37266__$1)){
var statearr_37322_38434 = state_37312__$1;
(statearr_37322_38434[(1)] = (5));

} else {
var statearr_37323_38435 = state_37312__$1;
(statearr_37323_38435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (15))){
var inst_37256 = (state_37312[(15)]);
var inst_37286 = (state_37312[(16)]);
var inst_37286__$1 = cljs.core.empty_QMARK_(inst_37256);
var state_37312__$1 = (function (){var statearr_37324 = state_37312;
(statearr_37324[(16)] = inst_37286__$1);

return statearr_37324;
})();
if(inst_37286__$1){
var statearr_37325_38439 = state_37312__$1;
(statearr_37325_38439[(1)] = (17));

} else {
var statearr_37326_38440 = state_37312__$1;
(statearr_37326_38440[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (21))){
var inst_37255 = (state_37312[(12)]);
var inst_37252 = inst_37255;
var state_37312__$1 = (function (){var statearr_37327 = state_37312;
(statearr_37327[(8)] = inst_37252);

return statearr_37327;
})();
var statearr_37328_38442 = state_37312__$1;
(statearr_37328_38442[(2)] = null);

(statearr_37328_38442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (13))){
var inst_37279 = (state_37312[(2)]);
var inst_37280 = calc_state();
var inst_37252 = inst_37280;
var state_37312__$1 = (function (){var statearr_37329 = state_37312;
(statearr_37329[(8)] = inst_37252);

(statearr_37329[(17)] = inst_37279);

return statearr_37329;
})();
var statearr_37330_38444 = state_37312__$1;
(statearr_37330_38444[(2)] = null);

(statearr_37330_38444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (22))){
var inst_37306 = (state_37312[(2)]);
var state_37312__$1 = state_37312;
var statearr_37331_38445 = state_37312__$1;
(statearr_37331_38445[(2)] = inst_37306);

(statearr_37331_38445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (6))){
var inst_37265 = (state_37312[(14)]);
var inst_37269 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37265,change);
var state_37312__$1 = state_37312;
var statearr_37332_38446 = state_37312__$1;
(statearr_37332_38446[(2)] = inst_37269);

(statearr_37332_38446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (25))){
var state_37312__$1 = state_37312;
var statearr_37333_38450 = state_37312__$1;
(statearr_37333_38450[(2)] = null);

(statearr_37333_38450[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (17))){
var inst_37265 = (state_37312[(14)]);
var inst_37257 = (state_37312[(18)]);
var inst_37288 = (inst_37257.cljs$core$IFn$_invoke$arity$1 ? inst_37257.cljs$core$IFn$_invoke$arity$1(inst_37265) : inst_37257.call(null,inst_37265));
var inst_37289 = cljs.core.not(inst_37288);
var state_37312__$1 = state_37312;
var statearr_37334_38451 = state_37312__$1;
(statearr_37334_38451[(2)] = inst_37289);

(statearr_37334_38451[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (3))){
var inst_37310 = (state_37312[(2)]);
var state_37312__$1 = state_37312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37312__$1,inst_37310);
} else {
if((state_val_37313 === (12))){
var state_37312__$1 = state_37312;
var statearr_37335_38454 = state_37312__$1;
(statearr_37335_38454[(2)] = null);

(statearr_37335_38454[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (2))){
var inst_37252 = (state_37312[(8)]);
var inst_37255 = (state_37312[(12)]);
var inst_37255__$1 = cljs.core.__destructure_map(inst_37252);
var inst_37256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37255__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37255__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37255__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37312__$1 = (function (){var statearr_37336 = state_37312;
(statearr_37336[(15)] = inst_37256);

(statearr_37336[(12)] = inst_37255__$1);

(statearr_37336[(18)] = inst_37257);

return statearr_37336;
})();
return cljs.core.async.ioc_alts_BANG_(state_37312__$1,(4),inst_37258);
} else {
if((state_val_37313 === (23))){
var inst_37297 = (state_37312[(2)]);
var state_37312__$1 = state_37312;
if(cljs.core.truth_(inst_37297)){
var statearr_37337_38457 = state_37312__$1;
(statearr_37337_38457[(1)] = (24));

} else {
var statearr_37338_38458 = state_37312__$1;
(statearr_37338_38458[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (19))){
var inst_37292 = (state_37312[(2)]);
var state_37312__$1 = state_37312;
var statearr_37339_38459 = state_37312__$1;
(statearr_37339_38459[(2)] = inst_37292);

(statearr_37339_38459[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (11))){
var inst_37265 = (state_37312[(14)]);
var inst_37276 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_37265);
var state_37312__$1 = state_37312;
var statearr_37340_38460 = state_37312__$1;
(statearr_37340_38460[(2)] = inst_37276);

(statearr_37340_38460[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (9))){
var inst_37283 = (state_37312[(19)]);
var inst_37256 = (state_37312[(15)]);
var inst_37265 = (state_37312[(14)]);
var inst_37283__$1 = (inst_37256.cljs$core$IFn$_invoke$arity$1 ? inst_37256.cljs$core$IFn$_invoke$arity$1(inst_37265) : inst_37256.call(null,inst_37265));
var state_37312__$1 = (function (){var statearr_37341 = state_37312;
(statearr_37341[(19)] = inst_37283__$1);

return statearr_37341;
})();
if(cljs.core.truth_(inst_37283__$1)){
var statearr_37342_38461 = state_37312__$1;
(statearr_37342_38461[(1)] = (14));

} else {
var statearr_37343_38462 = state_37312__$1;
(statearr_37343_38462[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (5))){
var inst_37266 = (state_37312[(13)]);
var state_37312__$1 = state_37312;
var statearr_37344_38463 = state_37312__$1;
(statearr_37344_38463[(2)] = inst_37266);

(statearr_37344_38463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (14))){
var inst_37283 = (state_37312[(19)]);
var state_37312__$1 = state_37312;
var statearr_37345_38465 = state_37312__$1;
(statearr_37345_38465[(2)] = inst_37283);

(statearr_37345_38465[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (26))){
var inst_37302 = (state_37312[(2)]);
var state_37312__$1 = state_37312;
var statearr_37346_38466 = state_37312__$1;
(statearr_37346_38466[(2)] = inst_37302);

(statearr_37346_38466[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (16))){
var inst_37294 = (state_37312[(2)]);
var state_37312__$1 = state_37312;
if(cljs.core.truth_(inst_37294)){
var statearr_37347_38467 = state_37312__$1;
(statearr_37347_38467[(1)] = (20));

} else {
var statearr_37348_38468 = state_37312__$1;
(statearr_37348_38468[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (10))){
var inst_37308 = (state_37312[(2)]);
var state_37312__$1 = state_37312;
var statearr_37349_38469 = state_37312__$1;
(statearr_37349_38469[(2)] = inst_37308);

(statearr_37349_38469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (18))){
var inst_37286 = (state_37312[(16)]);
var state_37312__$1 = state_37312;
var statearr_37350_38470 = state_37312__$1;
(statearr_37350_38470[(2)] = inst_37286);

(statearr_37350_38470[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37313 === (8))){
var inst_37264 = (state_37312[(7)]);
var inst_37273 = (inst_37264 == null);
var state_37312__$1 = state_37312;
if(cljs.core.truth_(inst_37273)){
var statearr_37351_38471 = state_37312__$1;
(statearr_37351_38471[(1)] = (11));

} else {
var statearr_37352_38472 = state_37312__$1;
(statearr_37352_38472[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__36197__auto__ = null;
var cljs$core$async$mix_$_state_machine__36197__auto____0 = (function (){
var statearr_37353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37353[(0)] = cljs$core$async$mix_$_state_machine__36197__auto__);

(statearr_37353[(1)] = (1));

return statearr_37353;
});
var cljs$core$async$mix_$_state_machine__36197__auto____1 = (function (state_37312){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_37312);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e37354){var ex__36200__auto__ = e37354;
var statearr_37355_38475 = state_37312;
(statearr_37355_38475[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_37312[(4)]))){
var statearr_37356_38476 = state_37312;
(statearr_37356_38476[(1)] = cljs.core.first((state_37312[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38477 = state_37312;
state_37312 = G__38477;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36197__auto__ = function(state_37312){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36197__auto____1.call(this,state_37312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36197__auto____0;
cljs$core$async$mix_$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36197__auto____1;
return cljs$core$async$mix_$_state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_37357 = f__36292__auto__();
(statearr_37357[(6)] = c__36291__auto___38424);

return statearr_37357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_38478 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_38478(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_38481 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_38481(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_38486 = (function() {
var G__38487 = null;
var G__38487__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__38487__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__38487 = function(p,v){
switch(arguments.length){
case 1:
return G__38487__1.call(this,p);
case 2:
return G__38487__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38487.cljs$core$IFn$_invoke$arity$1 = G__38487__1;
G__38487.cljs$core$IFn$_invoke$arity$2 = G__38487__2;
return G__38487;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37359 = arguments.length;
switch (G__37359) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38486(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38486(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__37362 = arguments.length;
switch (G__37362) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__37360_SHARP_){
if(cljs.core.truth_((p1__37360_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37360_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__37360_SHARP_.call(null,topic)))){
return p1__37360_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37360_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37363 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37364){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37364 = meta37364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37365,meta37364__$1){
var self__ = this;
var _37365__$1 = this;
return (new cljs.core.async.t_cljs$core$async37363(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37364__$1));
}));

(cljs.core.async.t_cljs$core$async37363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37365){
var self__ = this;
var _37365__$1 = this;
return self__.meta37364;
}));

(cljs.core.async.t_cljs$core$async37363.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37363.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37363.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37363.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async37363.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async37363.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async37363.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async37363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37364","meta37364",1439717857,null)], null);
}));

(cljs.core.async.t_cljs$core$async37363.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37363");

(cljs.core.async.t_cljs$core$async37363.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async37363");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37363.
 */
cljs.core.async.__GT_t_cljs$core$async37363 = (function cljs$core$async$__GT_t_cljs$core$async37363(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37364){
return (new cljs.core.async.t_cljs$core$async37363(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37364));
});

}

return (new cljs.core.async.t_cljs$core$async37363(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36291__auto___38498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_37437){
var state_val_37438 = (state_37437[(1)]);
if((state_val_37438 === (7))){
var inst_37433 = (state_37437[(2)]);
var state_37437__$1 = state_37437;
var statearr_37439_38502 = state_37437__$1;
(statearr_37439_38502[(2)] = inst_37433);

(statearr_37439_38502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (20))){
var state_37437__$1 = state_37437;
var statearr_37440_38503 = state_37437__$1;
(statearr_37440_38503[(2)] = null);

(statearr_37440_38503[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (1))){
var state_37437__$1 = state_37437;
var statearr_37441_38504 = state_37437__$1;
(statearr_37441_38504[(2)] = null);

(statearr_37441_38504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (24))){
var inst_37416 = (state_37437[(7)]);
var inst_37425 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37416);
var state_37437__$1 = state_37437;
var statearr_37442_38505 = state_37437__$1;
(statearr_37442_38505[(2)] = inst_37425);

(statearr_37442_38505[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (4))){
var inst_37368 = (state_37437[(8)]);
var inst_37368__$1 = (state_37437[(2)]);
var inst_37369 = (inst_37368__$1 == null);
var state_37437__$1 = (function (){var statearr_37443 = state_37437;
(statearr_37443[(8)] = inst_37368__$1);

return statearr_37443;
})();
if(cljs.core.truth_(inst_37369)){
var statearr_37444_38506 = state_37437__$1;
(statearr_37444_38506[(1)] = (5));

} else {
var statearr_37445_38507 = state_37437__$1;
(statearr_37445_38507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (15))){
var inst_37410 = (state_37437[(2)]);
var state_37437__$1 = state_37437;
var statearr_37446_38508 = state_37437__$1;
(statearr_37446_38508[(2)] = inst_37410);

(statearr_37446_38508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (21))){
var inst_37430 = (state_37437[(2)]);
var state_37437__$1 = (function (){var statearr_37447 = state_37437;
(statearr_37447[(9)] = inst_37430);

return statearr_37447;
})();
var statearr_37448_38512 = state_37437__$1;
(statearr_37448_38512[(2)] = null);

(statearr_37448_38512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (13))){
var inst_37392 = (state_37437[(10)]);
var inst_37394 = cljs.core.chunked_seq_QMARK_(inst_37392);
var state_37437__$1 = state_37437;
if(inst_37394){
var statearr_37449_38513 = state_37437__$1;
(statearr_37449_38513[(1)] = (16));

} else {
var statearr_37450_38514 = state_37437__$1;
(statearr_37450_38514[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (22))){
var inst_37422 = (state_37437[(2)]);
var state_37437__$1 = state_37437;
if(cljs.core.truth_(inst_37422)){
var statearr_37451_38515 = state_37437__$1;
(statearr_37451_38515[(1)] = (23));

} else {
var statearr_37452_38516 = state_37437__$1;
(statearr_37452_38516[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (6))){
var inst_37418 = (state_37437[(11)]);
var inst_37368 = (state_37437[(8)]);
var inst_37416 = (state_37437[(7)]);
var inst_37416__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37368) : topic_fn.call(null,inst_37368));
var inst_37417 = cljs.core.deref(mults);
var inst_37418__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37417,inst_37416__$1);
var state_37437__$1 = (function (){var statearr_37453 = state_37437;
(statearr_37453[(11)] = inst_37418__$1);

(statearr_37453[(7)] = inst_37416__$1);

return statearr_37453;
})();
if(cljs.core.truth_(inst_37418__$1)){
var statearr_37454_38517 = state_37437__$1;
(statearr_37454_38517[(1)] = (19));

} else {
var statearr_37455_38518 = state_37437__$1;
(statearr_37455_38518[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (25))){
var inst_37427 = (state_37437[(2)]);
var state_37437__$1 = state_37437;
var statearr_37456_38519 = state_37437__$1;
(statearr_37456_38519[(2)] = inst_37427);

(statearr_37456_38519[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (17))){
var inst_37392 = (state_37437[(10)]);
var inst_37401 = cljs.core.first(inst_37392);
var inst_37402 = cljs.core.async.muxch_STAR_(inst_37401);
var inst_37403 = cljs.core.async.close_BANG_(inst_37402);
var inst_37404 = cljs.core.next(inst_37392);
var inst_37378 = inst_37404;
var inst_37379 = null;
var inst_37380 = (0);
var inst_37381 = (0);
var state_37437__$1 = (function (){var statearr_37457 = state_37437;
(statearr_37457[(12)] = inst_37378);

(statearr_37457[(13)] = inst_37380);

(statearr_37457[(14)] = inst_37381);

(statearr_37457[(15)] = inst_37379);

(statearr_37457[(16)] = inst_37403);

return statearr_37457;
})();
var statearr_37458_38521 = state_37437__$1;
(statearr_37458_38521[(2)] = null);

(statearr_37458_38521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (3))){
var inst_37435 = (state_37437[(2)]);
var state_37437__$1 = state_37437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37437__$1,inst_37435);
} else {
if((state_val_37438 === (12))){
var inst_37412 = (state_37437[(2)]);
var state_37437__$1 = state_37437;
var statearr_37459_38522 = state_37437__$1;
(statearr_37459_38522[(2)] = inst_37412);

(statearr_37459_38522[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (2))){
var state_37437__$1 = state_37437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37437__$1,(4),ch);
} else {
if((state_val_37438 === (23))){
var state_37437__$1 = state_37437;
var statearr_37460_38523 = state_37437__$1;
(statearr_37460_38523[(2)] = null);

(statearr_37460_38523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (19))){
var inst_37418 = (state_37437[(11)]);
var inst_37368 = (state_37437[(8)]);
var inst_37420 = cljs.core.async.muxch_STAR_(inst_37418);
var state_37437__$1 = state_37437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37437__$1,(22),inst_37420,inst_37368);
} else {
if((state_val_37438 === (11))){
var inst_37378 = (state_37437[(12)]);
var inst_37392 = (state_37437[(10)]);
var inst_37392__$1 = cljs.core.seq(inst_37378);
var state_37437__$1 = (function (){var statearr_37461 = state_37437;
(statearr_37461[(10)] = inst_37392__$1);

return statearr_37461;
})();
if(inst_37392__$1){
var statearr_37462_38524 = state_37437__$1;
(statearr_37462_38524[(1)] = (13));

} else {
var statearr_37463_38525 = state_37437__$1;
(statearr_37463_38525[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (9))){
var inst_37414 = (state_37437[(2)]);
var state_37437__$1 = state_37437;
var statearr_37464_38526 = state_37437__$1;
(statearr_37464_38526[(2)] = inst_37414);

(statearr_37464_38526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (5))){
var inst_37375 = cljs.core.deref(mults);
var inst_37376 = cljs.core.vals(inst_37375);
var inst_37377 = cljs.core.seq(inst_37376);
var inst_37378 = inst_37377;
var inst_37379 = null;
var inst_37380 = (0);
var inst_37381 = (0);
var state_37437__$1 = (function (){var statearr_37465 = state_37437;
(statearr_37465[(12)] = inst_37378);

(statearr_37465[(13)] = inst_37380);

(statearr_37465[(14)] = inst_37381);

(statearr_37465[(15)] = inst_37379);

return statearr_37465;
})();
var statearr_37466_38527 = state_37437__$1;
(statearr_37466_38527[(2)] = null);

(statearr_37466_38527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (14))){
var state_37437__$1 = state_37437;
var statearr_37470_38528 = state_37437__$1;
(statearr_37470_38528[(2)] = null);

(statearr_37470_38528[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (16))){
var inst_37392 = (state_37437[(10)]);
var inst_37396 = cljs.core.chunk_first(inst_37392);
var inst_37397 = cljs.core.chunk_rest(inst_37392);
var inst_37398 = cljs.core.count(inst_37396);
var inst_37378 = inst_37397;
var inst_37379 = inst_37396;
var inst_37380 = inst_37398;
var inst_37381 = (0);
var state_37437__$1 = (function (){var statearr_37471 = state_37437;
(statearr_37471[(12)] = inst_37378);

(statearr_37471[(13)] = inst_37380);

(statearr_37471[(14)] = inst_37381);

(statearr_37471[(15)] = inst_37379);

return statearr_37471;
})();
var statearr_37472_38529 = state_37437__$1;
(statearr_37472_38529[(2)] = null);

(statearr_37472_38529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (10))){
var inst_37378 = (state_37437[(12)]);
var inst_37380 = (state_37437[(13)]);
var inst_37381 = (state_37437[(14)]);
var inst_37379 = (state_37437[(15)]);
var inst_37386 = cljs.core._nth(inst_37379,inst_37381);
var inst_37387 = cljs.core.async.muxch_STAR_(inst_37386);
var inst_37388 = cljs.core.async.close_BANG_(inst_37387);
var inst_37389 = (inst_37381 + (1));
var tmp37467 = inst_37378;
var tmp37468 = inst_37380;
var tmp37469 = inst_37379;
var inst_37378__$1 = tmp37467;
var inst_37379__$1 = tmp37469;
var inst_37380__$1 = tmp37468;
var inst_37381__$1 = inst_37389;
var state_37437__$1 = (function (){var statearr_37473 = state_37437;
(statearr_37473[(12)] = inst_37378__$1);

(statearr_37473[(13)] = inst_37380__$1);

(statearr_37473[(14)] = inst_37381__$1);

(statearr_37473[(17)] = inst_37388);

(statearr_37473[(15)] = inst_37379__$1);

return statearr_37473;
})();
var statearr_37474_38530 = state_37437__$1;
(statearr_37474_38530[(2)] = null);

(statearr_37474_38530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (18))){
var inst_37407 = (state_37437[(2)]);
var state_37437__$1 = state_37437;
var statearr_37475_38536 = state_37437__$1;
(statearr_37475_38536[(2)] = inst_37407);

(statearr_37475_38536[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37438 === (8))){
var inst_37380 = (state_37437[(13)]);
var inst_37381 = (state_37437[(14)]);
var inst_37383 = (inst_37381 < inst_37380);
var inst_37384 = inst_37383;
var state_37437__$1 = state_37437;
if(cljs.core.truth_(inst_37384)){
var statearr_37476_38537 = state_37437__$1;
(statearr_37476_38537[(1)] = (10));

} else {
var statearr_37477_38538 = state_37437__$1;
(statearr_37477_38538[(1)] = (11));

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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36197__auto__ = null;
var cljs$core$async$state_machine__36197__auto____0 = (function (){
var statearr_37478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37478[(0)] = cljs$core$async$state_machine__36197__auto__);

(statearr_37478[(1)] = (1));

return statearr_37478;
});
var cljs$core$async$state_machine__36197__auto____1 = (function (state_37437){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_37437);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e37479){var ex__36200__auto__ = e37479;
var statearr_37480_38539 = state_37437;
(statearr_37480_38539[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_37437[(4)]))){
var statearr_37481_38540 = state_37437;
(statearr_37481_38540[(1)] = cljs.core.first((state_37437[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38541 = state_37437;
state_37437 = G__38541;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$state_machine__36197__auto__ = function(state_37437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36197__auto____1.call(this,state_37437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36197__auto____0;
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36197__auto____1;
return cljs$core$async$state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_37482 = f__36292__auto__();
(statearr_37482[(6)] = c__36291__auto___38498);

return statearr_37482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__37484 = arguments.length;
switch (G__37484) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__37486 = arguments.length;
switch (G__37486) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__37490 = arguments.length;
switch (G__37490) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__36291__auto___38545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_37538){
var state_val_37539 = (state_37538[(1)]);
if((state_val_37539 === (7))){
var state_37538__$1 = state_37538;
var statearr_37540_38546 = state_37538__$1;
(statearr_37540_38546[(2)] = null);

(statearr_37540_38546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (1))){
var state_37538__$1 = state_37538;
var statearr_37541_38547 = state_37538__$1;
(statearr_37541_38547[(2)] = null);

(statearr_37541_38547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (4))){
var inst_37495 = (state_37538[(7)]);
var inst_37497 = (state_37538[(8)]);
var inst_37499 = (inst_37497 < inst_37495);
var state_37538__$1 = state_37538;
if(cljs.core.truth_(inst_37499)){
var statearr_37542_38551 = state_37538__$1;
(statearr_37542_38551[(1)] = (6));

} else {
var statearr_37543_38554 = state_37538__$1;
(statearr_37543_38554[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (15))){
var inst_37524 = (state_37538[(9)]);
var inst_37529 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37524);
var state_37538__$1 = state_37538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37538__$1,(17),out,inst_37529);
} else {
if((state_val_37539 === (13))){
var inst_37524 = (state_37538[(9)]);
var inst_37524__$1 = (state_37538[(2)]);
var inst_37525 = cljs.core.some(cljs.core.nil_QMARK_,inst_37524__$1);
var state_37538__$1 = (function (){var statearr_37544 = state_37538;
(statearr_37544[(9)] = inst_37524__$1);

return statearr_37544;
})();
if(cljs.core.truth_(inst_37525)){
var statearr_37545_38561 = state_37538__$1;
(statearr_37545_38561[(1)] = (14));

} else {
var statearr_37546_38563 = state_37538__$1;
(statearr_37546_38563[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (6))){
var state_37538__$1 = state_37538;
var statearr_37547_38564 = state_37538__$1;
(statearr_37547_38564[(2)] = null);

(statearr_37547_38564[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (17))){
var inst_37531 = (state_37538[(2)]);
var state_37538__$1 = (function (){var statearr_37550 = state_37538;
(statearr_37550[(10)] = inst_37531);

return statearr_37550;
})();
var statearr_37551_38565 = state_37538__$1;
(statearr_37551_38565[(2)] = null);

(statearr_37551_38565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (3))){
var inst_37536 = (state_37538[(2)]);
var state_37538__$1 = state_37538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37538__$1,inst_37536);
} else {
if((state_val_37539 === (12))){
var _ = (function (){var statearr_37552 = state_37538;
(statearr_37552[(4)] = cljs.core.rest((state_37538[(4)])));

return statearr_37552;
})();
var state_37538__$1 = state_37538;
var ex37549 = (state_37538__$1[(2)]);
var statearr_37553_38570 = state_37538__$1;
(statearr_37553_38570[(5)] = ex37549);


if((ex37549 instanceof Object)){
var statearr_37555_38571 = state_37538__$1;
(statearr_37555_38571[(1)] = (11));

(statearr_37555_38571[(5)] = null);

} else {
throw ex37549;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (2))){
var inst_37494 = cljs.core.reset_BANG_(dctr,cnt);
var inst_37495 = cnt;
var inst_37497 = (0);
var state_37538__$1 = (function (){var statearr_37559 = state_37538;
(statearr_37559[(7)] = inst_37495);

(statearr_37559[(8)] = inst_37497);

(statearr_37559[(11)] = inst_37494);

return statearr_37559;
})();
var statearr_37560_38572 = state_37538__$1;
(statearr_37560_38572[(2)] = null);

(statearr_37560_38572[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (11))){
var inst_37501 = (state_37538[(2)]);
var inst_37502 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_37538__$1 = (function (){var statearr_37562 = state_37538;
(statearr_37562[(12)] = inst_37501);

return statearr_37562;
})();
var statearr_37563_38577 = state_37538__$1;
(statearr_37563_38577[(2)] = inst_37502);

(statearr_37563_38577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (9))){
var inst_37497 = (state_37538[(8)]);
var _ = (function (){var statearr_37565 = state_37538;
(statearr_37565[(4)] = cljs.core.cons((12),(state_37538[(4)])));

return statearr_37565;
})();
var inst_37510 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37497) : chs__$1.call(null,inst_37497));
var inst_37511 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37497) : done.call(null,inst_37497));
var inst_37512 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37510,inst_37511);
var ___$1 = (function (){var statearr_37566 = state_37538;
(statearr_37566[(4)] = cljs.core.rest((state_37538[(4)])));

return statearr_37566;
})();
var state_37538__$1 = state_37538;
var statearr_37567_38590 = state_37538__$1;
(statearr_37567_38590[(2)] = inst_37512);

(statearr_37567_38590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (5))){
var inst_37522 = (state_37538[(2)]);
var state_37538__$1 = (function (){var statearr_37568 = state_37538;
(statearr_37568[(13)] = inst_37522);

return statearr_37568;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37538__$1,(13),dchan);
} else {
if((state_val_37539 === (14))){
var inst_37527 = cljs.core.async.close_BANG_(out);
var state_37538__$1 = state_37538;
var statearr_37569_38601 = state_37538__$1;
(statearr_37569_38601[(2)] = inst_37527);

(statearr_37569_38601[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (16))){
var inst_37534 = (state_37538[(2)]);
var state_37538__$1 = state_37538;
var statearr_37570_38613 = state_37538__$1;
(statearr_37570_38613[(2)] = inst_37534);

(statearr_37570_38613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (10))){
var inst_37497 = (state_37538[(8)]);
var inst_37515 = (state_37538[(2)]);
var inst_37516 = (inst_37497 + (1));
var inst_37497__$1 = inst_37516;
var state_37538__$1 = (function (){var statearr_37571 = state_37538;
(statearr_37571[(8)] = inst_37497__$1);

(statearr_37571[(14)] = inst_37515);

return statearr_37571;
})();
var statearr_37572_38616 = state_37538__$1;
(statearr_37572_38616[(2)] = null);

(statearr_37572_38616[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37539 === (8))){
var inst_37520 = (state_37538[(2)]);
var state_37538__$1 = state_37538;
var statearr_37573_38617 = state_37538__$1;
(statearr_37573_38617[(2)] = inst_37520);

(statearr_37573_38617[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__36197__auto__ = null;
var cljs$core$async$state_machine__36197__auto____0 = (function (){
var statearr_37574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37574[(0)] = cljs$core$async$state_machine__36197__auto__);

(statearr_37574[(1)] = (1));

return statearr_37574;
});
var cljs$core$async$state_machine__36197__auto____1 = (function (state_37538){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_37538);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e37575){var ex__36200__auto__ = e37575;
var statearr_37576_38618 = state_37538;
(statearr_37576_38618[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_37538[(4)]))){
var statearr_37577_38620 = state_37538;
(statearr_37577_38620[(1)] = cljs.core.first((state_37538[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38621 = state_37538;
state_37538 = G__38621;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$state_machine__36197__auto__ = function(state_37538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36197__auto____1.call(this,state_37538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36197__auto____0;
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36197__auto____1;
return cljs$core$async$state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_37578 = f__36292__auto__();
(statearr_37578[(6)] = c__36291__auto___38545);

return statearr_37578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__37581 = arguments.length;
switch (G__37581) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36291__auto___38625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_37613){
var state_val_37614 = (state_37613[(1)]);
if((state_val_37614 === (7))){
var inst_37592 = (state_37613[(7)]);
var inst_37593 = (state_37613[(8)]);
var inst_37592__$1 = (state_37613[(2)]);
var inst_37593__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37592__$1,(0),null);
var inst_37594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37592__$1,(1),null);
var inst_37595 = (inst_37593__$1 == null);
var state_37613__$1 = (function (){var statearr_37617 = state_37613;
(statearr_37617[(7)] = inst_37592__$1);

(statearr_37617[(8)] = inst_37593__$1);

(statearr_37617[(9)] = inst_37594);

return statearr_37617;
})();
if(cljs.core.truth_(inst_37595)){
var statearr_37618_38628 = state_37613__$1;
(statearr_37618_38628[(1)] = (8));

} else {
var statearr_37619_38629 = state_37613__$1;
(statearr_37619_38629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (1))){
var inst_37582 = cljs.core.vec(chs);
var inst_37583 = inst_37582;
var state_37613__$1 = (function (){var statearr_37621 = state_37613;
(statearr_37621[(10)] = inst_37583);

return statearr_37621;
})();
var statearr_37622_38631 = state_37613__$1;
(statearr_37622_38631[(2)] = null);

(statearr_37622_38631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (4))){
var inst_37583 = (state_37613[(10)]);
var state_37613__$1 = state_37613;
return cljs.core.async.ioc_alts_BANG_(state_37613__$1,(7),inst_37583);
} else {
if((state_val_37614 === (6))){
var inst_37609 = (state_37613[(2)]);
var state_37613__$1 = state_37613;
var statearr_37623_38633 = state_37613__$1;
(statearr_37623_38633[(2)] = inst_37609);

(statearr_37623_38633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (3))){
var inst_37611 = (state_37613[(2)]);
var state_37613__$1 = state_37613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37613__$1,inst_37611);
} else {
if((state_val_37614 === (2))){
var inst_37583 = (state_37613[(10)]);
var inst_37585 = cljs.core.count(inst_37583);
var inst_37586 = (inst_37585 > (0));
var state_37613__$1 = state_37613;
if(cljs.core.truth_(inst_37586)){
var statearr_37627_38635 = state_37613__$1;
(statearr_37627_38635[(1)] = (4));

} else {
var statearr_37628_38636 = state_37613__$1;
(statearr_37628_38636[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (11))){
var inst_37583 = (state_37613[(10)]);
var inst_37602 = (state_37613[(2)]);
var tmp37626 = inst_37583;
var inst_37583__$1 = tmp37626;
var state_37613__$1 = (function (){var statearr_37629 = state_37613;
(statearr_37629[(10)] = inst_37583__$1);

(statearr_37629[(11)] = inst_37602);

return statearr_37629;
})();
var statearr_37630_38638 = state_37613__$1;
(statearr_37630_38638[(2)] = null);

(statearr_37630_38638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (9))){
var inst_37593 = (state_37613[(8)]);
var state_37613__$1 = state_37613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37613__$1,(11),out,inst_37593);
} else {
if((state_val_37614 === (5))){
var inst_37607 = cljs.core.async.close_BANG_(out);
var state_37613__$1 = state_37613;
var statearr_37631_38639 = state_37613__$1;
(statearr_37631_38639[(2)] = inst_37607);

(statearr_37631_38639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (10))){
var inst_37605 = (state_37613[(2)]);
var state_37613__$1 = state_37613;
var statearr_37632_38640 = state_37613__$1;
(statearr_37632_38640[(2)] = inst_37605);

(statearr_37632_38640[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (8))){
var inst_37583 = (state_37613[(10)]);
var inst_37592 = (state_37613[(7)]);
var inst_37593 = (state_37613[(8)]);
var inst_37594 = (state_37613[(9)]);
var inst_37597 = (function (){var cs = inst_37583;
var vec__37588 = inst_37592;
var v = inst_37593;
var c = inst_37594;
return (function (p1__37579_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37579_SHARP_);
});
})();
var inst_37598 = cljs.core.filterv(inst_37597,inst_37583);
var inst_37583__$1 = inst_37598;
var state_37613__$1 = (function (){var statearr_37633 = state_37613;
(statearr_37633[(10)] = inst_37583__$1);

return statearr_37633;
})();
var statearr_37634_38643 = state_37613__$1;
(statearr_37634_38643[(2)] = null);

(statearr_37634_38643[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__36197__auto__ = null;
var cljs$core$async$state_machine__36197__auto____0 = (function (){
var statearr_37635 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37635[(0)] = cljs$core$async$state_machine__36197__auto__);

(statearr_37635[(1)] = (1));

return statearr_37635;
});
var cljs$core$async$state_machine__36197__auto____1 = (function (state_37613){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_37613);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e37636){var ex__36200__auto__ = e37636;
var statearr_37637_38646 = state_37613;
(statearr_37637_38646[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_37613[(4)]))){
var statearr_37638_38647 = state_37613;
(statearr_37638_38647[(1)] = cljs.core.first((state_37613[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38648 = state_37613;
state_37613 = G__38648;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$state_machine__36197__auto__ = function(state_37613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36197__auto____1.call(this,state_37613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36197__auto____0;
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36197__auto____1;
return cljs$core$async$state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_37639 = f__36292__auto__();
(statearr_37639[(6)] = c__36291__auto___38625);

return statearr_37639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__37641 = arguments.length;
switch (G__37641) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36291__auto___38653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_37665){
var state_val_37666 = (state_37665[(1)]);
if((state_val_37666 === (7))){
var inst_37647 = (state_37665[(7)]);
var inst_37647__$1 = (state_37665[(2)]);
var inst_37648 = (inst_37647__$1 == null);
var inst_37649 = cljs.core.not(inst_37648);
var state_37665__$1 = (function (){var statearr_37667 = state_37665;
(statearr_37667[(7)] = inst_37647__$1);

return statearr_37667;
})();
if(inst_37649){
var statearr_37668_38655 = state_37665__$1;
(statearr_37668_38655[(1)] = (8));

} else {
var statearr_37669_38656 = state_37665__$1;
(statearr_37669_38656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (1))){
var inst_37642 = (0);
var state_37665__$1 = (function (){var statearr_37670 = state_37665;
(statearr_37670[(8)] = inst_37642);

return statearr_37670;
})();
var statearr_37671_38657 = state_37665__$1;
(statearr_37671_38657[(2)] = null);

(statearr_37671_38657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (4))){
var state_37665__$1 = state_37665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37665__$1,(7),ch);
} else {
if((state_val_37666 === (6))){
var inst_37660 = (state_37665[(2)]);
var state_37665__$1 = state_37665;
var statearr_37672_38658 = state_37665__$1;
(statearr_37672_38658[(2)] = inst_37660);

(statearr_37672_38658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (3))){
var inst_37662 = (state_37665[(2)]);
var inst_37663 = cljs.core.async.close_BANG_(out);
var state_37665__$1 = (function (){var statearr_37673 = state_37665;
(statearr_37673[(9)] = inst_37662);

return statearr_37673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37665__$1,inst_37663);
} else {
if((state_val_37666 === (2))){
var inst_37642 = (state_37665[(8)]);
var inst_37644 = (inst_37642 < n);
var state_37665__$1 = state_37665;
if(cljs.core.truth_(inst_37644)){
var statearr_37674_38659 = state_37665__$1;
(statearr_37674_38659[(1)] = (4));

} else {
var statearr_37675_38660 = state_37665__$1;
(statearr_37675_38660[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (11))){
var inst_37642 = (state_37665[(8)]);
var inst_37652 = (state_37665[(2)]);
var inst_37653 = (inst_37642 + (1));
var inst_37642__$1 = inst_37653;
var state_37665__$1 = (function (){var statearr_37676 = state_37665;
(statearr_37676[(8)] = inst_37642__$1);

(statearr_37676[(10)] = inst_37652);

return statearr_37676;
})();
var statearr_37677_38664 = state_37665__$1;
(statearr_37677_38664[(2)] = null);

(statearr_37677_38664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (9))){
var state_37665__$1 = state_37665;
var statearr_37678_38665 = state_37665__$1;
(statearr_37678_38665[(2)] = null);

(statearr_37678_38665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (5))){
var state_37665__$1 = state_37665;
var statearr_37679_38666 = state_37665__$1;
(statearr_37679_38666[(2)] = null);

(statearr_37679_38666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (10))){
var inst_37657 = (state_37665[(2)]);
var state_37665__$1 = state_37665;
var statearr_37680_38667 = state_37665__$1;
(statearr_37680_38667[(2)] = inst_37657);

(statearr_37680_38667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (8))){
var inst_37647 = (state_37665[(7)]);
var state_37665__$1 = state_37665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37665__$1,(11),out,inst_37647);
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
});
return (function() {
var cljs$core$async$state_machine__36197__auto__ = null;
var cljs$core$async$state_machine__36197__auto____0 = (function (){
var statearr_37681 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37681[(0)] = cljs$core$async$state_machine__36197__auto__);

(statearr_37681[(1)] = (1));

return statearr_37681;
});
var cljs$core$async$state_machine__36197__auto____1 = (function (state_37665){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_37665);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e37682){var ex__36200__auto__ = e37682;
var statearr_37683_38668 = state_37665;
(statearr_37683_38668[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_37665[(4)]))){
var statearr_37684_38669 = state_37665;
(statearr_37684_38669[(1)] = cljs.core.first((state_37665[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38670 = state_37665;
state_37665 = G__38670;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$state_machine__36197__auto__ = function(state_37665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36197__auto____1.call(this,state_37665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36197__auto____0;
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36197__auto____1;
return cljs$core$async$state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_37685 = f__36292__auto__();
(statearr_37685[(6)] = c__36291__auto___38653);

return statearr_37685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37687 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37687 = (function (f,ch,meta37688){
this.f = f;
this.ch = ch;
this.meta37688 = meta37688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37689,meta37688__$1){
var self__ = this;
var _37689__$1 = this;
return (new cljs.core.async.t_cljs$core$async37687(self__.f,self__.ch,meta37688__$1));
}));

(cljs.core.async.t_cljs$core$async37687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37689){
var self__ = this;
var _37689__$1 = this;
return self__.meta37688;
}));

(cljs.core.async.t_cljs$core$async37687.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37687.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37687.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37687.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37687.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37690 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37690 = (function (f,ch,meta37688,_,fn1,meta37691){
this.f = f;
this.ch = ch;
this.meta37688 = meta37688;
this._ = _;
this.fn1 = fn1;
this.meta37691 = meta37691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37692,meta37691__$1){
var self__ = this;
var _37692__$1 = this;
return (new cljs.core.async.t_cljs$core$async37690(self__.f,self__.ch,self__.meta37688,self__._,self__.fn1,meta37691__$1));
}));

(cljs.core.async.t_cljs$core$async37690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37692){
var self__ = this;
var _37692__$1 = this;
return self__.meta37691;
}));

(cljs.core.async.t_cljs$core$async37690.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37690.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async37690.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37690.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__37686_SHARP_){
var G__37693 = (((p1__37686_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37686_SHARP_) : self__.f.call(null,p1__37686_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__37693) : f1.call(null,G__37693));
});
}));

(cljs.core.async.t_cljs$core$async37690.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37688","meta37688",-104173096,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37687","cljs.core.async/t_cljs$core$async37687",-1482955086,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37691","meta37691",1923668366,null)], null);
}));

(cljs.core.async.t_cljs$core$async37690.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37690");

(cljs.core.async.t_cljs$core$async37690.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async37690");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37690.
 */
cljs.core.async.__GT_t_cljs$core$async37690 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37690(f__$1,ch__$1,meta37688__$1,___$2,fn1__$1,meta37691){
return (new cljs.core.async.t_cljs$core$async37690(f__$1,ch__$1,meta37688__$1,___$2,fn1__$1,meta37691));
});

}

return (new cljs.core.async.t_cljs$core$async37690(self__.f,self__.ch,self__.meta37688,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__37694 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__37694) : self__.f.call(null,G__37694));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async37687.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37687.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async37687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37688","meta37688",-104173096,null)], null);
}));

(cljs.core.async.t_cljs$core$async37687.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37687");

(cljs.core.async.t_cljs$core$async37687.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async37687");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37687.
 */
cljs.core.async.__GT_t_cljs$core$async37687 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37687(f__$1,ch__$1,meta37688){
return (new cljs.core.async.t_cljs$core$async37687(f__$1,ch__$1,meta37688));
});

}

return (new cljs.core.async.t_cljs$core$async37687(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37696 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37696 = (function (f,ch,meta37697){
this.f = f;
this.ch = ch;
this.meta37697 = meta37697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37698,meta37697__$1){
var self__ = this;
var _37698__$1 = this;
return (new cljs.core.async.t_cljs$core$async37696(self__.f,self__.ch,meta37697__$1));
}));

(cljs.core.async.t_cljs$core$async37696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37698){
var self__ = this;
var _37698__$1 = this;
return self__.meta37697;
}));

(cljs.core.async.t_cljs$core$async37696.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37696.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37696.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37696.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37696.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37696.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async37696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37697","meta37697",-510553780,null)], null);
}));

(cljs.core.async.t_cljs$core$async37696.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37696");

(cljs.core.async.t_cljs$core$async37696.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async37696");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37696.
 */
cljs.core.async.__GT_t_cljs$core$async37696 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37696(f__$1,ch__$1,meta37697){
return (new cljs.core.async.t_cljs$core$async37696(f__$1,ch__$1,meta37697));
});

}

return (new cljs.core.async.t_cljs$core$async37696(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37699 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37699 = (function (p,ch,meta37700){
this.p = p;
this.ch = ch;
this.meta37700 = meta37700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37701,meta37700__$1){
var self__ = this;
var _37701__$1 = this;
return (new cljs.core.async.t_cljs$core$async37699(self__.p,self__.ch,meta37700__$1));
}));

(cljs.core.async.t_cljs$core$async37699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37701){
var self__ = this;
var _37701__$1 = this;
return self__.meta37700;
}));

(cljs.core.async.t_cljs$core$async37699.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37699.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37699.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37699.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37699.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37699.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37699.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async37699.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37700","meta37700",1251493849,null)], null);
}));

(cljs.core.async.t_cljs$core$async37699.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37699.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37699");

(cljs.core.async.t_cljs$core$async37699.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async37699");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37699.
 */
cljs.core.async.__GT_t_cljs$core$async37699 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37699(p__$1,ch__$1,meta37700){
return (new cljs.core.async.t_cljs$core$async37699(p__$1,ch__$1,meta37700));
});

}

return (new cljs.core.async.t_cljs$core$async37699(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__37705 = arguments.length;
switch (G__37705) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36291__auto___38692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_37727){
var state_val_37728 = (state_37727[(1)]);
if((state_val_37728 === (7))){
var inst_37723 = (state_37727[(2)]);
var state_37727__$1 = state_37727;
var statearr_37729_38693 = state_37727__$1;
(statearr_37729_38693[(2)] = inst_37723);

(statearr_37729_38693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (1))){
var state_37727__$1 = state_37727;
var statearr_37730_38694 = state_37727__$1;
(statearr_37730_38694[(2)] = null);

(statearr_37730_38694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (4))){
var inst_37709 = (state_37727[(7)]);
var inst_37709__$1 = (state_37727[(2)]);
var inst_37710 = (inst_37709__$1 == null);
var state_37727__$1 = (function (){var statearr_37731 = state_37727;
(statearr_37731[(7)] = inst_37709__$1);

return statearr_37731;
})();
if(cljs.core.truth_(inst_37710)){
var statearr_37732_38695 = state_37727__$1;
(statearr_37732_38695[(1)] = (5));

} else {
var statearr_37733_38696 = state_37727__$1;
(statearr_37733_38696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (6))){
var inst_37709 = (state_37727[(7)]);
var inst_37714 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37709) : p.call(null,inst_37709));
var state_37727__$1 = state_37727;
if(cljs.core.truth_(inst_37714)){
var statearr_37734_38697 = state_37727__$1;
(statearr_37734_38697[(1)] = (8));

} else {
var statearr_37735_38698 = state_37727__$1;
(statearr_37735_38698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (3))){
var inst_37725 = (state_37727[(2)]);
var state_37727__$1 = state_37727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37727__$1,inst_37725);
} else {
if((state_val_37728 === (2))){
var state_37727__$1 = state_37727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37727__$1,(4),ch);
} else {
if((state_val_37728 === (11))){
var inst_37717 = (state_37727[(2)]);
var state_37727__$1 = state_37727;
var statearr_37736_38699 = state_37727__$1;
(statearr_37736_38699[(2)] = inst_37717);

(statearr_37736_38699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (9))){
var state_37727__$1 = state_37727;
var statearr_37737_38700 = state_37727__$1;
(statearr_37737_38700[(2)] = null);

(statearr_37737_38700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (5))){
var inst_37712 = cljs.core.async.close_BANG_(out);
var state_37727__$1 = state_37727;
var statearr_37738_38701 = state_37727__$1;
(statearr_37738_38701[(2)] = inst_37712);

(statearr_37738_38701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (10))){
var inst_37720 = (state_37727[(2)]);
var state_37727__$1 = (function (){var statearr_37739 = state_37727;
(statearr_37739[(8)] = inst_37720);

return statearr_37739;
})();
var statearr_37740_38702 = state_37727__$1;
(statearr_37740_38702[(2)] = null);

(statearr_37740_38702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (8))){
var inst_37709 = (state_37727[(7)]);
var state_37727__$1 = state_37727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37727__$1,(11),out,inst_37709);
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
});
return (function() {
var cljs$core$async$state_machine__36197__auto__ = null;
var cljs$core$async$state_machine__36197__auto____0 = (function (){
var statearr_37741 = [null,null,null,null,null,null,null,null,null];
(statearr_37741[(0)] = cljs$core$async$state_machine__36197__auto__);

(statearr_37741[(1)] = (1));

return statearr_37741;
});
var cljs$core$async$state_machine__36197__auto____1 = (function (state_37727){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_37727);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e37742){var ex__36200__auto__ = e37742;
var statearr_37743_38703 = state_37727;
(statearr_37743_38703[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_37727[(4)]))){
var statearr_37744_38704 = state_37727;
(statearr_37744_38704[(1)] = cljs.core.first((state_37727[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38711 = state_37727;
state_37727 = G__38711;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$state_machine__36197__auto__ = function(state_37727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36197__auto____1.call(this,state_37727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36197__auto____0;
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36197__auto____1;
return cljs$core$async$state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_37745 = f__36292__auto__();
(statearr_37745[(6)] = c__36291__auto___38692);

return statearr_37745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37747 = arguments.length;
switch (G__37747) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__36291__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_37814){
var state_val_37815 = (state_37814[(1)]);
if((state_val_37815 === (7))){
var inst_37810 = (state_37814[(2)]);
var state_37814__$1 = state_37814;
var statearr_37818_38713 = state_37814__$1;
(statearr_37818_38713[(2)] = inst_37810);

(statearr_37818_38713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (20))){
var inst_37780 = (state_37814[(7)]);
var inst_37791 = (state_37814[(2)]);
var inst_37792 = cljs.core.next(inst_37780);
var inst_37761 = inst_37792;
var inst_37762 = null;
var inst_37763 = (0);
var inst_37764 = (0);
var state_37814__$1 = (function (){var statearr_37819 = state_37814;
(statearr_37819[(8)] = inst_37764);

(statearr_37819[(9)] = inst_37791);

(statearr_37819[(10)] = inst_37762);

(statearr_37819[(11)] = inst_37763);

(statearr_37819[(12)] = inst_37761);

return statearr_37819;
})();
var statearr_37820_38714 = state_37814__$1;
(statearr_37820_38714[(2)] = null);

(statearr_37820_38714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (1))){
var state_37814__$1 = state_37814;
var statearr_37821_38715 = state_37814__$1;
(statearr_37821_38715[(2)] = null);

(statearr_37821_38715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (4))){
var inst_37750 = (state_37814[(13)]);
var inst_37750__$1 = (state_37814[(2)]);
var inst_37751 = (inst_37750__$1 == null);
var state_37814__$1 = (function (){var statearr_37822 = state_37814;
(statearr_37822[(13)] = inst_37750__$1);

return statearr_37822;
})();
if(cljs.core.truth_(inst_37751)){
var statearr_37823_38722 = state_37814__$1;
(statearr_37823_38722[(1)] = (5));

} else {
var statearr_37824_38723 = state_37814__$1;
(statearr_37824_38723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (15))){
var state_37814__$1 = state_37814;
var statearr_37830_38724 = state_37814__$1;
(statearr_37830_38724[(2)] = null);

(statearr_37830_38724[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (21))){
var state_37814__$1 = state_37814;
var statearr_37831_38725 = state_37814__$1;
(statearr_37831_38725[(2)] = null);

(statearr_37831_38725[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (13))){
var inst_37764 = (state_37814[(8)]);
var inst_37762 = (state_37814[(10)]);
var inst_37763 = (state_37814[(11)]);
var inst_37761 = (state_37814[(12)]);
var inst_37776 = (state_37814[(2)]);
var inst_37777 = (inst_37764 + (1));
var tmp37827 = inst_37762;
var tmp37828 = inst_37763;
var tmp37829 = inst_37761;
var inst_37761__$1 = tmp37829;
var inst_37762__$1 = tmp37827;
var inst_37763__$1 = tmp37828;
var inst_37764__$1 = inst_37777;
var state_37814__$1 = (function (){var statearr_37832 = state_37814;
(statearr_37832[(8)] = inst_37764__$1);

(statearr_37832[(10)] = inst_37762__$1);

(statearr_37832[(11)] = inst_37763__$1);

(statearr_37832[(14)] = inst_37776);

(statearr_37832[(12)] = inst_37761__$1);

return statearr_37832;
})();
var statearr_37833_38726 = state_37814__$1;
(statearr_37833_38726[(2)] = null);

(statearr_37833_38726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (22))){
var state_37814__$1 = state_37814;
var statearr_37834_38727 = state_37814__$1;
(statearr_37834_38727[(2)] = null);

(statearr_37834_38727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (6))){
var inst_37750 = (state_37814[(13)]);
var inst_37759 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37750) : f.call(null,inst_37750));
var inst_37760 = cljs.core.seq(inst_37759);
var inst_37761 = inst_37760;
var inst_37762 = null;
var inst_37763 = (0);
var inst_37764 = (0);
var state_37814__$1 = (function (){var statearr_37837 = state_37814;
(statearr_37837[(8)] = inst_37764);

(statearr_37837[(10)] = inst_37762);

(statearr_37837[(11)] = inst_37763);

(statearr_37837[(12)] = inst_37761);

return statearr_37837;
})();
var statearr_37838_38728 = state_37814__$1;
(statearr_37838_38728[(2)] = null);

(statearr_37838_38728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (17))){
var inst_37780 = (state_37814[(7)]);
var inst_37784 = cljs.core.chunk_first(inst_37780);
var inst_37785 = cljs.core.chunk_rest(inst_37780);
var inst_37786 = cljs.core.count(inst_37784);
var inst_37761 = inst_37785;
var inst_37762 = inst_37784;
var inst_37763 = inst_37786;
var inst_37764 = (0);
var state_37814__$1 = (function (){var statearr_37839 = state_37814;
(statearr_37839[(8)] = inst_37764);

(statearr_37839[(10)] = inst_37762);

(statearr_37839[(11)] = inst_37763);

(statearr_37839[(12)] = inst_37761);

return statearr_37839;
})();
var statearr_37840_38729 = state_37814__$1;
(statearr_37840_38729[(2)] = null);

(statearr_37840_38729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (3))){
var inst_37812 = (state_37814[(2)]);
var state_37814__$1 = state_37814;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37814__$1,inst_37812);
} else {
if((state_val_37815 === (12))){
var inst_37800 = (state_37814[(2)]);
var state_37814__$1 = state_37814;
var statearr_37841_38730 = state_37814__$1;
(statearr_37841_38730[(2)] = inst_37800);

(statearr_37841_38730[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (2))){
var state_37814__$1 = state_37814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37814__$1,(4),in$);
} else {
if((state_val_37815 === (23))){
var inst_37808 = (state_37814[(2)]);
var state_37814__$1 = state_37814;
var statearr_37842_38731 = state_37814__$1;
(statearr_37842_38731[(2)] = inst_37808);

(statearr_37842_38731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (19))){
var inst_37795 = (state_37814[(2)]);
var state_37814__$1 = state_37814;
var statearr_37843_38732 = state_37814__$1;
(statearr_37843_38732[(2)] = inst_37795);

(statearr_37843_38732[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (11))){
var inst_37761 = (state_37814[(12)]);
var inst_37780 = (state_37814[(7)]);
var inst_37780__$1 = cljs.core.seq(inst_37761);
var state_37814__$1 = (function (){var statearr_37844 = state_37814;
(statearr_37844[(7)] = inst_37780__$1);

return statearr_37844;
})();
if(inst_37780__$1){
var statearr_37845_38733 = state_37814__$1;
(statearr_37845_38733[(1)] = (14));

} else {
var statearr_37846_38734 = state_37814__$1;
(statearr_37846_38734[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (9))){
var inst_37802 = (state_37814[(2)]);
var inst_37803 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_37814__$1 = (function (){var statearr_37847 = state_37814;
(statearr_37847[(15)] = inst_37802);

return statearr_37847;
})();
if(cljs.core.truth_(inst_37803)){
var statearr_37848_38735 = state_37814__$1;
(statearr_37848_38735[(1)] = (21));

} else {
var statearr_37849_38736 = state_37814__$1;
(statearr_37849_38736[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (5))){
var inst_37753 = cljs.core.async.close_BANG_(out);
var state_37814__$1 = state_37814;
var statearr_37850_38737 = state_37814__$1;
(statearr_37850_38737[(2)] = inst_37753);

(statearr_37850_38737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (14))){
var inst_37780 = (state_37814[(7)]);
var inst_37782 = cljs.core.chunked_seq_QMARK_(inst_37780);
var state_37814__$1 = state_37814;
if(inst_37782){
var statearr_37851_38738 = state_37814__$1;
(statearr_37851_38738[(1)] = (17));

} else {
var statearr_37852_38739 = state_37814__$1;
(statearr_37852_38739[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (16))){
var inst_37798 = (state_37814[(2)]);
var state_37814__$1 = state_37814;
var statearr_37853_38740 = state_37814__$1;
(statearr_37853_38740[(2)] = inst_37798);

(statearr_37853_38740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37815 === (10))){
var inst_37764 = (state_37814[(8)]);
var inst_37762 = (state_37814[(10)]);
var inst_37774 = cljs.core._nth(inst_37762,inst_37764);
var state_37814__$1 = state_37814;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37814__$1,(13),out,inst_37774);
} else {
if((state_val_37815 === (18))){
var inst_37780 = (state_37814[(7)]);
var inst_37789 = cljs.core.first(inst_37780);
var state_37814__$1 = state_37814;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37814__$1,(20),out,inst_37789);
} else {
if((state_val_37815 === (8))){
var inst_37764 = (state_37814[(8)]);
var inst_37763 = (state_37814[(11)]);
var inst_37769 = (inst_37764 < inst_37763);
var inst_37770 = inst_37769;
var state_37814__$1 = state_37814;
if(cljs.core.truth_(inst_37770)){
var statearr_37854_38742 = state_37814__$1;
(statearr_37854_38742[(1)] = (10));

} else {
var statearr_37855_38743 = state_37814__$1;
(statearr_37855_38743[(1)] = (11));

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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36197__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36197__auto____0 = (function (){
var statearr_37856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37856[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36197__auto__);

(statearr_37856[(1)] = (1));

return statearr_37856;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36197__auto____1 = (function (state_37814){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_37814);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e37860){var ex__36200__auto__ = e37860;
var statearr_37861_38745 = state_37814;
(statearr_37861_38745[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_37814[(4)]))){
var statearr_37862_38746 = state_37814;
(statearr_37862_38746[(1)] = cljs.core.first((state_37814[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38747 = state_37814;
state_37814 = G__38747;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36197__auto__ = function(state_37814){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36197__auto____1.call(this,state_37814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36197__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36197__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_37863 = f__36292__auto__();
(statearr_37863[(6)] = c__36291__auto__);

return statearr_37863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));

return c__36291__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37866 = arguments.length;
switch (G__37866) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__37868 = arguments.length;
switch (G__37868) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__37870 = arguments.length;
switch (G__37870) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36291__auto___38753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_37894){
var state_val_37895 = (state_37894[(1)]);
if((state_val_37895 === (7))){
var inst_37889 = (state_37894[(2)]);
var state_37894__$1 = state_37894;
var statearr_37896_38754 = state_37894__$1;
(statearr_37896_38754[(2)] = inst_37889);

(statearr_37896_38754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37895 === (1))){
var inst_37871 = null;
var state_37894__$1 = (function (){var statearr_37897 = state_37894;
(statearr_37897[(7)] = inst_37871);

return statearr_37897;
})();
var statearr_37898_38755 = state_37894__$1;
(statearr_37898_38755[(2)] = null);

(statearr_37898_38755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37895 === (4))){
var inst_37874 = (state_37894[(8)]);
var inst_37874__$1 = (state_37894[(2)]);
var inst_37875 = (inst_37874__$1 == null);
var inst_37876 = cljs.core.not(inst_37875);
var state_37894__$1 = (function (){var statearr_37899 = state_37894;
(statearr_37899[(8)] = inst_37874__$1);

return statearr_37899;
})();
if(inst_37876){
var statearr_37900_38757 = state_37894__$1;
(statearr_37900_38757[(1)] = (5));

} else {
var statearr_37901_38758 = state_37894__$1;
(statearr_37901_38758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37895 === (6))){
var state_37894__$1 = state_37894;
var statearr_37902_38759 = state_37894__$1;
(statearr_37902_38759[(2)] = null);

(statearr_37902_38759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37895 === (3))){
var inst_37891 = (state_37894[(2)]);
var inst_37892 = cljs.core.async.close_BANG_(out);
var state_37894__$1 = (function (){var statearr_37903 = state_37894;
(statearr_37903[(9)] = inst_37891);

return statearr_37903;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37894__$1,inst_37892);
} else {
if((state_val_37895 === (2))){
var state_37894__$1 = state_37894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37894__$1,(4),ch);
} else {
if((state_val_37895 === (11))){
var inst_37874 = (state_37894[(8)]);
var inst_37883 = (state_37894[(2)]);
var inst_37871 = inst_37874;
var state_37894__$1 = (function (){var statearr_37904 = state_37894;
(statearr_37904[(7)] = inst_37871);

(statearr_37904[(10)] = inst_37883);

return statearr_37904;
})();
var statearr_37905_38760 = state_37894__$1;
(statearr_37905_38760[(2)] = null);

(statearr_37905_38760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37895 === (9))){
var inst_37874 = (state_37894[(8)]);
var state_37894__$1 = state_37894;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37894__$1,(11),out,inst_37874);
} else {
if((state_val_37895 === (5))){
var inst_37874 = (state_37894[(8)]);
var inst_37871 = (state_37894[(7)]);
var inst_37878 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37874,inst_37871);
var state_37894__$1 = state_37894;
if(inst_37878){
var statearr_37907_38761 = state_37894__$1;
(statearr_37907_38761[(1)] = (8));

} else {
var statearr_37908_38762 = state_37894__$1;
(statearr_37908_38762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37895 === (10))){
var inst_37886 = (state_37894[(2)]);
var state_37894__$1 = state_37894;
var statearr_37909_38763 = state_37894__$1;
(statearr_37909_38763[(2)] = inst_37886);

(statearr_37909_38763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37895 === (8))){
var inst_37871 = (state_37894[(7)]);
var tmp37906 = inst_37871;
var inst_37871__$1 = tmp37906;
var state_37894__$1 = (function (){var statearr_37910 = state_37894;
(statearr_37910[(7)] = inst_37871__$1);

return statearr_37910;
})();
var statearr_37911_38764 = state_37894__$1;
(statearr_37911_38764[(2)] = null);

(statearr_37911_38764[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__36197__auto__ = null;
var cljs$core$async$state_machine__36197__auto____0 = (function (){
var statearr_37916 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37916[(0)] = cljs$core$async$state_machine__36197__auto__);

(statearr_37916[(1)] = (1));

return statearr_37916;
});
var cljs$core$async$state_machine__36197__auto____1 = (function (state_37894){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_37894);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e37917){var ex__36200__auto__ = e37917;
var statearr_37918_38767 = state_37894;
(statearr_37918_38767[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_37894[(4)]))){
var statearr_37922_38768 = state_37894;
(statearr_37922_38768[(1)] = cljs.core.first((state_37894[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38770 = state_37894;
state_37894 = G__38770;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$state_machine__36197__auto__ = function(state_37894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36197__auto____1.call(this,state_37894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36197__auto____0;
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36197__auto____1;
return cljs$core$async$state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_37923 = f__36292__auto__();
(statearr_37923[(6)] = c__36291__auto___38753);

return statearr_37923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37932 = arguments.length;
switch (G__37932) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36291__auto___38772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_37976){
var state_val_37977 = (state_37976[(1)]);
if((state_val_37977 === (7))){
var inst_37972 = (state_37976[(2)]);
var state_37976__$1 = state_37976;
var statearr_37978_38773 = state_37976__$1;
(statearr_37978_38773[(2)] = inst_37972);

(statearr_37978_38773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (1))){
var inst_37939 = (new Array(n));
var inst_37940 = inst_37939;
var inst_37941 = (0);
var state_37976__$1 = (function (){var statearr_37979 = state_37976;
(statearr_37979[(7)] = inst_37940);

(statearr_37979[(8)] = inst_37941);

return statearr_37979;
})();
var statearr_37980_38774 = state_37976__$1;
(statearr_37980_38774[(2)] = null);

(statearr_37980_38774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (4))){
var inst_37944 = (state_37976[(9)]);
var inst_37944__$1 = (state_37976[(2)]);
var inst_37945 = (inst_37944__$1 == null);
var inst_37946 = cljs.core.not(inst_37945);
var state_37976__$1 = (function (){var statearr_37981 = state_37976;
(statearr_37981[(9)] = inst_37944__$1);

return statearr_37981;
})();
if(inst_37946){
var statearr_37982_38775 = state_37976__$1;
(statearr_37982_38775[(1)] = (5));

} else {
var statearr_37983_38776 = state_37976__$1;
(statearr_37983_38776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (15))){
var inst_37966 = (state_37976[(2)]);
var state_37976__$1 = state_37976;
var statearr_37985_38777 = state_37976__$1;
(statearr_37985_38777[(2)] = inst_37966);

(statearr_37985_38777[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (13))){
var state_37976__$1 = state_37976;
var statearr_37988_38778 = state_37976__$1;
(statearr_37988_38778[(2)] = null);

(statearr_37988_38778[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (6))){
var inst_37941 = (state_37976[(8)]);
var inst_37962 = (inst_37941 > (0));
var state_37976__$1 = state_37976;
if(cljs.core.truth_(inst_37962)){
var statearr_37989_38779 = state_37976__$1;
(statearr_37989_38779[(1)] = (12));

} else {
var statearr_37990_38780 = state_37976__$1;
(statearr_37990_38780[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (3))){
var inst_37974 = (state_37976[(2)]);
var state_37976__$1 = state_37976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37976__$1,inst_37974);
} else {
if((state_val_37977 === (12))){
var inst_37940 = (state_37976[(7)]);
var inst_37964 = cljs.core.vec(inst_37940);
var state_37976__$1 = state_37976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37976__$1,(15),out,inst_37964);
} else {
if((state_val_37977 === (2))){
var state_37976__$1 = state_37976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37976__$1,(4),ch);
} else {
if((state_val_37977 === (11))){
var inst_37956 = (state_37976[(2)]);
var inst_37957 = (new Array(n));
var inst_37940 = inst_37957;
var inst_37941 = (0);
var state_37976__$1 = (function (){var statearr_37996 = state_37976;
(statearr_37996[(7)] = inst_37940);

(statearr_37996[(8)] = inst_37941);

(statearr_37996[(10)] = inst_37956);

return statearr_37996;
})();
var statearr_37998_38781 = state_37976__$1;
(statearr_37998_38781[(2)] = null);

(statearr_37998_38781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (9))){
var inst_37940 = (state_37976[(7)]);
var inst_37954 = cljs.core.vec(inst_37940);
var state_37976__$1 = state_37976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37976__$1,(11),out,inst_37954);
} else {
if((state_val_37977 === (5))){
var inst_37949 = (state_37976[(11)]);
var inst_37944 = (state_37976[(9)]);
var inst_37940 = (state_37976[(7)]);
var inst_37941 = (state_37976[(8)]);
var inst_37948 = (inst_37940[inst_37941] = inst_37944);
var inst_37949__$1 = (inst_37941 + (1));
var inst_37950 = (inst_37949__$1 < n);
var state_37976__$1 = (function (){var statearr_38002 = state_37976;
(statearr_38002[(11)] = inst_37949__$1);

(statearr_38002[(12)] = inst_37948);

return statearr_38002;
})();
if(cljs.core.truth_(inst_37950)){
var statearr_38003_38782 = state_37976__$1;
(statearr_38003_38782[(1)] = (8));

} else {
var statearr_38004_38783 = state_37976__$1;
(statearr_38004_38783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (14))){
var inst_37969 = (state_37976[(2)]);
var inst_37970 = cljs.core.async.close_BANG_(out);
var state_37976__$1 = (function (){var statearr_38007 = state_37976;
(statearr_38007[(13)] = inst_37969);

return statearr_38007;
})();
var statearr_38008_38784 = state_37976__$1;
(statearr_38008_38784[(2)] = inst_37970);

(statearr_38008_38784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (10))){
var inst_37960 = (state_37976[(2)]);
var state_37976__$1 = state_37976;
var statearr_38009_38785 = state_37976__$1;
(statearr_38009_38785[(2)] = inst_37960);

(statearr_38009_38785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37977 === (8))){
var inst_37949 = (state_37976[(11)]);
var inst_37940 = (state_37976[(7)]);
var tmp38006 = inst_37940;
var inst_37940__$1 = tmp38006;
var inst_37941 = inst_37949;
var state_37976__$1 = (function (){var statearr_38010 = state_37976;
(statearr_38010[(7)] = inst_37940__$1);

(statearr_38010[(8)] = inst_37941);

return statearr_38010;
})();
var statearr_38011_38786 = state_37976__$1;
(statearr_38011_38786[(2)] = null);

(statearr_38011_38786[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__36197__auto__ = null;
var cljs$core$async$state_machine__36197__auto____0 = (function (){
var statearr_38012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38012[(0)] = cljs$core$async$state_machine__36197__auto__);

(statearr_38012[(1)] = (1));

return statearr_38012;
});
var cljs$core$async$state_machine__36197__auto____1 = (function (state_37976){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_37976);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e38016){var ex__36200__auto__ = e38016;
var statearr_38017_38787 = state_37976;
(statearr_38017_38787[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_37976[(4)]))){
var statearr_38019_38788 = state_37976;
(statearr_38019_38788[(1)] = cljs.core.first((state_37976[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38789 = state_37976;
state_37976 = G__38789;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$state_machine__36197__auto__ = function(state_37976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36197__auto____1.call(this,state_37976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36197__auto____0;
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36197__auto____1;
return cljs$core$async$state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_38020 = f__36292__auto__();
(statearr_38020[(6)] = c__36291__auto___38772);

return statearr_38020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38022 = arguments.length;
switch (G__38022) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36291__auto___38792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36292__auto__ = (function (){var switch__36196__auto__ = (function (state_38070){
var state_val_38071 = (state_38070[(1)]);
if((state_val_38071 === (7))){
var inst_38066 = (state_38070[(2)]);
var state_38070__$1 = state_38070;
var statearr_38072_38793 = state_38070__$1;
(statearr_38072_38793[(2)] = inst_38066);

(statearr_38072_38793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38071 === (1))){
var inst_38023 = [];
var inst_38024 = inst_38023;
var inst_38025 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38070__$1 = (function (){var statearr_38073 = state_38070;
(statearr_38073[(7)] = inst_38024);

(statearr_38073[(8)] = inst_38025);

return statearr_38073;
})();
var statearr_38074_38796 = state_38070__$1;
(statearr_38074_38796[(2)] = null);

(statearr_38074_38796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38071 === (4))){
var inst_38028 = (state_38070[(9)]);
var inst_38028__$1 = (state_38070[(2)]);
var inst_38029 = (inst_38028__$1 == null);
var inst_38030 = cljs.core.not(inst_38029);
var state_38070__$1 = (function (){var statearr_38075 = state_38070;
(statearr_38075[(9)] = inst_38028__$1);

return statearr_38075;
})();
if(inst_38030){
var statearr_38076_38797 = state_38070__$1;
(statearr_38076_38797[(1)] = (5));

} else {
var statearr_38077_38798 = state_38070__$1;
(statearr_38077_38798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38071 === (15))){
var inst_38024 = (state_38070[(7)]);
var inst_38058 = cljs.core.vec(inst_38024);
var state_38070__$1 = state_38070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38070__$1,(18),out,inst_38058);
} else {
if((state_val_38071 === (13))){
var inst_38053 = (state_38070[(2)]);
var state_38070__$1 = state_38070;
var statearr_38078_38802 = state_38070__$1;
(statearr_38078_38802[(2)] = inst_38053);

(statearr_38078_38802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38071 === (6))){
var inst_38024 = (state_38070[(7)]);
var inst_38055 = inst_38024.length;
var inst_38056 = (inst_38055 > (0));
var state_38070__$1 = state_38070;
if(cljs.core.truth_(inst_38056)){
var statearr_38079_38803 = state_38070__$1;
(statearr_38079_38803[(1)] = (15));

} else {
var statearr_38080_38804 = state_38070__$1;
(statearr_38080_38804[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38071 === (17))){
var inst_38063 = (state_38070[(2)]);
var inst_38064 = cljs.core.async.close_BANG_(out);
var state_38070__$1 = (function (){var statearr_38081 = state_38070;
(statearr_38081[(10)] = inst_38063);

return statearr_38081;
})();
var statearr_38082_38805 = state_38070__$1;
(statearr_38082_38805[(2)] = inst_38064);

(statearr_38082_38805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38071 === (3))){
var inst_38068 = (state_38070[(2)]);
var state_38070__$1 = state_38070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38070__$1,inst_38068);
} else {
if((state_val_38071 === (12))){
var inst_38024 = (state_38070[(7)]);
var inst_38046 = cljs.core.vec(inst_38024);
var state_38070__$1 = state_38070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38070__$1,(14),out,inst_38046);
} else {
if((state_val_38071 === (2))){
var state_38070__$1 = state_38070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38070__$1,(4),ch);
} else {
if((state_val_38071 === (11))){
var inst_38028 = (state_38070[(9)]);
var inst_38034 = (state_38070[(11)]);
var inst_38024 = (state_38070[(7)]);
var inst_38042 = inst_38024.push(inst_38028);
var tmp38083 = inst_38024;
var inst_38024__$1 = tmp38083;
var inst_38025 = inst_38034;
var state_38070__$1 = (function (){var statearr_38084 = state_38070;
(statearr_38084[(12)] = inst_38042);

(statearr_38084[(7)] = inst_38024__$1);

(statearr_38084[(8)] = inst_38025);

return statearr_38084;
})();
var statearr_38085_38806 = state_38070__$1;
(statearr_38085_38806[(2)] = null);

(statearr_38085_38806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38071 === (9))){
var inst_38025 = (state_38070[(8)]);
var inst_38038 = cljs.core.keyword_identical_QMARK_(inst_38025,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_38070__$1 = state_38070;
var statearr_38086_38810 = state_38070__$1;
(statearr_38086_38810[(2)] = inst_38038);

(statearr_38086_38810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38071 === (5))){
var inst_38028 = (state_38070[(9)]);
var inst_38034 = (state_38070[(11)]);
var inst_38025 = (state_38070[(8)]);
var inst_38035 = (state_38070[(13)]);
var inst_38034__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38028) : f.call(null,inst_38028));
var inst_38035__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38034__$1,inst_38025);
var state_38070__$1 = (function (){var statearr_38087 = state_38070;
(statearr_38087[(11)] = inst_38034__$1);

(statearr_38087[(13)] = inst_38035__$1);

return statearr_38087;
})();
if(inst_38035__$1){
var statearr_38088_38812 = state_38070__$1;
(statearr_38088_38812[(1)] = (8));

} else {
var statearr_38089_38813 = state_38070__$1;
(statearr_38089_38813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38071 === (14))){
var inst_38028 = (state_38070[(9)]);
var inst_38034 = (state_38070[(11)]);
var inst_38048 = (state_38070[(2)]);
var inst_38049 = [];
var inst_38050 = inst_38049.push(inst_38028);
var inst_38024 = inst_38049;
var inst_38025 = inst_38034;
var state_38070__$1 = (function (){var statearr_38090 = state_38070;
(statearr_38090[(14)] = inst_38048);

(statearr_38090[(15)] = inst_38050);

(statearr_38090[(7)] = inst_38024);

(statearr_38090[(8)] = inst_38025);

return statearr_38090;
})();
var statearr_38091_38814 = state_38070__$1;
(statearr_38091_38814[(2)] = null);

(statearr_38091_38814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38071 === (16))){
var state_38070__$1 = state_38070;
var statearr_38092_38815 = state_38070__$1;
(statearr_38092_38815[(2)] = null);

(statearr_38092_38815[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38071 === (10))){
var inst_38040 = (state_38070[(2)]);
var state_38070__$1 = state_38070;
if(cljs.core.truth_(inst_38040)){
var statearr_38093_38816 = state_38070__$1;
(statearr_38093_38816[(1)] = (11));

} else {
var statearr_38094_38817 = state_38070__$1;
(statearr_38094_38817[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38071 === (18))){
var inst_38060 = (state_38070[(2)]);
var state_38070__$1 = state_38070;
var statearr_38095_38818 = state_38070__$1;
(statearr_38095_38818[(2)] = inst_38060);

(statearr_38095_38818[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38071 === (8))){
var inst_38035 = (state_38070[(13)]);
var state_38070__$1 = state_38070;
var statearr_38096_38819 = state_38070__$1;
(statearr_38096_38819[(2)] = inst_38035);

(statearr_38096_38819[(1)] = (10));


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
var cljs$core$async$state_machine__36197__auto__ = null;
var cljs$core$async$state_machine__36197__auto____0 = (function (){
var statearr_38097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38097[(0)] = cljs$core$async$state_machine__36197__auto__);

(statearr_38097[(1)] = (1));

return statearr_38097;
});
var cljs$core$async$state_machine__36197__auto____1 = (function (state_38070){
while(true){
var ret_value__36198__auto__ = (function (){try{while(true){
var result__36199__auto__ = switch__36196__auto__(state_38070);
if(cljs.core.keyword_identical_QMARK_(result__36199__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36199__auto__;
}
break;
}
}catch (e38098){var ex__36200__auto__ = e38098;
var statearr_38099_38820 = state_38070;
(statearr_38099_38820[(2)] = ex__36200__auto__);


if(cljs.core.seq((state_38070[(4)]))){
var statearr_38100_38821 = state_38070;
(statearr_38100_38821[(1)] = cljs.core.first((state_38070[(4)])));

} else {
throw ex__36200__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36198__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38822 = state_38070;
state_38070 = G__38822;
continue;
} else {
return ret_value__36198__auto__;
}
break;
}
});
cljs$core$async$state_machine__36197__auto__ = function(state_38070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36197__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36197__auto____1.call(this,state_38070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36197__auto____0;
cljs$core$async$state_machine__36197__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36197__auto____1;
return cljs$core$async$state_machine__36197__auto__;
})()
})();
var state__36293__auto__ = (function (){var statearr_38101 = f__36292__auto__();
(statearr_38101[(6)] = c__36291__auto___38792);

return statearr_38101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36293__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
