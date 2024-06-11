import React from "react";

function Projects() {
	return (
		<>
			<div>
				<h1>Projects</h1>
				<div>
					<table className="table w-full border">
						{/* <!-- head --> */}
						<thead>
							<tr>
								<th></th>
								<th>Project Name</th>
								<th>Project Link</th>
							</tr>
						</thead>
						{/* <!-- body --> */}
						<tbody>
							<tr>
								<th>1</th>
								<td>My Portfolio</td>
								<td>
									<a href="" target="_blank">
										Portfolio
									</a>
								</td>
							</tr>
							<tr>
								<th>2</th>
								<td>E-Commerce Backend</td>
								<td>
									<a href="" target="_blank">
										API
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default Projects;
