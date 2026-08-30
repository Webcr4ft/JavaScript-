# Video and Audio Formats

## What Are Audio and Video Formats?

* Audio and video files can be saved in different **formats**.

* Some common formats are:

  * `MP3` → Audio
  * `MP4` → Usually video
  * `MOV` → Audio and video
  * `WebM` → Audio and video for the web
  * `WAV` → Audio
  * `OGG` → Audio and video
  * `WMV` → Video
  * `MKV` → Audio and video

* Think of a format as a **way of storing media in a file**.

* For example:

    song.mp3

* The `.mp3` tells you that the file is an MP3 audio file.

---

# What Is a MIME Type?

* A **MIME type** tells a program, such as a web browser, what type of file it is dealing with.

* Think of it like a **label on a file**.

* For example:

    text/html

* This tells the browser:

    "This is an HTML file."

* Another example:

    application/json

* This tells the browser:

    "This is a JSON file."

* An `.exe` file can have a MIME type such as:

    application/vnd.microsoft.portable-executable

---

# Why Do We Need MIME Types?

* A browser needs to know what kind of file it has received so it knows how to handle it.

* For example:

    audio/mpeg

* tells the browser:

    "This is an audio file."

* While:

    video/mp4

* tells the browser:

    "This is an MP4 video."

---

# Audio MIME Types

## MP3

* MP3 is a common audio format.

* Its MIME type is:

    audio/mpeg

* So:

    audio/mpeg

* basically tells the browser:

    "This is MP3 audio."

---

# MP4 MIME Types

* MP4 can be used for both video and audio-only files.

## MP4 Video

* An MP4 video uses:

    video/mp4

* This tells the browser:

    "This is an MP4 video."

## MP4 Audio

* An MP4 file containing only audio can use:

    audio/mp4

* Therefore:

  * `video/mp4` → MP4 video
  * `audio/mp4` → MP4 audio

---

# Common Media Formats

## `MP3`

* Used mainly for audio.

    audio/mpeg

---

## `MP4`

* Commonly used for video.
* Can also contain audio.

    video/mp4

---

## `MOV`

* A multimedia format commonly associated with Apple and QuickTime.
* Can contain audio and video.

---

## `WebM`

* A multimedia format designed mainly for the web.
* Commonly used for web audio and video.

---

## `WAV`

* An audio format.
* Often used when high-quality audio is important.

---

## `OGG`

* An open multimedia format.
* Can be used for audio and video.

---

## `WMV`

* A video format developed by Microsoft.
* WMV stands for **Windows Media Video**.

---

## `MKV`

* MKV stands for **Matroska Video**.
* It is a multimedia container format.
* It can contain:
  * Video
  * Audio
  * Subtitles
  * Other data

---

# Why Are There Different Formats?

* Different formats have different advantages and disadvantages.

* They can differ in:

  * File size
  * Quality
  * Compression
  * Browser support
  * Device support

* For example, one browser might support a particular format while another browser might not.

* This creates a problem when building websites.

---

# The Browser Compatibility Problem

* Imagine you have a video:

    video.mp4

* You put it on your website.

* But what if a user's browser does not support that particular format?

* The video might not play correctly.

* You could try to guess which format every browser supports, but that would be difficult.

* Luckily, HTML provides a simple solution:

    <source>

---

# The `<source>` Element

* The `<source>` element allows you to provide different versions of the same audio or video.

* You can tell the browser:

    "Here are several versions. Use one that you can play."

---

# Using `<source>` With Video

### Example

    <video controls>
      <source src="video.mp4" type="video/mp4">
      <source src="video.webm" type="video/webm">
    </video>

* Here we provide two versions of the same video:

    video.mp4

* and:

    video.webm

* The `type` tells the browser what format each file uses.

* The browser checks the available sources and uses a format it supports.

---

# Using `<source>` With Audio

### Example

    <audio controls>
      <source src="audio.mp3" type="audio/mpeg">
      <source src="audio.ogg" type="audio/ogg">
    </audio>

* Here we provide two versions of the same audio:

    audio.mp3

* and:

    audio.ogg

* The browser can choose a suitable format.

---

# Understanding `src`

* The `src` attribute tells the browser **where the media file is located**.

