/** @type {Detox.DetoxConfig} */
module.exports = {
  // ...
  devices: {
    simulator: {
      type: "ios.simulator",
      device: {
        type: "iPhone 12",
      },
    },
    attached: {
      type: "android.attached",
      device: {
        adbName: ".*", // any attached device
      },
    },
    emulator: {
      type: "android.emulator",
      device: {
        avdName: "Pixel_3a_API_30_x86",
      },
    },
  },
};
