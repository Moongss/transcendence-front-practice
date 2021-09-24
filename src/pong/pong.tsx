import React, { KeyboardEvent } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import './pong.css';

function Pong() {

	const canvasRef = useRef<HTMLCanvasElement>(null);

	const [coord, setcoord] = useState({x: 320, y: 580});
	const [speed, setspeed] = useState({dx: 4, dy: -2});
	const [time, setTime] = useState(0);
	
	const ballRadius = 10;

	useEffect(() => {
		const canvas: HTMLCanvasElement | null = canvasRef.current;
		if (!canvas)
			return;

		const ctx = canvas.getContext("2d");
		if (!ctx)
			return ;

		const timer = setInterval(() => {
			draw();
			setTime(time + 1);
		}, 10);

		const draw = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			drawball();
			setcoord({x: coord.x + speed.dx, y: coord.y + speed.dy});

			if (coord.x + speed.dx > canvas.width-ballRadius || coord.x + speed.dx < ballRadius) {
				speed.dx = -speed.dx ;
			}
			
			if (coord.y + speed.dy > canvas.height-ballRadius || coord.y + speed.dy < ballRadius) {
				speed.dy = -speed.dy;
			}
			console.log(`x : ${coord.x}, y : ${coord.y}`)
		}

		const drawball = () => {
			ctx.beginPath();
			ctx.arc(coord.x, coord.y, ballRadius, 0, Math.PI*2);
			ctx.fillStyle = "#0095DD";
			ctx.fill();
			ctx.closePath();
		}

		// keyEvent();
		return () => clearInterval(timer);
	}, [time]);

	// function keyEvent() {
	// 	window.addEventListener("keydown", (e) => {
	// 		if (e.key === "ArrowLeft")
	// 			console.log(`move left`);
	// 		else if (e.key === "ArrowRight")
	// 			console.log(`move rght`);
	// 	});
	// }

	return (
		<>
			<canvas ref={canvasRef} height={600} width={640} className="canvas"/>
			test
		</>
  	);
}

export default Pong;
