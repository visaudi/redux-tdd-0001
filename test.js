const initialState = {
    strand: "C"
};

function rnaTranscriptionReducer(state = initialState, action) {
    if (action.dnaStrand === "C") {
        return {
            strand: "G"
        }
    }
    return initialState;
}
describe("RNA transcription", function() {
    test("changes 'G' to 'C'", function() {
        expect(rnaTranscriptionReducer({
            strand: ""
        },
        {
            type: "TRANSCRIBE_TO_RNA",
            dnaStrand: "G"
        }).strand).toBe("C");
    });
    test("changes 'C' to 'G'", function() {
        expect(rnaTranscriptionReducer({
            strand: ""
        },
        {
            type: "TRANSCRIBE_TO_RNA",
            dnaStrand: "C"
        }).strand).toBe("G");
    });
});
