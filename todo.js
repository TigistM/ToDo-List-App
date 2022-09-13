function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return <div className="todo" onClick={handle}> {todo.text} 
<span><i className="fa fa-trash-o" onClick={handle}></i></span></div>
}
