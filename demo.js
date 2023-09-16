const getcolor = () => {

    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomcode = "#" + randomnumber.toString(16);
    console.log(randomcode);
    document.body.style.backgroundColor = randomcode;
    document.getElementById("colorcode").innerText = randomcode;

    const a = navigator.clipboard.writeText(randomcode);
    document.getElementById("message").innerText = "Copied";
}

document.getElementById("btn").addEventListener("click",getcolor);