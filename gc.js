//setting value of each button using array Map method
const buttons = document.getElementsByClassName('btn');

Array.from(buttons).forEach((button, index) => {
  button.setAttribute("onclick", `setval(${index})`);
});




const textarea = document.getElementById('usrin');
const output=document.getElementById("output");
let out_text,inv;
let val=0;



function setval(x){
  for(let i=0;i<buttons.length;i++){
    if(i!=x){
      buttons[i].style="background:#afa;color:black";
    }else{
      buttons[i].style="background:green;color:white;border:1px solid cyan";
    }
  }
  val=x;
  selection(val);
  output.innerHTML=out_text;
}





 textarea.addEventListener('keyup',(event) => 
 {
   textarea.style.height =  "auto";
   textarea.style.height = `${textarea.scrollHeight}px`;
   inv=textarea.value;
     selection(val);
     output.innerHTML=out_text;
    });
    
    
    
    
function bold(inputString) {
    const boldMap = {
  a: '\u{1D41A}', b: '\u{1D41B}', c: '\u{1D41C}', d: '\u{1D41D}', e: '\u{1D41E}', f: '\u{1D41F}', g: '\u{1D420}',
  h: '\u{1D421}', i: '\u{1D422}', j: '\u{1D423}', k: '\u{1D424}', l: '\u{1D425}', m: '\u{1D426}', n: '\u{1D427}',
  o: '\u{1D428}', p: '\u{1D429}', q: '\u{1D42A}', r: '\u{1D42B}', s: '\u{1D42C}', t: '\u{1D42D}', u: '\u{1D42E}',
  v: '\u{1D42F}', w: '\u{1D430}', x: '\u{1D431}', y: '\u{1D432}', z: '\u{1D433}',
  A: '\u{1D400}', B: '\u{1D401}', C: '\u{1D402}', D: '\u{1D403}', E: '\u{1D404}', F: '\u{1D405}', G: '\u{1D406}',
  H: '\u{1D407}', I: '\u{1D408}', J: '\u{1D409}', K: '\u{1D40A}', L: '\u{1D40B}', M: '\u{1D40C}', N: '\u{1D40D}',
  O: '\u{1D40E}', P: '\u{1D40F}', Q: '\u{1D410}', R: '\u{1D411}', S: '\u{1D412}', T: '\u{1D413}', U: '\u{1D414}',
  V: '\u{1D415}', W: '\u{1D416}', X: '\u{1D417}', Y: '\u{1D418}', Z: '\u{1D419}',
  0: '\u{1D7CE}', 1: '\u{1D7CF}', 2: '\u{1D7D0}', 3: '\u{1D7D1}', 4: '\u{1D7D2}',
  5: '\u{1D7D3}', 6: '\u{1D7D4}', 7: '\u{1D7D5}', 8: '\u{1D7D6}', 9: '\u{1D7D7}'
};
    // Map each character to its bold equivalent if it exists
    return inputString.split('').map(char => boldMap[char] || char).join('');
}
function italic(inputString) {
    const italicMap = {
  a: '\u{1D44E}', b: '\u{1D44F}', c: '\u{1D450}', d: '\u{1D451}', e: '\u{1D452}', f: '\u{1D453}', g: '\u{1D454}',
  h: '\u{210E}',     // special case: ℎ is U+210E (PLANCK CONSTANT)
  i: '\u{1D456}', j: '\u{1D457}', k: '\u{1D458}', l: '\u{1D459}', m: '\u{1D45A}', n: '\u{1D45B}',
  o: '\u{1D45C}', p: '\u{1D45D}', q: '\u{1D45E}', r: '\u{1D45F}', s: '\u{1D460}', t: '\u{1D461}', u: '\u{1D462}',
  v: '\u{1D463}', w: '\u{1D464}', x: '\u{1D465}', y: '\u{1D466}', z: '\u{1D467}',

  A: '\u{1D434}', B: '\u{1D435}', C: '\u{1D436}', D: '\u{1D437}', E: '\u{1D438}', F: '\u{1D439}', G: '\u{1D43A}',
  H: '\u{1D43B}', I: '\u{1D43C}', J: '\u{1D43D}', K: '\u{1D43E}', L: '\u{1D43F}', M: '\u{1D440}', N: '\u{1D441}',
  O: '\u{1D442}', P: '\u{1D443}', Q: '\u{1D444}', R: '\u{1D445}', S: '\u{1D446}', T: '\u{1D447}', U: '\u{1D448}',
  V: '\u{1D449}', W: '\u{1D44A}', X: '\u{1D44B}', Y: '\u{1D44C}', Z: '\u{1D44D}',

  0: '\u{1D7F6}', 1: '\u{1D7F7}', 2: '\u{1D7F8}', 3: '\u{1D7F9}', 4: '\u{1D7FA}',
  5: '\u{1D7FB}', 6: '\u{1D7FC}', 7: '\u{1D7FD}', 8: '\u{1D7FE}', 9: '\u{1D7FF}'
};
    // Map each character to its italic equivalent if it exists
    return inputString.split('').map(char => italicMap[char] || char).join('');
}
function cursive(inputString) {
    const normalToCursiveMap = {
        a: '𝒶', b: '𝒷', c: '𝒸', d: '𝒹', e: '𝑒', f: '𝒻', g: '𝑔',
        h: '𝒽', i: '𝒾', j: '𝒿', k: '𝓀', l: '𝓁', m: '𝓂', n: '𝓃',
        o: '𝑜', p: '𝓅', q: '𝓆', r: '𝓇', s: '𝓈', t: '𝓉', u: '𝓊',
        v: '𝓋', w: '𝓌', x: '𝓍', y: '𝓎', z: '𝓏',
        A: '𝒜', B: '𝐵', C: '𝒞', D: '𝒟', E: '𝐸', F: '𝐹', G: '𝒢',
        H: '𝐻', I: '𝐼', J: '𝒥', K: '𝒦', L: '𝐿', M: '𝑀', N: '𝒩',
        O: '𝒪', P: '𝒫', Q: '𝒬', R: '𝑅', S: '𝒮', T: '𝒯', U: '𝒰',
        V: '𝒱', W: '𝒲', X: '𝒳', Y: '𝒴', Z: '𝒵'
    };

    // Map each character to cursive if available, otherwise leave unchanged
    return inputString.split('').map(char => normalToCursiveMap[char] || char).join('');
}
function fatty(inputString) {
  const normalToBoxedMap = {
  A: '\u{1F1E6}', B: '\u{1F1E7}', C: '\u{1F1E8}', D: '\u{1F1E9}', E: '\u{1F1EA}',
  F: '\u{1F1EB}', G: '\u{1F1EC}', H: '\u{1F1ED}', I: '\u{1F1EE}', J: '\u{1F1EF}',
  K: '\u{1F1F0}', L: '\u{1F1F1}', M: '\u{1F1F2}', N: '\u{1F1F3}', O: '\u{1F1F4}',
  P: '\u{1F1F5}', Q: '\u{1F1F6}', R: '\u{1F1F7}', S: '\u{1F1F8}', T: '\u{1F1F9}',
  U: '\u{1F1FA}', V: '\u{1F1FB}', W: '\u{1F1FC}', X: '\u{1F1FD}', Y: '\u{1F1FE}',
  Z: '\u{1F1FF}',

  a: '\u{1F1E6}', b: '\u{1F1E7}', c: '\u{1F1E8}', d: '\u{1F1E9}', e: '\u{1F1EA}',
  f: '\u{1F1EB}', g: '\u{1F1EC}', h: '\u{1F1ED}', i: '\u{1F1EE}', j: '\u{1F1EF}',
  k: '\u{1F1F0}', l: '\u{1F1F1}', m: '\u{1F1F2}', n: '\u{1F1F3}', o: '\u{1F1F4}',
  p: '\u{1F1F5}', q: '\u{1F1F6}', r: '\u{1F1F7}', s: '\u{1F1F8}', t: '\u{1F1F9}',
  u: '\u{1F1FA}', v: '\u{1F1FB}', w: '\u{1F1FC}', x: '\u{1F1FD}', y: '\u{1F1FE}',
  z: '\u{1F1FF}',
};

  return inputString
    .split('')
    .map(char => normalToBoxedMap[char] || char)
    .join(' ');
}
function serif(text) {
const serifMap = {
  A: '\u{1D434}', B: '\u{1D435}', C: '\u{1D436}', D: '\u{1D437}', E: '\u{1D438}',
  F: '\u{1D439}', G: '\u{1D43A}', H: '\u{1D43B}', I: '\u{1D43C}', J: '\u{1D43D}',
  K: '\u{1D43E}', L: '\u{1D43F}', M: '\u{1D440}', N: '\u{1D441}', O: '\u{1D442}',
  P: '\u{1D443}', Q: '\u{1D444}', R: '\u{1D445}', S: '\u{1D446}', T: '\u{1D447}',
  U: '\u{1D448}', V: '\u{1D449}', W: '\u{1D44A}', X: '\u{1D44B}', Y: '\u{1D44C}',
  Z: '\u{1D44D}',

  a: '\u{1D44E}', b: '\u{1D44F}', c: '\u{1D450}', d: '\u{1D451}', e: '\u{1D452}',
  f: '\u{1D453}', g: '\u{1D454}', h: '\u{210E}', i: '\u{1D456}', j: '\u{1D457}',
  k: '\u{1D458}', l: '\u{1D459}', m: '\u{1D45A}', n: '\u{1D45B}', o: '\u{1D45C}',
  p: '\u{1D45D}', q: '\u{1D45E}', r: '\u{1D45F}', s: '\u{1D460}', t: '\u{1D461}',
  u: '\u{1D462}', v: '\u{1D463}', w: '\u{1D464}', x: '\u{1D465}', y: '\u{1D466}',
  z: '\u{1D467}',

  '0': '\u{1D7CE}', '1': '\u{1D7CF}', '2': '\u{1D7D0}', '3': '\u{1D7D1}', '4': '\u{1D7D2}',
  '5': '\u{1D7D3}', '6': '\u{1D7D4}', '7': '\u{1D7D5}', '8': '\u{1D7D6}', '9': '\u{1D7D7}',
};

  return text.split('').map(c => serifMap[c] || c).join('');
}


