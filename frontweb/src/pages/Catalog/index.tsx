import ProductCard from 'components/ProductCard';

const Catalog = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;

/*
  my-4 = Classe do Bootsrap => Padding na vertical (asso Y)

  row = configurações layout bootstrap (grid system) -> onde colocamos colunas

  <576px Extra Small. Max container width: None(auto) .col-
  >576px Small. 540px .col-sm-
  >768px Medium 720px .col-md-
  >992px Large 960px .col-lg-
  >1200px Extra Large 1140px .col-xl-

  col-sm-6 = Bootstrap divide o layout em 12 colunas. 6 = 2 colunas
*/
