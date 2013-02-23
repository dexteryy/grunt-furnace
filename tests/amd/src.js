// banner
define("mod/A", [
    "path",
    "./mod/C"
], function(path, c){

    return {
        "path": path,
        "./mod/C": c
    };

});
