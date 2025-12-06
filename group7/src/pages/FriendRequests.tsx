import * as React from 'react'; 
import { useState } from 'react';

interface User {
    id: string | number;
    username: string;
    memberSince?: string;
    followerCount?: number;
    followingCount?: number;
    type: 'Request' | 'Friend' | 'Following';
}

type View = 'Friend' | 'Request' | 'Following';

const initialUsers: User[] = [
    { "id": "1", "username": "@AetherArt90", "memberSince": "2018-09-16", "followerCount": 546, "followingCount": 45, type: 'Request' },
    { "id": "2", "username": "@GalacticGenius", "memberSince": "2021-10-28", "followerCount": 457, "followingCount": 22, type: 'Request' },
    { "id": "3", "username": "@Nebula9087", "memberSince": "2024-11-02", "followerCount": 34, "followingCount": 2, type: 'Request' },
    { "id": "4", "username": "@Target9870", "memberSince": "2025-09-12", "followerCount": 345, "followingCount": 76, type: 'Request' },
    
    { "id": "9", "username": "@PixelPioneer", "memberSince": "2018-07-15", "followerCount": 234, "followingCount": 23, type: 'Friend' },
    { "id": "10", "username": "@EchoWanderer", "memberSince": "2020-02-28", "followerCount": 345, "followingCount": 34, type: 'Friend' },
    { "id": "11", "username": "@NovaNerd23", "memberSince": "2016-11-03", "followerCount": 235, "followingCount": 78, type: 'Friend' },
    { "id": "12", "username": "@Cosmic4890", "memberSince": "2021-09-12", "followerCount": 867, "followingCount": 67, type: 'Friend' },

    { "id": "13", "username": "@RiftRover94", "memberSince": "2017-09-16", "followerCount": 223, "followingCount": 34, type: 'Following' },
    { "id": "14", "username": "@DreamDrifter4", "memberSince": "2025-10-13", "followerCount": 864, "followingCount": 68, type: 'Following' },
    { "id": "15", "username": "@FilmLover124", "memberSince": "2022-12-02", "followerCount": 345, "followingCount": 521, type: 'Following' },
    { "id": "16", "username": "@Cinephile980", "memberSince": "2025-07-14", "followerCount": 34, "followingCount": 26, type: 'Following' },
];

interface FriendItemProps {
    user: User; 
    handleRequestAction: (user: User, type: 'Accept' | 'Decline') => void;
}

const FriendItem = ({ user, handleRequestAction }: FriendItemProps) => {
    
    const handleItemClick = (): void => {
     
    };

    const buttonStyle = {
        border: '1px solid black',
        padding: '5px 10px',
        cursor: 'pointer',
    };

    return (
        <div 
            onClick={handleItemClick} 
        >
            <div>
                <div>
                    <strong>{user.username}</strong>
                    {user.memberSince && <span> Since {user.memberSince}</span>}
                    <div>
                        Followers: {user.followerCount} Following: {user.followingCount}
                    </div>
                </div>

                {user.type === 'Request' && (
                   
                    <div onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                        <button
                            onClick={() => handleRequestAction(user, 'Accept')}
                            style={{ ...buttonStyle, marginRight: '10px' }}
                        >
                            Accept
                        </button>
                        <button
                            onClick={() => handleRequestAction(user, 'Decline')}
                            style={buttonStyle}
                        >
                            Decline
                        </button>
                    </div>
                )}
            </div>
            <hr />
        </div>
    );
};

export default function FriendsListApp() {
    const [currentView, setCurrentView] = useState<View>('Friend');
    const [searchQuery, setSearchQuery] = useState<string>(''); 
    const [currentData, setCurrentData] = useState<User[]>(initialUsers);

    const handleNavClick = (view: View): void => {
        setCurrentView(view);
        setSearchQuery('');
    };

    const handleRequestAction = (user: User, type: 'Accept' | 'Decline'): void => {
        
        setCurrentData(prevData => {
            if (type === 'Accept') {
                return prevData.map(u => 
                    u.id === user.id ? { ...u, type: 'Friend' } : u
                );
            } else {
                return prevData.filter(u => u.id !== user.id);
            }
        });
    };

    const lowerCaseSearch = searchQuery.toLowerCase();
    
    let filteredData = currentData.filter(user => user.type === currentView);

    if (searchQuery) {
        filteredData = filteredData.filter(user => 
            user.username.toLowerCase().includes(lowerCaseSearch)
        );
    }


    const NavButton = ({ viewName }: { viewName: View }) => (
        <button 
            onClick={() => handleNavClick(viewName)}
            // Retaining user-provided inline style
            style={{ marginRight: '5px' }} 
        >
            {viewName === 'Friend' ? 'Friends' : viewName === 'Request' ? 'Requests' : viewName}
        </button>
    );

    const getHeading = (view: View) => {
        switch (view) {
            case 'Friend':
                return 'Friends';
            case 'Request':
                return 'Requests';
            case 'Following':
                return 'Following';
            default:
                return 'Users';
        }
    }

    return (
        
        <div style={{ padding: '10px' }}>
            
            <div>
                
                <h1>Friends</h1>

                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="text"
                        placeholder="Search for People" 
                        value={searchQuery}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                        
                        style={{ border: '1px solid black', padding: '5px', width: '98%' }}
                    />
                </div>

               
                <nav style={{ marginBottom: '15px' }}>
                    <NavButton viewName="Friend" />
                    <NavButton viewName="Request" />
                    <NavButton viewName="Following" />
                </nav>

                <div>
                    
                    {searchQuery && filteredData.length === 0 ? (
                        <p>
                            {`No ${getHeading(currentView).toLowerCase()} found matching "${searchQuery}".`}
                        </p>
                    ) : (
                        <div>
                            {filteredData.length > 0 ? (
                                filteredData.map(user => (
                                    <FriendItem 
                                        key={user.id}
                                        user={user} 
                                        handleRequestAction={handleRequestAction}
                                    />
                                ))
                            ) : (
                                <p>
                                    {`You have no ${getHeading(currentView).toLowerCase()} yet.`}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}