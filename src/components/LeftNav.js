import React from 'react'
import Drinks from './Drinks';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Sweets from './Sweets';
import IndianMasala from './IndianMasala';
import HomeFood from './HomeFood';
import FastFoods from './FastFoods';

export default function LeftNav() {
    return (
        <>





            <Router>
                <div className="leftNav">

                    <Switch>
                        <ul className="list-group">
                            <li>
                                <Link to="/Drinks"> <button type="button" class="list-group-item list-group-item-action active" aria-current="true"> Drinks</button></Link>
                                <Route path="/Drinks">
                                    <Drinks />
                                </Route>
                            </li>
                            <li>
                                <Link to="/FastFoods"><button type="button" class="list-group-item list-group-item-action active" aria-current="true"> FastFoods</button></Link>
                                <Route path="/FastFoods">
                                    <FastFoods />
                                </Route>
                            </li>
                            <li>
                                <Link to="/HomeFood" ><button type="button" class="list-group-item list-group-item-action active" aria-current="true"> HomeFood</button></Link>
                                <Route path="/HomeFood">
                                    <HomeFood />
                                </Route>
                            </li>
                            <li>
                                <Link to="/IndianMasala" ><button type="button" class="list-group-item list-group-item-action active" aria-current="true"> Indian Masala</button></Link>
                                <Route path="/IndianMasala">
                                    <IndianMasala />
                                </Route>
                            </li>
                            <li>
                                <Link to="/Sweets"><button type="button" class="list-group-item list-group-item-action active" aria-current="true"> Sweets</button></Link>
                                <Route path="/Sweets">
                                    <Sweets />
                                </Route>
                            </li>
                        </ul>
                    </Switch>
                </div>
            </Router>





            {/* <div className="leftNav">
                <ul>
                    <li><b>Drinks</b></li>

                    <li><b>Fast-Food</b></li>

                    <li><b>Home-Food</b></li>

                    <li><b>Indian Masaala</b></li>

                    <li><b>Sweets</b></li>
                </ul>
            </div> */}
        </>
    )
}
