//Switch -- Group the cases
let browser = "Firefox";

switch(browser)
{
    //you can group together the cases
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!");
        break;

    case "Firefox":
        console.log("Mozilla Project !")
        break;

    case "Safari":
        console.log("Apple browser - uses JavaScriptCore Engine !");
        break;

    default:
        console.log("Unknown browser = Manual testing needed !")

}
// OP- Mozilla Project !

//*****************Switch -- Group the cases
//For below 4 group cases has only 1 code :  it will execute Chromium Project! statement - one for all
let browser1 = "Brave";

switch(browser1)
{
    //you can group together the cases
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!");
        break;

    case "Firefox":
        console.log("Mozilla Project !")
        break;

    case "Safari":
        console.log("Apple browser - uses JavaScriptCore Engine !");
        break;

    default:
        console.log("Unknown browser = Manual testing needed !")

}
// OP- Chromium Project!

