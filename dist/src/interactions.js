export const shouldHandleSameHash=(destination,current)=>destination!=='#main'&&destination===current;
export function canRespondWithSpace({tag,isResponse=false,dialogOpen=false,editable=false}){return !dialogOpen&&!editable&&(isResponse||!['BUTTON','INPUT','SELECT','TEXTAREA','A'].includes(tag));}
