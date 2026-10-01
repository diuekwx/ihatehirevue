import test from 'node:test';
import assert from 'node:assert/strict';
import {makeNumberRound,checkNumberSelection} from '../dist/src/logic.js';
import {makePatternRound,renderPattern,patternKey} from '../dist/src/patterns.js';
test('number challenge grows and every stage has a valid exact-size solution',()=>{for(const d of ['easy','standard','hard'])for(let level=0;level<5;level++){const r=makeNumberRound(d,Math.random,level);assert.ok(r.numbers.length>=9);assert.equal(r.solution.length,r.required);assert.ok(checkNumberSelection(r,r.solution));assert.ok(r.required>=3);assert.equal(new Set(r.numbers).size,r.numbers.length);}assert.ok(makeNumberRound('hard',Math.random,4).required>makeNumberRound('hard').required);});
test('number answers reject duplicate, out-of-range and wrong-size selections',()=>{const r={numbers:[2,3,5,7],target:5,required:2};assert.ok(checkNumberSelection(r,[0,1]));for(const s of [[2],[0,0],[-1,1],[0,4],[]])assert.equal(checkNumberSelection(r,s),false);});
test('ribbon patterns have visible distractors and ignore motion',()=>{for(let i=0;i<30;i++){const r=makePatternRound('hard','ribbon');assert.equal(r.target.family,'ribbon');assert.equal(patternKey(r.target),patternKey({...r.target,rotation:180,flipped:true}));r.items.forEach((p,j)=>assert.equal(renderPattern(p)===renderPattern(r.target),r.answers.includes(j)));}});
