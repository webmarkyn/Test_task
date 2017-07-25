import React from 'react';
import axios from 'axios';

import s from './main.scss';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {other: false, options: '', counter: '(0/1000)', text: '',error: true, emailError: null, email: '', nameError: null, imageError: null, enquiry_type: 0, subject: '', user_name: '', file: '',imagePreviewUrl: ''}
        this.onSelectChange = this.onSelectChange.bind(this);
        this.onTextareaChange = this.onTextareaChange.bind(this);
        this.emailValidation = this.emailValidation.bind(this);
        this.nameValidation = this.nameValidation.bind(this);
        this.imageCheck = this.imageCheck.bind(this);
        this.onPost = this.onPost.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);
        this.checkErrors = this.checkErrors.bind(this);
        
    }

    onSelectChange(event) {
        let val = event.target.value;
        if (event.target.getAttribute('placeholder')=='Other') {
            this.setState({enquiry_type: event.nativeEvent.target.value})
            console.log(this.state.enquiry_type)
        } else {
            if (val=='Other') {
                this.setState({other: true,});
            } else {
                this.setState({other: false});
            }
            this.setState({enquiry_type: event.nativeEvent.target.selectedIndex})
            console.log(event.nativeEvent.target.selectedIndex);
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
            this.setState({emailError: 'false', email: event.target.value}, this.checkErrors())
        } else {
            this.setState({emailError: 'true'}, this.checkErrors())
        }

    }

    nameValidation(event) {
        let re = /^[A-Za-z ]+$/;
        if (re.test(event.target.value)) {
            this.setState({nameError: 'false', user_name: event.target.value}, this.checkErrors())
        } else {
            this.setState({nameError: 'true'}, this.checkErrors())
        }
    }

    checkErrors() {
        let s = this.state;
        if(s.nameError === 'true' && s.emailError === 'true' && s.emailError === 'true') {
            this.setState({error: true})
        } else {
            this.setState({error: false}, console.log('error - ' + this.state.error))
        }
        console.log('name - ' + s.nameError)
        console.log('email - ' + s.emailError)
        console.log('image - ' + s.emailError)
    }

    onSubjectChange(event) {
        this.setState({subject: event.target.value})
        console.log(event.target.value)
    }

    onPost(event) {
        console.log('hello');
        event.preventDefault();
        axios.post('http://504080.com/api/v1/support', {
            description: this.state.text,
            email: this.state.email,
            enquiry_type: this.state.enquiry_type,
            subject: this.state.subject,
            user_name: this.state.user_name,
            file: this.state.file
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    imageCheck(event) {
        event.preventDefault();
        let res = event.target.files[0].type.split('/')[1];
        console.log(res)
        if ((res=='jpeg' || res=='jpg' || res=='png') && event.target.files[0].size<=5000000) {
            let reader = new FileReader();
            let file = event.target.files[0];
            reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
            };
            reader.readAsDataURL(file)
            this.setState({imageError: 'false'}, this.checkErrors())
        } else {
            this.setState({imageError: 'true'}, this.checkErrors())
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
                    <form className={s.form}>
                        <label htmlFor="enquiry_type">Enquiry Type*</label>
                        <select name="enquiry_type" id="" onChange={this.onSelectChange}>
                            {this.state.options ? this.state.options.map((option,key)=> (<option value={option.name} key={key} id={key}>{option.name}</option>)) : (<option value="Loading">Loading</option>)}
                        </select>
                        {this.state.other ? (<input type="text" placeholder="Other" name="enquiry_type" onChange={this.onSelectChange}/>) : (<p></p>)}
                        <label htmlFor="user_name" className={this.state.nameError == 'true' ? s.name_error : s.clear} onChange={this.nameValidation}>Name*</label>
                        <label htmlFor="email" className={this.state.emailError == 'true' ? s.email_error : s.clear}>Email*</label>
                        <input type="text" name="user_name" placeholder="Dentist" className={this.state.nameError == 'true' ? s.name_error : s.clear} onChange={this.nameValidation}/>
                        <input type="Email" name="email" placeholder="rachelm@gmail.com" onChange={this.emailValidation} className={this.state.emailError ? s.email_error : s.clear}/>
                        <label htmlFor="subject">Subject*</label>
                        <input type="text" name="subject" onChange={this.onSubjectChange}/>
                        <label htmlFor="description">Description* <span>{this.state.counter}</span></label>
                        <textarea name="description" id="" cols="30" rows="10" onChange={this.onTextareaChange} value={this.state.text}></textarea>
                        <div className={s.image_upload}>
                            <h6>Add Photo</h6>
                            {this.state.imagePreviewUrl ? (<img src={this.state.imagePreviewUrl} alt=""/>) : (<p>Minimum size of 300x300 jpeg jpg png 5 MB</p>)}
                            {this.state.imageError == 'true' ? (<p className={s.image_error}>The photo does not meet the requirements</p>) : (<p></p>)}     
                            <input type="file" name="img" accept="image/jpeg,image/png,image/jpg" onChange={this.imageCheck}/>
                        </div>
                        {this.state.error === true ? (<input type="button" value="Submit" disabled/>) : (<input type="button" value="Submit" onClick={this.onPost}/>)}
                        
                    </form>        
                </div>
            </div>
        );
    }
}

export default Main;