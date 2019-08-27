import React, { Component } from "react";
import ChevronRight from '../Home/chevron-right.svg';

class FAQBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  toggleOpen = () => {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div className="fdc-box4" onClick={this.toggleOpen}> 
        <div className="flex-row" style={{justifyContent: 'space-between'}}>
          <h3>
            {this.props.question}
          </h3>
          <img src={ChevronRight} style={{width: 10, transform: this.state.open ?  'rotate(-90deg)' : 'rotate(90deg)', marginRight: -25, marginLeft: 15}}/>
        </div>
        <p style={{display: this.state.open ? 'block': 'none'}}>
            {this.props.answer}
        </p>
      </div>

    )
  }
}

export default FAQBox;
