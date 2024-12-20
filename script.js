const replacements = {

// membership prefixes
  ":memboo": ":_",

// bad words
  "ball": censor,
  "fuck": censor,

// simple youtube censors
  "red": censor,

// custom youtube fixes
  "(ww)w+": "$1", // reduce any number of ws greater than 2 to 2
  "#": "hashtag ",
}

// censor function
function censor(match, offset, string) {
  return match.replace(/[aeiou]/i, "*");
}

// obtain element references
const tag_input = document.getElementById("tagInput");
const tag_output = document.getElementById("tagOutput");

// replacement function
function format() {
  var text = tag_input.value;
  for (let [pattern, replacement] of Object.entries(replacements)) {
    if (typeof pattern === "string") {
	pattern = new RegExp(pattern, "gi");
    }
    text = text.replace(pattern, replacement);
  }
  tag_output.value = text;
}

// add input listener to tag_input (with cross-browsewr compatibility)
if (tag_input.addEventListener) {
  tag_input.addEventListener('input', format);
} else if (tag_input.attachEvent) {
  tag_input.attachEvent('onpropertychange', format);
}
