const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));

const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
