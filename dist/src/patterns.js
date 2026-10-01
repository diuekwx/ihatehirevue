import {rand,shuffle} from './logic.js';
const palettes=[['#70aaa2','#a07dc2','#809e67','#6689df','#de6861'],['#4c8cba','#e5ac59','#9271b3','#56a99b','#d56886'],['#c98854','#5b9bb4','#8a71b9','#81a368','#e7bc67']];
export const patternFamilies=['ribbon','layers','rings','mosaic','petals'];
const families=patternFamilies;
export const patternKey=p=>JSON.stringify([p.family,p.colors,p.detail]);
export function makePatternRound(difficulty,family){const count=difficulty==='easy'?6:difficulty==='hard'?12:9;const target={family:family||families[rand(families.length)],colors:shuffle(palettes[rand(palettes.length)]),detail:rand(2),rotation:0};const answerSet=new Set(shuffle(Array.from({length:count},(_,i)=>i)).slice(0,difficulty==='hard'?3:2));const variants=[];
 for(let a=0;a<5;a++)for(let b=a+1;b<5;b++)for(let detail=0;detail<2;detail++){
  const colors=[...target.colors];[colors[a],colors[b]]=[colors[b],colors[a]];
  variants.push({...target,colors,detail});
 }
 const distractors=shuffle(variants);
 const items=Array.from({length:count},(_,i)=>({...(answerSet.has(i)?target:distractors.pop()),rotation:(i*47+rand(25))%360}));
 return {target,items,answers:[...answerSet].sort((a,b)=>a-b)};}
export function renderPattern(p){const c=p.colors;let body='';if(p.family==='ribbon'){
 const vertices=[[8,91],[24,68],[34,87],[44,43],[56,78],[70,17],[80,64],[108,86]];
 const facets=[[0,1,2],[1,2,3],[2,3,4],[3,4,5],[4,5,6],[5,6,7]];
 body=facets.map((ids,i)=>`<polygon points="${ids.map(j=>vertices[j].join(',')).join(' ')}" fill="${i===p.detail?'#ffffff':c[(i-(i>p.detail?1:0)+5)%5]}" stroke="#677789" stroke-width="1.1" stroke-linejoin="round"/>`).join('');
 }
 if(p.family==='layers'){body=c.map((color,i)=>`<rect x="${10+i*15}" y="10" width="${100-i*15}" height="${100-i*15}" fill="${color}"/>`).join('');body+=`<rect x="${p.detail?71:86}" y="${p.detail?40:25}" width="9" height="9" fill="${c[0]}"/>`;}
 if(p.family==='rings'){body=c.map((color,i)=>`<circle cx="60" cy="60" r="${50-i*9}" fill="${color}"/>`).join('');body+=`<path d="M60 10v${p.detail?29:17}" stroke="${c[4]}" stroke-width="7"/><circle cx="60" cy="60" r="5" fill="${c[0]}"/>`;}
 if(p.family==='mosaic'){body=`<rect x="10" y="10" width="100" height="100" fill="${c[0]}"/><path d="M10 10h100L60 60Z" fill="${c[1]}"/><path d="M110 10v100L60 60Z" fill="${c[2]}"/><path d="M110 110H10L60 60Z" fill="${c[3]}"/><rect x="44" y="44" width="32" height="32" fill="${c[4]}"/><rect x="${p.detail?30:20}" y="20" width="10" height="10" fill="${c[0]}"/>`;}
 if(p.family==='petals'){body=c.slice(0,4).map((color,i)=>`<path d="M60 60C${p.detail?15:28} 14 49 0 76 14C95 27 80 53 60 60Z" fill="${color}" transform="rotate(${i*90} 60 60)"/>`).join('')+`<circle cx="60" cy="60" r="13" fill="${c[4]}"/><circle cx="60" cy="26" r="4" fill="${c[4]}"/>`;}
 return `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">${body}</svg>`;
}
