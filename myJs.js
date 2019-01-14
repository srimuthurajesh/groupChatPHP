function sendMessage(){
    var time = new Date();
	timeHours=time.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true }); 
	timeHours=timeHours.replace(/\s/g, '').toLowerCase();
	
    var doc=document.getElementById("chatDisplay");
	doc.innerHTML = doc.innerHTML+'<div style="top-padding:50px"><b>'+name+'</b> : '+document.getElementById('inputBox').value+'<span class="al-right">'+timeHours+'</span></div>'+'<hr>';
	//console.log(doc.innerHTML+'<div style="top-padding:50px"><b>'+name+'</b> : '+document.getElementById('inputBox').value+'<span class="al-right">'+timeHours+'</span></div>'+'<hr>');
	
    var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
  	if (this.readyState == 4 && this.status == 200) {
	 	//document.getElementById("chatDisplay").innerHTML = this.responseText;
	 	document.getElementById('inputBox').value='';
	 	document.getElementById('inputBox').focus();
	 	var doc=document.getElementById("chatDisplay");
		doc.scrollTop=doc.scrollHeight+200;
		}
	  };
	  xhttp.open("POST", "chatController.php", true);
	  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send("action=sendMessage&name="+name+"&message="+document.getElementById('inputBox').value);
}


