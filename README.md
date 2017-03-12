# pixel-compare
compare pixel of image for PNG, JPEG or DataURL.


example
-------
```js
const pixelCompare = require("pixel-compare");
pixelCompare({
    basedImage: "./test/test-images/dragon1.png",
    testImage: "./test/test-images/dragon2.png",
    outputImage: "./test/output-images/result.png"
})
.then(isSame => {
	//if two images are the same
});
```


install
-------

```
npm insatll --save pixel-compare
```


api
------

### pixelCompare({ baseImage, testImage, [outputImage], [baseColor], [testColor] })

* `baseImage`: base image path or data url

* `testImage`: test image path or data url

* `outputImage`: is optional, output image path

* `baseColor`: is optional, array of 4 for base color is test color is all 0

* `testColor`: is optional, array of 4 for test color is base color is all 0

##### `return` a promise with a boolean to indicate if two images are the same.
