var test = require("tape");
const pixelCompare = require("../index");

test("test image pixel compare with different images", function(t) {
	pixelCompare({
		baseImage: "./test/test-images/dragon1.png",
		testImage: "./test/test-images/dragon2.png",
		outputImage: "./test/output-images/result.png"
	})
	.then(isSame => {
		t.equal(isSame, false);
		t.end();
	});
});

test("test image pixel compare with different images but same content", function(t) {
	pixelCompare({
		baseImage: "./test/test-images/dragon3.png",
		testImage: "./test/test-images/dragon2.png"
	})
	.then(isSame => {
		t.equal(isSame, true);
		t.end();
	});
});

test("test image pixel compare with multiple images", function(t) {

	pixelCompare({
		baseImage: "./test/test-images/dragon1.png"
	})
	.then(baseImageCompareable => {
		baseImageCompareable({
			testImage: "./test/test-images/dragon2.png",
			outputImage: "./test/output-images/result1.png"
		})
		.then(isSame => {
			t.equal(isSame, false);
		});

		baseImageCompareable({
			testImage: "./test/test-images/dragon3.png",
			outputImage: "./test/output-images/result2.png"
		})
		.then(isSame => {
			t.equal(isSame, false);
		});
		t.end();
	});
});
