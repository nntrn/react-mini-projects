export function parseDate(str, options = {}) {
  return new Date(Date.parse(str)).toLocaleString("en-US", options);
}

function each(arr, fn) {
  return arr.map(fn);
}

function spacing() {
  const properties = ["margin", "padding"];
  const side = ["top", "right", "bottom", "left"];
  const style = {};

  properties.forEach(e => {
    [].map.call(side, function(el) {
      style[e + strings.capitalize(el)] = "";
    });
  });
  return style;
}

const strings = {
  capitalize: str =>
    String(str).replace(/\b[a-z]/g, function(e) {
      return e.toUpperCase();
    })
};

export { strings as s, each };

export function grab() {
  const args = [...arguments];
  for (let x = 0; x < args.length; x++) {
    if (args[x]) {
      return args[x];
    }
  }
}
