// Counter code
var button = document.getElementById('counter');

button.onclick = function () {
    //Create the request
    
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystoreChange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            //TAKE SOME ACTION
            if(request.status == 200)
            {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        
    };
    //Make the request
    request.open('GET', 'http://avkiranmayi.imad.hasura-app.io/counter', true);
    request.send(null);
   }