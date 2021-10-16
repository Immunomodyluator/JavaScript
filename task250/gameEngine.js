import { init } from './functions.js'
import { handleKeyPress } from './handlers.js';
export const startMiningGame = (term, state) => {
    const handler = handleKeyPress(term, state);
    init(term);
    term.on('key', function(name, matches, data) {
        return handler(name, matches, data);
    });
}