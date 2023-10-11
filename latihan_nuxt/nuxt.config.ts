export default {
  buildModules: ["@nuxtjs/tailwindcss"],
  pwa: {
    manifest: {
      name: "smkcoding",
      short_name: "smkcoding",
      theme_color: "#fff",
      background_color: "#fff",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "images/icons/icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "images/icons/icon-128x128.png",
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: "images/icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
      ],
    },
    dev: true, // Perhatikan bahwa ini adalah opsi "dev" daripada "devOptions"
  },
};
