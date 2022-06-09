function playingCards(face, suit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', ]
    if (face.indexOf(face) == -1) {
        throw new Error('Invalid face: ' + face);
    }
    let suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
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
playingCards('A', 'S')
playingCards('10', 'H')
playingCards('1', 'C')