const path = require("path");

module.exports = {
  entry: "./src/components/Timeline/Timeline.js", // Giriş dosyası
  output: {
    path: path.resolve(__dirname, "dist"), // Çıkış dizini
    filename: "Timeline.js", // Çıkış dosyası
    library: "AkfaTimeline", // Paket ismi
    libraryTarget: "umd", // Evrensel modül formatı
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};
