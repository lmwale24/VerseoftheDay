function randomVerse() {
    const bibleVerses = {
        john_316: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life",
        romans_323: "For everyone has sinned; we all fall short of God's glorious standard.",
        phillippians_413: "I can do all things through him who strengthens me.",
        psalm_231: "The Lord is my shepherd; I shall not want.",
        proverbs_35: "Trust in the Lord with all your heart, and do not lean on your own understanding.",
        jermiah_2911: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
        romans_828: "And we know that for those who love God all things work together for good, for those who are called according to his purpose.",
        phillippians_46:"Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God."
    };

    // Get an array of verse keys
    const verseKeys = Object.keys(bibleVerses);

    // Get a random key from the array
    const randomKey = verseKeys[Math.floor(Math.random() * verseKeys.length)];

    // Return the verse associated with the random key
    return {
        verse:bibleVerses[randomKey],
        author: randomKey,
    };
    
}

  


// add event listener to the btn

const newVerseBtn = document.getElementById("New-Verse");
newVerseBtn.addEventListener('click', function(){

    const verseElement = document.getElementById('verse');
    // Get the author element
    const authorElement = document.getElementById('author');

    const {verse, author} = randomVerse();

    verseElement.textContent = `"${verse}"`;
    authorElement.textContent = author;
});

// create object for LOVE section
const loveVerses = {
    "John 3:16": "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life",
    "Corinthians 13:4-5": "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.",
    "Ephesians_5:25": "Husbands, love your wives, just as Christ loved the church and gave himself up for her.",
    "1John 3:18": "Let us not love with words or speech but with actions and in truth.",
    "1John 4:7": "Dear friends, let us love one another, for love comes from God. Everyone who loves has been born of God and knows God",
    "John 13:34": "Love one another.",
    "1John 4:18": "There is no fear in love, but perfect love casts out fear",
    "1 Corinthians 13:8": "Love never fails",
    "1 John 4:8":"Whoever does not love does not know God, because God is love.",
    "1 John 4:16":"And so we know and rely on the love God has for us. God is love. Whoever lives in love lives in God, and God in them."
};

function randomLoveVerse() {
    // Get an array of verse keys
    const verseKeys = Object.keys(loveVerses);
    // Get a random key from the array
    const randomKey = verseKeys[Math.floor(Math.random() * verseKeys.length)];
    // Return the verse associated with the random key
    return {
        verse: loveVerses[randomKey],
        author: randomKey,
    };
}

// add event listener to the love section button
const newLoveVerseBtn = document.getElementById("New-Love-Verse");
newLoveVerseBtn.addEventListener('click', function() {
    const verseElement = document.getElementById('Love-verse');
    const authorElement = document.getElementById('Love-author');

    const {verse, author} = randomLoveVerse();

    verseElement.textContent = verse;
    authorElement.textContent = author;
});


// healing section
// create object for LOVE section
const healingVerses = {
    "Matthew 10:1": "Jesus called his twelve disciples to him and gave them authority to drive out impure spirits and to heal every disease and sickness.",
    "Matthew 9:35": "Jesus went through all the towns and villages, teaching in their synagogues, proclaiming the good news of the kingdom and healing every disease and sickness",
    "Jeremiah 17:14 ": "Heal me, Lord, and I will be healed; save me and I will be saved, for you are the one I praise",
    "Isaiah 53:5": "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.",
    "James 5:14-15": "Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord. And the prayer offered in faith will make the sick person well; the Lord will raise them up. If they have sinned, they will be forgiven.",
    "Psalm 147:3": "He heals the brokenhearted and binds up their wounds.",
    "Acts 3:16": "By faith in the name of Jesus, this man whom you see and know was made strong. It is Jesus’ name and the faith that comes through him that has completely healed him, as you can all see",
    "James 5:16 ": "Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective."
};


function randomHealingVerse() {
    // Get an array of verse keys
    const verseKeys = Object.keys(healingVerses);
    // Get a random key from the array
    const randomKey = verseKeys[Math.floor(Math.random() * verseKeys.length)];
    // Return the verse associated with the random key
    return {
        verse: healingVerses[randomKey],
        author: randomKey,
    };
}

// add event listener to the love section button
const newHealingVerseBtn = document.getElementById("New-Healing-Verse");
newHealingVerseBtn.addEventListener('click', function() {
    const verseElement = document.getElementById('Healing-verse');
    const authorElement = document.getElementById('Healing-author');

    const {verse, author} = randomHealingVerse();

    verseElement.textContent = verse;
    authorElement.textContent = author;
});


// Anger section
// create object for LOVE section
const angerVerses = {
    "Ephesians 4:26-27": "In your anger do not sin: Do not let the sun go down while you are still angry, and do not give the devil a foothold.",
    "James 1:19-20": "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires.",
    "Proverbs 14:29": "Whoever is patient has great understanding, but one who is quick-tempered displays folly",
    "Proverbs 15:18 ": "A hot-tempered person stirs up conflict, but the one who is patient calms a quarrel.",
    "Colossians 3:8": "But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips",
    "Proverbs 29:11": "Fools give full vent to their rage, but the wise bring calm in the end.",
    "Ecclesiastes 7:9": "Do not be quickly provoked in your spirit, for anger resides in the lap of fools.",
    "Psalm 37:8": "Refrain from anger and turn from wrath; do not fret—it leads only to evil.",
    "Galatians 5:19-20": " The acts of the flesh are obvious: sexual immorality, impurity and debauchery; 20 idolatry and witchcraft; hatred, discord, jealousy, fits of rage, selfish ambition, dissensions, factions"
};