/*
function square(text) {
const squaredMap = {
  A: '\u{1F150}', B: '\u{1F151}', C: '\u{1F152}', D: '\u{1F153}', E: '\u{1F154}',
  F: '\u{1F155}', G: '\u{1F156}', H: '\u{1F157}', I: '\u{1F158}', J: '\u{1F159}',
  K: '\u{1F15A}', L: '\u{1F15B}', M: '\u{1F15C}', N: '\u{1F15D}', O: '\u{1F15E}',
  P: '\u{1F15F}', Q: '\u{1F160}', R: '\u{1F161}', S: '\u{1F162}', T: '\u{1F163}',
  U: '\u{1F164}', V: '\u{1F165}', W: '\u{1F166}', X: '\u{1F167}', Y: '\u{1F168}',
  Z: '\u{1F169}',

  a: '\u{1F150}', b: '\u{1F151}', c: '\u{1F152}', d: '\u{1F153}', e: '\u{1F154}',
  f: '\u{1F155}', g: '\u{1F156}', h: '\u{1F157}', i: '\u{1F158}', j: '\u{1F159}',
  k: '\u{1F15A}', l: '\u{1F15B}', m: '\u{1F15C}', n: '\u{1F15D}', o: '\u{1F15E}',
  p: '\u{1F15F}', q: '\u{1F160}', r: '\u{1F161}', s: '\u{1F162}', t: '\u{1F163}',
  u: '\u{1F164}', v: '\u{1F165}', w: '\u{1F166}', x: '\u{1F167}', y: '\u{1F168}',
  z: '\u{1F169}',

  '0': '\u{1F10B}',  // 0️⃣ (keycap 0) — closest squared number is not standard so we use keycap
  '1': '\u{1F131}',  // 🄱 (Squared B, but no squared 1; alternative here)
  '2': '\u{1F132}',  // 🄲
  '3': '\u{1F133}',  // 🄳
  '4': '\u{1F134}',  // 🄴
  '5': '\u{1F135}',  // 🄵
  '6': '\u{1F136}',  // 🄶
  '7': '\u{1F137}',  // 🄷
  '8': '\u{1F138}',  // 🄸
  '9': '\u{1F139}',  // 🄹
};

  return [...text].map(ch => squaredMap[ch] || ch).join('');
}
*/



