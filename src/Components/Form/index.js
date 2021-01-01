import { Box, withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import TextFieldMui from "@material-ui/core/TextField";
import Styles from './FormStyles'
import './form.css'


const TextField = withStyles(Styles)(function TextField({ classes, ...props }) {
    return (
        <TextFieldMui
            inputProps={{
                style: {
                    color: 'white',
                    borderBottom: `${props.error !== undefined && props.error ? '2px solid #E95652' : "2px solid white"}`
                }
            }}

            InputLabelProps={{
                classes: {
                    root: classes.label,
                    focused: classes.focusedLabel,
                    error: classes.erroredLabel
                },
                style: { color: `${props.error !== undefined && props.error ? '#E95652' : '#fff'}` }
            }}
            InputProps={{
                disableUnderline: true,
            }}
            {...props}
        />
    );
});

class Form extends Component {
    state = { form: {}, error: {}, button: false, validator: {} };
    handleForm = () => {
        window.alert("Detials saved successfully!")
    }

    validEmailRegex = (value) =>
        new RegExp(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        ).text(value)

    validateName = (name) => {
        var letter = /^[a-zA-Z\s]*$/;
        if (name.match(letter) && name.length > 2) {
            return false;
        } else {
            return true;
        }
    };
    validateNumber = (num) => {
        var letter = /^[0-9]*$/;
        if (num.match(letter) && num.length === 10) {
            return false;
        } else {
            return true;
        }
    };
    validator = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'name':
                if (this.validateName(value)) {
                    return "Enter a valid Name";
                }
                return !value ? "Name is required" : '';
            case 'email':
                return !value || !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))
                    ? "Email is not valid!"
                    : '';
            case 'phone':
                if (this.validateNumber(value)) {
                    return "Enter only numbers";
                }
                return !!value && value.length === 10 ? '' : "Enter a valid number";
            case 'instrument':
                return !value ? "Please select Product" : '';
            case 'category':
                return !value ? "Please category Product" : '';
            default:
                break
        }
    }
    validatorHandler = (e) => {
        const { validator } = this.state;

        const errMsg = this.validator(e)
        if (errMsg) {
            validator[e.target.name] = errMsg
            this.setState({ 'button': false })
        }
        else delete validator[e.target.name]
        this.setState({ validator })
    }
    validateField = (e) => {
        const { error, validator } = this.state;

        const errMsg = this.validator(e)
        if (errMsg) {
            error[e.target.name] = errMsg
            validator[e.target.name] = errMsg
            this.setState({ 'button': false })
        }
        else {
            delete error[e.target.name]
            delete validator[e.target.name]
        }
        this.setState({ error, validator })
    }
    onChange = (e) => {
        const { form, error, validator } = this.state;
        form[e.target.name] = e.target.value;
        error[e.target.name] && this.validateField(e)
        form[e.target.name] && this.validatorHandler(e)
        if (Object.keys(form).length > 3 && Object.keys(error).length === 0 && Object.keys(validator).length === 0) {
            if (Object.keys(form).includes('name') && Object.keys(form).includes('phone') && Object.keys(form).includes('email')) {
                this.setState({ 'button': true })
            }
        }
        else {
            this.setState({ 'button': false })
        }
        this.setState({ form, error })



    }


    render() {
        const { classes } = this.props
        return (
            <Box className={classes.form}
                py={{ xs: "40px", sm: "40px", md: "" }}
                pt={{ xs: "24px", sm: "24px", md: "100px" }}
            >
                <Box color="rgba(255,255,255,0.80)"
                    fontSize={{ xs: '24px', md: "36px", lg: '46px' }}
                    textAlign={{ xs: "center", sm: "left" }}
                    fontWeight='700'
                    mx="auto">
                    Got any questions? Write to us.
                </Box >
                <form noValidate autoComplete="off">
                    <Box display="flex" flexDirection={{ xs: 'column', md: "row" }} className={classes.box}>
                        <TextField label='Name' type="text" name='name' onBlur={this.validateField} onChange={this.onChange} required
                            error={(this.state.error.name && true) || false}
                        />
                        <TextField label='Email' type="email" name='email' onBlur={this.validateField} onChange={this.onChange} required
                            error={(this.state.error.email && true) || false} />
                    </Box>
                    <Box display="flex" flexDirection={{ xs: 'column', md: "row" }} className={classes.box}>
                        <TextField label="Phone" type="number" name='phone' onBlur={this.validateField} onChange={this.onChange} required
                            error={(this.state.error.phone && true) || false} />
                        <TextField label="Subject" type="text" name='subject' onBlur={this.validateField} onChange={this.onChange}
                            error={(this.state.error.subject && true) || false} />
                    </Box>
                    <Box display="flex" flexDirection={{ xs: 'column', md: "row" }} className={classes.message}>
                        <TextField label="Message" type="text" name='message' onBlur={this.validateField} onChange={this.onChange}
                            error={(this.state.error.message && true) || false} />
                    </Box>
                    <button
                        type="button"
                        disabled={!this.state.button}
                        className={this.state.button ? classes.activeButton : classes.button}
                        onClick={this.handleForm}>SAVE</button>
                </form>
            </Box>

        )
    }
}
export default withStyles(Styles)(Form)