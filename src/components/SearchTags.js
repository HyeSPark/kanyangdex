/* eslint-disable */

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import '../SearchTags.css';

function SearchTags(props) {
    var [tagsActive, setTagsActive] = useState([]);
    var locList = props.locList;
    var checkIcon = <FontAwesomeIcon icon= {faCheck} />;
    // var lookList = props.lookList;
    function tagToggle(e) {
        var newArr = [...tagsActive];
        var res;
        if (tagsActive.includes(e.target.innerHTML)) {
            res = newArr.filter((el) => el != e.target.innerHTML);
        } else {
            newArr.push(e.target.innerHTML);
            res = newArr;
        }
        setTagsActive(res);
    }

    function checkTags(category, e) {
        var newArr = [...tagsActive];
        var selectedLocs = locList.filter((el) => el.category === category)[0].locs;
        if (selectedLocs.every(value => newArr.includes(value)) ) {
            setTagsActive(newArr.filter(value => !selectedLocs.includes(value)))
        } else {
            var union = new Set([...newArr, ...selectedLocs])
            setTagsActive([...union])
        }
    }
    
    return (
        <div href="" className="searchbox__detail">
            {locList.map(obj => (
                <div key={obj.id.toString()} className="searchtags__north"> 
                    <p>
                        <a href="#" className="seatchtags__cate unchecked" onClick={(e) => checkTags (obj.category, e)}>
                            <FontAwesomeIcon icon= {faCheck} /></a>
                        {obj.category}
                    </p> 
                    <ul className="searchtags__list"> 
                        {obj.locs.map(loc => (
                            <li key={loc}>
                                <a className={tagsActive.includes(loc)
                                    ? "searchtag searchtag__loc" + obj.id + " active"
                                    : "searchtag searchtag__loc" + obj.id} 
                                    href="#" onClick={tagToggle}>
                            {loc}</a></li> 
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default SearchTags;