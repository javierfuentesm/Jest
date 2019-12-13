import {getCharacter} from '../snapshot'
import rick from '../rick.json'
describe('Es hora de las instantaneas', () => {
    test('Snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot()
    });
    test('Siempre fallara la isntantanea', () => {
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random()*20)
        }
        expect(user).toMatchSnapshot()
    });
    test('Tenemos una excepcion dentro del snapshot', () => {
        const user={
            id: Math.floor(Math.random()*20),
            name:"Javier Fuentes"

        }
        expect(user).toMatchSnapshot({
            id:expect.any(Number)
        })
    });
})
