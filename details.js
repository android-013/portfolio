const lines = [
  "💻 This site was developed by Aziz Rifat",
  "📧 Email: azrifat013@gmail.com",
  "📱 Phone & WhatsApp: +880-176644-2805",
  "🌐 Website: https://aziz-rifat.website",
  "🚀 Feel free to reach out anytime!"
];

const style = [
  "color: #fff",
  "font-size: 15px",
  "font-family: 'Fira Mono', monospace",
  "background: linear-gradient(90deg, #0ff 0%, #00f 100%)",
  "padding: 10px 18px",
  "border-radius: 8px",
  "box-shadow: 0 2px 8px rgba(0,255,255,0.15)",
  "margin: 6px 0",
  "display: inline-block"
].join(";");

let i = 0;

function typeLine() {
  if (i < lines.length) {
    console.log(`%c${lines[i]}`, style);
    i++;
    setTimeout(typeLine, 600); // delay between lines
  }
}

typeLine();
