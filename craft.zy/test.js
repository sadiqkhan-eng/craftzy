

// fetch('https://www.asharib.xyz/api/profile"')
//     .then(function(response){
//         return response.json();
//     })

//     .then(function(data){
//         console.log("Server ka jawab:", data);
        
//     })

//     .catch(function(error) {
//         console.log("Soory your Resquest Not Compeleted");
        
//     })

    
fetch('https://www.asharib.xyz/api/profile')

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

    