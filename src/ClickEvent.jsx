function ClickEvent() {
    let fname="John";
    
    function sayHello(){
        fname="suruchi";
       alert(fname);
    }
    return(
    <div>
<h2>{fname}</h2>
{/* <button onClick={sayHello}>Click me</button> */}
{/* <button onClick={()=>alert(fname)}>Click me</button> */}
<button onClick={sayHello}>Click me</button>
    </div>
    )
}
export default ClickEvent;


