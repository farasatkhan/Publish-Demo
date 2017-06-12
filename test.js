	var today = new Date();
	var dd = today.setDate(today.getDate() - 1);
	var dd = dd.getDate()
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();



	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	}

	since = yyyy+'-'+mm+'-'+ dd;

	console.log(since)