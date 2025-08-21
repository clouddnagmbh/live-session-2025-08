sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'my/ecommerce/products/test/integration/FirstJourney',
		'my/ecommerce/products/test/integration/pages/ProductsList',
		'my/ecommerce/products/test/integration/pages/ProductsObjectPage',
		'my/ecommerce/products/test/integration/pages/ReviewsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage, ReviewsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('my/ecommerce/products') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage,
					onTheReviewsObjectPage: ReviewsObjectPage
                }
            },
            opaJourney.run
        );
    }
);