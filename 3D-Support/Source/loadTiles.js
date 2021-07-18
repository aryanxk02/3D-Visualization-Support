Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmZTQyMzRjNC1kYWM3LTQzMDAtODBkYi1jODFhZmM4OGRlOWMiLCJpZCI6NTc0MDEsImlhdCI6MTYyMjI3ODgxMH0.LcRZ1tHxUfRAs93-adWB6B6wGp1oYwKmcY2FAXF6LNs';

var viewer = new Cesium.Viewer('cesiumContainer', {
    scene3DOnly: true,
    selectionIndicator: false,
    baseLayerPicker: false
});

viewer.terrainProvider = Cesium.createWorldTerrain({
    requestWaterMask: true, // required for detailed water effects
    requestVertexNormals: true // required for detailed terrain lighting
});

// Enable depth testing so things behind the terrain disappear.
// this line helps in occluding the objects behind the terrain
viewer.scene.globe.depthTestAgainstTerrain = true;

// Enable lighting based on sun/moon positions - self explanatory
viewer.scene.globe.enableLighting = true;
