import { useState } from 'react'

const tabs = ['Profile', 'Notifications', 'Appearance', 'Security', 'Billing']

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Profile')

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Manage your account preferences</p>
      </div>

      <div className="settings-tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`settings-tab${activeTab === tab ? ' active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="settings-section">
        {activeTab === 'Profile' && (
          <>
            <h3>Profile Information</h3>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input className="form-input" defaultValue="Ayaan" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" defaultValue="ayaan@spoproof.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Organization</label>
              <input className="form-input" defaultValue="SpoProof Inc." />
            </div>
            <div className="form-group">
              <label className="form-label">Role</label>
              <input className="form-input" defaultValue="Administrator" />
            </div>
            <button className="btn btn-primary">Save Changes</button>
          </>
        )}

        {activeTab === 'Notifications' && (
          <>
            <h3>Notification Preferences</h3>
            <div className="settings-row">
              <div className="settings-row-left">
                <h4>Email Notifications</h4>
                <p>Receive verification results via email</p>
              </div>
              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider" />
              </label>
            </div>
            <div className="settings-row">
              <div className="settings-row-left">
                <h4>Alert Notifications</h4>
                <p>Get notified about high-risk content</p>
              </div>
              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider" />
              </label>
            </div>
            <div className="settings-row">
              <div className="settings-row-left">
                <h4>Weekly Reports</h4>
                <p>Receive a weekly summary of your activity</p>
              </div>
              <label className="toggle">
                <input type="checkbox" />
                <span className="toggle-slider" />
              </label>
            </div>
            <div className="settings-row">
              <div className="settings-row-left">
                <h4>Marketing Emails</h4>
                <p>Product updates and feature announcements</p>
              </div>
              <label className="toggle">
                <input type="checkbox" />
                <span className="toggle-slider" />
              </label>
            </div>
          </>
        )}

        {activeTab === 'Appearance' && (
          <>
            <h3>Appearance</h3>
            <div className="settings-row">
              <div className="settings-row-left">
                <h4>Dark Mode</h4>
                <p>Use dark theme across the application</p>
              </div>
              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider" />
              </label>
            </div>
            <div className="settings-row">
              <div className="settings-row-left">
                <h4>Compact View</h4>
                <p>Reduce spacing in tables and lists</p>
              </div>
              <label className="toggle">
                <input type="checkbox" />
                <span className="toggle-slider" />
              </label>
            </div>
            <div className="settings-row">
              <div className="settings-row-left">
                <h4>Animations</h4>
                <p>Enable motion and transition effects</p>
              </div>
              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider" />
              </label>
            </div>
          </>
        )}

        {activeTab === 'Security' && (
          <>
            <h3>Security</h3>
            <div className="form-group">
              <label className="form-label">Current Password</label>
              <input className="form-input" type="password" placeholder="••••••••" />
            </div>
            <div className="form-group">
              <label className="form-label">New Password</label>
              <input className="form-input" type="password" placeholder="••••••••" />
            </div>
            <div className="form-group">
              <label className="form-label">Confirm New Password</label>
              <input className="form-input" type="password" placeholder="••••••••" />
            </div>
            <button className="btn btn-primary" style={{ marginBottom: 32 }}>Update Password</button>

            <div className="settings-row">
              <div className="settings-row-left">
                <h4>Two-Factor Authentication</h4>
                <p>Add an extra layer of security to your account</p>
              </div>
              <label className="toggle">
                <input type="checkbox" />
                <span className="toggle-slider" />
              </label>
            </div>
            <div className="settings-row">
              <div className="settings-row-left">
                <h4>Login Alerts</h4>
                <p>Get notified of new device sign-ins</p>
              </div>
              <label className="toggle">
                <input type="checkbox" defaultChecked />
                <span className="toggle-slider" />
              </label>
            </div>
          </>
        )}

        {activeTab === 'Billing' && (
          <>
            <h3>Billing & Plan</h3>
            <div className="card" style={{ marginBottom: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 4 }}>Pro Plan</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>Unlimited verifications • Priority support • API access</p>
                </div>
                <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)' }}>$49<span style={{ fontSize: '0.85rem', fontWeight: 400, color: 'var(--text-muted)' }}>/mo</span></span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="btn btn-secondary">Change Plan</button>
              <button className="btn btn-ghost">View Invoices</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
