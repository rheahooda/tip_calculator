function calculateTip() {
    
    
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;
    
    
    if(billAmount === "" || serviceQuality == 0) {
        return window.alert("Please enter some value to use the calculator.");
    }
    
    
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        
        document.getElementById("each").style.display = "none"; //hide each id
    } else {
        document.getElementById("each").style.display = "block";
    }
    
   
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100; //Round off upto 2 decimal places
    total = total.toFixed(2);   //make sure they always have two decimal places
    
    
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}



document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Clicking the button calls our custom function
//for function calling
document.getElementById("calculate").onclick = function () { calculateTip(); 
};