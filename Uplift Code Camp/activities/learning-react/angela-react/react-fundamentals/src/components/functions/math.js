const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

// there's only 1 thing to export.. so we can export "pi" as default
export default pi;

// how to export multiple?
export { doublePi, triplePi };
