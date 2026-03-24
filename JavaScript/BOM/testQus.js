let newPage
function openPage(){
    newPage = open("https://www.amazon.com/","_blank","height=500px width=500px")
}


function closePage(){
    if (newPage) {
        newPage.close()
    }
}