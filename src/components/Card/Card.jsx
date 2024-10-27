import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css'; 
import { FaShoppingCart } from "react-icons/fa";
import { RiExchangeDollarFill } from "react-icons/ri";
import { TbTriangleSquareCircleFilled } from "react-icons/tb";
import { MdRemoveShoppingCart } from "react-icons/md";

const iconMap = {
  FaShoppingCart: FaShoppingCart,
  RiExchangeDollarFill: RiExchangeDollarFill,
  MdRemoveShoppingCart: MdRemoveShoppingCart,
  TbTriangleSquareCircleFilled: TbTriangleSquareCircleFilled
};

export default function Card({title, count, id, icon}) {

  const IconComponent = iconMap[icon];
  return (
    <>
      <div className={styles.cardContainer}>
        <div 
          key={id} 
          className={styles.cardIcon}>
          {React.createElement(IconComponent)}
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.cardTitle}>{title}</div>
          <div className={styles.cardStat}>{count}</div>
        </div>
        
      </div>
    </>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired
};
