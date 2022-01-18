   /* <!-- Gainsight PX Tag-->
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-H5BILVZODAED-2");
<!-- Gainsight PX Tag-->*/

  <!-- Gainsight PX Tag-->
  
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-H5BILVZODAED-2");

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
           aptrinsic.identify({
                  id: 'unique-id',
                  email: 'gibb@example.com',
                  name: 'Monica',
                  lastSeenDate: 1630419623719,
                  role: "System",
                  LastSeen: 1630419623719
                    }),
          
                     window.location = "https://shireeshar.github.io/hakunamatata/index.html";

    
    }
    else
    alert("enter your email");

    
      return b;
}


