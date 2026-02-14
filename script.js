const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const output = document.getElementById("output");
const emergencyBtn = document.getElementById("emergencyBtn");

// ------------------- EMERGENCY CONTACT -------------------
const emergencyContact = "917306600945"; 
// ⚠ Replace with real number (country code included, no +)

// ------------------- CAMERA SETUP -------------------

async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true
        });
        video.srcObject = stream;
    } catch (error) {
        alert("Camera access denied or already in use.");
        console.error(error);
    }
}

startCamera();

// ------------------- MEDIAPIPE SETUP -------------------

const hands = new Hands({
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    }
});

hands.setOptions({
    maxNumHands: 1,
    modelComplexity: 1,
    minDetectionConfidence: 0.8,
    minTrackingConfidence: 0.8
});

hands.onResults(results => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

    if (results.multiHandLandmarks.length > 0) {

        const landmarks = results.multiHandLandmarks[0];

        drawConnectors(ctx, landmarks, HAND_CONNECTIONS,
            { color: "#00FF00", lineWidth: 3 });

        drawLandmarks(ctx, landmarks,
            { color: "#FF0000", lineWidth: 2 });

        const gesture = detectGesture(landmarks);
        output.innerText = gesture;

    } else {
        output.innerText = "No Hand Detected";
    }
});

// ------------------- GESTURE DETECTION -------------------

function detectGesture(landmarks) {

    const indexUp = (landmarks[6].y - landmarks[8].y) > 0.03;
    const middleUp = (landmarks[10].y - landmarks[12].y) > 0.03;
    const ringUp = (landmarks[14].y - landmarks[16].y) > 0.03;
    const pinkyUp = (landmarks[18].y - landmarks[20].y) > 0.03;

    // OKAY (thumb touching index)
    const thumbIndexClose =
        Math.abs(landmarks[4].x - landmarks[8].x) < 0.05 &&
        Math.abs(landmarks[4].y - landmarks[8].y) < 0.05;

    if (thumbIndexClose) {
        speak("Okay");
        return "Okay";
    }

    // THANK YOU (3 fingers: index + middle + ring)
    if (indexUp && middleUp && ringUp && !pinkyUp) {
        speak("Thank You");
        return "Thank You";
    }

    // NO (index + middle only)
    if (indexUp && middleUp && !ringUp && !pinkyUp) {
        speak("No");
        return "No";
    }

    // HELLO (all 4 fingers up)
    if (indexUp && middleUp && ringUp && pinkyUp) {
        speak("Hello");
        return "Hello";
    }

    // YES (only index)
    if (indexUp && !middleUp && !ringUp && !pinkyUp) {
        speak("Yes");
        return "Yes";
    }

    // HELP (fist)
    if (!indexUp && !middleUp && !ringUp && !pinkyUp) {
        speak("Help");
        return "Help";
    }

    return "Detecting...";
}

// ------------------- VOICE FUNCTION -------------------

let lastSpoken = "";

function speak(text) {
    if (text === lastSpoken) return; // prevent repeating
    lastSpoken = text;

    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
}

// ------------------- EMERGENCY BUTTON -------------------

emergencyBtn.addEventListener("click", () => {

    const message = "🚨 EMERGENCY! I need help immediately. Please contact me.";

    output.innerText = "EMERGENCY! Message Opened!";

    speak("Emergency message opened");

    // Open WhatsApp with message
    const whatsappURL = `https://wa.me/${emergencyContact}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
});

// ------------------- START CAMERA PROCESS -------------------

const camera = new Camera(video, {
    onFrame: async () => {
        await hands.send({ image: video });
    },
    width: 640,
    height: 480
});

camera.start();