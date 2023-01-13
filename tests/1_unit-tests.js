const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();
const amToBrEng = "american-to-british";
const brToAmEng = "british-to-american";

suite("Unit Tests", () => {
  suite("Translate American English to British English", () => {
    test("Translate favorite(AmE) to favourite(BrE)", () => {
      assert.strictEqual(
        translator.translate("Mangoes are my favorite fruit.", amToBrEng),
        'Mangoes are my <span class="highlight">favourite</span> fruit.',
        "Correctly translate favorite(AmE) to favourite(BrE)"
      );
    });

    test("Translate yogurt(AmE) to yoghurt(BrE)", () => {
      assert.strictEqual(
        translator.translate("I ate yogurt for breakfast.", amToBrEng),
        'I ate <span class="highlight">yoghurt</span> for breakfast.',
        "Correctly translate yogurt(AmE) to yoghurt(BrE)"
      );
    });

    test("Translate condo(AmE) to flat(BrE)", () => {
      assert.strictEqual(
        translator.translate("We had a party at my friend's condo.", amToBrEng),
        'We had a party at my friend\'s <span class="highlight">flat</span>.',
        "Correctly translate condo(AmE) to flat(BrE)"
      );
    });

    test("Translate trashcan(AmE) to bin(BrE)", () => {
      assert.strictEqual(
        translator.translate(
          "Can you toss this in the trashcan for me?",
          amToBrEng
        ),
        'Can you toss this in the <span class="highlight">bin</span> for me?',
        "Correctly translate trashcan(AmE) to bin(BrE)"
      );
    });

    test("Translate 'parking lot'(AmE) to 'car park'(BrE)", () => {
      assert.strictEqual(
        translator.translate("The parking lot was full.", amToBrEng),
        'The <span class="highlight">car park</span> was full.',
        "Correctly translate 'parking lot'(AmE) to 'car park'(BrE)"
      );
    });

    test("Translate 'Rube Goldberg machine'(AmE) to 'Heath Robinson device'(BrE)", () => {
      assert.strictEqual(
        translator.translate(
          "Like a high tech Rube Goldberg machine.",
          amToBrEng
        ),
        'Like a high tech <span class="highlight">Heath Robinson device</span>.',
        "Correctly translate 'Rube Goldberg machine'(AmE) to 'Heath Robinson device'(BrE)"
      );
    });

    test("Translate 'play hooky'(AmE) to 'bunk off'(BrE)", () => {
      assert.strictEqual(
        translator.translate(
          "To play hooky means to skip class or work.",
          amToBrEng
        ),
        'To <span class="highlight">bunk off</span> means to skip class or work.',
        "Correctly translate 'play hooky'(AmE) to 'bunk off'(BrE)"
      );
    });

    test("Translate 'Mr.'(AmE) to Mr(BrE)", () => {
      assert.strictEqual(
        translator.translate("No Mr. Bond, I expect you to die.", amToBrEng),
        'No <span class="highlight">Mr</span> Bond, I expect you to die.',
        "Correctly translate 'Mr.'(AmE) to Mr(BrE)"
      );
    });

    test("Translate 'Dr.'(AmE) to Dr(BrE)", () => {
      assert.strictEqual(
        translator.translate("Dr. Grosh will see you now.", amToBrEng),
        '<span class="highlight">Dr</span> Grosh will see you now.',
        "Correctly translate 'Dr.'(AmE) to Dr(BrE)"
      );
    });

    test("Translate 12:15(AmE) to 12.15(BrE)", () => {
      assert.strictEqual(
        translator.translate("Lunch is at 12:15 today.", amToBrEng),
        'Lunch is at <span class="highlight">12.15</span> today.',
        "Correctly translate 12:15(AmE) to 12.15(BrE)"
      );
    });
  });

  suite("Translate British English to American English", () => {
    test("Translate footie(BrE) to soccer(AmE)", () => {
      assert.strictEqual(
        translator.translate(
          "We watched the footie match for a while.",
          brToAmEng
        ),
        'We watched the <span class="highlight">soccer</span> match for a while.',
        "Correctly translate footie(BrE) to soccer(AmE)"
      );
    });

    test("Translate Paracetamol(BrE) to Tylenol(AmE)", () => {
      assert.strictEqual(
        translator.translate(
          "Paracetamol takes up to an hour to work.",
          brToAmEng
        ),
        '<span class="highlight">Tylenol</span> takes up to an hour to work.',
        "Correctly translate Paracetamol(BrE) to Tylenol(AmE)"
      );
    });

    test("Translate caramelise(BrE) to caramelize(AmE)", () => {
      assert.strictEqual(
        translator.translate("First, caramelise the onions.", brToAmEng),
        'First, <span class="highlight">caramelize</span> the onions.',
        "Correctly translate caramelise(BrE) to caramelize(AmE)"
      );
    });

    test("Translate 'bank holiday'(BrE) and 'funfair'(BrE)  to 'public holiday'(AmE) and 'carnival'(AmE) respectively", () => {
      assert.strictEqual(
        translator.translate(
          "I spent the bank holiday at the funfair.",
          brToAmEng
        ),
        'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.',
        "Correctly translate 'bank holiday'(BrE) and 'funfair'(BrE)  to 'public holiday'(AmE) and 'carnival'(AmE) respectively"
      );
    });

    test("Translate bicky(BrE) and chippy(BrE)  to cookie(AmE) and 'fish-and-chip shop'(AmE) respectively", () => {
      assert.strictEqual(
        translator.translate(
          "I had a bicky then went to the chippy.",
          brToAmEng
        ),
        'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.',
        "Correctly translate bicky(BrE) and chippy(BrE)  to cookie(AmE) and 'fish-and-chip shop'(AmE) respectively"
      );
    });

    test("Translate 'bits and bobs'(BrE) and 'bum bag'(BrE) to 'odds and ends'(AmE) and 'fanny pack'(AmE) respectively", () => {
      assert.strictEqual(
        translator.translate(
          "I've just got bits and bobs in my bum bag.",
          brToAmEng
        ),
        'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.',
        "Correctly translate 'bits and bobs'(BrE) and 'bum bag'(BrE) to 'odds and ends'(AmE) and 'fanny pack'(AmE) respectively"
      );
    });

    test("Translate 'car boot sale'(BrE) to 'swap meet'(AmE)", () => {
      assert.strictEqual(
        translator.translate(
          "The car boot sale at Boxted Airfield was called off.",
          brToAmEng
        ),
        'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.',
        "Correctly translate 'car boot sale'(BrE) to 'swap meet'(AmE)"
      );
    });
  });

  suite("Translation", () => {
    test("Translate Mrs(BrE) to Mrs.(AmE)", () => {
      assert.strictEqual(
        translator.translate("Have you met Mrs Kalyani?", brToAmEng),
        'Have you met <span class="highlight">Mrs.</span> Kalyani?',
        "Correctly translate Mrs(BrE) to Mrs.(AmE)"
      );
    });
  });

  suite("Translation", () => {
    test("Translate Prof(BrE) to Pro.(AmE)", () => {
      assert.strictEqual(
        translator.translate(
          "Prof Joyner of King's College, London.",
          brToAmEng
        ),
        '<span class="highlight">Prof.</span> Joyner of King\'s College, London.',
        "Correctly translate Prof(BrE) to Pro.(AmE)"
      );
    });
  });

  suite("Translation", () => {
    test("Translate 4.30(BrE) to 4:30(AmE)", () => {
      assert.strictEqual(
        translator.translate(
          "Tea time is usually around 4 or 4.30.",
          brToAmEng
        ),
        'Tea time is usually around 4 or <span class="highlight">4:30</span>.',
        "Correctly translate 4.30(BrE) to 4:30(AmE)"
      );
    });
  });

  suite("Translation", () => {
    test("Wrap favorite in <span> with class highlight", () => {
      assert.strictEqual(
        translator
          .translate("Mangoes are my favorite fruit.", amToBrEng)
          .includes('<span class="highlight">favourite</span>'),
        true,
        "Correctly translate wrap favorite in <span> with class highlight"
      );
    });
  });

  suite("Translation", () => {
    test("Wrap yoghurt in <span> with class highlight", () => {
      assert.strictEqual(
        translator
          .translate("I ate yogurt for breakfast.", amToBrEng)
          .includes('<span class="highlight">yoghurt</span>'),
        true,
        "Correctly wrap yoghurt in <span> with class highlight"
      );
    });
  });

  suite("Translation", () => {
    test("Wrap soccer in <span> with class highlight", () => {
      assert.strictEqual(
        translator
          .translate("We watched the footie match for a while.", brToAmEng)
          .includes('<span class="highlight">soccer</span>'),
        true,
        "Correctly wrap soccer in <span> with class highlight"
      );
    });
  });

  suite("Translation", () => {
    test("Wrap Tylenol in <span> with class highlight", () => {
      assert.strictEqual(
        translator
          .translate("Paracetamol takes up to an hour to work.", brToAmEng)
          .startsWith('<span class="highlight">Tylenol</span>'),
        true,
        "Correctly wrap yoghurt in <span> with class highlight"
      );
    });
  });
});
