let count = 0;
let pokepics = ["mudkip.jpg", "ludicolo.jpg", "gengar.jpg", "shuckle.jpg", "dragonite.jpg"];

function prev()
{   
    if(count != 0)
    {
        count--;
        document.getElementById("picture").src = pokepics[count+1];
        document.getElementById("picture").src = pokepics[count];
    }
    else
    {
        count = 4;
        document.getElementById("picture").src = pokepics[count];
    }
}

function next()
{   
    count++;
    if(count != 5)
    {   
        document.getElementById("picture").src = pokepics[count];
    }
    else
    {
        count = 0;
        document.getElementById("picture").src = pokepics[count];
    }
}

