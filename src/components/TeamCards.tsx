import React from 'react';

// Simple ProfileCard component
function ProfileCard({ name, avatarUrl, githubUrl, facebookUrl, children }) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={`${avatarUrl}`}
              alt={`${name}'s avatar`}
            />
            <div className="avatar__intro">
              <h3 className="avatar__name">{name}</h3>
            </div>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {facebookUrl && (
              <a className="button button--secondary" href={facebookUrl} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            )}
            {githubUrl && (
              <a className="button button--secondary" href={githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple TeamRow component
export function SimpleTeamRow() {
  return (
    <div className="row">
      <ProfileCard
        name="Muhaiminul Yeamin"
        avatarUrl="https://images2.imgbox.com/60/2e/0yBbOLos_o.jpeg"
        githubUrl="https://github.com/MY-Sabil"
        facebookUrl="https://www.facebook.com/my.sabil4">
        Creator of Beyond Borders Wiki, Fall '25 Applicant
      </ProfileCard>
      <ProfileCard
        name="Zeehad AL Sheikh"
        avatarUrl="https://images2.imgbox.com/07/c2/fVWo2YPg_o.jpg"
        githubUrl="https://github.com/SheikhALZihad"
        facebookUrl="https://www.facebook.com/zeehadalsheikh">
        Fall '25 Applicant
      </ProfileCard>
      <ProfileCard
        name="Shadeed Ur Rahman Sreyash"
        avatarUrl="https://images2.imgbox.com/79/68/hsGU7CDf_o.jpg"
        githubUrl=""
        facebookUrl="https://www.facebook.com/Shadeedur">
        Fall '25 Applicant
      </ProfileCard>
      <ProfileCard
        name="Afra Saiara Ahmed"
        avatarUrl="https://thumbs2.imgbox.com/36/f9/k8pHCgmk_t.jpg"
        githubUrl=""
        facebookUrl="https://www.facebook.com/afra.saiara.ahmed.925">
        Fall '25 Applicant
      </ProfileCard>
    </div>
  );
}
