import React from "react";
import Card from "../components/Card";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Skills() {
	return (
		<>
			<div className="skills flex flex-col jusfy-center items-center px-6 py-4">
				<h1 className="text-4xl mb-4 underline text-red-600 font-bold bg-yellow-600 w-full p-2">
					Skills
				</h1>
				<div className="flex gap-7 flex-wrap  items-center justify-center">
					<Card title="HTML" image={<FaHtml5 />} description="ADVANCE" />
					<Card image={<FaCss3Alt />} title="CSS" description="INTERMEDIATE" />
					<Card
						title="JAVASCRIPT"
						image={<AiOutlineJavaScript />}
						description="INTERMEDIATE"
					/>
					<Card title="REACT" image={<FaReact />} description="BEGINNER" />
					<Card title="NODE JS" image={<FaNode />} description="INTERMEDIATE" />
					<Card
						title="Express Js"
						image={<FaNode />}
						description="INTERMEDIATE"
					/>
					<Card
						title="MONGODB"
						image={<SiMongodb />}
						description="INTERMEDIATE"
					/>
					<Card title="Git" image={<FaGit />} description="INTERMEDIATE" />
					<Card title="Github" image={<FaGithub />} description="BEGINNER" />
				</div>
			</div>
		</>
	);
}

export default Skills;
