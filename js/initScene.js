// The babylon engine
var engine;
// The current scene
var scene;
// The HTML canvas
var canvas;

// The function onload is loaded when the DOM has been loaded
document.addEventListener("DOMContentLoaded", function () {
    onload();
}, false);

// Resize the babylon engine when the window is resized
window.addEventListener("resize", function () {
	if (engine) {
		engine.resize();
	}
},false);

/**
 * Onload function : creates the babylon engine and the scene
 */
var onload = function () {
	// Engine creation
    canvas = document.getElementById("renderCanvas");
	engine = new BABYLON.Engine(canvas, true);

    // Scene creation
	initScene();

    // The render function
	engine.runRenderLoop(function () {
        scene.render();
	});

};

var initScene = function() {
    scene = new BABYLON.Scene(engine);

    // Update the scene background color
    scene.clearColor=new BABYLON.Color3(0.98,0.98,1);

    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
    scene.fogDensity = 0.0005;
    scene.fogColor = new BABYLON.Color3(0.15,0.2,0.25);

    // Camera attached to the canvas
    //var camera = new BABYLON.ArcRotateCamera("Camera", 0.67,1.2, 150, BABYLON.Vector3.Zero(), scene);
    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(10, 2, -10), scene);
    // Target the camera to scene origin.
    camera.setTarget(new BABYLON.Vector3(0,3,0));

    camera.attachControl(canvas,true);
    // Ally Gravity
    scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
    camera.applyGravity = true;

    // Hemispheric light to light the scene
    var h = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(10, 1, -10), scene);
    h.intensity = 0.6;

    
    var d1 = new BABYLON.DirectionalLight("dir", new BABYLON.Vector3(0, -1000, 0), scene);
    d1.position = new BABYLON.Vector3(1000,1000,1000);
    d1.intensity = 0.6;
    var shadowGenerator = new BABYLON.ShadowGenerator(2048, d1);

    //createSkybox();

    var ground = BABYLON.Mesh.CreateGround("ground", 1000, 1000, 1, scene);
    //var grassTexture = new BABYLON.GrassProceduralTexture("groundgrass", 1028, scene);
    ground.material = new BABYLON.StandardMaterial("ground", scene);
    ground.material.diffuseColor = BABYLON.Color3.FromInts(10, 65, 15);
    ground.material.specularColor = BABYLON.Color3.Black();
    //ground.material.ambientTexture = grassTexture;

    ground.receiveShadows = true;

    scene.collisionsEnabled = true;
    camera.checkCollisions = true;
    ground.checkCollisions = true;

    var trunkColor = randomColor({hue: 'orange',luminosity: 'dark', format: 'rgbArray'});
    var trunkmat = new BABYLON.StandardMaterial("trunk", scene);
    trunkmat.diffuseColor = BABYLON.Color3.FromInts(trunkColor[0],trunkColor[1],trunkColor[2]);
    trunkmat.specularColor = BABYLON.Color3.Black();

    var branchColor = randomColor({hue: 'green', luminosity: 'darl', format: 'rgbArray'});
    branchmat = new BABYLON.StandardMaterial("mat", scene);
    branchmat.diffuseColor = BABYLON.Color3.FromInts(branchColor[0],branchColor[1],branchColor[2]);
    branchmat.specularColor = BABYLON.Color3.Black();
    
    var keyboardControls = controlsKeyboards(scene,camera);
    var tree = new QuickTreeGenerator(10, 10, 3, trunkmat, branchmat, scene,-50,50);
    tree.checkCollisions = true;


};