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
            <p>No projects uploaded. WIP</p>
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