function line(text) {
const doubleStruckMap = {
  A: '\u{1D538}', B: '\u{1D539}', C: '\u{2102}',  D: '\u{1D53B}', E: '\u{1D53C}',
  F: '\u{1D53D}', G: '\u{1D53E}', H: '\u{210D}',  I: '\u{1D540}', J: '\u{1D541}',
  K: '\u{1D542}', L: '\u{1D543}', M: '\u{1D544}', N: '\u{2115}',  O: '\u{1D546}',
  P: '\u{2119}',  Q: '\u{211A}',  R: '\u{211D}',  S: '\u{1D54A}', T: '\u{1D54B}',
  U: '\u{1D54C}', V: '\u{1D54D}', W: '\u{1D54E}', X: '\u{1D54F}', Y: '\u{1D550}',
  Z: '\u{2124}',

  a: '\u{1D552}', b: '\u{1D553}', c: '\u{1D554}', d: '\u{1D555}', e: '\u{1D556}',
  f: '\u{1D557}', g: '\u{1D558}', h: '\u{1D559}', i: '\u{1D55A}', j: '\u{1D55B}',
  k: '\u{1D55C}', l: '\u{1D55D}', m: '\u{1D55E}', n: '\u{1D55F}', o: '\u{1D560}',
  p: '\u{1D561}', q: '\u{1D562}', r: '\u{1D563}', s: '\u{1D564}', t: '\u{1D565}',
  u: '\u{1D566}', v: '\u{1D567}', w: '\u{1D568}', x: '\u{1D569}', y: '\u{1D56A}',
  z: '\u{1D56B}',

  '0': '\u{1D7D8}', '1': '\u{1D7D9}', '2': '\u{1D7DA}', '3': '\u{1D7DB}', '4': '\u{1D7DC}',
  '5': '\u{1D7DD}', '6': '\u{1D7DE}', '7': '\u{1D7DF}', '8': '\u{1D7E0}', '9': '\u{1D7E1}',
};

  return [...text].map(ch => doubleStruckMap[ch] || ch).join('');
}
function sqfil(text) {
const squaredCapsMap = {
  A: '\u{1F170}',  // 🅐
  B: '\u{1F171}',  // 🅑
  C: '\u{1F172}',  // 🅒
  D: '\u{1F173}',  // 🅓
  E: '\u{1F174}',  // 🅔
  F: '\u{1F175}',  // 🅕
  G: '\u{1F176}',  // 🅖
  H: '\u{1F177}',  // 🅗
  I: '\u{1F178}',  // 🅘
  J: '\u{1F179}',  // 🅙
  K: '\u{1F17A}',  // 🅚
  L: '\u{1F17B}',  // 🅛
  M: '\u{1F17C}',  // 🅜
  N: '\u{1F17D}',  // 🅝
  O: '\u{1F17E}',  // 🅞
  P: '\u{1F17F}',  // 🅟
  Q: '\u{1F180}',  // 🅠
  R: '\u{1F181}',  // 🅡
  S: '\u{1F182}',  // 🅢
  T: '\u{1F183}',  // 🅣
  U: '\u{1F184}',  // 🅤
  V: '\u{1F185}',  // 🅥
  W: '\u{1F186}',  // 🅦
  X: '\u{1F187}',  // 🅧
  Y: '\u{1F188}',  // 🅨
  Z: '\u{1F189}',  // 🅩
  
  // lowercase letters do NOT exist in this block,
  // map them to uppercase squared letters
  a: '\u{1F170}',
  b: '\u{1F171}',
  c: '\u{1F172}',
  d: '\u{1F173}',
  e: '\u{1F174}',
  f: '\u{1F175}',
  g: '\u{1F176}',
  h: '\u{1F177}',
  i: '\u{1F178}',
  j: '\u{1F179}',
  k: '\u{1F17A}',
  l: '\u{1F17B}',
  m: '\u{1F17C}',
  n: '\u{1F17D}',
  o: '\u{1F17E}',
  p: '\u{1F17F}',
  q: '\u{1F180}',
  r: '\u{1F181}',
  s: '\u{1F182}',
  t: '\u{1F183}',
  u: '\u{1F184}',
  v: '\u{1F185}',
  w: '\u{1F186}',
  x: '\u{1F187}',
  y: '\u{1F188}',
  z: '\u{1F189}',
  
  // Numbers don’t have these enclosed versions, keep normal
  0: '0', 1: '1', 2: '2', 3: '3', 4: '4',
  5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
};

  return [...text].map(c => squaredCapsMap[c] || c).join('');
}
function crclfil(text) {
const enclosedAlphanumMap = {
  A: '\u{1F150}', B: '\u{1F151}', C: '\u{1F152}', D: '\u{1F153}', E: '\u{1F154}',
  F: '\u{1F155}', G: '\u{1F156}', H: '\u{1F157}', I: '\u{1F158}', J: '\u{1F159}',
  K: '\u{1F15A}', L: '\u{1F15B}', M: '\u{1F15C}', N: '\u{1F15D}', O: '\u{1F15E}',
  P: '\u{1F15F}', Q: '\u{1F160}', R: '\u{1F161}', S: '\u{1F162}', T: '\u{1F163}',
  U: '\u{1F164}', V: '\u{1F165}', W: '\u{1F166}', X: '\u{1F167}', Y: '\u{1F168}',
  Z: '\u{1F169}',

  a: '\u{1F150}', b: '\u{1F151}', c: '\u{1F152}', d: '\u{1F153}', e: '\u{1F154}',
  f: '\u{1F155}', g: '\u{1F156}', h: '\u{1F157}', i: '\u{1F158}', j: '\u{1F159}',
  k: '\u{1F15A}', l: '\u{1F15B}', m: '\u{1F15C}', n: '\u{1F15D}', o: '\u{1F15E}',
  p: '\u{1F15F}', q: '\u{1F160}', r: '\u{1F161}', s: '\u{1F162}', t: '\u{1F163}',
  u: '\u{1F164}', v: '\u{1F165}', w: '\u{1F166}', x: '\u{1F167}', y: '\u{1F168}',
  z: '\u{1F169}'
};

  return [...text].map(c => enclosedAlphanumMap[c] || c).join('');
}
function border(text) {
  const diacritics = ['\u035E', '\u035F', '\u033F', '\u0333']; // Combining marks
  return [...text]
    .map(char => char + diacritics.join('')) // Append all marks
    .join('');
}
function hill(text) {
  const boldMap = {
    a: '\u{1D41A}', b: '\u{1D41B}', c: '\u{1D41C}', d: '\u{1D41D}', e: '\u{1D41E}', 
    f: '\u{1D41F}', g: '\u{1D420}', h: '\u{1D421}', i: '\u{1D422}', j: '\u{1D423}', 
    k: '\u{1D424}', l: '\u{1D425}', m: '\u{1D426}', n: '\u{1D427}', o: '\u{1D428}', 
    p: '\u{1D429}', q: '\u{1D42A}', r: '\u{1D42B}', s: '\u{1D42C}', t: '\u{1D42D}', 
    u: '\u{1D42E}', v: '\u{1D42F}', w: '\u{1D430}', x: '\u{1D431}', y: '\u{1D432}', 
    z: '\u{1D433}', A: '\u{1D400}', B: '\u{1D401}', C: '\u{1D402}', D: '\u{1D403}', 
    E: '\u{1D404}', F: '\u{1D405}', G: '\u{1D406}', H: '\u{1D407}', I: '\u{1D408}', 
    J: '\u{1D409}', K: '\u{1D40A}', L: '\u{1D40B}', M: '\u{1D40C}', N: '\u{1D40D}', 
    O: '\u{1D40E}', P: '\u{1D40F}', Q: '\u{1D410}', R: '\u{1D411}', S: '\u{1D412}', 
    T: '\u{1D413}', U: '\u{1D414}', V: '\u{1D415}', W: '\u{1D416}', X: '\u{1D417}', 
    Y: '\u{1D418}', Z: '\u{1D419}'
  };

  // Decorative symbols using Unicode
  const designStart = '\u2736\t'; // ✶░▒▓▙▚▛▜▝
  const designEnd = '\t\u2736';   // ▝▜▛▚▙▓▒░✶

  // Convert text to bold Unicode
  const boldText = [...text]
    .map(char => boldMap[char] || char) // Convert if it's in boldMap, else keep as-is
    .join('');

  // Combine decorative design and bold text
  return `${designStart}${boldText}${designEnd}`;
}
function multiunline(text) {
  const underlineChar = '\u0333'; // Unicode combining underline

  // Add the underline character after each character in the input text
  return [...text]
    .map(char => char + underlineChar)
    .join('');
}
function cancle(text) {
  const strikethroughChar = '\u0334'; // Unicode combining tilde
  
  // Add the strikethrough character after each character in the input text
  return [...text]
    .map(char => char + strikethroughChar)
    .join('');
}

