import React from 'react';

export default function ProfileLeftBar() {
    return (
        <div className="profileLeftContainer">
            <h4 className="profileLeftTitle">User Information</h4>
                <div className="profileBio">
                    <div className="profileBioItem">
                        <span className="profileBioKey">Lives:</span>
                        <span className="profileBioValue">Fort Collins</span>
                    </div>
                    <div className="profileBioItem">
                        <span className="profileBioKey">From:</span>
                        <span className="profileBioValue">Danbury</span>
                    </div>
                    <div className="profileBioItem">
                        <span className="profileBioKey">Favorite Kicks:</span>
                        <span className="profileBioValue">Air Jordan 1 Bayou Boys</span>
                    </div>
                    <div className="profileBioItem">
                        <span className="profileBioKey">Grail Pair:</span>
                        <span className="profileBioValue">Air Jordan VIII Aqua</span>
                    </div>
                    <div className="profileBioItem">
                        <span className="profileBioKey">Current Earworm:</span>
                        <span className="profileBioValue">Durand Jones and the Indications - Smile</span>
                    </div>
                    <div className="profileBioItem">
                        <span className="profileBioKey">Grail Album:</span>
                        <span className="profileBioValue">Dion and The Belmonts</span>
                    </div>
                </div>
        </div>
    )
}