"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import styles from "./ValentineAnimation.module.css"

export default function ValentineAnimation() {
  const containerRef = useRef(null)
  const quoteRef = useRef(null)
  useEffect(() => {
    const container = containerRef.current
    const quote = quoteRef.current

    gsap.set(container, { scale: 0, opacity: 0 })
    gsap.set(quote, { opacity: 0, y: 20 })

    const tl = gsap.timeline()

    tl.to(container, {
      scale: 1,
      opacity: 1,
      duration: 2,
      ease: "elastic.out(1, 0.5)",
    }).to(quote, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    })
  }, [])

  return (
    <div className={styles.valentineContainer}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.glass}>
          <div className={styles.shine}></div>
        </div>
        <div className={styles.thorns}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.leaves}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.petals}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.deadPetals}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <p ref={quoteRef} className={`${styles.quote}  max-sm:text-[10px]`}>
        "Batane ki baat to nahi hai, 
Par....<br></br>
batane dogi kya? 
<br></br>
Ishq bepanah hai tumse, 
Ek bar... <br></br><br></br>
 jatane dogi kya? 

Tum titli, 
tum pahad, 
tum asmaan ho mera.......... 

Ek dibiya me,
sindoor rakha hai mere pass. 
Tum... 
lagane dogi kya?"
      </p>
    </div>
  )
}

