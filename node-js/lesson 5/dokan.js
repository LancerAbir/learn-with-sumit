const EventEmitter = require("events");

class DokanStart extends EventEmitter {
    dokanHisab() {
        console.log("class already start");

        setTimeout(() => {
            this.emit("openShop", {
                taka: "taka asbe",
                poysa: "asbe poysa",
            });
        }, 1000);
    }
}

module.exports = DokanStart;
