var input = document.getElementById("command");
input.focus();
input.select();

window.addEventListener("focus", function (event) {
  input.focus();
  input.select();
});

$("#command").keypress(function (event) {
  if (event.keyCode == 13 || event.which == 13) {
    var inputText = $("#command").val();
    input.value = "";
    processCommand(inputText);
    event.preventDefault();
  }
});

function processCommand(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      printHelp(cmd);
      break;
    case "projects":
      printProjects(cmd);
      break;
    case "about":
      printAbout(cmd);
      break;
    case "experience":
      printExperience(cmd);
      break;
    case "cls":
      clearScreen();
      break;
    default:
      printError(cmd);
  }
}

function clearScreen() {
  $("#main-content").empty();
}

function printExperience(cmd) {
  $el = $(
    `<div>
                </br>
                <p>C:\\yamsterdam\\home>${cmd}</p>
                <p>My Experience:</p>
                </br>
                <p>LUA: [██▁▁▁▁▁▁] 2.5 Years</p>
                <p>HTML/JS/CSS: [██▁▁▁▁▁▁▁▁] 2 Years</p>
                <p>Python: [██▁▁▁▁▁▁▁▁] 2 Years</p>
                <p>C#: [█▁▁▁▁▁▁▁▁▁] 1 Years</p>
                <p>Java: [█▁▁▁▁▁▁▁▁▁] 1 Years</p>
                <p>C++: [█▁▁▁▁▁▁▁▁▁] 1< Years</p>
              </div>`
  );
  $("#main-content").append($el);
}

function printAbout(cmd) {
  $el = $(
    `<div>
              </br>
              <p>C:\\yamsterdam\\home>${cmd}</p>
              <p>Nothing written. WIP</p>
            </div>`
  );
  $("#main-content").append($el);
}

function printProjects(cmd) {
  $el = $(
    `<div>
            </br>
            <p>C:\\yamsterdam\\home>${cmd}</p>
            </br>
            <p">&emsp;Python</p>
            <p>Poker Strategy Simulation - Simulates poker games playing with diffrent strategys (tight-loose) - <a href="https://github.com/Yamsterdam/Poker-Game-Simulation" target="_blank">https://github.com/Yamsterdam/Poker-Game-Simulation</a></p>
            <p>Voicebot - Alexa type speech commands - <a href="https://github.com/Yamsterdam/Voicebot-Python" target="_blank">https://github.com/Yamsterdam/Voicebot-Python</a></p>
            <p>Snip To Text - Converts screenshot to pastable text - <a href="https://github.com/Yamsterdam/Snip-To-Text" target="_blank">https://github.com/Yamsterdam/Snip-To-Text</a></p>
            <p>Backdoor - Allows for connection to run console command on remote device - <a href="https://github.com/Yamsterdam/Python-Backdoor" target="_blank">https://github.com/Yamsterdam/Python-Backdoor</a></p>
            <p>Tarkov Spotify Auto Mute - Mutes spotify while in a match of Escape from Tarkov - <a href="https://github.com/Yamsterdam/Tarkov-Spotify-Auto-Mute" target="_blank">https://github.com/Yamsterdam/Tarkov-Spotify-Auto-Mute</a></p>
            </br>
            <p">&emsp;HTML/JS/CSS</p>
            <p>Typing Test Chrome Extension - Typing test chrome extension with local data save - <a href="https://github.com/Yamsterdam/Typing-Test-Chrome-Extension" target="_blank">https://github.com/Yamsterdam/Typing-Test-Chrome-Extension</a></p>
            <p>Express Room Demo - Multiplayer lobby/rooms using express and socket.io - <a href="https://github.com/Yamsterdam/express-roomtest" target="_blank">https://github.com/Yamsterdam/express-roomtest</a></p>
            </br>
            <p">&emsp;C++</p>
            <p>C++ Auth Console App - Ability to register and login with C++ console and filesystem - <a href="https://github.com/Yamsterdam/Simple-CPP-Auth-App" target="_blank">https://github.com/Yamsterdam/Simple-CPP-Auth-App</a></p>
            </br>
            <p">&emsp;Java</p>
            </br>
            <p">&emsp;C#</p>
            </br>
            <p">&emsp;Lua</p>
            </br>

          </div>`
  );
  $("#main-content").append($el);
}

function printHelp(cmd) {
  $el = $(
    `<div>
        </br>
        <p>C:\\yamsterdam\\home>${cmd}</p>
        <p>PROJECTS&emsp; &emsp; Displays all my finished projects.</p>
        <p>ABOUT &emsp;&emsp; &emsp; Displays information about me.</p>
        <p>EXPERIENCE &emsp;Displays experience and skills.</p>
        <p>CLS &emsp; &emsp; &emsp; Clears the screen.</p>
      </div>`
  );
  $("#main-content").append($el);
}

function printError(cmd) {
  $el = $(
    `<div>
    </br>
    <p>C:\\yamsterdam\\home>${cmd}</p>
    <p>'${cmd}' is not recognized as an internal or external command,</p>
    <p>operable program or batch file.</p>
  </div>`
  );
  $("#main-content").append($el);
}
