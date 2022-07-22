import React from 'react'

export default function Modal({ isOpen, onSubmit, toggle, onChange, state }) {
    if(!isOpen) return null;

    return (
        <div className="bg-sky-100 bg-opacity-40 backdrop-blur-sm  absolute inset-0 flex justify-center items-center">
            <div className="modal bg-white max-w-sm p-6 rounded shadow-md text-slate-800" >
                <div className="modal-header text-xl font-bold m-2 mx-4">
                    Add Card
                </div>
                <div>
                    <form onSubmit={onSubmit}>
                        <div className="block m-2 p-2">
                            <label for="title" id="card" className="block text-gray-700 text-md font-bold mb-2 ">
                                Title
                            </label>
                            <input type="text"
                                className=" focus:outline-slate-400 duration-100 outline outline-2 outline-slate-100 focuse:outline-offset-2 p-2 flex-1 block w-full rounded-md text-md border-gray-300"
                                placeholder="Add your title"
                                onChange={onChange}/>
                        </div>
                        <button onClick={onSubmit} type="Submit" className=" justify-center m-2 px-4 py-2 rounded-full bg-slate-100 hover:ring-1 duration-100 hover:ring-slate-400">
                            Save
                        </button>
                        <button className=" justify-center m-2 px-4 py-2 rounded-full bg-slate-100 hover:ring-1 duration-100 hover:ring-slate-400" onClick={toggle}>
                            Cancel
                        </button>
                        <div>
                            {state.title}
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}
