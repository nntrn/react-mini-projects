/* eslint-disable react/prop-types */
import React from 'react'
import './todo.scss'

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
      <div id="todo">
        <h2 className="project-title">TO DO LIST</h2>
        <form>
          <input type="text" onChange={this.handleTextChange} value={this.state.text} />
          <button onClick={this.handleAddItem} className="submit" disabled={!this.state.text}>
            +
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
      <li className={this.props.completed ? 'done' : 'undone'}>
        <span onClick={this.markCompleted}>{this.props.text}</span>
        <button type="button" className="delete" onClick={this.deleteItem} />
      </li>
    )
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul className="todo-list">
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
