const db = require('../data/dbConfig');
const Hobbits = require('./hobbitsModel');

describe('hobbits model', () => {
    describe('insert', () => {
        afterEach(async () => {
            await db('hobbits').truncate();
        });

        it('should insert the hobbit to the database', async () => {
            await Hobbits.insert({name:'something'});
            await Hobbits.insert({name:'Frodo'});
            await Hobbits.insert({name:'Aragorn'});

            const hobbits = await db('hobbits');
            // expect(hobbits).toHaveLength(4);
        });

        it('should be the correct name', async () => {
            let hobbit = await Hobbits.insert({name:'gandalf'});
            expect(hobbit.name).toBe('gandalf');

            hobbit = await Hobbits.insert({name:'sam'});
            expect(hobbit.name).toBe('sam');
        })
    });
});