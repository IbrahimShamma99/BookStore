import React from 'react';
import linkedin from '../../Assets/linkedin.png';
import pinterest from '../../Assets/pinterest.svg';
import github from '../../Assets/github.png';
import dev from "../../Assets/dev-brands.png";
import portfolio from "../../Assets/user-circle-solid.svg";
import twitter from '../../Assets/twitter.svg';

const contactLogo = (props) => {
    var path;
    switch(props.contact.platform){
        case("pinterest"):
            path=pinterest;
            break;
        case("dev"):
            path=dev;
            break;
        case("github"):
            path=github;
            break;
        case("twitter"):
            path=twitter;
            break;
        case("linkedin"):
            path=linkedin;
            break;
        case("portfolio"):
            path=portfolio;
            break;
        default:
            break; 
    }
    return (
        <div className="col">
        <a href={props.contact.path}><img alt={props.contact.platform} src={path}></img></a>
        </div>
    )
};

export default contactLogo;