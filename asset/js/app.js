$('.nav-link').on('click', function(e){  
    e.preventDefault( ); 
 });

$(document).ready(function(){
    $('.nav-link').on('click', function(e){  
       e.preventDefault( );
       var pageRef = $(this).attr('href');
        console.log($(this));
        if(pageRef == "#"){
            pageRef = "templates/homepage.html";
        }
       callPage(pageRef);
   
   });
 });
function callPage(pageRefInput){
    $.ajax({
    url: pageRefInput,
    type: "GET",
    dataType:"text",
    success: function( response ) {
        console.log('the page was loaded', response);
        $('.container').html(response);
        window.history.pushState("object or string", "Title", window.location.innerText); //attention pas que profil
        // document.title = window.location.innerText; // à modifier
        console.log($('.nav-link').attr('href'))
        console.log(window.location.origin)

      },
      error: function( error ){
          console.log('the page was NOT loaded', error);
      }
})
}
//Homepage default
if (window.location.hash === "") {
    $.ajax({
        url: "templates/homepage.html",
        type: "GET",
        dataType:"text",
        success: function( response ) {
            console.log('the page was loaded', response);
            $('.container').html(response);
            window.history.pushState("object or string", "Title", "/#home"); //attention pas que profil
             document.title = "Home"; // à modifier
            console.log($('.nav-link').attr('href'))
            console.log(window.location.origin)
    
          },
          error: function( error ){
              console.log('the page was NOT loaded', error);
          }
    })
}
// $.ajax({
//     url: "templates/login.html",
//     type: "GET",
//     dataType:"text",
//     success: function( response ) {
//         console.log('the page was loaded', response);
//         $('.navbar-nav').append(response);
//       },
//       error: function( error ){
//           console.log('the page was NOT loaded', error);
//       }
// })
$.get('../../data/user.json')
.then(function (reponse) {
    console.log(reponse)
    $.each(reponse, function(i, rep){

     console.log(i)
     console.log(rep)
})})

