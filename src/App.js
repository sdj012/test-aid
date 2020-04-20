import React,{Component} from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import {Form} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import './App.css';

const bookCover=require('./bookCover.jpg');

class App extends Component {

  constructor(props){

    super(props);
    
    this.state={
      heart:0,
      star:0,
      triangle:0,
      musicalNote:0,

    };

    this.heartCnt=this.heartCnt.bind(this);
    this.submission=this.submission.bind(this);

  }



  heartCnt=(event)=>{

    this.setState({heart: this.state.heart + parseInt(event.target.value)});

  }

  starCnt=(event)=>{
  
    this.setState({star: this.state.star + parseInt(event.target.value)});
  
  }

  triangleCnt=(event)=>{

    this.setState({triangle: this.state.triangle + parseInt(event.target.value)});

  }

  musicalNoteCnt=(event)=>{

    this.setState({musicalNote:this.state.musicalNote + parseInt(event.target.value)})

  }


  submission=()=>{}

  render(){

  return (
    
    <div className="App">

    <div className="grid-item-header"></div>

    

    <div className="grid-item-intro">
      <img src={bookCover} alt="img"/>
      <p class="introText">
      This is an electronic aid for readers of "Leise gewinnt: So verschaffen sich Introvertierte Gehör" by Doris Märtin.
      <br></br><br></br>This page does not contain contents of the book. Its functions are not significant on their own.</p>
        
        <Accordion defaultActiveKey="0">
            <Card class="card">
              <Accordion.Toggle as={Card.Header} eventKey="1" id="italic-text">View the test model</Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body class="cardBody">

                <br></br>
                  On a scale of 1-4, 1 being the least preferred and 4 being the most preferred, rank each option.<br></br>
                  
                  <br></br>

                  Q.1 <br></br>
                  A) ... <br></br>
                  B) ...<br></br>
                  C) ...<br></br>
                  D) ...<br></br>

                  <br></br>
                  <p id="italic-text">Count = Q1 A + Q2 C + Q3 B ...</p>
                
                  </Card.Body>
              </Accordion.Collapse>
            </Card>
        </Accordion>

        {/* <button class="btn-project-details">Project Details</button> */}
      
    
    </div>

    <div className="grid-item-test">

        <Form onSubmit={(e)=>{this.submission();e.preventDefault();}}>

              <br></br>
              <p className="Q.Title"><strong>Q. 1</strong></p>

              <br></br>

              <Form.Group  className="list">
                <Form.Label>A</Form.Label>
                  <Form.Control as="select" onChange={this.heartCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>B</Form.Label>
                  <Form.Control as="select" onChange={this.starCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>C</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>D</Form.Label>
                  <Form.Control as="select" onChange={this.musicalNoteCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
              </Form.Group>


              <br></br>

              <p><strong>Q. 2</strong></p>

              <br></br>

              <Form.Group  className="list">
                <Form.Label>A</Form.Label>
                  <Form.Control as="select" onChange={this.starCnt} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>B</Form.Label>
                  <Form.Control as="select" onChange={this.musicalNoteCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>C</Form.Label>
                  <Form.Control as="select" onChange={this.heartCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>D</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
              </Form.Group>


              <br></br>

              <p><strong>Q. 3</strong></p>

              <br></br>


              <Form.Group  className="list">
                <Form.Label>A</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>B</Form.Label>
                  <Form.Control as="select" onChange={this.musicalNoteCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>C</Form.Label>
                  <Form.Control as="select" onChange={this.heartCnt} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>D</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
              </Form.Group>


              <br></br>

              <p><strong>Q. 4</strong></p>

              <br></br>


              <Form.Group  className="list">
                <Form.Label>A</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>B</Form.Label>
                  <Form.Control as="select" onChange={this.starCnt} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>C</Form.Label>
                  <Form.Control as="select" onChange={this.musicalNoteCnt} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>D</Form.Label>
                  <Form.Control as="select" onChange={this.heartCnt} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
              </Form.Group>


              <br></br>

              <p><strong>Q. 5</strong></p>

              <br></br>


              <Form.Group  className="list">
                <Form.Label>A</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>B</Form.Label>
                  <Form.Control as="select" onChange={this.heartCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>C</Form.Label>
                  <Form.Control as="select" onChange={this.musicalNoteCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>D</Form.Label>
                  <Form.Control as="select" onChange={this.starCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
              </Form.Group>

              <br></br>

              <p><strong>Q. 6</strong></p>

              <br></br>


              <Form.Group  className="list">
                <Form.Label>A</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>B</Form.Label>
                  <Form.Control as="select" onChange={this.musicalNoteCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>C</Form.Label>
                  <Form.Control as="select" onChange={this.heartCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>D</Form.Label>
                  <Form.Control as="select" onChange={this.starCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
              </Form.Group>

              <br></br>

              <p><strong>Q. 7</strong></p>

              <br></br>


              <Form.Group  className="list">
                <Form.Label>A</Form.Label>
                  <Form.Control as="select" onChange={this.heartCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>B</Form.Label>
                  <Form.Control as="select" onChange={this.starCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>C</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>D</Form.Label>
                  <Form.Control as="select" onChange={this.musicalNoteCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
              </Form.Group>

              <br></br>

              <p><strong>Q. 8</strong></p>

              <br></br>


              <Form.Group  className="list">
                <Form.Label>A</Form.Label>
                  <Form.Control as="select" onChange={this.musicalNoteCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>B</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>C</Form.Label>
                  <Form.Control as="select" onChange={this.starCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>D</Form.Label>
                  <Form.Control as="select" onChange={this.heartCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
              </Form.Group>

              <br></br>

              <p><strong>Q. 9</strong></p>

              <br></br>

              <Form.Group  className="list">
                <Form.Label>A</Form.Label>
                  <Form.Control as="select" onChange={this.musicalNoteCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>B</Form.Label>
                  <Form.Control as="select" onChange={this.starCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>C</Form.Label>
                  <Form.Control as="select" onChange={this.heartCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>D</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
              </Form.Group>

              <br></br>

              <p><strong>Q. 10</strong></p>

              <br></br>


              <Form.Group  className="list">
                <Form.Label>A</Form.Label>
                  <Form.Control as="select" onChange={this.musicalNoteCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>B</Form.Label>
                  <Form.Control as="select" onChange={this.starCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>C</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>D</Form.Label>
                  <Form.Control as="select" onChange={this.heartCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
              </Form.Group>

              <br></br>

              <p><strong>Q. 11</strong></p>

              <br></br>


              <Form.Group  className="list">
                <Form.Label>A</Form.Label>
                  <Form.Control as="select" onChange={this.heartCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>B</Form.Label>
                  <Form.Control as="select" onChange={this.starCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>C</Form.Label>
                  <Form.Control as="select" onChange={this.musicalNoteCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>D</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
              </Form.Group>

              <br></br>

              <p><strong>Q. 12</strong></p>

              <br></br>


              <Form.Group  className="list">
                <Form.Label>A</Form.Label>
                  <Form.Control as="select" onChange={this.heartCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>B</Form.Label>
                  <Form.Control as="select" onChange={this.musicalNoteCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>C</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>D</Form.Label>
                  <Form.Control as="select" onChange={this.starCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
              </Form.Group>


              <br></br>

              <p><strong>Q. 13</strong></p>

              <br></br>


              <Form.Group  className="list">
                <Form.Label>A</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>B</Form.Label>
                  <Form.Control as="select" onChange={this.musicalNoteCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>C</Form.Label>
                  <Form.Control as="select" onChange={this.starCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>D</Form.Label>
                  <Form.Control as="select" onChange={this.heartCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
              </Form.Group>

              <br></br>

              <p><strong>Q. 14</strong></p>

              <br></br>


              <Form.Group  className="list">
                <Form.Label>A</Form.Label>
                  <Form.Control as="select" onChange={this.musicalNoteCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>B</Form.Label>
                  <Form.Control as="select" onChange={this.starCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>C</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>D</Form.Label>
                  <Form.Control as="select" onChange={this.heartCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
              </Form.Group>

              <br></br>

              <p><strong>Q. 15</strong></p>

              <br></br>


              <Form.Group  className="list">
                <Form.Label>A</Form.Label>
                  <Form.Control as="select" onChange={this.starCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>B</Form.Label>
                  <Form.Control as="select" onChange={this.musicalNoteCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>C</Form.Label>
                  <Form.Control as="select" onChange={this.heartCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>D</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
              </Form.Group>

              <br></br>

              <p><strong>Q. 16</strong></p>

              <br></br>


              <Form.Group  className="list">
                <Form.Label>A</Form.Label>
                  <Form.Control as="select" onChange={this.starCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>B</Form.Label>
                  <Form.Control as="select" onChange={this.musicalNoteCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>C</Form.Label>
                  <Form.Control as="select" onChange={this.heartCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>D</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
              </Form.Group>

              <br></br>

              <p><strong>Q. 17</strong></p>

              <br></br>


              <Form.Group  className="list">
                <Form.Label>A</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>B</Form.Label>
                  <Form.Control as="select" onChange={this.musicalNoteCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>C</Form.Label>
                  <Form.Control as="select" onChange={this.heartCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>D</Form.Label>
                  <Form.Control as="select" onChange={this.starCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
              </Form.Group>

              <br></br>

              <p><strong>Q. 18</strong></p>

              <br></br>


              <Form.Group  className="list">
                <Form.Label>A</Form.Label>
                  <Form.Control as="select" onChange={this.starCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>B</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>C</Form.Label>
                  <Form.Control as="select" onChange={this.heartCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>D</Form.Label>
                  <Form.Control as="select" onChange={this.musicalNoteCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
              </Form.Group>


              <br></br>

              <p><strong>Q. 19</strong></p>

              <br></br>


              <Form.Group  className="list">
                <Form.Label>A</Form.Label>
                  <Form.Control as="select" onChange={this.heartCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>B</Form.Label>
                  <Form.Control as="select" onChange={this.starCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>C</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>D</Form.Label>
                  <Form.Control as="select" onChange={this.musicalNoteCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
              </Form.Group>


              <br></br>

              <p><strong>Q. 20</strong></p>

              <br></br>


              <Form.Group  className="list">
                <Form.Label>A</Form.Label>
                  <Form.Control as="select" onChange={this.musicalNoteCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>B</Form.Label>
                  <Form.Control as="select" onChange={this.heartCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>C</Form.Label>
                  <Form.Control as="select" onChange={this.starCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>

                  <Form.Label>D</Form.Label>
                  <Form.Control as="select" onChange={this.triangleCnt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
              </Form.Group>
                    
              <br></br>
              <br></br>
              <Accordion className="accordion_submit" defaultActiveKey="0">
                  <Card>

                    <Accordion.Toggle className="accToggle" as={Card.Header} eventKey="1" value="Submit"><strong>Submit</strong></Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                      <Card.Body className="cardBody_2">
                        <Table striped bordered size="sm">

                          <thead>
                            <tr>
                              <th>Shape</th>
                              <th>Count</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>I</td>
                              <td>{this.state.star}</td>
                            </tr>
                            <tr>
                              <td>II</td>
                              <td>{this.state.heart}</td>
                            </tr>
                            <tr>
                              <td>III</td>
                              <td>{this.state.triangle}</td>
                            </tr>
                            <tr>
                              <td>IV</td>
                              <td>{this.state.musicalNote}</td>
                            </tr>
                          </tbody>
                        </Table>
                      
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
              </Accordion>
    
        </Form>
    </div>

    </div>
  );

}

}


export default App;
