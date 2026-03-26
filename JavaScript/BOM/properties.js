// Window Properties----------------
console.log("Window Properties-------------");

//1)Document: represent the current html document.
console.log("1)document property---------------");

console.log(document);


// 2)console: that provide tools for debug code and print message.
console.log("2)console property--------------");
//a)console.log(): print the message
console.log("console.log()------");
console.log("Hello everyone!");

//b)console.warn(): print the warning message
console.log("console.warn()------");
console.warn("Are u sure to open this page!");

//c)console.error(): print the error message
console.log("console.error()------");
console.error("Runtime Error!");

//d)console.time() and console.timeEnd(): print the total time taken by the browser to perform the perticular task
console.log("console.time() & console.timeEnd()------");
console.time("forLoop");
for(let i=0; i<5000; i++){}
console.timeEnd("forLoop");

console.time("whileLoop");
let i=0
while(i<5000){i++}
console.timeEnd("whileLoop");



// 3)Location: provide the basic info about the current location like path, hostname, href etc...
console.log("3)Location property-------------------------");
console.log("Location: "+location);
console.log("Location.href: "+location.href);
console.log("Location.hostname: "+location.hostname);
console.log("Location.pathname: "+location.pathname);
console.log("Location.protocol: "+location.protocol);
console.log("Location.port: "+location.port);

// imp Location methods
console.log("Location methods--------");
// a)location.href: redirect new page and keeps history
// location.href = "https://www.amazon.com/"

//b)location.assign(): redirect new page like href and keeps the history
// location.assign("https://www.flipkart.com/")

//c) location.replace(): replace the last open page, does not keep history
// location.replace("https://www.redbus.com/")

// d)location.reload(): reloads the current page
// location.reload()



// 4)history: it will keep track of web-page u opened and it will store as history.
console.log("4)History---------------------");
console.log(history);

//a)history.forward(): goes to the next page(if available) otherwise return undefine
// history.forward()

//b)history.back(): goes to the previous page(if available) otherwise return undefine
// history.back()

//c)history.go(): goes to the specific page in history(if available) otherwise return undefine
// history.go(2)//for forward page
// history.go(-2) //for backward page
// history.go(0)//reload the same page



//5)navigator: provide info about the browser like appname, version, online
console.log("5)Navigator---------------------")
console.log(navigator);

//a)navigator.onLine: detect internet connection. if internet connected then return true, otherwise false.
console.log("navigator.onLine: "+navigator.onLine);

//b)navigator.userAgent: it contains info like browser name, OS info and version
console.log("navigator.userAgent: "+navigator.userAgent);


//6)Screen: provide info about the screen like height, width, orientation etc
console.log("6)Screen-------------------------");
console.log(screen);

// a)screen.height: gives the total screen height
console.log("Screen.height: "+screen.height);

// b)screen.width: gives the total screen width
console.log("screen.width: "+screen.width);

// c)screen.orientation: gives the landscape or portrait mode
console.log("screen.orientation: ",screen.orientation);

// d)innerHeight: gives the height of visible browser area
console.log("innerHeight: ",innerHeight);

// e)innerWidth: gives the width of visible browser area
console.log("innerWidth: ",innerWidth);

// f)outerHeight: Total browser height including:Toolbar, Tabs, Borders
console.log("outerHeight: ",outerHeight);


// g)outerWidth: Total browser width including UI
console.log("outerWidth: ",outerWidth);
