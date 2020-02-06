
import React from 'react'
import ReactDom from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import './styles/styles.scss'
import 'normalize.css/normalize.css'

console.log(this.props)
ReactDom.render(<IndecisionApp />, document.getElementById('app'))


