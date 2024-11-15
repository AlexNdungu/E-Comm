import NavigationBar from "../Navigation/Nav.jsx";
import ShowRoutesHtml from "../ShowRouteHtml/ShowRouteHtml.jsx";
import FilterProductLayout from "../Layouts/FilterProductLayout.jsx";

function ProductsPage() {

    return( 
        <>
            <NavigationBar/>
            <ShowRoutesHtml/>
            <FilterProductLayout/>
        </>
    );

}

export default ProductsPage