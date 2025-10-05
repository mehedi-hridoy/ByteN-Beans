import React from 'react'
import Cart from './Cart'

export default function Shop(){
  return (
    <div>
      <section className="py-8 bg-[var(--page-bg)]">
        <div className="grid-16">
          <div className="content-12 mx-auto w-full">
           
            <Cart embedded={true} banner={true} />
          </div>
        </div>
      </section>
    </div>
  )
}
