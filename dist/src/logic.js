export const rand=(max,random=Math.random)=>Math.floor(random()*max);
export function shuffle(values,random=Math.random){const a=[...values];for(let i=a.length-1;i>0;i--){const j=rand(i+1,random);[a[i],a[j]]=[a[j],a[i]];}return a;}
export function makeNumberRound(difficulty,random=Math.random,level=0){
 const tier=difficulty==='hard'?2:difficulty==='easy'?0:1;
 const stage=Math.max(0,Math.min(3,Math.floor(level)));
 const count=[9,12,16][tier],required=Math.min(5,3+(tier===2?1:0)+Math.floor(stage/2));
 const minimum=[2,8,15][tier],range=[24,52,85][tier]+stage*8;
 const numbers=shuffle(Array.from({length:range},(_,i)=>minimum+i),random).slice(0,count);
 const solution=shuffle(Array.from({length:count},(_,i)=>i),random).slice(0,required);
 return {numbers,solution,required,level:stage+1,target:solution.reduce((sum,i)=>sum+numbers[i],0)};
}
export function checkNumberSelection(round,indices){return indices.length===round.required&&new Set(indices).size===indices.length&&indices.every(i=>Number.isInteger(i)&&i>=0&&i<round.numbers.length)&&indices.reduce((sum,i)=>sum+round.numbers[i],0)===round.target;}
export const makeSequence=(length,alphabet,random=Math.random)=>Array.from({length},()=>alphabet[rand(alphabet.length,random)]);
export const checkSequence=(expected,actual)=>expected.length===actual.length&&expected.every((v,i)=>v===actual[i]);
export const isSolvedPuzzle=tiles=>tiles.every((t,i)=>t===i);
const deltas={N:[-1,0,'S'],E:[0,1,'W'],S:[1,0,'N'],W:[0,-1,'E']};
export function connectedPath(tiles,size,start,end){if(!tiles[start]?.includes('W')||!tiles[end]?.includes('E'))return false;const seen=new Set(),queue=[start];while(queue.length){const pos=queue.shift();if(pos===end)return true;if(seen.has(pos))continue;seen.add(pos);for(const d of tiles[pos]){const [dr,dc,opposite]=deltas[d];const r=Math.floor(pos/size)+dr,c=pos%size+dc;if(r<0||r>=size||c<0||c>=size)continue;const next=r*size+c;if(tiles[next].includes(opposite))queue.push(next);}}return false;}
export function makePathBoard(size){const types=['NS','EW','NE','ES','SW','NW'];const solution=Array.from({length:size*size},()=>types[rand(types.length)]);const row=rand(size),start=row*size,end=row*size+size-1;const bend=row===size-1?row-1:row+1;const path=[start];for(let c=1;c<size-1;c++)path.push((c===1?row:bend)*size+c);if(size>=3){path.splice(2,0,bend*size+1);path.push(bend*size+size-1);if(bend!==row)path.push(end);}const unique=[...new Set(path)];for(let i=0;i<unique.length;i++){const pos=unique[i],prev=unique[i-1],next=unique[i+1];const direction=other=>other===pos-1?'W':other===pos+1?'E':other<pos?'N':'S';solution[pos]=[i===0?'W':direction(prev),i===unique.length-1?'E':direction(next)].sort().join('');}let tiles=shuffle(solution);if(connectedPath(tiles,size,start,end)){for(let i=0;i<20&&connectedPath(tiles,size,start,end);i++)tiles=shuffle(solution);}return {tiles,solution,start,end};}
export const shapeTypes=['circle','square','triangle','diamond','star','cross'];
export const colors=['#245de8','#25896d','#bd593b','#7660c8'];
export function makeShapeRound(difficulty){const n=difficulty==='easy'?6:difficulty==='hard'?16:12;const target={type:shapeTypes[rand(shapeTypes.length)],color:colors[rand(colors.length)]};const items=Array.from({length:n},()=>({type:shapeTypes[rand(shapeTypes.length)],color:colors[rand(colors.length)]}));for(const i of shuffle(Array.from({length:n},(_,i)=>i)).slice(0,Math.max(2,Math.floor(n/4))))items[i]={...target};if(items.every(x=>x.type===target.type&&x.color===target.color))items[0]={type:shapeTypes[(shapeTypes.indexOf(target.type)+1)%shapeTypes.length],color:target.color};const answers=items.map((x,i)=>x.type===target.type&&x.color===target.color?i:-1).filter(i=>i>=0);return {target,items,answers};}
export function makeOddRound(difficulty){const n=difficulty==='easy'?9:difficulty==='hard'?25:16;const common=rand(4)*90,answer=rand(n),items=Array(n).fill(common);items[answer]=(common+(difficulty==='hard'?45:90))%360;return {common,answer,items};}
