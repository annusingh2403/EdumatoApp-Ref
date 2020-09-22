import React from "react";
import "./QuickSearch.css";
import {Link} from "react-router-dom";

const QuickSearch = (props) => {

    const listMeals = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link to = {`/list/${item.mealtype}`}>
                        <div className="container quicksearch-container ml-lg">
                            <div className="col-12 col-sm-5 ml-sm-5 col-md-5 ml-md-5 col-lg-3 ml-lg-0 pl-sm-0 col-xl-3 ml-xl-5 product">
                                <div className="row">
                                <div className="col-sm-7 img-box">
                                <img src={`${item.url}`} alt="breakfast" border="0"/>
                                </div>
                                    <div className="col-sm-5 pl-0">
                                        <h3 className="componentHeading">
                                            {item.name}
                                        </h3>
                                        <p className="componentSubHeading">
                                            {item.message}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return (
        <React.Fragment>
        <div className="container search-box">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="componentHeading">Quick Searches</h2>
                    <p className="componentSubHeading1">Discover restaurants by type of meal</p>
                </div>
            </div>
        </div> 
        {/* <div className="container quicksearch-container ml-lg">              */}
        {/* <div className="row"> */}
            {listMeals(props)}
        {/* </div> */}
        {/* </div> */}
        
        <div className="empty-container">
        </div>
        </React.Fragment> 
    );
}

export default QuickSearch;





// import React from "react";
// import "./QuickSearch.css";

// const QuickSearch = () => {
//     return (

//         <React.Fragment>
//         <div className="container search-box">
//             <div className="row">
//                 <div className="col-md-12">
//                     <h2 className="componentHeading">Quick Searches</h2>
//                     <p className="componentSubHeading1">Discover restaurants by type of meal</p>
//                 </div>
//             </div>
//         </div> 
        
//         <div className="container quicksearch-container ml-lg">
//                 <div className="col-12 col-sm-5 ml-sm-5 col-md-5 ml-md-5 col-lg-3 ml-lg-0 pl-sm-0 col-xl-3 ml-xl-0 product">
//                     <div className="row">
//                         <div className="col-sm-7 img-box">
//                         <img src="https://i.ibb.co/9HTx0kt/breakfast.jpg" alt="breakfast" border="0"/>
//                         </div>
//                         <div className="col-sm-5">
//                             <h3 className="componentHeading">Breakfast</h3>
//                             <p className="componentSubHeading">All happiness depends on a leisurely breakfast.</p>
//                         </div>
//                     </div>
//                 </div>
            
//                 <div className="col-12 col-sm-5 ml-sm-5 col-md-5 ml-md-5 col-lg-3 ml-lg-5 pl-sm-0 col-xl-3 ml-xl-5 product">
//                     <div className="row">
//                         <div className="col-sm-7 img-box">
//                         <img src="https://i.ibb.co/PjPTrpS/${item.name}.jpg" alt="lunch" border="0"/>
//                         </div>
//                         <div className="col-sm-5">
//                             <h3 className="componentHeading">Lunch</h3>
//                             <p className="componentSubHeading">We must have courage, faith, and lunch together sometime soon.</p>
//                         </div>
//                     </div>
//                 </div>
            
//                 <div className="col-12 col-sm-5 ml-sm-5 col-md-5 ml-md-5 col-lg-3 ml-lg-5 pl-sm-0 col-xl-3 ml-xl-5 product">
//                     <div className="row">
//                         <div className="col-sm-7 img-box">
//                         <img src="https://i.ibb.co/sWBXtKh/dinner.jpg" alt="dinner" border="0"/>
//                         </div>
//                         <div className="col-sm-5">
//                             <h3 className="componentHeading">Dinner</h3>
//                             <p className="componentSubHeading">After a good dinner one can forgive anybody, even own relations.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-12 col-sm-5 ml-sm-5 col-md-5 ml-md-5 col-lg-3 ml-lg-0 pl-sm-0 col-xl-3 ml-xl-0 product">
//                     <div className="row">
//                         <div className="col-sm-7 img-box">
//                         <img src="https://i.ibb.co/yf175Vy/drink.jpg" alt="drink" border="0"/>
//                         </div>
//                         <div className="col-sm-5">
//                             <h3 className="componentHeading">Drinks</h3>
//                             <p className="componentSubHeading">There's always time for Glass of drink.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-12 col-sm-5 ml-sm-5 col-md-5 ml-md-5 col-lg-3 ml-lg-5 pl-sm-0 col-xl-3 ml-xl-5 product">
//                     <div className="row">
//                         <div className="col-sm-7 img-box">
//                         <img src="https://i.ibb.co/hFngtvK/snacks.jpg" alt="snacks" border="0"/>
//                         </div>
//                         <div className="col-sm-5">
//                             <h3 className="componentHeading">Snacks</h3>
//                             <p className="componentSubHeading">Snacking is important. They can go a long way.</p>
//                         </div>
//                     </div>
//                 </div>
                
//                 <div className="col-12 col-sm-5 ml-sm-5 col-md-5 ml-md-5 col-lg-3 ml-lg-5 pl-sm-0 col-xl-3 ml-xl-5 product">
//                     <div className="row">
//                         <div className="col-sm-7 img-box">
//                         <img src="https://i.ibb.co/y8wj6qV/nightlife.jpg" alt="nightlife" border="0"/>
//                         </div>
//                         <div className="col-sm-5">
//                             <h3 className="componentHeading">Nightlife</h3>
//                             <p className="componentSubHeading">Live for today, plan for tomorrow, party tonight.</p>
//                         </div>
//                     </div>
//                 </div>  
//         </div>
//         <div className="empty-container">

//         </div>
//         </React.Fragment> 
//     );
// }

// export default QuickSearch;