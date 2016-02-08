var dryMatterCalc = function() {

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


    calc.moisture.onchange = function() {
        var result = dryMatter(calc.moisture.value, calc.ingredient.value);
        if (result) {
          result = result.toFixed(1);
        }
        calc.drymatter.value = result;
    };

    calc.ingredient.onchange = function() {
        var result = dryMatter(calc.moisture.value, calc.ingredient.value);
        if (result) {
          result = result.toFixed(1);
        }
        calc.drymatter.value = result;
    };

}

window.onload = dryMatterCalc;

