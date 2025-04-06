import React from 'react';
import { Element } from '../types/Element';
import './ElementDetails.css';

interface ElementDetailsProps {
  element: Element;
  onClose: () => void;
}

const ElementDetails: React.FC<ElementDetailsProps> = ({ element, onClose }) => {
  const [openSection, setOpenSection] = React.useState<string>('atomic');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? '' : section);
  };

  const formatTemperature = (kelvin: number | null) => {
    if (!kelvin) return 'N/A';
    const celsius = kelvin - 273.15;
    const fahrenheit = (celsius * 9/5) + 32;
    return (
      <div className="temperature-display">
        <span>{kelvin}K</span>
        <span>{celsius.toFixed(1)}°C</span>
        <span>{fahrenheit.toFixed(1)}°F</span>
      </div>
    );
  };

  return (
    <div className="element-details-overlay" onClick={onClose}>
      <div className="element-details-modal" onClick={e => e.stopPropagation()}>
        <div className={`element-header ${element.category}`}>
          <button className="close-button" onClick={onClose} aria-label="Close">
            <span>&times;</span>
          </button>
          
          <div className="element-header-content">
            <div className="element-identifier">
              <div className="atomic-property">
                <div className="property-pair">
                  <span className="property-label">Atomic Number</span>
                  <span className="element-number">{element.atomicNumber}</span>
                </div>
                <div className="property-pair">
                  <span className="property-label">Atomic Mass</span>
                  <span className="element-mass">{element.atomicMass.toFixed(3)} u</span>
                </div>
                <div className="property-pair">
                  <span className="property-label">Block</span>
                  <span className="block-value">{element.block.toUpperCase()}</span>
                </div>
                <div className="property-pair">
                  <span className="property-label">Group</span>
                  <span className="property-value">{element.group || 'N/A'}</span>
                </div>
                <div className="property-pair">
                  <span className="property-label">Period</span>
                  <span className="property-value">{element.period}</span>
                </div>
              </div>
              <div className="oxidation-item">
                <div className="property-pair">
                  <span className="property-label">Oxidation States</span>
                  <div className="oxidation-states">
                    {element.oxidationStates?.map((state, index) => (
                      <span key={index} className={`state-badge ${parseInt(state) >= 0 ? 'positive' : 'negative'}`}>
                        {state}
                      </span>
                    )) || 'N/A'}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="element-primary">
              <h1 className="element-symbol">{element.symbol}</h1>
              <h2 className="element-name">{element.name}</h2>
              <div className="element-category-badge">
                {element.category.split('-').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </div>
            </div>
          </div>
        </div>

        <div className="element-content">
          <div className="info-cards-container">
            <section className="info-card">
              <div className={`properties-table ${element.category}`}>
                <table>
                  <thead>
                    <tr>
                      <th>Electron Configuration</th>
                      <th>Electro Negativity</th>
                      <th>Atomic Radius</th>
                      <th>Ionization Energy</th>
                      <th>Density</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{element.electronConfiguration}</td>
                      <td>{element.electronegativity || 'N/A'}</td>
                      <td>{element.atomicRadius ? `${element.atomicRadius} pm` : 'N/A'}</td>
                      <td>{element.ionizationEnergy ? `${element.ionizationEnergy} kJ/mol` : 'N/A'}</td>
                      <td>{element.density ? `${element.density} g/cm³` : 'N/A'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="info-card">
              <div className={`properties-table ${element.category}`}>
                <table>
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Melting Point</td>
                      <td>{formatTemperature(element.meltingPoint)}</td>
                    </tr>
                    <tr>
                      <td>Boiling Point</td>
                      <td>{formatTemperature(element.boilingPoint)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementDetails;