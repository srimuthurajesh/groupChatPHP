<?php
	if($_GET['action']=='checkMessage'){
		$myfile = fopen("chatLog.txt", "r") or die("Unable to open file!");
		echo fread($myfile,filesize("chatLog.txt"));
		fclose($myfile);
	}elseif($_POST['action']=='sendMessage'&&$_POST['message']!=''){
		if(!$_COOKIE['name']){
			setcookie('name', ucfirst($_POST['name']), time() + (86400 * 30), "/");
			$name=$_POST['name'];
		}else{
			$name=$_COOKIE['name'];
		}
		$myfile = fopen("chatLog.txt", "a+") or die("Unable to open file!");
		echo $txt = '<div style="top-padding:50px"><b>'.$name.'</b> : '.$_POST['message'].'<span class="al-right">'.ltrim(date("h:ia"),0).'</span></div>'.'<hr>';
		fwrite($myfile, $txt);
		fclose($myfile);
	}

?>
