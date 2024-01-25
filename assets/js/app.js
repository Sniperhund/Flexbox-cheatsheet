function myFunction() {
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("view");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.classList.add("better-view");
    } else {
        text.classList.remove("better-view");
    }
}
