function perimeter() {
    var side1 = parseFloat(document.getElementById('side1').value);
    var side2 = parseFloat(document.getElementById('side2').value);
    var side3 = parseFloat(document.getElementById('side3').value);
    var perimeter = side1 + side2 + side3;
    document.getElementById('perimtr_result').innerHTML = "The perimeter of the triangle is: " + perimeter;
}

function area() {
    var side1 = parseFloat(document.getElementById('a_base').value);
    var side2 = parseFloat(document.getElementById('a_height').value);
    var area = 1 / 2 * side1 * side2;
    document.getElementById('area_result').innerHTML = "The area of the triangle is: " + area;
}

function volume() {
    var side1 = parseFloat(document.getElementById('v_base').value);
    var side2 = parseFloat(document.getElementById('v_width').value);
    var side3 = parseFloat(document.getElementById('v_height').value);
    var volume = 1 / 3 * side1 * side2 * side3;
    document.getElementById('vlm_result').innerHTML = "The volume of the triangle is: " + volume;
}