/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function getCustCode ()
{

  var strUrl = 'http://' + localStorage.url + '/w99a66qr_ajax.php';
  var strOption = "";
  $.ajax(
  {
    type: 'POST',
    //  url: 'http://10.0.4.50/w15c0300app.php?CPROG=w15c0300.php',
    url: strUrl,
    cache: false,
    // contentType: "text/html",
    // data: {'request':'GETPRODINFO','eanCode':prodCode},
    data: {
      request: 'custList'
    },
    dataType: 'json',
    success: function(data)
    {
      //if (data.errmsg == "")
      //{
          $.each(data, function(key, val) {
             strOption = "<option value='" + val.custCode + "'>" + val.custName + "</option>";
             $("#custCode").append(strOption);
          });
      //}
      //else
      //{
      //}
    },
    error: function(jqo, txt, err)
    {
      alert(txt);
    }
  }
  );
}

function getLogGrid ()
{
  var custCode = $('#custCode').val();
  var logType = $('#typeCode').val();
  var product = $('#prodCode').val();
  var fromDate = $('#fromDate').val();
  var toDate = $('#toDate').val();
  var strUrl = 'http://' + localStorage.url + '/w99a66qr_ajax.php';

  $.ajax(
  {
    type: 'POST',
    //  url: 'http://10.0.4.50/w15c0300app.php?CPROG=w15c0300.php',
    url: strUrl,
    cache: false,
    // contentType: "text/html",
    // data: {'request':'GETPRODINFO','eanCode':prodCode},
    data: {
      request: 'logGrid',
      'logType':logType,
      'custCode':custCode,
      'product':product,
      'fromDate':fromDate,
      'toDate':toDate
    },
    dataType: 'json',
    success: function(data)
    {
      //if (data.errmsg == "")
      //{
      var table = document.getElementById('logTable');

      var rowCount = table.rows.length;
      var row = "0";
      $('#logTable tr:not(:first)').remove();

          $.each(data, function(key, val) {

        row = table.insertRow(-1);


var cell1 = row.insertCell(0);
//        cell1.innerHTML = val.logNo;
//        cell1.style.textAlign = 'right';
//
        var element = document.createElement("input");
          //Assign different attributes to the element.
        element.type = 'button';
        element.value = val.logNo;
        element.name = 'logCode';
        element.onclick = function() {
        $.mobile.changePage("#logModal");
        // document.location.href = "genorenq.html";
        sessionStorage.logCode = val.logNo;
            }
            cell1.appendChild(element);
            
        cell1 = row.insertCell(1);
        cell1.innerHTML = val.custCode;
        cell1.style.textAlign = 'center';

        cell1 = row.insertCell(2);
        cell1.innerHTML = val.dateLog;
        cell1.style.textAlign = 'center';

        cell1 = row.insertCell(3);
        cell1.innerHTML = val.desc;
        cell1.style.textAlign = 'left';

      });

      //}
      //
      //
      //else
      //{
      //}
    },
    error: function(jqo, txt, err)
    {
      alert(txt);
    }
  }
  );
}