<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js">
  
  var x = new Date();

var month = x.getMonth()+1;
var day = x.getDate();

var output1 = x.getFullYear() + '/' +
    ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day;

    document.getElementById('today').innerHTML = output1;
  
</script>


<script>
  var x = new Date();
  
  var month = x.getMonth()+1;
var day = x.getDate()-1;

var output2 = x.getFullYear() + '/' +
    ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day;


    document.getElementById('date-1').innerHTML = output2;
  
</script>


<script>
  var x = new Date();
  
  var month = x.getMonth()+1;
var day = x.getDate()-2;

var output3 = x.getFullYear() + '/' +
    ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day;


    document.getElementById('date-2').innerHTML = output3;
  
</script>

<script>
  var x = new Date();
  
  var month = x.getMonth()+1;
var day = x.getDate()-3;

var output4 = x.getFullYear() + '/' +
    ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day;


    document.getElementById('date-3').innerHTML = output4;
  
</script>


<script>
  var x = new Date();
  
  var month = x.getMonth()+1;
var day = x.getDate()-4;

var output5 = x.getFullYear() + '/' +
    ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day;


    document.getElementById('date-4').innerHTML = output5;
  
</script>

<script>
  var x = new Date();
  
  var month = x.getMonth()+1;
var day = x.getDate()-5;

var output6 = x.getFullYear() + '/' +
    ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day;


    document.getElementById('date-5').innerHTML = output6;
  
</script>

<script>
  var x = new Date();
  
  var month = x.getMonth()+1;
var day = x.getDate()-5;

var output7 = x.getFullYear() + '/' +
    ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day;


    document.getElementById('date-6').innerHTML = output7;
  
</script>
