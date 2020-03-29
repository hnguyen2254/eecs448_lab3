function submit()
{
    let body = document.getElementById("bod");
    let parag = document.getElementById("para");
    let width = document.getElementById("width").value;
    let redBor = document.getElementById("redB").value;
    let greenBor = document.getElementById("greenB").value;
    let blueBor = document.getElementById("blueB").value;
    let redBa = document.getElementById("redBC").value;
    let greenBa = document.getElementById("greenBC").value;
    let blueBa = document.getElementById("blueBC").value;

    if(isNaN(redBor))
    {
        alert("Red Border value is not a number!");
        return;
    }
    if(redBor<0 || redBor>255)
    {
        alert("Red Border value is out of range!");
        return;
    }

    if(isNaN(greenBor))
    {
        alert("Green Border value is not a number!");
        return;
    }
    if(greenBor<0 || greenBor>255)
    {
        alert("Green Border value is out of range!");
        return;
    }

    if(isNaN(blueBor))
    {
        alert("Blue Border value is not a number!");
        return;
    }
    if(blueBor<0 || blueBor>255)
    {
        alert("Blue Border value is out of range!");
        return;
    }

    if(isNaN(width))
    {
        alert("Width value is not a number!");
        return;
    }

    if(isNaN(redBa))
    {
        alert("Red Background value is not a number!");
        return;
    }
    if(redBa<0 || redBa>255)
    {
        alert("Red Background value is out of range!");
        return;
    }

    if(isNaN(greenBa))
    {
        alert("Green Background value is not a number!");
        return;
    }
    if(greenBa<0 || greenBa>255)
    {
        alert("Green Background value is out of range!");
        return;
    }

    if(isNaN(blueBa))
    {
        alert("Blue Background value is not a number!");
        return;
    }
    if(blueBa<0 || blueBa>255)
    {
        alert("Blue Background value is out of range!");
        return;
    }

    body.style.cssText = "background-color: rgb(" + redBa + "," + greenBa + "," + blueBa + ");";
    parag.style.cssText = "border: solid " + width + "px rgb(" + redBor + "," + greenBor + "," + blueBor + ");";

}
