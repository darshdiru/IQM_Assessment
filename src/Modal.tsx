import React from "react";
import "./Modal.css";

interface IProps {
  show: boolean;
  title: string;
  link: string;
  close: (event: React.MouseEvent) => void;
  body: string;
}

interface IState {}

class Modal extends React.Component<IProps, IState> {
  render() {
    if (this.props.show) {
      return (
        <div className="modalMain">
          <div className="modalContainer">
            <div className="modal-header">
              <h4 className="modal-title">{this.props.title}</h4>
              <button
                type="button"
                className="close"
                onClick={this.props.close}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <p>
                <b>{this.props.body}</b>
              </p>
              <div>
                <a
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={this.props.link}
                >
                  {this.props.link}
                </a>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.props.close}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}

export default Modal;
