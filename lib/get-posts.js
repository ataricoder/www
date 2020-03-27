const path = require("path");
const fs = require("fs");

// Grab blog content from posts folder
const dirPath = path.join(__dirname, "../posts");
let postsList = [];

const getPosts = () => {
	// Read directory posts, grab files in that directory or an error
	fs.readdir(dirPath, (err, files) => {
		if (err) {
			return console.log("Failed to list contents of directory:" + err);
		}
		// console.log(files);
		// Open each file, for index, for each file
		files.forEach((file, i) => {
			let obj = {};
			let post;
			let idx = 0;
			// Read the file. grab contents
			fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
				// console.log(contents);
				// Convert contents from strings, to arrays of different strings
				// Get indices of where the metadata is
				const getMetadataIndices = (acc, elem, i) => {
					if (/^---/.test(elem)) {
						acc.push(i);
					}
					return acc;
				};
				const parseMetadata = ({ lines, metadataIndices }) => {
					// console.log(metadataIndices);
					if (metadataIndices[1] > 0) {
						// Start slicing at the first element of array, do not want the dashes
						let metadata = lines.slice(
							metadataIndices[0] + 1,
							metadataIndices[1]
						);
						// For every colon in the metadata, get the element at beginning of line
						metadata.forEach(line => {
							obj[line.split(": ")[0]] = line.split(": ")[1];
						});
						// console.log(obj);
						return obj;
					}
				};
				// From the last line after metadata dashes, slice
				const parseContent = ({ lines, metadataIndices }) => {
					if (metadataIndices[1] > 0) {
						lines = lines.slice(
							metadataIndices[1] + 1,
							lines.lenght
						);
					}
					// console.log(lines.join("\n"));
					return lines.join("\n");
				};
				// Split by line breaks
				const lines = contents.split("\n");
				const metadataIndices = lines.reduce(getMetadataIndices, []);
				const metadata = parseMetadata({ lines, metadataIndices });
				const content = parseContent({ lines, metadataIndices });
				const date = new Date(metadata.date);
				const timestamp = date.getTime() / 1000;
				console.log(timestamp);
				// Create dictionary with post content
				post = {
					id: timestamp,
					title: metadata.title ? metadata.title : "No title given",
					author: metadata.author
						? metadata.author
						: "No author given",
					date: metadata.date ? metadata.date : "No date given",
					content: content ? content : "No content given"
				};
				postsList.push(post);
				// Get the lenght of the files object
				var keys = Object.keys(postsList);
				iter = keys.length - 1;
				//console.log("i =", Math.max(i));
				/*
				if (i === iter) {
					let data = JSON.stringify(postsList);
					console.log(data);
					fs.writeFileSync("data/blog.json", data);
                }
                */
				const sortedList = postsList.sort((a, b) => {
					return a.id < b.id ? 1 : -1;
				});
				console.log(sortedList);
				let data = JSON.stringify(sortedList);
				//console.log(data);
				fs.writeFileSync("data/blog.json", data);
			});
			idx += 1;
		});
	});
	return;
};

getPosts();
