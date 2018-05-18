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

            console.log(this.state)
        });
    }

    render() {
        if(this.state.hasLoaded){
            return (
                <div className="UserTribes">
                    <ul className="">
                        {this.state.tribes.map((tribe) => {
                            return <li>{tribe._id}</li>
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