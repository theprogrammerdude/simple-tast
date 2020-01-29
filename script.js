function add() {
  var qual = document.getElementById("qual").value;
  var hobbies = document.getElementById("hobbies").value;
  var name = document.getElementById("name").value;
  var displayName = document.getElementsByClassName("display-name");

  document.getElementById("display-qual").innerHTML = qual;
  document.getElementById("display-hobbies").innerHTML = hobbies;

  for (var i = 0; i < displayName.length; i++) {
    displayName[i].innerHTML = name;

    if (i < displayName.length) {
      document.getElementById("name").value = "";
    }
  }

  if (error) {
    document.getElementById("qual").value = "";
    document.getElementById("hobbies").value = "";
  }
}
