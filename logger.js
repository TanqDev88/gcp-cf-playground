export default {
  info: (msg, data) => {
    console.log(`[INFO] ${msg}`, data ?? "");
  },

  debug: (msg, data) => {
    console.log(`[DEBUG] ${msg}`, data ?? "");
  },

  warn: (msg, data) => {
    console.warn(`[WARN] ${msg}`, data ?? "");
  },

  error: (msg, data) => {
    console.error(`[ERROR] ${msg}`, data ?? "");
  }
};
