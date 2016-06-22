'use strict';

// Logic for reading user input
window.onload = function() {

  let open = require("open");
  let submitButton = document.querySelector('#SubmitButton');

  submitButton.addEventListener('click', function() {


    let title = (document.querySelector("#filename-box").value);
    let text = (document.querySelector("#gist-box").value);

    let clean = (str) => {
      if (str) {
        return true;
      }
      return false;
    }

    if (clean(title) && clean(text)) {
        uploadGist(title,text)
    } else {
      alert('Please check your inputs!');
    }
  });
}
// Logic for uploading to github
  let GitHubApi = require("github");

  let github = new GitHubApi({
    debug: true,
    protocol: "https",
    host: "api.github.com",
  });


  const {shell} = require('electron');

  const uploadGist = (title, text)  => {
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

const ipc = require('electron').ipcRender;
let xButton = document.querySelector("#close");

xButton.addEventListener('click', function(){
  ipc.send('close-main-window');
});
