const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    swap(obj){
        return Object.keys(obj).reduce((swapped,key)=>{
            swapped[obj[key]]=key;
            return swapped;
        },{})
    }
    translate(text,dict){
        //add space to beginning and end to work with logic 
        let textToTranslate = ' '+text+' '
        // iterates through dictionary
        const translated = Object.entries(dict).reduce((text,word)=>{
            let regex = new RegExp('(\\W)'+word[0]+'(\\W)','gi')
                return text.replaceAll(regex,'$1<span class="highlight">'+word[1]+'</span>$2')
        },textToTranslate)
        let retText= translated.slice(1,-1)
        return retText
    }
    toBritish(text){
        const dict = {...americanOnly,...americanToBritishSpelling,...americanToBritishTitles};
        const translated = this.translate(text,dict);
        const translatedWTime = translated.replaceAll(/(\d{1,2}):(\d{2})/g,'<span class="highlight">$1.$2</span>');
        return translatedWTime

    }
    toAmerican(text){
        const dict = {...this.swap(americanToBritishSpelling),...britishOnly,...this.swap(americanToBritishTitles)}
        const translated = this.translate(text,dict);
        const translatedWTime = translated.replaceAll(/(\d{1,2}).(\d{2})/g,'<span class="highlight">$1:$2</span>');
        return translatedWTime

    }

}

module.exports = Translator;