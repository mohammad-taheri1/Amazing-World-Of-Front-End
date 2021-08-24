// Ajax GET

// function getListFromServer(){
//     var http = new XMLHttpRequest()
//     http.onreadystatechange = function() {
//         if(this.readyState === 4) {
//             if(this.status === 200) {
//                 var response = JSON.parse(this.responseText)
//                 for(var i=0; i<response.length; i++) {
//                     console.log(response[i].id + '->' +response[i].title)
//                 }
//             } else {
//                 console.log('Call failed')
//             }
//         }
//     }
//     http.open('GET','https://jsonplaceholder.typicode.com/todos', true)
//     http.send()
// }

// getListFromServer()

// Ajax POST
function postDataToServer() {
    var http = new XMLHttpRequest()
    http.open('POST','https://jsonplaceholder.typicode.com/todos', true)
    http.onreadystatechange = function() {
        if(this.readyState === 4) {
            if(this.status === 201) {
                alert('Successfrll')
                 
            } else {
                console.log('Call failed')
            }
        }
    }
    var obj = JSON.stringify({
        "userId": 1,
        "title": "mamad taheri",
        "completed": false
    })
    http.send(obj)
}

postDataToServer()