const players = [
    { name: 'Messi', img: 'messi.jpg' },
    { name: 'Ronaldo', img: 'ronaldo.jpg' },
    { name: 'Neymar', img: 'neymar.jpg' },
    { name: 'Mbappe', img: 'mbappe.jpg' },
    { name: 'Lewandowski', img: 'lewandowski.jpg' }
];

let score = 0;

let randomPlayer = players[Math.floor(Math.random() * players.length)];

document.getElementById('random-player').textContent = `Tapmağa çalış: ${randomPlayer.name}`;

const cardsContainer = document.getElementById('cards-container');

function resetGame() {
    randomPlayer = players[Math.floor(Math.random() * players.length)];
    document.getElementById('random-player').textContent = `Tapmağa çalış: ${randomPlayer.name}`;
    document.getElementById('result').textContent = '';
}

players.forEach(player => {
    const card = document.createElement('div');
    card.classList.add('m-2', 'border', 'border-gray-300', 'cursor-pointer', 'transition-transform', 'transform', 'hover:scale-110', 'w-32', 'h-32', 'overflow-hidden', 'rounded-lg', 'shadow-md');
    card.innerHTML = `<img src="img/${player.img}" alt="${player.name}" class="w-full h-full object-cover rounded-lg">`;
    card.addEventListener('click', () => {
        if (player.name === randomPlayer.name) {
            score++;
            document.getElementById('result').textContent = 'Təbriklər! Düz tapdınız!';
            document.getElementById('result').classList.add('text-green-500');
            document.getElementById('result').classList.remove('text-red-500');
            document.getElementById('score').textContent = `Xal: ${score}`;
            setTimeout(resetGame, 1000); 
        } else {
            document.getElementById('result').textContent = 'Səhv tapdınız, yenidən cəhd edin.';
            document.getElementById('result').classList.add('text-red-500');
            document.getElementById('result').classList.remove('text-green-500');
        }
    });
    cardsContainer.appendChild(card); 
});

