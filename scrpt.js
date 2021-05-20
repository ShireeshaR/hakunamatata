


function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function allowlogin(usermail){
    //var a = document.form.usermail.value;
    var a = document.getElementById("usermail").value;
    var b;
    
    if(a!= "")
    {
       alert("valid User");
        
         b = a.substr(8, 3);
         alert("Logged in user id :" + b);
           /* aptrinsic("identify",
                    {
                        //User Fields
                        "id": b, // Required for logged in app users
                        "email": a,
                        "firstName": "username"+b,
                        "lastName": "lastname",
                        "signUpDate": new Date().getTime(), //unix time in ms
                       // "plan" : "gold", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
                       // "price" : 95.5,
                        "IsActiveUser": true,
                        "subdomain": "http://shireesha123.epizy.com/Index.HTML",
                        ////
                        //"userHash": "" // optional transient for HMAC identification
                    },
                    {
                        //Account Fields
                        "id":"0017F00001sOm11", //Required
                        "name":"NLIT HTML Website",
                        "Program": "Platinum" // flat custom attributes
                    });*/
          
                     window.location = "https://shireeshar.github.io/hakunamatata/index.html";

    
    }
    else
    alert("enter your email");

    
      return b;
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function kcbdisplay() 
{
 aptrinsic('bot', 'show',{});
}
