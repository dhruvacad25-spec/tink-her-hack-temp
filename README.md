<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

**SilentSpeakAI**

## Basic Details

### Team Name: Thinkfeminii

### Team Members
- Member 1: Dhruva C - Jyothi Engineering College
- Member 2: Amritha Priya R S- Jyothi Engineering College

### Hosted Project Link
https://connectai1.netlify.app/
### Project Description
SilentSpeak AI is a real-time gesture recognition system that converts hand gestures into speech and text using AI. It also includes an emergency alert feature that allows users to quickly send distress messages to emergency contacts.

The system is designed to assist speech-impaired individuals and improve communication accessibility.

### The Problem statement
Many speech-impaired individuals struggle to communicate effectively in real-time situations. Additionally, in emergencies, people may not be able to verbally ask for help.

There is a need for a simple, fast, and accessible gesture-based communication and emergency alert system.

### The Solution
We built a real-time AI-powered hand gesture recognition system using MediaPipe and JavaScript.

The system:

-Detects gestures using a webcam
-Converts gestures into voice output
-Maintains gesture history
-Includes an emergency alert system with message sending functionality

This provides a fast, contactless, and accessible communication solution.
---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used: JavaScript,HTML,CSS
- Frameworks used: None (Vanilla JavaScript)

- Libraries used: MediaPipe Hands,Web Speech API
- Tools used:VS Code,Git,GitHub,Live Serve 

**For Hardware:**
- Main components: Laptop with Webcam
- Specifications: Minimum 4GB RAM,Webcam support,Modern browser 

- Tools required: Internet connection,Browser
---

## Features

List the key features of your project:
- Feature 1: Real-Time Gesture Detection
             -Uses MediaPipe to detect and classify hand gestures instantly.
- Feature 2: Voice Output
             -Detected gestures are converted into speech using Web Speech API.
- Feature 3: Gesture History Panel
             -Displays the last 5 detected gestures for better user interaction.
- Feature 4: Emergency Alert System
             -One-click emergency button opens pre-filled emergency message.

---

## Implementation

### For Software:

#### Installation
```bash
no installation required
```

#### Run
```bash
-Open index.html using:
  -VS Code Live Server
    OR
  -Host on GitHub Pages
-Allow camera permission.
```

### For Hardware:

#### Components Required
[List all components needed with specifications]

#### Circuit Setup
[Explain how to set up the circuit]

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

<img width="1919" height="916" alt="website layout" src="https://github.com/user-attachments/assets/85b827ba-d129-444c-a053-7013b8ffc65d" />
The final Website layout.


<img width="543" height="117" alt="emergency alert message" src="https://github.com/user-attachments/assets/f8217be0-bc94-488d-bfd4-6de6ba69a3c0" />
Whatsapp message sent to a emergency contact in emergency alert mode.

<img width="1913" height="963" alt="gesture detection" src="https://github.com/user-attachments/assets/9035d32d-5d65-4212-a0ef-499a66ccdda7" />
Shows realtime hand tracking and gesture output.

#### Diagrams

**System Architecture:**

                ┌────────────────────┐
                │        User         │
                │   (Hand Gesture)    │
                └─────────┬──────────┘
                          │
                          ▼
                ┌────────────────────┐
                │     Webcam Input    │
                │ (Video Stream Feed) │
                └─────────┬──────────┘
                          │
                          ▼
                ┌────────────────────┐
                │   MediaPipe Hands   │
                │  (Landmark Detection)│
                └─────────┬──────────┘
                          │
                          ▼
                ┌────────────────────┐
                │ Gesture Detection   │
                │  Logic (JS Rules)   │
                └───────┬───────┬────┘
                        │       │
                        │       │
                        ▼       ▼
           ┌────────────────┐  ┌─────────────────┐
           │ Text Output UI │  │  Speech Engine  │
           │ (Display Card) │  │ (Web Speech API)│
           └────────────────┘  └─────────────────┘

                        │
                        ▼
                ┌────────────────────┐
                │ Emergency Button   │
                │  (User Trigger)    │
                └─────────┬──────────┘
                          ▼
                ┌────────────────────┐
                │ WhatsApp Redirect  │
                │ (Pre-filled Msg)   │
                └────────────────────┘
The system follows a client-side architecture:

The webcam captures real-time video.

MediaPipe Hands processes the video stream and detects 21 hand landmarks.

Custom JavaScript logic classifies gestures based on landmark positions.

Detected gestures are:

Displayed as text on UI

Converted into speech using Web Speech API

The emergency module allows quick distress message generation through WhatsApp.

The entire system runs in-browser without requiring a backend server.

**Application Workflow:**
![WhatsApp Image 2026-02-14 at 8 20 35 AM](https://github.com/user-attachments/assets/e2d7fd7d-7af3-47df-8b35-1c6a357c1947)


User shows hand gesture.

System detects hand using MediaPipe.

Landmark data is processed.

Gesture is classified using rule-based logic.

Output is displayed and spoken.

If emergency button is pressed:

Predefined message is generated

WhatsApp opens with auto-filled alert message

---


#### Build Photos

![Team]![WhatsApp Image 2026-02-14 at 8 01 37 AM](https://github.com/user-attachments/assets/d9730b80-3249-4663-a30d-14716145123d)


![Components](Add photo of your components here)
*List out all components shown*

![Build]<img width="1919" height="1079" alt="Screenshot 2026-02-14 020354" src="https://github.com/user-attachments/assets/5ec20c52-13a6-4734-8133-1920fcc4ee8b" />

![Final]<img width="1913" height="963" alt="gesture detection" src="https://github.com/user-attachments/assets/95f070ec-c629-41e7-884c-7ece71762916" />


---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

NA

##### Endpoints

**GET /api/endpoint**
- **Description:** [What it does]
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/endpoint**
- **Description:** [What it does]
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video

https://github.com/user-attachments/assets/95ad369c-2ef1-4a58-942f-7627b9cc655e
-Real-time gesture detection
-Voice output
-Emergency feature

### Additional Demos
https://connectai1.netlify.app/

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:
Tool Used: ChatGPT

Purpose:
-Debugging MediaPipe integration
-Improving gesture classification logic
-UI design improvements
-Code optimization

Key Prompts Used:
-"Fix MediaPipe camera integration error"
-"Improve gesture detection accuracy"
-"Steps to add emergency message system"

Approximate AI-generated Code: ~25%

Human Contributions:
-Full architecture design
-Gesture mapping logic
-UI layout design
-Testing & debugging
-Feature integration


*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contribution
Dhruva c:

Gesture detection logic

UI implementation

Emergency feature

Amritha Priya R S:

Testing
Documentation
UI improvements
Demo preparation

---

## License

This project is licensed under the MIT License 

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
