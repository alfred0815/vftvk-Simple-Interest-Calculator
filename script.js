function compute()
{
    var principal  = document.getElementById("principal").value;
/* added check for amount > 0 */
/* if (principal <=0 || Number.isNaN(principal)){    */

if (principal <=0) {
        alert("Please Enter a Positive Amount")
        document.getElementById("principal").focus()
        return
    }
    var rate  = document.getElementById("rate").value;
    var years  = document.getElementById("years").value;
    var interest = principal * years *rate /100;
    var year = new Date().getFullYear()+parseInt(years);  
    /* displaying the result message */
    document.getElementById("result").innerHTML=`If you deposit <span>${principal}</span>, <br>
    at an interest rate of <span>${rate}%</span>. <br>
    You will receive an amount of <span>${interest}</span>,
    <br>
    in the year <span>${year}</span>`   
    



}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    rateval = rateval + " %";
    document.getElementById("rate_val").innerText=rateval;
}