/*
function circle(text) {
  const emptySquareMap = {
    A: '\u{1F170}', B: '\u{1F171}', C: '\u{1F172}', D: '\u{1F173}', E: '\u{1F174}',
    F: '\u{1F175}', G: '\u{1F176}', H: '\u{1F177}', I: '\u{1F178}', J: '\u{1F179}',
    K: '\u{1F17A}', L: '\u{1F17B}', M: '\u{1F17C}', N: '\u{1F17D}', O: '\u{1F17E}',
    P: '\u{1F17F}', T: '\u{1F1A3}', U: '\u{1F1A4}',
    // Other letters fallback to normal
  };

  const emptySquareNumbers = {
    1: '\u2460', 2: '\u2461', 3: '\u2462', 4: '\u2463', 5: '\u2464',
    6: '\u2465', 7: '\u2466', 8: '\u2467', 9: '\u2468', 0: '0'
  };

  return [...text].map(ch => {
    const upper = ch.toUpperCase();
    if (emptySquareMap[upper]) return emptySquareMap[upper];
    if (emptySquareNumbers[ch]) return emptySquareNumbers[ch];
    return ch;
  }).join('');
}
*/


function tatoo(text) {
    const frakturMap = {
        // Uppercase letters
        A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲",
        H: "𝕳", I: "𝕴", J: "𝕵", K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹",
        O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿", U: "𝖀",
        V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅",
        // Lowercase letters
        a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌",
        h: "𝖍", i: "𝖎", j: "𝖏", k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓",
        o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙", u: "𝖚",
        v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟"
    };

    return [...text].map(char => frakturMap[char] || char).join('');
}
function omega(text) {
    const styleMap = {
        // Mapping each letter to a styled equivalent
        A: "Α", B: "Β", C: "ℂ", D: "ᗪ", E: "Є", F: "Ϝ", G: "𝔾", H: "Η",
        I: "ℐ", J: "Ј", K: "Κ", L: "ℒ", M: "Μ", N: "Ν", O: "О", P: "Ρ",
        Q: "𝒬", R: "ℛ", S: "Ѕ", T: "Т", U: "Ʊ", V: "Ѵ", W: "Ш", X: "Χ",
        Y: "Υ", Z: "ℤ",
        a: "α", b: "в", c: "ς", d: "∂", e: "є", f: "ғ", g: "ɢ", h: "н",
        i: "ι", j: "נ", k: "к", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ",
        q: "φ", r: "я", s: "ѕ", t: "т", u: "υ", v: "ν", w: "ω", x: "χ",
        y: "у", z: "z"
    };

    return [...text].map(char => styleMap[char] || char).join('');
}
function cross(text) {
    const omegaStyleMap = {
        // Mapping letters to styled equivalents
        A: "₳", B: "Ƀ", C: "₵", D: "Đ", E: "Ɇ", F: "₣", G: "₲", H: "Ⱨ",
        I: "Ɽ", J: "J", K: "₭", L: "Ⱡ", M: "₥", N: "₦", O: "Ø", P: "₱",
        Q: "Ɋ", R: "Ɽ", S: "₴", T: "₮", U: "Ʉ", V: "V", W: "₩", X: "⨯",
        Y: "¥", Z: "Ⱬ",
        a: "₳", b: "ƀ", c: "¢", d: "đ", e: "ɇ", f: "ƒ", g: "ɠ", h: "₴",
        i: "ɨ", j: "ʝ", k: "₭", l: "ł", m: "₥", n: "₦", o: "ø", p: "ρ",
        q: "ɋ", r: "Ɽ", s: "ʂ", t: "₮", u: "ʉ", v: "ⱱ", w: "₩", x: "χ",
        y: "ɏ", z: "ƶ"
    };

    return [...text].map(char => omegaStyleMap[char] || char).join('');
}
function hollowcrcl(text) {
    const circleMap = {
        // Uppercase letters (A-Z)
        A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ",
        I: "Ⓘ", J: "Ⓙ", K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ",
        Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ", U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ",
        Y: "Ⓨ", Z: "Ⓩ",
        // Lowercase letters (a-z)
        a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ",
        i: "ⓘ", j: "ⓙ", k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ",
        q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ", u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ",
        y: "ⓨ", z: "ⓩ"
    };

    return [...text].map(char => circleMap[char] || char).join('');
}












function selection(x){
  switch (x){
    case 1:out_text=bold(inv);
           break;
    case 2:out_text=italic(inv);
           break;
    case 3:out_text=cursive(inv);
           break;
    case 4:out_text=fatty(inv);
           break;
    case 5:out_text=serif(inv);
           break;
    case 6:out_text=line(inv);
           break;
    case 7:out_text=sqfil(inv);
           break;
    case 8:out_text=hollowcrcl(inv);         break;       
    case 9:out_text=crclfil(inv);
           break;
    case 10:out_text=border(inv);
           break;
    case 11:out_text=hill(inv);
           break;
    case 12:out_text=multiunline(inv);
           break;
    case 13:out_text=cancle(inv);
           break;
    case 14:out_text=tatoo(inv);
            break;
    case 15:out_text=omega(inv);
            break;        
    case 16:out_text=cross(inv);
            break;        
    
    
    
    default:out_text=inv;
           break;
  }
}
