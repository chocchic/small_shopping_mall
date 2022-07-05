import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component{
  render(props){
    return(
      <div className='col-md-6 col-lg-4 d-flex align-items-stretch'>
        <div className='card mb-3'>
          <img className='card-img-top' src={this.props.img} alt={this.props.imgalt}/>
          <div className='card-body'>
            <h4 className='card-title'>{this.props.productName}</h4>
            Price:<string>{this.props.price}</string>
            <p className='card-text'>{this.props.desc}</p>
            <a href='#' className='btn btn-primary'>BUY</a>
          </div>
        </div>
      </div>
    )
  }
}
class CardContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cards :[]
    };
  }

  componentDidMount(){
    fetch('cards.json').then(res => res.json).then((result)=>{
      this.setState({cards:result})
    });
  }

  render(){

    // javascript에서 map함수는 배열을 순회하면서 하나씩 작업해서 리턴한 결과를 모아서 다시 배열을 리턴
    // 매개변수는 배열의 각 요소가 됩니다.
    // const cardItems = cards.map(card => <Card key={card.id} img={card.img} alt={card.imgalt} productName={card.productName} 
    // price={card.price} desc={card.desc} /> );
    const cards = this.state.cards;
    const cardItems = cards.map(card => <Card key={card.id} {...card}/> );
    return(
      <div>
        {/* <Card key="1" img="img/strings.png" alt="strings" productName="Strings" 
        price="100.0" desc="A very authentic and beautiful instrument!" />
        <Card key="2" img="img/redguitar.png" alt="redg" productName="Red Guitar" 
        price="299.0" desc="A really cool red guitar that can produce super cool music!" /> */}
        {cardItems}
      </div>
    )
  }
}

ReactDOM.render(<CardContainer/>, document.getElementById('root'))