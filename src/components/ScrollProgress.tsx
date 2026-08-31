import { useScrollProgress } from '../hooks/useScrollProgress'

export default function ScrollProgress() {
  const progress = useScrollProgress()
  return <div className="progress" style={{ ['--p' as string]: progress.toFixed(4) }} aria-hidden="true"></div>
}
