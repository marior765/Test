import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import './Board.css';

import * as values from '../Utils/August';

class Board extends Component {
    componentDidMount() {
        if (localStorage.getItem('Login') === 'test@email.com' && localStorage.getItem('Password') === 'test') {
            return
        } else {
            this.props.history.push('/')
        }
    }
        state = {
          modal: false,
          day: '',
          object: '',
          changeButton: false
        };
        toggle = (item) => {
            this.setState({ modal: !this.state.modal });
            this.setState({day: item})
            this.setState({object: localStorage.getItem(item)})
        }
        handleSubmit = () => {
            localStorage.setItem(`${this.state.day}`, this.state.object);
            this.setState({day: '', object: '', modal: !this.state.modal});
        }
        objectHandler = event => {this.setState({object: event.target.value})};
    render() {
        const red = {
            border: '1px solid',
            borderColor: 'red',
            borderRadius: '10px'
        }
        return (
            <div>
                <div className='mainTable'>
                    {values.AugustName.map((item, index) => (
                            <div key={item.daysName} className='daysName'>
                                {item.daysName}
                            </div>
                    ))}<br />
                    <div className='space' />{values.August.map((item, index) => (
                            <div style={localStorage.getItem(`${item.daysCount}`) ? red : null}
                                className='daysCount' key={item.daysCount}
                                onClick={() => this.toggle(item.daysCount)}
                                 >
                                {item.daysCount}
                            </div>
                    ))}
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Event creator</ModalHeader>
                    <ModalBody>
                        <Input placeholder="Wtite your event!" value={this.state.object} onChange={this.objectHandler} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleSubmit}>Save</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default Board;