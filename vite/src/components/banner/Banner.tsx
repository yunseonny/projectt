import React from 'react';
import styles from './Banner.module.scss'; 
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./carousel"

const Banner: React.FC = () => {
    return (
        <div className={styles.banner}>
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <h1 className={styles.banner__title}>ON&OFF</h1>
                        <p>Online과 Offline을 합치다.</p>
                    </CarouselItem>
                    <CarouselItem>
                        <h1 className={styles.banner__title}>Welcome to Our Store</h1>
                        <p>최고의 상품들을 만나보세요.</p>
                    </CarouselItem>
                    <CarouselItem>
                        <h1 className={styles.banner__title}>Special Discounts</h1>
                        <p>한정된 세일을 놓치지 마세요!</p>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default Banner;
