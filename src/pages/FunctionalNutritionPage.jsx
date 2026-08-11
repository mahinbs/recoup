import React from 'react'
import '../styles/functional-nutrition-preview.css'
import FunctionalNutritionContent from '../components/functional-nutrition-page/FunctionalNutritionContent'
import WhatsAppFloat from '../components/layout/WhatsAppFloat'

const FunctionalNutritionPage = () => {
  return (
    <div className="fn-preview bg-surface min-h-screen text-slate-900 font-sans overflow-x-clip selection:bg-primary selection:text-white pb-8">
      <main>
        <FunctionalNutritionContent />
      </main>
      <WhatsAppFloat />
    </div>
  )
}

export default FunctionalNutritionPage
