import React, { useState } from 'react';
import ElementCard from './ElementCard';
import ElementDetails from './ElementDetails';
import { elements } from '../data/elements';
import { Element } from '../types/Element';
import './PeriodicTable.css';

const PeriodicTable: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  const mainElements = elements.filter(element => 
    !(element.category === 'lanthanide' || element.category === 'actinide') ||
    element.atomicNumber === 57 || element.atomicNumber === 89
  );

  const lanthanides = elements.filter(element => 
    element.category === 'lanthanide' && element.atomicNumber !== 57
  );

  const actinides = elements.filter(element => 
    element.category === 'actinide' && element.atomicNumber !== 89
  );

  return (
    <div className="periodic-table-container">
      <div className="periodic-table">
        {mainElements.map((element) => (
          <div
            key={element.atomicNumber}
            style={{
              gridColumn: element.group || 1,
              gridRow: element.period
            }}
            className="element-cell"
          >
            <ElementCard 
              element={element} 
              onClick={(element) => setSelectedElement(element)}
            />
          </div>
        ))}
      </div>
      
      <div className="periodic-table-footer">
        <div className="lanthanides-row">
          {lanthanides.map((element) => (
            <div key={element.atomicNumber} className="element-cell">
              <ElementCard 
                element={element} 
                onClick={setSelectedElement}
              />
            </div>
          ))}
        </div>
        <div className="actinides-row">
          {actinides.map((element) => (
            <div key={element.atomicNumber} className="element-cell">
              <ElementCard 
                element={element} 
                onClick={setSelectedElement}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedElement && (
        <ElementDetails
          element={selectedElement}
          onClose={() => setSelectedElement(null)}
        />
      )}
    </div>
  );
};

export default PeriodicTable;