let form = document.querySelector("form")

form.addEventListener("submit", function(event){
    event.preventDefault()
    alert("Are U Sure?")
    console.log("Form Submitted");
})