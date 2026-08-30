# What Is the HTMLMediaElement API?

## What Is It?

* The **HTMLMediaElement API** is a JavaScript API used to control **audio and video** elements on a web page.
* It gives you properties, methods, and events that let you control how media behaves.

* It works with elements such as:

    <audio>

    <video>

* Since it extends the `HTMLElement` interface, you can also use the normal properties and methods available to HTML elements.

---

# Common Methods

## `play()`

* Starts the audio or video.

    media.play();

---

## `pause()`

* Pauses the audio or video.
* The current playback position is preserved.

    media.pause();

* Calling `play()` again continues from that position.

---

## `addTextTrack()`

* Adds a **text track** to a media element.
* This is especially useful for adding **subtitles or captions** to videos.

    video.addTextTrack("subtitles");

---

## `fastSeek()`

* Moves the playback position to a specific time in the media.

    video.fastSeek(30);

* This attempts to move the video to around **30 seconds**.

---

# Media Events

* The HTMLMediaElement API also provides events that let you know what is happening with the audio or video.

---

## `play` Event

* Fires when the media starts playing.

    media.addEventListener("play", () => {
      console.log("Media started playing");
    });

---

## `pause` Event

* Fires when the media is paused.

    media.addEventListener("pause", () => {
      console.log("Media paused");
    });

---

## `ended` Event

* Fires when the media reaches the end.

    media.addEventListener("ended", () => {
      console.log("Media finished");
    });

---

## `waiting` Event

* Fires when playback has to wait for more data, usually because the media is **buffering**.

    media.addEventListener("waiting", () => {
      console.log("Buffering...");
    });

---

## `canplay` Event

* Fires when enough data has loaded for the media to start playing.

    media.addEventListener("canplay", () => {
      console.log("Media can play");
    });

---

## `canplaythrough` Event

* Fires when the browser estimates that the media can play through without needing to stop for buffering.

    media.addEventListener("canplaythrough", () => {
      console.log("Media can play through");
    });

---

# Simple Example

    const video = document.querySelector("video");

    video.addEventListener("play", () => {
      console.log("Video started");
    });

    video.addEventListener("pause", () => {
      console.log("Video paused");
    });

    video.addEventListener("ended", () => {
      console.log("Video ended");
    });

* Here, JavaScript listens for different events and responds when they happen.

---

# Quick Review

| Method / Event | What It Does |
|---|---|
| `play()` | Starts the media |
| `pause()` | Pauses the media |
| `addTextTrack()` | Adds subtitles/captions or another text track |
| `fastSeek()` | Moves to a specific playback time |
| `play` | Fires when media starts playing |
| `pause` | Fires when media is paused |
| `ended` | Fires when media reaches the end |
| `waiting` | Fires when media is waiting for more data |
| `canplay` | Media has enough data to start playing |
| `canplaythrough` | Media is likely able to play without buffering |

---

# Key Things to Remember

* `HTMLMediaElement` helps JavaScript control `<audio>` and `<video>`.
* `play()` starts media.
* `pause()` pauses media.
* `fastSeek()` changes the playback position.
* `addTextTrack()` can be used for subtitles and captions.
* Media events allow your JavaScript to react to what happens during playback.
* Important events include:
  * `play`
  * `pause`
  * `ended`
  * `waiting`
  * `canplay`
  * `canplaythrough`

### Main Idea

    HTMLMediaElement
          ↓
    Controls audio/video
          ↓
    Methods + Properties + Events
          ↓
    More control over media on your website
