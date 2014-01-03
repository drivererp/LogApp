//This should be loaded before jquery mobile js in your page
//jquery code in here only please

$(document).bind("mobileinit", function(){
  //apply overrides here
  $.mobile.allowCrossDomainPages = true;
  $.mobile.defaultPageTransition = 'slide';
  $.mobile.touchOverflowEnabled = true;
});
//use this to do script as the #page is loaded
$('#home').live('pageshow',function(event, ui){
  //page show only works here - does not work in index.html footer
  //alert('page show');

  //first vla in array, Jan is xaxis title - If use same one twice data is plotted against it no
  //  as a new point in sequence

    var strUrl = 'http://' + localStorage.url + '/w99a66qr_ajax.php';
    var custCode = $('#custCode').val();
  var logType = $('#typeCode').val();
  var product = $('#prodCode').val();
  var fromDate = $('#fromDate').val();
  var toDate = $('#toDate').val();
    $.ajax(
  {
    type: 'POST',
    //  url: 'http://10.0.4.50/w15c0300app.php?CPROG=w15c0300.php',
    url: strUrl,
    cache: false,
    // contentType: "text/html",
    // data: {'request':'GETPRODINFO','eanCode':prodCode},
    data: {
      request: 'STATS1',
      logType:'LOG',
      'custCode':custCode,
      'product':product,
      'fromDate':fromDate,
      'toDate':toDate,
      'userName':localStorage.userNameApp,
      'password':localStorage.passwordApp
    },
    dataType: 'json',
    success: function(data)
    {
      //if (data.errmsg == "")
      //{
        $('#info1').html(data.totalOpen);
        $('#info2').html(data.totalMarpacsOpen);
        $('#info3').html(data.totalBlissOpen);
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

});


$('#graph').live('pageshow',function(event, ui){
  //page show only works here - does not work in index.html footer
  //alert('page show');

  var strUrl = 'http://' + localStorage.url + '/w99a66qr_ajax.php';
  var custCode = $('#custCode').val();
  var logType = $('#typeCode').val();
  var product = $('#prodCode').val();
  var fromDate = $('#fromDate').val();
  var toDate = $('#toDate').val();
 $.ajax(
  {
    type: 'POST',
    //           url: 'http://10.0.4.50/scon/sc09app.php?CPROG=STSCAN',
    url: strUrl,
    cache: false,
    // contentType: "text/html",
    // data: {'request':'GETPRODINFO','eanCode':prodCode},
    data: {
      request: 'STATS1',
      logType:'LOG',
      'custCode':custCode,
      'product':product,
      'fromDate':fromDate,
      'toDate':toDate,
      'userName':localStorage.userNameApp,
      'password':localStorage.passwordApp
    },
    dataType: 'json',
    success: function(data)
    {
      if (data.errmsg == "")
      {
        //graph here ...

        var line1Data = [[data.gDates1, Number(data.gData1)],[data.gDates2,Number(data.gData2)],[data.gDates3,Number(data.gData3)],[data.gDates4,Number(data.gData4)],[data.gDates5,Number(data.gData5)],[data.gDates6,Number(data.gData6)],[data.gDates7, Number(data.gData7)],[data.gDates8,Number(data.gData8)],
        [data.gDates9,Number(data.gData9)],[data.gDates10,Number(data.gData10)],[data.gDates11,Number(data.gData11)],[data.gDates12,Number(data.gData12)],[data.gDates13, Number(data.gData13)],[data.gDates14,Number(data.gData14)],[data.gDates15,Number(data.gData15)],[data.gDates16,Number(data.gData16)],[data.gDates17,Number(data.gData17)],[data.gDates18,Number(data.gData18)],[data.gDates19, Number(data.gData19)],[data.gDates20,Number(data.gData20)],
        [data.gDates21,Number(data.gData21)],[data.gDates22,Number(data.gData22)],[data.gDates23,Number(data.gData23)],[data.gDates24,Number(data.gData24)],[data.gDates25,Number(data.gData25)],[data.gDates26,Number(data.gData26)],[data.gDates27,Number(data.gData27)],[data.gDates28,Number(data.gData28)],[data.gDates29,Number(data.gData29)],[data.gDates30,Number(data.gData30)],[data.gDates31,Number(data.gData31)],[data.gDates32,Number(data.gData32)]];

        //  var line1Data = [['Jan', Number(data.period1)],['Feb',25],['Mar',5],['Apr',19],['May',23],['Jun',20],['Jul', 10],['Aug',15],['Sep',21],['Oct',16],['Nov',32],['Dec',24]];

        $.jqplot('chartdivBig',  [line1Data],
        {
          // Turns on animatino for all series in this plot.
          animate: true,
          // Will animate plot on calls to plot1.replot({resetAxes:true})
          animateReplot: true,
          // title:'Sales',
          seriesDefaults: {
            showMarker:false,
            shadow:false,
            pointLabels: {
              show:true
            }
          },
          grid: {
            shadow:false
          },
          axesDefaults: {
            tickRenderer: $.jqplot.CanvasAxisTickRenderer
          },
          axes: {
            xaxis: {
              renderer: $.jqplot.CategoryAxisRenderer,
              //ticks: ['Jan','Feb','Mar'],
              //dont know what this does -> numberTicks: 12,
              tickOptions: {
                angle: -45,      //tilt with -30, -45 etc
                fontSize: '8pt'
              }
            },
            yaxis: {
              min: 0
            }
          }
        }
        );

      }
      else
      {
        //alert(data.errmsg);
        document.forms['frm1'].elements['prodCode'].value = "";
        document.forms['frm1'].elements['prodCode'].focus();
      }
    },
    error: function(jqo, txt, err)
    {
      alert('Please go to the settings page and enter your IP address');
    }
  }
  );

});



$('#home').live('pageshow',function(event, ui){
  //page show only works here - does not work in index.html footer
  //alert('page show');

  var strUrl = 'http://' + localStorage.url + '/w99a66qr_ajax.php';
  var custCode = $('#custCode').val();
  var logType = $('#typeCode').val();
  var product = $('#prodCode').val();
  var fromDate = $('#fromDate').val();
  var toDate = $('#toDate').val();
 $.ajax(
  {
    type: 'POST',
    //           url: 'http://10.0.4.50/scon/sc09app.php?CPROG=STSCAN',
    url: strUrl,
    cache: false,
    // contentType: "text/html",
    // data: {'request':'GETPRODINFO','eanCode':prodCode},
    data: {
      request: 'STATS1',
      logType:'LOG',
      'custCode':custCode,
      'product':product,
      'fromDate':fromDate,
      'toDate':toDate,
      'userName':localStorage.userNameApp,
      'password':localStorage.passwordApp
    },
    dataType: 'json',
    success: function(data)
    {
      if (data.errmsg == "")
      {
        //graph here ...

        var line1Data = [[data.gDates1, Number(data.gData1)],[data.gDates2,Number(data.gData2)],[data.gDates3,Number(data.gData3)],[data.gDates4,Number(data.gData4)],[data.gDates5,Number(data.gData5)],[data.gDates6,Number(data.gData6)],[data.gDates7, Number(data.gData7)],[data.gDates8,Number(data.gData8)],
        [data.gDates9,Number(data.gData9)],[data.gDates10,Number(data.gData10)],[data.gDates11,Number(data.gData11)],[data.gDates12,Number(data.gData12)],[data.gDates13, Number(data.gData13)],[data.gDates14,Number(data.gData14)],[data.gDates15,Number(data.gData15)],[data.gDates16,Number(data.gData16)],[data.gDates17,Number(data.gData17)],[data.gDates18,Number(data.gData18)],[data.gDates19, Number(data.gData19)],[data.gDates20,Number(data.gData20)],
        [data.gDates21,Number(data.gData21)],[data.gDates22,Number(data.gData22)],[data.gDates23,Number(data.gData23)],[data.gDates24,Number(data.gData24)],[data.gDates25,Number(data.gData25)],[data.gDates26,Number(data.gData26)],[data.gDates27,Number(data.gData27)],[data.gDates28,Number(data.gData28)],[data.gDates29,Number(data.gData29)],[data.gDates30,Number(data.gData30)],[data.gDates31,Number(data.gData31)],[data.gDates32,Number(data.gData32)]];

        //  var line1Data = [['Jan', Number(data.period1)],['Feb',25],['Mar',5],['Apr',19],['May',23],['Jun',20],['Jul', 10],['Aug',15],['Sep',21],['Oct',16],['Nov',32],['Dec',24]];

        $.jqplot('chartdivSO',  [line1Data],
        {
          // Turns on animatino for all series in this plot.
          animate: true,
          // Will animate plot on calls to plot1.replot({resetAxes:true})
          animateReplot: true,
          // title:'Sales',
          seriesDefaults: {
            showMarker:false,
            shadow:false,
            pointLabels: {
              show:true
            }
          },
          grid: {
            shadow:false
          },
          axesDefaults: {
            tickRenderer: $.jqplot.CanvasAxisTickRenderer
          },
          axes: {
            xaxis: {
              renderer: $.jqplot.CategoryAxisRenderer,
              //ticks: ['Jan','Feb','Mar'],
              //dont know what this does -> numberTicks: 12,
              tickOptions: {
                angle: -45,      //tilt with -30, -45 etc
                fontSize: '8pt'
              }
            },
            yaxis: {
              min: 0
            }
          }
        }
        );

      }
      else
      {
        alert(data.errmsg);
      }
    },
    error: function(jqo, txt, err)
    {
      alert('Please go to the settings page and enter your IP address');
    }
  }
  );

});