function deck(cards) {
    let res = [];
    for (let cardAsStr of cards) {
        let face = cardAsStr.slice(0, -1);
        let suit = cardAsStr.slice(-1);
        try {
            let card = createCard(face, suit);
            res.push(card);
        } catch (err) {
            res = ['Invalid card: ' + cardAsStr]
        }
    }
    console.log(res.join(' '))

    function createCard(face, suit) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        let suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }
        if (faces.includes(face) == false) {
            throw new Error('Invalid face: ' + face);
        }
        if (suits[suit] == undefined) {
            throw new Error('Invalid suit: ' + face);
        }

        let res = {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
        return res;
    }

}