fetch('https://jsonplaceholder.typicode.com/todos/1')

// Get the weather data

    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log("Server ka jawab:", data);
        
    })

    .catch(function(error) {
        console.log("Soory your Resquest Not Compeleted");
        
    })

    