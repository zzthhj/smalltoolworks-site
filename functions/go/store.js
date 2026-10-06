// One App Store link for every visitor. The country in the URL must already
// match the visitor: Apple's edge otherwise replaces the whole path with the
// local store home, which is the Today tab.

export const APPS = {
  omnipdf: {
    id: "6779046820",
    cn: "https://apps.apple.com/cn/app/omnipdf-%E6%99%BA%E8%83%BD%E6%89%B9%E9%87%8Fpdf%E5%A4%84%E7%90%86%E5%B7%A5%E5%85%B7/id6779046820",
  },
  sizefixer: {
    id: "6770793232",
    cn: "https://apps.apple.com/cn/app/sizefixer-%E6%89%B9%E9%87%8F%E5%9B%BE%E7%89%87%E5%B7%A5%E5%85%B7/id6770793232",
  },
  seeclear: {
    id: "6760174601",
    cn: "https://apps.apple.com/cn/app/seeclear-%E8%89%B2%E7%9B%B2%E8%89%B2%E5%BC%B1%E5%8A%A9%E6%89%8B/id6760174601",
  },
  nativeid: {
    id: "6759086815",
    cn: "https://apps.apple.com/cn/app/nativeid-%E6%99%BA%E8%83%BD%E8%AF%81%E4%BB%B6%E7%85%A7%E5%88%B6%E4%BD%9C/id6759086815",
  },
  careershot: {
    id: "6761890850",
    cn: "https://apps.apple.com/cn/app/careershot-ai%E8%81%8C%E4%B8%9A%E5%BD%A2%E8%B1%A1%E7%85%A7/id6761890850",
  },
  lumachoice: {
    id: "6764213746",
    cn: "https://apps.apple.com/cn/app/lumachoice/id6764213746",
  },
  stilltap: {
    id: "6767076083",
    cn: "https://apps.apple.com/cn/app/stilltap-%E9%9D%99%E5%BF%83%E6%9C%A8%E9%B1%BC/id6767076083",
  },
  rentlog: {
    id: "6758596855",
    us: "https://apps.apple.com/us/app/rentlog-landlord-manager/id6758596855",
  },
};

// App Store storefronts. GB is used for the United Kingdom; CF reports GB.
const STOREFRONTS = new Set(
  "ae ag ai al am ao ar at au az bb be bf bg bh bj bm bn bo br bs bt bw by bz ca cg ch cl cm cn co cr cv cy cz de dk dm do dz ec ee eg es fi fj fm fr ga gb gd gh gm gr gt gw gy hk hn hr hu id ie il in is it jm jo jp ke kg kh kn kr kw ky kz la lb lc lk lr lt lu lv md mg mk ml mm mn mo mr ms mt mu mw mx my mz na ne ng ni nl no np nz om pa pe pg ph pk pl pt pw py qa ro rs ru rw sa sb sc se sg si sk sl sn sr st sv sz tc td th tj tm tn tr tt tw tz ua ug us uy uz vc ve vg vn vu xk ye za zm zw".split(
    " "
  )
);

export function storeUrl(app, country) {
  const raw = String(country || "us").toLowerCase();
  const cc = raw === "uk" ? "gb" : raw;
  const code = STOREFRONTS.has(cc) ? cc : "us";
  if (code === "cn" && app.cn) return app.cn;
  if (code === "us" && app.us) return app.us;
  if (code === "cn" && !app.cn && app.us) return app.us;
  return `https://apps.apple.com/${code}/app/id${app.id}`;
}
