// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {

      console.log("Sanjifying");
      for(var i = 0; i < document.links.length; i++){
  document.links[i].href = document.links[i].href.replace(/.+\.com\/?/, "http://" + document.domain + "/");
}

    }
  }
);
