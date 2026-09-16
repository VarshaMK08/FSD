var np = document.createElement("p");
var context = deocument.createTextNode("This is new paragraph");
np.appendChild(context);
var divEle = document.getElementById("theDiv");
divEle.appendChild(np);

function remv(element) {
    element.parentNode.removeChild(element);
}