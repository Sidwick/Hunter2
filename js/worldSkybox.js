var createSkybox = function() {
    // The box creation
    var boxCloud = BABYLON.Mesh.CreateSphere("boxCloud", 100, 1000, scene);
    boxCloud.position = new BABYLON.Vector3(12, 12, 12);
    //boxCloud.rotate(new BABYLON.Vector3(Math.sin(23 * Math.PI/180), Math.cos(180 * Math.PI/180), 0), 0, BABYLON.Space.WORLD);

    var cloudMaterial = new BABYLON.StandardMaterial("cloudMat", scene);
    var cloudProcText = new BABYLON.CloudProceduralTexture("cloud", 2056, scene);

    //cloudProcText.cloudColor = new BABYLON.Color3(1, 1, 1);
    //cloudProcText.skyColor = new BABYLON.Color3(2, 2, 0);

    cloudMaterial.emissiveTexture = cloudProcText;
    cloudMaterial.backFaceCulling = false;
    cloudMaterial.emissiveTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    boxCloud.material = cloudMaterial;

    return scene;
};
