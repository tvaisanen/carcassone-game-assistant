goog.provide('game_assistant.core');
game_assistant.core.dev_setup = (function game_assistant$core$dev_setup(){
if(game_assistant.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
game_assistant.core.mount_root = (function game_assistant$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [game_assistant.views.main_panel], null),root_el);
});
game_assistant.core.init = (function game_assistant$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game-assistant.events","initialize-db","game-assistant.events/initialize-db",1222227452)], null));

game_assistant.core.dev_setup();

return game_assistant.core.mount_root();
});
var conn_40865 = (new RTCPeerConnection(null));
(window.localConnection = null);

//# sourceMappingURL=game_assistant.core.js.map
