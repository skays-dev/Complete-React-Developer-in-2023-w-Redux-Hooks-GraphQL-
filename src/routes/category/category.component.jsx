import { CategoryContainer, CategoryTitle } from './category.styles';

import { useSelector } from 'react-redux';

import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router';
import Spinner from '../../components/spinner/spinner.component';

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector';

import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(()=>{
        //console.log("effect fired calling setProducts");
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return(
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ? ( <Spinner /> ) : 
                                    (<CategoryContainer>
                                        {products &&
                                            products.map((product)=> <ProductCard key={product.id} product={product} />)
                                        }
                                    </CategoryContainer>
            )}
        </Fragment>
    );
}

export default Category;