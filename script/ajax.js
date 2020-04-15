class ajaxTest {
    constructor() {
        //0 uninitialized, 1 set up, but not sent, 2 sent, 3 in flight, 4 complete.
        this.READY_STATUS_CODE = 4;
    }
    isComplete(req) {
        return req.readyState === this.READY_STATUS_CODE;
    }
    httpGet(url, callback) {
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            let finished = this.isComplete(req);
            if (finished) {
                callback(req.status, req.responseText);
            }
        };
        req.open(method, "GET", url, async, true);
        req.send();
    }
}
//Requesição não concluida
let ajax = new ajaxTest();
ajax.httpGet("http://httpbin.org.ip", (status, response) => {
    let divMain = document.getElementById("main");
    divMain.innerHTML = response;
});
//# sourceMappingURL=ajax.js.map