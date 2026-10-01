const options=(a,ta,b,tb)=>[{text:a,trait:ta},{text:b,trait:tb}];
export const portraits=[
 {prompt:'A new project lands on your desk.',options:options('Map out a plan before starting','Planning','Explore a first idea and learn by doing','Exploration')},
 {prompt:'You have an uninterrupted afternoon.',options:options('Make space for focused solo work','Independent focus','Arrange a working session with teammates','Collaboration')},
 {prompt:'Your team needs a fresh approach.',options:options('Refine a method that already works','Consistency','Try a different way of doing it','Exploration')},
 {prompt:'There are several tasks to finish.',options:options('Finish one before moving to the next','Independent focus','Move between tasks as priorities shift','Adaptability')},
 {prompt:'A teammate brings an early idea.',options:options('Ask questions and develop it together','Collaboration','Take time to think and respond later','Reflection')},
 {prompt:'You are preparing a presentation.',options:options('Rehearse the structure in advance','Planning','Keep the outline flexible for discussion','Adaptability')},
 {prompt:'You want to learn a new tool.',options:options('Follow a structured tutorial','Consistency','Experiment with a small project','Exploration')},
 {prompt:'A busy week has just ended.',options:options('Review what worked and what changed','Reflection','Plan next week’s priorities','Planning')}
];
export const statements=[
 {text:'I like to decide my priorities before starting work.',trait:'Planning'},
 {text:'Talking through an idea helps me develop it.',trait:'Collaboration'},
 {text:'I enjoy testing unfamiliar ways to solve a problem.',trait:'Exploration'},
 {text:'I am comfortable adjusting my approach when plans change.',trait:'Adaptability'},
 {text:'I prefer uninterrupted time when working on a difficult task.',trait:'Independent focus'},
 {text:'I often review my work to understand what I could do differently.',trait:'Reflection'},
 {text:'A reliable routine helps me do my best work.',trait:'Consistency'},
 {text:'I find it useful to discuss progress with others regularly.',trait:'Collaboration'},
 {text:'I set intermediate milestones for longer projects.',trait:'Planning'},
 {text:'I am curious about methods beyond the ones I already know.',trait:'Exploration'}
];
export const chats=[
 {from:'Alex',prompt:'We have a rough idea for the project. How would you like to get started?',options:options('Let’s outline the steps and agree on a first milestone.','Planning','Let’s build a small example and see what we learn.','Exploration')},
 {from:'Sam',prompt:'I’m stuck on this problem. Do you have a few minutes?',options:options('Let’s talk it through together.','Collaboration','Send me the details and I’ll take a close look.','Reflection')},
 {from:'Morgan',prompt:'The priority changed this morning. What would help you move forward?',options:options('A clear new sequence of tasks.','Planning','Room to adjust the work as new information comes in.','Adaptability')},
 {from:'Jamie',prompt:'We could use the existing process or test a new one. What do you think?',options:options('The existing process gives us a reliable starting point.','Consistency','A small trial of the new process could be useful.','Exploration')},
 {from:'Alex',prompt:'How should we work on the first draft?',options:options('I can write a version on my own, then share it.','Independent focus','Let’s sketch the main points in a working session.','Collaboration')},
 {from:'Sam',prompt:'We just finished a busy launch. What would you like to do next?',options:options('Take a little time to review what we learned.','Reflection','Turn our next priorities into an action plan.','Planning')},
 {from:'Morgan',prompt:'There are several small requests coming in. How do you prefer to handle them?',options:options('Group similar requests and work through them in order.','Consistency','Switch between them according to what is most urgent.','Adaptability')},
 {from:'Jamie',prompt:'We have an open hour to improve the project. Any preference?',options:options('Explore an idea we have not tried yet.','Exploration','Concentrate on finishing one part really well.','Independent focus')}
];
export const emotions=[
 {label:'Happy',cue:'The mouth curves upward and the eyes appear relaxed.',mouth:'M60 112 Q90 148 120 112',brows:'M56 71 Q68 65 79 71 M101 71 Q112 65 124 71',eyes:'normal'},
 {label:'Sad',cue:'The mouth turns downward and the inner ends of the eyebrows lift.',mouth:'M63 128 Q90 102 117 128',brows:'M55 72 78 63 M102 63 125 72',eyes:'normal'},
 {label:'Angry',cue:'The eyebrows slope inward and down, with a tense, flat mouth.',mouth:'M65 122 115 122',brows:'M54 63 79 75 M101 75 126 63',eyes:'normal'},
 {label:'Surprised',cue:'Raised eyebrows, wide eyes, and an open rounded mouth suggest surprise.',mouth:'M80 112 C65 148 116 148 101 112 C96 104 85 104 80 112',brows:'M55 59 Q68 44 80 59 M100 59 Q113 44 125 59',eyes:'wide'},
 {label:'Worried',cue:'The inner eyebrows lift and draw together, above a small tense mouth.',mouth:'M69 126 Q91 116 110 125',brows:'M55 70 78 61 M102 61 125 70',eyes:'wide'},
 {label:'Neutral',cue:'Relaxed eyebrows and a level mouth show little expression in this illustration.',mouth:'M68 122 112 122',brows:'M56 64 79 64 M101 64 124 64',eyes:'normal'}
];
