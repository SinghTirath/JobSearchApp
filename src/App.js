import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search';
import JobList from './Components/JobList';
import JobDesc from './Components/JobDes';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Jobs:[],
      selectedJob:null,
      FullSearch:'fixed-top search show'
    };
  }


  jobSearch(keyword,location){
    fetch(`https://jobs.github.com/positions.json?description=${keyword}&location=${location}`)
        .then( res => res.json())
        .then(json => {
            this.setState({
                Jobs:json,
                selectedJob:json[1]
            })
        });
        this.setState({
            FullSearch:'fixed-top search'
        })
        console.log(this.state.Jobs);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className={this.state.FullSearch}>
                        <Search onJobSubmit={(keyword,location) => this.jobSearch(keyword,location)}/>
                    </div>
                </div>
            </div>

            <div className="row data">
                <div className="col-sm-5">
                    <JobList
                        onJobSelect={selectedJob => this.setState({selectedJob})}
                        jobs={this.state.Jobs}
                    />
                </div>
                <div className="col-sm-6" >
                    <div className="sticky-top">
                        <JobDesc job={this.state.selectedJob} />
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
