import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Upload, Image, Video, Camera, FileText, Link as LinkIcon
} from 'lucide-react'
import axios from 'axios' // Import axios for API calls

const uploadTypes = [
  { id: 'image', label: 'Image', icon: Image },
  { id: 'video', label: 'Video', icon: Video },
  { id: 'screenshot', label: 'Screenshot', icon: Camera },
  { id: 'article', label: 'Article', icon: FileText },
  { id: 'url', label: 'URL', icon: LinkIcon },
]

const analysisSteps = [
  { title: 'Checking metadata...', subtitle: 'Extracting EXIF data and file properties' },
  { title: 'Scanning for edits...', subtitle: 'Analyzing pixel patterns and compression artifacts' },
  { title: 'Comparing sources...', subtitle: 'Cross-referencing with known databases' },
  { title: 'Generating report...', subtitle: 'Compiling results and calculating trust score' },
]

export default function VerifyPage() {
  const navigate = useNavigate()
  const [selectedType, setSelectedType] = useState('image')
  const [dragOver, setDragOver] = useState(false)
  const [file, setFile] = useState(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    setDragOver(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) setFile(droppedFile)
  }, [])

  const handleFileInput = (e) => {
    if (e.target.files[0]) setFile(e.target.files[0])
  }

  const handleAnalyze = () => {
    setAnalyzing(true)
    setCurrentStep(0)
    setProgress(0)

    let step = 0
    const interval = setInterval(() => {
      step++
      if (step < analysisSteps.length) {
        setCurrentStep(step)
        setProgress((step / analysisSteps.length) * 100)
      } else {
        clearInterval(interval)
        setProgress(100)
        setTimeout(() => {
          navigate('/app/result')
        }, 600)
      }
    }, 1200)
  }

  const handleChatWithGemini = async () => {
    try {
      const apiKey = 'AIzaSyDrQRGMsoz1ieWXPgyUG_eHEUZ7xYNU3y4';
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          contents: [
            {
              parts: [
                {
                  text: 'Hello! I want to discuss media verification and authenticity checking. Can you help me understand how to verify if this media content is genuine?'
                }
              ]
            }
          ]
        }
      );
      
      if (response.data.candidates && response.data.candidates.length > 0) {
        const reply = response.data.candidates[0].content.parts[0].text;
        alert(`Gemini: ${reply}`);
      } else {
        alert('No response from Gemini');
      }
    } catch (error) {
      console.error('Error chatting with Gemini:', error);
      alert('Failed to connect to Gemini. Please check your API key and try again.');
    }
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Verify Media</h1>
        <p className="page-subtitle">Upload sports media to check its authenticity</p>
      </div>

      {/* Upload Zone */}
      <div
        className={`upload-zone${dragOver ? ' drag-over' : ''}`}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-input').click()}
      >
        <input
          id="file-input"
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileInput}
          accept="image/*,video/*,.pdf,.doc,.docx"
        />
        <div className="upload-zone-icon">
          <Upload size={32} />
        </div>
        <h3>{file ? file.name : 'Drag & drop your file here'}</h3>
        <p>{file ? `${(file.size / 1024 / 1024).toFixed(2)} MB — Ready to analyze` : 'or click to browse files'}</p>
      </div>

      {/* Upload Type Selection */}
      <div className="upload-types">
        {uploadTypes.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`upload-type${selectedType === id ? ' selected' : ''}`}
            onClick={() => setSelectedType(id)}
          >
            <Icon size={16} /> {label}
          </button>
        ))}
      </div>

      {/* URL Input for URL type */}
      {selectedType === 'url' && (
        <div style={{ maxWidth: 600, margin: '24px auto 0' }}>
          <input
            className="form-input"
            placeholder="Paste media URL here..."
            onChange={() => setFile({ name: 'URL submission', size: 0 })}
          />
        </div>
      )}

      {/* Analyze Button */}
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <button
          className="btn btn-primary btn-lg"
          onClick={handleAnalyze}
          disabled={!file}
          style={{ opacity: file ? 1 : 0.5 }}
        >
          Analyze Now
        </button>
      </div>

      {/* Chat with Gemini Button */}
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <button
          className="btn btn-secondary btn-lg"
          onClick={handleChatWithGemini}
        >
          Chat with Gemini
        </button>
      </div>

      {/* Analysis Overlay */}
      {analyzing && (
        <div className="analysis-overlay">
          <div className="analysis-card">
            <div className="analysis-spinner" />
            <div className="analysis-step">
              {analysisSteps[currentStep]?.title}
            </div>
            <div className="analysis-substep">
              {analysisSteps[currentStep]?.subtitle}
            </div>
            <div className="analysis-progress">
              <div
                className="analysis-progress-bar"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
