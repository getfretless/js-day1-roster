var f = document.querySelector('#student_form');
f.student_name.focus();

function setBorderColor(el, color) {
  el.style.border = '1px solid ' + color;
}

function capitalizeWords(str) {
  var words = str.split(' ');
  for (var i = 0; i < words.length; i++) {
    // grab the first letter
    // capitalize it
    // combine with the rest of the string
    if (words[i][0]) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
  }
  return words.join(' ');
}

function addItemToList(ev) {
  ev.preventDefault();
  var name = this.student_name.value.trim();
  if (!name) {
    this.student_name.value ='Try again, buddy.';
    setBorderColor(this.student_name, 'red');
  }
  else {
    setBorderColor(this.student_name, 'black');
    var list = document.getElementById('roster');
    var color = this.favorite_color.value;
    name = capitalizeWords(name);
    list.innerHTML += '<li style="color: ' + color + '">' + name + '</li>';
  }
  this.student_name.focus()
  this.student_name.select();
}

f.onsubmit = addItemToList;
