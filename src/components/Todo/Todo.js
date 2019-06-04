/* eslint-disable react/prop-types */
import React from 'react'
import './Todo.css'

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

    // State Updates are Merged
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
      <div>
        <h3>TO DO LIST</h3>
        <form className="add-todo ">
          <input type="text" onChange={this.handleTextChange} value={this.state.text} />
          <button
            onClick={this.handleAddItem}
            className="svg-button icon-container add-button"
            disabled={!this.state.text}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7c7c7c"
              strokeWidth="2"
              className="blue"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
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
        <button type="button" className="delete-button svg-button" onClick={this.deleteItem}>
          <svg viewBox="0 0 16 16" width="11" height="11">
            <path d="M10.3 8l5-5c.6-.6.6-1.7 0-2.3-.6-.7-1.7-.7-2.3 0l-5 5-5-5C2.4 0 1.3 0 .7.7 0 1.3 0 2.4.7 3l5 5-5 5c-.6.6-.6 1.7 0 2.3s1.7.6 2.3 0l5-5 5 5c.6.6 1.7.6 2.3 0s.6-1.7 0-2.3l-5-5z" />
          </svg>
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
