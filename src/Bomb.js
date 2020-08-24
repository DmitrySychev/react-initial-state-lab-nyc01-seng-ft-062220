// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {

    constructor() {
        super()
            this.state = {
                initialCount: 120
            }
    }

    secondsLeft() {

    }

    render() {
        return (
            <li>
                {this.secondsLeft()} seconds left before I go boom!
            </li>
        )
    }
}