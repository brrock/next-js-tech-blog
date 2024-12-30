"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const particles: Particle[] = [];
		const particleCount = 100;

		class Particle {
			x: number;
			y: number;
			size: number;
			speedX: number;
			speedY: number;
			color: string;

			constructor() {
				this.x = Math.random() * canvas.width;
				this.y = Math.random() * canvas.height;
				this.size = Math.random() * 5 + 1;
				this.speedX = Math.random() * 3 - 1.5;
				this.speedY = Math.random() * 3 - 1.5;
				this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
			}

			update() {
				this.x += this.speedX;
				this.y += this.speedY;

				if (this.x > canvas.width) this.x = 0;
				else if (this.x < 0) this.x = canvas.width;

				if (this.y > canvas.height) this.y = 0;
				else if (this.y < 0) this.y = canvas.height;
			}

			draw() {
				ctx.fillStyle = this.color;
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.closePath();
				ctx.fill();
			}
		}

		function init() {
			for (let i = 0; i < particleCount; i++) {
				particles.push(new Particle());
			}
		}

		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for (const particle of particles) {
				particle.update();
				particle.draw();
			}
			requestAnimationFrame(animate);
		}

		init();
		animate();

		const handleResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed top-0 left-0 w-full h-full -z-10"
		/>
	);
}
