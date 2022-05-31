import { useEffect, useState } from 'react';
import Product from '../components/Product';
import Spinner from '../components/Spinner';
import jsonFile from '../assets/products.json';

function Results() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        setLoading(true);
        // const response = await fetch(jsonFile);
        setProducts(jsonFile.products);
        setLoading(false);
      };
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      {!loading && products?.length > 0 && (
        <>
          <div className="listingsProducts">
            {products.map((product, index) => (
              <div className="grid-item">
                <Product
                  key={index}
                  bankDetails={product.bank}
                  productInfo={product.bullets}
                  rates={product.rates}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
export default Results;
