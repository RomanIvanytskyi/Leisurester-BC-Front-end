import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

 export class DeletePost extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        axios.get('http://localhost:4000/serverport/delete/' + this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }};
