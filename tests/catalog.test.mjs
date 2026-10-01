import test from 'node:test';
import assert from 'node:assert/strict';
import { games } from '../dist/src/catalog.js';
test('all thirteen game formats have unique IDs and playable instructions',()=>{
 assert.equal(games.length,13); assert.equal(new Set(games.map(g=>g.id)).size,13);
 for(const g of games){assert.ok(g.instructions.length>40);assert.ok(g.durationSeconds>0);}
 assert.equal(games.filter(g=>!g.scored).length,3);
});
