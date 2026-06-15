import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const socials = [
  {
    id: 'discord',
    name: 'Discord',
    desc: 'Servidor principal da ORG Canais organizados por categoria, eventos pix todo dia',
    href: 'https://discord.com/invite/DWj3QtgMbA',
    cta: 'Entrar no Servidor',
    color: '#5865F2',
    glow: 'rgba(88,101,242,0.08)',
    icon: <svg viewBox="0 0 24 24" fill="#5865F2" width="32" height="32"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>,
  },
  {
    id: 'TikTok',
    name: 'tiktok',
    desc: 'Toda Semana video novo, sobre eventos pix, e dicas para ganhar e farmar seus Aps',
    href: 'https://www.tiktok.com/@org.fish?is_from_webapp=1&sender_device=pc',
    cta: 'Acessar Canal',
    color: '#25D366',
    glow: 'rgba(37,211,102,0.08)',
    icon: <svg viewBox="0 0 24 24" fill="#38BDF8" width="32" height="32"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>,
  },
  {
    id: 'tiktok/2',
    name: 'TikTok-2',
    desc: 'Toda Semana video novo, sobre eventos pix, e dicas para ganhar e farmar seus Aps',
    href: 'https://www.tiktok.com/@orgfishoficial00?is_from_webapp=1&sender_device=pc',
    cta: 'Siga-nos no TikTok',
    color: '#38BDF8',
    glow: 'rgba(56,189,248,0.08)',
    icon: <svg viewBox="0 0 24 24" fill="#38BDF8" width="32" height="32"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>,
  },
]

function SocialCard({ s, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(56,189,248,0.4)' : 'rgba(74,74,90,0.5)'}`,
        padding: '2.5rem 2rem',
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.25rem',
        position: 'relative', overflow: 'hidden',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.3s',
      }}
    >
      {hovered && (
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at bottom left, ${s.glow}, transparent 70%)`, pointerEvents: 'none' }} />
      )}
      <div>{s.icon}</div>
      <div style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '1.4rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.name}</div>
      <p style={{ fontSize: '0.875rem', color: 'rgba(240,237,232,0.55)', lineHeight: 1.6, fontWeight: 300, flex: 1 }}>{s.desc}</p>
      <a href={s.href} target="_blank" rel="noopener" className="clip-skew-sm"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'Oswald, sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.6rem 1.25rem', background: 'transparent', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.4)', textDecoration: 'none', transition: 'all 0.25s' }}
        onMouseEnter={e => { e.currentTarget.style.background = '#38BDF8'; e.currentTarget.style.color = '#05101E' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#38BDF8' }}
      >{s.cta}</a>
    </motion.div>
  )
}

export default function Social() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="comunidade" style={{ position: 'relative', zIndex: 2, padding: '7rem 2rem', background: 'rgba(255,255,255,0.015)' }}>
      <div style={{ position: 'absolute', right: 0, top: '20%', width: 400, height: 400, background: 'radial-gradient(circle,rgba(56,189,248,0.06),transparent)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div ref={headerRef} initial={{ opacity: 0, y: 30 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: 40, height: 1.5, background: '#38BDF8' }} />
            <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#38BDF8' }}>Acesso direto</span>
          </div>
          <h2 style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1 }}>
            Nossas <span style={{ color: '#38BDF8' }}>Redes</span>
          </h2>
          <div style={{ width: 60, height: 2, background: '#38BDF8', margin: '1rem 0' }} />
          <p style={{ fontSize: '1rem', color: 'rgba(240,237,232,0.55)', maxWidth: 500, lineHeight: 1.7, fontWeight: 300 }}>
            Siga nossas redes sociais e fique por dentro de todas as novidades do nosso servidor !!!
          </p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.5rem' }}>
          {socials.map((s, i) => <SocialCard key={s.id} s={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
