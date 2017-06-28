import React from 'react';
import axios from 'axios';

import s from './main.scss';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {other: false, options: '', counter: '(0/1000)', text: '', emailError: true, nameError: true, imageError: true}
        this.onSelectChange = this.onSelectChange.bind(this);
        this.onTextareaChange = this.onTextareaChange.bind(this);
        this.emailValidation = this.emailValidation.bind(this);
        this.nameValidation = this.nameValidation.bind(this);
        this.imageCheck = this.imageCheck.bind(this);
    }

    onSelectChange(event) {
        let val = event.target.value;
        if (val=='Other') {
            this.setState({other: true});
        } else {
            this.setState({other: false});
        }
    }

    onTextareaChange(event) {
        let val = event.target.value;
        if (val.length<=1000) {
            this.setState({counter: '(' + val.length+'/1000)', text: val})
        }   
    }

    emailValidation(event) {
        let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (re.test(event.target.value)) {
            this.setState({emailError: false})
        } else {
            this.setState({emailError: true})
        }

    }

    nameValidation(event) {
        let re = /^[A-Za-z ]+$/;
        if (re.test(event.target.value)) {
            this.setState({nameError: false})
        } else {
            this.setState({nameError: true})
        }
    }

    imageCheck(event) {
        console.log(event.target.files[0]);
        let res = event.target.value.split('.')[1];
        console.log(event.target.files[0].size);
        if ((res=='jpeg' || res=='jpg' || res=='png') && event.target.files[0].size<=5000000) {
            this.setState({imageError: false})
        } else {
            this.setState({imageError: true})
        }
    }

    componentDidMount() {
        axios.get('http://504080.com/api/v1/directories/enquiry-types', {
            'headers': {
                'Authorization': '1896bf8470a6a94e963895815762cb8ec8915c6b'
            }
        })
            .then( (response) => {
                console.log(response.data.data);
                this.setState({options: response.data.data})
            })
            .catch( (error) => {
                console.log(error.response);
            });

    }

    render() {
        return (
            <div className={s.main}>
                <div className={s.container}>
                    <p>Fields marked “*” are required</p>
                    <form action="http://504080.com/api/v1/support" className={s.form} method="post">
                        <label htmlFor="enquiry_type">Enquiry Type*</label>
                        <select name="enquiry_type" id="" onChange={this.onSelectChange}>
                            {this.state.options ? this.state.options.map((option,key)=> (<option value={option.name} key={key}>{option.name}</option>)) : (<option value="Loading">Loading</option>)}
                        </select>
                        {this.state.other ? (<input type="text" placeholder="Other" name="enquiry_type"/>) : (<p></p>)}
                        <label htmlFor="user_name" className={this.state.nameError ? s.name_error : s.clear} onChange={this.nameValidation}>Name*</label>
                        <label htmlFor="email" className={this.state.emailError ? s.email_error : s.clear}>Email*</label>
                        <input type="text" name="user_name" placeholder="Dentist" className={this.state.nameError ? s.name_error : s.clear} onChange={this.nameValidation}/>
                        <input type="Email" name="email" placeholder="rachelm@gmail.com" onChange={this.emailValidation} className={this.state.emailError ? s.email_error : s.clear}/>
                        <label htmlFor="subject">Subject*</label>
                        <input type="text" name="subject"/>
                        <label htmlFor="description">Description* <span>{this.state.counter}</span></label>
                        <textarea name="description" id="" cols="30" rows="10" onChange={this.onTextareaChange} value={this.state.text}></textarea>
                        <div className={s.image_upload}>
                            <h6>Add Photo</h6>
                            <p>Minimum size of 300x300 jpeg jpg png 5 MB</p>
                            {this.state.imageError ? (<p className={s.image_error}>The photo does not meet the requirements</p>) : (<p></p>)}     
                            <input type="file" name="img" accept="image/jpeg,image/png,image/jpg" onChange={this.imageCheck}/>
                        </div>
                        {this.state.emailError || this.state.nameError || this.state.imageError ? (<input type="submit" value="Submit" disabled/>) : (<input type="submit" value="Submit"/>)}
                        
                    </form>        
                </div>
            </div>
        );
    }
}

export default Main;