import React, { Component } from 'react'
import { Button, FormGroup, Label, Input  } from 'reactstrap';
import '../styles/home.css'

class Home extends Component {
    render() {
        return (
            <div className="center">
                <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
                    <FormGroup>
                    <Label for="username">Industry</Label>
                    <Input type="select" name="industry" id="industry">
                        <option>Telecommunication</option>
                        <option>Marketing and Sales</option>
                        <option>Hospitality</option>
                        
                    </Input>
                    </FormGroup>

                    <FormGroup>
                    <Label for="password">Choose file</Label>
                    <Input type="file" name="document" id="document" />
                    </FormGroup>

                    <FormGroup>
                    <Button color="primary" block  /*disabled={!this.validateForm()}*/ type="submit">
                        Proceed
                    </Button>
                    </FormGroup>
                    </form>


                
                
                
            </div>
        )
    }
}

export default Home;
