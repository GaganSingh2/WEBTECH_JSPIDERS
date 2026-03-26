let newPage
function openPage(){
    newPage = open("https://www.amazon.com/","_blank")
}


function closePage(){
    if (newPage) {
        newPage.close()
    }
}