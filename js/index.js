$(document).ready(function(){

    var algo;
    var A;
    var B;
    var start;
    var h;
    var stop;

    initializeScreen();

    $("#solve").click(function(e){
        e.preventDefault();

        algo = $("#algo").val();
        A = parseFloat($("#a").val());
        B = parseFloat($("#b").val());
        start = parseFloat($("#start").val());
        h = parseFloat($("#h").val());
        stop = parseFloat($("#stop").val());

        if(valuesReady()) {
            solve();
        } else {
            $('#solution').html("<h5>Error with input values.</h5>");
        }
    });

    function solve() {
        initializeScreen();
        switch (algo) {
            case "Euler Forward":
                solveEulerForward();
                break;
            case "Euler Backward":
                solveEulerBackward();
                break;
            case "Heun":
                solveHeun();
                break;
        }
    }

    function solveEulerForward() {
        var solution = start;
        var display = "<h5>Solving Using the Forward Euler Algorithm";
        display += "<h4>y(0): " + solution + "</h4><br/>";
        for(var x = h; x <= stop; x += h) {
            solution = solution + (h * (A * (x - 1) + B));
            display += "<h4>y(" + x + "): " + solution + "</h4><br/>";
        }
        $('#solution').html(display);
    }

    function solveEulerBackward() {
        var solution = start;
        var display = "<h5>Solving Using the Backwards Euler Algorithm";
        display += "<h4>y(0): " + solution + "</h4><br/>";
        for(var x = h; x <= stop; x += h) {
            solution = solution + (h * (A * x + B));
            display += "<h4>y(" + x + "): " + solution + "</h4><br/>";
        }
        $('#solution').html(display);
    }

    function solveHeun() {
        var solution = start;
        var display = "<h5>Solving Using the Backwards Euler Algorithm";
        display += "<h4>y(0): " + solution + "</h4><br/>";
        for(var x = h; x <= stop; x += h) {
            solution = solution + (h * ((A * (x - 1) + B) + (A * x + B)) / 2);
            display += "<h4>y(" + x + "): " + solution + "</h4><br/>";
        }
        $('#solution').html(display);
    }

    function valuesReady() {
        return !isNaN(A) && !isNaN(B) && !isNaN(h) && !isNaN(stop);
    }

    function initializeScreen() {
        $('#solution').html("");
    }
});
