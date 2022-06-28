//initilization function
window.onload = function() {
    initColorPicker();
};

//references to our color inputs and color box.
function initColorPicker() {
    let colorBox = document.getElementById("color-box");
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    };
    let colorPickers = document.getElementsByClassName("picker");
    setColorPickerEventListeners(colorBox, rgb, colorPickers);
}
// set events on each of the inputs. updated to be a single function.
function setColorPickerEventListeners(colorBox, rgb, pickerElements){
    let pickerLen = pickerElements.length;
    for (let i = 0; i < pickerLen; i++){
        pickerElements[i].addEventListener('change', () =>{
            let red = rgb.red.value;
            let green = rgb.green.value;
            let blue = rgb.blue.value;
            console.clear();
            console.log("Red value: ", red, "green value: ", green, "blue value: ", blue);
            setBoxBGColor(colorBox, red, green, blue);
            setDisplayValues(red, green, blue);
        });
    }
/* leaving this here to help me understand whats happening. but this is legacy code.
    rgb.red.addEventListener("change", () => {
        console.log("Red value: ", rgb.red.value);
        setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
    })
    rgb.green.addEventListener("change", () => {
        console.log("Green value: ", rgb.green.value);
        setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
    })
    rgb.blue.addEventListener("change", () => {
        console.log("Blue value: ", rgb.blue.value);
        setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
    })
 */
}

function setBoxBGColor (colorBox, red, green, blue){
    rgbVal = [red, green, blue].join(',');
    colorBox.style.backgroundColor = "rgb(" + rgbVal + ")"
}

function setDisplayValues(colorBox, red, green, blue){
    let redVal = document.getElementById("redVal");
    let greenVal = document.getElementById("greenVal");
    let blueVal = document.getElementById("blueVal")

    redVal.innerText = red;
    greenVal.innerText = green;
    blueVal.innerText = blue;
    //console.log(redVal);
}