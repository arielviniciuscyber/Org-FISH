export default function LogoIcon({ size = 42 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 42 42" fill="none">
      <polygon
        points="21,2 40,14 40,28 21,40 2,28 2,14"
        stroke="#38BDF8"
        strokeWidth="1.5"
        fill="rgba(56,189,248,0.06)"
      />
      <circle cx="21" cy="21" r="8" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
      <circle cx="17" cy="18" r="1.5" fill="#38BDF8" />
      <circle cx="25" cy="18" r="1.5" fill="#38BDF8" />
    </svg>
  )
}
