const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    suite('POST request to /api/translate',()=>{
    // Translation with text and locale fields: POST request to /api/translate
    test('Translation with text and locale fields',(done)=>{
        chai
            .request(server)
            .post('/api/translate')
            .send({locale:'american-to-british' ,text:'acclimate'})
            .end((err,res)=>{
                assert.equal(res.status,200)
                assert.equal(res.body.translation,'<span class="highlight">acclimatise</span>')
                done();
            })
        })

    // Translation with text and invalid locale field: POST request to /api/translate
    test('Translation with text and locale fields',(done)=>{
        chai
            .request(server)
            .post('/api/translate')
            .send({locale: 'not locale ',text:'some text'})
            .end((err,res)=>{
                assert.equal(res.status,200)
                assert.equal(res.body.error,'Invalid value for locale field')
                done();
            })
    })
    // Translation with missing text field: POST request to /api/translate
    test('Translation with text and locale fields',(done)=>{
        chai
            .request(server)
            .post('/api/translate')
            .send({locale:'american-to-british' })
            .end((err,res)=>{
                assert.equal(res.status,200)
                assert.equal(res.body.error,'Required field(s) missing')
                done();
            })
    })
    // Translation with missing locale field: POST request to /api/translate
    test('Translation with text and locale fields',(done)=>{
        chai
            .request(server)
            .post('/api/translate')
            .send({text:'some text'})
            .end((err,res)=>{
                assert.equal(res.status,200)
                assert.equal(res.body.error, 'Required field(s) missing')
                done();
            })
    })
    // Translation with empty text: POST request to /api/translate
    test('Translation with empty text',(done)=>{
        chai
            .request(server)
            .post('/api/translate')
            .send({locale: 'american-to-british',text:''})
            .end((err,res)=>{
                assert.equal(res.status,200)
                assert.equal(res.body.error,'No text to translate')
                done();
            })
    })
    // Translation with text that needs no translation: POST request to /api/translate
    test('Translation with text that needs no translation',(done)=>{
        chai
            .request(server)
            .post('/api/translate')
            .send({locale: 'american-to-british',text:'No translation'})
            .end((err,res)=>{
                assert.equal(res.status,200)
                assert.equal(res.body.translation,'Everything looks good to me!')
                done();
            })
    })


    })



});
