export function createSession({mode='learn',durationSeconds=180,onTick=()=>{},onEnd=()=>{}}={}){
 let active=false,ended=false,startTime=0,interval;const timers=new Set(),answered=new Set();const stats={attempts:0,correct:0,elapsed:0};
 function dispose(){active=false;clearInterval(interval);for(const t of timers)clearTimeout(t);timers.clear();}
 function finish(){if(ended||!active)return;ended=true;stats.elapsed=Math.max(.001,(performance.now()-startTime)/1000);dispose();onEnd({...stats});}
 return {stats,isActive:()=>active,start(){if(active||ended)return;active=true;startTime=performance.now();onTick(durationSeconds);interval=setInterval(()=>{const elapsed=(performance.now()-startTime)/1000;stats.elapsed=elapsed;onTick(mode==='timed'?Math.max(0,durationSeconds-elapsed):elapsed);if(mode==='timed'&&elapsed>=durationSeconds)finish();},100);},answer(roundId,correct){if(!active||answered.has(roundId))return false;answered.add(roundId);stats.attempts++;if(correct)stats.correct++;return true;},schedule(fn,delayMs){if(!active)return;const t=setTimeout(()=>{timers.delete(t);if(active)fn();},delayMs);timers.add(t);return t;},finish,dispose};
}
