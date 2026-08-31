import { useCountUp } from '../hooks/useCountUp'

export default function Stat({ target, prefix, label }: { target: number; prefix?: string; label: string }) {
  const { ref, display } = useCountUp(target, prefix)
  return (
    <div className="glass stat">
      <b ref={ref as React.RefObject<HTMLElement>}>{display}</b>
      <span>{label}</span>
    </div>
  )
}
