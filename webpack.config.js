const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production", // Üretim modu
  entry: "./src/components/Timeline/Timeline.js", // Ana giriş dosyası
  output: {
    path: path.resolve(__dirname, "dist"), // Çıkış klasörü
    filename: "Timeline.js", // Ana çıkış dosyası
    library: "AkfaTimeline", // Kütüphane adı
    libraryTarget: "umd", // Evrensel modül formatı
    globalObject: "this",
  },
  resolve: {
    extensions: [".js", ".jsx"], // Çözülebilecek dosya türleri
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // JavaScript ve JSX dosyaları için
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // CSS dosyaları için
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: false, // Terser'i devre dışı bırakıyoruz
  },
  externals: {
    react: "react", // React ve ReactDOM'u dışa bırak
    "react-dom": "react-dom",
  },
  plugins: [
    // Gerekli dosyaları dist klasörüne kopyala
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/components/Timeline", to: "components/Timeline" },
        { from: "src/hooks", to: "hooks" },
        { from: "src/utils", to: "utils" },
      ],
    }),
  ],
};
