import { useNavigate } from 'react-router-dom';

import Col from 'react-bootstrap/Col';

import "../../styles/marketplace/ProductCard.css";

function ProductCard(props) {

    const navigate = useNavigate();

    return(

        <Col xxl={3} lg={4} md={6} sm={6} >
            <div className="prod-card-container" onClick={() => { navigate(`/Marketplace/articulo/detalles`); }}>

                <div className="prod-img-cont">
                    <img className="prod-img" src={props.prodImage} alt=""></img>
                </div>

                <h3>{props.prodTitle}</h3>
                <h3 className='prod-price'>${props.prodPrice}</h3>

            </div>
        </Col>

    );

}

export default ProductCard;