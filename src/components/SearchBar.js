import React from 'react';
import { HiMiniBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";

class SearchBar extends React.Component {
    state = { inputSearch: '' }

    onInputChange = event => {
        this.setState(
            { inputSearch: event.target.value }
        )
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.inputSearch);
    }

    render() {
        return (
            <div className="searchbar">
                <div className='bar'>
                    <HiMiniBars3 />
                </div>
                <form onSubmit={this.onFormSubmit} className="search">
                    <div className='exact_search'>
                        <input type="text"
                            value={this.state.inputSearch}
                            placeholder="Search"
                            onChange={this.onInputChange} />
                        <div className='sicon'>
                            <CiSearch />
                        </div>
                    </div>
                </form>
                <div className='channel_main'>
                    <div className='prof-icon'>
                        <IoVideocamOutline />
                    </div>
                    <div className='prof-icon'>
                        <GoBell />
                    </div>
                    <div className='profile'></div>
                </div>
            </div>
        )
    }
}

export default SearchBar;