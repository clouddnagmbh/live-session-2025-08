using my.ecommerce as db from '../db/schema';

service ProductCatalog {
    entity Products as projection on db.Products;
    entity Reviews  as projection on db.Reviews;
}
