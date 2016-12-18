<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>qTrip by Indasys</title>
        <link rel="stylesheet" href="qTrip.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
        <script src="localstoragedb.min.js"></script>
        <script src="qTrip.js"></script>
    </head>
    <body>
	
		<div id="header" class="easyblue">
			<h1>qTrip</h1>
			<ul id="header-navbar">
				<li class="easyblue" data-page="entry">Entry</li>
				<li class="easyblue" data-page="history">History</li>
				<li class="easyblue" data-page="settings">Settings</li>
			</ul>
		</div>
		
		<div class="page" data-page="entry">
			<div class="odometer-controls easyblue">
				<span class="odometer-control" data-increment="100000">+</span>
				<span class="odometer-control" data-increment="10000">+</span>
				<span class="odometer-control" data-increment="1000">+</span>
				<span class="odometer-control" data-increment="100">+</span>
				<span class="odometer-control" data-increment="10">+</span>
				<span class="odometer-control" data-increment="1">+</span>
			</div>
			<div id="odometer" class="easyblue" >
				<span class="odometer-digit" data-position="0"></span>
				<span class="odometer-digit" data-position="1"></span>
				<span class="odometer-digit" data-position="2"></span>
				<span class="odometer-digit" data-position="3"></span>
				<span class="odometer-digit" data-position="4"></span>
				<span class="odometer-digit" data-position="5"></span>
			</div>
			<div class="odometer-controls easyblue">
				<span class="odometer-control" data-increment="-100000">-</span>
				<span class="odometer-control" data-increment="-10000">-</span>
				<span class="odometer-control" data-increment="-1000">-</span>
				<span class="odometer-control" data-increment="-100">-</span>
				<span class="odometer-control" data-increment="-10">-</span>
				<span class="odometer-control" data-increment="-1">-</span>
			</div>
			<p class="reading">START: <span id="reading-start"></span></p>
			<p class="reading">END: <span id="reading-end"></span></p>
			<select id="reasonlist">
				<option>No Reason</option>
				<option value="">&lt;New Reason&gt;</option>
			</select>
			<div class="button easyblue" id="button-start">START</div>
			<div class="button easyblue" id="button-end">END</div>
			<div class="button easyblue" id="button-cancel">CANCEL</div>
			<div id="recording">&nbsp;</div>
			<p id="datestamp"></p>
		</div>
		
		<div class="page" data-page="history">
			<p>This is page 2.</p>
		</div>
		
		<div class="page" data-page="settings">
			<p>This is page 3.</p>
		</div>
		
		<div id="footer" class="easyblue">Copyright &copy; 2013 Indasys, LLC</div>
		
    </body>
</html>
