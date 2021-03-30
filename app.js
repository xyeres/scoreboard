const Header = (props) =>
(
    <header>
        <h1>{props.title}</h1>
        <span className="stats">Players: {props.totalPlayers}</span>
    </header>
);

const Player = (props) =>
(
    <div className="player">
        <span className="player-name">
            <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
            {props.playerName}
        </span>
        <Counter />
    </div>
);

class Counter extends React.Component {
    state = {
        playerScore: 0
    };

    incrementScore = () => {
        this.setState(prevState => ({
            playerScore: prevState.playerScore + 1
        }))
    }

    decrementScore() {
        if (this.state.playerScore > 0) {
            this.setState(prevState => ({
                playerScore: prevState.playerScore - 1
            }))
        }
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.decrementScore()}> - </button>
                <span className="counter-score">{this.state.playerScore}</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    }
}
class App extends React.Component {
    state = {
        players: [
            {
                name: "Guil",
                id: 1
            },
            {
                name: "Treasure",
                id: 2
            },
            {
                name: "Ashley",
                id: 3
            },
            {
                name: "James",
                id: 4
            }
        ]
    };

    handleRemovePlayer = (id) => {
        this.setState(prevState => ({
            players: prevState.players.filter(p => p.id !== id)
        }));
    }

    render() {
        return (
            <div className="scoreboard">
                <Header
                    title="Scoreboard"
                    totalPlayers={this.state.players.length}
                />
                {/* Players list */}
                {this.state.players.map(p =>
                    <Player
                        playerName={p.name}
                        id={p.id}
                        key={p.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                    />
                )}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);