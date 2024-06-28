import React, { useEffect, useState } from 'react';

function CollegeCard({ name, aidType, isNeedBlind = false, websiteUrl, aidUrl, logoUrl, children }) {
    return (
        <div>
            <div className='collegeCardWrap'>
                <img className='collegeCardLogo' src={`${logoUrl}`} alt={`${name}`} />
                <div className='collegeCardDetails'>
                    <a href={websiteUrl} className='collegeCardName'>
                        {name}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 3h-6.75M21 3v6.75M21 3l-8.25 8.25M9.4 3c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 6.04 3 7.16 3 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6v-1.1"/></svg>
                    </a>
                    <div className='collegeCardTagsWrap'>
                        <div className='collegeCardTag'>{aidType}</div>
                        {isNeedBlind && (
                            <div className='collegeCardTag'>Need Blind</div>
                        )}
                    </div>
                    <a href={aidUrl} className='collegeCardAidLink'>
                        Scholarships/Aid
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 3h-6.75M21 3v6.75M21 3l-8.25 8.25M9.4 3c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 6.04 3 7.16 3 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6v-1.1"/></svg>
                    </a>
                    <div>{children}</div>
                </div>
            </div>

        </div>
    );
  }

  interface College {
    name: string;
    aidType: string;
    children: string;
    websiteUrl: string;
    aidUrl: string;
    logoUrl: string;
    isNeedBlind: boolean;
  }

  export function CollegeListCards() {
    
    const [colleges, setColleges] = useState<College[]>([]);
  
    useEffect(() => {
      fetch('/json/colleges.json')
        .then(response => response.json())
        .then(data => setColleges(data));
    }, []);

    return (
        <div className='collegeCardsList'>
            {colleges.map((college) => (
                <CollegeCard
                    name = {college.name}
                    aidType = {college.aidType}
                    isNeedBlind = {college.isNeedBlind}
                    websiteUrl = {college.websiteUrl}
                    aidUrl = {college.aidUrl}
                    logoUrl = {college.logoUrl}>
                    {college.children}
                </CollegeCard>
            ))}
        </div>
    )
  }