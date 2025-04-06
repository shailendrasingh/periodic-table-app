import React from 'react';
import { Element } from '../types/Element';
import './ElementCard.css';

interface ElementCardProps {
  element: Element;
  onClick: (element: Element) => void;
}

const ElementCard: React.FC<ElementCardProps> = ({ element, onClick }) => {
  return (
    <div 
      className={`element-card ${element.category.toLowerCase()}`}
      onClick={() => onClick(element)}
    >
      <div className="atomic-number">{element.atomicNumber}</div>
      <div className="symbol">{element.symbol}</div>
      <div className="name">{element.name}</div>
      <div className="atomic-mass">{element.atomicMass}</div>
    </div>
  );
};

export default ElementCard;