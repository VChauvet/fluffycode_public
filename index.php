<head>
<meta http-equiv="Content-Language" content="de">
<meta http-equiv="Content-Type" content="text/html; charset=WINDOWS-1252">
<title>fluffycode</title>                      
<style>
</style>
</head>

<body>
	<h1>Most things start as chaos and finally become a orderly mess.</h1>
	<p><?php
			
			// create curl resource
			$ch = curl_init();
			$url = "https://corona.lmao.ninja/countries";
			//$url = "https://api.twitter.com/1/help/configuration.json";

			curl_setopt($ch, CURLOPT_URL, $url);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

			$output = curl_exec($ch);


			// close curl resource to free up system resources
			curl_close($ch);

			$arr_result = json_decode($output, true);

			echo "<p>Germany cases: ".$arr_result[3]["cases"].", Deaths today: ".$arr_result[3]["cases"]."</p>";
			echo "<p>Belgium cases: ".$arr_result[12]["cases"].", Deaths today: ".$arr_result[12]["cases"]."</p>";
			echo "<p>Portugal cases: ".$arr_result[17]["cases"].", Deaths today: ".$arr_result[17]["cases"]."</p>";
			
			

		?>
	</p>
</div>

</body>

</html>

