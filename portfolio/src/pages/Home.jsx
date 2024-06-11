import React from "react";
import Resume from "../assets/Shubham_Resume.pdf";
import ProfilePic from "../assets/PhShubham_Kumar.jpg";

function Home() {
	return (
		<>
			<div className="home  px-20 w-full h-[80vh] flex md:flex-row md:justify-between flex-col justify-center items-center">
				<div className="left sm:order-2 md:order-1 flex flex-col md:items-start sm:items-center sm:justify-center mb-6 ">
					<h1 className="md:text-5xl sm: text-2xl font-bold text-red-600 mb-4 ">
						Hi there, I'm Shubham
					</h1>
					<a
						className=" bg-transparent px-3 py-1 w-fit text-yellow-400 border-2 border-yellow-400"
						download="Shubham_Resume.pdf"
						href={Resume}
					>
						Download Resume
					</a>
				</div>
				<div className="right sm:order-1">
					<div className="">
						<img
							className="rounded-full w-60 h-60"
							src={ProfilePic}
							alt="hero"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
