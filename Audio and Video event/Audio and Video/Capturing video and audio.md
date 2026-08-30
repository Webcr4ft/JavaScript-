# How Can You Capture Video and Audio from a Local Device?

## What Is the MediaStream API?

* The **Media Capture and Streams API**, also called the **MediaStream API**, allows a website to capture audio and video from a user's device.

* For example, it can access:
  * 🎤 Microphone → Audio
  * 📷 Camera → Video

* Instead of simply playing media, you can use this API to **capture media from the user's device**.

---

# `getUserMedia()`

* To access the user's camera or microphone, you use:

    navigator.mediaDevices.getUserMedia()

* This method asks the user for permission to access their device.

* If the user allows access, it returns a `MediaStream` containing the requested audio and/or video.

---

# The `constraints` Object

* `getUserMedia()` accepts a **constraints object**.
* This object tells the browser what you want to capture.

### Basic Example

    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true
    });

* `audio: true` → Request microphone access.
* `video: true` → Request camera access.

---

# Using `false`

* You can set `audio` or `video` to `false` if you don't need it.

### Video Only

    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true
    });

* This requests the camera but not the microphone.

### Audio Only

    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });

* This requests the microphone but not the camera.

---

# Using Video Constraints

* You can provide an object instead of simply using `true`.
* This allows you to specify things such as the desired video resolution.

### Example

    navigator.mediaDevices.getUserMedia({
      audio: true,

      video: {
        width: {
          min: 1280,
          ideal: 1920,
          max: 3840
        },

        height: {
          min: 720,
          ideal: 1080,
          max: 2160
        }
      }
    });

---

# Understanding `min`, `ideal`, and `max`

* These properties describe the video resolution you want.

### `min`

* The minimum resolution you are willing to accept.

    min: 1280

* The browser should not go below this value if possible.

### `ideal`

* The resolution you would **prefer** to receive.

    ideal: 1920

* The browser tries to provide something close to this value.

### `max`

* The maximum resolution you want.

    max: 3840

* The browser should not go above this value.

### Simple Way to Remember

    min   → Don't go below this
    ideal → This is what I prefer
    max   → Don't go above this

---

# The Permission Request

* `getUserMedia()` requires the user's permission before accessing the camera or microphone.

* The browser will normally show a permission request such as:

    "Allow this website to use your camera and microphone?"

* If the user allows access, the website receives the `MediaStream`.

* If the user denies access, the request will fail.

---

# `getUserMedia()` Returns a Promise

* `getUserMedia()` is **asynchronous**.
* It returns a `Promise`.

* This means you can use:
  * `async/await`
  * `.then()` and `.catch()`

### Using `async/await`

    const stream =
      await navigator.mediaDevices.getUserMedia({
        video: true
      });

* After the request succeeds, `stream` contains the user's video stream.

---

# Displaying the Camera on a Web Page

* You can display the camera feed inside a `<video>` element.

### HTML

    <video></video>

### JavaScript

    const video = document.querySelector("video");

    const stream =
      await navigator.mediaDevices.getUserMedia({
        video: true
      });

    video.srcObject = stream;

    await video.play();

---

# Understanding the Example

    const video = document.querySelector("video");

* Finds the `<video>` element on the page.

---

    const stream =
      await navigator.mediaDevices.getUserMedia({
        video: true
      });

* Requests access to the user's camera.
* `await` waits for the user/device response.
* The returned `MediaStream` is stored in `stream`.

---

    video.srcObject = stream;

* Connects the camera stream to the `<video>` element.

---

    await video.play();

* Starts playing the camera feed inside the video element.

---

# Complete Example

    <video autoplay></video>

    <script>
      const video = document.querySelector("video");

      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: true
        });

      video.srcObject = stream;

      await video.play();
    </script>

* The result is a live camera feed displayed on the webpage.

---

# Important Limitation

* The MediaStream API does **not** provide screen capture through `getUserMedia()`.

* `getUserMedia()` is mainly used for things like:

    Camera + Microphone
          ↓
    MediaStream
          ↓
    Website uses the stream

* Screen sharing uses a different API.

---

# Quick Review

| Concept | Meaning |
|---|---|
| `MediaStream` | Represents a stream of audio/video data |
| `navigator.mediaDevices` | Provides access to media device features |
| `getUserMedia()` | Requests access to the camera/microphone |
| `audio: true` | Requests microphone audio |
| `video: true` | Requests camera video |
| `audio: false` | Doesn't request audio |
| `video: false` | Doesn't request video |
| `min` | Minimum acceptable value |
| `ideal` | Preferred value |
| `max` | Maximum acceptable value |
| `srcObject` | Connects a media stream to an element |
| `async/await` | Handles the Promise returned by `getUserMedia()` |

---

# Key Things to Remember

* The **MediaStream API** lets websites capture audio and video from a user's device.
* `getUserMedia()` is used to request access to the camera and microphone.
* The user must give permission.
* `audio` controls microphone access.
* `video` controls camera access.
* `true` requests the media.
* `false` means you don't want that media.
* An object can be used to specify additional constraints.
* `getUserMedia()` returns a `Promise`.
* The returned `MediaStream` can be assigned to a video's `srcObject`.
* `getUserMedia()` is **not** used for screen capture.
