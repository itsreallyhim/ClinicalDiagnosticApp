<template>
  <div class="grid sm:grid-cols-2 bg-white p-4 mt-2 rounded-sm shadow-sm">
    <div>
      <img :src="imagePath" :alt="question.title" />
    </div>
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
      <div v-else class="border-dashed border  flex">
        <label for="imageUpload" class="w-full">
          <img
            class="is-96x96"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACB0lEQVR4nO3cMU4VURyF8Q8oMDEhMbEjsbKg0YLexpLGFcgSdAmwBFyCroDG0sbehsbCioTOxMTERAoEG24k4IPHm7lz3sz9fskpNf+5p5CcEEFq2Vr6gI52gefAUfqQFj0FfgK/gK3wLc1ZB74AF5c5Ah5EL2rMO/49fslB9KKG7ADn3CzgHHgVvKsJm8B3bj5+yQ/gSey6iVsFPjH78Us+M/6f7pbSPnc/fsle5sTpegGcMX8Bf4CXkUsn6BFwzPyPX3ICPA7cOykrwCH3f/ySj5d/hxb0lsUfv+TN4FdPxDPgN90LOAW2B7599B4CX+n++CXfgI1Bv2DkPtDf45e8H/QLRmyX/h+/5PWA3zFKZWKuVYDT9S2uT8y14nQ9w/8m5lpxur5m1sRcK07XV9w1MdeK0zXzT8y10vx0vU/u8Uv2an/ksrrvxFwrTU7Xi07MtdLUdN11Yq6VZqbrPibmWpn8dN3XxFwrk56u+56Ya2Wy03WNiblWBpuux/CPzkXHP7/U37iaPqB1FhBmAWEWEGYBYRYQZgFhFhBmAWEWEGYBYRYQZgFhFhBmAWEWEGYBYRYQZgFhFhBmAWEWEGYBYRYQZgFhFhBmAWEWEGYBYRYQZgFhFhBmAWEWEGYBkiRJkiRJkiRJkiRVskL3/5dTHfhbEWEWEGYBYRYQZgFhFhBmAWF/AbmUlIb2SQ4UAAAAAElFTkSuQmCC"
          />

          <p>Drop your files here or click to upload</p>

          <input
            type="file"
            name="imageUpload"
            v-if="!image"
            @change="filesChange($event.target.name, $event.target.files)"
            accept="image/*"
          />
        </label>
        <button v-if="supportsCamera" @click="useCamera = true">
          Capture from camera instead
        </button>
        <button v-if="image" @click="image = null">Reset Image</button>
      </div>

      <img :src="image" />
    </div>
    {{ status }}
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
    dropFile: null,

    supportsCamera: false,
    useCamera: true,
  }),
  watch: {
    image() {
      this.$emit("image", this.image);
    },
    dropFile() {
      this.capture(this.dropFile);
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
      console.log(storage.child("question_images").child("posture_check"));
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
