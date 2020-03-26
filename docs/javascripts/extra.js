/* add ACAD View JS Script */
  if(!document.getElementById("acac-script")){
    const acadScript = document.createElement("script");
    acadScript.id = "acad-script";
    acadScript.setAttribute("async","async");
    acadScript.setAttribute("type","text/javascript");
    acadScript.setAttribute("src","https://viewer.altium.com/client/static/js/embed.js");
    document.head.appendChild(acadScript);
  }
    /* add ACAD View JS Script END*/