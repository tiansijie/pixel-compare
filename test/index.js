const pixelCompare = require("../index");

pixelCompare({
	basedImage: "./test/test-images/dragon1.png",
	testImage: "./test/test-images/dragon2.png",
	outputImage: "./test/output-images/result.png"
})
.then(isSame => console.log(isSame));


pixelCompare({
	basedImage: "./test/test-images/dragon1.png"
})
.then(basedImageCompareable => {
	basedImageCompareable({
		testImage: "./test/test-images/dragon2.png",
		outputImage: "./test/output-images/result1.png"
	});

	basedImageCompareable({
		testImage: "./test/test-images/dragon3.png",
		outputImage: "./test/output-images/result2.png"
	});
});
