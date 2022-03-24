const setup = () => {
    let var1 = "test";
    let var2 = "test";
    console.log("test1 met == : " + (var1 == var2));
    console.log("test1 met === : " + (var1 === var2));
    let var3 = var1.slice();
    console.log("test2 met == : " + (var1 == var3));
    console.log("test2 met === : " + (var1 === var3));
    console.log("test3 met == : " + (var1.concat() == var3));
    console.log("test3 met === : " + (var1.concat() === var3));
}
window.addEventListener("load", setup);