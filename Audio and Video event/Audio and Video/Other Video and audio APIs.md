# Other Video and Audio APIs

## Introduction

* JavaScript provides several APIs for working with audio and video.
* Some important ones are:

  * **Screen Capture API**
  * **MediaStream Recording API**
  * **Media Source Extensions API**
  * **Web Audio API**

---

# 1. Screen Capture API

* The **Screen Capture API** allows a website to capture a user's screen.
* It can be used for things like screen sharing or recording.

* It uses:

    getDisplayMedia()

* `getDisplayMedia()` is available through `navigator.mediaDevices`.

### Example

    const stream =
      await navigator.mediaDevices.getDisplayMedia({
        video: true
      });

* The user is normally asked to choose what they want to share, such as a screen, window, or tab.
* The method returns a `MediaStream`.

### Simple Idea

    User's screen
        ↓
    getDisplayMedia()
        ↓
    MediaStream

---

# 2. MediaStream Recording API

* The **MediaStream Recording API** allows you to **record a MediaStream**.
* It works together with the MediaStream API.

* For example, you can:
  * Capture a webcam.
  * Capture a microphone.
  * Capture a screen.
  * Record the captured stream.

* The API uses the `MediaRecorder` object.

### Example

    const recorder = new MediaRecorder(stream);

    recorder.start();

* When data is available, the `dataavailable` event fires.

### Example

    recorder.addEventListener("dataavailable", (event) => {
      console.log(event.data);
    });

* The recorded data is provided as a **Blob**.

* A `Blob` is an object that represents raw data, such as recorded audio or video.

---

# 3. Media Source Extensions API

* The **Media Source Extensions API** allows JavaScript to work with media streams and provide media data to audio or video elements.

* It is part of the technology behind modern web media playback.

* You have already seen how a `MediaStream` can be connected directly to a video element using:

    video.srcObject = stream;

* This allows a live stream, such as a webcam feed, to appear inside a `<video>` element.

---

# 4. Web Audio API

* The **Web Audio API** is used to work with audio in web applications.
* It provides tools for creating, processing, and controlling audio.

* Two important objects are:

  * `AudioBuffer`
  * `AudioContext`

---

# `AudioBuffer`

* An `AudioBuffer` represents audio data stored in memory.
* It can contain audio that you want to play or process.

---

# `AudioContext`

* An `AudioContext` is used to manage and process audio.
* It provides the environment needed for working with Web Audio API features.

### Example

    const audioContext = new AudioContext();

---

# Quick Review

| API | Main Purpose |
|---|---|
| **Screen Capture API** | Captures the user's screen |
| **MediaStream Recording API** | Records audio/video streams |
| **Media Source Extensions** | Helps provide media data for playback |
| **Web Audio API** | Creates and processes audio |

---

# Key Things to Remember

* `getDisplayMedia()` → Captures the user's screen.
* `MediaRecorder` → Records a `MediaStream`.
* `dataavailable` → Fires when recorded data becomes available.
* `Blob` → Represents the recorded data.
* `Media Source Extensions` → Provides tools for working with media data and playback.
* `Web Audio API` → Provides powerful tools for working with audio.
* `AudioBuffer` → Represents stored audio data.
* `AudioContext` → Manages and processes audio.

---

# The Big Picture

    Camera / Microphone
          ↓
    MediaStream API
          ↓
    MediaRecorder
          ↓
    Recorded audio/video

    Screen
       ↓
    getDisplayMedia()
       ↓
    MediaStream

    Audio
       ↓
    Web Audio API
       ↓
    AudioContext / AudioBuffer
