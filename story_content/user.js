function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5rNPewkFboQ":
        Script1();
        break;
      case "6HYS4bpD4nm":
        Script2();
        break;
      case "5n0KDxN8NZf":
        Script3();
        break;
      case "6SBD5WEhou5":
        Script4();
        break;
      case "5f3R4QZEZwM":
        Script5();
        break;
      case "5wjyKwDMPzr":
        Script6();
        break;
      case "6qR7BMFwS9j":
        Script7();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script6()
{
  $("#tab-customlink").show();
}

function Script7()
{
  window.print();
}

