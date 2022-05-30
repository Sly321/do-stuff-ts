import glob from "glob"

import { readFileSync, writeFileSync } from "fs-extra" 
// options is optional
glob("./**/pom.xml", { }, function (er, files) {
	files.forEach((file) => {
		console.log(file)
		const buffer  = readFileSync(file, "utf-8")
		buffer.indexOf("h2.")
		const newS = `import React from "react"\n${buffer}`
		writeFileSync(file, newS, "utf-8")
	})
})