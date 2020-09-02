import React, {useState, useEffect} from "react"
import Card from "./card"

let hiddencards = ["A1", "A1",
	"B2","B2",
	"C3","C3",
	"D4","D4",
	"E5","E5",
	"F6","F6",
	"G7","G7",
	"H8","H8",
	"I9","I9",
	"J10","J10",
	"K11","K11",
	"L12","L12",
	"M13","M13",
	"N14","N14",
	"O15","O15",
]




function Game(props){

	function shuffle(array) {
		array.sort(() => Math.random() - 0.5);
	  }

	useEffect(() => {

		console.log("Mount");
		shuffle(hiddencards);
		console.log(hiddencards);
		
	}, []);



	const num = []	
	for(let i=0; i<=props.tiles-1; i++){
		num[i]= i;
	}	
	const [board, setBoard] = useState(()=>Array(props.tiles).fill(null));
	const [matched, setMatched] = useState(()=>Array(props.tiles).fill(false));
	const [opentile, setOpentile] = useState(0);
	const [firstsel, setFirstsel] = useState("1");
	const [secondsel, setSecondsel] = useState("2");
	const [prevnum, setPrevnum] = useState(-1);
	


	const cardlist = num.map(item => 
				<Card 
				num={item} 
				board={board}
				setBoard={setBoard}
				matched={matched}
				setMatched={setMatched}
				opentile={opentile}
				setOpentile={setOpentile}
				hiddencards={hiddencards}
				firstsel={firstsel}
				secondsel={secondsel}
				setFirstsel={setFirstsel}
				setSecondsel={setSecondsel}
				prevnum={prevnum}
				setPrevnum={setPrevnum}
				/>)

	return (
		<div>
			<div className="Game" >
				<div className="title">Guess</div>
				{cardlist}
				
			</div>
			
		</div>
	)

}

export default Game



