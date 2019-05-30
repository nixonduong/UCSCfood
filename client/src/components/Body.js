import React from "react";

class Body extends React.Component{	
	render(){
        return(
            <div class="container">
                <div class="row">
                    <div class="col"></div>
                    <div class="col"> 
                        <form method= "POST" action= "/submit">
                            <input name="foodSearch" type="text" class="form-control" id="food" placeholder="Food Search"></input>
                            <button type="submit" class="btn btn-success">Submit</button>
                        </form>
                    </div>
                    <div class="col"></div>
                </div>
            </div>           
        );
    }
}

export default Body;