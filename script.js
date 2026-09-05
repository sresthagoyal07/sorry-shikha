/* ==========================================
   BASIC SETTINGS
========================================== */

let currentScreen = 1;

const totalScreens = 10;

const screens =
    document.querySelectorAll(".screen");

const pageNumber =
    document.getElementById("pageNumber");

const progressFill =
    document.getElementById("progressFill");

const envelope =
    document.getElementById("envelope");

const letterText =
    document.getElementById("letterText");


/* ==========================================
   APOLOGY MESSAGE
========================================== */

const apology = `Bby... 🥺❤️

Mujhse galti ho gayi.

Aur mujhe pata hai ki sirf "sorry" bol dene se
sab kuch ek second mein theek nahi ho jata.

Lekin bby please maaf kar do na... ❤️

Galti sabse ho jati hai.
Insaan se galti ho jati hai.

Par ek galti ki wajah se
rishta thodi khatam hota hai...

Hamare beech jo bhi hai,
mere liye woh bahut important hai.

Main nahi chahta ki meri kisi galti ki wajah se
tum mujhse naraz raho
ya tumhe bura lage.

Kabhi kabhi main bina soche kuch kar deta hu,
kabhi situation ko sahi se samajh nahi pata.

Par iska matlab ye bilkul nahi hai
ki mujhe tumhari feelings ki parwah nahi hai.

Mujhe tumhari bahut parwah hai. 🥺

Aur haan bby...

Main tumse bohot bohot pyaar karta hu. ❤️

Tum mere liye sirf ek person nahi ho.

Tumhari presence,
tumhari baatein,
tumhari smile,
sab mere liye bahut special hain.

Mujhe pata hai mujhse galti hui hai,
aur main apni galti ko justify nahi kar raha.

Bas itna keh raha hu...

Please bby, gussa thoda kam kar do na. 🥺

Mujhe maaf kar do.

Rishton mein galtiyan hoti hain,
narazgi hoti hai,
kabhi misunderstandings bhi hoti hain...

Par iska matlab ye thodi hai
ki rishta hi khatam ho jaye.

Main perfect nahi hu bby.

Mujhse galtiyan hongi,
par main koshish zaroor karunga
ki wahi galti dobara na ho.

Tum mere liye bahut special ho. ❤️

Aur main dil se chahta hu
ki hamare beech sab theek ho.

So...

I'm really sorry bby. 🥺❤️

Please maaf kar do na...`;


/* ==========================================
   ENVELOPE
========================================== */

envelope.addEventListener("click", function () {

    if (
        envelope.classList.contains("open")
    ) {
        return;
    }

    envelope.classList.add("open");

    createParticles(35);

    setTimeout(() => {

        goToScreen(2);

    }, 1600);

});


/* ==========================================
   NEXT SCREEN
========================================== */

function nextScreen() {

    if (currentScreen >= totalScreens) {
        return;
    }

    currentScreen++;

    goToScreen(currentScreen);
}


/* ==========================================
   GO TO SCREEN
========================================== */

function goToScreen(number) {

    screens.forEach(screen => {

        screen.classList.remove("active");

    });


    const target =
        document.getElementById(
            `screen${number}`
        );


    if (!target) {
        return;
    }


    target.classList.add("active");


    currentScreen = number;


    updateProgress();


    createParticles(12);


    if (number === 3) {

        startTypewriter();

    }

}


/* ==========================================
   PROGRESS
========================================== */

function updateProgress() {

    pageNumber.innerText =
        String(currentScreen).padStart(2, "0");


    const percentage =
        (currentScreen / totalScreens) * 100;


    progressFill.style.width =
        percentage + "%";
}


/* ==========================================
   TYPEWRITER
========================================== */

let typingStarted = false;


function startTypewriter() {

    if (typingStarted) {
        return;
    }

    typingStarted = true;

    letterText.innerHTML = "";

    let index = 0;


    function typeCharacter() {

        if (index < apology.length) {

            letterText.innerHTML +=
                apology.charAt(index);

            index++;

            setTimeout(
                typeCharacter,
                18
            );

        }

    }


    typeCharacter();
}


/* ==========================================
   PARTICLES
========================================== */

function createParticles(amount) {

    const symbols = [
        "♡",
        "♥",
        "✦",
        "✧",
        "·"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.className =
            "particle";


        particle.innerText =
            symbols[
                Math.floor(
                    Math.random()
                    *
                    symbols.length
                )
            ];


        particle.style.left =
            Math.random() * 100 + "vw";


        particle.style.fontSize =
            (
                Math.random() * 18
                +
                8
            ) + "px";


        particle.style.color =
            Math.random() > .5
                ? "#ff719f"
                : "#c9b4be";


        particle.style.animationDuration =
            (
                Math.random() * 5
                +
                5
            ) + "s";


        particle.style.animationDelay =
            (
                Math.random() * 1.5
            ) + "s";


        document
            .getElementById("particles")
            .appendChild(particle);


        setTimeout(() => {

            particle.remove();

        }, 12000);

    }

}


/* ==========================================
   CONTINUOUS PARTICLES
========================================== */

setInterval(() => {

    createParticles(1);

}, 900);


/* ==========================================
   RESTART
========================================== */

function restart() {

    currentScreen = 1;

    typingStarted = false;

    letterText.innerHTML = "";


    screens.forEach(screen => {

        screen.classList.remove("active");

    });


    document
        .getElementById("screen1")
        .classList.add("active");


    envelope.classList.remove("open");


    updateProgress();


    window.scrollTo(
        0,
        0
    );

}


/* ==========================================
   KEYBOARD
========================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "ArrowRight"
        ) {

            nextScreen();

        }


        if (
            event.key === "ArrowLeft"
            &&
            currentScreen > 1
        ) {

            currentScreen--;

            goToScreen(
                currentScreen
            );

        }

    }
);