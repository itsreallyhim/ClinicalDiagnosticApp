<template>
  <div>
    <div v-if="supportsCamera && useCamera" class="cameraContainer">
      <VueCamera
        ref="camera"
        capture="photo"
        v-on:onReady="capture"
        v-if="!image"
      />
      <b-button @click="useCamera = false">Upload an image instead</b-button>
      <b-button @click="resetCamera" v-if="image">Retry photo</b-button>
    </div>
    <div v-else>
      <b-upload v-model="dropFiles" multiple drag-drop class="imgUpload">
        <section class="section">
          <div class="content has-text-centered ">
            <p>
              <img
                class="is-96x96"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACB0lEQVR4nO3cMU4VURyF8Q8oMDEhMbEjsbKg0YLexpLGFcgSdAmwBFyCroDG0sbehsbCioTOxMTERAoEG24k4IPHm7lz3sz9fskpNf+5p5CcEEFq2Vr6gI52gefAUfqQFj0FfgK/gK3wLc1ZB74AF5c5Ah5EL2rMO/49fslB9KKG7ADn3CzgHHgVvKsJm8B3bj5+yQ/gSey6iVsFPjH78Us+M/6f7pbSPnc/fsle5sTpegGcMX8Bf4CXkUsn6BFwzPyPX3ICPA7cOykrwCH3f/ySj5d/hxb0lsUfv+TN4FdPxDPgN90LOAW2B7599B4CX+n++CXfgI1Bv2DkPtDf45e8H/QLRmyX/h+/5PWA3zFKZWKuVYDT9S2uT8y14nQ9w/8m5lpxur5m1sRcK07XV9w1MdeK0zXzT8y10vx0vU/u8Uv2an/ksrrvxFwrTU7Xi07MtdLUdN11Yq6VZqbrPibmWpn8dN3XxFwrk56u+56Ya2Wy03WNiblWBpuux/CPzkXHP7/U37iaPqB1FhBmAWEWEGYBYRYQZgFhFhBmAWEWEGYBYRYQZgFhFhBmAWEWEGYBYRYQZgFhFhBmAWEWEGYBYRYQZgFhFhBmAWEWEGYBYRYQZgFhFhBmAWEWEGYBkiRJkiRJkiRJkiRVskL3/5dTHfhbEWEWEGYBYRYQZgFhFhBmAWF/AbmUlIb2SQ4UAAAAAElFTkSuQmCC"
              />
            </p>
            <p>Drop your files here or click to upload</p>
          </div>
        </section>
      </b-upload>
      <b-button v-if="supportsCamera" @click="useCamera = true"
        >Capture from camera instead</b-button
      >
    </div>

    <img :src="image" />
  </div>
</template>

<script>
// import { WebCam } from "vue-web-cam";
import VueCamera from "@mrjeffapp/vuejs-camera";

export default {
  components: { VueCamera },
  data() {
    return {
      dropFiles: null,
      image: null,
      supportsCamera: false,
      useCamera: true,
    };
  },
  watch: {
    image() {
      this.$emit("image", this.image);
    },
  },
  mounted() {
    this.hasCamera();
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
  },
};
</script>

<style scoped>
.imgUpload,
.imgUpload > div {
  width: 450px;
  height: 450px;
  align-items: center;
  justify-content: center;
  display: flex;
}
@media (max-width: 450px) {
  .imgUpload,
  .imgUpload > div {
    width: 100%;
    height: auto;
  }
}

.cameraContainer {
  display: flex;
  flex-direction: column;
}
.cameraContainer > * {
  width: 100%;
}
</style>
