export default function Footer() {
  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#comunidade', label: 'Comunidade' },
    { href: '#estatisticas', label: 'Resultados' },
  ]

  const socialLinks = [
    { href: 'https://discord.com/invite/DWj3QtgMbA', label: 'Discord', icon: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" /></svg> },
    { href: 'https://www.tiktok.com/@org.fish?is_from_webapp=1&sender_device=pc', label: 'TikTok', icon: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg> },
  ]

  return (
    <footer style={{ borderTop: '1px solid rgba(56,189,248,0.1)', padding: '3rem 2rem', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '1.1rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              ORG <span style={{ color: '#38BDF8' }}>FISH</span>
            </span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'rgba(240,237,232,0.35)', letterSpacing: '0.05em' }}>
            © 2026 ORG FISH. Todos os direitos reservados.
          </p>
          <p style={{ fontSize: '0.72rem', color: 'rgba(240,237,232,0.2)', marginTop: '0.35rem' }}>
            Apostas esportivas envolvem risco. Jogue com responsabilidade.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '2rem' }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              style={{ fontSize: '0.8rem', color: 'rgba(240,237,232,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Oswald, sans-serif', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#38BDF8'}
              onMouseLeave={e => e.target.style.color = 'rgba(240,237,232,0.4)'}
            >{l.label}</a>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {socialLinks.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener" aria-label={s.label}
              style={{ width: 34, height: 34, border: '1px solid rgba(74,74,90,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(240,237,232,0.4)', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#38BDF8'; e.currentTarget.style.color = '#38BDF8' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(74,74,90,0.6)'; e.currentTarget.style.color = 'rgba(240,237,232,0.4)' }}
            >{s.icon}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
