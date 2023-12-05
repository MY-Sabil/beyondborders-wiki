import React from 'react'
import { MendableSearchBar } from '@mendable/search'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function SearchBarWrapper() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext()
  return (
    <div className="mendable-search">
      <MendableSearchBar
        anon_key={customFields.mendableAnonKey}
        style={{ accentColor: '#a9d3d6', darkMode: true }}
        placeholder="Search..."
        dialogPlaceholder="How to prepare for SAT?"
        showSimpleSearch
      />
    </div>
  )
}