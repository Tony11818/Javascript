function ajaxfunction(command,sourceID,targetID,useJSON)
{
    return function()
    {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                if(useJSON == "yes")
                {
                    document.getElementById(targetID).innerHTML = yearparse(this.responseText)
                }
                else
                {
                    document.getElementById(targetID).innerHTML = this.responseText;
                    //document.getElementById(targetID).innerHTML = "Response was sent?";
                }
            }
        }
        charstyped = encodeURIComponent(document.getElementById(sourceID).value);
        xmlhttp.open("GET", "https://www.lampbusters.com/coperni/javascript2/grbooks_ajax.php?command=" + command + "&searchterm=" + charstyped, true);
        xmlhttp.send();
    }
}

function yearparse(jsonString)
{
    var myArr = JSON.parse(jsonString);
    var jsonMsg = `<table>
                    <tr>
                      <th>Book Title</th>
                      <th>Year</th>
                      <th>Publisher</th>
                      <th>ISBN 13</th>
                    </tr>`;
    for (var i=0,len = myArr.length; i < len; i++)
    {
        jsonMsg += `<tr>
                      <td>${myArr[i].title}</td>
                      <td>myArr[i].year</td>
                      <td>myArr[i].publisher</td>
                      <td>myArr[i].isbn</td>
                    </tr>`;

    }
    jsonMsg += `</table>`;
    return jsonMsg;

}

window.onload = setupEvents;
function setupEvents()
{
    document.getElementById('year').onkeyup = ajaxfunction('byyear','year','outputyear','no');
    document.getElementById('title').onkeyup = ajaxfunction('bytitle','title','titleoutput','no');
    document.getElementById('yearjson').onkeyup = ajaxfunction('byyearjson','yearjson','yearout','yes');
	document.getElementById('byauthor').onkeyup = ajaxfunction('byauthor','byauthor','authorout','no');
}
