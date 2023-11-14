import { useState } from "react"

export const Info = () => {

    const [name, setName] = useState('');
    //variable = 'name'
    //function = 'setName'
    //initial value = empty txt block '';

    const [nickname, setNickname] = useState('');
    //variable = 'nickname'
    //function = 'setNickname'
    //initial value = empty txt block '';


    // Event handler for the 'name' input field
    
    const OnChangeName = e => {
        // Update the 'name' state with the input value
        setName(e.target.value);
    }
    
    // Event handler for the 'nickname' input field
    
    const onChangeNickname = e => {
        // Update the 'nickname' state with the input value
        setNickname(e.target.value);
    }

    //*! (e.target.value)
    //e.target refers to the DOM element that triggered the event, 
    //and (e.target.value) is the [current value] of the input field that triggered the event.

    return(
    <div>
        <div>
            <input value={name} onChange={OnChangeName}></input>
            <input value={nickname} onChange={onChangeNickname}></input>
        </div>
        <div>
            <div>
                <b>이름:</b>
                {name}
            </div>
            <div>
                <b>닉네임:</b>
                 {nickname}
            </div>
        </div>
    </div>)
}