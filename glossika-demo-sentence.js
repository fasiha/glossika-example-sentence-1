/*
Sentences and audio URLs from https://ai.glossika.com/api/session on first
session

Languages map from https://ai.glossika.com/app/locales/eng-US/language.json

CSS from https://perfectmotherfuckingwebsite.com/
*/

const sentences = {
  '1': {
    'text': 'The weather\'s nice today.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/ENG/US/N/1.mp3',
    'rtl': false
  },
  '2': {
    'text': 'Hoy hace buen tiempo.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/SPA/ES/N/1.mp3',
    'rtl': false
  },
  '4': {
    'text': 'El clima de hoy es agradable.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/SPA/MX/N/1.mp3',
    'rtl': false
  },
  '5': {
    'text': 'Oggi il tempo è bello.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/ITA/SD/N/1.mp3',
    'rtl': false
  },
  '6': {
    'text': 'Il fait beau aujourd\'hui.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/FRA/SD/N/1.mp3',
    'rtl': false
  },
  '7': {
    'text': 'Das Wetter heute ist schön.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/DEU/SD/N/1.mp3',
    'rtl': false
  },
  '8': {
    'text': 'Погода сегодня хорошая.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/RUS/SD/N/1.mp3',
    'rtl': false
  },
  '9': {
    'text': 'Dnes je hezké počasí.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/CES/SD/N/1.mp3',
    'rtl': false
  },
  '10': {
    'text': 'Vejret er godt i dag.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/DAN/SD/N/1.mp3',
    'rtl': false
  },
  '11': {
    'text': 'Täna on ilm ilus.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/EKK/SD/N/1.mp3',
    'rtl': false
  },
  '12': {
    'text': 'Laikapstākļi šodien ir jauki.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/LAV/SD/N/1.mp3',
    'rtl': false
  },
  '13': {
    'text': 'Šiandien puikus oras.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/LIT/SD/N/1.mp3',
    'rtl': false
  },
  '14': {
    'text': 'Het is lekker weer vandaag.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/NLD/SD/N/1.mp3',
    'rtl': false
  },
  '17': {
    'text': 'Ładna jest dzisiaj pogoda.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/POL/SD/N/1.mp3',
    'rtl': false
  },
  '18': {
    'text': 'O tempo está bom hoje.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/POR/BR/N/1.mp3',
    'rtl': false
  },
  '19': {
    'text': 'Vädret är fint idag.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/SWE/SD/N/1.mp3',
    'rtl': false
  },
  '20': {
    'text': 'Veðrið er gott í dag.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/ISL/SD/N/1.mp3',
    'rtl': false
  },
  '21': {
    'text': '今天 天氣 不錯 。',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/CMN/TW/N/1.mp3',
    'rtl': false
  },
  '22': {
    'text': 'きょう は 天気 が いい です。',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/JPN/SD/N/1.mp3',
    'rtl': false
  },
  '23': {
    'text': '오늘 날씨가 좋아요.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/KOR/SD/N/1.mp3',
    'rtl': false
  },
  '24': {
    'text': 'วันนี้อากาศดี',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/THA/SD/N/1.mp3',
    'rtl': false
  },
  '25': {
    'text': 'Tänään on hyvä sää.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/FIN/SOUT2677/N/1.mp3',
    'rtl': false
  },
  '26': {
    'text': 'Bugün hava güzel.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/TUR/SD/N/1.mp3',
    'rtl': false
  },
  '27': {
    'text': 'Ma szép idő van.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/HUN/SD/N/1.mp3',
    'rtl': false
  },
  '28': {
    'text': 'Ωραίος καιρός σήμερα.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/ELL/SD/N/1.mp3',
    'rtl': false
  },
  '29': {
    'text': 'Hôm-nay trời đẹp.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/VIE/HN/N/1.mp3',
    'rtl': false
  },
  '30': {
    'text': '今日 天氣 好 好 。',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/YUE/HK/N/1.mp3',
    'rtl': false
  },
  '31': {
    'text': '今仔日 天氣 袂䆀 。',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/NAN/TW/N/1.mp3',
    'rtl': false
  },
  '32': {
    'text': '今天 天气 不错 。',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/CMN/CN/N/1.mp3',
    'rtl': false
  },
  '33': {
    'text': 'Cuaca baik hari ini.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/IND/SD/N/1.mp3',
    'rtl': false
  },
  '34': {
    'text': 'Maganda ang panahon ngayon.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/TGL/SD/N/1.mp3',
    'rtl': false
  },
  '35': {
    'text': 'Hali ya hewa ni nzuri leo.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/SWA/SD/N/1.mp3',
    'rtl': false
  },
  '36': {
    'text': 'الطقس جميل اليوم.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/ARB/SD/N/1.mp3',
    'rtl': true
  },
  '37': {
    'text': 'आज मौसम अच्छा है।',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/HIN/SD/N/1.mp3',
    'rtl': false
  },
  '38': {
    'text': 'الجو حلو النهاردة.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/ARZ/SD/N/1.mp3',
    'rtl': false
  },
  '39': {
    'text': 'Өнөөдөр цаг агаар сайхан байна.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/KHK/SD/N/1.mp3',
    'rtl': false
  },
  '40': {
    'text': 'Avui fa bon temps.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/CAT/SD/N/1.mp3',
    'rtl': false
  },
  '41': {
    'text': 'Danas јe lepo vreme.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/SRP/EK/N/1.mp3',
    'rtl': false
  },
  '42': {
    'text': 'Dnes je pekné počasie.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/SLK/SD/N/1.mp3',
    'rtl': false
  },
  '43': {
    'text': 'Danes je lepo vreme.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/SLV/SD/N/1.mp3',
    'rtl': false
  },
  '44': {
    'text': 'Էսօր եղանակը լավն ա:',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/HYE/SD/N/1.mp3',
    'rtl': false
  },
  '45': {
    'text': '該日天色 不 蟊 顯 。 ',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/WUU/WZ/N/1.mp3',
    'rtl': false
  },
  '46': {
    'text': '今晡日 天時 異 好。',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/HAK/SX/N/1.mp3',
    'rtl': false
  },
  '47': {
    'text': '今晡日 天時 異 好。',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/HAK/HL/N/1.mp3',
    'rtl': false
  },
  '48': {
    'text': 'Vêret er fint i dag.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/NNO/SD/N/1.mp3',
    'rtl': false
  },
  '49': {
    'text': 'Погода сьогодні хороша.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/UKR/SD/N/1.mp3',
    'rtl': false
  },
  '50': {
    'text': 'Надвор\'е сёння добрае.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/BEL/SD/N/1.mp3',
    'rtl': false
  },
  '51': {
    'text': 'Ta\'n emshir braew jiu.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/GLV/SD/N/1.mp3',
    'rtl': false
  },
  '52': {
    'text': 'ئه‌مڕۆ هه‌وا خۆشه‌.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/CKB/SD/N/1.mp3',
    'rtl': true
  },
  '53': {
    'text': 'Mae hi\'n braf heddiw.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/CYM/SD/N/1.mp3',
    'rtl': false
  },
  '54': {
    'text': 'আজকের আবহাওয়া ভাল।',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/BEN/IN/N/1.mp3',
    'rtl': false
  },
  '55': {
    'text': 'هوا امروز خوبه.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/PES/SD/N/1.mp3',
    'rtl': true
  },
  '56': {
    'text': 'The weather\'s nice today.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/ENG/GB/N/1.mp3',
    'rtl': false
  },
  '57': {
    'text': 'Vrijeme je danas lijepo.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/HRV/SD/N/1.mp3',
    'rtl': false
  },
  '58': {
    'text': 'Tá an aimsir go deas inniu.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/GLE/CO/N/1.mp3',
    'rtl': false
  },
  '59': {
    'text': 'Bữa nay trời đẹp.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/VIE/SG/N/1.mp3',
    'rtl': false
  },
  '60': {
    'text': 'Bu gün hava yaxşıdır.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/AZJ/SD/N/1.mp3',
    'rtl': false
  },
  '61': {
    'text': 'Tha deagh shìde ann an-diugh.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/GLA/SD/N/1.mp3',
    'rtl': false
  },
  '62': {
    'text': 'Hoje está bom tempo.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/POR/PT/N/1.mp3',
    'rtl': false
  },
  '63': {
    'text': 'מזג האוויר נחמד היום.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/HEB/SD/N/1.mp3',
    'rtl': true
  },
  '64': {
    'text': 'დღეს კარგი ამინდია.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/KAT/SD/N/1.mp3',
    'rtl': false
  },
  '65': {
    'text': 'Времето е хубаво днес.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/BUL/SD/N/1.mp3',
    'rtl': false
  },
  '66': {
    'text': 'Бүгін ауа райы тамаша.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/KAZ/SD/N/1.mp3',
    'rtl': false
  },
  '67': {
    'text': 'Bugun xavo yaxshi.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/UZN/SD/N/1.mp3',
    'rtl': false
  },
  '68': {
    'text': 'الجو زوين اليوم.',
    'mp3': 'https://doq7roi18djmh.cloudfront.net/ARY/SD/N/1.mp3',
    'rtl': true
  }
};
const lang = {
  'ara-EG': {'course': 'Arabic (Egypt)', 'reduced': 'Arabic'},
  'ara-SD': {'course': 'Arabic (Standard)', 'reduced': 'Arabic'},
  'ary-SD': {'course': 'Arabic (Morocco)', 'reduced': 'Arabic'},
  'aze-SD': {'course': 'Azerbaijani', 'reduced': 'Azerbaijani'},
  'bel-SD': {'course': 'Belarusian', 'reduced': 'Belarusian'},
  'ben-IN': {'course': 'Bengali (India)', 'reduced': 'Bengali'},
  'bul-SD': {'course': 'Bulgarian', 'reduced': 'Bulgarian'},
  'cat-SD': {'course': 'Catalan', 'reduced': 'Catalan'},
  'ces-SD': {'course': 'Czech', 'reduced': 'Czech'},
  'ckb-SD': {'course': 'Kurdish (Sorani)', 'reduced': 'Kurdish'},
  'cym-SD': {'course': 'Welsh', 'reduced': 'Welsh'},
  'dan-SD': {'course': 'Danish', 'reduced': 'Danish'},
  'deu-SD': {'course': 'German', 'reduced': 'German'},
  'ell-SD': {'course': 'Greek (Modern)', 'reduced': 'Greek'},
  'eng-GB': {'course': 'English (UK)', 'reduced': 'English'},
  'eng-US': {'course': 'English (US)', 'reduced': 'English'},
  'est-SD': {'course': 'Estonian', 'reduced': 'Estonian'},
  'fas-SD': {'course': 'Persian', 'reduced': 'Persian'},
  'fin-SD': {'course': 'Finnish (Colloquial)', 'reduced': 'Colloquial'},
  'fin-SOUT2677': {'course': 'Finnish (SW dialect)', 'reduced': 'Finnish'},
  'fra-SD': {'course': 'French', 'reduced': 'French'},
  'gla-SD': {'course': 'Gaelic (Scottish)', 'reduced': 'Gaelic'},
  'glv-SD': {'course': 'Manx', 'reduced': 'Manx'},
  'gle-CO': {'course': 'Irish', 'reduced': 'Irish'},
  'hak-HL': {'course': 'Hakka (Hailu)', 'reduced': 'Hakka'},
  'hak-SX': {'course': 'Hakka (Sixian)', 'reduced': 'Hakka'},
  'heb-SD': {'course': 'Hebrew', 'reduced': 'Hebrew'},
  'hin-SD': {'course': 'Hindi', 'reduced': 'Hindi'},
  'hun-SD': {'course': 'Hungarian', 'reduced': 'Hungarian'},
  'hrv-SD': {'course': 'Croatian (Štokavian)', 'reduced': 'Croatian'},
  'hye-SD': {'course': 'Armenian (Eastern)', 'reduced': 'Armenian'},
  'ind-SD': {'course': 'Indonesian', 'reduced': 'Indonesian'},
  'isl-SD': {'course': 'Icelandic', 'reduced': 'Icelandic'},
  'ita-SD': {'course': 'Italian', 'reduced': 'Italian'},
  'jpn-SD': {'course': 'Japanese', 'reduced': 'Japanese'},
  'kat-SD': {'course': 'Georgian', 'reduced': 'Georgian'},
  'kaz-SD': {'course': 'Kazakh', 'reduced': 'Kazakh'},
  'kor-SD': {'course': 'Korean', 'reduced': 'Korean'},
  'lav-SD': {'course': 'Latvian', 'reduced': 'Latvian'},
  'lit-SD': {'course': 'Lithuanian', 'reduced': 'Lithuanian'},
  'mon-SD': {'course': 'Mongolian', 'reduced': 'Mongolian'},
  'nan-TW': {'course': 'Taiwanese Hokkien', 'reduced': 'Hokkien'},
  'nld-SD': {'course': 'Dutch', 'reduced': 'Dutch'},
  'nno-SD': {'course': 'Norwegian (Nynorsk)', 'reduced': 'Norwegian'},
  'pol-SD': {'course': 'Polish', 'reduced': 'Polish'},
  'por-BR': {'course': 'Portuguese (Brazil)', 'reduced': 'Portuguese'},
  'por-PT': {'course': 'Portuguese (European)', 'reduced': 'Portuguese'},
  'rus-SD': {'course': 'Russian', 'reduced': 'Russian'},
  'slk-SD': {'course': 'Slovak', 'reduced': 'Slovak'},
  'slv-SD': {'course': 'Slovene', 'reduced': 'Slovene'},
  'spa-ES': {'course': 'Spanish (Spain)', 'reduced': 'Spanish'},
  'spa-MX': {'course': 'Spanish (Mexican)', 'reduced': 'Spanish'},
  'srp-EK': {'course': 'Serbian (Ekavian)', 'reduced': 'Serbian'},
  'swa-SD': {'course': 'Swahili', 'reduced': 'Swahili'},
  'swe-SD': {'course': 'Swedish', 'reduced': 'Swedish'},
  'tgl-SD': {'course': 'Tagalog', 'reduced': 'Tagalog'},
  'tha-SD': {'course': 'Thai', 'reduced': 'Thai'},
  'tur-SD': {'course': 'Turkish', 'reduced': 'Turkish'},
  'ukr-SD': {'course': 'Ukrainian', 'reduced': 'Ukrainian'},
  'uzb-SD': {'course': 'Uzbek', 'reduced': 'Uzbek'},
  'vie-HN': {'course': 'Vietnamese (Northern)', 'reduced': 'Vietnamese'},
  'vie-SG': {'course': 'Vietnamese (Southern)', 'reduced': 'Vietnamese'},
  'wuu-WZ': {'course': 'Wenzhounese (Wu)', 'reduced': 'Wenzhounese'},
  'yue-HK': {'course': 'Cantonese (HK)', 'reduced': 'Cantonese'},
  'zh-CN': {'course': 'Chinese (Beijing)', 'reduced': 'Mandarin'},
  'zh-TW': {'course': 'Chinese (Taiwan)', 'reduced': 'Mandarin'},
  'arb-SD': {'course': 'Arabic (Standard)', 'reduced': 'Arabic'},
  'arz-SD': {'course': 'Arabic (Egypt)', 'reduced': 'Arabic'},
  'cmn-CN': {'course': 'Chinese (Beijing)', 'reduced': 'Mandarin'},
  'cmn-TW': {'course': 'Chinese (Taiwan)', 'reduced': 'Mandarin'},
  'khk-SD': {'course': 'Mongolian', 'reduced': 'Mongolian'},
  'azj-SD': {'course': 'Azerbaijani', 'reduced': 'Azerbaijani'},
  'uzn-SD': {'course': 'Uzbek', 'reduced': 'Uzbek'},
  'ekk-SD': {'course': 'Estonian', 'reduced': 'Estonian'},
  'pes-SD': {'course': 'Persian', 'reduced': 'Persian'}
};
const simplified = Object.values(sentences).map(({text, mp3}) => {
  const split = mp3.split('/');
  const main = split[3].toLowerCase();
  const sub = split[4].toUpperCase();
  const l = lang[`${main}-${sub}`];
  if (!l) {
    throw new Error('cannot find lang')
  }
  return ({text, mp3, lang: l.course});
});
simplified.sort((a, b) => a.lang < b.lang ? -1 : 1);
console.log(simplified.slice(0, 10));
const htmls = simplified.map(
    ({lang, mp3, text}) => {return `<p><audio controls preload="none" src="${
        mp3}"></audio> <small>[${lang}]</small> ${text} </p>`});
const css =
    `body{max-width:750px;margin:40px auto;padding:0 10px;font:18px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";color:#444}h1,h2,h3{line-height:1.2}@media (prefers-color-scheme: dark){body{color:#ccc;background:black}a:link{color:#5bf}a:visited{color:#ccf}}`;
const html = `<!DOCTYPE html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Glossika demo sentence 1</title>
<style>${css}</style>
</head>
<h1>Sentences via <a href="https://ai.glossika.com">Glossika</a></h1>
${htmls.join('\n')}`;

var fs = require('fs');
fs.writeFileSync('index.html', html);