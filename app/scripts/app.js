/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function (document) {
  'use strict';

  /*
   * Standard function to call for making AJAX requests of JSON objects.
   * e.g.
   *   
   *   function callbackFnc(json) {
   *      app.object = json;
   *   };
   *   jsonRequest(
   */
  function jsonRequest(filepath, fnc) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
          if(xmlhttp.status == 200){
            var json = JSON.parse(xmlhttp.responseText);
            fnc(json);
          }
          else if(xmlhttp.status == 400) {
            alert('There was an error 400 while loading static info.')
          }
        else {
          // TODO handle errors with user warning
          alert('Error: ' + xmlhttp.status)
        }
      }
    };
    xmlhttp.open("GET", filepath, true);
    xmlhttp.send();
  }

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('template-bound', function() {
    console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    document.querySelector('body').removeAttribute('unresolved');

    // Ensure the drawer is hidden on desktop/tablet
    var drawerPanel = document.querySelector('#paperDrawerPanel');
  });
  

  // load app properties
  jsonRequest('scripts/contacts.json', function(json) {
      app.contacts = json;
    });

  app.user = null;
  jsonRequest('scripts/fake_user.json', function(json) {
      app.user = json;
    });

})(document);

// TODO: Decide if we still want to suggest wrapping as it requires
// using webcomponents.min.js.
// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
// )(wrap(document));
