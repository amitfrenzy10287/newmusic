import React from 'react';
import bannerImage from '../../assets/images/logo.png';
import Ratings from '../Ratings/';
import Level from '../Level';

import {
    Card,
    SongBanner,
    Title,
    CardBody,
    CardFooter,
    LevelWrapper,
    Submenu
} from "./style";

const SongsListing = ( props ) =>{
    const {title,artist,level,rating} = props;
    let percentageLevel = Math.round(level / 15 * 100);
    return(
        <Card>
            <SongBanner banner={bannerImage} />
            <LevelWrapper>
                <Level
                strokeWidth="10"
                sqSize="200"
                level={level}
                percentage={percentageLevel}
                />
            </LevelWrapper>
            <CardBody>
                <Title>{title}</Title>
                <CardFooter>
                    <Ratings rating={rating} />
                    <div>{artist}</div>
                </CardFooter>
            </CardBody>
            <Submenu />
        </Card>
    );
};

export default SongsListing;
