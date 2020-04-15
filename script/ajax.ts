class ajaxTest {
    //0 uninitialized, 1 set up, but not sent, 2 sent, 3 in flight, 4 complete.
    private READY_STATUS_CODE = 4;

    private isComplete(req:XMLHttpRequest){
        return req.readyState === this.READY_STATUS_CODE;
    }
    public httpGet(url: string, callback: (status: number, response: string) => any): void{
        let req = new XMLHttpRequest();
        req.onreadystatechange = () =>{
            let finished = this.isComplete(req);
            if(finished){
                callback(req.status, req.responseText)
            }
        }
        req.open(method:"GET",url,async:true);
        req.send();
    }
}
//Requesição não concluida
let ajax = new ajaxTest();
ajax.httpGet("http://httpbin.org.ip", (status: number, response: string) =>{
  let divMain = <HTMLDivElement>document.getElementById("main");
  divMain.innerHTML = response;
});