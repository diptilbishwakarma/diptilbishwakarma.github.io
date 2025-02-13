let amcalc_dataset = [];

function calc_mean() {
    if(amcalc_dataset.length === 0) {
        document.getElementById("am_mean").innerHTML = "Mean: ";
        return;
    }

    let sum = 0;
    for(i = 0; i < amcalc_dataset.length; i++) {
        sum += amcalc_dataset[i];
    }

    let mean = sum / amcalc_dataset.length;

    document.getElementById('am_mean').innerHTML = "Mean: " + mean;
}
function show_results() {
    document.getElementById('c_d_values').innerHTML = amcalc_dataset.join(', ');

    calc_mean();
}

function add_dv() {
    let input = document.getElementById("dValue").value;
    let number = parseFloat(input);

    if(isNaN(number) || number === '') {
        alert("Invalid input. Please enter a number!!!");
        return;
    }
    else {
        amcalc_dataset.push(number);
        //console.log(amcalc_dataset);
        show_results();
    }
}

function rem_dv() {
    let input = document.getElementById("dValue").value;
    let number = parseFloat(input);

    let index = amcalc_dataset.indexOf(number);

    if(isNaN(number) || number === '') {
        alert("Invalid input. Please enter a number!!!");
        return;
    }
    else if(index === -1) {
        alert("Number not found in the database of the numbers that you've stored so far. Please try another number!!!");
        return;
    }
    else {
        amcalc_dataset.splice(index, 1);
        //console.log(amcalc_dataset);
        show_results();
    }
}
