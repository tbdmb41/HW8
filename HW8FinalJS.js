alert("starting script");
var randomNumber1 = ProcessBox1();

   /* var randomNumber2 = ProcessBox2();
    var randomNumber3 = ProcessBox3();
    var colors = ["#40FF00", "#04B4AE", "#FA58AC"]; */
    
   
function ProcessBox1() {
    var randomNumber1 = 0;
    while ((randomNumber1 == 0) || randomNumber1 >= 4)) {
        randomNumber1 = Math.floor((Math.random() * 10) + 1)
        alert("randomNumber1 = " + randomNumber1)
    };

    if (randomNumber1 == 1) {
        document.getElementById("one1").className = "one";
    }
    else if (randomNumber1 == 2) {
        document.getElementById("two2").className = "two";
    }
    else if (randomNumber1 == 3) {
        document.getElementById("three3").className = "three";
    }
    return result;
}

function ProcessBox2() {
    do {
        randomNumber2 = Math.floor((Math.random() * 10) + 1);
    } while (randomNumber2 == 0 || randomNumber2 >= 4);

    if (randomNumber2 == 1) {
        document.getElementById("two2").className = "one";
    }
    else if (randomNumber2 == 2) {
        document.getElementById("two2").className = "two";
    }
    else if (randomNumber2 == 3) {
        document.getElementById("two2").className = "three";
    }
    return randomNumber2;
}

function ProcessBox3() {
    do {
        randomNumber3 = Math.floor((Math.random() * 10) + 1);
    } while (randomNumber3 == 0 || randomNumber3 >= 4);

    if (randomNumber3 === 1) {
        document.getElementById("three3").className = "one";
    }
    else if (randomNumber3 === 2) {
        document.getElementById("three3").className = "two";
    }
    else if (randomNumber3 === 3) {
        document.getElementById("three3").className = "three";
    }
    return randomNumber3;
}

function Congratulations(randomNumber1, randomNumber2, randomNumber3)
        {
    if (randomNumber1 === 1 && randomNumber2 === 1 && randomNumber3 === 1); {
        document.getElementById('msg').innerHTML = "You won! Whoop Whoop!!!";
    }
    else if (randomNumber1 === 2 && randomNumber2 === 2 && randomNumber3 === 2); {
        document.getElementById('msg').innerHTML = "You won! Whoop Whoop!!!";
    }
    else if (randomNumber1 === 3 && randomNumber2 === 3 && randomNumber3 === 3); {
        document.getElementById('msg').innerHTML = "You won! Whoop Whoop!!!";
    }
    else {
        document.getElementById('msg').innerHTML = "You lost! Maybe next time";
    }
} 
    Congrats(randomNumber1, randomNumber2, randomNumber3);
    function startProcess();           
}

        