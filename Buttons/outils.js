import { saveAs } from './FileSaver.js';
function all_css(list_variables){
    var css= [];
    
    for (var sheeti= 0; sheeti<document.styleSheets.length; sheeti++) {
        var sheet= document.styleSheets[sheeti];
        var rules= ('cssRules' in sheet)? sheet.cssRules : sheet.rules;
        for (var rulei= 0; rulei<rules.length; rulei++) {
            var rule= rules[rulei];
            if ('cssText' in rule){
                if(rule.cssText.includes("root")){ 
                        console.log("true") 
                        rule.style.cssText = look_change(list_variables)
                 }
                console.log("jkjkj")
                console.log((rule.style.cssText))
                css.push(rule.cssText);
            }else{
      
                css.push(rule.selectorText+' {\n'+rule.style.cssText+'\n}\n');
            }
        }
    }

    return css.join('\n');
}


function look_change(list_variables){
    let result = " "
    let value
        for (let i = 0; i < list_variables.length; i++) {
                    value = getVarValue(list_variables[i])
                    result = result  + list_variables[i] + ":" + value+";" + "\n"
        }
    return result
}
function getVarValue(variable){
    let docStyle = getComputedStyle(document.documentElement);
    return docStyle.getPropertyValue(variable);
}



export function save_css(list_variables){
    const x = all_css(list_variables)
    var blob = new Blob([x], {type: 'text/css;charset=utf-8'}); 
    saveAs(blob, 'main.css'); 
}


function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + 
    encodeURIComponent(text));
    element.setAttribute('download', filename);
   
     element.style.display = 'none';
     document.body.appendChild(element);
   
     element.click();
   
     document.body.removeChild(element);
   }
export function save_html(filename,remove_element){
     document.querySelector(remove_element).remove()
     let text  = document.querySelector("html").innerHTML
     download(filename, text)
}



