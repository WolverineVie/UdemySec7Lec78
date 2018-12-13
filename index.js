window.onload=function(){

var btn = document.querySelector("button");

btn.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function (){
    if (XHR.readyState == 4 && XHR.status == 200){
       var data = JSON.parse(XHR.responseText);
       var bitcoinPrice = data.bpi.USD.rate;
      document.getElementById("price").innerHTML = bitcoinPrice + "USD";
      
    }
  }
  var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  XHR.open("GET",url);
  XHR.send();
    
});
  
}
