function myFunction() {
    var buyPower = document.getElementById("buying-power").value;
    var stockPrice = document.getElementById("stock-price").value;
    var net = document.getElementById("net").value;
    var amount = document.getElementById("amount").innerHTML;
    var targetPrice = document.getElementById("target-price").innerHTML;
    var stopLossDol = document.getElementById("stop-loss-dol").value;
    var stopLossPer = document.getElementById("stop-loss-per").value;
    var tradingDays = document.getElementById("trading-days").value;
    document.querySelector(".amount").innerHTML = Math.floor(buyPower / stockPrice);
}

function myFunction1() {
    var buyPower = document.getElementById("buying-power").value;
    var stockPrice = document.getElementById("stock-price").value;
    var net = document.getElementById("net").value;
    var amount = document.getElementById("amount").innerHTML;
    var targetPrice = document.getElementById("target-price").innerHTML;
    var stopLossDol = document.getElementById("stop-loss-dol").value;
    var stopLossPer = document.getElementById("stop-loss-per").value;
    var tradingDays = document.getElementById("trading-days").value;
    document.querySelector(".target-price").innerHTML = (((amount * stockPrice) + parseInt(net)) / amount).toFixed(2);
    document.querySelector(".margin").innerHTML = (targetPrice - stockPrice).toFixed(2)
}

function myFunction2() {
    var buyPower = document.getElementById("buying-power").value;
    var stockPrice = document.getElementById("stock-price").value;
    var net = document.getElementById("net").value;
    var amount = document.getElementById("amount").innerHTML;
    var targetPrice = document.getElementById("target-price").innerHTML;
    var stopLossDol = document.getElementById("stop-loss-dol").value;
    var stopLossPer = document.getElementById("stop-loss-per").value;
    var tradingDays = document.getElementById("trading-days").value;
    document.querySelector(".stop-limit-order-dol").innerHTML = (((amount * stockPrice) - stopLossDol) / amount).toFixed(2);
}

function myFunction3() {
    var buyPower = document.getElementById("buying-power").value;
    var stockPrice = document.getElementById("stock-price").value;
    var net = document.getElementById("net").value;
    var amount = document.getElementById("amount").innerHTML;
    var targetPrice = document.getElementById("target-price").innerHTML;
    var stopLossDol = document.getElementById("stop-loss-dol").value;
    var stopLossPer = document.getElementById("stop-loss-per").value;
    var tradingDays = document.getElementById("trading-days").value;
    document.querySelector(".stop-limit-order-per").innerHTML = (stockPrice - ((stockPrice * stopLossPer))).toFixed(2);
}

function myFunction4() {
    var buyPower = document.getElementById("buying-power").value;
    var stockPrice = document.getElementById("stock-price").value;
    var net = document.getElementById("net").value;
    var amount = document.getElementById("amount").innerHTML;
    var targetPrice = document.getElementById("target-price").innerHTML;
    var stopLossDol = document.getElementById("stop-loss-dol").value;
    var stopLossPer = document.getElementById("stop-loss-per").value;
    var tradingDays = document.getElementById("trading-days").value;
    document.querySelector(".daily-avg").innerHTML = (net / tradingDays).toFixed(1);
}