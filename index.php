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
			$url = "https://corona.lmao.ninja/all";
			//$url = "https://api.twitter.com/1/help/configuration.json";

			// set url
			curl_setopt($ch, CURLOPT_URL, $url);

			//return the transfer as a string
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

			// $output contains the output string
			$output = curl_exec($ch);


			// close curl resource to free up system resources
			curl_close($ch);
			print $output;

			if ($output === false){
				echo "nope";
			} else if ($output === true){
				echo "yaza";
			}

		?>
	</p>
</div>

</body>

</html>

