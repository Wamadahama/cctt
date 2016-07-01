'use strict';

const {shell} = require('electron');
const {ipcRenderer} = require('electron');
const open = require("open");
// Handler for exit button




// Logic for reading user input
window.onload = function() {
  // Set up exit button
  let xButton = document.querySelector(".x-button");

  xButton.addEventListener('click', function(){
   ipcRenderer.sendSync('close-main-window');
  });

  // Log for submit button
  let submitButton = document.querySelector('#SubmitButton');

  submitButton.addEventListener('click', function() {

    let title = (document.querySelector("#filename-box").value);
    let text = (document.querySelector("#gist-box").value);

    let isClean = (str) => {
      if (str) {
        return true;
      }
      return false;
    }

    if (isClean(title) && isClean(text)) {
        uploadGist(title,text)
    } else {
      alert('Please check your inputs!');
    }
  });
}


// Logic for uploading the gist
const uploadGist = (title, text)  => {

  // Logic for uploading to github
  let GitHubApi = require("github");

  let github = new GitHubApi({
    debug: true,
    protocol: "https",
    host: "api.github.com",
  });

  let files = {};
  files[title] = {"content": text};

  let request = {
    "public": true,
    "files": files
  }

  github.gists.create(request, function(err, res){
      let url = res['html_url'];
      shell.openExternal(url)
  });
}
