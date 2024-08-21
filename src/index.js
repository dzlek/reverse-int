module.exports = function reverse(n) {
    n = String(n < 0 ? -n : n)
        .split("")
        .reverse()
        .join("");

    return n;
};
