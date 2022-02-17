let familie = ['arthur', 'romain', 'stephanie', 'cedric', 'gilbert', 'tom'];

console.log(familie.length);

for(let i = 0; i < familie.length; i += 2){
    console.log(familie[i]);
}

let VoegNaamToe = () => {
    let naam = prompt("Voeg een naam toe");
    familie.push(naam);
}

VoegNaamToe();

console.log(familie.join(', '));
