const Header = (props) =>
(
    <header>
        <h1>{ props.title }</h1>
        <span className="stats">Players: { props.totalPlayers }</span>
    </header>
);

const Player = () =>
    (
        <div className="player">
            <span className="player-name">
                Xyeres
            </span>
            <Counter />
        </div>
    );

const Counter = () =>
    (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">450</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
    
const App = () => {
    return (
        <div className="scoreboard">
            <Header
                title="Scoreboard"
                totalPlayers={32}
            />
            {/* Players list */}
            <Player />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);