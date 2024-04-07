import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Component/Breadcrums/Breadcrums';
import ProductDisplay from '../Component/ProductsDisplay/ProductDisplay';
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox';
import Relatedproducts from '../Component/RelatedProducts/Relatedproducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  // Log "Images called" when rendering the component
 

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <Relatedproducts/>
    </div>
  );
};

export default Product;
