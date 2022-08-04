## Generator function
Normal function runs once. But, Generator function can stop and then continue. It produces a sequence of results instead of a single result.

## Example 

    function* generator() {
    yield 1;
    yield 2;
    yield 3;
    }

    const gen = generator();         // "Generator { }"

    console.log(gen.next().value); // 1
    console.log(gen.next().value); // 2
    console.log(gen.next().value); // 3


## Usages :
  * async functionality
  * infinite data streams
