let cards = [

        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1yxw7Sa2ZM_bZAbmY5PUk7XwW3QYAGQqFSw&usqp=CAU",
            value: 1,
            status: "closed"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1yxw7Sa2ZM_bZAbmY5PUk7XwW3QYAGQqFSw&usqp=CAU",
            value: 1,
            status: "closed"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi9t9BRTdCoEat_rwyNvTmyvzZiePhbcF5XA&usqp=CAU",
            value: 2,
            status: "closed"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi9t9BRTdCoEat_rwyNvTmyvzZiePhbcF5XA&usqp=CAU",
            value: 2,
            status: "closed"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdpeJgIVAr6TBxlr6XuIyq29QzgvzwgTBFKw&usqp=CAU",
            value: 3,
            status: "closed"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdpeJgIVAr6TBxlr6XuIyq29QzgvzwgTBFKw&usqp=CAU",
            value: 3,
            status: "closed"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnoYQnWxz88kZjxsTU_7fI7vYY2__fUToc5g&usqp=CAU",
            value: 4,
            status: "closed"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnoYQnWxz88kZjxsTU_7fI7vYY2__fUToc5g&usqp=CAU",
            value: 4,
            status: "closed"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAGEUzQipC7KzOtaDJKUyDv6s-g3uZxIxOlg&usqp=CAU",
            value: 5,
            status: "closed"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAGEUzQipC7KzOtaDJKUyDv6s-g3uZxIxOlg&usqp=CAU",
            value: 5,
            status: "closed"
        }
    ]
    // console.dog(cards)

let temp;
for (let i = cards.length - 1; i >= 0; i--) {

    let j = Math.floor(Math.random() * (i + 1));

    temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;

}

let cardscopy = cards;

function displaycards(data) {

    let cardsString = "";

    data.forEach(function(card, index) {
        cardsString += `
        <div class="card" style="background-image:url('${card.image}')">
            <div class=" overlay ${card.status}" onclick="opencard(${index})">
            </div>
        </div>
        `;

    });


    document.getElementById('cards').innerHTML = cardsString;

}

function startNewGame() {
    alert('yay you won! Do you want to start new game');
    location.reload();
}


displaycards(cards);


let cardcount = 1;
let val1 = null,
    val2 = null;
let score = 0;


function opencard(index) {

    cards[index].status = "opened";
    if (cardcount === 1) {
        val1 = cards[index].value;
        cardcount++;
    } else if (cardcount === 2) {
        val2 = cards[index].value;

        if (val1 === val2) {
            score++;
            document.getElementById('score').innerText = score;
            val1 = null;
            val2 = null;
            cardcount = 1;

        } else {
            alert("game over ,start a new game");
            location.reload();

        }

    }

    displaycards(cards);
    if (document.getElementById('score').innerText == 5) {
        startNewGame();
    }


}