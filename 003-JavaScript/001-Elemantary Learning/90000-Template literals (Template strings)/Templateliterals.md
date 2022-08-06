# Template literals (Template strings)
Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions, and for special constructs called tagged templates.

    `string text`

    `string text line 1
    string text line 2`

    `string text ${expression} string text`

    `\`` === '`' // --> true
    
    `\${1}` === '${1}' // --> true