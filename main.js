fetch(
  "https://raw.githubusercontent.com/FunnelAI/Chat_widget_build/master/build/asset-manifest.json",
  {
    cache: "no-cache",
  }
).then((res) => {
  res.text().then((d) => {
    const files = JSON.parse(d);
    const mainChunk = document.createElement("script");
    mainChunk.src = `https://cdn.jsdelivr.net/gh/FunnelAI/Chat_widget_build/build${files.files["main.js"]}`;
    document.head.appendChild(mainChunk);
    const mainChunkCss = document.createElement("link");
    mainChunkCss.href = `https://cdn.jsdelivr.net/gh/FunnelAI/Chat_widget_build/build${files.files["main.css"]}`;
    mainChunkCss.rel = "stylesheet";
    document.head.appendChild(mainChunkCss);
    const react = document.createElement("script");
    react.src = "https://unpkg.com/react@18.2.0/umd/react.production.min.js";
    document.body.appendChild(react);
    const react_dom = document.createElement("script");
    react_dom.src =
      "https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js";
    document.body.appendChild(react_dom);
  });
});
