import React from 'react';
import { connect } from 'react-redux';
import { addTask, deleteTask, createArr,filterArr } from './actions';
import InputComp from './InputComp';
import ShowComp from './ShowComp';
// import { data } from 'jquery';

class App extends React.Component {
  state = {
    newTask: ''
  };

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  handleAddTask = () => {
    const { newTask } = this.state;
    if (newTask) {
      this.props.addTask({ id: Date.now(), title: newTask });
      this.setState({ newTask: '' });
    }
  };

  handleDeleteTask = (taskId) => {
    this.props.deleteTask(taskId);
  };
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>{
      this.props.createArr(data)
      this.props.createArr(data)
    })
  }

  render() {
    // const { allArr } = this.props;
    // const { newTask } = this.state;

    return (
      <div>
        Search
        {/* <input type="text" value={newTask} onChange={this.handleInputChange} /> */}
        {/* <button onClick={this.handleAddTask}>Add Task</button> */}
      <InputComp/>
      {/* {allArr} */}
        {/* <ul>
        
          {allArr.map(task => (
            <li key={task.id}>
              {task.name}
              <button onClick={() => this.handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul> */}
        <ShowComp/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allArr: state.allArr,
    filtredArr:state.filtredArr
  };
};

export default connect(mapStateToProps, { addTask, deleteTask, createArr,filterArr })(App);