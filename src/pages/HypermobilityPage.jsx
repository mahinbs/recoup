import React from 'react'
import '../styles/hypermobility-preview.css'
import HypermobilityContent from '../components/hypermobility-page/HypermobilityContent'
import WhatsAppFloat from '../components/layout/WhatsAppFloat'

const HypermobilityPage = () => {
  return (
    <div className="hm-preview bg-surface min-h-screen text-slate-900 font-sans overflow-x-clip selection:bg-primary selection:text-white pb-8">
      <main>
        <HypermobilityContent />
      </main>
      <WhatsAppFloat />
    </div>
  )
}

export default HypermobilityPage