### Example

    <source src="video.mp4">

* Here:

    src="video.mp4"

* means:

    "The video file is called `video.mp4` and it is located at this path."

---

# Understanding `type`

* The `type` attribute tells the browser **what type of media file it is**.

### Example

    <source
      src="video.mp4"
      type="video/mp4"
    >

* Here:

  * `src` → Where the file is.
  * `type` → What kind of file it is.

---

# Why Use Multiple `<source>` Elements?

* Multiple sources make your website more compatible with different browsers.

* For example:

    <video controls>
      <source src="video.mp4" type="video/mp4">
      <source src="video.webm" type="video/webm">
    </video>

* You are basically giving the browser different choices.

* Think of it like this:

    You provide:
    MP4
    WebM

    ↓

    Browser checks the formats

    ↓

    Browser chooses a format it can use

---

# A Simple Real-World Example

* Imagine you are giving someone a video.

* You have:

    video.mp4

    video.webm

* You don't know which format their browser supports.

* Instead of choosing only one, you give the browser both:

    <video controls>
      <source src="video.mp4" type="video/mp4">
      <source src="video.webm" type="video/webm">
    </video>

* The browser decides which source it can use.

* This means you don't have to manually figure out which format every user needs.

---

# `controls`

* You will often see `controls` inside `<audio>` or `<video>`.

### Example

    <video controls>

* `controls` tells the browser to show playback controls.

* These can include:

  * Play
  * Pause
  * Volume
  * Progress bar
  * Fullscreen

---

# Complete Video Example

    <video controls>
      <source src="video.mp4" type="video/mp4">
      <source src="video.webm" type="video/webm">
    </video>

* `video` → Creates the video player.
* `controls` → Shows the video controls.
* `<source>` → Provides a video file.
* `src` → Specifies the file location.
* `type` → Specifies the file's MIME type.

---

# Complete Audio Example

    <audio controls>
      <source src="audio.mp3" type="audio/mpeg">
      <source src="audio.ogg" type="audio/ogg">
    </audio>

* `audio` → Creates the audio player.
* `controls` → Shows the audio controls.
* `<source>` → Provides an audio file.
* `src` → Specifies the file location.
* `type` → Specifies the MIME type.

---

# Quick Comparison

| Term | Simple Meaning |
|---|---|
| `MP3` | Audio format |
| `MP4` | Common video format |
| `MOV` | Audio/video format |
| `WebM` | Web audio/video format |
| `WAV` | Audio format |
| `OGG` | Audio/video format |
| `WMV` | Video format |
| `MKV` | Multimedia format |
| MIME type | Tells the browser what type of file it is |
| `src` | Tells the browser where the file is |
| `type` | Tells the browser what format the file is |
| `<source>` | Provides a media file to `<audio>` or `<video>` |

---

# Important MIME Types

| File | MIME Type |
|---|---|
| MP3 | `audio/mpeg` |
| MP4 Video | `video/mp4` |
| MP4 Audio | `audio/mp4` |
| WAV | `audio/wav` |
| OGG Audio | `audio/ogg` |
| WebM Audio | `audio/webm` |
| WebM Video | `video/webm` |

---

# Key Things to Remember

* A **format** is a way of storing audio or video.
* `MP3`, `MP4`, `MOV`, and `WebM` are examples of media formats.
* A **MIME type** tells the browser what kind of file it is.
* `audio/mpeg` means MP3 audio.
* `video/mp4` means MP4 video.
* `audio/mp4` means MP4 audio.
* The `<source>` element allows you to provide multiple versions of the same media.
* `src` tells the browser where the media file is located.
* `type` tells the browser what format the media uses.
* Providing multiple sources helps your website work across different browsers and devices.

---

# The Main Idea

* The most important thing to understand is:

    Format
    ↓
    Tells you how the media is stored

    MIME Type
    ↓
    Tells the browser what type of file it is

    <source>
    ↓
    Gives the browser a media file

    Multiple <source> elements
    ↓
    Give the browser different formats to choose from

### Example

    <video controls>
      <source src="video.mp4" type="video/mp4">
      <source src="video.webm" type="video/webm">
    </video>

* In simple terms:

    "Browser, here are different versions of my video.
    Use one that you can play."
