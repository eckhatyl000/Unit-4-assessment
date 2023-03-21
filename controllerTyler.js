module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }


}
module.exports = {

    getFortune: (req, res) => {

        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];

        res.status(200).send(randomFortune);

    }
}

module.exports = {
    getRandomColor: (req, res) => {
        const colors = ["red", "green", "blue", "yellow", "purple"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        res.status(200).send(randomColor);
    },
};
let books = [
    "To Kill a Mockingbird",
    "The Great Gatsby",
    "1984",
    "Pride and Prejudice",
    "The Catcher in the Rye"
];

module.exports = {
    getRandomBook: (req, res) => {
        let randomIndex = Math.floor(Math.random() * books.length);
        let randomBook = books[randomIndex];
        res.status(200).send(randomBook);
    },

    deleteBook: (req, res) => {
        const { book } = req.body;
        let index = books.indexOf(book);
        if (index > -1) {
            books.splice(index, 1);
            res.status(200).send(`${book} has been removed from the list of recommended books.`);
        } else {
            res.status(400).send(`${book} is not in the list of recommended books.`);
        }
    }
}
