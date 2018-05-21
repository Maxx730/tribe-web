import React, { Component } from 'react';

class UserTribes extends Component {
    constructor(props){
        super(props);

        this.state = {
            tribes:[],
            hasLoaded:false
        }
    }

    componentDidMount(){
        fetch("http://squidswap.com:4000/user/tribes/"+this.props.userId).then(result => {
            return result.json();
        }).then(data => {
            this.setState({
                tribes:data,
                hasLoaded:true
            });

            console.log(this.state);
        });
    }

    render() {
        if(this.state.hasLoaded){
            return (
                <div className="UserTribes">
                    <ul className="TribeList">
                        {this.state.tribes.map((tribe) => {
                            return(
                            <li key={tribe._id}>
                                <div className="TribeListingHead">
                                    <div className="">
                                        [[Tribe Image]]
                                    </div>
                                    <span>{tribe.title}</span>
                                </div>
                                <div className="TribeDescription">
                                    <span className="label">
                                        Description
                                    </span>
                                    <span className="desc">
                                        {tribe.description}
                                    </span>
                                </div>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            );
        }else{
            return(
                <div className="ComponentLoading">
                    Loading...
                </div>
            )
        }
    }
}

export default UserTribes;