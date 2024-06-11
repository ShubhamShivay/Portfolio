import React from "react";

function Card(props) {
	return (
		<>
			<div className="card w-80 bg-blue-500 shadow-xl hover:shadow-xl hover:shadow-emerald-500">
				<figure className="text-8xl pt-3 bg-red-500">{props.image}</figure>
				<div className="card-body">
					<h2 className="card-title">
						{props.title}
						<div className="badge badge-secondary">{props.level}</div>
					</h2>
					<p>{props.description}</p>
					<div className="card-actions justify-end">
						<div className="badge badge-outline">Fashion</div>
						<div className="badge badge-outline">Products</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
