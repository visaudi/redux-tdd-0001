const rnaTranscriptionReducer = require("./index.js");

describe("RNA transcription", function() {
    function expectTranscription(dna, rna) {
        expect(rnaTranscriptionReducer({}, {
            type: "TRANSCRIBE_TO_RNA",
            dnaStrand: dna 
        }).strand).toBe(rna); 
    }
    test("changes 'G' to 'C'", () => expectTranscription("G", "C"));
    test("changes 'C' to 'G'", () => expectTranscription("C", "G"));
    test("Changes 'A' to 'U'", () => expectTranscription("A", "U"));
    test("Changes 'T' to 'A'", () => expectTranscription("T", "A"));
});
