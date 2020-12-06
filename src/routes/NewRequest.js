import React from 'react';


class newRequest extends React.Component{


    handleSubmit = () => {

    }

    render(){
        return (
            <div>
                
                <form >
                    <textarea name="textarea" rows="10" cols="50" /> <br/>
                    <input type="submit" value="Submit" />
                </form>
                

            </div>
        );
    }
}

export default newRequest;