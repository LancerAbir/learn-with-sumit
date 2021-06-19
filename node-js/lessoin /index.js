const DokanStart = require("./dokan");

const dokan = new DokanStart();

dokan.on("openShop", ({ taka, poysa }) => {
    console.log(`customer are coming ${taka} o ${poysa}`);
});

dokan.dokanHisab();
