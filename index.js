// Add your code here

// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//     })
//     // data - sent as text, so convert to string always with JSON.stringify()
// };

// fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(object){
//         console.log(object);
//     })
//     .catch(function(error) {
//         alert("Bad things!");
//         console.log(error.message);
//     });


function submitData(name, email) {
   return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
        .then(function(response){
            return response.json();
        })
        .then(function(object){
            document.body.innerHTML = object["id"]
        })
        .catch(function(error) {
            document.body.innerHTML = error.message 
        })
}