// create object for LOVE section

    const loveVerses = {
        "John 3:16": "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life",
        "Corinthians 13:4-5":"Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.",
        "Ephesians_5:25":"Husbands, love your wives, just as Christ loved the church and gave himself up for her." ,
        "1John 3:18":"Let us not love with words or speech but with actions and in truth.",
        "1John 4:7":"Dear friends, let us love one another, for love comes from God. Everyone who loves has been born of God and knows God",
        "John 13:34":"Love one another.",
        "1John 4:18": "There is no fear in love, but perfect love casts out fear",
        "1 Corinthians 13:8":"Love never fails"

    };

    function randomVerse(){
    // Get an array of verse keys
    const verseKeys = Object.keys(loveVerses);

    // Get a random key from the array
    const randomKey = verseKeys[Math.floor(Math.random() * verseKeys.length)];

    // Return the verse associated with the random key
    return {
        verse:loveVerses[randomKey],
        author: randomKey,
    };
}

console.log(randomVerse()); // Logs a random verse from the Bible