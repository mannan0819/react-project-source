import React, { useState, useEffect } from 'react';
import { resetWarningCache } from "prop-types";

function Card(props){
	let matchedButton = "tilebutton";

	function clickimg() {
		const nextboard = props.board.slice();
		const nextmatched = props.matched.slice();

		if(props.opentile === 0) {
			nextboard[props.num] = props.hiddencards[props.num];
			props.setOpentile(1);
			props.setBoard(nextboard);
			props.setSecondsel("2");
			props.setFirstsel(props.hiddencards[props.num]);
			props.setPrevnum(props.num);
		} 

		else if (props.opentile === 1) {
			nextboard[props.num] = props.hiddencards[props.num];
			
			props.setBoard(nextboard);
			props.setSecondsel(props.hiddencards[props.num]);
			 if (props.firstsel === props.hiddencards[props.num]){
			 	console.log("MATCHED "+ props.num + "   " + props.prevnum);
			 	nextmatched[props.num] = true;
				nextmatched[props.prevnum] = true;
			 }
			//props.setFirstsel("ll");
			console.log(props.firstsel + "   -4  " + props.secondsel);
			props.setMatched(nextmatched);
			props.setOpentile(2);
		} 
		
		else if (props.opentile ===2) {
			//console.log(props.board);
			props.setSecondsel("2");
			props.setFirstsel(props.hiddencards[props.num]);
			props.setPrevnum(props.num);
			props.setOpentile(1);
			props.setBoard((prev)=>{
				for(let x = 0; x < prev.length; x++){
					if(x===props.num){
						prev[x] = props.hiddencards[props.num];
					} else{
						if(!props.matched[x])	{
						prev[x] = null;
						}
					}
				}
				return prev;
			})
			console.log(props.firstsel + "   -4  " + props.secondsel);
			//console.log(props.board);
		}
		console.log(props.matched);
	}

	if (props.matched[props.num])
	{
		matchedButton = "tilematchbutton";
	}

	return (<div 
				className="tile" 
				onClick={clickimg}
				>
				
				<button className={matchedButton}>
					{props.board[props.num]}
				</button>
			
			</div>)
}


export default Card

	// function wait(ms){
	// 	var start = new Date().getTime();
	// 	var end = start;
	// 	while(end < start + ms) {
	// 	  end = new Date().getTime();
	//    }
	//  }


			// if ((!nextile[props.day]))
		// {
		// 	console.log("here");
		// 	console.log(props.opentile);
		// 	if(props.opentile === 0) {
		// 		console.log("a");
		// 		nextile[props.day] = true;
		// 		nextboard[props.day] = "OO"
		// 		//props.lab = props.day;
		// 		props.setVisible(nextile);	
		// 		props.setBoard(nextboard);
		// 		props.setOpentile(1); 
		// 	}
		// 	if(props.opentile === 1) {
		// 		console.log("b");

		// 		const nextboard = props.board.slice();
		// 		nextboard[props.day] = "OO";
		// 		props.setBoard(Array(props.tiles).fill(null));
		// 		//reset(); 
		// 		props.setOpentile(0);
				
				
		// 		console.log("endd");
		// 		//props.setBoard(Array(props.tiles).fill(null));
		// 	}
		// }
