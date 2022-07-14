import React, {Component} from 'react';
import './TopNav.css'
class TopNav extends Component {
    render() {
        return (
            <div className="h-20 border-y border-gray-500 flex flex-box">
                <button
                    className="flex my-5 ml-10 hoverbg text-xl rounded border border-gray-500 cursor-pointer focus:outline-none">
                    <p className="py-1 px-5 font-semibold">Create Project</p>
                </button>
            </div>
        );
    }
}

export default TopNav;