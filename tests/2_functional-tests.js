const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");
const translate = new Translator();
const amToBrEng = "american-to-british";
const brToAmEng = "british-to-american";

suite("Functional Tests", () => {
  test("Translation with text and locale fields", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text: "Mangoes are my favorite fruit.", locale: amToBrEng })
      .end((req, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {
          text: "Mangoes are my favorite fruit.",
          translation:
            'Mangoes are my <span class="highlight">favourite</span> fruit.',
        });
        done();
      });
  });

  test("Translation with text and invalid locale field", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Mangoes are my favorite fruit.",
        locale: "invalid-locale-field",
      })
      .end((req, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {
          error: "Invalid value for locale field",
        });
        done();
      });
  });

  test("Translation with missing text field", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({ locale: amToBrEng })
      .end((req, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {
          error: "Required field(s) missing",
        });
        done();
      });
  });

  test("Translation with missing locale field", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text: "Mangoes are my favorite fruit." })
      .end((req, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {
          error: "Required field(s) missing",
        });
        done();
      });
  });

  test("Translation with empty text", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text: "", locale: amToBrEng })
      .end((req, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {
          error: "No text to translate",
        });
        done();
      });
  });

  test("Translation with text that needs no translation", (done) => {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text: "Hello world!", locale: amToBrEng })
      .end((req, res) => {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, {
          text: "Hello world!",
          translation: "Everything looks good to me!",
        });
        done();
      });
  });
});
