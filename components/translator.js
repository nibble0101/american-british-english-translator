const amOnly = require("./american-only.js");
const brOnly = require("./british-only.js");
const amToBrSpelling = require("./american-to-british-spelling.js");
const amToBrTitles = require("./american-to-british-titles.js");

const brToAmSpelling = {};

for (const amSpelling in amToBrSpelling) {
  const brSpelling = amToBrSpelling[amSpelling];
  brToAmSpelling[brSpelling] = amSpelling;
}

const brToAmTitles = {};

for (const amTitle in amToBrTitles) {
  const brTitle = amToBrTitles[amTitle];
  brToAmTitles[brTitle] = amTitle;
}

const regexes = {};
const translations = {
  amOnly,
  brOnly,
  amToBrSpelling,
  brToAmSpelling,
  amToBrTitles,
  brToAmTitles,
};

for (const translation in translations) {
  const data = translations[translation];
  if (translation === "amToBrTitles") {
    const keys = Object.keys(data).map((key) => {
      if (key.endsWith(".")) {
        return key.replace(".", "\\.");
      }
      return key;
    });
    regexes[`${translation}Regx`] = new RegExp(
      `\\b${keys.join("|\\b")}`,
      "mig"
    );
    continue;
  }
  regexes[`${translation}Regx`] = new RegExp(
    `\\b${Object.keys(data).join("\\b|\\b")}\\b`,
    "mig"
  );
}

const amToBrTimeRegx = /\d{1,2}:\d{1,2}/g;
const brToAmTimeRegx = /\d{1,2}\.\d{1,2}/g;

class Translator {
  translate(text, locale) {
    if (locale === "american-to-british") {
      return this.convertAmToBr(text);
    }

    if (locale === "british-to-american") {
      return this.convertBrToAm(text);
    }
  }

  convertAmToBr(text) {
    let translation = text;
    const { amOnlyRegx, amToBrSpellingRegx, amToBrTitlesRegx } = regexes;

    let words = text.match(amOnlyRegx) || [];
    words.forEach((word) => {
      const replace = `<span class="highlight">${
        amOnly[word.toLowerCase()]
      }</span>`;
      translation = translation.replace(word, replace);
    });

    words = text.match(amToBrSpellingRegx) || [];
    words.forEach((word) => {
      const replace = `<span class="highlight">${
        amToBrSpelling[word.toLowerCase()]
      }</span>`;
      translation = translation.replace(word, replace);
    });

    words = text.match(amToBrTitlesRegx) || [];
    words.forEach((word) => {
      const title = amToBrTitles[word.toLowerCase()];
      const replace = `<span class="highlight">${this.formatTitle(
        title
      )}</span>`;
      translation = translation.replace(word, replace);
    });

    words = Object.keys(amToBrTitles);

    words = text.match(amToBrTimeRegx) || [];
    words.forEach((word) => {
      const replace = `<span class="highlight">${word.replace(
        ":",
        "."
      )}</span>`;
      translation = translation.replace(word, replace);
    });
    return translation;
  }

  convertBrToAm(text) {
    let translation = text;
    const { brOnlyRegx, brToAmSpellingRegx, brToAmTitlesRegx } = regexes;

    let words = text.match(brOnlyRegx) || [];
    words.forEach((word) => {
      const replace = `<span class="highlight">${
        brOnly[word.toLowerCase()]
      }</span>`;
      translation = translation.replace(word, replace);
    });

    words = text.match(brToAmSpellingRegx) || [];
    words.forEach((word) => {
      const replace = `<span class="highlight">${
        brToAmSpelling[word.toLowerCase()]
      }</span>`;
      translation = translation.replace(word, replace);
    });

    words = text.match(brToAmTitlesRegx) || [];
    words.forEach((word) => {
      const title = brToAmTitles[word.toLowerCase()];
      const replace = `<span class="highlight">${this.formatTitle(
        title
      )}</span>`;
      translation = translation.replace(word, replace);
    });

    words = text.match(brToAmTimeRegx) || [];
    words.forEach((word) => {
      const replace = `<span class="highlight">${word.replace(
        ".",
        ":"
      )}</span>`;
      translation = translation.replace(word, replace);
    });

    return translation;
  }

  formatTitle(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  }
}

module.exports = Translator;
