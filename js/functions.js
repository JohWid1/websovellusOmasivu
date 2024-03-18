function myFunction() {
    var x = document.getElementById("myNavigation");
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
  }

  function adjustIngredients(multiplier) {
    document.querySelectorAll('.ingredients-card li').forEach(function(item) {
        const baseQty = parseFloat(item.getAttribute('data-qty'));
        const unit = item.getAttribute('data-unit');
        if (baseQty) {
            const newQty = baseQty * multiplier;
            item.textContent = newQty + (unit ? unit + ' ' : ' ') + item.textContent.split(' ').slice(1).join(' ');
        }
    });
}
