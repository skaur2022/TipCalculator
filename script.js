document.getElementById("tipForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get input values
  var totalBill = parseFloat(document.getElementById("totalBill").value);
  var numGuests = parseInt(document.getElementById("numGuests").value);
  var qualityOfService = document.getElementById("qualityOfService").value;

  // Calculate tip amount
  var tipPercent;
  switch (qualityOfService) {
    case "excellent":
      tipPercent = 0.2;
      break;
    case "good":
      tipPercent = 0.15;
      break;
    case "fair":
      tipPercent = 0.1;
      break;
    case "poor":
      tipPercent = 0.05;
      break;
    default:
      tipPercent = 0;
  }

  var tipAmount = totalBill * tipPercent;
  var totalAmount = totalBill + tipAmount;
  var perPersonAmount = totalAmount / numGuests;

  // Display the result
  var resultText = "Tip Amount: $" + tipAmount.toFixed(2) + "<br>";
  resultText += "Total Amount: $" + totalAmount.toFixed(2) + "<br>";
  resultText += "Amount Per Person: $" + perPersonAmount.toFixed(2);

  document.getElementById("result").innerHTML = resultText;
});
