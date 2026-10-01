import {makeNumberRound,checkNumberSelection} from '../logic.js';
import {gameFrame,roundFlow} from '../ui.js';
export function mountGame(root,c){
 const flow=roundFlow(root,c);
 function next(){
  flow.next();
  const r=makeNumberRound(c.difficulty,Math.random,Math.floor(c.session.stats.correct/2)),selected=new Set();
  const learn=c.mode==='learn';
  const area=gameFrame(root,'Make the target',`Choose exactly ${r.required} numbers. ${learn?'Use the running total to practice.':'Add them mentally: the running total is hidden.'}`);
  area.innerHTML=`<div class="target-number"><span>Level ${r.level} · Target sum</span><strong>${r.target}</strong></div><div class="number-grid challenge-numbers" style="--number-cols:${r.numbers.length===9?3:4}">${r.numbers.map((n,i)=>`<button class="number-tile" data-i="${i}" aria-pressed="false">${n}</button>`).join('')}</div><div class="answer-row"><span id="sum" aria-live="polite"></span><button class="primary" id="submit" disabled>Check sum</button></div>`;
  const update=()=>{area.querySelector('#sum').textContent=`${selected.size} / ${r.required} selected${learn?' · Sum: '+[...selected].reduce((sum,i)=>sum+r.numbers[i],0):''}`;area.querySelector('#submit').disabled=selected.size!==r.required;};
  area.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>{const i=+b.dataset.i;if(selected.has(i))selected.delete(i);else if(selected.size<r.required)selected.add(i);b.setAttribute('aria-pressed',selected.has(i));update();});
  area.querySelector('#submit').onclick=()=>flow.answer(checkNumberSelection(r,[...selected]),`One solution: ${r.solution.map(i=>r.numbers[i]).join(' + ')} = ${r.target}.`,next);
  update();
 }
 next();return {dispose(){}};
}
