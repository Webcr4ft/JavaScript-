# What Are Codecs and How Do They Work?

## What Is a Codec?

* A **codec** is short for **encoder/decoder**.
* It is software or an algorithm used to **encode and decode audio or video**.
* In simple terms, a codec helps convert media between different forms so it can be stored, transmitted, and played.

---

# Codecs in MIME Types

* A codec can be included as part of a MIME type.
* The basic syntax is:

    media-type; codecs=codec

### Example

* An OGG audio file using the Vorbis codec:

    audio/ogg; codecs=vorbis

* If a file uses multiple codecs, separate them with commas and put them inside quotes.

### Example

    video/webm; codecs="vp8, vorbis"

* Here:
  * `video/webm` → The media format.
  * `vp8` → Video codec.
  * `vorbis` → Audio codec.

---

# More Complicated Codec Names

* Some formats use more complicated codec identifiers.

### Example

    video/mp4; codecs="avc1.4d002a"

* `avc1.4d002a` identifies a specific H.264 encoding.

* You don't always need to understand the entire codec string. The important idea is that it tells the browser **exactly which codec the media uses**.

---

# Using Codecs with `<source>`

* You can include codecs in the `type` attribute of a `<source>` element.
* This gives the browser more information about the media it is being offered.

### Example

    <video controls>
      <source
        src="video.webm"
        type='video/webm; codecs="vp8, vorbis"'
      >

      <source
        src="video.mp4"
        type='video/mp4; codecs="avc1.4d002a"'
      >
    </video>

* This allows the browser to make a more informed decision about which source it can play.

---

# `MediaSource.isTypeSupported()`

* JavaScript also provides:

    MediaSource.isTypeSupported()

* This method checks whether the current environment is likely to support a specific MIME type and codec combination.
* It returns:
  * `true` → The browser is likely to support it.
  * `false` → The browser does not appear to support it.

### Example

    const supported = MediaSource.isTypeSupported(
      'video/webm; codecs="vp8, vorbis"'
    );

    console.log(supported);

* This allows you to check media support **programmatically** instead of simply letting the browser choose a source.

---

# Simple Way to Understand It

* Think of it like this:

    Format
    ↓
    What type of media container is it?

    Codec
    ↓
    How is the audio/video encoded?

    MIME type + codec
    ↓
    Gives the browser detailed information about the media.

### Example

    video/webm; codecs="vp8, vorbis"

* `video/webm` → Format/container.
* `vp8` → Video codec.
* `vorbis` → Audio codec.

---

# Key Things to Remember

* **Codec** means **encoder/decoder**.
* Codecs are used to encode and decode audio and video.
* Codecs can be specified inside MIME types.
* Multiple codecs are separated by commas and surrounded by quotes.
* Codecs can be included in a `<source>` element's `type` attribute.
* `MediaSource.isTypeSupported()` can be used to check whether a browser is likely to support a particular MIME type and codec.
