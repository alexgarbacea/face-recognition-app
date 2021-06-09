import React from 'react';

const Rank = ({name, entries}) => {

    const checker = () => {
        if(name !== ''){
            return(
                <div>
                    <div className="center white f3">
                        {`${name}, your entry count is:`}
                    </div>
                    <div className="center white f1">
                        {`${entries}`}
                    </div>
                </div>
            );
        }
        else{
            return(
            <div>
                <div className="center white f3">
                    No account detected. Some features are restricted.<br />
                    Don't worry, you can still detect faces :)
                </div>
            </div>
            );
        }
    }

    return(
        <div>
            {checker()}
        </div>
    );
}

export default Rank;