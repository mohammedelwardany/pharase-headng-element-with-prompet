var y = prompt("give a pharase");
for (var x = 1; x <= 6; x++) {
    if (isFinite(y)) {
        alert("not a required value")
        location.reload();
        break;
    }

    document.write("<h" + x + ">" + y + x + "</h" + x + ">");
}