balise_a = document.querySelector("#navigation").querySelectorAll("a")
for (const element of balise_a){
    element.classList.remove("actual_page");
}
balise_a[3].classList.add("actual_page");