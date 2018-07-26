//jQuery
var totalE = 0;
var totalT = 0;
var totalG = 0;
var totalS = 0;

$(document).ready(function (){

  $name = $('input[name="item-name"');
  $amount = $('input[name="amount"'); 
  $type = $('select[name="type"');
  $date = $('input[name="date"');
  $cat = $('select[name="cat"');
  

  var formatDate = function(d) {
    //2014-07-09
    var d = d.split('-');
    
    var dt = new Date(d[0],d[1],d[2]);
    
    var finalDate = '';

    //Day
    var formattedDay;
    switch( d[2].substring(1) ) {
      case '1':
        formattedDay = parseInt(d[2]) + "st";
        break;        
      case '2':
        formattedDay = parseInt(d[2]) + "nd"; 
        break;        
      case '3':
        formattedDay = parseInt(d[2]) + "rd"; 
        break;  
      default:
        formattedDay = parseInt(d[2]) + "th";
    }

    //Months
    var formattedDate = '';
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    formattedDate += months[ dt.getMonth()-1 ];

    var formattedYear = dt.getFullYear();//.toString().substr(-2);

    finalDate = formattedDay + ' ' + formattedDate + ' ' + formattedYear;

    return finalDate;
  }
  
 
  $('#button').click(function () {
    // Making it always add a icon in the type row
    var type_icon; //Store the html fragment to a variable when needed.
    if ($type.val() == 'card') {
      type_icon = "<i class='fa fa-credit-card'></i>";
    } else if ($type.val() == 'cash') {
      type_icon = "<i class='fa fa-money'></i>";
    } else if ($type.val() == 'other') {
      type_icon = "<i class='fa fa-question-circle'></i>";
    }
    
    var form_validated = true;
    
    switch($cat.val())
    {
      case "Entertainment":
        totalE+=parseInt($amount.val());
        break;

      case "Transportation":
        totalT+=parseInt($amount.val());
        break;

      case "Groceries":
        totalG+=parseInt($amount.val());
        break;

      case "Shopping":
        totalS+=parseInt($amount.val());
        break;

    }

    if(form_validated) {
      //Now we can use our references we made before
      if(parseInt($amount.val())>0)
      $("table tr:first").after('<tr><td>'+type_icon+'</td><td>'+$name.val()+'</td><td>'+formatDate($date.val())+'</td><td>'+$cat.val()+'</td><td class="amount">$'+$amount.val()+'</td></tr>');
      else
      $("table tr:first").after('<tr><td>'+type_icon+'</td><td>'+$name.val()+'</td><td>'+formatDate($date.val())+'</td><td>'+$cat.val()+'</td><td class="green">$'+$amount.val()+'</td></tr>');
      //$date.val(null);
      $amount.val(null);
      $name.val(null);

      $("#if-empty").remove();

      
    };

      if(totalE<50)
        $("#ecell").attr('src','img/e1.png');
      if(totalT<50)
        $("#tcell").attr('src','img/t1.png');
      if(totalG<50)
        $("#gcell").attr('src','img/g1.png');
      if(totalS<50)
        $("#scell").attr('src','img/s1.png');

      if(totalE>=50)
        $("#ecell").attr('src','img/e2.png');
      if(totalT>=50)
        $("#tcell").attr('src','img/t2.png');
      if(totalG>=50)
        $("#gcell").attr('src','img/g2.png');
      if(totalS>=50)
        $("#scell").attr('src','img/s2.png');

     if(totalE>=100)
        $("#ecell").attr('src','img/e3.png');
      if(totalT>=100)
        $("#tcell").attr('src','img/t3.png');
      if(totalG>=100)
        $("#gcell").attr('src','img/g3.png');
      if(totalS>=100)
        $("#scell").attr('src','img/s3.png');


  });
  
});