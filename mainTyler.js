const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneButton = document.querySelector('#fortune-button');
const fortuneDisplay = document.querySelector('#fortune-display');

fortuneButton.addEventListener('click', () => {
    fetch('/getFortune')
        .then(response => response.text())
        .then(fortune => fortuneDisplay.textContent = fortune)
        .catch(error => console.log(error));
});


const fortunes = [
    "You will find love on your next adventure.",
    "You will make a new friend today.",
    "Your hard work will pay off in unexpected ways.",
    "Good news is coming your way soon.",
    "You will overcome a challenge with grace and ease."
];
document.getElementById("color-btn").addEventListener("click", async () => {
    const response = await fetch("/randomColor", {
        method: "POST",
    });
    const color = await response.text();
    alert(`Your random color is: ${color}`);
});

const getRandomBookButton = document.getElementById("get-random-book-button");
const deleteBookForm = document.getElementById("delete-book-form");

getRandomBookButton.addEventListener("click", () => {
    fetch("/api/books/random")
        .then(response => response.text())
        .then(data => {
            alert(`You should read: ${data}`);
        })
        .catch(error => {
            console.error(error);
        });
});

deleteBookForm.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(deleteBookForm);
    const book = formData.get("book");

    fetch("/api/books/delete", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ book })
    })
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.error(error);
        });
});
