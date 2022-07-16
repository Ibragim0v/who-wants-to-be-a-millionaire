import { useEffect, useMemo, useState } from "react"
import "./App.css"
import Start from "./components/Start/Start"
import Timer from "./components/Timer/Timer"
import { Trivia } from "./components/Trivia/Trivia"

function App() {
    const [questionNumber, setQuestionNumber] = useState(1)
    const [stop, setStop] = useState(false)
    const [earned, setEarned] = useState("$ 0")
    const [username, setUsername] = useState(null)

    const data = [
        {
            id: 1,
            question:
                "Rolex is a company that specializes in what type of product?",
            answers: [
                {
                    text: "Phone",
                    correct: false,
                },
                {
                    text: "Watches",
                    correct: true,
                },
                {
                    text: "Food",
                    correct: false,
                },
                {
                    text: "Cosmetic",
                    correct: false,
                },
            ],
        },
        {
            id: 2,
            question: "Who played the character of Harry Potter in movie?",
            answers: [
                {
                    text: "Johny Depp",
                    correct: false,
                },
                {
                    text: "Robert Dawni",
                    correct: false,
                },
                {
                    text: "Will Smith",
                    correct: false,
                },
                {
                    text: "Daniel Red Cliff",
                    correct: true,
                },
            ],
        },
        {
            id: 3,
            question: "When did the website Facebook launch",
            answers: [
                {
                    text: "2004",
                    correct: true,
                },
                {
                    text: "2005",
                    correct: false,
                },
                {
                    text: "2006",
                    correct: false,
                },
                {
                    text: "2007",
                    correct: false,
                },
            ],
        },
        {
            id: 4,
            question: "What is the smallest planet in our solar system?",
            answers: [
                {
                    text: "Jupiter",
                    correct: false,
                },
                {
                    text: "Mars",
                    correct: false,
                },
                {
                    text: "Mercury",
                    correct: true,
                },
                {
                    text: "Earth",
                    correct: false,
                },
            ],
        },
        {
            id: 5,
            question:
                "In which European country would you find the Rijksmuseum?",
            answers: [
                {
                    text: "Spain",
                    correct: false,
                },
                {
                    text: "France",
                    correct: false,
                },
                {
                    text: "Netherlands",
                    correct: true,
                },
                {
                    text: "Russia",
                    correct: false,
                },
            ],
        },
        {
            id: 6,
            question: "Which Disney Princess called Gus and Jaq friends?",
            answers: [
                {
                    text: "Jasmine",
                    correct: false,
                },
                {
                    text: "Belle",
                    correct: false,
                },
                {
                    text: "Cinderella",
                    correct: true,
                },
                {
                    text: "Rapunzel",
                    correct: false,
                },
            ],
        },
        {
            id: 7,
            question: "From which US city do the band The Killers originate?",
            answers: [
                {
                    text: "Florida",
                    correct: false,
                },
                {
                    text: "Washington",
                    correct: false,
                },
                {
                    text: "New York",
                    correct: false,
                },
                {
                    text: "Las Vegas",
                    correct: true,
                },
            ],
        },
        {
            id: 8,
            question:
                "How many human players are there on each side in a polo match?",
            answers: [
                {
                    text: "6",
                    correct: false,
                },
                {
                    text: "3",
                    correct: false,
                },
                {
                    text: "4",
                    correct: true,
                },
                {
                    text: "5",
                    correct: false,
                },
            ],
        },
        {
            id: 9,
            question: "What is the capital of New Zealand?",
            answers: [
                {
                    text: "Wellington",
                    correct: true,
                },
                {
                    text: "Tashkent",
                    correct: false,
                },
                {
                    text: "Warsaw",
                    correct: false,
                },
                {
                    text: "Zagreb",
                    correct: false,
                },
            ],
        },
        {
            id: 10,
            question: "What does the Latin Tempus mean in English?",
            answers: [
                {
                    text: "Water",
                    correct: false,
                },
                {
                    text: "Time",
                    correct: true,
                },
                {
                    text: "Street",
                    correct: false,
                },
                {
                    text: "Cost",
                    correct: false,
                },
            ],
        },
        {
            id: 11,
            question: "In what year did The Beatles split up?",
            answers: [
                {
                    text: "1984",
                    correct: false,
                },
                {
                    text: "1991",
                    correct: false,
                },
                {
                    text: "1970",
                    correct: true,
                },
                {
                    text: "1945",
                    correct: false,
                },
            ],
        },
        {
            id: 12,
            question: "Which European city hosted the 1936 Summer Olympics?",
            answers: [
                {
                    text: "Paris",
                    correct: false,
                },
                {
                    text: "Berlin",
                    correct: true,
                },
                {
                    text: "Moscow",
                    correct: false,
                },
                {
                    text: "Madrid",
                    correct: false,
                },
            ],
        },
        {
            id: 13,
            question: "Which colour pill does Neo swallow in The Matrix?",
            answers: [
                {
                    text: "Red",
                    correct: true,
                },
                {
                    text: "White",
                    correct: false,
                },
                {
                    text: "Black",
                    correct: false,
                },
                {
                    text: "Dark Blue",
                    correct: false,
                },
            ],
        },
        {
            id: 14,
            question:
                "What number is found in reference to their varieties on Heinz products?",
            answers: [
                {
                    text: "55",
                    correct: false,
                },
                {
                    text: "56",
                    correct: false,
                },
                {
                    text: "57",
                    correct: true,
                },
                {
                    text: "58",
                    correct: false,
                },
            ],
        },
        {
            id: 15,
            question: "How many permanent teeth does a dog have?",
            answers: [
                {
                    text: "24",
                    correct: false,
                },
                {
                    text: "42",
                    correct: true,
                },
                {
                    text: "32",
                    correct: false,
                },
                {
                    text: "19",
                    correct: false,
                },
            ],
        },
    ]

    const moneyPyramid = useMemo(
        () =>
            // eslint-disable-next-line no-unused-expressions
            [
                { id: 15, amount: "$ 1000000" },
                { id: 14, amount: "$ 500000" },
                { id: 13, amount: "$ 250000" },
                { id: 12, amount: "$ 125000" },
                { id: 11, amount: "$ 64000" },
                { id: 10, amount: "$ 32000" },
                { id: 9, amount: "$ 16000" },
                { id: 8, amount: "$ 8000" },
                { id: 7, amount: "$ 4000" },
                { id: 6, amount: "$ 2000" },
                { id: 5, amount: "$ 1000" },
                { id: 4, amount: "$ 500" },
                { id: 3, amount: "$ 300" },
                { id: 2, amount: "$ 200" },
                { id: 1, amount: "$ 100" },
            ],
        []
    )

    useEffect(() => {
        questionNumber > 1 &&
            setEarned(
                moneyPyramid.find((m) => m.id === questionNumber - 1).amount
            )

        if (questionNumber === 16) {
            setStop(true)
        }
    }, [moneyPyramid, questionNumber])

    return (
        <div className="App">
            {username ? (
                <>
                    <div className="main">
                        {stop ? (
                            <h1 className="endText">You earned: {earned}</h1>
                        ) : (
                            <>
                                <div className="top">
                                    <div className="timer">
                                        <Timer
                                            setStop={setStop}
                                            questionNumber={questionNumber}
                                        />
                                    </div>
                                </div>
                                <div className="bottom">
                                    <Trivia
                                        data={data}
                                        setQuestionNumber={setQuestionNumber}
                                        questionNumber={questionNumber}
                                        setStop={setStop}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                    <div className="pyramid">
                        <ul className="moneyList">
                            {moneyPyramid.map((m) => (
                                <li
                                    className={
                                        questionNumber === m.id
                                            ? "moneyListItem active"
                                            : "moneyListItem"
                                    }
                                >
                                    <span className="moneyListItemNumber">
                                        {m.id}
                                    </span>
                                    <span className="moneyListItemAmount">
                                        {m.amount}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <Start setUsername={setUsername} />
            )}
        </div>
    )
}

export default App
