import { useSelector } from "react-redux"

function ShowComp(){
    let filtredArr=useSelector(state=>state.filtredArr) || []
    console.log(filtredArr)
    return(
        <div className="ShowComp">
                   <ul>
        
        {filtredArr.map(task => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => this.handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
        </div>
    )
}
export default ShowComp