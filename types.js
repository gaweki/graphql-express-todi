const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLList
} = require('graphql');
const _ = require('lodash');

let {movies} = require('./data.js')
let {products} = require('./products.js')

// Define Movie Type
movieType = new GraphQLObjectType({
  name: 'Movie',
  fields: {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      year: { type: GraphQLInt },
      directorId: { type: GraphQLID }

  }
});

//Define Director Type
directorType = new GraphQLObjectType({
  name: 'Director',
  fields: {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
      movies: {
          type: new GraphQLList(movieType),
          resolve(source, args) {
              return _.filter(movies, { directorId: source.id });
          }

      }

  }
});

productType = new GraphQLObjectType({
  name: 'Product',
  fields: {
    supplier_code: { type: GraphQLString},
    supplier_name: { type: GraphQLString},
    location: { type: GraphQLString},
    total_sold: { type: GraphQLInt},
    image_name: { type: GraphQLString},
    product_slug: { type: GraphQLString},
    product_code: { type: GraphQLString},
    product_name: { type: GraphQLString},
    variant_id: { type: GraphQLInt},
    variant_descriptions: { type: GraphQLString},
    variant_stock: { type: GraphQLInt},
    product_stock: { type: GraphQLInt},
    sku: { type: GraphQLString},
    main_menu_id: { type: GraphQLInt},
    sub_menu_id: { type: GraphQLInt},
    sub_menucategory_id: { type: GraphQLInt},
    mainmenu_name: { type: GraphQLString},
    submenu_name: { type: GraphQLString},
    sub_menucategory_name: { type: GraphQLString},
    mainmenu_slug: { type: GraphQLString},
    submenu_slug: { type: GraphQLString},
    submenu_category_slug: { type: GraphQLString},
    normal_price: { type: GraphQLInt},
    agent_price: { type: GraphQLInt},
    member_price: { type: GraphQLInt},
    agent_commision: { type: GraphQLInt},
    wajib_insurance: { type: GraphQLInt},
    product_warranty: { type: GraphQLString},
    product_condition: { type: GraphQLInt},
    product_original: { type: GraphQLInt},
    discount_percentage: { type: GraphQLInt},
    comission_percentage: { type: GraphQLFloat},
    is_rfc: { type: GraphQLBoolean},
    total_view: { type: GraphQLInt},
    image_uri: { type: GraphQLString},
    created: { type: GraphQLString},
    updated_at: { type: GraphQLString}

  }
});

productsType = new GraphQLList(productType);

exports.movieType = movieType;
exports.directorType = directorType;
exports.productsType = productsType;