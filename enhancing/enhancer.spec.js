// const { describe } = require('yargs');
const enhancer = require('./enhancer.js');

// const item1 = {
//     name: 'shotgun',
//     durability: 85,
//     enhancement: 12
// }

// const item2 = {
//     name: 'pistol',
//     durability: 25,
//     enhancement: 15
// }

// const item3 = {
//     name: 'turret',
//     durability: 74,
//     enhancement: 20
// }


describe('enhancer', () => {
    describe('repair function', () => {
        it('restores durability to 100', () => {
            const item1 = {
                name: 'shotgun',
                durability: 85,
                enhancement: 12
            }
            
            const item2 = {
                name: 'pistol',
                durability: 25,
                enhancement: 15
            }
            
            const item3 = {
                name: 'turret',
                durability: 74,
                enhancement: 20
            }
            const output1 = enhancer.repair(item1).durability;
            const output2 = enhancer.repair(item2).durability;
            const output3 = enhancer.repair(item3).durability;
            expect(output1).toBe(100);
            expect(output2).toBe(100);
            expect(output3).toBe(100);
        });
    });
    describe('success function', () => {
        it('adds 1 to the enhancement stat if it is less than 20', () => {
            const item1 = {
                name: 'shotgun',
                durability: 85,
                enhancement: 12
            }
            
            const item2 = {
                name: 'pistol',
                durability: 25,
                enhancement: 15
            }
            
            const item3 = {
                name: 'turret',
                durability: 74,
                enhancement: 20
            }
            const success1 = enhancer.success(item1).enhancement;
            const success2 = enhancer.success(item2).enhancement;
            const success3 = enhancer.success(item3).enhancement;
            expect(success1).toBe(13);
            expect(success2).toBe(16);
            expect(success3).toBe(20);
        })
    })
    describe('failure function', () => {
        it('decreases durability by 5 if enhancement less than 15, decreases by 10 if enhancement 15 or more; enhancement decreases by 1 if greater than 16', () => {
            const item1 = {
                name: 'shotgun',
                durability: 85,
                enhancement: 12
            }
            
            const item2 = {
                name: 'pistol',
                durability: 25,
                enhancement: 15
            }
            
            const item3 = {
                name: 'turret',
                durability: 74,
                enhancement: 20
            }
            const failure1 = enhancer.fail(item1);
            const failure2 = enhancer.fail(item2);
            const failure3 = enhancer.fail(item3);
            expect(failure1.durability).toBe(80);
            expect(failure2.durability).toBe(15);
            expect(failure3.durability).toBe(64);
            expect(failure1.enhancement).toBe(12);
            expect(failure2.enhancement).toBe(15);
            expect(failure3.enhancement).toBe(19);
        })
    })
});