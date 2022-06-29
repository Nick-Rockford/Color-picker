//initialization function
window.onload = function() {
    initColorPicker();
};

//references to our color inputs and color box.
function initColorPicker() {
    let element = document.getElementById("color-box");
    let colors = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    };
    let colorPickers = document.getElementsByClassName("picker");
    setColorPickerEventListeners(element, colors, colorPickers);
}
// set events on each of the inputs. updated to be a single function.
function setColorPickerEventListeners(element, colors, pickerElements){
    let pickerLen = pickerElements.length;
    for (let i = 0; i < pickerLen; i++){
        pickerElements[i].addEventListener('change', () =>{
            let red = colors.red.value;
            let green = colors.green.value;
            let blue = colors.blue.value;
            console.clear();
            console.log("Red value: ", red, "green value: ", green, "blue value: ", blue);
            setElementBGColor(element, red, green, blue);
            setDisplayValues(red, green, blue);
        });
    }
/* leaving this here to help me understand whats happening. but this is legacy code.
    rgb.red.addEventListener("change", () => {
        console.log("Red value: ", rgb.red.value);
        setElementBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
    })
    rgb.green.addEventListener("change", () => {
        console.log("Green value: ", rgb.green.value);
        setElementBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
    })
    rgb.blue.addEventListener("change", () => {
        console.log("Blue value: ", rgb.blue.value);
        setElementBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
    })
 */
}

function setElementBGColor (bgElement, red, green, blue){
    let rgbVal = [red, green, blue].join(',');
    bgElement.style.backgroundColor = "rgb(" + rgbVal + ")"
}

function setDisplayValues(red, green, blue){
    let redVal = document.getElementById("redVal");
    let greenVal = document.getElementById("greenVal");
    let blueVal = document.getElementById("blueVal")

    redVal.innerText = red;
    greenVal.innerText = green;
    blueVal.innerText = blue;
    //console.log(redVal);
}