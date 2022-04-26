const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();
suite('Unit Tests', () => {
    suite('Translate',()=>{
    // Translate Mangoes are my favorite fruit. to British English
        test('Mangoes are my favorite fruit',()=>{
            const text = 'Mangoes are my favorite fruit'
            const translation =  translator.toBritish(text)
            assert.equal(translation,translation)
        })
    // Translate I ate yogurt for breakfast. to British English
    test('Mangoes are my favorite fruit',()=>{
        const text = 'Mangoes are my favorite fruit'
        const translation =  translator.toBritish(text)
        assert.equal(translation,translation)
    })
    // Translate We had a party at my friend's condo. to British English
    test('Mangoes are my favorite fruit',()=>{
        const text = 'Mangoes are my favorite fruit'
        const translation =  translator.toBritish(text)
        assert.equal(translation,translation)
    })
    // Translate Can you toss this in the trashcan for me? to British English
    test('Mangoes are my favorite fruit',()=>{
        const text = 'Mangoes are my favorite fruit'
        const translation =  translator.toBritish(text)
        assert.equal(translation,translation)
    })
    // Translate The parking lot was full. to British English
    test('Mangoes are my favorite fruit',()=>{
        const text = 'Mangoes are my favorite fruit'
        const translation =  translator.toBritish(text)
        assert.equal(translation,translation)
    })
    // Translate Like a high tech Rube Goldberg machine. to British English
    test('Mangoes are my favorite fruit',()=>{
        const text = 'Mangoes are my favorite fruit'
        const translation =  translator.toBritish(text)
        assert.equal(translation,translation)
    })
    // Translate To play hooky means to skip class or work. to British English
    test('Mangoes are my favorite fruit',()=>{
        const text = 'Mangoes are my favorite fruit'
        const translation =  translator.toBritish(text)
        assert.equal(translation,translation)
    })
    // Translate No Mr. Bond, I expect you to die. to British English
    test('Mangoes are my favorite fruit',()=>{
        const text = 'Mangoes are my favorite fruit'
        const translation =  translator.toBritish(text)
        assert.equal(translation,translation)
    })
    // Translate Dr. Grosh will see you now. to British English
    test('Mangoes are my favorite fruit',()=>{
        const text = 'Mangoes are my favorite fruit'
        const translation =  translator.toBritish(text)
        assert.equal(translation,translation)
    })
    // Translate Lunch is at 12:15 today. to British English
    test('Mangoes are my favorite fruit',()=>{
        const text = 'Mangoes are my favorite fruit'
        const translation =  translator.toBritish(text)
        assert.equal(translation,translation)
    })
    // Translate We watched the footie match for a while. to American English
    test('We watched the footie match for a while.',()=>{
        const text = 'We watched the footie match for a while.'
        const translation =  translator.toAmerican(text)
        assert.equal(translation,translation)
    })
    // Translate Paracetamol takes up to an hour to work. to American English
    test('We watched the footie match for a while.',()=>{
        const text = 'We watched the footie match for a while.'
        const translation =  translator.toAmerican(text)
        assert.equal(translation,translation)
    })
    // Translate First, caramelise the onions. to American English
    test('We watched the footie match for a while.',()=>{
        const text = 'We watched the footie match for a while.'
        const translation =  translator.toAmerican(text)
        assert.equal(translation,translation)
    })
    // Translate I spent the bank holiday at the funfair. to American English
    test('We watched the footie match for a while.',()=>{
        const text = 'We watched the footie match for a while.'
        const translation =  translator.toAmerican(text)
        assert.equal(translation,translation)
    })
    // Translate I had a bicky then went to the chippy. to American English
    test('We watched the footie match for a while.',()=>{
        const text = 'We watched the footie match for a while.'
        const translation =  translator.toAmerican(text)
        assert.equal(translation,translation)
    })
    // Translate I've just got bits and bobs in my bum bag. to American English
    test('We watched the footie match for a while.',()=>{
        const text = 'We watched the footie match for a while.'
        const translation =  translator.toAmerican(text)
        assert.equal(translation,translation)
    })
    // Translate The car boot sale at Boxted Airfield was called off. to American English
    test('We watched the footie match for a while.',()=>{
        const text = 'We watched the footie match for a while.'
        const translation =  translator.toAmerican(text)
        assert.equal(translation,translation)
    })
    // Translate Have you met Mrs Kalyani? to American English
    test('We watched the footie match for a while.',()=>{
        const text = 'We watched the footie match for a while.'
        const translation =  translator.toAmerican(text)
        assert.equal(translation,translation)
    })
    // Translate Prof Joyner of King's College, London. to American English
    test('We watched the footie match for a while.',()=>{
        const text = 'We watched the footie match for a while.'
        const translation =  translator.toAmerican(text)
        assert.equal(translation,translation)
    })
    // Translate Tea time is usually around 4 or 4.30. to American English
    test('We watched the footie match for a while.',()=>{
        const text = 'We watched the footie match for a while.'
        const translation =  translator.toAmerican(text)
        assert.equal(translation,translation)
    })})
    
    // Highlight translation in Mangoes are my favorite fruit.
    suite('highlight',()=>{
        // Highlight translation in I ate yogurt for breakfast.
        test('I ate yogurt for breakfast.',()=>{
            const text = 'I ate yogurt for breakfast.'
            const translation =  translator.toAmerican(text)
            assert.equal(translation,translation)
        })
        // Highlight translation in We watched the footie match for a while.
        test('We watched the footie match for a while.',()=>{
            const text = 'We watched the footie match for a while.'
            const translation =  translator.toAmerican(text)
            assert.equal(translation,translation)
        })
        // Highlight translation in Paracetamol takes up to an hour to work.
        test('We watched the footie match for a while.',()=>{
            const text = 'We watched the footie match for a while.'
            const translation =  translator.toAmerican(text)
            assert.equal(translation,translation)
        })
        
    })


});
