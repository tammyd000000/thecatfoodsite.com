var calculator = function() {

  var calc = document.getElementById("calc");

  var checkInputFloat = function (input) {
    input = parseFloat(input);
    if (input < 0.0) {
      return null;
    } else if (input > 100.0) {
      return null;
    } else {
      return input;
    }
  };

  var dryMatter = function (moisture, ingredient) {

    var result = null;
    moisture = checkInputFloat(moisture);
    ingredient = checkInputFloat(ingredient);

    if (moisture && ingredient) {
      result =  (ingredient / (100 - moisture)) * 100;
    }

    return result;
  };

  var isNumeric = function(input) {
      return (input - 0) == input && (''+input).trim().length > 0;
  }

  var updateCalculatedValue = function(element, value) {
    if (isNumeric(value)) {
      element.value = value.toFixed(1)
    } else {
      element.value = null;
    }
  }

  var doCalculations = function() {
    var wProtein = checkInputFloat(calc.protein.value);
    var wFat = checkInputFloat(calc.fat.value);
    var wFiber = checkInputFloat(calc.fiber.value);
    var wMoisture = checkInputFloat(calc.moisture.value);
    var wOther = checkInputFloat(calc.other.value);
    var wCarbs = 100.0 - wProtein - wFat - wFiber - wMoisture - wOther;
    wCarbs = wCarbs < 0.0 ? 0.0 : wCarbs;

    console.log("Wet Carbs:" + wCarbs);

    var dProtein = dryMatter(wMoisture, wProtein);
    var dFat = dryMatter(wMoisture, wFat);
    var dFiber = dryMatter(wMoisture, wFiber);
    var dOther = dryMatter(wMoisture, wOther);
    var dCarbs = dryMatter(wMoisture, wCarbs);


    console.log("Dry Carbs:" + dCarbs);
    updateCalculatedValue(calc.dry_protein, dProtein);
    updateCalculatedValue(calc.dry_carbs, dCarbs);
    updateCalculatedValue(calc.dry_other, dOther);
    updateCalculatedValue(calc.dry_fat, dFat);
    updateCalculatedValue(calc.dry_fiber, dFiber);

  }

  calc.protein.onchange = doCalculations;
  calc.fat.onchange = doCalculations;
  calc.fiber.onchange = doCalculations;
  calc.moisture.onchange = doCalculations;
  calc.other.onchange = doCalculations;

}

window.onload = calculator;
