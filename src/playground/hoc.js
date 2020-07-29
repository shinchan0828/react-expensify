import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>    
        <p>The info is : {props.info}</p>
    </div>
);

const WithAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private message</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props)=>(
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ):(
            <p>Please login</p>
            )}
        </div>
    )
}

const AdminInfo = WithAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="This is the details"/>, document.getElementById('app'));