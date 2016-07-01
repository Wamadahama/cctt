# cctt (ask me what it stands for)
A desktop Gist application written in Electron

## About
I wrote this to introduce myself to Electron, also at I work I find myself constantly uploading GISTs and thought a little gui tool would be neat

Note: Right now it only supports anonymous gists
## Screenshots

Input

![Desktop application](https://r.kyaa.sg/erkiun.png)

Output

![Web Result](https://r.kyaa.sg/wglrib.png)


## Installation

### From Binaries

#### Windows Install
  - Go to releases page
  - Look for your platform
    - i.e cctt-win32-64bit.tar.gz
  - Extract to program files
  - Create shortcut of exe

#### Linux Install
  - Go to releases page
  - Look for your platform
    - i.e cctt-linux-64bit.tar.gz

  ```
    tar xvzf ctt-linux-64bit.tar.gz
    mv cctt-linux-64bit /usr/local/
    vim .bashrc
  ```
  and add ``` export PATH=$PATH:/usr/local/cctt ``` to your .bashrc

### Building from source
Make sure you have node, npm, and Electron

- https://nodejs.org/en/
- http://electron.atom.io/

Run the following commands
```
git clone https://github.com/Wamadahama/cctt.git
cd cctt
npm install && npm start  
```


## To Do
- Sign in
- Refactor and code cleanup
- Platform specific installation instructions
