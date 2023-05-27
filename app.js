function bmi_calculator(w, h) {
    let bmi = w / (h / 100) ** 2
    return bmi.toFixed(1)
}

var result

function getval() {
    var weight = document.getElementById('input_weight').value;
    var height = document.getElementById('input_height').value;
    var result = bmi_calculator(weight, height);

    // ------------------ check if user fill the form input ------------------
    if (isNaN(result)) {
        document.getElementById('result').style.color = 'red';
        document.getElementById('result').innerHTML = 'Input your weight and height !!! ';
    }
    else {
        document.getElementById('result').style.color = 'black';
        document.getElementById('result').innerHTML = 'BMI = ' + result;
    }

    // ------------------ display what bmi range you are in and image of that range ------------------
    if (result < 18.5) {
        document.getElementById('status').innerHTML = 'You are underweight !!';
        document.getElementById('status').style.color = '#E8B200';

        document.getElementById('underweight').style.display = 'block';
        document.getElementById('weight').style.display = 'none';
        document.getElementById('overweight').style.display = 'none';
        document.getElementById('fat').style.display = 'none';
    }
    else if (result < 25) {
        document.getElementById('status').innerHTML = 'You are normal weight';
        document.getElementById('status').style.color = 'rgb(75, 194, 36)';

        document.getElementById('underweight').style.display = 'none';
        document.getElementById('weight').style.display = 'block';
        document.getElementById('overweight').style.display = 'none';
        document.getElementById('fat').style.display = 'none';
    }
    else if (result < 30) {
        document.getElementById('status').innerHTML = 'You are overweight !!';
        document.getElementById('status').style.color = '#FF8000';

        document.getElementById('underweight').style.display = 'none';
        document.getElementById('weight').style.display = 'none';
        document.getElementById('overweight').style.display = 'block';
        document.getElementById('fat').style.display = 'none';
    }
    else if (result >= 30) {
        document.getElementById('status').innerHTML = 'You are obese !!';
        document.getElementById('status').style.color = '#FF0000';

        document.getElementById('underweight').style.display = 'none';
        document.getElementById('weight').style.display = 'none';
        document.getElementById('overweight').style.display = 'none';
        document.getElementById('fat').style.display = 'block';
    }
    else {
        document.getElementById('status').innerHTML = '!!! ERROR !!!';
        document.getElementById('status').style.color = 'red';
    }
}
