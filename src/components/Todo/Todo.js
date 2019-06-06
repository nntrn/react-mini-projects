/* eslint-disable react/prop-types */
import React from 'react'
import './Todo.css'
import IcoMoon from 'react-icomoon'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      text: ''
    }

    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.markItemCompleted = this.markItemCompleted.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
  }
  handleTextChange(event) {
    this.setState({
      text: event.target.value
    })
  }
  handleAddItem(event) {
    event.preventDefault()

    var newItem = {
      id: Date.now(),
      text: this.state.text,
      done: false
    }

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }))
  }
  markItemCompleted(itemId) {
    var updatedItems = this.state.items.map(item => {
      if (itemId === item.id) item.done = !item.done

      return item
    })

    this.setState({
      items: [].concat(updatedItems)
    })
  }
  handleDeleteItem(itemId) {
    var updatedItems = this.state.items.filter(item => {
      return item.id !== itemId
    })

    this.setState({
      items: [].concat(updatedItems)
    })
  }
  render() {
    return (
      <div className="todo">
        <h3 className="title">TO DO LIST</h3>
        <form className="sm-form" style={{ display: 'flex' }}>
          <input type="text" onChange={this.handleTextChange} value={this.state.text} />
          <button onClick={this.handleAddItem} disabled={!this.state.text}>
            ok
          </button>
        </form>
        <TodoList
          items={this.state.items}
          onItemCompleted={this.markItemCompleted}
          className={this.markItemCompleted}
          onDeleteItem={this.handleDeleteItem}
        />
      </div>
    )
  }
}

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.markCompleted = this.markCompleted.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  markCompleted(event) {
    this.props.onItemCompleted(this.props.id)
  }
  deleteItem(event) {
    this.props.onDeleteItem(this.props.id)
  }

  render() {
    return (
      <li className={'todoitem ' + (this.props.completed ? 'done' : 'undone')}>
        <div style={{ width: '90%' }} onClick={this.markCompleted}>
          {this.props.text}
        </div>
        <button type="button" className="svg-button delete-button" onClick={this.deleteItem}>
          <IcoMoon icon="cross" className="sm " />
        </button>
      </li>
    )
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul className="form-check">
        {this.props.items.map(item => (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.done}
            onItemCompleted={this.props.onItemCompleted}
            onDeleteItem={this.props.onDeleteItem}
          />
        ))}
      </ul>
    )
  }
}

export default TodoApp
