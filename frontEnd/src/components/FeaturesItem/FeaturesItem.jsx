/**
 * FeaturesItem component.
 * @param {Object} props - les propriétés du composant.
 * @param {string} props.icon - L'icône de la fonctionnalité.
 * @param {string} props.title - Le titre de la fonctionnalité.
 * @param {string} props.description - la description de la fonctionnalité.
 * @returns {JSX.Element} FeaturesItem component.
 */
export default function FeaturesItem({ icon, title, description }) {
    return (
      <div className='feature-item'>
        <img alt='Chat Icon' className='feature-icon' src={icon} />
        <h3 className='feature-item-title'>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  