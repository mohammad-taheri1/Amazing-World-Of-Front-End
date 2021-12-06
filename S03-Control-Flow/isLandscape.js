function isLandscape1(width, height) {
    if(width > height) return true;
    return false;
}
function isLandscape2(width, height) {
    return width > height ? true : false;
}

function isLandscape3(width, height) {
    return width > height;
}