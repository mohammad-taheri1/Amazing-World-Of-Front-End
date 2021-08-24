$(document).ready(function () {
  console.log("DOM Tree Ready");

//   $("#submitBtn");

//   $("input");

//   $("input[type=text]");

//   $(".btn:odd").html("x");
//   $(".btn:even").html("salam");

    // const list = $('#todo-list')

    // var listItem1 = "<li>List Item 1</li>"
    // var listItem2 = "<li>List Item 2</li>"
    // var listItem3 = "<li>List Item 3</li>"
    // var listItem4 = "<li>List Item 4</li>"

    // list.append(listItem1, listItem2, listItem3, listItem4)

    // $('li:first').remove()
    // $('li:last').remove()

    // $('li:odd').css('background','blue')
    // $('li:odd').css('fontSize','2rem')

    // $('li:even').css('background','red')
    // $('li:even').css('fontSize','1.5rem')


    // $('li:odd').addClass('blue')
    // $('li:even').addClass('black')
    // $('li:even').removeClass('black')

    // $('li').toggleClass('black')
    // $('li').toggleClass('black')

    // $('#add-item').click(function(){
    //     alert('click')
    // })

    // $('#add-item').on({
    //     'mousemove' :function() {
    //         console.log(String(Date.now()) + Math.ceil(Math.random()*1000000))
    //     }
    // })

    function getListFromServer(){
        $.get('https://jsonplaceholder.typicode.com/todos', function(data, status) {
            var response = data
            for(var i=0; i<response.length; i++) {
                console.log(response[i].id + '->' +response[i].title)
            }
        })
        // var http = new XMLHttpRequest()
        // http.onreadystatechange = function() {
        //     if(this.readyState === 4) {
        //         if(this.status === 200) {
        //             var response = JSON.parse(this.responseText)
        //             for(var i=0; i<response.length; i++) {
        //                 console.log(response[i].id + '->' +response[i].title)
        //             }
        //         } else {
        //             console.log('Call failed')
        //         }
        //     }
        // }
        // http.open('GET','https://jsonplaceholder.typicode.com/todos', true)
        // http.send()

    }
    

    // getListFromServer()

    var obj = JSON.stringify({
        "userId": 1,
        "title": "mamad taheri",
        "completed": false
    })


    $.post('https://jsonplaceholder.typicode.com/todos', obj, function(data, status){
        var response = data
         console.log(response)
    } )










});
