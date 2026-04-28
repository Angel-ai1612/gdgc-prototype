import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  ShieldCheck, AlertTriangle, XCircle,
  Download, Award, RefreshCw, CheckCircle
} from 'lucide-react'

const statusConfigs = {
  verified: {
    icon: CheckCircle,
    label: 'Verified',
    desc: 'This media appears to be authentic and unaltered.',
    color: 'var(--success)',
  },
  suspicious: {
    icon: AlertTriangle,
    label: 'Suspicious',
    desc: 'Some anomalies detected. Further review recommended.',
    color: 'var(--warning)',
  },
  fake: {
    icon: XCircle,
    label: 'Fake',
    desc: 'This media has been significantly altered or fabricated.',
    color: 'var(--danger)',
  },
}

export default function ResultPage() {
  const navigate = useNavigate()

  // Randomly pick a status for demo purposes
  const [status] = useState(() => {
    const statuses = ['verified', 'suspicious', 'fake']
    return statuses[Math.floor(Math.random() * statuses.length)]
  })

  const config = statusConfigs[status]
  const StatusIcon = config.icon

  // Generate mock metrics
  const [metrics] = useState(() => {
    const base = status === 'verified' ? 85 : status === 'suspicious' ? 50 : 15
    const r = () => Math.min(100, Math.max(0, base + Math.floor(Math.random() * 20 - 10)))
    return {
      authenticity: r(),
      sourceMatch: r(),
      tamperRisk: status === 'verified' ? 100 - r() : r(),
      metadata: status === 'fake' ? 'Altered' : status === 'suspicious' ? 'Partial' : 'Clean',
      aiProbability: status === 'fake' ? r() : Math.max(5, 100 - r()),
    }
  })

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Verification Result</h1>
        <p className="page-subtitle">Analysis complete — here's what we found</p>
      </div>

      {/* Status Card */}
      <div className={`result-status ${status}`}>
        <div className="result-status-icon">
          <StatusIcon size={40} />
        </div>
        <h2 style={{ color: config.color }}>{config.label}</h2>
        <p>{config.desc}</p>
      </div>

      {/* Metrics */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-card-value" style={{ color: metrics.authenticity >= 70 ? 'var(--success)' : metrics.authenticity >= 40 ? 'var(--warning)' : 'var(--danger)' }}>
            {metrics.authenticity}%
          </div>
          <div className="metric-card-label">Authenticity Score</div>
        </div>
        <div className="metric-card">
          <div className="metric-card-value" style={{ color: metrics.sourceMatch >= 70 ? 'var(--success)' : metrics.sourceMatch >= 40 ? 'var(--warning)' : 'var(--danger)' }}>
            {metrics.sourceMatch}%
          </div>
          <div className="metric-card-label">Source Match</div>
        </div>
        <div className="metric-card">
          <div className="metric-card-value" style={{ color: metrics.tamperRisk <= 30 ? 'var(--success)' : metrics.tamperRisk <= 60 ? 'var(--warning)' : 'var(--danger)' }}>
            {metrics.tamperRisk}%
          </div>
          <div className="metric-card-label">Tamper Risk</div>
        </div>
        <div className="metric-card">
          <div className="metric-card-value" style={{ color: metrics.metadata === 'Clean' ? 'var(--success)' : metrics.metadata === 'Partial' ? 'var(--warning)' : 'var(--danger)' }}>
            {metrics.metadata}
          </div>
          <div className="metric-card-label">Metadata Status</div>
        </div>
        <div className="metric-card">
          <div className="metric-card-value" style={{ color: metrics.aiProbability >= 70 ? 'var(--success)' : metrics.aiProbability >= 40 ? 'var(--warning)' : 'var(--danger)' }}>
            {metrics.aiProbability}%
          </div>
          <div className="metric-card-label">AI Probability</div>
        </div>
      </div>

      {/* Actions */}
      <div className="result-actions">
        <button className="btn btn-secondary">
          <Download size={16} /> Download Report
        </button>
        <button className="btn btn-primary">
          <Award size={16} /> Generate Certificate
        </button>
        <button className="btn btn-ghost" onClick={() => navigate('/app/verify')}>
          <RefreshCw size={16} /> Verify Another File
        </button>
      </div>
    </div>
  )
}
