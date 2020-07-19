var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function validation() {
    var genders = document.getElementsByName("gender");
    if( document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value >2100 || document.myForm.year.value <=1900) {
       alert ( "Please provide a valid year of birth! eg 2020" );
       document.myForm.year.focus() ;
       return false;
    }
    else if( document.myForm.month.value == "" || isNaN( document.myForm.month.value ) || 
    document.myForm.month.value.length != 2 || document.myForm.month.value > 12  || document.myForm.month.value <= 0) {
       alert ( "Please provide your month of birth! between 1 and 12" );
       document.myForm.month.focus() ;
       return false;
    }
    else if ( document.myForm.date.value == "" || isNaN (document.myForm.date.value) || document.myForm.date.value.length != 2 || document.myForm.date.value>31 || document.myForm.date.value <= 0) {
        alert ( "Please provide a valid date on which you were born" );
        document.myForm.month.focus() ;
        return false;
    }
    else if (gender[0].checked==false && gender [1].checked==false) {
        alert ("You must return male or female");
        return false;
    }
    else {
        return true;
    }

}
function calculateDayValue (){
    year = document.getElementById("Year").value;
    CC = parseInt(year.substring(0,1));
    YY = parseInt(year.substring(2,3));
    MM = parseInt(year.getElementById("Month").value);
    DD = parseInt (year.getElementById("date").value);
    d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
    console.log (d);
    return (Math.floor(d));
}

