'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let {text,locale}=req.body;
      if (!locale|| text==undefined){
        res.json({ error: 'Required field(s) missing' })
        return
      }
      if (! text){
        res.json({ error: 'No text to translate' })
        return 
      }
      let translated
      if ( locale=='american-to-british'){
        translated = translator.toBritish( text);
      } else if( locale=='british-to-american'){
        translated = translator.toAmerican( text);
      } else {
        res.json({ error: 'Invalid value for locale field' })
        return
      }
      if ( text==translated){
        res.json({text,translation:"Everything looks good to me!"})
      } else{
        res.json({text,translation:translated})
      }
      
    });
};
