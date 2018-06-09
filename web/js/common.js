
var Nebulas = require("nebulas");
var NebPay = require("nebpay");

// var neb = new Nebulas.Neb();
// neb.setRequest(new Nebulas.HttpRequest("https://testnet.nebulas.io"));
// var nebPay = new NebPay();
// var callbackUrl =NebPay.config.testnetUrl;
// var dapp_address = "n1nHyv3VVU2F3zcstTG4hu2TUn6wRLUTqts";

var neb = new Nebulas.Neb();
neb.setRequest(new Nebulas.HttpRequest("https://mainnet.nebulas.io"));
var nebPay = new NebPay();
var callbackUrl =NebPay.config.mainnetUrl;
var dapp_address = "n1i5LSZa8MCNNtw4aPaTP5wER2xkm9HGjPf";

/*封装合约参数*/
var ContractValue = function () {
    this.value = "0";
    this.nonce = "0";
    this.gas_price = "1000000";
    this.gas_limit = "2000000";
};

/* url search */
function getSearchValue(search, key) {
    if (search && key) {
        search = search.charAt(0) == "?" ? search.substring(1) : search;
        var values = search.split("&");
        var i = 0,
            len = values.length;
        for (i; i < len; i++) {
            var value = values[i].split("=");
            if (value[0] === key) {
                return decodeURI(value[1]);
            }
        }
    }
    return "";
}

/* today date */
function get_date() {
    var now = new Date();
    now.setHours(now.getHours());

    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日

    var clock = year + "-";

    if(month < 10) clock += "0";
    clock += month + "-";

    if(day < 10) clock += "0";
    clock += day;

    return clock;
}

/*打印网络返回的结果*/
function print_result(resp) {
    console.log("response of push: " + JSON.stringify(resp))
}
