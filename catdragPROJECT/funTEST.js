function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
  document.getElementById("demo").innerHTML = "Cat is being dragged";
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("demo").innerHTML = "Cat was dropped";
}