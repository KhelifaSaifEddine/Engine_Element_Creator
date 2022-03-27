import {save_css, save_html} from './outils.js';
var regexp = /--[a-z\d]+?([_|-]|[[a-z\d])+/g
const str = document.styleSheets[0].cssRules[0].cssText
var all_variables = []
var index = 0
const array = [...str.matchAll(regexp)]
array.forEach(element => {
    all_variables[index] = element[0]
    index++
});
var range_slider = document.querySelectorAll(".range_slider")
var slider_text = document.querySelectorAll(".slider_text")
var color_text = document.querySelectorAll(".color_text")
function affectation_for_sliders(affect,affected,idx){
    let index = idx
    affect.forEach(element => {
        if(affected[index].value == undefined){
            element.value = affected[index]
            index++
        }else{
            element.value = affected[index].value
            index++
        }
    })
}
window.addEventListener("load", ()=>{
    affectation_for_sliders(slider_text,range_slider,0)

}); 
var root = document.querySelector(':root');
// Create a function for getting a variable value
function myFunction_set(value,var_name) {
  root.style.setProperty(var_name,value)
}
// Create a function for getting a variable value

range_slider.forEach(element => {
    element.addEventListener("input",(ev)=>{
     
       const value = ev.currentTarget.value  + "px"
       affectation_for_sliders(slider_text,range_slider,0)
        switch ( ev.currentTarget.getAttribute("order")) {
            case "1":
                myFunction_set(value, "--height")
                break;
            case "2": 
                myFunction_set(value, "--width")
                break;
            case "3": 
                myFunction_set(value, "--border")
                break;
            default:
                break;
        }
 


    })
     
});
slider_text.forEach(element => {
    element.addEventListener("change",(ev)=>{
     
       const value = ev.currentTarget.value  + "px"
       affectation_for_sliders(range_slider,slider_text,0)
        switch ( ev.currentTarget.getAttribute("order")) {
            case "1":
                myFunction_set(value, "--height")
                break;
            case "2": 
                myFunction_set(value, "--width")
                break;
            case "3": 
                myFunction_set(value, "--border")
                break;
            default:
                break;
        }
 


    })
     
});

var color_picker = document.querySelectorAll(".color_slider")
color_picker[0].addEventListener("input",()=>{
    let valeur = color_picker[0].value
    affectation_for_sliders(color_text,color_picker,0)
    let rgb_object = hexToRgb(valeur)
    myFunction_set(rgb_object["r"], "--r_color")
    myFunction_set(rgb_object["g"], "--g_color")
    myFunction_set(rgb_object["b"], "--b_color")
})

color_text[0].addEventListener("change",()=>{
    valeur = color_text[0].value
    affectation_for_sliders(color_picker,color_text,0)
    rgb_object = hexToRgb(valeur)
    myFunction_set(rgb_object["r"], "--r_color")
    myFunction_set(rgb_object["g"], "--g_color")
    myFunction_set(rgb_object["b"], "--b_color")
})
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
document.querySelector(".restore").addEventListener("click",()=>{

    myFunction_set("50px", "--height")
    myFunction_set("148px", "--width")
    myFunction_set("2px", "--border")
    myFunction_set("63", "--r_color")
    myFunction_set("139", "--g_color")
    myFunction_set("152", "--b_color")
    affectation_for_sliders(range_slider,["50","148","2"],0)
    affectation_for_sliders(slider_text,["50","148","2"],0)
    affectation_for_sliders(color_picker,["#3f8b98"],0)
    affectation_for_sliders(color_text,["#3f8b98"],0)
    document.querySelector(".color_slider").value = "#3f8b98"
})
function all_css(){
    var css= [];

    for (var sheeti= 0; sheeti<document.styleSheets.length; sheeti++) {
        var sheet= document.styleSheets[sheeti];
        var rules= ('cssRules' in sheet)? sheet.cssRules : sheet.rules;
        for (var rulei= 0; rulei<rules.length; rulei++) {
            var rule= rules[rulei];
            if ('cssText' in rule)
                css.push(rule.cssText);
            else
                css.push(rule.selectorText+' {\n'+rule.style.cssText+'\n}\n');
        }
    }

    return css.join('\n');
}

document.querySelector(".export").addEventListener("click",()=>{
    save_css(all_variables)
    save_html("indeX.html",".slidecontainer")
    document.querySelector("body > *").remove()
    const node = document.createElement("h1");
    const textnode = document.createTextNode("CHECK YOUR DOWNLOADS");
    node.appendChild(textnode);
    document.querySelector("body").appendChild(node);
})

/*
function save() {
    var htmlContent = ["your-content-here"];
    var bl = new Blob(htmlContent, {type: "text/html"});
    var a = document.createElement("a");
    a.href = URL.createObjectURL(bl);
    a.download = "your-download-name-here.html";
    a.hidden = true;
    document.body.appendChild(a);
    a.innerHTML = "something random - nobody will see this, it doesn't matter what you put here";
    a.click();
  }
*/