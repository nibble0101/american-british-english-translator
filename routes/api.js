"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    try {
      const { body } = req;

      if (!body.hasOwnProperty("text") || !body.hasOwnProperty("locale")) {
        return res.status(200).json({
          error: "Required field(s) missing",
        });
      }

      const { text, locale } = body;
      if (!text) {
        return res.status(200).json({
          error: "No text to translate",
        });
      }

      if (!locale) {
        return res.status(200).json({
          error: "Required field(s) missing",
        });
      }

      const locales = ["american-to-british", "british-to-american"];

      if (!locales.includes(locale)) {
        return res.status(200).json({
          error: "Invalid value for locale field",
        });
      }

      const translation = translator.translate(text, locale);

      if (text === translation) {
        return res.status(200).json({
          text,
          translation: "Everything looks good to me!",
        });
      }

      res.status(200).json({ text, translation });
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  });
};
