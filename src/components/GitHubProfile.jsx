import React, { useState } from 'react';

const GithubProfile = () => {
  const [profile, setProfile] = useState(null);

  const handleClick = () => {
    const githubData = {
      login: "github-john-doe",
      id: 19842736,
      avatar_url: "https://avatars.githubusercontent.com/u/19842736?v=4",
      name: "John Doe",
      bio: "As we all know, John Doe's identity is unknown. I just wanted to contribute without being known.",
      followers: 16,
      following: 0,
      public_repos: 1,
      html_url: "https://github.com/github-john-doe"
    };
    setProfile(githubData);
  };

  return (
    <div>
      <button onClick={handleClick}>Afficher le Profil GitHub</button>
      {profile && (
        <div>
          <h2>{profile.name}</h2>
          <img src={profile.avatar_url} alt={`${profile.name}'s avatar`} />
          <p>{profile.bio}</p>
          <p>Followers: {profile.followers}</p>
          <p>Following: {profile.following}</p>
          <p>Public Repos: {profile.public_repos}</p>
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer">Voir le Profil GitHub</a>
        </div>
      )}
    </div>
  );
};

export default GithubProfile;