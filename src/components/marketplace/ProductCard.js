import Col from 'react-bootstrap/Col';

import "../../styles/marketplace/ProductCard.css"

function ProductCard(props) {

    return(

        <Col md={4}>
            <div className="prod-card-container">

                <div className="prod-img-cont">
                    <img className="prod-img" src={props.prodImage} alt=""></img>
                </div>

                <h3>{props.prodTitle}</h3>
                <h3 className='prod-price'>${props.prodPrice}</h3>

            </div>
        </Col>

    )

}

export default ProductCard;