function randomAngerVerse() {
    // Get an array of verse keys
    const verseKeys = Object.keys(angerVerses);
    // Get a random key from the array
    const randomKey = verseKeys[Math.floor(Math.random() * verseKeys.length)];
    // Return the verse associated with the random key
    return {
        verse: angerVerses[randomKey],
        author: randomKey,
    };
}


// add event listener to the love section button
const newAngerVerseBtn = document.getElementById("New-Anger-Verse");
newAngerVerseBtn.addEventListener('click', function() {
    const verseElement = document.getElementById('Anger-verse');
    const authorElement = document.getElementById('Anger-author');

    const {verse, author} = randomAngerVerse();

    verseElement.textContent = verse;
    authorElement.textContent = author;
});


// PEACE section
// create object for PEACE section
const PeaceVerses = {
"Judges 6:24": "So Gideon built an altar to the LORD there and called it The LORD Is Peace. To this day it stands in Ophrah of the Abiezrites.",
"Romans 15:13":"May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
"Philippians 4:6-7": "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
"John 14:27": "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
"Colossians 3:15":"Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful.",
"Isaiah 9:6":"For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace",
"John 16:33":"I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.",
};

function randomPeaceVerse() {
    // Get an array of verse keys
    const verseKeys = Object.keys(PeaceVerses);
    // Get a random key from the array
    const randomKey = verseKeys[Math.floor(Math.random() * verseKeys.length)];
    // Return the verse associated with the random key
    return {
        verse: PeaceVerses[randomKey],
        author: randomKey,
    };
}

// add event listener to the love section button
const newPeaceVerseBtn = document.getElementById("New-Peace-Verse");
newPeaceVerseBtn.addEventListener('click', function() {
    const verseElement = document.getElementById('Peace-verse');
    const authorElement = document.getElementById('Peace-author');

    const {verse, author} = randomPeaceVerse();

    verseElement.textContent = verse;
    authorElement.textContent = author;
});


// fear section
// PEACE section
// create object for PEACE section
const FearVerses = {
"Isaiah 41:10": "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
"Joshua 1:9":"Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
"Psalm 23:4": "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
"Psalm 27:1": "The LORD is my light and my salvation—whom shall I fear? The LORD is the stronghold of my life—of whom shall I be afraid?",
"Psalm 56:3-4":"When I am afraid, I put my trust in you. In God, whose word I praise— in God I trust and am not afraid. What can mere mortals do to me?",
"Isaiah 43:1":"But now, this is what the LORD says— he who created you, Jacob, he who formed you, Israel: 'Do not fear, for I have redeemed you; I have summoned you by name; you are mine.",
"2 Timothy 1:7":"For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline",
};

function randomFearVerse() {
    // Get an array of verse keys
    const verseKeys = Object.keys(FearVerses);
    // Get a random key from the array
    const randomKey = verseKeys[Math.floor(Math.random() * verseKeys.length)];
    // Return the verse associated with the random key
    return {
        verse: FearVerses[randomKey],
        author: randomKey,
    };
}

// add event listener to the love section button
const newFearVerseBtn = document.getElementById("New-Fear-Verse");
newFearVerseBtn.addEventListener('click', function() {
    const verseElement = document.getElementById('Fear-verse');
    const authorElement = document.getElementById('Fear-author');

    const {verse, author} = randomFearVerse();

    verseElement.textContent = verse;
    authorElement.textContent = author;
});





// share tweet button PAGE 1
 var tweetButton = document.getElementById("Share-Verse");
    
    // Add a click event listener
    tweetButton.addEventListener("click", function() {
        // Redirect to the Twitter URL
        window.location.href = "https://twitter.com/i/flow/login?lang=en"; 
    });


// tweet btn page2
 var tweetButton2 = document.getElementById("Share-Love-Verse");
 // Add a click event listener
    tweetButton2.addEventListener("click", function() {
        // Redirect to the Twitter URL
        window.location.href = "https://twitter.com/i/flow/login?lang=en"; 
    });

    // tweet btn page 3
    var tweetButton3 = document.getElementById("Share-Healing-Verse");
 // Add a click event listener
    tweetButton3.addEventListener("click", function() {
        // Redirect to the Twitter URL
        window.location.href = "https://twitter.com/i/flow/login?lang=en"; 
    });

    // tweet btn page 4
    var tweetButton4 = document.getElementById("Share-Anger-Verse");
 // Add a click event listener
    tweetButton4.addEventListener("click", function() {
        // Redirect to the Twitter URL
        window.location.href = "https://twitter.com/i/flow/login?lang=en"; 
    });

    // tweet btn page 5
    var tweetButton5 = document.getElementById("Share-Peace-Verse");
 // Add a click event listener
    tweetButton5.addEventListener("click", function() {
        // Redirect to the Twitter URL
        window.location.href = "https://twitter.com/i/flow/login?lang=en"; 
    });

    // tweet btn page 6
    var tweetButton6 = document.getElementById("Share-Fear-Verse");
 // Add a click event listener
    tweetButton6.addEventListener("click", function() {
        // Redirect to the Twitter URL
        window.location.href = "https://twitter.com/i/flow/login?lang=en"; 
    });


// DROPDOWN MENU 
// const header = document.querySelector("header");
// window.addEventListener("scroll", function(){
//     header.classList.toggle("sticky", window.scrollY > 100);
// });


let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
     // Toggle a class on the <ul> element to control the visibility of <a> tags
    navlist.classList.toggle('menu-open');
};