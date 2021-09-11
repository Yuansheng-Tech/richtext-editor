import { Component } from "react";
import ReactDOM from "react-dom";

export class ModalController extends Component {
  componentDidMount() {
    document.getElementById('app-modal')?.appendChild(this.el);
  }

  componentWillUnmount() {
    document.getElementById('app-modal')?.removeChild(this.el);
  }
  
  el = document.createElement("div")

  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}