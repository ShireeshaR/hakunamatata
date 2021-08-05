   /* <!-- Gainsight PX Tag-->
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-H5BILVZODAED-2");
<!-- Gainsight PX Tag-->*/

  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="pM1SyAn0A1A6n3d2FU5yGi4IHGqE6NjB";analytics.SNIPPET_VERSION="4.13.2";
  analytics.load("pM1SyAn0A1A6n3d2FU5yGi4IHGqE6NjB");
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
function allowlogin(usermail){
    //var a = document.form.usermail.value;
    var a = document.getElementById("usermail").value;
    var b;
    
    if(a!= "")
    {
       alert("valid User");
        
         b = a.substr(8, 3);
         alert("Logged in user id :" + b);
           analytics.identify('9798', {
                  email: 'gibb@example.com',
                  name: 'Monica'
                    }),
          
                     window.location = "https://shireeshar.github.io/hakunamatata/index.html";

    
    }
    else
    alert("enter your email");

    
      return b;
}


