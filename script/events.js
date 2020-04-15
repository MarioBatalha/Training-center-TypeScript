class ClickHandler {
    constructor() {
        let main = document.getElementById('main');
        let btn1 = document.getElementById('btn1');
        let btn2 = document.getElementById('btn2');
        if (main !== null && btn1 !== null && btn2 !== null) {
            main.addEventListener("click", ClickHandler.alertEventMain);
            btn1.addEventListener("click", ClickHandler.alertEventbtn1);
            btn2.addEventListener("click", ClickHandler.alertEventbtn2);
        }
    }
    static alertEventMain() {
        alert('Clicked over main');
    }
    static alertEventbtn1() {
        alert('clicked over Real Madrid');
    }
    static alertEventbtn2() {
        alert('clicked over Barcelona');
    }
}
const clickHandler = new ClickHandler();
//# sourceMappingURL=events.js.map