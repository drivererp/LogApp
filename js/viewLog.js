/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function getCustCode ()
{

  $.ajax(
  {
    type: 'POST',
    //  url: 'http://10.0.4.50/w15c0300app.php?CPROG=w15c0300.php',
    url: 'http://127.0.0.1/ledgers/w99a66qr_ajax.php',
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
             document.getElementById('custCode').innerHTML = "<option value='" + val.custCode + "'>" + val.custName + "</option>";
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