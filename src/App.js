import ComingSoon from "./ComingSoon";
import {BrowserRouter, Route, Routes} from "react-router-dom";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact ={'/'} element={ComingSoon}/>
                {/*<Route exact path={'/soon'} component={ComingSoon}/>*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
