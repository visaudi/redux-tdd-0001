const initialState = {
    strand: "C"
};

function rnaTranscriptionReducer(state = initialState, action) {
    switch (action.dnaStrand) {
        case "A":
            return {
                strand: "U"
            };
        case "C": 
            return {
                strand: "G"
            };
        case "T":
            return {
                strand: "A"
            };
        default:
            return {
                strand: "C"
            };
    }
}

module.exports = rnaTranscriptionReducer;
