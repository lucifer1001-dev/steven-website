type Props = { variant?: 'about' | 'skills' | 'experience' | 'contact' }

export default function PageBackground({ variant = 'experience' }: Props) {
  return <div className={`page-background page-background-${variant}`} aria-hidden="true"><div className="page-grid" /></div>
}
