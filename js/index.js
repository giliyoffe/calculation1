function numberSum(N) {
  var total = 0;
  for (var i = 1; i <= N; i++) {
    total += i;
  }
  return total;
}

function run() {
  val = document.getElementById("val").value;
  document.getElementById("results").innerHTML =
    val + " will cost: " + numberSum(val) + " coins";
}

window.onload = function() {
  /* event listener */
  document.getElementsByName("val")[0].addEventListener("change", run);
};

function plus() {
  var crntNumm = document.getElementById("val").value;
  document.getElementById("val").value = ++crntNumm;
  run();
}

function minus() {
  var crntNumm = document.getElementById("val").value;
  document.getElementById("val").value = --crntNumm;
  run();
}