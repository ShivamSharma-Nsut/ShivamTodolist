import React, { Component } from 'react'

class TodoItem extends Component {

    getStyle = () => {
        return {
            backgroundColor: 'grey',
            padding: '10px',
            borderBottom: '1px solid black',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
       
    }

    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
               <p>
                   <input onChange={this.props.markComplete.bind(this, id)} type="checkBox" />{' '}
                   {title}
                   <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>Delete</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    float: 'right',
    padding: '4px 10px',
    backgroundColor: 'tomato',
    color: 'white',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '3px'

}
export default TodoItem
