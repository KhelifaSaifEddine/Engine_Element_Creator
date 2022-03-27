
import {save_css, save_html} from "./outils.js"
const n = "ffazfaz --log"
var regexp = /--[a-z\d]+?([_|-]|[[a-z\d])+/g
const str = document.styleSheets[0].cssRules[0].cssText
const array = [...str.matchAll(regexp)]
var all_variables = []
var index = 0
var  canvases = document.querySelectorAll("canvas")
array.forEach(element => {
    all_variables[index] = element[0]
    index++
});
var check = document.querySelectorAll(".check_corner")
var range_slider = document.querySelectorAll(".range_slider")
var slider_text = document.querySelectorAll(".slider_text")
//var color_text = document.querySelectorAll(".color_text")
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
     
       const value = ev.currentTarget.value  
       affectation_for_sliders(slider_text,range_slider,0)
       index = parseInt(ev.currentTarget.getAttribute("order"))

       if(index <8){
        myFunction_set(value + "%",all_variables[index-1])
       }else{
        myFunction_set(value + "px",all_variables[index-1])
       }


    })
     
});
slider_text.forEach(element => {
    element.addEventListener("change",(ev)=>{
     
       const value = ev.currentTarget.value 
       affectation_for_sliders(range_slider,slider_text,0)
       index = parseInt(ev.currentTarget.getAttribute("order"))
       console.log(all_variables[index-1])

       if(index <8){
        console.log(all_variables[index-1])
        myFunction_set(value + "%",all_variables[index-1])
       }else{
        myFunction_set(value + "px",all_variables[index-1])
       }

 


    })
     
});
check.forEach(element => {
    let flip = true
    element.addEventListener("change",(ev)=>{
        flip = !flip

        if(flip){
         
            myFunction_set("none", "--"+ev.currentTarget.value)
            }else{
                myFunction_set("block", "--"+ev.currentTarget.value)

        }
    })
});

document.querySelector(".export").addEventListener("click",()=>{
    save_css(all_variables)
    save_html("indeX.html",".sliderwrapper")
    document.querySelector("body > *").remove()
    const node = document.createElement("h1");
    const textnode = document.createTextNode("CHECK YOUR DOWNLOADS");
    node.appendChild(textnode);
    document.querySelector("body").appendChild(node);
})
/*
var color_picker = document.querySelectorAll(".color_slider")

color_picker.forEach(element => { 
    element.addEventListener("input",(ev)=>{
    value = ev.currentTarget.value  
    console.log(value)
    affectation_for_sliders(color_text,color_picker,0)
    switch ( ev.currentTarget.getAttribute("order")) {
        case "1":
            myFunction_set(value, "--color")
            break;
        case "2": 
            myFunction_set(value, "--inner_glow_color")
            break;
        case "3": 
            myFunction_set(value, "--outer_glow_color")
            break;
        default:
            break;
    }


}
    )}
)

color_text.forEach(element => { 
    element.addEventListener("input",(ev)=>{
    valeur = ev.currentTarget.value  
    affectation_for_sliders(color_picker,color_text,0)
    switch ( ev.currentTarget.getAttribute("order")) {
        case "1":
            myFunction_set(value, "--color")
            break;
        case "2": 
            myFunction_set(value, "--inner_glow_color")
            break;
        case "3": 
            myFunction_set(value, "--outer_glow_color")
            break;
        default:
            break;
    }
}
)}
)
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
document.querySelector(".restore").addEventListener("click",()=>{
    css = all_css()
    console.log(css)
    myFunction_set("95%", "--scale")
    myFunction_set("90%", "--scale2")
    myFunction_set("75%", "--scale3")
    myFunction_set("85%", "--scale4")
    myFunction_set("300px", "--raduis")
    myFunction_set("0%", "--gold_add_opacity")
    myFunction_set("#251d28", "--color")
    myFunction_set("#247486", "--inner_glow_color")
    myFunction_set("#5ae0ff", "--outer_glow_color")
    affectation_for_sliders(range_slider,["95","90","75","85","0","300"],0)
    affectation_for_sliders(slider_text,["95","90","75","85","0","300"],0)
    affectation_for_sliders(color_picker,["#251d28","#247486","#5ae0ff"],0)
    affectation_for_sliders(color_text,["#251d28","#247486","#5ae0ff"],0)
    
})
*//*
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
*/

