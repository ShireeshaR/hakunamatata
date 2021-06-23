    <!-- Gainsight PX Tag-->
  <script type="text/javascript">
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-H5BILVZODAED-2");
</script>
<!-- Gainsight PX Tag-->

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
           aptrinsic("identify",
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
                    });
          
                     window.location = "https://shireeshar.github.io/hakunamatata/index.html";

    
    }
    else
    alert("enter your email");

    
      return b;
}


