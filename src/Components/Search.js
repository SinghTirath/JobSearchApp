import React,{Component} from 'react'
import './Search.css'

class Search extends Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = { 
            keyword:'Javascript',
            location:'San francisco'
    
        };
    }

    onInputChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault();
        console.log(this.state);
        this.props.onJobSubmit(this.state.keyword,this.state.location);
        
    }

    render(){
        return(
            <div className='search'>
                <form>
                    <div className="form-row align-items-center">
                        <div className="col-auto">
                        <label className="sr-only">Name</label>
                            <input
                                type="text"
                                className="form-control mb-2"
                                placeholder="Job"
                                name='keyword'
                                value={this.state.keyword}
                                onChange={ event => this.onInputChange(event)}
                            />
                        </div>
                        <div className="col-auto">
                        <label className="sr-only">Username</label>
                            <input
                                type="text"
                                placeholder="Location"
                                className="form-control mb-2"
                                name='location'
                                value={this.state.location}
                                onChange={ event => this.onInputChange(event)}
                            />
                        </div>
                        
                        <div className="col-auto">
                            <button className="btn btn-primary mb-2" onClick={this.onSubmit}>Search</button>
                        </div>
                        </div>
                </form>
            </div>
        );
    }
}


export default Search;