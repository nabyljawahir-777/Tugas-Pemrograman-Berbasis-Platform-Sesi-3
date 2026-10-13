const purchase = 10000;
const payment = 20000;
const member = "yes";
if (member == "yes" && payment >= purchase) {
    console.log("Total Payment: ", purchase - purchase * 0.10)
    console.log("Change: ", payment - ((purchase) - purchase * 0.10))
}else if (member != "yes" && payment >= purchase) {
    console.log("Total Payment: ", purchase)
    console.log("Change: ", payment - purchase)
}else if (payment < purchase) {
    console.log("Insufficient Payment")
}