function inputAssetChange() {
    var asset = document.getElementById("input-submit").value;
    order = asset / 800;
    order = (order).toFixed(2);
    var adminfee = order * 30;
    var profit = asset * 5/100;
    var profit_at = (profit + adminfee);
    document.getElementById("label-result").innerHTML = 
    "<b>Market Execution: " + order + "</b><br>Admin Fee: " + adminfee.toFixed(2) + "<br><b>Take Profit minimum: " + profit_at.toFixed(2) + "</b>";
}