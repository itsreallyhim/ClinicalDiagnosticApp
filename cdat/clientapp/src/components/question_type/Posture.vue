<template>
  <div class="grid p-4 mt-2 bg-white rounded-sm shadow-sm sm:grid-cols-2">
    <svg
      v-if="imagePath == ''"
      class="self-center justify-self-center"
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="64"
      height="64"
      viewBox="0 0 128 128"
    >
      <g>
        <circle cx="16" cy="64" r="16" />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#555"
          fill-opacity=".67"
          transform="rotate(45 64 64)"
        />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#949494"
          fill-opacity=".42"
          transform="rotate(90 64 64)"
        />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#ccc"
          fill-opacity=".2"
          transform="rotate(135 64 64)"
        />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#e1e1e1"
          fill-opacity=".12"
          transform="rotate(180 64 64)"
        />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#e1e1e1"
          fill-opacity=".12"
          transform="rotate(225 64 64)"
        />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#e1e1e1"
          fill-opacity=".12"
          transform="rotate(270 64 64)"
        />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#e1e1e1"
          fill-opacity=".12"
          transform="rotate(315 64 64)"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64"
          calcMode="discrete"
          dur="720ms"
          repeatCount="indefinite"
        />
      </g>
    </svg>
    <img
      v-else
      :src="imagePath"
      :alt="question.title"
      class="self-center h-72 justify-self-center"
    />

    <div>
      <div v-if="supportsCamera && useCamera" class="border-dashed">
        <vue-camera
          ref="camera"
          capture="photo"
          v-on:onReady="capture"
          v-if="!image"
        ></vue-camera>
        <button @click.prevent="useCamera = false">
          Upload an image instead
        </button>
        <button @click.prevent="resetCamera" v-if="image">Retry photo</button>
      </div>

      <label
        v-else-if="image === null && !supportsCamera"
        for="imageUpload"
        class="flex flex-col items-center content-center w-full h-full p-6 border-4 border-dashed rounded-lg"
      >
        <img
          class="mb-4"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACB0lEQVR4nO3cMU4VURyF8Q8oMDEhMbEjsbKg0YLexpLGFcgSdAmwBFyCroDG0sbehsbCioTOxMTERAoEG24k4IPHm7lz3sz9fskpNf+5p5CcEEFq2Vr6gI52gefAUfqQFj0FfgK/gK3wLc1ZB74AF5c5Ah5EL2rMO/49fslB9KKG7ADn3CzgHHgVvKsJm8B3bj5+yQ/gSey6iVsFPjH78Us+M/6f7pbSPnc/fsle5sTpegGcMX8Bf4CXkUsn6BFwzPyPX3ICPA7cOykrwCH3f/ySj5d/hxb0lsUfv+TN4FdPxDPgN90LOAW2B7599B4CX+n++CXfgI1Bv2DkPtDf45e8H/QLRmyX/h+/5PWA3zFKZWKuVYDT9S2uT8y14nQ9w/8m5lpxur5m1sRcK07XV9w1MdeK0zXzT8y10vx0vU/u8Uv2an/ksrrvxFwrTU7Xi07MtdLUdN11Yq6VZqbrPibmWpn8dN3XxFwrk56u+56Ya2Wy03WNiblWBpuux/CPzkXHP7/U37iaPqB1FhBmAWEWEGYBYRYQZgFhFhBmAWEWEGYBYRYQZgFhFhBmAWEWEGYBYRYQZgFhFhBmAWEWEGYBYRYQZgFhFhBmAWEWEGYBYRYQZgFhFhBmAWEWEGYBkiRJkiRJkiRJkiRVskL3/5dTHfhbEWEWEGYBYRYQZgFhFhBmAWF/AbmUlIb2SQ4UAAAAAElFTkSuQmCC"
        />

        <p class="mb-4">Click to upload</p>

        <input
          type="file"
          class="w-full"
          name="imageUpload"
          v-if="!image"
          @change.passive="dropFile"
          accept="image/*"
        />
      </label>
      <img :src="image" />
      <button v-if="supportsCamera" @click="useCamera = true">
        Capture from camera instead
      </button>
      <button
        v-if="image"
        @click="image = null"
        class="px-4 py-1 my-2 text-xs rounded-sm shadow-xs bg-cool-gray-200"
      >
        Reset Image
      </button>
    </div>
  </div>
</template>

<script>
import storage from "@/storage";
import VueCamera from "@mrjeffapp/vuejs-camera";
import { mapGetters } from "vuex";

export default {
 
  name: "posture",
  components: {
    VueCamera,
  },
  props: {
    question: {
      Object,
      default: () => ({}),
    },
  },
  data: () => ({
    imagePath: "",
    image: null,
    status: "Please Capture or Upload an Image",
    dropFileBlob: null,
    supportsCamera: false,
    useCamera: true,
  }),
  watch: {
    image() {
      
      // Upload file
      // Set mutation for response
    },
  },
  mounted() {
    this.hasCamera();
    this.getImage();
  },
  computed: {
    ...mapGetters("auth", ["user"]),
  },
  methods: {
    dropFile(event) {
      this.dropFileBlob = event.target.files[0];
      console.log(this.dropFileBlob);
      this.capture(this.dropFileBlob);
    },
    async hasCamera() {
      let devices = await navigator.mediaDevices
        .enumerateDevices()
        .then((devives) => devives);

      let result = devices.reduce(
        (agg, item) =>
          item.kind === "videoinput" || agg == true ? true : false,
        false
      );
      this.supportsCamera = result;
    },
    capture(blob) {
      var reader = new FileReader();
      let self = this;
      reader.onloadend = function() {
        self.image = reader.result;
      };
      reader.readAsDataURL(blob);
    },
    resetCamera() {
      this.image = null;
      this.$refs.camera.resetStream();
    },
    uploadImage() {
      let imageRef = storage
        .child("posture_image")
        .child(this.user.id)
        .child("testImage");
      let imageUpload = imageRef.put(this.image);

      imageUpload.on(
        "state_changed",
        (snapshot) => {
          this.status = `${(snapshot.bytesTransferred / snapshot.totalBytes) *
            100}% uploaded`;
        },
        (error) => {
          this.status = "Upload Error" + JSON.stringify(error);
        },
        () => {
          this.status = "Upload Complete";
        }
      );
    },
    async getImage() {
      let imageRef = storage
        .child("question_images")
        .child("posture_check")
        .child(this.question.image);

      imageRef.getDownloadURL().then((url) => (this.imagePath = url));
    },
  },
};
</script>

<style></style>
