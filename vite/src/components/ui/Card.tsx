import React from "react";
import {AspectRatio } from "./aspect-ratio";
import styles from "./Card.module.scss";
  


interface ItemData {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    count: number;
    price: string;
}


const items: ItemData[] = [
    {
        id: 1,
        imageUrl: "src/assets/shirt1.jpg", 
        title: "Item 1",
        description: "Item Detail 1",
        count: 1,
        price: "10,000₩",
    },
    {
        id: 2,
        imageUrl: "src/assets/shirt2.jpg", 
        title: "Item 2",
        description: "Item Detail 2",
        count: 2,
        price: "20,000₩",
    },
    {
        id: 3,
        imageUrl: "src/assets/shirt3.jpg", 
        title: "Item 3",
        description: "Item Detail 3",
        count: 3,
        price: "30,000₩",
    },
];

const Card: React.FC = () => {
    return (
        <div className="grid gap-4">
            {items.map((item) => (
                <div key={item.id} className={styles.card}>
                    <div className="w-[150px]">
                        <AspectRatio ratio={9 / 9}>
                            <img 
                                src={item.imageUrl} 
                            />
                        </AspectRatio>

                    </div>
                    <div className={styles.card__content}>
                        <div className={styles.card__title}>{item.title}</div>
                        <div className={styles.card__description}>{item.description}</div>
                        <div className={styles.card__count}>count: {item.count}</div>
                        <div className={styles.card__price}>{item.price}</div>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Card;
