
const currency = document.getElementById("aa");
const display = document.getElementById("bb");
const submit = document.getElementById("cc");

submit.addEventListener("click", function(){
   if(currency.value == "")
   {
    currency.classList.add("is-invalid")
   }
   else
   {
    currency.classList.remove("is-invalid");
   }

   display.value = parseInt(currency.value) * 1437;

});