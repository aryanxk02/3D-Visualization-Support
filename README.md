# 3D Visualization Support
Cesium ion API fetches CityGML Data into User's Assets Dashboard through Authenticating REST API token. Through this we achieve tileset.json formats so clients easily view the raw data.

- Provide ion information about data
- Upload data to S3 Bucket
- Notify ion after Data uploading process completes
- Monitor Tiling Stats

## Methodology
The following modules need to be installed.
- Setting up S3 compatible Library
```
npm install aws-sdk
```
-  Perform data upload
```
npm install fs
```
- Running JS file on Local Environment
```
node index.js
```
