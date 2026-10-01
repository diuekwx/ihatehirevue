import test from 'node:test';import assert from 'node:assert/strict';
import {createSession} from '../dist/src/session.js';
test('duplicate round answers count once and completion fires once',()=>{let ends=0;const s=createSession({mode:'learn',onEnd:()=>ends++});s.start();assert.equal(s.answer(1,true),true);assert.equal(s.answer(1,false),false);s.finish();s.finish();assert.equal(ends,1);assert.equal(s.stats.correct,1);assert.equal(s.stats.attempts,1);assert.equal(s.answer(2,true),false);});
test('disposed timers never execute',async()=>{let ran=false;const s=createSession({mode:'learn'});s.start();s.schedule(()=>ran=true,10);s.dispose();await new Promise(r=>setTimeout(r,25));assert.equal(ran,false);});
test('deadline finishes timed games',async()=>{let result;const s=createSession({mode:'timed',durationSeconds:.02,onEnd:r=>result=r});s.start();await new Promise(r=>setTimeout(r,150));assert.ok(result);assert.equal(s.isActive(),false);});
