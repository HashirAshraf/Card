function pageStart() {
    let colours = ['R', 'B', 'Y'];
    let values = ['1', '2', '3','4', '5', '6','7', '8', '9', '10'];
    //needs all the colours and numbers in order to get combined
    let deck = createDeck(colours, values);
    shuffleArray(deck)
    displayCards(deck, 0);
    console.log(deck);
}



function createDeck(colours, values) {
    let deck = new Array();
    for (let i = 0; i < colours.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let card = {Colour: colours[i], Value: values[j]};
            deck.push(card);
            //.push used to combine colours and values (creating the card from the seperate arrays)
        }
    }
    return deck;
}

function shuffleArray(deck)
{
    for (let i = 0; i < 1000; i++) {
        let index1 = Math.floor((Math.random() *  deck.length));
        let index2 = Math.floor((Math.random() *  deck.length));
        let temp = deck[index1];
        deck[index1] = deck[index2];
        deck[index2] = temp;
    }
}

function displayCards(deck, cardNumber) {
    document.getElementById("deck").innerHTML = deck[cardNumber].Colour + deck[cardNumber].Value;
}

function pickCards(shuffledDeck) {
    let playerTwoDeck[];

    while (let i = 1; i < shuffledDeck.length; i++) {
        if ()


            }

}
