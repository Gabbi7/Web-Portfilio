import { profile } from '@/data/profile'
export function Portrait({ compact = false }: { compact?: boolean }) {
return <div className={compact ? 'portrait compact' : 'portrait'}>{profile.portrait ? <img src={profile.portrait} alt="Gavin Ralph S. Rama" width="320" height="384" /> : <div className="portrait-placeholder"><span>Professional photo</span><small>Awaiting supplied portrait</small></div>}</div>
}
