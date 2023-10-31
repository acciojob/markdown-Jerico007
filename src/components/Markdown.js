import React,{useState} from 'react';

const Markdown = () => {
    const[input, setInput] = useState("");
    return (
        <div className='Markdown'>
                <div className='preview'>
                    <h1 className='loading'>{input}</h1>
                </div>
                <div className='text-area'>
                    <textarea onInput={(e)=>(setInput(e.target.value))} className='textarea'  rows={30} cols={60}></textarea>
                </div>
        </div>
    );
}

export default Markdown;
