function * testGeneratorFunction() {
    console.log('Line 2');
    console.log('Line 3');
    console.log('Line 4');
    console.log('Line 5');
    console.log('Line 6');
    console.log('Line 7');
    yield 'Foo, ';
    console.log('Line 9');
    console.log('Line 10');
    console.log('Line 11');
    console.log('Line 12');
    yield 'Bar!!!!!';
}

const generatorObj = testGeneratorFunction();
console.log(generatorObj.next().value);
console.log(generatorObj.next().value);