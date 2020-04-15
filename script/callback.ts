function doingSomething(call: (name: string) => void):void{
  call.call("Mario Silva")
  call.apply( "Mario Batalha")
  call("Mario Batalha Silva")
}
function execute(name: string): void{
 console.log(name);
}
doingSomething(execute);