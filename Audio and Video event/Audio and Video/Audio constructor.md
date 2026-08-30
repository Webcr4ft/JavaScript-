# How Does the Audio Constructor Work?

## Introduction

* The `Audio` constructor is used to create an audio element in JavaScript.
* It is a special function called with the `new` keyword.
* The `Audio` constructor returns an `HTMLAudioElement`.
* You can then use this audio element to:
  * Play audio for the user.
  * Control audio playback with JavaScript.
  * Append the audio element to the DOM so the user can control it.

---

# The `Audio` Constructor

* The basic syntax is:

    const audio = new Audio();

* The `new` keyword creates a new instance of the `Audio` constructor.
* The result is an `HTMLAudioElement`.

### Example

    const audio = new Audio();

    console.log(audio);

---

# Passing a URL to the `Audio` Constructor

* When creating an `Audio` object, you can optionally pass a URL as the only argument.
* The URL should point to the audio file you want to play.

### Example

    const audio = new Audio("audio.mp3");

* In this example:
  * `new Audio()` creates the audio element.
  * `"audio.mp3"` specifies the source of the audio.
  * The audio element is stored in the `audio` variable.

---

# Changing the Audio Source with `src`

* If you need to change the audio source dynamically, you can assign a URL to the `src` property.

### Example

    const audio = new Audio();

    audio.src = "audio.mp3";

* The `src` property specifies the source of the audio file.

### Changing the Source

* You can also change the source later:

    audio.src = "another-audio.mp3";

* This allows your application to dynamically change which audio file is used.

---

# `play()` Method

* The `play()` method begins audio playback.
* It is one of the most commonly used methods when working with the `Audio` constructor.

### Example

    const audio = new Audio("audio.mp3");

    audio.play();

* `new Audio("audio.mp3")` creates an audio element with the specified audio file.
* `audio.play()` starts playing the audio.

---

# `pause()` Method

* The `pause()` method pauses audio playback.
* It does **not** reset the audio to the beginning.
* Instead, it preserves the current position in the audio track.
* Calling `play()` again resumes playback from the position where it was paused.

### Example

    const audio = new Audio("audio.mp3");

    audio.play();

    audio.pause();

* The audio stops playing at its current position.

### Resuming Playback

    audio.play();

* Calling `play()` again resumes the audio from the position where it was paused.

---

# There Is No `stop()` Method

* You might expect the `Audio` object to have a `stop()` method.
* However, there is no standard `stop()` method for the HTML audio element.
* If you want to stop the audio and return it to the beginning, you should:
  * Call `pause()`.
  * Set the `currentTime` property to `0`.

### Example

    const audio = new Audio("audio.mp3");

    audio.pause();

    audio.currentTime = 0;

* `audio.pause()` stops the playback.
* `audio.currentTime = 0` moves the playback position back to the beginning.

### Starting Again

    audio.play();

* Calling `play()` after resetting `currentTime` starts the audio from the beginning.

---

# `currentTime` Property

* The `currentTime` property represents the current playback position of the audio in seconds.

### Example

    const audio = new Audio("audio.mp3");

    audio.currentTime = 10;

* This moves the playback position to approximately 10 seconds into the audio.

### Resetting the Audio

    audio.currentTime = 0;

* Setting `currentTime` to `0` moves the audio back to the beginning.

---

# `canPlayType()` Method

* The `canPlayType()` method is used to determine whether a browser is likely to be able to play a specific audio format.
* It accepts a MIME type representing the audio format.

### Example

    const audio = new Audio();

    const result = audio.canPlayType("audio/mpeg");

    console.log(result);

* The browser returns a value indicating whether it can likely play the specified audio format.

### Possible Return Values

* `""` → The browser cannot play the format or does not know whether it can.
* `"maybe"` → The browser might be able to play the format.
* `"probably"` → The browser is likely able to play the format.

### Example

    const audio = new Audio();

    console.log(
      audio.canPlayType("audio/mpeg")
    );

---

# Common Audio Methods and Properties

| Method / Property | Purpose |
|---|---|
| `new Audio()` | Creates a new audio element |
| `src` | Specifies the audio file source |
| `play()` | Starts audio playback |
| `pause()` | Pauses playback while preserving the current position |
| `currentTime` | Gets or sets the current playback position |
| `canPlayType()` | Checks whether the browser is likely to support an audio format |

---

# Example: Basic Audio Controller

    const audio = new Audio("audio.mp3");

    // Start the audio
    audio.play();

    // Pause the audio
    audio.pause();

    // Move back to the beginning
    audio.currentTime = 0;

    // Start again
    audio.play();

---

# Key Things to Remember

* The `Audio` constructor is called using the `new` keyword.
* `new Audio()` returns an `HTMLAudioElement`.
* You can optionally provide an audio URL:

    const audio = new Audio("audio.mp3");

* You can also change the source using the `src` property:

    audio.src = "audio.mp3";

* `play()` starts audio playback.
* `pause()` pauses playback but remembers the current position.
* There is no standard `stop()` method.
* To stop and reset the audio:
  * Use `pause()`.
  * Set `currentTime` to `0`.

    audio.pause();
    audio.currentTime = 0;

* `currentTime` represents the current position of the audio in seconds.
* `canPlayType()` checks whether the browser is likely to support a particular audio format.
* `canPlayType()` can return:
  * `""`
  * `"maybe"`
  * `"probably"`

---

# Quick Review

* `new Audio()` → Creates an audio element.
* `new Audio("audio.mp3")` → Creates an audio element with an audio source.
* `audio.src` → Gets or changes the audio source.
* `audio.play()` → Starts playback.
* `audio.pause()` → Pauses playback.
* `audio.currentTime` → Gets or changes the playback position.
* `audio.currentTime = 0` → Resets the audio to the beginning.
* `audio.canPlayType()` → Checks whether the browser is likely to support an audio format.
