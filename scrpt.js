 !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="tjYaFWn54t9NY2eFX7ymGBDqZrbaVcBw";analytics.SNIPPET_VERSION="4.13.2";
  analytics.load("tjYaFWn54t9NY2eFX7ymGBDqZrbaVcBw");
  analytics.page();
  }}();



function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function allowlogin (usermail){
    //var a = document.form.usermail.value;
    var a = document.getElementById("usermail").value;
    var b;
    
    if(a!= "")
    {
        if(a == "username123@gmail.com" || a == "usernamesr@gmail.com"|| a=="username789@gmail.com" || a=="s***a@gainsight.com")
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
        alert("Invalid User,enter \"username123@gmail.com or username456@gmail.com or username789@gmail.com\"");
    }
    else
    alert("enter \"username123@gmail.com or username456@gmail.com or username789@gmail.com\"");

    
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
