modelPerson = function(scene){
	var lleg = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterBottom: .12, diameterTop:.16, tessellation: 5, height: 1.3}, scene);
	lleg.position.x = -.1;
	lleg.position.z = 1;

	var rleg = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterBottom: .12, diameterTop:.16, tessellation: 5, height: 1.3}, scene);
	rleg.position.x = .1;
	rleg.position.z = 1;

	var b1 = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: .25, diameterX: .35}, scene);
	b1.position.x = 0;
	b1.position.z = 1;
	b1.position.y= .65;

	var b2 = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterBottom: .25, diameterTop:.3, tessellation: 10, height: .5}, scene);
	b2.position.x = 0;
	b2.position.z = 1;
	b2.position.y= .85;

};