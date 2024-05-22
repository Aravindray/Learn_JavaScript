// Rock, Paper, or Scissor

let wantToPlay = confirm('Do you want to play rock, paper, or scissor game?')

if (wantToPlay) {
    let userChoose = prompt('Enter rock, paper, or scissor')
    if (userChoose) {
        let player = userChoose.trim().toLowerCase()
        if (player === 'rock' || player === 'paper' || player === 'scissor') {
            let computerChoose = ['rock', 'paper', 'scissor']
            let computerPick = computerChoose[Math.floor(Math.random() * computerChoose.length)]
            console.log(player)
            console.log(computerPick)
            let result = player === computerPick ? `It's a tie`
                : player === 'paper' && computerPick === 'scissor' ? `Player - ${player}\nComputer - ${computerPick}\nComputer Wins!!!`
                : player === 'scissor' && computerPick === 'rock' ? `Player - ${player}\nComputer - ${computerPick}\nComputer Wins!!!`
                : player === 'rock' && computerPick === 'paper' ? `Player - ${player}\nComputer - ${computerPick}\nComputer Wins!!!`
                : `Player - ${player}\nComputer - ${computerPick}\nYou Won!!!`
            alert(result)
        } else {
            alert('Input is not valid! expect rock, paper, scissor')
        }
    } else {
        alert(`You didn't enter anything, maybe we play next time`)
    }
} else {
    alert('Okay, maybe we play next time.')
}
