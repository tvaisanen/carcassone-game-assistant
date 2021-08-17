
shadow.cljs.devtools.client.env.module_loaded('app');

try { game_assistant.core.init(); } catch (e) { console.error("An error occurred when calling (game-assistant.core/init)"); throw(e); }