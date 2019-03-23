import React from "react";
import styled from 'styled-components';
import Starfilled from '../../assets/icons/star_white.png';
import Staroutline from '../../assets/icons/star_grey.png';

const Star = styled.i`
    background-image: url('${(props)=> props.filled ? Starfilled : Staroutline }');
    background-position-x: ${(props)=>props.direction };
    background-size: 20px 20px;
    width: 10px;
    height: 20px;
`;

class Ratings extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            rating: this.props.rating || null,
            temp_rating: null
        };
    }

    handleMouseover(rating) {
        this.setState(prev => ({
            rating,
            temp_rating: prev.rating
        }));
    }

    handleMouseout() {
        this.setState(prev => ({
            rating: prev.temp_rating
        }));
    }

    rate(rating) {
        this.setState({
            rating,
            temp_rating: rating
        });
    }

    render() {
        const { rating } = this.state;
        let stars = [];
        for (let i = 0; i < 10; i++) {
            let is_filled = false;
            if (rating >= i && rating !== null) {
                is_filled = true;
            }
            stars.push(
                <Star  key={Math.random()} filled={is_filled} direction={(i%2===0) ? "left" : "right"}
                    style={{ display: "inline-block",
                        width: "10px",
                        overflow: "hidden"}}
                    onMouseOver={() => this.handleMouseover(i)}
                    onClick={() => this.rate(i)}
                    onMouseOut={() => this.handleMouseout()}
                />
            );
        }
        return (
            <div>
                {stars}
            </div>
        );
    }
}

export default Ratings;
