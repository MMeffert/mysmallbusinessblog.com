---
title: "Bandwidth Usage Graphing (Part 1) - Overview"
date: 2011-05-13T14:55:02+00:00
slug: customer-bandwidth-usage-graphing
description: "Having the ability to visually see bandwidth usage statistics can help better plan for future growth but also see what current usages actually are."
categories:
  - Entrepreneurial
  - Programming
tags:
  - Bandwdith Graphing
  - Customers
  - Graphing
  - PHP
  - Statistics
aliases:
  - /2011/05/customer-bandwidth-usage-graphing/
---

Having the ability to visually see bandwidth usage statistics can help better plan for future growth but also see what current usages actually are. I will start by showing the code that I have created for this purpose. The code has comments throughout to give some detail but I will go into further explanation in future parts to this article. This code uses a php class file called [Max's Chart](http://www.phpf1.com/product/php-chart-script.html) which can be downloaded.

The below script can also be downloaded.

![Total Bandwidth Usage By Month](/images/total_graph.jpg)

```php
<?PHP
//Variable Definitions
//$m* = Month and Year in format (December2010)
//$ms* = Month and Year in format (Dec2010)
//$bandm* = MYSQl Select Query
//$datam* = Bandwidth data from database (KB)
//$fdatam* = Formatted bandwidth number (MB)

?>

<?php require_once('maxChart.class.php'); //Required to build chart?>

<?PHP // $hostname = $_GET['hostname']; //Set hostname
$dbname = 'Stats';?>

<?php
//Connect mysql
mysql_connect('HOSTNAME', 'USERNAME', 'PASSWORD');
mysql_select_db('DATABASE');

//Generate months

$m1 = date("FY");
$m2 = date("FY",strtotime("-1 month"));
$m3 = date("FY",strtotime("-2 months"));
$m4 = date("FY",strtotime("-3 months"));
$m5 = date("FY",strtotime("-4 months"));
$m6 = date("FY",strtotime("-5 months"));

$ms1 = date("MY");
$ms2 = date("MY",strtotime("-1 month"));
$ms3 = date("MY",strtotime("-2 months"));
$ms4 = date("MY",strtotime("-3 months"));
$ms5 = date("MY",strtotime("-4 months"));
$ms6 = date("MY",strtotime("-5 months"));

//Select bandwidth data from database
$bandm1 = mysql_query("SELECT sum(KBytes) FROM ".$m1."");
while($row = mysql_fetch_array($bandm1))
{
$datam1 = $row['sum(KBytes)'];
}

$bandm2 = mysql_query("SELECT sum(KBytes) FROM ".$m2."");
while($row = mysql_fetch_array($bandm2))
{
$datam2 = $row['sum(KBytes)'];
}

$bandm3 = mysql_query("SELECT sum(KBytes) FROM ".$m3."");
while($row = mysql_fetch_array($bandm3))
{
$datam3 = $row['sum(KBytes)'];
}

$bandm4 = mysql_query("SELECT sum(KBytes) FROM ".$m4."");
while($row = mysql_fetch_array($bandm4))
{
$datam4 = $row['sum(KBytes)'];
}

$bandm5 = mysql_query("SELECT sum(KBytes) FROM ".$m5."");
while($row = mysql_fetch_array($bandm5))
{
$datam5 = $row['sum(KBytes)'];
}

$bandm6 = mysql_query("SELECT sum(KBytes) FROM ".$m6."");
while($row = mysql_fetch_array($bandm6))
{
$datam6 = $row['sum(KBytes)'];
}

//Format numbers to Megabytes
$fdatam1 = number_format(($datam1 / 1024),0,'','');
$fdatam2 = number_format(($datam2 / 1024),0,'','');
$fdatam3 = number_format(($datam3 / 1024),0,'','');
$fdatam4 = number_format(($datam4 / 1024),0,'','');
$fdatam5 = number_format(($datam5 / 1024),0,'','');
$fdatam6 = number_format(($datam6 / 1024),0,'','');

//Build Data for Graph
if ($fdatam6 > '0'){$data["$ms6"] = $fdatam6;}
if ($fdatam5 > '0'){$data["$ms5"] = $fdatam5;}
if ($fdatam4 > '0'){$data["$ms4"] = $fdatam4;}
if ($fdatam3 > '0'){$data["$ms3"] = $fdatam3;}
if ($fdatam2 > '0'){$data["$ms2"] = $fdatam2;}
if ($fdatam1 > '0'){$data["$ms1"] = $fdatam1;}

//Build Graph
$mc = new maxChart($data);
$title = ucwords($hostname);
$mc->displayChart("$title".' Total Bandwidth Usage By Month (MB)',1,600,300,false);
?>
```
