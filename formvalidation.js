function checkLength(fieldId,msgId,maxLen,minLen)
{
    //minLen can be optional, so we need to check that and set a default
    if( typeof minLen == "undefined")
    {
        minLen = 1;
    }
    // We return a custom anonymous function so it can be used
    //as an event handler
    return function()
    {
        var errMsg = "Must be between " + minLen + " and " + maxLen + " characters long";
        if ( fid.value.length < minLen || fid.value.length > maxLen)
        {
            mid.innerHTML = errMsg;
        }
        else
        {
            mid.innerHTML = "OK";
        }

    }

}

	// createMenu Function
function createMenu(startNum, endNum, menuMsg, targetId)
{

	var strMsg = `<option value="">${menuMsg}</option>`;

	var counter = startNum;
	while ( counter <= endNum)
	{
		strMsg += '<option value="' + counter + '">' + counter + '</option>';
		counter++;
	}

	document.getElementById(targetId).innerHTML = strMsg;
}

//window.onload = setupEvents;

function setupEvents()
{

  document.getElementsById("").onkeyup = check

	createMenu(1,100,'how old are you?','selectage');
}
