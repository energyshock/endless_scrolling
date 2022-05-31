import styles from '../assets/bank-logo.module.css';
import PropTypes from 'prop-types';

function Product({ bankDetails, productInfo, rates }) {
  const id = bankDetails.id;
  const bank = bankDetails.detailedName;
  const monthlyRate = rates.effective.min.monthlyRate;
  const minInterest = rates.effective.min.interest;
  return (
    <>
      <div>
        <div className={styles['b' + id]}></div>
        <p>{bank}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: productInfo }} />
      <div>{monthlyRate} €</div>
      <div>{minInterest}%</div>
    </>
  );
}
export default Product;

Product.propTypes = {
  bankDetails: PropTypes.object.isRequired,
  productInfo: PropTypes.string.isRequired,
  rates: PropTypes.object.isRequired,
};
