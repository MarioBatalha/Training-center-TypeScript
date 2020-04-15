function doingSomething(call) {
    call.call("Mario Silva");
    call.apply("Mario Batalha");
    call("Mario Batalha Silva");
}
function execute(name) {
    console.log(name);
}
doingSomething(execute);
//# sourceMappingURL=callback.js.map